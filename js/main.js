window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)





	if(scrollTop >=3){

            $('.top_icon02').addClass('on');
        }


	if(scrollTop >= 3){

            $('.line').addClass('on');
        }


	if(scrollTop >= 3){

            $('.top_flower01').addClass('on');
        }


	if(scrollTop >= 3){

            $('.top_flower02').addClass('on');
        }


	if(scrollTop >= 3){

            $('.top_flower03').addClass('on');
        }

	if(scrollTop >= 70){

            $('.top_findfot').addClass('on');
        }

	if(scrollTop >= 800){

            $('.top_curating').addClass('on');
        }


	if(scrollTop >= 900){

            $('.top_title').addClass('on');
        }


	if(scrollTop >= 900){

            $('.top_hashtag').addClass('on');
        }


	if(scrollTop >= 900){

            $('.top_finding').addClass('on');
        }


	if(scrollTop >= 1100){

            $('.top_title_bottom').addClass('on');
        }


	if(scrollTop >= 1100){

            $('.top_hamburgerbutton').addClass('on');
        }


	if(scrollTop >= 1100){

            $('.top_minus').addClass('on');
        }


	if(scrollTop >= 1100){

            $('.top_plus').addClass('on');
        }


	if(scrollTop >= 1100){

            $('.top_right').addClass('on');
        }



	if(scrollTop >= 1400){

            $('.background_title_l').addClass('on');
        }

	

	if(scrollTop >= 1400){

            $('.background_title_r').addClass('on');
        }
	


	if(scrollTop >= 1800){

            $('.background_number01').addClass('on');
        }
	

	
	if(scrollTop >= 1800){

            $('.background_number02').addClass('on');
        }
	

	
	if(scrollTop >= 1900){

            $('.background_graff01').addClass('on');
        }


	if(scrollTop >= 1900){

            $('.background_graff02').addClass('on');
        }	


	if(scrollTop >= 2000){

            $('.userpersona_flower').addClass('on');
        }


	if(scrollTop >= 2000){

            $('.userpersona_line').addClass('on');
        }



	if(scrollTop >= 3000){

            $('.userpersona_title_up').addClass('on');
        }



	if(scrollTop >= 3300){

            $('.userpersona_title_down').addClass('on');
        }


	if(scrollTop >= 3400){

            $('.userpersona_yeji').addClass('on');
        }



	if(scrollTop >= 3200){

            $('.userpersona_donghui').addClass('on');
        }



	if(scrollTop >= 3000){

            $('.userpersona_jihye').addClass('on');
        }



	if(scrollTop >= 3600){

            $('.userpersona_cursor').addClass('on');
        }



	if(scrollTop >= 3700){

            $('.userpersona_titlebox').addClass('on');
        }


    
	if(scrollTop >= 3850){

            $('.userpersona_titlebox_content').addClass('on');
        }



	if(scrollTop >= 4200){

            $('.userpersona_grid_down').addClass('on');
        }


	if(scrollTop >= 4500){

            $('.userpersona_behavior').addClass('on');
        }


	
	if(scrollTop >= 4700){

            $('.userpersona_goal').addClass('on');
        }


	
	if(scrollTop >= 4700){

            $('.userpersona_painpoints').addClass('on');
        }



	if(scrollTop >= 4300){

            $('.userpersona_profile_title').addClass('on');
        }



	if(scrollTop >= 4380){

            $('.userpersona_image').addClass('on');
        }



	if(scrollTop >= 4400){

            $('.userpersona_profile').addClass('on');
        }



	if(scrollTop >= 4500){

            $('.userpersona_tag_all').addClass('on');
        }



	if(scrollTop >= 4600){

            $('.journeymap_graff').addClass('on');
        }



	if(scrollTop >= 5300){

            $('.journeymap_box01').addClass('on');
        }



	if(scrollTop >= 5450){

            $('.journeymap_box02').addClass('on');
        }



	if(scrollTop >= 5600){

            $('.journeymap_box03').addClass('on');
        }



	if(scrollTop >= 5750){

            $('.journeymap_box04').addClass('on');
        }


	if(scrollTop >= 5900){

            $('.journeymap_box05').addClass('on');
        }


	if(scrollTop >= 6050){

            $('.journeymap_box06').addClass('on');
        }



	if(scrollTop >= 6250){

            $('.userflowchart_wireflame').addClass('on');
        }



	if(scrollTop >= 7900){

            $('.userflowchart_all').addClass('on');
        }



	if(scrollTop >= 8500){

            $('.userflowchart_title').addClass('on');
        }



	if(scrollTop >= 7900){

            $('.userflowchart_detail').addClass('on');
        }


	if(scrollTop >= 9100){

            $('.idenditymockup_brandstory').addClass('on');
        }


	if(scrollTop >= 9300){

            $('.idenditymockup_findfot').addClass('on');
        }


	if(scrollTop >= 8500){

            $('.idenditymockup_typeface').addClass('on');
        }


	if(scrollTop >= 8500){

            $('.idenditymockup_colorpalette').addClass('on');
        }



	if(scrollTop >= 8500){

            $('.idenditymockup_flower01').addClass('on');
        }


	if(scrollTop >= 8500){

            $('.idenditymockup_flower02').addClass('on');
        }


	if(scrollTop >= 9900){

            $('.idenditymockup_about').addClass('on');
        }


	if(scrollTop >= 10000){

            $('.idenditymockup_pretendard').addClass('on');
        }


	if(scrollTop >= 10000){

            $('.idenditymockup_suit').addClass('on');
        }


	if(scrollTop >= 10500){

            $('.idenditymockup_palette1').addClass('on');
        }

    if(scrollTop >= 10530){

            $('.idenditymockup_palette2').addClass('on');
        }
    
    if(scrollTop >= 10590){

            $('.idenditymockup_palette4').addClass('on');
        }    

    if(scrollTop >= 10560){

            $('.idenditymockup_palette3').addClass('on');
        }    

	if(scrollTop >= 11600){

            $('.idenditymockup_cursor').addClass('shake-bottom');
        }


	if(scrollTop >= 11500){

            $('.idenditymockup_onboarding').addClass('on');
        }


	if(scrollTop >= 11600){

            $('.idenditymockup_mockup_title').addClass('on');
        }


	if(scrollTop >= 11800){

            $('.idenditymockup_mockup_title02').addClass('on');
        }


	if(scrollTop >= 11500){

            $('.idenditymockup_welcome').addClass('shake-bottom');
        }


	if(scrollTop >= 12000){

            $('.idenditymockup_onboarding_image').addClass('on');
        }


	if(scrollTop >= 11930){

            $('.idenditymockup_on01').addClass('on');
        }



	if(scrollTop >= 11960){

            $('.idenditymockup_on02').addClass('on');
        }



	if(scrollTop >= 11990){

            $('.idenditymockup_on03').addClass('on');
        }


	if(scrollTop >= 11900){

            $('.idenditymockup_splash').addClass('on');
        }


	if(scrollTop >= 12000){

            $('.idenditymockup_frame').addClass('on');
        }


	if(scrollTop >= 13600){

            $('.mainmockup_title0').addClass('on');
        }


	if(scrollTop >= 13800){

            $('.mainmockup_title').addClass('on');
        }



	if(scrollTop >= 14000){

            $('.mainmockup_flower').addClass('on');
        }


	if(scrollTop >= 14000){

            $('.mainmockup_frame').addClass('on');
        }



	if(scrollTop >= 14910){

            $('.mainmockup_content01').addClass('on');
        }


	if(scrollTop >= 15100){

            $('.mainmockup_magazine').addClass('on');
        }


	if(scrollTop >= 15200){

            $('.mainmockup_swipe').addClass('on');
        }



	if(scrollTop >= 15210){

            $('.mainmockup_swipe_r').addClass('on');
        }


	if(scrollTop >= 15650){

            $('.mainmockup_content02').addClass('on');
        }




	if(scrollTop >= 15900){

            $('.mainmockup_content03').addClass('on');
        }


	if(scrollTop >= 15800){

            $('.mainmockup_content04').addClass('on');
        }



	if(scrollTop >= 16100){

            $('.mainmockup_content05').addClass('on');
        }



    if(scrollTop >= 16000){

            $('.mainmockup_content05_image').addClass('on');
        }




	if(scrollTop >= 15300){

            $('.mainmockup_now01').addClass('on');
        }



        
	if(scrollTop >= 15400){

            $('.mainmockup_now02').addClass('on');
        }


	if(scrollTop >= 15500){

            $('.mainmockup_now03').addClass('on');
        }


	if(scrollTop >= 15600){

            $('.mainmockup_list01').addClass('on');
        }


	if(scrollTop >= 16500){

            $('.mainmockup_list02').addClass('on');
        }


	if(scrollTop >= 16600){

            $('.mainmockup_click').addClass('on');
        }


	if(scrollTop >= 16620){

            $('.mainmockup_click_r').addClass('on');
        }


	if(scrollTop >= 16700){

            $('.mainmockup_taste01').addClass('on');
        }


	if(scrollTop >= 16800){

            $('.mainmockup_taste02').addClass('on');
        }


	if(scrollTop >= 17400){

            $('.mainmockup_reservation_date_d').addClass('on');
        }


	if(scrollTop >= 17600){

            $('.mainmockup_reservation_date').addClass('on');
        }



	if(scrollTop >= 17800){

            $('.mainmockup_reservation_image').addClass('on');
        }


	if(scrollTop >= 17350){

            $('.mainmockup_reservation').addClass('on');
        }


	if(scrollTop >= 18000){

            $('.mainmockup_reservation2').addClass('on');
        }


	if(scrollTop >= 17500){

            $('.mainmockup_swipe2_d').addClass('on');
        }


	if(scrollTop >= 17600){

            $('.mainmockup_swipe2_d2').addClass('on');
        }


	if(scrollTop >= 17400){

            $('.mainmockup_swipe2').addClass('on');
        }


	if(scrollTop >= 19500){

            $('.interestmockup_close').addClass('on');
        }


	if(scrollTop >= 18900){

            $('.interestmockup_interest').addClass('on');
        }


	if(scrollTop >= 18900){

            $('.interestmockup_title').addClass('on');
        }


	if(scrollTop >= 19700){

            $('.interestmockup_close_content01').addClass('on');
        }


	if(scrollTop >= 19900){

            $('.interestmockup_close_content02').addClass('on');
        }


	if(scrollTop >= 18950){

            $('.interestmockup_cusor').addClass('shake-bottom');
        }


	if(scrollTop >= 20700){

            $('.mypagemockup_mypage').addClass('on');
        }


	if(scrollTop >= 20800){

            $('.mypagemockup_title').addClass('on');
        }


	if(scrollTop >= 21000){

            $('.mypagemockup_line').addClass('on');
        }



	if(scrollTop >= 21100){

            $('.mypagemockup_image').addClass('on');
        }


	if(scrollTop >= 21770){

            $('.mypagemockup_frame01').addClass('on');
        }



	if(scrollTop >= 2170){

            $('.mypagemockup_frame02').addClass('on');
        }



	if(scrollTop >= 20850){

            $('.mypagemockup_cursor').addClass('shake-bottom');
        }


	if(scrollTop >= 22450){

            $('.mypagemockup_click').addClass('on');
        }


	if(scrollTop >= 22600){

            $('.mypagemockup_title2').addClass('on');
        }


	if(scrollTop >= 23200){

            $('.mypagemockup_mytaste').addClass('on');
        }


	if(scrollTop >= 23350){

            $('.mypagemockup_step1').addClass('on');
        }


	if(scrollTop >= 23500){

            $('.mypagemockup_step2').addClass('on');
        }


	if(scrollTop >= 23650){

            $('.mypagemockup_step3').addClass('on');
        }


	if(scrollTop >= 23800){

            $('.mypagemockup_styletag').addClass('on');
        }


	if(scrollTop >= 23800){

            $('.mypagemockup_styletag_content').addClass('on');
        }


	if(scrollTop >= 24000){

            $('.mypagemockup_categorytag').addClass('on');
        }


	if(scrollTop >= 24000){

            $('.mypagemockup_categorytag_content').addClass('on');
        }


	if(scrollTop >= 24100){

            $('.mypagemockup_content01').addClass('on');
        }


	if(scrollTop >= 24200){

            $('.mypagemockup_content02').addClass('on');
        }


	if(scrollTop >= 24300){

            $('.mypagemockup_content03').addClass('on');
        }


    if(scrollTop >= 24800){

            $('.mapmockup_mappage').addClass('on');
        }
 


    if(scrollTop >= 24880){

            $('.mapmockup_title').addClass('on');
        }    


	if(scrollTop >= 25000){

            $('.mapmockup_toright1').addClass('on');
        }


	if(scrollTop >= 25100){

            $('.mapmockup_toright2').addClass('on');
        }


	if(scrollTop >= 25200){

            $('.mapmockup_toright3').addClass('on');
        }


	if(scrollTop >= 25300){

            $('.mapmockup_toright4').addClass('on');
        }



    if(scrollTop >= 25400){

            $('.mapmockup_toright5').addClass('on');
        }


	if(scrollTop >= 24950){

            $('.mapmockup_cursor').addClass('shake-bottom');
        }


	if(scrollTop >= 25800){

            $('.mapmockup_detail').addClass('on');
        }


	if(scrollTop >= 25950){

            $('.mapmockup_detail_content').addClass('on');
        }



	if(scrollTop >= 26050){

            $('.mapmockup_list01').addClass('on');
        }


	if(scrollTop >= 26150){

            $('.mapmockup_list02').addClass('on');
        }


	if(scrollTop >= 26250){

            $('.mapmockup_list03').addClass('on');
        }


    if(scrollTop >= 26600){

            $('.mapmockup_down').addClass('on');
        }    


    if(scrollTop >= 26900){

            $('.mapmockup_content').addClass('on');
        }       
 


	if(scrollTop >= 27050){

            $('.mapmockup_list01_content1').addClass('on');
        }


	if(scrollTop >= 27150){

            $('.mapmockup_list02_content2').addClass('on');
        }


	if(scrollTop >= 27250){

            $('.mapmockup_list03_content3').addClass('on');
        }



	if(scrollTop >= 26850){

            $('.mapmockup_flower').addClass('on');
        }




	if(scrollTop >= 27850){

            $('.mapmockup_thankyou').addClass('on');
        }



	if(scrollTop >= 28050){

            $('.mapmockup_forwatching').addClass('on');
        }



	if(scrollTop >= 27500){

            $('.mapmockup_banner').addClass('on');
        }



	if(scrollTop >= 26800){

            $('.mapmockup_banner_center').addClass('on');
        }


	if(scrollTop >= 27500){

            $('.mapmockup_banner_box').addClass('on');
        }


	if(scrollTop >= 26000){

            $('.mapmockup_frame').addClass('on');
        }


	if(scrollTop >= 27500){

            $('.mapmockup_frame02').addClass('on');
        }




    });




    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {


        setTimeout(()=>{
            $('.main').addClass('on');
        },1000)
	$('.logo').addClass('on')
 	$('.bg_top').addClass('on');
	 $('.main_title1').addClass('on');
	 $('.main_title2').addClass('on');
	$('.sub_title').addClass('on');
/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})
