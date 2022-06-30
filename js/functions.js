let counter = 0;
let counter2 =0;
function next(scene){
	if(scene==1 && counter2==0){
		$('.cloud').css({"width":"9742px","height":"993px","left":"-3911px","top":"-290px"});
		$('#block1').fadeOut(500);
		$('.scene1').fadeOut(500);
		$('.scene2').css({"background-position":"0px -174px","opacity":"100%"});
		$('.backscene2').css({"background-position":"0px 0px","opacity":"100%"});
		$('#ground').css({"left":"-452.74px","opacity":"100%"});
		console.log('entro');
		setTimeout(function instance1(){
			$('.scene2').css("background-position","-452.74px -174px");
			$('.backscene2').css("background-position","-452.74px 0px");
			$('#monkey').css("left","387.4px");
			$('#monkey2').css("left","1229px");
			setTimeout(function(){
				$('#question1').css("opacity","100%");
				$('#question2').css("opacity","100%");
				setTimeout(function(){
					$('#question1').fadeOut(2000); 	
					$('#question2').fadeOut(2000);
					setTimeout(function(){
						$('#monkey-think1').css("opacity","100%");
						$('#monkey-think2').css("opacity","100%");
						$('#monkey-think3').css("opacity","100%");
						$('#monkey2-think1').css("opacity","100%");
						$('#monkey2-think2').css("opacity","100%");
						$('#monkey2-think3').css("opacity","100%");
						$('#monkeys-thoughts').css({"opacity":"100%","width":"961.06px","left":"487.33px"});
						$('#ground2').css("opacity","100%");
						$('#drag').css("opacity","100%");
						$('#drag').addClass("animate__fadeInUp animate__animated");

					},500);
				},500);
			},500);
		},500);
		counter2 +=1;
		console.log(counter2);
	}

	else if(scene==1 && counter2 !=0){

		$('.elements').css("left","0px");
		$('.scene2').css("background-position","-452.74px -174px");
		$('.backscene2').css("background-position","-452.74px 0px");
		$('#ground').css("left","-174px");
		$('.elements2').css("left","2005.76px");
		$('#drag').removeClass("animate__fadeInUp animate__animated");

	}
	else if(scene==2){
		$('.elements2').css("left","150px");
		$('.elements').css("left","-2205.76px");
		$('.slide2-monkey2').css("opacity","1");
		$('.scene2').css("background-position","-2205.69px -174px");
		$('.backscene2').css("background-position","-2205.69px 0px");
		$('#ground').css("left","-2031.76px");
		$('#drag').fadeOut();
		$('#cord1').css("top","-1018.38px");
		$('#cord2').css("top","-1018.38px");
	}
	else if(scene==3){
		$('#cord1').css("top","-23.5px");
		$('#cord2').css("top","-23.5px");
		$('#advisor').css("top","-7940.7px");
	}
	else if(scene==4){
		$('#advisor').css("top","-7171.7px");
	}
	else if(scene==5){
		$('#advisor').css("top","-5811.7px");
	}
	else if(scene==6){
		$('#advisor').css("top","-4618.7px");
	}
	else if(scene==7){
		$('#advisor').css("top","-3387.7px");
	}
	else if(scene==8){
		$('#advisor').css("top","-2194.7px");
	}
	else if(scene==9){
		$('#advisor').css("top","-987.7px");
		$('#drag').show();
		$('#drag').addClass("animate__fadeInUp animate__animated");
	}
	else if(scene==10){
		$('#advisor').css("top","222.3px");
	}
	else if(scene==11){

		$('.elements2').css("left","150px");
		$('.elements').css("left","-2205.76px");
		$('.slide2-monkey2').css("opacity","1");
		$('.scene2').css("background-position","-2205.69px -174px");
		$('.backscene2').css("background-position","-2205.69px 0px");
		$('#ground').css("left","-2031.76px");
		$('#advisor').css("top","950.3px");
		$('.scene3').css("left","2205.76px");
		$('#drag').hide();
	}
	else if(scene==12){
		$('.scene3').css("left","0px");	
		$('.elements2').css("left","-1705.76px");
		$('.elements').css("left","-4411.52px");
		$('.scene2').css("background-position","-3588.64px -174px");
		$('.backscene2').css("background-position","-3958.64px 0px");
		$('#ground').css("left","-4062px");
		$('.human').css("opacity","100%");
		$('.rock1').css({"top":"-872.72px","left":"637.56px","transform":"rotateZ(-45deg)"});
		$('.human').css("left","58.35px");
	}
	else if(scene==13){
		$('.rock1').css({"top":"540.23px","left":"856.49px","transform":"rotateZ(0deg)"});
		$('.rock2').css({"top":"-932.35px","left":"343px","transform":"rotateZ(-36deg)"});
		$('.rock3').css({"top":"-1002px","left":"1304.88px","transform":"rotateZ(0deg)"});
	}
	else if(scene==14){
		$('.human').css("left","147.35px");
		$('.rock1').css({"top":"540.23px","left":"940.49px","transform":"rotateZ(0deg)"});
		$('.rock2').css({"top":"256.75px","left":"523px","transform":"rotateZ(0deg)"});
		$('.rock3').css({"top":"-1002px","left":"1304.88px","transform":"rotateZ(-29deg)"});
	}
	else if(scene==15){
		$('.rock1').css({"top":"540.23px","left":"940.49px","transform":"rotateZ(0deg)"});
		$('.rock2').css({"top":"256.75px","left":"523px","transform":"rotateZ(0deg)"});
		$('.rock3').css({"top":"31.24px","left":"1194.95px","transform":"rotateZ(0deg)"});
		$('.scene3').css("left","0px");
		$('.elements2').css("left","-1705.76px");
		$('.elements').css("left","-4411.52px");
		$('.scene2').css("background-position","-3588.64px -174px");
		$('.backscene2').css("background-position","-3958.64px 0px");
		$('#ground').css("left","-4062px");
		$('.scene4').css("left","2205.76px");
		$('#cont-popup').fadeOut();

		//removing classes to apply them again in the next step
		$('.requirements').removeClass("animate__animated animate__fadeInRight");
		$('.one').removeClass("animate__animated animate__fadeInRight");
		$('.two').removeClass("animate__animated animate__fadeInRight");
		$('.three').removeClass("animate__animated animate__fadeInRight");
		$('.four').removeClass("animate__animated animate__fadeInRight");
		$('.requirements').addClass("animate__animated animate__fadeOutRight");
		setTimeout(function(){	
			$('.requirements').fadeOut();
		},1500);
	}
	else if(scene==16){
		$('.human2').css({"opacity":"100%"});
		$('.scene3').css("left","-2205.76px");
		$('.scene4').css("left","0px");
		$('.elements2').css("left","-3561.52px");
		$('.elements').css("left","-6617.28px");
		$('.scene2').css("background-position","-4971.59px -174px");
		$('.backscene2').css("background-position","-4971.59px 0px");
		$('#ground').css("left","-6093.76px");
		$('.requirements').removeClass("animate__animated animate__fadeOutRight");
		setTimeout(function(){
			$('.requirements').fadeIn();
			$('.one').hide();
			$('.two').hide();
			$('.three').hide();
			$('.four').hide();
			$('.requirements').addClass("animate__animated animate__fadeInRight");
			setTimeout(function(){
				$('.one').show();
				$('.one').addClass("animate__animated animate__fadeInRight");
				setTimeout(function(){
					$('.two').show();
					$('.two').addClass("animate__animated animate__fadeInRight");
					setTimeout(function(){
						$('.three').show();
						$('.three').addClass("animate__animated animate__fadeInRight");
						setTimeout(function(){
							$('.four').show();
							$('.four').addClass("animate__animated animate__fadeInRight");
						},200);
					},200);
				},200);
			},200);
		},1000);
	}
}

function key_press(){
	key_arrow = event.keyCode;

	// arrow right	39 in Js KeyCode
	if(key_arrow == 39){
		if(counter<=15)
		{
			counter +=1;
			console.log(`entro adelante ${counter}`);

		}
	}
	// arrow left	37 in Js KeyCode
	else if(key_arrow == 37){
		if(counter>=1){
			counter -=1;
		}
		console.log(`entro atras ${counter}`);
	}
next(counter);
};
	window.onkeydown = key_press;


function animations(name){
	var string = name+' .backcover';
	$(string).addClass("animate__animated animate__fadeInDown");
	$(string).removeClass("animate__animated animate__fadeOutDown");
}
function quickanimations(name){
	var string = name+' .backcover';
	$(string).removeClass("animate__animated animate__fadeInDown");
	$(string).addClass("animate__animated animate__fadeOutUp");
}


function popup(text,parragraf) {
	$('#header').html(text);
	$('#moreinformation').html(parragraf);
	$('#cont-popup').fadeIn();
}
function hidepop(){
	$('#cont-popup').fadeOut();
}