// import { Image, Transformation } from "cloudinary-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

interface LessonCardProps {
  id: string;
  title: string;
  level: number;
  imageId: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
  id,
  title,
  level,
  imageId,
}) => {
  const getLevel = (level: number) => {
    if (level === 1) {
      return "Newbie";
    }
    if (level === 2) {
      return "Beginner";
    }
    if (level === 3) {
      return "Intermediate";
    }
    if (level === 4) {
      return "Proficient";
    }
    if (level === 5) {
      return "Advanced";
    }
    if (level === 6) {
      return "Fluent";
    }
  };

  // const preparedUrl = url.match(
  //   /(?!\/)[^/]*(?=\.jpg|.jpeg|.png|.gif|.svg|.tiff)/g
  // )[0];

  console.log("heyo");

  return (
    <Link href={`/lessons/${id}`}>
      <div className="flex flex-col overflow-hidden w-52 h-full pointer-events-auto rounded-lg bg-white text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 hover:bg-slate-50">
        <CldImage
          className="h-36 object-cover object-top"
          width="600"
          height="600"
          src={imageId}
          alt="My Image"
        />
        <div className="p-4 flex flex-col flex-grow border-t-2">
          <div className="flex justify-between">
            <div className="font-medium text-slate-900"> {title}</div>
          </div>
          <div className="flex-grow"></div>
          <div className="mt-6 font-medium text-slate-900">
            {getLevel(level)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LessonCard;
