const root = document.querySelector('#root')
const btnAdd = document.querySelector('.btn-add')
// <!-- <div class="counter">
// <button class="btn btn-inc">+</button>
// <h3 class="number">0</h3>
// <button class="btn btn-dec">-</button>
// <button class="btn btn-clr">C</button>
// </div> -->
function counter(){
    let countNum = 0



function makeElemnet(tag, attr_n, attr_v, counter){
    let  output = document.createElement(tag)
    output.setAttribute(attr_n,attr_v)
    output.textContent = counter
    return output
}

function updatCConter(n){
    if(countNum + n < 0){
        return
    }
    let total = 0

    countNum += n
    total += n
    number.textContent = countNum
    sum
}
    const delCounter = (e) =>{
        console.log (e.target.closest('.counter'))
        e.target.closest('.counter').remove()
    }


const counter = makeElemnet('div','class','counter')
const btnInc = makeElemnet('button','class','btn-inc','+')
const number = makeElemnet('h3','class','number','0')
const btnDec = makeElemnet('button','class','btn-dec','-')
const btnClr = makeElemnet('button','class','btn-clr','C')
const btnDel = makeElemnet('button','class','btn-del','X')


btnInc.addEventListener('click', () => updatCConter(1))
btnDec.addEventListener('click', () => updatCConter(-1))
btnClr.addEventListener('click', () => updatCConter(-countNum))
btnDel.addEventListener('click', delCounter)

counter.append(btnInc)
counter.append(number)
counter.append(btnDec)
counter.append(btnClr)
counter.append(btnDel)

return counter;
}

function hd1AddCounter() {
    root.append(counter())
}
btnAdd.addEventListener('click', hd1AddCounter)