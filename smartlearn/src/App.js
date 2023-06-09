import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import AvaliacaoInicial from './avaliacaoInicial/AvaliacaoInicial';
import Conteudos from './conteudos/conteudos';

const perguntasExemplo = [
  {
    id: 1,
    question: 'Quando você aprende algo novo, você prefere: ',
    options: ['Assistir a um vídeo explicativo. ', 'Ler um livro ou artigo sobre o assunto', 'Discutir o assunto com amigos ou colegas', 'Fazer uma atividade prática relacionada ao assunto'],
  },
  {
    id: 2,
    question: 'Você gosta de ter: ',
    options: ['Imagens, gráficos ou diagramas para entender melhor o conteúdo. ', 'Uma lista de informações escritas para estudar. ', 'Exemplos e histórias para ilustrar o conteúdo. ', 'Atividades físicas ou experimentos para aprender.'],
  },
  {
    id: 3,
    question: 'Quando você precisa estudar para uma prova, você prefere: ',
    options: ['Fazer anotações ou resumos escritos. ', 'Ouvir uma gravação de aulas ou ler em voz alta para si mesmo. ', 'Discutir com colegas sobre o assunto ou ensinar a alguém para memorizar melhor. ', 'Fazer exercícios práticos ou testes para praticar.'],
  },
  {
    id: 4,
    question: 'Você prefere um professor que: ',
    options: ['Usa muitas imagens ou gráficos para explicar o conteúdo. ', 'Usa muitos textos ou livros para ensinar. ', 'Gosta de discussões em grupo ou debates. ', 'Gosta de realizar atividades práticas ou experimentos.'],
  },
  {
    id: 5,
    question: 'Quando você precisa se concentrar em uma tarefa, você prefere: ',
    options: ['Um ambiente silencioso. ', 'Ouvir música ou sons de fundo. ', 'Conversar com alguém enquanto trabalha. ', 'Fazer uma atividade física antes para se concentrar melhor.'],
  },
  {
    id: 6,
    question: 'Você acha mais fácil aprender quando: ',
    options: ['Há muitos exemplos práticos e situações reais para ilustrar o conteúdo. ', 'O conteúdo é explicado em detalhes por meio de textos ou livros. ', 'Há muitas oportunidades para debater e discutir o assunto com outras pessoas. ', 'Há muitas atividades práticas e experimentos para realizar.'],
  }
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<AvaliacaoInicial perguntas={perguntasExemplo} />}></Route>
          <Route path='/conteudos' element={<Conteudos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
