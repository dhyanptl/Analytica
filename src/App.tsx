import Header from './components/Header';
import { ReactLenis } from 'lenis/react';
import { Analytics } from '@vercel/analytics/react';
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Process from "./components/Process";
import Overview from "./components/Overview";
import Review from "./components/Review";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ReactLenis root>
    <div className="relative isolate overflow-hidden">
      <Header />
      
      <main>
        <Hero />
        <Brands />
        <Feature />
        <Process />
        <Overview />
        <Review />
        <Blog />
        <CTA />
        <Footer />
      </main>
      <Analytics />
    </div>
    </ReactLenis>
  );
}

export default App