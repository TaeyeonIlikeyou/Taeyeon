//文本框默认提示文字
function textFocus(el) {
    if (el.defaultValue == el.value) { el.value = ''; el.style.color = '#333'; }
}
function textBlur(el) {
    if (el.value == '') { el.value = el.defaultValue; el.style.color = '#999'; }
}

$(function(){
    /*生成验证码*/
    create_code();

    //登录页面的提示文字
    //账户输入框失去焦点
    (function login_validate(){
        $(".reg-box .account").blur(function(){
            //reg=/^1[3|4|5|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

            if( $(this).val()==""|| $(this).val()=="请输入您的账号")
            {
                $(this).addClass("errorC");
                $(this).next().html("账号不能为空！");
                $(this).next().css("display","block");
                $(".sub input").prop('disabled', true);
            } else {
                $(".sub input").prop('disabled', false);
                $(this).addClass("checkedN");
                $(this).removeClass("errorC");
                $(this).next().empty();
            }
        });
        /*密码输入框失去焦点*/
        $(".reg-box .admin_pwd").blur(function(){
            //reg=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;

            if($(this).val() == ""){
                $(this).addClass("errorC");
                $(this).next().html("密码不能为空！");
                $(this).next().css("display","block");
                $(".sub input").prop('disabled', true);
            } else {
                $(".sub input").prop('disabled', false);
                $(this).addClass("checkedN");
                $(this).removeClass("errorC");
                $(this).next().empty();
            }
        });

        /*验证码输入框失去焦点*/
        $(".reg-box .photokey").blur(function(){
            var code1=$('.reg-box input.photokey').val().toLowerCase();
            var code2=$(".reg-box .phoKey").text().toLowerCase();
            if(code1!=code2)
            {
                $(this).addClass("errorC");
                $(this).next().next().html("验证码输入错误!!!");
                $(this).next().next().css("display","block");
                $(".sub input").prop('disabled', true);
            }
            else
            {
                $(".sub input").prop('disabled', false);
                $(this).removeClass("errorC");
                $(this).next().next().empty();
                $(this).addClass("checkedN");
            }
        })
    })();
});