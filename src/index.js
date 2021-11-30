const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


const mainNav = document.querySelectorAll("nav a");
const links = Object.values(siteContent.nav);
console.log(links)
mainNav.forEach((link, index) => {
  link.textContent = links[index];
  link.classList.add('italic');
});

const imgtop = document.querySelector('#logo-img');
imgtop.src = siteContent['images']['logo-img'];

const ctaimg = document.querySelector('#cta-img');
ctaimg.src = siteContent['images']['cta-img'];

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctabutton = document.querySelector('.cta-text button');
ctabutton.textContent = siteContent['cta']['button'];

const featureHead = document.querySelector('.main-content h4');
featureHead.textContent = siteContent['main-content']['features-h4'];

const featureText = document.querySelector('.text-content p');
featureText.textContent = siteContent['main-content']['features-content'];

const aboutHead = document.querySelector('.text-content:nth-child(2) h4');
aboutHead.textContent = siteContent['main-content']['about-h4'];

const aboutText = document.querySelector('.text-content:nth-child(2) p');
aboutText.textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['images']['accent-img'];

const bottomhead1 = document.querySelector('.bottom-content .text-content h4');
bottomhead1.textContent = siteContent['main-content']['services-h4'];

const bottomText1 = document.querySelector('.bottom-content .text-content p');
bottomText1.textContent = siteContent['main-content']['services-content'];

const bottomHead2 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
bottomHead2.textContent = siteContent['main-content']['product-h4'];

const bottomText2 = document.querySelector('.bottom-content .text-content:nth-child(2) p');
bottomText2.textContent = siteContent['main-content']['product-content'];

const bottomhead3 = document.querySelector('.text-content:nth-child(3) h4');
bottomhead3.textContent = siteContent['main-content']['vision-h4'];

const bottomText3 = document.querySelector('.bottom-content .text-content:nth-child(3) p');
bottomText3.textContent = siteContent['main-content']['vision-content'];

const contacthead = document.querySelector('.contact h4');
contacthead.textContent = siteContent['contact']['contact-h4'];

const contactaddress = document.querySelector('.contact :nth-child(2)');
contactaddress.textContent = siteContent['contact']['address'];

const contactphone = document.querySelector('.contact :nth-child(3)');
contactphone.textContent = siteContent['contact']['phone'];

const contactemail = document.querySelector('.contact :nth-child(4)');
contactemail.textContent = siteContent['contact']['email'];

const copyRight = document.querySelector('footer a');
copyRight.textContent = siteContent['footer']['copyright'];

