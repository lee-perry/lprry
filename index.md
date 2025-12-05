---
title: Home
layout: layouts/page.html
---

<img src="/assets/images/header.webp" alt="Me, surrounded by dogs on the sofa" class="header-img" >

Welcome to my site!  I live in Burnley, UK, with my wife Victoria, our canine children, and our hens.

On this site I write notes and longer articles about learning to code, exploring, following [Burnley FC](/burnley-fc) around the country, and [training](/training-log) and [racing](/archive?q=race).  I snap images along the way, that appear in my dedicated snaps section.  I also record all of my training, [run](/runs), [ride](/rides) and [weigh-in](/weigh-ins) data.

## Topics

<nav>

[<i class="ph ph-code"></i> ](/code) [<i class="ph ph-dog"></i> ](/dogs) [<i class="ph ph-plant"></i> ](/grow) [<i class="ph ph-soccer-ball"></i> ](/football) [<i class="ph ph-van"></i> ](/exploring)[<i class="ph ph-book"></i> ](/reading) [<i class="ph ph-television"></i> ](/watching) [<i class="ph ph-guitar"></i> ](/vinyl)

</nav>

## Latest Articles

<ul class="embedded blog-posts">
{% for item in collections.articles reversed %}
 <li>
   {{ item.date | date: "%Y-%m-%d" }} - <a href="{{ item.url }}">{{ item.data.title }}</a>
 </li>
{% endfor %}
</ul>

[View all articles](/articles)

## Latest Notes
<ul class="embedded blog-posts">
{% for item in collections.notes reversed %}
 <li>
   {{ item.date | date: "%Y-%m-%d" }} - <a href="{{ item.url }}">{{ item.data.title }}</a>
 </li>
{% endfor %}
</ul>

[View all microposts](/notes)

## Latest Training
<ul class="embedded blog-posts">
{% for activity in collections.training-log reversed %}
 <li>
   {{ activity.date | date: "%Y-%m-%d" }} <a href="{{ activity.url }}">{% if activity.data.type == "ride" %}🚴‍♂️ {% endif %}{% if activity.data.type == "run" %}🏃‍♂️ {% endif %}{% if activity.data.type == "swim" %}🏊‍♂️ {% endif %}{% if activity.data.type == "climb" %}🧗‍♂️ {% endif %}{{ activity.data.time }} {{ activity.data.distance }}km {% if activity.data.type == "run" %}{{ activity.data.pace }}min/km {% endif %}{{ activity.data.climb }}m+ {{ activity.data.hr }}bpm {% if activity.data.type == "ride" %}{{ activity.data.w }}w {% endif %}{{ activity.data.kcal }}kcal</a>
 </li>
{% endfor %}
</ul>

[View all training data](/training-log) | [Runs by Route](/regular-running-routes)


## Latest Images
<!--<div class="snaps"> -->

<ul class="embedded blog-posts">
{% for item in collections.snaps reversed %}
 <li>
   {{ item.date | date: "%Y-%m-%d" }} - <a href="{{ item.url }}"> {{ item.data.title }}</a>
 </li>
{% endfor %}
</ul>
<!-- </div> -->

[View all imageposts](/snaps)

## Latest Clip

<ul class="embedded blog-posts">
{% for item in collections.clips reversed %}
 <li>
   {{ item.date | date: "%Y-%m-%d" }} - <a href="{{ item.url }}">{{ item.data.title }}</a>
 </li>
{% endfor %}
</ul>

[View all clips](/clips)
