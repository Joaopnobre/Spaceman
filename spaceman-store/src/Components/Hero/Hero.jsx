import "./Hero.css";

const Hero = (props) => {
  return (
    <>
      <div className={props.name}>
        <img alt="HeroImg" src={props.heroImg} />
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

export default Hero;
