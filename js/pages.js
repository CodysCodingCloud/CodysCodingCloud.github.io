const data = [  {
    "name": "Tribute Page",
    "image": "../images/tribute preview.png",
    "alt": "tribute for Pong CDhau Chan",
    "link": "https://codyscodingcloud.github.io/Pong-Chao-Chan/",
    "description": "This was my very first project that I made. It was an extremely simple static site that I made back when I was just starting out, and learning by self study. IT was a hectic time where I was spending my time at work doing OT and my free time on learning how to code through freecodecamp.org.\n I had a lot of fun learning the basics of HTML, CSS, and javascript. However as I neared the end of the the responsive design module, I faced mini project to make a tribute page and my grandfather's passing at the same time. It just felt appropriate to make the tribute page for grandpa at the time. \n I wanted a way to rememebr him and for my family to have a way to see his life. As I made the site, I enjoyed the process of remembering him and the building of each line for him, while fussing over the CSS to make what I wanted. I knew at that moment that I wanted a career change. A few months down the line late, I joined Fullstacks academy."
  },  {
    "name": "Courage Shopper",
    "image": "../images/Courage_Shopoper.png",
    "alt": "Courage_Shopoperwebsite",
    "link": "https://courage-shopper.herokuapp.com/",
    "description": "Courage is an E-commerce website inspired by Halloween that was just around the corner when we started developing it. It showcases the integration of a Postgres database system and algolia so that it would have both CRUD and text-based search functionalities.\n"
  },
  {
    "name": "Optimate8",
    "image": "../images/Optimate8.png",
    "alt": "Optimate8",
    "link": "https://optimate8.herokuapp.com/",
    "description": "        Optim8 is a dating app inspired by the difficulties faced by single parents in the dating scene. Our research showed that arranged marriages are more successful in keeping people together. And for single parents, finding such stability and certainty apparent in arranged marriages would also allow them to fulfill their obligations in life and to their children without missing a beat. To simulate this, we developed a matching algorithm where bachelorettes and bachelors would be given a match once a day and allow them to immediately interact and get to know each other. By removing the ability to endlessly scroll through an endless stream of matches and immediately unlocking the ability to message their matches, the pairs would be able to pay more attention to the matches in front of them and start building a relationship.",
    "video":"https://www.youtube.com/embed/JyTh2Y09GIw"
  },
]
const placeholder ={"name": "Coming Soon",
"image": "../images/cloudy pig.png",
"alt": "tribute for Pong CDhau Chan",
"link": "https://github.com/CodysCodingCloud",
"description": "My next project will be built and posted here as soon as it is deployed. Please chec k my GitHub for any projects in development"}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const projectImg = document.getElementById('preview');
const projectName = document.getElementById('name');
const link = document.getElementById('link');
const description = document.getElementById('description');

let currentData= data[params.project]||placeholder;

projectImg.src = currentData.image
projectName.innerText=currentData.name;
link.innerText=currentData.name;
link.href=currentData.link;
description.innerText=currentData.description;
if(currentData.video){
  console.log('yes')
  const vid1=document.getElementById('video')
  let vidhtml = `<iframe id="ytplayer" type="text/html" src=${currentData.video} frameborder="0"></iframe>`
  let iframevid = document.createElement('iframe')
  iframevid.src=currentData.video
  vid1.innerHTML=vidhtml
  console.log(vidhtml)
}
let pagenum = parseInt(params.project)
const prevlink = document.getElementById('prev')
const nextlink = document.getElementById('next')
if (pagenum<=0){
  prevlink.innerText='home'  
  prevlink.href = 'index.html'

}else{
  prevlink.innerText='previous'
  prevlink.href =`pages.html?project=${pagenum-1}`
}
nextlink.innerText='next'
nextlink.href =`pages.html?project=${pagenum+1}`