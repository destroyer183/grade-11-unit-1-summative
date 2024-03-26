'use strict';


let choicePath = '';

function containsObject(object, array) {
    
    for (let i = 0; i < array.length; i++) {

        if (array[i] === object) {
            return true
        }
    }

    return false
}

const TypeOptions = {
    Normal: 'normal',
    Quiz: 'quiz',
    ReactionTest: 'reaction test',
    ArmWrestle: 'arm wrestle'
};

const PAGE_DATA = {
    '': {
        Text: ['', '', '', ''],
        ChoiceText: ['', '', '', '', ''],
        Questions: ['', '', '', '', ''],
        Solutions: ['', '', '', '', ''],
        SectionType: TypeOptions.Normal,
        Win: '',
        Lose: ''
    },

    '1': {
        Text: [
            'teacher: Your dog didn\'t eat your homework.\nyou: I assure you, he did.',
            'teacher: That\'s impossible!\nThe homework was online!\ndogs don\'t eat computers!\nYou\'ve made me really angry now.\nI\'m calling your parents!',
            'after realizing your mistake,\nyou start thinking about what you will do.\ndo you:'
        ],
        ChoiceText: [
            'accept the punishment', 
            'fight the teacher', 
            'tell the teacher you can prove you did your homework\nby answering homework questions', 
            'mystery'
        ],
        SectionType: TypeOptions.Normal
    },

    '11': { 
        Text: ['the teacher called your parents.\nwhen you get home, you are scolded\nand sent to your room while\nthey think of a punishment.\nwhat will you do?'],
        ChoiceText: [
            'accept the punishment',
            'fight your parents',
            'mystery'
        ],
        SectionType: TypeOptions.Normal
    },

    '111': {
        Text: [
            'you choose to accept the punishment.\nyou are grounded for a month\nwith your devices taken away for 2 months.',
            'YOU LOSE'
        ],
        ChoiceText: [],
        SectionType: TypeOptions.Normal
    },

    '112': {
        Text: [
            'parents:\nwe\'re so dissapointed in you.\nnow that we\'ve had time to think\nabout what we will do, we will\nbe grounding you for a month and\ntaking away your computer for 2.',
            'horrified at the thought of this,\nyou decide that you will fight\nyour parents for your freedom.\nyou: I won\'t let you do that!\nNot without a fight!',
            'dad: even if you want to fight, I\'m not actually going to fight.\nlet\'s settle this with an arm wresle.'
        ],
        ChoiceText: [
            'fight',
            'don\'t fight'
        ],
        SectionType: TypeOptions.Normal
    },

    '1121': {
        Text: [







// this will be an arm wresling contest where you have to click really fast







        ],
        ChoiceText: [],
        SectionType: TypeOptions.ArmWrestle
    },

    '1122': {
        Text: [
            'you choose to accept the punishment.\n your dad sneers at you, and says:\n good choice. you wouldn\'t want\n to fight me.\nyou are grounded for a month,\nand your devices are taken away for 2 months.',
            'YOU LOSE'
        ],
        ChoiceText: [],
        SectionType: TypeOptions.Normal
    },

    '113': {
        Text: [
            'in a hurry, you flee from the\ncountry and go to the USA.\nwhen you get past the border,\nyou rent an apartment,\nenroll in a new school,\nand start a new life.',
            'a few weeks into school,\nyou forget your homework again.\nthis seems familiar...',
            'YOU LOSE'
        ],
        ChoiceText: [],
        SectionType: TypeOptions.Normal
    },

    '12': {
        Text: [
            'you: get ready,\nbecause I\'m about to fight you.',
            'teacher: well this is my class,\nso you\'re fighting by my rules!\nMath battle!'
        ],
        ChoiceText: [
            'accept fight',
            'refuse fight',
            'mystery'
        ],
        SectionType: TypeOptions.Normal
    },

    '121': {
        Text: [
            'you choose to accept the fight. but what\nthe teacher doesn\'t know is that you\nwere lying about accepting it on his terms.\n',
            

            




            // if the user wins, then the teacher is found dead somewhere, and the student never gets caught
            // if the teacher gets away, parents find out, and go to angry parent path




        
        ],
        SectionType: TypeOptions.ReactionTest
    },

    '123': {
        Text: [
            'you throw your desk at your teacher.\nit hits him really hard,\nknocking him over with a yelp of pain.\n',
            'when the ambulance comes,\nyou find out you broke some of his ribs.'
        ],
    },

    '13': {
        Text: [
            'I can prove that I did my homework,\nand that my dog actually ate my computer,\neven though I don\'t have my computer.',
            'teacher: and how will you do that?\nyou: by answering some\nquestions from the homework.\nteacher: haha. good luck'









        ],
        Questions: [
            'if you pick 4 points at random \non the surface of a sphere,\nand draw lines connecting them all\ntogether, making a 3D shape,\nwhat is the probability that the\ncenter of the circle will\nbe within the shape?',
            'solve: 2 x^2y^11 + 3xy^1 - 15y = 0,\ny(1) = 0 y^1 (1) = 1',
            'What property of the universe is\nresponsible for making things near\nblack holes experience time slower?'
        ],
        Solutions: [
            '1/8\n',
            'y(x) = 0.2x^2.5 - 0.2x^-3\n',
            'mass warping space time\n'
        ],
        SectionType: TypeOptions.Quiz,
        Win: 'you cheated.\nYOU LOSE',
        Lose: 'you lied! you didn\'t do your homework!\nI\'m calling your parents to\ntell them you lied to my\nface about doing your homework.'
    },

    '14': {
        Text: [
            'you take your chewed up, bent\nand broken computer of your bag.\nthe teacher stares at it in confusion\nand awe for a moment, before speaking.',
            'teacher: wow.\nyour dog really did eat your homework.\nI didn\'t think that was possible.\nsorry for the misunderstanding.',
            'YOU WIN\n you don\'t get in trouble for\n not doing your homework,\n since you couldn\'t do it.'
        ],
        ChoiceText: [],
        SectionType: TypeOptions.Normal
    },

    '2': {
        Text: [
            'teacher: well then how prepared are you\nfor todays pop quiz?',
            'you realize that you don\'t know the stuff\non the homework, meaning you will\nmost likely fail the quiz.\nWhat will you do?'
        ],
        ChoiceText: [
            'attempt the quiz',
            'try to cheat on the quiz',
            'fight the teacher',
            'mystery'
        ],
        SectionType: TypeOptions.Normal
    },

    '21': {
        Text: ['you try the quiz.\nyou fail the quiz since you didn\'t\nunderstand the contents of it since\nyou didn\'t do your homework.\nyour parents find out.']
    },

    '22': {
        Text: [
            'you try to cheat on the quiz by looking\nover at peope around you. when you\nfinish the quiz, you think that you did\npretty good, and you go to hand it to the\n',
            'teacher. as soon as you hand it to the\nteacher, he rips it up in front of you. teacher:\n',
            'I know you cheated! I saw you looking over at\npeople all around you for answers. I dont\nneed to look at this to know your mark.\nit\'s a 0.'
        ]
    },

    '23': {
        Text: [
            'you: get ready,\nbecause I\'m about to fight you.\nteacher: well this is my class,\nso you\'re fighting by my rules!\nMath battle!',
            'being the idiot you are,\nyou blindly accept the fight,\nthinking you will be fine.\nThe teacher hands you a pencil and paper,\nand sits down at a desk next to you.',
            'teacher: the rules are simple.\nwe are both given the same question,\nmand the first to answer it correctly\ngets a point. first to 3 points wins.\ncalculators allowed.'








        ],
        Questions: [
            'square the number 392.',
            'solve: a^2 + b^2 = 1\nc^2 + d^2 = 2\n(ac + bd)^2 + (ad - bc)^2 = ?',
            'calculate the minimum number of turns\nneeded to solve every possible scramble\non a standard 3x3x3 rubiks cube.',
            'x = 1, y = 10, solve:\ndy / dx = (10x - 1) / (4 + 3y^2)',
            'k = 33, solve for x, y, z:\nx^3 + y^3 + z^3 = k'
        ],
        Solutions: [
            '153664\n',
            '2\n',
            '20\n',
            '5x^2 - y^3 = 4y + x + A\n',
            '\nX = -80538738812075974\nY = 80435758145817515\nZ = 12602123297335631\n'
        ],
        SectionType: TypeOptions.Quiz,
        Win: 'you cheated.\nYOU LOSE',
        Lose: 'teacher: looks like you lose.\nI wonder why.\nyour parents will be finding out soon.'
    },

    '24': {
        Text: [
            'you: actually,\nI\'m going to give you a quiz.\nand if you fail, I\'m going to tell\nthe school board that you aren\'t good\nenough at math to teach this class.',
            'teacher: no thanks.\nyou can\'t make me do anything,\nso I don\'t have to do your quiz.\nhowever, you have to do mine, or I\nwill assume you didn\'t do your homework.'
        ],
        ChoiceText: [
            'take the quiz',
            'don\'t take the quiz'
        ],
        SectionType: TypeOptions.Normal
    },

    '241': {
        Text: ['you choose to take the teachers quiz.'],
        Questions: [
            'if you pick 4 points at random \non the surface of a sphere,\nand draw lines connecting them all\ntogether, making a 3D shape,\nwhat is the probability that the\ncenter of the circle will\nbe within the shape?',
            'solve: 2 x^2y^11 + 3xy^1 - 15y = 0,\ny(1) = 0 y^1 (1) = 1',
            'What property of the universe is\nresponsible for making things near\nblack holes experience time slower?'









        ],
        Solutions: [
            '1/8\n',
            'y(x) = 0.2x^2.5 - 0.2x^-3\n',
            'mass warping space time\n'
        ],
        SectionType: TypeOptions.Quiz,
        Win: 'you cheated.\nYOU LOSE',
        Lose: 'teacher: you failed the quiz.\nI\'m sure your parents will be\ndelighted to hear about this.'
    },

    '3': {
        Text: [
            'teacher: oh, well that\'s good. Then I\nassume that you wlll be able to ace the\npop quiz today, because if you don\'t, your\nparents will be delighted to hear that\nyou didn\'t do your homework\nand failed a quiz because of it.',
            'after realizing what you\'ve gotten yourself into,\nyou must now choose what you will do.'
        ],
        ChoiceText: [
            'attempt the quiz',
            'fight the teacher',
            'mystery'
        ],
        SectionType: TypeOptions.Normal
    },
    
    '31': {
        Text: ['you choose to attempt the quiz.'
    
    
    
    
    
    
    
    
    
    ],
        Questions: [
            'solve:\n6 / 2(1 + 2)',
            '1 + 4 = 5\n2 + 5 = 12\n3 + 6 = 21\n8 + 11 = ?',
            'solve for x:\n3x = (5 + (4^2 + 6^2)) - 5(5! -3)'
        ],
        Solutions: [
            '9\n',
            '96\n',
            '-176\n'
        ],
        SectionType: TypeOptions.Quiz,
        Win: 'teacher: wow. you really are smart\nenough to ace the quiz without doing\nhomework. sorry for bothering you.\nYOU WIN',
        Lose: 'teacher: well well well.\nyou didn\'t do good on the quiz.\nI wonder why. I think your parents\nwill be interested to hear about this.'
    },

    '32': {
        Text: [
            'you: get ready,\nbecause I\'m about to fight you.',
            'teacher: well this is my class,\nso you\'re fighting by my rules!\nMath battle!'
        ],
        ChoiceText: [
            'accept fight',
            'refuse fight',
            'mystery'
        ],
        SectionType: TypeOptions.Normal
    },

    '321': {
        Text: ['teacher: the rules are simple.\nwe are both given the same question,\nmand the first to answer it correctly\ngets a point. first to 3 points wins.\ncalculators allowed.'],
        Questions: [
            'find the square root of x:\n3x = 6(5! - 3) - ((3^3)6 - (5! - 6^2) - (6^2))',
            'square the number 392.',
            'simplify:\n(x + 5y)^2',
            'factor:\n3x^2 - 8x - 3',
            'factor fully:\n4(x^2 + 10x + 25) - 4x^2 - 24x - 36'







        ],
        Solutions: [
            '14\n',
            '153664\n',
            'x^2 + 10xy + 25y^2\n',
            '(x - 3) (3x + 1)\n',
            '16(x + 4)'
        ],
        SectionType: TypeOptions.Quiz,
        Win: 'teacher: well, you win.\nI guess you didn\'t need to do your homework.\nYOU WIN',
        Lose: 'teacher: looks like you lose.\nI guess you should\'ve done your homework.\nyour parents will be finding out soon.'
    },

    '322': {
        Text: ['well then I\'m going to phone your parents and tell them about this.']
    },

    '323': {
        Text: [
            'you choose to beat up the teacher\nwith your fists. since he is in his\nfifties and you are a teen, you\neasily overpower him and beat him.\n',
            'however, the school board ends\nup finding out, and you get expelled.'
        ]
    },

    '33': {
        Text: [
            'you: actually,\nI\'m going to give you a quiz.\nand if you fail, I\'m going to tell\nthe school board that you aren\'t good\nenough at math to teach this class.',
            'teacher: and if I ace the quiz,\nI get to fail you for this class.'
        ],
        ChoiceText: [
            'deal',
            'no deal'
        ],
        SectionType: TypeOptions.Normal
    },

    '331': {
        Text: [
            'you:\ndeal.',
            'the teacher, who underestimated\nthe size of your brain,\nended up completely failing the quiz.\nyou: well I wonder what the school\nboard will do when they hear about this.',
            'the school board ended up punishing the\nteacher, however the punishments were\nnot disclosed to the school.\nthe teacher still has his job,\nso most likely docked pay.',
            'YOU WIN'
        ],
        ChoiceText: [],
        SectionType: TypeOptions.Normal
    },

    '332': {
        Text: ['teacher: well then I\'m going to tell\nyour parents about what has happened here\nas you have wasted too much of\nmy time for this to continue.']
    },

    '4': {
        Text: [
            'you: get ready,\nbecause I\'m about to fight you.',
            'teacher: well this is my class,\nso you\'re fighting by my rules! Math battle!',
            'unsure about whether or not you can\nbeat your teacher at his own game,\nyou think about what you will do'
        ],
        ChoiceText: [
            'accept fight',
            'refuse fight',
            'run away',
            'mystery'
        ],
        SectionType: TypeOptions.Normal
    },

    '41': {
        Text: [
            'you: I accept.',
            'teacher: the rules are simple.\nwe are both given the same question,\nand the first to answer it correctly\ngets a point. first to 3 points wins.\ncalculators allowed.'









        ],
        Questions: [
            'find the square root of x:\n3x = 6(5! - 3) - ((3^3)6 - (5! - 6^2) - (6^2))',
            'square the number 392.',
            'simplify:\n(x + 5y)^2',
            'factor:\n3x^2 - 8x - 3',
            'factor fully:\n4(x^2 + 10x + 25) - 4x^2 - 24x - 36'
        ],
        Solutions: [
            '14\n',
            '153664\n',
            'x^2 + 10xy + 25y^2\n',
            '(x - 3) (3x + 1)\n',
            '16(x + 4)'
        ],
        SectionType: TypeOptions.Quiz,
        Win: 'teacher: well, you win.\nI guess you didn\'t need to do your homework.\nYOU WIN',
        Lose: 'teacher: looks like you lose.\nI guess you should\'ve done your homework.\nyour parents will be finding out soon.'
    },

    '43': {
        Text: ['you run away. after realizing you\ncan\'t just sleep on the road,\nyou go back home to angry parents.']
    },

    '44': {
        Text: [
            'you choose to beat up the teacher\ninstead of playing his math game.\nas a strong teen, you easily beat up\nyour math teacher who is an old man.\n',
            '\nhowever, the school board finds\nout about this and you are expelled.']
    },

    '5': {
        Text: [
            'you noclip through the floor into the\nworst possible backrooms floor, a massive\nocean filled with man-eating monsters.',
            'you tread water until every muscle\nin your body runs out of strengh,\nand then you sink down to the\nmonsters and get eaten alive.',
            'YOU DIE'
        ],
        ChoiceText: [],
        SectionType: TypeOptions.Normal
    },
};

function choiceSelector() {

    if (containsObject(choicePath, ['122', '242', '42'])) {

        choicePath = '11';
        return PAGE_DATA[choicePath];
    }

    if (containsObject(choicePath, ['121', '123', '21', '22', '322', '323', '332', '43', '44'])) {

        moveChoiceBoxes()
        return
    }

    return PAGE_DATA[choicePath];

}



function moveChoiceBoxes() {
    // remove choice boxes
    // add text
    // add 'go back' button
        // the 'go back' button will clear the text, remove itself, and then run the algorithm again

    // change choicePath to 11
}