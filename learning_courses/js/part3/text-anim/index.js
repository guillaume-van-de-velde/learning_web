let array = ["developpeur", "photographe", "creatif"]

function createLetter(i, j) {
    const letter = document.createElement('span');
    letter.textContent = array[i][j];
    target.appendChild(letter);
}

let wordIndex = 0;
let letterIndex = 0;

// let needToRemove = 0;

// function increment() {
//     if (needToRemove != 0)
//     {
//         needToRemove--;
//         document.querySelector('span').remove();
//     }
//     else if (letterIndex < array[wordIndex].length)
//         {
//             createLetter(wordIndex, letterIndex);
//             letterIndex++;
//         }
//         else
//         {
//             clearInterval(interval);
//             setTimeout( () => {
//                 interval = setInterval(increment, 50);
//             }, 1000);
//             needToRemove = letterIndex;
//             letterIndex = 0;
//             if (wordIndex < 2)
//                 wordIndex++;
//             else
//                 wordIndex = 0;
//     }
// }


function deleteWord() {
    setTimeout(() => {
        if (letterIndex > 0)
        {
            document.querySelector('span').remove();
            letterIndex--;
            deleteWord();
        }
        else
            recusrsive_step();
    }, 50);
};

function recusrsive_step() {
    setTimeout(() => {
        if (wordIndex == array.length)
            wordIndex = 0;
        if (letterIndex < array[wordIndex].length)
        {
            createLetter(wordIndex, letterIndex);
            letterIndex++;
        }
        else
        {
            wordIndex++;
            setTimeout(deleteWord, 1000);
            return ;
        }
        recusrsive_step();
    }, 60);
};

recusrsive_step();
