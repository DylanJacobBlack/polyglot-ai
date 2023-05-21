import { CldImage } from "next-cloudinary";
import type { Dispatch, SetStateAction } from "react";
import { api } from "~/utils/api";

const SideBar: React.FC<{
  id: string;
  title: string;
  imageId: string;
  setCallback: Dispatch<SetStateAction<(() => void) | boolean>>;
}> = ({ id, title, imageId, setCallback }) => {
  const deleteLesson = api.lesson.deleteLesson.useMutation();
  const deleteHandler = () => {
    setCallback(() => {
      return () => deleteLesson.mutate(id);
    });
  };

  return (
    <div className="hidden flex-col lg:flex">
      <CldImage
        className="h-48 object-cover object-top"
        src={imageId}
        alt="lesson image"
        width={200}
        height={200}
      />
      <div className="flex h-screen flex-col p-3">
        <div className="font-bold">{title}</div>
        <div className="flex-grow" />
        <button
          type="button"
          className="rounded bg-red-200 px-2 py-1 text-sm font-semibold text-black shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
      {/* <h3>{props.level}</h3> */}
    </div>
  );
};

export default SideBar;
