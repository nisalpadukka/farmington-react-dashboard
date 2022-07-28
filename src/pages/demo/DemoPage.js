import Banner from "../../components/banner/banner";
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


//This page show a demo of the application with gif
export default function DemoPage() {
  return (        
    <>
      <Banner />
      <div className="home">
        <section id = "demo" className="main-header gradient-bg-grey">
          <div className="container pt-3">
            <div className="row align-items-center justify-content-center">
                  <div className="col-md-5">
                  t has all you nee
                  <h2 style={{ color: 'black' }}>It has all you need</h2>
                  <p style={{ color: 'black' }}>Farmington app broadcasts agricultural news and latest findings on crop management to farmers. This app also provides information on how to reduce negative environmental impacts. It also has a platform for farmers to sell their product.</p>
                  </div>
                  <div className="col-md-5"><img src={require('./../../assets/images/screens.gif')} width="200" height="400" alt="Header image"></img></div>
              </div>
          </div>
      </section>
      </div>
    </>
  )
}









