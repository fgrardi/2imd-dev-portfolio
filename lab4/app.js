class App {
    constructor() {
        this.getLocation();
        this.lat;
        this.lng;
        this.weatherCondition;
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this),
            this.errorLocation.bind(this)
        );
    }

    gotLocation(result){
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }

    getWeather(){
        let url = `https://api.weatherapi.com/v1/forecast.json?key=d6fab7ebcbfc48debf3161646211403&q=${this.lat},${this.lng}`

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.querySelector("#weather").innerHTML = "It's currently" + data.current.temp_c + "° outside.";
            this.weatherCondition = data.current.condition.code;

            if(this.weatherCondition === 1003) {
                console.log("Het is bewolkt");
            } else {
                console.log("iets anders")
            }        })
        .catch(err => {
            err = "Couldn't load weather information";
            document.querySelector("#weather").innerHTML = err;
        })
    }

    getWeatherFromStorage(){

    }

    getSport(){
        let url = `https://sports.api.decathlon.com/sports/search/running?source=popular&coordinates=${this.lat},${this.lng}`;

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let image = document.querySelector("#sports");

            if(data.length >= 1){
                image.innerHTML = "sportkledij";
                console.log("toon sportkledij om te kopen");
            } else {
                image.innerHTML = "reclame";
                console.log("maak reclame voor meer te sporten");
            }
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    errorLocation(err){
        console.log(err);
    }
}

let app = new App();