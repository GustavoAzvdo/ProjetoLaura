import { Box, Container } from '@mui/material'
import React from 'react'
import Title from '../components/Title/Title'
import Dicas from '../components/Dicas/Dicas'
import Personagens from '../components/Personagens/Personagens'
const Home = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box>
                <Title>
                    Ola, moça! Bem vinda a um jogo com muita referência e muito amor!
                </Title>
            </Box>
            <Box>
                <Dicas />
            </Box>
            <Box sx={{ mt: 3 }}>
                <Title>
                    Escolha VOCÊ para começar!
                </Title>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt : 3}}>
                <Personagens  />
            </Box>
        </Container>
    )
}

export default Home