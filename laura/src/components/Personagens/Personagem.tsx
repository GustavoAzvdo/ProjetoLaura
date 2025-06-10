
import { Paper, Typography } from '@mui/material'

interface PersonagemProps {
  imagem?: string
  nome?: string
  onClick?: () => void
}

const Personagem: React.FC<PersonagemProps> = ({ imagem, nome, onClick }) => {
  return (
    <Paper
      elevation={3}
      onClick={onClick}
      sx={{
        width: 180,
        height: 180,
        border: '3px solid #990000',

        borderRadius: 3,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'box-shadow 0.3s',
        boxShadow: 3,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 12,
        },
        // Efeito de luz vermelha animada no fundo
         background: `
          linear-gradient(120deg, #ffcccc 0%, #fff 60%, #ffcccc 100%),
          radial-gradient(circle at 60% 40%, rgba(255,0,0,0.25) 0%, transparent 70%)
        `,
        backgroundBlendMode: 'screen',
        backgroundSize: '200% 200%',
        animation: 'moveBg 3s ease-in-out infinite alternate',
        '@keyframes moveBg': {
          from: {
            backgroundPosition: '0% 0%, 60% 40%',
          },
          to: {
            backgroundPosition: '100% 100%, 40% 60%',
          },
        },
      }}
    >

        <img
          src={imagem} // Substitua pela sua imagem
          alt={nome}
          style={{ width: '60%', height: '50%'}}
        />
      <Typography
        variant="h6"
        sx={{
          color: '#990000',
          fontWeight: 'bold',
          fontFamily: '"Pixelify Sans", sans-serif',
          textAlign: 'center',
        }}
      >
        {nome}
      </Typography>
    </Paper>
  )
}

export default Personagem