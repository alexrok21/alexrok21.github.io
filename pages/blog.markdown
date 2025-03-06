---
layout: page
title: Blog
permalink: /blog/
---

<h2>Últimas publicaciones</h2>

<div class="blog-list">
  {% for post in site.posts %}
    <div class="blog-card">
      <a href="{{ post.url }}" class="blog-title">{{ post.title }}</a>
      <div class="blog-meta">
        <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
        <span class="category">{{ post.category }}</span>
      </div>
      <p class="blog-description">{{ post.excerpt }}</p>
      <div class="blog-stats">
        <span>{{ post.content | number_of_words }} words</span> | <span>{{ post.read_time }} minutes</span>
      </div>
      <a href="{{ post.url }}" class="read-more-btn">Read more</a>
    </div>
  {% endfor %}
</div>
