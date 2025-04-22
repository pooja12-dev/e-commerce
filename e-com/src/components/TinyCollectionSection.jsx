import React from "react";

const TinyCollectionsSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto my-20 px-8 xl:px-0">
      {/* Left side text content */}
      <div className="md:w-1/2 text-center md:text-right md:pr-16 text-[#34474A]">
        <p className="mb-8">
          For objects so small, jewellery tends to have a rather large part to
          play in people's lives… be it an engagement ring, a gift, or a special
          sentimental piece that captures something you didn't know was missing.
          It's an evocative, tiny world of possibilities that Grainne creates
          within her pieces, and her compositions, that's so alluring… you may
          be drawn to a particular precious gem, to the mythology of the 'all
          seeing eye' or the symbolism of an open palm, a moon, a lady-bird, a
          tiny piece of coral or perhaps a simple button. Grainne may be telling
          her story, but the true story begins when the jewellery ends up with
          the wearer, and you imprint your story and your interpretation in to
          the heirloom.
        </p>

        <p className="mb-8">
          Painstakingly crafted, each and every object Grainne places in to her
          compositions are delicately set by hand in silver… each casing
          measured, carefully, for a snug fit, soldered, pierced and polished,
          before placing in the tiny object, and rubbing the metal over to
          secure. Often plated with 18ct gold, or oxidised to highlight the
          enclosed jewels, the pieces finally end up all around the world.
        </p>

        <p className="mb-8">
          Grainne has a collection of jewellery available to order online in her
          shop, as well as a collection of one-off bespoke designs (often
          featuring extra special tiny collections, that can't be repeated)
          which are available for sale in the galleries & shops that stock her
          work, and some that are available for sale here, too.
        </p>

        <p>
          Grainne enjoys working to commission, so if you have something in
          mind, or have missed out on a piece before and would like to work
          together to make something similar, she is always happy to discuss
          creating a Tiny Collection, just for you.
        </p>
      </div>

      {/* Right side title */}
      <div className="md:w-1/2 flex items-start mt-10 md:mt-0">
        <h2 className="font-atacama text-[#34474A] text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[0.9] tracking-tight">
          <span className="block">TINY</span>
          <span className="block">COLLE</span>
          <span className="block">CTIONS</span>
        </h2>
      </div>
    </section>
  );
};

export default TinyCollectionsSection;
