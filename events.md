---
layout: page
title: Events
permalink: /events/
ref: blog
lang: en
---

<ul class="post-list">
  {% assign events=site.events | where:"lang", page.lang %}
  {% for event in events %}
    <li>
      <span class="post-meta">{{ event.date | date: "%b %-d, %Y" }}</span>

        <a class="heading-page" href="#">{{ event.title }}</a>

        <div class="excerpt">{{ event.content | strip_html | truncatewords:30 }}</div>
    </li>
  {% endfor %}
</ul>
