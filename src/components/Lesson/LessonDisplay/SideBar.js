import classes from "./SideBar.module.css";

// import { Image, Transformation } from "cloudinary-react";

const SideBar = (props) => {
  let url;
  if (props.url) {
    url = props.url.match(
      /(?!\/)[^/]*(?=\.jpg|.jpeg|.png|.gif|.svg|.tiff)/g
    )[0];
  }

  return (
    <div className={classes.sidebar}>
      {/* <Image publicId={url} alt="lesson image">
        <Transformation height="195" width="160" crop="fill" />
      </Image> */}
      <div className={classes.info}>{props.title}</div>
      {/* <h3>{props.level}</h3> */}
    </div>
  );
};

export default SideBar;
