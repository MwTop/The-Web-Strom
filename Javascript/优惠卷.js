<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
	<title>平台优惠劵</title>
	<style>
		@charset "utf-8";
		/* reset css start */
		html {margin: 0; height: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;font-size: 62.5%; }

		body { width: 100%; max-width: 640px;min-width:320px; height: 100%; margin: 0 auto; padding: 0; font-family: "Microsoft Yahei"; font-size: 1.2rem; color: #a1a1a1; 
			background: #f5f5f5;position: relative; overflow-x: hidden; -webkit-overflow-scrolling: touch; }

		a { text-decoration: none; color: #a1a1a1; background: transparent; 
			-webkit-tap-highlight-color: transparent; }
		a:active { color: #8c88ff; border: none; outline: none; }

		article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary { display: block; }
		audio, canvas, progress, video { display: inline-block; vertical-align: baseline; }
		audio:not([controls]) { display: none; height: 0; }
		[hidden], template { display: none; }

		input {border: 1px solid #999; line-height: normal; vertical-align: middle; outline: 0; border-radius: 0; background: #FFFFFF; -webkit-appearance: none; }
		input[type="radio"], input[type="checkbox"] { padding: 0;  -webkit-tap-highlight-color:rgba(255,255,255,0);}
		input[type="number"] { -moz-appearance: textfield; }
		input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button { margin: 0; height: auto; -webkit-appearance: none !important; }
		input[type="search"] { -webkit-appearance: textfield; }
		input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration { -webkit-appearance: none; }

		input::-moz-placeholder, textarea::-moz-placeholder {font-size: 1.4rem; color: #c1c1c1; }
		input:-ms-input-placeholder, textarea:-ms-input-placeholder {font-size: 1.4rem;  color: #c1c1c1; }
		input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {font-size: 1.4rem;  color: #c1c1c1; }

		button, input, optgroup, select, textarea { margin: 0; font: inherit; color: inherit;-webkit-tap-highlight-color:rgba(255,255,255,0);}
		button {border: none; overflow: visible; }
		button, select { text-transform: none; }
		button, html input[type="button"], input[type="reset"], input[type="submit"] { -webkit-appearance: none; cursor: pointer; }
		button[disabled], html input[disabled] { cursor: default; }
		button::-moz-focus-inner, input::-moz-focus-inner { border: 0; padding: 0; }
		textarea { resize: vertical; overflow: auto;}
		textarea:focus { outline: none; } 

		h1, h2, h3, h4, h5, h6, p, figure, form, blockquote,ul, ol, li, dl, dd, td, th { margin: 0; padding: 0; }
		h1, h2, h3, h4, h5, h6{ font: inherit;}
		ul, ol { list-style: none; }
		em,i{font-style:normal;}
		table { border-collapse: collapse; border-spacing: 0; }

		label{ -webkit-tap-highlight-color:rgba(255,255,255,0);}

		img { max-width: 100%;height: auto; border: 0; vertical-align: middle; }

		*{ -webkit-box-sizing: border-box; box-sizing: border-box;}
		.coupon-wrapper{width:100%; height:auto; padding:5%;}
		.coupon-wrapper .coupon-item{width: 100%;}
		.coupon-wrapper h3{ height: 3rem; line-height: 1.8rem;font-size: 1.4rem; color:#454545; padding: 2% 0;}
		.coupon-item .nick{padding:.66% 0; color: #fff;}
		.coupon-item .coupon-money {width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; font-size: 1.2rem; align-items: center;}
		.coupon-item .coupon-money em{font-size: 3.8rem;}
		.coupon-item .coupon-money .lay:last-child{flex: 1; padding:0 3%;line-height: 1.66rem;}

		.style-one, .style-two, .style-three, .style-four, .style-five, .style-six, .style-seven{width: 100%; height:8rem; position: relative;margin: 5% 0;
		 display: -webkit-box; display: -webkit-flex; display: flex; align-items: center; justify-content: center;
		 background-color: #fff; border:1px solid #E5004F;}
		.style-one:after,.style-three:after{content:""; width: 1.2rem; position: absolute; top: 0; bottom: 0; right: 23.9%; display: block; z-index: 9;
			 background-color: #fff; background-position: 100% 35%; background-size: 2rem .66rem;
			 background-image: linear-gradient(-45deg, #e5004f 25%, transparent 25%, transparent), linear-gradient(-135deg, #e5004f 25%, transparent 25%, transparent), 
			 linear-gradient(-45deg, transparent 75%, #e5004f 75%), linear-gradient(-135deg, transparent 75%, #e5004f 75%);}
		.style-one .info-box, .style-two .info-box, .style-three .info-box, .style-four .info-box, .style-five .info-box , .style-six .info-box, .style-seven .info-box{
			-webkit-box: 1; -webkit-flex: 1; flex: 1; padding: 0 3% 0 10%; position: relative;}

		.style-one .info-box:before, .style-one .info-box:after,
		.style-one .get-btn:before,  .style-one .get-btn:after,
		.style-two .info-box:before, .style-two .info-box:after,
		.style-two .get-btn:before,  .style-two .get-btn:after{
			content:""; width: 1.4rem; height: 1.8rem; position: absolute; z-index: 9;
			border-right: 1px solid #E5004F;  -webkit-border-radius: 50%; border-radius: 50%; background-color: #f5f5f5;
		}
		.style-one .info-box:before, .style-two .info-box:before{ top:-1.5rem; left:-.5rem; -webkit-transform: rotate(36deg); transform: rotate(36deg);}
		.style-one .info-box:after, .style-two .info-box:after{ bottom:-1.5rem; left:-.5rem; -webkit-transform: rotate(-36deg); transform: rotate(-36deg);}
		.style-one .get-btn:before, .style-two .get-btn:before{ top:-.5rem; right:-.35rem; -webkit-transform: rotate(136deg); transform: rotate(136deg);}
		.style-one .get-btn:after, .style-two .get-btn:after{bottom:-.5rem; right:-.35rem; -webkit-transform: rotate(-136deg); transform: rotate(-136deg);}

		.style-one .get-btn, .style-two .get-btn, .style-three .get-btn, .style-four .get-btn, .style-six .get-btn, .style-seven .get-btn{
			width: 24%; height: 8rem; text-align: center; color: #fff; font-size: 1.6rem; background-color: #E5004F; position: relative;}
		.style-one .get-btn span{width: 1.6rem; padding: .66rem 2rem .66rem 0; display: inherit; margin:0 auto; word-break: break-all;}

		.style-one .nick, .style-four .nick{color: #c1c1c1;}
		.style-one .of, .style-one .lay .tit,
		.style-four .of, .style-four .lay .tit,
		.style-six .nick{color: #E5004F;}
		.style-one .lay .demand, .style-four .lay .demand{color:#454545;}

		.style-two{ background-color: #ED008C; border:1px solid #ED008C; color: #fff;}
		.style-two:before, .style-two:after{
			content:""; height: .5rem; position: absolute; display: block; z-index: 9;
			background-image: linear-gradient(135deg,transparent, transparent 45%, #ED008C, #ED008C 55%, transparent 100%),
							  linear-gradient(45deg, transparent, #ED008C 45%, #ED008C, transparent 55%, transparent 100%);
			background-size: 1rem 1rem;	background-repeat: repeat-x, repeat-x;
		}
		.style-two:before{top: -.36rem; left: .8rem; right: 1rem;}
		.style-two:after{bottom: -.36rem; -webkit-transform: rotate(180deg);transform: rotate(180deg); left: 1.1rem; right: 1.2rem;}
		.style-two .get-btn{background-color: #ed008c;}
		.style-two .get-btn span, .style-three .get-btn span, .style-six .get-btn span, .style-seven .get-btn span{
			width:4rem; height: 8rem; display: inline-block; padding:1.66rem 0; font-size: 2rem; word-break: break-all;
		}
		.style-two .of{color:#FFF100;}


		.style-three{background-color: #378AE8; border:none; color: #fff;}
		.style-three:before{content:""; position: absolute; left:-.66rem; width: 2.4rem; height:2.8rem; top: 50%; -webkit-transform: translate(-30%, -50%);transform: translate(-30%, -50%);
		-webkit-box-shadow: 3px 0 0 #aeadad; box-shadow: 3px 0 0 #aeadad;-webkit-border-radius: 80%; border-radius: 80%; background-color: #f5f5f5; }
		.style-three:after{right:27%; background-image: linear-gradient(-45deg, #ffffff 25%, #378ae8 25%, #378ae8)}

		.style-three .get-btn, .style-six .get-btn, .style-seven .get-btn{width: 28%; background-color: #fff;}
		.style-three .get-btn span, .style-six .get-btn span{ padding:.85rem 0; color: #378AE8;}
		.style-three .get-btn span:after, .style-six .get-btn span:after{content:"V"; font-size: 1.6rem;}

		.style-four{background-color: #fff; -webkit-border-radius:1rem; border-radius: 1rem;border: 1px dashed #e5004f;}
		.style-four .get-btn{width: 30%; height: 7rem;background-color: #fff; text-align: center;}
		.style-four .get-btn span{ display: block; padding:2.66rem 0; font-size: 1.5rem; word-break: break-all; color: #454545;}

		.style-five{background-color: #E5004F; -webkit-border-radius:1rem; border-radius: 1rem;border: none; color: #fff;}
		.style-five .get-btn{width: 28%; height: 7rem; position: relative; -webkit-perspective:180; perspective:180;}
		.style-five .get-btn:after{content:""; position: absolute; top:0; left:0; right:0; bottom:0; background-color: #F8B551;
			transform: rotateY(-28deg); z-index:1; -webkit-border-radius:.66rem; border-radius:.66rem; -webkit-box-shadow: -3px 0 8px #793030; box-shadow: -3px 0 8px #793030;}
		.style-five .get-btn span{width:3rem; display: inline-block; font-size: 1.8rem; color: #454545;
		 position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-30%, -50%); transform: translate(-30%, -50%); z-index:3;}

		.style-six{background-color: #F7DBCD; color:#E5004F; border:none;}
		.style-six:after, .style-six:before{ content: ""; height: .5rem; position: absolute;left: 0; right: 0; display: block; z-index: 9;
			background-image: linear-gradient(135deg,transparent, transparent 45%, #f5f5f5, #f5f5f5 68%, transparent 100%),
		 	linear-gradient(45deg, transparent, #f5f5f5 45%, #f5f5f5, transparent 55%, transparent 100%);
		    background-size: 1rem 1rem;  background-repeat: repeat-x, repeat-x;}
		.style-six:after{top: -.12rem; -webkit-transform: rotate(180deg); transform: rotate(180deg);}
		.style-six:before{ bottom: -.12rem;}
		.style-six .get-btn span{ color: #E5004F;}

		.style-seven{background-color: #F3B502; color: #fff; border:none;}
		.style-seven:before, .style-seven:after{content:""; position: absolute;  width: 2rem; height: 6rem;
		top: 50%; -webkit-transform: translate(0,-50%);transform: translate(0, -50%);
			 -webkit-border-radius: 50%; border-radius: 50%; background-color: #f5f5f5; }
		.style-seven:before{ left: -1rem;-webkit-box-shadow: 2px 0 0 #c6c6c6; box-shadow: 2px 0 0 #c6c6c6;}
		.style-seven:after{ right: -1rem;-webkit-box-shadow: -2px 0 0 #c6c6c6; box-shadow: -2px 0 0 #c6c6c6;}

		.style-seven .get-btn{ background-color: #000000; padding-right: .88rem;}

		/* 已领取 */
		.style-one.have{border:1px solid #ddd; color: #C1C1C1; color: #C1C1C1;}
		.style-one.have .info-box:before, .style-one.have .info-box:after,
		.style-two.have .info-box:before, .style-two.have .info-box:after{border-right:1px solid #c1c1c1;}
		.style-one.have .of, .style-one.have .tit, .style-one.have .demand,
		.style-four.have .of, .style-four.have .tit, .style-four.have .demand{color: #c1c1c1;}
		.style-one.have .get-btn{background-color: #c1c1c1;}
		.style-one.have .get-btn span{color:#fff; padding: 1.36rem 2rem .66rem 0;}
		.style-one.have .get-btn:before, .style-one.have .get-btn:after,
		.style-two.have .get-btn:before, .style-two.have .get-btn:after{border-right: #c1c1c1;}
		.style-one.have:after{background-image: linear-gradient(-45deg, #c1c1c1 25%, transparent 25%, transparent), linear-gradient(-135deg, #c1c1c1 25%, transparent 25%, transparent), 
		 linear-gradient(-45deg, transparent 75%, #c1c1c1 75%), linear-gradient(-135deg, transparent 75%, #c1c1c1 75%); }

		.style-two.have, .style-three.have{background-color: #c1c1c1; border:none;}
		.style-two.have .of{color: #fff;}
		.style-two.have:before, .style-two.have:after{background-image: linear-gradient(135deg,transparent, transparent 45%, #c1c1c1, #c1c1c1 55%, transparent 100%),
		 linear-gradient(45deg, transparent, #c1c1c1 45%, #c1c1c1, transparent 55%, transparent 100%);}
		.style-two.have .get-btn{background-color: #c1c1c1;}
		.style-two.have .get-btn span, .style-three.have .get-btn span,
		.style-six.have .get-btn span, .style-seven.have .get-btn span{width: 1.6rem; padding: 1.36rem 0; font-size: 1.6rem;}

		.style-three.have:after{ background-image: linear-gradient(-45deg, #ffffff 25%, #c1c1c1 25%, #c1c1c1);}
		.style-three.have .get-btn span,
		.style-four.have .get-btn span,
		.style-six.have .get-btn span{color: #767676; font-size: 1.6rem;}
		.style-three.have .get-btn span:after,
		.style-six.have .get-btn span:after{content:"";}

		.style-four.have{border: 1px dashed #C1C1C1;}

		.style-five.have, .style-five.have .get-btn:after,
		.style-six.have, .style-seven.have{background-color: #c1c1c1;}
		.style-five.have .get-btn:after{ -webkit-box-shadow: -3px 0 8px #8c8c8c; box-shadow: -3px 0 8px #8c8c8c;}
		.style-five.have .get-btn span{width:5rem; font-size: 1.5rem; color: #fff;}

		.style-six.have .nick, .style-six.have .of, .style-six.have .tit, .style-six.have .demand{color: #fff;}
		.style-six.have span,
		.style-seven.have span{font-size: 1.6rem; color: rgba(189, 189, 189, 1);}

	</style>
</head>
<body>
	<div class="coupon-wrapper">
		<h3>京东优惠劵领取：</h3>
		<div class="coupon-item">
			<div class="style-one">
				<div class="info-box">
					<p class="nick">京东平台优惠劵</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>立即领取</span>
				</a>
			</div>
		</div>	
		<div class="coupon-item">
			<div class="style-one have">
				<div class="info-box">
					<p class="nick">京东平台优惠劵</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>已领取</span>
				</a>
			</div>
		</div>		
		<h3>唯品会优惠劵领取：</h3>
		<div class="coupon-item">
			<div class="style-two">
				<div class="info-box">
					<p class="nick">唯品会平台优惠劵</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>立即领取</span>
				</a>
			</div>
		</div>
		<div class="coupon-item">
			<div class="style-two have">
				<div class="info-box">
					<p class="nick">唯品会平台优惠劵</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>已领取</span>
				</a>
			</div>
		</div>
		<h3>1号店优惠劵领取：</h3>
		<div class="coupon-item">
			<div class="style-three">
				<div class="info-box">
					<p class="nick">1号店平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>点击领取</span>
				</a>
			</div>
		</div>
		<div class="coupon-item">
			<div class="style-three have">
				<div class="info-box">
					<p class="nick">1号店平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>已领取</span>
				</a>
			</div>
		</div>
		<h3>当当网优惠券领取：</h3>
		<div class="coupon-item">
			<div class="style-four">
				<div class="info-box">
					<p class="nick">当当网平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span class="coBlack">立即领取</span>
				</a>
			</div>
		</div>
		<div class="coupon-item">
			<div class="style-four have">
				<div class="info-box">
					<p class="nick">当当网平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>已领取</span>
				</a>
			</div>
		</div>
		<h3>飞牛网优惠劵领取：</h3>
		<div class="coupon-item">
			<div class="style-five">
				<div class="info-box">
					<p class="nick">飞牛网平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>立即领取</span>
				</a>
			</div>
		</div>
		<div class="coupon-item">
			<div class="style-five have">
				<div class="info-box">
					<p class="nick">飞牛网平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>已领取</span>
				</a>
			</div>
		</div>
		<h3>我买网优惠劵领取：</h3>
		<div class="coupon-item">
			<div class="style-six">
				<div class="info-box">
					<p class="nick">我买网平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>点击领取</span>
				</a>
			</div>
		</div>
		<div class="coupon-item">
			<div class="style-six have">
				<div class="info-box">
					<p class="nick">我买网平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>已领取</span>
				</a>
			</div>
		</div>
		<h3>苏宁优惠劵领取：</h3>
		<div class="coupon-item">
			<div class="style-seven">
				<div class="info-box">
					<p class="nick">苏宁平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>立即领取</span>
				</a>
			</div>
		</div>
		<div class="coupon-item">
			<div class="style-seven have">
				<div class="info-box">
					<p class="nick">苏宁平台优惠券</p>
					<div class="coupon-money">
						<div class="lay of">￥<em>10</em></div>
						<div class="lay">
							<p class="tit">优惠劵</p>
							<p class="demand">满100元可用</p>
						</div>
					</div>
				</div>
				<a href="javascript:;" class="get-btn">
					<span>已领取</span>
				</a>
			</div>
		</div>
	</div>
</body>
</html>
