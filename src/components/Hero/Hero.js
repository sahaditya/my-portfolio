import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import pp from "../../Assets/pp2.jpeg";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Manoj Sah</h1>
            <h5>Senior Software Engineer</h5>
            <p>
            I design and code scalable and distributed systems and assist teams and 
            developers in developing such systems using cutting-edge technology from start 
            to finish. Assist the organisation in making business decisions based on insights from system and feature behaviour.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src={pp}
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
