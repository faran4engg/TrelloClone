(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{57:function(t,e,a){},58:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var r=a(2),n=a(0),c=a(20),o=a.n(c),i=(a(57),a(10)),d=a(11),s=a(13),l=a(12),b=(a(58),a(59),a(60),a(3)),p=a(77),u=function(t,e){var a=Object(p.a)();return{type:g.ADD_CARD,payload:{text:e,listID:t,id:a}}},j=function(t,e){return{type:g.REMOVE_CARD,payload:{id:t,listID:e}}},h=function(t,e,a){return{type:g.EDIT_CARD,payload:{id:t,listID:e,newText:a}}},O=function(t,e){var a=Object(p.a)();return{type:g.ADD_LIST,payload:{title:t,boardID:e,id:a}}},f=function(t,e,a,r,n,c,o){return{type:g.DRAG_HAPPENED,payload:{droppableIdStart:t,droppableIdEnd:e,droppableIndexStart:a,droppableIndexEnd:r,draggableId:n,type:c,boardID:o}}},v=function(t,e){return{type:g.EDIT_LIST,payload:{listID:t,newTitle:e}}},D=function(t,e){return{type:g.REMOVE_LIST,payload:{listID:t,boardID:e}}},x=function(t){return{type:g.ACTIVE_BOARD,payload:t}},y=function(t){var e=Object(p.a)();return{type:g.ADD_BOARD,payload:{title:t,id:e}}},g={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",REMOVE_CARD:"REMOVE_CARD",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",EDIT_LIST:"EDIT_LIST",REMOVE_LIST:"REMOVE_LIST",ADD_BOARD:"ADD_BOARD",ACTIVE_BOARD:"ACTIVE_BOARD"},I=a(8),m=a(23),A=a(25),C=a.n(A),E=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={editing:!1,text:""},t.closeForm=function(e){e.preventDefault(),t.setState({editing:!1})},t.handleDelete=function(e){e.preventDefault();var a=t.props,r=a.id,n=a.listID;console.log(n),t.props.dispatch(j(r,n))},t.handleChange=function(e){t.setState({text:e.target.value})},t.handleSave=function(e){t.setState({editing:!1});var a=t.props,r=a.id,n=a.listID,c=t.state.text;t.props.dispatch(h(r,n,c))},t.handleEdit=function(e){e.preventDefault(),t.setState({editing:!0}),console.log("edit option is open now"),console.log(t.props.text)},t.renderEditForm=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(C.a,{placeholder:t.state.text,value:t.state.text,onChange:t.handleChange}),Object(r.jsx)("button",{onMouseDown:t.closeForm,children:"close"}),Object(r.jsx)("button",{onClick:t.handleSave,children:"save"})]})},t.renderCard=function(){var e=t.props,a=e.id,n=e.index,c=e.text;e.listID;return Object(r.jsx)(m.b,{draggableId:String(a),index:n,children:function(e){return Object(r.jsx)("div",Object(b.a)(Object(b.a)(Object(b.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("p",{className:"editButton",children:[c,Object(r.jsx)("div",{className:"hide",children:Object(r.jsx)("i",{onMouseDown:t.handleDelete,className:"fa fa-trash","aria-hidden":"true",style:{paddingRight:"2px"}})}),Object(r.jsx)("div",{className:"hide",children:Object(r.jsx)("i",{className:"fa fa-pencil-square-o",onMouseDown:t.handleEdit})})]})})}))}})},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.text;console.log(t),this.setState({text:t})}},{key:"render",value:function(){var t=this.props;t.id,t.index,t.text,t.listID;return this.state.editing?this.renderEditForm():this.renderCard()}}]),a}(n.Component),S=Object(I.b)()(E),R=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={formState:!1,text:""},t.openForm=function(){t.setState({formState:!0})},t.closeForm=function(){t.setState({formState:!1})},t.handleChange=function(e){t.setState({text:e.target.value})},t.handleAddList=function(){var e=t.state.text;e&&t.props.dispatch(O(e,t.props.boardID)),t.setState({text:""})},t.handleAddCard=function(){var e=t.props.listID,a=t.state.text;a&&t.props.dispatch(u(e,a)),t.setState({text:""})},t.renderForm=function(){var e=t.props.list,a=e?"Enter list title":"Enter title for card",n=e?"Add list":"Add card";return Object(r.jsxs)("div",{className:"renderForm",children:[Object(r.jsx)("div",{className:"card",style:{width:"80%"},children:Object(r.jsx)(C.a,{placeholder:a,autoFocus:!0,onBlur:t.closeForm,onChange:t.handleChange,value:t.state.text})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onMouseDown:e?t.handleAddList:t.handleAddCard,className:"btn btn-success",children:n}),Object(r.jsx)("button",{type:"button",className:"close","aria-label":"Close",children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})]})},t.ToAddCard=function(){var e=t.props.list,a=e?"Add another list":"Add another card",n=e?"#5ba4cf":"transparent",c=e?"white":"black",o=e?1:.5;return Object(r.jsxs)("div",{className:"openForm",onClick:t.openForm,style:{opacity:o,cursor:"pointer",color:c,backgroundColor:n},children:[" ",Object(r.jsxs)("p",{children:[Object(r.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"}),a]})]})},t}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){console.log(this.props.boardID)}},{key:"render",value:function(){return this.state.formState?this.renderForm():this.ToAddCard()}}]),a}(n.Component),_=Object(I.b)()(R),T=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={editing:!1,title:""},t.closeForm=function(e){e.preventDefault(),t.setState({editing:!1})},t.handleChange=function(e){e.preventDefault(),t.setState({title:e.target.value})},t.handleSave=function(e){t.setState({editing:!1});var a=t.props.listID,r=t.state.title;t.props.dispatch(v(a,r))},t.handleEdit=function(e){e.preventDefault(),t.setState({editing:!0})},t.renderEditForm=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(C.a,{placeholder:t.state.title,value:t.state.title,onChange:t.handleChange}),Object(r.jsx)("button",{onClick:t.closeForm,children:"close"}),Object(r.jsx)("button",{onClick:t.handleSave,children:"save"})]})},t.handleDelete=function(e){e.preventDefault();var a=t.props,r=a.listID,n=a.boardID;console.log("delete list is called"+r),t.props.dispatch(D(r,n))},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.title;this.setState({title:t})}},{key:"render",value:function(){var t=this,e=this.props,a=e.cards,n=e.listID,c=e.index;return Object(r.jsx)(m.b,{draggableId:String(n),index:c,children:function(e){return Object(r.jsx)("div",Object(b.a)(Object(b.a)(Object(b.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:Object(r.jsx)(m.c,{droppableId:String(n),type:"card",children:function(e){return Object(r.jsxs)("div",{className:"card",style:{backgroundColor:"#ebecf0",width:"100%",margin:"10px",marginTop:"10",padding:"2px",borderRadius:"3px"},children:[t.state.editing?t.renderEditForm():Object(r.jsxs)("p",{className:"editButton",children:[t.props.title,Object(r.jsx)("div",{className:"hide",children:Object(r.jsx)("i",{className:"fa fa-trash",onClick:t.handleDelete})}),Object(r.jsx)("div",{className:"hide",children:Object(r.jsx)("i",{className:"fa fa-pencil-square-o",onClick:t.handleEdit})})]}),Object(r.jsxs)("div",Object(b.a)(Object(b.a)({},e.droppableProps),{},{ref:e.innerRef,children:[a.map((function(t,e){return Object(r.jsx)("div",{style:{width:"95%",margin:"0 auto 10px"},children:Object(r.jsx)(S,{text:t.text,id:t.id,listID:n,index:e},t.id)})})),e.placeholder,Object(r.jsx)(_,{listID:n,cards:!0})]}))]})}})}))}})}}]),a}(n.Component),w=Object(I.b)()(T),k=a(17),N=a(22),B=a(6),F={"list-0":{id:"list-0",cards:["card-0"],title:"my-list",board:"board-0"}},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.ADD_CARD:var a=e.payload,r=a.listID,n=a.id,c=t[r];return c.cards.push("card-".concat(n)),Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},r,c));case g.REMOVE_CARD:var o=e.payload,i=o.listID,d=o.id,s=t[i],l=s.cards.filter((function(t){return t!==d}));return Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},i,Object(b.a)(Object(b.a)({},s),{},{cards:l})));case g.ADD_LIST:var p=e.payload,u=p.title,j=p.id,h={title:u,id:"list-".concat(j),cards:[]},O=Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},"list-".concat(j),h));return O;case g.DRAG_HAPPENED:var f=e.payload,v=f.droppableIdStart,D=f.droppableIdEnd,x=f.droppableIndexEnd,y=f.droppableIndexStart,I=f.type;if("list"===I)return t;if(v===D){var m,A=t[v],C=A.cards.splice(y,1);return(m=A.cards).splice.apply(m,[x,0].concat(Object(N.a)(C))),Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},v,A))}if(v!==D){var E,S,R=t[v],_=R.cards.splice(y,1),T=t[D];return(E=T.cards).splice.apply(E,[x,0].concat(Object(N.a)(_))),Object(b.a)(Object(b.a)({},t),{},(S={},Object(B.a)(S,v,R),Object(B.a)(S,D,T),S))}return t;case g.EDIT_LIST:var w=e.payload,k=w.listID,L=w.newTitle,P=t[k];return P.title=L,Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},k,P));case g.REMOVE_LIST:var M=e.payload.listID;console.log("list reducer: "+M);var V=t;return delete V[M],V;default:return t}},P={"card-0":{text:"This episode",id:"card-0",list:"list-0"}},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.ADD_CARD:console.log("add card");var a=e.payload,r=a.text,n=a.listID,c=a.id,o={text:r,id:"card-".concat(c),list:n};Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},"card-".concat(c),o));return Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},"card-".concat(c),o));case g.REMOVE_CARD:var i=e.payload.id,d=t;return delete d[i],d;case g.EDIT_CARD:var s=e.payload,l=s.id,p=s.newText,u=t[l];return u.text=p,Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},"card-".concat(l),u));default:return t}},V={"board-0":{id:"board-0",lists:["list-0"],title:"myboard"}},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.ADD_LIST:var a=e.payload,r=a.boardID,n=a.id,c=t[r],o="list-".concat(n),i=[].concat(Object(N.a)(c.lists),[o]);return c.lists=i,Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},r,c));case g.DRAG_HAPPENED:var d=e.payload.boardID,s=t[d],l=s.lists,p=e.payload,u=p.droppableIndexEnd,j=p.droppableIndexStart,h=p.type;if("list"===h){var O=l.splice(j,1);return l.splice.apply(l,[u,0].concat(Object(N.a)(O))),s.lists=l,Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},d,s))}return t;case g.REMOVE_LIST:var f=e.payload,v=f.listID,D=f.boardID;console.log("board reducer:"+v+" "+D);var x=t[D],y=x.lists,I=y.filter((function(t){return t!==v}));return x.lists=I,Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},D,x));case g.ADD_BOARD:var m=e.payload,A=m.title,C=m.id,E="board-".concat(C),S={id:E,title:A,lists:[]};return console.log("add board from reducer"),console.log("new state: "+Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},E,S))),console.log("title: "+A+", id:"+C),Object(b.a)(Object(b.a)({},t),{},Object(B.a)({},E,S));default:return t}},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.ACTIVE_BOARD:return console.log("active board id: "+e.payload),t=e.payload,console.log(t),t;default:return t}},U=["board-0"],q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.ADD_BOARD:return[].concat(Object(N.a)(t),["board-".concat(e.payload.id)]);default:return t}},J=Object(k.c)({lists:L,cards:M,boards:H,active:G,boardOrder:q}),z=Object(k.e)(J),K=a(76),Q=a(51),W=a(21),X=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.boards,a=t.boardOrder;return Object(r.jsxs)("div",{children:[Object(r.jsx)(W.b,{to:"/",style:{color:"white",marginLeft:"0"},children:Object(r.jsx)("i",{className:"fa fa-home"})}),Object(r.jsx)(K.a,{id:"dropdown-basic-button",title:"Boards",style:{display:"inline-block",float:"center"},children:a.map((function(t){var a=e[t];return Object(r.jsx)(Q.a.Item,{children:Object(r.jsx)(W.b,{to:"/".concat(a.id),style:{textDecoration:"none"},children:a.title})},t)}))})]})}}]),a}(n.Component),Y=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={boardID:""},t.onDragEnd=function(e){var a=e.destination,r=e.source,n=e.draggableId,c=e.type;a&&t.props.dispatch(f(r.droppableId,a.droppableId,r.index,a.index,n,c,t.state.boardID))},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.boardID;this.props.dispatch(x(t)),this.setState({boardID:t}),console.log("active : "+z.getState().active),document.body.style.backgroundColor="#0079bf"}},{key:"componentDidUpdate",value:function(){console.log("active state from board collection: "+z.getState().active);var t=this.props.match.params.boardID;this.state.boardID!==t&&(this.setState({boardID:t}),this.props.dispatch(x(t)))}},{key:"render",value:function(){var t=this,e=this.props,a=e.lists,n=e.cards,c=e.boards,o=(e.boardOrder,this.state.boardID);console.log(o);var i=c[o];console.log(i);var d=c[o];if(!d)return Object(r.jsx)("p",{children:"Board not found"});var s=d.lists;return Object(r.jsx)(m.a,{onDragEnd:this.onDragEnd,children:Object(r.jsx)(m.c,{droppableId:"all-lists",direction:"horizontal",type:"list",children:function(e){return Object(r.jsxs)("div",Object(b.a)(Object(b.a)({},e.droppableProps),{},{ref:e.innerRef,style:{display:"flex",flexDirection:"row"},children:[s.map((function(e,c){var o=a[e];if(o){var i=o.cards.map((function(t){return n[t]}));return Object(r.jsxs)("div",{style:{width:"272px",margin:"0 4px"},children:[" ",Object(r.jsx)(w,{listID:o.id,title:o.title,cards:i,index:c,boardID:t.state.boardID},o.id)]})}})),e.placeholder,Object(r.jsx)(_,{list:!0,boardID:t.state.boardID})]}))}})})}}]),a}(n.Component),Z=Object(I.b)((function(t){return{lists:t.lists,cards:t.cards,boards:t.boards,boardOrder:t.boardOrder}}))(Y),$=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={title:"Create new board"},t.handleAddBoard=function(e){e.preventDefault();var a=t.state.title;t.props.dispatch(y(a)),t.setState({title:"Create new board"})},t.handleChange=function(e){e.preventDefault(),t.setState({title:e.target.value})},t.createBoard=function(e){return Object(r.jsx)("form",{onSubmit:t.handleAddBoard,children:Object(r.jsx)("input",{onChange:t.handleChange,value:t.state.title,type:"text",style:{height:"100px",width:"200px",textAlign:"center"}})})},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{children:this.createBoard()})}}]),a}(n.Component),tt=Object(I.b)()($),et=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={},t.renderBoardsTest=function(){var e=t.props,a=e.boardOrder,r=e.boards;a.map((function(t){var e=r[t];console.log(e)}))},t.renderBoards=function(){var e=t.props,a=e.boardOrder,n=e.boards;return Object(r.jsx)("div",{children:a.map((function(t){var e=n[t];return Object(r.jsx)(W.b,{to:"/".concat(e.id),style:{textDecoration:"none",color:"white"},children:Object(r.jsx)("div",{className:"board-display",children:e.title})},t)}))})},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="white"}},{key:"componentDidUpdate",value:function(){console.log(this.props.boards)}},{key:"render",value:function(){var t,e=this.props,a=e.boards;e.boardOrder;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{children:[Object(r.jsx)("i",{className:"fa fa-user-o"}),"Personal Boards"]}),Object(r.jsxs)("div",(t={className:"renderBoard"},Object(B.a)(t,"className","board-container"),Object(B.a)(t,"children",[this.renderBoards(),Object(r.jsx)(tt,{boards:a})]),t))]})}}]),a}(n.Component),at=Object(I.b)((function(t){return{boards:t.boards,boardOrder:t.boardOrder}}))(et),rt=a(7),nt=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.boards,a=t.boardOrder;return Object(r.jsx)("div",{children:Object(r.jsxs)(W.a,{children:[Object(r.jsxs)("h3",{style:{backgroundColor:"#026aa7",color:"white",fontFamily:"cursive"},class:"panel-footer",children:[Object(r.jsx)(X,{boards:e,boardOrder:a,class:"fa fa-facebook"}),Object(r.jsx)("em",{style:{color:"#8bbdd9"},children:"Trello"})]}),Object(r.jsxs)(rt.c,{children:[Object(r.jsx)(rt.a,{path:"/",exact:!0,component:at}),Object(r.jsx)(rt.a,{path:"/:boardID",component:Z})]})]})})}}]),a}(n.Component),ct=Object(I.b)((function(t){return{boards:t.boards,boardOrder:t.boardOrder}}))(nt),ot=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),r(t),n(t),c(t),o(t)}))};o.a.render(Object(r.jsx)(I.a,{store:z,children:Object(r.jsx)(ct,{})}),document.getElementById("root")),ot()}},[[71,1,2]]]);
//# sourceMappingURL=main.497e77eb.chunk.js.map