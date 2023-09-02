let celsiusInput = document.querySelector('#celsiusInput');
let fahrenheitInput = document.querySelector('#fahrenheitInput');
let kelvinInput = document.querySelector('#kelvinInput');
let btn = document.querySelector('#convertButton'); // Changed selector to target the button

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

btn.addEventListener('click', function() {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = parseFloat(fahrenheitInput.value);
    let kTemp = parseFloat(kelvinInput.value);

    if (!isNaN(cTemp)) {
        fTemp = (cTemp * 9/5) + 32;
        kTemp = cTemp + 273.15;
        fahrenheitInput.value = roundNumber(fTemp);
        kelvinInput.value = roundNumber(kTemp);
    } else if (!isNaN(fTemp)) {
        cTemp = (fTemp - 32) * 5/9;
        kTemp = (fTemp - 32) * 5/9 + 273.15;
        celsiusInput.value = roundNumber(cTemp);
        kelvinInput.value = roundNumber(kTemp);
    } else if (!isNaN(kTemp)) {
        cTemp = kTemp - 273.15;
        fTemp = (kTemp - 273.15) * 9/5 + 32;
        celsiusInput.value = roundNumber(cTemp);
        fahrenheitInput.value = roundNumber(fTemp);
    }
});