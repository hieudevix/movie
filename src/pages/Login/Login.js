import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/UserAction';
import { USERLOGIN } from '../../util/setting';




export default function Login() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            //Hàm này gọi sẽ trả về async function
            const action = loginAction(values);

            dispatch(action);
        },
    });
    if(localStorage.getItem(USERLOGIN)) {
        return <Redirect to="/" />
    }
    return (
        <div className="login" >
            <div className="loginForm" >
                <h2 className="text-center"><NavLink to="/"><img  src="./images/logo.png"/></NavLink></h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input type="username" className="form-control input__line" placeholder="Username" name="taiKhoan" onChange={formik.handleChange} id="username" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input type="password" className="form-control input__line" placeholder="Password" name="matKhau" onChange={formik.handleChange} id="password" />
                        </div>
                    </div>
                    <div className="form-group row" style={{alignItems:'center'}}>
                        <div className="col-7" >
                            <a className="forgotPassword" href="#">Forgot your password?</a>
                        </div>
                        <div className="col-sm-5">
                            <button type="submit" className="buttonLogin">Sign in</button>
                        </div>
                        <div className="col-sm-12 row" style={{alignItems:'center',justifyContent:'center', margin:'20px 0'}}>
                            <p >Don't have account?<NavLink to="/register" className="registerLink"> Sign up now!</NavLink></p>
                        </div>
                    </div>
                </form>

            </div>

        </div>
       

    )
}
