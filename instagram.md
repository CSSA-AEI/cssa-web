---
layout: page
title: Instagram 
permalink: /instagram/
ref: instagram
lang: en
---


<section class="post-feed">
	{% for post in site.data.IG_posts reversed %}
	<a class="post-card">
		<header class="post-card-header">
        
			<div class="post-card-image" style="background-image: url(&quot;/cssa.aei/{{post.post.date_time}}/{{post.post.photos[0]}}&quot;);"></div>
			<div class="post-card-tags"></div>
			<h2 class="post-card-title">{{ post.post.caption }}<br/>IG Post</h2>
            <p> /cssa.aei/{{post.post.date_time}}/{{post.post.photos[0]}}</p>
		</header>
		
	</a>
	{% endfor %}
</section>
