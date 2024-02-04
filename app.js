function clock()
{
    let time=document.querySelector(".time")

    let dt= new Date();
    console.log(dt)


    time.innerHTML+=`<span style="font-weight:bold;">${dt}</bold>`
}
clock()
// setInterval(clock,1000)



//& full api url=https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=06429f41f8da24f1b27133dfe859bbfd&units=metric
let input=document.querySelector("input");
let btn=document.querySelector("button");
let apiKey= "06429f41f8da24f1b27133dfe859bbfd";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

async function weather(city)
{
    let response=await fetch(apiUrl+ city + `&appid=${apiKey}`);
    let data=await response.json();

    console.log(data.main)
    document.getElementById("child1").innerHTML+=`<h3>Avg Temp: ${data.main.temp}</h3>`
    document.getElementById("child1").innerHTML+=`<h3>Max Temp: ${data.main.temp_max}</h3>`
    document.getElementById("child1").innerHTML+=`<h3>Humidity: ${data.main.humidity}</h3>`
    document.getElementById("child1").innerHTML+=`<h3>Pressure: ${data.main.pressure}</h3>`
   

    document.getElementById("place").innerHTML+=`${city}`
    document.getElementById("temp").innerHTML+=`${data.main.temp}`
}
// weather()
btn.addEventListener("click",()=>
{
    weather(input.value)
})