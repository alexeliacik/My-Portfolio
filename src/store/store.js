const initialState = {
  navbarLinks: [
    { name: "Home" },
    { name: "About Me" },
    { name: "My Skills" },
    { name: "My Websites" },
    { name: "Creative Works" },
    { name: "My Songs" },
    { name: "Contact" },
  ],
  myWebsites: [
    {
      id: 1,
      name: "In Street",
      url: "https://www.instreet.com.tr/",
      backgroundImage: "instreet",
      usedTechnologies: "Javascript, HTML, CSS.",
    },
    {
      id: 2,
      name: "Alaz Simsek",
      url: "http://alazsimsek.com",
      backgroundImage: "alazsimsek",
      usedTechnologies:
        "JQuery, Bootstrap 4, Hamburger CSS, Owl Carousel, ScrollReveal, HTML, CSS.",
    },
    {
      id: 3,
      name: "Eltesan Mobil",
      url: "http://www.eltesanmobil.com/en",
      backgroundImage: "eltesan",
      usedTechnologies: "Javascript, HTML, CSS.",
    },
    {
      id: 4,
      name: "A.B.S Yeditepe",
      url: "http://alazsimsek.com",
      backgroundImage: "yeditepe",
      usedTechnologies: "Javascript, HTML, CSS.",
    },
  ],
  creativeWorks: [
    {
      id: 1,
      name: "Trivia Db Quiz App",
      url: "https://github.com/alieliacik/Trivia-Db-Quiz-App-ReactJS",
      backgroundImage: "triviadb",
      usedTechnologies:
        "React JS (React Hooks, Styled Components, React Transition Group, React Router), HTML, CSS.",
    },
    {
      id: 2,
      name: "Movie Db Api",
      url:
        "https://github.com/alieliacik/MovieDB-API--Styled-Components-Master",
      backgroundImage: "moviedb",
      usedTechnologies:
        "React JS (React Hooks, Styled Components, React Transition Group, React Router, Material UI), HTML, CSS.",
    },
    {
      id: 3,
      name: "Shopping Cart",
      url: "https://github.com/alieliacik/Shopping-Cart-ReacJS",
      backgroundImage: "shoppingcart",
      usedTechnologies:
        "React JS (React Hooks, Styled Components, React Transition Group, Material UI, Uuid), HTML, CSS.",
    },
  ],
  mySongs: [
    {
      id: 1,
      url: "https://www.youtube.com/embed/l9OnbC4P8vE",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/1eoG1VTj8Lk",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/ZNIJ_vIA4hw",
    },
  ],
};

const store = (state = initialState, action) => {
  return state;
};

export default store;
