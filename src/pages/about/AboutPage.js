import Banner from "../../components/banner/banner";
import "./AboutPage.css";
import React, { useEffect, useState , Component }  from 'react'


//passing state from child to parent to child
export default function AboutPage() {
  return (        
    <>
      <Banner />
      <div className="aboutpage">
          <div className="container contact">
               <div className="row text-center">
                   <div className="col-lg-4"><i class="bi bi-telephone" style={{padding: 10}}></i>+18254490084</div>
                   <div className="col-lg-4"><i class="bi bi-envelope" style={{padding: 10}}></i>farmingtonapp@gmail.com</div>
                   <div className="col-lg-4"><i class="bi bi-house-fill" style={{padding: 10}}></i>15, Leora Court, RichmondHill, ON</div>
               </div>
           </div>
      </div>
    </>
  )
}









