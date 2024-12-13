---
layout: layouts/weeknote.njk
title: "Week One"
description: "Getting stuck in and on algortihms, reexploring thinking computationally, being frustrated with
resources."
social_img: 
    url: "https://the-public-domain-review.imgix.net/collections/paul-nash-s-genesis/2-The-Face-of-the-Waters.jpg"
    alt: Paul Nash The face of the Water from the Genesis series
tags: weeknotes
---

## Thoughts

- Solving algorithms has reminded me of my love for programming. I haven't programmed anything, beyond some
    JavaScript tutorials here and there, in a really long time. I enjoy it, I find it stimulating (if not demoralising
    at times).
- I hate to say it but using AI as a kind of mentor has been helpful. It's been really hard trying to find anyone in
  Europe to mentor me spesifically in browser engineering, so the AI helps. Somethings the AI has helped with:
  - Creating a 6 month roadmap of concepts I should learn to get into browser engineering.
  - Exercises to practice algorithms at my level.
  - Exercises to practice C++ concepts, e.g. I have a list of exercises to practice creating classes which also
    covers inheritence and polymorphism.
- Codecademy is in the business of selling dreams & I think it's quite immoral. I struggle to see how any of their 
  courses can make you ready for the job market.

## What I Covered

- This week I learnt about source files, headers and classes in C++. Ruby has classes and object oriented
  programming so that wasn't new to me, but files and headers were. I refactored my basic algos into their own files
  and included the headers into main.
- Fibonacci got me stumped. Not so much the formula, but Project Euler's Even Fibonacci Numbers problem. I was 
  really close to solving it and spent days thinking about it before giving up and looking at a solution. I was 
  really close but there's a gap in my understanding about recursion. This was my first attempt:

  

{%highlight cpp%}
    int sumFib(int n) {
      int sum = 0;
      int i = 2;
      while (i < 4000000) {
        int x = sumFib(n-1) + sumFib(n-2);
        if (x % 2 == 0) {
          sum += x;
        }
        ++i;
      }
      return sum;
    }
{%endhighlight%}
  
- `` `x` `` is never going to be what I expect it to be though because of the recursion. I know I need to capture the 
  value and update the values. The solution I found does this:


{%highlight cpp%}
    int sumFib(int a, int b){
        if (a > 4000000) {
            return 0;
        }
        if (a % 2 == 0) {
            return a + sumFib(b, a+b);
        }
        return sumFib(b, a +b);
    }
{%endhighlight%}

- The second `` `if` `` statement is where I was fumbling, instead of trying to store the sum at a particular 
  point to evaluate it, I should have evaluated something that's static at some point during the program. Even 
  though `` `a` `` is a variable, I can trust that with each run of the program it holds the same value until I 
  update it.