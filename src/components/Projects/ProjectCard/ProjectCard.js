import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <div style={{display:'flex'}}>
            {list.demo_url?.split(",")?.map((item)=>{
              const val = item?.split(":");
              return <BtnGroup>
              <a
                className="btn PrimaryBtn"
                href={val[1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {val[0]} ➜
              </a>
            </BtnGroup>
            })}
            </div>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
