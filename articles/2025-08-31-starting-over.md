---
title: Starting Over
bear: /2025-08-31-starting-over
date: 2025-08-31
tags: ['code', 'html', 'scrimba']
---

I have been learning to write code on and off for over a decade now, making plenty of progress along the way, but rarely with sufficient consistency to make it 'stick'.  Certainly not adequate to build any of the projects that I would like to build.

That inconsistency, combined with being fairly/partly proficient, makes it really difficult to just pick up a MOOC course and follow it through from the beginning.  It's pretty boring relearning simple concepts to pick up the 2% that you may not know or that has changed.

I'm going to try just that though.  I've had a Scrimba subscription for a number of years, have always enjoyed the program, but have struggled to maintain progress for a variety of reasons, many external to the learning itself.  Scrimba have also recently introduced the back end to create a full-stack learning path for the first time too.

So I've cleared my course and submission history, starting over from the beginning.  I'll be blogging about the journey here, partly to consolidate learning, partly to keep myself accountable, and part about rebelling against use of big tech, and finding alternatives where appropriate.

I completed the Intro to HTML module in the HTML and CSS Fundamentals course today.  The assignment at the end of the module is to create a personal website, though really this task is html only - the stylesheet is provided and controlled by variables.

Here is the html that I provided to meet the design specification:

```
<!doctype html>
<html>
	<head>
		<link rel="stylesheet" href="styles.css" />
		<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Black+Ops+One&family=Creepster&family=La+Belle+Aurore&family=MedievalSharp&family=Orbitron&family=Rye&display=swap" rel="stylesheet">
		<script src="index.js"></script>
	</head>
	<body>
		<!-- 
		Challenge 1:
		Write the HTML for your personal website.
		-->
		<img src="lee.webp" alt="">
		<h1>Hi, my name is Lee</h1>
		<h2>Fun facts about me:</h2>
		<ul>
			<li>I watch Burnley FC</li>
			<li>I write about playing old video games</li>
			<li>I build things with code for fun</li>
		</ul>
		<p>Please connect with me on mastodon <a href="https://prry.uk/@lee" target="_blank">here</a>.</p>
		<input type="text" placeholder="Enter email...">
		<button>Join newsletter</button
	</body>
</html>
```
The output is shown below, although the styling was largely provided I think this shows how minimal code is required to create something like a personal linktree page.

![Screenshot of a personal website with avatar, key interests, and follow buttons](/assets/images/48.webp)

The Scrimba curriculum uses Github and Netlify, neither fit well with trying to find privacy conscious EU based alternatives to big tech.  So I have set myself up with a couple of alternatives for the first time.  I am trying out [Codeberg](https://codeberg.org) in place of Github, and [Statichost](https://statichost.eu) in place of Netlify.

So far everything has gone to plan, and though this initial exercise deploys manually rather than from codeberg, I have my SSH keys setup ready and verified in codeberg ready to use.

View the project on Statichost [here](https://scrimba-personal-website.statichost.eu/)

