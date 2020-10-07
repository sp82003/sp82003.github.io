// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/FoldableTheme/widgets/HeaderController/PopupTileNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/keys dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),function(v,e,t,a,q,g,h,l,y,w,z,r){return v([y,w],{baseClass:"jimu-header-more-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"close" tabindex\x3d"0" data-dojo-attach-point\x3d"closeNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,postCreate:function(){this.nodes=[];this.pages=[];this.createCloseBtn();this.own(q(this.domNode,"keydown",e.hitch(this,function(d){a.hasClass(d.target,"close-btn")||d.keyCode!==g.ESCAPE||this.closeNode.focus()})))},startup:function(){this.viewStack=new z({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup();this.resize();this.nodes.length&&this.nodes[0].focus()},resize:function(){var d=this._calculateGridParam(),m;null!==d?(a.setStyle(this.domNode,r.getPositionStyle(d.position)),
this.nodeWidth=d.cellSize-this.margin,this.oldGridParam&&this.oldGridParam.rows===d.rows&&this.oldGridParam.cols===d.cols||(this.clearPages(),this.createPages(d)),this.nodes.forEach(e.hitch(this,function(a,m){this.setItemNodePosition(a,m,d)})),this.oldGridParam=d,m=l("div.close",this.domNode)[0],a.setStyle(m,{width:.25*this.nodeWidth+"px",height:.25*this.nodeWidth+"px"})):(this.oldGridParam=null,a.setStyle(this.domNode,r.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=
0)},setItemNodePosition:function(d,m,f){var n,e,g=48,h=16;n=0===m%f.cols?0:this.margin/2;e=m%(f.rows*f.cols)<f.cols?0:this.margin/2;m={};"number"===typeof this.nodeWidth&&(m.width=this.nodeWidth+"px",m.height=this.nodeWidth+"px");"number"===typeof n&&(window.isRTL?m.marginRight=n+"px":m.marginLeft=n+"px");"number"===typeof e&&(m.marginTop=e+"px");if(n=l("img",d)[0])f.iconScaled&&(g*=this.nodeWidth/120),a.setStyle(n,{width:g+"px",height:g+"px"});if(g=l("div.node-label",d)[0])f.showLabel?(f.iconScaled&&
(h*=this.nodeWidth/120),a.setStyle(g,{"font-size":h+"px",display:"block"})):a.setStyle(g,{"font-size":h+"px",display:"none"});a.setStyle(d,m)},clearPages:function(){t.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},this);h.empty(this.pointsNode);this.pages=[];this.nodes=[]},createPages:function(a){var d,f,n,u;d=Math.ceil(this.items.length/(a.rows*a.cols));for(f=0;f<d;f++){n=h.create("div",{"class":"page"});this.createPageItems(f,n,a);this.viewStack.addView(n);if(1<d){var x=f===
d-1;u=h.create("div",{"class":"point",role:"button",tabindex:0},this.pointsNode);this.own(q(u,"click",e.hitch(this,this._onPageNodeClick,f)));this.own(q(u,"keydown",e.hitch(this,function(a,d,f){f.keyCode===g.ENTER||f.keyCode===g.SPACE?(this._onPageNodeClick(a),l(".page.view",this.viewStack.domNode)[a].children[0].focus()):d&&!f.shiftKey&&f.keyCode===g.TAB&&f.preventDefault()},f,x)))}this.pages.push({pageNode:n,pointNode:u})}0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},
_selectPage:function(d){1<this.pages.length&&(l(".point",this.domNode).removeClass("point-selected"),a.addClass(this.pages[d].pointNode,"point-selected"));this.viewStack.switchView(this.pages[d].pageNode)},createPageItems:function(a,m,f){var d,e,g;d=this.items.length;e=f.rows*f.cols;f=(a+1)*e;g=f-d;f=Math.min(f,d);for(a*=e;a<f;a++)this.createItemNode(a,m);for(a=d;a<d+g;a++)this.createEmptyItemNode(m)},createItemNode:function(d,m){var f;d=this.items[d];f=h.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",
title:d.label,settingId:d.id,"data-widget-name":d.name,role:"button",tabindex:0},m);m=h.create("img",{src:d.icon},f);window.isRTL&&d.mirrorIconForRTL&&a.addClass(m,"jimu-flipx");h.create("div",{"class":"node-label",title:d.label,innerHTML:r.stripHTML(d.label)},f);f.config=d;this.own(q(f,"click",e.hitch(this,function(){this.onNodeClicked(f)})));this.own(q(f,"keydown",e.hitch(this,function(a){if(a.keyCode===g.ENTER||a.keyCode===g.SPACE)this.onNodeClicked(f)})));this.nodes.push(f)},createEmptyItemNode:function(a){a=
h.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",tabindex:0},a);this.own(q(a,"focus",e.hitch(this,function(a){r.isInNavMode()&&(1===this.viewStack.domNode.children.length?a.target.parentNode.children[0].focus():l(".point-selected",this.pointsNode)[0].previousSibling.focus())})));this.nodes.push(a);return a},createCloseBtn:function(){h.create("div",{role:"button","class":"close-inner jimu-main-background"},this.closeNode);this.own(q(this.closeNode,"click",e.hitch(this,function(){this.hide()})));
this.own(q(this.closeNode,"keydown",e.hitch(this,function(a){a.keyCode===g.ENTER||a.keyCode===g.SPACE||a.keyCode===g.ESCAPE?this.hide():a.shiftKey&&a.keyCode===g.TAB&&a.preventDefault()})));return this.closeNode},hide:function(){a.setStyle(this.domNode,"display","none")},show:function(){a.setStyle(this.domNode,"display","block")},onNodeClicked:function(a){this.hide()},openNodebyId:function(d){for(var e=0,f=this.nodes.length;e<f;e++){var g=this.nodes[e];if(d&&d===a.getAttr(g,"settingId"))return this.onNodeClicked(g),
g}},_calculateGridParam:function(){var d,e,f,g,h=!1,l=!0;d=a.getContentBox(jimuConfig.mapId);e=Math.min(d.w,d.h)-40;if(360<=e)g=120;else{g=Math.floor(e/3);if(10>g)return null;h=!0;80>g&&(l=!1)}e=Math.floor((d.h-40)/g);f=Math.floor((d.w-40)/g);e=4<e?4:e;e=3>e?3:e;f=3>e?3:4<f?4:f;return{rows:e,cols:f,cellSize:g,iconScaled:h,showLabel:l,position:{top:(d.h-g*e)/2,bottom:(d.h-g*e)/2,left:(d.w-g*f)/2,right:(d.w-g*f)/2,width:g*f-this.margin*(f-1)/2,height:g*e-this.margin*(e-1)/2,zIndex:111}}}})})},"themes/FoldableTheme/widgets/HeaderController/_build-generate_module":function(){define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/FoldableTheme/widgets/HeaderController/Widget.html":'\x3cdiv data-a11y-label-by\x3d"foldable_label foldable_title foldable_subtitle"\x3e\r\n  \x3c!-- solve the bug of style delay loading --\x3e\r\n  \x3cdiv class\x3d"header-section" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3ca role\x3d"link" data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n      \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n    \x3c/a\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"screen-readers-only" data-a11y-label-id\x3d"foldable_label"\x3e${label}\x3c/div\x3e\r\n      \x3ch1 class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode" data-a11y-label-id\x3d"foldable_title"\x3e\x3c/h1\x3e\r\n      \x3ch2 class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin5" data-dojo-attach-point\x3d"subtitleNode" data-a11y-label-id\x3d"foldable_subtitle"\x3e\x3c/h2\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-leading-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca role\x3d"link" href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca role\x3d"link" href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca role\x3d"link" href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-section" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/FoldableTheme/widgets/HeaderController/css/style.css":".jimu-widget-header-controller{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .header-section{height: 100%; overflow: hidden;}.jimu-widget-header-controller .container-section{height: 100%; min-width: 80px;}.jimu-widget-header-controller .logo{cursor: pointer; color: #fff;}.jimu-widget-header-controller .hide-logo{display: none;}.jimu-widget-header-controller .titles{height: 100%; overflow: hidden;}.jimu-widget-header-controller .jimu-title{text-align: center; height: 100%; margin-top: 0;}.jimu-widget-header-controller .jimu-subtitle{text-align: center; height: 100%; margin-top: 0;}.jimu-widget-header-controller .links{height: 100%; overflow: hidden; display: flex;}.jimu-widget-header-controller .dynamic-section,.jimu-widget-header-controller .signin-section{height: 100%; display: flex;}.jimu-widget-header-controller .links .jimu-link{height: 30px; margin-top: 5px;}.jimu-widget-header-controller .signin-section .jimu-link{color: #d9dde0; margin: auto 2px;}.jimu-widget-header-controller .dynamic-section .jimu-link:last-child,.jimu-widget-header-controller .signin-section .jimu-link:last-child{margin-right: 1em;}.jimu-rtl .jimu-widget-header-controller .dynamic-section .jimu-link:last-child,.jimu-rtl .jimu-widget-header-controller .signin-section .jimu-link:last-child{margin-left: 1em;}.jimu-widget-header-controller .icon-node{cursor: pointer; opacity: 0.6; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header-controller .icon-node img{height: 24px; width: 24px;}.jimu-widget-header-controller .icon-node:first-child{border: none;}.jimu-widget-header-controller .icon-node:hover{opacity: 1;}.jimu-widget-header-controller .icon-node.jimu-state-selected{background-color: rgba(0, 0, 0, 0.3); opacity: 1; border: none; border-top: 2px solid #8491a1;}.jimu-widget-header-controller .drop-triangle{position: absolute; width: 0px; height: 0px; bottom: 1px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid white;}.jimu-widget-header-controller .jimu-drop-menu{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .jimu-drop-menu .menu-item{overflow: hidden; border-top: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item:hover{background-color: rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item img{width: 24px; height: 24px; cursor: pointer; margin: 8px;}.jimu-widget-header-controller .jimu-drop-menu .menu-item .label{cursor: pointer; margin-top: 12px; font-size: 14px; color: white; min-width: 50px; text-align: center; white-space: nowrap; max-width: 300px; text-overflow: ellipsis; overflow: hidden; padding-right: 8px;}.jimu-rtl .jimu-widget-header-controller .jimu-drop-menu .menu-item .label{padding-left: 8px;}.popup-links .popup-title{}.popup-links .logo{height: 30px;}.popup-links .title{color:#fff; text-align: center; font-size: 16px; width: 71.42857142857143%; overflow: hidden; white-space: nowrap; height: 100%;}.popup-links .line{width: 100%; height: 4px; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px;}.popup-links a{color: #fff; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; overflow: hidden; display: inline-block;}.popup-links .link-section.signin a{color: #d9dde0;}.jimu-header-more-popup{position: absolute; border-radius: 2px; z-index: 111; background-color: #516070;}.jimu-header-more-popup .pages{position: relative; overflow: hidden; padding: 2px;}.jimu-header-more-popup .points{position: absolute; overflow: hidden; bottom: -15px; left: 0px; right: 0px; text-align: center; background-color: #bababa;}.jimu-header-more-popup .points-inner{overflow: hidden; display: flex; height: 20px; width: 100%; align-items: center; justify-content: center;}.jimu-header-more-popup .point{float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-nav-mode .jimu-header-more-popup .point:focus{outline: none !important; border: 2px solid #24B5CC;}.jimu-header-more-popup .point-selected{background-color: #485566;}.jimu-header-more-popup .page{position: relative; overflow: hidden;}.jimu-header-more-popup .close{position: absolute; top: -3.125%; right: -3.125%; border-radius: 50%; background-color: #697a8c; cursor: pointer; z-index: 1;}.jimu-rtl .jimu-header-more-popup .close{left: -04.46428571428571%; right: auto;}.jimu-header-more-popup .close-inner{width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background: #1d2123 url(images/close.png) no-repeat center center;}.jimu-rtl .jimu-header-more-popup .close-inner{margin-left: 0; margin-right: 10%;}.jimu-header-more-popup .icon-node{background-color: #697a8c; cursor: pointer;}.jimu-header-more-popup .icon-node.jimu-state-selected{background-color: red;}.jimu-header-more-popup img{width: 48px; height: 48px; margin: auto; margin-top: 25%; display: block;}.jimu-header-more-popup .node-label{width: 100%; text-align: center; font-size: 16px; margin-top: 5px; color: white; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block;}@media screen and (max-width:600px){.jimu-header-more-popup .node-label{font-size: 14px;}}.jimu-more-icon-cover{z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.esriPopup .titlePane {background-color: rgba(72, 85, 102, 0.9);}.jimu-widget-header-controller{display: flex; justify-content: space-between;}.jimu-widget-header-controller .header-section,.jimu-widget-header-controller .container-section {display: flex; flex-direction: row; align-items: center; flex-wrap: nowrap;}.jimu-widget-header-controller .container-section {flex-direction: row-reverse;}.jimu-widget-header-controller .titles,.jimu-widget-header-controller .links,.jimu-widget-header-controller .icon-node{flex-shrink: 0;}.jimu-widget-header-controller .icon-node{flex-basis: 40px;}",
"*now":function(v){v(['dojo/i18n!*preload*themes/FoldableTheme/widgets/HeaderController/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/aspect dojo/query dojo/on dojo/keys dijit/Tooltip dojo/Deferred dojo/mouse dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message ./PopupTileNodes dojo/NodeList-manipulate".split(" "),function(v,e,t,a,q,g,h,l,y,w,z,r,d,m,f,n,u,x,p,A,B){return v([m,f],{baseClass:"jimu-widget-header-controller jimu-main-background",
maxIconCount:-1,createMoreIcon:!1,switchableElements:{},height:40,openedId:"",moveTopOnActive:!1,postMixInProperties:function(){this.inherited(arguments);this.isRenderIdForAttrs=!0},postCreate:function(){this.inherited(arguments);a.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);this._processGroupSetting();this.switchableElements.title=this.titleNode;this.switchableElements.links=this.linksNode;this.switchableElements.subtitle=this.subtitleNode;this._handleTitleColorAndLogoLink(this.appConfig);
this.position&&this.position.height&&(this.height=this.position.height);a.setStyle(this.signInSectionNode,"display","none");this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,a.removeClass(this.logoNode,"hide-logo")):(this.logoNode.src="",a.addClass(this.logoNode,"hide-logo"));this.switchableElements.title.innerHTML=p.sanitizeHTML(this.appConfig.title?this.appConfig.title:"");this.switchableElements.subtitle.innerHTML=p.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:
"");this._createDynamicLinks(this.appConfig.links);this._setElementsSize();this.own(h(this.domNode,z.enter,e.hitch(this,function(){var b="",a=x.getServerByUrl(this.appConfig&&this.appConfig.portalUrl||"");x.isArcGIScom(a)&&(a="ArcGIS.com");a&&(b=this.nls.signInTo+" "+a);this.signinLinkNode.title=b})))},startup:function(){this.inherited(arguments);this.resize();setTimeout(e.hitch(this,this.resize),100)},onAction:function(b,a){"highLight"===b&&a&&(a=g('div[settingid\x3d"'+a.widgetId+'"]',this.domNode)[0],
this._highLight(a));"removeHighLight"===b&&this._removeHighLight()},onSignIn:function(b){this.inherited(arguments);a.setStyle(this.signinLinkNode,"display","none");a.setStyle(this.userNameLinkNode,"display","");a.setStyle(this.signoutLinkNode,"display","");this.userNameLinkNode.innerHTML=b.userId;a.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display","none"),a.setStyle(this.popupUserNameNode,"display",""),a.setStyle(this.popupSignoutNode,
"display",""),g("a",this.popupUserNameNode).html(b.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(){this.inherited(arguments);this._onSignOut(this.nls.signin);u.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(e.hitch(this,function(b){this._onSignOut(this.nls.signInTo+" "+b.name)}),e.hitch(this,function(b){console.error(b)}))},_onSignOut:function(b){a.setStyle(this.signinLinkNode,"display","");a.setAttr(this.signinLinkNode,"innerHTML",b);a.setStyle(this.userNameLinkNode,
"display","none");a.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",""),a.setAttr(this.popupSigninNode,"innerHTML",b),a.setStyle(this.popupUserNameNode,"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),g("a",this.popupUserNameNode).html(""));this.resize()},resize:function(){this._resize()},_resize:function(){var b=a.getContentBox(this.domNode);this._showSwitchableElements(["title",
"links","subtitle"]);this._createIconNodes(b);this.morePane&&this.morePane.resize();this.popupLinkNode&&a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"})},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&(a.destroy(this.moreIconPaneCoverNode),this.moreIconPaneCoverNode=null);this.popupLinkNode&&this.popupLinksVisible&&this._hidePopupLink();a.destroy(this.popupLinkNode);
this.inherited(arguments)},onAppConfigChanged:function(b,a,k){switch(a){case "attributeChange":this._onAttributeChange(b,k);break;default:return}this.appConfig=b;this.resize()},getOpenedIds:function(){this.inherited(arguments);return""===this.openedId?[]:[this.openedId]},setOpenedIds:function(b){if(0!==b.length){var a=this.getConfigById(b[0]);a&&(this.openedId&&this._switchNodeToClose(this.openedId),this.openedId=b[0],a.widgets&&"openAll"===a.openType?this._switchNodeToOpen(a.id):a.widgets||(this._getIconNodeById(a.id)?
this._switchNodeToOpen(a.id):this._showIconContent(a)))}},_onLogoLoad:function(){this.resize()},_highLight:function(b){this.hlDiv&&this._removeHighLight();if(b){var a=d.getMarginBox(b);this.hlDiv=r.create("div",{style:{position:"absolute",left:a.l+"px",top:a.t+"px",width:a.w+"px",height:a.h+"px"},"class":"icon-highlight"},b,"before")}},_removeHighLight:function(){this.hlDiv&&(r.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(b,c){"title"in c&&c.title!==this.appConfig.title&&(this.titleNode.innerHTML=
p.sanitizeHTML(c.title));"subtitle"in c&&c.subtitle!==this.appConfig.subtitle&&(this.subtitleNode.innerHTML=p.sanitizeHTML(c.subtitle));"logo"in c&&c.logo!==this.appConfig.logo&&(c.logo?(a.setAttr(this.logoNode,"src",c.logo),a.removeClass(this.logoNode,"hide-logo")):(a.removeAttr(this.logoNode,"src"),a.addClass(this.logoNode,"hide-logo")));"links"in c&&this._createDynamicLinks(c.links);this._handleTitleColorAndLogoLink(b)},_handleTitleColorAndLogoLink:function(b){b.titleColor?a.setStyle(this.titleNode,
"color",b.titleColor):a.setStyle(this.titleNode,"color","");p.themesHeaderLogoA11y(b,this.tabIndex,{link:this.logoLinkNode,logo:this.logoNode,icon:this.logoNode})},_setElementsSize:function(){a.setStyle(this.logoNode,{height:"30px"});a.setStyle(this.titleNode,{lineHeight:this.height+"px"});a.setStyle(this.subtitleNode,{lineHeight:this.height+"px"});g(".jimu-link",this.domNode).style({lineHeight:this.height-10+"px"})},_processGroupSetting:function(){t.forEach(this.appConfig.widgetPool.groups,function(b){var a;
a:{if(this.config.groupSetting)for(a=0;a<this.config.groupSetting.length;a++)if(this.config.groupSetting[a].label===b.label){a=this.config.groupSetting[a].type;break a}a="openAll"}b.openType=a},this)},_createDynamicLinks:function(b){a.empty(this.dynamicLinksNode);t.forEach(b,function(b){a.create("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",innerHTML:p.sanitizeHTML(b.label),"class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+"px"},tabindex:this.tabIndex},
this.dynamicLinksNode)},this)},_showSwitchableElements:function(b){var c=this.switchableElements,k;for(k in c)if(c.hasOwnProperty(k))if(-1<b.indexOf(k)){var d=a.hasClass(c[k],"links")?"flex":"block";a.setStyle(c[k],"display",d);c[k].visible=!0}else a.setStyle(c[k],"display","none"),c[k].visible=!1;this.logoClickHandle&&this.logoClickHandle.remove();this.logoKeydownHandle&&this.logoKeydownHandle.remove();0>b.indexOf("links")?(a.setAttr(this.logoLinkNode,"tabIndex",this.tabIndex),this.logoClickHandle=
h(this.logoNode,"click",e.hitch(this,this._onLogoClick)),this.logoKeydownHandle=h(this.logoLinkNode,"keydown",e.hitch(this,this._onLogoKeydown))):this.popupLinksVisible&&this._hidePopupLink()},_switchSignin:function(){var b=n.getPortalCredential(this.appConfig.portalUrl);if(b)this.onSignIn(b);else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&a.destroy(this.popupLinkNode);this.popupLinkNode=this._createPopupLinkNode();this.popupLinksVisible?this._hidePopupLink():this._showPopupLink()},
_onLogoKeydown:function(b){b.keyCode===l.ENTER&&this._onLogoClick()},_hidePopupLink:function(){a.setStyle(this.popupLinkNode,"display","none");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:0}):a.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){a.setStyle(this.popupLinkNode,"display","");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:a.getContentBox(this.popupLinkNode).w+"px"}):a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+
"px"});p.isInNavMode()&&(this.appConfig.links?g(".jimu-link a",this.popupLinkNode)[0].focus():g(".jimu-popup-link-close-btn",this.popupLinkNode)[0].focus());this.popupLinksVisible=!0},_createPopupLinkNode:function(){var b,c;a.getContentBox(jimuConfig.mainPageId);b=a.create("div",{"class":"popup-links jimu-main-background",style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?a.setStyle(b,{right:0,left:"50px"}):a.setStyle(b,{left:0,right:"50px"});c=a.create("div",
{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},b);var k=a.create("div",{"class":"jimu-float-leading jimu-leading-margin1 jimu-popup-link-close-btn",role:"button","aria-label":window.jimuNls.common.close,tabindex:"0",style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},c);this.own(h(k,"click",e.hitch(this,function(){this._hidePopupLink()})));this.own(h(k,"keydown",e.hitch(this,function(b){p.isInNavMode()&&(b.keyCode===l.ENTER||b.keyCode===l.SPACE||b.keyCode===
l.ESCAPE?(this._hidePopupLink(),this.logoLinkNode.focus()):b.keyCode===l.TAB&&!b.shiftKey&&0<this.appConfig.links.length||b.preventDefault())})));this.own(h(b,"keydown",e.hitch(this,function(c){p.isInNavMode()&&c.keyCode===l.ESCAPE&&!a.hasClass(b,"jimu-popup-link-close-btn")&&k.focus()})));var d=a.create("div",{"class":"title jimu-float-leading jimu-leading-margin1 jimu-ellipsis",innerHTML:p.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+"px"}},c),f="auto";try{f=a.getMarginBox(c).w-
a.getMarginBox(k).w-a.getMarginExtents(d).w+"px"}catch(C){console.error(C),f="auto"}a.setStyle(d,"width",f);var m=[];t.forEach(this.appConfig.links,function(a){a=this._createLinkNode(b,a,!1);m.push(a)},this);m.length&&this.own(h(m[m.length-1],"keydown",e.hitch(this,function(b){p.isInNavMode()&&b.keyCode===l.TAB&&!b.shiftKey&&(b.preventDefault(),g("a",m[0])[0].focus())})));return b},_createLinkNode:function(b,c,k){b=a.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',b);a.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',
b);k=a.place('\x3cdiv class\x3d"'+(k?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',b);a.create("a",{href:c.url,tabindex:"0","class":"jimu-ellipsis",target:"_blank",rel:"noopener noreferrer",innerHTML:p.sanitizeHTML(c.label),title:c.label,style:{lineHeight:"66px"}},k);return b},_onSigninClick:function(){n.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new A({message:this.nls.cantSignOutTip}):n.signOutAll()},_onUserNameClick:function(){},
_getHeaderSectionWidth:function(){return a.getMarginBox(this.headerNode).w},_getContainerWidth:function(b){var a=this._getHeaderSectionWidth();return b.w-a-this._getEmptyWidth(b)},_calcContainerAndEmptyWidth:function(b){var a=this._getContainerWidth(b),k=this._getEmptyWidth(b);a<2*this.iconWidth&&(this.switchableElements.subtitle.visible?(this._showSwitchableElements(["title","links"]),a=this._getContainerWidth(b),a<2*this.iconWidth&&(this._showSwitchableElements(["title"]),a=this._getContainerWidth(b),
a<2*this.iconWidth&&(this._showSwitchableElements([]),a=this._getContainerWidth(b),a<2*this.iconWidth&&(k-=2*this.iconWidth-a,a=2*this.iconWidth,this._getContainerWidth(b))))):(this._showSwitchableElements([]),a=this._getContainerWidth(b),a<2*this.iconWidth&&(k-=2*this.iconWidth-a,a=2*this.iconWidth)));return{containerWidth:a,emptyWidth:k}},_getEmptyWidth:function(a){return.1*a.w},_createIconNodes:function(b){var c=this.tabIndex+20;g(".icon-node",this.containerNode).remove();var k,e,d=this.getAllConfigs();
this.iconWidth=b.h;k=this._calcContainerAndEmptyWidth(b);b=[];var f;this.maxIconCount=Math.floor(k.containerWidth/this.iconWidth);this.maxIconCount>=d.length?(this.headerIconCount=d.length,this.createMoreIcon=!1):(this.headerIconCount=this.maxIconCount-1,this.createMoreIcon=!0);this.createMoreIcon&&(f=this._createIconNode({label:this.nls.more,name:"__more"}),b.push(f));var h;for(k=this.headerIconCount-1;0<=k;k--)e=d[k],f=this._createIconNode(e),e.openAtStart&&(h=f),b.push(f);b.reverse().forEach(function(b){c+=
200;a.setAttr(b,"tabindex",c);b.config.inPanel||(b.config.tabIndex=c)});h&&!this.openAtStartWidget&&(this.openAtStartWidget=h.config.id,this._onIconClick(h,!0));this.openedId&&this.getConfigById(this.openedId)&&!1===this.getConfigById(this.openedId).inPanel&&(d=this._getIconNodeById(this.openedId),h=this.widgetManager.getWidgetById(this.openedId),d&&h?this._setOffPanelWidgetPosition(d,h):(this.widgetManager.closeWidget(this.openedId),this.openedId=""))},_createIconNode:function(b){var c,k;k="__more"===
b.name?this.folderUrl+"images/more_icon.png":b.icon;c=a.create("div",{"class":"icon-node jimu-float-trailing"+(this.openedId===b.id?" jimu-state-selected":""),title:b.label,role:"button",settingId:b.id,style:{width:this.height+"px",height:this.height+"px"},"data-widget-name":b.name},this.containerNode);k=a.create("img",{src:k,alt:b.label,style:{marginTop:(this.height-24)/2+"px"}},c);window.isRTL&&b.mirrorIconForRTL&&a.addClass(k,"jimu-flipx");"__more"===b.name?(this._morePaneNode=c,h(c,"click",e.hitch(this,
this._showMorePane,b)),h(c,"keydown",e.hitch(this,function(a){a.keyCode!==l.ENTER&&a.keyCode!==l.SPACE||this._showMorePane()}))):(h(c,"click",e.hitch(this,function(){this._onIconClick(c)})),h(c,"keydown",e.hitch(this,function(a){a.keyCode!==l.ENTER&&a.keyCode!==l.SPACE||this._onIconClick(c)})),p.addTooltipByDomNode(y,c,b.label));c.config=b;c.config.widgets&&1<c.config.widgets.length&&"dropDown"===c.config.openType&&this._createDropTriangle(c);return c},_createDropTriangle:function(b){var c=a.getMarginBox(b);
a.create("div",{"class":"drop-triangle",style:{left:c.l+c.w/2-4+"px"}},b)},_onIconClick:function(a,c){a.config.widgets&&1!==a.config.widgets.length&&"openAll"!==a.config.openType?this.dropMenuNode?this._closeDropMenu():this._openDropMenu(a,c):this.openedId&&this.openedId===a.config.id?this._switchNodeToClose(this.openedId):this.openedId?this._switchNodeToClose(this.openedId).then(e.hitch(this,function(){this._closeDropMenu();this._switchNodeToOpen(a.config.id)})):this._switchNodeToOpen(a.config.id)},
_closeDropMenu:function(){this.dropMenuNode&&(a.destroy(this.dropMenuNode),this.dropMenuNode=null)},_openDropMenu:function(b,c){this.dropMenuNode=a.create("div",{"class":"jimu-drop-menu jimu-main-background",title:b.config.label,style:{position:"absolute",zIndex:"101"}});a.place(this.dropMenuNode,this.containerNode);t.forEach(b.config.widgets,function(a){this._createDropMenuItem(a,b)},this);this._setDropMenuPosition(b);this.morePane&&this.morePane.hide();this._initDropMenuEvent(b,c)},_initDropMenuEvent:function(a,
c){var b=g(".menu-item",this.dropMenuNode);this.own(h(b,"keydown",e.hitch(this,function(c){if(c.keyCode===l.TAB||c.keyCode===l.ESCAPE)c.stopPropagation(),c.preventDefault(),this._closeDropMenu(),a.focus();else{var e;c.keyCode===l.DOWN_ARROW?e=c.target.nextSibling?c.target.nextSibling:c.target:c.keyCode===l.UP_ARROW?e=c.target.previousSibling?c.target.previousSibling:c.target:c.keyCode===l.HOME?e=b[0]:c.keyCode===l.END&&(e=b[b.length-1]);e&&e.focus()}})));c||b[0].focus()},_createDropMenuItem:function(b,
c){var d=a.create("div",{"class":"menu-item",tabindex:"-1",title:b.label,style:{height:this.height+"px"}},this.dropMenuNode);a.create("img",{"class":"jimu-float-leading",src:b.icon},d);a.create("div",{"class":"label jimu-float-leading",innerHTML:p.sanitizeHTML(b.label)},d);this.own(h(d,"click",e.hitch(this,function(){this._dropMenuItemClick(d)})));this.own(h(d,"keydown",e.hitch(this,function(a){a.keyCode!==l.ENTER&&a.keyCode!==l.SPACE||this._dropMenuItemClick(d)})));d.config=b;d.config.groupNode=
c;return d},_dropMenuItemClick:function(a){this._closeDropMenu();this.openedId?this._switchNodeToClose(this.openedId).then(e.hitch(this,function(){this._showIconContent(a.config)})):this._showIconContent(a.config)},_setDropMenuPosition:function(b){var c={},c=a.getMarginBox(this.dropMenuNode),c=this._getDropdownPosition(b,c);c.zIndex=101;a.setStyle(this.dropMenuNode,p.getPositionStyle(c))},_getDropdownPosition:function(b,c){var d={};b=a.getMarginBox(b);var e=a.getMarginBox(this.domNode);d.top=this.height+
1;window.isRTL?d.right=0>b.l+b.w-c.w?0:b.l+b.w-c.w:b.l+c.w>e.w?d.right=0:d.left=b.l;return d},_switchNodeToOpen:function(a){a=this._getIconNodeById(a);this._showIconContent(a.config)},_switchNodeToClose:function(a){g(".icon-node",this.domNode).removeClass("jimu-state-selected");var b=this.appConfig.getConfigElementById(a);if(b)return!1===b.inPanel?(this.widgetManager.closeWidget(a),this.openedId="",a=new w,a.resolve(),a):this.panelManager.closePanel(a+"_panel");a=new w;a.resolve();return a},_getIconNodeById:function(a){a=
g('.icon-node[settingId\x3d"'+a+'"]',this.domNode);if(0!==a.length)return a[0]},_unSelectIcon:function(a){g('.icon-node[settingId\x3d"'+a+'"]',this.domNode).removeClass("jimu-state-selected");this.openedId=""},_showIconContent:function(b){var c;!1===b.inPanel?this.widgetManager.loadWidget(b).then(e.hitch(this,function(d){this.openedId=b.id;c=this._getIconNodeById(b.id);g(".icon-node",this.domNode).removeClass("jimu-state-selected");a.addClass(c,"jimu-state-selected");a.setStyle(d.domNode,"zIndex",
101);this._setOffPanelWidgetPosition(c,d);this.widgetManager.openWidget(d);this.own(q.after(d,"onClose",e.hitch(this,function(){this._unSelectIcon(b.id);this._switchNodeToClose(c.config.id);c.focus()})))})):this.panelManager.showPanel(b).then(e.hitch(this,function(c){var d;b.groupNode||(d=this._getIconNodeById(b.id),g(".icon-node",this.domNode).removeClass("jimu-state-selected"),a.addClass(d,"jimu-state-selected"));this.openedId=b.id;this.own(q.after(c,"onClose",e.hitch(this,function(){b.groupNode?
b.groupNode.focus():(this._unSelectIcon(b.id),d.focus())})));this.own(h(c.closeNode,"keydown",e.hitch(this,function(a){a.keyCode===l.ESCAPE&&(b.groupNode?b.groupNode:d).focus()})))}))},_setOffPanelWidgetPosition:function(a,c){a=this._getDropdownPosition(a,this.widgetManager.getWidgetMarginBox(c));c.setPosition(a,this.containerNode)},_showMorePane:function(){var b,c,d=[],f=this.getAllConfigs();for(b=this.headerIconCount;b<f.length;b++)c=f[b],d.push(c);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&
a.destroy(this.moreIconPaneCoverNode);this._closeDropMenu();this.morePane=new B({openedId:this.openedId,items:d});this._createCoverNode();a.place(this.morePane.domNode,jimuConfig.mapId);this.morePane.startup();q.after(this.morePane,"onNodeClicked",e.hitch(this,function(b){this._moveConfigToHeader(b.config);this._createIconNodes(a.getContentBox(this.domNode));this._onIconClick(this._getIconNodeById(b.config.id))}),!0);q.after(this.morePane,"hide",e.hitch(this,function(){a.destroy(this.moreIconPaneCoverNode);
this._morePaneNode.focus()}),!0)},_moveConfigToHeader:function(a){var b=this.getAllConfigs(),d=a.index;a.index=b[this.headerIconCount-1].index;b[this.headerIconCount-1].index=d},_createCoverNode:function(){this.moreIconPaneCoverNode=a.create("div",{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)}})});