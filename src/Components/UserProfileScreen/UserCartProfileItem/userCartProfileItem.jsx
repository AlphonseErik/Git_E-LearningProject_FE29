import React from "react";
import { connect } from "react-redux";
import { settings } from "../../../config/settings";
import { courseCanceling } from "../../../Redux/Action/userAction";

const UserCartItem = props => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Status</th>
                </tr>
            </thead> 
            <tbody> 
                {
                    props.item.map((item, index) => {
                        return (
                            <tr key={index} >
                                <td>{item.maKhoaHoc}</td>
                                <td>{item.tenKhoaHoc}</td>
                                <td>
                                    <div className="text-success">
                                        Registed
                                    </div>
                                </td>
                                <td>
                                    <button className="btn btn-danger">Cancel</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default connect()(UserCartItem);