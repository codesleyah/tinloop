import Banner from './componets/banner';
import Header from './componets/header';
import AboutSection from './componets/aboutSection';
import ServicesSection from './componets/servicesSection';
import WhyusSection from './componets/whyusSection';
import TalktousSection from './componets/talktousSection';
import ContactSection from './componets/contactSection';
import Footer from './componets/footer';
import TestimonialSection from './componets/testimonialSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <Banner />
      <AboutSection />
      <ServicesSection />
      <WhyusSection />
      <TalktousSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
