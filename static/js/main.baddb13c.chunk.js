(this["webpackJsonpanimal-adoption"]=this["webpackJsonpanimal-adoption"]||[]).push([[0],{129:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(35),i=a.n(s),r=(a(129),a(7)),l=(a(93),a(94),a(30)),d=a.n(l),o="https://scary-vault-59712.herokuapp.com/api/auth/",j=function(e,t,a){return d.a.post(o+"signup",{username:e,email:t,password:a})},u=function(e,t){return d.a.post(o+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},b=function(){localStorage.removeItem("user")},m=function(){return JSON.parse(localStorage.getItem("user"))},h=a(244),O=a(245),x=a(74),p=a(31),g=a(15),f=a(69),v=a.n(f),N=a(46),y=a.n(N),A=a(70),w=a.n(A),D=a(0),I=function(e){if(!e)return Object(D.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},L=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useState)(""),s=Object(r.a)(c,2),i=s[0],l=s[1],d=Object(n.useState)(""),o=Object(r.a)(d,2),j=o[0],b=o[1],m=Object(n.useState)(!1),h=Object(r.a)(m,2),O=h[0],x=h[1],p=Object(n.useState)(""),g=Object(r.a)(p,2),f=g[0],N=g[1];return Object(D.jsx)("div",{className:"col-md-12",children:Object(D.jsxs)("div",{className:"card card-container",children:[Object(D.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(D.jsxs)(v.a,{onSubmit:function(n){n.preventDefault(),N(""),x(!0),t.current.validateAll(),0===a.current.context._errors.length?u(i,j).then((function(){e.history.push("/browse"),window.location.reload()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();x(!1),N(t)})):x(!1)},ref:t,children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"username",children:"Username"}),Object(D.jsx)(y.a,{type:"text",className:"form-control",name:"username",value:i,onChange:function(e){var t=e.target.value;l(t)},validations:[I]})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"password",children:"Password"}),Object(D.jsx)(y.a,{type:"password",className:"form-control",name:"password",value:j,onChange:function(e){var t=e.target.value;b(t)},validations:[I]})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("br",{}),Object(D.jsxs)("button",{className:"btn btn-primary mx-auto d-block",disabled:O,children:[O&&Object(D.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(D.jsx)("span",{children:"Login"})]})]}),f&&Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("div",{className:"alert alert-danger",role:"alert",children:f})}),Object(D.jsx)(w.a,{style:{display:"none"},ref:a})]})]})})},G=a(119),C=function(e){if(!e)return Object(D.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},R=function(e){if(!Object(G.isEmail)(e))return Object(D.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},S=function(e){if(e.length<3||e.length>10)return Object(D.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 10 characters."})},Z=function(e){if(e.length<5||e.length>16)return Object(D.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 5 and 16 characters."})},M=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useState)(""),s=Object(r.a)(c,2),i=s[0],l=s[1],d=Object(n.useState)(""),o=Object(r.a)(d,2),u=o[0],b=o[1],m=Object(n.useState)(""),h=Object(r.a)(m,2),O=h[0],x=h[1],p=Object(n.useState)(!1),g=Object(r.a)(p,2),f=g[0],N=g[1],A=Object(n.useState)(""),I=Object(r.a)(A,2),L=I[0],G=I[1];return Object(D.jsx)("div",{className:"col-md-12",children:Object(D.jsxs)("div",{className:"card card-container",children:[Object(D.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(D.jsxs)(v.a,{onSubmit:function(e){e.preventDefault(),G(""),N(!1),t.current.validateAll(),0===a.current.context._errors.length&&j(i,u,O).then((function(e){G(e.data.message),N(!0)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();G(t),N(!1)}))},ref:t,children:[!f&&Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"username",children:"Username"}),Object(D.jsx)(y.a,{type:"text",className:"form-control",name:"username",value:i,onChange:function(e){var t=e.target.value;l(t)},validations:[C,S]})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"email",children:"Email"}),Object(D.jsx)(y.a,{type:"text",className:"form-control",name:"email",value:u,onChange:function(e){var t=e.target.value;b(t)},validations:[C,R]})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"password",children:"Password"}),Object(D.jsx)(y.a,{type:"password",className:"form-control",name:"password",value:O,onChange:function(e){var t=e.target.value;x(t)},validations:[C,Z]})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("br",{}),Object(D.jsx)("button",{className:"btn btn-primary mx-auto d-block",children:"Sign Up"})]})]}),L&&Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("div",{className:f?"alert alert-success":"alert alert-danger",role:"alert",children:L})}),Object(D.jsx)(w.a,{style:{display:"none"},ref:a})]})]})})},T=function(){return Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("header",{className:"jumbotron",children:Object(D.jsx)("h1",{children:" Home page "})})})},F=a(47),B=a(243),P=a(120),Y=a(24),k=function(e){var t=m();return Object(D.jsxs)(F.a,{style:{width:"18rem"},children:[Object(D.jsx)(F.a.Img,{variant:"top",src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg"}),Object(D.jsxs)(F.a.Body,{children:[Object(D.jsx)(F.a.Title,{children:e.name}),Object(D.jsx)(F.a.Text,{children:e.breed}),Object(D.jsx)(F.a.Text,{children:e.description})]}),Object(D.jsx)(B.a,{className:"list-group-flush",children:Object(D.jsxs)(P.a,{children:["Added on ",e.date]})}),t.roles.includes("ROLE_ADMIN")&&Object(D.jsx)(F.a.Body,{children:Object(D.jsx)(Y.a,{href:"/addPet",children:"Edit"})})]})},E=a(8),H=a(13),W=[{name:"Fluffy",breed:"Pitbull",description:"Very good pet. Good with other aninals and kids!",date:"10/12/2021"},{name:"Fluffy",breed:"Pitbull",description:"Very good pet. Good with other aninals and kids!",date:"10/12/2021"},{name:"Fluffy",breed:"Pitbull",description:"Very good pet. Good with other aninals and kids!",date:"10/12/2021"},{name:"Fluffy",breed:"Pitbull",description:"Very good pet. Good with other aninals and kids!",date:"10/12/2021"},{name:"Fluffy",breed:"Pitbull",description:"Very good pet. Good with other aninals and kids!",date:"10/12/2021"},{name:"Fluffy",breed:"Pitbull",description:"Very good pet. Good with other aninals and kids!",date:"10/12/2021"},{name:"Fluffy",breed:"Pitbull",description:"Very good pet. Good with other aninals and kids!",date:"10/12/2021"}],V=function(){var e=W.map((function(e,t){return Object(D.jsx)(E.a,{children:Object(D.jsx)(k,{name:e.name,description:e.description,breed:e.breed,date:e.date},t)})}));return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(x.a,{children:Object(D.jsx)(H.a,{children:e})})})},z=function(){return m()?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{children:Object(D.jsx)("strong",{children:"Browse Page"})}),Object(D.jsx)(V,{})]}):Object(D.jsx)("div",{children:Object(D.jsx)("h3",{children:Object(D.jsx)("strong",{children:"403: Access Forbiden"})})})},Q=a(121),X=a(2),J=a(36),U=function(e){return Object(D.jsxs)(J.a,Object(X.a)(Object(X.a)({},e),{},{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(D.jsx)(J.a.Header,{closeButton:!0,children:Object(D.jsx)("h4",{children:e.message.header})}),Object(D.jsx)(J.a.Body,{children:Object(D.jsx)("p",{children:e.message.body})}),Object(D.jsx)(J.a.Footer,{children:Object(D.jsx)(Y.a,{onClick:e.onHide,children:" Close "})})]}))},q=a(9),K=function(e){return Object(D.jsxs)(c.a.Fragment,{children:[Object(D.jsx)("div",{className:"d-flex justify-content-center mb-3",children:Object(D.jsx)("h2",{children:" Add a Pet "})}),Object(D.jsxs)(q.a.Group,{as:H.a,className:"mb-3 justify-content-center",children:[Object(D.jsx)(E.a,{sm:3,children:Object(D.jsxs)(q.a.Label,{children:[" ",Object(D.jsx)("span",{children:" Pet Name "}),Object(D.jsx)("span",{className:"text-danger",children:" *"})," "]})}),Object(D.jsx)(E.a,{sm:6,children:Object(D.jsx)(q.a.Control,{type:"text",name:"petName",placeholder:"Pet Name"})})]})]})},_=a(34),$=a(14),ee=function(e){return Object(D.jsx)("fieldset",{children:Object(D.jsxs)(q.a.Group,{as:H.a,className:"mb-3 justify-content-center",controlId:"type",onSelect:e.typeChange,children:[Object(D.jsx)(E.a,{sm:3,children:Object(D.jsxs)(q.a.Label,{children:[" ",Object(D.jsx)("span",{children:" Type "}),Object(D.jsx)("span",{className:"text-danger",children:" *"})," "]})}),Object(D.jsx)(E.a,{sm:6,children:Object(D.jsxs)(_.a,{type:"radio",name:"type",value:e.typeSelected,onChange:e.typeChange,children:[Object(D.jsx)($.a,{variant:"outline-primary",id:"type-dog",value:"Dog",children:"Dog"}),Object(D.jsx)($.a,{variant:"outline-primary",id:"type-cat",value:"Cat",children:"Cat"}),Object(D.jsx)($.a,{variant:"outline-primary",id:"type-other",value:"Other",children:"Other"})]})})]})})},te=function(e){return Object(D.jsxs)(q.a.Group,{as:H.a,className:"mb-3 justify-content-center",children:[Object(D.jsx)(E.a,{sm:3,children:Object(D.jsxs)(q.a.Label,{children:[" ",Object(D.jsx)("span",{children:" Breed "}),Object(D.jsx)("span",{className:"text-danger",children:" *"})," "]})}),Object(D.jsx)(E.a,{sm:6,children:Object(D.jsxs)(q.a.Select,{defaultValue:"Select Breed...",name:"breed",children:[Object(D.jsx)("option",{value:"--Select Breed--",children:" --Select Breed-- "}),e.breeds.map((function(e,t){return Object(D.jsx)("option",{value:e,children:e},"breed-".concat(t))}))]})})]})},ae=function(e){return Object(D.jsx)("fieldset",{children:Object(D.jsxs)(q.a.Group,{as:H.a,className:"mb-3 justify-content-center",children:[Object(D.jsx)(E.a,{sm:3,children:Object(D.jsxs)(q.a.Label,{children:[" ",Object(D.jsx)("span",{children:" Age "}),Object(D.jsx)("span",{className:"text-danger",children:" *"})," "]})}),Object(D.jsx)(E.a,{sm:6,children:Object(D.jsxs)(_.a,{type:"radio",name:"age",defaultValue:"Young",children:[Object(D.jsx)($.a,{variant:"outline-primary",id:"age-young",value:"Young",children:"Young"}),Object(D.jsx)($.a,{variant:"outline-primary",id:"age-adult",value:"Adult",children:"Adult"}),Object(D.jsx)($.a,{variant:"outline-primary",id:"age-senior",value:"Senior",children:"Senior"})]})})]})})},ne=function(e){return Object(D.jsx)("fieldset",{children:Object(D.jsxs)(q.a.Group,{as:H.a,className:"mb-3 justify-content-center",children:[Object(D.jsx)(E.a,{sm:3,children:Object(D.jsx)(q.a.Label,{children:" Disposition "})}),Object(D.jsx)(E.a,{sm:6,children:Object(D.jsxs)(_.a,{type:"checkbox",name:"disposition",className:"mb-2",children:[Object(D.jsx)($.a,{id:"pet-kids",variant:"outline-primary",value:"Good with children",children:"Good with children"}),Object(D.jsx)($.a,{id:"pet-animals",variant:"outline-primary",value:"Good with other animals",children:"Good with other animals"}),Object(D.jsx)($.a,{id:"pet-leashed",variant:"outline-primary",value:"Must be leashed at all times",children:"Must be leashed at all times"})]})})]})})},ce=function(e){return Object(D.jsx)("fieldset",{children:Object(D.jsxs)(q.a.Group,{as:H.a,className:"mb-3 justify-content-center",children:[Object(D.jsx)(E.a,{sm:3,children:Object(D.jsxs)(q.a.Label,{children:[" ",Object(D.jsx)("span",{children:" Neutered / Spayed "}),Object(D.jsx)("span",{className:"text-danger",children:" *"})," "]})}),Object(D.jsx)(E.a,{sm:6,children:Object(D.jsxs)(_.a,{type:"radio",name:"fixed",defaultValue:!0,children:[Object(D.jsx)($.a,{variant:"outline-primary",id:"fixed-true",value:!0,children:"Yes"}),Object(D.jsx)($.a,{variant:"outline-primary",id:"fixed-false",value:!1,children:"No"})]})})]})})},se=function(e){return Object(D.jsx)("fieldset",{children:Object(D.jsxs)(q.a.Group,{as:H.a,className:"mb-3 justify-content-center",children:[Object(D.jsx)(E.a,{sm:3,children:Object(D.jsxs)(q.a.Label,{children:[" ",Object(D.jsx)("span",{children:" Availability "}),Object(D.jsx)("span",{className:"text-danger",children:" *"})," "]})}),Object(D.jsx)(E.a,{sm:6,children:Object(D.jsxs)(_.a,{type:"radio",name:"availability",defaultValue:"Available",children:[Object(D.jsx)($.a,{variant:"outline-primary",id:"available",value:"Available",children:"Available"}),Object(D.jsx)($.a,{variant:"outline-primary",id:"not-available",value:"Not Available",children:"Not Available"}),Object(D.jsx)($.a,{variant:"outline-primary",id:"pending",value:"Pending",children:"Pending"}),Object(D.jsx)($.a,{variant:"outline-primary",id:"adopted",value:"Adopted",children:"Adopted"})]})})]})})},ie=function(e){return Object(D.jsxs)(q.a.Group,{as:H.a,className:"mb-3 justify-content-center",children:[Object(D.jsx)(E.a,{sm:3,children:Object(D.jsxs)(q.a.Label,{children:[" ",Object(D.jsx)("span",{children:" Description "}),Object(D.jsx)("span",{className:"text-danger",children:" *"})," "]})}),Object(D.jsx)(E.a,{sm:6,children:Object(D.jsx)(q.a.Control,{as:"textarea",rows:5,name:"description"})})]})},re="https://scary-vault-59712.herokuapp.com/pets",le={create:function(e){return d.a.post(re,e).then((function(e){return e.data}))},getAll:function(){return d.a.get(re).then((function(e){return e.data}))},getOne:function(e){return d.a.get("".concat(re,"/").concat(e)).then((function(e){return e.data}))},getPetImages:function(e){return d.a.get("".concat(re,"/").concat(e,"/images")).then((function(e){return e.data}))}},de="https://scary-vault-59712.herokuapp.com/images",oe={create:function(e){return d.a.post(de,e).then((function(e){return e.data}))},getAll:function(){return d.a.get(de).then((function(e){return e.data}))},getOne:function(e){return d.a.get("".concat(de,"/").concat(e)).then((function(e){return e.data}))}},je=function(e){var t=["Beagle","Boxer","Chihuahua","Golden Retriever","Mixed","Poodle","Pug"],a=["Bombay","Calico","Domestic Shorthair","Siamese","Tabby","Tuxedo"],c=["Bearded Dragon","Bird","Chinchilla","Guinea Pig","Other","Pot Bellied Pig","Rabbit","Turtle"],s=[{header:"Success!",body:"New pet added!"},{header:"Oops!",body:"Select up to 3 files"},{header:"Oops!",body:"Fill in all required fields"}],i=Object(n.useState)(!1),l=Object(r.a)(i,2),d=l[0],o=l[1],j=Object(n.useState)(s[0]),u=Object(r.a)(j,2),b=u[0],m=u[1],h=Object(n.useState)(Math.random()),O=Object(r.a)(h,2),p=O[0],g=O[1],f=Object(n.useState)(Math.random()),v=Object(r.a)(f,2),N=v[0],y=v[1],A=Object(n.useState)("Dog"),w=Object(r.a)(A,2),I=w[0],L=w[1],G=Object(n.useState)(t),C=Object(r.a)(G,2),R=C[0],S=C[1],Z={disposition:[]},M=[];return Object(D.jsxs)(x.a,{fluid:"md",className:"px-5 my-5 mx-auto",children:[Object(D.jsx)(U,{show:d,onHide:function(){o(!1)},message:b}),Object(D.jsxs)(q.a,{onSubmit:function(e){e.preventDefault();var t,a=!0,n=new FormData(e.currentTarget),c=Object(Q.a)(n.entries());try{for(c.s();!(t=c.n()).done;){var i=Object(r.a)(t.value,2),l=i[0],d=i[1];if("disposition"===l)Z[l].push(d);else if("pictures"!==l){if("petName"===l&&""===d||"breed"===l&&"--Select Breed--"===d||"description"===l&&""===d){a=!1,m(s[2]),o(!0),e.target[l].focus();break}Z[l]=d}}}catch(j){c.e(j)}finally{c.f()}Z.dateAdded=(new Date).toISOString().substring(0,10),a&&le.create(Z).then((function(e){if(0!==M.length){var t=M.map((function(t){return oe.create({pet_id:e._id,file:t})}));Promise.all(t).then((function(e){console.log(e)}))}m(s[0]),o(!0),L("Dog"),g(Math.random())}))},children:[Object(D.jsx)(K,{}),Object(D.jsx)(ee,{typeChange:function(e){L(e),S("Dog"===e?t:"Cat"===e?a:c)},typeSelected:I}),Object(D.jsx)(te,{breeds:R}),Object(D.jsx)(ae,{}),Object(D.jsx)(ne,{}),Object(D.jsx)(ce,{}),Object(D.jsx)(se,{}),Object(D.jsx)(ie,{}),Object(D.jsxs)(q.a.Group,{as:H.a,className:"mb-3 justify-content-center",children:[Object(D.jsx)(E.a,{sm:3,children:Object(D.jsxs)(q.a.Label,{children:[" ",Object(D.jsx)("div",{children:"Images"})," "]})}),Object(D.jsxs)(E.a,{sm:6,children:[Object(D.jsx)(q.a.Control,{type:"file",accept:"image/*",multiple:!0,name:"pictures",onChange:function(e){M.length=0;var t=e.target.files.length;if(t>3)y(Math.random()),m(s[1]),o(!0);else for(var a=0;a<t;a++){var n=e.target.files[a],c=new FileReader;c.onload=function(e){M.push(e.target.result)},c.readAsDataURL(n)}}},N),Object(D.jsx)("div",{className:"text-muted text-center my-1",children:"select up to three image files"})]})]}),Object(D.jsx)(H.a,{className:"justify-content-center",children:Object(D.jsx)(E.a,{sm:9,className:"text-center d-grid",children:Object(D.jsx)(Y.a,{type:"submit",className:"mt-3",variant:"primary",value:"Submit",children:"Add Pet"})})})]},p)]})},ue=function(){var e=m();return e&&e.roles.includes("ROLE_ADMIN")?Object(D.jsx)(je,{}):Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("header",{className:"jumbotron",children:Object(D.jsx)("h3",{children:Object(D.jsx)("strong",{children:"403: Access Forbiden"})})})})},be=function(){var e=m();return e?Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("header",{className:"jumbotron",children:Object(D.jsx)("h1",{children:Object(D.jsx)("strong",{children:"Profile Page"})})}),Object(D.jsxs)("p",{children:[Object(D.jsx)("strong",{children:"Token:"})," ",e.accessToken,e.accessToken]}),Object(D.jsxs)("p",{children:[Object(D.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(D.jsxs)("p",{children:[Object(D.jsx)("strong",{children:"username:"})," ",e.username]}),Object(D.jsxs)("p",{children:[Object(D.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(D.jsx)("strong",{children:"Authorities:"}),Object(D.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(D.jsx)("li",{children:e},t)}))})]}):Object(D.jsx)("div",{children:Object(D.jsx)("h3",{children:Object(D.jsx)("strong",{children:"403: Access Forbiden"})})})},me=function(){return Object(D.jsxs)(x.a,{children:[Object(D.jsxs)(q.a,{children:[Object(D.jsxs)(q.a.Group,{className:"mb-3",children:[Object(D.jsx)(q.a.Label,{children:"Headline"}),Object(D.jsx)(q.a.Control,{type:"headline"})]}),Object(D.jsxs)(q.a.Group,{className:"mb-3",children:[Object(D.jsx)(q.a.Label,{children:"News Blurb"}),Object(D.jsx)(q.a.Control,{as:"textarea",rows:5})]})]}),Object(D.jsx)(Y.a,{variant:"primary",type:"submit",children:"Submit"})]})},he=function(){var e=m();return e&&e.roles.includes("ROLE_ADMIN")?Object(D.jsx)(me,{}):Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("header",{className:"jumbotron",children:Object(D.jsx)("h3",{children:Object(D.jsx)("strong",{children:"403: Access Forbiden"})})})})},Oe=function(e){return Object(D.jsxs)(F.a,{className:"w-auto p-3",children:[Object(D.jsxs)(F.a.Body,{children:[Object(D.jsx)(F.a.Title,{children:e.headline}),Object(D.jsx)(F.a.Text,{children:e.content})]}),Object(D.jsx)(F.a.Footer,{className:"text-muted",children:"2 hours ago"})]})},xe=[{headline:"Headline 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."},{headline:"Headline 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."},{headline:"Headline 3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."},{headline:"Headline 4",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."},{headline:"Headline 5",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."},{headline:"Headline 6",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."},{headline:"Headline 7",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."},{headline:"Headline 8",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."},{headline:"Headline 9",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."},{headline:"Headline 10",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."}],pe=function(){var e=xe.map((function(e,t){return Object(D.jsx)(Oe,{headline:e.headline,content:e.content},t)}));return Object(D.jsx)(x.a,{children:e})},ge=function(){return m()?Object(D.jsx)(pe,{}):Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("header",{className:"jumbotron",children:Object(D.jsx)("h3",{children:Object(D.jsx)("strong",{children:"403: Access Forbiden"})})})})},fe=a(92),ve=(a(234),function(e){var t=e.imgs.map((function(e){return e.imgData})).map((function(e,t){return Object(D.jsx)(fe.a.Item,{children:Object(D.jsx)("div",{className:"d-flex justify-content-center",children:Object(D.jsx)("img",{className:"carousel-pic",src:e,alt:"slide-".concat(t+1)})})},"slide-".concat(t+1))}));return Object(D.jsx)(c.a.Fragment,{children:Object(D.jsx)(fe.a,{className:"pic-slides bg-dark",children:t})})}),Ne=(a(235),function(e){return Object(D.jsx)("div",{className:"d-flex justify-content-center",children:Object(D.jsx)("img",{className:"singleslide",src:e.imgs[0].imgData,alt:"slide-1"})})}),ye=function(e){var t={header:"A new forever friend is in your future!",body:"Notify us about your interest in ".concat(e.petname," and someone from our team will reach out to you soon!")},a={header:"Email Sent!",body:"Thanks for your interest in ".concat(e.petname,"!")},c=Object(n.useState)(t),s=Object(r.a)(c,2),i=s[0],l=s[1];return Object(D.jsxs)(J.a,Object(X.a)(Object(X.a)({},e),{},{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(D.jsx)(J.a.Header,{closeButton:!0,children:Object(D.jsx)("h4",{children:i.header})}),Object(D.jsx)(J.a.Body,{children:Object(D.jsx)("p",{children:i.body})}),Object(D.jsxs)(J.a.Footer,{children:[i.header===t.header&&Object(D.jsxs)(Y.a,{onClick:function(e){l(a)},children:[" Adopt ",e.petname," "]}),Object(D.jsx)(Y.a,{onClick:e.onHide,children:" Close "})]})]}))},Ae=function(e){return Object(D.jsxs)(F.a,{className:"p-3",children:[Object(D.jsx)(F.a.Title,{className:"fs-4 fw-bold",children:e.petData.petName}),Object(D.jsx)(F.a.Subtitle,{className:"mb-4",children:e.petData.availability}),Object(D.jsxs)(F.a.Subtitle,{className:"mb-2",children:[e.petData.age," | ",e.petData.type," | ",e.petData.breed," | ",e.petData.fixed?"Neutered / Spayed":"Not Neutered / Spayed"]}),Object(D.jsx)(F.a.Subtitle,{className:"mb-4",children:e.petData.disposition.join(" | ")}),Object(D.jsx)(F.a.Text,{children:e.petData.description}),Object(D.jsxs)(H.a,{children:[Object(D.jsx)(E.a,{className:"mt-auto",children:Object(D.jsxs)("span",{className:"text-muted",children:[" Added: ",e.petData.dateAdded," "]})}),Object(D.jsx)(E.a,{children:Object(D.jsx)(Y.a,{className:"float-end",onClick:e.showModal,children:" Adopt Me! "})})]})]})},we=(a(236),"617eeb7e55c9b903d3789e16"),De=[],Ie=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(),l=Object(r.a)(i,2),d=l[0],o=l[1],j=Object(n.useState)(),u=Object(r.a)(j,2),b=u[0],m=u[1];d&&(-1===De.indexOf(d.availability)&&De.push(d.availability),-1===De.indexOf(d.type)&&De.push(d.type),-1===De.indexOf(d.breed)&&De.push(d.breed),-1===De.indexOf(d.age)&&De.push(d.age),d.disposition.forEach((function(e){-1===De.indexOf(e)&&De.push(e)})));var h=De.map((function(e,t){return Object(D.jsx)(Y.a,{className:"mx-1 mt-1",variant:"outline-primary",size:"sm",children:e},"tag-".concat(t))}));return Object(n.useEffect)((function(){le.getOne(we).then((function(e){o(e)})),le.getPetImages(we).then((function(e){m(e)}))}),[]),Object(D.jsxs)(x.a,{children:[d&&Object(D.jsx)(ye,{petname:d.petName,show:c,onHide:function(){s(!1)}}),Object(D.jsxs)(H.a,{className:"petprofile",children:[b&&b.length>1?Object(D.jsx)(E.a,{lg:6,children:Object(D.jsx)(ve,{imgs:b})}):null,b&&1===b.length?Object(D.jsx)(E.a,{lg:6,children:Object(D.jsx)(Ne,{imgs:b})}):null,Object(D.jsx)(E.a,{className:"d-flex align-items-center mx-auto",lg:6,children:Object(D.jsxs)(H.a,{children:[Object(D.jsx)(E.a,{lg:12,children:d&&Object(D.jsx)(Ae,{petData:d,showModal:function(){s(!0)}})}),Object(D.jsxs)(E.a,{className:"mt-3",children:[d&&Object(D.jsx)("div",{children:"Tags: "}),h]})]})})]})]})},Le=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(void 0),i=Object(r.a)(s,2),l=i[0],d=i[1];Object(n.useEffect)((function(){var e=m();e&&(d(e),c(e.roles.includes("ROLE_ADMIN")))}),[]);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(h.a,{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(D.jsxs)(x.a,{children:[Object(D.jsx)(h.a.Brand,{children:Object(D.jsx)(p.b,{to:"/",className:"navbar-brand",children:Object(D.jsx)("img",{className:"Logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAAA8CAYAAAC0LwViAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTAtMjZUMjE6MTk6MzItMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTEwLTMxVDE0OjI3OjAyLTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTMxVDE0OjI3OjAyLTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRiM2I0MDljLTBlY2MtNGRhOC04ZWFmLTQ0MDFmOWM0NmNhMiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZlMmM3NDAwLTEyZmItNzU0NC04NWVjLTY0YjJjYWE2ODJlMCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmY1MDAyYjFmLTI4MGYtNDZjNC05Nzg1LTU4NDk0ZmM5MmMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjUwMDJiMWYtMjgwZi00NmM0LTk3ODUtNTg0OTRmYzkyYzAwIiBzdEV2dDp3aGVuPSIyMDIxLTEwLTI2VDIxOjE5OjMyLTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGIzYjQwOWMtMGVjYy00ZGE4LThlYWYtNDQwMWY5YzQ2Y2EyIiBzdEV2dDp3aGVuPSIyMDIxLTEwLTMxVDE0OjI3OjAyLTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7chQjBAAASCUlEQVR42u1dCZQWNRLOMFyDIogiwyECcijKtaCo4IWAeIuAKKLrxToiKrgrCOKCLii44oUHugLjAXihooiKXCpy6yC36OCICIzcDCKC8G/V6/ofTUynk3T+HpnJ9973ZvqqpJP81UlVUklLJBLMwcHBIQ6UcEXg4OAQF0rGmFYlYH1gHWAmsCLwADCNrucDfwGuAq4B7nbV4+DgFI4OqgHPB54DPJ2UzVEhz2wA5gLnAWcRf3VV5eBw+CMtRTacLsDuwAuBZSLK2gR8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",alt:"PetMate"})})}),Object(D.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(D.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(D.jsxs)(O.a,{children:[a&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(p.b,{to:"/addPet",className:"nav-link",children:"Add Pet"}),Object(D.jsx)(p.b,{to:"/addNews",className:"nav-link",children:"Add News Feed"})]}),l?Object(D.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(D.jsx)(p.b,{to:"/browse",className:"nav-link",children:"Browse"}),Object(D.jsx)(p.b,{to:"/news",className:"nav-link",children:"News"}),Object(D.jsx)(p.b,{to:"/user",className:"nav-link",children:"User"}),Object(D.jsx)("a",{href:"/",className:"nav-link",onClick:function(){b()},children:"LogOut"})]}):Object(D.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(D.jsx)(p.b,{to:"/login",className:"nav-link",children:"Login"}),Object(D.jsx)(p.b,{to:"/register",className:"nav-link",children:"Sign Up"})]})]})})]})}),Object(D.jsxs)(g.c,{children:[Object(D.jsx)(g.a,{exact:!0,path:["/","/home"],component:T}),Object(D.jsx)(g.a,{exact:!0,path:"/login",component:L}),Object(D.jsx)(g.a,{exact:!0,path:"/register",component:M}),Object(D.jsx)(g.a,{exact:!0,path:"/browse",component:z}),Object(D.jsx)(g.a,{path:"/addPet",component:ue}),Object(D.jsx)(g.a,{path:"/user",component:be}),Object(D.jsx)(g.a,{path:"/addNews",component:he}),Object(D.jsx)(g.a,{path:"/news",component:ge}),Object(D.jsx)(g.a,{path:"/petProfile",component:Ie})]})]})},Ge=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(void 0),s=Object(r.a)(c,2),i=(s[0],s[1]);Object(n.useEffect)((function(){var e=m();e&&(i(e),a(e.roles.includes("ROLE_ADMIN")))}),[]);return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(Le,{})})};i.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(p.a,{children:Object(D.jsx)(Ge,{})})}),document.getElementById("root"))},94:function(e,t,a){}},[[241,1,2]]]);
//# sourceMappingURL=main.baddb13c.chunk.js.map