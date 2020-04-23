//js

//LOADING SCREEN///////////////////
$(window).on("load", function () {
    $("#loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    })
})
//END LOADING SCREEN///////////////////

//SIDE NAV BAR//////////////////////////////////
let navWidth = $(".navMenu").outerWidth(true);
let drawerWidth = $(".drawer").outerWidth(true);
let sumWidth = navWidth + drawerWidth;

$("#options-container").css("left", `-${navWidth}px`);
$("#home").css("padding-left", `${drawerWidth}px`);

$("#toggleNav").click(function () {
    $(".fa-align-justify").toggleClass("fa-times");

    if ($("#options-container").css("left") == "0px") {
        $("#options-container").animate({ left: `-${navWidth}px` }, 500);
        $(".navMenu li").animate({ opacity: "0", marginTop: "500px" });
        $("#home").animate({paddingLeft: `${drawerWidth}px`},500);
    }
    else {
        $("#options-container").animate({ left: `0px` }, 500);
        $(".navMenu .li1").animate({ opacity: "1", marginTop: "8px" }, 1200);
        $(".navMenu .li2").animate({ opacity: "1", marginTop: "8px" }, 1300);
        $(".navMenu .li3").animate({ opacity: "1", marginTop: "8px" }, 1400);
        $(".navMenu .li4").animate({ opacity: "1", marginTop: "8px" }, 1500);
        $(".navMenu .li5").animate({ opacity: "1", marginTop: "8px" }, 1600);
        $(".navMenu .li6").animate({ opacity: "1", marginTop: "8px" }, 1700);
        $("#home").animate({paddingLeft: `${sumWidth}px`},500);
    }

})
//END SIDE NAV BAR///////////////////////////////////////////////


//typewriter///////////////////////////////////

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};
// TYPEWRITER//////////////////////////////////

//BUTTON UP//////////////////////////////////////////////
let searchBarOffset = $("#service-section").offset().top;

$(window).scroll(function () {

    let winScroll = $(window).scrollTop();

    if (winScroll > searchBarOffset) {

        $("#btnUp").fadeIn(500);
    }
    else {
        $("#btnUp").fadeOut(500);
    }
})
$("#btnUp").click(function () {

    $("html, body").animate({ scrollTop: '0' }, 1000);
})
//END BUTTON UP//////////////////////////////////////////////



//PROJECTS//////////////////////////////////////////////
var projectText=['LorLorem ipsum dolor sit amet, consectetur adipisicing elit,em','Lorem ipsum dolor sit amet, consectetur adipisicing elit,','Lorem ipsum dolor sit amet, consectetur adipisicing elit,','Lorem ipsum dolor sit amet, consectetur adipisicing elit,','Lorem ipsum dolor sit amet, consectetur adipisicing elit,','Lorem ipsum dolor sit amet, consectetur adipisicing elit,','Lorem ipsum dolor sit amet, consectetur adipisicing elit,','Lorem ipsum dolor sit amet, consectetur adipisicing elit,','Lorem ipsum dolor sit amet, consectetur adipisicing elit,'];
var projectName=['Project1','Project2','Project3','Project4','Project5','Project6','Project7','Project8','Project9']
var projectCategory=['WEB DESIGN','APP DEVELOPMENT','E-MARKETING','VIDEO DESIGN','IDENTITY DESIGN','SOCIAL MEDIA MANAGMENT','E-MARKETING','IDENTITY DESIGN','E-MARKETING']
var projectSrc=['images/webdesign.jpg','images/app.jpg','images/marketing.jpg','images/video.jpg','images/identity.jpg','images/smedia.jpg','images/marketing.jpg','images/identity.jpg','images/marketing.jpg']
var currentProject=0;
if(projectText.length<=4)
{
    var text="";
    for(i=0;i<projectText.length;i++)
    {
        currentProject++;
      text=`<div class="col-md-6>
                <div class="project d-flex justify-content-center align-items-center">
                    <div class="overlay"></div>   
                    <div class="projectContent">
                        <h4 class="text-center">`+projectName[i]+`</h4>
                        <p>`+projectText[i]+`</p>
                        <a href="#" class="hvr-bounce-to-right">Show details</a>
                        </div>   
                    <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                </div>
            </div>`
    }
$(".projectContain").html(text)
}
else
{
    var text="";
    for(i=0;i<4;i++)
    {
      currentProject++;
      text+=`<div class="col-md-6">
      <div class="project d-flex justify-content-center align-items-center">
      <div class="overlay"></div>   
                    <div class="projectContent">
                        <h4 class="text-center">`+projectName[i]+`</h4>
                        <p>`+projectText[i]+`</p>
                        <a href="#" class="hvr-bounce-to-right">Show details</a>
                        </div>   
                    <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                </div>
            </div>`
    }
$(".projectContain").html(text)
}

