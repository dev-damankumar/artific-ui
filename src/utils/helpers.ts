import {Children, cloneElement, isValidElement, ReactNode} from "react";

export const addPropsToChildren = (children: ReactNode, props: object, prioritizeChildren = false) => {
	return Children.map(children, child => {
		if (isValidElement(child)) {
			if (prioritizeChildren) {
				return cloneElement(child, {...props, ...child.props});
			}
			return cloneElement(child, {...child.props, ...props,});
		}
		return child;
	});
}
