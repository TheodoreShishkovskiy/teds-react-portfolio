import React from 'react'
import ProjectCards from '../../src/pages/Project'
import projects from '../projects.json'
import 'bootstrap/dist/css/bootstrap.min.css';

// Sets a props to attach to json and display the projects

function Wrapper(props) {
  return <div className='wrapper'>{props.chidlren}</div>;
}

function Portfolio () {
  return (
    <section>
      <div className='project'>
        <h1 className='title'>Portfolio of Ted Shishkovksiy:</h1>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
      {projects.map((project) => (<ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>))}
      </Wrapper>
    </section>
  )
}


export default Portfolio;