function showProjects()
{
    var text="";
    if(projectText.length-currentProject<=4)
    {   
        var current=currentProject
        for(i=current;i<projectText.length;i++)
        {
          currentProject++;
          text+=`<div class="col-md-6">
          <div class="project d-flex justify-content-center align-items-center">
          <div class="overlay"></div>   
                        <div class="projectContent">
                            <h4 class="text-center">`+projectName[i]+`</h4>
                            <p>`+projectText[i]+`</p>
                            <a href="#" class="hvr-bounce-to-right">Show details</a>
                            </div>   
                        <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                    </div>
                </div>`
        }
    $(".projectContain").html(text)    
}
    else
    {
        var t=currentProject
        for(i=currentProject;i<t+4;i++)
        {
            currentProject++;
          text+=`<div class="col-md-6">
          <div class="project d-flex justify-content-center align-items-center">
          <div class="overlay"></div>   
                        <div class="projectContent">
                            <h4 class="text-center">`+projectName[i]+`</h4>
                            <p>`+projectText[i]+`</p>
                            <a href="#" class="hvr-bounce-to-right">Show details</a>
                            </div>   
                        <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                    </div>
                </div>`
        }
    $(".projectContain").html(text)
    }
}
$('#Projects .fa-chevron-right').click(function()
{
    if(currentProject<projectText.length)
    {
        showProjects(); 
    }
    else
    {
        currentProject=0;
        showProjects(); 
    }
})
/*********************/

/*****FILTER PROJECTS*****/
$('.filterProjects a').click(function()
{
        var filtered="";
        if($(this).html()=="ALL")
        { 
            if($(".filterProjects a").hasClass("hvr-a")){
                $(".filterProjects a").removeClass("hvr-a");
            }
            $(this).addClass("hvr-a");

            $('#Projects .fa-chevron-right').show() 
            currentProject=0;
            showProjects();
        }
        else
        {
            $('#Projects .fa-chevron-right').hide() 
            if($(this).html()=="WEB")
            {
                if($(".filterProjects a").hasClass("hvr-a")){
                    $(".filterProjects a").removeClass("hvr-a");
                }
                $(this).addClass("hvr-a");
                
                for(i=0;i<projectText.length;i++)
                { 
                    if(projectCategory[i]=="WEB DESIGN")
                    {
                        filtered+=`<div class="col-md-6">
                        <div class="project d-flex justify-content-center align-items-center">
                        <div class="overlay"></div>   
                                <div class="projectContent">
                                    <h4 class="text-center">`+projectName[i]+`</h4>
                                    <p>`+projectText[i]+`</p>
                                    <a href="#" class="hvr-bounce-to-right">Show details</a>
                                </div>   
                                <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                            </div>
                        </div>`
                    }    
                }
            $(".projectContain").html(filtered)    
            }
            else if($(this).html()=="APPLICATIONS")
            {
                if($(".filterProjects a").hasClass("hvr-a")){
                    $(".filterProjects a").removeClass("hvr-a");
                }
                $(this).addClass("hvr-a");

                for(i=0;i<projectText.length;i++)
                { 
                    if(projectCategory[i]=="APP DEVELOPMENT")
                    {
                        filtered+=`<div class="col-md-6">
                        <div class="project d-flex justify-content-center align-items-center">
                        <div class="overlay"></div>   
                                <div class="projectContent">
                                    <h4 class="text-center">`+projectName[i]+`</h4>
                                    <p>`+projectText[i]+`</p>
                                    <a href="#" class="hvr-bounce-to-right">Show details</a>
                                </div>   
                                <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                            </div>
                        </div>`
                    }    
                }
            $(".projectContain").html(filtered)    
            }
            else if($(this).html()=="E-MARKETING")
            {
                if($(".filterProjects a").hasClass("hvr-a")){
                    $(".filterProjects a").removeClass("hvr-a");
                }
                $(this).addClass("hvr-a");

                for(i=0;i<projectText.length;i++)
                { 
                    if(projectCategory[i]=="E-MARKETING")
                    {
                        filtered+=`<div class="col-md-6">
                        <div class="project d-flex justify-content-center align-items-center">
                        <div class="overlay"></div>   
                                <div class="projectContent">
                                    <h4 class="text-center">`+projectName[i]+`</h4>
                                    <p>`+projectText[i]+`</p>
                                    <a href="#" class="hvr-bounce-to-right">Show details</a>
                                </div>   
                                <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                            </div>
                        </div>`
                    }    
                }
            $(".projectContain").html(filtered)    
            }
            else if($(this).html()=="SOCIAL MEDIA")
            {
                if($(".filterProjects a").hasClass("hvr-a")){
                    $(".filterProjects a").removeClass("hvr-a");
                }
                $(this).addClass("hvr-a");

                for(i=0;i<projectText.length;i++)
                { 
                    if(projectCategory[i]=="SOCIAL MEDIA MANAGMENT")
                    {
                        filtered+=`<div class="col-md-6">
                        <div class="project d-flex justify-content-center align-items-center">
                        <div class="overlay"></div>   
                                <div class="projectContent">
                                    <h4 class="text-center">`+projectName[i]+`</h4>
                                    <p>`+projectText[i]+`</p>
                                    <a href="#" class="hvr-bounce-to-right">Show details</a>
                                </div>   
                                <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                            </div>
                        </div>`
                    }    
                }
            $(".projectContain").html(filtered)    
            }
            else if($(this).html()=="VIDEOS")
            {
                if($(".filterProjects a").hasClass("hvr-a")){
                    $(".filterProjects a").removeClass("hvr-a");
                }
                $(this).addClass("hvr-a");

                for(i=0;i<projectText.length;i++)
                { 
                    if(projectCategory[i]=="VIDEO DESIGN")
                    {
                        filtered+=`<div class="col-md-6">
                        <div class="project d-flex justify-content-center align-items-center">
                        <div class="overlay"></div>   
                                <div class="projectContent">
                                    <h4 class="text-center">`+projectName[i]+`</h4>
                                    <p>`+projectText[i]+`</p>
                                    <a href="#" class="hvr-bounce-to-right">Show details</a>
                                </div>   
                                <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                            </div>
                        </div>`
                    }    
                }
            $(".projectContain").html(filtered)    
            }
            else if($(this).html()=="IDENTITY")
            {
                if($(".filterProjects a").hasClass("hvr-a")){
                    $(".filterProjects a").removeClass("hvr-a");
                }
                $(this).addClass("hvr-a");
                
                for(i=0;i<projectText.length;i++)
                { 
                    if(projectCategory[i]=="IDENTITY DESIGN")
                    {
                        filtered+=`<div class="col-md-6">
                        <div class="project d-flex justify-content-center align-items-center">
                        <div class="overlay"></div>   
                                <div class="projectContent">
                                    <h4 class="text-center">`+projectName[i]+`</h4>
                                    <p>`+projectText[i]+`</p>
                                    <a href="#" class="hvr-bounce-to-right">Show details</a>
                                </div>   
                                <div class="typeHint rounded-left">`+projectCategory[i]+`</div>                                                 
                            </div>
                        </div>`
                    }    
                }
            $(".projectContain").html(filtered)    
            }
        }
}
)

