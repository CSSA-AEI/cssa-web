---
layout: page
title: Opportunités
permalink: /opportunites/
ref: opportunities
lang: fr
---

<ul class="post-list">
  {% assign opportunities=site.opportunities | where:"lang", page.lang | sort: 'date' | reverse %}
  {% for opportunity in opportunities %}
    <li>
      <span class="post-meta-2">{{ opportunity.type }}</span>
      <span class="post-meta">{{ opportunity.date1 | date: "%b %-d, %Y" }}</span>

      <span class="post-meta">{{ opportunity.date2 | date: "%b %-d, %Y" }}</span>

        <a class="heading-page" href="{{ opportunity.url | prepend: site.baseurl }}">{{ opportunity.title }}</a>

        <div class="excerpt">{{ opportunity.content | strip_html | truncatewords:30 }}</div>
    </li>
  {% endfor %}
</ul>