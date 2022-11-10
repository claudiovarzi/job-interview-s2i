import React from 'react';
import styles from './Calendar.module.css';
import User from '../../components/User/User';
import DateSelector from '../../components/MonthSelector/DateSelector';
import Week from '../../components/Week/Week';

const Calendar = () => {
	return (
		<div className={styles.calendar}>
			<User />
			<DateSelector />
			<Week />
		</div>
	);
};

export default Calendar;
