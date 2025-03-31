import PageWrapper from "../../layouts/Wrapper.jsx";
import HeroSection from "../../layouts/home/HeroSection.jsx";
import NavBar from "../../components/NavBar.jsx";

export default function HomePage() {
  return (
    <PageWrapper>
      <NavBar />
      <HeroSection />
    </PageWrapper>
  );
}
