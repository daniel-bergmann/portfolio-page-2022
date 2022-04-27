import logo from "/logo.svg";

export default function Index() {
  return (
    <div>
      {" "}
      <div className="title fade-in">
        <img className="title-logo" src={logo} alt="" />
        <h1>Daniel Bergmann</h1>
      </div>
      <p className="fade-in">Welcome to my portfolio!</p>
      <p className="fade-in">
        I'm a Software Developer specialized in crafting bespoke websites and
        user-interfaces. I have worked for clients in an array of fields such as
        education, tourism, health and startups.
      </p>
      <p className="fade-in">
        My focus is in UI development and UX design for both end-users and
        content editors. When possible I love to collaborate with designers,
        illustrators, photographers, copy-writers and other specialists. My
        current preferred tech-stack might include things like{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://vitejs.dev/"
        >
          Vite JS
        </a>
        ,{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://reactjs.org/"
        >
          React JS
        </a>{" "}
        ecosystem,{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://sass-lang.com/"
        >
          Sass
        </a>
        ,{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://styled-components.com/"
        >
          Styled Components
        </a>{" "}
        and{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://prismic.io/"
        >
          various headless CMS's
        </a>
        . You can find me on{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/daniel-bergmann-1449bb1b1/"
        >
          LinkedIn
        </a>{" "}
        and{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/daniel-bergmann"
        >
          Github
        </a>{" "}
        if you want to connect.
      </p>
    </div>
  );
}
