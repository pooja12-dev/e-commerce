import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TinyCollectionsSection from "../components/TinyCollectionSection";
import TwoImageSection from "../components/TwoImageSection";
const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section>
          {/* Image for small screens */}
          <img
            src="/our-story-sm.webp"
            alt="Our Story Small Screen"
            className="block md:hidden w-full h-screen object-cover"
          />

          {/* Image for medium and larger screens */}
          <img
            src="/our-story.webp"
            alt="Our Story"
            className="hidden md:block w-full h-auto"
          />
        </section>

        {/* Feature Section */}
        <section className="module-smallness w-full max-w-7xl mx-auto my-[10vmax] px-8 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-8">
          {/* Text Section */}
          <div className="col-span-1 flex flex-col justify-center items-end">
            <h2 className="font-atacama text-[#34474A] uppercase text-[40px] sm:text-[70px] md:text-[80px] lg:text-[90px] leading-[0.9] tracking-tight text-right ">
              <span className="flex relative items-center mb-4 lg:relative">
                <img
                  src="/about-eye.webp"
                  alt="Eye icon"
                  className="w-14 h-12 mr-4 absolute lg:absolute lg:right-36 right-36"
                />
                <span className="absolute right-0 lg:absolute lg:right-0">
                  THE
                </span>
              </span>
              <span>CULT OF</span>
              <span>SMALL</span>
              <span>NESS</span>
            </h2>
          </div>

          {/* Image Section */}
          <div className="col-span-1">
            <img
              alt="Collection of miniature objects and charms"
              loading="lazy"
              className="w-full h-auto"
              src="/charms-on-desk.webp"
            />
          </div>
        </section>

        {/* Additional Feature Section */}
        {/* <section className="module-smallness w-full max-w-7xl mx-auto my-[10vmax] px-8 xl:px-0 lg:relative">
          {/* Flex Container for Image and Initial Text */}
        {/* <div className="flex flex-col lg:h-[70vh] lg:flex-row-reverse gap-8 lg:gap-12">
          {/* Image Section */}

        {/* Initial Text Section */}
        {/* <div className="flex flex-col lg:w-1/2 lg:h-[70vh] h-full text-slate-700 space-y-4 text-[13px] md:text-[15px] flex-grow">
          <p>
            If Grainne Morton was to have a spirit animal, no doubt it would be
            the magpie. Instinctively and obsessively drawn to collecting and
            hoarding anything miniature or precious that catches her eye, many
            things you or I would overlook, Grainne has amassed an incredible
            collection of objects – all destined to find their place among the
            tales she weaves within her jewelled compositions.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img
            alt="Lady standing"
            loading="lazy"
            className="w-full h-auto object-cover"
            src="/lady-standing.webp"
          />
        </div> */}
        {/* </div> */}

        {/* Rest of the Text Section */}
        {/* <div className="mt-12 lg:flex lg:absolute lg:right-0 lg:flex-col lg:text-right lg:w-1/2 lg:pl-8 lg:pr-8 text-slate-700 space-y-4 text-[13px] md:text-[15px]">
          <p>
            Born and raised in Northern Ireland, by creative and antique-loving
            parents, Grainne was immersed in and surrounded by the traditional
            Crafts, Folklore, Music and Fairy Tales of the country. Perhaps it’s
            this beginning to her story that has now imbued her work with its
            somewhat contradictory nature? All at once vintage and contemporary,
            precious and non-precious, spontaneous and ordered, junk and
            treasure… this could well be a description of Grainne’s motherland
            itself.
          </p>
          <p>
            Her individuality, and the expression of that – primarily through
            clothes, style and the considered presentation of [her]self – is
            engrained in each piece of jewellery she makes. Each piece,
            carefully choreographed, the arranging and re-arranging of little
            objects, and precious things, moved and re-placed until they
            establish a relationship to each other. And tell a story to the
            viewer.
          </p>
          <p>
            Moving to Edinburgh, Scotland, in the late eighties to study at
            Edinburgh College of Art was the jump-off point for Grainne to
            become an avid collector of antiques and ephemera. When her parents
            visited her in Edinburgh, they would go on antique-buying trips for
            their shop at home in Northern Ireland, and Grainne would tag along.
            Her collections became her inspiration, and her inspiration became
            her work.
          </p>
          <p>
            Grainne’s work has been exhibited internationally and, in 2007, she
            was shortlisted for the Jerwood Applied Arts Prize.
          </p>
          <p>
            For a full list of current stockists, please visit our{" "}
            <a
              className="underline"
              href="/stockists"
              target="_blank"
              rel="noopener noreferrer"
            >
              stockist page
            </a>
            .
          </p>
          <p>
            Grainne lives and works in Edinburgh, Scotland, with her husband,
            two children, and thousands of tiny little objects.
          </p>
        </div> */}
        {/* </section> problem */}
      </main>
      <div className="flex justify-center items-center">
        <img src="/lab.webp" alt="Art Card" className="w-1/2 h-auto m-6" />
      </div>
      <TinyCollectionsSection />
      <TwoImageSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
