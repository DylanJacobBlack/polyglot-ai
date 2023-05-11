/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const openUploadWidget = (
  options: {
    cloudName: string;
    uploadPreset: string;
    tags: string[];
    maxImageWidth: number;
    sources: string[];
    cropping: boolean; //add a cropping step
    croppingAspectRatio: number;
    multiple: boolean; //restrict upload to a single file
    //clientAllowedFormats: [".jpg"], //restrict uploading to image files only
    maxImageFileSize: number;
  },
  callback: (error: any, result: any) => void
) => {
  return window.cloudinary.openUploadWidget(options, callback);
};

const ImageUpload: React.FC<{
  uploadImageHandler: (info: { public_id: string }) => void;
}> = ({ uploadImageHandler }) => {
  const uploadImageWidget = (e: MouseEvent) => {
    e.preventDefault();
    const myUploadWidget = openUploadWidget(
      {
        cloudName: "dqlx6iqqt",
        uploadPreset: "b5hosxyq",
        tags: ["myname"],
        maxImageWidth: 600,
        sources: ["local", "url", "camera"],
        cropping: true, //add a cropping step
        croppingAspectRatio: 1,
        multiple: false, //restrict upload to a single file
        //clientAllowedFormats: [".jpg"], //restrict uploading to image files only
        maxImageFileSize: 2000000, //restrict file size to less than 2MB
      },
      (error: any, result: { event: string; info: { public_id: string } }) => {
        if (!error && result.event === "success") {
          uploadImageHandler(result.info);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button
      className="mt-2 mb-4 flex h-48 w-48 items-center justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
      onClick={(e: unknown) => uploadImageWidget(e as MouseEvent)}
    >
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
};

export default ImageUpload;
