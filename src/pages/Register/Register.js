import React from 'react';
import { NavLink } from 'react-router-dom';
import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default function Register() {
    return (
        <div className="register">
            <div className="registerForm">
                <h2 className="text-center"><NavLink to="/"><img src="./images/logo.png" /></NavLink></h2>
                <form>
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <input type="text" className="form-control input__line" placeholder="Họ Tên" id="displayName" />
                        </div>
                        <div className="col-sm-6">
                            <input type="email" className="form-control input__line" placeholder="Email" id="email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <input type="text" className="form-control input__line" placeholder="Username" id="displayName" />
                        </div>
                        <div className="col-sm-6">
                            <input type="password" className="form-control input__line" placeholder="Password" id="email" />
                        </div>
                    </div>
                    <div className="form-group row" style={{alignItems:'center'}}>
                        <div className="col-sm-4">
                            <input type="text" className="form-control input__line" placeholder="Giới Tính" id="displayName" />
                        </div>
                        <div className="col-sm-4">
                            <DatePicker style={{width:'100%'}} placeholder="Ngày Sinh" onChange={onChange} />
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control input__line" placeholder="SĐT" id="birthPlace" />
                        </div>
                    </div>
                    <div className="form-group row" >
                        <div className="col-sm-12">
                            <button type="submit" className="buttonRegister">Register</button>
                        </div>
                        <div className="col-sm-12 row" style={{ alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
                            <NavLink to="/login" className="registerLink"> Sign in now!</NavLink>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
