var pt=function(){var e={},n={},t="",o=null,r=625,i=400,a="",l="",c=null,d={_counter:0,_uid:function(){return"h"+d._counter++},add:function(e,n,t){if(document.addEventListener)e.addEventListener(n,t,!1);else if(document.attachEvent){if(-1!=d._find(e,n,t))return;var o=function(n){n||(n=window.event);var o={_event:n,type:n.type,target:n.srcElement,currentTarget:e,relatedTarget:n.fromElement?n.fromElement:n.toElement,eventPhase:n.srcElement==e?2:3,clientX:n.clientX,clientY:n.clientY,screenX:n.screenX,screenY:n.screenY,altKey:n.altKey,ctrlKey:n.ctrlKey,shiftKey:n.shiftKey,keyCode:n.keyCode,origin:n.origin,data:n.data,stopPropagation:function(){this._event.cancelBubble=!0},preventDefault:function(){this._event.returnValue=!1}};Function.prototype.call?t.call(e,o):(e._currentHandler=t,e._currentHandler(o),e._currentHandler=null)};e.attachEvent("on"+n,o);var r={element:e,eventType:n,handler:t,wrappedHandler:o},i=e.document||e,a=i.parentWindow,l=d._uid();a._allHandlers||(a._allHandlers={}),a._allHandlers[l]=r,e._handlers||(e._handlers=[]),e._handlers.push(l),a._onunloadHandlerRegistered||(a._onunloadHandlerRegistered=!0,a.attachEvent("onunload",d._removeAllHandlers))}},remove:function(e,n,t){if(document.addEventListener)e.removeEventListener(n,t,!1);else if(document.attachEvent){var o=d._find(e,n,t);if(-1==o)return;var r=e.document||e,i=r.parentWindow,a=e._handlers[o],l=i._allHandlers[a];e.detachEvent("on"+n,l.wrappedHandler),e._handlers.splice(o,1),delete i._allHandlers[a]}},_find:function(e,n,t){var o=e._handlers;if(!o)return-1;for(var r=e.document||e,i=r.parentWindow,a=o.length-1;a>=0;a--){var l=o[a],c=i._allHandlers[l];if(c.eventType==n&&c.handler==t)return a}return-1},_removeAllHandlers:function(){var e=this;for(id in e._allHandlers){var n=e._allHandlers[id];n.element.detachEvent("on"+n.eventType,n.wrappedHandler),delete e._allHandlers[id]}},src:function(e){return e?e.target:event.srcElement},stopPropagation:function(e){e?e.stopPropagation():event.cancelBubble=!0}},s=function(e){var n=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return n?decodeURIComponent(n[2]):""},u=function(e,n,t){document.cookie=e+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path="+(t?t:"/")+"; "+(n?"domain="+n+";":"")},p=function(e){var n=new Image;n.src=e},f=function(e,n){if(!(Math.random()>(n||1))){var t=location.protocol+"//ui.ptlogin2.qq.com/cgi-bin/report?id="+e+"&v="+Math.random();p(t)}},m=function(n,t){e[n]=t},h=function(n){e=n},v=function(e,t){n[e]=t},_=function(){var n=e.protocol||"http:";n+="//";var o=e.domain||"qq.com";"https:"==e.protocol&&"qq.com"!=o&&"tenpay.com"!=o&&(n="https://ssl."),t=n+"xui.ptlogin2."+o,l=t;var r=t+"/cgi-bin/xlogin?",i="";for(var a in e)"protocol"!=a&&"domain"!=a&&(i+=a+"="+encodeURIComponent(e[a])+"&");return r+=i},g=function(n,t){if(t)o=t;else{o=document.createElement("div"),document.body.appendChild(o);var r="left:50%;";r+="top:50%;",r+="position:fixed;",r+="z-index:9999;",r+="background:none;",r+="_position:absolute;",r+="_top:expression(eval(document.documentElement.scrollTop+(document.documentElement.clientHeight-this.offsetHeight)/2));",r+="_margin-top:0px;",o.style.cssText=r}o.innerHTML='<iframe name="ui_ptlogin" id="ui_ptlogin" allowtransparency="true" scrolling="no" frameborder="0" width="100%" height="100%" style="top:0; left:0;'+(1==e.border_radius?"border-radius:5px;":"")+'" src="'+n+'">'},y=function(e){var n=_();a?document.getElementById("ui_ptlogin").src=n:(g(n,e),-[1]||window.XMLHttpRequest||H(r-1,i-1)),a=n,E(),o.style.display="block"},w=function(){o.style.display="none",k()},E=function(){var n=e.maskOpacity;if(0!=n){if(!c){var t="background-color:#000;overflow:hidden;position:fixed;left:0;top:0;width:100%;height:100%;z-index:9998;opacity:"+n/100+";filter:alpha(opacity="+n+");";t+="_position:absolute;_height:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight));_width:expression(eval(document.documentElement.scrollLeft+document.documentElement.clientWidth));",c=document.createElement("div"),c.style.cssText=t,document.body.appendChild(c)}c.style.display="block"}},k=function(){c&&(c.style.display="none")},H=function(e,t){var a=o;a&&e>1&&t>1&&(r!=e||i!=t)&&("function"==typeof n.resize?n.resize(parseInt(e),parseInt(t)):(a.style.width=e+"px",a.style.height=t+"px",a.style.marginLeft=-e/2+"px",a.style.marginTop=-t/2+"px")),r=e,i=t},b=function(){w(),"function"==typeof n.close&&n.close()},x=function(e){var n={};if("undefined"!=typeof JSON)n=JSON.parse(e);else{var t=/^[\],:{}\s]*$/,o=/(?:^|:|,)(?:\s*\[)+/g,r=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,i=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;t.test(e.replace(r,"@").replace(i,"]").replace(o,""))&&(n=new Function("return "+e)())}return n},T=function(){"undefined"!=typeof window.postMessage?d.add(window,"message",function(e){var n=e.origin;if(n==l){var t=x(e.data);switch(t.action){case"close":b();break;case"resize":H(t.width,t.height)}}}):navigator.ptlogin_callback=function(e){var n=x(e);switch(n.action){case"close":b();break;case"resize":H(n.width,n.height)}}},q=function(){T(),window.setTimeout(function(){f(447926,1)},1e3)},z="",C="",L=function(){C=location.hostname.match(/\w*\.(cc|com|cn|com\.cn)$/),C=C?C[0]:"",z=location.hostname.match(/\w+(\.\w+)\.(cc|com|cn|com\.cn)$/),z=z?z[0]:"","qq.com"!=C&&(z=C)},P=function(e){var n=s("pt4_token"),t=s("skey"),o=M(t),r=s("ptcz"),i=M(r),a=e?"qq.com":C,l=("https:"==location.protocol?"https://ssl.":"http://")+"ptlogin2."+a+"/logout?";return l+="pt4_token="+n+"&pt4_hkey="+o+"&pt4_ptcz="+i+"&deep_logout=1"},M=function(e){for(var n=0,t=0,o=e.length;o>t;++t)n+=(n<<5)+e.charCodeAt(t);return 2147483647&n},I=function(){u("uin",C),u("skey",C),u("p_uin",z),u("p_skey",z),u("p_luin",z),u("p_lskey",z),u("pt4_token",z),u("pt_mbkey",C),""!=z&&""!=s("skey_m")&&(u("uin_m",z),u("skey_m",z))},K=function(e,n){L();var t=s("pt4_token"),o=s("skey"),r=s("ptcz"),i=P(n);(t||o||r)&&p(i),window.setTimeout(function(){I(),e&&e(2)},100)},R=function(e){K(e,!0)};return q(),{showPtui:y,hidePtui:w,setParam:m,setParams:h,setCallback:v,logout:K,logoutQQCom:R}}();