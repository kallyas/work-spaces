import './App.css';
import Footer from './components/Footer';
import FooterMapCard from './components/FooterMapCard';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import MainSection from './components/MainSection';
import Layout from './components/Layout';
import IntroSection from './components/IntroSection';

function App() {
  return (
    <Layout>
      <IntroSection />
       <MainSection />
      <HowItWorks />
      <Testimonials />
      <FooterMapCard />
      <Footer />
      </Layout>
  );
}

export default App;
