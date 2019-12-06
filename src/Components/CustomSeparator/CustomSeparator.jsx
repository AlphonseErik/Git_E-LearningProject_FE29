import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function CustomSeparator(props) {
    const useStyles = makeStyles(theme=>({
        root:{
            '& > * + *':{
                marginTop:theme.spacing(2),
            },
        },
    }));
    let handleClick=(event)=>{
     event.preventDefault();
     console.info('You CLick a breacrumb');
    }
    const classes = useStyles();
    // let  {hinhAnh,tenKhoaHoc,maKhoaHoc,moTa,biDanh,soLuongHocVien,ngayTao,danhMucKhoaHoc} =props.content;
        //  console.log(danhMucKhoaHoc);
        console.log("content",props.content)
        // let renderBreck=()=>{
        //        return props.content.map((item,i)=>{
        //         return (
        //         <div>
        //             {item.danhMucKhoaHoc}
        //         </div>
        //         )
        //     })
        // }
    return (
        <div className={classes.root}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
         Delopment
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
           {/* {()=>renderBreck()} */}
           Core
        
        </Link>
                <Typography color="textPrimary">BreackBrum</Typography>
      </Breadcrumbs>
      
        </div>
    )
}
