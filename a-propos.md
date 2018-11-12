---
layout: page
title: À propos
ref: about
lang: fr
---
Nous nous appellons l’Association d’étudiants en Informatique (AÉI) de l’Université d’Ottawa. Gouverné par la constitution de l’université, nous sommes responsables pour la gestion de tout les resources disponsibles pour les membres de la programme baccaleauréate de l’université d’Ottawa en informatique. Nous sommes devoué à vous fournissons des programmes sociales, services académiques, et opportunités d’emploi. Ainsi, notre but est à établir un communauté stable entre nos étudiants, professeurs et autres membres du département avec ces évènements et services. 

Voyez notre constitution en anglais [ici.]({{ site.url }}/2017-2018-cssa-constitution.pdf) Nous sommes désolés de vous dire que nous sommes en train de traduire notre constitution en français.

##  L'équipe 2018-2019

<ul>
{% for member in site.data.executives %}
    <li>{{ member.position.[page.lang] }}: {{ member.name.[page.lang] }} </li>
    <ul>
        <li><a href="mailto:{{ member.contact.[page.lang] }}">{{ member.contact.[page.lang] }}</a></li>
    </ul>
{% endfor %}
</ul>

## Le bureau
Notre bureau est situé à <b>SITE 4076</b>, n'hésitez pas à passer. Nos heures de bureau auront lieu là-bas.

## Office Hours

{% for member in site.data.executives %}
<b>{{ member.name.[page.lang] }}:</b> {{ member.office-hours.[page.lang] }}
{% endfor %}
