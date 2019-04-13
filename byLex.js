 setTimeout(function run() {

            navigator.geolocation.getCurrentPosition(function(position) {

                var latitude = position.coords.latitude;
                console.log(latitude);
                var longitude = position.coords.longitude;
                console.log(longitude);


          console.log("poslal");
          axios.post('https://susanin-navigate.herokuapp.com/checkbus/', {
            latitude: latitude,
            longitude: longitude})
            .then(response => {
              const busStop = response.data.busStop;
              alert("Остановка"+" "+busStop+" "+latitude+" "+longitude);
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              console.log("oshibka")
            });
          setTimeout(run, 10000); })
        }, 10000);


 