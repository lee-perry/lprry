---
title: Scrimba Business Card Project
bear: /2025-09-05-scrimba-business-card-project
date: 2025-09-05
description: Illustrating my Scrimba Business Card project
cover: 17-1.webp
tags: ['css', 'code', 'html', 'scrimba']
---

When I wrote my first article on this site [last week](https://code.prry.uk/starting-over/) I explained that I had decided to work back through the Scrimba curriculum from the beginning to try to really master the basics before moving forwards to more complicated projects.I also explained that I was trying to complete the project with alternatives to big tech - Codeberg and Statichost.

This first exercise builds a simple html and css business card, customised on the back of a walk through project.  The project uses flexbox to split the images and content onto separate columns.  I always struggle to remember flexbox, though it seems straightforward, splitting the direct children of the flexbox container into columns.

![Screenshot showing a business card with a styled avatar image and information about my interests on blue and claret.](/assets/images/17-1.webp)

The main changes that I made to the project where the introductions of a slight border-radius to the card, another to the avatar, and a light text shadow.  Obviously I also introduced a slight claret and blue Burnley color palette too.

This was the first project that I had deployed to Statichost via Codeberg replacing the Github via Netlify workflow in Scrimba.  It worked fine other than needing to enter my Codeberg credentials - I think I cloned via HTTPS rater than SSH, so hopefully this will just work in the next project.

[Codeberg Repo](https://codeberg.org/leeperry/scrimba-business-card.git) | [Deployment](https://leeperry-scrimba-business-card.statichost.eu/)

The fixed width avatar seems to be being vertically stretched as the card lengthens on my deployment - I'll need to look into how to control that.

Until the next time...