import Image from "next/image";
import Value1 from "public/value1.png";
import Value2 from "public/value2.png";
import Value3 from "public/value3.png";
import { SectionTitle } from "src/components/SectionTitle";

const ITEMS = [
  {
    title: "価値観01",
    src: Value1,
    text1: `過程を公開する`,
    text2: `社会的な課題を、
問題提起→解決方法の模索→検証→考察→検証、などのように全て公開する（透明性）`,
  },
  {
    title: "価値観02",
    src: Value2,
    text1: `仲間を集める`,
    text2: `過程を都度発信し、
共感を集め、
同じ価値観を共有できる仲間を集める
（コミュニティ）`,
  },
  {
    title: "価値観03",
    src: Value3,
    text1: `チャレンジする`,
    text2: `テキストテキストテキストテキストテキストテキストテキスト`,
  },
];

export const Values = () => {
  return (
    <section id="values">
      <SectionTitle title="価値観" lead="VALUES" position="center" />
      <br />
      <br />
      <div className="container mx-auto">
        <div className="md:flex justify-between items-center">
          {ITEMS.map((item, index) => {
            return (
              <ul className="basis-1/3 text-center text-text-green">
                {(() => {
                  if (index == ITEMS.length - 1) {
                    return (
                      <li>
                        <Image
                          src={item.src}
                          alt="value1"
                          width={150}
                          height={150}
                        />
                        <br />
                        <br />
                        <p className="text-center font-bold text-2xl text-text-green">
                          {item.title}
                        </p>
                        <br />
                        <p className="text-center text-xl underline whitespace-pre-wrap">
                          {item.text1}
                        </p>
                        <br />
                        <p className="text-center whitespace-pre-wrap">
                          {item.text2}
                        </p>
                      </li>
                    );
                  } else {
                    return (
                      <div className="border-r-2 border-border-green">
                        <li>
                          <Image
                            src={item.src}
                            alt="value1"
                            width={150}
                            height={150}
                          />
                          <br />
                          <br />
                          <p className="text-center font-bold text-2xl text-text-green">
                            {item.title}
                          </p>
                          <br />
                          <p className="text-center text-xl underline whitespace-pre-wrap">
                            {item.text1}
                          </p>
                          <br />
                          <p className="text-center whitespace-pre-wrap">
                            {item.text2}
                          </p>
                        </li>
                      </div>
                    );
                  }
                })()}
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};
