!function(e,t,n){"use strict";e.ui||(e.ui={});var o=e.ui;o.modal=function(e){var n,o=t.Deferred(),a={className:"",width:440,height:400,mask:!0,showCancel:!0,showFooter:!0,canClose:!0,canCancel:!0,title:"",content:"",submitBtnText:"确定",cancelBtnText:"取消"},i=t.extend({},a,e),s='<div class="modal '+i.className+'" style="width: '+i.width+"px; height: "+i.height+'px;"><div class="modal-header"><h3 class="modal-title">'+i.title+'</h3><button type="button" class="modal-close" title="关闭"><i class="icon icon-close"></i></button></div><div class="modal-body">'+(i.content?i.content:"")+"</div>"+(i.showFooter?'<div class="modal-footer"><div class="modal-control">'+(i.showCancel?'<button type="button" class="modal-cancel">'+i.cancelBtnText+"</button>":"")+'<button type="button" class="modal-submit">'+i.submitBtnText+"</button></div></div>":"")+"</div>";n=i.mask?'<div class="modal-mask">'+s+"</div>":s;var c=t(n);return c.appendTo(document.body),i.canCancel=i.canClose,c.find(".modal-header").parent().addClass("modal-center").css({"margin-left":"-"+i.width/2+"px","margin-top":-c.find(".modal-header").parent().height()/2+"px"}),i.canCancel||c.find(".modal-cancel").remove(),i.canClose||c.find(".modal-close").remove(),c.find(".modal-submit").on("click",function(){var e=!0;return"function"==typeof i.onSubmit&&(e=i.onSubmit(c)),("undefined"==typeof e||e)&&o.resolve(c),!1}),c.find(".modal-cancel").on("click",function(){var e=!0;return"function"==typeof i.onCancel&&(e=i.onCancel(c)),("undefined"==typeof e||e)&&o.reject(c),!1}),c.find(".modal-close").on("click",function(){var e=!0,t=!1;return i.onClose||(i.onClose=i.onCancel,t=!0),"function"==typeof i.onClose&&(e=i.onClose(c)),t&&("undefined"==typeof e||e)&&o.reject(c),!1}),"function"==typeof i.onShow&&i.onShow(c),o},o.tips=function(e){var n={className:"",width:240,height:100,content:"",delay:2e3,onClose:function(){}},o=t.extend({},n,e),a='<div class="ui-tips" style="width:'+o.width+"px; height:"+o.height+'px;">'+o.content+"</div>";t(document).find(".ui-tips").remove();var i=t(a);i.appendTo(document.body),i.addClass("tips-center").css({"margin-left":"-"+o.width/2+"px","margin-top":-t(a).height()/2+"px"}),setTimeout(function(){t(document).find(".ui-tips").fadeOut(300).remove(),o.onClose&&o.onClose()},o.delay)},o.snsShare={snsType:["qq","qzone","weixin","weibo","qqweibo","douban","facebook","twitter"],share:function(e){var n={type:"weixin",url:"",text:"",image:"",nourl:!1,nosummary:!0},a=t.extend({},n,e);if(a.url||a.nourl||(a.url=location.href),"weixin"!==a.type){var i="",s={text:"text",url:"url",image:"image"},c={};switch(a.type){case"weibo":i="http://service.weibo.com/share/share.php?",s.text="title",s.image="pic";break;case"qzone":i="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?",s.image="pics",s.text="desc",a.nosummary&&(c.summary=" "),a.url||(a.url=location.href),/https?:\/\/idesign.qq.com/.test(a.url)&&(a.url="http://idesign.qq.com");break;case"qqweibo":i="http://share.v.t.qq.com/index.php?c=share&a=index&",s.image="pic",s.text="title";break;case"qq":i="http://connect.qq.com/widget/shareqq/index.html?source=shareqq&",s.text="desc",c.title="分享给您（来自腾讯设计导航http://idesign.qq.com）",a.url||(a.url=location.href),/https?:\/\/idesign.qq.com/.test(a.url)&&(a.url="http://idesign.qq.com"),a.text=a.text.replace(/((https?:\/\/|www\.)[\w_\.\/\%\&\?\-=:]+)/g,"");break;case"douban":i="http://www.douban.com/share/service?",s.url="href",s.text="comment",c.name="分享给大家（来自腾讯设计导航http://idesign.qq.com）";break;case"facebook":i="https://www.facebook.com/sharer/sharer.php?",s.url="u";break;case"twitter":i="https://twitter.com/intent/tweet?source=webclient&"}var r=function(){var e=[];for(var t in s)a[t]&&e.push(s[t]+"="+encodeURIComponent(a[t]));for(var n in c)e.push(n+"="+encodeURIComponent(c[n]));return e.join("&")};a.replace?location.href=i+r():window.open(i+r())}else o.modal({showFooter:!1,width:300,height:380,content:'<div style="text-align:center"><img src="/static/images/qr.png"/></div>',onClose:function(e){e.remove()}})}},o.shareFactory={create:function(e,n){var o="";o=t.map(n.type,function(e){return'<a href="javascript:;" class="share-item share-'+e+'" data-type="'+e+'" title="分享到'+e+'">分享到'+e+"</a>"}).join(""),e.addClass("share-list").data(n).html(o),this.bind(e)},bind:function(){var e={};return function(n){t.each(["url","text","image","nourl","nosummary"],function(t,o){var a=n.data(o)||n.attr("data-"+o);("false"===a||"0"===a)&&(a=!1),e[o]=a}),n.find(".share-item").on("click",function(n){var a=t(this);e.type=a.data("type")||a.attr("data-type"),o.snsShare.share(e),n.preventDefault()})}}()}}(window,jQuery);