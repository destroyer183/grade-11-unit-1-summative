'use strict';

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

const storyData = {

    choicePath: '',
    pageNumber: 0,
    displayChoiceButtons: false,
    currentData: '',
    allPages: [],

    '': {
        text: [
            'BEEP BEEP BEEP you hear. it\'s 8am, and\nthe sound of your alarm clock has woken\nyou up on monday for school. you get up,\nget dressed and cleaned up, and then\nyou eat and get on the bus to go to school.',
            'after you get to school and get to math\nclass, you realize that you forgot to do your \nhomework, as you played video games all\nweekend.',
            'you know that your teacher and parents\nhate it when homework isn\'t done,\nand as the teacher is coming around\nchecking homework, you start panicking,\nas you don\'t know what to do.',
            'This is your first choice,\nand it will decide how the story\ncontinues from this point on.\nChoose wisely.'
        ],
        choiceText: [
            'tell the teacher your dog ate your homework', 
            'tell the teacher the truth', 
            'tell the teacher that you didn\'t do the homework because\nit was too easy', 
            'fight the teacher', 
            'mystery'
        ],
        sectionType: TypeOptions.Normal,
    },

    '1': {
        text: [
            'teacher: Your dog didn\'t eat your homework.\nyou: I assure you, he did.',
            'teacher: That\'s impossible!\nThe homework was online!\ndogs don\'t eat computers!\nYou\'ve made me really angry now.\nI\'m calling your parents!',
            'after realizing your mistake,\nyou start thinking about what you will do.\ndo you:'
        ],
        choiceText: [
            'accept the punishment', 
            'fight the teacher', 
            'tell the teacher you can prove you did your homework\nby answering homework questions', 
            'mystery',
            ''
        ],
        sectionType: TypeOptions.Normal
    },

    '11': { 
        text: ['the teacher called your parents.\nwhen you get home, you are scolded\nand sent to your room while\nthey think of a punishment.\nwhat will you do?'],
        choiceText: [
            'accept the punishment',
            'fight your parents',
            'mystery',
            '', ''
        ],
        sectionType: TypeOptions.Normal
    },

    '111': {
        text: [
            'you choose to accept the punishment.\nyou are grounded for a month\nwith your devices taken away for 2 months.',
            'YOU LOSE'
        ],
        choiceText: ['', '', '', '', ''],
        sectionType: TypeOptions.Normal
    },

    '112': {
        text: [
            'parents:\nwe\'re so dissapointed in you.\nnow that we\'ve had time to think\nabout what we will do, we will\nbe grounding you for a month and\ntaking away your computer for 2.',
            'horrified at the thought of this,\nyou decide that you will fight\nyour parents for your freedom.\nyou: I won\'t let you do that!\nNot without a fight!',
            'dad: even if you want to fight, I\'m not actually going to fight.\nlet\'s settle this with an arm wresle.'
        ],
        choiceText: [
            'fight',
            'don\'t fight',
            '', '', ''
        ],
        sectionType: TypeOptions.Normal
    },

    '1121': {
        text: [







// this will be an arm wresling contest where you have to click really fast







        ],
        choiceText: ['', '', '', '', ''],
        sectionType: TypeOptions.ArmWrestle
    },

    '1122': {
        text: [
            'you choose to accept the punishment.\n your dad sneers at you, and says:\n good choice. you wouldn\'t want\n to fight me.\nyou are grounded for a month,\nand your devices are taken away for 2 months.',
            'YOU LOSE'
        ],
        choiceText: ['', '', '', '', ''],
        sectionType: TypeOptions.Normal
    },

    '113': {
        text: [
            'in a hurry, you flee from the\ncountry and go to the USA.\nwhen you get past the border,\nyou rent an apartment,\nenroll in a new school,\nand start a new life.',
            'a few weeks into school,\nyou forget your homework again.\nthis seems familiar...',
            'YOU LOSE'
        ],
        choiceText: ['', '', '', '', ''],
        sectionType: TypeOptions.Normal
    },

    '12': {
        text: [
            'you: get ready,\nbecause I\'m about to fight you.',
            'teacher: well this is my class,\nso you\'re fighting by my rules!\nMath battle!'
        ],
        choiceText: [
            'accept fight',
            'refuse fight',
            'mystery',
            '', ''
        ],
        sectionType: TypeOptions.Normal
    },

    '121': {
        text: [
            'you choose to accept the fight. but what\nthe teacher doesn\'t know is that you\nwere lying about accepting it on his terms.\n',
            

            




            // if the user wins, then the teacher is found dead somewhere, and the student never gets caught
            // if the teacher gets away, parents find out, and go to angry parent path




        
        ],
        sectionType: TypeOptions.ReactionTest
    },

    '123': {
        text: [
            'you throw your desk at your teacher.\nit hits him really hard,\nknocking him over with a yelp of pain.\n',
            'when the ambulance comes,\nyou find out you broke some of his ribs.'
        ],
    },

    '13': {
        text: [
            'I can prove that I did my homework,\nand that my dog actually ate my computer,\neven though I don\'t have my computer.',
            'teacher: and how will you do that?\nyou: by answering some\nquestions from the homework.\nteacher: haha. good luck'









        ],
        questions: [
            'if you pick 4 points at random \non the surface of a sphere,\nand draw lines connecting them all\ntogether, making a 3D shape,\nwhat is the probability that the\ncenter of the circle will\nbe within the shape?',
            'solve: 2 x^2y^11 + 3xy^1 - 15y = 0,\ny(1) = 0 y^1 (1) = 1',
            'What property of the universe is\nresponsible for making things near\nblack holes experience time slower?'
        ],
        solutions: [
            '1/8\n',
            'y(x) = 0.2x^2.5 - 0.2x^-3\n',
            'mass warping space time\n'
        ],
        sectionType: TypeOptions.Quiz,
        win: 'you cheated.\nYOU LOSE',
        lose: 'you lied! you didn\'t do your homework!\nI\'m calling your parents to\ntell them you lied to my\nface about doing your homework.'
    },

    '14': {
        text: [
            'you take your chewed up, bent\nand broken computer of your bag.\nthe teacher stares at it in confusion\nand awe for a moment, before speaking.',
            'teacher: wow.\nyour dog really did eat your homework.\nI didn\'t think that was possible.\nsorry for the misunderstanding.',
            'YOU WIN\n you don\'t get in trouble for\n not doing your homework,\n since you couldn\'t do it.'
        ],
        choiceText: ['', '', '', '', ''],
        sectionType: TypeOptions.Normal
    },

    '2': {
        text: [
            'teacher: well then how prepared are you\nfor todays pop quiz?',
            'you realize that you don\'t know the stuff\non the homework, meaning you will\nmost likely fail the quiz.\nWhat will you do?'
        ],
        choiceText: [
            'attempt the quiz',
            'try to cheat on the quiz',
            'fight the teacher',
            'mystery',
            ''
        ],
        sectionType: TypeOptions.Normal
    },

    '21': {
        text: ['you try the quiz.\nyou fail the quiz since you didn\'t\nunderstand the contents of it since\nyou didn\'t do your homework.\nyour parents find out.']
    },

    '22': {
        text: [
            'you try to cheat on the quiz by looking\nover at peope around you. when you\nfinish the quiz, you think that you did\npretty good, and you go to hand it to the\n',
            'teacher. as soon as you hand it to the\nteacher, he rips it up in front of you. teacher:\n',
            'I know you cheated! I saw you looking over at\npeople all around you for answers. I dont\nneed to look at this to know your mark.\nit\'s a 0.'
        ]
    },

    '23': {
        text: [
            'you: get ready,\nbecause I\'m about to fight you.\nteacher: well this is my class,\nso you\'re fighting by my rules!\nMath battle!',
            'being the idiot you are,\nyou blindly accept the fight,\nthinking you will be fine.\nThe teacher hands you a pencil and paper,\nand sits down at a desk next to you.',
            'teacher: the rules are simple.\nwe are both given the same question,\nmand the first to answer it correctly\ngets a point. first to 3 points wins.\ncalculators allowed.'








        ],
        questions: [
            'square the number 392.',
            'solve: a^2 + b^2 = 1\nc^2 + d^2 = 2\n(ac + bd)^2 + (ad - bc)^2 = ?',
            'calculate the minimum number of turns\nneeded to solve every possible scramble\non a standard 3x3x3 rubiks cube.',
            'x = 1, y = 10, solve:\ndy / dx = (10x - 1) / (4 + 3y^2)',
            'k = 33, solve for x, y, z:\nx^3 + y^3 + z^3 = k'
        ],
        solutions: [
            '153664\n',
            '2\n',
            '20\n',
            '5x^2 - y^3 = 4y + x + A\n',
            '\nX = -80538738812075974\nY = 80435758145817515\nZ = 12602123297335631\n'
        ],
        sectionType: TypeOptions.Quiz,
        win: 'you cheated.\nYOU LOSE',
        lose: 'teacher: looks like you lose.\nI wonder why.\nyour parents will be finding out soon.'
    },

    '24': {
        text: [
            'you: actually,\nI\'m going to give you a quiz.\nand if you fail, I\'m going to tell\nthe school board that you aren\'t good\nenough at math to teach this class.',
            'teacher: no thanks.\nyou can\'t make me do anything,\nso I don\'t have to do your quiz.\nhowever, you have to do mine, or I\nwill assume you didn\'t do your homework.'
        ],
        choiceText: [
            'take the quiz',
            'don\'t take the quiz'
        ],
        sectionType: TypeOptions.Normal
    },

    '241': {
        text: ['you choose to take the teachers quiz.'],
        questions: [
            'if you pick 4 points at random \non the surface of a sphere,\nand draw lines connecting them all\ntogether, making a 3D shape,\nwhat is the probability that the\ncenter of the circle will\nbe within the shape?',
            'solve: 2 x^2y^11 + 3xy^1 - 15y = 0,\ny(1) = 0 y^1 (1) = 1',
            'What property of the universe is\nresponsible for making things near\nblack holes experience time slower?'









        ],
        solutions: [
            '1/8\n',
            'y(x) = 0.2x^2.5 - 0.2x^-3\n',
            'mass warping space time\n'
        ],
        sectionType: TypeOptions.Quiz,
        win: 'you cheated.\nYOU LOSE',
        lose: 'teacher: you failed the quiz.\nI\'m sure your parents will be\ndelighted to hear about this.'
    },

    '3': {
        text: [
            'teacher: oh, well that\'s good. Then I\nassume that you wlll be able to ace the\npop quiz today, because if you don\'t, your\nparents will be delighted to hear that\nyou didn\'t do your homework\nand failed a quiz because of it.',
            'after realizing what you\'ve gotten yourself into,\nyou must now choose what you will do.'
        ],
        choiceText: [
            'attempt the quiz',
            'fight the teacher',
            'mystery',
            '', ''
        ],
        sectionType: TypeOptions.Normal
    },
    
    '31': {
        text: ['you choose to attempt the quiz.'
    
    
    
    
    
    
    
    
    
    ],
        questions: [
            'solve:\n6 / 2(1 + 2)',
            '1 + 4 = 5\n2 + 5 = 12\n3 + 6 = 21\n8 + 11 = ?',
            'solve for x:\n3x = (5 + (4^2 + 6^2)) - 5(5! -3)'
        ],
        solutions: [
            '9\n',
            '96\n',
            '-176\n'
        ],
        sectionType: TypeOptions.Quiz,
        win: 'teacher: wow. you really are smart\nenough to ace the quiz without doing\nhomework. sorry for bothering you.\nYOU WIN',
        lose: 'teacher: well well well.\nyou didn\'t do good on the quiz.\nI wonder why. I think your parents\nwill be interested to hear about this.'
    },

    '32': {
        text: [
            'you: get ready,\nbecause I\'m about to fight you.',
            'teacher: well this is my class,\nso you\'re fighting by my rules!\nMath battle!'
        ],
        choiceText: [
            'accept fight',
            'refuse fight',
            'mystery'
        ],
        sectionType: TypeOptions.Normal
    },

    '321': {
        text: ['teacher: the rules are simple.\nwe are both given the same question,\nmand the first to answer it correctly\ngets a point. first to 3 points wins.\ncalculators allowed.'],
        questions: [
            'find the square root of x:\n3x = 6(5! - 3) - ((3^3)6 - (5! - 6^2) - (6^2))',
            'square the number 392.',
            'simplify:\n(x + 5y)^2',
            'factor:\n3x^2 - 8x - 3',
            'factor fully:\n4(x^2 + 10x + 25) - 4x^2 - 24x - 36'







        ],
        solutions: [
            '14\n',
            '153664\n',
            'x^2 + 10xy + 25y^2\n',
            '(x - 3) (3x + 1)\n',
            '16(x + 4)'
        ],
        sectionType: TypeOptions.Quiz,
        win: 'teacher: well, you win.\nI guess you didn\'t need to do your homework.\nYOU WIN',
        lose: 'teacher: looks like you lose.\nI guess you should\'ve done your homework.\nyour parents will be finding out soon.'
    },

    '322': {
        text: ['well then I\'m going to phone your parents and tell them about this.']
    },

    '323': {
        text: [
            'you choose to beat up the teacher\nwith your fists. since he is in his\nfifties and you are a teen, you\neasily overpower him and beat him.\n',
            'however, the school board ends\nup finding out, and you get expelled.'
        ]
    },

    '33': {
        text: [
            'you: actually,\nI\'m going to give you a quiz.\nand if you fail, I\'m going to tell\nthe school board that you aren\'t good\nenough at math to teach this class.',
            'teacher: and if I ace the quiz,\nI get to fail you for this class.'
        ],
        choiceText: [
            'deal',
            'no deal'
        ],
        sectionType: TypeOptions.Normal
    },

    '331': {
        text: [
            'you:\ndeal.',
            'the teacher, who underestimated\nthe size of your brain,\nended up completely failing the quiz.\nyou: well I wonder what the school\nboard will do when they hear about this.',
            'the school board ended up punishing the\nteacher, however the punishments were\nnot disclosed to the school.\nthe teacher still has his job,\nso most likely docked pay.',
            'YOU WIN'
        ],
        choiceText: ['', '', '', '', ''],
        sectionType: TypeOptions.Normal
    },

    '332': {
        text: ['teacher: well then I\'m going to tell\nyour parents about what has happened here\nas you have wasted too much of\nmy time for this to continue.']
    },

    '4': {
        text: [
            'you: get ready,\nbecause I\'m about to fight you.',
            'teacher: well this is my class,\nso you\'re fighting by my rules! Math battle!',
            'unsure about whether or not you can\nbeat your teacher at his own game,\nyou think about what you will do'
        ],
        choiceText: [
            'accept fight',
            'refuse fight',
            'run away',
            'mystery',
            ''
        ],
        sectionType: TypeOptions.Normal
    },

    '41': {
        text: [
            'you: I accept.',
            'teacher: the rules are simple.\nwe are both given the same question,\nand the first to answer it correctly\ngets a point. first to 3 points wins.\ncalculators allowed.'









        ],
        questions: [
            'find the square root of x:\n3x = 6(5! - 3) - ((3^3)6 - (5! - 6^2) - (6^2))',
            'square the number 392.',
            'simplify:\n(x + 5y)^2',
            'factor:\n3x^2 - 8x - 3',
            'factor fully:\n4(x^2 + 10x + 25) - 4x^2 - 24x - 36'
        ],
        solutions: [
            '14\n',
            '153664\n',
            'x^2 + 10xy + 25y^2\n',
            '(x - 3) (3x + 1)\n',
            '16(x + 4)'
        ],
        sectionType: TypeOptions.Quiz,
        win: 'teacher: well, you win.\nI guess you didn\'t need to do your homework.\nYOU WIN',
        lose: 'teacher: looks like you lose.\nI guess you should\'ve done your homework.\nyour parents will be finding out soon.'
    },

    '43': {
        text: ['you run away. after realizing you\ncan\'t just sleep on the road,\nyou go back home to angry parents.']
    },

    '44': {
        text: [
            'you choose to beat up the teacher\ninstead of playing his math game.\nas a strong teen, you easily beat up\nyour math teacher who is an old man.\n',
            '\nhowever, the school board finds\nout about this and you are expelled.']
    },

    '5': {
        text: [
            'you noclip through the floor into the\nworst possible backrooms floor, a massive\nocean filled with man-eating monsters.',
            'you tread water until every muscle\nin your body runs out of strengh,\nand then you sink down to the\nmonsters and get eaten alive.',
            'YOU DIE'
        ],
        choiceText: ['', '', '', '', ''],
        sectionType: TypeOptions.Normal
    },
};

