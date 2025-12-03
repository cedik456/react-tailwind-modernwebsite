export type CodeExamples = {
  [key: string]: string;
  "App.tsx": string;
  "Hero.tsx": string;
  "Navbar.tsx": string;
};

export type FloatingCard = {
  bgColor: string;
  iconColor: string;
  textColor: string;
  contentColor: string;
  icon: string;
  title: string;
  content: string;
};

export type FloatingCards = {
  [key: string]: FloatingCard;
  "App.tsx": FloatingCard;
  "Hero.tsx": FloatingCard;
  "Navbar.tsx": FloatingCard;
};
