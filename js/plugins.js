$(function(){
    $("#id1").mouseenter(function(){
        $(".class1").css('display', 'inline-block');
        $("#class1").click(function(){
            $("span").css('display', 'none');
            $(".class1").css('display', 'inline-block');
    
            // set custom attribute for marking this one as clicked
            $("#class1").attr('clicked', 'yes'); 
    
            return true;
        });
    }).mouseleave(function(){
    
        // check custom attribute before hiding the element
        if($("#class1").attr('clicked') != 'yes') {
            $("span").css('display', 'none');
            $(".class1").hide();
        }
    });
    /////////////////////////////////////////////////////
    $("#id2").mouseenter(function(){
        $(".class2").css('display', 'inline-block');
        $("#class2").click(function(){
            $("span").css('display', 'none');
            $(".class2").css('display', 'inline-block');
    
            // set custom attribute for marking this one as clicked
            $("#class2").attr('clicked', 'yes'); 
    
            return true;
        });
    }).mouseleave(function(){
    
        // check custom attribute before hiding the element
        if($("#class2").attr('clicked') != 'yes') {
            $("span").css('display', 'none');
            $(".class2").hide();
        }
    
    });
    ///////////////////////////////////////////////////////
    $("#id3").mouseenter(function(){
        $(".class3").css('display', 'inline-block');
        $("#class3").click(function(){
            $("span").css('display', 'none');
            $(".class3").css('display', 'inline-block');
    
            // set custom attribute for marking this one as clicked
            $("#class3").attr('clicked', 'yes'); 
    
            return true;
        });
    }).mouseleave(function(){
    
        // check custom attribute before hiding the element
        if($("#class3").attr('clicked') != 'yes') {
            $(".class3").hide();
            $("span").css('display', 'none');
        }
    });
    /////////////////////////////////////////////////////
    $("#id4").mouseenter(function(){
        $(".class4").css('display', 'inline-block');
        $("#class4").click(function(){
            $("span").css('display', 'none');
            $(".class4").css('display', 'inline-block');
    
            // set custom attribute for marking this one as clicked
            $("#class4").attr('clicked', 'yes'); 
    
            return true;
        });
    }).mouseleave(function(){
    
        // check custom attribute before hiding the element
        if($("#class4").attr('clicked') != 'yes') {
            $("span").css('display', 'none');
            $(".class4").hide();
        }
    });
    /////////////////////////////////////////////////////
    $("#id5").mouseenter(function(){
        $(".class5").css('display', 'inline-block');
        $("#class5").click(function(){
            $("span").css('display', 'none');
            $(".class5").css('display', 'inline-block');
    
            // set custom attribute for marking this one as clicked
            $("#class5").attr('clicked', 'yes'); 
    
            return true;
        });
    }).mouseleave(function(){
    
        // check custom attribute before hiding the element
        if($("#class5").attr('clicked') != 'yes') {
            $("span").css('display', 'none');
            $(".class5").hide();
        }
    });
    ///////////////////////////////////////////////////////////////


});