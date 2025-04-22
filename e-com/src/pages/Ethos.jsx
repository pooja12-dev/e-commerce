import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Ethos = () => {
  return (
    <div>
      <Header />
      {/* Image Section */}
      <div className="w-full">
        {/* Image visible on lg and md */}
        <img
          src="/lady-on-desk.webp"
          alt="Lady sitting on a desk"
          className="hidden md:block w-full object-cover"
        />

        {/* Image visible only on sm */}
        <img
          src="/ethos-sm.webp"
          alt="Alternate image for small screens"
          className="block md:hidden w-full h-screen object-cover"
        />
      </div>

      {/* Content Section */}
      <section className="w-full md:w-[86vw] max-w-3xl mx-auto my-20 px-8 md:px-0">
        <header className="text-center mb-12">
          <h1 className="font-atacama text-[#34474A] uppercase text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            ETHOS{" "}
            <span className="font-atacama italic normal-case font-normal">
              and
            </span>
            <br />
            SUSTAINABILITY
          </h1>
        </header>

        <article className="space-y-6 text-sm md:text-base text-[#34474A] text-left md:text-center max-w-2xl mx-auto">
          <p className="font-helvetica w-full md:max-w-xl mx-auto">
            Grainne Morton is a small business working with around ten talented
            and highly valued individuals. Our core creative and business
            activity takes place in our studio in Grainne's garden in Edinburgh.
          </p>
          <p className="font-helvetica w-full md:max-w-xl mx-auto text-[#34474A]">
            Grainne's garden is a tiny but very special place. Plants and
            flowers are plentiful, encouraging local wildlife to thrive. Our
            studio is small and low impact with three of the team working there
            daily.
          </p>
          <p className="font-helvetica w-full md:max-w-xl mx-auto text-[#34474A]">
            Our ethos has always been that handmade is quality made, and that
            there is beauty in breathing new life into antique and natural
            objects through our jewellery.
          </p>
          <p className="font-helvetica w-full md:max-w-xl mx-auto text-[#34474A]">
            At Edinburgh College of Art in the 90s, Grainne stood out for her
            use of vintage buttons, stamps and ephemera in her pieces. Over the
            years Grainne's collections of antique and natural objects has grown
            to meet the increasing love for her pieces. Today, many of the
            pieces we use in our production come from disused stocks of, for
            example, vintage rhinestones from old bead mills or factories no
            longer in operation.
          </p>
        </article>
      </section>

      {/* Images Grid Section */}
      <section className="w-full max-w-[1280px] mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 bg-[#FFFFFF] text-[#34474A] p-[32px] border-box">
        <div className="h-[477.212px]">
          <img
            src="/shells.webp"
            alt="Shells arrangement"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[477.212px]">
          <img
            src="/lady-looking-at-desk.webp"
            alt="Lady looking at a desk"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Callout Section */}
      <section className="text-center py-20 px-4 md:px-8 lg:px-12 mx-auto bg-white text-[#34474A] max-w-6xl">
        <blockquote className="font-freight text-[#34474A] italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-relaxed md:leading-tight text-center max-w-4xl mx-auto">
          Central to our ethos is that making our jewellery has to be as fair
          and sustainable as possible. We achieve this in three main areas:
        </blockquote>
      </section>

      {/* Subsections */}
      <section className="w-full md:w-[86vw] max-w-sm mx-auto space-y-16 text-center sm:text-left px-8 md:px-0">
        <article>
          <h2 className="font-atacama text-[#34474A] uppercase text-[30px] mobile:text-[20px] mb-3">
            Made by hand
          </h2>
          <p className="font-helvetica text-[#34474A] text-[13px] md:text-[15px]">
            All of our jewellery is made by hand using traditional techniques.
            Our small team of artisanal makers are all art college trained and
            can choose to work exclusively for Grainne Morton or on a mix of
            their own and other projects.
          </p>
        </article>

        <article>
          <h2 className="font-atacama text-[#34474A] uppercase text-[30px] mobile:text-[20px] mb-6">
            Made using recycled and fairly acquired materials
          </h2>
          <p className="font-helvetica text-[#34474A] text-[13px] md:text-[15px]">
            All of the silver we use to make our jewellery is recycled silver.
            Where possible, we re-use antique and vintage objects in our pieces.
            The gold used in our 18ct gold plating is Fairmined as defined by{" "}
            <em>The Alliance for Responsible Mining (ARM)</em>.
          </p>
        </article>

        <article>
          <h2 className="font-atacama text-[#34474A] uppercase text-[30px] mobile:text-[20px] mb-6">
            Made to order
          </h2>
          <p className="font-helvetica text-[#34474A] text-[13px] md:text-[15px]">
            The majority of our pieces are made to order, avoiding waste from
            over-stocking. We keep up to one of each piece to lend for
            photoshoots or as ‘ready to ship’ for customers who need their
            purchase quickly.
          </p>
        </article>
      </section>

      {/* Disclaimer Section */}
      <footer className=" font-helvetica  text-[#34474A] w-full md:w-[86vw] max-w-sm mx-auto my-20 px-8 md:px-0 text-[13px] md:text-[15px]">
        <p>
          *ARM: Established in 2004, ARM is a leading global expert on artisanal
          and small-scale mining (ASM). ARM works to transform the ASM sector
          into a socially and environmentally responsible activity, improving
          the quality of life for artisanal miners, their families, and
          communities.
        </p>
      </footer>

      <ImageCarousel />
      <Footer></Footer>
    </div>
  );
};

export default Ethos;
