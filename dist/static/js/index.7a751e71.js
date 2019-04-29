webpackJsonp([1],{0:function(e,t,n){e.exports=n("msSN")},"5e9e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"state",function(){return r}),n.d(t,"mutations",function(){return a});var r=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(e,t){e.type=t},setEffect:function(e,t){e.effect=t}}},"8+Q+":function(e,t,n){var r={"./AdaptiveToneMappingPass.js":"DMmI","./BasicShader.js":"twXW","./BleachBypassShader.js":"lVEO","./BlendShader.js":"UpKp","./BloomPass.js":"UzwZ","./BokehPass.js":"V3di","./BokehShader.js":"opx5","./BokehShader2.js":"Gn7b","./BrightnessContrastShader.js":"RJF7","./CanvasRenderer.js":"URco","./ColorCorrectionShader.js":"SM7f","./ColorifyShader.js":"xy/3","./ConvolutionShader.js":"idxQ","./CopyShader.js":"8a0I","./DDSLoader.js":"cMHN","./DOFMipMapShader.js":"kcLx","./DigitalGlitch.js":"xTV4","./DotScreenPass.js":"lpOf","./DotScreenShader.js":"ijTH","./EdgeShader.js":"yN/e","./EdgeShader2.js":"O0Tq","./EffectComposer.js":"XASo","./FXAAShader.js":"UZwU","./FilmPass.js":"qAQO","./FilmShader.js":"8hAK","./FocusShader.js":"lMm4","./FresnelShader.js":"sHHR","./GammaCorrectionShader.js":"8MK4","./GlitchPass.js":"SbKR","./HorizontalBlurShader.js":"6OvI","./HorizontalTiltShiftShader.js":"O0rx","./HueSaturationShader.js":"o62V","./JSONLoader.js":"OG4v","./KaleidoShader.js":"EeA7","./LuminosityShader.js":"WKWa","./MTLLoader.js":"1Lq2","./MarchingCubes.js":"rYwd","./MaskPass.js":"PVku","./MirrorShader.js":"eMpA","./NormalMapShader.js":"5Mzp","./OBJLoader.js":"s9lp","./OceanShaders.js":"XSO4","./OrbitControls.js":"Cs0u","./ParallaxShader.js":"2Evs","./Projector.js":"dihm","./RGBShiftShader.js":"CzVg","./RenderPass.js":"BzVy","./SSAOShader.js":"kBtc","./SVGLoader.js":"47im","./SavePass.js":"nQdp","./SepiaShader.js":"XsmN","./ShaderPass.js":"i4FG","./TechnicolorShader.js":"kaGc","./TexturePass.js":"9GeX","./ToneMapShader.js":"Oa0t","./TriangleBlurShader.js":"LiLU","./UnpackDepthRGBAShader.js":"aEc1","./VerticalBlurShader.js":"p+VX","./VerticalTiltShiftShader.js":"mOLd","./VignetteShader.js":"5I1A"};function a(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="8+Q+"},"9QD9":function(e,t){},CJsk:function(e,t){},LOWA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SET_PAGE_SCROLL_POSITION",function(){return s}),n.d(t,"state",function(){return c}),n.d(t,"mutations",function(){return u}),n.d(t,"actions",function(){return l});var r=n("bOdI"),a=n.n(r),o=n("Dd8w"),i=n.n(o),s="SET_PAGE_SCROLL_POSITION",c=function(){return{scrollPostionMap:{}}},u=a()({},s,function(e,t){var n=t.pageId,r=t.scrollPosition;e.scrollPostionMap=i()({},e.scrollPostionMap,a()({},n,r))}),l={savePageScrollPosition:function(e,t){var n=e.commit,r=t.pageId,a=t.scrollPosition;n(s,{pageId:r,scrollPosition:a})}}},"N0M+":function(e,t){},Regk:function(e,t){},Uz7q:function(e,t){e.exports={buildVersion:1556510042394,build:{ssr:!1,publicPath:"/vue-pwa-webpack/dist/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/",pageTransition:{type:"fade",transitionClass:"fade"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"/Users/zymo/work/vue-pwa-webpack/dist/service-worker.js"},skeleton:{enable:!0,asyncCSS:!0,routes:[{path:"/",skeletonId:"my-skeleton",componentPath:"core/Skeleton.vue"}]}}},VfP6:function(e,t,n){var r={"./pageTransition.js":"5e9e","./scrollBehavior.js":"LOWA"};function a(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="VfP6"},YX19:function(e,t){},maet:function(e,t){},msSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("//Fk"),a=n.n(r),o=n("Gu7T"),i=n.n(o),s=n("Xxa5"),c=n.n(s),u=n("exGp"),l=n.n(u),d=n("/5sW"),h=n("1nuA"),f=function(){var e=l()(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();function p(e,t){var n={isClient:!0,app:t,store:e.store,route:e.to,from:e.from},r=e.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(e){var t=e.status,a=void 0===t?302:t,o=e.path,i=void 0===o?"":o,s=e.query,c=void 0===s?{}:s,u=e.external,l=void 0!==u&&u;n._redirected=!0,r({path:i,query:c,status:a,external:l})},n}var m=function(){var e=l()(c.a.mark(function e(t,n){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.length)){e.next=9;break}if(!n._redirected){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,v(t[r],n);case 6:r++,e.next=1;break;case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();function v(e,t){var n=void 0;return 2===e.length?n=new a.a(function(n,r){e(t,function(e,a){e?(t.error(e),r(e)):n(a)})}):(n=e(t))&&(n instanceof a.a||"function"==typeof n.then)||(n=a.a.resolve(n)),n}var w=n("Uz7q"),y=n.n(w),S=n("Dd8w"),j=n.n(S),g=n("p3jY"),b=n.n(g),x=n("/ocq"),k={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},P=n("XyMi"),T=Object(P.a)(k,function(){var e=this.$createElement;return(this._self._c||e)("div")},[],!1,null,null,null).exports,E=n("vXz1");var _=n.n(E)()();_.DeviceOrientationControls=function(e){return function(t){console.log(this,t);var n=this;this.object=t,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation={},this.screenOrientation=0,this.alphaOffset=0;var r=function(e){n.enabled||alert(n.enabled),n.deviceOrientation=e,console.log("disconnect")},a=function(){n.screenOrientation=window.orientation||0},o=function(){var t=new e.Vector3(0,0,1),n=new e.Euler,r=new e.Quaternion,a=new e.Quaternion(-Math.sqrt(.5),0,0,Math.sqrt(.5));return function(e,o,i,s,c){n.set(i,o,-s,"YXZ"),e.setFromEuler(n),e.multiply(a),e.multiply(r.setFromAxisAngle(t,-c))}}();this.connect=function(){a(),window.addEventListener("orientationchange",a,!1),window.addEventListener("deviceorientation",r,!1),n.enabled=!0},this.disconnect=function(){window.removeEventListener("orientationchange",a,!1),window.removeEventListener("deviceorientation",r,!1),n.enabled=!1},this.update=function(){if(!1!==n.enabled){var t=n.deviceOrientation;if(t){var r=t.alpha?e.Math.degToRad(t.alpha)+n.alphaOffset:0,a=t.beta?e.Math.degToRad(t.beta):0,i=t.gamma?e.Math.degToRad(t.gamma):0,s=n.screenOrientation?e.Math.degToRad(n.screenOrientation):0;o(n.object.quaternion,r,a,i,s)}}},this.dispose=function(){n.disconnect()},this.connect()}}(_);var O=void 0,M=void 0,C=void 0,A=void 0,L={name:"index",metaInfo:{title:"cosmos",titleTemplate:"%s - WoW",meta:[{name:"keywords",content:"cosmos"},{name:"description",content:"基于 Vue 的 PWA 解决方案"}]},data:function(){return{a:""}},mounted:function(){this.init(),this.animate()},methods:{init:function(){O=new _.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e3),A=new _.DeviceOrientationControls(O),M=new _.Scene;var e=new _.SphereBufferGeometry(500,60,40);e.scale(-1,1,1);var t=new _.MeshBasicMaterial({map:(new _.TextureLoader).load("../static/img/cosmos/sky.jpg")}),n=new _.Mesh(e,t);M.add(n),(C=new _.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),C.setSize(window.innerWidth,window.innerHeight),document.getElementById("cosmos").appendChild(C.domElement),window.addEventListener("resize",this.onWindowResize,!1)},animate:function(){A.update(),C.render(M,O),window.requestAnimationFrame(this.animate)},onWindowResize:function(){O.aspect=window.innerWidth/window.innerHeight,O.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight),console.log("111")}},asyncData:function(){var e=l()(c.a.mark(function e(t){t.store,t.route;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};var I=function(e){n("zlUM")},B=Object(P.a)(L,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"cosmos-page"},[t("div",{staticClass:"wraper",attrs:{id:"cosmos"}})])}],!1,I,"data-v-3a2951d8",null).exports,R=n("fZjL"),$=n.n(R),D={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var e=this.$route.query;0!==$()(e).length&&this.$router.replace({name:"error",params:e})}};var W=function(e){n("N0M+")},V=Object(P.a)(D,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-error"},[t("p",[this._v(this._s(this.message))])])},[],!1,W,"data-v-b5544618",null).exports;var q={name:"index",data:function(){return{baseurl:"../static/img/home/"}},metaInfo:{title:"Earth",titleTemplate:"%s - WoW",meta:[{name:"keywords",content:"earth"},{name:"description",content:"基于 Vue 的 PWA 解决方案"}]},methods:{go3d:function(){window.location.href="/Cosmos/"}},asyncData:function(){var e=l()(c.a.mark(function e(t){t.store,t.route;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};var U=function(e){n("9QD9")},G=[{path:"/appshell",component:T,meta:{},name:"appshell"},{path:"/cosmos",component:B,meta:{},name:"cosmos"},{path:"/",component:Object(P.a)(q,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-page"},[t("div",{staticClass:"wraper"},[t("div",{staticClass:"planet",on:{click:this.go3d}},[t("div",{staticClass:"earth"},[t("img",{attrs:{src:this.baseurl+"earth.png"}})]),this._v(" "),t("div",{staticClass:"rocket"},[t("div",{staticClass:"r-body"},[t("img",{attrs:{src:this.baseurl+"satellite-station.png"}})])])])])])},[],!1,U,"data-v-16f4eea7",null).exports,meta:{},name:"index"},{path:"/error",component:V,meta:{},name:"error",alias:"*"}];d.a.use(x.a);var z=function(e,t,n){if(n)return n;var r={};return e.hash&&(r.selector=e.hash),e.matched.some(function(e){return e.meta.scrollToTop})&&(r.x=0,r.y=0),r},F=G.filter(function(e){return e.keepAlive||e.meta.keepAlive}).map(function(e){return e.name});var X=n("woOf"),N=n.n(X),H=n("BO1k"),Q=n.n(H),Y=n("NYxO");d.a.use(Y.a);var K=n("VfP6"),J=K.keys(),Z={},ee=!0,te=!1,ne=void 0;try{for(var re,ae=Q()(J);!(ee=(re=ae.next()).done);ee=!0){var oe=re.value;if("./index.js"===oe){Z=ve(oe);break}}}catch(e){te=!0,ne=e}finally{try{!ee&&ae.return&&ae.return()}finally{if(te)throw ne}}if("function"!=typeof Z){Z.modules=Z.modules||{};var ie=!0,se=!1,ce=void 0;try{for(var ue,le=Q()(J);!(ie=(ue=le.next()).done);ie=!0){var de=ue.value;if("./index.js"!==de){var he=de.replace(/^\.\//,"").replace(/\.js$/,""),fe=he.split("/"),pe=we(Z,fe);pe[he=fe.pop()]=ve(de),pe[he].namespaced=!0}}}catch(e){se=!0,ce=e}finally{try{!ie&&le.return&&le.return()}finally{if(se)throw ce}}}var me=Z instanceof Function?Z:function(){return new Y.a.Store(N()({},Z,{state:Z.state instanceof Function?Z.state():{}}))};function ve(e){var t=K(e),n=t.default||t;if(n.commit)throw new Error("[lavas] store/"+e.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+e.replace("./",""));return n}function we(e,t){if(1===t.length)return e.modules;var n=t.shift(),r=e.modules[n]=e.modules[n]||{};return r.namespaced=!0,r.modules=r.modules||{},we(r,t)}var ye={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(e){this.show=!0},handleRefresh:function(){window.location.reload()}}};var Se=function(e){n("YX19")},je={name:"app",components:{UpdateToast:Object(P.a)(ye,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"popup"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[t("span",[this._v(this._s(this.text))]),this._v(" "),t("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[t("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,Se,"data-v-4364d9fc",null).exports},computed:j()({},Object(Y.c)("pageTransition",{pageTransitionType:function(e){return e.type},pageTransitionEffect:function(e){return e.effect}}),Object(Y.c)("scrollBehavior",{scrollPostionMap:function(e){return e.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var e=this.$route,t=e.name,n=e.params,r=$()(n);return r.length?t+r.reduce(function(e,t){return e+n[t]},""):null}}),data:function(){return{keepAlivePages:F}},methods:j()({},Object(Y.b)("scrollBehavior",["savePageScrollPosition"]),{restoreContainerScrollPosition:function(e,t){e.classList.add("app-view-scroll-enabled"),e.scrollTop=t},restoreBodyScrollPosition:function(e,t){e.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=t},handleBeforeEnter:function(e){var t=this,n=e.dataset.pageId,r=(this.scrollPostionMap[n]||{}).y,a=void 0===r?0:r;d.a.nextTick(function(){t.restoreContainerScrollPosition(e,a)})},handleAfterEnter:function(e){var t=e.dataset.pageId,n=(this.scrollPostionMap[t]||{}).y,r=void 0===n?0:n;this.restoreBodyScrollPosition(e,r)},handleBeforeLeave:function(e){var t=e.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(e,n),this.savePageScrollPosition({pageId:t,scrollPosition:{y:n}})}})};var ge=function(e){n("maet")},be=Object(P.a)(je,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.pageTransitionEffect},on:{"before-enter":e.handleBeforeEnter,"after-enter":e.handleAfterEnter,"before-leave":e.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(e.keepAlivePages)}},[n("router-view",{key:e.routerViewKey,class:["app-view",e.pageTransitionClass],attrs:{"data-page-id":e.$route.fullPath}})],1)],1),e._v(" "),n("update-toast")],1)},[],!1,ge,null,null).exports;d.a.use(b.a),d.a.config.productionTip=!1;var xe={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){e.show=!1,e.$nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var ke=function(e){n("Regk")},Pe=Object(P.a)(xe,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,ke,"data-v-2e9576fc",null).exports,Te=n("p5k0"),Ee=n.n(Te),_e=n("XGXE"),Oe=n.n(_e);n("MU8w"),n("CJsk");Ee.a.shim(),Oe.a.shim();var Me=d.a.prototype.$loading=new d.a(Pe).$mount(),Ce=function(){var e=function(){var e=new x.a({mode:"history",base:"/",scrollBehavior:z,routes:G});return e.beforeEach(function(t,n,r){e.app.$store&&e.app.$store.state.pageTransition.enable&&(e.app.$store.commit("pageTransition/setType","fade"),e.app.$store.commit("pageTransition/setEffect","fade")),r()}),e}(),t=me();return{App:d.a.extend(j()({router:e,store:t},be)),router:e,store:t}}(),Ae=Ce.App,Le=Ce.router,Ie=Ce.store,Be=y.a.build,Re=Be.ssr,$e=Be.cssExtract,De=y.a.middleware,We=void 0===De?{}:De,Ve=y.a.skeleton,qe=Ve.enable,Ue=Ve.asyncCSS,Ge=void 0;window.__INITIAL_STATE__&&Ie.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(Me.$el),d.a.mixin({beforeRouteUpdate:function(){var e=l()(c.a.mark(function e(t,n,r){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=this.$options.asyncData)?(Me.start(),a.call(this,{store:this.$store,route:t}).then(function(){Me.finish(),r()}).catch(r)):r();case 2:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()});var ze=!0;if(function(){var e=this;Le.beforeEach(function(){var t=l()(c.a.mark(function t(n,r,a){var o,s,u,l,d,v,w;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(ze||n.path!==r.path){e.next=2;break}return e.abrupt("return",a());case 2:return ze=!1,o=Le.getMatchedComponents(n),s=[].concat(i()(We.all||[]),i()(We.client||[]),i()(o.filter(function(e){var t=e.middleware;return!!t}).reduce(function(e,t){var n=t.middleware;return e.concat(n)},[]))),e.next=7,f(s);case 7:if(u=e.sent,!(l=s.find(function(e){return"function"!=typeof u[e]}))){e.next=11;break}throw new Error("Unknown middleware "+l);case 11:return d=!1,v=p({to:n,from:r,store:Ie,next:function(e){if(Me.finish&&Me.finish(),!d){if(d=!0,e.external)return e.query=Object(h.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:""),window.location.replace(e.path),a();a(e)}}},Ge),w=s.map(function(e){return u[e]}),e.next=17,m(w,v);case 17:d||a();case 18:case"end":return e.stop()}},t,e)}));return function(e,n,r){return t.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&Re)Ge=new Ae,Le.onReady(function(){Xe(),Ge.$mount("#app")});else{var Fe=qe&&Ue&&$e;window.mountLavas=function(){setTimeout(function(){var e=document.querySelector("#app");e&&(e.innerHTML=""),Ge.$mount("#app")},0)},Xe(),Ge=new Ae,(Re||!Fe||Fe&&window.STYLE_READY)&&window.mountLavas()}function Xe(){var e=this;Le.beforeResolve(function(t,n,r){var o=Le.getMatchedComponents(t),i=Le.getMatchedComponents(n),s=!1,u=o.filter(function(e,t){return s||(s=i[t]!==e)});if(!u.length)return r();Me.start(),a.a.all(u.filter(function(e){return e.asyncData&&(!e.asyncDataFetched||!t.meta.keepAlive)}).map(function(){var n=l()(c.a.mark(function n(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.asyncData({store:Ie,route:t});case 2:r.asyncDataFetched=!0;case 3:case"end":return e.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}())).then(function(){Me.finish(),r()}).catch(r)})}},zlUM:function(e,t){}},[0]);
//# sourceMappingURL=index.7a751e71.js.map