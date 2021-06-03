import HomepageTypes from "./homepage.types";

import TK_Gif from "../assets/preview-gifs/tk.gif";
import TK_Thumbnail from "../assets/preview-thumbnails/tk.jpg";
import TK_React_Gif from "../assets/preview-gifs/tk-react.gif";
import TMDb_Gif from "../assets/preview-gifs/tmdb-movies-search.gif";
import TMDb_Thumbnail from "../assets/preview-thumbnails/tmdb.PNG";
import GlobalTrekking_Thumbnail from "../assets/preview-thumbnails/global-trekking.jpg";
import GlobalTrekking_Gif from "../assets/preview-gifs/global-trekking.gif";
import OnlineStore_Thumbnail from "../assets/preview-thumbnails/online-store.thumbnail.JPG";
import Dubio_Thumbnail from "../assets/preview-thumbnails/dubio.JPG";
import Speakers_Thumbnail from "../assets/preview-thumbnails/speakers.JPG";
import Delicious_Foods_Thumbnail from "../assets/preview-thumbnails/delicious-foods.JPG";
import notesBoard_Thumbnail from "../assets/preview-thumbnails/notes-board.JPG";
import reactMinis_Thumbnail from "../assets/preview-thumbnails/react-minis.JPG";
import studentsSignupAndDisplay_Thumbnail from "../assets/preview-thumbnails/students-signup-and-display.JPG";

const contactsArr = [
  {
    href: "mailto:moshe.mn86@gmail.com",
    icon: "fa fa-envelope",
    type: "Email",
    text: "moshe.mn86@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/moshe-mantsur-33b340146/",
    icon: "fa fa-linkedin-square",
    type: "LinkedIn",
    text: "Moshe Mantsur",
  },
  {
    href: "https://www.facebook.com/moshe.mantsur.5/",
    icon: "fa fa-facebook-square",
    type: "Facebook",
    text: "Moshe Mantsur",
  },
  {
    href: "https://github.com/moizes86?tab=repositories",
    icon: "fa fa-github-square",
    type: "Github",
    text: "moizes86",
  },
];

const projectsArr = [
  {
    title: "Dubio",
    stack: "Typescript, AWS Amplify, React, Redux Toolkit, Sass, yarn ",
    summary:
      "Hackathon project with a team of developers - fact checking suspicious claims to push back againt fake news.",
    gif: null,
    thumbnail: Dubio_Thumbnail,
    linkURL: "https://ui.dubioo.com/#/",
  },
  {
    title: "Online Store",
    stack: "React, Redux, Sass, Firebase, Stripe, ExpressJS",
    summary:
      "Online Store is a store. And it's online. It was made for practicing both redux and context API, plus learning how to use firebase registration and authentication along with express server to enable stripe payments.",
    gif: null,
    thumbnail: OnlineStore_Thumbnail,
    linkURL: "https://online-store-mm.herokuapp.com/",
  },
  {
    title: "TMDb-movie-search",
    stack: "React, Redux, Styled-Components",
    summary: "Search movies by title. React and Redux hands-on.",
    gif: TMDb_Gif,
    thumbnail: TMDb_Thumbnail,
    linkURL: "https://mm-tmdb.netlify.app/",
  },
  {
    title: "Students Signup And Display",
    stack: "React, React Bootstrap",
    summary: "Signup under custom form validations and get a list of registered students.",
    gif: "",
    thumbnail: studentsSignupAndDisplay_Thumbnail,
    linkURL: "https://students-signup-form-mm.netlify.app/",
  },
  {
    title: "Minis",
    stack: "React, Sass, Bootstrap",
    summary: "React mini projects for practice",
    gif: "",
    thumbnail: reactMinis_Thumbnail,
    linkURL: "https://react-minis-mm.netlify.app/",
  },
  {
    title: "Speakers",
    stack: "HTML, CSS",
    summary: "Final HTML-CSS project",
    gif: "",
    thumbnail: Speakers_Thumbnail,
    linkURL: "https://speakers-mm.netlify.app/",
  },
  {
    title: "Delicious Foods",
    stack: "HTML, CSS",
    summary: "HTML-CSS landing page template",
    gif: "",
    thumbnail: Delicious_Foods_Thumbnail,
    linkURL: "https://delicious-food-mm.netlify.app//",
  },

  {
    title: "Temanei-Kineret (React)",
    stack: "React, Sass",
    summary:
      "Early React project for practicing components and routing, and also for better perfomance.",
    gif: TK_React_Gif,
    thumbnail: TK_Thumbnail,
    linkURL: "https://tkreact.herokuapp.com/",
  },
  {
    title: "Global-Trekking",
    stack: "React, Sass",
    summary: "Landing page for tours company.",
    gif: GlobalTrekking_Gif,
    thumbnail: GlobalTrekking_Thumbnail,
    linkURL: "https://global-trekking.netlify.app/",
  },
  {
    title: "Notes Board",
    stack: "HTML, CSS, Javascript, Bootstrap",
    summary: "Add notes to board. Responsive",
    gif: null,
    thumbnail: notesBoard_Thumbnail,
    linkURL: "https://note-board-mm.netlify.app/",
  },

  {
    title: "Temanei-Kineret",
    stack: "Javascript, HTML, CSS, Bootstrap, ExpressJS",
    summary: "Rebuilt an old website for better styling and made it responsive.",
    gif: TK_Gif,
    thumbnail: TK_Thumbnail,
    external: true,
    linkURL: "https://temanei-kineret.herokuapp.com/index",
  },
];

const INITIAL_STATE = {
  homepageSections: ["portfolio", "cv", "contact"],
  contacts: contactsArr,
  projects: projectsArr,
  navbarShown: false,
};

const homepageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomepageTypes.TOGGLE_NAVBAR_DROPDOWN:
      return {
        ...state,
        navbarShown: !state.navbarShown,
      };

    default:
      return state;
  }
};

export default homepageReducer;
