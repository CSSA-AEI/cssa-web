import os
import shutil
import datetime

path = "/Users/kris/Documents/CSSA/cssa-web/cssa.aei/" # path for the folder containing all the files, unsorted
new_path =  ""

file_sameness = 19 # Number of beginning of characters that the files share
files = [file for file in os.listdir(path) if not os.path.isdir(path+file[:19])] # puts all the filenames into a list, excludes current folders


files_copy = files.copy()
files_grouped = {} # will group the files into a dictionary with the date being the key and a list of names the values

for file in files:
    if "20" not in file: #checks to make sure it is a valid file and not a .DS_STORE
        continue
    file_group = []
    file_date = file[:file_sameness]
    for f in files_copy: # Groups the files with the same date into one list
        if  f[:file_sameness] == file_date:
            file_group.append(f)

    if file_group != []: 
        files_grouped[file_date] = file_group
    files_copy = [x for x in files_copy if x not in file_group] # deletes the files already in a group from the larger list copy


for date, names in files_grouped.items():
    #if os.path.isdir(old_path+date):
     #   continue
    os.mkdir(path+date)
    for name in names:
        og_path = path + name
        new_path = f"{path}{date}/{name}"
        shutil.move(og_path, new_path)



