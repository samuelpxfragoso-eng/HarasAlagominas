/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AboutHarasSection from './components/AboutHarasSection';
import OportunidadesSection from './components/OportunidadesSection';
import ReviewsSection from './components/ReviewsSection';
import InstagramSection from './components/InstagramSection';
import FAQSection from './components/FAQSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <VideoSection />
      <AboutHarasSection />
      <OportunidadesSection />
      <ReviewsSection />
      <InstagramSection />
      <FAQSection />
      <LocationSection />
      <Footer />
    </div>
  );
}

