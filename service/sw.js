// keeps the app opening without internet: try the network first, fall back to the saved copy
const C='service-report-v8';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon-192.png','apple-touch-icon.png'])).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  // 구글 로그인·저장 통신은 건드리지 않아요 (같은 사이트 파일과 firebase 라이브러리만 저장)
  if(u.origin!==self.location.origin&&u.hostname!=='www.gstatic.com')return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp)).catch(()=>{});return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
});
