import React from 'react';
import styles from './DateSelector.module.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';

const DateSelector = () => {
	const [collapsed, setCollapsed] = React.useState(true);

	function dropDown() {
		setCollapsed((collapsed) => !collapsed);
	}

	return (
		<div className={styles.dateSelector}>
			<AiOutlineArrowLeft className={styles.arrow} />
			<ul className={styles.monthSelector} onClick={dropDown}>
				<li>Novembre '22 ▾</li>
				{!collapsed && <DropdownMenu collapsed={collapsed} />}
			</ul>
			<AiOutlineArrowRight className={styles.arrow} />
		</div>
	);
};

export default DateSelector;
