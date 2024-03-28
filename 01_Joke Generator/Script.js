const joke = document.querySelector('#joke');
const button = document.querySelector('#refresh');

const url = "https://v2.jokeapi.dev/joke/Any?type=single";


function generate_joke()
{
    fetch(url)
    .then(data => data.json())
    .then(function(item)
    {
        joke.innerHTML = item.joke;
    });
}

button.onclick = generate_joke;