const CACHE_NAME= 'version-1'
const urlsToBeCached = ['index.html']

const self = this

// install service worker
self.addEventListener('install', (e) =>{
    try{
        e.waitUntil(
            caches.open(CACHE_NAME)
            .then(cache =>{
                console.log("opened cache",cache)
                return cache.addAll(urlsToBeCached)
            })
        )
    }
    catch(err){
        console.log(err)
    }
})

// listen for requests
self.addEventListener('fetch',(e) =>{
    e.respondWith(
        caches.match(e.request)
        .then(()=>{
            return fetch(e.request)
        })
    )
})

// active the service worker
self.addEventListener('activate',(e) =>{
    e.waitUntil(
        caches.keys()
        .then(cacheNames =>{
            cacheNames.map(cacheName =>{
                if(cacheName != CACHE_NAME){
                    return caches.delete(cacheName)
                }
            })
        })
    )
})