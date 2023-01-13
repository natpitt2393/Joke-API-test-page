const searchByKeywordInputEl = document.querySelector('#keywordInput');
const searchByKeywordButtonEl = document.querySelector('#searchButtonKeyword');
const searchByCategoryButtonEl = document.querySelector('#searchByCategory')



searchByKeywordButtonEl.addEventListener('click', () => {
    console.log("First let's see if this even works");
    fetchJokeByKeyword();
})

function fetchJokeByKeyword() {
    let requestURL = 'https://v2.jokeapi.dev/joke/Any?contains=';
    const inputKeywordValue = searchByKeywordInputEl.value;
    console.log(inputKeywordValue);
    requestURL += inputKeywordValue;
    console.log(requestURL);

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error){
        console.error(error);
    })
}