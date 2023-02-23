import React from 'react';
import { IAccordionHeader } from './Accordion.types';
import { IButton } from "../types/Common.types";
export declare const AccordionHeader: React.FC<Omit<IButton, 'prefix'> & IAccordionHeader>;
export default AccordionHeader;
