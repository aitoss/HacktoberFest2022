// add value in spec now created

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
console.log(dir)

if(dir!=""){
    let count = document.querySelector('#counts').style.display = "none"
    console.log(count)
    document.querySelector('.display-1').innerText = dir;
}
if(dir === "/chart"){
    fin_data = chart
}
else if(dir === "/navbar"){
    fin_data = table
}
else {
    fin_data = data
}

let drop = document.querySelector('#spec')
for(let key in fin_data){
    drop.innerHTML += `<option value="${key}">`
}
let btn = document.querySelector('.icon_box')

btn.addEventListener('click', () => {
    let varr = document.querySelector('.search').value 
    window.location.href = `./code/${fin_data[varr]}/index.html`;
})

// -------------------------------------------------------
// -----------------counter loader------------------------
// -------------------------------------------------------

// update following values to change counter : issue
