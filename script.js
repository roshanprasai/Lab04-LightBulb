const bulb = document.getElementById('bulb');
const toggleBtn = document.getElementById('toggle-btn');

let isOn = true;

toggleBtn.addEventListener('click', () => {
  isOn = !isOn;
  bulb.style.opacity = isOn ? '1' : '0.2';
  toggleBtn.textContent = isOn ? 'Turn Off' : 'Turn On';
});
