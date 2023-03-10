import React from "react";
import classes from "./hero.module.css";
import {AiOutlineArrowDown} from 'react-icons/ai';
import bg from "../../assets/black.webp"
const Hero = () => {
    return (
      <section id="home" className ={classes.container}>
          <div className={classes.wrapper}>
            <div className ={classes.left}>
              <h2 className={classes.title}>Do you crave for delicious food</h2>
              <p className={classes.firstMsg}>But going out to take <span>food costs time...</span></p>
              <p className={classes.secondMsg}>
                Why not order<span> Pizza</span> or something<br/> <span>Delicious</span>
              </p>
              <p className={classes.desc}>
                Our restaurant always put the client above.
                They are our single most important thing for our business.
              </p>
              <div className={classes.buttons}>
                <button className={classes.buttonOrder}>Order Now!!</button>
                <button className={classes.buttonSee}><a href="#foods">See what's available<AiOutlineArrowDown/></a></button>
              </div>
            </div>
            <div className ={classes.right}>
              <img src={bg} alt="" className={classes.EatingImg}/>
            </div>
          </div>

      </section>
    )
  }
  
  export default Hero