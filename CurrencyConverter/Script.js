const Base_url = " https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);

       
    }
     select.addEventListener("change",(evt) => {
            updateFlag(evt.target);
        });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let counrtyCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${counrtyCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}  

btn.addEventListener("click" ,async (evt) => {
    evt.preventDefault();
    let amt  = document.querySelector(".amount input")
    let amtVal = amt.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amt.value = "1";
    }

    
    const URL = `${Base_url}/${fromCurr.value.toLowerCase()}.json`;
    let fromCurrval = fromCurr.value.toLowerCase();
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data?.[fromCurrval]?.[toCurr.value.toLowerCase()];
    
    let finalAmount  = amt.value * rate;
    msg.innerText = `${amtVal} ${fromCurrval.toUpperCase()} = ${finalAmount} ${toCurr.value.toUpperCase()}`;

    });
