import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, TextField, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { RecoverAccountConfirm } from '../../actions/AuthActions'


const cleanFormData = {
    password: '',
    password2: '',
}

const RecoverAccountConfirmScreen = () => {

    const [formData, setFormValues] = useState({
        password: '',
        password2: '',
    })
    const [formSent, setFormSent] = useState(false)

    const handleChange = (evento) => {
        const { name, value } = evento.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const submitForm = () => {
        RecoverAccountConfirm(formData).then( response => {
            console.log(response)
        })
        setFormValues(cleanFormData)
        setFormSent(true)
    }

    if (formSent) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Ha cambiado su contrasena
                </Typography>
                <Typography variant='body1'>
                    Tome nota de su nueva contrasena y guardela en un lugar seguro.
                </Typography>
                <Typography variant='body1'>
                    <Link to='/' className='link'>
                        Regresar al inicio
                    </Link>
                </Typography>
            </ContainerCardCenter>
        )
    } else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Cambiar mi contrasena
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Contrasena"
                                type="password"
                                fullWidth
                                name='password'
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contrasena"
                                type="password"
                                fullWidth
                                name='password2'
                                onChange={handleChange}
                                value={formData.password2}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                onClick={submitForm}
                            >
                                Cambiar mi contrasena
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                <Link to='/' className='link'>
                                    Si no quieres cambiarla, regresa al inicio
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </ContainerCardCenter>
        )
    }

}

export default RecoverAccountConfirmScreen
