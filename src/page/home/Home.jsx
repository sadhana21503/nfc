import React from 'react'
import background from "../../assets/images/background.jpg"
import profile from "../../assets/images/profile.jpg"
import styles from "../home/Home.module.css"
import {Link} from 'react-router-dom';
import {
	FaInstagram,
	FaFacebook,
	FaLinkedin,
	FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
		<section className={styles.homeParent}>
			<section className={styles.homeTop}>
				<img src={background} alt="BackGround Image" />
			</section>
			<section className={styles.profilePic}>
				<img src={profile} alt="profile pic" />
			</section>
			<section className={styles.homeMid}>
				<h2>Walter White</h2>
				<p>Founder of Volar Skateboard Park </p>
			</section>
			<hr />
			<section className={styles.social}>
				<Link
					className={styles.link}
					to={"https://m.facebook.com/100095299999373/"}
				>
					<FaFacebook />
				</Link>
				<Link
					className={styles.link}
					to={"https://www.linkedin.com/company/web-sort/mycompany/"}
				>
					<FaLinkedin />
				</Link>
				<Link
					className={styles.link}
					to={"https://www.instagram.com/websort_/"}
				>
					<FaInstagram />
				</Link>
				<Link className={styles.link} to={"https://x.com/?lang=en"}>
					<FaXTwitter />
				</Link>
			</section>
			<hr />
			<section className={styles.contact}>
				<section className={styles.innerContact}>
					<FaPhoneAlt />
					<p>+91 5656565656</p>
				</section>
				<section className={styles.innerContact}>
					<MdEmail />
					<p>random@gmail.com</p>
				</section>
			</section>
			<hr />
			<section className={styles.button}>
				<button>Add to Phone</button>
			</section>
		</section>
	);
}

export default Home
