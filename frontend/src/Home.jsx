
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import './Home.css'; // Import Home Page CSS

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
