(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[81],{1160:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a}));var r=i(44),l=i(220);function s(e){return{origin:"portal-item",url:Object(r.N)(e.itemUrl),portal:e.portal||l.a.getDefault(),portalItem:e,readResourcePaths:[]}}function a(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?Object(r.N)(e.itemUrl):null,portal:e.portal||l.a.getDefault(),portalItem:e}}},1173:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return l}));var r=i(672);const l={type:r.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:s}}}}};function s(e,t,i,l){if(!e)return null;const{minScale:s,maxScale:a,minLOD:o,maxLOD:n}=t;if(null!=o&&null!=n)return l&&l.ignoreMinMaxLOD?r.a.fromJSON(e):r.a.fromJSON({...e,lods:e.lods.filter((({level:e})=>null!=e&&e>=o&&e<=n))});if(0!==s&&0!==a){const t=e=>Math.round(1e4*e)/1e4,i=s?t(s):1/0,l=a?t(a):-1/0;return r.a.fromJSON({...e,lods:e.lods.filter((e=>{const r=t(e.scale);return r<=i&&r>=l}))})}return r.a.fromJSON(e)}},1187:function(e,t,i){"use strict";i.d(t,"a",(function(){return _}));var r,l=i(0),s=i(134),a=i(28),o=i(375),n=i(16),c=i(243),u=i(22),p=i(908),h=i(84),y=i(23),d=i(13),b=i(231),f=i(44),m=i(1),v=i(17),O=i(72),g=i(10),j=i(911),S=i(25);class A{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%8,l=i>>3,s=this._tileAvailabilityBitSet;return l<0||l>s.length?"unknown":s[l]&1<<r?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let r=!0,l=!0;const s=Math.ceil(t*i/8),a=new Uint8Array(s);let o=0;for(let n=0;n<e.length;n++){const t=n%8;e[n]?(l=!1,a[o]|=1<<t):r=!1,7===t&&++o}l?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=a,this.byteSize+=a.length)}static fromDefinition(e,t){const i=e.service.request||s.default,{row:r,col:l,width:a,height:o}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:l,width:a,height:o},valid:!0,data:Object(v.c)(a*o,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==l||e.location.width!==a||e.location.height!==o))throw new n.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:l,width:a,height:o}});return A.fromJSON(e)}))}static fromJSON(e){A._validateJSON(e);const t=new A;return t.location=Object.freeze(Object(S.a)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new n.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new n.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new n.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new n.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new n.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function w(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let _=r=class extends(Object(c.b)(a.a)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*o.a.MEGABYTES,this.request=s.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new p.a(this.cacheByteSize),this.addHandles([Object(d.f)((()=>{const{layer:e}=this;return[null==e?void 0:e.parsedUrl,null==e?void 0:e.tileServers,null==e?void 0:e.apiKey,null==e?void 0:e.customParameters]}),(()=>this._initializeTilemapDefinition())),Object(d.f)((()=>{var e,t;return null==(e=this.layer)||null==(t=e.tileInfo)?void 0:t.lods}),(e=>this._initializeAvailableLevels(e)),d.e)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(u.a.getLogger(this.declaredClass).error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,r){if(!this._availableLevels[e])return Promise.reject(new n.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,l);if(s)return Promise.resolve(s);const a=r&&r.signal;return r={...r,signal:null},new Promise(((e,t)=>{Object(y.n)(a,(()=>t(Object(y.c)())));const i=w(l);let s=this._pendingTilemapRequests[i];if(!s){s=A.fromDefinition(l,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=s,s.then(e,e)}s.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof A){const l=r.getAvailability(t,i);if("unavailable"===l)throw new n.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return l}if(Object(y.j)(r))throw r;return"unknown"})):Promise.reject(new n.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const s=this.layer.tileInfo;s.updateTileInfo(r);const a=this.fetchAvailability(e,t,i,l).catch((e=>{if(Object(y.j)(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,a),a}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,s,a){if(!this._prefetchingEnabled)return;const o=`prefetch-${e}`;if(this.handles.has(o))return;const n=new AbortController;a.then((()=>n.abort()),(()=>n.abort()));let c=!1;const u={remove(){c||(c=!0,n.abort())}};if(this.handles.add(u,o),await Object(b.d)(10,n.signal).catch((()=>{})),c||(c=!0,this.handles.remove(o)),Object(y.k)(n))return;const p=new j.a(e,t,i,l),h={...s,signal:n.signal},d=this.layer.tileInfo;for(let y=0;r._prefetches.length<r._maxPrefetch&&d.upsampleTile(p);++y){const e=this.fetchAvailability(p.level,p.row,p.col,h);r._prefetches.push(e);const t=()=>{r._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:r}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:Object(f.G)({...t.query,...r,token:null!=i?i:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=w(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};_._maxPrefetch=4,_._prefetches=new h.a({initialSize:r._maxPrefetch}),Object(l.a)([Object(m.b)({constructOnly:!0,type:Number})],_.prototype,"levels",void 0),Object(l.a)([Object(O.a)("levels")],_.prototype,"castLevels",null),Object(l.a)([Object(m.b)({readOnly:!0,type:Number})],_.prototype,"size",null),Object(l.a)([Object(m.b)({constructOnly:!0,type:Number})],_.prototype,"cacheByteSize",void 0),Object(l.a)([Object(m.b)({constructOnly:!0})],_.prototype,"layer",void 0),Object(l.a)([Object(m.b)({constructOnly:!0})],_.prototype,"request",void 0),_=r=Object(l.a)([Object(g.a)("esri.layers.support.TilemapCache")],_)},1241:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(0),l=(i(167),i(1)),s=(i(17),i(12),i(51)),a=i(10),o=i(1173),n=i(1187),c=i(57);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.includes("Tilemap")?new n.a({layer:this}):null}};return Object(r.a)([Object(l.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(r.a)([Object(l.b)()],t.prototype,"minScale",void 0),Object(r.a)([Object(s.a)("service","minScale")],t.prototype,"readMinScale",null),Object(r.a)([Object(l.b)()],t.prototype,"maxScale",void 0),Object(r.a)([Object(s.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(r.a)([Object(l.b)({type:c.a})],t.prototype,"spatialReference",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(r.a)([Object(l.b)(o.b)],t.prototype,"tileInfo",void 0),Object(r.a)([Object(l.b)()],t.prototype,"tilemapCache",void 0),Object(r.a)([Object(s.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(r.a)([Object(l.b)()],t.prototype,"version",void 0),t=Object(r.a)([Object(a.a)("esri.layers.mixins.ArcGISCachedService")],t),t}},1407:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return re}));var r=i(0),l=i(134),s=i(157),a=i(16),o=i(25),n=i(2),c=i(721),u=i(23),p=i(44),h=i(1),y=(i(12),i(51)),d=i(10),b=i(50),f=i(86),m=i(57),v=i(423),O=i(910),g=i(1241),j=i(906),S=i(593),A=i(730),w=i(722),_=i(723),x=i(592);let T=null;var U=i(22),I=i(126);class R{constructor(e,t){this._spriteSource=e,this._maxTextureSize=t,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded","url"===e.type&&e.spriteFormat&&(this._spriteImageFormat=e.spriteFormat),e.pixelRatio&&(this.devicePixelRatio=e.pixelRatio),this.baseURL=e.spriteUrl}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData?this._spritesData[e]:null}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(e){this._isRetina=this.devicePixelRatio>1.15;const{width:t,height:i,data:r,json:l}=await this._getSpriteData(this._spriteSource,e),s=Object.keys(l);if(!s||0===s.length||!r)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=l,this.width=t,this.height=i;const o=Math.max(this._maxTextureSize,4096);if(t>o||i>o){const e=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${o} pixels}`;throw U.a.getLogger("esri.layers.support.SpriteSource").error(e),new a.a("SpriteSource",e)}let n;for(let a=0;a<r.length;a+=4)n=r[a+3]/255,r[a]=r[a]*n,r[a+1]=r[a+1]*n,r[a+2]=r[a+2]*n;this.image=r}async _getSpriteData(e,t){if("image"===e.type){let t,i;if(this.devicePixelRatio<1.15){if(!e.spriteSource1x)throw new a.a("SpriteSource","no image data provided for low resolution sprites!");t=e.spriteSource1x.image,i=e.spriteSource1x.json}else{if(!e.spriteSource2x)throw new a.a("SpriteSource","no image data provided for high resolution sprites!");t=e.spriteSource2x.image,i=e.spriteSource2x.json}return"width"in t&&"height"in t&&"data"in t&&(Object(I.c)(t.data)||Object(I.l)(t.data))?{width:t.width,height:t.height,data:new Uint8Array(t.data),json:i}:{...L(t),json:i}}const i=Object(p.N)(this.baseURL),r=i.query?"?"+Object(p.G)(i.query):"",s=this._isRetina?"@2x":"",o=`${i.path}${s}.${this._spriteImageFormat}${r}`,n=`${i.path}${s}.json${r}`,[c,u]=await Promise.all([Object(l.default)(n,t),Object(l.default)(o,{responseType:"image",...t})]);return{...L(u.data),json:c.data}}}function L(e){const t=document.createElement("canvas"),i=t.getContext("2d");t.width=e.width,t.height=e.height,i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(r.data)}}var P=i(672),D=i(136),N=i(1173),M=i(1187),E=i(905);class B{constructor(e){this.url=e}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=Object(l.default)(this.url).then((e=>e.data.index))),this._tileIndexPromise}async dataKey(e,t){const i=await this.fetchTileIndex();return Object(u.q)(t),this._getIndexedDataKey(i,e)}_getIndexedDataKey(e,t){const i=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let r=t;for(;0!==r.level;)r=new E.a(r.level-1,r.row>>1,r.col>>1,r.world),i.push(r);let l,s,a=e,o=i.pop();if(1===a)return o;for(;i.length;)if(l=i.pop(),s=(1&l.col)+((1&l.row)<<1),a){if(0===a[s]){o=null;break}if(1===a[s]){o=l;break}o=l,a=a[s]}return o}}class k{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t}async fetchTileIndex(e){return this._tileIndexPromise||(this._tileIndexPromise=Object(l.default)(this._tileIndexUrl,{query:{...null==e?void 0:e.query}}).then((e=>e.data.index))),this._tileIndexPromise}dataKey(e,t){const{level:i,row:r,col:l}=e,s=new E.a(e);return this._tilemap.fetchAvailabilityUpsample(i,r,l,s,t).then((()=>(s.world=e.world,s))).catch((e=>{if(Object(u.j)(e))throw e;return null}))}}const $=new Map;function C(e,t,i,r,s){return function(e,t){const i=$.get(e);if(i)return i.then((e=>Object(o.a)(e)));const r=Object(l.default)(e,{responseType:"array-buffer",...t}).then((({data:t})=>($.delete(e),t))).catch((t=>{throw $.delete(e),t}));return $.set(e,r),r}(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,i.toString()).replace(/\{x\}/gi,r.toString()),s)}class q{constructor(e,t,i){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=e,this.sourceUrl=t;const r=Object(p.N)(this.sourceUrl),l=Object(o.a)(i),s=l.tiles;if(r)for(let o=0;o<s.length;o++){const e=Object(p.N)(s[o]);e&&(Object(p.u)(e.path)||(e.path=Object(p.B)(r.path,e.path)),s[o]=Object(p.e)(e.path,{...r.query,...e.query}))}this.tileServers=s;const a=i.capabilities&&i.capabilities.split(",").map((e=>e.toLowerCase().trim())),n=!0===(null==i?void 0:i.exportTilesAllowed),c=!0===(null==a?void 0:a.includes("tilemap")),u=n&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:c},exportTiles:n?{maxExportTilesCount:+u}:null},this.tileInfo=Object(N.a)(l.tileInfo,l,null,{ignoreMinMaxLOD:!0});const h=i.tileMap?Object(p.e)(Object(p.B)(r.path,i.tileMap),r.query):null;c?(this.type="vector-tile",this.tilemap=new k(new M.a({layer:{parsedUrl:r,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),h)):h&&(this.tilemap=new B(h)),this.fullExtent=f.a.fromJSON(i.fullExtent)}destroy(){}async getRefKey(e,t){var i,r;return null!=(i=null==(r=this.tilemap)?void 0:r.dataKey(e,t))?i:e}requestTile(e,t,i,r){return C(this.tileServers[t%this.tileServers.length],e,t,i,r)}isCompatibleWith(e){const t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;const r=t.lods,l=i.lods,s=Math.min(r.length,l.length);for(let a=0;a<s;a++){const e=r[a],t=l[a];if(e.level!==t.level||Math.round(e.scale)!==Math.round(t.scale))return!1}return!0}}const z=D.a.defaults&&D.a.defaults.io.corsEnabledServers;function F(e){if(!e)return;const t=Object(p.o)(e);z&&!z.includes(t)&&z.push(t)}function J(...e){let t;for(let i=0;i<e.length;++i)if(Object(p.y)(e[i])){if(t){const r=t.split("://")[0];t=r+":"+e[i].trim()}}else t=Object(p.u)(e[i])?e[i]:Object(p.B)(t,e[i]);return Object(p.K)(t)}async function Q(e,t,i,r,s){let a,o,n;if(Object(u.q)(s),"string"==typeof i){const e=Object(p.F)(i);F(e),n=await Object(l.default)(e,{...s,responseType:"json",query:{f:"json",...null==s?void 0:s.query}}),n.ssl&&(a&&(a=a.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),a=e,o=e}else n={data:i},a=i.jsonUrl||null,o=r;const c=n.data;if(V(c))return e.styleUrl=a||null,async function(e,t,i,r){const l=i?Object(p.I)(i):Object(p.k)();e.styleBase=l,e.style=t,e.styleUrl&&F(e.styleUrl),t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const s=[];if(t.sources&&t.sources.esri){const i=t.sources.esri;i.url?await Q(e,"esri",J(l,i.url),void 0,r):s.push(Q(e,"esri",i,l,r))}for(const a of Object.keys(t.sources))"esri"!==a&&"vector"===t.sources[a].type&&(t.sources[a].url?s.push(Q(e,a,J(l,t.sources[a].url),void 0,r)):t.sources[a].tiles&&s.push(Q(e,a,t.sources[a],l,r)));await Promise.all(s)}(e,c,o,s);if(function(e){return!V(e)}(c))return e.sourceUrl?K(e,c,o,!1,t,s):(e.sourceUrl=a||null,K(e,c,o,!0,t,s));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function V(e){return!!e.sources}async function K(e,t,i,r,l,s){const a=i?Object(p.K)(i)+"/":Object(p.k)(),o=function(e,t){if(e.hasOwnProperty("tileInfo"))return e;const i={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},r=512;let l=78271.51696400007,s=295828763.7957775;const a=[],o=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let c=0;c<=n;c++)c>=o&&a.push({level:c,scale:s,resolution:l}),l/=2,s/=2;for(const c of e.tiles)F(J(t,c));return{capabilities:"TilesOnly",initialExtent:i,fullExtent:i,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:r,cols:r,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:a,spatialReference:{wkid:102100}}}}(t,a),n=new q(l,Object(p.e)(a,null==s?void 0:s.query),o);if(!r&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(n))return;null!=n.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(n.fullExtent):t.fullExtent=n.fullExtent.clone()),t.tileInfo.lods.length<n.tileInfo.lods.length&&(t.tileInfo=n.tileInfo)}if(r?(e.sourceBase=a,e.source=t,e.validatedSource=o,e.primarySourceName=l,e.sourceUrl&&F(e.sourceUrl)):F(a),e.sourceNameToSource[l]=n,!e.style){if(null==t.defaultStyles)throw new Error;return"string"==typeof t.defaultStyles?Q(e,"",J(a,t.defaultStyles,"root.json"),void 0,s):Q(e,"",t.defaultStyles,J(a,"root.json"),s)}}var G=i(1160),W=i(943),Y=i(199);const X=1e-6;function H(e,t){if(e===t)return!0;if(null==e&&null!=t)return!1;if(null!=e&&null==t)return!1;if(null==e||null==t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const i=e.origin,r=t.origin;if(Math.abs(i.x-r.x)>=X||Math.abs(i.y-r.y)>=X)return!1;let l,s;e.lods[0].scale>t.lods[0].scale?(l=e,s=t):(s=e,l=t);for(let a=l.lods[0].scale;a>=s.lods[s.lods.length-1].scale-X;a/=2)if(Math.abs(a-s.lods[0].scale)<X)return!0;return!1}function Z(e,t){if(e===t)return e;if(null==e&&null!=t)return t;if(null!=e&&null==t)return e;if(null==e||null==t)return null;const i=e.size[0],r=e.format,l=e.dpi,s={x:e.origin.x,y:e.origin.y},a=e.spatialReference.toJSON(),o=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],c=o.scale,u=o.resolution,p=n.scale,h=[];let y=c,d=u,b=0;for(;y>p;)h.push({level:b,resolution:d,scale:y}),b++,y/=2,d/=2;return new P.a({size:[i,i],dpi:l,format:r||"pbf",origin:s,lods:h,spatialReference:a})}var ee=i(1347),te=i(969);let ie=class extends(Object(S.a)(Object(x.a)(Object(g.a)(Object(j.a)(Object(w.a)(Object(_.a)(Object(A.a)(Object(O.a)(Object(c.a)(v.a)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.showCollisionBoxes="none",this.path=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))null==e||e.destroy();this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(u.p).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await Object(l.default)(t,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:t},Object(G.a)(this.portalItem))})).catch(u.p).then((()=>this._loadStyle(e)));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&Object(p.N)(e.serviceUrl);if(!t)return null;const i=this._getDefaultAttribution(t.path);return i?Object(p.e)(i,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return(null==(e=this.primarySource)?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?Object(p.N)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&Object(p.y)(e)&&(e=`https:${e}`);const i=Object(n.t)(Object(W.b)(e));t.styleUrl=Object(Y.c)(e,i)}get tileInfo(){var e;const t=[];for(const r in this.sourceNameToSource)t.push(this.sourceNameToSource[r]);let i=(null==(e=this.primarySource)?void 0:e.tileInfo)||new P.a;if(t.length>1)for(let r=0;r<t.length;r++)H(i,t[r].tileInfo)&&(i=Z(i,t[r].tileInfo));return i}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){var i,r;const l=Object(te.a)("2d").maxTextureSize,s=null!=(i=this.currentStyleInfo)&&i.spriteUrl?Object(p.e)(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,a=new R({type:"url",spriteUrl:s,pixelRatio:e,spriteFormat:null==(r=this.currentStyleInfo)?void 0:r.spriteFormat},l);await a.load(t),this._spriteSourceMap.set(e,a)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const i=Object(te.a)("2d").maxTextureSize,r=e.spriteUrl,l=r?Object(p.e)(r,{...this.customParameters,token:this.apiKey}):null;if(!l&&"url"===e.type)return null;const s=new R(e,i);try{await s.load(t);const i=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(i,s),l&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=l),this.emit("spriteSource-change",{spriteSource:s}),s}catch(a){Object(u.p)(a)}return null}async loadStyle(e,t){var i;const r=e||this.style||this.url;return this._loadingTask&&"string"==typeof r&&this.url===r||(null!=(i=this._loadingTask)&&i.abort(),this._loadingTask=Object(s.b)((e=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:e}))),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return Object(o.a)(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const i=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const r=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:i||r})}getStyleLayer(e){return Object(o.a)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return Object(o.a)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return null!=t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new a.a("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,i){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const i=await async function(e,t){const i={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[r,l]="string"==typeof e?[e,null]:[null,e.jsonUrl];await Q(i,"esri",e,l,t);const s={layerDefinition:i.validatedSource,url:r,serviceUrl:i.sourceUrl,style:i.style,styleUrl:i.styleUrl,spriteUrl:i.style.sprite&&J(i.styleBase,i.style.sprite),spriteFormat:i.spriteFormat,glyphsUrl:i.style.glyphs&&J(i.styleBase,i.style.glyphs),sourceNameToSource:i.sourceNameToSource,primarySourceName:i.primarySourceName};return F(s.spriteUrl),F(s.glyphsUrl),s}(e,{...t,query:{...this.customParameters,token:this.apiKey}});"webp"===i.spriteFormat&&(await function(e){if(T)return T;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return T=new Promise((i=>{const r=new Image;r.onload=()=>{r.onload=r.onerror=null,i(r.width>0&&r.height>0)},r.onerror=()=>{r.onload=r.onerror=null,i(!1)},r.src="data:image/webp;base64,"+t[e]})),T}("lossy")||(i.spriteFormat="png")),this._set("currentStyleInfo",{...i}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",i.sourceNameToSource),this._set("primarySource",i.sourceNameToSource[i.primarySourceName]),this._set("styleRepository",new ee.a(i.style)),this.read(i.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),i=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const r=t[2]&&t[2].toLowerCase();if(!r)return;const l=t[1]||"";for(const s of i)if(s.toLowerCase().includes(r))return Object(p.F)(`//static.arcgis.com/attribution/Vector${l}/${s}`)}async _loadStyle(e){var t,i;return null!=(t=null==(i=this._loadingTask)?void 0:i.promise)?t:this.loadStyle(null,e)}};Object(r.a)([Object(h.b)({readOnly:!0})],ie.prototype,"attributionDataUrl",null),Object(r.a)([Object(h.b)({type:["show","hide"]})],ie.prototype,"listMode",void 0),Object(r.a)([Object(h.b)({json:{read:!0,write:!0}})],ie.prototype,"blendMode",void 0),Object(r.a)([Object(h.b)({readOnly:!0,json:{read:!1}})],ie.prototype,"capabilities",null),Object(r.a)([Object(h.b)({readOnly:!0})],ie.prototype,"currentStyleInfo",void 0),Object(r.a)([Object(h.b)({json:{read:!1},readOnly:!0,type:f.a})],ie.prototype,"fullExtent",null),Object(r.a)([Object(h.b)()],ie.prototype,"style",void 0),Object(r.a)([Object(h.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],ie.prototype,"isReference",void 0),Object(r.a)([Object(h.b)({type:["VectorTileLayer"]})],ie.prototype,"operationalLayerType",void 0),Object(r.a)([Object(h.b)({readOnly:!0})],ie.prototype,"parsedUrl",null),Object(r.a)([Object(h.b)({readOnly:!0})],ie.prototype,"serviceUrl",null),Object(r.a)([Object(h.b)({type:m.a,readOnly:!0})],ie.prototype,"spatialReference",null),Object(r.a)([Object(h.b)({readOnly:!0})],ie.prototype,"styleRepository",void 0),Object(r.a)([Object(h.b)({readOnly:!0})],ie.prototype,"sourceNameToSource",void 0),Object(r.a)([Object(h.b)({readOnly:!0})],ie.prototype,"primarySource",void 0),Object(r.a)([Object(h.b)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],ie.prototype,"styleUrl",null),Object(r.a)([Object(b.a)(["portal-item","web-document"],"styleUrl")],ie.prototype,"writeStyleUrl",null),Object(r.a)([Object(h.b)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:P.a})],ie.prototype,"tileInfo",null),Object(r.a)([Object(h.b)({json:{read:!1},readOnly:!0,value:"vector-tile"})],ie.prototype,"type",void 0),Object(r.a)([Object(h.b)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],ie.prototype,"url",void 0),Object(r.a)([Object(h.b)({readOnly:!0})],ie.prototype,"version",void 0),Object(r.a)([Object(y.a)("version",["version","currentVersion"])],ie.prototype,"readVersion",null),Object(r.a)([Object(h.b)({type:String})],ie.prototype,"showCollisionBoxes",void 0),Object(r.a)([Object(h.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ie.prototype,"path",void 0),ie=Object(r.a)([Object(d.a)("esri.layers.VectorTileLayer")],ie);const re=ie}}]);
//# sourceMappingURL=81.88247e9c.chunk.js.map