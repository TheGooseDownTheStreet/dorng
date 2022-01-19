//drawing gaem

function clicked (id){
    
    let c = document.getElementById(id);
    if (c.style.backgroundColor == `#ffff00` ||
        c.style.backgroundColor == `rgb(255, 255, 0)`) {
        
        c.style.backgroundColor = c.parentElement.style.backgroundColor;

    }   else {
        c.style.backgroundColor = `#ffff00`;
    }
    //c.setAttribute(`background-color`, `#ffff00`);
}
const ctnr = document.createElement(`div`);
ctnr.setAttribute(`class`, `container`);
ctnr.setAttribute(`id`,`ctnr`);

for(let i = 0; i < 25; i++) {
    const c = document.createElement(`div`);
    c.setAttribute(`class`,`cell`);
    c.setAttribute(`tableindex`,`c${i}`);
    c.setAttribute(`id`,`c${i}`);
    if(i>0 && i % 6 == 0){
       // c.styles.clear = left;
       c.setAttribute(`clear`,`left`);
    } else { 
        //c.styles.float = left;
        c.setAttribute(`float`,`left`);
    }
    c.setAttribute(`onclick`,"clicked(this.id)");
    ctnr.appendChild(c);
}
//for(let i = 0; i < 25; i++) {
//let c = document.getElementById(`c${i}`);
//}
document.body.appendChild (ctnr);
