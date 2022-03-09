//drawing gaem

let cardChosen = [];
let cardIds = []
const cardArray = [
{
    name:`1`,
    img:`linear-gradient(yellow,blue)`
},
{
    name:`2`,
    img:`linear-gradient(blue,yellow)`
},
{
    name:`3`,
    img:`linear-gradient(yellow,pink)`
},
{
    name:`4`,
    img:`linear-gradient(pink,blue)`
},
{
    name:`5`,
    img:`linear-gradient(cyan,blue)`
},
{
    name:`6`,
    img:`linear-gradient(yellow,cyan)`
},
{
    name:`7`,
    img:`linear-gradient(green,blue)`
},
{
    name:`8`,
    img:`linear-gradient(yellow,red)`
},
{
    name:`9`,
    img:`linear-gradient(red,blue)`
},
{
    name:`10`,
    img:`linear-gradient(cyan,red)`
},
{
    name:`11`,
    img:`linear-gradient(red,cyan)`
},
{
    name:`12`,
    img:`linear-gradient(orange,cyan)`
},{
    name:`1`,
    img:`linear-gradient(yellow,blue)`
},
{
    name:`2`,
    img:`linear-gradient(blue,yellow)`
},
{
    name:`3`,
    img:`linear-gradient(yellow,pink)`
},
{
    name:`4`,
    img:`linear-gradient(pink,blue)`
},
{
    name:`5`,
    img:`linear-gradient(cyan,blue)`
},
{
    name:`6`,
    img:`linear-gradient(yellow,cyan)`
},
{
    name:`7`,
    img:`linear-gradient(green,blue)`
},
{
    name:`8`,
    img:`linear-gradient(yellow,red)`
},
{
    name:`9`,
    img:`linear-gradient(red,blue)`
},
{
    name:`10`,
    img:`linear-gradient(cyan,red)`
},
{
    name:`11`,
    img:`linear-gradient(red,cyan)`
},
{
    name:`12`,
    img:`linear-gradient(orange,cyan)`
},

]
function flipped (id){    
    let c = document.getElementById(id);
    if(c.style.backgroundColor != `#ffff00` &&
        c.style.backgroundColor != `rgb(255, 255, 0)`){
        console.log(`1`);
            return;
    }
    let i = c.getAttribute(`data-id`);
    console.log(cardArray[i].img);
    console.log(c.style.backgroundImage);
    if(c.style.backgroundImage.replace(/\s/g,'') == cardArray[i].img.replace(/\s/g,'')){
        console.log(`2`);
        return;
    }
    cardChosen.push(cardArray[i].name);
    cardIds.push(i);
    c.style.backgroundImage = cardArray [i].img;
    if(cardChosen.length == 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){
    let cards = ctnr.querySelectorAll("div");
    let opt1id = cardIds[0];
    let opt2id = cardIds[1];
    if(cardChosen[0] == cardChosen[1]){
        cards[opt1id].style.backgroundColor = cards[opt1id].parentElement.style.backgroundColor;
        cards[opt1id].style.backgroundImage = ``;
        cards[opt2id].style.backgroundColor = cards[opt2id].parentElement.style.backgroundColor;
        cards[opt2id].style.backgroundImage = ``;

    }else{
        cards[opt1id].style.backgroundColor = `#ffff00`;
        cards[opt1id].style.backgroundImage = ``;
        cards[opt2id].style.backgroundColor = `#ffff00`;
        cards[opt2id].style.backgroundImage = ``;
    }
    cardChosen =  [];
    cardIds = [];
}

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const c = document.createElement(`div`);
        c.setAttribute(`class`,`cell`);
        c.setAttribute(`tableindex`,`c${i}`);
        c.setAttribute(`id`,`c${i}`);
        c.setAttribute(`data-id`,i);
        if(i>0 && i % 4 == 0){
            // c.styles.clear = left;
        c.setAttribute(`clear`,`left`);
    } else { 
        //c.styles.float = left;
        c.setAttribute(`float`,`left`);
    }
    c.setAttribute(`onclick`,"flipped(this.id)");
    c.style.backgroundColor = `#ffff00`;
        
    ctnr.appendChild(c);
    }
}
cardArray.sort(() => 0.5 - Math.random());
const ctnr = document.createElement(`div`);
ctnr.setAttribute(`class`, `container`);
ctnr.setAttribute(`id`,`ctnr`);

document.body.appendChild (ctnr);
createBoard ();
