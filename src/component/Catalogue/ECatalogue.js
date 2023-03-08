import React from "react";
import Dialog from "@mui/material/Dialog";
import HTMLFlipBook from "react-pageflip";
import "./style.scss";
import { CustomButton } from "component/common";
import { KeyboardArrowLeftOutlined } from "@mui/icons-material";
import { eCatalogueProducts } from "config";
import { useRef } from "react";
import { useCallback } from "react";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page-container" ref={ref}>
      {props.children}
    </div>
  );
});

const ECatalogueBook = () => {
  const book = useRef();
  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);

  // const handlePage = (pgno) => {
  //   return book.current.pageFlip().flip(pgno);
  // };

  return (
    <>
      <HTMLFlipBook
        showCover={true}
        onFlip={onFlip}
        ref={book}
        width={625}
        height={500}
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

export const ECatalogue = ({
  isOpen,
  setOpenCatalogue,
  handleCataloguePage,
}) => {
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
          <div className=" d-flex justify-content-center pt-5">
            <ECatalogueBook />
          </div>
        </div>
      </Dialog>
    </div>
  );
};
