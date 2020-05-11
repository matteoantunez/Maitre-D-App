document.querySelector('#length').addEventListener('click', event => {
    let wordEntered = document.getElementById('word').value;
    console.log(wordEntered)
    let wordLength;
    wordLength = wordEntered.length;
    document.querySelector('#result').innerHTML = wordLength;
})