import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandIcon from "assets/icons/ExpandIcon";
import { AccordionSummary, Checkbox, List, ListItem } from "@mui/material";
import "./style.scss";

export const CustomFilterAccordion = ({
  itemheader,
  itemlist,
  index,
  onChange,
  wallpaperProducts,
}) => {
  return (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandIcon height={10} width={10} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <label className="filter-title cursor-pointer">{itemheader}</label>
      </AccordionSummary>
      {itemlist.map(({ itemlabel }) => (
        <AccordionDetails>
          <List>
            <ListItem disablePadding>
              <div className="d-flex align-items-center">
                <Checkbox name={itemlabel} onChange={onChange} />
                <label className="ps-1 filter-item">{itemlabel}</label>
              </div>
              <label className="filter-item-count pe-3">
                {`(${
                  wallpaperProducts.filter((item) => {
                    return item.category === itemlabel;
                  }).length
                })`}
              </label>
            </ListItem>
          </List>
        </AccordionDetails>
      ))}
    </Accordion>
  );
};
