import Hero from "../../Components/Hero/Hero";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <Hero
        name="hero-mid"
        title="Make Contact"
        heroImg="https://images.pexels.com/photos/7169848/pexels-photo-7169848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <ContactForm></ContactForm>
    </>
  );
}

export default Contact;
