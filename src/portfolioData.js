import reactLogo from "./images/icons/react-logo.png";
import cssLogo from "./images/icons/css-logo.png";
import phpLogo from "./images/icons/php-logo.png";
import htmlLogo from "./images/icons/html-logo.png";
import javascriptLogo from "./images/icons/javascript-logo.png";
import mysqlLogo from "./images/icons/mysql-logo.png";
import nlacc1 from "./images/projects/newlifeatlantacleaning/nlacc-1.jpg";
import nlacc2 from "./images/projects/newlifeatlantacleaning/nlacc-2.jpg";
import nlacc3 from "./images/projects/newlifeatlantacleaning/nlacc-3.jpg";
import nlacc4 from "./images/projects/newlifeatlantacleaning/nlacc-4.jpg";
import nlacc5 from "./images/projects/newlifeatlantacleaning/nlacc-5.jpg";
import nlacc6 from "./images/projects/newlifeatlantacleaning/nlacc-6.jpg";
import nlacc7 from "./images/projects/newlifeatlantacleaning/nlacc-7.jpg";
import nlacc8 from "./images/projects/newlifeatlantacleaning/nlacc-8.jpg";
import goaler1 from "./images/projects/goaler/goaler-1.jpg";
import goaler2 from "./images/projects/goaler/goaler-2.jpg";
import goaler3 from "./images/projects/goaler/goaler-3.jpg";
import goaler4 from "./images/projects/goaler/goaler-4.jpg";
import goaler5 from "./images/projects/goaler/goaler-5.jpg";
import badge1 from "./images/projects/badge/badge-1.jpg";
import badge2 from "./images/projects/badge/badge-2.jpg";
import badge3 from "./images/projects/badge/badge-3.jpg";
import badge4 from "./images/projects/badge/badge-4.jpg";
import badge5 from "./images/projects/badge/badge-5.jpg";
import badge6 from "./images/projects/badge/badge-6.jpg";
import badge7 from "./images/projects/badge/badge-7.jpg";
import badge8 from "./images/projects/badge/badge-8.jpg";
import badge9 from "./images/projects/badge/badge-9.jpg";
import jessemdev1 from "./images/projects/jessemdev/jessemdev-1.jpg";
import jessemdev2 from "./images/projects/jessemdev/jessemdev-2.jpg";
import jessemdev3 from "./images/projects/jessemdev/jessemdev-3.jpg";
import jessemdev4 from "./images/projects/jessemdev/jessemdev-4.jpg";
import jessemdev5 from "./images/projects/jessemdev/jessemdev-5.jpg";

const portfolioData = [
    {
        name: "New Life Atlanta Cleaning",
        technologyImages: [phpLogo, javascriptLogo, htmlLogo, cssLogo],
        projectImages: [
            nlacc1,
            nlacc2,
            nlacc3,
            nlacc4,
            nlacc5,
            nlacc6,
            nlacc7,
            nlacc8,
        ],
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
        projectImages: [goaler1, goaler2, goaler3, goaler4, goaler5],
        description:
            "Web app designed as a goal tracker built with the LAMP tech stack, featuring a user login system, a goal modification system, and a category system designed to help keep goals organized.",
        githubLink: "https://github.com/JesseMcCullough/goaler",
        demoLink: "https://goaler.net",
    },
    {
        name: "Badge",
        technologyImages: [phpLogo, javascriptLogo, htmlLogo, cssLogo],
        projectImages: [
            badge1,
            badge2,
            badge3,
            badge4,
            badge5,
            badge6,
            badge7,
            badge8,
            badge9,
        ],
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
        projectImages: [
            jessemdev1,
            jessemdev2,
            jessemdev3,
            jessemdev4,
            jessemdev5,
        ],
        description:
            "Website for showcasing my portfolio, built with React.js on the frontend to keep the UI organized and PHP on the backend to handle API calls.",
        githubLink: "https://github.com/JesseMcCullough/jessemdev",
        demoLink: "/",
    },
];

export default portfolioData;
