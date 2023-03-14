import { api } from "~/utils/api";

import LessonCard from "~/components/Lesson/LessonCard";
import type { Lesson } from "@prisma/client";

const Lessons: React.FC = () => {
  const { data, isLoading } = api.lesson.getAll.useQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

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
