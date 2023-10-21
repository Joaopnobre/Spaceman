import "./ContactForm.css"
function ContactForm () {
    return (<>
     <div className="form-container">
    <h1>A message to another world</h1>
    <form>
      <input placeholder="Name" ></input>
      <input placeholder="Email" ></input>
      <input placeholder="Subject" ></input>
      <textarea placeholder="Message"  rows="4"></textarea>
      <button className="contact-btn">Send Message</button>
    </form>
   </div>
    </>)
}

export default ContactForm;