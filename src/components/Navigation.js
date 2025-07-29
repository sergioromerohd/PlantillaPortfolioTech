import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'home',
      isScrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // Set up intersection observer to track active section
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setState({ activeSection: entry.target.id });
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section, header');
    sections.forEach((section) => {
      this.observer.observe(section);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  handleScroll = () => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== this.state.isScrolled) {
      this.setState({ isScrolled: scrolled });
    }
  };

  scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    const { activeSection, isScrolled } = this.state;
    
    const navItems = [
      { id: 'home', label: 'Inicio' },
      { id: 'about', label: 'Sobre mí' },
      { id: 'portfolio', label: 'Proyectos' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'resume', label: 'Experiencia' }
    ];

    return (
      <nav className={`main-navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <span className="nav-logo">ID</span>
          </div>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => this.scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;