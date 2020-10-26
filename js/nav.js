document.writeln(`<div class="person-nav">
					<div class="user-info">
						<img src="./img/index12.png" class="person-photo">
						<div class="user-name"></div>
					</div>
					<ul class="nav-list">
						<li v-for="item in nav" :class="item.active?'active':''">
							<a :href="item.link">
								<img v-if="item.active" class="nav-img" :src="item.icon+'-a.png'" >
								<img v-else class="nav-img" :src="item.icon+'.png'" >
								<div :class="item.active?'c582':''">{{item.name}}</div>
							</a>
						</li>
					</ul>
				</div>
`)