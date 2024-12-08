import React from "react";

import "../index.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Experience() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger />
        <AccordionContent />
      </AccordionItem>
    </Accordion>
  );
}

export default Experience;
