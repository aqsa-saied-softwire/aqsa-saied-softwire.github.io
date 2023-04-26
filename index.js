const htmls = ['<li class="yellow"> Bury - Piccadilly </li>', '<li class="grey"> East Didsbury - Shaw and Crompton </li>', '<li class="pink"> East Didsbury - Rochdale Town Centre </li>']

let x = 0;
function showMore() {
    var list = document.getElementById("list");
    if (x < htmls.length) {
        list.innerHTML += htmls[x];
        x = x + 1;
    }
}