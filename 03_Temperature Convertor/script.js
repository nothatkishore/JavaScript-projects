const celcius = document.querySelector('#cel');
const far = document.querySelector('#far');
const button = document.querySelector('#convert')

button.onclick = function () 
{
    if (celcius.value.length > 0) 
    {
        const val = cel_to_far(parseFloat(celcius.value));
        far.value = val.toFixed(2);
    } 

    else if (far.value.length > 0) 
    {
        const val = far_to_cel(parseFloat(far.value));
        celcius.value = val.toFixed(2);
    } 
    
    else 
    {
        alert('Enter values');
    }
}

function cel_to_far(celsius) 
{
    const fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

function far_to_cel(fahrenheit) 
{
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}
