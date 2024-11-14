 const fetchWeather = async()=>{
    const city = document.getElementById("city").value;
    const apiKey= "5245e68cc324af9d794dca80f3c1112b";
    const weatherDataDiv=document.getElementById("weatherData");
    try{
        // fetch weather data from openweather API
        const reponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        // checkingif the response is okey
        if(!reponse.ok) throw new Error("city not found. please enter valid city");
        const data= await reponse.json();
        // Display the weather data
        weatherDataDiv.innerHTML=`
        <p><strong>Location:</strong>${data.name}, ${data.sys.country}</p>
        <p><strong>Temperature:</strong>${data.main.temp} °C</p>
        <p><strong>conditions:</strong>${data.weather[0].description}</p> `;
    }
    catch(error){
        weatherDataDiv.innerHTML=`
        <p style="color:red;">Error: ${error.massage}</p>`
    }
 };