const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile('index.html');

  // Escuta os eventos para abrir novas janelas
  ipcMain.on('open-app-window', (event, appName) => {
    createAppWindow(appName);
  });
}

function createAppWindow(appName) {
  const appWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  switch (appName) {
    case 'App 1':
      appWindow.loadFile('app1.html');
      break;
    case 'App 2':
      appWindow.loadFile('app2.html');
      break;
    case 'App 3':
      appWindow.loadFile('app3.html');
      break;
    case 'App 4':
      appWindow.loadFile('app4.html');
      break;
    case 'App 5':
      appWindow.loadFile('app5.html');
      break;
    case 'App 6':
      appWindow.loadFile('app6.html');
      break;
    default:
      appWindow.loadURL('about:blank');
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});