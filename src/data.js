const thumbsURL = "images/projects-thumbnails/";
const iconsURL = "images/stack-icons/";

const icons = {
  aws: {
    src: iconsURL + "aws-amplify.png",
    title: "AWS Amplify",
    showAsSkill: false,
  },
  bootstrap: {
    src: iconsURL + "bootstrap.png",
    title: "Bootstrap",
    showAsSkill: true,
  },
  css: {
    src: iconsURL + "css.svg",
    title: "CSS",
    showAsSkill: true,
  },
  express: {
    src: iconsURL + "yarn.png",
    title: "ExpressJS",
    showAsSkill: true,
  },
  firebase: {
    src: iconsURL + "firebase.png",
    title: "Firebase",
    showAsSkill: false,
  },
  heroku: {
    src: iconsURL + "heroku.png",
    title: "Heroku",
    showAsSkill: true,
  },
  html: {
    src: iconsURL + "html5.png",
    title: "HTML",
    showAsSkill: true,
  },
  javascript: {
    src: iconsURL + "javascript.png",
    title: "Javascript",
    showAsSkill: true,
  },
  jwt: {
    src: iconsURL + "jwt.png",
    title: "JWT",
    showAsSkill: false,
  },
  mongo: {
    src: iconsURL + "mongodb.png",
    title: "MongoDB",
    showAsSkill: true,
  },
  mysql: {
    src: iconsURL + "mysql.png",
    title: "MySQL",
    showAsSkill: true,
  },
  netlify: {
    src: iconsURL + "netlify.png",
    title: "Netlify",
    showAsSkill: true,
  },
  node: {
    src: iconsURL + "node.png",
    title: "NodeJS",
    showAsSkill: true,
  },
  postman: {
    src: iconsURL + "postman.png",
    title: "Postman",
    showAsSkill: true,
  },
  react: {
    src: iconsURL + "react.png",
    title: "React",
    showAsSkill: true,
  },
  reactBootstrap: {
    src: iconsURL + "react-bootstrap.png",
    title: "React Bootstrap",
    showAsSkill: true,
  },
  redux: {
    src: iconsURL + "redux.png",
    title: "Redux",
    showAsSkill: true,
  },
  sass: {
    src: iconsURL + "sass.png",
    title: "sass",
    showAsSkill: true,
  },
  socketio: {
    src: iconsURL + "socketio.png",
    title: "socket.io",
    showAsSkill: true,
  },
  stripe: {
    src: iconsURL + "stripe.png",
    title: "Stripe Payments",
    showAsSkill: false,
  },
  styledComponents: {
    src: iconsURL + "styled-components.png",
    title: "Styled Components",
    showAsSkill: true,
  },
  typescript: {
    src: iconsURL + "typescript.png",
    title: "Typescript",
    showAsSkill: false,
  },
  yarn: {
    src: iconsURL + "yarn.png",
    title: "Yarn",
    showAsSkill: false,
  },
};

const contactInfo = [
  {
    title: "email",
    href: "mailto:moshe.mn86@gmail.com",
    icon: "fa fa-envelope",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/moshe-mantsur-33b340146/",
    icon: "fab fa-linkedin",
  },
  {
    title: "facebook",
    href: "https://www.facebook.com/moshe.mantsur.5/",
    icon: "fab fa-facebook",
  },
  {
    title: "github",
    href: "https://github.com/moizes86?tab=repositories",
    icon: "fab fa-github",
  },
  {
    title: "whatsapp",
    href: "https://api.whatsapp.com/send?phone=972546892979",
    icon: "fab fa-whatsapp",
  },
];

