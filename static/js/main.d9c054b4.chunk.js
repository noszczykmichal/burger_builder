(this.webpackJsonpburger_builder=this.webpackJsonpburger_builder||[]).push([[0],{16:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3yTzk",BreadTop:"BurgerIngredient_BreadTop__2nOcm",Seeds1:"BurgerIngredient_Seeds1__2qgSu",Seeds2:"BurgerIngredient_Seeds2__25idf",Meat:"BurgerIngredient_Meat__2SvOz",Cheese:"BurgerIngredient_Cheese__YYUqz",Salad:"BurgerIngredient_Salad__2x6ZC",Bacon:"BurgerIngredient_Bacon__1m_0n"}},19:function(e,t,n){e.exports={Input:"Input_Input__3O7BG",Label:"Input_Label__2Y7UN",InputElement:"Input_InputElement__lTS0W",InputCheckbox:"Input_InputCheckbox__2pXqb",Invalid:"Input_Invalid__1kmCL"}},21:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1c83j",Open:"SideDrawer_Open__eqAC8",Close:"SideDrawer_Close__cYHby",Logo:"SideDrawer_Logo__3qxcI"}},23:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3sQFO",Label:"BuildControl_Label__2SyQN",Less:"BuildControl_Less__15AWc",More:"BuildControl_More__1htbv"}},27:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3Q4Sc",Logo:"Toolbar_Logo__12vph",DesktopOnly:"Toolbar_DesktopOnly__2an84"}},31:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__dCZkZ"}},32:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem___GVoD",active:"NavigationItem_active__Y0tRx"}},35:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1UqGD",OrderButton:"BuildControls_OrderButton__1hva6",enable:"BuildControls_enable__2cb6f"}},36:function(e,t,n){e.exports={Button:"Button_Button__flhWF",Success:"Button_Success__10HGj",Danger:"Button_Danger__2Fe1S"}},37:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__1hb8q",BurgerContainer:"CheckoutSummary_BurgerContainer__8MBCp"}},38:function(e,t,n){e.exports={Order:"Order_Order__iY-xG",Box:"Order_Box__1xyDt"}},50:function(e,t,n){e.exports={Content:"Layout_Content__3_Kkl"}},51:function(e,t,n){e.exports={Logo:"Logo_Logo__1GpOF"}},52:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__dzRWf"}},53:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2SjnM"}},54:function(e,t,n){e.exports={Burger:"Burger_Burger__1YF_L"}},55:function(e,t,n){e.exports={Modal:"Modal_Modal__1bg6_"}},56:function(e,t,n){e.exports={Loader:"Spinner_Loader__2_DTP",load6:"Spinner_load6__35wS9",round:"Spinner_round__3_r5S"}},57:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1JYhi"}},58:function(e,t,n){e.exports={Auth:"Auth_Auth__23ZFq"}},69:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n.n(a),o=n(24),c=n.n(o),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))},u=n(15),l=n(18),d=n(9),h=n(49),p=(n(69),n(4)),j=n(5),b=n(7),g=n(6),f=n(8),O=function(e){return e.children},m=n(50),v=n.n(m),x=n(27),_=n.n(x),y=n.p+"static/media/burger-logo.ec69c7f6.png",C=n(51),k=n.n(C),I=function(e){return Object(r.jsx)("div",{className:k.a.Logo,children:Object(r.jsx)("img",{src:y,alt:"My Burger"})})},S=n(31),T=n.n(S),N=n(32),D=n.n(N),B=function(e){return Object(r.jsx)("li",{className:D.a.NavigationItem,children:Object(r.jsx)(u.b,{to:e.link,exact:!0,activeClassName:D.a.active,children:e.children})})},A=function(e){var t=Object(r.jsxs)("ul",{className:T.a.NavigationItems,children:[Object(r.jsx)(B,{link:"/",children:"Burger Builder"}),Object(r.jsx)(B,{link:"/auth",children:"Authenticate"})]});return e.isAuthenticated&&(t=Object(r.jsxs)("ul",{className:T.a.NavigationItems,children:[Object(r.jsx)(B,{link:"/",children:"Burger Builder"}),Object(r.jsx)(B,{link:"/my-orders",children:"Orders"}),Object(r.jsx)(B,{link:"/logout",children:"Logout"})]})),t},w=n(52),E=n.n(w),L=function(e){return Object(r.jsxs)("div",{className:E.a.DrawerToggle,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},R=function(e){return Object(r.jsxs)("header",{className:_.a.Toolbar,children:[Object(r.jsx)(L,{clicked:e.drawerToggleClicked}),Object(r.jsx)("div",{className:_.a.Logo,children:Object(r.jsx)(I,{})}),Object(r.jsx)("nav",{className:_.a.DesktopOnly,children:Object(r.jsx)(A,{isAuthenticated:e.isAuth})})]})},H=n(21),P=n.n(H),U=n(53),F=n.n(U),M=function(e){return e.show?Object(r.jsx)("div",{className:F.a.Backdrop,onClick:e.clicked}):null},q=function(e){var t=[P.a.SideDrawer,P.a.Close];return e.open&&(t=[P.a.SideDrawer,P.a.Open]),Object(r.jsxs)(O,{children:[Object(r.jsx)(M,{show:e.open,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),children:[Object(r.jsx)("div",{className:P.a.Logo,children:Object(r.jsx)(I,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(A,{isAuthenticated:e.isAuth})})]})]})},V=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(O,{children:[Object(r.jsx)(R,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(q,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(r.jsx)("main",{className:v.a.Content,children:this.props.children})]})}}]),n}(a.Component),G=Object(d.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(V),Y=n(3),W=n(59),Q=n(54),Z=n.n(Q),z=n(16),J=n.n(z),X=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(r.jsx)("div",{className:J.a.BreadBottom});break;case"bread-top":e=Object(r.jsxs)("div",{className:J.a.BreadTop,children:[Object(r.jsx)("div",{className:J.a.Seeds1}),Object(r.jsx)("div",{className:J.a.Seeds2})]});break;case"meat":e=Object(r.jsx)("div",{className:J.a.Meat});break;case"cheese":e=Object(r.jsx)("div",{className:J.a.Cheese});break;case"salad":e=Object(r.jsx)("div",{className:J.a.Salad});break;case"bacon":e=Object(r.jsx)("div",{className:J.a.Bacon});break;default:e=null}return e}}]),n}(a.Component),$=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(W.a)(Array(e.ingredients[t])).map((function(e,n){return Object(r.jsx)(X,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:'"Please add some ingredients"'})),Object(r.jsxs)("div",{className:Z.a.Burger,children:[Object(r.jsx)(X,{type:"bread-top"}),t,Object(r.jsx)(X,{type:"bread-bottom"})]})},K=n(23),ee=n.n(K),te=function(e){return Object(r.jsxs)("div",{className:ee.a.BuildControl,children:[Object(r.jsx)("div",{className:ee.a.Label,children:e.label}),Object(r.jsx)("button",{className:ee.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(r.jsx)("button",{className:ee.a.More,onClick:e.added,children:"More"})]})},ne=n(35),re=n.n(ne),ae=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ie=function(e){return Object(r.jsxs)("div",{className:re.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current Price: ",Object(r.jsxs)("strong",{children:[e.totalPrice.toFixed(2),"$"]})]}),ae.map((function(t){return Object(r.jsx)(te,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{className:re.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"})]})},oe=n(55),ce=n.n(oe),se=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){console.log("[Modal.js] DidUpdate")}},{key:"render",value:function(){return Object(r.jsxs)(O,{children:[Object(r.jsx)(M,{show:this.props.show,clicked:this.props.modalClosed}),Object(r.jsx)("div",{className:ce.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(a.Component),ue=n(36),le=n.n(ue),de=function(e){return Object(r.jsx)("button",{className:[le.a.Button,le.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled,children:e.children})},he=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidUpdate",value:function(){console.log("[OrderSummary] DidUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.props.ingredients[t]]},t)}));return Object(r.jsxs)(O,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total Price: ",this.props.price.toFixed(2),"$"]})}),Object(r.jsx)("p",{children:"Continue to Checkout?"}),Object(r.jsx)(de,{btnType:"Danger",clicked:this.props.purchaseCancelled,children:"CANCEL"}),Object(r.jsx)(de,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(a.Component),pe=n(56),je=n.n(pe),be=function(){return Object(r.jsx)("div",{className:je.a.Loader,children:"Loading..."})},ge=function(e,t){return function(n){Object(b.a)(i,n);var a=Object(g.a)(i);function i(){var e;Object(p.a)(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(j.a)(i,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(r.jsxs)(O,{children:[Object(r.jsx)(se,{show:this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(Y.a)({},this.props))]})}}]),i}(a.Component)},fe=n(26),Oe=n.n(fe),me=Oe.a.create({baseURL:"https://react-burger-builder-c365e-default-rtdb.europe-west1.firebasedatabase.app/"}),ve="ADD_INGREDIENT",xe="REMOVE_INGREDIENT",_e="SET_INGREDIENTS",ye="FETCH_INGREDIENTS_FAILED",Ce="PURCHASE_BURGER_START",ke="PURCHASE_BURGER_SUCCESS",Ie="PURCHASE_BURGER_FAIL",Se="PURCHASE_INIT",Te="FETCH_ORDERS_START",Ne="FETCH_ORDERS_SUCCESS",De="FETCH_ORDERS_FAIL",Be="DELETE_ORDER_SUCCESS",Ae="DELETE_ORDER_FAIL",we="AUTH_START",Ee="AUTH_SUCCESS",Le="AUTH_FAIL",Re="AUTH_LOGOUT",He="SET_AUTH_REDIRECT_PATH",Pe=function(){return function(e){me.get("https://react-burger-builder-c365e-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json").then((function(t){var n;e((n=t.data,{type:_e,ings:n}))})).catch((function(t){e({type:ye})}))}},Ue=function(e,t){return function(n){n({type:Ce}),me.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:ke,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:Ie,error:e}}(e))}))}},Fe=function(e,t){return function(n){n({type:Te});var r="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';me.get("/orders.json"+r).then((function(e){var t=e.data,r=[];for(var a in t)r.push(Object(Y.a)(Object(Y.a)({},t[a]),{},{id:a}));n({type:Ne,orders:r})})).catch((function(e){n(function(e){return{type:De,error:e}}(e))}))}},Me=function(e,t,n){return function(r){me.put("orders/"+e+".json?auth="+t,{}).then((function(e){r({type:Be}),r(Fe(t,n))})).catch((function(e){r(function(e){return{type:Ae,error:e}}(e))}))}},qe=function(e,t){return{type:Ee,token:e,userId:t}},Ve=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:Re}},Ge=function(e){return function(t){setTimeout((function(){t(Ve())}),e)}},Ye=function(e,t,n){return function(r){r({type:we});var a={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZf0qAiVuZlPvQuuMthmyLQFciIU0y79Q";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZf0qAiVuZlPvQuuMthmyLQFciIU0y79Q"),Oe.a.post(i,a).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),r(qe(e.data.idToken,e.data.localId)),r(Ge(1e3*e.data.expiresIn))})).catch((function(e){r(function(e){return{type:Le,error:e}}(e.response.data.error))}))}},We=function(e){return{type:He,path:e}},Qe=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push({pathname:"/auth"}))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push({pathname:"/checkout"})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=Object(Y.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.props.error?Object(r.jsx)("p",{children:"Ingredients can't be loaded"}):Object(r.jsx)(be,{});return this.props.ings&&(a=Object(r.jsxs)(O,{children:[Object(r.jsx)($,{ingredients:this.props.ings}),Object(r.jsx)(ie,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),totalPrice:this.props.price,ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})]}),n=Object(r.jsx)(he,{ingredients:this.props.ings,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.props.price})),Object(r.jsxs)(O,{children:[Object(r.jsx)(se,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:n}),a]})}}]),n}(a.Component),Ze=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(function(e){return{type:ve,ingredientName:e}}(t))},onIngredientRemoved:function(t){return e(function(e){return{type:xe,ingredientName:e}}(t))},onInitIngredients:function(){return e(Pe())},onInitPurchase:function(){return e({type:Se})},onSetAuthRedirectPath:function(t){return e(We(t))}}}))(ge(Qe,me)),ze=n(37),Je=n.n(ze),Xe=function(e){return Object(r.jsxs)("div",{className:Je.a.CheckoutSummary,children:[Object(r.jsx)("h1",{children:"We hope it tastes well!"}),Object(r.jsx)("div",{className:Je.a.BurgerContainer,children:Object(r.jsx)($,{ingredients:e.ingredients})}),Object(r.jsx)(de,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(r.jsx)(de,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},$e=n(57),Ke=n.n($e),et=n(19),tt=n.n(et),nt=function(e){var t=null,n=[tt.a.InputElement],a=[tt.a.Label];switch(e.invalid&&e.shouldValidate&&e.touched&&(n.push(tt.a.Invalid),a.push(tt.a.Invalid)),e.elementType){case"input":t=Object(r.jsx)("input",Object(Y.a)(Object(Y.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(r.jsx)("textarea",Object(Y.a)(Object(Y.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(r.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;case"input_checkbox":t=Object(r.jsxs)("label",{className:a.join(" "),children:[Object(r.jsx)("input",Object(Y.a)(Object(Y.a)({className:tt.a.InputCheckbox},e.elementConfig),{},{onChange:e.changed})),e.label]});break;default:t=Object(r.jsx)("input",Object(Y.a)(Object(Y.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(r.jsx)("div",{className:tt.a.Input,children:t})},rt=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},validation:{required:!1},value:"cheapest"},consent:{elementType:"input_checkbox",elementConfig:{type:"checkbox",value:"consentGranted"},label:"I agree for the processing of my personal data.",validation:{required:!0},checked:!1,valid:!1,touched:!1}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;var a={ingredients:e.props.ings,price:e.props.price,orderData:n,userId:e.props.userId};e.props.onOrderBurger(a,e.props.token)},e.inputChangedHandler=function(t,n){var r=Object(Y.a)({},e.state.orderForm),a=Object(Y.a)({},r[n]);if("consent"===n){var i=a.checked;a.checked=!i,a.valid=e.checkIfMarked(a.checked,a.validation)}else a.value=t.target.value,a.valid=e.checkValidity(a.value,a.validation);a.touched=!0,r[n]=a;var o=!0;for(var c in r)void 0!==r[c].valid&&(o=r[c].valid&&o);e.setState({orderForm:r,formIsValid:o})},e}return Object(j.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.trim().length>=t.minLength&&n),t.maxLength&&(n=e.trim().length<=t.maxLength&&n),n}},{key:"checkIfMarked",value:function(e,t){return!(!e||!t.required)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=Object(r.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(r.jsx)(nt,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,label:t.config.label,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(r.jsx)(de,{btnType:"Success",disabled:!this.state.formIsValid,children:"ORDER"})]});return this.props.loading&&(a=Object(r.jsx)(be,{})),this.props.purchased&&(a=Object(r.jsx)(f.a,{to:"/"})),Object(r.jsxs)("div",{className:Ke.a.ContactData,children:[Object(r.jsx)("h4",{children:"Enter Your Contact Data"}),a]})}}]),n}(a.Component),at=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,purchased:e.order.purchased,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(Ue(t,n))}}}))(ge(rt,me)),it=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(j.a)(n,[{key:"render",value:function(){var e=Object(r.jsx)(f.a,{to:"/"});return this.props.ings&&(e=Object(r.jsxs)("div",{children:[Object(r.jsx)(Xe,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),Object(r.jsx)(f.b,{path:this.props.match.path+"/contact-data",component:at})]})),e}}]),n}(a.Component),ot=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients}}))(it),ct=n(38),st=n.n(ct),ut=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return Object(r.jsxs)("span",{className:st.a.Box,children:[e.name," (",e.amount,"), "]},e.name)}));return Object(r.jsxs)("div",{className:st.a.Order,children:[Object(r.jsxs)("p",{children:["Ingredient: ",a]}),Object(r.jsxs)("p",{children:["Price:",Object(r.jsxs)("strong",{children:["USD ",e.price]})]}),Object(r.jsx)(de,{btnType:"Danger",children:"DELETE",clicked:e.onButtonClick})]})},lt=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=this,t=Object(r.jsx)(be,{});return this.props.loading||(t=this.props.orders.map((function(t){return Object(r.jsx)(ut,{ingredients:t.ingredients,price:t.price,onButtonClick:function(){return e.props.onDeleteOrder(t.id,e.props.token,e.props.userId)}},t.id)}))),Object(r.jsx)("div",{children:t})}}]),n}(a.Component),dt=Object(d.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(Fe(t,n))},onDeleteOrder:function(t,n,r){return e(Me(t,n,r))}}}))(ge(lt,me)),ht=n(17),pt=n(58),jt=n.n(pt),bt=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0,formIsValid:!1},e.inputChangedHandler=function(t,n){var r=Object(Y.a)(Object(Y.a)({},e.state.controls),{},Object(ht.a)({},n,Object(Y.a)(Object(Y.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0}))),a=!0;for(var i in r)a=!0===r[i].valid&&!0===a;e.setState({controls:r,formIsValid:a})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.building||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath("/")}},{key:"checkValidity",value:function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.trim().length>=t.minLength&&n),t.maxLength&&(n=e.trim().length<=t.maxLength&&n),t.isEmail&&(n=!!e.trim().split("").includes("@")),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return Object(r.jsx)(nt,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)}));this.props.loading&&(a=Object(r.jsx)(be,{}));var i=null,o=null;return this.props.error&&(i=Object(r.jsx)("p",{children:this.props.error.message})),this.props.isAuthenticated&&(o=Object(r.jsx)(f.a,{to:this.props.authRedirectPath})),Object(r.jsxs)("div",{className:jt.a.Auth,children:[o,i,Object(r.jsxs)("form",{onSubmit:this.submitHandler,children:[a,Object(r.jsx)(de,{btnType:"Success",disabled:!this.state.formIsValid,children:"SUBMIT"})]}),Object(r.jsxs)(de,{clicked:this.switchAuthModeHandler,btnType:"Danger",children:["SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"]})]})}}]),n}(a.Component),gt=Object(d.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,building:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,r){return e(Ye(t,n,r))},onSetAuthRedirectPath:function(t){return e(We(t))}}}))(bt),ft=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(r.jsx)(f.a,{to:"/"})}}]),n}(a.Component),Ot=Object(d.b)(null,(function(e){return{onLogout:function(){return e(Ve())}}}))(ft),mt=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=Object(r.jsxs)(f.d,{children:[Object(r.jsx)(f.b,{path:"/auth",component:gt}),Object(r.jsx)(f.b,{path:"/",exact:!0,component:Ze}),Object(r.jsx)(f.a,{to:"/"})]});return this.props.isAuthenticated&&(e=Object(r.jsxs)(f.d,{children:[Object(r.jsx)(f.b,{path:"/checkout",component:ot}),Object(r.jsx)(f.b,{path:"/my-orders",component:dt}),Object(r.jsx)(f.b,{path:"/logout",component:Ot}),Object(r.jsx)(f.b,{path:"/",exact:!0,component:Ze}),Object(r.jsx)(f.a,{to:"/"})]})),Object(r.jsx)("div",{children:Object(r.jsx)(G,{children:e})})}}]),n}(a.Component),vt=Object(d.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var r=localStorage.getItem("userId");e(qe(t,r)),e(Ge(n.getTime()-(new Date).getTime()))}else e(Ve())}else e(Ve())}))}}}))(mt),xt=function(e,t){return Object(Y.a)(Object(Y.a)({},e),t)},_t={ingredients:null,totalPrice:4,error:!1,building:!1},yt={salad:.5,cheese:.4,meat:1.3,bacon:.7},Ct=function(e,t){var n=Object(ht.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r=xt(e.ingredients,n),a=(e.totalPrice+yt[t.ingredientName]).toFixed(2);return a=Number(a),xt(e,{ingredients:r,totalPrice:a,building:!0})},kt=function(e,t){var n=Object(ht.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r=xt(e.ingredients,n),a=(e.totalPrice-yt[t.ingredientName]).toFixed(2);return a=Number(a),xt(e,{ingredients:r,totalPrice:a,building:!0})},It=function(e,t){return xt(e,{ingredients:{salad:t.ings.salad,bacon:t.ings.bacon,cheese:t.ings.cheese,meat:t.ings.meat},totalPrice:4,error:!1,building:!1})},St=function(e,t){return xt(e,{error:!0})},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Ct(e,t);case xe:return kt(e,t);case _e:return It(e,t);case ye:return St(e);default:return e}},Nt={orders:[],loading:!1,purchased:!1},Dt=function(e,t){return xt(e,{purchased:!1})},Bt=function(e,t){return xt(e,{loading:!0})},At=function(e,t){var n=xt(t.orderData,{id:t.orderId});return xt(e,{orders:e.orders.concat(n),loading:!1,purchased:!0})},wt=function(e,t){return xt(e,{loading:!1})},Et=function(e,t){return xt(e,{loading:!0})},Lt=function(e,t){return xt(e,{orders:t.orders,loading:!1})},Rt=function(e,t){return xt(e,{loading:!1})},Ht=function(e,t){return xt(e)},Pt=function(e,t){return xt(e,{error:t.error})},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Dt(e);case Ce:return Bt(e);case ke:return At(e,t);case Ie:return wt(e);case Te:return Et(e);case Ne:return Lt(e,t);case De:return Rt(e);case Be:return Ht(e);case Ae:return Pt(e,t);default:return e}},Ft={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Mt=function(e,t){return xt(e,{error:null,loading:!0})},qt=function(e,t){return xt(e,{token:t.token,userId:t.userId,error:null,loading:!1})},Vt=function(e,t){return xt(e,{error:t.error,loading:!1})},Gt=function(e,t){return xt(e,{token:null,userId:null})},Yt=function(e,t){return xt(e,{authRedirectPath:t.path})},Wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Mt(e);case Ee:return qt(e,t);case Le:return Vt(e,t);case Re:return Gt(e);case He:return Yt(e,t);default:return e}},Qt=Object(l.c)({burgerBuilder:Tt,order:Ut,auth:Wt}),Zt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,zt=Object(l.e)(Qt,Zt(Object(l.a)(h.a))),Jt=Object(r.jsx)(d.a,{store:zt,children:Object(r.jsx)(u.a,{basename:"/burger_builder",children:Object(r.jsx)(vt,{})})});c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Jt}),document.getElementById("root")),s()}},[[89,1,2]]]);
//# sourceMappingURL=main.d9c054b4.chunk.js.map