(this["webpackJsonplesson10-crud"]=this["webpackJsonplesson10-crud"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),o=a.n(r),l=(a(14),a(1)),c=a(2),i=a(3),m=a(4),u=(a(15),a(5)),p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onCloseForm=function(){n.props.onCloseForm()},n.onChange=function(e){var t=e.target,a=t.name,s="checkbox"===t.type?t.checked:t.value;"status"===a&&(s=!!("true"===t.value|!0===t.value)),n.setState(Object(u.a)({},a,s))},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state),n.onClear(),n.onCloseForm()},n.onClear=function(){n.setState({id:"",name:"",description:"",status:!1})},n.state={id:"",name:"",description:"",status:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.task&&this.setState({id:this.props.task.id,name:this.props.task.name,description:this.props.task.description,status:this.props.task.status})}},{key:"componentDidUpdate",value:function(e,t){e.task!==this.props.task&&(this.props.task?this.setState({id:this.props.task.id,name:this.props.task.name,description:this.props.description,status:this.props.task.status}):this.onClear())}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.name,n=e.description,r=e.status;return s.a.createElement("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4"},s.a.createElement("div",{className:"panel panel-warning"},s.a.createElement("div",{className:"panel-heading"},s.a.createElement("h3",{className:"panel-title"},t?"C\u1eadp nh\u1eadt c\xf4ng vi\u1ec7c":"Th\xeam C\xf4ng Vi\u1ec7c",s.a.createElement("span",{className:"fa fa-times-circle text-right",onClick:this.onCloseForm}))),s.a.createElement("div",{className:"panel-body"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"T\xean: "),s.a.createElement("input",{type:"text",className:"form-control",name:"name",value:a,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Ngh\u0129a: "),s.a.createElement("input",{type:"text",className:"form-control",name:"description",value:n,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Tr\u1ea1ng Th\xe1i: "),s.a.createElement("select",{name:"status",className:"form-control",value:r,onChange:this.onChange},s.a.createElement("option",{value:!1},"\u1ea8n"),s.a.createElement("option",{value:!0},"K\xedch Ho\u1ea1t"))),s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{type:"submit",className:"btn btn-warning"},s.a.createElement("span",{className:"fa fa-plus mr-5"}),"L\u01b0u L\u1ea1i")," \xa0",s.a.createElement("button",{type:"reset",className:"btn btn-danger",onClick:this.onClear},s.a.createElement("span",{className:"fa fa-close mr-5"}),"H\u1ee7y B\u1ecf"))))))}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target,a=t.name,s="checkbox"===t.type?t.checked:t.value;n.setState(Object(u.a)({},a,s))},n.onSearch=function(){n.props.onSearch(n.state.keyword)},n.state={keyword:""},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-15"},s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{name:"keyword",type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a ...",onChange:this.onChange}),s.a.createElement("span",{className:"input-group-btn"},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onSearch},s.a.createElement("span",{className:"fa fa-search mr-5"}),"T\xecm"))))}}]),a}(n.Component),h=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onClick=function(e,t,a){n.setState({sort:{by:e,value:parseInt(t)}}),n.props.onSort(e,t)},n.state={sort:{by:"name",value:1}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.sort,a=t.by,n=t.value;return s.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-15"},s.a.createElement("div",{className:"dropdown"},s.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"S\u1eafp X\u1ebfp",s.a.createElement("span",{className:"fa fa-caret-square-o-down ml-5"})),s.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},s.a.createElement("li",{onClick:function(){return e.onClick("name",1)}},s.a.createElement("ul",{role:"button",className:"name"===a&&1===n?"sort_selected":""},s.a.createElement("span",{className:"fa fa-sort-alpha-asc pr-5"},"T\xean A-Z"))),s.a.createElement("li",{onClick:function(){return e.onClick("name",-1)}},s.a.createElement("ul",{role:"button",className:"name"===a&&-1===n?"sort_selected":""},s.a.createElement("span",{className:"fa fa-sort-alpha-desc pr-5"},"T\xean Z-A"))),s.a.createElement("li",{role:"separator",className:"divider"}),s.a.createElement("li",{onClick:function(){return e.onClick("status",-1)}},s.a.createElement("ul",{role:"button",className:"status"===a&&-1===n?"sort_selected":""},"Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t")),s.a.createElement("li",{onClick:function(){return e.onClick("status",1)}},s.a.createElement("ul",{role:"button",className:"status"===a&&1===n?"sort_selected":""},"Tr\u1ea1ng Th\xe1i \u1ea8n")))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement(d,{onSearch:this.props.onSearch}),s.a.createElement(h,{onSort:this.props.onSort}))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onUpdateStatus=function(){e.props.onUpdateStatus(e.props.task.id)},e.onDeleteItem=function(){e.props.onDeleteItem(e.props.task.id)},e.onUpdateItem=function(){e.props.onUpdateItem(e.props.task.id)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index;return s.a.createElement("tr",null,s.a.createElement("td",null," ",a+1," "),s.a.createElement("td",null," ",t.name," "),s.a.createElement("td",null," ",t.description," "),s.a.createElement("td",{className:"text-center"},s.a.createElement("span",{className:t.status?"label label-danger status":"label label-success status",onClick:this.onUpdateStatus},t.status?"K\xedch Ho\u1ea1t":"\u1ea8n")),s.a.createElement("td",{className:"text-center"},s.a.createElement("button",{type:"button",className:"btn btn-sm btn-warning",onClick:this.onUpdateItem},s.a.createElement("span",{className:"fa fa-pencil mr-5"}),"S\u1eeda")," \xa0",s.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:this.onDeleteItem},s.a.createElement("span",{className:"fa fa-trash mr-5"}),"X\xf3a")))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target,a=t.name,s="checkbox"===t.type?t.checked:t.value;n.props.onFilter("filterName"===a?s:n.state.filterName,"filterStatus"===a?s:n.state.filterStatus),n.setState(Object(u.a)({},a,s))},n.state={filterName:"",filterDescription:"",filterStatus:-1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tasks,a=this.state,n=a.filterName,r=a.filterDescription,o=a.filterStatus,l=t.map((function(t,a){return s.a.createElement(b,{key:a,task:t,index:a,onUpdateStatus:e.props.onUpdateStatus,onDeleteItem:e.props.onDeleteItem,onUpdateItem:e.props.onUpdateItem})}));return s.a.createElement("div",{className:"row mt-15 tasklist"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 table-responsive"},s.a.createElement("table",{className:"table table-bordered table-hover text-nowrap"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"text-center"},"STT"),s.a.createElement("th",{className:"text-center"},"T\xean"),s.a.createElement("th",{className:"text-left"},"Ngh\u0129a"),s.a.createElement("th",{className:"text-center"},"Tr\u1ea1ng Th\xe1i"),s.a.createElement("th",{className:"text-center"},"H\xe0nh \u0110\u1ed9ng"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null,s.a.createElement("input",{type:"text",className:"form-control",value:n,name:"filterName",onChange:this.onChange})),s.a.createElement("td",null,s.a.createElement("input",{type:"text",className:"form-control",value:r,name:"filterDescription",onChange:this.onChange})),s.a.createElement("td",null,s.a.createElement("select",{name:"filterStatus",className:"form-control",value:o,onChange:this.onChange},s.a.createElement("option",{value:-1},"T\u1ea5t C\u1ea3"),s.a.createElement("option",{value:0},"\u1ea8n"),s.a.createElement("option",{value:1},"K\xedch Ho\u1ea1t"))),s.a.createElement("td",null)),l))))}}]),a}(n.Component),v=a(6),k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onToggleForm=function(){n.state.isDisplayForm&&null!==n.state.taskEditting?n.setState({isDisplayForm:!0,taskEditting:null}):n.setState({isDisplayForm:!n.state.isDisplayForm,taskEditting:null})},n.onCloseForm=function(){n.setState({isDisplayForm:!1,taskEditting:null})},n.onOpenForm=function(){n.setState({isDisplayForm:!0})},n.onSubmit=function(e){var t=n.state.tasks;e.id?t[Object(v.findIndex)(t,(function(t){return t.id===e.id}))]=e:(e.id=n.generateID(),t.push(e));n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))},n.onUpdateStatus=function(e){var t=n.state.tasks,a=Object(v.findIndex)(t,(function(t){return t.id===e}));-1!==a&&(t[a].status=!t[a].status,n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)))},n.onDeleteItem=function(e){var t=n.state.tasks,a=Object(v.findIndex)(t,(function(t){return t.id===e}));-1!==a&&(t.splice(a,1),n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)),n.onCloseForm())},n.onUpdateItem=function(e){var t=n.state.tasks,a=t[Object(v.findIndex)(t,(function(t){return t.id===e}))];n.setState({taskEditting:a}),n.onOpenForm()},n.onFilter=function(e,t){t=parseInt(t,10),n.setState({filter:{name:e,status:t}})},n.onSearch=function(e){n.setState({keyword:e})},n.onSort=function(e,t){n.setState({sort:{by:e,value:t}})},n.state={tasks:[],isDisplayForm:!1,taskEditting:null,filter:{name:"",status:-1},keyword:"",sort:{by:"",value:1}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){localStorage&&localStorage.getItem("tasks")&&this.setState({tasks:JSON.parse(localStorage.getItem("tasks"))})}},{key:"s4",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"generateID",value:function(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.isDisplayForm,n=e.taskEditting,r=e.filter,o=e.keyword,l=e.sort;t=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(o.toLowerCase())})),r&&(r.name&&(t=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.name.toLowerCase())}))),-1!==r.status&&(t=t.filter((function(e){return e.status===(0!==r.status)})))),"name"===l.by?t.sort((function(e,t){return e.name>t.name?l.value:e.name<t.name?-l.value:0})):t.sort((function(e,t){return e.status>t.status?l.value:e.status<t.status?-l.value:0}));var c=a?s.a.createElement(p,{onCloseForm:this.onCloseForm,onSubmit:this.onSubmit,task:n}):"";return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"text-center"},s.a.createElement("h1",null,"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c")," ",s.a.createElement("hr",null)),s.a.createElement("div",{className:"row"},c,s.a.createElement("div",{className:a?"col-xs-12 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onToggleForm},s.a.createElement("span",{className:"fa fa-plus mr-5"}),"Th\xeam C\xf4ng Vi\u1ec7c"),s.a.createElement(f,{onSearch:this.onSearch,onSort:this.onSort}),s.a.createElement(E,{tasks:t,onUpdateStatus:this.onUpdateStatus,onDeleteItem:this.onDeleteItem,onUpdateItem:this.onUpdateItem,onFilter:this.onFilter}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.aa144b85.chunk.js.map