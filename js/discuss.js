/**
 * Created by lenovo on 2016/3/7.
 */
    window.onload=function(){
                var content = document.getElementById('lunbo');
            	var buttons = document.getElementById('lunbo-button').getElementsByTagName('span');
            	var list = document.getElementById('lunbo-list');
            	var prev = document.getElementById('prev');
                var next = document.getElementById('next');
                var Blen=document.getElementById('lunbo-button');
               
                 Blen.style.width = (buttons.length*20) +'px';
                
                
               var len = document.getElementById('lunbo-list').getElementsByTagName('img').length;
                var index = 1;
                
                var animated = false;
                var interval = 3000;     //定义的定时器所执行的时间
                var timer;
                  list.style.width = (200*len) +'px'; 
                 function animate (offset) {
                if (offset == 0) {  // 对offset进行安全判断
                    return;
                }
                animated = true;
                var time = 500; //位移总时间
                var inteval = 20;   //位移间隔时间
                var speed = offset/(time/inteval);  //每次的位移量
                var left = parseInt(list.style.left) + offset;  //定义left变量保存
                   // 自动走动时的显示
                var go = function (){

                    if (speed > 0 && (parseInt(list.style.left) < left) ||
                            (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';

                        if(left > -200){
                            list.style.left = (-200 * (len-2)) + 'px';
                        }

                        if(left < (-200 * (len-2) ) ) {
                            list.style.left = '-800px';
                        }
                        animated = false;
                    }
                }
                go();
              
            }
            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }   
                }
                buttons[index - 1].className = 'on'; 
            }
            
            function play() {
                timer = setInterval(function () {
                  next.onclick();
                }, interval);
            }

            function stop() {
                clearTimeout(timer);
            }
            
            //下一个按钮指示
            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == buttons.length) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-200);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {  
                    return;
                }
                if (index == 1) {
                    index = buttons.length;
                }
                else {
                    index -= 1;
                }
                animate(200);
                showButton();
            }
            for (var i = 0; i < buttons.length; i++) 
            {
                buttons[i].onclick = function ()
                 {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                     var myIndex = parseInt(this.getAttribute('index')); 
                    var offset = -200 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                 }
            }

            content.onmouseover = stop;
            content.onmouseout = play;

            play(); 

            //选项卡：
            var oUi=document.getElementById('know');//获取ul
            var oli=oUi.getElementsByTagName('li');//获取ul下的li
            var odiv=document.getElementById('div1') ;//获取div
            var div2=odiv.getElementsByTagName('div') ;//获取div下的div
            var obt=odiv.getElementsByTagName('input');

            for(i=0;i<=oli.length;i++)
            {
                 oli[i].index = i; 
            //btn[i]是指定button的第i个按钮;为该按钮添加一个index属性，并将index的值设置为i
                 oli[i].onclick=function()//按钮的第i个点击事件
                {
                for(i=0;i<oli.length;i++)//循环去掉样式，把div隐藏
                 { 
                   oli[i].className=''; //清空按钮的样式
                   div2[i].style.display='none';//隐藏div
                  }
                    div2[this.index].style.display='block';//this.index是当前div 
                };

                
            };
            
}