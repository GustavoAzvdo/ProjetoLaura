import { Box, Button, LinearProgress, Paper, Typography, Modal, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import Title from '../components/Title/Title'
import Personagem from '../components/Personagens/Personagem'
import hp from '../assets/hp.png'
import amora from '../assets/amora.png'
import gustavo from '../assets/gustavo.png'
import './Missoes.css'

const niveis = [
  'Muito facil',
  'Facil',
  'Normal',
  'Dificil',
  'Muito dificil'
]

const title = [
  'Missão muito fácil',
  'Missão fácil',
  'Missão normal',
  'Missão difícil',
  'Missão muito difícil'
]

const perguntas = [
  '"Tem um certo objeto feito por quatro amigos que sabiam tudo sobre o lugar onde viviam. Ele mostra coisas que ninguém deveria ver e revela caminhos que nem todo mundo conhece. Não funciona à toa — precisa das palavras certas e de uma intenção meio... travessa. Quem já usou sabia bem como se meter onde não devia. É discreto, mas poderoso, e só responde a quem realmente sabe o que está fazendo. Em mãos erradas, pode causar confusão. Em mãos certas... vira quase mágica."',
  '"Quando nós fomos, onde olhavamos tinha isso, parecia uma mafia, todos iguais e as vezes algo mudava (um pouco contraditório ...), era uma das minhas vontades e se tornou realiadade. Com certeza faremos novamente, juntos!"',
  '"Diese Gestalt entstand vor Jahrhunderten in Deutschland mit der Aufgabe, eines der furchtlosesten Tiere zu bekämpfen, das in unterirdischen Höhlen lebt. Ihr ursprünglicher Name ist eine Kombination aus zwei Wörtern, die genau das Ziel dieser Mission und die Art des Wesens beschreiben, das diese Rolle übernimmt. Interessanterweise gibt es Varianten dieser Gestalt mit unterschiedlichen „Oberflächenstrukturen“, angepasst an verschiedene Umgebungen und Bedingungen. Außerdem war es nicht ungewöhnlich, dass diese Gestalt sich sogar mit Wildschweinen auseinandersetzte, eine große Herausforderung für jeden. Während der Kriegszeiten wurde sie wegen ihrer Herkunft gemieden, obwohl sie früher an königlichen Höfen geschätzt wurde. Heute ist sie eher mit dem häuslichen Leben verbunden, bewahrt aber weiterhin die Entschlossenheit und den Mut, die ihr Wesen ausmachen."',
  '"Em uma performance ao vivo feita durante a Purpose World Tour, Justin Bieber fez uma alteração no verso de uma música em que ele originalmente se culpava por alguma coisa no relacionamento. Essa mudança foi interpretada por fãs como uma forma dele "responder" indiretamente a críticas de um antigo relacionamento polêmico. Sabendo disso, em qual cidade ele fez esse show?"',
  '"Quando criança, Gustavo gostava de brincar e ver animes na televisão de sua casa, ficou viciado em um desenho onde coisas rodavam muito rapidas e tinham poderes. Certo dia ele encheu o saco de seus pais e foram em outra cidade comprar. Eu não quero saber o que é (até por que nessa altura você ja sabe), eu quero saber qual o nome ESPECIFICO dessa coisa que ele ganhou? "'
]
const respostas = [
  'Mapa do Maroto',
  'Campos do Jordão',
  'Salsicha',
  'Manchester',
  'Galaxy Pegasus'
]

const dicas = [
  { imagem: hp, nome: "Harry Potter", conteudo: "'Meu pai não era um herói para todo mundo... mas ele sempre esteve com os amigos dele'" },
  { imagem: amora, nome: "Amora", conteudo: "Vai arrumar briga com a Belinha, eu to sossegada comendo chocolate e não saio daqui" },
  { imagem: gustavo, nome: "Gustavo", conteudo: "O Gustavo trabalha com esse mundo, porem eles não voam pelo espaço" }
]

const perguntaFinal = '"O que nós comemos no nosso primeiro encontro no Buenos?"'
const respostaFinal = 'Picanha'

const Missoes = () => {

  
  // Estado para controlar se cada dica já foi usada
  const [dicasUsadas, setDicasUsadas] = useState([false, false, false])
  const [modalDicaOpen, setModalDicaOpen] = useState(false)
  const [dicaAtual, setDicaAtual] = useState<number | null>(null)

  const [progresso, setProgresso] = useState([0, 0, 0, 0, 0])
  const [finalLiberada, setFinalLiberada] = useState(false)
  const [finalCompleta, setFinalCompleta] = useState(false)

  // Modal de pergunta
  const [modalPerguntaOpen, setModalPerguntaOpen] = useState(false)
  const [modalPerguntaIdx, setModalPerguntaIdx] = useState<number | null>(null)

  // Modal de resposta
  const [modalRespostaOpen, setModalRespostaOpen] = useState(false)
  const [modalRespostaIdx, setModalRespostaIdx] = useState<number | null>(null)
  const [inputResposta, setInputResposta] = useState('')
  const [feedback, setFeedback] = useState('')

  // Modal missão final
  const [modalPerguntaFinalOpen, setModalPerguntaFinalOpen] = useState(false)
  const [modalRespostaFinalOpen, setModalRespostaFinalOpen] = useState(false)
  const [inputRespostaFinal, setInputRespostaFinal] = useState('')
  const [feedbackFinal, setFeedbackFinal] = useState('')

  const handleVerMissao = (idx: number) => {
    setModalPerguntaIdx(idx)
    setModalPerguntaOpen(true)
  }

  const handleResponderMissao = (idx: number) => {
    setModalRespostaIdx(idx)
    setInputResposta('')
    setFeedback('')
    setModalRespostaOpen(true)
  }

  const handleCheckResposta = () => {
    if (
      modalRespostaIdx !== null &&
      inputResposta.trim().toLowerCase() === respostas[modalRespostaIdx].toLowerCase()
    ) {
      const novoProgresso = [...progresso]
      novoProgresso[modalRespostaIdx] = 100
      setProgresso(novoProgresso)
      setFeedback('Resposta correta!')
      setTimeout(() => {
        setModalRespostaOpen(false)
        setFeedback('')
        if (novoProgresso.every(p => p === 100)) setFinalLiberada(true)
      }, 1000)
    } else {
      setFeedback('Resposta errada, tente novamente!')
    }
  }

  // Missão final
  const handleCheckRespostaFinal = () => {
    if (inputRespostaFinal.trim().toLowerCase() === respostaFinal.toLowerCase()) {
      setFeedbackFinal('Resposta correta!')
      setTimeout(() => {
        setFinalCompleta(true)
        setModalRespostaFinalOpen(false)
        setFeedbackFinal('')
      }, 1000)
    } else {
      setFeedbackFinal('Resposta errada, tente novamente!')
    }
  }

  const handleAbrirDica = (idx: number) => {
    if (!dicasUsadas[idx]) {
      setDicaAtual(idx)
      setModalDicaOpen(true)
    }
  }

  const handleFecharDica = () => {
    if (dicaAtual !== null) {
      const novasDicasUsadas = [...dicasUsadas]
      novasDicasUsadas[dicaAtual] = true
      setDicasUsadas(novasDicasUsadas)
    }
    setModalDicaOpen(false)
    setDicaAtual(null)
  }

  useEffect(() => {
    document.title = 'Missões'
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, mt: 4 }}>




      <Title>Dicas</Title>

      {/* Dicas */}
      <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
        {dicas.map((dica, idx) => (
          <span key={idx} style={{ opacity: dicasUsadas[idx] ? 0.5 : 1, pointerEvents: dicasUsadas[idx] ? 'none' : 'auto' }}>
            <Personagem
              imagem={dica.imagem}
              nome={dica.nome}
              onClick={() => handleAbrirDica(idx)}
            />
          </span>
        ))}
      </Box>

      {/* Missões */}
      <Title>Missoes</Title>
      <Box sx={{ display: 'flex', gap: 2 }}>

        {niveis.map((nivel, idx) => (
          <Paper key={nivel} sx={{ p: 2, width: 170, textAlign: 'center', border: '2px solid #990000' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>{nivel}</Typography>
            <LinearProgress color='error' variant="determinate" value={progresso[idx]} sx={{ my: 2, height: 10, borderRadius: 5 }} />
            <Button onClick={() => handleVerMissao(idx)}>Ver Missão</Button>
            {progresso[idx] < 100 ? (
              <Button
                sx={{ mt: 1 }}
                variant="contained" color="primary" onClick={() => handleResponderMissao(idx)}>
                Responder Missão
              </Button>
            ) : (
              <Button
                sx={{ mt: 1 }}
                variant="outlined"
                color="success"
                component="a"
                href={`/recompensa/recompensa${idx + 1}.txt`}
                download
              >
                Recompensa
              </Button>
            )}
          </Paper>
        ))}
      </Box>

      {/* Missão Final */}
      {finalLiberada && !finalCompleta && (
        <Box sx={{ mt: 4 }}>
          <Paper sx={{ p: 3, width: 400, textAlign: 'center', border: '2px solid #990000' }}>
            <Typography variant="h6" color="error" sx={{ fontWeight: 'bold' }}>Missão Final</Typography>
            <LinearProgress color='error' variant="determinate" value={finalCompleta ? 100 : 0} sx={{ my: 2, height: 10, borderRadius: 5 }} />
            <Button onClick={() => setModalPerguntaFinalOpen(true)}>Ver Missão Final</Button>
            {!finalCompleta && (
              <Button variant="contained" color="error" onClick={() => setModalRespostaFinalOpen(true)} sx={{ ml: 2 }}>
                Responder Missão Final
              </Button>
            )}
          </Paper>
        </Box>
      )}

      {/* Modal Ver Missão */}
      <Modal open={modalPerguntaOpen} onClose={() => setModalPerguntaOpen(false)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
          borderRadius: 2, boxShadow: 24, p: 4, minWidth: 300, outline: 'none'
        }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {modalPerguntaIdx !== null ? title[modalPerguntaIdx] : ''}
          </Typography>
          <Typography variant='h6' sx={{ mb: 2 }}>
            {modalPerguntaIdx !== null ? perguntas[modalPerguntaIdx] : ''}
          </Typography>
          <Button variant="contained" onClick={() => setModalPerguntaOpen(false)}>
            Entendi
          </Button>
        </Box>
      </Modal>

      {/* Modal das */}
      <Modal open={modalDicaOpen} onClose={handleFecharDica}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
          borderRadius: 2, boxShadow: 24, p: 4, minWidth: 300, outline: 'none'
        }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {dicaAtual !== null ? dicas[dicaAtual].nome : ''}
          </Typography>
          <Typography variant='h6' sx={{ mb: 2 }}>
            {dicaAtual !== null ? dicas[dicaAtual].conteudo : ''}
          </Typography>
          <Button variant="contained" onClick={handleFecharDica}>
            Ok
          </Button>
        </Box>
      </Modal>

      {/* Modal Responder Missão */}
      <Modal open={modalRespostaOpen} onClose={() => setModalRespostaOpen(false)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
          borderRadius: 2, boxShadow: 24, p: 4, minWidth: 300, outline: 'none'
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {modalRespostaIdx !== null ? title[modalRespostaIdx] : ''}
          </Typography>
          <TextField
            color='error'
            label="Sua resposta"
            value={inputResposta}
            onChange={e => setInputResposta(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleCheckResposta}>
            Enviar Resposta
          </Button>
          {feedback && (
            <Typography sx={{ mt: 2 }} color={feedback === 'Resposta correta!' ? 'success.main' : 'error'}>
              {feedback}
            </Typography>
          )}
        </Box>
      </Modal>

      {/* Modal Missão Final - Ver */}
      <Modal open={modalPerguntaFinalOpen} onClose={() => setModalPerguntaFinalOpen(false)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
          borderRadius: 2, boxShadow: 24, p: 4, minWidth: 300, outline: 'none'
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {perguntaFinal}
          </Typography>
          <Button variant="contained" onClick={() => setModalPerguntaFinalOpen(false)}>
            Entendi
          </Button>
        </Box>
      </Modal>

      {/* Modal Missão Final - Responder */}
      <Modal open={modalRespostaFinalOpen} onClose={() => setModalRespostaFinalOpen(false)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
          borderRadius: 2, boxShadow: 24, p: 4, minWidth: 300, outline: 'none'
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {perguntaFinal}
          </Typography>
          <TextField
            color='error'
            label="Sua resposta"
            value={inputRespostaFinal}
            onChange={e => setInputRespostaFinal(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleCheckRespostaFinal}>
            Enviar Resposta
          </Button>
          {feedbackFinal && (
            <Typography sx={{ mt: 2 }} color={feedbackFinal === 'Resposta correta!' ? 'success.main' : 'error'}>
              {feedbackFinal}
            </Typography>
          )}
        </Box>
      </Modal>

      {finalCompleta && (
        <>
          <Typography variant="h5" color="success.main" sx={{ mt: 4 }}>
            Parabéns! Você concluiu todas as missões!
          </Typography>
          <Button
            sx={{ mt: 1 }}
            variant="outlined"
            color="success"
            component="a"
            href="/recompensa/recompensaFinal.txt"
            download
          >
            Recompensa Final
          </Button>
        </>

      )}
    </Box>
  )
}

export default Missoes