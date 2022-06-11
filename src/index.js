const button = document.querySelector(".button")
let name1 = document.querySelector(".name")
let capital = document.querySelector(".capital")
let population = document.querySelector(".population")

function getRandomCountry(){
    fetch("https://restcountries.com/v3.1/all")
    .then((Response) => Response.json())
    .then((data) =>{
        
        const randomNumber = Math.floor(Math.random()* data.length);
        let countryName=data[randomNumber].name.official;
        let countryCapital=data[randomNumber].capital;
        if(countryCapital===undefined){
            return "Ölkənin paytaxtı tapılmadı"
        }
        let countryPopulation=data[randomNumber].population;
        name1.innerHTML="Ölkənin adı: " + countryName;
        capital.innerHTML="Paytaxtının adı: " + countryCapital;
        population.innerHTML="Əhalisinin sayı: " + countryPopulation;
    })

    
}
function randomRGB(){
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;


    let rgbColor = "rgb(" + red + "," + green + "," + blue + ")"; 

    document.body.style.background = rgbColor;
}
getRandomCountry()
randomRGB()


button.addEventListener("click",getRandomCountry)