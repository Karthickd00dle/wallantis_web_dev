import React, { useRef, useCallback, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import HTMLFlipBook from "react-pageflip";
import "./style.scss";
import { CustomButton } from "component/common";
import { KeyboardArrowLeftOutlined } from "@mui/icons-material";
import { eCatalogueProducts } from "config";
import pageTurnSound from "assets/audio/page-flip.mp3"; // Import the sound file

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page-container" ref={ref}>
      {props.children}
    </div>
  );
});

const ECatalogueBook = () => {
  const book = useRef();
  const audioRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  // Function to play the page turn sound
  const playPageTurnSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
      audioRef.current.play();
    }
  };

  // Callback when a page is turned
  const onFlip = useCallback(
    (e) => {
      const currentPageNumber = e.data;

      // Only play the sound if the page has actually turned
      if (currentPageNumber !== currentPage) {
        playPageTurnSound();
        setCurrentPage(currentPageNumber);
      }
    },
    [currentPage]
  );

  useEffect(() => {
    // Preload the audio when the component mounts
    audioRef.current.load();

    // Pause the audio when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={pageTurnSound} preload="auto" />
      <HTMLFlipBook
        showCover={true}
        onFlip={onFlip}
        ref={book}
        width={750}
        height={620}
        onInit={({ object }) => {
          console.log(object.events);
        }}
      >
        {eCatalogueProducts.map(({ id, page_no, image }) => (
          <Page
            key={id}
            number={page_no}
            getPageCount={(c) => console.log(c, "count")}
          >
            <img
              height="100%"
              width="100%"
              src={image}
              alt={`img-${page_no}`}
            />
          </Page>
        ))}
      </HTMLFlipBook>
    </>
  );
};

export const ECatalogue = ({ isOpen, setOpenCatalogue }) => {
  return (
    <div>
      <Dialog className="dialog-container" open={isOpen}>
        <div className="d-flex align-items-center row">
          <div className="col-5">
            <CustomButton
              startIcon={<KeyboardArrowLeftOutlined />}
              variant="contained"
              className="back-to-website p-3"
              onClick={() => setOpenCatalogue(false)}
            >
              <label className="back-to-website-label cursor-pointer">
                Back to Website
              </label>
            </CustomButton>
          </div>
          <div className="col-6 label-container">
            <label className="label-wall">Wall</label>
            <label>antics</label>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <ECatalogueBook />
          </div>
        </div>
      </Dialog>
    </div>
  );
};
