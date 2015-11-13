document.getElementById('save').addEventListener('click', save_options);
document.getElementById('parent').addEventListener('keyup', moveNextField);

// Automatically selects the next field in the grid
function moveNextField(e) {
  if (e.target !== e.currentTarget) {
        var currentField = e.target;
        var nextField = document.getElementById(getNextID(currentField));

        if (currentField.value.length >= currentField.maxLength) {
          currentField.value = currentField.value.toUpperCase();
          nextField.focus(); 
          nextField.select();
        } 
  }

  e.stopPropagation();
}

// Return the next ID in the grid
function getNextID(field) {
  var temp = field.id;
  var output = "";

  if (temp.charAt(0) == 'J' && temp.charAt(1) == '5') {
    output = 'A1';
  }
  else if (temp.charAt(0) == 'J') {
    output = 'A'.concat(+temp.charAt(1) + 1);
  }
  else {
    output = nextLetter(temp.charAt(0)).concat(temp.charAt(1));  
  }

  return output;
}

// Returns the next letter of the alphabet
function nextLetter(s){
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c = a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}

// Saves options to simple storage.
function save_options() {  
  var A1 = document.getElementById('A1').value.toUpperCase();
  var A2 = document.getElementById('A2').value.toUpperCase();
  var A3 = document.getElementById('A3').value.toUpperCase();
  var A4 = document.getElementById('A4').value.toUpperCase();
  var A5 = document.getElementById('A5').value.toUpperCase();
  var B1 = document.getElementById('B1').value.toUpperCase();
  var B2 = document.getElementById('B2').value.toUpperCase();
  var B3 = document.getElementById('B3').value.toUpperCase();
  var B4 = document.getElementById('B4').value.toUpperCase();
  var B5 = document.getElementById('B5').value.toUpperCase();
  var C1 = document.getElementById('C1').value.toUpperCase();
  var C2 = document.getElementById('C2').value.toUpperCase();
  var C3 = document.getElementById('C3').value.toUpperCase();
  var C4 = document.getElementById('C4').value.toUpperCase();
  var C5 = document.getElementById('C5').value.toUpperCase();
  var D1 = document.getElementById('D1').value.toUpperCase();
  var D2 = document.getElementById('D2').value.toUpperCase();
  var D3 = document.getElementById('D3').value.toUpperCase();
  var D4 = document.getElementById('D4').value.toUpperCase();
  var D5 = document.getElementById('D5').value.toUpperCase();
  var E1 = document.getElementById('E1').value.toUpperCase();
  var E2 = document.getElementById('E2').value.toUpperCase();
  var E3 = document.getElementById('E3').value.toUpperCase();
  var E4 = document.getElementById('E4').value.toUpperCase();
  var E5 = document.getElementById('E5').value.toUpperCase();
  var F1 = document.getElementById('F1').value.toUpperCase();
  var F2 = document.getElementById('F2').value.toUpperCase();
  var F3 = document.getElementById('F3').value.toUpperCase();
  var F4 = document.getElementById('F4').value.toUpperCase();
  var F5 = document.getElementById('F5').value.toUpperCase();
  var G1 = document.getElementById('G1').value.toUpperCase();
  var G2 = document.getElementById('G2').value.toUpperCase();
  var G3 = document.getElementById('G3').value.toUpperCase();
  var G4 = document.getElementById('G4').value.toUpperCase();
  var G5 = document.getElementById('G5').value.toUpperCase();
  var H1 = document.getElementById('H1').value.toUpperCase();
  var H2 = document.getElementById('H2').value.toUpperCase();
  var H3 = document.getElementById('H3').value.toUpperCase();
  var H4 = document.getElementById('H4').value.toUpperCase();
  var H5 = document.getElementById('H5').value.toUpperCase();
  var I1 = document.getElementById('I1').value.toUpperCase();
  var I2 = document.getElementById('I2').value.toUpperCase();
  var I3 = document.getElementById('I3').value.toUpperCase();
  var I4 = document.getElementById('I4').value.toUpperCase();
  var I5 = document.getElementById('I5').value.toUpperCase();
  var J1 = document.getElementById('J1').value.toUpperCase();
  var J2 = document.getElementById('J2').value.toUpperCase();
  var J3 = document.getElementById('J3').value.toUpperCase();
  var J4 = document.getElementById('J4').value.toUpperCase();
  var J5 = document.getElementById('J5').value.toUpperCase();

  self.port.emit("save", [A1, A2, A3, A4, A5, B1, B2, B3, B4, B5,  
                          C1, C2, C3, C4, C5, D1, D2, D3, D4, D5, 
                          E1, E2, E3, E4, E5, F1, F2, F3, F4, F5, 
                          G1, G2, G3, G4, G5, H1, H2, H3, H4, H5, 
                          I1, I2, I3, I4, I5, J1, J2, J3, J4, J5])

  // Update status to let user know options were saved.
  var status = document.getElementById('status');
  status.textContent = 'Options saved.';
  setTimeout(function() {
    status.textContent = '';
  }, 1000);
}

