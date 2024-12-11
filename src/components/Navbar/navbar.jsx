import styles from './styles.module.scss';

const Navbar = () => {
  const links = [
    { name: "Products", href: "#" },
    { name: "Plans", href: "#" },
    { name: "More", href: "#" },
    { name: "Login", href: "#" },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        p
        patientgrid
      </div>

      {/* Navigation Links */}
      <div className={styles.nav}>
        {links.map((link, index) => (
          <a key={index} href={link.href} className={styles.link}>
            {link.name}
          </a>
        ))}
        <button className={styles.button}>Request ad demo</button>
       
      </div>
    </nav>
  );
};

export default Navbar;

