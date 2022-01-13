import Image from "next/image";
import SkillPng from "public/skill.png";
import { SectionTitle } from "src/components/SectionTitle";

const ITEMS = [
  {
    name: "JavaScript",
    parsent: "10%",
  },
  {
    name: "Python",
    parsent: "10%",
  },
  {
    name: "AWS",
    parsent: "0%",
  },
  {
    name: "マネージメント",
    parsent: "0%",
  },
];

export const Skill = () => {
  return (
    <section
      id="skills"
      className="bg-bg-skills-pc bg-no-repeat bg-cover py-20"
    >
      <div className="container mx-auto ">
        <div className="md:flex justify-between items-center">
          <div className="basis-1/2 text-center">
            <Image src={SkillPng} alt="skill" width={350} height={350} />
          </div>
          <div className="basis-1/2">
            <SectionTitle title="スキル" lead="Skills" position="left" />
            <br />
            <p className="text-left leading-normal whitespace-pre-wrap">
              テキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキスト
              <br />
            </p>
            <br />
            <div className="rounded bg-white p-8">
              {ITEMS.map((item) => {
                return (
                  <div>
                    <p className="text-text-green font-semibold tracking-[1px] opacity-80">
                      {item.name}
                    </p>
                    <ul className="flex">
                      <li className="w-11/12 mr-4">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-progress-pale">
                            <div
                              style={{ width: item.parsent }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap leading-normal text-white justify-center bg-bg-green"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="w-1/12 text-text-green font-semibold">
                        {item.parsent}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
