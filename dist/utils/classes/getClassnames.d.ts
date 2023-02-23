interface CSSClasses {
    [x: string]: any;
}
declare const getClassNames: (from: CSSClasses, ...classes: (string | boolean)[]) => string;
export default getClassNames;
