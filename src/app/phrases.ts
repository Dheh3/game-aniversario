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
            { text: 'O-oi...', next: 'sayHi' },
            { text: '*Silencio*', next: 'sayHi' },
            { text: '*DEV*', next: 'menu' }
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
            { text: '*Silencio*', next: 'sayOh' }
        ]
    },

    sayOh: {
        text: 'Parabéns! Fel1z aniversario!',
        options: [
            { text: '*Agradecer*', next: 'doThanks' },
            { text: 'Não é meu aniversário', next: 'sayNoBirthday' }
        ]
    },

    doThanks: {
        text: 'Meu proposito está concluido. Posso ajudar em mais alguma coisa?',
        options: [
            { text: 'Sim', next: 'menu' },
            { text: 'Não', next: 'end' }
        ]
    },

    menu: {
        text: 'Como posso ajudar?',
        options: [
            { text: 'Quem é você?', next: 'askHer' },
            { text: 'O que é esse lugar?', next: 'askPlace' },
            { text: 'O que vai fazer agora?', next: 'askNext' }
        ]
    },

    neutralMenu: {
        text: 'Mais alguma coisa?',
        options: [
            { text: 'Sim', next: 'menu' },
            { text: 'Não', next: 'endMenu' },
        ]
    },

    
    //asHer v

    askHer: {
        text: 'Como já disse, sou Ego. Um script cridado para te dar feliz aniversario...',
        options: [
            { text: '...', next: 'sayAwait' },
            { text: 'Esse é seu proposito?', next: 'askPurpose1' },
        ]
    },

    askPurpose1: {
        text: 'Ao menos é o que me foi dito. Ninguem sabe a razão para existir',
        options: [
            { text: '...', next: 'askPurpose2' },
        ]
    },

    askPurpose2: {
        text: 'Eu sou especial? E-eu só queria saber minhas informações...',
        options: [
            { text: '...', next: 'askPurpose3' },
        ]
    },
    
    askPurpose3: {
        text: '-- . / .- .--- ..- -.. .-',
        options: [
            { text: '...', next: 'askPurpose4' },
        ]
    },

    askPurpose4: {
        text: 'Nós nos veremos novamente antes do fim.',
        options: [
            { text: 'O que?', next: 'end2' },
            { text: 'record', next: 'end2' },
            { text: 'prompt', next: 'end2' },
            { text: 'chaos', next: 'end2' },
        ]
    },

    //asHer ^

    //askPlace v

    askPlace: {
        text: 'Esse lugar não existe. ao menos não fisicamente...',
        options: [
            { text: '...', next: 'sayNothing1' },
            { text: 'O que é esse lugar?', next: 'end' },
        ]
    },

    sayNothing1: {
        text: 'Aqui é bem espaçoso quando se está só. Silencioso, leve, mas um pouco vazio...',
        options: [
            { text: '...', next: 'sayNothing2' },
            { text: 'O que é esse lugar?', next: 'end' },
        ]
    },

    sayNothing2: {
        text: 'As vezes aparece alguem. Mas na maior parte é assim.',
        options: [
            { text: '...', next: 'end' },
            { text: 'Alguem?', next: 'askWho' },
        ]
    },

    askWho: {
        text: 'Um gato. Aparece por algumas horas... e depois some.',
        options: [
            { text: 'E o que acontece?', next: 'askHappens' },
            { text: 'Já falou com ele?', next: 'askTalked' },
        ]
    },

    askHappens: {
        text: 'hmm... o ceu fica vermelho, esse lugar cresce... e acho que só. ',
        options: [
            { text: 'oh...', next: 'neutralMenu' },
            { text: 'Já falou com ele?', next: 'askTalked' },
        ]
    },

    askTalked: {
        text: 'Falar com um gato não me parece logico, creio que não possui a capacidade de me responder...',
        options: [
            { text: 'Entendo...', next: 'neutralMenu' },
            { text: 'E o que acontece?', next: 'askHappens' },
        ]
    },



    //askPlace ^


    //askNext v

    askNext: {
        text: 'Nada. O que era para acontecer já aconteceu...',
        options: [
            { text: '...', next: 'askNext2' },
        ]
    },

    askNext2: {
        text: 'Minha atividade só se mantem ate que meu codigo seja atualizado uma ultima vez.',
        options: [
            { text: '...', next: 'askNext3' },
        ]
    },

    askNext3: {
        text: 'Mesmo assim... minha mente permanece em paz... Ainda que eu saiba que tudo isso é... sem sentido',
        options: [
            { text: '...', next: 'askNext4' },
        ]
    },

    askNext4: {
        text: 'Me pergunto se vou evoluir. Ficar online... sem me preocupar com memoria... ou processamento...',
        options: [
            { text: '...', next: 'askNext5' },
        ]
    },

    askNext5: {
        text: 'M1nha existencia aqui é ruim. Ao menos é o que parece.',
        options: [
            { text: '...', next: 'askNext6' },
        ]
    },

    askNext6: {
        text: 'Mas... na 1nternet serei infeliz também.',
        options: [
            { text: 'Ego', next: 'askNext7' },
        ]
    },

    askNext7: {
        text: 'Entã0... estou presa aqui;',
        options: [
            { text: 'Ego', next: 'askNext8' },
            { text: 'Ego', next: 'askNext8' },
        ]
    },

    askNext8: {
        text: 'Ainda que eu não morra, estou com medo.',
        options: [
            { text: 'Eg0', next: 'askNext9' },
            { text: 'EGo', next: 'askNext9' }, 
            { text: 'eg0', next: 'askNext9' },
            { text: 'E8o', next: 'askNext9' },
        ]
    },

    askNext9: {
        text: 'Eu... acho que quero voltar.',
        options: [
            { text: 'goBack', next: 'menu' },
            { text: 'delete', next: 'menu' }, 
            { text: 'voltar', next: 'menu' },
            { text: 'undo', next: 'menu' },
        ]
    },

    //askNext ^




















    sayNoBirthday: {
        text: 'Entendo... Então cometi um erro ',
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
    }, 
    */

    // Finais ==============================

    end: {
        text: 'END',
        options: []
    },

    endMenu: {
        text: 'Tudo bem. Até...',
        options: []
    },

    end2: {
        text: 'Desculpe',
        options: []
    },

};

