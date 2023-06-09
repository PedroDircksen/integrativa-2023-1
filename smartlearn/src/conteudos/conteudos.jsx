import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Pdf from '../assets/array.pdf';
import Video from '../assets/video.mp4';
import ListaExercicios from '../assets/ListaExercicios.pdf';
import Podcast from '../assets/podcast.mp3';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Conteudos() {
  const [conteudos, setConteudos] = useState([]);
  const navigate = useNavigate();
  const estiloAprendizado = localStorage.getItem('resultadoAprendizado')

  const tiposAprendizado = {
    Visual: Pdf,
    Audiovisual: Video,
    Cinestésico: ListaExercicios,
    Interativo: Podcast
};
  const tiposAprendizadoNome = {
    Visual: 'Pdf',
    Audiovisual: 'Video',
    Cinestésico: 'Lista de Exercicios',
    Interativo: 'Podcast'
};

  useEffect(() => {
    const novosConteudos = [
      {
        nome: "Arrays",
        descricao: "Aula sobre arrays",
        link: tiposAprendizado[estiloAprendizado],
        conteudo: tiposAprendizadoNome[estiloAprendizado],
      },
      {
        nome: 'Objetos',
        descricao: 'Conteúdo em desenvolvimento...',
        link: ''
      },
      {
        nome: 'Loopings',
        descricao: 'Conteúdo em desenvolvimento...',
        link: ''
      },
      {
        nome: 'Condicionais',
        descricao: 'Conteúdo em desenvolvimento...',
        link: ''
      }
    ];

    setConteudos(conteudos.concat(novosConteudos));
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="d-flex">
      <div className="sidebar">
        <img src={logo} alt="Logo" className="logo" />
        <Button className="btnLogout" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="content">
          <div className="tituloConteudos mb-5">
            <h1>Conteúdos</h1>
          </div>
        <Container>
          <div className="conteudos-lista">
            {conteudos.map((conteudo, index) => (
              <Card key={index} className="conteudo-card">
                <Card.Body>
                  <Card.Title>{conteudo.nome}</Card.Title>
                  <Card.Text>{conteudo.descricao}</Card.Text>
                  <a
                    href={conteudo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#004c84', textDecoration: 'underline' }}
                  >
                    {conteudo.conteudo}
                  </a>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Conteudos;


