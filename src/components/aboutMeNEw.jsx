import styles from "./style/newAboutMe.module.css"; // Import your CSS module

const Profile = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who am I?</h1>

      <div className={styles.content}>
        <div className={styles.photoFrame}>
          <img
            src="/placeholder.svg"
            alt="Profile photo"
            width="300"
            height="400"
            className={styles.profileImage}
          />
        </div>

        <div className={styles.description}>
          <p className={styles.introText}>
            A masters student who is{" "}
            <span className={styles.highlight}>talented</span>,{" "}
            <span className={styles.highlight}>motivated</span>, and{" "}
            <span className={styles.highlight}>adaptable</span>.
          </p>

          <div className={styles.binaryBackground}>
            <p className={styles.additionalInfo}>
              Passionate about technology and innovation, constantly seeking new
              challenges and opportunities to grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
