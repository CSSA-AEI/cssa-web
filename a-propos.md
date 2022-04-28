---
layout: page
title: À propos
ref: about
lang: fr
---
Nous nous appellons l’Association d’étudiants en Informatique (AÉI) de l’Université d’Ottawa. Gouverné par la constitution de l’université, nous sommes responsables pour la gestion de tout les resources disponsibles pour les membres de la programme baccaleauréate de l’université d’Ottawa en informatique. Nous sommes devoué à vous fournir des programmes sociales, services académiques, et opportunités d’emplois. Ainsi, notre but est d'établir une communauté stable entre nos étudiant(e)s, professeur(e)s et autres membres du département avec ces évènements et services. 

Voyez notre constitution en anglais [ici.]({{ site.url }}/2018-2019-cssa-constitution.pdf) Nous sommes désolés de vous dire que nous sommes en train de traduire notre constitution en français.

## Le bureau
Notre bureau est situé à <b>SITE 4076</b>, n'hésitez pas à passer.

##  L'équipe éxécutive 2020 - 2021


<section class="post-feed">
	{% for member in site.data.executives %}
	<a class="post-card" href="mailto:{{ member.contact }}">
		<header class="post-card-header">
			<div class="post-card-image" style="background-image: url(&quot;/images/team/{{member.photo}}&quot;);"></div>
			<div class="post-card-tags"></div>
			<h2 class="post-card-title">{{ member.position.[page.lang] }}<br/>{{ member.name }}</h2>
		</header>
		<section class="post-card-excerpt">
			<p>{{ member.contact }}</p>
		</section>
	</a>
	{% endfor %}
</section>
