---
layout: page
title: Événements
permalink: /evenements/
ref: events
lang: fr
---

<ul class="event-list-page">
  {% assign events=site.events | where:"lang", page.lang | sort: 'date' %}
  {% for event in events %}
    <li>
      <div>
        <span class="post-meta">{{ event.date | date: "%b %-d, %Y" }} @ {{ event.time }}</span>

          <a class="heading" href="{{ event.permalink | prepend: site.baseurl }}">{{ event.title }}</a>
      </div>

      <div>
        <span class="event-info">{{ site.cost[page.lang] }}: {{ event.cost }}</span>
        <span class="event-info">{{ site.location[page.lang] }}: {{ event.location }}</span>
        <span class="fb-link"><a href="{{ event.facebooklink }}">{{ site.facebook-link[page.lang]}}</a></span>
      </div>

        <div class="excerpt">{{ event.content | strip_html | truncatewords:30 }}</div>
    </li>
  {% endfor %}
</ul>
