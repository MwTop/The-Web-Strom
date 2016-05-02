window.onload = function()
            {
            	var content = document.getElementById('content');
            	var buttons = document.getElementById('buttons').getElementsByTagName('span');
            	var list = document.getElementById('list');
            	var prev = document.getElementById('prev');
                var next = document.getElementById('next');
                var Blen=document.getElementById('buttons');
               
                 Blen.style.width = (buttons.length*20) +'px';
                
                
               var len = document.getElementById('list').getElementsByTagName('img').length;
                var index = 1;
                
                var animated = false;
                var interval = 3000;     //定义的定时器所执行的时间
                var timer;
                  list.style.width = (800*len) +'px'; 
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

                        if(left > -800){
                            list.style.left = (-800 * (len-2)) + 'px';
                        }

                        if(left < (-800 * (len-2) ) ) {
                            list.style.left = '-800px';
                        }
                        animated = false;
                    }
                }
                go();
              
            }

            // 图片的转动带动小圆点的转动函数实现
            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }   //找到之前的on样式置空
                }
                buttons[index - 1].className = 'on';  //将此时索引值的class属性点亮
                 //index - 1只是做对应的button处理
            }
            
            //鼠标不操作时，自动轮播显示
            function play() {
                // timer = setTimeout(function () {
                //     next.onclick();
                //     play();
                // }, interval);

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
                animate(-800);
                showButton();
            }
            
            //前一个按钮指示
            prev.onclick = function () {
                if (animated) {   //  animated 为true时执行
                    return;
                }
                if (index == 1) {
                    index = buttons.length;
                }
                else {
                    index -= 1;
                }
                animate(800);
                showButton();
            }
            
            // 圆框按钮做点击事件切换图片处理
            // 每一个button都有一个点击事件

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
                     var myIndex = parseInt(this.getAttribute('index'));  // this.getAttribute方法获自定义点击时所指index的值
                    var offset = -800 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();    //语句不可交换
                 }
            }

            content.onmouseover = stop;
            content.onmouseout = play;

            play();   //自动播放

        }
