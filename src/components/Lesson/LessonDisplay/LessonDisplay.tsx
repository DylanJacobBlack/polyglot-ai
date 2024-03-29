import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  Fragment,
} from "react";
import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useResizeDetector } from "react-resize-detector";

import classes from "./LessonDisplay.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Dialog, Transition } from "@headlessui/react";
import Definition from "../Definition/Definition";
import { useSession } from "next-auth/react";
import ConfirmationModal from "~/components/ConfirmationModal/ConfirmationModal";

const pagePaddingLeft = 60;
const pagePaddingRight = 60;
const pagePaddingTop = 48;
const pagePaddingBottom = 48;
const approxWordsPerPage = 200;
const lineHeight = 50;
interface LessonDisplayInterface {
  text: string;
  isLoading: boolean;
  callback: (() => void) | boolean;
  setCallback: Dispatch<SetStateAction<(() => void) | boolean>>;
}

const LessonDisplay = ({
  text,
  isLoading,
  callback,
  setCallback,
}: LessonDisplayInterface) => {
  const { data: sessionData } = useSession();
  const [lessonPages, setLessonPages] = useState<JSX.Element[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [topClick, setTopClick] = useState(false);
  const [translation, setTranslation] = useState({
    phrase: "",
    translation: "",
  });
  const [defIsLoading, setDefIsLoading] = useState(false);

  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;

  const wordHandler = useCallback(
    (event: React.MouseEvent<SVGTSpanElement, MouseEvent>) => {
      setModalOpen(true);
      if (event.clientY < (window.innerHeight - 30) / 2) {
        setTopClick(true);
      } else {
        setTopClick(false);
      }
      setDefIsLoading(true);
      if (!event.target) return;
      const eventTarget = event.target as HTMLElement;
      const textContent = eventTarget.textContent;
      const phrase = textContent?.trim().replace(/[,./?;':~&%$#@*^|]/g, "");
      void (async function () {
        if (sessionData && phrase) {
          try {
            const response = await fetch(`/api/translate/${phrase}`);
            const translation = (await response.json()) as {
              translatedText: string;
            };
            setTranslation({
              phrase: phrase,
              translation: translation.translatedText,
            });
            setDefIsLoading(false);
          } catch (e) {}
        }
      })();
    },
    [sessionData]
  );

  useEffect(() => {
    if (!lessonPages) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
      if (e.code === "ArrowRight" && currentPage < lessonPages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, lessonPages]);

  const onResize = useCallback(
    (width?: number, height?: number) => {
      if (isLoading === false && width && height && text) {
        const pages = [];

        let maxWidth = 300;
        let columnHeight = 200;
        if (height - pagePaddingTop - pagePaddingBottom > 200) {
          columnHeight = height - pagePaddingTop - pagePaddingBottom;
        }
        if (width - pagePaddingLeft - pagePaddingRight > 300) {
          maxWidth = width - pagePaddingLeft - pagePaddingRight;
        }

        const maxLinesPerPage = Math.round(columnHeight / lineHeight) - 2;
        const x = pagePaddingLeft;

        // # words that have been displayed
        //(used when ordering a new page of words)
        let wordCount = 0;

        const canvas: unknown = canvasRef.current;
        const context =
          canvas instanceof HTMLCanvasElement ? canvas.getContext("2d") : null;
        if (!context) return;

        context.font = "20px verdana";
        const textPara: Array<string | number> = [];
        // Pushing zeroes allows the textToLines function to detect page breaks
        text.split("\n").forEach((para) => {
          if (para) {
            textPara.push(para);
            textPara.push(0);
          } else textPara.push(0);
        });
        const textWords = textPara
          .map((para) => {
            if (typeof para !== "string") return 0;
            else return para.split(" ");
          })
          .flat();

        const getNextWords = (nextWordIndex: number) => {
          const words = textWords.slice(
            nextWordIndex,
            nextWordIndex + approxWordsPerPage
          );

          return words;
        };

        const textToLines = (
          words: Array<string | number>,
          maxWidth: number,
          maxLines: number
        ) => {
          const lines = [];

          while (words.length > 0 && lines.length <= maxLines) {
            const line = getLineOfText(words, maxWidth);
            words = words.splice(line.index + 1);
            lines.push(line);
            wordCount += line.index + 1;
          }

          return lines;
        };

        const getLineOfText = (
          words: Array<string | number>,
          maxWidth: number
        ) => {
          let line = "";
          let space = "";
          for (let i = 0; i < words.length; i++) {
            // Check if "word" value is 0. If it is, line break.
            if (words[i] === 0) {
              return { index: i, text: line + "\u00A0" };
            }
            const testWidth = context.measureText(
              `${line} ${words[i] as string}`
            ).width;
            // When tested width is greater than the maxwidth, return an index of one less
            if (testWidth > maxWidth) {
              return { index: i - 1, text: line };
            }
            line += `${space} ${words[i] as string}`;
            space = " ";
          }
          return { index: words.length - 1, text: line };
        };

        const linesToLinks = (
          lines: Array<{ index: number; text: string }>,
          i: number
        ) => {
          const linesOfLinks: Array<Array<JSX.Element>> = [];
          let linkedLine: Array<JSX.Element> = [];
          lines.forEach((line, lineIndex) => {
            line.text.split(" ").forEach((linkedWord, wordIndex) => {
              if (!linkedWord) return;
              linkedLine.push(
                <tspan
                  className={classes["linked-word"]}
                  onClick={(e) => wordHandler(e)}
                  key={`${i}${lineIndex}${wordIndex}${linkedWord}`}
                >{`${linkedWord} `}</tspan>
              );
            });
            linesOfLinks.push(linkedLine);
            linkedLine = [];
          });
          return linesOfLinks;
        };

        const drawSvg = (
          linesOfLinks: JSX.Element[][],
          x: number,
          i: number
        ) => {
          const tspans: Array<JSX.Element> = [];
          linesOfLinks.forEach((line, index) => {
            const tspan = (
              <tspan key={`page${index}-line${x}`} x={x} dy={`${lineHeight}px`}>
                {line.map((linkedWord) => linkedWord)}
              </tspan>
            );
            tspans.push(tspan);
          });

          const sText = (
            <text fontFamily="verdana" fontSize="20px" fill="#000000">
              {tspans}
            </text>
          );

          return (
            <div
              className={classes.column}
              style={{ height: height, width: width }}
              key={`page${i}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={columnHeight}
                width={width}
              >
                {sText}
              </svg>
            </div>
          );
        };

        for (let i = 0; wordCount !== textWords.length; i++) {
          const lines = textToLines(
            getNextWords(wordCount),
            maxWidth,
            maxLinesPerPage
          );
          const linesOfLinks = linesToLinks(lines, i);
          pages.push(drawSvg(linesOfLinks, x, i));
        }

        let prevPageNum;
        const pageNum = pages.length;

        if (lessonPages) prevPageNum = lessonPages.length;
        setLessonPages(pages);
        if (prevPageNum && prevPageNum > 0) {
          const newPageNumber = Math.round(
            currentPage * (pageNum / prevPageNum)
          );
          if (newPageNumber > 0) setCurrentPage(newPageNumber);
        }
      }
    },
    [isLoading, currentPage, text, lessonPages, wordHandler]
  );

  const { ref } = useResizeDetector({ onResize });

  const pageBackHandler = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const pageForwardHandler = () => {
    if (currentPage < lessonPages.length - 1) setCurrentPage(currentPage + 1);
  };

  const onHideHandler = () => {
    setTranslation({ phrase: "", translation: "" });
    setModalOpen(false);
  };

  return (
    <div className={classes.lesson}>
      <canvas ref={canvasRef} className={classes.canvas} />
      <Transition.Root show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          // initialFocus={cancelButtonRef}
          onClose={onHideHandler}
        >
          <Definition
            isLoading={defIsLoading}
            topClick={topClick}
            phrase={translation.phrase}
            translation={translation.translation}
            onHideHandler={onHideHandler}
            modalOpen={modalOpen}
          />
        </Dialog>
      </Transition.Root>
      <button className={classes.button} onClick={() => pageBackHandler()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className={classes.page} ref={ref}>
        {!isLoading && lessonPages !== null && lessonPages[currentPage]}
      </div>
      <button className={classes.button} onClick={() => pageForwardHandler()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      {callback && (
        <ConfirmationModal
          callback={callback}
          setCallback={setCallback}
          title="Delete Lesson"
          content="Are you sure you want to delete the lesson? This action cannot be undone."
          buttonText="Delete Lesson"
        />
      )}
    </div>
  );
};

export default React.memo(LessonDisplay);
