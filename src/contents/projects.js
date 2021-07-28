import annotateThumbnail from "../assets/annotate-thumbnail.png";
import annotatePages from "../assets/annotate-pages.png";
import annotateVideo from "../assets/annotate-tour.mov";
import annotateVideoStill from "../assets/annotate-video-still.png";
import annotateImage from "../assets/annotate-image.png";

import pomodoroThumbnail from "../assets/pomodoro-thumbnail.png";
import pomodoroPages from "../assets/pomodoro-pages.png";
import pomodoroVideo from "../assets/pomodoro-tour.mov";
import pomodoroVideoStill from "../assets/pomodoro-video-still.png";
import pomodoroImage from "../assets/pomodoro-image.png";

import seasideCafeThumbnail from "../assets/seaside-cafe-thumbnail.png";
import seasideCafePages from "../assets/seaside-cafe-pages.png";
import seasideCafeVideo from "../assets/seaside-cafe-tour.mov";
import seasideCafeVideoStill from "../assets/seaside-cafe-video-still.png";
import seasideCafeImage from "../assets/seaside-cafe-image.png";

export const annotate = {
  title: "Annotate",

  url: "annotate",

  links: {
    github: "https://github.com/juliennecodes/annotate",
    prod: "https://gentle-everglades-42381.herokuapp.com/",
  },

  thumbnail: annotateThumbnail,

  heading:
    "Elegant digital solution for cataloguing thoughts on interesting images",

    pagesImage: annotatePages,

  goal: "Annotate is the capstone project for All Aboard Bootcamp(insert link). The directives for this project was to use the concepts learned in the bootcamp and create an app that was of personal interest. I chose to make Annotate because I collect interesting images I find on the web and I wanted to make notes of why I find them so. I wanted to have a record of my thoughts so I don’t have to rely on my memory to remember what aspect of the image I was particularly drawn to.",

  technology: "React Frontend and Rails Backend",

  video: {
    video: annotateVideo,
    poster: annotateVideoStill,
  },

  challenges: [
    "The challenge in making Annotate is in writing an app that utilizes frontend, backend, and database. Annotate is my first React and Rails app and prior to this, I’ve never written an app with a database. To accomplish the task of writing Annotate, I applied what I learned from the bootcamp, using concepts such as CRUD operations, MVC architecture, database queries, and resources.",
    "I also used past experience with client-server communication to facilitate client requests and server handling of requests. Although I haven’t written apps with React and Rails, I have worked with React and Express and the general concept of client making requests and server sending JSON objects back was the same. I just had to apply that general idea into Rails’ specific configurations.",
  ],

  blogPosts: [
    {
      title: "Decisions Decisions. Polish or Feature-rich?",
      url: "https://juliennecodes.github.io/blog/polish-or-feature-rich/",
    },
    {
      title: "CRUD app as Barebones App",
      url: "https://juliennecodes.github.io/blog/crud-app/",
    },
    {
      title: "React Frontend & Rails Backend Set Up",
      url: "https://juliennecodes.github.io/blog/react-and-rails-setup/",
    },
  ],

  image: annotateImage,

  notes: [
    "My favourite experience in making Annotate was being able to write the code equivalent of the real life task of annotating an image. It might be a simple thing to more experienced developers but it wasn’t that long ago that I was a layperson to software development so it’s a big deal for me. The project is a culmination of all that I have learned for the past year and I’m really proud of it.",
  ],

  futurePlans: [
    "My future plan for Annotate is to add users. Before that happens though, I have to write tests and make sure this current version is stable.",
  ],
};

