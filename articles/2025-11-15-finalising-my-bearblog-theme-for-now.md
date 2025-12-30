---
title: Finalising my bearblog theme. For now...
date: 2025-11-15
cover: /assets/images/38-2.webp
description: Having spent the last few weeks of my bearblog project focusing on function, I used the first day of my long weekend to complete the first iteration of my theme, here's a run through of the changes.
bear: /finalising-my-bearblog-theme-for-now
tags: ['bearblog', 'indieWeb']
---
I've been experimenting with bearblog for the last month, trying to see if I could find a leaner way to do what my [Kirby CMS](https://lee-perry.co.uk) site does in a leaner way, but without introducing complicated build cycles so that I can still write effectively on the go.

I had largely achieved that, using the tag structure to recreate article, note, snap, clip and other content types, custom post lists to index those types, and setting the post template to not be discoverable to avoid spamming the bearblog discover timeline with my training data and other errata.

I enjoyed it so much that I took a little time out to build a project for my wife to use to chronicle her misadventures with wool (aka her knitting problem) - [craftedbypanda.co.uk](https://craftedbypanda.co.uk), training her in use of markdown could be interesting.

![Screenshot 2025-11-15 at 11](/assets/images/38-2.webp)

I was not completely happy with how graphical post types rendered, or with some aspects of the custom post lists, but I had an idea that I could resolve most of those in the css.

On the post lists I started by removing the list bullet styling, and removing the indentation to set the content inline with the headings above - I think that looks far better now.

## Data

My lists of posts displaying data were annoying me though, due to all of the content being out of line due to varying character widths.  I tried using a monospace font on these lists, which worked fine, but the spaces in dates looked disproportionately large.  I spotted that the dates in [Robert Birming](https://robertbirming.com)'s Bearly theme rendered basically how I wanted mine to - so I borrowed the following code from that which essentially sets monospace numbers, with defined width gaps in between.  When looking at [ride](/rides), [run](/runs) and [weigh-in](/weigh-ins) pages in particular, it is now much easier to compare data across lines.

```
font-variant-numeric: tabular-nums;
letter-spacing: 0.02em;
```

I was happy with the improvement, which I have now applied to all date rendering on the site.

<div class="snaps-horizontal">

![Screenshot 2025-11-14 at 22](/assets/images/48-1.webp)
![Screenshot 2025-11-14 at 21](/assets/images/16-1.webp)

</div>

## Snapwall
I'd also had in mind that I wanted to display lists of image posts as a gallery making more use of the white space across the screen.  I set the lists to display as inline blocks, introducing a linebreak between the data and title to create that effect, with three posts to each line on the big screen.

<div class="snaps-horizontal">

![Screenshot 2025-11-14 at 21](/assets/images/31-1.webp)
![Screenshot 2025-11-14 at 21](/assets/images/35-1.webp)

</div>

```
.snaps ul {
  margin: 0 auto;
  text-align: left;
}

.snaps li {
  display: inline-block;
  vertical-align: top;
  text-wrap: wrap;
  text-align: left;
}

.snaps ul li span {
  display: table; 
}

.snaps ul li img {
  width: 291px; 
  margin-bottom: 20px;
}
```

## Image Galleries
Having done that, I thought it would be useful to be able to display images within posts two wide, again to make better use of page space on large screens, which I have completed by creating a div of an appropriate class to embed the images within.

I also then introduced a little scale-transform into the galleries to allow the reader to zoom on the image by hover or selection.

<div class="snaps-horizontal">

![Screenshot 2025-11-14 at 22](/assets/images/27-1.webp)
![Screenshot 2025-11-14 at 22](/assets/images/41-1.webp)

</div>

```
.snaps-horizontal img {
  width: 440px; 
  margin-bottom: 20px;
}

.snaps-horizontal img:hover, .snaps-horizontal img:focus {
  transform: scale(1.75);
  transform-origin: left;
}
```

## Vertical Galleries
I'd also been planning to do something similar for pictures taken in portrait resolution, which rendered especially badly on horizontal screen views, and here they are now set to display three images side by side in that orientation, using the same technique.

![Screenshot 2025-11-14 at 22](/assets/images/23.webp)

## Wishlist
I think at this point the first stage of my project is complete, my website looks broadly how I want it to, I have webmentions both sending and displaying. I still have many of the content section pages to build out, and the usual meta/slash pages to add, which I can take my time over..

There are a few things that I cannot control that I need for this build not to become unwieldy / unmanageable as the site grows:

1. The ability to paginate the bearblog custom posts lists.  This will allow my content type listings to scale without needing to load all of the content, but more contentfull than the [default bear archives](/all).  This sounds trivial, but it is really import to me because I want to be able to go to the page for one of our canine children, and be able to see all their image posts in an imagewall - the page size will grow to become unmanageable without being able to paginate.
2. The ability to introduce code immediately after the opening main tag and before the closing main tag - similar to the header footer directives.  That would help to tidy up my webmention implementation immensely, making the writing experience much warmer in the process.
3. The custom post lists can currently be built using comma delimited composites, this would be strengthened by being able to specify alternatives, and would make it much easier to build some of the dynamically populated pages that I want to, without managing (and remembering) a ridiculous number of tags.

That's enough words about tinkering with my blog rather than writing on it for one day.  Will I continue with my BearBlog experiment? I probably will, I much prefer the writing experience (can't really tell you why!).  I might have to turn echofeed off while loading historic content though, I wasn't really expecting the posts I migrated from my other BearBlog experiments to be syndicated back out to Mastodon over the weekend (aoplogies for that).

Until next time...