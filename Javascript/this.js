 var a=0; 
		var obj={
			a:'obj',
			b:function(){
				var a=1;
				console.log(this.a);  //obj
				setTimeout(function(){
					console.log(this.a);   //0
				},1000)
			},
		}
 obj.b();
