import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandIcon from "assets/icons/ExpandIcon";
import { AccordionSummary, Checkbox, List, ListItem } from "@mui/material";
import "./style.scss";
import { separateAndCapitalize } from "service/helperFunctions";

export const CustomFilterAccordion = ({ title, value, index, onChange }) => {
  return (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandIcon height={10} width={10} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <label className="filter-title cursor-pointer">
          {separateAndCapitalize(title)}
        </label>
      </AccordionSummary>
      {value.map((data) => (
        <AccordionDetails key={data._id}>
          <List>
            <ListItem disablePadding>
              <div className="d-flex align-items-center">
                <Checkbox
                  name={data[title]}
                  value={data._id}
                  onChange={(e) => onChange(e, title + "Id")}
                />
                <label className="ps-1 filter-item">{data[title]}</label>
              </div>
              <label className="filter-item-count pe-3">{data.counts}</label>
            </ListItem>
          </List>
        </AccordionDetails>
      ))}
    </Accordion>
  );
};
