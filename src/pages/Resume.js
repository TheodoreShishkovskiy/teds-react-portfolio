import React from 'react'

// Display links to linkedin and resume
function Resume() {
  return(
    <section>
      {/* Links to resume and LinkedIn */}
      <h1 className='resume'>Here you can find my resume!</h1>
      <hr></hr>
      <div class="row justify-content-center" id="my-resume">
        <div class="mt-4 pl-4 pr-4">
          Young Entrepreneur who decided to add a new skill of Full Stack Development to his Portfolio. After attending UNCC Full Stack Coding Bootcamp, Ted is excited to see what he can contribute to the software development world.

          <p class="mt-4">
          <a href="https:/www.linkedin.com/in/TedMS/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Teds LinkedIn"/></a>
          </p>
        </div>

          <p>
            Here you can see the most recent <a href="https://docs.google.com/document/d/1NChsDFUXvShk5_pNAmRwmosP-mEgZlehibGjJCFEtmQ/edit?usp=sharing" class="link">Resume</a>
          <br></br>
          </p>
      </div>
{/* Text displaying coding skills */}
      <div class="justify-content-center mt-4">
        <div id="code-terms">
          <h2>Front End Experience:</h2>
          <p>HTML, CSS, Bootstrap, Bulma, Javascript, jQuery, React.js</p>
        </div>
        <div id="code-terms">
          <h2>Back End Experience:</h2>
          <p>Node.js, Express.js, SQL, Sequelize, NoSQL, MongoDB, Mongoose, Handlebars</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;