const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/*
## Task 1A: Create selectors to point your data into elements

* [ ] Create selectors by using any of the DOM element's methods
*/
//Selecting all of a specific Element
const link = document.querySelectorAll('link');
const div = document.querySelectorAll('div');
const navAll = document.querySelectorAll('nav');
const img = document.querySelectorAll('img');
const h4All = document.querySelectorAll('h4');
const pAll = document.querySelectorAll('p');
const aAll = document.querySelectorAll('a');

//Individually selecting by element
const nav = document.querySelector('nav');
const html = document.querySelector('html');
const head = document.querySelector('head');
const title = document.querySelector('title');
const script = document.querySelector('script');
const body = document.querySelector('body');
const header = document.querySelector('header');
const a = document.querySelector('a');
const section = document.querySelector('section');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const footer = document.querySelector('footer');

//Selecting by Class

const containerClass = document.querySelector('.container');
const logoClass = document.querySelector('.logo');
const ctaClass = document.querySelector('.cta');
const ctaTextClass = document.querySelector('.cta-text');
const mainContentClass = document.querySelector('.main-content');
const topContentClass = document.querySelector('.top-content');
const textContentClass = document.querySelector('.text-content');
const middleImgClass = document.querySelector('.middle-img');
const bottomContentClass = document.querySelector('.bottom-content');
const contactClass = document.querySelector('.contact');

//Selecting by Parent/Child
const imgChild = document.querySelector('header img');
const divChild = document.querySelector('.main-content div');
const h4Child = document.querySelector('.text-content h4');
const pChild = document.querySelector('.text-content p');
const bottomContentChild = document.querySelector('.bottom-content div');
const topContentChild = document.querySelector('.top-content div');

//Selecting by searching inside an Element
const bottomContentChildDiv = bottomContentChild.querySelector('div');
const topContentChildP = topContentChild.querySelector('p');


// ## Task 1B: Use the IDs to update src path content
const imgUpdate = document.querySelector('#logo-img');
imgUpdate.src = 'img/logo.png';


const imgUpdate1 = ctaClass.querySelector('#cta-img');
imgUpdate1.src = 'img/header-img.png';

const imgUpdate2 = document.querySelector('#middle-img');
imgUpdate2.src = 'img/mid-page-accent.jpg';


/*
## Task 2: Update the HTML with the JSON data

* [ ] Remember, NO direct updating of the HTML source is allowed.
* [ ] Using your selectors, update the content to match the example file.
*/

//NAV-BAR
aAll[0].innerText = siteContent.nav["nav-item-1"];
aAll[1].innerText = siteContent.nav["nav-item-2"];
aAll[2].innerText = siteContent.nav["nav-item-3"];
aAll[3].innerText = siteContent.nav["nav-item-4"];
aAll[4].innerText = siteContent.nav["nav-item-5"];
aAll[5].innerText = siteContent.nav["nav-item-6"];

//HEADLINE
const domIsAwesome = ctaTextClass.querySelector('h1')
domIsAwesome.insertAdjacentText("afterbegin", 'Awesome');
domIsAwesome.insertAdjacentHTML("afterbegin", '<br>');
domIsAwesome.insertAdjacentText("afterbegin", 'Is');
domIsAwesome.insertAdjacentHTML("afterbegin", '<br>');
domIsAwesome.insertAdjacentText("afterbegin", 'Dom');


//BUTTON
button.innerText = siteContent.cta["button"];

//MAIN CONTENT
h4All[0].textContent = siteContent["main-content"]["features-h4"];
pAll[0].textContent = siteContent["main-content"]["features-content"];
h4All[1].textContent = siteContent["main-content"]["about-h4"];
pAll[1].textContent = siteContent["main-content"]["about-content"];
h4All[2].textContent = siteContent["main-content"]["services-h4"];
pAll[2].textContent = siteContent["main-content"]["services-content"];
h4All[3].textContent = siteContent["main-content"]["product-h4"]
pAll[3].textContent = siteContent["main-content"]["product-content"];
h4All[4].textContent = siteContent["main-content"]["vision-h4"]
pAll[4].textContent = siteContent["main-content"][ "vision-content"];
h4All[5].textContent = siteContent["main-content"]["contact-h4"];

//FOOTER

footer.textContent = siteContent.footer.copyright;


//## Task 3: Add new content

//* [ ] Change the color of the navigation text to be green.

const changeToGreen = document.querySelector('.some-class');

someClass.style.backgroundColor = "gray";

//* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
//* [ ] Check your work by looking at the [original html](original.html) in the browser



/*
## Stretch Goals

* [ ] Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.  
* [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.
*/