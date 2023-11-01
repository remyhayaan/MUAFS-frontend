import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";

function Entry() {

    return (
        <div>
            <Header />
            <h1>home page</h1>
            <section className="hero">
<div className="content">
    <h1>Hostel Find</h1>
    <p>
          {" "}
          Trust us to get you a home away from home
        </p>
        <Link to={'/hostels'}>Start Now</Link>
      
</div>
            </section>
         </div>     
                
          
                 
    )
   }

export default Entry