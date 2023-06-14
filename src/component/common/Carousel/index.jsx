import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

const AdvancedCarousel = ({ children }) => {
  const { scrollRef, activePageIndex, goTo, pages } = useSnapCarousel();
  return (
    <>
      <ul
        ref={scrollRef}
        className="ul-scroll"
        style={{
          display: "flex",
          overflow: "auto",
        }}
      >
        {children}
      </ul>

      <ol
        style={{ display: "flex", justifyContent: "center", listStyle: "none" }}
      >
        {pages.map((_, i) => (
          <li key={i}>
            <div
              onClick={() => goTo(i)}
              className={
                i === activePageIndex
                  ? "carousel-btn-active"
                  : "carousel-btn-inactive"
              }
            ></div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default AdvancedCarousel;
