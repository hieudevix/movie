import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import {USERLOGIN, TYPE_USER, TOKEN} from '../../../util/setting';
export default function AdminHeader() {
    if(!localStorage.getItem(USERLOGIN)){
        return <Redirect to="/"/>
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light navAdmin">
            <NavLink className="navbar-brand" to="/"><img src="./images/logo.png" width={50} height={50} /></NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId navAdminItem">
                <form className="form-inline my-2 my-lg-0 mr-auto ">
                    <input className="form-control navSearchInput mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success navSearchButton my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav  mt-2 mr-5 mt-lg-0">
                    <li className="nav-item dropdown mr-2">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img style={{width:'30px',height:'30px',borderRadius:'10px'}} src="./images/avatar.png"/></a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" onClick={()=>{
                                localStorage.removeItem(USERLOGIN);
                                localStorage.removeItem(TYPE_USER);
                                localStorage.removeItem(TOKEN);
                                window.location.reload();
                            }}>Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )


}
