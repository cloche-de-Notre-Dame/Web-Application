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
              世界中の文化遺産や自然遺産を何らかの形で保護する活動を目指します。
              <br />
              例えば、
              <br />
              維持管理が困難な遺産を中心に
              <br />
              ３DやVR,ARなどのデジタル上データとして残す方法を検討し、
              <br />
              メタバースなどのプラットフォームに
              <br />
              いつでもアクセスできる仮想世界遺産を創生する。
              <br />
              その場合は、セカンドクリエイターなどの進出も見据えた世界観を作りこむ。
              <br />
              手法については現在模索中だが、様々な可能性を考えたい。
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
