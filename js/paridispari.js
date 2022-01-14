/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente! */

const oddEvenButton = document.getElementById('oddevenbutton');
const select = document.getElementById('select');
const inputNumber = document.getElementById('input-number');
const responsetwo = document.getElementById('response-two');

function rdnNumber()
{
    const rdnNumber = Math.floor(Math.random() * 5) + 1;
    console.log(rdnNumber);

    return rdnNumber;
}

function sum(numberUser,numberComputer)
{
    const total  = numberUser + numberComputer;

    return total;
}

function isEven(number)
{
    if(number % 2 === 0)
    {
        return true;
    }

    return false;
}

oddEvenButton.addEventListener('click',function(){

  let number = parseInt(inputNumber.value);
  console.log(number);

  
    if(select.value && !isNaN(number) && (number > 0 && number < 6 ))
    {
        const numberUser = number;
        const numberComputer = rdnNumber();
        
        const total = sum(numberUser,numberComputer);

        /* PARI */
        if(isEven(total) && select.value === 'even')
        {
            responsetwo.innerHTML = `<span class='text-success'>Complimenti! Hai Vinto!&nbsp;<i class="fas fa-glass-cheers"></i></span><br><span class='text-primary'>TOTALE: ${total}<span>`;
        }
        /* DISPARI */
        else
        {
            responsetwo.innerHTML = `<span class='text-danger'>Mi dispiace! Hai perso!</span><br><span class='text-primary'>TOTALE: ${total}<span>`;
        }
        
    }
    else
    {
        responsetwo.innerHTML = "<span class='text-danger'>Devi inserire i dati corretti!</span>";
    }
});

