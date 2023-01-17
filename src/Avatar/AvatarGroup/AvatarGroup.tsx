import React from 'react';
import getClassNames from "../../utils/getClassnames";
import styles from '../Avatar.module.css';

export const AvatarGroup: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<div className={getClassNames(styles, "avatar-group")}>
			{children}
		</div>
	);
};

export default AvatarGroup;
