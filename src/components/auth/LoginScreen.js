import React, { useState } from 'react';
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../css/global.css';


const cleanFormData = {
    username: '',
    password: '',
}


export const LoginScreen = () => {

    const [formData, setFormValue] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    const submitForm = () => {
        console.log(formData);
        setFormValue(cleanFormData);
    }

    const styles = {
        link: { textDecoration: 'none', color: 'inherit' }
    }

    return (
        <Container sx={{ marginTop: '40px' }}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}></Grid>
                <Grid item md={6} xs={12}>
                    <Card align='center' sx={{ padding: 4 }}>
                        <Typography variant='h5' sx={{ marginBottom: 2 }}>
                            Ingresar al Sistema de Citas
                        </Typography>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Correo electronico"
                                        type="email"
                                        fullWidth
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Contraseña"
                                        type="password"
                                        fullWidth
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Card variant='outlined'>
                                        <Typography variant='body1'>
                                            No soy un robot
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant='contained'
                                        fullWidth
                                        type='submit'
                                        onClick={submitForm}
                                    >
                                        Ingresar
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='body1'>
                                        <Link to='/recover_account' className='link'>
                                            Olvide mi contrasena
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='body1'>
                                        <Link to='/new_account' className='link'>
                                            Quiero crear una nueva cuenta
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Grid>
                <Grid item md={3} xs={12}></Grid>
            </Grid>
        </Container>
    );

}