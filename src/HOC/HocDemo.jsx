import React, { Component } from 'react'
import Demo from './Demo'
import HomeScreen from '../Screens/Home/home';
import HOCModal from './HOCModal';
import FormNguoiDung from './FormNguoiDung'
import FormKhoaHoc from './FormKhoaHoc';
export default class HocDemo extends Component {
    state = {
        Component: HOCModal({ Component: FormNguoiDung, title: 'Thêm người dùng' })
    }
    openPopup = (formName) => {
        //Sau khi gọi HOCModal => trả về 1 component chứa giao diện Modal và phần Body là component truyền vào
        let Component = HOCModal({ Component: FormNguoiDung, title: 'Thêm người dùng' });
        if (formName !== 'formNguoiDung') {
            Component = HOCModal({ Component: FormKhoaHoc, title: 'Thêm khóa học' });
        }
        this.setState({
            Component: Component
        })
    }
    render() {
        let { Component } = this.state;
        return (
            <div>
                <Component />
                <button type="button" onClick={() => this.openPopup('formNguoiDung')} className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Thêm người dùng
                </button>
                <button type="button" onClick={() => this.openPopup('formKhoaHoc')} className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Thêm khóa học
                </button>


                {/* <Demo render={()=> { return <p>hello cybersoft</p>}}>
                    <HomeScreen></HomeScreen>
                    <HomeScreen></HomeScreen>

                </Demo> */}
            </div>
        )
    }
}
