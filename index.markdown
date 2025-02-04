---
layout: home
title: Bienvenido a mi Portfolio
---

¡Hola! Soy [Tu Nombre], un desarrollador apasionado por [breve descripción de tus intereses]. Este es mi espacio para compartir mis proyectos y reflexiones sobre tecnología.

## Mis Proyectos Destacados

- [Proyecto 1](/portfolio/#proyecto-1)
- [Proyecto 2](/portfolio/#proyecto-2)

## Últimos Posts

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}<