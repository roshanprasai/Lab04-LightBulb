// Get references to HTML elements
const bulb = document.getElementById('bulb');
const toggleBtn = document.getElementById('toggle-btn');
const brightnessInput = document.getElementById('brightness');
const saturationInput = document.getElementById('saturation');

// Initial states
let isOn = true;           // Bulb is initially ON
let brightness = 100;      // Initial brightness percentage
let saturation = 100;      // Initial saturation percentage

// Function to update the bulb's CSS filter and appearance based on current states
function updateBulbFilter() {
  if (isOn) {
    // When bulb is ON, apply brightness and saturation filters
    bulb.style.filter = `brightness(${brightness}%) saturate(${saturation}%)`;
    bulb.style.boxShadow = `0 0 30px 10px yellow`;  // Glow effect
    bulb.style.opacity = 1;                          // Fully visible
  } else {
    // When bulb is OFF, remove filters and reduce opacity to simulate off state
    bulb.style.filter = `brightness(0%) saturate(0%)`;
    bulb.style.boxShadow = `none`;                   // Remove glow
    bulb.style.opacity = 0.2;                         // Dimmed visibility
  }
}

// Event listener to toggle bulb ON/OFF when button is clicked
toggleBtn.addEventListener('click', () => {
  isOn = !isOn;                                       // Toggle the state
  toggleBtn.textContent = isOn ? 'Turn Off' : 'Turn On';  // Update button text
  updateBulbFilter();                                 // Update bulb appearance
});

// Event listener to update brightness when slider is moved
brightnessInput.addEventListener('input', (e) => {
  brightness = e.target.value;                        // Update brightness value
  updateBulbFilter();                                 // Reflect change on bulb
});

// Event listener to update saturation when slider is moved
saturationInput.addEventListener('input', (e) => {
  saturation = e.target.value;                        // Update saturation value
  updateBulbFilter();                                 // Reflect change on bulb
});

// Initialize bulb appearance on page load
updateBulbFilter();
