import HomeComponent from "../components/Home";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";


export default function Home() {
  return (
    <div>
      <HomeComponent />
      <AboutPage />
      <ContactPage />
    </div>
  );
}
