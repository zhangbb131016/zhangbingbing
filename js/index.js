$(function() {
	//优选制造商页面
			$(document).click(function() {
				//输入框
				$("#inpt_w").removeClass("inpt_w1");
				$("#inpt1").blur().val("");
				//下拉框
				$(".li_main_click").removeClass("li_main1");
				$(".text_w_w .text_w").hide();
				$(".yxzzs_zz").hide();
				$(".yxzzs").removeClass("yxzzs1");
				$(".text_w_w p").removeClass("p_hov");
			});
			//输入框
			$("#inpt_w").click(function(e) {
				e = e || window.event;
				if(e.stopPropagation) {
					e.stopPropagation();
				} else {
					e.cancelBubble = true;
				}
				$(this).addClass("inpt_w1");
				$("#inpt1").focus();
			});
			//下拉框
			$(".screen_ul .li_main_click").click(function(e) {
				e = e || window.event;
				if(e.stopPropagation) {
					e.stopPropagation();
				} else {
					e.cancelBubble = true;
				}
				$(this).addClass("li_main1");
				$(this).parent("li").siblings("li").children(".li_main_click").removeClass("li_main1");
				var bb = $(this).parent("li").index();
				$(".text_w_w .text_w").eq(bb).show().siblings(".text_w").hide();
				$(".yxzzs_zz").show();
				$(".yxzzs").addClass("yxzzs1");
			});
			$(".text_w_main p").click(function() {
				$(this).addClass("p_hov").siblings("p").removeClass("p_hov");
			});
			$(".text_w_main").click(function(e) {
				e = e || window.event;
				if(e.stopPropagation) {
					e.stopPropagation();
				} else {
					e.cancelBubble = true;
				}
				$(this).parents(".text_w").show();
				var dd = $(this).parents(".text_w").index();
				$(".screen_ul li").eq(dd).children(".li_main_click").addClass("li_main1");
				$(".yxzzs_zz").show();
				$(".yxzzs").addClass("yxzzs1");
			});
			//筛选
			$("#shaixuan").click(function(e) {
				e = e || window.event;
				if(e.stopPropagation) {
					e.stopPropagation();
				} else {
					e.cancelBubble = true;
				}
				$(".li_main_click").removeClass("li_main1");
				$(".yxzzs_zz").hide();
				$(".text_w_w .text_w").hide();
				$(".yxzzs_sx").show();
				$(".yxzzs_sx").animate({
					left: "20%"
				});
				$(".yxzzs_sx span").removeClass("span_hov");
				$(".yxzzs_zz1").show();
				$(".yxzzs").addClass("yxzzs1");
			});
			$(".yxzzs_sx").click(function(e) {
				e = e || window.event;
				if(e.stopPropagation) {
					e.stopPropagation();
				} else {
					e.cancelBubble = true;
				}
				$(".yxzzs").addClass("yxzzs1");
			});
			$(".yxzzs_sx span").click(function() {
				$(this).addClass("span_hov").siblings("span").removeClass("span_hov");
			});
			$(".yxzzs_sx .btn").click(function(e) {
				e = e || window.event;
				if(e.stopPropagation) {
					e.stopPropagation();
				} else {
					e.cancelBubble = true;
				}
				$(".yxzzs_sx span").removeClass("span_hov");
				$(".yxzzs_sx").animate({
					left: "100%"
				});
				$(".yxzzs_sx").hide();
				$(".yxzzs_zz1").hide();
				$(".yxzzs").removeClass("yxzzs1");
			});
			$(".yxzzs_zz1").click(function(e) {
				e = e || window.event;
				if(e.stopPropagation) {
					e.stopPropagation();
				} else {
					e.cancelBubble = true;
				}
				$(".yxzzs_sx").animate({
					left: "100%"
				});
				$(".yxzzs_sx").hide();
				$(this).hide();
				$(".yxzzs").removeClass("yxzzs1");
			});
			//选择地区
			$(".yxzzs_top_lf").click(function(e) {
				e = e || window.event;
				if(e.stopPropagation) {
					e.stopPropagation();
				} else {
					e.cancelBubble = true;
				}
				$(".yxzzs_xzdq").show();
				$(".yxzzs_xzdq").animate({
					left: "20%"
				});
				$(".letter").fadeIn(1500);
				$(".yxzzs_zz1").show();
				$(".yxzzs").addClass("yxzzs2");
				$(".li_main_click").removeClass("li_main1");
				$(".yxzzs_zz").hide();
				$(".text_w_w .text_w").hide();
			});
			$(".yxzzs_zz1").click(function(e) {
				$(".yxzzs_xzdq").animate({
					left: "100%"
				});
				$(".letter").hide();
				$(".yxzzs_xzdq").hide();
				$(this).hide();
				$(".yxzzs").removeClass("yxzzs2");
				$(window).scrollTop(0);
			});
			$(".city-list p").click(function(e) {
				var ptext = $(this).html();
				$(".yxzzs_top_lf .text").html(ptext);
				$(".yxzzs_xzdq").animate({
					left: "100%"
				});
				$(".letter").hide();
				$(".yxzzs_xzdq").hide();
				$(".yxzzs_zz1").hide();
				$(".yxzzs").removeClass("yxzzs2");
				$(window).scrollTop(0);
			});
		
		})