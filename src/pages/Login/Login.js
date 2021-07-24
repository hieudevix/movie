import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/UserAction';
import { TYPE_USER, USERLOGIN } from '../../util/setting';
import { Fragment } from 'react';




export default function Login() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống !').min(6,'Tài khoản tối thiếu 6 ký tự !'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').min(3,'Mật khẩu tối thiểu 3 ký tự !').max(32,'Mật khẩu tối đa 32 ký tự !')
        }),
        onSubmit: values => {
            //Hàm này gọi sẽ trả về async function
            const action = loginAction(values);
            dispatch(action);
        },
    });


    if(localStorage.getItem(USERLOGIN) && localStorage.getItem(TYPE_USER) == "\"QuanTri\""){
        return <Redirect to="/admin" />
    }
    else if(localStorage.getItem(USERLOGIN) && localStorage.getItem(TYPE_USER) === "\"KhachHang\"") {
        return <Redirect to="/" />
    }
    return (
        <Fragment>
        {/* <Header/> */}
        <div className="login" >
            <div className="loginForm col-10 col-sm-10 col-md-6 col-lg-4" >
                <h2 className="text-center"><NavLink to="/"><img  src="./images/logo.png"/></NavLink></h2>
                <h2 className="text-center">Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input type="username" className="form-control input__line" placeholder="Tài Khoản" name="taiKhoan" onChange={formik.handleChange} id="username" />
                            {formik.errors.taiKhoan? <Alert message={formik.errors.taiKhoan} type="error" showIcon /> : ''}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input type="password" className="form-control input__line" placeholder="Mật Khẩu" name="matKhau" onChange={formik.handleChange} id="password" />
                            {formik.errors.matKhau? <Alert message={formik.errors.matKhau} type="error" showIcon /> : ''}
                        </div>
                    </div>
                    <div className="form-group row" style={{alignItems:'center'}}>
                        <div className="col-7" >
                            <a className="forgotPassword" href="#">Forgot your password?</a>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5">
                            <button type="submit" className="buttonLogin ">Sign in</button>
                        </div>
                        <div className="col-sm-12 row" style={{alignItems:'center',justifyContent:'center', margin:'20px 0'}}>
                            <p >Don't have account?<NavLink to="/register" className="registerLink"> Sign up now!</NavLink></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </Fragment>
       

    )
}
