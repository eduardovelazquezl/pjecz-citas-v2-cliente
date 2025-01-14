import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { RecoverAccount } from '../../actions/AuthActions'


const cleanFormData = {
    email: '',
    email2: '',
}

const RecoverAccountScreen = () => {

    const [formData, setFormValues] = useState({
        email: '',
        email2: '',
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
        RecoverAccount(formData).then( response => {
            console.log(response)
        })
        setFormValues(cleanFormData)
        setFormSent(true)
    }

    if (formSent) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Se ha enviado su solicitud de recuperacion
                </Typography>
                <Typography variant='body1'>
                    Dentro de poco recibira un mensaje en su correo electronico.
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
                    Recuperar mi contrasena
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo electronico"
                                type="email"
                                fullWidth
                                name='email'
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo electronico"
                                type="email"
                                fullWidth
                                name='email2'
                                onChange={handleChange}
                                value={formData.email2}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                onClick={submitForm}
                            >
                                Recuperar
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                <Link to='/' className='link'>
                                    Si ya tienes tu cuenta, regresa al inicio
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </ContainerCardCenter>
        )
    }

}

export default RecoverAccountScreen
