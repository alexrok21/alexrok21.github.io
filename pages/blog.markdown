---
layout: page
title: Blog
permalink: /blog/
---

<div class="blog-list">
  {% for post in site.posts %}
    <div class="blog-card {% if post.image %}has-image{% endif %}">
      <!-- Contenido principal (izquierda) -->
      <div class="blog-content">
        <a href="{{ post.url }}" class="blog-title">{{ post.title }}</a>
        <!-- En el archivo blog.markdown -->
        <div class="blog-meta">
          <span class="date"><i class="fas fa-calendar-alt"></i> {{ post.date | date: "%Y-%m-%d" }}</span>
          <span class="category">
            <i class="fas fa-folder-open"></i> {{ post.category }}
          </span>
          <span class="tags">
            <i class="fas fa-hashtag"></i> 
            {% for tag in post.tags %}
              {{ tag }}
              {% unless forloop.last %} / {% endunless %}
            {% endfor %}
          </span>
        </div>
        <p class="blog-description">{{ post.excerpt }}</p>
        <div class="blog-stats">
          <span>{{ post.content | number_of_words }} words</span> | <span>{{ post.read_time }} minutes</span>
        </div>
      </div>

      <!-- Flecha para posts sin imagen -->
      {% unless post.image %}
      <div class="blog-image-container">
        <a href="{{ post.url }}" class="read-arrow read-arrow-text">
          <i class="fas fa-angle-right"></i>
        </a>
      </div>
      {% endunless %}

      <!-- Imagen (derecha) -->
      {% if post.image %}
        <div class="blog-image-container">
          <img src="{{ post.image }}" alt="{{ post.title }}" class="blog-image">
          <a href="{{ post.url }}" class="read-arrow read-arrow-image">
            <i class="fas fa-angle-right"></i>
          </a>
        </div>
      {% endif %}
    </div>

{% endfor %}

</div>
