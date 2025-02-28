import React from "react";
import styles from "./Profile.module.css";
import {Typewriter} from "react-simple-typewriter";
import {Button} from "@material-ui/core";

function Profile() {
    return (
        <div className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.heading}>Hello</h1>
                <h1 className={styles.myName}>I'm Vamsi Krishna</h1>

                <div className={styles.type}>
                    <Typewriter 
                        words = {['Front-end Developer']}
                        loop = {0}
                        typeSpeed = {100}
                        deleteSpeed = {60}
                        delaySpeed = {1000}
                    />
                </div>
                <a className={styles.resumeLink} href="https://drive.google.com/file/d/1YljHiBare4dMmQ8JdhAROgpYa-WjEfJf/view?usp=drive_link" title="Resume" rel="noreferrer" target="_blank">
                    <Button className={styles.btn} variant="contained">
                        VIEW RESUME
                    </Button>
                </a>
            </div>
        </div>

    );
}

export default Profile;