function iniciarMap() 
    {
    var coordenada = {lat: -34.9137786 , lng: -57.9891083};
    var map = new google.maps.Map (document.getElementById('map'),{zoom:10, center: coordenada});
    var marcador = new google.maps.Marker({position: coordenada, map:map});
    }

/*En latitud: y longitud: colocar coordenadas con el zoom al maximo posible para lograr mayor precición en la ubicación de una direccion buscada por google maps (en la url aparecerán), 
en este ejemplo las coordenadas indican el "Estadio Único Diego Armando Maradona" en La Plata*/