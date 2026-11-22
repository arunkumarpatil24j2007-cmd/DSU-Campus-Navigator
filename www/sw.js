const V='dsu-nav-v2';
const ASSETS=['./','index.html','manifest.webmanifest','icons/icon.svg','icons/icon-192.png','icons/icon-512.png','vendor/three/three.module.js','vendor/three/addons/controls/OrbitControls.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// HTML: network first (so updates arrive); other files: cache first, for offline use
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  const put=res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res};
  if(r.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('.html')){e.respondWith(fetch(r).then(put).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(put)));});
