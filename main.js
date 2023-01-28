const gridItem = document.querySelectorAll('.grid-item');
let player = 'X';

for (const squares of gridItem){
    squares.addEventListener('click', function(){
        if (squares.textContent === ''){
            squares.textContent = player;
            if (player == 'X'){
                player = 'O';
            }
            else {
                player = 'X';
            }
        }
    });
}