(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[194],{1061:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));r(167);var s=r(2),o=r(720),a=r(1141),i=r(1312),n=r(1122),c=r(1400),l=r(1253),m=r(1195),f=r(1254),u=r(1494),O=r(1342),p=r(1343),b=r(86);class d{convertVectorFieldData(e){const t=a.a.fromJSON(e.pixelBlock),r=Object(f.b)(t,e.type);return Promise.resolve(Object(s.l)(r)&&r.toJSON())}async decode(e){const t=await Object(i.a)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=a.a.fromJSON(e.pixelBlock),e.extent=e.extent?b.a.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(Object(s.l)(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=O.a.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(t=this.symbolizer)?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=Object(c.a)(e.rasterFunctionJSON)}async process(e){const t=this.rasterFunction.process({extent:b.a.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>Object(s.l)(e)?a.a.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return Object(s.l)(t)?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(a.a.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(Object(s.l)(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=Object(m.e)(a.a.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=Object(n.r)(a.a.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach(((e,r)=>{t.set(r,null==e?void 0:e.toJSON())})),Promise.resolve(t)}async mosaicAndTransform(e){var t;const r=e.srcPixelBlocks.map((e=>e?new a.a(e):null)),o=Object(n.n)(r,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let i,c=o;return e.coefs&&(c=Object(n.c)(o,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(i=Object(n.j)(e.destDimension,e.gcsGrid),c=Object(s.t)(Object(f.a)(c,e.isUV?"vector-uv":"vector-magdir",i))),{pixelBlock:null==(t=c)?void 0:t.toJSON(),localNorthDirections:i}}async createFlowMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:o}=await Object(p.a)(e.meshType,e.simulationSettings,r,t.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=b.a.fromJSON(e.projectedExtent),r=b.a.fromJSON(e.srcBufferExtent);let s=null;e.datumTransformationSteps&&(s=new o.a({steps:e.datumTransformationSteps})),(e.includeGCSGrid||Object(l.j)(t.spatialReference,r.spatialReference,s))&&await Object(l.f)();const a=e.rasterTransform?Object(u.b)(e.rasterTransform):null;return Object(l.b)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:s,rasterTransform:a})}}}}]);
//# sourceMappingURL=194.3a122720.chunk.js.map