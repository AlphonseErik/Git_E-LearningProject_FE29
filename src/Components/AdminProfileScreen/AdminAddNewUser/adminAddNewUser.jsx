import React from 'react';
import {Grid} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {FormControlLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {InputLabel} from '@material-ui/core';
import {FormHelperText} from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import {Select} from '@material-ui/core';
import {NativeSelect} from '@material-ui/core';
import Title from '../Title/title';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function AddNewUser(props) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        userCode: '',
        groupCode: '',
    });

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <React.Fragment>
            <Title>
                Add New User
            </Title>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required label="Username" name="taiKhoan" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required label="Password" name="matKhau" type="password" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required label="Fullname" name="hoTen" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required label="Telephone Number" name="soDT" fullWidth />
                </Grid>
                <Grid xs={12} md={6}>
                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">User Code</InputLabel>
                        <NativeSelect
                            value={state.userCode}
                            onChange={handleChange('userCode')}
                            inputProps={{ name: 'userCode', }}>
                            <option value="" />
                            <option value="HV">HV</option>
                            <option value="GV">GV</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid xs={12} md={6}>
                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Group Code</InputLabel>
                        <NativeSelect
                            value={state.groupCode}
                            onChange={handleChange('groupCode')}
                            inputProps={{
                                name: 'groupCode',
                                // id: 'age-native-helper',
                            }}
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
                            {/* <option value={30}>Thirty</option> */}
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required label="Email" name="email" fullWidth />
                </Grid>
                {/* <Grid item xs={12} md={6}>
                    <TextField required label="User Code" name="maLoaiNguoiDung" fullWidth />
                </Grid> */}
                {/* <Grid item xs={12} md={6}>
                    <TextField required label="Group Code" name="maNhom" fullWidth />
                </Grid> */}
                {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                </Grid> */}
            </Grid>
        </React.Fragment>
    );
}

export default AddNewUser;