import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import classes from './navbar.module.css'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'
import {data} from "../../redux/authSlice";

const Navbar =()=>{
  const [isScrolled, setIsScrolled] = useState(false)
  const {products} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  window.onScroll = () =>{
    setIsScrolled(window.pageYoffset === 0?  false : true)
    return () => (window.onScroll = null)
  }
  const handleLogout = () =>{
    dispatch(logout())
    navigate("/login")
  }
   const handleC = () => {
      console.log(data.reducer)
   }
  
  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`} >
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/' className={classes.title}>
            FoodMania
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
          <li className={classes.listItem}>
              <a href="#">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">Contacts</a>
            </li>
            <li className={classes.listItem}>
              <a href="#foods">Food</a>
            </li>
            <li className={classes.listItem}>
              <a href="#faq">FAQ</a>
            </li>
            <li className={classes.listItem}>
              <Link to='/create' onClick={handleC}>Create</Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon}/>
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
          <button onClick ={handleLogout}
          className={classes.logout}>LOGOUT</button>
        </div>
      </div>
    </div>
  )

  }
export default Navbar