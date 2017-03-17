var code;
    function createCode() 
    {
     code = "";
     var codeLength = 4; //验证码的长度
     var checkCode = document.getElementById("checkCode");
     var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
          'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
          // 所有候选组成验证码的字符，当然也可以用中文的
     for(var i = 0; i < codeLength; i++) 
     {
      var charNum = Math.floor(Math.random() * 62);  //求一个最接近的整数
      code += codeChars[charNum];
     }
     if(checkCode) 
     {
      checkCode.className = "code";
      checkCode.innerHTML = code;
     }
    }
    function validateCode() 
    {
     var inputCode=document.getElementById("inputCode").value;
     
     if(inputCode.length <= 0) 
     {
        alert("请输入验证码！");
     }
     else if(inputCode.toLowerCase() != code.toLowerCase()) 
     {
        alert("验证码输入有误！");
        createCode(); //重新生成验证码
     }
     // else 
     // {
     //  alert("验证码正确！");
     // } 
   // writeMember();
    } 
//     //邮箱验证    
    function writeMember(){
        var email=document.getElementById("email"),
      emailError=document.getElementById('emailError'),
        str5=email.value,
        regPartton=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
        flag = false;
    if(!str5 || str5==null){
      // emailError.innerHTML = "邮箱码不能为空！";
       alert("邮箱码不能为空!");
         email.focus();
        flag = false;
    }else if(!regPartton.test(str5)){
       // emailError.innerHTML = "邮箱码格式不正确！";
       email.focus();
        alert("邮箱码格式不正确！");
       
        flag = false;
    }else{
      // emailError.innerHTML="";     
        flag = true;
    } 
    return flag;
    
 }
 function checkphone(){
  var phone=document.getElementById("phone").value;
    if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
      alert("手机号输入错误，请重写！");
      return false;
    }
 }  
 function checkpwd(){
   var a=document.getElementById("pwd1");
   var b=document.getElementById("pwd2");
   if(a.value !== b.value){
    alert("密码输入错误！");
    return false;
   }
    
 }  