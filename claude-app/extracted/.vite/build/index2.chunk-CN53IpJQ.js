(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`6e13464cbd9c3dc0501fe5ecb0568e3d3e9ea77a`}}catch{}})();try{(function(){var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`fac9ce80-caf7-40ba-aa2e-24b5293fb333`,e._sentryDebugIdIdentifier=`sentry-dbid-fac9ce80-caf7-40ba-aa2e-24b5293fb333`)})()}catch{}require("./index.chunk-DYqUPnPe.js");const e=require("./index.chunk-BuzHHbBR.js");var t=2e3,n=`(() => {
  const navigation = performance.getEntriesByType("navigation")[0];
  return {
    navigation: navigation && {
      responseStart: navigation.responseStart,
      domContentLoadedEventEnd: navigation.domContentLoadedEventEnd,
      transferSize: navigation.transferSize,
    },
    resources: performance.getEntriesByType("resource").map((entry) => ({
      transferSize: entry.transferSize,
      encodedBodySize: entry.encodedBodySize,
    })),
  };
})()`,r=e=>typeof e==`object`&&!!e,i=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0?e:null,a=e=>e===null?null:Math.round(e);function o(e){let t=r(e)?e:{},n=r(t.navigation)?t.navigation:{},o=Array.isArray(t.resources)?t.resources:null,s=0,c=0,l=0,u=0,d=0,f=0;for(let e of o??[]){if(!r(e))continue;let t=i(e.transferSize),n=i(e.encodedBodySize);t===null||n===null||(s+=1,d+=t,f+=n,t>0?c+=1:n>0?l+=1:u+=1)}let p=e=>o===null?null:e;return{spa_ttfb_ms:a(i(n.responseStart)),spa_dcl_ms:a(i(n.domContentLoadedEventEnd)),spa_nav_transfer_bytes:i(n.transferSize),spa_resource_count:p(s),spa_resource_network_count:p(c),spa_resource_cache_count:p(l),spa_resource_opaque_count:p(u),spa_transfer_bytes:p(d),spa_encoded_bytes:p(f)}}async function s(r){if(!r||r.isDestroyed())return o(null);try{return o(await e.x_(r.mainFrame.executeJavaScript(n),t,`spa resource timing read timed out`))}catch{return o(null)}}exports.collectSpaResourceTiming=s,exports.summarizeSpaResourceTiming=o;
//# sourceMappingURL=index2.chunk-CN53IpJQ.js.map