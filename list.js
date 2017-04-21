  var a=2;
			var func=(function(){
			  var a=3;
			  return function(){
			    a++;
			    console.log(a);
			     return ;
			  }
			})();
             console.log(func());

			  var a=6;
			 setTimeout(function(){
			   console.log(a);
			   a=666;
			   console.log(a);
			 },1000);

			 setTimeout(function(){
			   console.log(a);
			    a=666;
			    console.log(a);
			 },1000);
			  console.log(a);
			 a=66;
