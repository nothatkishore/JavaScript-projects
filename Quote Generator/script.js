const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const generate = document.querySelector('#generate');

const url = "https://api.quotable.io/random";

function get_quote()
{

    fetch(url)
    .then(data => data.json())
    .then(function(item)
    {
        quote.innerHTML = item.content;
        author.innerHTML = `- ${item.author}`;
    });

}

generate.onclick = get_quote;