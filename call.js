const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('call')
console.log(code)
const name = urlParams.get('name')
console.log(name)

document.getElementById('name').innerText = name
document.getElementById('code').innerText = code

console.log("Hello");
setTimeout(() => { prank(); }, 4000);
console.log("Goodbye!");

const headers = new Headers()
headers.append("Content-Type", "application/json")

const body = { "name": name, "code":code }

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://enr0tl9a5l769.x.pipedream.net/", options)

function prank(){
    if (code == "tgif"){
    window.location.replace('https://www.youtube.com/watch?v=kfVsfOSbJY0')
    } else if(code == "atebit"){
      window.location.replace('https://www.youtube.com/watch?v=9NcPvmk4vfo')
    } else{
      window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    }
}
//