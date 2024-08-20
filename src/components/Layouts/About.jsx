const About = () => {
  return (
    <section className=" w-full grid grid-cols-1  md:grid-cols-[0.75fr,1fr,0.75fr] ">
      <div className="bg-[url('../../../assets/images/image-about-dark.jpg')] w-full   h-[18rem] md:h-full  bg-center bg-no-repeat md:bg-cover "></div>
      <div className="py-8 mx-auto md:py-6 lg:py-8 px-9 md:px-6   ">
        <h3 className="text-VeryDarkGray font-semibold text-lg  mb-2 ">
          About our furniture
        </h3>
        <p className="text-sm text-DarkGray mb-3 lg:text-base ">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div>
        <div className="bg-[url('../../../assets/images/image-about-light.jpg')] w-full h-[18rem] md:h-full bg-center bg-no-repeat md:bg-cover "></div>
      </div>
    </section>
  );
};

export default About;
