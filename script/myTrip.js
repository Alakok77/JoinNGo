function changeTab(tabName, event) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    const tripContainer = document.getElementById('tripContainer');
    tripContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
      tripContainer.innerHTML += `
        <div class="trip-card">
            <div class="top-wrapper">
                <img src="https://via.placeholder.com/120x80" class="trip-image" />
                <div>
                    <h3 class="trip-name">Trip Name</h3>
                    <p class="location">Location : Paris</p>
                    <p class="date">Date : 1 May 2095</p>
                    <p class="participants">Participants : 👤👤👤</p>
                    <p class="detail">Highlight : asdfadf asddfasfdasddf asddfsadf</p>
                </div>
                <div class="btn">
                    <img src="../image/icon/paper-plane.png" alt="">
                    <button>Join</button>
                </div>
            </div>
            
            <div class="bottom-wrapper">
                <div class="txt">
                    <p class="name">Alakok</p>
                    <p>: Trip Host</p>
                </div>
                <img src="../image/icon/user.png" alt="">
            </div>
          </div>
      `;
    }
}

window.onload = function() {
  changeTab('upcoming', { target: document.querySelector('.tab.active') });
};