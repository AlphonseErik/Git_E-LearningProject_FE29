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
    const top = 50 + rand();
    const left = 50 + rand();

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
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function AddNewUser(props) {

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
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: '',
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: '',
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
                <Button color="secondary" variant="contained" type="button" onClick={handleOpen}>
                    ADD NEW USER
                </Button>
            </div>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="container" onSubmit={handleSubmit}>
                        <Title>
                            Add New User
                        </Title>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField required label="Username" name="taiKhoan" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required label="Password" name="matKhau" onChange={handleChange} type="password" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required label="Fullname" name="hoTen" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required label="Tel Number" name="soDT" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl required className={classes.formControl} >
                                    <InputLabel>User Code</InputLabel>
                                    <NativeSelect
                                        name="maLoaiNguoiDung"
                                        value={addNewUser.maLoaiNguoiDung}
                                        onChange={handleChange}
                                    >
                                        <option value="HV">HV</option>
                                        <option value="GV">GV</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl required className={classes.formControl} >
                                    <InputLabel>Group Code</InputLabel>
                                    <NativeSelect
                                        name="maNhom"
                                        onChange={handleChange}
                                    >
                                        <option value="GP01">GP01</option>
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
                            <Grid item xs={12} md={6}>
                                <TextField required label="Email" name="email" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button type="submit" color="secondary" variant="contained" className={classes.button}>Add New</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default connect()(AddNewUser);