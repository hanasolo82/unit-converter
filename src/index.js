const inputEl = document.getElementById("inputNum")
const listEl = document.getElementById("list")
const btnEl = document.getElementById("convertBtn")

// equivalencias  
// 1 metro = 3.28084 feet
// 1 litro = 0.26417 galons
// 1 kg = 2.20462 pounds 

function converter(input, measure) {

    if(measure === length) {
       input.value * 3.28084
    } else if (measure === volume) {
        input.value * 0.26417
    } else {
        input.value * 2.20462
    }
}
console.log(converter())
btnEl.addEventListener('click', () => {
     render()
})



/* function render(obj, title) {
let listRender = ''
 const ulList = `
            <li class="ul-list">
                <p class="ul-title">${title}</p>
            </li>
    `
   obj.innerHTML += ulList
}


render(listEl)*/