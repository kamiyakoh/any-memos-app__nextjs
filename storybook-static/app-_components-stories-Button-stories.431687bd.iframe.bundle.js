"use strict";(self.webpackChunkany_memos_app_nextjs=self.webpackChunkany_memos_app_nextjs||[]).push([[185],{"./src/app/_components/stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Inactive:()=>Inactive,Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Normal_parameters,_Normal_parameters_docs,_Normal_parameters1,_Inactive_parameters,_Inactive_parameters_docs,_Inactive_parameters1,_storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const classNames={gray:"bg-gray-500 hover:bg-gray-600 text-white",green:"bg-green-600 hover:bg-green-700 text-white",midRed:"bg-red-700 hover:bg-red-800 text-white",orange:"bg-orange-500 hover:bg-orange-600 text-white",red:"bg-red-500 hover:bg-red-600 text-white",violet:"bg-violet-500 hover:bg-violet-600 text-white",yellow:"bg-yellow-500 hover:bg-yellow-600 text-white",inActive:"bg-gray-500 pointer-events-none text-white"},__WEBPACK_DEFAULT_EXPORT__={title:"Button",component:__webpack_require__("./src/app/_components/uiParts/Button.tsx").$,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{control:"text"},className:{options:Object.keys(classNames),mapping:classNames,control:{type:"select",labels:{gray:"gray",green:"green",midRed:"midRed",orange:"orange",red:"red",violet:"violet",yellow:"yellow",inActive:"inActive"}}},style:{control:"object"},onClick:{control:"checked"}},args:{className:"text-white",onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Normal={args:{type:"button",children:"ボタン",className:"bg-violet-500 hover:bg-violet-600 text-white"}},Inactive={args:{type:"button",children:"ボタン",className:"bg-gray-500 pointer-events-none text-white"}};Normal.parameters={...Normal.parameters,docs:{...null===(_Normal_parameters=Normal.parameters)||void 0===_Normal_parameters?void 0:_Normal_parameters.docs,source:{originalSource:"{\n  args: {\n    type: 'button',\n    children: 'ボタン',\n    className: 'bg-violet-500 hover:bg-violet-600 text-white'\n  }\n}",...null===(_Normal_parameters1=Normal.parameters)||void 0===_Normal_parameters1||null===(_Normal_parameters_docs=_Normal_parameters1.docs)||void 0===_Normal_parameters_docs?void 0:_Normal_parameters_docs.source}}},Inactive.parameters={...Inactive.parameters,docs:{...null===(_Inactive_parameters=Inactive.parameters)||void 0===_Inactive_parameters?void 0:_Inactive_parameters.docs,source:{originalSource:"{\n  args: {\n    type: 'button',\n    children: 'ボタン',\n    className: 'bg-gray-500 pointer-events-none text-white'\n  }\n}",...null===(_Inactive_parameters1=Inactive.parameters)||void 0===_Inactive_parameters1||null===(_Inactive_parameters_docs=_Inactive_parameters1.docs)||void 0===_Inactive_parameters_docs?void 0:_Inactive_parameters_docs.source}}};const __namedExportsOrder=["Normal","Inactive"]},"./src/app/_components/uiParts/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const Button=param=>{let{type,className,style,onClick,children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type,className:"px-4 py-2 rounded ".concat(className),style,onClick,children})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{required:!0,tsType:{name:"union",raw:"'submit' | 'reset' | 'button'",elements:[{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'button'"}]},description:""},className:{required:!0,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function p(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&"key"!==b&&"ref"!==b&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=p,exports.jsxs=p},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);