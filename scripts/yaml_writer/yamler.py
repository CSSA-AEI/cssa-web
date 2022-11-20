import yaml
import os
from langdetect import detect
from text_separator import text_separator

file_path = "/Users/kris/Documents/CSSA/cssa-web/_data/IG_posts.yml"
post_path = "/Users/kris/Documents/CSSA/cssa-web/cssa.aei/"


def split_text(text_path):
    with open(text_path,'r') as file:
        text_list = file.read()
        if text_list==None:
            return {'en':'',"fr":''}
    caption={'en':'',"fr":""}
    for text in text_separator(text_list):
        if text == '':
            continue
        try:
            if detect(text) == 'en':
                caption['en'] += text
                print('en','\n')
            elif detect(text) == 'fr':
                caption['fr'] += text
                print('fr','\n')
        except:
            continue
    return caption



with open(file_path,'r') as doc:
    folders_in_yaml = yaml.full_load(doc)
   
post_folders = sorted([folder for folder in os.listdir(post_path) if (os.path.isdir(post_path+folder))])
#folder not in folders_in_yaml and 
posts = []

for folder in post_folders:
    #if folder in folders_in_yaml.keys():
     #  continue
    files = os.listdir(post_path+folder)
    
    date_time = {'date_time': folder}
    text_file = next((text for text in files if '.txt' in text),'')
    #print(post_path+folder+'/'+text_file)
    
    if text_file!='':
        caption = split_text(post_path+folder+'/'+text_file)

    else: 
        caption = {'en':'','fr':''}

    
    photos = {'photos': [photo for photo in sorted(files)  if ".jpg" in photo]}
    
    post = {'post':dict(**date_time,**caption,**photos)}
    posts.append(post)
#posts.update(folders_in_yaml)

with open(file_path,'w') as doc:
    yaml.dump(posts,doc)


