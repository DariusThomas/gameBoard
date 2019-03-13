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
    if(count == 9 && results.textContent == "Tic Tac Toe"){
        count = -1;
        results.textContent = "Draw";
    } else if(count % 2 == 0 && e.target.textContent == ""){
        count ++  
        e.target.textContent ="X"
    }else if(count % 2 == 1 && e.target.textContent == ""){   
count ++
    e.target.textContent ="O"  
}else if ( count == -1){
    count = 0;
    resetBoard(cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9)
}else {
    count = count + 0
};
if(e.target.textContent != ""){
checkWin(cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, e.target.textContent);
};
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
     results.textContent = 'Tic Tac Toe';
 };

 function checkWin(a,b,c,d,e,f,g,h,i,turn){
     if( a.textContent == turn && b.textContent == turn && c.textContent == turn ||
        d.textContent == turn && e.textContent == turn && f.textContent == turn ||
        g.textContent == turn && h.textContent == turn && i.textContent == turn ||
        a.textContent == turn && d.textContent == turn && g.textContent == turn ||
        b.textContent == turn && e.textContent == turn && h.textContent == turn ||
        c.textContent == turn && f.textContent == turn && i.textContent == turn ||
        a.textContent == turn && e.textContent == turn && i.textContent == turn ||
        c.textContent == turn && e.textContent == turn && g.textContent == turn){
            results.textContent = turn + " is the winner";
            count = -1;
        }
 }