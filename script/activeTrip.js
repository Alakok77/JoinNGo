let map;

function initMap() {
  const fixedPosition = { lat: 13.7563, lng: 100.5018 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: fixedPosition,
    zoom: 13,
  });

  new google.maps.Marker({
    position: fixedPosition,
    map: map,
    draggable: false,
    title: "ตำแหน่งที่ล็อกไว้"
  });
}

window.onload = () => {
  const wrapper = document.getElementById("wrapper")
  wrapper.innerHTML = ''

  for (let i = 0; i <= 5 ; i++){
    wrapper.innerHTML += `
      <div class="user">
          <img src="../image/icon/user.png" alt="">
          <div>
              <p>Dolphy khayeejai</p>
              <h6>kha ma khub phra</h6>
          </div>
      </div>
    `
  }
}
