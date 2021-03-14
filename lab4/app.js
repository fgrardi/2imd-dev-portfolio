class App {
    constructor() {
        this.getLocation();
        this.lat;
        this.lng;
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