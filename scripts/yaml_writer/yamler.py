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
            elif detect(text) == 'fr':
                caption['fr'] += text
        except:
            continue
    return caption



with open(file_path,'r') as doc:
    current_file = yaml.full_load(doc)

folders_in_yaml = set()

for  object in current_file:
    folders_in_yaml.add(object['post']['date_time']) 

post_folders = sorted([folder for folder in os.listdir(post_path) if (os.path.isdir(post_path+folder) and folder not in folders_in_yaml)])
posts = []

for folder in post_folders:
    files = os.listdir(post_path+folder)
    
    date_time = {'date_time': folder}
    text_file = next((text for text in files if '.txt' in text),'')
    
    if text_file!='':
        caption = split_text(post_path+folder+'/'+text_file)

    else: 
        caption = {'en':'','fr':''}

    
    photos = {'photos': [photo for photo in sorted(files)  if ".jpg" in photo]}
    
    post = {'post':dict(**date_time,**caption,**photos)}
    posts.append(post)
#posts.update(folders_in_yaml)

posts[0:0] = current_file

with open(file_path,'w') as doc:
    yaml.dump(posts,doc)


