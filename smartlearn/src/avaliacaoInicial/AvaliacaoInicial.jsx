import React, { useState } from 'react';
import { Container, Card, Form, Button, ProgressBar } from 'react-bootstrap';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function AvaliacaoInicial({ perguntas }) {
    const [showIntro, setShowIntro] = useState(true); // Variável de estado para controlar a exibição da tela de introdução
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [progress, setProgress] = useState(0);
    const [respostas, setRespostas] = useState([]);
    const navigate = useNavigate();


    const tiposAprendizado = {
        option1: 'Visual',
        option2: 'Audiovisual',
        option3: 'Interativo',
        option4: 'Cinestésico',
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.id);
    };

    const handleStart = () => {
        setShowIntro(false); // Ao iniciar a avaliação, oculta a tela de introdução
    };

    const handleNext = () => {
        // Lógica para avançar para a próxima pergunta ou fazer algo com a resposta selecionada
        if (selectedOption !== 'option1' && selectedOption !== 'option2' && selectedOption !== 'option3' && selectedOption !== 'option4') {
            swal('Atenção', `Selecione uma das opções`, 'warning', {
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'botaoMensagemSucesso',
                        closeModal: true,
                    },
                },
            });

            return;
        }

        const newRespostas = [...respostas];
        newRespostas.splice(currentQuestion, 0, selectedOption);
        setRespostas(newRespostas);

        // Limpar a resposta selecionada

        if (currentQuestion < perguntas.length - 1) {
            if (!respostas[currentQuestion + 1]) {
                setSelectedOption('');
            } else {
                const nextOption = respostas[currentQuestion + 1]; // Verificar se há uma resposta salva para a próxima pergunta
                setSelectedOption(nextOption);
            }
            setCurrentQuestion(currentQuestion + 1);
            setProgress((currentQuestion + 1) * (100 / perguntas.length));
        } else {
            setProgress((currentQuestion + 1) * (100 / perguntas.length));
            const resultadoAprendizado = tiposAprendizado[findMostFrequentElement(respostas)];
            localStorage.setItem('resultadoAprendizado', resultadoAprendizado);
            swal('Pronto!', `Identificamos que você é um aluno mais ${tiposAprendizado[findMostFrequentElement(respostas)]}`, 'success', {
                buttons: {
                  confirm: {
                    text: 'OK',
                    value: true,
                    visible: true,
                    className: 'botaoMensagemSucesso',
                    closeModal: true,
                  },
                },
              }).then((confirmed) => {
                if (confirmed) {
                  navigate('/conteudos'); // Redireciona para a rota desejada após o botão "OK" ser clicado
                }
              });
              
        }
    };

    const handlePrevious = () => {
        const newRespostas = [...respostas];
        newRespostas[currentQuestion] = selectedOption;
        setRespostas(newRespostas);

        setSelectedOption(respostas[currentQuestion - 1]);
        setCurrentQuestion(currentQuestion - 1);
        setProgress((currentQuestion - 1) * (100 / perguntas.length));
    };

    const findMostFrequentElement = (array) => {
        // Cria um objeto para contar a frequência de cada elemento
        const frequencyCounter = {};

        // Percorre o array e conta a frequência de cada elemento
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
        }

        let mostFrequentElement;
        let maxFrequency = 0;

        // Percorre o objeto de frequência para encontrar o elemento mais frequente
        for (const element in frequencyCounter) {
            if (frequencyCounter[element] > maxFrequency) {
                maxFrequency = frequencyCounter[element];
                mostFrequentElement = element;
            }
        }

        return mostFrequentElement.trim();
    };

    return (
        <div className="form-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Container fluid style={{ maxWidth: '900px' }}>
                {showIntro ? ( // Renderiza a tela de introdução se showIntro for verdadeiro
                    <Card className="bg-white my-5 mx-auto" style={{ borderRadius: '1rem' }}>
                        <Card.Body className="w-100 cardLogin">
                            <p>Percebemos que é o seu primeiro acesso. Para começar, faça uma avaliação para identificarmos qual é o seu estilo de aprendizado.</p>
                            <Button style={{backgroundColor: '#004c84', borderColor: '#004c84'}} onClick={handleStart}>Começar Avaliação</Button>
                        </Card.Body>
                    </Card>
                ) : ( // Renderiza as perguntas se showIntro for falso
                    <Card className="bg-white my-5 mx-auto" style={{ borderRadius: '1rem' }}>
                        <div className="header">
                            <div className="blue-stripe"></div>
                        </div>
                        <Card.Body className="w-100 cardLogin">
                            <p className="question">{perguntas[currentQuestion].question}</p>
                            <Form className="respostas">
                                {perguntas[currentQuestion].options.map((option, index) => (
                                    <Form.Group key={index}>
                                        <Form.Check
                                            type="radio"
                                            id={`option${index + 1}`}
                                            label={option}
                                            name="option"
                                            value={option}
                                            checked={selectedOption === `option${index + 1}`}
                                            onChange={handleOptionChange}
                                            className="mt-2"
                                        />
                                    </Form.Group>
                                ))}
                                <br />
                                <ProgressBar now={progress} className="progressBar" />
                                <br />
                            </Form>
                            <div className="button-group">
                                <Button className="btnVoltar" onClick={handlePrevious} disabled={currentQuestion === 0}>
                                    Voltar
                                </Button>
                                <Button className="btnAvancar" onClick={handleNext}>
                                    Avançar
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </Container>
        </div>
    );
}

export default AvaliacaoInicial;
