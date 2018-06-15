importScripts('/worker-polyfill.js')
self.addEventListener('install', function(event) {
    console.log("Dialogflow Service Worker installed")
    event.waitUntil(caches.open('dialogflow').then(function(cache) {
        return cache.addAll([
            '/',
            '/index.html',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
            'https://unpkg.com/material-components-web@0.20.0/dist/material-components-web.min.css',
            '/dist/build.js'
        ])
    }))
})

self.addEventListener('fetch', function(event) {
    console.log("cached", event.request.url)
    event.respondWith(caches.match(event.request).then(function(response) {
        return response || fetch(event.request)
    }))
})