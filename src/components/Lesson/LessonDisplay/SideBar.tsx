import { CldImage } from "next-cloudinary";

import classes from "./SideBar.module.css";

// import { Image, Transformation } from "cloudinary-react";

const SideBar: React.FC<{ title: string; imageId: string }> = ({
  title,
  imageId,
}) => {
  return (
    <div className={classes.sidebar}>
      <CldImage
        className="h-48 object-cover object-top"
        src={imageId}
        alt="lesson image"
        width={200}
        height={200}
      />
      <div className={classes.info}>{title}</div>
      {/* <h3>{props.level}</h3> */}
    </div>
  );
};

export default SideBar;
