---
layout: page-archive
title: Archive
permalink: /archive/
ref: archive
lang: en
---
# Meeting Minutes 
You can access our meeting minutes for the two latest executive terms below:
<div class="page_grid">
    <details> 
        
        <summary><h2>Meeting Minutes</h2></summary>

        <h2>
            <a href="https://drive.google.com/drive/u/1/folders/1Wr3UTq4kh9pEseFfk8hpMOwYWqX9DErt" target="_blank">2021 - 2022</a>
        </h2>

        <h2>
            <a href="https://drive.google.com/drive/folders/1Bbn_NNVZM16kkxMNMAi51HkJn7QumebX?usp=sharing" target="_blank">2020 - 2021</a>
        </h2>

        <h2>
            <a href="https://drive.google.com/drive/folders/1BzZRzVJMVP12D6vQ_4O1513n0J19O4hE?usp=sharing" target="_blank">2019 - 2020</a>
        </h2>

    </details>
    <details>
        
        <summary><h2>Blog</h2></summary>

        <ul class="post-list">
          {% assign posts=site.archived_posts | where:"lang", page.lang | sort: 'date' | reverse %}
          {% for post in posts %}
            <li>
              <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

                <a class="heading-page" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>

                <div class="excerpt">{{ post.content | strip_html | truncatewords:10 }}</div>
            </li>
          {% endfor %}
        </ul>
    </details>
</div>

