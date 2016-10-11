!function(e){function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="./",n(0)}([function(e,n,t){e.exports=t(8)},function(e,n){e.exports=PIXI},function(e,n,t){"use strict";function a(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(1),s=t(53),g=a(s),c=null,l=null,u=function(){function e(){i(this,e)}return r(e,null,[{key:"load",value:function(){for(var n in g["default"])o.loader.add(n,g[n]);o.loader.load(),o.loader.once("complete",e._onComplete),o.loader.once("progress",e._onProgress)}},{key:"texture",value:function(e){return o.loader.resources[e].texture}},{key:"_onComplete",value:function(e,n){c&&c(e,n)}},{key:"_onProgress",value:function(e,n){l&&l(e,n)}},{key:"onComplete",set:function(e){c=e}},{key:"onProgress",set:function(e){l=e}}]),e}();n["default"]=u},function(e,n){e.exports={background:-100,"character-hair-front":200,"character-body":100,"character-hair-back":50,"gem-glowing":151,gem:150,glowing:200}},function(e,n,t){function a(e){return t(i(e))}function i(e){return r[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var r={"./background/cave_bottom.svg":15,"./background/cave_left.svg":16,"./background/cave_right.svg":17,"./background/cave_top.svg":18,"./background/fg.png":19,"./flare.png":20,"./gem_icon.png":21,"./gem_icon_alt_l.png":22,"./gem_icon_alt_r.png":23,"./icon_close.svg":24,"./landing/bg.jpg":25,"./landing/bg_origin.jpg":26,"./landing/char-body.png":27,"./landing/char-hair-back.png":28,"./landing/char-hair-front-1.png":29,"./landing/char-hair-front-2.png":30,"./landing/char-hair.png":31,"./landing/fg.png":32,"./landing/gem.png":33,"./landing/gem_glowing.png":34,"./landing/glowing.png":35,"./landing/glowing_2.png":36,"./logo/gold_MS.svg":37,"./logo/gold_gandi.svg":38,"./logo/platinum_5xruby.svg":39,"./logo/platinum_akatsuki.svg":40,"./logo/ruby_shopmatic.svg":41,"./logo/silver_5FPRO.svg":42,"./mobile_nav.svg":43,"./nav_element.png":44,"./nav_element_hover.png":45,"./news/1011-cfpclose.jpg":46,"./social/email.png":47,"./social/fb.png":48,"./social/twitter.png":49,"./speakers/luba.jpg":50,"./speakers/matz.png":51,"./speakers/rkh.jpg":52};a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=4},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(1),s=t(2),g=a(s),c=t(6),l=a(c),u=t(7),d=a(u),p=1280,h=720,f=function(){function e(n){i(this,e);var t=document.body.getBoundingClientRect().width,a=Math.ceil(9*t/16);this.$container=document.querySelector(n),this.renderer=new o.autoDetectRenderer(t,a,{transparent:!0,antialias:!0,autoResize:!0}),this.stage=new o.Container,this.stage.scale.x=t/p,this.stage.scale.y=a/h,this.$container.appendChild(this.renderer.view),this._objects=[],this._lastFrameTime=(new Date).getTime(),this._currentFrameTime=(new Date).getTime(),this._delta=0,g["default"].load(),g["default"].onComplete=this.prepareStage.bind(this),g["default"].onProgress=this.updateLoadingState.bind(this),window.addEventListener("resize",this.onResize.bind(this))}return r(e,[{key:"onResize",value:function(){var e=document.body.getBoundingClientRect().width,n=Math.ceil(9*e/16);this.renderer.resize(e,n),this.stage.scale.x=e/p,this.stage.scale.y=n/h}},{key:"animate",value:function(){var e=this;this._lastFrameTime=this._currentFrameTime,this._currentFrameTime=(new Date).getTime(),this._delta=this._currentFrameTime-this._lastFrameTime,this.renderer.render(this.stage),this._objects.forEach(function(n){n.update&&n.update(e._currentFrameTime,e._delta)}),requestAnimationFrame(function(){e.animate()})}},{key:"prepareStage",value:function(e,n){this.add(new d["default"](this.stage)),this.add(new l["default"](this.stage,"frontground")),this.add(new l["default"](this.stage,"glowing",o.BLEND_MODES.LUMINOSITY)),this.add(new l["default"](this.stage,"glowing2",o.BLEND_MODES.LUMINOSITY)),this.animate()}},{key:"updateLoadingState",value:function(e,n){}},{key:"add",value:function(e){this._objects.push(e)}}]),e}();n["default"]=f},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(2),s=a(o),g=t(3),c=a(g),l=function u(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;i(this,u),this.sprite=new r.Sprite(s["default"].texture(n)),this.sprite.zOrder=c["default"][n]||0,this.sprite.blendMode=t,e.addChild(this.sprite)};n["default"]=l},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(1),s=t(2),g=a(s),c=t(3),l=a(c),u=function(){function e(n){i(this,e),this.character=new o.Container,this.character.pivot.set(692,0),this.character.x=692,this.hairFront=new o.Container,this.gem=new o.Container,this.hairFrontA=new o.Sprite(g["default"].texture("character-hair-front-a")),this.hairFrontB=new o.Sprite(g["default"].texture("character-hair-front-b")),this.hairBack=new o.Sprite(g["default"].texture("character-hair-back")),this.body=new o.Sprite(g["default"].texture("character-body")),this.gemBody=new o.Sprite(g["default"].texture("gem")),this.gemGlowing=new o.Sprite(g["default"].texture("gem-glowing")),this.hairFront.zOrder=l["default"]["character-hair-front"],this.hairBack.zOrder=l["default"]["character-hair-back"],this.body.zOrder=l["default"]["character-body"],this.gem.zOrder=l["default"].gem,this.gemBody.zOrder=l["default"].gem,this.gemGlowing.zOrder=l["default"]["gem-glowing"],this.gem.pivot.set(570,0),this.gem.x=570,this.gemGlowing.blendMode=o.BLEND_MODES.LUMINOSITY,this.hairFront.addChild(this.hairFrontB),this.hairFront.addChild(this.hairFrontA),this.character.addChild(this.hairBack),this.character.addChild(this.body),this.character.addChild(this.hairFront),this.character.addChild(this.gem),this.gem.addChild(this.gemBody),this.gem.addChild(this.gemGlowing),n.addChild(this.character)}return r(e,[{key:"update",value:function(e,n){this.animateHair(e),this.animateCharacter(e),this.animateGem(e)}},{key:"animateGem",value:function(e){this.gem.y=15*Math.sin(e/1500)+10,this.gem.skew.set(0,.05*Math.cos(e/500)),this.gemGlowing.alpha=(Math.cos(e/1e3)+1)/2}},{key:"animateCharacter",value:function(e){this.character.y=5*Math.cos(e/750)+10,this.character.skew.set(0,.015*Math.sin(e/500))}},{key:"animateHair",value:function(e){var n=.005*Math.sin(e/1e3*2),t=.001*Math.cos(e/500)+.002;this.hairBack.skew.set(2*n,2*t),this.hairFrontA.skew.set(n/2,t/2)}}]),e}();n["default"]=u},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}t(14),t(10),t(12);var i=t(9),r=a(i),o=t(11),s=a(o),g=t(5),c=a(g);!function(){var e=function(){console.log("Welcome to RubyConf 2016");new c["default"]("#landing"),(0,r["default"])("#map");$(".schedule").tabs(),(0,s["default"])(".nav a",!0),$(".super__title").delay(1e3).animate({opacity:1},1e3,"easeInOutCubic"),$(".super__sub").delay(2e3).animate({opacity:.8},1e3,"easeInOutCubic")};document.addEventListener("DOMContentLoaded",e)}()},function(e,n){"use strict";function t(e){var n=document.querySelector(e),t=new google.maps.Map(n,{center:a,zoom:15,streetViewControl:!1,scrollwheel:!1}),r=new google.maps.InfoWindow({content:i}),o=new google.maps.Marker({position:a});t.panBy(0,-100),o.setMap(t),r.open(t,o),o.addListener("click",function(){r.open(t,o)})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=t;var a={lat:25.0423,lng:121.61455},i='\n    <div class="map-content">\n        <h3 class="map-content__title">\n            Academia Sinica, Taiwan<br />\n            中央研究院 學術活動中心\n        </h3>\n        <p class="map-content__address">\n            128 Academia Road, Section 2<br />\n            Nankang, Taipei 11529, Taiwan\n        </p>\n        <p class="map-content__address is-zh">台北市南港區研究院路二段128號</p>\n    </div>\n    '},function(e,n,t){"use strict";var a=["landing/bg.jpg","landing/char-body.png","landing/char-hair.png","background/cave_right.svg","background/cave_left.svg","background/cave_top.svg","background/cave_bottom.svg","nav_element.png","nav_element_hover.png","social/fb.png","social/twitter.png","social/email.png"];a.forEach(function(e){t(4)("./"+e)}),t(13)},function(e,n){"use strict";function t(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=$(document),i=$("html, body"),r=$(e),o={};r.each(function(e,n){o[n.hash||"body"]=$(n.hash||"body")}),r.on("click",function(e){a.off("scroll"),r.removeClass("active"),$(n).addClass("active");var t=e.target.hash;i.stop().animate({scrollTop:o[t].offset().top+2},500,"swing")});var s={},g=!1,c=function(){if(!g){var e=a.scrollTop();r.each(function(n,t){var a=t.hash||"body",i=o[a],r=i.position().top-100,g=i.position().top+i.height(),c=s[a];c||(s[a]=c=$(t).parent()),c.removeClass("is-active"),r<=e&&g>e&&c.addClass("is-active")}),g=!0,setTimeout(function(){g=!1},10)}};t&&window.addEventListener("scroll",c)}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=t},function(e,n){},function(e,n,t){e.exports=t.p+"CNAME"},function(e,n,t){e.exports=t.p+"index.html"},function(e,n,t){e.exports=t.p+"images/background/cave_bottom.svg"},function(e,n,t){e.exports=t.p+"images/background/cave_left.svg"},function(e,n,t){e.exports=t.p+"images/background/cave_right.svg"},function(e,n,t){e.exports=t.p+"images/background/cave_top.svg"},function(e,n,t){e.exports=t.p+"images/background/fg.png"},function(e,n,t){e.exports=t.p+"images/flare.png"},function(e,n,t){e.exports=t.p+"images/gem_icon.png"},function(e,n,t){e.exports=t.p+"images/gem_icon_alt_l.png"},function(e,n,t){e.exports=t.p+"images/gem_icon_alt_r.png"},function(e,n,t){e.exports=t.p+"images/icon_close.svg"},function(e,n,t){e.exports=t.p+"images/landing/bg.jpg"},function(e,n,t){e.exports=t.p+"images/landing/bg_origin.jpg"},function(e,n,t){e.exports=t.p+"images/landing/char-body.png"},function(e,n,t){e.exports=t.p+"images/landing/char-hair-back.png"},function(e,n,t){e.exports=t.p+"images/landing/char-hair-front-1.png"},function(e,n,t){e.exports=t.p+"images/landing/char-hair-front-2.png"},function(e,n,t){e.exports=t.p+"images/landing/char-hair.png"},function(e,n,t){e.exports=t.p+"images/landing/fg.png"},function(e,n,t){e.exports=t.p+"images/landing/gem.png"},function(e,n,t){e.exports=t.p+"images/landing/gem_glowing.png"},function(e,n,t){e.exports=t.p+"images/landing/glowing.png"},function(e,n,t){e.exports=t.p+"images/landing/glowing_2.png"},function(e,n,t){e.exports=t.p+"images/logo/gold_MS.svg"},function(e,n,t){e.exports=t.p+"images/logo/gold_gandi.svg"},function(e,n,t){e.exports=t.p+"images/logo/platinum_5xruby.svg"},function(e,n,t){e.exports=t.p+"images/logo/platinum_akatsuki.svg"},function(e,n,t){e.exports=t.p+"images/logo/ruby_shopmatic.svg"},function(e,n,t){e.exports=t.p+"images/logo/silver_5FPRO.svg"},function(e,n,t){e.exports=t.p+"images/mobile_nav.svg"},function(e,n,t){e.exports=t.p+"images/nav_element.png"},function(e,n,t){e.exports=t.p+"images/nav_element_hover.png"},function(e,n,t){e.exports=t.p+"images/news/1011-cfpclose.jpg"},function(e,n,t){e.exports=t.p+"images/social/email.png"},function(e,n,t){e.exports=t.p+"images/social/fb.png"},function(e,n,t){e.exports=t.p+"images/social/twitter.png"},function(e,n,t){e.exports=t.p+"images/speakers/luba.jpg"},function(e,n,t){e.exports=t.p+"images/speakers/matz.png"},function(e,n,t){e.exports=t.p+"images/speakers/rkh.jpg"},function(e,n){e.exports={background:"images/landing/bg.jpg","character-body":"images/landing/char-body.png","character-hair-front-a":"images/landing/char-hair-front-1.png","character-hair-front-b":"images/landing/char-hair-front-2.png","character-hair-back":"images/landing/char-hair-back.png",frontground:"images/landing/fg.png",gem:"images/landing/gem.png","gem-glowing":"images/landing/gem_glowing.png",glowing:"images/landing/glowing.png",glowing2:"images/landing/glowing_2.png"}}]);