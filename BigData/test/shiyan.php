
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
     <script type="text/javascript" src="jquery-3.1.0.js"></script>
     <script type="text/javascript">
         var user="我叫王总";
         $(function(){
             $('button').bind('click',function(){
                 $.get('lianxi.php',{'user':user},function(jdata){
                    var jsData = eval("("+jdata+")");  //½âÎöjsonµÄºËÐÄÓï¾ä
                    for(var prototype in jsData){
                      $('div#my').html(jsData[prototype]);
                      return;
                    }
                 });
             });
         });
     </script>
</head>
<body>
      <div style="height: 50px;background-color: yellow" id="my"></div>
      <button>打开</button>
      <script type="text/javascript">
         document.write(new Date());
      </script>
      <a href="lianxi.php">点我</a>
</body>
</html>