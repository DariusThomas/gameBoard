let cells = document.querySelectorAll('.cell')
let count = 0
cells.forEach(function(cell){
    cell.addEventListener("click",cellClicked);
});

function cellClicked(e){
    if(count == 9){
        e.target.textContent =""
        count = 0
    } else if(count % 2 == 0 && e.target.textContent == ""){
        count ++  
        e.target.textContent ="X"
    }else if(count % 2 == 1 && e.target.textContent == ""){   
count ++
    e.target.textContent ="O"
}else{
    count = count + 0
}
}
