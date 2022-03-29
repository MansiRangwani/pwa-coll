if('ServiceWorker' in navigator){
    navigator.serviceworker.register('/sw.js')
    .then((reg) => console.log('serice worker registered',reg))
    .catch((err) => console.log('service worker not registered',err));
}