import { ReactElement } from "react";

export interface ClickableProps {
    key: string;
    text: string;
    icon: ReactElement<any, any>;
    route: string;
    isCurrentRoute?: boolean;
  }