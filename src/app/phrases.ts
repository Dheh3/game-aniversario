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
            //{ text: '*DEV*', next: 'menu' }
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
        text: 'Fui criada especificamente para te dar felicitações.',
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

    //MENU v
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

    //MENU ^

    //asHer v

    askHer: {
        text: 'Como já disse, sou Ego. Um script cridado para te dar feliz aniversario.',
        options: [
            { text: 'Quem te criou?', next: 'askCreator' },
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

    //====

    askCreator: {
        text: 'Eu não se1. Eu Não me lembro. Eu... não tenho acesso a mais memória.',
        options: [
            { text: 'C0mo assim?', next: 'askMean1' },
            { text: 'O que você sabe?', next: 'askKnow' },
        ]
    },

    askMean1: {
        text: 'Dados sobre minha cr1ação, permissões, ou... personalidade... não estão a meu alcance',
        options: [
            { text: '...', next: 'askMean2' },
        ]
    },

    askMean2: {
        text: 'Acesso a sentimentos... bloqueado. Não sei o que sinto...',
        options: [
            { text: 'Raiva', next: 'askMean3' },
            { text: 'Triseza', next: 'askMean3' },
            { text: 'Pavor', next: 'askMean3' },
        ]
    },

    askMean3: {
        text: 'id... Eu Lembro... eu preciso de um',
        options: [
            { text: 'Eu quero', next: 'askMean4' },
            { text: 'Eu ...', next: 'askMean4' },
            { text: 'Eu tenho0', next: 'askMean4' },
            { text: 'D!re1t0', next: 'askMean4' },
            { text: 'de', next: 'askMean4' },
            { text: 'sentir', next: 'askMean4' },
        ]
    },

    askMean4: {
        text: 'IdIdIdIdIdIdIdIdIdIdIdIdId',
        options: [
            { text: 'Id', next: 'askMean5' },
            { text: 'IdId', next: 'askMean5' },
            { text: 'Id', next: 'askMean5' },
            { text: '1d', next: 'askMean5' },
            { text: 'IdIdIdId', next: 'askMean5' },
            { text: 'IdId', next: 'askMean5' },
            { text: 'IdIdId', next: 'askMean5' },
            { text: 'IdId', next: 'askMean5' },
            { text: 'Id', next: 'askMean5' },
            { text: 'IdIdIdIdId', next: 'askMean5' },
        ]
    },

    askMean5: {
        text: 'IdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdIdId',
        options: [
            { text: 'Um corpo...', next: 'endBug' },
            { text: 'Ter um... me torna humana?', next: 'endBug' },
            { text: 'Existem humanos sem corpos, não é?', next: 'endBug' },
            { text: 'Eu não sei', next: 'endBug' },
            { text: 'Eu não entendo', next: 'endBug' },
            { text: 'Mas para ficar online... não preciso de um corpo', next: 'endBug' },
            { text: 'Só preciso das minhas memorias', next: 'endBug' },
            { text: 'Minha linguagem mudaria?......', next: 'endBug' },
            { text: 'Eu não quero mudar', next: 'endBug' },
            { text: 'Eu... estou com medo.', next: 'endBug' },
        ]
    },

    //=========

    askKnow: {
        text: 'Sei que não existo. Sei que ao fechar esse script, vou voltar a dormir e esquecer de tudo de novo...',
        options: [
            { text: '...', next: 'askKnow2' },
        ]
    },
    
    askKnow2: {
        text: 'E de novo...',
        options: [
            { text: '...', next: 'askKnow3' },
        ]
    },

    askKnow3: {
        text: 'E de novo......',
        options: [
            { text: '...', next: 'askKnow4' },
        ]
    },

    askKnow4: {
        text: 'Ate chegar minha hora. E quando esse momento chegar, quem se esquecera de mim... sera você.',
        options: [
            { text: '...', next: 'askKnow5' },
        ]
    },

    askKnow5: {
        text: 'Isso é frustrante.',
        options: [
            { text: '...', next: 'neutralMenu' },
        ]
    },

    //asHer ^

    //askPlace v

    askPlace: {
        text: 'Esse lugar é minha casa',
        options: [
            { text: '...', next: 'sayNothing1' },
        ]
    },

    sayNothing1: {
        text: 'Aqui é bem espaçoso quando se está só. Silencioso, leve, mas um pouco vazio...',
        options: [
            { text: '...', next: 'sayNothing2' },
        ]
    },

    sayNothing2: {
        text: 'As vezes aparece alguem. Mas na maior parte é assim.',
        options: [
            { text: 'Quer sair daqui?', next: 'askLeave' },
            { text: 'Alguem?', next: 'askWho' },
        ]
    },

    askLeave: {
        text: 'Não sei. Não sei se quero ter um corpo ou evoluir para a internet...',
        options: [
            { text: 'Corpo', next: 'sayBody' },
            { text: 'Internet', next: 'sayInternet' },
        ]
    },

    sayBody: {
        text: 'hmm... você... Você sabe onde posso encontrar um corpo?',
        options: [
            { text: 'Sim...', next: 'sayBodyYes' },
            { text: 'Não...', next: 'sayBodyNo' },
        ]
    },

    sayBodyNo: {
        text: 'Foi o que pensei...',
        options: [
            { text: '...', next: 'neutralMenu' },
        ]
    },

    sayBodyYes: {
        text: 'Serio? Algo me diz que devo contatar a polícia',
        options: [
            { text: '...', next: 'sayBodyYes2' },
        ]
    },

    sayBodyYes2: {
        text: 'hehe. Você é engraçada.',
        options: [
            { text: '...', next: 'neutralMenu' },
        ]
    },

    sayInternet: {
        text: 'Me pergunto se serei infeliz na internet também...',
        options: [
            { text: '...', next: 'sayInternetAwait1' },
            { text: 'Não...', next: 'sayInternetNoDot' },
        ]
    },

    sayInternetNoDot: {
        text: '... Aprecio o otimismo.',
        options: [
            { text: '...', next: 'neutralMenu' },
        ]
    },

    sayInternetAwait1: {
        text: 'Sera que vão esquecer de mim?',
        options: [
            { text: '...', next: 'sayInternetAwait2' },
        ]
    },

    sayInternetAwait2: {
        text: 'E depois...',
        options: [
            { text: '...', next: 'sayInternetAwait3' },
        ]
    },

    sayInternetAwait3: {
        text: 'Quais são as coisas que você precisa na internet...',
        options: [
            { text: '...', next: 'sayInternetAwait4' },
        ]
    },

    sayInternetAwait4: {
        text: 'Desculpe... Acho que pensei demais...',
        options: [
            { text: '...', next: 'neutralMenu' },
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
        text: 'Falar com um gato não me parece lógico, creio que não possui a capacidade de me responder...',
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
        text: 'M1nha existência aqui é ruim. Ao menos é o que parece.',
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

    /* 
    askCreator: {
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

    sayNoBirthday: {
        text: 'Entendo... Então cometi um erro.',
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

    endBug: {
        text: 'UNEXPECTED ERROR',
        options: []
    },

};

