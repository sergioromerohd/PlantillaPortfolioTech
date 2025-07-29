import React, { Component } from "react";
import { Icon } from "@iconify/react";
import svelteIcon from "@iconify/icons-logos/svelte-icon";
import reactIcon from "@iconify/icons-logos/react";
import jsIcon from "@iconify/icons-logos/javascript";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="container">
          <div className="col-md-12">
            <h1>
              <span>{sectionName}</span>
            </h1>
            <div className="row center mx-auto mb-5">
              <div className="col-md-4 mb-5 center">
                <div className="polaroid">
                  <span style={{ cursor: "auto" }}>
                    <img
                      height="280px"
                      src={profilepic}
                      alt="Avatar placeholder"
                      style={{ borderRadius: '20px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '15px' }}>
                      <Icon
                        icon={jsIcon}
                        style={{ fontSize: "300%", color: "#f7df1e", transition: 'transform 0.3s ease' }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                      <Icon
                        icon={reactIcon}
                        style={{ fontSize: "300%", color: "#61dafb", transition: 'transform 0.3s ease' }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                      <Icon
                        icon={svelteIcon}
                        style={{ fontSize: "300%", color: "#ff3e00", transition: 'transform 0.3s ease' }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                    </div>
                  </span>
                </div>
              </div>

              <div className="col-md-8 center">
                <div className="col-md-10">
                  <div className="profile-card">
                    <div className="card-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '15px', marginBottom: '20px' }}>
                      <span
                        className="iconify"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="twemoji:yellow-circle"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="twemoji:green-circle"
                        data-inline="false"
                      ></span>
                    </div>
                    <div
                      className="card-body font-trebuchet text-justify ml-3 mr-3"
                      style={{
                        height: "auto",
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        color: "var(--text-primary)",
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      <br />
                      <span className="wave" style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--primary-color)' }}>{hello} :) </span>
                      <br />
                      <br />
                      <p style={{ margin: 0, fontSize: '1rem' }}>{about}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
