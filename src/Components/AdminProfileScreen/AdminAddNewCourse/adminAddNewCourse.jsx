import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { NativeSelect } from '@material-ui/core';
import Title from '../Title/title';
import { addNewUser } from '../../../Redux/Action/adminAction';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50
    //  + rand();
    const left = 50
    // + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    paper: {
        position: 'absolute',
        width: 700,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[4],
        padding: theme.spacing(2, 4, 3),
    },
}));

function AdminAddNewCourse(props) {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [newUser, setNewUser] = React.useState({
        addNewUser: {
            maKhoaHoc: '',
            biDanh: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: '',
            danhGia: '',
            hinhAnh: '',
            maNhom: '',
            ngayTao: '',
            maDanhMucKhoaHoc: '',
            taiKhoanNguoiTao: '',
        },
        errors: {
            maKhoaHoc: '',
            biDanh: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: '',
            danhGia: '',
            hinhAnh: '',
            maNhom: '',
            ngayTao: '',
            maDanhMucKhoaHoc: '',
            taiKhoanNguoiTao: '',
        },
    });

    const handleChange = e => {
        let { name, value } = e.target;
        let errorMessage = '';
        if (value === "") {
            errorMessage = name + ' is required!';
        }
        //Kiểm tra lỗi 
        let addNewUserUpdate = { ...newUser.addNewUser, [name]: value };
        let errorsUpdate = { ...newUser.errors, [name]: errorMessage };
        setNewUser({
            addNewUser: addNewUserUpdate,
            errors: errorsUpdate,
        });
        console.log(newUser);
    };

    const handleSubmit = e => {
        e.preventDefault();
        let valid = true;
        for (let errorName in newUser.errors) {
            if (newUser.errors[errorName] !== "") //1 trong các thuộc tính user.errors ! rỗng  
            {
                valid = false;
            }
        }
        for (let valueNotFind in newUser.addNewUser) {
            if (newUser.addNewUser[valueNotFind] === "") //2 trong các thuộc tính user.userLogin = rỗng 
            {
                valid = false;
            }
        }
        if (valid) {
            props.dispatch(addNewUser(newUser.addNewUser, props.history));
        } else {
            alert('Please check your Email and Password');
        }
    }

    return (
        <React.Fragment>
            <div>
                <Button color="primary" variant="contained" type="button" onClick={handleOpen}>
                    ADD COURSE
                </Button>
            </div>
            <Modal
                disablePortal
                disableEnforceFocus
                // disableAutoFocus
                // aria-labelledby="simple-modal-title"
                // aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="container" onSubmit={handleSubmit}>
                        <Title>
                            Add New Course
                        </Title>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField required label="Course Code" name="maKhoaHoc" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required label="Code Name" name="biDanh" onChange={handleChange} type="password" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required label="Course Name" name="tenKhoaHoc" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required label="Picture" name="hinhAnh" onChange={handleChange} fullWidth />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField required label="Group Code" name="maNhom" onChange={handleChange} fullWidth />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField required label="Date" name="ngayTao" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required label="Ma Danh muc" name="maDanhMucKhoaHoc" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required label="Creator" name="taiKhoanNguoiTao" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <FormControl required className={classes.formControl} >
                                    <InputLabel>User Code</InputLabel>
                                    <NativeSelect
                                        name="maDanhMucKhoaHoc"
                                        value={addNewUser.maDanhMucKhoaHoc}
                                        onChange={handleChange}
                                    >
                                        <option value="HV">HV</option>
                                        <option value="GV">GV</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <FormControl required className={classes.formControl} >
                                    <InputLabel>Group Code</InputLabel>
                                    <NativeSelect
                                        name="maNhom"
                                        onChange={handleChange}
                                    >
                                        <option value="GP01">GP01 (Default)</option>
                                        <option value="GP02">GP02</option>
                                        <option value="GP03">GP03</option>
                                        <option value="GP04">GP04</option>
                                        <option value="GP05">GP05</option>
                                        <option value="GP06">GP06</option>
                                        <option value="GP07">GP07</option>
                                        <option value="GP08">GP08</option>
                                        <option value="GP09">GP09</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" color="secondary" variant="contained" className={classes.button}>Add New</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default connect()(AdminAddNewCourse);