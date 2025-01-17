import React from 'react'

import { Card, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'

const CancelCitaScreen = () => {

    return (      
        <Card align='center' sx={commonSX.card}>
            <Typography variant='h5' sx={commonSX.title}>
                Cancelar una cita
            </Typography>
        </Card>
    )

}

export default CancelCitaScreen
