const inputURL = document.getElementById('input-url');
const buttonForm = document.getElementById('acortarBTN');
const containerDIV = document.getElementById('link-acut');



const getURLapi = async()=>{
    const API = `https://api.shrtco.de/v2/shorten?url=${inputURL.value}`;
    const response = await fetch(API)
    const responseJSON = await response.json()
    // console.log(response)
    // console.log(response.url) // URL original
    // console.log(responseJSON)
    // console.log(responseJSON.result.short_link) //URL cortada

    containerDIV.innerHTML = `<div class="true">${responseJSON.result.original_link} <p class="link true"> URL Acortada: [<a href="${responseJSON.result.full_short_link}" target="_blank">    ${responseJSON.result.short_link}  </a>]</p></div>`
}



buttonForm.addEventListener('click', (e)=>{
    e.preventDefault();
    getURLapi()
})
