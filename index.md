---
title: lprry's IndieWeb home
layout: layouts/page.html
description: Burnley based, I talk about learning code and the indieWeb, staying fit by running, cycling, swimming and bouldering, retrogaming, our allotment, and life with our dogs and chickens.
cover: /assets/images/header.webp
---

<img src="/assets/images/header.webp" alt="Me, surrounded by dogs on the sofa" class="header-img" >

Welcome to my site!  I live in Burnley, UK, with my wife Victoria, our canine children, and our hens.

On this site I write notes and longer articles about learning to code, exploring, following [Burnley FC](/topics/burnleyfc) around the country, and [training](/training-log) and [racing](/topics/race).  I snap images along the way, that appear in my dedicated snaps section.  I also record all of my training, [run](/runs), [ride](/rides), [swim](/swims), [climb](/climbs) and [weigh-in](/weigh-in) data.

## Topics

<nav>

[<i class="ph ph-code" aria-label="Code Archive"></i> ](/topics/code) [<i class="ph ph-dog" aria-label="Dogs Archive"></i> ](/topics/dogs) [<i class="ph ph-plant" aria-label="Allotment Archive"></i> ](/topics/allotment) [<i class="ph ph-soccer-ball" aria-label="Football Archive"></i> ](/topics/football) [<i class="ph ph-van" aria-label="Exploring Archive"></i> ](/topics/exploring)[<i class="ph ph-book" aria-label="Reading Archive"></i> ](/topics/reading) [<i class="ph ph-television" aria-label="TV and Film archive"></i> ](/topics/watched) [<i class="ph ph-guitar" aria-label="Music Archive"></i> ](/topics/vinyl)

</nav>

## Latest Articles
{% assign latestArticles = collections.articles | reverse | slice: 0, 5 %}
<ul class="embedded blog-posts">
{% for item in latestArticles %}
 <li>
   {{ item.date | date: "%Y-%m-%d" }} - <a href="{{ item.url }}">{{ item.data.title }}</a>
 </li>
{% endfor %}
</ul>

[View all articles](/articles)

## Latest Notes
<ul class="embedded blog-posts">
{% assign latestNotes = collections.notes | reverse | slice: 0, 5 %}
{% for item in latestNotes %}
 <li>
   {{ item.date | date: "%Y-%m-%d" }} - <a href="{{ item.url }}">{{ item.data.title }}</a>
 </li>
{% endfor %}
</ul>

[View all microposts](/notes)

## Latest Training
<ul class="embedded blog-posts">
{% assign latestTraining = collections.training-log | reverse | slice: 0, 5 %}
{% for activity in latestTraining %}
 <li>
   {{ activity.date | date: "%Y-%m-%d" }} <a href="{{ activity.url }}">{% if activity.data.type == "ride" %}🚴‍♂️ {% endif %}{% if activity.data.type == "run" %}🏃‍♂️ {% endif %}{% if activity.data.type == "swim" %}🏊‍♂️ {% endif %}{% if activity.data.type == "climb" %}🧗‍♂️ {% endif %}{{ activity.data.time }} {% if activity.data.type != "climb" %}{{ activity.data.distance }}km {% endif %}{% if activity.data.type == "run" %}{{ activity.data.pace }}min/km {% endif %}{% if activity.data.type != "climb" %}{{ activity.data.climb }}m+ {% endif %}{{ activity.data.hr }}bpm {% if activity.data.type == "ride" %}{{ activity.data.w }}w {% endif %}{{ activity.data.kcal }}kcal</a>
 </li>
{% endfor %}
</ul>

[View all training data](/training-log) | [Runs by Route](/regular-running-routes)


## Latest Images
<div class="snaps">

<ul class="embedded blog-posts">
{% assign latestSnaps = collections.snaps | reverse | slice: 0, 9 %}
{% for item in latestSnaps %}
 <li>
    <time datetime="">{{ item.date | date: "%Y-%m-%d" }}</time><br>
    <a href="{{ item.url }}">{{ item.data.title }}</a><br>
     <a href="{{ item.url }}"><img src="{{ item.data.cover }}" alt="item.data.cover_alt"></a>   
 </li>
{% endfor %}
</ul>
</div>

[View all imageposts](/snaps)

## Latest Clip

<ul class="embedded blog-posts">
{% assign latestClips = collections.clips | reverse | slice: 0, 1 %}
{% for item in latestClips %}
 <li>
   {{ item.date | date: "%Y-%m-%d" }} - <a href="{{ item.url }}">{{ item.data.title }}</a>
   {{ item.content }}
 </li>
{% endfor %}
</ul>

[View all clips](/clips)
