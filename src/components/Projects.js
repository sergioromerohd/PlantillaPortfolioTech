import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer", marginBottom: "2rem" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="250"
                    style={{
                      marginBottom: 0, 
                      paddingBottom: 0, 
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '15px 15px 0 0'
                    }}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <div className="portfolio-item-caption">
                    <div className="portfolio-item-caption-content">
                      Ver detalles
                    </div>
                  </div>
                </div>
                <div style={{ 
                  padding: '20px', 
                  background: 'var(--bg-primary)', 
                  borderRadius: '0 0 15px 15px',
                  border: '1px solid var(--border-color)',
                  borderTop: 'none'
                }}>
                  <p className="project-title-settings">
                    {projects.title}
                  </p>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--text-secondary)', 
                    margin: '10px 0 0 0',
                    lineHeight: '1.4'
                  }}>
                    {projects.description.substring(0, 100)}...
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="container">
          <div className="col-md-12">
            <h1>
              <span>{sectionName}</span>
            </h1>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projects}</div>
            </div>
            <ProjectDetailsModal
              show={this.state.detailsModalShow}
              onHide={detailsModalClose}
              data={this.state.deps}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
