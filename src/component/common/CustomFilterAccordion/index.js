import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandIcon from "assets/icons/ExpandIcon";
import { AccordionSummary, Checkbox, List, ListItem } from "@mui/material";
import "./style.scss";

export const CustomFilterAccordion = ({ title, value, index, onChange }) => {
  return (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandIcon height={10} width={10} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <label className="filter-title cursor-pointer text-capitalize">
          {title}
        </label>
      </AccordionSummary>
      {value.map((data) => (
        <AccordionDetails>
          <List>
            <ListItem disablePadding>
              <div className="d-flex align-items-center">
                <Checkbox name={data[title]} onChange={onChange} />
                <label className="ps-1 filter-item">{data[title]}</label>
              </div>
              {/* <label className="filter-item-count pe-3">
                {`(${itemCount(itemlabel, filterheader)})`}
              </label> */}
            </ListItem>
          </List>
        </AccordionDetails>
      ))}
    </Accordion>
  );
};
