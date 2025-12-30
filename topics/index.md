---
title: Topics
layout: /layouts/page.html
cover: /assets/images/header.webp
---
{% assign sortedTopics = collections.topics | sort: 'data.subject' %}

<h1>Topics</h1>
{% for topic in sortedTopics %}<a href="/topics/{{ topic.data.subject }}">{{ topic.data.subject-pretty }}</a> {% endfor %}


