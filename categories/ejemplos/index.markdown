```markdown
layout: category
category_name: Ejemplos
title: Categoría: Ejemplos

<h2>Posts en la categoría "{{ page.category_name }}"</h2>
<div class="blog-list">
  {% for post in site.categories[page.category_name] %}
    <div class="blog-card">
      <a href="{{ post.url }}" class="blog-title">{{ post.title }}</a>
      <div class="blog-meta">
        <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
      </div>
    </div>
  {% endfor %}
</div>
```
