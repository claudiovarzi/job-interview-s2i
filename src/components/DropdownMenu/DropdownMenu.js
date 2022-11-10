import React from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = (props) => {
	const visibility = props.collapsed ? styles.hideMenu : styles.showMenu;

	return (
		<ul className={visibility}>
			<li className={styles.month}>Novembre '22</li>
			<li className={styles.month}>Dicembre '22</li>
		</ul>
	);
};

export default DropdownMenu;
