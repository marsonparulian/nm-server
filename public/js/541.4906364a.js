"use strict";(self["webpackChunknm_devhomework_ionic"]=self["webpackChunknm_devhomework_ionic"]||[]).push([[541],{3541:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return D},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return w},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return u},setKeyboardClose:function(){return p},setKeyboardOpen:function(){return f},startKeyboardAssist:function(){return h},trackViewportChanges:function(){return y}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i="ionKeyboardDidShow",o="ionKeyboardDidHide",r=150;let s={},a={},d=!1;const u=()=>{s={},a={},d=!1},h=e=>{c(e),e.visualViewport&&(a=D(e.visualViewport),e.visualViewport.onresize=()=>{y(e),w()||b(e)?f(e):g(e)&&p(e)})},c=e=>{e.addEventListener("keyboardDidShow",(t=>f(e,t))),e.addEventListener("keyboardDidHide",(()=>p(e)))},f=(e,t)=>{k(e,t),d=!0},p=e=>{l(e),d=!1},w=()=>{const e=(s.height-a.height)*a.scale;return!d&&s.width===a.width&&e>r},b=e=>d&&!g(e),g=e=>d&&a.height===e.innerHeight,k=(e,t)=>{const n=t?t.keyboardHeight:e.innerHeight-a.height,o=new CustomEvent(i,{detail:{keyboardHeight:n}});e.dispatchEvent(o)},l=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},y=e=>{s=Object.assign({},a),a=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=541.4906364a.js.map