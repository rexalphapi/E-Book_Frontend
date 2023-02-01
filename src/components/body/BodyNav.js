import React, { Component } from 'react'
import {Link } from 'react-router-dom';


export default class BodyNav extends Component {


    
    render() {
        return (
          
            
/*
         <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

        */
            <nav class="navbar navbar-expand-sm navbar-light bg-light p-4   " >
               
                    
                <button class="navbar-toggler  mt-5 btn col-xs-2  zindex-dropdown:1000 " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                
              <span class="navbar-toggler-icon ml-auto"></span>
            </button> 
            <div class="collapse navbar-collapse btn " id="navbarTogglerDemo01">
             
    
              <div className = 'container-fluid text-right mt-5'>
    
    
                <div className='d-inline-block col-lg-2 col-md-2 col-sm-4 '>  <Link to = '/home/' className = 'mr-5 ml-4 text-decoration-none ' >Overview</Link></div>
                <div className='d-inline-block col-lg-2 col-md-2 col-sm-4 ' > <Link to = '/home/categories' className = 'mr-5 text-decoration-none '>Categories</Link></div>
                <div className='d-inline-block col-lg-2 col-md-2 col-sm-4  ' ><Link to = '/home/authors' className = 'mr-5  text-decoration-none '>Authors</Link></div> 
                <div className='d-inline-block col-lg-2 col-md-2 col-sm-6 ' ><Link to = '/home/type' className = 'mr-5 text-nowrap text-decoration-none '>Book Type</Link></div>
                <div className='d-inline-block col-lg-2 col-md-2 col-sm-6 ' > <Link to = '/home/name' className = 'mr-5 text-nowrap  text-decoration-none '>Book Name</Link></div> 
                             
                             
                         
                             
                 
             </div>
             
             
            </div>
          </nav>
    
    
          


  
        )
    }
}
