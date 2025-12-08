---
title: Training Log - Swims
layout: /layouts/page.html
cover: header.webp
---
<h1>My Swimming Activities</h1>

[🏃‍♂️Runs](/runs) | [🚴‍♂️Rides](/rides) | [🏊‍♂️Swims](/swims) | [🧗‍♂️Climbs](/climbs) | [⚖️Weigh-ins](/weigh-in)

<ul class="embedded blog-posts">
{% for activity in collections.training-log reversed %}
	{% if activity.data.type == "swim" %}
 <li>
   {{ activity.date | date: "%Y-%m-%d" }} <a href="{{ activity.url }}">{% if activity.data.type == "ride" %}🚴‍♂️ {% endif %}{% if activity.data.type == "run" %}🏃‍♂️ {% endif %}{% if activity.data.type == "swim" %}🏊‍♂️ {% endif %}{% if activity.data.type == "climb" %}🧗‍♂️ {% endif %} ⏰{{ activity.data.time }} 📏{{ activity.data.distance }}km {% if activity.data.type == "run" %} ⏱️{{ activity.data.pace }}min/km {% endif %} 🛫{{ activity.data.climb }}m+ ❤️‍🔥{{ activity.data.hr }}bpm {% if activity.data.type == "ride" %} 🪫{{ activity.data.w }}w {% endif %} 🧁{{ activity.data.kcal }}kcal</a>
 </li>
	 {% endif %}
{% endfor %}
</ul>