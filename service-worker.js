var cacheName = 'ske-public-v1.6.8';

const filesToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/css/style.css',
    '/js/jquery-1.11.1.min.js',
    '/js/getform.js',
    '/js/push1.js',
    '/js/push2.js',
    '/fonts/Roboto-Medium-webfont.eot',
    '/fonts/Roboto-Medium-webfont.woff',
    '/fonts/Roboto-Medium-webfont.svg#RobotoMedium.svg',
    '/images/favicon.ico',
    '/images/background.jpg',
    '/images/ipad-optimised.png',
    '/images/iphone-optimised.png',
    '/images/laptop-screen-optimised.png',
    '/images/large-screen-optimised.png',
    '/images/NETawards_ribbon.png',
    '/images/icons/icon_144x144.png',
    '/images/icons/icon_152x152.png',
    '/images/icons/icon_192x192.png',
    '/images/icons/icon_256x256.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});