import React from "react";
import classes from "./newsletter.module.css";
import {AiOutlineSend} from "react-icons/ai";
import newsletterIllustration from "../../assets/get-newsletter-updates.svg"
const Newsletter = () => {
    return (
      <section id="contacts" className={classes.container}>
        <div className={classes.wrapper}>
          <h4 className={classes.subtitle}>Get Our Latest Offer</h4>
          <h2 className={classes.title}>NewsLetter</h2>
          <div className ={classes.inputContainer}>
            <input type="text" placeholder="enter email...." id="high"/>
            <AiOutlineSend className={classes.sendIcon}/>
          </div>
            <img src={newsletterIllustration} className={classes.illustration} alt=""/>
        </div>
      </section>
    )
  }
  
  export default Newsletter