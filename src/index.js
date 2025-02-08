const inputEl = document.getElementById("inputNum")
const listEl = document.getElementById("list")
const btnEl = document.getElementById("convertBtn")

// equivalencias  
// 1 metro = 3.28084 feet
// 1 litro = 0.26417 galons
// 1 kg = 2.20462 pounds 


const measureType = [

    {
        name:"Length",
        unitOne: "Meter",
        unitTwo: "Feet"
        
    },
    {
        name: "Volume",
        unitOne: "Liter",
        unitTwo: "Gallon"
    }, 
    {
        name: "Mass",
        unitOne: "Kilo",
        unitTwo: "Pound"
    } 

]


function converter(type) {
    
        if (type.name === "Length") { 
            let lengthRes = [inputEl.value * 3.28084, inputEl.value * 0.3048 ]
            return lengthRes
        } 
        else if (type.name === "Volume") { 
            let volumeRes = [inputEl.value * 0.26417, inputEl.value * 3.78541]
            return volumeRes; 
        } 
        else if (type.name === "Mass") { 
            let massResult = [inputEl.value * 2.20462, inputEl.value * 0.45359237]
            return massResult ;  
        }
        return 'Processing value'; 
    }

  

 
function render(arr) {
   let arrSentence = '' 
   
   for(let i = 0; i < arr.length; i++) {
    let result = converter(arr[i])
    let measureResult = arr[i].name
        let sentence = `
        <li class="ul-list" id="xxx">
            <h2>${measureResult}</h2>
             <p>
                ${inputEl.value} ${arr[i].unitOne} =  ${result[0]} ${arr[i].unitTwo} 
                |
                ${inputEl.value} ${arr[i].unitTwo} = ${result[1]} ${arr[i].unitOne}
             </p>
        </li>
       
    `
    arrSentence += sentence
} 
    
    listEl.innerHTML = arrSentence
}

btnEl.addEventListener('click', () => {
    render(measureType)
    
}
)

