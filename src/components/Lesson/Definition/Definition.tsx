// import { useContext } from "react";

// import AuthContext from "../../store/auth-context";
// import LangContext from "../../store/lang-context";

// import Modal from "../UI/Modal";
// import classes from "./Definition.module.css";
// import loadingSpinner from "../../assets/spinner.jpg";

// const Definition = (props) => {
//   const authCtx = useContext(AuthContext);

//   const addWordHandler = (language) => {
//     (async function () {
//       try {
//         const response = await fetch("http://localhost:3000/api/v1/words", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: authCtx.token,
//           },
//           body: JSON.stringify({
//             word: {
//               name: props.phrase,
//               translation: props.translation,
//               language,
//             },
//           }),
//         });
//         if (!response.ok) console.log("Authentication failed.");
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   };

//   return (
//     <LangContext.Consumer>
//       {(langCtx) => {
//         return (
//           <Modal onHide={props.onHide} topClick={props.topClick}>
//             <div className={classes.translation}>
//               <div>
//                 {props.isLoading && (
//                   <img
//                     className="spinner"
//                     src={loadingSpinner}
//                     alt="loading spinner"
//                   />
//                 )}
//                 {!props.isLoading && <div>Phrase: {props.phrase}</div>}
//                 {!props.isLoading && <div>Definition: {props.translation}</div>}
//               </div>
//               <button
//                 className={classes.btn}
//                 onClick={addWordHandler.bind(this, langCtx.language)}
//               >
//                 Add to dictionary
//               </button>
//             </div>
//           </Modal>
//         );
//       }}
//     </LangContext.Consumer>
//   );
// };

// export default Definition;
