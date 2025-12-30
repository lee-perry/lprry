---
title: Using Microformats with Bear
bear: /using-microformats-with-bear
date: 2025-07-11
description: Discussing implementation of microformats on my bearblog project.
cover: /assets/images/56.webp
tags: ['bearblog', 'indieWeb', 'microformats']
---

Microformats are tiny snippets of class data within html return author, title, date and content to indieWeb tools that rely on microformats to obtain structured data about your content for use elsewhere.  

Pretty abstract for the most part, but important if you want to participate directly in the IndieWeb as my [main site](https://lee-perry.co.uk) does.

The first problem that I solved last night was to create the h-card on my homepage, which is a short introduction to your site.  This was easy, and worked immediately, inserting the following code into the 'home' section:

```
<div class="h-card">
  <a class="h-card p-name u-url" href="https://l33.co.uk/" rel="me" style="display: none;">Lee Perry</a>
  <p class="p-note"><img src="https://bear-images.sfo2.cdn.digitaloceanspaces.com/leeperry/header.webp" class="u-photo u-featured" style="max-width: 50%; border-radius: 20px; float: right; margin-left: 20px; margin-bottom:20px; border: 2px solid whitesmoke" alt="">Burnley based, I run, ride online, climb rocks and mountains, and explore the world in our motorhome with my Social Secretary, Vickie.<br><br>Expect lots of talk about running, virtual cycling on my Wattbike Atom (NG), Burnley FC, retrogaming and code.  Accompanied by lots of cute photographs of our podenco oriented spaniel infiltrated family. Find out what I'm up to <a href="/now/">now</a></p>	
</div>
```

![Screenshot from the front page of my Bear website showing my h-card ash the top of the page](/assets/images/47.webp)

Easy enough so far, but my first real frustrations with bear were about to begin.  As far as I can tell the only difference between the themes available in Bear is the css applied to them, so it would be super simple to make microformats work out of the box.

I very quickly came up with a way through the post template to implement microformats, but that is exposed in the post editor for every post, which is ugly.  I had hoped to insert the opening tags into the header settings, and information and closing tags into the footer settings.  This did not work though, header settings insert in the `<head>` section of the html, and there is no obvious way to control the appearance of the footer settings on pages that are not posts.

For now I have inserted the opening tags at the top of the post editor.

```
<article class="h-entry">
  <div class="e-content">
```

And I have created an information section at the bottom of the post template (with closing `article` and `div` tags in the footer).  

```
<p>#<span class="p-name">{{ post_title }}</span> <a href="{{ post_link }}" class="u-url"><time datetime="{{ post_published_date }}" class="dt-published">{{ post_published_date }}</time></a> by <a href="/" rel="author" class="h-card p-author">Lee Perry</a> last updated: {{ post_last_modified }} ago.</p>
```

So the lovely plaintext markdown view now looks like this:

![Screenshot showing the bear post editor with microformats code above and below](/assets/images/36-1.webp)

Not as obtrusive as my earlier attempts, but I dislike this and it could be a dealbreaker with either microformats coming out, or this site not being viable beyond this experiment.  

![Screenshot showing a post on this website passing the h-entry tests on indiewebify](/assets/images/56.webp)

The good news is that the site now passes the microformats tests on [indiewebify](indiewebify.me) - but I do need to work out whether I can live with that, or without microformats.  
