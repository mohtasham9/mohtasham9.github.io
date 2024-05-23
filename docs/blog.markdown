---
layout: default
title: Blog
---

# Blog

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-item">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="excerpt">{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
