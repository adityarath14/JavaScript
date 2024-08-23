//let url="https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=8724cc448f257fb516bc8d0f13cea055&units=metric"
//fetch(url).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))
let input=document.getElementById("city")
let searchBtn=document.querySelector("#search")
searchBtn.addEventListener("click",()=>{
    //console.log(input.value);
    let city=input.value
    if(!city.trim()){
        alert("Write a city before searching")
    }
    else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8724cc448f257fb516bc8d0f13cea055&units=metric`)
        .then(response=>{
            if(response.status==200){
                return response.json()
            }
            else{
                alert("Enter valid City Name")
            }
        })
        .then(data=> {console.log(data)
            if(data){
                displayWeather(data)
            }
        })
        .catch(error=> console.log(error))
        
    }
})
function displayWeather(data){
                document.getElementById("city-name").innerHTML=data.name
                document.getElementById("temp").innerHTML=`${Math.round(data.main.temp)} ℃`
                document.getElementById("wind").innerHTML=`${Math.round(data.wind.speed)} km/hr`
                document.getElementById("display").classList.replace("hidden","flex")
}