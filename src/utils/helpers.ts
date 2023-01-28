import React from "react";

export const addPropsToChildren = (children: React.ReactNode, props: object, prioritizeChildren = false) => {
	return React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			if (prioritizeChildren) {
				return React.cloneElement(child, {...props, ...child.props});
			}
			return React.cloneElement(child, {...child.props, ...props,});
		}
		return child;
	});
}
