var gold = 1000;
var jscount = 0;
var fycount = 0;
var mgcount = 0;
var clickdmg = 1;
var dmgsec=1;
var lbpd1 = 0;
var lbpd2 = 0;
var lbpd3 = 0;
var speedx=1;
var storage = window.localStorage;
$(document).ready(function(){
	onStart();
	//存档方法  状态更新
setInterval("statsupdata()",500);
setInterval("goldsec()",1000*speedx);
})
//初始化

$(".game1").click(function(){
	click1();
})

//定义人员

//技术

function jishu1(name,js,cost,clicksh,dmg,level)
{
this.name=name;
this.js=js;
this.cost=parseInt(cost);
this.clicksh=parseInt(clicksh);
this.dmg=parseInt(dmg);
this.level=parseInt(level);


}

function levelup(person){
	person.level=parseInt(person.level)+parseInt(1);
	gold=parseInt(gold)-parseInt(person.cost);
	if(person.level==0){
		jscount=pasrseInt(jscount)+parseInt(1);
	}
	else if(person.level<10){
		person.clicksh=parseInt(person.clicksh)+1;
		person.dmg=parseInt(person.dmg)+1;
	}
	else if(10<=person.level<25){
		person.clicksh=parseInt(person.clicksh)*parseInt(2);
		person.dmg=parseInt(person.dmg)*parseInt(2);
	}
	else if(25<=person.level<50){
		person.clicksh=parseInt(person.clicksh)*parseInt(5);
		person.dmg=parseInt(person.dmg)*parseInt(5);
	}
	else if(50<=person.level<75){
		person.clicksh=parseInt(person.clicksh)*parseInt(15);
		person.dmg=parseInt(person.dmg)*parseInt(15);
	}
	else if(75<=person.level<100){
		person.clicksh=parseInt(person.clicksh)*parseInt(30);
		person.dmg=parseInt(person.dmg)*parseInt(30);
	}
	else if(person.level==100){
		person.clicksh=parseInt(person.clicksh)*parseInt(100);
		person.dmg=parseInt(person.dmg)*parseInt(100);
	}
	person.cost*=parseInt(person.level)*parseFloat(1.2)
	dmgsec=parseInt(dmgsec)+parseInt(person.dmg);
clickdmg=parseInt(clickdmg)+parseInt(person.clicksh);
}


xuezui=new jishu1("血罪天赎","一名勤勤恳恳的汉化技术人员，技术一顶一",100,10,10,0);





//
//xuezui = new Object();
//xuezui.name = "血罪天赎";
//xuezui.js = "一名勤勤恳恳的汉化技术人员，技术一顶一";
//xuezui.cost = 100;
//xuezui.clicksh=0;
//xuezui.dmg=0;
//xuezui.level=0;
//xuezui.levelup=function(){
//	xuezui.level++;
//	gold=parseInt(gold)-xuezui.cost
//	if(xuezui.level==0){
//		xuezui.clicksh*=1.5;
//		xuezui.dmg*=1.5;
//		jscount++;
//	}
//	else if(xuezui.level<10){
//		xuezui.clicksh++;
//		xuezui.dmg++;
//	}
//	else if(10<=xuezui.level<25){
//		xuezui.clicksh*=2;
//		xuezui.dmg*=2;
//	}
//	else if(25<=xuezui.level<50){
//		xuezui.clicksh*=5;
//		xuezui.dmg*=5;
//	}
//	else if(50<=xuezui.level<75){
//		xuezui.clicksh*=15;
//		xuezui.dmg*=15;
//	}
//	else if(75<=xuezui.level<100){
//		xuezui.clicksh*=30;
//		xuezui.dmg+=30;
//	}
//	else if(xuezui.level==100){
//		xuezui.clicksh*=100;
//		xuezui.dmg*=100;
//	}
//	xuezui.cost*=parseInt(xuezui.level)*1.2
//}



//状态显示
function statsupdata(){
	$(".rmb").text(gold)
	$(".jishucount").text(jscount)
	$(".fanyicount").text(fycount)
	$(".meigongcount").text(mgcount)
	savegame();
}

//每秒获得金钱
function goldsec(){
	gold=parseInt(gold)+parseInt(dmgsec);
}

//列表点击效果
$(".ds1").hide();
$(".ds2").hide();
$(".ds3").hide();
$(".lb1").click(function() {
	if (lbpd1 == 0) {
		$(".ds1").show();
		lbpd1++;
	} else {
		$(".ds1").hide();
		lbpd1--;
	}
})
$(".lb2").click(function() {
	if (lbpd2 == 0) {
		$(".ds2").show();
		lbpd2++;
	} else {
		$(".ds2").hide();
		lbpd2--;
	}
})
$(".lb3").click(function() {
	if (lbpd3 == 0) {
		$(".ds3").show();
		lbpd3++;
	} else {
		$(".ds3").hide();
		lbpd3--;
	}
})


//savegame();
//alert(gold)
function onStart() {
	if (storage.getItem("gold") != null) {
		gold = storage.getItem("gold");
		jscount = storage.getItem("jscount");
		fycount = storage.getItem("fycount");
		mgcount = storage.getItem("mgcount");
		clickdmg = storage.getItem("clickdmg");
		dmgsec = storage.getItem("dmgsec");
		xuezui.clicksh = storage.getItem("xuezui.clicksh");
		xuezui.cost = storage.getItem("xuezui.cost");
		xuezui.dmg = storage.getItem("xuezui.dmg");
		xuezui.level = storage.getItem("xuezui.level");
	}
}

function savegame() {
	//var strValue = document.getElementById("x1").value;
	var strValue0 = gold
	if (storage) {
		storage.setItem("gold", gold);
		storage.setItem("jscount", jscount);
		storage.setItem("fycount", fycount);
		storage.setItem("mgcount", mgcount);
		storage.setItem("clickdmg", clickdmg);
		storage.setItem("dmgsec", dmgsec);
		storage.setItem("xuezui.clicksh", xuezui.clicksh);
		storage.setItem("xuezui.cost", xuezui.cost);
		storage.setItem("xuezui.dmg", xuezui.dmg);
		storage.setItem("xuezui.level", xuezui.level);
	} else {
		alert("无法存档！");
	}
}
//点击方法
function click1() {
	gold = parseInt(gold) + parseInt(clickdmg);
	savegame();
	$(".rmb").text(gold)
//	alert(gold);
}

//购买

function xzbuy(){
	if(gold>xuezui.cost){
	for(var i=0;i<parseInt($(".xztsbuycount").val());i++){
		levelup(xuezui);
	}
	}
	else {
		alert("您的金钱不足")
	}
}
$(".xzbtx").click(function(){
	xzbuy();
})






