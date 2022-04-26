import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
import { useState } from "react";
import styles from "../styles/Navbar.module.css"


export default function Navbar() {

   const [Open, setOpen] = useState(false)

   const menuToggle = () => {
      setOpen(!Open)
   }

   return (
      <header>
         <nav className={Open ? `${styles.responsive_nav_bar}` : `${styles.nav_bar}`}>
            <Image src="/image/rocketseat.svg" width="200px" height="50px"></Image>
            <ul>
               <li><Link href="#" >Starter</Link></li>
               <li><Link href="#">Bootcamp</Link></li>
               <li><Link href="#">Comunidade</Link></li>
               <li><Link href="#">Blog</Link></li>
            </ul>

            <div className={styles.menu_icon} onClick={menuToggle}>
               <div className={styles.one}></div>
               <div className={styles.two}></div>
               <div className={styles.three}></div>
            </div>
         </nav>

         <div className={Open ? `${styles.responsive_list}` : `${styles.close}`}>
            <ul>
               <li><Link href="#" >Starter</Link></li>
               <li><Link href="#">Bootcamp</Link></li>
               <li><Link href="#">Comunidade</Link></li>
               <li><Link href="#">Blog</Link></li>
            </ul>
         </div>

         {/* <nav className={styles.responsive_nav_bar} >
            <div className={styles.responsive_nav_bar_container}>
               <div className={styles.logo}>
                  <Image src="/image/rocketseat.svg" width="200px" height="50px"></Image>
               </div>
               <div className={styles.menu_toggle} >
                  <div className={styles.one}></div>
                  <div className={styles.two}></div>
                  <div className={styles.three}></div>
               </div>
            </div>
            <dir className={styles.responsive_nav_bar_list}>
               <ul>
                  <li><Link href="#" >Starter</Link></li>
                  <li><Link href="#">Bootcamp</Link></li>
                  <li><Link href="#">Comunidade</Link></li>
                  <li><Link href="#">Blog</Link></li>
               </ul>
            </dir>
         </nav> */}
      </header>
   )
}