import React from 'react';
import styles from './User.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';

const User = () => {
	return (
		<div className={styles.userContainer}>
			<FaUserCircle className={styles.userIcon} />
			<div className={styles.userDetails}>
				<h1 className={styles.userName}>Maurizio Calcagno</h1>
				<div className={styles.verified}>
					<MdVerifiedUser className={styles.userVerified} />
					<span>verificato il 14 aprile 2019</span>
				</div>
				<AiFillStar className={styles.userStar} />
				<span>4.3 / 24 recensioni</span>
			</div>
		</div>
	);
};

export default User;
