#!/bin/zsh

cd ~/documents/CSSA/

source env/bin/activate

cd cssa-web

#instaloader profile --no-profile-pic -C 1 cssa.aei  

cd scripts/profile_scraper

python3 Sorter.py

cd ../yaml_writer

python3 yamler.py

