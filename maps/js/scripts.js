window.onload = function(){
    var map = L.map('map').setView([-8.047562, -34.877002], 13); // Define as coordenadas de Recife

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Adicione um marcador para a localização do usuário
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;
            L.marker([userLat, userLng]).addTo(map)
                .bindPopup('Sua Localização Atual')
                .openPopup();
        });

        // Adicione marcadores para pontos pré-cadastrados em Recife
        var points = [
            { name: "Mercado San Miguel", latlng: [40.41537, -3.70897] },
            { name: "Santiago Bernabeu", latlng: [40.45312, -3.68836] },
            { name: "Plaza Mayor", latlng: [40.41556, -3.70718] }
        ];

        points.forEach(function (point) {
            L.marker(point.latlng).addTo(map).bindPopup(point.name);
        });

        // Atualize o tamanho do mapa quando a janela for redimensionada
        window.addEventListener('resize', function () {
            map.invalidateSize();
        });
    }
