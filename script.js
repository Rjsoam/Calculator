let  screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is', buttonText);
        if(e.target.innerHTML == 'X') {
            buttonText= '*';
            screenValue = screenValue +buttonText;
            document.querySelector('input').value = screenValue;
        }
        else if (e.target.innerHTML == 'C'){
            screenValue = ""
            document.querySelector('input').value = screenValue;
        }
        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            document.querySelector('input').value = screenValue;
        }
        else{
            console.log(e.target)
            screenValue = screenValue + e.target.innerHTML;
            document.querySelector('input').value = screenValue;
        }
    })
}
   


















/*buttons = document.querySelectorAll('button');
let screenValue = '';
for(items of buttons) {
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
        console.log('button text is', buttonText);
        if(buttonText == 'X') {
            buttonText= '*';
            screenValue +=buttonText;
            screen.Value = screenValue;
        }
        else if (buttonText == 'C'){
            screenValue = "";
            screen.Value = screenValue;
        }
        else if (buttonText == '=') {
            screen.Value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screenValue = screenValue;
        }
    })
} */
