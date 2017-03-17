 //用JS加载CSS代码

function loadStyleString(css){
var style = document.creasteElement("style");
    style.type = "text/css";
    try{
    	style.appendChild(document.createTextNode("body{background-color:red}"));
    }  catch(ex){
    	style.styleSheet.cssText = "body{background-color:red}";
    }
      var head = document.getElementsByTagName("head")[0];
          head.appendChild(style);
}

//调用方式
loadStyleString("body{background-color:red}");
  