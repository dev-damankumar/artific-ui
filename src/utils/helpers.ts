import React from "react";

export const addPropsToChildren = (children: React.ReactNode, props: object) => {
	return React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {...child.props, ...props,});
		}
		return child;
	});
}
