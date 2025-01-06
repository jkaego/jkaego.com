---
layout: layouts/weeknote.njk
title: "Variables and Iterators"
description: "Understanding referencing, why you'd const a reference and iterating over associative containers."
social_img:
    url: "https://the-public-domain-review.imgix.net/collections/nos-invisibles/BSG_FOLRSUP15RES_0017.jpeg?w=600&h=1200&auto=format,compress"
    alt: "Raffaele Mainella’s Swirling Galaxy from his Illustrations for Nos Invisibles (1907)"
tags: weeknotes
---

Happy 2025!

I started the year off strong, revisiting lectures I covered last year and delving deeper into C++.

## Thoughts

- I’ve fine-tuned my resources to be as simple as possible and only expanding where I’m learning from when I have a 
  specific question. At the moment, I’m mainly following the Stanford CS106L course (the lectures are on YouTube) and the associated reader.
- Notion as a way to schedule, track and take notes on what I’m learning is so, so useful.
- My priority while I’m reading/watching is to engage by noting down questions, pausing to try and explain things in my own words and testing out theories in code. I’m enjoying this way of learning more than the guided way via Codecademy.

## What I Covered

This list isn’t exhaustive, I’ve been introduced to a number of topics and ideas, but here are some that stood out to me for whatever reason.

### Const Referencing

- Last year I learned that `` `const` `` made variables read-only, I also “learned” that referencing make variables mutable, so I was confused about why you’d want to pass a const referenced variable to a function e.g. `` `int increment(const int& n)` `` but this is because I misunderstood what a reference actually is.
- When passing a variable to a function you can either make a copy of the variable and use the copy in the function, or reference the actual variable and use the actual variable in the function.
    - A reference to a variable is a pointer to the memory address of the variable, not the value stored in the variable itself.
- Copying variables can be expensive so many times it’s better to refer to the actual variable, even if you only want to read from it. `` `const` `` with `` `type&` `` means that the variable is read-only **and** not copied.
- Using `` `const` `` with `` `type&` `` does have a few gotchas.
  - A reference to a const variable must also be const
    {%highlight cpp%}
      const int n = 4;
      int& ref = n; // this will error bc original var is const
      const int& ref = n; // this will be fine bc the original var definition is const
    {%endhighlight%}
  - A reference to a non-const variable can be const
    {%highlight cpp%}
      int x = 4;
      const int& ref = x; // this will be fine.
    {%endhighlight%}
  - Const references can be bound to literals in a way regular references can’t be.
    {%highlight cpp%}
      //this will be fine despite non-const references only being allowed to
      // be bound to variables.
      const int& n = 43;
    {%endhighlight%}

### Iterators

- I’m still new to iterators so I have deeper to go.
- You can’t run index based loops on associative containers like `` `set` and `` `map` `` because they’re not sequential and don’t have indexes. However, you can iterate over associative containers (& any container really) using an Iterator.
- Iterators perform an action on a range of items using `` `.begin()` `` and `` `.end()` ``.
    - both `` `.begin()` `` and `` `.end()` `` return iterators.
    - The iterator type depends on the container it’s used on, e.g. `` `set<int>::iterator` `` would be used on a `` `set` ``.
    - Iterators are pointers* under the hood, so in order to use the value being referenced by the iterator, you’d need to dereference first.

*I haven’t studied pointers in full yet but through studying referencing, I know pointers act in a similar way, they point to the memory address of a variable, and unlike references, can point to empty memory address locations.

### Others

I also covered:

- stringstream
- State Bits
- Types
    - Auto
    - Pairs
    - Structs
- Sequence Containers
- Associative Containers