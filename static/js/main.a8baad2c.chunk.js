(this["webpackJsonplesson10-crud"]=this["webpackJsonplesson10-crud"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),s=a.n(r),c=(a(13),a(1)),o=a(2),m=a(3),i=a(4),u=(a(14),a(7)),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onCloseForm=function(){n.props.onCloseForm()},n.onChange=function(e){var t=e.target,a=t.name,l="checkbox"===t.type?t.checked:t.value;"status"===a&&(l="true"===t.value||!0===t.value),n.setState(Object(u.a)({},a,l))},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state)},n.state={name:"",status:!0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.status;return l.a.createElement("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4"},l.a.createElement("div",{className:"panel panel-warning"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"Th\xeam C\xf4ng Vi\u1ec7c",l.a.createElement("span",{className:"fa fa-times-circle text-right",onClick:this.onCloseForm}))),l.a.createElement("div",{className:"panel-body"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"T\xean: "),l.a.createElement("input",{type:"text",className:"form-control",name:"name",value:t,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Tr\u1ea1ng Th\xe1i: "),l.a.createElement("select",{name:"status",className:"form-control",value:a,onChange:this.onChange},l.a.createElement("option",{value:!1},"K\xedch Ho\u1ea1t"),l.a.createElement("option",{value:!0},"\u1ea8n"))),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-warning"},l.a.createElement("span",{className:"fa fa-plus mr-5"}),"L\u01b0u L\u1ea1i")," \xa0",l.a.createElement("button",{type:"reset",className:"btn btn-danger"},l.a.createElement("span",{className:"fa fa-close mr-5"}),"H\u1ee7y B\u1ecf"))))))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-15"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{name:"keyword",type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a ..."}),l.a.createElement("span",{className:"input-group-btn"},l.a.createElement("button",{type:"button",className:"btn btn-primary"},l.a.createElement("span",{className:"fa fa-search mr-5"}),"T\xecm"))))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-15"},l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"S\u1eafp X\u1ebfp",l.a.createElement("span",{className:"fa fa-caret-square-o-down ml-5"})),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},l.a.createElement("li",null,l.a.createElement("a",{role:"button",className:"sort-selected",href:"/"},l.a.createElement("span",{className:"fa fa-sort-alpha-asc pr-5"},"T\xean A-Z"))),l.a.createElement("li",null,l.a.createElement("a",{role:"button",className:"sort-selected",href:"/"},l.a.createElement("span",{className:"fa fa-sort-alpha-desc pr-5"},"T\xean Z-A"))))))}}]),a}(n.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement(b,null),l.a.createElement(d,null))}}]),a}(n.Component),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index;return l.a.createElement("tr",null,l.a.createElement("td",null," ",a+1," "),l.a.createElement("td",null," ",t.name," "),l.a.createElement("td",{className:"text-center"},l.a.createElement("span",{className:t.status?"label label-danger":"label label-success"},t.status?"K\xedch Ho\u1ea1t":"\u1ea8n")),l.a.createElement("td",{className:"text-center"},l.a.createElement("button",{type:"button",className:"btn btn-sm btn-warning"},l.a.createElement("span",{className:"fa fa-pencil mr-5"}),"S\u1eeda")," \xa0",l.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger"},l.a.createElement("span",{className:"fa fa-trash mr-5"}),"X\xf3a")))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.tasks.map((function(e,t){return l.a.createElement(h,{key:t,task:e,index:t})}));return l.a.createElement("div",{className:"row mt-15 tasklist"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 table-responsive"},l.a.createElement("table",{className:"table table-bordered table-hover text-nowrap"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"text-center"},"STT"),l.a.createElement("th",{className:"text-center"},"T\xean"),l.a.createElement("th",{className:"text-center"},"Tr\u1ea1ng Th\xe1i"),l.a.createElement("th",{className:"text-center"},"H\xe0nh \u0110\u1ed9ng"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",name:"filterName"})),l.a.createElement("td",null,l.a.createElement("select",{name:"filterStatus",className:"form-control"},l.a.createElement("option",{value:-1},"T\u1ea5t C\u1ea3"),l.a.createElement("option",{value:0},"\u1ea8n"),l.a.createElement("option",{value:1},"K\xedch Ho\u1ea1t"))),l.a.createElement("td",null)),e))))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onGenerateData=function(){var e=[{id:n.generateID(),name:"H\u1ecdc l\u1eadp tr\xecnh",status:!0},{id:n.generateID(),name:"\u0110i b\u01a1i",status:!1},{id:n.generateID(),name:"Ng\u1ee7",status:!0}];n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},n.onDisplayForm=function(){n.setState({isDisplayForm:!n.state.isDisplayForm})},n.onCloseForm=function(){n.setState({isDisplayForm:!1})},n.onSubmit=function(e){var t={id:n.generateID(),name:e.name,status:e.status};console.log(t)},n.state={tasks:[],isDisplayForm:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){localStorage&&localStorage.getItem("tasks")&&this.setState({tasks:JSON.parse(localStorage.getItem("tasks"))})}},{key:"s4",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"generateID",value:function(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.isDisplayForm,n=a?l.a.createElement(p,{onCloseForm:this.onCloseForm,onSubmit:this.onSubmit}):"";return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",null,"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c")," ",l.a.createElement("hr",null)),l.a.createElement("div",{className:"row"},n,l.a.createElement("div",{className:a?"col-xs-12 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onDisplayForm},l.a.createElement("span",{className:"fa fa-plus mr-5"}),"Th\xeam C\xf4ng Vi\u1ec7c"),l.a.createElement("button",{type:"button",className:"btn btn-danger ml-5",onClick:this.onGenerateData},"Generate Data"),l.a.createElement(E,null),l.a.createElement(f,{tasks:t}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a8baad2c.chunk.js.map