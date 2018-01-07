---
layout: page
title: Events
permalink: /events/
ref: events
lang: en
---
<ul class="post-list">
{% assign events=site.events | where:"lang", page.lang %}
{% for event in events limit:5 %}
  <li>
    <span class="event-meta">{{ event.date | date: "%b %-d, %Y" }}</span>

      <a class="heading" href="{{ event.url | prepend: site.baseurl }}">{{ event.title }}</a>

      <div class="excerpt">{{ event.content | strip_html | truncatewords:30 }}</div>
  </li>
{% endfor %}
</ul>
