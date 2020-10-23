document.writeln(`<div class="person-nav">
					<div class="user-info">
						<img src="./img/index12.png" class="person-photo">
						<div class="user-name">里的瑞</div>
					</div>
					<ul class="nav-list">
						<li v-for="item in nav" :class="item.active?'active':''">
							<a :href="item.link">
								<i class="iconfont" :class="item.icon"></i>
								<div>{{item.name}}</div>
							</a>
						</li>
					</ul>
				</div>
`)