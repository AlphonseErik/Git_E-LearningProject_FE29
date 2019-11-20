import React, { useState, useEffect } from 'react'
import { statement } from '@babel/template';

const SignupComponent = () => {
    const [user, setUser] = useState({
        taiKhoan: '',
        matKhau: '',
        hoTen: '',
        email: '',
        soDT: '',
        maLoaiNguoiDung: 'HV',
        maNhom: 'GP01'
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    //userEffect: dùng lifecycle ở trong functional component
    // => thay thế 3 lifecycle: didmount, didupdate, willmount

    //didmount: chạy 1 lần
    useEffect(() => {}, []);

    //chạy n lần: lần đầu và những lần sau khi nó update
    useEffect(() => {});

    //chạy lần đầu, nhũng lần sau nó sẽ kiểm demo và demo2
    //1 trong 2 thay đổi mới chạy lại
    let demo = 1;
    let demo2 = 2;
    useEffect(() => {
        console.log("useEffectwork");
        setUser({})
    }, [demo, demo2]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-5 mx-auto">
                        <form>
                            <h4 className="display-4">Đăng Ký</h4>
                            <div className="form-group">
                                <label htmlFor>Tài Khoản</label>
                                <input name="taiKhoan" onChange={handleChange} type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Mật Khẩu</label>
                                <input name="matKhau" onChange={handleChange} type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Họ Tên: </label>
                                <input name="hoTen" onChange={handleChange} type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Email</label>
                                <input name="email" onChange={handleChange} type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Số ĐT</label>
                                <input name="soDT" onChange={handleChange} type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">Đăng Ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupComponent;

