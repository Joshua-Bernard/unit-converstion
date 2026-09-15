const dynamicInput = document.getElementById('value');

// 2. Listen for every time the user types a character
dynamicInput.addEventListener('input', function () {
  // 3. Count the characters. If empty, default to 3 characters wide
  const characterCount = this.value.length + 1 || 3;

  // 4. Update the width of the input using the 'ch' (character) unit
  this.style.width = characterCount + 'ch';
});
