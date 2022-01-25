import React, {useState, useEffect} from 'react';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';

// Styling
import './styles/style.scss';

const App = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('scroll-lock', open);
  }, [open]);

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  )
}

export default App
