import { CustomDialog } from "component/common";
import React, { useState } from "react";
import "./style.scss";

export const Instructions = () => {
  const [isOpen] = useState(true);
  return (
    <div>
      <h1>Instructions</h1>
      <CustomDialog isOpen={isOpen} />
    </div>
  );
};
