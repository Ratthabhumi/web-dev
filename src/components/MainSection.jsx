// src/components/MainSection.jsx
import Button from './Button';

const MainSection = () => {
  return (
    <main style={styles.main}>
      <div style={styles.imageContainer}>
        <img src="/profile.png" alt="Profile" style={styles.profileImage} />
      </div>
      <div style={styles.textSection}>
        <h1 style={styles.helloText}>Hello !</h1>
        <p style={styles.aboutMeHeader}>About Me</p>
        <p style={styles.aboutMeText}>
          Hi there! I'm Ratthabhumi Peansukmanee, a Computer Engineering student at King Mongkut's Institute of Technology Ladkrabang (KMITL) with a passion for web development. With a solid foundation in both hardware and software, I have honed my skills in creating efficient, user-friendly web applications.
        </p>
        <div style={styles.buttons}>
          <Button label="Resume" color="#8B4513" /> {/* Green color */}
          <Button label="Projects" color="#A0522D" /> {/* Darker green */}
          <Button label="Contact" color="#a1531b" /> {/* Teal green */}
        </div>
      </div>
    </main>
  );
};

const styles = {
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: '50px',
  },
  profileImage: {
    width: '500px', // Adjust as needed
    height: 'auto', // Maintain aspect ratio
  },
  textSection: {
    maxWidth: '500px',
  },
  helloText: {
    fontSize: '80px', // Increase the font size
    fontWeight: 'bold',
  },
  aboutMeHeader: {
    fontSize: '24px', // Increase the font size of the "About Me" header
    fontWeight: 'bold',
  },
  aboutMeText: {
    fontSize: '16px', // Increase the font size of the "Hi there" text
  },
  buttons: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  },
};

export default MainSection;
