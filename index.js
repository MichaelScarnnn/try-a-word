const url = "https://mashape-community-urban-dictionary.p.rapidapi.com";
/* let xRapidAPIKey =  "your custom defined API key you need to use" ; */
let xRapidAPIHost = "mashape-community-urban-dictionary.p.rapidapi.com"

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': xRapidAPIKey,
		'X-RapidAPI-Host': xRapidAPIHost
	}
};

const getResult = (urbanWord) => {
    let query = `${url}/define?term=${urbanWord}`
	fetch(query, options)
	.then(data => {
        return data.json()
    })
    .then(displayResult)
};

const displayResult = (result) => {
    console.log(result);
    urbanWord = searchBar.value
    
    let word = document.querySelector(".urbanWord");
    word.innerHTML = `${urbanWord}`

    let wordDefinition = document.querySelector(".wordDefinition");
    wordDefinition.innerHTML = `- ${result.list[0].definition} <br><br> - ${result.list[1].definition} <br><br> - ${result.list[2].definition} `
};

const searchBar = document.getElementById("searchBar")
searchBar.addEventListener('keypress',setQuery);

var colors = ['#760CE8', '#3191e0', '#E8890C', '#40797a', '#5b2e2e', '#26b843', '#2a8e45', '#2c489f', '#aaaf1f', '#7c1818', '#fe2c2c', '#28fa83f8', '#c35ab3f8', '#1647e6', '#2040d1'];

var changeBackground = () => {
    document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
};

changeBackground();