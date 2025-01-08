// src/components/Header.jsx
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.nameTitle}>
        <span style={styles.name}>Ratthabhumi Peansukmanee</span>
        <span style={styles.title}>Editor</span>
      </div>
      <nav style={styles.nav}>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  nameTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  title: {
    color: 'gray',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
};

export default Header;
