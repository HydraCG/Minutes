---
layout: default
title: Teleconference Minutes
---

<h1>Hydra W3C Community Group Teleconference Minutes</h1>
<p>The public Hydra W3C CG teleconferences and all of the decisions made in those
    meetings are listed below. Each link takes you to the full text and,
    if available, the audio recording of the meeting. There's a separate
    <a href="how-to.html">page describing how to attend or run a conference call</a>.</p>
<ul>

    {% assign pages = site.pages | sort: 'date' | reverse  %}
    {% for page in pages %}
    {% if page.date %}
    <li><a href="{{ page.url }}">Minutes for {{ page.date }}</a>
        <ul>
            {% for resolution in page.resolutions %}
            <li>RESOLVED: {{ resolution }} [<a href="{{ page.url }}#resolution  -{{ forloop.index }}">permalink</a>]</li>
            {% endfor %}

            {% for resolution in page.actions %}
            <li>ACTION: {{ resolution }} [<a href="{{ page.url }}#action-{{ forloop.index }}">permalink</a>]</li>
            {% endfor %}
        </ul>
    </li>
    {% endif %}
    {% endfor %}

</ul>
