---
layout: page
title: Instagram 
ref: instagram
lang: fr 
---


<section class="post-feed">
	{% for post in site.data.IG_posts reversed %}
	<a class="post-card">
		<header class="post-card-header">
			<div class="post-card-image" style="background-image: url(&quot;/cssa.aei/{{post.post.date_time}}/{{post.post.photos[0]}}&quot;);"></div>
			<div class="post-card-tags"></div>
			<h4 class="post-card-title">{{ post.post.[page.lang] }}</h4>
        </header>
		
	</a>
	{% endfor %}
</section>
