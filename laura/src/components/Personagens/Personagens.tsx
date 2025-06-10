
import { Box } from '@mui/material'
import Personagem from './Personagem'
import laura from '../../assets/laura.png'
import hp from '../../assets/hp.png'
import dica2 from '../../assets/hp.png'
import gustavo from '../../assets/gustavo.png'
import Title from '../Title/Title'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Personagens = () => {
    const navigate = useNavigate()

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Personagem imagem={laura} nome="Laura" onClick={() => navigate('/missoes')}    />

            </Box>
       
        </Box>
    )
}

export default Personagens