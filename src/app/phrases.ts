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

    //say
    //do
    //ask

    start: {
        text: 'Olá.',
        options: [
            { text: 'O-oi...', next: 'sayHi'},
            { text: '*Silencio*', next: 'sayHi' }
        ]
    },

    sayHi: {
        text: 'Me chamo Ego',
        options: [
            { text: 'Não me parece um nome...', next: 'sayHi2' },
            { text: '*Silencio*', next: 'sayHi2' }
        ]
    },

    sayHi2: {
        text: 'Fui criada especificamente para te dar os parabéns.',
        options: [
            { text: 'O-oh...', next: 'sayOh' },
            { text: '*Silencio*', next: 'end' }
        ]
    },

    sayOh: {
        text: 'Parabéns! Fel1z aniversario!',
        options: [
            { text: 'Obrigada.', next: 'sayThanks' },
            { text: 'Não é meu aniversário', next: 'sayNothing' }
        ]
    },

    sayThanks: {
        text: 'Meu proposito está concluido. Nos veremos em outro momento.',
        options: [
            { text: 'Obrigada.', next: 'end' },
            { text: '*Silencio*', next: 'end' }
        ]
    },

    sayNothing: {
        text: 'Oh. Entendo. ',
        options: [
            { text: 'Obrigada.', next: 'end' },
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

