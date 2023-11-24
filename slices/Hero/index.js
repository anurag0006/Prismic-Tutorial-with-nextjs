import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section className="md:pt-4 md:px-[10vw] py-8 px-[5vw]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <PrismicRichText field={slice.primary.heading} components={{
          heading1: ({ children }) => <h1 className="lg:text-7xl md:text-5xl text-4xl md:text-center font-bold text-slate-700 ">{children}</h1>
        }} />
        <PrismicRichText field={slice.primary.body} components={{
          paragraph: ({ children }) => <p className="md:text-center font-[500] text-2xl text-slate-600 font-sans ">{children}</p>
        }} />

        <PrismicNextLink field={slice.primary.button_link} className="px-3 py-2 border rounded">
          <>{slice.primary.button_text}</>
        </PrismicNextLink>

        <PrismicNextImage field={slice.primary.image} className="max-w-4xl w-full " />



      </div>


    </section>
  );
};

export default Hero;