//END PROJECTS//////////////////////////////////////////////


//OUR CLIENTS//////////////////////////////////////////////
var reviewSrc=['images/client-1.png','images/client-2.png','images/client-3.png','images/client-5.png','images/client-6.png'];
var reviewText=['First class service and product.','quick delivery and quality','Very happy will definitely use again.','Very efficient','Brilliant service and quick delivery. Thank you'];
var reviewName=['MOLLY F. ','Alison R.','Lucy B.','Patarita T.','Mick B. ']
$(".Clients img").attr('src',reviewSrc[0]);
$(".Clients .reviewName").html(reviewName[0]);
$(".reviewPara p").html('<span><i class="fa fa-quote-left"></i></span>'+reviewText[0]+'<span><i class="fa fa-quote-right"></i></span>') 
var reviewNumber=0;
$(".Clients .fa-chevron-right").click(function()
{
    if(reviewNumber==reviewSrc.length-1)
    { 
        $(".Clients img").attr('src',reviewSrc[0]) 
        $(".reviewPara p").html('<span><i class="fa fa-quote-left"></i></span>'+reviewText[0]+'<span><i class="fa fa-quote-right"></i></span>') 
        $(".Clients .reviewName").html(reviewName[0]);
        reviewNumber=0;
    }
    else
    {
        reviewNumber++;
        $(".Clients img").attr('src',reviewSrc[reviewNumber])
        $(".reviewPara p").html('<span><i class="fa fa-quote-left"></i></span>'+reviewText[reviewNumber]+'<span><i class="fa fa-quote-right"></i></span>')   
        $(".Clients .reviewName").html(reviewName[reviewNumber]);
    }
}
);
$(".Clients .fa-chevron-left").click(function()
{
    if(reviewNumber==0)
    {
        $(".Clients img").attr('src',reviewSrc[reviewSrc.length-1]) 
        $(".reviewPara p").html('<span><i class="fa fa-quote-left text-start"></i></span>'+reviewText[reviewSrc.length-1]+'<span><i class="fa fa-quote-right text-start"></i></span>') 
        $(".Clients .reviewName").html(reviewName[reviewSrc.length-1]);
        reviewNumber=reviewSrc.length-1; 
    }
    else
    {
        reviewNumber--;
        $(".Clients img").attr('src',reviewSrc[reviewNumber])
        $(".reviewPara p").html('<span><i class="fa fa-quote-left"></i></span>'+reviewText[reviewNumber]+'<span><i class="fa fa-quote-right"></i></span>')   
        $(".Clients .reviewName").html(reviewName[reviewNumber]);
    }
}
);

