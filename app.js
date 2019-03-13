let cells = document.querySelectorAll('.cell');
let cell1 = document.querySelector('#cell1');
let cell2 = document.querySelector('#cell2');
let cell3 = document.querySelector('#cell3');
let cell4 = document.querySelector('#cell4');
let cell5 = document.querySelector('#cell5');
let cell6 = document.querySelector('#cell6');
let cell7 = document.querySelector('#cell7');
let cell8 = document.querySelector('#cell8');
let cell9 = document.querySelector('#cell9');
let results = document.querySelector('#results');
let count = 0;

cells.forEach(function(cell){
    cell.addEventListener("click",cellClicked);
});

function cellClicked(e){
    if(count == 9){
        count = 0
        resetBoard(cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9)
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
 function resetBoard(a, b, c, d, e, f, g, h, i){
     a.textContent = "";
     b.textContent = "";
     c.textContent = "";
     d.textContent = "";
     e.textContent = "";
     f.textContent = "";
     g.textContent = "";
     h.textContent = "";
     i.textContent = "";
 };

