import React from "react";
import styles from "./AboutMe.module.css";
import { Grid } from "@material-ui/core";
import imageURL from "../../images/profile-photo.jpg";

function AboutMe() {
    return (
        <div id="about" className={styles.container}>
            <h1 className={styles.heading}>ABOUT ME</h1>
            <Grid container spacing={4} justifyContent="center">
                <Grid xs={12} md={4} lg={3} className={styles.image}>
                    {/* <img className={styles.photograph} src="https://www.google.com/imgres?q=images%20online&imgurl=https%3A%2F%2Fbunny-wp-pullzone-3xue3q6yzy.b-cdn.net%2Fwp-content%2Fuploads%2F2024%2F10%2FiStock-1150384596-2.jpg&imgrefurl=https%3A%2F%2Fgraduate.northeastern.edu%2Fknowledge-hub%2Fbenefits-of-online-learning%2F&docid=JnlNx1VCGN8nIM&tbnid=kjzhJQaWpUnRxM&vet=12ahUKEwjTguD1i-eLAxU8cGwGHRbgIYQQM3oECGMQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwjTguD1i-eLAxU8cGwGHRbgIYQQM3oECGMQAA"  alt="profile-pic" /> */}
                    <img className={styles.photograph} src={imageURL}  alt="profile-pic" />
                </Grid>
                <Grid xs={12} md={8} className={styles.info}>
                    Hi! Myself Vamsi Krishna from Sattenapalli, India. <br/>
                    I am a Computer Science Undergradute at SRM University, Chennai. <br/>
                    I am an enthusiastic person with zeal to learn, explore and grow.
                    As of now, I am a Front-end web developer and currently exploring Backend web technologies. <br/>
                    I am also familiar with Databases such as SQL and programming language Python.   
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutMe;