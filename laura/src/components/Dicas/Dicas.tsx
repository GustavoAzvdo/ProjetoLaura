import { Box, Button, Modal, Typography } from '@mui/material'
import { useState } from 'react'
const Dicas = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
            <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                    backgroundColor: '#990000 !important',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#b22222 !important',
                        color: '#fff',
                    },
                    fontSize: 20
                }}
            >
                Como funciona ?
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        minWidth: 300,
                        outline: 'none'
                    }}
                >
                    <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Como o jogo funciona?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 , fontSize: 20}}>
                        Oi vida,
                        <br />
                        preparei uma surpresa pra você: um joguinho, como se fosse um quiz especial só nosso. 💖
                        Nele, você vai responder 5 perguntas sobre a gente — coisas que vivemos, queremos, ou sonhamos juntos. Cada pergunta é única, com temas diferentes, desde lembranças até vontades que temos como casal.
                        <br />
                        Mas calma, não vai ser tão fácil assim... 😏 Você vai ter a ajuda de 3 personagens, cada um com um tipo de dica diferente — então pense bem antes de usar! Use com sabedoria, porque cada ajuda pode ser decisiva.
                        <br />
                        E quando chegar na última... é a pergunta final. A mais importante. A que fecha tudo. Boa sorte, meu amor. 💌
                        Tô torcendo por você.
                        <br />
                        <strong>G</strong>
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={handleClose}
                        fullWidth
                        sx={{
                            backgroundColor: '#990000 !important',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#b22222 !important',
                                color: '#fff',
                            },
                            fontSize: 20
                        }}
                    >
                        Ok, entendi
                    </Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default Dicas