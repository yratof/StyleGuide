function supportsSVG(){return!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect}if(window.getComputedStyle||(window.getComputedStyle=function(t){return this.el=t,this.getPropertyValue=function(e){var n=/(\-([a-z]){1})/g;return"float"===e&&(e="styleFloat"),n.test(e)&&(e=e.replace(n,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this}),jQuery(document).ready(function($){var t=function(){min_width("30.0625em"),min_width("30.0625em"),min_width("48em"),min_width("64em")};$(window).resize(t),t()}),!supportsSVG())for(var imgs=document.getElementsByTagName("img"),dotSVG=/.*\.svg$/,i=0;i!==imgs.length;++i)imgs[i].src.match(dotSVG)&&(imgs[i].src=imgs[i].src.slice(0,-3)+"png");!function(t){function e(){o.setAttribute("content",u),m=!0}function n(){o.setAttribute("content",c),m=!1}function i(i){l=i.accelerationIncludingGravity,s=Math.abs(l.x),d=Math.abs(l.y),g=Math.abs(l.z),!t.orientation&&(s>7||(g>6&&8>d||8>g&&d>6)&&s>5)?m&&n():m||e()}if(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1){var r=t.document;if(r.querySelector){var o=r.querySelector("meta[name=viewport]"),a=o&&o.getAttribute("content"),c=a+",maximum-scale=1",u=a+",maximum-scale=10",m=!0,s,d,g,l;o&&(t.addEventListener("orientationchange",e,!1),t.addEventListener("devicemotion",i,!1))}}}(this);