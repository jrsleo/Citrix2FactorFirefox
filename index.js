var pageMod = require("sdk/page-mod"); 
var ss = require("sdk/simple-storage");
initializeStorage(ss);

// Create a page-mod
pageMod.PageMod({
  include: "https://citrix2.alldata.net/Citrix/XenAppCol/auth/challenge.aspx",
  contentScriptFile: "./challenge.js",
  onAttach: solveChallenge
});

var options = require("sdk/panel").Panel({
  contentURL: "./options.html",
  contentScriptFile: "./options.js",
});

var menuitem = require("menuitem");
var menuitem = menuitem.Menuitem({
  id: "panel",
  menuid: "menu_ToolsPopup",
  label: "Citrix2Factor Grid",
  onCommand: function() {
    options.show();
    options.port.emit("restore", ss);
  },
  insertbefore: "menu_pageInfo"
});

// listen for save command and save values
options.port.on("save", function(items) {
	ss.storage.A1 = items[0];
	ss.storage.A2 = items[1];
	ss.storage.A3 = items[2];
	ss.storage.A4 = items[3];
	ss.storage.A5 = items[4];
	ss.storage.B1 = items[5];
	ss.storage.B2 = items[6];
	ss.storage.B3 = items[7];
	ss.storage.B4 = items[8];
	ss.storage.B5 = items[9];
	ss.storage.C1 = items[10];
	ss.storage.C2 = items[11];
	ss.storage.C3 = items[12];
	ss.storage.C4 = items[13];
	ss.storage.C5 = items[14];
	ss.storage.D1 = items[15];
	ss.storage.D2 = items[16];
	ss.storage.D3 = items[17];
	ss.storage.D4 = items[18];
	ss.storage.D5 = items[19];
	ss.storage.E1 = items[20];
	ss.storage.E2 = items[21];
	ss.storage.E3 = items[22];
	ss.storage.E4 = items[23];
	ss.storage.E5 = items[24];
	ss.storage.F1 = items[25];
	ss.storage.F2 = items[26];
	ss.storage.F3 = items[27];
	ss.storage.F4 = items[28];
	ss.storage.F5 = items[29];
	ss.storage.G1 = items[30];
	ss.storage.G2 = items[31];
	ss.storage.G3 = items[32];
	ss.storage.G4 = items[33];
	ss.storage.G5 = items[34];
	ss.storage.H1 = items[35];
	ss.storage.H2 = items[36];
	ss.storage.H3 = items[37];
	ss.storage.H4 = items[38];
	ss.storage.H5 = items[39];
	ss.storage.I1 = items[40];
	ss.storage.I2 = items[41];
	ss.storage.I3 = items[42];
	ss.storage.I4 = items[43];
	ss.storage.I5 = items[44];
	ss.storage.J1 = items[45];
	ss.storage.J2 = items[46];
	ss.storage.J3 = items[47];
	ss.storage.J4 = items[48];
	ss.storage.J5 = items[49];
});

function solveChallenge(worker) {
	worker.port.emit("solve", ss);
}

function initializeStorage (storage) {
	if (!ss.storage.A1) ss.storage.A1 = '';
	if (!ss.storage.A2) ss.storage.A2 = '';
	if (!ss.storage.A3) ss.storage.A3 = '';
	if (!ss.storage.A4) ss.storage.A4 = '';
	if (!ss.storage.A5) ss.storage.A5 = '';
	if (!ss.storage.B1) ss.storage.B1 = '';
	if (!ss.storage.B2) ss.storage.B2 = '';
	if (!ss.storage.B3) ss.storage.B3 = '';
	if (!ss.storage.B4) ss.storage.B4 = '';
	if (!ss.storage.B5) ss.storage.B5 = '';
	if (!ss.storage.C1) ss.storage.C1 = '';
	if (!ss.storage.C2) ss.storage.C2 = '';
	if (!ss.storage.C3) ss.storage.C3 = '';
	if (!ss.storage.C4) ss.storage.C4 = '';
	if (!ss.storage.C5) ss.storage.C5 = '';
	if (!ss.storage.D1) ss.storage.D1 = '';
	if (!ss.storage.D2) ss.storage.D2 = '';
	if (!ss.storage.D3) ss.storage.D3 = '';
	if (!ss.storage.D4) ss.storage.D4 = '';
	if (!ss.storage.D5) ss.storage.D5 = '';
	if (!ss.storage.E1) ss.storage.E1 = '';
	if (!ss.storage.E2) ss.storage.E2 = '';
	if (!ss.storage.E3) ss.storage.E3 = '';
	if (!ss.storage.E4) ss.storage.E4 = '';
	if (!ss.storage.E5) ss.storage.E5 = '';
	if (!ss.storage.F1) ss.storage.F1 = '';
	if (!ss.storage.F2) ss.storage.F2 = '';
	if (!ss.storage.F3) ss.storage.F3 = '';
	if (!ss.storage.F4) ss.storage.F4 = '';
	if (!ss.storage.F5) ss.storage.F5 = '';
	if (!ss.storage.G1) ss.storage.G1 = '';
	if (!ss.storage.G2) ss.storage.G2 = '';
	if (!ss.storage.G3) ss.storage.G3 = '';
	if (!ss.storage.G4) ss.storage.G4 = '';
	if (!ss.storage.G5) ss.storage.G5 = '';
	if (!ss.storage.H1) ss.storage.H1 = '';
	if (!ss.storage.H2) ss.storage.H2 = '';
	if (!ss.storage.H3) ss.storage.H3 = '';
	if (!ss.storage.H4) ss.storage.H4 = '';
	if (!ss.storage.H5) ss.storage.H5 = '';
	if (!ss.storage.I1) ss.storage.I1 = '';
	if (!ss.storage.I2) ss.storage.I2 = '';
	if (!ss.storage.I3) ss.storage.I3 = '';
	if (!ss.storage.I4) ss.storage.I4 = '';
	if (!ss.storage.I5) ss.storage.I5 = '';
	if (!ss.storage.J1) ss.storage.J1 = '';
	if (!ss.storage.J2) ss.storage.J2 = '';
	if (!ss.storage.J3) ss.storage.J3 = '';
	if (!ss.storage.J4) ss.storage.J4 = '';
	if (!ss.storage.J5) ss.storage.J5 = '';
}