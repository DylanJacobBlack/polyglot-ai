import { api } from "~/utils/api";

import LessonCard from "~/components/Lesson/LessonCard";
// import loadingSpinner from "../assets/spinner.jpg";
import type { Lesson } from "@prisma/client";

const Lessons: React.FC = () => {
  const { data, isLoading } = api.lesson.getAll.useQuery();

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   if (langCtx.language !== null) {
  //     (async function () {
  //       try {
  //         setIsLoading(true);
  //         setError("");
  //         const response = await fetch("http://localhost:3000/api/v1/lessons");

  //         if (!response.ok) {
  //           throw new Error("Something went wrong.");
  //         }
  //         const lessonData = await response.json();
  //         // const filteredLessons = data.lessons.filter(
  //         //   (lesson: Lesson) => lesson.language.name === langCtx.language
  //         // );
  //         setLessons(lessonData);
  //       } catch (error: any) {
  //         setError(error.message);
  //       }
  //       setIsLoading(false);
  //     })();
  //   } else router.push("/");
  // }, [langCtx.language, router]);

  if (isLoading) {
    return <h1>Is loading...</h1>;
  }

  console.log(data)
  return (
    <div className="flex min-w-full items-center justify-center bg-white p-10">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(data ?? []).map((lesson: Lesson) => (
          <LessonCard
            key={lesson.id}
            id={lesson.id}
            title={lesson.title}
            level={lesson.level}
            imageId={lesson.imageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
