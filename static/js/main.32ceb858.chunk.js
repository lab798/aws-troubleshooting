(window.webpackJsonpfyz=window.webpackJsonpfyz||[]).push([[0],{121:function(e,a,n){"use strict";(function(e){n.d(a,"a",(function(){return b}));var t=n(29),r=n(64),l=n(0),o=n.n(l),s=n(122),c=n(124),i=n.n(c),u=n(47),m=n.n(u);function d(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function E(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?d(n,!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a,n,t){return e.map((function(e){return e.name===a?(e.status=n,e.reason=t,e):e}))}var f=[{name:"\u8be5\u8d26\u53f7\u4e0b\u662f\u5426\u5b58\u5728\u8be5EC2",status:"",reason:""},{name:"\u672c\u673a\u516c\u7f51IP",status:"",reason:""},{name:"\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d( \u9002\u7528\u90e8\u5206\u5b98\u65b9AMI )",status:"",reason:""},{name:"ACL\u68c0\u67e5",status:"",reason:""},{name:"\u8def\u7531\u8868\u914d\u7f6e\u68c0\u67e5",status:"",reason:""},{name:"EC2\u5b89\u5168\u7ec4\u68c0\u67e5",status:"",reason:""},{name:"EC2\u8fd0\u884c\u72b6\u6001\u68c0\u67e5",status:"",reason:""}];function b(){var a=o.a.useState({ip:"",accessKeyId:"",accessSecret:"",region:"",loading:0,spin:"none",rows:JSON.parse(JSON.stringify(f))}),n=Object(r.a)(a,2),l=n[0],c=n[1],u=new i.a.EC2({apiVersion:"2016-11-15",accessKeyId:l.accessKeyId,secretAccessKey:l.accessSecret,region:l.region});return o.a.createElement(s.a,{values:l,handleChange:function(e){return function(a){c(E({},l,Object(t.a)({},e,a.target.value)))}},handleClick:function(){l.loading=2,l.rows=JSON.parse(JSON.stringify(f)),c(E({},l,{rows:l.rows,spin:"",loading:l.loading}));var a={Filters:[{Name:"ip-address",Values:[l.ip]}]};u.describeInstances(a,(function(a,n){if(a)p(l.rows,"\u8be5\u8d26\u53f7\u4e0b\u662f\u5426\u5b58\u5728\u8be5EC2","FAILED","\u8f93\u5165\u7684Region\u6216\u8005Access Key\u76f8\u5173\u4fe1\u606f\u6709\u8bef\uff0c\u6216\u8005\u662f\u65e0\u6cd5\u8c03\u7528API( \u7f51\u7edc\u6216\u6743\u9650\u95ee\u9898 )");else if(0!==n.Reservations.length){var t=n.Reservations[0].Instances[0].InstanceId,r=n.Reservations[0].Instances[0].SubnetId,o=n.Reservations[0].Instances[0].SecurityGroups,s=n.Reservations[0].Instances[0].VpcId;p(l.rows,"\u8be5\u8d26\u53f7\u4e0b\u662f\u5426\u5b58\u5728\u8be5EC2","SUCCESS",""),l.loading+=o.length+4,c(E({},l,{loading:l.loading})),window.fetch("https://api.ipify.org?format=json").then((function(e){return e.json()})).then((function(e){var n=e.ip;p(l.rows,"\u672c\u673a\u516c\u7f51IP",n,""),function(e,n){var t="FAILED",r=e.length,o=!0,s=!1,i=void 0;try{for(var d,f=e[Symbol.iterator]();!(o=(d=f.next()).done);o=!0){var b={GroupIds:[d.value.GroupId]};u.describeSecurityGroups(b,(function(e,a){if(e)p(l.rows,"EC2\u5b89\u5168\u7ec4\u68c0\u67e5","FAILED","\u65e0\u6cd5\u8c03\u7528API( \u7f51\u7edc\u6216\u6743\u9650\u95ee\u9898 )");else{var o=a.SecurityGroups[0].IpPermissions,s=!0,i=!1,u=void 0;try{for(var d,f=o[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var b=d.value;if("-1"===b.IpProtocol){var g=!0,v=!1,h=void 0;try{for(var w,y=b.IpRanges[Symbol.iterator]();!(g=(w=y.next()).done);g=!0){var I=w.value;if(new m.a([I.CidrIp]).contains(n)){t="SUCCESS";break}}}catch(e){v=!0,h=e}finally{try{g||null==y.return||y.return()}finally{if(v)throw h}}}else if("tcp"===b.IpProtocol&b.FromPort<=22&b.ToPort>=22){var S=!0,C=!1,A=void 0;try{for(var P,k=b.IpRanges[Symbol.iterator]();!(S=(P=k.next()).done);S=!0){var O=P.value;if(new m.a([O.CidrIp]).contains(n)){t="SUCCESS";break}}}catch(e){C=!0,A=e}finally{try{S||null==k.return||k.return()}finally{if(C)throw A}}}}}catch(e){i=!0,u=e}finally{try{s||null==f.return||f.return()}finally{if(i)throw u}}0===--r&&("FAILED"===t?p(l.rows,"EC2\u5b89\u5168\u7ec4\u68c0\u67e5","FAILED","\u68c0\u67e5\u5b89\u5168\u7ec4\u89c4\u5219\u4e2d\u662f\u5426\u5305\u542b22\u7aef\u53e3\uff0c\u6216CIDR\u8303\u56f4\u4e0d\u5305\u542b\u5f53\u524dIP"):p(l.rows,"EC2\u5b89\u5168\u7ec4\u68c0\u67e5","SUCCESS","\u5b89\u5168\u7ec4\u4e2d22\u7aef\u53e3\u5df2\u6253\u5f00"))}l.loading-=1,c(E({},l,{loading:l.loading,rows:l.rows,spin:""})),0===l.loading&&c(E({},l,{spin:"none"}))}))}}catch(a){s=!0,i=a}finally{try{o||null==f.return||f.return()}finally{if(s)throw i}}}(o,n),function(e,a){var n={Filters:[{Name:"association.subnet-id",Values:[e]}]};u.describeNetworkAcls(n,(function(e,n){if(e)p(l.rows,"ACL\u68c0\u67e5","FAILED","\u65e0\u6cd5\u8c03\u7528API( \u7f51\u7edc\u6216\u6743\u9650\u95ee\u9898 )");else{var t=n.NetworkAcls[0].Entries,r=[],o=[],s=!0,i=!1,u=void 0;try{for(var d,f=t[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var b=d.value;b.Egress?o.push(b):r.push(b)}}catch(e){i=!0,u=e}finally{try{s||null==f.return||f.return()}finally{if(i)throw u}}for(var g="init",v=0,h=r;v<h.length;v++){var w=h[v];if("init"!==g)break;if("-1"===w.Protocol){if(!new m.a([w.CidrBlock]).contains(a))break;g=w.RuleAction}else if("6"===w.Protocol&w.PortRange.From<=22&w.PortRange.To>=22){if(!new m.a([w.CidrBlock]).contains(a))break;g=w.RuleAction}}"allow"===g?p(l.rows,"ACL\u68c0\u67e5","SUCCESS","NETWORK ACL\u672a\u7981\u6b6222\u7aef\u53e3"):p(l.rows,"ACL\u68c0\u67e5","FAILED","\u8be5EC2\u6240\u5904VPCSubnet\u7684NETWORK ACL\u7981\u6b6222\u7aef\u53e3, \u6216CIDR\u8303\u56f4\u4e0d\u5305\u542b\u5f53\u524dIP")}l.loading-=1,c(E({},l,{loading:l.loading,rows:l.rows,spin:""})),0===l.loading&&c(E({},l,{spin:"none"}))}))}(r,n),function(e,a){var n={Filters:[{Name:"vpc-id",Values:[e]}]};u.describeRouteTables(n,(function(e,n){if(e)p(l.rows,"\u8def\u7531\u8868\u914d\u7f6e\u68c0\u67e5","FAILED","\u65e0\u6cd5\u8c03\u7528API( \u7f51\u7edc\u6216\u6743\u9650\u95ee\u9898 )");else{var t=n.RouteTables[0].Routes,r="FAILED",o=!0,s=!1,i=void 0;try{for(var u,d=t[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var f=u.value;if(f.GatewayId.match("igw")){if(!new m.a([f.DestinationCidrBlock]).contains(a))break;r="SUCCESS";break}}}catch(e){s=!0,i=e}finally{try{o||null==d.return||d.return()}finally{if(s)throw i}}"FAILED"===r?p(l.rows,"\u8def\u7531\u8868\u914d\u7f6e\u68c0\u67e5","FAILED","\u8be5EC2\u6240\u4f7f\u7528\u7684\u8def\u7531\u8868\u4e0d\u5b58\u5728Internet Gateway, \u6216CIDR\u8303\u56f4\u4e0d\u5305\u542b\u5f53\u524dIP"):p(l.rows,"\u8def\u7531\u8868\u914d\u7f6e\u68c0\u67e5","SUCCESS","\u8be5EC2\u6240\u4f7f\u7528\u7684\u8def\u7531\u8868\u5b58\u5728Internet Gateway")}l.loading-=1,c(E({},l,{loading:l.loading,rows:l.rows,spin:""})),0===l.loading&&c(E({},l,{spin:"none"}))}))}(s,n)})),function(e){var a={InstanceIds:[e]};u.describeInstanceStatus(a,(function(e,a){if(e)p(l.rows,"EC2\u8fd0\u884c\u72b6\u6001\u68c0\u67e5","FAILED","\u65e0\u6cd5\u8c03\u7528API( \u7f51\u7edc\u6216\u6743\u9650\u95ee\u9898 )");else{var n=a.InstanceStatuses[0].InstanceState.Name,t=a.InstanceStatuses[0].InstanceStatus.Status,r=a.InstanceStatuses[0].SystemStatus.Status;"running"!==n?p(l.rows,"EC2\u8fd0\u884c\u72b6\u6001\u68c0\u67e5","FAILED","\u8be5EC2\u4e0d\u5728running\u72b6\u6001\u4e2d"):"ok"!==t?p(l.rows,"EC2\u8fd0\u884c\u72b6\u6001\u68c0\u67e5","FAILED","Instance Status\u68c0\u67e5\u5931\u8d25"):"ok"!==r?p(l.rows,"EC2\u8fd0\u884c\u72b6\u6001\u68c0\u67e5","FAILED","System Status\u68c0\u67e5\u5931\u8d25"):p(l.rows,"EC2\u8fd0\u884c\u72b6\u6001\u68c0\u67e5","SUCCESS","EC2\u72b6\u6001\u6b63\u5e38")}l.loading-=1,c(E({},l,{loading:l.loading,rows:l.rows,spin:""})),0===l.loading&&c(E({},l,{spin:"none"}))}))}(t),function(a){var n={InstanceId:a};u.getConsoleOutput(n,(function(a,n){if(a)p(l.rows,"\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d( \u9002\u7528\u90e8\u5206\u5b98\u65b9AMI )","FAILED","\u65e0\u6cd5\u8c03\u7528API( \u7f51\u7edc\u6216\u6743\u9650\u95ee\u9898 )");else if(void 0!==n.Output){var t=n.Output.replace(/\s/g,"+"),r=(t=e.from(t,"base64").toString()).match(/for user ([a-zA-Z0-9-]*)/);null!==r?p(l.rows,"\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d( \u9002\u7528\u90e8\u5206\u5b98\u65b9AMI )",r[1],""):p(l.rows,"\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d( \u9002\u7528\u90e8\u5206\u5b98\u65b9AMI )","","\u65e0\u6cd5\u901a\u8fc7EC2\u65e5\u5fd7\u627e\u5230\u7cfb\u7edf\u9ed8\u8ba4\u7528\u6237\u540d\uff0c\u8bf7\u53c2\u9605\u4e0b\u65b9\u6587\u6863\u201c\u9996\u6b21\u767b\u5f55\u672a\u6210\u529f\u201d")}else p(l.rows,"\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d( \u9002\u7528\u90e8\u5206\u5b98\u65b9AMI )","","\u65e0\u6cd5\u8bfb\u53d6\u7cfb\u7edf\u65e5\u5fd7,\u7cfb\u7edf\u65e5\u5fd7\u8fd8\u672a\u51c6\u5907\u597d");l.loading-=1,c(E({},l,{loading:l.loading,rows:l.rows,spin:""})),0===l.loading&&c(E({},l,{spin:"none"}))}))}(t)}else{u.describeInstances({},(function(e,a){if(e)p(l.rows,"\u8be5\u8d26\u53f7\u4e0b\u662f\u5426\u5b58\u5728\u8be5EC2","FAILED","\u8f93\u5165\u7684Region\u6216\u8005Access Key\u76f8\u5173\u4fe1\u606f\u6709\u8bef\uff0c\u6216\u8005\u662f\u65e0\u6cd5\u8c03\u7528API( \u7f51\u7edc\u6216\u6743\u9650\u95ee\u9898 )");else{var n=!1,t=!0,r=!1,o=void 0;try{for(var s,i=a.Reservations[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){if(s.value.Instances[0].PublicIpAddress===l.ip){p(l.rows,"\u8be5\u8d26\u53f7\u4e0b\u662f\u5426\u5b58\u5728\u8be5EC2","FAILED","\u8be5\u533a\u57df\u5185\u5b58\u5728\u8be5EC2\uff0c\u4f46\u8be5EC2\u65e0\u6cd5\u88ab\u5916\u7f51\u8bbf\u95ee\u5230\u3002"),n=!0;break}}}catch(e){r=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw o}}n||p(l.rows,"\u8be5\u8d26\u53f7\u4e0b\u662f\u5426\u5b58\u5728\u8be5EC2","FAILED","\u8f93\u5165\u7684IP\u5730\u5740\u6709\u8bef\uff0c\u8be5\u533a\u57df\u4e0d\u5b58\u5728\u8be5EC2")}c(E({},l,{loading:l.loading,rows:l.rows}))}))}l.loading-=2,c(E({},l,{loading:l.loading,rows:l.rows}))}))}})}}).call(this,n(23).Buffer)},122:function(e,a,n){"use strict";n.d(a,"a",(function(){return h}));var t=n(0),r=n.n(t),l=n(83),o=n(65),s=n(546),c=n(547),i=n(549),u=n(48),m=n(548),d=n(129),E=n(128),p=n(544),f=n(123),b=n.n(f),g=Object(l.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200},button:{margin:e.spacing(1)},div:{margin:e.spacing(1)},input:{display:"none"}}})),v=[{value:"cn-north-1",label:"China (Beijing)"},{value:"cn-northwest-1",label:"China (Ningxia)"},{value:"us-east-1",label:"US East (N. Virginia)"},{value:"us-east-2",label:"US East (Ohio)"},{value:"us-west-1",label:"US West (N. California)"},{value:"us-west-2",label:"US West (Oregon)"},{value:"ap-east-1",label:"Asia Pacific (Hong Kong)"},{value:"ap-south-1",label:"Asia Pacific (Mumbai)"},{value:"ap-northeast-2",label:"Asia Pacific (Seoul)"},{value:"ap-southeast-1",label:"Asia Pacific (Singapore)"},{value:"ap-southeast-2",label:"Asia Pacific (Sydney)"},{value:"ap-northeast-1",label:"Asia Pacific (Tokyo)"},{value:"ca-central-1",label:"Canada (Central)"},{value:"eu-central-1",label:"EU (Frankfurt)"},{value:"eu-west-1",label:"EU (Ireland)"},{value:"eu-west-2",label:"EU (London)"},{value:"eu-west-3",label:"EU (Paris)"},{value:"eu-north-1",label:"EU (Stockholm)"},{value:"me-south-1",label:"Middle East (Bahrain)"},{value:"sa-east-1",label:"South America (Sao Paulo)"}];function h(e){var a=g();return r.a.createElement(t.Fragment,null,r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(o.a,{id:"standard-ipaddress",label:"Public IP Address",placeholder:"192.168.1.1",className:a.textField,value:e.values.ip,onChange:e.handleChange("ip"),margin:"normal"}),r.a.createElement(o.a,{id:"standard-select-region",select:!0,label:"Region",className:a.textField,value:e.values.region,onChange:e.handleChange("region"),SelectProps:{MenuProps:{className:a.menu}},margin:"normal"},v.map((function(e){return r.a.createElement(p.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement(o.a,{value:e.values.accessKeyId,id:"standard-access-key-id",label:"Access Key Id",style:{margin:8},fullWidth:!0,margin:"normal",onChange:e.handleChange("accessKeyId")}),r.a.createElement(o.a,{value:e.values.accessSecret,id:"standard-access-key-secret",label:"Access Key Secret",style:{margin:8},type:"password",fullWidth:!0,margin:"normal",onChange:e.handleChange("accessSecret")}),r.a.createElement(s.a,{variant:"contained",color:"primary",className:a.button,onClick:e.handleClick},"Start"),r.a.createElement("div",{className:a.div,style:{display:e.values.spin}},r.a.createElement(b.a,{type:"spin",height:"36.5px",width:"36.5px"})),r.a.createElement("div",{className:a.div},r.a.createElement("a",{target:"_blank",href:"https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"\u627e\u4e0d\u5230\u60a8\u7684Access Key ID/Access Key Secret\uff1f"))),r.a.createElement(E.a,{className:a.root},r.a.createElement(c.a,{className:a.table},r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(u.a,null,"\u68c0\u67e5\u9879"),r.a.createElement(u.a,null,"\u68c0\u67e5\u7ed3\u679c"),r.a.createElement(u.a,null,"\u539f\u56e0"))),r.a.createElement(i.a,null,e.values.rows.map((function(e){return r.a.createElement(d.a,{key:e.name},r.a.createElement(u.a,{component:"th",scope:"row"},e.name),r.a.createElement(u.a,null,e.status),r.a.createElement(u.a,null,e.reason))}))))))}},138:function(e,a,n){e.exports=n(543)},143:function(e,a,n){},144:function(e,a,n){},526:function(e,a){},528:function(e,a){},543:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(10),o=n.n(l),s=(n(143),n(144),n(29)),c=n(121),i=n(83),u=n(611),m=n(600),d=n(601),E=n(51),p=n(84),f=n.n(p),b=Object(i.a)((function(e){return{root:{marginTop:e.spacing(3),width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function g(){var e=b();return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,null,r.a.createElement(m.a,{expandIcon:r.a.createElement(f.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(E.a,{className:e.heading},r.a.createElement("b",null,"\u9996\u6b21\u8fde\u63a5\u672a\u6210\u529f"))),r.a.createElement(d.a,null,r.a.createElement(E.a,null,"1\u3001\u68c0\u67e5\u767b\u5f55\u5bc6\u94a5\u662f\u5426\u6b63\u786e",r.a.createElement("br",null),r.a.createElement("br",null),"2\u3001\u767b\u5f55\u7528\u6237\u540d\u4e0d\u5bf9",r.a.createElement("br",null),"\xa0- \u82e5\u4e3aAWS\u5b98\u65b9\u9ed8\u8ba4AMI\uff0c\u5219\u9ed8\u8ba4\u7528\u6237\u540d\u79f0\u4e3a\uff1a",r.a.createElement("br",null),"\xa0\xa0\xa0\u5bf9\u4e8e Amazon Linux 2 \u6216 Amazon Linux AMI\uff0c\u7528\u6237\u540d\u79f0\u662f ec2-user.",r.a.createElement("br",null),"\xa0\xa0\xa0\u5bf9\u4e8e Centos AMI\uff0c\u7528\u6237\u540d\u79f0\u662f centos\u3002",r.a.createElement("br",null),"\xa0\xa0\xa0\u5bf9\u4e8e Debian AMI\uff0c\u7528\u6237\u540d\u79f0\u662f admin \u6216 root\u3002",r.a.createElement("br",null),"\xa0\xa0\xa0\u5bf9\u4e8e Fedora AMI\uff0c\u7528\u6237\u540d\u4e3a ec2-user \u6216 fedora\u3002",r.a.createElement("br",null),"\xa0\xa0\xa0\u5bf9\u4e8e RHEL AMI\uff0c\u7528\u6237\u540d\u79f0\u662f ec2-user \u6216 root\u3002",r.a.createElement("br",null),"\xa0\xa0\xa0\u5bf9\u4e8e SUSE AMI\uff0c\u7528\u6237\u540d\u79f0\u662f ec2-user \u6216 root\u3002",r.a.createElement("br",null),"\xa0\xa0\xa0\u5bf9\u4e8e Ubuntu AMI\uff0c\u7528\u6237\u540d\u79f0\u662f ubuntu\u3002",r.a.createElement("br",null),"\xa0\xa0\xa0\u8be6\u60c5\u53c2\u89c1\uff1a",r.a.createElement("a",{target:"_blank",href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/connection-prereqs.html#connection-prereqs-get-info-about-instance"},"\u83b7\u53d6\u6709\u5173\u60a8\u7684\u5b9e\u4f8b\u7684\u4fe1\u606f"),r.a.createElement("br",null),"\xa0- \u82e5\u4e3a\u975e\u5b98\u65b9\u9ed8\u8ba4AMI\uff0c\u8bf7\u53c2\u8003\u6587\u6863\u6216\u8054\u7cfb\u8d1f\u8d23\u4eba\u3002",r.a.createElement("br",null),r.a.createElement("br",null),"3\u3001EC2\u6682\u65f6\u5904\u4e8epending\u72b6\u6001\u8fd8\u672a\u542f\u52a8\u5b8c\u6210\u3002",r.a.createElement("br",null),r.a.createElement("br",null),"4\u3001\u76ee\u524d\u60a8\u5904\u4e8e\u9152\u5e97\u7b49\u516c\u5171WIFI\u533a\u57df\uff0c\u8be5\u516c\u5171\u7f51\u7edc\u5c01\u7981\u4e8622\u7aef\u53e3\u3002",r.a.createElement("br",null),r.a.createElement("br",null),"5\u3001\u60a8EC2\u7684IP\u88ab\u56fd\u5185\u5899\u4e86\u3002",r.a.createElement("br",null),r.a.createElement("br",null),"\u82e5\u4ee5\u4e0a\u5747\u4e0d\u7b26\u5408\u60a8\u7684\u60c5\u51b5\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u5de5\u7a0b\u5e08\u5e2e\u52a9\u60a8\u8fdb\u884c\u95ee\u9898\u6392\u67e5"))),r.a.createElement(u.a,null,r.a.createElement(m.a,{expandIcon:r.a.createElement(f.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},r.a.createElement(E.a,{className:e.heading},r.a.createElement("b",null,"\u66fe\u7ecf\u767b\u5f55\u6210\u529f\u8fc7\uff0c\u73b0\u5728\u65e0\u6cd5\u8fde\u63a5\u4e86"))),r.a.createElement(d.a,null,r.a.createElement(E.a,null,"\u4ee5\u4e0b\u51e0\u6761\u53ef\u80fd\u7684\u60c5\u51b5\u6216\u6709\u52a9\u4e8e\u60a8\u8fdb\u884c\u95ee\u9898\u7684\u6392\u67e5: ",r.a.createElement("br",null),r.a.createElement("br",null),"1\u3001\u62a5\u9519\u63d0\u793a\uff1ashell request failed on channel 0 ",r.a.createElement("br",null),"\xa0\xa0\xa0- \u7cfb\u7edf\u8fdb\u7a0b\u6570\u5c0f\u4e86\uff0c\u9700\u8981\u4fee\u6539/etc/security/limits.d/20-nproc.conf\u6587\u4ef6\u4e2d\u7684\u503c ",r.a.createElement("br",null),r.a.createElement("br",null),"2\u3001\u5185\u5b58\u4e0d\u591f\uff0c\u5bfc\u81f4sshd\u670d\u52a1\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002 ",r.a.createElement("br",null),r.a.createElement("br",null),"3\u3001\u9891\u7e41\u767b\u5f55\u6216\u8005\u8fde\u63a5\u6570\u8fc7\u591a\u8fbe\u5230\u4e0a\u9650 ",r.a.createElement("br",null),"\xa0\xa0\xa0- \u67e5\u770b\u4e00\u4e0b/var/log/secure \u6587\u4ef6\uff0c\u770b\u662f\u5426\u6709\u9891\u7e41\u767b\u5f55\u7684\u60c5\u51b5\u3002 ",r.a.createElement("br",null),"\xa0\xa0\xa0- \u67e5\u770b\u4e00\u4e0b/etc/ssh/sshd_config\u4e2d\u7684MaxStartups\u8bbe\u7f6e\uff0c\u589e\u5927\u6700\u5927\u8fde\u63a5\u6570\u5e76\u91cd\u542fsshd\u670d\u52a1\uff0c\u5e76\u5728\u6bcf\u6b21\u767b\u5f55\u4e4b\u540eexit\u767b\u51fa\u3002 ",r.a.createElement("br",null),r.a.createElement("br",null),"4\u3001\u76ee\u524d\u60a8\u5904\u4e8e\u9152\u5e97\u7b49\u516c\u5171WIFI\u533a\u57df\uff0c\u8be5\u516c\u5171\u7f51\u7edc\u5c01\u7981\u4e8622\u7aef\u53e3\u3002",r.a.createElement("br",null),r.a.createElement("br",null),"5\u3001\u60a8EC2\u7684IP\u88ab\u56fd\u5185\u5899\u4e86\u3002",r.a.createElement("br",null),r.a.createElement("br",null),"\u82e5\u4ee5\u4e0a\u5747\u4e0d\u7b26\u5408\u60a8\u7684\u60c5\u51b5\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u5de5\u7a0b\u5e08\u5e2e\u52a9\u60a8\u8fdb\u884c\u95ee\u9898\u6392\u67e5"))))}var v=n(602),h=n(603),w=Object(i.a)((function(e){return{root:{display:"flex"},container:{marginTop:e.spacing(3)},content:Object(s.a)({flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3),marginTop:e.spacing(6)},e.breakpoints.up("sm"),{marginLeft:240})}}));function y(){var e=w();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.content},r.a.createElement(v.a,null),r.a.createElement(h.a,{maxWidth:"lg",className:e.container},r.a.createElement(E.a,{component:"div"},r.a.createElement("h1",null,"\u6d4b\u8bd5SSH\u8fde\u63a5"),r.a.createElement("div",null,"\u672c\u7f51\u7ad9\u901a\u8fc7\u8c03\u7528aws\u7684API\u83b7\u53d6\u60a8EC2\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u4ee5\u6b64\u6765\u68c0\u9a8c\u662f\u5426\u5b58\u5728\u5bfc\u81f4\u65e0\u6cd5\u8fdb\u884cSSH\u767b\u5f55\u7684\u914d\u7f6e\u4fe1\u606f\u3002"),r.a.createElement("div",null,"\u672c\u7f51\u7ad9\u540c\u6837\u5217\u4e3e\u4e86\u5176\u4ed6\u7684\u4e00\u4e9b\u53ef\u80fd\u7684\u6545\u969c\u539f\u56e0\uff0c\u5728\u4e0b\u65b9\u201c\u5176\u4ed6\u53ef\u80fd\u7684\u95ee\u9898\u539f\u56e0Q&A\u4e2d\u201d\u3002"),r.a.createElement("div",null,"\u82e5\u672c\u7f51\u7ad9\u7684\u529f\u80fd\u65e0\u6cd5\u89e3\u51b3\u60a8\u7684\u95ee\u9898\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u5de5\u7a0b\u5e08\u8fdb\u884c\u6392\u67e5\u3002"),r.a.createElement("br",null),r.a.createElement("b",null,"\u58f0\u660e\uff1a"),"\u672c\u7f51\u7ad9\u4e3aGitHub Pages\u6258\u7ba1\u7684\u9759\u6001\u9875\u9762\u3002\u7eaf\u5f00\u6e90\uff0c\u6e90\u4ee3\u7801\u5728https://github.com/lab798/aws-troubleshooting\u3002\u4e0d\u5b58\u50a8\u7f13\u5b58\uff0c\u4e0d\u4fdd\u7559\u4efb\u4f55Access Key ID/Access Key Secret\u4fe1\u606f\u3002")),r.a.createElement(h.a,{maxWidth:"lg",className:e.container},r.a.createElement(E.a,{component:"div",style:{backgroundColor:"#cfe8fc"}},r.a.createElement(c.a,null))),r.a.createElement(h.a,{maxWidth:"lg",className:e.container},r.a.createElement("h1",null,"\u5176\u4ed6\u53ef\u80fd\u7684\u95ee\u9898\u539f\u56e0Q&A\uff1a"),r.a.createElement(g,null))))}var I=n(64),S=n(607),C=n(604),A=n(612),P=n(610),k=n(550),O=n(599),x=n(545),N=n(606),F=n(125),L=n.n(F),D=n(608),R=n(15),j=n(605),U=Object(i.a)((function(e){return{root:{display:"flex"},drawer:Object(s.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(s.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(s.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240}}}));var M=function(e){var a=e.container,n=U(),t=Object(R.a)(),l=r.a.useState(!1),o=Object(I.a)(l,2),s=o[0],c=o[1];function i(){c(!s)}var u=r.a.createElement("div",null,r.a.createElement("div",{className:n.toolbar}),r.a.createElement(C.a,null),r.a.createElement(O.a,null,r.a.createElement(j.a,{href:"/testSSH"},r.a.createElement(x.a,{button:!0,key:"\u68c0\u6d4bSSH\u8fde\u63a5"},r.a.createElement(N.a,{primary:"\u68c0\u6d4bSSH\u8fde\u63a5"})))),r.a.createElement(C.a,null));return r.a.createElement("div",{className:n.root},r.a.createElement(v.a,null),r.a.createElement(S.a,{position:"fixed",className:n.appBar},r.a.createElement(D.a,null,r.a.createElement(k.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:i,className:n.menuButton},r.a.createElement(L.a,null)),r.a.createElement(E.a,{variant:"h6",noWrap:!0},"AWS\u670d\u52a1\u6545\u969c\u68c0\u6d4b"))),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(P.a,{smUp:!0,implementation:"css"},r.a.createElement(A.a,{container:a,variant:"temporary",anchor:"rtl"===t.direction?"right":"left",open:s,onClose:i,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},u)),r.a.createElement(P.a,{xsDown:!0,implementation:"css"},r.a.createElement(A.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},u))))};function W(){return r.a.createElement("div",null,r.a.createElement(M,null))}var K=n(126),T=n(35);var B=function(){return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(K.a,null,r.a.createElement(T.a,{path:"/",exact:!0,component:y}),r.a.createElement(T.a,{path:"/testssh",exact:!0,component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.32ceb858.chunk.js.map