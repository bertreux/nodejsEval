const origin = location.origin;

addEventListener("DOMContentLoaded", async (event) => {
    const requestInfos = new Request(`${origin}/site/sports/data`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const request = await fetch(requestInfos);
    const response = await request.json();
    if (response.status === 200) {
        var map = L.map('map').setView([48.8588255,2.2646345], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        response.sports.map((sport) => {
            var marker = L.marker([sport.latitude, sport.longitude]).addTo(map);

            marker.bindTooltip(sport.Nom); // Ajout de la tooltip avec le nom du sport

            marker.on('click', (e) => {
                location.href = `/sport/${sport.id_sport}`;
            });
        })
    }
});
