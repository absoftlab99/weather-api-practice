const API = '55cbffa98d1a398f1545644055cd092c';

const getWether = () =>{
    const cityName = document.getElementById('search-field');
    const citys = cityName.value;
    const cityNames = document.getElementById('city-name');
    cityNames.innerText = citys;
    const cityNamess = document.getElementById('city-name');
    const city = cityNamess.innerText;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => showWether(data));
}

function showWether(datas) {
    const temp = document.getElementById('temp');
    temp.innerText = datas.main.temp;
    console.log(datas);
    const condition = document.getElementById('condition');
    condition.innerText = datas.weather[0].main;
    const code = document.getElementById('code');
    code.innerText = datas.sys.country;
}
