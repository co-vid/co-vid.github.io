var code = null
var name = null
function go(){
    code = document.getElementById('code').value
    name = document.getElementById('name').value
    window.location.href = 'call.html?'+"call="+code+"&name="+name
}