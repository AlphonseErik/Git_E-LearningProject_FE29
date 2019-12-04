import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Giohang extends Component {
    render() {
        console.log("render gio hang",this.props.giohang);
        return (
            <div>
                aksnkansak
            </div>
        )
    }
}
const mapStateToProps = state => ({giohang:state.GioHangReducer})
export default connect(mapStateToProps)(Giohang);