// function that is called when the user clicks the button to begin the story
function beginStory() {

    // hide start button
    document.getElementById('start-button').style.display = 'none';

    // unhide page change buttons
    document.getElementById('previous-page-button').style.display = 'initial';
    document.getElementById('next-page-button').style.display = 'initial';

    // call function to load story data
    loadNewInfo();

    // run function to display text
    displayText();
}



// function to load new story info into variables
function loadNewInfo() {
    
    // update current story data
    storyData.currentData = storyData[storyData.choicePath];

    // update array of all pages
    storyData.allPages = storyData.allPages.concat(storyData.currentData.text);

    // update variable so that the choice buttons aren't displayed anymore
    storyData.displayChoiceButtons = false;

    // try to load new choice options
    try {

        document.getElementById('choice-button-1').innerText = storyData.currentData.choiceText[0];
        document.getElementById('choice-button-2').innerText = storyData.currentData.choiceText[1];
        document.getElementById('choice-button-3').innerText = storyData.currentData.choiceText[2];
        document.getElementById('choice-button-4').innerText = storyData.currentData.choiceText[3];
        document.getElementById('choice-button-5').innerText = storyData.currentData.choiceText[4];

    } catch (error) {
        console.log('couldn\'t load choice text because of the following error: ' + error);
    }
}



