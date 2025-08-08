const bulb = document.getElementById('bulb');
const toggleBtn = document.getElementById('toggle-btn');
const brightnessInput = document.getElementById('brightness');
const saturationInput = document.getElementById('saturation');


let isOn = true;
let brightness = 100;
let saturation = 100;

function updateBulbFilter() {
  if (isOn) {
    bulb.style.filter = `brightness(${brightness}%) saturate(${saturation}%)`;
    bulb.style.boxShadow = `0 0 30px 10px yellow`;
    bulb.style.opacity = 1;
  } else {
    bulb.style.filter = `brightness(0%) saturate(0%)`;
    bulb.style.boxShadow = `none`;
    bulb.style.opacity = 0.2;
  }
}

toggleBtn.addEventListener('click', () => {
  isOn = !isOn;
  bulb.style.opacity = isOn ? '1' : '0.2';
  toggleBtn.textContent = isOn ? 'Turn Off' : 'Turn On';
});

saturationInput.addEventListener('input', (e) => {
  saturation = e.target.value;
  updateBulbFilter();
});

// Initialize filter on page load
updateBulbFilter();
