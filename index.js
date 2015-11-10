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

var menuitem = require("menuitem");
var menuitem = menuitem.Menuitem({
  id: "panel",
  menuid: "menu_ToolsPopup",
  label: "Citrix2Factor Grid",
  onCommand: function() {
    myPanel.show();
  },
  insertbefore: "menu_pageInfo"
});



