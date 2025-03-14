import Heading2 from "@components/Heading2";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../../../public/College-Gallary/1.jpg";
import image2 from "../../../../public/College-Gallary/2.jpg";
import image3 from "../../../../public/College-Gallary/3.jpg";
import image4 from "../../../../public/College-Gallary/4.jpg";
import image5 from "../../../../public/College-Gallary/5.jpeg";
import image6 from "../../../../public/College-Gallary/6.jpg";

const Gallery = () => {
  return (
    <section className="my-6">
      <div className="max-w-screen-xl mx-auto container p-3">
        {/* Header Section */}
        <div className="w-full mb-20">
          <Heading2 headingText={"Gallery"} />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            <FontAwesomeIcon
              className="text-gray-400 text-xl mx-1"
              icon={faQuoteLeft}
            />
            Explore the essence of our college through captivating images, where
            every picture tells a story of knowledge, growth, and unforgettable
            memories.
            <FontAwesomeIcon
              className="text-gray-400 text-xl mx-1"
              icon={faQuoteRight}
            />
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex flex-wrap md:-m-2 -m-1">
          {/* Left Column */}
          <div className="flex flex-wrap md:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full h-40 lg:h-52 object-cover rounded-lg"
                width={250}
                height={150}
                src={image4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full h-40 lg:h-52 object-cover rounded-lg"
                width={250}
                height={150}
                src={image2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-60 lg:h-80 object-cover rounded-lg"
                src={image3}
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap md:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-80 lg:h-96 object-cover rounded-lg"
                src={image1}
                height={400}
                width={600}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full h-40 lg:h-52 object-cover rounded-lg"
                src={image5}
                width={250}
                height={150}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full h-40 lg:h-52 object-cover rounded-lg"
                src={image6}
                width={250}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
