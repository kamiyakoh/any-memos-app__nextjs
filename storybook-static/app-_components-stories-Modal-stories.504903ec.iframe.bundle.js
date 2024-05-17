"use strict";(self.webpackChunkany_memos_app_nextjs=self.webpackChunkany_memos_app_nextjs||[]).push([[320],{"./src/app/_components/stories/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Category:()=>Modal_stories_Category,Edit:()=>Modal_stories_Edit,Login:()=>Modal_stories_Login,Menu:()=>Modal_stories_Menu,New:()=>Modal_stories_New,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/react-hot-toast/dist/index.mjs"),test_dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),es=__webpack_require__("./node_modules/recoil/es/index.js"),_states_categories=__webpack_require__("./src/app/_states/categories.ts"),Modal=__webpack_require__("./src/app/_components/uiParts/Modal.tsx"),FrostedGlass=__webpack_require__("./src/app/_components/uiParts/FrostedGlass.tsx"),Button=__webpack_require__("./src/app/_components/uiParts/Button.tsx"),useLogin=__webpack_require__("./src/app/_hooks/useLogin.ts");const Login=()=>{const{register,handleSubmit,handleLogin}=(0,useLogin.v)();return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("form",{onSubmit:event=>{event.preventDefault(),handleSubmit(handleLogin)(event)},children:[(0,jsx_runtime.jsxs)("label",{htmlFor:"email",children:["メールアドレス",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("input",{type:"email",required:!0,className:"my-2 rounded-sm border-gray-400 border-2 shadow-sm",...register("email")})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("label",{htmlFor:"password",children:["パスワード",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("input",{type:"password",required:!0,className:"my-2 rounded-sm border-gray-400 border-2 shadow-sm",...register("password")})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Button.$,{className:"mt-4 text-white bg-violet-500 hover:bg-violet-600",type:"submit",children:"ログイン"})]})})};Login.__docgenInfo={description:"",methods:[],displayName:"Login"};var recoil_persist_dist=__webpack_require__("./node_modules/recoil-persist/dist/index.js"),recoilKey=__webpack_require__("./src/app/_states/recoilKey.ts");const{persistAtom}=(0,recoil_persist_dist.x)(),menuOptionState=(0,es.eU)({key:recoilKey.O.menuOptionState,default:{bgImg:"unfixed",bgFilter:"unfixed",addMonth:0,addHours:0},effects_UNSTABLE:[persistAtom]});var _utils_const=__webpack_require__("./src/app/_utils/const.ts");const Menu=param=>{let{onClickShowBgPreview}=param;const{menuOption,handleBgImgChange,handleBgFilterChange,handleAddMonth,handleAddHours,onClickErrorToast,onClickMenuReset}=(()=>{const[menuOption,setMenuOption]=(0,es.L4)(menuOptionState),[isShowBgPreview,setIsShowBgPreview]=(0,react.useState)(!1);return{menuOption,isShowBgPreview,handleBgImgChange:event=>{const selectedValue=event.target.value;var _bgImgOptions_find;const selectedOption=null!==(_bgImgOptions_find=_utils_const.nl.find((op=>op.value===selectedValue)))&&void 0!==_bgImgOptions_find?_bgImgOptions_find:{value:"unfixed",label:"画像を固定しない"};null!==selectedOption&&setMenuOption({...menuOption,bgImg:selectedOption.value})},handleBgFilterChange:event=>{const selectedValue=event.target.value;var _bgFilterOptions_find;const selectedOption=null!==(_bgFilterOptions_find=_utils_const.Wx.find((op=>op.value===selectedValue)))&&void 0!==_bgFilterOptions_find?_bgFilterOptions_find:{value:"unfixed",label:"時間帯を固定しない"};null!==selectedOption&&setMenuOption({...menuOption,bgFilter:selectedOption.value})},handleAddMonth:event=>{const selectedValue=Math.floor(parseInt(event.target.value));selectedValue>=0&&selectedValue<12&&setMenuOption({...menuOption,addMonth:selectedValue})},handleAddHours:event=>{const selectedValue=parseInt(event.target.value);let newValue=0;newValue=selectedValue<0?Math.ceil(selectedValue):Math.floor(selectedValue),newValue>=-23&&newValue<=23&&setMenuOption({...menuOption,addHours:newValue})},onClickErrorToast:isFixed=>{isFixed&&dist.Ay.error('変更するには"固定しない"を選択してください')},onClickShowBgPreview:()=>{setIsShowBgPreview(!0),(0,dist.Ay)("背景プレビューを終了するには\n画面をタッチ・クリックしてください")},onClickCloseBgPreview:()=>{setIsShowBgPreview(!1)},onClickMenuReset:()=>{window.confirm("メニューを初期化しますか？")&&setMenuOption({bgImg:"unfixed",bgFilter:"unfixed",addMonth:0,addHours:0})}}})(),isFixedBgImg="unfixed"!==menuOption.bgImg,isFixedBgFilter="unfixed"!==menuOption.bgFilter;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:"背景画像（季節）"}),(0,jsx_runtime.jsx)("div",{className:"flex flex-col lg:flex-row mt-2",children:_utils_const.nl.map((op=>(0,jsx_runtime.jsxs)("label",{className:"mr-4",children:[(0,jsx_runtime.jsx)("input",{type:"radio",value:op.value,checked:menuOption.bgImg===op.value,onChange:handleBgImgChange}),op.label]},op.value)))}),(0,jsx_runtime.jsxs)("div",{className:"relative w-full pb-4 mt-6 mb-8 ".concat(isFixedBgImg?"bg-black bg-opacity-60":""),onClick:()=>{onClickErrorToast(isFixedBgImg)},children:[isFixedBgImg&&(0,jsx_runtime.jsx)("div",{className:"absolute top-0 left-0 z-10 w-full h-full"}),(0,jsx_runtime.jsx)("p",{children:"月調整"}),(0,jsx_runtime.jsxs)("label",{children:["+",(0,jsx_runtime.jsx)("input",{type:"number",value:menuOption.addMonth,onChange:handleAddMonth,min:0,max:11,disabled:isFixedBgImg})]})]}),(0,jsx_runtime.jsx)("p",{children:"時間帯フィルター"}),(0,jsx_runtime.jsx)("div",{className:"flex flex-col lg:flex-row mt-2",children:_utils_const.Wx.map((op=>(0,jsx_runtime.jsxs)("label",{className:"mr-4",children:[(0,jsx_runtime.jsx)("input",{type:"radio",value:op.value,checked:menuOption.bgFilter===op.value,onChange:handleBgFilterChange}),op.label]},op.value)))}),(0,jsx_runtime.jsxs)("div",{className:"relative w-full pb-4 mt-6 ".concat(isFixedBgFilter?"bg-black bg-opacity-60":""),onClick:()=>{onClickErrorToast(isFixedBgFilter)},children:[isFixedBgFilter&&(0,jsx_runtime.jsx)("div",{className:"absolute top-0 left-0 z-10 w-full h-full"}),(0,jsx_runtime.jsx)("p",{children:"時間調整"}),(0,jsx_runtime.jsxs)("label",{children:[menuOption.addHours>=0&&"+",(0,jsx_runtime.jsx)("input",{type:"number",value:menuOption.addHours,onChange:handleAddHours,min:-23,max:23,disabled:isFixedBgFilter})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between flex-wrap gap-4 text-white mt-6",children:[(0,jsx_runtime.jsx)(Button.$,{type:"button",className:"bg-orange-500 hover:bg-orange-600",onClick:onClickShowBgPreview,children:"背景プレビュー"}),(0,jsx_runtime.jsx)(Button.$,{type:"button",className:"bg-gray-500 hover:bg-gray-600",onClick:onClickMenuReset,children:"メニュー初期化"})]})]})};Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{onClickShowBgPreview:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var DiffDays=__webpack_require__("./src/app/_components/DiffDays.tsx"),WeekDayJa=__webpack_require__("./src/app/_components/uiParts/WeekDayJa.tsx"),axios=__webpack_require__("./node_modules/axios/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),core=__webpack_require__("./node_modules/swr/dist/core/index.mjs"),useCategory=__webpack_require__("./src/app/_hooks/useCategory.ts"),clientAxiosInstance=__webpack_require__("./src/app/_utils/clientAxiosInstance.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const New=()=>{const{watchDate,register,handleSubmit,postMemo}=(()=>{const{mutate}=(0,core.iX)(),{handle401}=(0,useLogin.v)(),{addPickCategories}=(0,useCategory.e)(),{register,handleSubmit,watch,reset}=(0,index_esm.mN)({defaultValues:{title:"",category:"",description:"",date:"",markDiv:"0"}});return{watchDate:watch("date",""),register,handleSubmit,postMemo:(0,react.useCallback)((async data=>{const{title,category,description,date,markDiv}=data;try{200===(await clientAxiosInstance.H.post("/api/memo",{title,category,description,date,markDiv:parseInt(markDiv,10)})).status&&(await mutate("/api/memos"),addPickCategories(category),reset(),dist.Ay.success("新しいメモを作成しました"))}catch(error){if((0,axios.F0)(error)){if(void 0!==error.response){const{status,data}=error.response;switch(status){case 401:handle401();break;case 400:dist.Ay.error(data);break;default:dist.Ay.error("エラーが発生しました")}}}else console.log({error}),dist.Ay.error("エラーが発生しました")}}),[reset,handle401,mutate,addPickCategories])}})();return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("form",{onSubmit:event=>{event.preventDefault(),handleSubmit(postMemo)(event)},children:[(0,jsx_runtime.jsxs)("label",{htmlFor:"title",children:["タイトル",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("input",{type:"text",className:"my-2 w-full rounded-sm border-gray-400 border-2 shadow-sm",...register("title")})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("label",{htmlFor:"category",children:["カテゴリー",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("input",{type:"text",className:"my-2 w-full rounded-sm border-gray-400 border-2 shadow-sm",...register("category")})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("label",{htmlFor:"description",children:["説明",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("textarea",{rows:5,className:"my-2 w-full rounded-sm border-gray-400 border-2 shadow-sm",...register("description")})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("label",{htmlFor:"date",children:["期限日時",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("input",{type:"date",className:"my-2 rounded-sm border-gray-400 border-2 shadow-sm",...register("date")}),"  ",(0,jsx_runtime.jsx)(WeekDayJa.E,{date:watchDate,isModal:!0}),"  ",(0,jsx_runtime.jsx)(DiffDays.j,{date:watchDate,isModal:!0})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("label",{children:["マークを",(0,jsx_runtime.jsx)("br",{})]}),(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",value:1,className:"mr-2",...register("markDiv")}),"★（つける）",(0,jsx_runtime.jsx)("br",{})]}),(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",value:0,defaultChecked:!0,className:"mr-2",...register("markDiv")}),"-（つけない）"]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Button.$,{type:"submit",className:"mt-4 text-white bg-blue-500 hover:bg-blue-600",children:"作成"})]})})};New.__docgenInfo={description:"",methods:[],displayName:"New"};var Edit=__webpack_require__("./src/app/_components/Edit.tsx"),dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min),pickCategoriesState=__webpack_require__("./src/app/_states/pickCategoriesState.ts"),_utils_date=__webpack_require__("./src/app/_utils/date.ts"),useMemos_console=__webpack_require__("./node_modules/console-browserify/index.js");const useMemos=()=>{const[currentIdOpenDel,setCurrentIdOpenDel]=(0,react.useState)(""),[sortIdDate,setSortIdDate]=(0,react.useState)("idAsc"),[pickDateDiff,setPickDateDiff]=(0,react.useState)("all"),[pickMarkDiv,setPickMarkDiv]=(0,react.useState)("-1"),[categories,setCategories]=(0,es.L4)(_states_categories.S),pickCategories=(0,es.vc)(pickCategoriesState.j),{handle401}=(0,useLogin.v)(),{data:memos,isLoading}=(0,core.Ay)("/api/memos",(async url=>"undefined"!=typeof document?await clientAxiosInstance.H.get(url).then((res=>{var _res_data;const memos=null!==(_res_data=res.data)&&void 0!==_res_data?_res_data:[];if(200===res.status){var _memos_map_sort;const memosCat=null!==(_memos_map_sort=memos.map((memo=>memo.category)).sort())&&void 0!==_memos_map_sort?_memos_map_sort:[],uniqueCat=[...new Set(memosCat)];setCategories(uniqueCat)}return memos})):[])),sortMemos=(0,react.useCallback)(((memos,sortIdDate)=>memos.sort(((a,b)=>{switch(sortIdDate){case"dateAsc":return dayjs_min_default()(a.date).diff(b.date);case"dateDesc":return dayjs_min_default()(b.date).diff(a.date);case"idDesc":return parseInt(b.id)-parseInt(a.id);default:return parseInt(a.id)-parseInt(b.id)}}))),[]),handleSortIdDateChange=(0,react.useCallback)((event=>{var _sortIdDateRadio_find;const selectedSort=null!==(_sortIdDateRadio_find=_utils_const.dP.find((sort=>sort.value===event.target.value)))&&void 0!==_sortIdDateRadio_find?_sortIdDateRadio_find:{value:"idAsc",label:"ID小さい順"};null!==selectedSort&&setSortIdDate(selectedSort.value)}),[]),handlePickDiffChange=(0,react.useCallback)((event=>{var _pickDateDiffRadio_find;const selectedPick=null!==(_pickDateDiffRadio_find=_utils_const.qh.find((sort=>sort.value===event.target.value)))&&void 0!==_pickDateDiffRadio_find?_pickDateDiffRadio_find:{value:"all",label:"全て"};null!==selectedPick&&setPickDateDiff(selectedPick.value)}),[]),handleMarkDivChange=(0,react.useCallback)((event=>{var _pickMarkDivRadio_find;const selectedPick=null!==(_pickMarkDivRadio_find=_utils_const.hP.find((sort=>sort.value===event.target.value)))&&void 0!==_pickMarkDivRadio_find?_pickMarkDivRadio_find:{value:"-1",label:"全て"};null!==selectedPick&&setPickMarkDiv(selectedPick.value)}),[]),pickMemos=(0,react.useCallback)(((sortIdDate,pickDateDiff,pickMarkDiv,pickCategories)=>{const pickedDateDiffMemos="all"===pickDateDiff?memos:null==memos?void 0:memos.filter((memo=>((date,pickDateDiff)=>{const{status}=(0,_utils_date.$o)(date);let result=!0;switch(pickDateDiff){case"rest":result="over"!==status;break;case"over":result="over"===status}return result})(memo.date,pickDateDiff))),pickedMarkDiv="-1"===pickMarkDiv?pickedDateDiffMemos:null==pickedDateDiffMemos?void 0:pickedDateDiffMemos.filter((memo=>pickMarkDiv===memo.markDiv.toString()));var _pickedMarkDiv_filter;const pickedCat=null!==(_pickedMarkDiv_filter=null==pickedMarkDiv?void 0:pickedMarkDiv.filter((memo=>pickCategories.includes(memo.category))))&&void 0!==_pickedMarkDiv_filter?_pickedMarkDiv_filter:[];var _sortMemos;return null!==(_sortMemos=sortMemos(null!=pickedCat?pickedCat:[],sortIdDate))&&void 0!==_sortMemos?_sortMemos:[]}),[memos,sortMemos]),showMemos=(0,react.useMemo)((()=>pickMemos(sortIdDate,pickDateDiff,pickMarkDiv,pickCategories)),[sortIdDate,pickDateDiff,pickMarkDiv,pickCategories,pickMemos]),showMemosDel=(0,react.useCallback)((async()=>{const delIds=showMemos.map((memo=>parseInt(memo.id,10))).sort(((a,b)=>b-a));if(confirm("表示中の".concat(delIds.length,"件のメモを本当にまとめて削除しますか？")))try{const res=await clientAxiosInstance.H.get("/api/memos");if(200===res.status){let success=0,error=0;const deleteMemo=async id=>{try{200===(await clientAxiosInstance.H.delete("/api/memo/".concat(id.toString()))).status?success++:error++}catch(err){error++,useMemos_console.error("Error deleting memo:",err)}},deletePromises=delIds.map(deleteMemo);await Promise.all(deletePromises),(0,dist.Ay)("".concat(success>0?success.toString()+"件のメモを削除しました\n":"","\n            ").concat(error>0?error.toString()+"件のメモが削除できませんでした":"")),await(0,core.Tk)("/api/memos"),setCurrentIdOpenDel("")}401===res.status&&handle401()}catch(err){useMemos_console.error("Error fetching memos:",err)}}),[showMemos,handle401]);return{currentIdOpenDel,sortIdDate,pickDateDiff,pickMarkDiv,isLoading,memos,showMemos,categories,setCurrentIdOpenDel,handleSortIdDateChange,handlePickDiffChange,handleMarkDivChange,showMemosDel}},Category=()=>{const{categories}=useMemos(),{pickCategories,selectAllCategories,deselectAllCategories,handlePickCategoryChange,categoryLabel}=(0,useCategory.e)();return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-center gap-8",children:[(0,jsx_runtime.jsx)("h2",{className:"font-bold",children:"カテゴリー"}),(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",value:"selectAll",checked:pickCategories.length===categories.length,onChange:()=>{pickCategories.length===categories.length?deselectAllCategories():selectAllCategories()}})," 全て選択"]})]}),(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap gap-4 mt-4 break-words whitespace-pre-wrap",children:categories.map((cat=>(0,jsx_runtime.jsxs)("label",{className:"max-w-full",children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",value:cat,checked:pickCategories.includes(cat),onChange:handlePickCategoryChange})," ",categoryLabel(cat)]},cat)))})]})};var _Login_parameters,_Login_parameters_docs,_Login_parameters1,_Menu_parameters,_Menu_parameters_docs,_Menu_parameters1,_New_parameters,_New_parameters_docs,_New_parameters1,_Edit_parameters,_Edit_parameters_docs,_Edit_parameters1,_Category_parameters,_Category_parameters_docs,_Category_parameters1;Category.__docgenInfo={description:"",methods:[],displayName:"Category"};const toastStyle={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",background:"rgba(0, 0, 0, 0.5)",color:"#fff",maxWidth:"90vw",padding:"1rem",backdropFilter:"blur(4px)"},classNames={blue:"border-blue-500",blueFull:"border-blue-500 w-full",green:"border-green-600",greenFull:"border-green-600 w-full",gray:"border-gray-500",violet:"border-violet-500",yellow:"border-yellow-500"},meta={title:"Modal",component:Modal.a,decorators:[story=>(0,jsx_runtime.jsx)(es.bi,{initializeState:param=>{let{set}=param;set(_states_categories.S,["cat1","cat2","etc"])},children:story()})],parameters:{layout:"fullscreen"},argTypes:{addClassPanel:{options:Object.keys(classNames),mapping:classNames,control:{type:"select",labels:{blue:"blue",blueFull:"blueFull",green:"green",greenFull:"greenFull",gray:"gray",violet:"violet",yellow:"yellow"}}},isOpen:{control:"none"},enableCloseButton:{control:"none"}}},Modal_stories=meta,Modal_stories_Login={args:{isOpen:!0,enableCloseButton:!1,addClassPanel:"border-violet-500",children:(0,jsx_runtime.jsx)(Login,{}),onClose:(0,test_dist.fn)()},render:param=>{let{...args}=param;const[isOpen,setIsOpen]=(0,react.useState)(!0);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(meta.component,{...args,isOpen}),(0,jsx_runtime.jsx)(dist.l$,{toastOptions:{style:toastStyle}})]})}},Modal_stories_Menu={args:{isOpen:!1,enableCloseButton:!0,addClassPanel:"border-gray-500",children:(0,jsx_runtime.jsx)(Menu,{onClickShowBgPreview:(0,test_dist.fn)()})},render:param=>{let{...args}=param;const[isOpen,setIsOpen]=(0,react.useState)(!1),[isShowBgPreview,setIsShowBgPreview]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{children:[isOpen||(0,jsx_runtime.jsx)("button",{className:"fixed top-4 right-4 z-40 min-[1936px]:right-[calc((100%_-_1920px)_/_2)]",onClick:()=>setIsOpen(!0),children:(0,jsx_runtime.jsx)(FrostedGlass.w,{style:{padding:"0.5rem"},children:(0,jsx_runtime.jsx)("img",{src:"./img/menuIcon.png",width:48,height:48,alt:"menuIcon"})})}),isShowBgPreview||(0,jsx_runtime.jsx)(meta.component,{...args,isOpen,onClose:()=>setIsOpen(!1),children:(0,jsx_runtime.jsx)(Menu,{onClickShowBgPreview:()=>{setIsShowBgPreview(!0),(0,dist.oR)("背景プレビューを終了するには\n画面をタッチ・クリックしてください")}})}),isShowBgPreview&&(0,jsx_runtime.jsx)("button",{className:"w-full h-[100vh]",onClick:()=>setIsShowBgPreview(!1)}),(0,jsx_runtime.jsx)(dist.l$,{toastOptions:{style:toastStyle}})]})}},Modal_stories_New={args:{isOpen:!1,enableCloseButton:!0,addClassPanel:"border-blue-500 w-full",children:(0,jsx_runtime.jsx)(New,{})},render:param=>{let{...args}=param;const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{children:[isOpen||(0,jsx_runtime.jsx)("button",{className:"fixed top-4 left-4 z-40 text-4xl px-4 h-16 bg-blue-500 text-white rounded hover:bg-blue-600 min-[1936px]:left-[calc((100%_-_1920px)_/_2)]",onClick:()=>{setIsOpen(!0)},children:"作成"}),(0,jsx_runtime.jsx)(meta.component,{...args,isOpen,onClose:()=>setIsOpen(!1)})]})}},Modal_stories_Edit={args:{isOpen:!1,enableCloseButton:!0,addClassPanel:"border-green-600 w-full",children:(0,jsx_runtime.jsx)(Edit.f,{memo:{id:"1",title:"Test",category:"etc",description:"example\nexample",date:"2100-01-01",markDiv:1},closeModal:(0,test_dist.fn)()})},render:param=>{let{...args}=param;const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-center h-screen",children:[isOpen||(0,jsx_runtime.jsx)(Button.$,{type:"button",className:"bg-green-600 hover:bg-green-700",onClick:()=>{setIsOpen(!0)},children:"編集"}),(0,jsx_runtime.jsx)(meta.component,{...args,isOpen,onClose:()=>setIsOpen(!1)})]})}},Modal_stories_Category={args:{isOpen:!1,enableCloseButton:!0,addClassPanel:"border-yellow-500",children:(0,jsx_runtime.jsx)(Category,{})},render:param=>{let{...args}=param;const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-center h-screen",children:[isOpen||(0,jsx_runtime.jsx)(Button.$,{type:"button",className:"self-center bg-yellow-500 hover:bg-yellow-600",style:{textShadow:"0.5px 0.5px 0 #000"},onClick:()=>{setIsOpen(!0)},children:"カテゴリー"}),(0,jsx_runtime.jsx)(meta.component,{...args,isOpen,onClose:()=>setIsOpen(!1)})]})}};Modal_stories_Login.parameters={...Modal_stories_Login.parameters,docs:{...null===(_Login_parameters=Modal_stories_Login.parameters)||void 0===_Login_parameters?void 0:_Login_parameters.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    enableCloseButton: false,\n    addClassPanel: 'border-violet-500',\n    children: <LoginComponent />,\n    onClose: fn()\n  },\n  render: ({\n    ...args\n  }) => {\n    const [isOpen, setIsOpen] = useState(true);\n    return <div>\r\n        <meta.component {...args} isOpen={isOpen} />\r\n        <Toaster toastOptions={{\n        style: toastStyle\n      }} />\r\n      </div>;\n  }\n}",...null===(_Login_parameters1=Modal_stories_Login.parameters)||void 0===_Login_parameters1||null===(_Login_parameters_docs=_Login_parameters1.docs)||void 0===_Login_parameters_docs?void 0:_Login_parameters_docs.source}}},Modal_stories_Menu.parameters={...Modal_stories_Menu.parameters,docs:{...null===(_Menu_parameters=Modal_stories_Menu.parameters)||void 0===_Menu_parameters?void 0:_Menu_parameters.docs,source:{originalSource:"{\n  args: {\n    isOpen: false,\n    enableCloseButton: true,\n    addClassPanel: 'border-gray-500',\n    children: <MenuComponent onClickShowBgPreview={fn()} />\n  },\n  render: ({\n    ...args\n  }) => {\n    const [isOpen, setIsOpen] = useState(false);\n    const [isShowBgPreview, setIsShowBgPreview] = useState(false);\n    const onClickShowBgPreview = () => {\n      setIsShowBgPreview(true);\n      toast('背景プレビューを終了するには\\n画面をタッチ・クリックしてください');\n    };\n    return <div>\r\n        {isOpen || <button className={`fixed top-4 right-4 z-40 min-[1936px]:right-[calc((100%_-_1920px)_/_2)]`} onClick={() => setIsOpen(true)}>\r\n            <FrostedGlass style={{\n          padding: '0.5rem'\n        }}>\r\n              <img src=\"./img/menuIcon.png\" width={48} height={48} alt=\"menuIcon\" />\r\n            </FrostedGlass>\r\n          </button>}\r\n        {isShowBgPreview || <meta.component {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>\r\n            <MenuComponent onClickShowBgPreview={onClickShowBgPreview} />\r\n          </meta.component>}\r\n        {isShowBgPreview && <button className=\"w-full h-[100vh]\" onClick={() => setIsShowBgPreview(false)} />}\r\n        <Toaster toastOptions={{\n        style: toastStyle\n      }} />\r\n      </div>;\n  }\n}",...null===(_Menu_parameters1=Modal_stories_Menu.parameters)||void 0===_Menu_parameters1||null===(_Menu_parameters_docs=_Menu_parameters1.docs)||void 0===_Menu_parameters_docs?void 0:_Menu_parameters_docs.source}}},Modal_stories_New.parameters={...Modal_stories_New.parameters,docs:{...null===(_New_parameters=Modal_stories_New.parameters)||void 0===_New_parameters?void 0:_New_parameters.docs,source:{originalSource:"{\n  args: {\n    isOpen: false,\n    enableCloseButton: true,\n    addClassPanel: 'border-blue-500 w-full',\n    children: <NewComponent />\n  },\n  render: ({\n    ...args\n  }) => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <div>\r\n        {isOpen || <button className={`fixed top-4 left-4 z-40 text-4xl px-4 h-16 bg-blue-500 text-white rounded hover:bg-blue-600 min-[1936px]:left-[calc((100%_-_1920px)_/_2)]`} onClick={() => {\n        setIsOpen(true);\n      }}>\r\n            作成\r\n          </button>}\r\n        <meta.component {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />\r\n      </div>;\n  }\n}",...null===(_New_parameters1=Modal_stories_New.parameters)||void 0===_New_parameters1||null===(_New_parameters_docs=_New_parameters1.docs)||void 0===_New_parameters_docs?void 0:_New_parameters_docs.source}}},Modal_stories_Edit.parameters={...Modal_stories_Edit.parameters,docs:{...null===(_Edit_parameters=Modal_stories_Edit.parameters)||void 0===_Edit_parameters?void 0:_Edit_parameters.docs,source:{originalSource:'{\n  args: {\n    isOpen: false,\n    enableCloseButton: true,\n    addClassPanel: \'border-green-600 w-full\',\n    children: <EditComponent memo={demoMemo} closeModal={fn()} />\n  },\n  render: ({\n    ...args\n  }) => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <div className="flex items-center justify-center h-screen">\r\n        {isOpen || <Button type="button" className="bg-green-600 hover:bg-green-700" onClick={() => {\n        setIsOpen(true);\n      }}>\r\n            編集\r\n          </Button>}\r\n        <meta.component {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />\r\n      </div>;\n  }\n}',...null===(_Edit_parameters1=Modal_stories_Edit.parameters)||void 0===_Edit_parameters1||null===(_Edit_parameters_docs=_Edit_parameters1.docs)||void 0===_Edit_parameters_docs?void 0:_Edit_parameters_docs.source}}},Modal_stories_Category.parameters={...Modal_stories_Category.parameters,docs:{...null===(_Category_parameters=Modal_stories_Category.parameters)||void 0===_Category_parameters?void 0:_Category_parameters.docs,source:{originalSource:'{\n  args: {\n    isOpen: false,\n    enableCloseButton: true,\n    addClassPanel: \'border-yellow-500\',\n    children: <CategoryComponent />\n  },\n  render: ({\n    ...args\n  }) => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <div className="flex items-center justify-center h-screen">\r\n        {isOpen || <Button type="button" className="self-center bg-yellow-500 hover:bg-yellow-600" style={{\n        textShadow: \'0.5px 0.5px 0 #000\'\n      }} onClick={() => {\n        setIsOpen(true);\n      }}>\r\n            カテゴリー\r\n          </Button>}\r\n        <meta.component {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />\r\n      </div>;\n  }\n}',...null===(_Category_parameters1=Modal_stories_Category.parameters)||void 0===_Category_parameters1||null===(_Category_parameters_docs=_Category_parameters1.docs)||void 0===_Category_parameters_docs?void 0:_Category_parameters_docs.source}}};const __namedExportsOrder=["Login","Menu","New","Edit","Category"]},"./node_modules/recoil-persist/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var console=__webpack_require__("./node_modules/console-browserify/index.js");exports.x=void 0;exports.x=(config={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};const{key="recoil-persist",storage=localStorage,converter=JSON}=config,updateState=(newValue,state,key,isReset)=>{isReset?delete state[key]:state[key]=newValue,setState(state)},getState=()=>{const toParse=storage.getItem(key);return null==toParse?{}:"string"==typeof toParse?parseState(toParse):"function"==typeof toParse.then?toParse.then(parseState):{}},parseState=state=>{if(void 0===state)return{};try{return converter.parse(state)}catch(e){return console.error(e),{}}},setState=state=>{try{"function"==typeof storage.mergeItem?storage.mergeItem(key,converter.stringify(state)):storage.setItem(key,converter.stringify(state))}catch(e){console.error(e)}};return{persistAtom:({onSet,node,trigger,setSelf})=>{if("get"===trigger){const state=getState();"function"==typeof state.then&&state.then((s=>{s.hasOwnProperty(node.key)&&setSelf(s[node.key])})),state.hasOwnProperty(node.key)&&setSelf(state[node.key])}onSet((async(newValue,_,isReset)=>{const state=getState();"function"==typeof state.then?state.then((s=>updateState(newValue,s,node.key,isReset))):updateState(newValue,state,node.key,isReset)}))}}}}}]);