import { CldImage } from "next-cloudinary";
import { useState, useRef } from "react";
import type { FormEvent } from "react";
import type { ErrorItem, Option } from "types";
import UploadWidget from "~/components/UploadWidget";
import Error from "~/components/formComponents/Error";
import Select from "~/components/formComponents/Select";
import { api } from "~/utils/api";

const CreateLessonForm = () => {
  const [imageId, setImageId] = useState<string | null>(null);
  const [selectedDifficulty, setSelected] = useState<Option | undefined>({
    id: 1,
    name: "Newbie",
  });
  const [errors, setErrors] = useState<ErrorItem[]>([]);

  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const postLesson = api.lesson.createNewLesson.useMutation();

  const uploadImageHandler = (info: { public_id: string }) => {
    setImageId(info.public_id);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: ErrorItem[] = [];
    if (!titleRef.current?.value) {
      newErrors.push({
        id: "lacksTitle",
        content: "A title is required.",
      });
    }
    if (!textRef.current?.value) {
      newErrors.push({ id: "lacksText", content: "Text is required." });
    }
    if (!imageId) {
      newErrors.push({
        id: "lacksImageId",
        content: "An image is required.",
      });
    }
    setErrors(newErrors);
    if (newErrors.length) return;
    if (
      !titleRef.current?.value ||
      !textRef.current?.value ||
      !selectedDifficulty ||
      !imageId
    ) {
      return;
    }
    postLesson.mutate({
      title: titleRef.current.value,
      text: textRef.current.value,
      level: selectedDifficulty.id as number,
      imageId,
    });
  };

  return (
    <div className="flex place-content-center">
      <div className="mt-2 w-full p-8 md:col-span-2 md:mt-5 lg:mt-5 lg:w-1/2">
        <form action="#" method="POST" onSubmit={onSubmitHandler}>
          <div className="overflow-hidden rounded-md border-2 border-gray-200 shadow-lg">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                      ref={titleRef}
                    />
                  </div>
                </div>
              </div>
              <Select
                label="Difficulty level"
                options={[
                  { id: 1, name: "Newbie" },
                  { id: 2, name: "Beginner" },
                  { id: 3, name: "Intermediate" },
                  { id: 4, name: "Proficient" },
                  { id: 5, name: "Advanced" },
                  { id: 6, name: "Fluent" },
                ]}
                selected={selectedDifficulty}
                setSelected={setSelected}
              />
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Text
                </label>
                <div className="mt-2">
                  <textarea
                    id="text"
                    name="Text"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    placeholder=""
                    defaultValue={""}
                    ref={textRef}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Image"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image
                </label>
                {imageId ? (
                  <div className="mt-2 mb-4 flex h-48 w-48 items-center justify-center rounded-md pt-5 pb-6">
                    <CldImage
                      className="h-48 object-cover object-top"
                      width="600"
                      height="600"
                      src={imageId}
                      alt="My Image"
                    />
                  </div>
                ) : (
                  <UploadWidget
                    uploadImageHandler={(info: { public_id: string }) =>
                      uploadImageHandler(info)
                    }
                  />
                )}
              </div>
              {errors.length ? <Error errors={errors} /> : null}
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLessonForm;
