import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>YoungDev</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Collaborated on frontend architecture using React.js and TypeScript. Engaged with the team to develop scalable web structures and refine UI/UX experiences before moving into full-stack and advanced AI pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Sparkosol Multan</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Gained hands-on experience in the software development lifecycle, utilizing agile methodologies to assist in building and comprehensively testing interactive web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>ForthLogic</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Design and ship production-grade AI-powered web applications using the MERN stack. Reduced deployment cycle and managed MongoDB schemas while building 15+ RESTful APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
