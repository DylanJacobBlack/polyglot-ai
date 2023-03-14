import Modal from "../UI/Modal";
import classes from "./Definition.module.css";

const Definition = (props) => {
  // const authCtx = useContext(AuthContext);

  // const addWordHandler = (language) => {
  //   (async function () {
  //     try {
  //       const response = await fetch("http://localhost:3000/api/v1/words", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: authCtx.token,
  //         },
  //         body: JSON.stringify({
  //           word: {
  //             name: props.phrase,
  //             translation: props.translation,
  //             language,
  //           },
  //         }),
  //       });
  //       if (!response.ok) console.log("Authentication failed.");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // };

  return (
    <Modal onHide={props.onHide} topClick={props.topClick}>
      <div className={classes.translation}>
        <div>
          {props.isLoading && "loading"}
          {!props.isLoading && <div>Phrase: {props.phrase}</div>}
          {!props.isLoading && <div>Definition: {props.translation}</div>}
        </div>
        <button
          className={classes.btn}
          // onClick={addWordHandler.bind(this, langCtx.language)}
        >
          Add to dictionary
        </button>
      </div>
    </Modal>
  );
};

export default Definition;
