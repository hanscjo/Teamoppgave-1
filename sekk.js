// let epler = Math.floor(Math.random() * 1000000);
// let pærer = Math.floor(Math.random() * 1000000);
// let bananer = Math.floor(Math.random() * 1000000);
// function viseHide(){
//     document.getElementById('vise').innerHTML = `
//     <button onclick="antallFrukt(epler)">epler</button>
//     <button onclick="antallFrukt(pærer)">pærer</button>
//     <button onclick="antallFrukt(bananer)">bananer</button>`;


// }
function blinkText(){
    var f = document.getElementById('blinkingText');
  setInterval(function() {
    f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
  }, 500);
}

function antallFrukt() {



    document.getElementById('viseFrukt').innerHTML = epler+pærer+bananer;
    document.getElementById('apple').innerHTML = epler;
    document.getElementById('peach').innerHTML = pærer;
    document.getElementById('banana').innerHTML = bananer;
}

function empty() {
    epler = 0;
    pærer = 0;
    bananer = 0;
    currentFruit = '';
    oppdaterFruktMelding("Velg en frukt!"); 
    antallFrukt();
    animerFeedback("bob1");
}