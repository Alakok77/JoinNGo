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
  const defaultLocation = { lat: 13.7563, lng: 100.5018 };

  const map = new google.maps.Map(document.getElementById('map'), {
      center: defaultLocation,
      zoom: 13
  });

  const input = document.getElementById('searchBox');
  const autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.bindTo('bounds', map);

  const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
      marker.setVisible(false);
      const place = autocomplete.getPlace();
      if (!place.geometry) {
          alert("ไม่พบสถานที่");
          return;
      }

      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
      } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
  });
}


document.addEventListener('DOMContentLoaded', function () {
  flatpickr("#datePicker", {
    dateFormat: "Y-m-d",
  });

  flatpickr("#timePicker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
  });

});

document.addEventListener("DOMContentLoaded", function () {
  ClassicEditor
    .create(document.querySelector("#editor"))
    .catch(error => {
      console.error("เกิดข้อผิดพลาด:", error);
    });
});


