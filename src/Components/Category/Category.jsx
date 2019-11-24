import React, {useEffect } from 'react'
import {connect} from 'react-redux';
import Axios from 'axios';
import CourseService from '../../Services/courseService';


const courseService = new CourseService();

const Category =(props)=> {
   
    useEffect(()=>{
        courseService.fetchCategory()
        .then(res=>{
            props.dispatch({
                type:"FETCH_DANHMUC",
                 payload:res.data
            },console.log(res.data));
        }).catch(err=>{
            console.log(err);
        })
    },[])

     
        return (
            
            <div>
            {   props.Danhmuc.map((danhmuc,index)=>{
                    return (
                       <div className="col-1">
                            {danhmuc.tenDanhMuc}
                       </div>
                    )
                })
            }
         
            </div>
        )
    
    
}

const mapStateToProps = state =>({Danhmuc:state.CategoryReducer})
export default connect(mapStateToProps)(Category)