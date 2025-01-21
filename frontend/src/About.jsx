import './About.css'; // Import Home page styles
import about from './assets/about.jpg'
const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <h2>About Us</h2>
        <p>We are a company committed to delivering high-quality services to our clients. Our vision is to create innovative solutions that transform businesses and improve the lives of our customers.</p>
        
        {/* Additional Content */}
        <p>With a team of experts in various fields, we provide cutting-edge solutions that meet the unique needs of each client. Our commitment to excellence ensures that we consistently deliver outstanding results and exceed expectations.</p>

        <div className="about-content-container">
          {/* Image Section */}
          <div className="about-image-container">
            <img src={about} alt="Company" className="about-image" />
          </div>

          {/* Text Content Section */}
          <div className="about-text-container">
            <p>We focus on quality, efficiency, and customer satisfaction. Our experienced team works tirelessly to understand the unique needs of our clients and deliver customized solutions. We believe in making an impact and being a trusted partner for all your business needs.</p>
            
            {/* Call to Action Button */}
            <a href="#contact" className="cta-button">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
