---
title: Boids
description: Web implementation of the classic bird flocking simulation, used in computer graphics
url: https://boids.tom-b.dev
image: "./project-boids-thumbnail.png"
---

_Boids_ is a classic [artificial life algorithm](https://en.wikipedia.org/wiki/Boids) that emulates the flocking behaviour of birds (or fish, actually a lot of nature). It's cool how a fairly simple set of rules, followed by each _boid_, produces this more complex(-seeming?) thing.

<br />

The 3 rules are _Cohesion_, boids stick with eachother; _Separation_, boids try not to get too close and _Alignment_, boids try to fly in the same direction. From these primitive behaviours emerges seemingly complex group behaviour. There's also a velocity limit to stop them tending to infinity and some bounding rules to keep them from flying off-screen.

<br /> 

Hit the Play button to view my crude TypeScript implementation - now in 3D! This uses WebGL which is sadly not mobile-friendly, a future expansion might be to support 2D and 3D so mobile users can see at least something.
The code is open-source [on GitHub](https://github.com/tomblacknell/boids/).