(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0a47"],{"433e":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-row",[i("el-col",{attrs:{span:16}},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,size:"mini"}},[i("el-form-item",{attrs:{label:"评价主题:"}},[e._v(" "+e._s(e.currentIndicator.field)+" ")]),i("el-form-item",{attrs:{label:"评价对象:"}},[e._v(" "+e._s(e.currentIndicator.scope)+" ")]),"BD"===e.formInline.scope?i("el-form-item",{attrs:{label:""}},[i("el-input",{attrs:{placeholder:"请输入评价对象"},model:{value:e.formInline.army,callback:function(t){e.$set(e.formInline,"army",t)},expression:"formInline.army"}})],1):e._e()],1)],1)],1)],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"1000px"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("el-row",{staticClass:"tree"},[i("el-col",{staticClass:"tree-container",attrs:{span:16}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-button",{staticClass:"noimpor-btn",attrs:{type:"primary",size:"mini"},on:{click:e.addNode}},[i("i",{staticClass:"el-icon-plus"}),e._v(" 添加节点")]),i("el-button",{staticClass:"noimpor-btn",attrs:{type:"primary",size:"mini"},on:{click:e.onRemoveNode}},[i("i",{staticClass:"el-icon-minus"}),e._v(" 删除节点")])],1)],1),i("div",{staticClass:"treeMind"},[i("TreeMindComponent",{ref:"jsMind",attrs:{values:e.mind,options:e.options,height:e.mindHeight},on:{selectNodeChange:e.selectNodeChange}})],1),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("el-button",{staticClass:"noimpor-btn",attrs:{type:"primary",size:"mini"},on:{click:e.saveMind}},[e._v(" 确认更改")]),i("el-button",{staticClass:"common-btn",attrs:{type:"primary",size:"mini",disabled:e.cancel_btn_disabled},on:{click:e.cancel}},[e._v(" 取消")])],1)],1),i("el-col",{staticClass:"tree-container tree-container-text",attrs:{span:8}},[i("TreeDetailEditComponent",{on:{saveTempMind:e.saveTempMind}})],1)],1)],1)])},a=[];i("a4d3"),i("b64b");function r(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}function o(e,t){if(null==e)return{};var i,n,a=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=i("5530"),d=(i("159b"),i("b0c0"),i("2f62")),c=i("9139"),l=i("5f2c"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",[i("el-main",[i("el-form",{ref:"dataForm",staticStyle:{width:"90%","margin-left":"10px","margin-top":"20px"},attrs:{rules:e.rules,model:e.currentNode,size:"small","label-position":"right","label-width":"90px"}},[i("el-form-item",{attrs:{label:"指标名称",prop:"indicator_name"}},[i("el-input",{attrs:{disabled:"root"===e.currentNode.id},model:{value:e.currentNode.indicator_name,callback:function(t){e.$set(e.currentNode,"indicator_name",t)},expression:"currentNode.indicator_name"}})],1),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:3===e.currentNode.level,expression:"currentNode.level===3"}],attrs:{label:"指标单位",prop:"indicator_unit"}},[i("el-input",{model:{value:e.currentNode.indicator_unit,callback:function(t){e.$set(e.currentNode,"indicator_unit",t)},expression:"currentNode.indicator_unit"}})],1),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:3===e.currentNode.level,expression:"currentNode.level===3"}],attrs:{label:"单位符号",prop:"indicator_sign"}},[i("el-input",{model:{value:e.currentNode.indicator_sign,callback:function(t){e.$set(e.currentNode,"indicator_sign",t)},expression:"currentNode.indicator_sign"}})],1),i("el-form-item",{attrs:{label:"指标简介",prop:"profile"}},[i("el-input",{attrs:{autosize:{minRows:2},type:"textarea",placeholder:"请输入指标简介"},model:{value:e.currentNode.profile,callback:function(t){e.$set(e.currentNode,"profile",t)},expression:"currentNode.profile"}})],1),i("el-form-item",{attrs:{label:"指标详情"}},[i("el-input",{attrs:{autosize:{minRows:2},type:"textarea",placeholder:"请输入指标详情"},model:{value:e.currentNode.summary,callback:function(t){e.$set(e.currentNode,"summary",t)},expression:"currentNode.summary"}})],1),i("el-form-item",{attrs:{label:"指标权重"}},[i("el-input",{attrs:{disabled:"root"===e.currentNode.id,placeholder:"请填写权重值",type:"number"},model:{value:e.currentNode.weight,callback:function(t){e.$set(e.currentNode,"weight",t)},expression:"currentNode.weight"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.tempSave}},[e._v("暂存数据")])],1)],1)],1)],1)},u=[],p={data:function(){return{parentID:"",rootParentID:"",rules:{indicator_name:[{required:!0,message:"指标名称为必填项",trigger:"blur"}]}}},computed:Object(s["a"])({},Object(d["b"])(["currentNode"])),methods:{tempValidMind:function(e){var t=this,i=!0;if(e){if(""===e.indicator_name)throw this.$message({type:"error",message:"请编辑名为“"+e.name+"” 指标名称后再次点击暂存数据!"}),i=!1,new Error("有新建节点未编辑名称");return e.children&&e.children.forEach((function(e){t.tempValidMind(e)})),i}},tempSave:function(){console.log("tempSave"),this.$emit("saveTempMind")}}},h=p,_=i("2877"),f=Object(_["a"])(h,m,u,!1,null,null,null),g=f.exports,b=i("ed08"),v=["expanded","id","name"],y={components:{TreeDetailEditComponent:g,TreeMindComponent:l["a"]},data:function(){return{loading:!1,dialogTableVisible:!1,cancel_json:"",cancel_btn_disabled:!0,mind:{meta:{name:"",author:"",version:""},format:"node_tree",data:{id:"root",name:""}},mindHeight:"100%",options:{container:"jsmind_container",editable:!0,theme:"orange",shortcut:{enable:!1}},formInline:{area:"",scope:"",army:""},tempRoute:{}}},computed:Object(s["a"])({},Object(d["b"])(["scope","field","currentIndicator","currentNode"])),mounted:function(){this.jm=this.$refs.jsMind.jm,window._jm=this.jm,this.getData(),console.log(this.$router)},created:function(){this.tempRoute=Object.assign({},this.$route)},methods:{handleFilter:function(){console.log("handleFilter!")},cancel:function(){this.UpdateTempJson(JSON.parse(this.cancel_json),!0)},setTagsViewTitle:function(){var e="编辑指标",t=this.$route.params&&this.$route.params.id;console.log(t),console.log(void 0===t);var i=void 0===t?Object.assign({},this.tempRoute,{title:"".concat(e)}):Object.assign({},this.tempRoute,{title:"".concat(e,"-").concat(t)});this.$store.dispatch("tagsView/updateVisitedView",i)},UpdateTempJson:function(e,t){var i=this,n=e;Object(c["e"])(n).then((function(e){t&&(i.$message({type:"success",message:"取消成功!"}),i.getData())})).catch((function(e){t&&i.$message({type:"error",message:"取消失败，请稍后重试!"}),console.log(e)}))},getData:function(){var e=this;this.loading=!0;var t={field:this.currentIndicator.field,scope:this.currentIndicator.scope,F5:!0};Object(c["c"])(t).then((function(t){e.loading=!1,e.cancel_json=t[0].indicator_system,e.cancel_btn_disabled=!e.cancel_json,t=JSON.parse(t[0].indicator_system),console.log(t);var i=t[0].children;i=e.setId(i),e.tempLevel=0,e.mind={meta:{name:"",author:"",version:"0.2"},format:"node_tree",data:{id:"root",name:t[0].indicator_name,children:i,create_by:t[0].create_by,create_time:t[0].create_time,field:t[0].field,indicator_id:t[0].indicator_id,indicator_name:t[0].indicator_name,parentId:t[0].parentId,profile:t[0].profile,scope:t[0].scope,summary:t[0].summary,updateTime:t[0].updateTime,update_by:t[0].update_by,weight:t[0].weight}},e.jm.show(e.mind),e.$store.dispatch("system/changeCurrentNode",{id:"root",indicator_name:t[0].indicator_name,profile:t[0].profile,summary:t[0].summary,weight:t[0].weight,create_by:t[0].create_by,create_time:t[0].create_time,update_by:t[0].update_by,updateTime:t[0].updateTime,level:t[0].level||"",indicator_unit:t[0].indicator_unit||"",indicator_sign:t[0].indicator_sign||""}),e.jm.select_node("root")})),this.setTagsViewTitle()},setId:function(e){var t=this;return e.forEach((function(e,i){e.id=e.indicator_id?e.indicator_id:Math.random()*Math.random()*Math.random()*Math.random()*1e4,e.name=e.indicator_name,e.children&&e.children.length>0&&t.setId(e.children)})),e},get_selected_nodeid:function(){var e=this.jm.get_selected_node();return e?e.id:null},addNode:function(){var e=this.jm.get_selected_node();if(console.log(e),e){var t=100*Math.random()*Math.random()+10*Math.random(),i="子节点";this.jm.add_node(e,t,i,{noTrueId:!0,field:this.currentIndicator.field,scope:this.currentIndicator.scope}),this.jm.select_node(t),this.$store.dispatch("system/changeCurrentNode",{id:"",indicator_name:"",profile:"",summary:"",weight:"",create_by:"",create_time:"",update_by:"",updateTime:"",level:"",indicator_unit:"",indicator_sign:""})}else this.$message({type:"warning",message:"请先选择一个节点!"})},onRemoveNode:function(){var e=this.get_selected_nodeid();console.log(e),console.log(e),e?"root"!==e?this.jm.remove_node(e):this.$message({type:"warning",message:"根节点不可删除!"}):this.$message({type:"warning",message:"请先选择一个节点!"})},saveMind:function(){var e=this,t=window._jm.get_selected_node();if(t){var i=new Date;t.data.weight=this.currentNode.weight,t.data.profile=this.currentNode.profile,t.data.summary=this.currentNode.summary,t.data.indicator_name=this.currentNode.indicator_name,t.data.updateTime=Object(b["b"])(i,"{y}-{m}-{d} {h}:{i}"),t.data.update_by="admin";var n=t.id;window._jm.update_node(n,this.currentNode.indicator_name)}var a=[this.jm.get_data().data];if(console.log(a),console.log(this.formalValidMind(a)),this.formalValidMind(a)){var r={field:a[0].field,scope:a[0].scope,submit:!0};this.saveTempMind(),Object(c["d"])(r).then((function(t){console.log(t),"保存成功"===t&&(e.$message({type:"success",message:"确认更改成功"}),e.$router.push("/indicator/list/"))}))}},formalValidMind:function(e){var t=this,i=!0;return e.forEach((function(e,n){if(!(e.children&&e.children.length>0))throw i=!1,t.$message({type:"error",message:"“"+e.name+"” 下缺少1级指标无法确认更改!"}),new Error("缺少1级指标");e.children.forEach((function(e,n){if(!(e.children&&e.children.length>0))throw i=!1,t.$message({type:"error",message:"“"+e.name+"” 下缺少2级指标无法确认更改!"}),new Error("缺少2级指标");e.children.forEach((function(e,n){if(!(e.children&&e.children.length>0))throw i=!1,t.$message({type:"error",message:"“"+e.name+"” 下缺少3级指标无法确认更改!"}),new Error("缺少3级指标");e.children.forEach((function(e,n){if(e.children&&e.children.length>0)throw i=!1,t.$message({type:"error",message:"“"+e.name+"” 下存在4级指标无法确认更改!"}),new Error("存在4级指标")}))}))}))})),i},selectNodeChange:function(e,t){var i=window._jm.get_selected_node();console.log(i),console.log(i.data.level),this.$store.dispatch("system/changeCurrentNode",{id:i.id,indicator_name:i.data.indicator_name,profile:i.data.profile,summary:i.data.summary,weight:i.data.weight,create_by:i.data.create_by,create_time:i.data.create_time,update_by:i.data.update_by,updateTime:i.data.updateTime,level:i.data.level||"",indicator_unit:i.data.indicator_unit||"",indicator_sign:i.data.indicator_sign||""})},tempValid_FilterMind:function(e){var t=this,i=!0;if(e){var n=e,a=(n.expanded,n.id,n.name,o(n,v));if(e=a,""===e.indicator_name)throw this.$message({type:"error",message:"请编辑名为“"+e.name+"” 指标名称后再次点击!"}),i=!1,new Error("有新建指标未编辑名称");return e.children&&e.children.forEach((function(e){t.tempValid_FilterMind(e)})),{isValidJson:i,data:e}}},saveTempMind:function(){var e=this;console.log("存入临时表");var t=window._jm.get_selected_node();if(t){t.data.weight=null===this.currentNode.weight?void 0:this.currentNode.weight,t.data.profile=this.currentNode.profile,t.data.summary=this.currentNode.summary,t.data.indicator_name=this.currentNode.indicator_name,t.data.update_by="admin";var i=t.id;window._jm.update_node(i,this.currentNode.indicator_name)}var n=[window._jm.get_data().data];this.parentID=n[0].indicator_id,this.rootParentID=n[0].indicator_id,console.log(n);var a=this.tempValid_FilterMind(n[0]).isValidJson;n[0]=this.tempValid_FilterMind(n[0]).data;var r=n;a&&Object(c["e"])(r).then((function(t){e.$message({type:"success",message:"暂存指标成功!"})})).catch((function(t){e.$message({type:"error",message:"暂存指标失败，请稍后重试!"}),console.log(t)})),window._jm.select_clear()}}},w=y,N=Object(_["a"])(w,n,a,!1,null,null,null);t["default"]=N.exports}}]);