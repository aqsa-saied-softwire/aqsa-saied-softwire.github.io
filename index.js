const htmls = ['<li class="yellow"> Bury - Piccadilly </li>', '<li class="grey"> East Didsbury - Shaw and Crompton </li>', '<li class="pink"> East Didsbury - Rochdale Town Centre </li>', '<li class="light-blue"> Eccles - Ashton-under-Lyne </li>', '<li class="red"> The Trafford Centre - Cornbrook </li>']

let x = 0;

function showMore() {
    var list = document.getElementById("list");
    if (x < htmls.length) {
        list.innerHTML += htmls[x];
        x = x + 1;
    } else {
        document.getElementById("button").style.display = "none";
        document.getElementById("list").className = "goCrazy"
    }
}