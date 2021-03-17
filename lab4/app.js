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
        this.getSport();
    }

    getWeather(){
        let url = `https://api.weatherapi.com/v1/forecast.json?key=d6fab7ebcbfc48debf3161646211403&q=${this.lat},${this.lng}`;
        let weather = document.querySelector("#weather-condition");

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log(data);
            this.weatherCondition = data.current.condition.code;
            
            let conditionText = data.current.condition.text;
            let sunny = (this.weatherCondition === 1000);
            let cloudy = (this.weatherCondition >= 1003 && this.weatherCondition <= 1030);
            let rainy = (this.weatherCondition >= 1063 && this.weatherCondition <= 1207);
            let snowy = (this.weatherCondition >= 1210 && this.weatherCondition <= 1282);

                if(sunny) {
                    weather.innerHTML = "Get some sunscreen! It's a " + conditionText + "day.";
                } 
                else if (cloudy) {
                    weather.innerHTML = "Take a sweater with you! It's " + conditionText;
                } 
                else if (rainy) {
                    weather.innerHTML = "Get a raincoat! It's " + conditionText;
                } 
                else if (snowy) {
                    weather.innerHTML = "Get a coat! It's " + conditionText;
                }
        })
        .catch(err => {
            err = "Couldn't load weather information";
            weather.innerHTML = err;
        })
    }

    getWeatherFromStorage(){

    }

    getSport(){
        let url = `https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=${this.lat},${this.lng}`;

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log(data);
            let sport = document.querySelector("#sport");
            let adImage = document.querySelector("#ad");
            
            let gettingRandomSportImage = (data) => {
                let result = {};

                for (let i = 0; i < data.length; i++) {
                    let name = data[i].attributes.name;
                    //console.log(data[i].relationships.images.data[0].url);
                    
                    if(name === "Handball") {
                        result["indoor"] = data[i].relationships.images.data[0].url;
                    } 
                    else if(name === "Rugby") {
                        result["outdoor"] = data[i].relationships.images.data[0].url;
                    }
                }
                return result;
            }
            let weatherImages = gettingRandomSportImage(data);

            if(this.weatherCondition === 1000 || (this.weatherCondition >= 1003 && this.weatherCondition <= 1030)) {
                sport.innerHTML = "an outdoor activity";
                adImage.style.backgroundImage = `url(${weatherImages.outdoor})`;

            } 
            else if ((this.weatherCondition >= 1063 && this.weatherCondition <= 1207) || (this.weatherCondition >= 1210 && this.weatherCondition <= 1282)) {
                sport.innerHTML = "an indoor activity";
                adImage.style.backgroundImage = `url(${weatherImages.indoor})`;


            }
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