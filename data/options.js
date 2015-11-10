document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('parent').addEventListener('keyup', moveNextField);

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

  chrome.storage.local.set({
    A1: A1,
    A2: A2,
    A3: A3,
    A4: A4,
    A5: A5,
    B1: B1,
    B2: B2,
    B3: B3,
    B4: B4,
    B5: B5,
    C1: C1,
    C2: C2,
    C3: C3,
    C4: C4,
    C5: C5,
    D1: D1,
    D2: D2,
    D3: D3,
    D4: D4,
    D5: D5,
    E1: E1,
    E2: E2,
    E3: E3,
    E4: E4,
    E5: E5,
    F1: F1,
    F2: F2,
    F3: F3,
    F4: F4,
    F5: F5,
    G1: G1,
    G2: G2,
    G3: G3,
    G4: G4,
    G5: G5,
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    H5: H5,
    I1: I1,
    I2: I2,
    I3: I3,
    I4: I4,
    I5: I5,
    J1: J1,
    J2: J2,
    J3: J3,
    J4: J4,
    J5: J5
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    B1: '',
    B2: '',
    B3: '',
    B4: '',
    B5: '',
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    D1: '',
    D2: '',
    D3: '',
    D4: '',
    D5: '',
    E1: '',
    E2: '',
    E3: '',
    E4: '',
    E5: '',
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    G1: '',
    G2: '',
    G3: '',
    G4: '',
    G5: '',
    H1: '',
    H2: '',
    H3: '',
    H4: '',
    H5: '',
    I1: '',
    I2: '',
    I3: '',
    I4: '',
    I5: '',
    J1: '',
    J2: '',
    J3: '',
    J4: '',
    J5: ''
  }, function(items) {
    document.getElementById('A1').value = items.A1;
    document.getElementById('A2').value = items.A2;
    document.getElementById('A3').value = items.A3;
    document.getElementById('A4').value = items.A4;
    document.getElementById('A5').value = items.A5;
    document.getElementById('B1').value = items.B1;
    document.getElementById('B2').value = items.B2;
    document.getElementById('B3').value = items.B3;
    document.getElementById('B4').value = items.B4;
    document.getElementById('B5').value = items.B5;
    document.getElementById('C1').value = items.C1;
    document.getElementById('C2').value = items.C2;
    document.getElementById('C3').value = items.C3;
    document.getElementById('C4').value = items.C4;
    document.getElementById('C5').value = items.C5;
    document.getElementById('D1').value = items.D1;
    document.getElementById('D2').value = items.D2;
    document.getElementById('D3').value = items.D3;
    document.getElementById('D4').value = items.D4;
    document.getElementById('D5').value = items.D5;
    document.getElementById('E1').value = items.E1;
    document.getElementById('E2').value = items.E2;
    document.getElementById('E3').value = items.E3;
    document.getElementById('E4').value = items.E4;
    document.getElementById('E5').value = items.E5;
    document.getElementById('F1').value = items.F1;
    document.getElementById('F2').value = items.F2;
    document.getElementById('F3').value = items.F3;
    document.getElementById('F4').value = items.F4;
    document.getElementById('F5').value = items.F5;
    document.getElementById('G1').value = items.G1;
    document.getElementById('G2').value = items.G2;
    document.getElementById('G3').value = items.G3;
    document.getElementById('G4').value = items.G4;
    document.getElementById('G5').value = items.G5;
    document.getElementById('H1').value = items.H1;
    document.getElementById('H2').value = items.H2;
    document.getElementById('H3').value = items.H3;
    document.getElementById('H4').value = items.H4;
    document.getElementById('H5').value = items.H5;
    document.getElementById('I1').value = items.I1;
    document.getElementById('I2').value = items.I2;
    document.getElementById('I3').value = items.I3;
    document.getElementById('I4').value = items.I4;
    document.getElementById('I5').value = items.I5;
    document.getElementById('J1').value = items.J1;
    document.getElementById('J2').value = items.J2;
    document.getElementById('J3').value = items.J3;
    document.getElementById('J4').value = items.J4;
    document.getElementById('J5').value = items.J5;
  });
}