export const pomodoro = {
  title: "Pomodoro",

  url: "pomodoro",

  links: {
    github: "https://github.com/juliennecodes/pomodoro",
    prod: "https://juliennecodes.github.io/pomodoro/",
  },

  thumbnail: pomodoroThumbnail,

  heading: "Time management tool for maximizing productivity",

  pagesImage: pomodoroPages,


  goal: "My goal in Pomodoro was to write a complete working app. I chose Pomodoro because I use pomodoro timers to help with my productivity. The concept of pomodoro timer is something I am familiar with and something I have strong opinions on. Now that I was more experienced in React, I was in a position to make my ideal pomodoro timer and that’s what I did in Pomodoro.",

  technology: "React",

  video: {
    video: pomodoroVideo,
    poster: pomodoroVideoStill,
  },

  challenges: [
    "The challenge in Pomodoro was in writing a complete app. After expanding my knowledge doing simple projects, I had enough in my web development toolbox to start writing Pomodoro.",
    "For things that I did know how to do such as using setInterval and useEffect hooks, I just applied knowledge that I already have.",
    "For things that I didn’t know how to do such as using useReducer and incorporating sounds, I looked up solutions on the internet. I was lucky to find Robin Wieruch’s article on useReducer. As for incorporating sounds, I found several solutions and went with the one that seems most straightforward.",
  ],

  blogPosts: [
    {
      title: "Start With Something Simple",
      url: "https://juliennecodes.github.io/blog/start-with-something-simple/",
    },
    {
      title: "Developing from a Usercentric Perspective",
      url: "https://juliennecodes.github.io/blog/usercentric-development/",
    },
  ],

  image: pomodoroImage,

  notes: [
    "I’m happy with how Pomodoro turned out. I like the minimal UI. I like that the sound to indicate the session is over is crisp and gentle. As a user, I like that I only have to press the button to start the timer and the software takes care of what session I’m on.",
    "There are rooms for improvement though. When I went to use Pomodoro, I noticed that the timer was lagging. This happened when I switched to another tab and when my phone went to sleep. I searched for why this might be the case and discovered about browsers throttling setTimeout and setInterval calls. I didn’t even know that was an issue I needed to have looked out for when I started developing Pomodoro.",
  ],

  futurePlans: [
    "My future plan for Pomodoro is to fix the timer lag when the tab in the browser is inactive. I looked around for solutions and it seems like I have to use Date.now() somehow. I’ll revisit the project when I have more time.",
  ],
};

export const seasideCafe = {
  title: "Seaside Cafe",

  url: "seaside-cafe",

  links: {
    github: "https://github.com/juliennecodes/shop",
    prod: "https://polar-plateau-65701.herokuapp.com/",
  },

  thumbnail: seasideCafeThumbnail,

  heading: "Shopping cart app for a fictional cafe",

  pagesImage: seasideCafePages,

  goal: "Seaside Cafe was primarily written to practice client-server communication. The frontend client makes GET, POST, and DELETE requests and the backend server responds with JSON.",

  technology: "React Frontend and Express Backend",

  video: {
    video: seasideCafeVideo,
    poster: seasideCafeVideoStill,
  },

  challenges: [
    "The challenge in making Seaside Cafe was setting up the client to make requests to the server and the server handling the requests and sending a JSON object back to the client.",
    "Seaside Cafe is actually a revisit of an old project that didn’t pan out. I undertook the old project when I was just getting started with React. However, I had to drop the project because the results I produced did not reflect the time I was spending on it. I recognized that the problem was my lack of understanding client-server communication and how exactly data was exchanged.",
    "To remedy this, I went back to doing simple projects that did basic things. I started with apps that just made GET requests to the server. After I got that working, I did POST requests. Eventually, I was able to build up my knowledge and was able to make a complete version, which was Seaside Cafe.",
  ],

  blogPosts: [
    {
      title: "Write Stupid Endpoints",
      url: "https://juliennecodes.github.io/blog/write-stupid-endpoints/",
    },
    {
      title: "React Frontend and Express Backend Set Up",
      url: "https://juliennecodes.github.io/blog/react-and-express-setup/",
    },
  ],

  image: seasideCafeImage,

  notes: [
    "It was fun to revisit an old project. The project was more or less the same. What was different was my skill and knowledge level and it was heartening to see that developing this time around was a lot breezier. Through writing Seaside Cafe, I had tangible evidence of my growth as a web developer.",
  ],

  futurePlans: [
    "I think Seaside Cafe in its current form is complete. I undertook it primarily to solidify client-server communication and I think I accomplished that. If I were to do another shopping cart app, I think I would start over because I have found a better way to organize my files since undertaking this project. If I were to expand on it though, I would add usage of a database. I would also add animations for instances such as adding items to cart. I started Explore React Spring, in no small part to find out how animations are done on the web. I thought the addition of animation when a user added an item to the cart would be a great user experience.",
  ],
};

export const projects = [annotate, pomodoro, seasideCafe];
