var pageMod = require("sdk/page-mod"); 
var ss = require("sdk/simple-storage");
ss.storage.A1 = "Z";

// Create a page-mod
pageMod.PageMod({
  include: "https://citrix2.alldata.net/Citrix/XenAppCol/auth/challenge.aspx",
  contentScriptFile: "./challenge.js"
});

var options = require("sdk/panel").Panel({
  contentURL: "./options.html",
  contentScriptFile: "./options.js"
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



