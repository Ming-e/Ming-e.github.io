if(document.body.clientWidth>992){function getBasicInfo(){var o=$(window).height();var r=$("body")[0].scrollHeight;var e=$(window).scrollTop();var n=r-o;var i=e/(r-o)*100;return{ViewH:o,DocH:r,ScrollTop:e,Band_H:i,S_V:n}}function show(o){if(o.ScrollTop>.001){$(".neko").css("display","block")}else{$(".neko").css("display","none")}}(function(o){o.fn.nekoScroll=function(r){var e={top:"0",scroWidth:6+"px",z_index:9999,zoom:.9,borderRadius:5+"px",right:60+"px",nekoImg:"https://bu.dusays.com/2022/07/20/62d812db74be9.png",hoverMsg:"喵喵喵~",color:"#6f42c1",during:500,blog_body:"body"};var n=o.extend(e,r);var i=this.prop("className")!==""?"."+this.prop("className"):this.prop("id")!==""?"#"+this.prop("id"):this.prop("nodeName");if(o(".neko").length==0){this.after('<div class="neko" id='+n.nekoname+' data-msg="'+n.hoverMsg+'"></div>')}let a=getBasicInfo();o(i).css({position:"fixed",width:n.scroWidth,top:n.top,height:a.Band_H*n.zoom*a.ViewH*.01+"px","z-index":n.z_index,"background-color":n.bgcolor,"border-radius":n.borderRadius,right:n.right,"background-image":"url("+n.scImg+")","background-image":"-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)","border-radius":"2em","background-size":"contain"});o("#"+n.nekoname).css({position:"fixed",top:a.Band_H*n.zoom*a.ViewH*.01-50+"px","z-index":n.z_index*10,right:n.right,"background-image":"url("+n.nekoImg+")"});show(getBasicInfo());o(window).scroll((function(){let r=getBasicInfo();show(r);o(i).css({position:"fixed",width:n.scroWidth,top:n.top,height:r.Band_H*n.zoom*r.ViewH*.01+"px","z-index":n.z_index,"background-color":n.bgcolor,"border-radius":n.borderRadius,right:n.right,"background-image":"url("+n.scImg+")","background-image":"-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)","border-radius":"2em","background-size":"contain"});o("#"+n.nekoname).css({position:"fixed",top:r.Band_H*n.zoom*r.ViewH*.01-50+"px","z-index":n.z_index*10,right:n.right,"background-image":"url("+n.nekoImg+")"});if(r.ScrollTop==r.S_V){o("#"+n.nekoname).addClass("showMsg")}else{o("#"+n.nekoname).removeClass("showMsg");o("#"+n.nekoname).attr("data-msg",n.hoverMsg)}}));this.click((function(o){btf.scrollToDest(0,500)}));o("#"+n.nekoname).click((function(){btf.scrollToDest(0,500)}));return this}})(jQuery);$(document).ready((function(){$("#myscoll").nekoScroll({bgcolor:"rgb(0 0 0 / .5)",borderRadius:"2em",zoom:.9})}))}