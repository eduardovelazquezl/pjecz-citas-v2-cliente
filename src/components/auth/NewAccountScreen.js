import React, { useState } from 'react';
import { Button, Card, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const cleanFormData = {
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    curp: '',
    curp2: '',
    telefono: '',
    telefono2: '',
    email: '',
    email2: '',
    contrasena: '',
    contrasena2: '',
}


export const NewAccountScreen = () => {

    const [formData, setFormValue] = useState({
        nombres: '',
        apellido_paterno: '',
        apellido_materno: '',
        curp: '',
        curp2: '',
        telefono: '',
        telefono2: '',
        email: '',
        email2: '',
        contrasena: '',
        contrasena2: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const submitForm = () => {
        console.log(formData);
        setFormValue(cleanFormData);
    };

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
                            Crear una nueva cuenta
                        </Typography>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                                <Grid item md={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Nombres'
                                        type='text'
                                        variant='outlined'
                                        name='nombres'
                                        value={formData.nombres}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Apellido paterno'
                                        type='text'
                                        variant='outlined'
                                        name='apellido_paterno'
                                        value={formData.apellido_paterno}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Apellido materno'
                                        type='text'
                                        variant='outlined'
                                        name='apellido_materno'
                                        value={formData.apellido_materno}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='CURP'
                                        type='text'
                                        variant='outlined'
                                        name='curp'
                                        value={formData.curp}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='De nuevo el CURP'
                                        type='text'
                                        variant='outlined'
                                        name='curp2'
                                        value={formData.curp2}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Teléfono Celular'
                                        type='text'
                                        variant='outlined'
                                        name='telefono'
                                        value={formData.telefono}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='De nuevo el Teléfono Celular'
                                        type='text'
                                        variant='outlined'
                                        name='telefono2'
                                        value={formData.telefono2}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Correo Electrónico'
                                        type='email'
                                        variant='outlined'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='De nuevo el Correo Electrónico'
                                        type='email'
                                        variant='outlined'
                                        name='email2'
                                        value={formData.email2}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Contraseña'
                                        type='password'
                                        variant='outlined'
                                        name='contrasena'
                                        value={formData.contrasena}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='De nuevo la Contraseña'
                                        type='password'
                                        variant='outlined'
                                        name='contrasena2'
                                        value={formData.contrasena2}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant='body1'>
                                        He leído y acepto...
                                    </Typography>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label='Aviso de privacidad'
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label='Términos y condiciones de uso'
                                        />
                                    </FormGroup>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Card variant='outlined'>
                                        <Typography variant='body1'>
                                            No soy un robot
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Button
                                        variant='contained'
                                        fullWidth
                                        type='submit'
                                        onClick={submitForm}
                                    >
                                        Crear una nueva cuenta
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    <Link to='/'>
                                        Si ya tienes una cuenta, regresa a la pagina inicial
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item md={3} xs={12}></Grid>
            </Grid>
        </Container>
    );

}