/*END OUR CLIENTS*/

/*Getting request values*/
var firstName=document.getElementById("firstName");
var secondName=document.getElementById("secondName");
var phone=document.getElementById("phone");
var country=document.getElementById("country");
var email=document.getElementById("email");
var subject=document.getElementById("subject");
var message=document.getElementById("exampleFormControlTextarea1");
/* */
/*Validation*/
var firstNameValid=false;
var secondNameValid=false;
var phoneValid=false;
var countryValid=false;
var emailValid=false;
/*********************/

/*Validate firstName*/
firstName.addEventListener("keyup",function()
{
    var regEx = /^[a-zA-Z]{3,8}$/;
    var nameP=firstName.value;
    if(nameP=="")
    {
        /*Still empty*/
        firstNameValid=false;
        $("#ErrorFName").css("display","none");
    }
    else if((regEx.test(nameP)==true))
    {
        /*No error*/
        firstNameValid=true;
        $("#ErrorFName").css("display","none");
    }
    else
    {
        /*error*/
        firstNameValid=false;
        $("#ErrorFName").css("display","block");
    }
});
/*********************/

/*Validate secondName*/
secondName.addEventListener("keyup",function()
{
    var regEx = /^[a-zA-Z]{3,8}$/;
    var nameP=secondName.value;
    if(nameP=="")
    {
        /*Still empty*/
        secondNameValid=false;
        $("#ErrorLName").css("display","none");
    }
    else if((regEx.test(nameP)==true))
    {
        /*No error*/
        secondNameValid=true;
        $("#ErrorLName").css("display","none");
    }
    else
    {
        /*error*/
        secondNameValid=false;
        $("#ErrorLName").css("display","block");
    }
});
/*********************/

/*Validate phone*/
phone.addEventListener("keyup",function()
{
    var regEx = /^[0-9]{8}$/;
    var phoneP=phone.value;
    if(phoneP=="")
    {   /*Still empty*/
        phoneValid=false;
        $("#ErrorPhone").css("display","none");
    }
    else if((regEx.test(phoneP)==true))
    {   /*No error*/
        phoneValid=true;
        $("#ErrorPhone").css("display","none");
    }
    else
    {   /*error*/
        phoneValid=false;
        $("#ErrorPhone").css("display","block");
    }
});
/*********************/

/*Validate email*/
email.addEventListener("keyup",function()
{
    var regEx = /^[a-zA-Z].{5,19}@(gmail|yahoo).com$/;
    var emailP=email.value;
    if(emailP=="")
    {
        /*Still empty*/
        emailValid=false;
        $("#ErrorEmail").css("display","none");
    }
    else if((regEx.test(emailP)==true))
    {   
        /*No error*/
        emailValid=true;
        $("#ErrorEmail").css("display","none");
    }
    else
    {
        /*error*/
        emailValid=false;
        $("#ErrorEmail").css("display","block");
    }
});
/*********************/

/*Validate message*/
message.addEventListener("keyup",function()
{
    var regEx = /^.{10,1000}$/;
    var messageP=message.value;
    if(messageP=="")
    {
        /*Still empty*/
        messageValid=false;
        $("#ErrorMsg").css("display","none");
    }
    else if((regEx.test(messageP)==true))
    {   
        /*No error*/
        messageValid=true;
        $("#ErrorMsg").css("display","none");
    }
    else
    {
        /*error*/
        messageValid=false;
        $("#ErrorMsg").css("display","block");
    }
});
/*********************/


/*Validate subject*/
subject.addEventListener("change",function()
{
    if(subject.value=='Subject')
    {
        $("#ErrorSubject").css("display","block");
    }
   else
    {
        $("#ErrorSubject").css("display","none");
    }
}
)
/*********************/

/*Validate Country*/
country.addEventListener("change",function()
{
    if(country.value=='Country')
    {
        $("#ErrorCountry").css("display","block");
    }
   else
    {
        $("#ErrorCountry").css("display","none");
    }
}
)
/*********************/


/*********************/

$('#submitRequest').click(function()
{
    if(subject.value=='Subject')
    {
        $("#ErrorSubject").css("display","block");
    }
    if(country.value=='Country')
    {
        $("#ErrorCountry").css("display","block");
    }
}
)
;/*********************/

