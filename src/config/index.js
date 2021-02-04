export const checkGame = (table, player, callback) => {

    const win = () => {
        callback({
            type: 'win',
            description: `O jogador "${player}" ganhou!`,
            lastPlayer: player
        });
    }

    const draw = () => {
        callback({
            type: 'draw',
            description: 'O Jogo empatou!',
            lastPlayer: player
        });
    }

    if (table.filter(mark => typeof mark === 'string').length === 9) {
        console.log(table);
        draw();
        return true;
    }

    if (table.filter(mark => mark === player).length >= 3) {
        
        {
            let x = 0;
            for (let i = 0; i < 3; i++) {
                if (table[0+x] === player && table[1+x] === player && table[2+x] === player) {
                    win();
                    return true;
                }
                x+=3;
            }
        }
        
        for (let i = 0; i < 3; i++) {
            if (table[0+i] === player && table[3+i] === player && table[6+i] === player) {
                win();
                return true;
            }
        } 

        if (table[0] === player && table[4] === player && table[8] === player) {
            win();
            return true;
        }
        if (table[2] === player && table[4] === player && table[6] === player) {
            win();
            return true;
        }

    }

}

const config = { checkGame };
export default config; 