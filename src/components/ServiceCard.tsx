import Link from "next/link";
import { VscDash } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";

type Card = {
  title: string;
  id: number;
  description: string;
  link: string;
  color: string;
};

const ServiceCard = ({ card, fn }: { card: Card; fn: Function }) => {
  return (
    <Link href={card.link}>
      <div
        className={`group rounded-lg bg-gradient-to-br from-black via-gray-950 to-yellow-950 hover:from-black hover:via-gray-950 ${
          card.color === "blue"
            ? "hover:to-blue-800"
            : card.color === "green"
            ? "hover:to-green-800"
            : "hover:to-red-800"
        } border md:border-2 lg:border-4 border-yellow-500 w-[300px] sm:w-[400px] md:w-[220px] lg:w-[300px] xl:w-[380px] 2xl:w-[400px] h-80 sm:h-96 md:h-56 lg:h-[300px] xl:h-80 2xl:h-96 p-4 relative overflow-hidden`}
        onMouseEnter={() => fn(card.color)}
        onMouseLeave={() => fn()}
      >
        <h2 className="text-yellow-500 text-4xl md:text-[29px] lg:text-4xl xl:text-5xl font-Jaro2X text-center mt-5 md:mt-1 lg:mt-5 pb-6 md:pb-3 lg:pb-6 border-b-2 border-b-yellow-500">
          {card.title}
        </h2>

        <p className="text-slate-200 font-RobotoMono mt-6 md:mt-3 lg:mt-6 text-base md:text-[10px] lg:text-[12px] xl:text-sm 2xl:text-base md:leading-[14px] lg:leading-4 xl:leading-5 2xl:leading-7">
          {card.description}
        </p>
        <div className="flex items-center text-slate-300 absolute bottom-2 -right-6 sm:bottom-4 sm:-right-4 md:bottom-1 md:-right-7 lg:bottom-3 lg:-right-5 xl:bottom-4 xl:-right-4">
          <VscDash className="text-5xl pb-[3px]" />
          <MdKeyboardArrowRight className="text-4xl -translate-x-9 group-hover:-translate-x-7 duration-500 ease-custom" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
