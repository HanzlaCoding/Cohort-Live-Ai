const allCards = document.querySelectorAll('.main-cards .elem');

allCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
        if (idx === 0) {
            location.href = `./pages/todo.html`;
        } else if (idx === 1) {
            location.href = `./pages/dailyPlanner.html`;
        } else if (idx === 2) {
            location.href = `./pages/motivQuotes.html`;
        } else if (idx === 3) {
            location.href = `./pages/pomodoroTimer.html`;
        }
    });
});

const personalApiKey = `11725447e0c04da087075220250906`;
const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${personalApiKey}&q=Lahore`;

fetchWeatherData = () => {
    fetch(weatherApiUrl)
        .then(raw => raw.json())
        .then((data) => {
            console.log(data);
            const { feelslike_c, wind_kph, temp_c, precip_mm, humidity } = data.current;
            const { icon, text } = data.current.condition;
            const { name, country } = data.location;
            console.log(name, icon, text);



            const weatherCard = document.querySelector('.weather-card');

            weatherCard.innerHTML = `
   <div
                    class="relative px-10 py-8 rounded-2xl  shadow-xl text-white animate-fade-in">
                    <div class="text-4xl font-bold"> ${temp_c}°C</div>
                    <div class="text-xs bg-blue-500/20 px-2 py-1 rounded-full">
                        Feels like: ${feelslike_c}°C
                    </div>
                    <div class="text-sm font-semibold tracking-wide">${name}, ${country}</div>
                    <div class="text-lg flex  items-center justify-center font-semibold">
                    <img class="h-10" src="${icon}" alt="" />
                    ${text}
                    </div>

                        <div class="text-md leading-6 text-white/90 w-full bg-blue-400/50 rounded-b-2xl">
                            <div>Precipitation: <span class="font-medium"> ${precip_mm} mm</span></div>
                            <div>Humidity: <span class="font-medium">${humidity} %</span></div>
                            <div>Wind: <span class="font-medium">${wind_kph} km/h</span></div>
                        </div>
                    </div>
`
        })
}

const randomCall = Math.floor(Math.random() * 3000 + 1000);

setTimeout(() => {
    fetchWeatherData()
}, randomCall);

const h1 = document.querySelector('h1');
const h3 = document.querySelector('.part1 h3');
const h2 = document.querySelector('h2');

getDate = () => {
    const now = new Date;
    let hours = now.getHours();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    h3.innerText = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`

    h1.innerText = `${hours > 12 ? hours - 12 : hours < 12 ? hours : hours - 12 }:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${hours < 12 ? 'AM' : 'PM'}`;

}

setInterval(() => {
    getDate()
}, 1000);