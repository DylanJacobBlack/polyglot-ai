import { CldImage } from "next-cloudinary";
import { useState } from "react";
import UploadWidget from "~/components/UploadWidget";

const CreateLessonForm = () => {
  const [imageId, setImageId] = useState<string | null>(null);

  const uploadImageHandler = (info: { public_id: string }) => {
    setImageId(info.public_id);
  };

  return (
    <div className="flex place-content-center">
      <div className="mt-2 w-full p-8 md:col-span-2 md:mt-5 lg:mt-5 lg:w-1/2">
        <form action="#" method="POST">
          <div className="overflow-hidden rounded-md border-2 border-gray-200 shadow-lg">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Content
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    placeholder=""
                    defaultValue={""}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image
                </label>
                {imageId ? (
                  <div className="mt-2 mb-4 flex h-48 w-48 items-center justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
