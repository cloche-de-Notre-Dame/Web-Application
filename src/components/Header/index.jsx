import Image from "next/image";
import Link from "next/link";
import logoImg from "public/logo.png";
import { Link as Scroll } from "react-scroll";
import { PageHead } from "../PageHead";

const ITEMS = ["about", "skills", "values", "future"];

export const Header = () => {
  return (
    <header className="container">
      <PageHead />
      <div className="flex justify-between items-center">
        <Link href="/">
          <a>
            <Image
              src={logoImg}
              alt="ロゴ"
              width={240}
              height={120}
              placeholder="blur"
            />
          </a>
        </Link>

        <nav>
          <ul className="flex text-text-green">
            {ITEMS.map((item) => {
              return (
                <li key={item} className="mr-4 last:mr-0">
                  <Scroll
                    to={item}
                    smooth={true}
                    duration={600}
                    className="uppercase"
                  >
                    {item}
                  </Scroll>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
