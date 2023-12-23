import Banner from './componets/banner';
import Header from './componets/header';
import AboutSection from './componets/aboutSection';
import ServicesSection from './componets/servicesSection';
import WhyusSection from './componets/whyusSection';
import TalktousSection from './componets/talktousSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <Banner />
      <AboutSection />
      <ServicesSection />
      <WhyusSection />
      <TalktousSection />
    </main>
  )
}
