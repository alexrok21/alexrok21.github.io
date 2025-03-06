---
layout: page
title: Blog
permalink: /blog/
---

<h2>Últimas publicaciones</h2>

<div class="blog-list">
  {% for post in site.posts %}
    <div class="blog-card {% if post.image %}has-image{% endif %}">
      <!-- Contenido principal (izquierda) -->
      <div class="blog-content">
        <a href="{{ post.url }}" class="blog-title">{{ post.title }}</a>
        <div class="blog-meta">
          <span class="date"><i class="fas fa-calendar-alt"></i> {{ post.date | date: "%Y-%m-%d" }}</span>
          <span class="category"><i class="fas fa-folder-open"></i> {{ post.category }}</span>
          <span class="tags"><i class="fas fa-hashtag"></i> {{ post.tags | join: " / " }}</span>
        </div>
        <p class="blog-description">{{ post.excerpt }}</p>
        <div class="blog-stats">
          <span>{{ post.content | number_of_words }} words</span> | <span>{{ post.read_time }} minutes</span>
        </div>
        <!-- Flecha solo si no hay imagen -->
        {% unless post.image %}
          <a href="{{ post.url }}" class="read-arrow read-arrow-text">
            <i class="fas fa-arrow-right"></i>
          </a>
        {% endunless %}
      </div>

      <!-- Imagen (derecha) -->
      {% if post.image %}
        <div class="blog-image-container">
          <img src="{{ post.image }}" alt="{{ post.title }}" class="blog-image">
          <a href="{{ post.url }}" class="read-arrow read-arrow-image">
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      {% endif %}
    </div>

{% endfor %}

</div>
