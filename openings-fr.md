---
layout: page
title: Ouvertures
permalink: /ouvertures/
ref: openings
lang: fr
---

<ul class="post-list">
  {% assign openings=site.openings | where:"lang", page.lang | sort: 'date' | reverse %}
  {% for opening in openings %}
    <li>
      <span class="post-meta">{{ opening.date | date: "%b %-d, %Y" }}</span>

        <a class="heading-page" href="{{ opening.url | prepend: site.baseurl }}">{{ opening.title }}</a>

        <div class="excerpt">{{ opening.content | strip_html | truncatewords:30 }}</div>
    </li>
  {% endfor %}
</ul>
