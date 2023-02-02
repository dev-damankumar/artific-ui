import React from 'react';
import getClassNames from "../../utils/classes/getClassnames";
import styles from '../Avatar.module.css';
import {IDiv} from "../../types/Common.types";

export const AvatarGroup: React.FC<{ children: React.ReactNode } & IDiv> = ({children}) => {
	return (
		<div className={getClassNames(styles, "avatar-group")}>
			{children}
		</div>
	);
};

export default AvatarGroup;
