import HomepageTypes from './homepage.types';

import TK_Gif from '../assets/preview-gifs/tk.gif';
import TK_Thumbnail from '../assets/preview-thumbnails/tk.jpg';
import TK_React_Gif from '../assets/preview-gifs/tk-react.gif';
import TMDb_Gif from '../assets/preview-gifs/tmdb-movies-search.gif';
import TMDb_Thumbnail from '../assets/preview-thumbnails/tmdb.PNG';
import GlobalTrekking_Thumbnail from '../assets/preview-thumbnails/global-trekking.jpg';
import GlobalTrekking_Gif from '../assets/preview-gifs/global-trekking.gif';

const contactsArr = [
  {
    href: 'mailto:moshe.mn86@gmail.com',
    icon: 'fa fa-envelope',
    type: 'Email',
    text: 'moshe.mn86@gmail.com',
  },
  {
    href: 'https://www.linkedin.com/in/moshe-mantsur-33b340146/',
    icon: 'fa fa-linkedin-square',
    type: 'LinkedIn',
    text: 'Moshe Mantsur',
  },
  {
    href: 'https://www.facebook.com/moshe.mantsur/',
    icon: 'fa fa-facebook-square',
    type: 'Facebook',
    text: 'Moshe Mantsur',
  },
  {
    href: 'https://github.com/moizes86?tab=repositories',
    icon: 'fa fa-github-square',
    type: 'Github',
    text: 'moizes86',
  },
];

const projectsArr = [
  {
    title: 'TMDb-movie-search',
    stack: 'React, Redux, Styled-Components',
    summary: 'Search movies by title. React and Redux hands-on.',
    gif: TMDb_Gif,
    thumbnail: TMDb_Thumbnail,
    linkURL: 'https://mm-tmdb.netlify.app/',
  },

  {
    title: 'Temanei-Kineret (React)',
    stack: 'React, Sass',
    summary:
      'Early React project for practicing components and routing, and also for better perfomance.',
    gif: TK_React_Gif,
    thumbnail: TK_Thumbnail,
    linkURL: 'https://tkreact.herokuapp.com/',
  },
  {
    title: 'Global-Trekking',
    stack: 'React, Sass',
    summary: 'Landing page for tours company.',
    gif: GlobalTrekking_Gif,
    thumbnail: GlobalTrekking_Thumbnail,
    linkURL: 'https://global-trekking.netlify.app/',
  },

  {
    title: 'Temanei-Kineret',
    stack: 'Javascript, HTML, CSS, Bootstrap, ExpressJS',
    summary:
      'Rebuilt an old website for better styling and made it responsive.',
    gif: TK_Gif,
    thumbnail: TK_Thumbnail,
    external: true,
    linkURL: 'https://temanei-kineret.herokuapp.com/index',
  },
];

const INITIAL_STATE = {
  homepageSections: ['portfolio', 'cv', 'contact'],
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
