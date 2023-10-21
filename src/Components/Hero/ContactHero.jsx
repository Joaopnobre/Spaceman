import "./Hero.css";

const ContactHero = (props) => {
  return (
    <>
      <div className={props.name}>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <h3>{props.text}</h3>
          <a href={props.url} className="show">
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactHero;