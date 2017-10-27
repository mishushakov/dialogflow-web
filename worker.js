importScripts('/worker-polyfill.js')
self.addEventListener('install', function(event) {
    
    console.log("Google Moogle worker installed")
    event.waitUntil(caches.open('mu').then(function(cache) {
        return cache.addAll([
            '/',
            '/index.html',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
            'https://unpkg.com/material-components-web@0.20.0/dist/material-components-web.min.css',
            'https://mish.io/Ushakov/images/logo/Placeholder.png',
            '/dist/manifest_icons/web_hi_res_512.png',
            '/dist/build.js'
        ])
    }))
})

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
    }))
})