import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div id="contact" className={styles.container}>
            <div className={styles.details}>
                <a className={styles.icon} rel="noreferrer" href="https://www.linkedin.com/in/vamsi-krishna-kundurthi-323596217" target="_blank"><i className="fab fa-linkedin fa-2x"></i> </a>
                <a className={styles.icon} rel="noreferrer" href="https://github.com/Vamsi7889" target="_blank"><i className="fab fa-github fa-2x"></i> </a>
            </div>

            <div className={styles.details}>
                <a className={styles.icon} href="mailto:vamsikundurthi14@gmail.com"><i className="fas fa-envelope fa-lg"></i> vamsikundurthi14@gmail.com</a>
            </div>

            <div className={styles.details}>
                <a className={styles.icon} href="#home"><i className="fas fa-phone fa-lg"></i> 9392354799</a>
            </div>

        </div>
    )
}

export default Footer;