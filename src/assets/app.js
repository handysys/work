var App = function() {
    // var patientClick = false;
    // var providerClick = false;
    // var trogarzoClick = false;
    // var egriftaClick = false;
    // var userTypeClick = false;
    // var infoTypeClick = false;
    // var inactive_text_color = '#97b1d1';
    // var active_border_color = "#0c5ba5";
    return {
        // patientClick: function(){
        //     patientClick = !patientClick;
        //     providerClick = false;
        //     if(patientClick){
        //         $('#patient').css({'background-image': 'url("assets/imgs/main/dots_active.jpg")'});
        //         $('#patient .button-logo img').attr({'src': 'assets/imgs/main/Icon_Patient_Active.png'});
        //         $('#patient .button-text').css({'color': '#fff'});
        //         $('#provider').css({'background-image': 'url("assets/imgs/main/dots_inactive.jpg")'});
        //         $('#provider .button-logo img').attr({'src': 'assets/imgs/main/Icon_HCP_Inactive.png'});
        //         $('#provider .button-text').css({'color': inactive_text_color});
        //         userTypeClick = true;
        //     }else{
        //         $('#patient').css({'background-image': 'url("assets/imgs/main/dots_inactive.jpg")'});
        //         $('#patient .button-logo img').attr({'src': 'assets/imgs/main/Icon_Patient_Inactive.png'});
        //         $('#patient .button-text').css({'color': inactive_text_color});
        //         userTypeClick = false;
        //     }
        //     if(userTypeClick && infoTypeClick){
        //         $('#continue').attr({"src": 'assets/imgs/main/Continue_active.png'});
        //         $('#continue').css({'cursor': 'pointer'});
        //     }else{
        //         $('#continue').attr({"src": 'assets/imgs/main/Continue_inactive.png'});
        //         $('#continue').css({'cursor': 'default'});
        //     }
        // },

        // providerClick: function(){
        //     providerClick = !providerClick;
        //     patientClick = false;
        //     if(providerClick){
        //         $('#provider').css({'background-image': 'url("assets/imgs/main/dots_active.jpg")'});
        //         $('#provider .button-logo img').attr({'src': 'assets/imgs/main/Icon_HCP_Active.png'});
        //         $('#provider .button-text').css({'color': '#fff'});
        //         $('#patient').css({'background-image': 'url("assets/imgs/main/dots_inactive.jpg")'});
        //         $('#patient .button-logo img').attr({'src': 'assets/imgs/main/Icon_Patient_Inactive.png'});
        //         $('#patient .button-text').css({'color': inactive_text_color});
        //         userTypeClick = true;
        //     }else{
        //         $('#provider').css({'background-image': 'url("assets/imgs/main/dots_inactive.jpg")'});
        //         $('#provider .button-logo img').attr({'src': 'assets/imgs/main/Icon_HCP_Inactive.png'});
        //         $('#provider .button-text').css({'color': inactive_text_color});
        //         userTypeClick = false;
        //     }
        //     if(userTypeClick && infoTypeClick){
        //         $('#continue').attr({"src": 'assets/imgs/main/Continue_active.png'});
        //         $('#continue').css({'cursor': 'pointer'});
        //     }else{
        //         $('#continue').attr({"src": 'assets/imgs/main/Continue_inactive.png'});
        //         $('#continue').css({'cursor': 'default'});
        //     }
        // },

        // trogarzoClick: function() {
        //     trogarzoClick = !trogarzoClick
        //     egriftaClick = false;
            
        //     if(trogarzoClick){
        //         $('#trogarzo').css({'border-color': active_border_color});
        //         $('#trogarzo img').css({'opacity': 1});
        //         $('#egrifta img').css({'opacity': 0.3});
        //         $('#egrifta').css({'border-color': inactive_text_color});
        //         infoTypeClick = true;
        //     }else{
        //         $('#trogarzo img').css({'opacity': 0.3});
        //         $('#trogarzo').css({'border-color': inactive_text_color});
        //         infoTypeClick = false;
        //     }
        //     if(userTypeClick && infoTypeClick){
        //         $('#continue').attr({"src": 'assets/imgs/main/Continue_active.png'});
        //         $('#continue').css({'cursor': 'pointer'});
        //     }else{
        //         $('#continue').attr({"src": 'assets/imgs/main/Continue_inactive.png'});
        //         $('#continue').css({'cursor': 'default'});
        //     }
        // },

        // egriftaClick: function() {
        //     egriftaClick = !egriftaClick
        //     trogarzoClick = false;
        //     if( egriftaClick){
        //         $('#egrifta').css({'border-color': active_border_color});
        //         $('#egrifta img').css({'opacity': 1});
        //         $('#trogarzo img').css({'opacity': 0.3});
        //         $('#trogarzo').css({'border-color': inactive_text_color});
        //         infoTypeClick = true;
        //     }else{
        //         $('#egrifta img').css({'opacity': 0.3});
        //         $('#egrifta').css({'border-color': inactive_text_color});
        //         infoTypeClick = false;
        //     }
        //     if(userTypeClick && infoTypeClick){
        //         $('#continue').attr({"src": 'assets/imgs/main/Continue_active.png'});
        //         $('#continue').css({'cursor': 'pointer'});
        //     }else{
        //         $('#continue').attr({"src": 'assets/imgs/main/Continue_inactive.png'});
        //         $('#continue').css({'cursor': 'default'});
        //     }
        // },

        // continueClick: function() {
        //     if(patientClick && trogarzoClick){
        //         window.location.href = "/trogarzo/patient"
        //     }else if(patientClick && egriftaClick){
        //         window.location.href = "/egrifta/patient"
        //     }else if(providerClick && trogarzoClick){
        //         window.location.href = "/trogarzo/hcp"
        //     }else if(providerClick && egriftaClick){
        //         window.location.href = "/egrifta/hcp"
        //     }else{
        //         console.log("error");
        //     }
        // },

        openVideo() {       
            var vIndex =0; 
            var urls = [    "https://theratechnologies.s3.amazonaws.com/prod/media/Chapter1_ImportantRiskInformation_700p.mp4",
                            "https://theratechnologies.s3.amazonaws.com/prod/media/Dosing_and_administration_AboutEgrifta_700p.mp4",
                            "https://theratechnologies.s3.amazonaws.com/prod/media/Dosing_and_administration_Reconstituting_700p.mp4",
                            "https://theratechnologies.s3.amazonaws.com/prod/media/Dosing_and_administration__Injecting_700p.mp4",
                            "https://theratechnologies.s3.amazonaws.com/prod/media/Chapter5_Recap_700p.mp4"];
        
            var w = $(window).width(), h = $(window).height(), gap = 50, winTop = $(window).scrollTop();           console.log(winTop);
            var videoW = w > 500 ? w * 2 / 3 : w; 
            var layer = $("<div>").attr("id", "layer")
                .css({ "position": "absolute", "top": 0, "left": 0, "width": w, "height": $(document).height(), "background-color": "rgba(0, 0, 0, 0.5)",  "z-index": 10000 })
                .appendTo($("body"));                                //console.log(layer);
          
            var videoDiv = $("<div>").attr("id", "videoDiv")
                .css({ "position": "absolute", "top": winTop+gap, "left": w>500? w / 6 : 0, "width": videoW, "height": h - gap * 2 - 320, "text-align": "center" }).appendTo(layer);
            var video = $("<div>").attr("id", "video").appendTo(videoDiv);
                this.playVideo(urls[vIndex]);
                
            var imageDiv = $('<div></div>')
                                .css({ "font-size": "25px", "dislay": "inline-flex", "align-items": "center", "background": "#000", "border": "solid 3px #fff"}).appendTo(videoDiv);
            imageDiv.append('<a title="Important Safety Information" href="javascript:app.playVideo('+"'https://theratechnologies.s3.amazonaws.com/prod/media/Chapter1_ImportantRiskInformation_700p.mp4'"+')"><img src="https://theratechnologies.s3.amazonaws.com/prod/media/info_image.jpg" alt="Information" /></a>'+
                            '<a title="About Egrifta" href="javascript:app.playVideo('+"'https://theratechnologies.s3.amazonaws.com/prod/media/Dosing_and_administration_AboutEgrifta_700p.mp4'"+')"><img src="https://theratechnologies.s3.amazonaws.com/prod/media/About_image.jpg" alt="Information" /></a>'+
                            '<a title="Mixing Egrifta" href="javascript:app.playVideo('+"'https://theratechnologies.s3.amazonaws.com/prod/media/Dosing_and_administration_Reconstituting_700p.mp4'"+')"><img src="https://theratechnologies.s3.amazonaws.com/prod/media/mixing_image.jpg" alt="Information" /></a>'+
                            '<a title="Injecting Egrifta" href="javascript:app.playVideo('+"'https://theratechnologies.s3.amazonaws.com/prod/media/Dosing_and_administration__Injecting_700p.mp4'"+')"><img src="https://theratechnologies.s3.amazonaws.com/prod/media/inject_image.jpg" alt="Information" /></a>'+
                            '<a title="Recap" href="javascript:app.playVideo('+"'https://theratechnologies.s3.amazonaws.com/prod/media/Chapter5_Recap_700p.mp4'"+')"><img src="https://theratechnologies.s3.amazonaws.com/prod/media/Recap_image.jpg" alt="Information" /></a>');
                    
            var closeTab = $('<a onclick="app.closeVideo()"><i class="fa fa-times" aria-hidden="true"></i></a>')
                                .css({"position": "absolute", "color": "#fff", "top": winTop+10, "left": w*5/6-25, "font-size": "25px"}).appendTo(layer);
            var imageW = (videoW - 10*5)/5; //console.log(imageW)
            video.css({"border": "solid 3px #fff", "display": "flex", "background": "#000", "height": videoDiv.height()*4/5, "justify-content": "center"})
            imageDiv.find("img").css({"width": imageW, "padding": "5px"}).hover();
            
            /*$("#prevcious").click(function(){
                vIndex = (--vIndex) < 0 ? urls.length -1 : vIndex;
                 playVideo(urls[vIndex], videoDiv);
            });
            $("#next").click(function(){
                vIndex = (++vIndex) % urls.length ;
                 playVideo(urls[vIndex], videoDiv);
            });
            $("#layer").click(function () {
                $(this).remove();
            })*/
            
        },
        
        playVideo(url) {
            $("#video").empty()
                .append('<video id="video-player" autoplay preload="metadata" controls><source src="' + url + '" type="video/mp4"></video>');
        },
        
        closeVideo(){
                $("#layer").remove();
        }

    }
}

var app = new App();
