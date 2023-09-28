import Hero from "../Components/Hero/Hero";
function Home() {
  return (
    <>
      <Hero
        name="hero"
        title="NEW COLLECTION"
        text="Enjoy your own"
        heroImg="https://images.unsplash.com/photo-1689214102672-4748922affce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
        btnText="Journey"
        url="/products"
      />
    </>
  );
}

export default Home;
