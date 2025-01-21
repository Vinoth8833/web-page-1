
import './Home.css'; // Import Home page styles

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      {/* Contact Section Content */}
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further information, feel free to reach out!</p>
      </div>

      {/* Footer Bar */}
      <footer className="footer-bar">
        <div className="footer-left">
          <p>&copy; 2025 MyWebsite. All Rights Reserved.</p>
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com" className="social-link">Facebook</a>
          <a href="https://www.twitter.com" className="social-link">Twitter</a>
          <a href="https://www.instagram.com" className="social-link">Instagram</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

