function showMore() {
    var list = document.getElementById("list");
    list.innerHTML += '<li id="addedLine"> Bury - Piccadilly </li>';
    const addedLine = document.getElementById("addedLine");
    addedLine.className = "light-blue";
}