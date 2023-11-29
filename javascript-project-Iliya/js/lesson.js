

const phoneInput = document.querySelector("#phone_input");
const phoneCheck = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996\d{3}\d{2}\d{2}\d{2}$/;

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.textContent = "Number is correct";
        phoneResult.style.color = "green";
    } else {
        phoneResult.textContent = "Number is not correct";
        phoneResult.style.color = "red";
    }
};
////////////////////////////

const tabContent = document.querySelectorAll(".tab_content_block")
const tabs = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")

const hideTabContent = () => {
    tabContent.forEach((item) => {
    item.style.display = "none"
 })

 tabs.forEach((item) => {
    item.classList.remove("tab_content_item_active")
 })
 }

 const showTabContent = (index =0) => {
 tabContent[index].style.display = "block" 
 tabs[index].classList.add("tab_content_item_active")
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabs.forEach((item, i) => {
            if(event.target === item) {
                hideTabContent()
                showTabContent(i)  
            }
        })
    }
}

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContent.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}

autoSlider()
//////////////




const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

async function fetchData() {
  try {
    const response = await fetch("../data/converter.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const somToUsdRate = 1 / data.usd;
    const somToEurRate = 1 / data.eur;

    som.oninput = () => {
      const inputValue = parseFloat(som.value);
      if (!isNaN(inputValue)) {
        usd.value = (inputValue * somToUsdRate).toFixed(2);
        eur.value = (inputValue * somToEurRate).toFixed(2);
      }
    };

    usd.oninput = () => {
      const inputValue = parseFloat(usd.value);
      if (!isNaN(inputValue)) {
        som.value = (inputValue / somToUsdRate).toFixed(2);
        eur.value = (inputValue * (somToEurRate / somToUsdRate)).toFixed(2);
      }
    };

    eur.oninput = () => {
      const inputValue = parseFloat(eur.value);
      if (!isNaN(inputValue)) {
        som.value = (inputValue / somToEurRate).toFixed(2);
        usd.value = (inputValue * (somToUsdRate / somToEurRate)).toFixed(2);
      }
    };
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchData();







/////////



const card = document.querySelector ('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 1


async function fetchFunc(count) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
        const data = await response.json();

        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (e) {
        alert(e, 'ERROR');
    }
}

btnNext.onclick = () => {
    count++;
    if (count > 200) {
        count = 1;
    }
    fetchFunc(count);
};

btnPrev.onclick = () => {
    count--;
    if (count < 1) {
        count = 200;
    }
    fetchFunc(count);
};

fetchFunc(count);
    

        /////////////////////
        const cityNameInput = document.querySelector('.cityName');
      
        const citySpan = document.querySelector('.city');
        const tempSpan = document.querySelector('.temp');
        
        const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
        const apiKey = 'e417df62e04d3b1b111abeab19cea714';
        
        cityNameInput.oninput = async(event) => {
            try{
                const response = await fetch(`${baseUrl}?q=${event.target.value}&appid=${apiKey}`)
                const data = await response.json();
                     // .then(response => response.json())
                     // .then(data => {
                         citySpan.innerHTML = data.name || 'Сity ​​not found ';
                         tempSpan.innerHTML = data.main && data.main.temp ? `${Math.round(data.main.temp - 273)}&deg;C` : '...';
                     // })
            }catch(e){
                alert(e, 'ERROR');
            }
          
                
        };
        