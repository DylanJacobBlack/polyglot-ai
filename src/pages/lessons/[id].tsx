import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// import LangContext from "../store/lang-context";

import classes from "./Lesson.module.css";
import SideBar from "~/components/Lesson/LessonDisplay/SideBar";
import LessonDisplay from "~/components/Lesson/LessonDisplay/LessonDisplay";
// import loadingSpinner from "../assets/spinner.jpg"
import { api } from "~/utils/api";

const Lesson = () => {
  const router = useRouter();
  const { query } = router;
  // const langCtx = useContext(LangContext);

  const { data, isLoading, isError } = api.lesson.getById.useQuery(
    query.id as string
  );

  // useEffect(() => {
  //   langCtx.disable();
  // }, [langCtx]);

  // useEffect(() => {
  //   async function fetchLessonData() {
  //     try {
  //       setIsLoading(true);
  //       setError(null);
  //       const response = await fetch(
  //         `http://localhost:3000/api/lessons/${router.query.id}`
  //       );

  //       if (!response.ok) {
  //         throw new Error("Something went wrong.");
  //       }
  //       const data = await response.json();
  //       setLesson(data.lesson);
  //     } catch (error) {
  //       // setError(error.message);
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchLessonData();
  // }, [router.query]);

  return (
    <div className={classes.lesson}>
      {/* {isLoading && (
        <div className="spinner-container">
          <img className="spinner" src={loadingSpinner} alt="Loading spinner" />
        </div>
      )} */}
      {status !== "" && <h1>{status}</h1>}
      {status === "" && (
        <SideBar
          // title={lesson.title}
          // url={lesson.url}
          isLoading={isLoading}
          status={status}
        />
      )}
      {!isLoading && status === "" && data && (
        <LessonDisplay text={data.text} isLoading={isLoading} status={status} />
      )}
    </div>
  );
};

export default Lesson;
