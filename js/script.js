var argButtonName, button_paper, button_rock, button_scissors;



/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

    /**
     * Describe this function...
     */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamien';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nozyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamien';
        }
    }

    /**
     * Describe this function...
     */
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamien') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamien' && argComputerMove == 'nozyce') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Jest Remis!!!');
        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }

    playerMove = argButtonName;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);

}


button_rock = document.getElementById('button-rock');
button_rock.addEventListener('click', function () { buttonClicked('kamien'); });
button_paper = document.getElementById('button-paper');
button_paper.addEventListener('click', function () { buttonClicked('papier'); });
button_scissors = document.getElementById('button-scissors');
button_scissors.addEventListener('click', function () { buttonClicked('nozyce'); });





