// {city}  {capCities}

function generateUrls(arr) {
    const url = `<a href="https://www.snapcarcash.com/area-served-car-title-loans/car-title-loans-{city}/" target="_blank" rel="noopener">{capCities}</a>`;
    const urls = [];

    for (let i = 0; i < arr.length; i++) {
        const modifiedCity = arr[i].trim().replace(/[ .]+/g, "-").toLowerCase();
        const cityUrl = url.replace('{city}', modifiedCity).replace('{capCities}', arr[i]);
        urls.push(cityUrl);
    }

    return urls;
}

const arr = [
    '  British Columbia   ',
    'Alberta',
    '  Ontario',
    'Saskatchewan  ',
    'New Brunswick',
    '  Nova Scotia',
    'Prince Edward Island',
    'Newfoundland',
    'Manitoba'
];

const urls = generateUrls(arr);


const myLinks = document.getElementById('container');
myLinks.innerText = urls.join('\n');


function copyText (){
    const myLinks = document.getElementById('container');
    const text = myLinks.innerText;
    
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    tempInput.select();
    document.execCommand('copy');
    
    document.body.removeChild(tempInput);
}