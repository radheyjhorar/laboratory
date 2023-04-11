import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css';
import api from '../../api/API';

function Header() {

        return (
            <>
            <header>
                <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4 static-top shadow'>
                    <div className="input-group ms-3">
                        <div className="form-outline w-18">
                            <input type="search" id="search" className="form-control" />
                        </div>
                        <button onClick="" type="button" className="btn btn-primary">
                            <FontAwesomeIcon icon="fas fa-search" />
                        </button>
                    </div>
                    <ul className='navbar-nav'>
                        <li className='me-4'>
                            <Link to="login" className=''>
                                <div className='btn btn btn-primary'>Login</div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>




            // <nav className="navbar nav-bg-color align-items-center">    
            //             {/* <button className="App-link" onClick={displayRazorpay}>
            //         Pay ₹500
            //     </button> */}
            // </nav>
         </>
        );
    }
   
export default Header;  