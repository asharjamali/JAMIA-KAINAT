import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const CollegeAddress = () => {
  return (
    <div className="flex gap-4 my-8 max-w-2xl flex-col sm:flex-row">
      <div>
        <Image
          className="border-2 border-primary-regular rounded-sm shadow-md mx-auto"
          src={"/MEC Logo.jpeg"}
          width={150}
          height={150}
          alt="Mewat Engineering college "
        />
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-primary-regular">
          Mewat Engineering College , Nuh Mewat
        </h4>
        <div className="flex gap-4 py-4 items-center">
          <FontAwesomeIcon className="text-4xl ml-4" icon={faLocationDot} />
          <address>
           Palla, District Nuh, Mewat, <br />
           Haryana-122107 India
          </address>
        </div>
      </div>
    </div>
  );
};

export default CollegeAddress;





