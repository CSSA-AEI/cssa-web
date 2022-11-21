#!/bin/zsh

cd ~/documents/CSSA/

source env/bin/activate

cd cssa-web

instaloader --latest-stamps time.ini cssa.aei  

cd scripts/profile_scraper

python3 Sorter.py

cd ../yaml_writer

python3 yamler.py

