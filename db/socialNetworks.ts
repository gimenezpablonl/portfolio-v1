import { Icon } from "@icons-pack/react-simple-icons";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

interface SocialNetwork {
  name: string;
  url: string;
  icon: Icon;
}

export const socialNetworks: SocialNetwork[] = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://www.github.com/gimenezpablonl",
  },
  {
    name: "Linkedin",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/gimenezpablonl/",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://www.instagram.com/gimenezpablonl/",
  },
  {
    name: "Facebook",
    icon: FiFacebook,
    url: "https://www.facebook.com/gimenezpablonl/",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://www.twitter.com/gimenezpablonl/",
  },
];
