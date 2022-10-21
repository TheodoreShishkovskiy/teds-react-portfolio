import React from 'react';
import portfolio from '../data';
import ProjectCards from '../pages/Project';
import '../App.css';

// Sets a props to attach to json and display the projects
// Function idea from Joseph Dewoody

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

const Portfolio = () => {
  return (
    <section>
    <div className="project">
      <h1 className="title">Projects completed:</h1>
      <hr></hr>
    </div>

    <Wrapper id="card-data">
      {portfolio.map((project) => (
        <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
      ))}
    </Wrapper>
  </section>

);
}


export default Portfolio;