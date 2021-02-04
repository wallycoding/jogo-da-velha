import { useRef, useEffect, useState } from 'react';
import { BsCircle } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

import { Content, Header, Title, Button, Description, EndGame, ButtonRestart } from './Styles';
import { checkGame } from './config'

const App = () => {
    const contentRef = useRef();
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });
    const [endGame, setEndGame] = useState(null);

    useEffect(() => {
        contentRef.current && setDimensions({
            width: contentRef.current.offsetWidth,
            height: contentRef.current.offsetHeight
        });
        
    }, []);

    window.addEventListener("resize", () => {
        contentRef.current && setDimensions({
            width: contentRef.current.offsetWidth,
            height: contentRef.current.offsetHeight
        });
    });

    window.onload = function() {
        document.querySelectorAll('.animateText').forEach(element => {
            
            const animateToText = () => {
                const { innerText: text } = element;
                let i = 0;

                const interval = setInterval(() => {
                    if (i < text.length) {
                        i += 1;
                        element.innerText = text.slice(0, i);
                    } else {
                        i = 0;
                        clearInterval(interval);
                        setTimeout(() => {
                            animateToText();
                        }, 5000);
                    }
                }, 100);
            }

            animateToText();
        });
    }

    const [player, setPlayer] = useState('x');
    const [gameTable, setGameTable] = useState([]);

    const buttons = [
        useState(null), useState(null), useState(null),
        useState(null), useState(null), useState(null),
        useState(null), useState(null), useState(null)
    ];

    const genButtons = () => {
        const componentButtons = [];
        for (let i = 0; i < 9; i++) {
            componentButtons.push(
                <Button 
                    key={i} 
                    width={dimensions.width} 
                    index={i}
                    onClick={_ => {
                        const table = [...gameTable];
                        if (!table[i]) {
                            table[i] = player;
                            if (player === 'x') {
                                buttons[i][1](<MdClose size={55} color="#fff" />);
                            } else {
                                buttons[i][1](<BsCircle size={40} color="#fff" />);
                            }
                            if (
                                checkGame(table, player, data => { setEndGame(data) })
                            ) return;
                            player === 'x' ? setPlayer('o') : setPlayer('x');
                            setGameTable(table);
                        }
                    }}
                >{buttons[i][0]}</Button>
            )
        }
        return componentButtons;
    }

    return (
        <main>
            {
                gameTable.filter(mark => typeof mark === 'string').length == 0 ?
                <Header>
                    <Title className="animateText">jogo da velha</Title>
                </Header> : null
            }
            <Content ref={contentRef}>
                {genButtons()}
            </Content>
            {
                endGame ? (
                    <EndGame>
                        <Title style={{ marginBottom: 25, fontSize: 40, textTransform: 'uppercase' }}>jogo da velha</Title>
                        <Description>{endGame.description}</Description>
                        <ButtonRestart onClick={() => {
                            window.location.reload();
                        }}>Jogar novamente</ButtonRestart>
                    </EndGame>
                ): null
            }
        </main>
    );
}

export default App;