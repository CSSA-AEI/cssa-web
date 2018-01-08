---
layout: page
title: Events
permalink: /events/
ref: blog
lang: en
---

<ul class="event-list-page">
  {% assign events=site.events | where:"lang", page.lang %}
  {% for event in events %}
    <li>
      <div>
        <span class="post-meta">{{ event.date | date: "%b %-d, %Y" }} @ {{ event.time }}</span>

          <a class="heading" href="{{ event.permalink | prepend: site.baseurl }}">{{ event.title }}</a>
      </div>

        <div>
          <span class="event-info">Cost: {{ event.cost }}</span>
          <span class="event-info">Location: {{ event.location }}</span>
          <span class="fb-link"><a href="{{ event.facebooklink }}">Facebook Event</a></span>
        </div>

        <div class="excerpt">{{ event.content | strip_html | truncatewords:30 }}</div>
    </li>
  {% endfor %}
</ul>
