---
title: Setting a favicon and site logo in Bear
bear: /setting-a-favicon-and-site-logo-in-bear
date: 2025-07-11
description: Setting the favicon on my Bear blog site to an existing png file
cover: 35.webp
tags: ['bearblog', 'indieweb']
---
Setting a personalised favicon for your website is one of the features that can help your site's tab stand out in the browser for the reader.  I designed a wee favicon for my website a while back.  I'm not especially creative, so while it might not be particularly special, I wanted to see if I could work out how to use it.

It was easy enough.  As I am experimenting with a paid bear plan[^1] I can insert media, so on the home tab of the bear dashboard I have used the insert media link to upload my icon, and from there copied the url into the `meta_image` property in the frontmatter:

![Screenshot of the Bear 'home' dashboard with favicon url pointing towards an uploaded file](/assets/images/59.webp)

I didn't really expect this to work, partly as the upload had converted the file to webp- but I flicked across to Vivaldi, and sure enough my logo appeared at the top of the tab.

I then thought that it would be really cool to replace my site name at the top of the page with my logo, as it appears in my existing design.  I failed to come up with a decent css replacement method to achieve that so instead I used css to hide display of the title class:

```
.title {
  display: none;
}
```

Then I used html to insert the same logo into the beginning of the navigation menu, linking through to the homepage, and providing a class for styling.

```
<a href="/"><img src="https://bear-images.sfo2.cdn.digitaloceanspaces.com/leeperry/favicon.webp" alt="logo" class="logo"></a> [Home](/) [Blog](/blog/) [Now](/now)
```

Here is the result, the end of my first session looking at styling in Bear.

![Screenshot showing my site logo appearing both in the browser tab, and at the front of my navigation menu](/assets/images/35.webp)

In my next update I'll look at adding an h-card to the home page in bear, to identify the site on the indieWeb.

[^1]: A paid plan is necessary to upload media to Bear.