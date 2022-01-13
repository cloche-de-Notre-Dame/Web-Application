import Image from "next/image";
import Futurepng from "public/future.png";
import { SectionTitle } from "src/components/SectionTitle";

export const Future = () => {
  return (
    <section
      id="future"
      className="bg-bg-future-pc bg-no-repeat bg-cover py-20"
    >
      <div className="container mx-auto">
        <SectionTitle
          title="3年後にやりたいこと"
          lead="Future"
          position="start"
        />
        <br />
        <div className="md:flex justify-between items-center">
          <div className="basis-1/2">
            <p className="text-left leading-normal whitespace-pre-wrap">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div className="basis-1/2 text-center">
            <Image src={Futurepng} alt="skill" width={450} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};
