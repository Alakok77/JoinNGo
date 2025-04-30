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


function sendMessage() {
  const input = document.getElementById('messageInput');
  const text = input.value.trim();
  if (!text) return;

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.textContent = text;

  const fontSize = Math.floor(Math.random() * 10) + 14;
  bubble.style.fontSize = fontSize + 'px';

  const direction = Math.random() > 0.5 ? 'ltr' : 'rtl';
  const duration = Math.floor(Math.random() * 20) + 20;

  const top = Math.floor(Math.random() * 80) + 10;
  bubble.style.top = top + 'vh';

  const startLeft = direction === 'ltr' ? '-100%' : '100%';
  const endLeft = direction === 'ltr' ? '100%' : '-100%';

  bubble.style.left = startLeft;

  bubble.style.animation = `move-${direction} ${duration}s linear forwards`;

  document.getElementById('chatArea').appendChild(bubble);

  input.value = '';
}

const style = document.createElement('style');
style.textContent = `
@keyframes move-ltr {
  from { left: -100%; }
  to { left: 100%; }
}
@keyframes move-rtl {
  from { left: 100%; }
  to { left: -100%; }
}`;
document.head.appendChild(style);
