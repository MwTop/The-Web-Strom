//判断输入内容是否为空    
function IsNull(){    
    var str = document.getElementById('list1').value.trim();    
    if(str.length==0){    
        alert('对不起，文本框不能为空或者为空格!');//请将“文本框”改成你需要验证的属性名称!    
    }    
}    
   
//判断日期类型是否为YYYY-MM-DD格式的类型    
function IsDate(){     
    var str = document.getElementById('str').value.trim();    
    if(str.length!=0){    
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;     
        var r = str.match(reg);     
        if(r==null)    
            alert('对不起，您输入的日期格式不正确!'); //请将“日期”改成你需要验证的属性名称!    
        }    
}     
   
//判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型    
function IsDateTime(){     
    var str = document.getElementById('str').value.trim();    
    if(str.length!=0){    
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;     
        var r = str.match(reg);     
        if(r==null)    
        alert('对不起，您输入的日期格式不正确!'); //请将“日期”改成你需要验证的属性名称!    
    }    
}     
   
//判断日期类型是否为hh:mm:ss格式的类型    
function IsTime()     
{     
    var str = document.getElementById('str').value.trim();    
    if(str.length!=0){    
    reg=/^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/     
        if(!reg.test(str)){    
            alert("对不起，您输入的日期格式不正确!");//请将“日期”改成你需要验证的属性名称!    
        }    
    }    
}     
   
//判断输入的字符是否为英文字母    
function IsLetter()     
{     
        var str = document.getElementById('str').value.trim();    
        if(str.length!=0){    
        reg=/^[a-zA-Z]+$/;     
        if(!reg.test(str)){    
            alert("对不起，您输入的英文字母类型格式不正确!");//请将“英文字母类型”改成你需要验证的属性名称!    
        }    
        }    
}     
   
//判断输入的字符是否为整数    
function IsInteger()     
{       
        var str = document.getElementById('str').value.trim();    
        if(str.length!=0){    
        reg=/^[-+]?\d*$/;     
        if(!reg.test(str)){    
            alert("对不起，您输入的整数类型格式不正确!");//请将“整数类型”要换成你要验证的那个属性名称！    
        }    
        }    
}     
   
//判断输入的字符是否为双精度    
function IsDouble(val)     
{     
        var str = document.getElementById('str').value.trim();    
        if(str.length!=0){    
        reg=/^[-\+]?\d+(\.\d+)?$/;    
        if(!reg.test(str)){    
            alert("对不起，您输入的双精度类型格式不正确!");//请将“双精度类型”要换成你要验证的那个属性名称！    
        }    
        }    
}     
   
   
//判断输入的字符是否为:a-z,A-Z,0-9    
function IsString()     
{     
        var str = document.getElementById('str').value.trim();    
        if(str.length!=0){    
        reg=/^[a-zA-Z0-9_]+$/;     
        if(!reg.test(str)){    
            alert("对不起，您输入的字符串类型格式不正确!");//请将“字符串类型”要换成你要验证的那个属性名称！    
        }    
        }    
}     
   
//判断输入的字符是否为中文    
function IsChinese()     
{     
        var str = document.getElementById('str').value.trim();    
        if(str.length!=0){    
        reg=/^[\u0391-\uFFE5]+$/;    
        if(!reg.test(str)){    
            alert("对不起，您输入的字符串类型格式不正确!");//请将“字符串类型”要换成你要验证的那个属性名称！    
        }    
        }    
}     
   
//判断输入的EMAIL格式是否正确    
function IsEmail()     
{     
        var str = document.getElementById('str').value.trim();    
        if(str.length!=0){    
        reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;    
        if(!reg.test(str)){    
            alert("对不起，您输入的字符串类型格式不正确!");//请将“字符串类型”要换成你要验证的那个属性名称！    
        }    
        }    
}     
   
//判断输入的邮编(只能为六位)是否正确    
function IsZIP()     
{     
        var str = document.getElementById('str').value.trim();    
        if(str.length!=0){    
        reg=/^\d{6}$/;    
        if(!reg.test(str)){    
            alert("对不起，您输入的字符串类型格式不正确!");//请将“字符串类型”要换成你要验证的那个属性名称！    
        }    
        }    
}     
   
//判断输入的数字不大于某个特定的数字    
function MaxValue()     
{     
    var val = document.getElementById('str').value.trim();    
        if(str.length!=0){    
        reg=/^[-+]?\d*$/;     
        if(!reg.test(str)){//判断是否为数字类型    
            if(val>parseInt('123')) //“123”为自己设定的最大值    
            {     
                alert('对不起，您输入的数字超出范围');//请将“数字”改成你要验证的那个属性名称！    
            }     
        }    
    }    
}     
   
   
 Phone : /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/    
 Mobile : /^((\(\d{2,3}\))|(\d{3}\-))?13\d{9}$/    
 Url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/   
 IdCard : /^\d{15}(\d{2}[A-Za-z0-9])?$/   
 QQ : /^[1-9]\d{4,8}$/   
 某种特殊金额：/^((\d{1,3}(,\d{3})*)|(\d+))(\.\d{2})?$/               //说明：除“XXX    XX,XXX    XX,XXX.00”格式外

//为上面提供各个JS验证方法提供.trim()属性   
String.prototype.trim=function(){   
        return this.replace(/(^\s*)|(\s*$)/g, "");