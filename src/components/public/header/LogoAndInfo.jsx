import Image from "next/image";
import Button from "@components/Button";
import Link from "next/link";

const LogoAndInfo = () => {
  return (
    <div className="w-full py-2 px-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto w-full">
        <Link href={"/"}>
          <Image
            src={"/MEC Logo.jpeg"}
            alt="Mewat Engineering College"
            width={100}
            height={40}
          />
        </Link>

        {/* Responsive and closer text block */}
        <div className="ml-4 flex-1 text-left">
          <h1 className="text-2xl md:text-5xl font-bold">
            Mewat Engineering College
          </h1>
          <p className="text-lg md:text-2xl font-medium">Haryana Wakf Board</p>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <Button href={"#"} text={"Log In"} />
        </div>
      </div>
    </div>
  );
};

export default LogoAndInfo;
