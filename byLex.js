 setTimeout(function run() {

            navigator.geolocation.getCurrentPosition(function(position) {

                var latitude = position.coords.latitude;
                alert(latitude);

                var longitude = position.coords.longitude;
                alert(longitude)})

          console.log("poslal");
          axios.post('https://susanin-navigate.herokuapp.com/checkbus/', {
            latitude: this.latitude,
            longitude: this.longitude})
            .then(response => {
              const busStop = response.data.busStop;
              alert("Остановка"+" "+busStop+" "+this.latitude+" "+this.longitude);
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              console.log("oshibka")
            });
          setTimeout(run, 10000);
        }, 10000);