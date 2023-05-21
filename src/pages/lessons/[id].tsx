import { useRouter } from "next/router";

import classes from "./Lesson.module.css";
import SideBar from "~/components/Lesson/LessonDisplay/SideBar";
import LessonDisplay from "~/components/Lesson/LessonDisplay/LessonDisplay";
import { api } from "~/utils/api";
import { useState } from "react";

const Lesson = () => {
  const router = useRouter();
  const { query } = router;
  const [callback, setCallback] = useState<(() => void) | boolean>(false);
  const { data, isLoading, isError } = api.lesson.getById.useQuery(
    query.id as string,
    { enabled: !!query.id }
  );

  return (
    <div className={classes.lesson}>
      {!isLoading && !isError && data && (
        <SideBar
          id={data.id}
          title={data.title}
          imageId={data.imageId}
          setCallback={setCallback}
        />
      )}
      {!isLoading && data && (
        <LessonDisplay
          text={data.text}
          isLoading={isLoading}
          callback={callback}
          setCallback={setCallback}
        />
      )}
    </div>
  );
};

export default Lesson;
