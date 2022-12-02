const data = [
	{
		name: "Tribute Page for Grandpa",
		image: "images/tribute_preview.png",
		alt: "tribute for Pong Chau Chan",
		link: "https://codyscodingcloud.github.io/Pong-Chao-Chan/",
		techStack: [
			{ name: "HTML", img: "images/html5.svg" },
			{ name: "CSS", img: "images/css.svg" },
		],
		description:
			"This was my very first project that I made. It was an extremely simple static site that I made back when I was just starting out, and learning by self study. IT was a hectic time where I was spending my time at work doing OT and my free time on learning how to code through freecodecamp.org.\n I had a lot of fun learning the basics of HTML, CSS, and javascript. However as I neared the end of the the responsive design module, I faced mini project to make a tribute page and my grandfather's passing at the same time. It just felt appropriate to make the tribute page for grandpa at the time. \n I wanted a way to rememebr him and for my family to have a way to see his life. As I made the site, I enjoyed the process of remembering him and the building of each line for him, while fussing over the CSS to make what I wanted. I knew at that moment that I wanted a career change. A few months down the line late, I joined Fullstacks academy.",
	},
	{
		name: "Courage Shopper",
		image: "images/courage_shopoper.png",
		alt: "Courage_Shopper",
		link: "https://courage-shopper.herokuapp.com/",
		techStack: [
			{ name: "Javascript", img: "images/javascript.svg" },
			{ name: "HTML", img: "images/html5.svg" },
			{ name: "CSS", img: "images/css.svg" },
			{ name: "React", img: "images/react.svg" },
			{ name: "Git", img: "images/git.svg" },
			{ name: "Node.js", img: "images/node.svg" },
			{ name: "Sequelize", img: "images/sequelize.svg" },
			{ name: "PostgreSQL", img: "images/postgresql.svg" },
			{ name: "Redux", img: "images/redux.svg" },
			{ name: "Algolia", img: "images/algolia.svg" },
		],
		description:
			"Courage is an E-commerce website inspired by Halloween that was just around the corner when we started developing it. It showcases the integration of a Postgres database system and algolia so that it would have both CRUD and text-based search functionalities.\n",
	},
	{
		name: "Optimate8",
		image: "images/optimate8.png",
		alt: "Optimate8",
		link: "https://optimate8.herokuapp.com/",
		techStack: [
			{ name: "Javascript", img: "images/javascript.svg" },
			{ name: "HTML", img: "images/html5.svg" },
			{ name: "Next JS", img: "images/next.svg" },
			{ name: "SupaBase", img: "images/supabase.svg" },
			{ name: "PostgreSQL", img: "images/postgresql.svg" },
			{ name: "SQL", img: "images/sql.svg" },
			{ name: "Redux", img: "images/redux.svg" },
			{ name: "Docker", img: "images/docker.svg" },
			{ name: "Git", img: "images/git.svg" },
			{ name: "Node.js", img: "images/node.svg" },
		],
		description:
			"        Optim8 is a dating app inspired by the difficulties faced by single parents in the dating scene. Our research showed that arranged marriages are more successful in keeping people together. And for single parents, finding such stability and certainty apparent in arranged marriages would also allow them to fulfill their obligations in life and to their children without missing a beat. To simulate this, we developed a matching algorithm where bachelorettes and bachelors would be given a match once a day and allow them to immediately interact and get to know each other. By removing the ability to endlessly scroll through an endless stream of matches and immediately unlocking the ability to message their matches, the pairs would be able to pay more attention to the matches in front of them and start building a relationship.",
		video: "https://www.youtube.com/embed/JyTh2Y09GIw",
	},
];
const placeholder = {
	name: "Coming Soon",
	image: "images/cloudy pig.png",
	alt: "cloudy pig",
	link: "https://github.com/CodysCodingCloud",
	description:
		"My next project will be built and posted here as soon as it is deployed. Please checkout my GitHub for any projects in development",
};

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const projectImg = document.getElementById("preview");
const projectName = document.getElementById("name");
const link = document.getElementById("link");
const stackContainer = document.getElementById("stack_container");
const description = document.getElementById("description");

let currentData = data[params.project] || placeholder;

projectImg.src = currentData.image;
projectImg.alt = currentData.alt;
projectName.innerText = currentData.name;
link.innerText = currentData.name;
link.href = currentData.link;
description.innerText = currentData.description;

function make_tech_icon_container(data) {
	let parentElem = document.createElement("div");
	parentElem.setAttribute("class", "tech_icon_container");
	let iconName = document.createElement("p");
	iconName.appendChild(document.createTextNode(data.name));
	let iconImg = document.createElement("img");
	iconImg.setAttribute("src", data.img);
	iconImg.setAttribute("alt", `${data.name} icon`);
	parentElem.appendChild(iconName);
	parentElem.appendChild(iconImg);
	return parentElem;
}

currentData.techStack.forEach((data) => {
	const techContainer = make_tech_icon_container(data);
	stackContainer.appendChild(techContainer);
});

if (currentData.video) {
	const vid1 = document.getElementById("video");
	let vidhtml = `<iframe id="ytplayer" type="text/html" src=${currentData.video} frameborder="0"></iframe>`;
	// let iframevid = document.createElement("iframe");
	// iframevid.src = currentData.video;
	vid1.innerHTML = vidhtml;
}
let pagenum = parseInt(params.project);
const prevlink = document.getElementById("prev");
const nextlink = document.getElementById("next");
if (pagenum <= 0) {
	prevlink.innerText = "home";
	prevlink.href = "index.html";
} else {
	prevlink.innerText = "older";
	prevlink.href = `pages.html?project=${pagenum - 1}`;
}
nextlink.innerText = "next";
nextlink.href = `pages.html?project=${pagenum + 1}`;
