import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills.map(function (skills) {
        return <li key={skills.name}> {/* return <li key={skills.name} className="skill-card"> */}
          <p>{skills.name}</p>
          <img src={skills.img} alt={skills.name + "img"} />
        </li>
      })
    }

    return (
      <section id="resume" >

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p className="skill-message">{skillmessage}</p>

            <div className="bars">
              <ul className="skills" id="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
