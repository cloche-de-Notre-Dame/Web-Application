import Image from "next/image";
import logoImg from "public/logo_white.png";

export const Footer = () => {
  return (
    <div className="bg-bg-black">
      <footer className="container">
        <div className="md:flex flex-col">
          <div className="text-center">
            <br />
            <p className="text-white">CREATED　BY　ENDO KEIKO</p>
            <br />
            <Image src={logoImg} alt="ロゴ" width="60" height="60" />
            <br />
            <br />
          </div>
        </div>
      </footer>
    </div>
  );
};
