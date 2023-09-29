# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Pod request access landing page solution](#frontend-mentor---pod-request-access-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./starter-code/assets/viewDesktop.png)
![](./starter-code/assets/viewTablet.png)
![](./starter-code/assets/viewMobile.png)

### Links

- Solution URL: 
- Live Site URL: https://andrew2764.github.io/pod-request-access-landing-page/

## My process

### Built with

- Vanilla HTML/CSS/JS
- Flexbox
- Mobile-first workflow


```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development
First challenge where I dealt with a lot of responsive images, and I did some CSS gymnastics to make them work.
For example, this project uses three images in the background for different screen sizes. I handled this case by simply having three html image tags and using the css property `display: none` according to their respective screen sizes.


```html
<div class="image-host">
  <img class="image-host-sm" src="./assets/mobile/image-host.jpg" alt="">
  <img class="image-host-md" src="./assets/tablet/image-host.jpg" alt="">
  <img class="image-host-lg" src="./assets/desktop/image-host.jpg" alt="">
</div>
```
```css
.image-host-sm {
  min-height: 100%;
  min-width: 100%;
}

.image-host-md,
.image-host-lg {
  display: none;
}
...
...

@media (min-width: 600px) {
  .image-host-sm {
    display: none;
  }

  .image-host-md {
    display: block;
    min-width: 100%;
    min-height: 100%;
  }
  ...
}

@media (min-width: 1000px) {
  .image-host-md {
    display: none;
  }

  .image-host-lg {
    display: block;
    min-width: 100%;
    min-height: 100%;
  }
  ...
}
```

I used this same approach in two other cases where an element is in one place in small screen sizes but in another in larger screen sizes. I don't yet know if this is a good idea but I'll see how other people handle this same scenario.



## Author

- Frontend Mentor - [@andrew2764](https://www.frontendmentor.io/profile/andrew2764)
