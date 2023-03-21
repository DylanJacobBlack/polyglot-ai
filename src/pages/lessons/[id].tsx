import { useRouter } from "next/router";

import classes from "./Lesson.module.css";
import SideBar from "~/components/Lesson/LessonDisplay/SideBar";
import LessonDisplay from "~/components/Lesson/LessonDisplay/LessonDisplay";
import { api } from "~/utils/api";

const Lesson = () => {
  const router = useRouter();
  const { query } = router;

  const { data, isLoading, isError } = api.lesson.getById.useQuery(
    query.id as string,
    { enabled: !!query.id }
  );

  return (
    <div className={classes.lesson}>
      {!isLoading && !isError && data && (
        <SideBar title={data.title} imageId={data.imageId} />
      )}
      {!isLoading && status === "" && data && (
        <LessonDisplay text={data.text} isLoading={isLoading} status={status} />
      )}
    </div>
  );
};

export default Lesson;