// this function will perform special actions when the current choice path needs to be handled differently than most.
function choiceSelector() {

    // check if current choice path is one of the first exceptions
    if (containsObject(storyData.choicePath, ['122', '242', '42'])) {

        // redirect choice path to another section
        storyData.choicePath = '11';
    }

    // check if current choice path is one of the second exceptions
    if (containsObject(storyData.choicePath, ['121', '123', '21', '22', '322', '323', '332', '43', '44'])) {

        // call function to load new story data
        loadNewInfo();

        // call function to change display and change the choice path
        moveChoiceBoxes();

        // exit function to skip unnecessary code
        return;
    }

    // call function to load new story data
    loadNewInfo();

    // call function to update page buttons
    changePage(0);

    // run function to display text
    displayText();
}



function moveChoiceBoxes() {

    // remove choice boxes
    let buttons = document.getElementsByClassName('choice-button');
    for (let button in buttons) {
        button.style.display = 'none';
    }

    // add text
    document.getElementById('story-text').innerText = storyData.allPages[storyData.allPages.length - 1];

    // change choice path to 11
    storyData.choicePath = '11';

    // add button to continue story
    document.getElementById('continue-story-button').style.display = 'initial';
}



// function to continue story when a button is pressed
function continueStory() {

    // clear text
    document.getElementById('story-text').innerText = '';

    // remove button to continue story
    document.getElementById('continue-story-button').style.display = 'none';

    // run choice selector to continue the story
    choiceSelector();
}



