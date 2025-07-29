import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.skillsRef = React.createRef();
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.state.isVisible) {
            this.setState({ isVisible: true });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (this.skillsRef.current) {
      observer.observe(this.skillsRef.current);
    }
  }

  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map((skill, i) => {
        const animationDelay = i * 0.1;
        return (
          <div className="skill-item" key={i} style={{ animationDelay: `${animationDelay}s` }}>
            <div className="skill-content">
              <div className="skill-header">
                <i className={skill.class} style={{ 
                  fontSize: "2.5rem", 
                  marginBottom: "10px",
                  color: this.getSkillColor(skill.name)
                }}></i>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${this.state.isVisible ? 'animate' : ''}`}
                    style={{ 
                      width: this.state.isVisible ? `${skill.level}%` : '0%',
                      animationDelay: `${animationDelay + 0.5}s`
                    }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="skills" ref={this.skillsRef}>
        <div className="container">
          <div className="col-md-12">
            <h1 className="section-title">
              <span>{sectionName}</span>
            </h1>
          </div>
          <div className="skills-grid">
            {skills}
          </div>
          <div className="cv-section">
            <a href="../images/Professional CV Irene.png" target="_blank" className="cv-link">
              <div className="cv-card">
                <span className="iconify cv-icon" data-icon="ph:file-pdf" data-inline="false"></span>
                <h3>Ver CV Completo</h3>
                <p>Descarga mi currículum en formato PDF</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }

  getSkillColor(skillName) {
    const colors = {
      'HTML 5': '#e34c26',
      'CSS 3': '#1572b6',
      'React': '#61dafb',
      'Svelte': '#ff3e00',
      'JavaScript': '#f7df1e',
      'Sass': '#cc6699',
      'Java': '#ed8b00',
      'Php': '#777bb4',
      'MySql': '#4479a1'
    };
    return colors[skillName] || 'var(--primary-color)';
  }
}

export default Skills;
