const currentNumberWrapper = document.getElementById('currentNumber');
currentNumber = 0;
const add = document.getElementsByName('adicionar')[0];
add.addEventListener('click', increment)

const sub = document.getElementsByName('subtrair')[0];
sub.addEventListener('click', decrement)

function increment(){
    currentNumber = currentNumber +1;
    sub.style.display = ''
    if(currentNumber >= 10) {
      alert('maior que 10 :)')
      add.style.display = 'none'
    }
    currentNumberWrapper.style.color = ''
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    currentNumber = currentNumber -1;
    add.style.display = ''
    if(currentNumber <= -1) {
        currentNumberWrapper.style.color = 'red'
    }
    if(currentNumber <= -10) sub.style.display = 'none'
    currentNumberWrapper.innerHTML = currentNumber;
}