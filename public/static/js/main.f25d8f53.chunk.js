(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,a){e.exports=a(79)},60:function(e,t,a){},61:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),s=(a(60),a(10)),c=a(11),m=a(14),i=a(12),u=a(15),h=a(21),d=a(19),p=(a(61),a(13)),g=a(84),f=a(86),E=a(81),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).logout=function(){window.confirm("Are you sure you wanna leave?")&&a.props.noUser()},a.loggedHeader=function(){return r.a.createElement(g.a,{bg:"primary"},r.a.createElement(g.a.Brand,{href:"/"},"KcodingT"),r.a.createElement(f.a,null,r.a.createElement(h.b,{to:"/",className:"nav-link"},a.props.storeEmail," is logged"),r.a.createElement(E.a,{onClick:a.logout,className:"logoutBtn"},"Logout")))},a.notLoggedHeader=function(){return r.a.createElement(g.a,{bg:"dark",variant:"dark"},r.a.createElement(g.a.Brand,{href:"/"},"KCodingT"),r.a.createElement(f.a,null,r.a.createElement(h.b,{to:"/login",className:"nav-link"},"Login"),r.a.createElement(h.b,{to:"/register",className:"nav-link"},"Register")))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.storeEmail?this.loggedHeader():this.notLoggedHeader()}}]),t}(n.Component),v=Object(p.b)(function(e){return{storeEmail:e.email,storeUserAdmin:e.userAdmin,storePictureName:e.pictureName}},function(e){return{noUser:function(){return e({type:"LOGOUT"})}}})(b),w=a(87),y=a(85),O=a(82),I=a(53),j=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"htitle"},"User's Home Page"),r.a.createElement("h3",null,"Welcome ",this.props.storeEmail," "),r.a.createElement("br",null),r.a.createElement(w.a,null,r.a.createElement(w.a.Header,{className:"cardTitle"},"User Information"),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{as:O.a,controlId:"formName"},r.a.createElement(y.a.Label,{column:!0,sm:1,className:"card-label"},"Id"),r.a.createElement(I.a,{sm:10},r.a.createElement(y.a.Label,{column:!0,sm:10},this.props.storeId)))),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{as:O.a,controlId:"formName"},r.a.createElement(y.a.Label,{column:!0,sm:1,className:"card-label"},"Name:"),r.a.createElement(I.a,{sm:10},r.a.createElement(y.a.Label,{column:!0,sm:10},this.props.storeName)))),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{as:O.a,controlId:"formName"},r.a.createElement(y.a.Label,{column:!0,sm:1,className:"card-label"},"Email:"),r.a.createElement(I.a,{sm:10},r.a.createElement(y.a.Label,{column:!0,sm:10},this.props.storeEmail)))),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{as:O.a,controlId:"formName"},r.a.createElement(y.a.Label,{column:!0,sm:1,className:"card-label"},"Phone:"),r.a.createElement(I.a,{sm:10},r.a.createElement(y.a.Label,{column:!0,sm:10},this.props.storePhone))))))}}]),t}(n.Component),C=Object(p.b)(function(e){return{storeId:e.id,storeEmail:e.email,storeName:e.name,storePhone:e.phone}},null)(j),P=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"moldura"},r.a.createElement("h1",null,"Landscape Page"),r.a.createElement(w.a,{className:"homePage twothirds"},r.a.createElement("div",{className:"ipsumText"},r.a.createElement("p",null,"Random text over here."),r.a.createElement("p",null,"Random text over here."),r.a.createElement("p",null,"Random text over here."),r.a.createElement("p",null,"Random text over here."))))}}]),t}(n.Component),S=a(24),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",errorMsg:""},a.handleChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value)),"Enter"===e.key&&""!==a.state.email&&"email"===e.target.name&&a.textInput2.focus()},a.handleSubmit=function(e){if(e.preventDefault(),console.log("port",window.location.port),console.log("location.origin",window.location.origin),""!==a.state.email&&""!==a.state.password){var t=window.location.origin+"/login";console.log("URL",t),fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){if("name"in e){var t=e;a.props.dispatchLogin({user:t})}else"message"in e&&(a.setState({errorMsg:e.message,email:"",password:""}),a.textInput1.focus(),a.clearMsg())}).catch(function(e){console.error(e),a.setState({errorMsg:e.message}),a.clearMsg()})}},a.clearMsg=function(){setTimeout(function(){a.setState({errorMsg:""})},3500)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login Page"),r.a.createElement(w.a,null,r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"User's Email"),r.a.createElement(y.a.Control,{autoFocus:!0,type:"email",placeholder:"Type the user's email",name:"email",onChange:this.handleChange,onKeyPress:this.handleChange,value:this.state.email,ref:function(t){return e.textInput1=t}}),r.a.createElement(y.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange,onKeyPress:this.handleChange,ref:function(t){return e.textInput2=t}}),r.a.createElement("p",{id:"errorMsg"},this.state.errorMsg)),r.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit"))))}}]),t}(n.Component),N=Object(p.b)(null,function(e){return{dispatchLogin:function(t){return e({type:"LOGIN",data:t})}}})(L),x=a(83),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",password:"",confirmPassword:"",redirectFlag:!1,errorMsg:""},a.handleChange=function(e){if("Enter"===e.key)switch(e.target.name){case"name":""!==a.state.name&&a.textInput2.focus();break;case"email":""!==a.state.email&&a.textInput3.focus();break;case"phone":a.textInput4.focus();break;case"password":""!==a.state.password&&a.textInput5.focus()}a.setState(Object(S.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),a.state.phone.length>8)alert("Maximum length of Phone is\n                10 numbers!"),a.textInput3.focus();else if(""!==a.state.email&&""!==a.state.name&&""!==a.state.password&&""!==a.state.confirmPassword)if(a.state.password!==a.state.confirmPassword)alert("Password and \nConfirm Password fields\n\nMUST be the same."),a.setState({password:"",confirmPassword:""}),a.textInput4.focus();else{fetch("http://localhost:3333/user/new",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password,phone:a.state.phone})}).then(function(e){return e.json()}).then(function(e){if("name"in e){var t={id:e.id,name:e.name,email:e.email,phone:e.phone};a.props.dispatchLogin({user:t}),a.setState({redirectFlag:!0})}else"message"in e&&(a.setState({errorMsg:e.message}),a.clearMessage())}).catch(function(e){console.error(e),a.setState({errorMsg:e.message})})}},a.clearMessage=function(){setTimeout(function(){a.setState({errorMsg:"",name:"",email:"",phone:"",password:"",confirmPassword:""}),a.textInput1.focus()},3500)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirectFlag?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Register Page"),r.a.createElement(w.a,null,r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,{controlId:"formName"},r.a.createElement(y.a.Label,null,"Name"),r.a.createElement(y.a.Control,{autoFocus:!0,type:"text",placeholder:"Type the user's name",name:"name",onChange:this.handleChange,value:this.state.name,onKeyPress:this.handleChange,ref:function(t){return e.textInput1=t}})),r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Type the user's email",name:"email",onChange:this.handleChange,value:this.state.email,onKeyPress:this.handleChange,ref:function(t){return e.textInput2=t}})),r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"Phone number"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Type the user's phone",name:"phone",onChange:this.handleChange,value:this.state.phone,onKeyPress:this.handleChange,ref:function(t){return e.textInput3=t}})),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,onKeyPress:this.handleChange,ref:function(t){return e.textInput4=t}})),r.a.createElement(y.a.Group,{controlId:"formConfirmPassword"},r.a.createElement(y.a.Label,null,"Confirm Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Confirm Password",name:"confirmPassword",onChange:this.handleChange,value:this.state.confirmPassword,onKeyPress:this.handleChange,ref:function(t){return e.textInput5=t}})),r.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit"),r.a.createElement(x.a,null,this.state.errorMsg))))}}]),t}(n.Component),M=Object(p.b)(null,function(e){return{dispatchLogin:function(t){return e({type:"LOGIN",data:t})}}})(k);function T(){return r.a.createElement("div",{className:"moldura"},r.a.createElement("h1",null,"Error 404 - Page doesn't exist!"))}var G=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return e.props.storeEmail?r.a.createElement(C,null):r.a.createElement(P,null)}}),r.a.createElement(d.b,{exact:!0,path:"/lands",render:function(){return e.props.storeEmail?r.a.createElement(C,null):r.a.createElement(P,null)}}),r.a.createElement(d.b,{path:"/login",render:function(){return e.props.storeEmail?r.a.createElement(d.a,{to:"/"}):r.a.createElement(N,null)}}),r.a.createElement(d.b,{path:"/register",component:M}),r.a.createElement(d.b,{component:T}))))}}]),t}(n.Component),B=Object(p.b)(function(e){return{storeEmail:e.email}},null)(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(29),K=a(41),R=function(){try{var e={id:localStorage.getItem("id"),name:localStorage.getItem("name"),email:localStorage.getItem("email"),phone:localStorage.getItem("phone")};return e||void 0}catch(t){return}},A={},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=Object(K.a)({},e);return"LOGIN"===t.type?(console.log("reducer",t.data),function(e){try{localStorage.setItem("id",e.id),localStorage.setItem("email",e.email),localStorage.setItem("name",e.name),localStorage.setItem("phone",e.phone)}catch(t){return t.message}}(a=Object(K.a)({},e,{id:t.data.user.id,email:t.data.user.email,name:t.data.user.name,phone:t.data.user.phone}))):"LOGOUT"===t.type&&(a={id:void 0,email:void 0,name:void 0,phone:void 0},localStorage.removeItem("id"),localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("phone")),a},F={id:R().id,email:R().email,name:R().name,phone:R().phone},J=Object(U.b)(H,F);J.subscribe(function(){console.log("store.subscribe- ",J.getState())});var W=J;l.a.render(r.a.createElement(p.a,{store:W},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.f25d8f53.chunk.js.map