import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "PuntoConfig",
  EMAIL: "info@puntoconfig.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "🛠️ Consejos IT reales, prácticos y sin relleno.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Articulos sobre tecnología, programación y más.",
};

/*export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};*/

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos personales y colaborativos de código abierto.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/PuntoConfig",
  },
  /*{ 
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }*/
];
