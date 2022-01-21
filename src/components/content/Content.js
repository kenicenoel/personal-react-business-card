import style from "./Content.module.css";
import profilePhoto from "../../images/profile_photo_personal.jpg";
import mailIcon from "../../images/mail.svg";
import linkedInIcon from "../../images/logo-linkedin.svg";
import twitterLogo from "../../images/logo-twitter.svg";
import instagramLogo from "../../images/logo-instagram.svg";
import githubLogo from "../../images/logo-github.svg";
import facebookLogo from "../../images/logo-fb-simple.svg";
export default function Header() {
	return (
		<div className={style.container}>
			<div className={style.photoContainer}>
				<img
					className={style.profilePhoto}
					src={profilePhoto}
					alt='Profile photo'
				/>
			</div>
			<div className={style.content}>
				<div className={style.bio}>
					<h1 className={style.name}>Kenice Noel</h1>
					<p className={style.jobTitle}>Software Developer</p>
					<small className={style.website}>kenicenoel.com</small>
				</div>
				<div className={style.socialLinks}>
					<button className={style.mailButton}>
						<img src={mailIcon} alt='Mail icon' />
						<span>Email</span>
					</button>
					<button className={style.linkedInButton}>
						<img src={linkedInIcon} alt='LinkedIn icon' />
						<span> LinkedIn</span>
					</button>
				</div>

				<div className={style.aboutContainer}>
					<h2 className={style.title}>About</h2>
					<p>
						Software developer with an interest in UX, mobile and the web. I'm
						always open to learning, building new and fun things and enjoy
						voluneering my time for awesome causes.
					</p>
				</div>
				<div className={style.interestsContainer}>
					<h2 className={style.title}>Interests</h2>
					<p>
						Coffee, Wine, Gaming, Audibooks and reading. Curator of smart home
						tech. Guinness World Record Certificate Holder.
					</p>
				</div>
				<div className={style.footer}>
					<div className={style.footerButton}>
						<img src={twitterLogo} alt='Twitter logo' />
					</div>
					<div className={style.footerButton}>
						<img src={facebookLogo} alt='Facebook logo' />
					</div>
					<div className={style.footerButton}>
						<img src={githubLogo} alt='GitHub logo' />
					</div>
					<div className={style.footerButton}>
						<img src={instagramLogo} alt='Instagram logo' />
					</div>
				</div>
			</div>
		</div>
	);
}
