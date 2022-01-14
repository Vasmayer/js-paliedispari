/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!

*/


const verifyButton = document.getElementById('palindromebutton');
const inputWord = document.getElementById('input-word');
const response = document.getElementById('response');

console.log(inputWord);

function isPalindrome (input)
{
    const word = input.value;
    console.log(word);

    const lenght = word.length

    if(lenght !== 0)
    {          
            const firstHalfWord = word.substring(0,lenght/2);
            const lastHalfWord = word.substring(lenght/2,lenght);
            console.log(firstHalfWord);
            console.log(lastHalfWord);

            if(firstHalfWord === lastHalfWord)
            {
                return true;
            }

            return false;
    }
    else
    {
        alert('Devi inserire una parola!');
        return false;
    }
}


verifyButton.addEventListener('click',function(){

    if(isPalindrome(inputWord))
    {
        response.innerHTML = "<span class='text-success'>La parola è PALINDROMA</span>"
    }
    else
    {
        response.innerHTML = "<span class='text-secondary'>La parola NON è PALINDROMA</span>"   
    }
});