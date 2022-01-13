import Image from "next/image";
import Hero from "public/hero.png";
export const Main = () => {
  return (
    <div className="bg-bg-green">
      <div className="container">
        <div className="md:flex justify-between items-center ">
          <div className="basis-1/2">
            <h1 className=" ml-4 md:ml-24 mt-24  text-center sm:text-left text-4xl  text-white">
              Endo Keiko
            </h1>
            <br />
            <h2 className=" ml-4 md:ml-24 text-left text-3xl text-text-green">
              ～自己紹介～
            </h2>
          </div>
          <div className="basis-1/2 text-center">
            <Image src={Hero} alt="hero" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};
