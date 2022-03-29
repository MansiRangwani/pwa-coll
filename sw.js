self.addEventListener('install', event =>{
    console.console.log('serviceWorker has been installed');
  });
  
  self.addEventListener('activate', event => {
    console.console.log('Service Worker has been activated');
  });