// function to update the variables and text when the user chooses an option
function makeChoice(choiceNumber) {

    // update choice path
    storyData.choicePath += choiceNumber;

    // print current choice path 
    console.log('current choice path: ' + storyData.choicePath);

    // incrament page number
    storyData.pageNumber++;

    // run function to handle exceptions
    choiceSelector();
}



// function to change the current page that takes an argument that determines whether the program goes fowrard a page or backwards a page
function changePage(incrament) {

    // change page
    storyData.pageNumber += incrament;

    // create placeholders for buttons
    let backButton = document.getElementById('previous-page-button');
    let forwardButton = document.getElementById('next-page-button');

    // check if the current page is the first page
    if (storyData.pageNumber === 0) {

        // temporarily disable the button to go back a page
        backButton.disabled = true;

    // if previous condition was false, check if the 'back button' is currently hidden
    } else if (backButton.disabled == true) {

        // unhide back button
        backButton.disabled = false;
    }

    // check if the current page is the last page
    if (storyData.pageNumber + 1 === storyData.allPages.length) {

        // temprorarily hide the button to go foward a page 
        forwardButton.disabled = true;

        // allow choice buttons to be displayed
        storyData.displayChoiceButtons = true;

    // if the previous condition was false, check if the 'forward button' is currently hidden
    } else if (forwardButton.disabled == true) {

        // unhide forward button
        forwardButton.disabled = false;
    }

    // call function to display text
    displayText()
}



// function to update the text on the screen and display the choice buttons
function displayText() {

    // update text on screen
    document.getElementById('story-text').innerText = storyData.allPages[storyData.pageNumber];

    // make placeholder variables for choice buttons
    let choiceButton1 = document.getElementById('choice-button-1');
    let choiceButton2 = document.getElementById('choice-button-2');
    let choiceButton3 = document.getElementById('choice-button-3');
    let choiceButton4 = document.getElementById('choice-button-4');
    let choiceButton5 = document.getElementById('choice-button-5');
    let choiceButtons = [choiceButton1, choiceButton2, choiceButton3, choiceButton4, choiceButton5];

    // check if choice buttons should be displayed, and if they aren't displayed yet
    if (storyData.displayChoiceButtons) {

        // display choice buttons only if they have text
        for (let i = 0; i < choiceButtons.length; i++) {
            if (choiceButtons[i].innerText != '') {
                choiceButtons[i].style.display = 'initial';
            }
        }

    // if previous condition was false, check if choice buttons should not be displayed, and if they are displayed
    } else if (!storyData.displayChoiceButtons) {

        // hide choice buttons
        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].style.display = 'none';
        }
    }

    



}