const projects = [
  //
  {
    title: "Recipes Farm",
    summary:
      "Full stack CRUD app, including validations, JWT, password encryption and email verification. Done with express server and mysql DB.",
    stackIcons: [
      icons.react,
      icons.redux,
      icons.sass,
      icons.mysql,
      icons.express,
      icons.bootstrap,
      icons.jwt,
    ],
    thumb: thumbsURL + "recipes-farm.jpg",
    url: "https://recipes-mm.netlify.app/",
    git: "https://github.com/moizes86/recipes-backend",
  },
  //
  //
  {
    title: "Dubio",
    stackIcons: [icons.typescript, icons.react, icons.redux, icons.sass, icons.aws, icons.yarn],
    summary:
      "Hackathon project with a team of developers - fact checking suspicious claims to push back againt fake news.",
    thumb: thumbsURL + "dubio.jpg",
    url: "https://ui.dubioo.com/#/",
    git: "https://github.com/moizes86/Dubio_backup",
  },
  //
  //
  {
    title: "TMDb Movies",
    summary: "Search movies by title. React and Redux hands-on.",
    stackIcons: [icons.react, icons.redux, icons.styledComponents],
    thumb: thumbsURL + "tmdb.png",
    url: "https://mm-tmdb.netlify.app/",
    git: "https://github.com/moizes86/TMDb-movie-search",
  },
  //
  //
  {
    title: "Students Signup And Display",
    summary: "Signup under custom form validations and get a list of registered students.",
    stackIcons: [icons.react, icons.reactBootstrap],
    thumb: thumbsURL + "students-signup-and-display.jpg",
    url: "https://students-signup-form-mm.netlify.app/",
    git: "https://github.com/moizes86/students-signup-display",
  },
  //
  //
  {
    title: "Chatee",
    summary: "Chat app using socket.io, mongoose, redux, form validation and email verification.",
    stackIcons: [icons.react, icons.redux, icons.sass, icons.mongo, icons.socketio, icons.bootstrap],
    thumb: thumbsURL + "chatee.png",
    url: "https://github.com/moizes86/chat-application",
    git: "https://github.com/moizes86/chat-application",
  },
  //
  //
  {
    title: "Online Store",
    summary: "Dummy products, real firebase and stripe implementation.",
    stackIcons: [icons.react, icons.redux, icons.express, icons.firebase, icons.stripe, icons.sass],
    thumb: thumbsURL + "online-store.jpg",
    url: "https://online-store-mm.herokuapp.com/",
    git: "https://github.com/moizes86/online-store-with-server",
  },
  //
  //
  {
    title: "Minis",
    summary: "React mini projects for practice",
    stackIcons: [icons.react, icons.sass, icons.bootstrap],
    thumb: thumbsURL + "react-minis.jpg",
    url: "https://react-minis-mm.netlify.app/",
    git: "https://github.com/moizes86/react-minis",
  },
  //
  //
  {
    title: "Speakers",
    summary: "Final HTML-CSS project",
    stackIcons: [icons.html, icons.css],
    thumb: thumbsURL + "speakers.jpg",
    url: "https://speakers-mm.netlify.app/",
    git: "https://github.com/moizes86/speakers",
  },
  //
  //
  {
    title: "Delicious Foods",
    summary: "HTML-CSS landing page template",
    stackIcons: [icons.html, icons.css],
    thumb: thumbsURL + "delicious-foods.jpg",
    url: "https://delicious-food-mm.netlify.app//",
    git: "https://github.com/moizes86/Delicious-Food",
  },
  //
  //
  {
    title: "Temanei-Kineret (React)",
    summary: "Early React project for practicing components and routing, and also for better perfomance.",
    stackIcons: [icons.react, icons.sass],
    thumb: thumbsURL + "tk.jpg",
    url: "https://tkreact.herokuapp.com/",
    git: "https://github.com/moizes86/Teimanei-Kineret-React",
  },
  //
  //
  {
    title: "Global-Trekking",
    summary: "Landing page for tours company.",
    stackIcons: [icons.react, icons.sass],
    thumb: thumbsURL + "global-trekking.jpg",
    url: "https://global-trekking.netlify.app/",
    git: "https://github.com/moizes86/global-trekking",
  },
  //
  //
  {
    title: "Notes Board",
    summary: "Add notes to board. Responsive",
    // stackIcons: "HTML, CSS, Javascript, Bootstrap",
    stackIcons: [icons.html, icons.css, icons.javascript, icons.bootstrap],
    thumb: thumbsURL + "notes-board.jpg",
    url: "https://note-board-mm.netlify.app/",
    git: "https://github.com/moizes86/notes-board",
  },
  //
  //
  {
    title: "Temanei-Kineret",
    summary: "Rebuilt an old website for better styling and made it responsive.",
    stackIcons: [icons.javascript, icons.html, icons.css, icons.bootstrap, icons.express],
    thumb: thumbsURL + "tk.jpg",
    url: "https://temanei-kineret.herokuapp.com/index",
    git: "https://github.com/moizes86/TeimaniKineret",
  },
];

export { projects, icons, contactInfo };
