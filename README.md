# CSSA-WEB
Main website for CSSA-AEI

# Install
To install this, you will need Ruby and Jekyll installed. For more information you can view [Jekyll](https://jekyllrb.com/)'s page.

After installing:
1. Open the folder in terminal
2. Enter this statement `bundle exec jekyll serve`
3. You can then view the site locally at http://127.0.0.1:4000/cssa-web

# Making posts, pages & events
To make posts, pages, and events we use markdown. If you need help writing markdown, you can view the [cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Making posts
For posts, [Jekyll](https://jekyllrb.com/docs/posts/) has a great documentation for it. However, keep in mind the custom header we have which is displayed below. You also want to make sure that the file name of the post follows this format `YEAR-MONTH-DAY-title.md` and placed in the `_post` folder.

```
---
layout: post
title:  TITLE OF POST
ref: REF OF POST
date:   DATE OF POST (EX. 2016-02-29 09:48:44 +0100)
categories: jekyll update
lang: EN OR FR (Use according to the language you are going to write in)
---
```

Also for each post, you will need to make 2 files (one for English and one for French). Make sure that the `ref` is the same as the French post as well and vice versa. The `ref` will also have to be unique. So make sure not to duplicate or else that will cause issues.

Once you are done with making changes to the header, you can write the rest of the content using markdown syntax.

## Making pages

For pages, it is very similar to writing a post and Jekyll also has a great documentation for it. However, also keep in mind the custom headers we have. The pages do not have any folder for you to put them in, so you can leave them in the main directory. The file name will look something like this: `page-name.md`

```
---
layout: page
title: PAGE NAME FOES HERE
permalink: /POST-LINK-GOES-HERE/
ref: REF OF PAGE
lang: EN OR FR (Use according to the language you are going to write in)
---
```

Also for each page, you will need to make 2 files (one for English and one for French). Make sure that the `ref` is the same as the French page as well and vice versa. The `ref` will also have to be unique. So make sure not to duplicate or else that will cause issues.

Once you are done with making changes to the header, you can write the rest of the content using markdown syntax.

## Making events
For events, this is a custom collection that ws created for the CSSA. It follows the same structure as a page and post. However, there is a folder for all the events to go into and the folder is called `_events`. There will be a header at the top that will look like this: 

```
---
layout: event
title: EVENT NAME
cost: COST OF EVENT
location: LOCATION OF EVENT
time: TIME OF EVENT
facebooklink: FACEBOOK LINK TO EVENT
ref: REF OF EVENT
date:  DATE OF EVENT (EX. 2016-02-29 09:48:44 +0100)
lang: EN OR FR (Use according to the language you are going to write in)
permalink: /events/TITLE OF EVENT
---
```
Make sure to go through the header and make the neccessary changes. Once that's done you can write the rest of the content using markdown syntax.

Also for each event, you will need to make 2 files (one for English and one for French). Make sure that the `ref` is the same as the French event as well and vice versa. The `ref` will also have to be unique. So make sure not to duplicate or else that will cause issues.


