import reactLogo from "./images/icons/react-logo.png";
import cssLogo from "./images/icons/css-logo.png";
import phpLogo from "./images/icons/php-logo.png";
import htmlLogo from "./images/icons/html-logo.png";
import javascriptLogo from "./images/icons/javascript-logo.png";
import mysqlLogo from "./images/icons/mysql-logo.png";
import newlifeatlantacleaning from "./images/newlifeatlantacleaning.jpg";
import goaler from "./images/goaler.jpg";
import badge from "./images/badge.jpg";
import jessemdev from "./images/jessemdev.jpg";

const portfolioData = [
    {
        name: "New Life Atlanta Cleaning",
        technologyImages: [phpLogo, javascriptLogo, htmlLogo, cssLogo],
        projectImages: [newlifeatlantacleaning, goaler, badge, jessemdev],
        description:
            "Website for a commercial cleaning company, complete with a custom-coded infinite bidirectional carousel via JavaScript and a robust form processor via PHP, fully responsive and designed and developed from scratch.",
        githubLink:
            "https://github.com/JesseMcCullough/new-life-atlanta-cleaning",
        demoLink: "https://newlifeatlantacleaning.com",
    },
    {
        name: "Goaler",
        technologyImages: [
            phpLogo,
            javascriptLogo,
            mysqlLogo,
            htmlLogo,
            cssLogo,
        ],
        projectImages: [goaler, goaler, goaler, goaler],
        description:
            "Web app designed as a goal tracker built with the LAMP tech stack, featuring a user login system, a goal modification system, and a category system designed to help keep goals organized.",
        githubLink: "https://github.com/JesseMcCullough/goaler",
        demoLink: "https://goaler.net",
    },
    {
        name: "Badge",
        technologyImages: [phpLogo, javascriptLogo, htmlLogo, cssLogo],
        projectImages: [badge, badge, badge, badge],
        description:
            "Website for a commercial band, displaying images through CSS Grid, with a custom-coded video selector communicating with the YouTube IFrame Player API, coupled together with a form processor and a fully responsive design.",
        githubLink: "https://github.com/JesseMcCullough/badge",
        demoLink: "https://badge.group",
    },
    {
        name: "JesseM.dev",
        technologyImages: [
            reactLogo,
            phpLogo,
            javascriptLogo,
            htmlLogo,
            cssLogo,
        ],
        projectImages: [jessemdev, jessemdev, jessemdev, jessemdev],
        description:
            "Website for showcasing my portfolio, built with React.js on the frontend to keep the UI organized and PHP on the backend to handle API calls.",
        githubLink: "https://github.com/JesseMcCullough/jessemdev",
        demoLink: "/",
    },
];

export default portfolioData;
