import React from "react";
import { ColorScheme, ComponentsType } from "../../types/Common.types";
declare const applyColorScheme: (componentSelector: ComponentsType, colorScheme: ColorScheme | undefined, componentId: string) => (() => React.ReactNode) | null | undefined;
export default applyColorScheme;
