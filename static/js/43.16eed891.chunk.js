(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[43],{1633:function(t,e,n){"use strict";n.r(e),n.d(e,"loadGLTFMesh",(function(){return M}));var r=n(46),o=n(134),c=n(148),a=n(14),s=n(2),l=n(81),i=n(118),u=n(9),b=n(41),f=n(935),O=n(771),j=n(577),m=n(936),p=n(38),d=n(279),g=n(835),x=n(557),T=n(1222),h=n(785),v=n(789),w=n(836),y=n(385),A=n(587),C=n(7),E=n(515),R=n(691),B=n(772);async function M(t,e,n){const a=new h.a(function(t){const e=null==t?void 0:t.resolveFile;return e?{busy:!1,request:async(t,n,r)=>{const c=e(t),a="image"===n?"image":"binary"===n?"array-buffer":"json";return(await Object(o.default)(c,{responseType:a,signal:Object(s.l)(r)?r.signal:null})).data}}:null}(n)),l=(await Object(v.a)(a,e,n,!0)).model,i=l.lods.shift(),f=new Map,d=new Map;l.textures.forEach(((t,e)=>f.set(e,function(t){return new j.a({data:t.data,wrap:L(t.parameters.wrap)})}(t)))),l.materials.forEach(((t,e)=>d.set(e,function(t,e){const n=new r.a(function(t,e){return Object(b.g)(k(t[0]),k(t[1]),k(t[2]),e)}(t.color,t.opacity)),o=t.emissiveFactor?new r.a(function(t){return Object(u.h)(k(t[0]),k(t[1]),k(t[2]))}(t.emissiveFactor)):null;return new O.a({color:n,colorTexture:Object(s.t)(Object(s.b)(t.textureColor,(t=>e.get(t)))),normalTexture:Object(s.t)(Object(s.b)(t.textureNormal,(t=>e.get(t)))),emissiveColor:o,emissiveTexture:Object(s.t)(Object(s.b)(t.textureEmissive,(t=>e.get(t)))),occlusionTexture:Object(s.t)(Object(s.b)(t.textureOcclusion,(t=>e.get(t)))),alphaMode:F(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:Object(s.t)(Object(s.b)(t.textureMetallicRoughness,(t=>e.get(t)))),colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform})}(t,f))));const g=function(t){let e=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},r=new Map,o=new Map,a=[];for(const s of t.parts){const{attributes:{position:t,normal:l,color:i,tangent:u,texCoord0:b}}=s,f=`\n      ${$(t,r)}/\n      ${$(l,r)}/\n      ${$(i,r)}/\n      ${$(u,r)}/\n      ${$(b,r)}/\n      ${I(s.transform)}\n    `;let O=!1;const j=Object(c.b)(o,f,(()=>(O=!0,{start:e,length:t.count})));O&&(e+=t.count),l&&(n.normal=!0),i&&(n.color=!0),u&&(n.tangent=!0),b&&(n.texCoord0=!0),a.push({gltf:s,writeVertices:O,region:j})}return{vertexAttributes:{position:Object(x.a)(p.v,e),normal:n.normal?Object(x.a)(p.u,e):null,tangent:n.tangent?Object(x.a)(p.C,e):null,color:n.color?Object(x.a)(p.J,e):null,texCoord0:n.texCoord0?Object(x.a)(p.m,e):null},parts:a,components:[]}}(i);for(const r of g.parts)S(g,r,d);const{position:w,normal:y,tangent:A,color:C,texCoord0:E}=g.vertexAttributes,R={position:w.typedBuffer,normal:Object(s.l)(y)?y.typedBuffer:null,tangent:Object(s.l)(A)?A.typedBuffer:null,uv:Object(s.l)(E)?E.typedBuffer:null,color:Object(s.l)(C)?C.typedBuffer:null},B=Object(T.c)(R,t,n);return{transform:B.transform,components:g.components,spatialReference:t.spatialReference,vertexAttributes:new m.a({position:B.vertexAttributes.position,normal:B.vertexAttributes.normal,tangent:B.vertexAttributes.tangent,color:R.color,uv:R.uv})}}function $(t,e){if(Object(s.k)(t))return"-";const n=t.typedBuffer;return`${Object(c.b)(e,n.buffer,(()=>e.size))}/${n.byteOffset}/${n.byteLength}`}function I(t){return Object(s.l)(t)?t.toString():"-"}function S(t,e,n){e.writeVertices&&function(t,e){const{position:n,normal:r,tangent:o,color:c,texCoord0:u}=t.vertexAttributes,b=e.region.start,{attributes:f,transform:O}=e.gltf,j=f.position.count;if(Object(d.e)(n.slice(b,j),f.position,O),Object(s.l)(f.normal)&&Object(s.l)(r)){const t=Object(l.a)(Object(i.b)(),O),e=r.slice(b,j);Object(d.a)(e,f.normal,t),Object(a.k)(t)&&Object(d.c)(e,e)}else Object(s.l)(r)&&Object(E.b)(r,0,0,1,{dstIndex:b,count:j});if(Object(s.l)(f.tangent)&&Object(s.l)(o)){const t=Object(l.a)(Object(i.b)(),O),e=o.slice(b,j);Object(g.d)(e,f.tangent,t),Object(a.k)(t)&&Object(g.b)(e,e)}else Object(s.l)(o)&&Object(R.b)(o,0,0,1,1,{dstIndex:b,count:j});if(Object(s.l)(f.texCoord0)&&Object(s.l)(u)?Object(B.b)(u.slice(b,j),f.texCoord0):Object(s.l)(u)&&Object(B.a)(u,0,0,{dstIndex:b,count:j}),Object(s.l)(f.color)&&Object(s.l)(c)){const t=f.color,e=c.slice(b,j);if(4===t.elementCount)t instanceof p.C?Object(g.c)(e,t,255):t instanceof p.J?Object(R.a)(e,t):t instanceof p.H&&Object(g.a)(e,t,8);else{Object(R.b)(e,255,255,255,255);const n=p.B.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof p.u?Object(d.d)(n,t,255):t instanceof p.B?Object(E.a)(n,t):t instanceof p.z&&Object(d.b)(n,t,8)}}else Object(s.l)(c)&&Object(R.b)(c.slice(b,j),255,255,255,255)}(t,e);const r=e.gltf,o=function(t,e){switch(e){case C.r.TRIANGLES:return Object(w.c)(t,y.c);case C.r.TRIANGLE_STRIP:return Object(w.b)(t);case C.r.TRIANGLE_FAN:return Object(w.a)(t)}}(r.indices||r.attributes.position.count,r.primitiveType),c=e.region.start;if(c)for(let a=0;a<o.length;a++)o[a]+=c;t.components.push(new f.a({faces:o,material:n.get(r.material),trustSourceNormals:!0}))}function F(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function L(t){return{horizontal:N(t.s),vertical:N(t.t)}}function N(t){switch(t){case C.B.CLAMP_TO_EDGE:return"clamp";case C.B.MIRRORED_REPEAT:return"mirror";case C.B.REPEAT:return"repeat"}}function k(t){return t**(1/A.a)*255}}}]);
//# sourceMappingURL=43.16eed891.chunk.js.map