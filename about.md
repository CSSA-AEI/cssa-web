---
layout: page
title: About
permalink: /about/
ref: about
lang: en
---

We, the Computer Science Student Association (CSSA) of the University of Ottawa, provide by this Constitution an organization dedicated to the pursuit of obtaining and managing resources for all members of the undergraduate Computer Science community at the University of Ottawa. We are also dedicated to providing social programming, academic services and employment resource opportunities to all our members. We are dedicated to fostering a sense of community among students, professors and members of the computer science department through these events and services.

View our constitution in English [here.]({{ site.url }}/2017-2018-cssa-constitution.pdf) We are working on the French translation for our constitution.

## The office
Our office is located at <b>SITE 4076</b>, feel free to stop by.

## The Team 2018-2019

<section class="post-feed">
	{% for member in site.data.executives %}
	<a class="post-card" href="mailto:{{ member.contact.[page.lang] }}">
		<header class="post-card-header">
			<div class="post-card-image" style="background-image: url(&quot;/images/team/{{member.photo}}&quot;);"></div>
			<div class="post-card-tags"></div>
			<h2 class="post-card-title">{{ member.position.[page.lang] }}: {{ member.name.[page.lang] }}</h2>
		</header>
		<section class="post-card-excerpt">
			<p>{{ member.contact.[page.lang] }}</p>
		</section>
	</a>
	{% endfor %}
</section>