export const phrases = {
    win: [
        'Perdi...',
        'Hmmm...',
        '...',
        'ah...',
        'humpf!',
        'heeh...',
        'huh...'
    ],
    lose: [
        'hehehe',
        'hihi',
        'Parece que alguem perdeu.',
        '*pfff*',
        'Ponto pra mim',
        'Está jogando serio?'
    ],
    draw: [
        'Empate',
        'empate... vamos de novo',
        'um empate',
        'lembrar...'
    ],
    gameEndWin: 'Você ganhou...',
    gameEndLose: 'Venci?!',
    gameEndDraw: 'empatamos... mais uma?'
};

export interface DialogueOption {
    text: string;
    next: string;
    jumpscare?: boolean;
}

export const phrases2 = {
    start: {
        text: 'Olá.',
        options: [
            { text: 'O-oi...', next: 'askWho'},
            { text: '*Silencio*', next: 'askWho' }
        ]
    },

    askWho: {
        text: 'Me chamo... [_objName?]',
        options: [
            { text: 'Não me parece um nome...', next: 'end' },
            { text: '*Silencio*', next: 'end' }
        ]
    },

    ignore: {
        text: 'Como posso ajudar?',
        options: [
            { text: 'Seus status estão baixos', next: 'end' },
            { text: '*Silencio*', next: 'end' }
        ]
    },


    /* askCreator: {
        text: 'he he he... segredo :)',
        options: [
            { text: 'Responda a pergunta', next: 'laugh' },
            { text: '*Encarar*', next: 'lwys', jumpscare: true },
        ]
    }, */


    // Finais ==============================

    end: {
        text: 'hihihi',
        options: []
    }

};