// Loads grid from memory
self.port.on("restore", function(ss) {
  document.getElementById('A1').value = ss.storage.A1;
  document.getElementById('A2').value = ss.storage.A2;
  document.getElementById('A3').value = ss.storage.A3;
  document.getElementById('A4').value = ss.storage.A4;
  document.getElementById('A5').value = ss.storage.A5;
  document.getElementById('B1').value = ss.storage.B1;
  document.getElementById('B2').value = ss.storage.B2;
  document.getElementById('B3').value = ss.storage.B3;
  document.getElementById('B4').value = ss.storage.B4;
  document.getElementById('B5').value = ss.storage.B5;
  document.getElementById('C1').value = ss.storage.C1;
  document.getElementById('C2').value = ss.storage.C2;
  document.getElementById('C3').value = ss.storage.C3;
  document.getElementById('C4').value = ss.storage.C4;
  document.getElementById('C5').value = ss.storage.C5;
  document.getElementById('D1').value = ss.storage.D1;
  document.getElementById('D2').value = ss.storage.D2;
  document.getElementById('D3').value = ss.storage.D3;
  document.getElementById('D4').value = ss.storage.D4;
  document.getElementById('D5').value = ss.storage.D5;
  document.getElementById('E1').value = ss.storage.E1;
  document.getElementById('E2').value = ss.storage.E2;
  document.getElementById('E3').value = ss.storage.E3;
  document.getElementById('E4').value = ss.storage.E4;
  document.getElementById('E5').value = ss.storage.E5;
  document.getElementById('F1').value = ss.storage.F1;
  document.getElementById('F2').value = ss.storage.F2;
  document.getElementById('F3').value = ss.storage.F3;
  document.getElementById('F4').value = ss.storage.F4;
  document.getElementById('F5').value = ss.storage.F5;
  document.getElementById('G1').value = ss.storage.G1;
  document.getElementById('G2').value = ss.storage.G2;
  document.getElementById('G3').value = ss.storage.G3;
  document.getElementById('G4').value = ss.storage.G4;
  document.getElementById('G5').value = ss.storage.G5;
  document.getElementById('H1').value = ss.storage.H1;
  document.getElementById('H2').value = ss.storage.H2;
  document.getElementById('H3').value = ss.storage.H3;
  document.getElementById('H4').value = ss.storage.H4;
  document.getElementById('H5').value = ss.storage.H5;
  document.getElementById('I1').value = ss.storage.I1;
  document.getElementById('I2').value = ss.storage.I2;
  document.getElementById('I3').value = ss.storage.I3;
  document.getElementById('I4').value = ss.storage.I4;
  document.getElementById('I5').value = ss.storage.I5;
  document.getElementById('J1').value = ss.storage.J1;
  document.getElementById('J2').value = ss.storage.J2;
  document.getElementById('J3').value = ss.storage.J3;
  document.getElementById('J4').value = ss.storage.J4;
  document.getElementById('J5').value = ss.storage.J5;
});