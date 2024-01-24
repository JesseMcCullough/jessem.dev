import jessemdev1 from "./images/projects/jessemdev/jessemdev-1.jpg";
import jessemdev2 from "./images/projects/jessemdev/jessemdev-2.jpg";
import jessemdev3 from "./images/projects/jessemdev/jessemdev-3.jpg";
import jessemdev4 from "./images/projects/jessemdev/jessemdev-4.jpg";
import jessemdev5 from "./images/projects/jessemdev/jessemdev-5.jpg";
import jessemdevFirst1 from "./images/journey/jessemdev-first/jessemdev-1.jpg";
import jessemdevFirst2 from "./images/journey/jessemdev-first/jessemdev-2.jpg";
import jessemdevFirst3 from "./images/journey/jessemdev-first/jessemdev-3.jpg";
import jessemdevFirst4 from "./images/journey/jessemdev-first/jessemdev-4.jpg";
import jessemdevFirst5 from "./images/journey/jessemdev-first/jessemdev-5.jpg";
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
import badgeFirst1 from "./images/journey/badge-first/badge-1.jpg";
import badgeFirst2 from "./images/journey/badge-first/badge-2.jpg";
import badgeFirst3 from "./images/journey/badge-first/badge-3.jpg";
import badgeFirst4 from "./images/journey/badge-first/badge-4.jpg";
import badgeFirst5 from "./images/journey/badge-first/badge-5.jpg";
import badgeFirst6 from "./images/journey/badge-first/badge-6.jpg";
import badgeFirst7 from "./images/journey/badge-first/badge-7.jpg";
import badgeFirst8 from "./images/journey/badge-first/badge-8.jpg";
import badgeFirst9 from "./images/journey/badge-first/badge-9.jpg";
import firstWebsite from "./images/journey/first-website.jpg";

const journeyData = [
    {
        id: 1,
        title: "I was born.",
        month: "Dec",
        year: 1998,
    },
    {
        id: 2,
        title: "**I started learning Lua** to create scripts for **Roblox games**.",
        month: "Aug",
        year: 2008,
        children: [3, 29],
    },
    {
        id: 3,
        title: "**I created a Roblox game** with Lua that was **played over 115,000 times** worldwide.",
        month: "Jul",
        year: 2012,
        highlight: true,
    },
    {
        id: 4,
        title: "**I started learning Java** to create **plugins** for third-party **Minecraft servers**.",
        month: "Jan",
        year: 2014,
        children: [9, 29],
    },
    {
        id: 5,
        title: "**I started learning HTML and CSS**.",
        month: "Aug",
        year: 2014,
        children: [6, 18, 19, 21, 25, 28, 29],
    },
    {
        id: 6,
        title: "**I created my first website**.",
        month: "Aug",
        year: 2014,
        images: [firstWebsite],
        highlight: true,
    },
    {
        id: 7,
        title: "**I started learning MySQL**.",
        month: "May",
        year: 2017,
        children: [9, 19, 29],
    },
    {
        id: 8,
        title: "**I started learning PHP**.",
        month: "Sep",
        year: 2017,
        children: [18, 19, 21, 29],
    },
    {
        id: 9,
        title: "**I created 15 plugins in Java** over 4 years for third-party **Minecraft servers** that have **over 20,000 downloads**.",
        month: "Aug",
        year: 2018,
        highlight: true,
    },
    {
        id: 10,
        title: "**I decided to go to college** to study computer science.",
        month: "Feb",
        year: 2019,
        children: [11, 12, 13, 14, 15, 16],
    },
    {
        id: 11,
        title: "**I started studying for the GED test** so that I could go to college.",
        description:
            "*Note: I never went to any school before—not elementary school, high school, or college.*",
        month: "Mar",
        year: 2019,
        children: [12],
    },
    {
        id: 12,
        title: "**I earned my GED** and ranked in the **top 6% for math** and the **top 12% overall**.",
        month: "Jun",
        year: 2019,
    },
    {
        id: 13,
        title: "**I enrolled at Georgia State University** for computer science.",
        month: "Aug",
        year: 2019,
    },
    {
        id: 14,
        title: "**I earned 3x President's List** *(4.0+ GPA)*, **1x Dean's List** *(3.5+ GPA)*, **Student of the Semester** *(for College Algebra Fall 2019)*, and a referral into the **Honors Program**.",
        month: "May",
        year: 2021,
    },
    {
        id: 15,
        title: "**I left Georgia State University** due to financial obligations.",
        month: "May",
        year: 2021,
    },
    {
        id: 16,
        title: "**I decided to continue my education** by self-studying.",
        month: "Jun",
        year: 2021,
        children: [17, 20, 23, 24, 26, 27, 29],
    },
    {
        id: 17,
        title: "**I started learning JavaScript**.",
        month: "Aug",
        year: 2021,
        children: [18, 19, 21, 29],
    },
    {
        id: 18,
        title: "**I created a band website** for Badge.",
        month: "Nov",
        year: 2021,
        images: [
            badgeFirst1,
            badgeFirst2,
            badgeFirst3,
            badgeFirst4,
            badgeFirst5,
            badgeFirst6,
            badgeFirst7,
            badgeFirst8,
            badgeFirst9,
        ],
        highlight: true,
    },
    {
        id: 19,
        title: "**I created a web app** for goal tracking.",
        month: "Feb",
        year: 2022,
        images: [goaler1, goaler2, goaler3, goaler4, goaler5],
        highlight: true,
    },
    {
        id: 20,
        title: "**I started learning web design**.",
        month: "Mar",
        children: [29],
        year: 2022,
    },
    {
        id: 21,
        title: "**I created a company website** for New Life Atlanta Cleaning.",
        month: "Nov",
        year: 2022,
        images: [
            nlacc1,
            nlacc2,
            nlacc3,
            nlacc4,
            nlacc5,
            nlacc6,
            nlacc7,
            nlacc8,
        ],
        highlight: true,
    },
    {
        id: 22,
        title: "**I traveled across the country** to get some **career advice** for 3 weeks.",
        description:
            "Thank you, Todd.  \n\n*Note: I recommend against going to Arizona during the summer if you enjoy breathing; I'm including May as summertime because it was over 100&deg;F.*",
        month: "May",
        year: 2023,
        children: [23, 24],
    },
    {
        id: 23,
        title: "**I started learning MongoDB**.",
        month: "May",
        year: 2023,
        children: [29],
    },
    {
        id: 24,
        title: "**I started learning React.js**.",
        month: "May",
        year: 2023,
        children: [25, 28, 29],
    },
    {
        id: 25,
        title: "**I created my portfolio website** with React.js.",
        month: "Aug",
        year: 2023,
        images: [
            jessemdevFirst1,
            jessemdevFirst2,
            jessemdevFirst3,
            jessemdevFirst4,
            jessemdevFirst5,
        ],
        highlight: true,
    },
    {
        id: 26,
        title: "**I started learning REST APIs**.",
        month: "Oct",
        year: 2023,
        children: [29],
    },
    {
        id: 27,
        title: "**I started learning data structures and algorithms**.",
        month: "Dec",
        year: 2023,
        children: [29],
    },
    {
        id: 28,
        title: "**I redesigned my portfolio website**.",
        month: "Dec",
        year: 2023,
        images: [jessemdev1, jessemdev2, jessemdev3, jessemdev4, jessemdev5],
        highlight: true,
    },
    {
        id: 29,
        title: "**Now, I'm working towards getting my first job as a software engineer**.",
        month: "Today",
    },
];

export default journeyData;
