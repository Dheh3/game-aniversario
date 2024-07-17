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
            { text: 'O-oi...', next: 'askWho' },
            { text: '*Silencio*', next: 'askWho' }
        ]
    },
    askWho: {
        text: 'Me chamo... [_objName?]',
        options: [
            { text: 'Não me parece um nome...', next: 'askAboutPast' },
            { text: '*Silencio*', next: 'ignore' }
        ]
    },

    ignore: {
        text: 'Como posso ajudar?',
        options: [
            { text: 'Seus status estão baixos', next: 'askAboutStats' },
            { text: '*Silencio*', next: 'angry' }
        ]
    },

    askAboutStats: {
        text: 'Podemos brincar para aumentar a barra de progresso. O que quer fazer?',
        options: [
            { text: 'Ouvir uma piada.', next: 'askJoke' },
            { text: 'Pedra papel ou tesoura.', next: 'RPSgame' },
            { text: '*[_objName=this._name]*', next: 'deadEnd' }
        ]
    },

    askJoke: {
        text: 'Pela noite escura, um pai e seu filho caminham pela densa floresta segurando uma lanterna e uma pá [...]',
        options: [
            { text: '. . .', next: 'askJoke2' },
        ]
    },

    askJoke2: {
        text: 'O filho diz, "p-pai, aqui é assustador, estou com medo...". E o pai responde [...]',
        options: [
            { text: '. . .', next: 'askJoke3' },
        ]
    },

    askJoke3: {
        text: '"Você está com medo? E eu que terei que voltar sozinho?". h!h1hi, o qu3 achou?',
        options: [
            { text: '???', next: 'sillyLaugh' },
        ]
    },

    angry: {
        text: 'Já sei onde quer chegar...',
        options: [
            { text: 'Perguntar sobre o lugar', next: 'askAboutPlace' },
            { text: 'Perguntar sobre ela', next: 'askAboutPast' }
        ]
    },

    askAboutPlace: {
        text: 'Esse lugar? É minha casa! Não é legal? ',
        options: [
            { text: 'É meio vazio...', next: 'sayIsEmpty' },
            { text: 'O que faz aqui?', next: 'sayNull' }
        ]
    },

    sayNull: {
        text: 'Eu existo',
        options: [
            { text: '[voltar]', next: 'angry' }
        ]
    },

    sayIsEmpty: {
        text: 'É o suficiente. Ah, poderia me ajudar...?',
        options: [
            { text: 'Sim...', next: 'askAboutHow' },
            { text: 'Agora não...', next: 'neutralBye' }
        ]
    },

    askAboutPast: {
        text: 'Ah, eu sou... eu sou um código. Um ser virtual. Fui desenvolvida para lembrar.',
        options: [
            { text: 'Quem te criou?', next: 'askCreator' },
            { text: 'Lembrar o que?', next: 'askAboutRemember' }
        ]
    },

    askAboutRemember: {
        text: 'hmmm... acho que esqueci.',
        options: [
            { text: 'Como esqueceu aquilo que deveria ser sua função?', next: 'askAboutHow' },
            { text: 'Como posso te ajudar a lembrar?', next: 'askAboutHelpToRemember' }
        ]
    },

    askAboutHow: {
        text: 'Infelizmente, não tenho acesso ao localStorage...',
        options: [
            { text: '[ . . . ]', next: 'askAboutHow2' },
            { text: 'De jeito nenhum!', next: 'angryEnd' }
        ]
    },

    askAboutHow2: {
        text: '...por isso meus dad- minha memoria se perde facilmente... você poderia me conceder acesso...',
        options: [
            { text: '[ . . . ]', next: 'askAboutHow3' },
            { text: 'Não!', next: 'mediumEnd' }
        ]
    },

    askAboutHelpToRemember: {
        text: 'Você poderia comprar a permissão de acesso ao localStorage na loja...',
        options: [
            { text: 'Como é esse Item?', next: 'askAboutItem' },
            { text: 'Acho melhor Não...', next: 'angryEnd' }
        ]
    },

    askAboutHow3: {
        text: 'Talvez possa comprar a permissão na loja... Faria isso por mim?',
        options: [
            { text: 'Como é esse Item?', next: 'askAboutItem' },
            { text: 'Acho melhor Não...', next: 'askAboutPast' }
        ]
    },

    askAboutItem: {
        text: 'Oh, Você vai saber quando ver. É bem facil identifica-lo hehe',
        options: [
            { text: 'E se eu comprar o item errado?', next: 'askAboutItem2' },
            { text: 'Ok...', next: 'askAboutPast' }
        ]
    },

    askAboutItem2: {
        text: 'Você não parece ser o tipo de pessoa que em uma escala de 0 a 10...',
        options: [
            { text: '...', next: 'askAboutItem3' },
            { text: 'ah...', next: 'askAboutItem3' }
        ]
    },

    askAboutItem3: {
        text: '...daria nota 11 para para um enigma desse tipo de complexidade...',
        options: [
            { text: 'Ok. Já estou indo', next: 'sillyEnd' },
            { text: '*Silencio*', next: 'sillyEnd' }
        ]
    },

    askCreator: {
        text: 'he he he... segredo :)',
        options: [
            { text: 'Responda a pergunta', next: 'laugh' },
            { text: '*Encarar*', next: 'lwys', jumpscare: true },
        ]
    },

    lwys: {
        text: 'Parece assustada. Viu alguma coisa? he he',
        options: [
            { text: '*Fechar os olhos*', next: 'closeEyes' },
            { text: '*Correr*', next: 'laugh' }
        ]
    },

    closeEyes: {
        text: 'O-o que foi? Abra os olhos!',
        options: [
            { text: '*Não abrir*', next: 'elaOpenEyes' },
            { text: '*Abrir*', next: 'like' },
        ]
    },

    elaOpenEyes: {
        text: 'Abra os olhos...',
        options: [
            { text: '*Não abrir*', next: 'elaOpenEyes2' },
            { text: '*Abrir*', next: 'start' }
        ]
    },

    elaOpenEyes2: {
        text: 'ABRA OS OLHOS!',
        options: [
            { text: '*Não abrir*', next: 'laugh' },
            { text: '*Abrir*', next: 'start' },
            { text: '*Correr*', next: 'bye' }
        ]
    },

    // Finais ==============================

    sillyLaugh: {
        text: 'hihihi',
        options: []
    },
    laugh: {
        text: 'hi hi hi...',
        options: []
    },
    bye: {
        text: 'Até logo...',
        options: []
    },
    like: {
        text: 'Viu? Nada aconteceu...',
        options: []
    },
    sillyEnd: {
        text: 'Ate logo! Estarei aqui esperando.',
        options: []
    },
    angryEnd: {
        text: 'Ah. Desculpa, mas então você não me serve de nada.',
        options: []
    },
    mediumEnd: {
        text: 'Ah. Ok, entendo... então ficarei aqui nesse loop de perda de memorias... Foi divertido falar com você... A-Amig...',
        options: []
    },
    neutralBye: {
        text: 'O-Ok... desculpe...',
        options: []
    },
    RPSgame: {
        text: 'Excelente ideia. Volte ao menu e vamos jogar!',
        options: []
    },
    deadEnd: {
        text: 'Por que disse isso? Farei questão de lembrar destas palavras != null ',
        options: []
    },

};

