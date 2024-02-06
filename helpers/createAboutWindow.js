const { BrowserWindow } = require("electron");

function createAboutWindow() {
  const win = new BrowserWindow({ width: 500, height: 200 });
  win.setMenuBarVisibility(false);
  win.loadFile("about.html");
}

module.exports = createAboutWindow;
