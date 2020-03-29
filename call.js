const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('call')
console.log(code)
const name = urlParams.get('name')
console.log(name)

document.getElementById('name').innerHTML = name
document.getElementById('code').innerHTML = code

console.log("Hello");
setTimeout(() => { prank(); }, 4000);
console.log("Goodbye!");

function prank(){
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}