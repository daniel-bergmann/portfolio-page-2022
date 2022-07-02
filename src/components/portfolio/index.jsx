// react icons
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
// images
import konni from "/konni.svg";
import kinverska from "/kinverska.svg";
import teamhealth from "/th.svg";
import nyt from "/nyt.svg";
import pingis from "/pingis.svg";

export default function Index() {
  return (
    <>
      {portfolioData.map((i) => {
        return (
          <div className="container">
            <a target="_blank" href={i.link}>
              <img src={i.img} alt={i.alt} />
            </a>
            <p className="portfolio-p">{i.text}</p>
            <div className="icon-container">
              <a target="_blank" href={i.link}>
                <FiExternalLink className="icon" />
              </a>
              <a target="_blank" href={i.github}>
                <AiFillGithub className="icon" />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

const portfolioData = [
  {
    img: pingis,
    text: "Pingis is a small photography project of mine. I enjoy taking photos and play table tennis so why not combine the two? I decided to document the Icelandic table tennis community and post it on pingis for people to enjoy and use as they please. I also offer people the option to buy prints and it has become quite popular within the community. It has a sleek and simple design with simple scrolling usability. I made it with Next.js and Cloudinary.",
    link: "https://pingis.is",
    alt: "the logo for pingis.is",
    github: "https://github.com/daniel-bergmann/pingis",
  },
  {
    img: konni,
    text: "The Northern Lights Confucius Institute official website. I designed the site with Figma, developed it with Gatsby JS and GraphQL, and connected it to Prismic CMS for content management. The logo and design system of the site was also created by me. It is fully responsive and functional on all devices.",
    link: "https://konfusius.is/",
    alt: "Logo of the confucius institute",
    github: "https://github.com/daniel-bergmann",
  },
  {
    img: kinverska,
    text: "Kinverska is an open source tool created for students of the Mandarin Chinese language at the University of Iceland. I developed it with Gatsby JS. It utilizes GraphQL to query data from Prismic CMS. It also uses GSAP for animation, Styled-Components, and SCSS for styling. The design is intuitive and simple. The app is accessible everywhere and navigation is brilliant. It's a PWA (Progressive Web App) so a user can access it offline as well.",
    link: "https://kinverska.is/",
    alt: "logo of kinverska.is",
    github: "https://github.com/daniel-bergmann/kinverska.is",
  },
  {
    img: teamhealth,
    text: " At Reon, one of Iceland's leading software companies. I was a part of a fantastic team of developers working on a dashboard for the Team Health app. We used Figma to design the UI and the React framework Next.js for the frontend development. The backend API was written in Django by two brilliant developers at the company. The native mobile app was written in Flutter and I also had the chance to debug some errors using my limited but improving Flutter skills.",
    link: "https://teamhealth.is/",
    alt: "logo of teamhealth",
    github: "https://github.com/daniel-bergmann",
  },
  {
    img: nyt,
    text: "This website is a web-scraping project to test out this powerful technology. The data on this webpage has been scraped from www.nytimes.com just for fun and demonstration of my web development skills. I used Cheerio, Axios and Next.js which provided me the ability to serve static html pages with server side rendering.",
    link: "https://new-york-times-web-scraper.vercel.app/",
    alt: "logo of the nyt web scraper test site",
    github: "https://github.com/daniel-bergmann/new-york-times-web-scraper",
  },
];
