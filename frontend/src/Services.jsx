import './Service.css'; // Import Home page styles
import { FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa'; // Importing icons

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="section-content">
        <h2>Our Services</h2>
        <div className="service-cards">
          {/* Service Card 1 */}
          <div className="service-card">
            <div className="service-icon">
              <FaCode size={50} />
            </div>
            <h3>Web Development</h3>
            <p>We build responsive and high-performance websites that engage users and drive results.</p>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <div className="service-icon">
              <FaMobileAlt size={50} />
            </div>
            <h3>App Development</h3>
            <p>We create mobile applications tailored to your business, providing seamless user experiences.</p>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <div className="service-icon">
              <FaPalette size={50} />
            </div>
            <h3>UI/UX Design</h3>
            <p>We design intuitive and engaging user interfaces that ensure customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
