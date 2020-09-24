$(document).ready(function() {
    var days = $(".tdays")[0],
        hrs = $(".thrs")[0],
        min = $(".tmins")[0],
        sec = $(".tsecs")[0],
        rdaym = $(".rmtdays").get(),
        rhrsm = $(".rmthrs").get(),
        rminm = $(".rmtmins").get(),
        timeline = [Date.now() + 1000 * 60 * 56, //new Date('2019-10-11 14:05:12'),
            Date.now() + 1000 * 60 * 60 * 12,
            Date.now() + 1000 * 60 * 60 * 30,
            Date.now() + 1000 * 60 * 60 * 24 * 2,
            Date.now() + 1000 * 60 * 60 * 50
        ],
        rv = [],
        rd = [],
        rs = [],
        v = [99, 90, 50, 65, 59],
        d = [],
        s = [19, 10, 10, 15, 11];


    // sec.innerText = '50';
    // console.log(d);
    function leftTimer() {
        let curtime = Date.now();
        days.innerText = niceNum(Math.floor(((((((timeline[0] - curtime) / 1000) / 60) / 60) / 24) % 365)));
        hrs.innerText = niceNum(Math.floor(((((timeline[0] - curtime) / 1000) / 60) / 60) % 24));
        min.innerText = niceNum(Math.floor((((timeline[0] - curtime) / 1000) / 60) % 60));
        sec.innerText = niceNum(Math.floor(((timeline[0] - curtime) / 1000) % 60));
        if ((timeline[0] - curtime) < 0) {
            clearInterval(timeInterval);
            days.innerText = '00';
            hrs.innerText = '00';
            min.innerText = '00';
            sec.innerText = '00';
        }
    }
    timeInterval = setInterval(leftTimer, 1000);

    function niceNum(num) {
        if (num < 10 && num >= 0) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function rtimer() {
        curtime = Date.now();
        rdaym.forEach(function(curval, index) {
            curval.innerText = niceNum(Math.floor(((((((timeline[index] - curtime) / 1000) / 60) / 60) / 24) % 365)));
        })
        rhrsm.forEach(function(curval, index) {
            curval.innerText = niceNum(Math.floor(((((timeline[index] - curtime) / 1000) / 60) / 60) % 24));
        })
        rminm.forEach(function(curval, index) {
            curval.innerText = niceNum(Math.floor((((timeline[index] - curtime) / 1000) / 60) % 60));
        })
    }
    var rtimerr = setInterval(rtimer, 1000);

    $(".menu a").on("click", function() {
        event.preventDefault();

        $(".menu a").each(function() {
            $(this).removeClass("active");
        })
        $(this).addClass("active");

        $(".cblock > div").css("display", "none");

        if ($(this).hasClass("dofday")) {
            $(".mdealofd").css("display", "block");
            // corectheight($(".mdealofd"));
        };
        if ($(this).hasClass("Hot_Deals")) {
            $(".mhotd").css("display", "block");
            // corectheight($(".mhotd"));
        };
        if ($(this).hasClass("Most_resent")) {
            $(".mresen").css("display", "block");
            // corectheight($(".mresen"));
        };


    });

    function numdis() {
        let valinf = $(".val_inf, .tvalinf").get();
        valinf.forEach(function(element, index) {
            // console.log(element);
            if (index % 3 == 0) {
                rv.push(element);
                //rv.push(element);v[index]
            } else if (index % 3 == 1) {
                rd.push(element);

            } else if (index % 3 == 2) {
                rs.push(element);

            }

        })
        v.forEach(function(elem, index) {
            d[index] = ((elem + s[index]) * s[index] / 100).toFixed(1);
        })
        rv.forEach(function(elem, index) {
            elem.innerText = "$" + v[index];
        })
        rd.forEach(function(elem, index) {
            elem.innerText = d[index] + "%";
        })
        rs.forEach(function(elem, index) {
            elem.innerText = "$" + s[index];
        })
    }
    numdis();

    var doch = $(document).height(),
        docw = $(document).width();
    // console.log(doch);
    $(".singfon").css("height", doch);
    $(".sing_in > a").on("click", function() {
    	$(".formcont").css("display", "block");
        $(".formlogin").css("display", "block");
        $(".loginin__head").text("Вход");
        $(".loginin__head").css("display", "flex");
        $(".singfon").fadeIn(400, function() {

        });
    });
    $(".sing_up > a").on("click", function() {
    	$(".formcont").css("display", "block");
        $(".formreg").css("display", "block");
        $(".loginin__head").text("Регистрация");
        $(".loginin__head").css("display", "flex");
        $(".singfon").fadeIn(400, function() {

        });
    });
    $(".closeform").on("click", function() {
        closeform();
    })
    function closeform(){
         $(".singfon").fadeOut(400, function() {
            $(".formlogin, .singfon, .formreg, .loginin__head, .formcont, .shopcart, .check_successno, .check_success, .check_successok").hide();
        });
    }

    $(".submitreg").on("click", function() {
        event.preventDefault();
        let loginup = $(".loginup").val(),
            email = $(".loginup__emailv").val(),
            pass = $(".passup").val();
            $(".formreg .check_successno").css("display", "none");
            $(".formreg .check_success").css("display", "none");
            $(".formreg .check_successok").css("display", "none");
        if (loginup == "" || email == "" || pass == "") {
            alert("Не все поля заполнены!!!");
             $(".formreg .check_successno").css("display", "flex");
            $(".formreg .check_success").css("display", "flex");
            return false;
        } else {
            localStorage.setItem("loginup", loginup);
            localStorage.setItem("email", email);
            localStorage.setItem("pass", pass);
            $(".formreg .check_successok").css("display", "flex");
            $(".formreg .check_success").css("display", "flex");
            // check_successok_sizing();
            // console.log("loginup "+loginup+" email "+email+" pass "+ pass);
        }
    })
    $(".submitin").on("click", function() {
        event.preventDefault();
        let loginin = $(".loginin").val(),
            passin = $(".passin").val();
            $(".formlogin__content .check_successno").css("display", "none");
        	$(".formlogin__content .check_success").css("display", "none");
        	$(".formlogin__content .check_successok").css("display", "none");
        if (loginin == "" || passin == "") {
            alert("Не все поля заполнены!!!");
            $(".formlogin__content .check_successno").css("display", "flex");
        	$(".formlogin__content .check_success").css("display", "flex");
            return false;
        } else if(loginin == localStorage.getItem("loginup") && passin == localStorage.getItem("pass")){
        	// alert("Вход успешен");
        	$(".formlogin__content .check_successok").css("display", "flex");
        	$(".formlogin__content .check_success").css("display", "flex");
        	check_successok_sizing();
        }else{
        	alert("Неверный логин/пароль");
        	$(".formlogin__content .check_successno").css("display", "flex");
        	$(".formlogin__content .check_success").css("display", "flex");
        	
        }

})


function check_successok_sizing(){
$(".check_successok__bg").animate({
    width:"100px",
    height:"100px"
}, 2000, 
'linear'
,
function(){
    $(".check_successok__bg").animate({
    width:"120px",
    height:"120px"
}, 2000, 
'linear', function(){
    setTimeout(closeform, 1000);
}
)})}
$(".tocart, .checkout, .buyNow").on("click", function(){
    event.preventDefault();
    // $(".formcont").hide();
    $(".singfon").show();
    $(".shopcart").css("display","flex");
})
$("#tocartid1, #prodhelpdesc__id1").on("mouseover", function(){
    $("#prodhelpdesc__id1").show();
})
$("#tocartid1, #prodhelpdesc__id1").on("mouseout", function(){
    $("#prodhelpdesc__id1").hide();
})

$("#tocartid2, #prodhelpdesc__id2").on("mouseover", function(){
    $("#prodhelpdesc__id2").show();
})
$("#tocartid2, #prodhelpdesc__id2").on("mouseout", function(){
    $("#prodhelpdesc__id2").hide();
})

$("#tocartid3, #prodhelpdesc__id3").on("mouseover", function(){
    $("#prodhelpdesc__id3").show();
})
$("#tocartid3, #prodhelpdesc__id3").on("mouseout", function(){
    $("#prodhelpdesc__id3").hide();
})

$("#tocartid4, #prodhelpdesc__id4").on("mouseover", function(){
    $("#prodhelpdesc__id4").show();
})
$("#tocartid4, #prodhelpdesc__id4").on("mouseout", function(){
    $("#prodhelpdesc__id4").hide();
})

    


});