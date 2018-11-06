---
layout: page
title: Blog
permalink: /blog/
ref: blog
lang: en
---

<ul class="post-list">
  {% assign posts=site.posts | where:"lang", page.lang | sort: 'date' | reverse %}
  {% for post in posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <a class="heading-page" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>

        <div class="excerpt">{{ post.content | strip_html | truncatewords:10 }}</div>
    </li>
  {% endfor %}
</ul>
