(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[47],{1041:function(e,t,i){},1042:function(e,t,i){},1043:function(e,t,i){},1044:function(e,t){function i(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id=1044},1050:function(e,t,i){"use strict";i.r(t);var a=i(4),n=i.n(a),l=i(288),o=i.n(l),s=(i(1041),i(1042),i(116)),r=i(117),c=i(154),u=i(155),d=(i(1043),i(858)),h=i(1024),y=i(171),p=i(681),f=i(405),m=i(941),b=i(136),g=i(1025),v=i(1096),j=i(1099),O=i(1100),x=i(393),k=i(1098),w=i(1029),D=i(1097),S=i(1095),C=i(1027),L=i(23),A=i(907),P=i(853),E=i(123),N=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).ref=void 0,a.myChart=void 0,a.state={data:e.data,time:e.time,yAxisDatas:e.yAxisDatas},a}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.ref&&(this.myChart=P.a(this.ref),this.setOption())}},{key:"componentWillReceiveProps",value:function(e,t){var i=this,a=e.data,n=e.time,l=e.yAxisDatas;n!==this.props.time&&this.setState({data:a,time:n,yAxisDatas:l},(function(){i.setOption()}))}},{key:"setOption",value:function(){var e=this.state,t=e.yAxisDatas,i=e.data,a={title:{subtext:this.props.name,left:"center"},xAxis:{max:"dataMax",axisLabel:{fontSize:8}},yAxis:{type:"category",data:t,inverse:!0,animationDuration:100,animationDurationUpdate:100,axisLabel:{fontSize:8}},grid:{left:50,top:30,right:70,bottom:30},series:[{realtimeSort:!0,name:this.props.name,type:"bar",data:i,label:{show:!0,position:"right",valueAnimation:!0,fontSize:8},itemStyle:{color:this.props.color}}],legend:{show:!1},animationDuration:0,animationDurationUpdate:100,animationEasing:"linear",animationEasingUpdate:"linear"};this.myChart.setOption(a)}},{key:"render",value:function(){var e=this;return Object(E.jsx)("div",{ref:function(t){return e.ref=t},style:{width:"100%",height:"100%"}})}}]),i}(n.a.Component),I=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).ref=void 0,a.myChart=void 0,a.state={data:e.data,time:e.time},a}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.ref&&(this.myChart=P.a(this.ref),this.setOption())}},{key:"componentWillReceiveProps",value:function(e,t){var i=this,a=e.data,n=e.time;n!==this.props.time&&this.setState({data:a,time:n},(function(){i.setOption()}))}},{key:"setOption",value:function(){var e=this.state.data,t={title:{subtext:this.props.name,left:"center"},tooltip:{trigger:"item"},legend:{bottom:0,left:"center",textStyle:{fontSize:10},itemWidth:16,itemHeight:12},grid:{left:140,top:40,right:0,bottom:0},series:[{name:this.props.name,type:"pie",radius:"60%",data:e,label:{show:!1,position:"center"}}]};this.myChart.setOption(t)}},{key:"render",value:function(){var e=this;return Object(E.jsx)("div",{ref:function(t){return e.ref=t},style:{width:"100%",height:"100%"}})}}]),i}(n.a.Component),V=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).populayer=void 0,a.sketchViewModel=void 0,a.sceneLayerView=null,a.sketchLayer=new p.a,a.bufferLayer=new p.a,a.queryDiv=void 0,a.sketchGeometry=null,a.highlightHandle=null,a.state={scale:"",lnglat:{},created:!1,bufferSize:0,popuDatas:[],densityDatas:[],time:a.getTime(),loading:!0,piePopuDatas:[],visible:!1,dataSource:[]},a}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.init()}},{key:"getTime",value:function(){return(new Date).getTime()}},{key:"init",value:function(){b.a.apiKey="AAPK449340f85b664e6b802d2d0e65eb4849vlSII8YqKpEj5Fn0hCy2qr4QyOAZRZSB6XWDc2-X8pFlNoRYoQoetUvFs1Y_JVKL";var e=new f.a({symbol:{type:"label-3d",symbolLayers:[{type:"text",material:{color:"black"},size:8}]},labelPlacement:"above-center",labelExpressionInfo:{expression:'DefaultValue($feature.NAME, "no data")'}});this.populayer=new m.default({id:"\u4eba\u53e3",url:"/datas/shandongpopu.geojson",renderer:{type:"simple",symbol:{type:"polygon-3d",symbolLayers:[{type:"extrude"}]},visualVariables:[{type:"size",field:"POPU",legendOptions:{title:"\u4eba\u53e3\uff08\u4e07\u4eba\uff09"},stops:[{value:1,size:100},{value:300,size:3e4}]},{type:"color",field:"DENSITY",legendOptions:{title:"\u4eba\u53e3\u5bc6\u5ea6\uff08\u4eba/km\xb2\uff09"},stops:[{value:100,color:"#70b6ba",label:"100"},{value:500,color:"#b7d5d7",label:"500"},{value:1e3,color:"#fff0d0",label:"1000"},{value:3e3,color:"#f9cbb3",label:"3000"},{value:16e3,color:"#ec8787",label:"16000"}]}]},labelingInfo:[e],elevationInfo:{mode:"on-the-ground"},popupTemplate:{title:"{name}",content:[{type:"fields",fieldInfos:[{fieldName:"ENAME",label:"\u884c\u653f\u533a\u82f1\u6587\u540d\u79f0"},{fieldName:"POPU",label:"\u4eba\u53e3\uff08\u4e07\u4eba\uff09"},{fieldName:"AREA",label:"\u884c\u653f\u533a\u9762\u79ef(m\xb2)"},{fieldName:"DENSITY",label:"\u4eba\u53e3\u5bc6\u5ea6\uff08\u4eba/km\xb2\uff09"}]}]},outFields:["objectid","code","name","type","length","yearcomple","catagory"]});var t=new d.a({basemap:"arcgis-topographic",ground:"world-elevation",layers:[this.populayer]}),i=new h.a({container:"map",map:t,camera:{position:{spatialReference:{wkid:102100},x:12964061.149533136,y:3447251.4087446583,z:819505.7301032562},heading:9.384510690778026,tilt:40.21595521917268}}),a=this;i.when((function(){a.setState({created:!0},(function(){setTimeout((function(){a.addLisener(i,a,a.populayer)}),50)}))}))}},{key:"addLisener",value:function(e,t,i){t.getScale(e),e.on("click",(function(e){})),e.on("double-click",(function(e){e.stopPropagation()})),e.on("mouse-wheel",(function(){t.getScale(e)})),e.on("pointer-move",(function(i){e.hitTest(i).then((function(e){if(null!==e&&void 0!==e&&e.results[0]){var i=e.results[0],a=i.mapPoint.longitude.toFixed(4),n=i.mapPoint.latitude.toFixed(4);t.setState({lnglat:{lng:a,lat:n}})}}))}));var a=new g.a({container:"legendDiv",view:e,layerInfos:[{layer:i,title:"\u4eba\u53e3"}]});e.ui.add(a,"bottom-right"),e.ui.add(["queryDiv"],"top-right"),t.createBuffer(e,t)}},{key:"getScale",value:function(e){var t=e.scale.toFixed(0);this.setState({scale:t})}},{key:"queryAllFeatures",value:function(){var e=this,t=this.sceneLayerView.createQuery();return t.where="1=1",this.sceneLayerView.queryFeatures(t).then((function(t){e.getChartDatas(t)}),console.error)}},{key:"createBuffer",value:function(e,t){function i(e){t.clearHighlighting();t.populayer.objectIdField;console.log(e),t.highlightHandle=t.sceneLayerView.highlight(e)}function a(){var e=t.sceneLayerView.createQuery();return e.geometry=t.sketchGeometry,e.distance=n(),t.sceneLayerView.queryObjectIds(e).then(i)}function n(){return t.state.bufferSize?1e3*t.state.bufferSize:0}e.map.addMany([t.bufferLayer,t.sketchLayer]),e.whenLayerView(t.populayer).then((function(e){t.sceneLayerView=e,t.queryDiv=document.getElementById("queryDiv"),t.queryDiv.style.display="block",setTimeout((function(){t.populayer.when((function(){t.queryAllFeatures()}))}),3e3)})),t.sketchViewModel=new C.a({layer:t.sketchLayer,defaultUpdateOptions:{tool:"reshape",toggleToolOnClick:!1},view:e,defaultCreateOptions:{hasZ:!1}}),t.sketchViewModel.on("create",(function(e){"complete"===e.state&&(t.sketchGeometry=e.graphic.geometry,o())})),t.sketchViewModel.on("update",(function(e){"complete"===e.state&&(t.sketchGeometry=e.graphics[0].geometry,o())}));var l=L.f((function(){if(t.sketchGeometry)return t.queryDiv.style.display="block",function(e){if(e>0){var i=A.geodesicBuffer(t.sketchGeometry,e,"meters");0===t.bufferLayer.graphics.length?t.bufferLayer.add(new y.a({geometry:i,symbol:t.sketchViewModel.polygonSymbol})):t.bufferLayer.graphics.getItemAt(0).geometry=i}else t.bufferLayer.removeAll()}(n()),L.g([s(),a()])}));function o(){l().catch((function(e){"AbortError"!==e.name&&console.error(e)}))}function s(){var e=t.sceneLayerView.createQuery();return e.geometry=t.sketchGeometry,e.distance=n(),t.setState({loading:!0}),t.sceneLayerView.queryFeatures(e).then((function(e){t.getChartDatas(e)}),console.error)}}},{key:"clearHighlighting",value:function(){this.highlightHandle&&(this.highlightHandle.remove(),this.highlightHandle=null)}},{key:"clearCharts",value:function(){this.queryAllFeatures()}},{key:"onSliderChange",value:function(e){this.setState({bufferSize:e})}},{key:"geometryButtonsClickHandler",value:function(e,t){this.clearGeometry(),this.sketchViewModel.create(e)}},{key:"clearGeometry",value:function(e){this.sketchGeometry=null,this.sketchViewModel.cancel(),this.sketchLayer.removeAll(),this.bufferLayer.removeAll(),this.clearHighlighting(),this.clearCharts(),e||this.queryDiv&&(this.queryDiv.style.display="none")}},{key:"clearHandler",value:function(){this.clearGeometry(!0)}},{key:"getChartDatas",value:function(e){if(null!==e&&void 0!==e&&e.features){var t=e.features,i=[],a=[],n=[],l=[],o={"<40":0,"40-80":0,"80-160":0,">=160":0};if(t.forEach((function(e){var t=e.attributes;if(t){var n=t.DENSITY,s=t.POPU,r=t.NAME;i.push({value:s?Number(s):0,name:r}),a.push({value:n?Number(n):0,name:r}),l.push({DENSITY:n,POPU:s,NAME:r,feature:e}),s<40?o["<40"]++:s>=40&&s<80?o["40-80"]++:s>=80&&s<160?o["80-160"]++:s>=160&&o[">=160"]++}})),o)for(var s in o)n.push({name:s,value:o[s]});i.sort((function(e,t){return t.value-e.value})),a.sort((function(e,t){return t.value-e.value})),l.sort((function(e,t){return t.POPU-e.POPU})),this.setState({popuDatas:i,densityDatas:a,time:this.getTime(),loading:!1,piePopuDatas:n,dataSource:l})}}},{key:"getDatas",value:function(e,t){var i=[],a=[];for(var n in e){if(t&&Number(n)>t-1)break;var l=e[n],o=l.name,s=l.value;i.push(s),a.push(o)}return{datas:i,names:a}}},{key:"onView",value:function(){this.setState({visible:!0})}},{key:"onClose",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){var e=this.state,t=e.scale,i=e.lnglat,a=e.created,n=e.bufferSize,l=e.popuDatas,o=e.densityDatas,s=e.time,r=e.loading,c=e.piePopuDatas,u=e.visible,d=e.dataSource,h=l?this.getDatas(l,10):{datas:[],names:[]},y=o?this.getDatas(o,10):{datas:[],names:[]};return Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"lmap",id:"map"}),t&&Object(E.jsx)(v.a,{size:"small",className:"scale",style:{width:340},children:Object(E.jsxs)(j.a,{children:[Object(E.jsx)(O.a,{children:Object(E.jsxs)(j.a,{children:[Object(E.jsx)(O.a,{children:"\u6bd4\u4f8b\u5c3a"}),Object(E.jsxs)(O.a,{children:["1:",t]})]})}),(null===i||void 0===i?void 0:i.lng)&&Object(E.jsxs)(O.a,{style:{paddingLeft:10},children:["\u7ecf\u5ea6\uff1a",i.lng]}),(null===i||void 0===i?void 0:i.lat)&&Object(E.jsxs)(O.a,{style:{paddingLeft:10},children:["\u7eac\u5ea6\uff1a",i.lat]})]})}),a&&Object(E.jsx)(v.a,{size:"small",title:"\u56fe\u4f8b",id:"legendDiv",style:{padding:10,width:220}}),a&&Object(E.jsxs)(v.a,{size:"small",title:"\u51e0\u4f55\u56fe\u5f62\u67e5\u8be2",id:"queryDiv",style:{padding:10,width:220},children:[Object(E.jsxs)(j.a,{style:{width:"100%"},children:[Object(E.jsx)(x.a,{style:{marginLeft:10},type:"primary",id:"point-geometry-button",value:"point",title:"\u6309\u70b9\u9009\u62e9",onClick:this.geometryButtonsClickHandler.bind(this,"point"),children:"\u70b9"}),Object(E.jsx)(x.a,{style:{marginLeft:10},type:"primary",id:"line-geometry-button",value:"polyline",title:"\u6309\u6298\u7ebf\u9009\u62e9",onClick:this.geometryButtonsClickHandler.bind(this,"polyline"),children:"\u7ebf"}),Object(E.jsx)(x.a,{style:{marginLeft:10},type:"primary",id:"polygon-geometry-button",value:"polygon",title:"\u6309\u591a\u8fb9\u5f62\u9009\u62e9",onClick:this.geometryButtonsClickHandler.bind(this,"polygon"),children:"\u9762"})]}),Object(E.jsxs)(j.a,{style:{width:"100%"},children:[Object(E.jsx)("div",{style:{padding:"10px 0"},children:"\u8bbe\u7f6e\u7f13\u51b2\u533a\u534a\u5f84(km):"}),Object(E.jsx)(k.a,{value:n,style:{width:"100%"},min:0,max:500,onChange:this.onSliderChange.bind(this)})]}),Object(E.jsx)(j.a,{justify:"center",style:{width:"100%"},children:Object(E.jsx)(x.a,{id:"clearGeometry",danger:!0,type:"dashed",onClick:this.clearHandler.bind(this),children:"\u6e05\u9664"})})]}),Object(E.jsx)(j.a,{justify:"center",style:{position:"absolute",left:300,top:15,right:300},children:Object(E.jsx)(v.a,{children:Object(E.jsx)("div",{style:{fontSize:24},children:"\u5c71\u4e1c\u7701\u4eba\u53e3\u67e5\u8be2\u5c55\u793a\u7cfb\u7edf"})})}),Object(E.jsx)(j.a,{style:{width:340,position:"absolute",left:10,top:210,bottom:90},children:Object(E.jsxs)(v.a,{title:"\u7edf\u8ba1\u6570\u636e\u5c55\u793a",style:{width:"100%",height:"100%",position:"relative"},bodyStyle:{width:"100%",height:"calc(100% - 40px)",padding:10},size:"small",children:[Object(E.jsx)(j.a,{justify:"center",style:{height:40,width:"100%"},children:l&&l.length>0&&Object(E.jsxs)(j.a,{align:"middle",children:[Object(E.jsx)(O.a,{children:"\u603b\u8ba1".concat(l?l.length:0,"\u4e2a\u8981\u7d20")}),Object(E.jsx)(O.a,{children:Object(E.jsx)(x.a,{type:"link",size:"small",onClick:this.onView.bind(this),children:"\u67e5\u770b\u6570\u636e\u4fe1\u606f"})})]})}),Object(E.jsxs)(j.a,{style:{height:"calc(100% - ".concat(40,"px)")},children:[Object(E.jsx)(w.a,{style:{left:"40%",position:"absolute",top:"45%"},spinning:r,tip:"\u52a0\u8f7d\u6570\u636e\u4e2d...."}),Object(E.jsx)(j.a,{style:{height:"33%",width:"100%"},children:h.datas.length>0&&Object(E.jsx)(N,{color:"#f7e2c5",yAxisDatas:h.names,data:h.datas,time:null===s||void 0===s?void 0:s.toString(),name:"\u4eba\u53e3\u524d".concat(10,"\u540d\u6570\u636e\u7edf\u8ba1(\u4e07\u4eba)")})}),Object(E.jsx)(j.a,{style:{height:"33%",width:"100%"},children:y.datas.length>0&&Object(E.jsx)(N,{color:"#b5d1d3",yAxisDatas:y.names,data:y.datas,time:null===s||void 0===s?void 0:s.toString(),name:"\u4eba\u53e3\u5bc6\u5ea6\u524d".concat(10,"\u540d\u6570\u636e\u7edf\u8ba1(\u4e07\u4eba)")})}),Object(E.jsx)(j.a,{style:{height:"33%",width:"100%"},children:c&&c.length>0&&Object(E.jsx)(I,{data:c,time:null===s||void 0===s?void 0:s.toString(),name:"\u4eba\u53e3\u5206\u7ea7\u7edf\u8ba1\u533a\u53bf(\u4e2a)"})})]})]})}),Object(E.jsx)(D.a,{centered:!0,title:"\u6570\u636e\u5217\u8868",footer:null,width:400,open:u,onCancel:this.onClose.bind(this),children:Object(E.jsx)(S.a,{dataSource:d,pagination:!1,scroll:{y:500},columns:[{title:"\u540d\u79f0",dataIndex:"NAME",key:"nAME"},{title:"\u4eba\u53e3(\u4e07\u4eba)",dataIndex:"POPU",key:"POPU"},{title:"\u4eba\u53e3\u5bc6\u5ea6(\u4eba/km\xb2)",dataIndex:"DENSITY",key:"DENSITY"}]})})]})}}]),i}(n.a.Component);var z=function(){return Object(E.jsx)(V,{})},M=function(e){e&&e instanceof Function&&i.e(268).then(i.bind(null,1612)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,l=t.getLCP,o=t.getTTFB;i(e),a(e),n(e),l(e),o(e)}))};o.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(z,{})}),document.getElementById("root")),M()}},[[1050,48,49]]]);
//# sourceMappingURL=main.3cdcb596.chunk.js.map