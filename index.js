// Import the page-mod API
var pageMod = require("sdk/page-mod");
 
// Create a page-mod
pageMod.PageMod({
  include: "https://citrix2.alldata.net/Citrix/XenAppCol/auth/challenge.aspx",
  contentScriptFile: "./challenge.js"
});

var myPanel = require("sdk/panel").Panel({
  contentURL: "./options.html",
  contentScriptFile: "./options.js"
});

myPanel.show();