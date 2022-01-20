---
layout: page
title: Opportunities
permalink: /opportunities/
ref: opportunities
lang: en
---

<ul class="post-list">
  {% assign opportunities=site.opportunities | where:"lang", page.lang | sort: 'date' | reverse %}
  {% for opening in opportunities %}
    <li>
      <span class="post-meta">{{ opening.date | date: "%b %-d, %Y" }}</span>

        <a class="heading-page" href="{{ opening.url | prepend: site.baseurl }}">{{ opening.title }}</a>

        <div class="excerpt">{{ opening.content | strip_html | truncatewords:30 }}</div>
    </li>
  {% endfor %}
</ul>
