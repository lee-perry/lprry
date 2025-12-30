---
title: Training Log - Bouldering
layout: /layouts/page.html
cover: /assets/images/header.webp
---
<h1>My Bouldering Activities</h1>

[🏃‍♂️Runs](/runs) | [🚴‍♂️Rides](/rides) | [🏊‍♂️Swims](/swims) | [🧗‍♂️Climbs](/climbs) | [⚖️Weigh-ins](/weigh-in)

<ul class="embedded blog-posts">
{% for activity in collections.training-log reversed %}
	{% if activity.data.type == "climb" %}
 <li>
   {{ activity.date | date: "%Y-%m-%d" }} <a href="{{ activity.url }}">{% if activity.data.type == "ride" %}🚴‍♂️ {% endif %}{% if activity.data.type == "run" %}🏃‍♂️ {% endif %}{% if activity.data.type == "swim" %}🏊‍♂️ {% endif %}{% if activity.data.type == "climb" %}🧗‍♂️ {% endif %} ⏰{{ activity.data.time }}{% if activity.data.type != "climb" %} 📏{{ activity.data.distance }}km {% if activity.data.type == "run" %} ⏱️{{ activity.data.pace }}min/km {% endif %} 🛫{{ activity.data.climb }}m+ {% endif %}❤️‍🔥{{ activity.data.hr }}bpm {% if activity.data.type == "ride" %} 🪫{{ activity.data.w }}w {% endif %} 🧁{{ activity.data.kcal }}kcal</a>
 </li>
	 {% endif %}
{% endfor %}
</ul>