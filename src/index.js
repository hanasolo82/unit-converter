const inputEl = document.getElementById("inputNum")
const listEl = document.getElementById("list")
const btnEl = document.getElementById("convertBtn")

// equivalencias  
// 1 metro = 3.28084 feet
// 1 litro = 0.26417 galons
// 1 kg = 2.20462 pounds 

const values = [
    {   
        title: "Length",
        peers: "Meter/Feet", 
        quantity: 3.28084
    },

]

function converter() {
  return  inputEl.value * 3.28084
}
 
function render() {
    
        let sentence = `
        <li class="ul-list" id="xxx">
            <h2>xxx</h2>
             <p>
                $ meters =  ${converter()} feet 
                |
                input feet = xxx meter
             </p>
        </li>
       
    `

    
    listEl.innerHTML = sentence
}

btnEl.addEventListener('click', () => {
    render()
    converter()
}
)

