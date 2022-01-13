import Image from "next/image";
import About1 from "public/about-1.png";
import About2 from "public/about-2.png";
import About3 from "public/about-3.png";
import { SectionTitle } from "src/components/SectionTitle";

const ITEMS = [
  {
    title: "趣味",
    src: About1,
    text: `テキストテキストテキスト`,
  },
  {
    title: "家族構成",
    src: About2,
    text: `テキストテキストテキスト`,
  },
  {
    title: "性格",
    src: About3,
    text: `テキストテキストテキスト`,
  },
];

export const About = () => {
  return (
    <section id="about" className="bg-bg-about-pc bg-no-repeat bg-cover py-20">
      <SectionTitle title="私について" lead="ABOUT" position="center" />
      <br />
      <div className="container mx-auto">
        <div className="md:flex justify-between items-center">
          {ITEMS.map((item) => {
            return (
              <div className="basis-1/3 text-center">
                <Image src={item.src} alt="about1" width={150} height={150} />
                <p className="text-center font-bold text-xl text-text-green">
                  {item.title}
                </p>
                <br />
                <p className="text-center leading-normal whitespace-pre-wrap">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
