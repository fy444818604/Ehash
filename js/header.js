document.writeln(
	`<div class="header-cont" v-cloak>
			<div class="header-top">
				<div class="wrap">
					<div class="trumpet">
						<img src="img/index1.png">
						<div class="trumpet-msg">EHash四周年“礼”：老用户专享电费补贴券</div>
					</div>
				</div>
			</div>
			<div class="header-btm">
				<div class="wrap">
					<div class="flex-between top-line">
						<div class="flex logo-wrap">
							<img src="./img/logo.png">
							<ul class="menu">
								<li class="active"><a href="index.html">首页</a></li>
								<li><a href="package.html">价格</a></li>
								<li><a href="#">新闻</a></li>
								<li><a href="#">帮助中心</a></li>
								<li><a href="#">我的算力</a></li>
							</ul>
						</div>
						<div class="flex login-op">
							<a v-show="userName1 == ''" href="auth.html?type=1" class="login">登陆</a>
							<a v-show="userName1 == ''" href="auth.html?type=2" class="regist">注册</a>
							<a href="person.html" v-show="userName1 != ''" class="head-user-wrap">
								<div class="head-user">{{userName1}}</div>
								<div class="arrow-btm"></div>
							</a>
							<div class="login-out" v-show="userName1 != ''">退出登陆</div>
							<div class="lang-op">
								<div>CN</div>
								<div class="arrow-btm"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`
)

