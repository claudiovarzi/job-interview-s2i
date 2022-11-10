import React from 'react';
import styles from './Week.module.css';
import weeksData from '../../data/weeksData';

const Week = () => {
	const days = weeksData.map((element) => {
		<>
			<h1 className={styles.dayName}></h1>
			<h2 className={styles.dayNumber}></h2>
		</>;
	});

	return <div className={styles.week}>{days}</div>;
};

export default Week;
