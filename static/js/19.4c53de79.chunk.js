(this["webpackJsonpback-home-safe"]=this["webpackJsonpback-home-safe"]||[]).push([[19],{484:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a,n,c=r(3),i=(r(0),r(56)),s=r(4),o=r.p+"static/media/back.7bf7a56f.svg",b=r(1),d=function(e){var t=e.name,r=e.backPath;return Object(b.jsxs)(l,{children:[r&&Object(b.jsx)(i.b,{to:r,children:Object(b.jsx)(u,{src:o})}),t]})},u=s.b.img(a||(a=Object(c.a)(["\n  height: 20px;\n  top: 14px;\n  left: 16px;\n  position: absolute;\n"]))),l=s.b.div(n||(n=Object(c.a)(["\n  color: #ffffff;\n  background-color: #12b188;\n  text-align: center;\n  line-height: 48px;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n"])))},497:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var a,n=r(3),c=r(122),i=r.n(c),s=r(162),o=r(6),b=r(661),d=r(630),u=r(631),l=r(632),j=r(633),h=r(562),O=r(0),p=r(169),f=r(446),v=r(56),x=r(629),m=r(4),_=r(164);!function(e){e.GET_USER_MEDIA_NOT_FOUND="GET_USER_MEDIA_NOT_FOUND",e.CAMERA_ACTIVATE_ERROR="CAMERA_ACTIVATE_ERROR"}(a||(a={}));var g,E,k=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("mediaDevices"in navigator)){e.next=11;break}return e.prev=1,e.abrupt("return",navigator.mediaDevices.getUserMedia({video:t?{deviceId:t}:{facingMode:"environment"},audio:!1}));case 5:throw e.prev=5,e.t0=e.catch(1),console.error(e.t0),new Error(a.CAMERA_ACTIVATE_ERROR);case 9:e.next=12;break;case 11:throw new Error(a.GET_USER_MEDIA_NOT_FOUND);case 12:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t){return e.apply(this,arguments)}}(),A=r(1),w=function(e){var t=e.onFrame,r=e.suppressError,n=void 0!==r&&r,c=Object(f.a)("qr_reader").t,m=Object(_.b)().preferredCameraId,g=Object(O.useState)(!1),E=Object(o.a)(g,2),w=E[0],T=E[1],C=Object(O.useState)(!1),y=Object(o.a)(C,2),M=y[0],U=y[1],D=Object(O.useRef)(null),S=Object(O.useRef)(null),N=Object(x.a)((function(){var e=S.current,r=D.current;if(e&&r&&r.readyState===r.HAVE_ENOUGH_DATA){var a=e.getContext("2d");if(!a)return;e.height=r.videoHeight,e.width=r.videoWidth,a.drawImage(r,0,0,e.width,e.height);var n=a.getImageData(0,0,e.width,e.height);t&&t(n)}}),!1),F=Object(o.a)(N,2),G=F[0],V=F[1],H=Object(O.useCallback)(Object(s.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=D.current){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,k("AUTO"===m?void 0:m);case 6:if(r=e.sent){e.next=9;break}return e.abrupt("return");case 9:t.srcObject=r,t.play(),V(),e.next=26;break;case 14:e.prev=14,e.t0=e.catch(3),e.t1=e.t0.message,e.next=e.t1===a.GET_USER_MEDIA_NOT_FOUND?19:e.t1===a.CAMERA_ACTIVATE_ERROR?21:25;break;case 19:return T(!0),e.abrupt("break",26);case 21:if(!n){e.next=23;break}return e.abrupt("return");case 23:return U(!0),e.abrupt("break",26);case 25:console.error(e.t0);case 26:case"end":return e.stop()}}),e,null,[[3,14]])}))),[V,m,n]);return Object(O.useEffect)((function(){var e=D.current;return H(),function(){if(G(),e){var t=e.srcObject;if(!t)return;t.getTracks().forEach((function(e){e.stop()})),e.srcObject=null}}}),[V,G,D,H,m]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(R,{ref:D,playsInline:!0}),Object(A.jsx)(I,{ref:S}),Object(A.jsxs)(b.a,{open:w,keepMounted:!0,"aria-labelledby":"unsupported-device-title","aria-describedby":"unsupported-device-description",children:[Object(A.jsx)(d.a,{id:"unsupported-device-title",children:"\u4e0d\u652f\u63f4\u7684\u88dd\u7f6e"}),Object(A.jsx)(u.a,{children:Object(A.jsxs)(l.a,{id:"unsupported-device-description",children:[c("message.doesnt_support_get_user_media"),p.isIOS&&Object(A.jsx)(A.Fragment,{children:c("message.sure_above_ios_14")})]})}),Object(A.jsx)(j.a,{children:Object(A.jsx)(v.b,{to:"/",children:Object(A.jsx)(h.a,{color:"primary",children:c("button.back_home")})})})]}),Object(A.jsxs)(b.a,{open:M,keepMounted:!0,"aria-labelledby":"camera-activation-title","aria-describedby":"camera-activation-description",children:[Object(A.jsx)(d.a,{id:"camera-activation-title",children:c("dialog.cannot_open_camera.title")}),Object(A.jsx)(u.a,{children:Object(A.jsx)(l.a,{id:"camera-activation-description",children:c("dialog.cannot_open_camera.content")})}),Object(A.jsxs)(j.a,{children:[Object(A.jsx)(v.b,{to:"/",children:Object(A.jsx)(h.a,{color:"primary",children:c("button.back_home")})}),Object(A.jsx)(v.b,{to:"/cameraSetting",children:Object(A.jsx)(h.a,{color:"primary",children:c("button.camera_setting")})})]})]})]})},R=m.b.video(g||(g=Object(n.a)(["\n  /* Make video to at least 100% wide and tall */\n  min-width: 100%;\n  min-height: 100%;\n\n  /* Setting width & height to auto prevents the browser from stretching or squishing the video */\n  width: auto;\n  height: auto;\n\n  /* Center the video */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),I=m.b.canvas(E||(E=Object(n.a)(["\n  display: none;\n"])))},634:function(e,t,r){"use strict";r.r(t);var a,n,c,i,s=r(3),o=r(608),b=r(655),d=r(566),u=r(565),l=r(564),j=r(155),h=r(84),O=r(446),p=r(4),f=r(484),v=r(497),x=r(164),m=r(1);t.default=function(){var e=Object(O.a)("camera_setting").t,t=Object(x.b)(),r=t.preferredCameraId,a=t.setPreferredCameraId,n=t.cameraList;return Object(m.jsxs)(_,{children:[Object(m.jsx)(f.a,{backPath:"/",name:e("name")}),Object(m.jsx)(E,{children:Object(m.jsxs)(k,{children:[Object(m.jsx)(o.a,{id:"cameraId",children:e("form.camera_choice.label")}),Object(m.jsxs)(b.a,{labelId:"cameraId",id:"demo-simple-select",value:r,onChange:function(e){a(e.target.value||"AUTO")},children:[Object(m.jsx)(d.a,{value:"AUTO",children:e("form.camera_choice.auto")}),n.map((function(e){var t=e.deviceId,r=e.label;return Object(m.jsx)(d.a,{value:t,children:Object(j.a)(r)||Object(h.a)(r)?t:r},"deviceId")}))]}),Object(m.jsx)(u.a,{children:e("form.camera_choice.explain")})]})}),Object(m.jsx)(g,{children:Object(m.jsx)(v.a,{suppressError:!0})})]})};var _=p.b.div(a||(a=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n"]))),g=p.b.div(n||(n=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n"]))),E=p.b.div(c||(c=Object(s.a)(["\n  width: 100%;\n  display: flex;\n"]))),k=Object(p.b)(l.a)(i||(i=Object(s.a)(["\n  width: 100%;\n\n  &.MuiFormControl-root {\n    margin: 8px;\n  }\n"])))}}]);
//# sourceMappingURL=19.4c53de79.chunk.js.map