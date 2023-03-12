export const openUploadWidget = (options, callback) => {
  return window.cloudinary.openUploadWidget(options, callback);
};

const ImageUpload = () => {
  const uploadImageWidget = (e: MouseEvent)  => {
    e.preventDefault()
    const myUploadWidget = openUploadWidget(
      {
        cloudName: "dqlx6iqqt",
        uploadPreset: "r8l5helt",
        tags: ["myname"],
        maxImageWidth: 600,
        sources: ["local", "url", "camera"],
        cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      function (error, result) {
        console.log(error, result);
        if (!error && result.event === "success") {
          console.log("done!");
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="" onClick={(e: MouseEvent) => uploadImageWidget(e)}>
      Upload Image
    </button>
  );
};

export default ImageUpload;
