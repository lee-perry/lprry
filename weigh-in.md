---
title: Weigh-in Data
layout: layouts/page.html
description: Data rendered from a simple json file showing changes in my weight and body composition over time. 
cover: header.webp
---
<h1>{{ title }}</h1>

[🏃‍♂️Runs](/runs) | [🚴‍♂️Rides](/rides) | [🏊‍♂️Swims](/swims) | [🧗‍♂️Climbs](/climbs) | [⚖️Weigh-ins](/weigh-in)

<p>{{ description }}
<ul class="embedded blog-posts">
{% for check in weigh-ins.checks %}<li><time>{{ check.date }}</time> - ⚖️{{ check.weight }} 🍖{{ check.body-fat }} 💪{{ check.muscle }} 💧{{ check.hydration }} 📉{{ check.bmi }} BMI</li>{% endfor %}
</ul>