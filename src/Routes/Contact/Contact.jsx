import ContactHero from "../../Components/Hero/ContactHero";
import ContactForm from "./ContactForm";
// import Alien from "../../assets/alien.webp";
// import Foto from "../../assets/tricks.webp"

function Contact() {
  return (
    <>
      <ContactHero
        className="contact"
        name="hero-mid"
        // title="Make Contact"
        // heroImg={Foto}
      />
      <ContactForm></ContactForm>
    </>
  );
}

export default Contact;
