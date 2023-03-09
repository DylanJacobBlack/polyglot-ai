// import { Image, Transformation } from "cloudinary-react";
import { CldImage } from "next-cloudinary";

import Link from "next/link";
import { Card } from "flowbite-react";

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
    <div className="w-72">
      <Card className="backdrop-hue-rotate-180">
        <CldImage
          className="w-fill h-36 object-cover object-top"
          width="600"
          height="600"
          src={imageId}
          alt="My Image"
        />
        <div className="flex h-28 flex-col content-between gap-2">
          <Link href={`/lessons/${id}`}>
            <h3 className="font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h3>
          </Link>
          <div className="flex-grow"></div>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <h3 className="bg-gradient-to-r from-white to-blue-500 p-2 pr-5 text-right text-sm rounded-r-3xl">
              {getLevel(level)}
            </h3>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LessonCard;
