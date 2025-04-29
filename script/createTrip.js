function triggerUpload() {
    document.getElementById('imageUpload').click();
}

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);

        const filenameDisplay = document.getElementById('filenameDisplay');
        filenameDisplay.textContent = `Selected: ${file.name}`;
        filenameDisplay.style.display = 'block';
    }
});


function initMap() {
    const initialLocation = { lat: 13.7563, lng: 100.5018 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: initialLocation,
    });
  
    let marker;
  
    map.addListener("click", (e) => {
      if (marker) {
        marker.setMap(null);
      }
      marker = new google.maps.Marker({
        position: e.latLng,
        map: map,
      });
  
      console.log("เลือกที่:", e.latLng.lat(), e.latLng.lng());
    });
  }
  
