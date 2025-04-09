import{_ as a,c as t,o as r,a2 as p}from"./chunks/framework.mEAph8pv.js";const b=JSON.parse('{"title":"科技爱好者周刊（第 165 期）：全端 App 的时代","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊（第 165 期）：全端 App 的时代","slug":"科技爱好者周刊-第-165-期-全端-app-的时代","link":"#科技爱好者周刊-第-165-期-全端-app-的时代","children":[]}],"relativePath":"pages/weekly/issue-165.md","filePath":"pages/weekly/issue-165.md","lastUpdated":1686738890000}'),s={name:"pages/weekly/issue-165.md"};function o(l,e,g,n,i,c){return r(),t("div",null,e[0]||(e[0]=[p('<h1 id="科技爱好者周刊-第-165-期-全端-app-的时代" tabindex="-1">科技爱好者周刊（第 165 期）：全端 App 的时代 <a class="header-anchor" href="#科技爱好者周刊-第-165-期-全端-app-的时代" aria-label="Permalink to &quot;科技爱好者周刊（第 165 期）：全端 App 的时代&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。</p><p>本杂志开源（GitHub: <a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">ruanyf/weekly</a>），欢迎提交 issue，投稿或推荐科技内容。</p><p>周刊讨论区的帖子<a href="https://github.com/ruanyf/weekly/issues/1826" target="_blank" rel="noreferrer">《谁在招人？》</a>，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。</p><h2 id="封面图" tabindex="-1">封面图 <a class="header-anchor" href="#封面图" aria-label="Permalink to &quot;封面图&quot;">​</a></h2><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062410.jpg" alt="" loading="lazy"></p><p>重庆涪陵的一个水上乐园，制作了巨型棒冰，分发给游客。（<a href="https://www.sohu.com/a/473039755_120388781" target="_blank" rel="noreferrer">via</a>）</p><h2 id="本周话题-全端-app-的时代" tabindex="-1">本周话题：全端 App 的时代 <a class="header-anchor" href="#本周话题-全端-app-的时代" aria-label="Permalink to &quot;本周话题：全端 App 的时代&quot;">​</a></h2><p>上周，微软发布了 Windows 11。最出人意料的是，它可以<a href="https://www.theverge.com/2021/6/24/22548428/microsoft-windows-11-android-apps-support-amazon-store" target="_blank" rel="noreferrer">运行安卓 App</a>！</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062703.jpg" alt="" loading="lazy"></p><p>仔细想想也不意外，苹果去年推出 M1 芯片，所有的 iPhone App 现在都能在 Mac 电脑上运行。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062704.jpg" alt="" loading="lazy"></p><p>微软一定是看在眼里，急在心里，绝不能让 Windows 输给 Mac。所以，这次匆匆忙忙就支持了安卓。</p><p>他甚至来不及做自家的安卓应用商店，用户必须先安装亚马逊应用商店（下图），才能用上这个功能。微软就是急到这种程度，宁愿白白用自己的最新系统为别人引流。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062705.jpg" alt="" loading="lazy"></p><p>我问大家一个问题：手机 App 可以运行在桌面电脑，对于软件开发有什么影响呢？</p><p>显然，直接影响就是一条， <strong>以后还有必要开发桌面版软件吗？</strong> 除了少数桌面专用软件，其他软件只要让手机 App 适配一下电脑，就不用发布专门的 Windows 版或 Mac 版了。</p><p>举例来说，Windows 运行微信，现在必须安装单独的 Windows 版，以后直接安装手机版可能就行了。对于用户来说，体验完全一致，不会有功能缺失；对于腾讯来说，可以少养一个团队，也不用操心跨平台移植的复杂性了。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062706.jpg" alt="" loading="lazy"></p><p>以前，所谓的跨平台软件，指的是一套代码可以到处运行，但是必须每个平台单独编译一次，Java、 Go、Electron 都是这样。现在倒好了，连编译都省掉了，同一个程序不用修改，直接跑在手机、平板、桌面电脑上面，简直是软件开发者的终极梦想和福音。</p><p>所以，Windows 的这个新功能，使得手机 App 的市场一下子扩大到了桌面电脑，这尤其对于小团队是重大利好。</p><p>我的结论就是， <strong>App 开发将从多端并存，进入全端时代。</strong> 手机 App 会吃掉其他客户端，变得越来越重要；桌面 App 将会衰落，开发需求进一步变小。</p><p>不过，这是一个长期的过程，还有很长的路要走。根据报道，微软这一次采用了英特尔公司的桥接技术，让 x86 架构的 CPU 可以解释 ARM 指令，听上去很像是即时编译。但是那样的话，要是 App 用到了谷歌服务框架，应该怎么处理呢？另一方面，谷歌的 ChromeOS 系统，早就实现了在 x86 CPU 上运行安卓 App（通过一个虚拟层），性能挺差的，体验也不好（比如窗口无法放大，很多操作不支持鼠标）。</p><p>但是不管怎样，全端 App 肯定是未来的方向，上面这些问题，相信最终都可以解决，尤其对于苹果的设备，硬件的兼容问题是不存在的。</p><p>我建议，程序员朋友可以多关注这个方向，手机 App 如何适配桌面大屏幕，这可能是下一个热点领域。</p><h2 id="小程序原理实践课" tabindex="-1">小程序原理实践课 <a class="header-anchor" href="#小程序原理实践课" aria-label="Permalink to &quot;小程序原理实践课&quot;">​</a></h2><p>小程序，可以说是中国软件业的一个奇迹。</p><p>2017年，微信发明了这个产品，立刻受到用户的认可。短短几年中，遍地开花，各大互联网公司（支付宝、百度、头条……）纷纷跟进支持。事实上，小程序已经成了一个独立的开发方向，跟 Web 和手机 App 一样重要。</p><p>相应地，小程序开发者一直炙手可热，市场招聘需求巨大，越来越多的前端开发者转向小程序领域。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021070105.jpg" alt="" loading="lazy"></p><p><strong>本质上，小程序是 Web 技术在手机 App 环境的移植。</strong> 它完全采用 Web 技术栈，只是将网页引擎移植到了 App 容器里面。所以，学好 Web 技术对于小程序开发者特别重要。</p><p>本周的课程资料就是小程序的底层架构教程 <strong>《浏览器中搭建小程序运行环境》</strong> ，讲解网页引擎作为小程序的运行环境，如何发挥作用。课程由腾讯课堂“双认证”机构——京程一灯提供。</p><p>它跟其他小程序课程有所不同，另辟蹊径，通过浏览器搭建小程序的运行环境。一共有三节课，深入讲解小程序的网页本质和浏览器原理，帮助大家写出高质量、高性能的页面，在手机上取得更加平滑的渲染效果。内容特别适合已经有 Web 基础、刚进入小程序领域的开发者。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021070107.jpg" alt="" loading="lazy"></p><p>课程原价98元，现在跟周刊合作，读者只需象征性支付 <strong>0.02元</strong> 报名费。微信扫描下面二维码，进群后即可获取课程， <strong>诚信教学，保证无套路。</strong></p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021070106.jpg" alt="" loading="lazy"></p><p>报名成功的读者，还可以获赠价值98元的专题课《前端面试防虐指南-手写代码篇》。</p><h2 id="科技动态" tabindex="-1">科技动态 <a class="header-anchor" href="#科技动态" aria-label="Permalink to &quot;科技动态&quot;">​</a></h2><p>1、<a href="https://interestingengineering.com/self-driving-truck-completes-950-mile-trip-10-hours-faster-than-human-driver" target="_blank" rel="noreferrer">自动驾驶卡车实验</a></p><p>一家美国自动驾驶公司，成功完成了重型卡车的自动驾驶实验，14个小时开完了1500公里，人类驾驶员一般需要24小时才能完成。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021060505.jpg" alt="" loading="lazy"></p><p>重型卡车的行驶速度比普通汽车慢，需要长时间连续驾驶，而且美国有法律，卡车司机最多连续驾驶 11 小时，就必须停车休息。因此，自动驾驶对于重型卡车有非常大的实际意义，很可能先在这个领域落地。</p><p>2、<a href="https://countthings.com/case-studies/0001" target="_blank" rel="noreferrer">如何数珍珠</a></p><p>有一家日本珍珠贸易公司，多年以来，都是人工清点珍珠的数量。他们将珍珠倒入一个小盘子，里面有100个坑，如果都填满了就是100颗珍珠。这样计数很慢，每到收获季节，就需要两个员工，数上整整两天。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021052417.jpg" alt="" loading="lazy"></p><p>现在，他们使用一个叫做 “CountThings from Photos” 的安卓应用，只要对着盘子里面的珍珠，拍一张照片，手机就会自动计算出有多少颗珍珠，大大节省了人工，只要30分钟就够了。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021052418.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021052419.jpg" alt="" loading="lazy"></p><p>3、<a href="https://www.bbc.com/news/uk-england-merseyside-57226165" target="_blank" rel="noreferrer">指纹照片</a></p><p>BBC 报道，有一个英国毒品贩子，多年来逍遥法外，警方一直抓不到他。后来，警方发现有一个社交媒体账户，怀疑背后就是他，但是没有证据。</p><p>有一天，这个账户发了一张手拿奶酪的照片（下图），警方根据照片上的指纹和掌纹，确定就是此人，从而将他抓获，判刑13年6个月。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021052416.jpg" alt="" loading="lazy"></p><p>4、</p><p><a href="https://www.cbc.ca/radio/quirks/may-15-california-condor-genetics-a-strange-star-goes-supernova-don-t-think-just-kick-and-more-1.6025290/for-soccer-players-the-less-brain-they-use-the-better-for-penalty-kicks-1.6025297" target="_blank" rel="noreferrer">一个荷兰研究生</a>想了解，罚点球时，足球运动员的大脑活动。他就让球员带上脑电波感应头盔，进行罚点球。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021052402.jpg" alt="" loading="lazy"></p><p>结果发现，越不假思索的人，越容易罚中点球；脑电波活动越剧烈的人，罚中可能性越低。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021052403.jpg" alt="" loading="lazy"></p><p>5、</p><p><a href="https://petapixel.com/2021/06/02/nasas-mars-curiosity-rover-captures-rare-photos-of-shimmering-clouds/" target="_blank" rel="noreferrer">火星的云</a>是什么样子？</p><p>美国好奇号火星车传回了照片，人类第一次看见了另一个星球上的云。由于火星大气层很薄，所以火星没有很厚的云，都是一些很轻很薄的云絮。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021060316.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021060317.jpg" alt="" loading="lazy"></p><p>6、</p><p><a href="https://spectrum.ieee.org/automaton/robotics/robotics-hardware/unitrees-go1-robot-dog-looks-pretty-great-costs-just-usd-2700" target="_blank" rel="noreferrer">国内的创业公司宇树科技</a>，推出了面向消费市场的机器狗，售价1.6万~2.0万人民币，10月前发货。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062102.jpg" alt="" loading="lazy"></p><p>这个机器狗能够自主跟随和避障，有强大的保持平衡能力，跌倒可以自己爬起来。负载能力约5公斤，慢速前进时续航1小时。它的价格只有国外的波士顿动力公司同类产品的十分之一。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062103.jpg" alt="" loading="lazy"></p><p>7、</p><p>中国最大的海洋科考船<a href="https://china.huanqiu.com/article/43h6gCmStZe" target="_blank" rel="noreferrer">“中山大学号”</a>，6月26日在上海交付使用。该船排水量6880吨，续航力15000海里，专门供中山大学海洋学院进行教学和科考使用。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062606.jpg" alt="" loading="lazy"></p><p>8、<a href="https://www.aalto.fi/en/news/anyone-can-get-super-hearing" target="_blank" rel="noreferrer">超声波听力</a></p><p>人的耳朵只能听到 20 Hz 到 20 000 Hz 之间的声波。芬兰一所大学的科学家设计了一种装置，让人类可以听到 20 000 Hz 以上的超声波。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061002.jpg" alt="" loading="lazy"></p><p>科学家将麦克风阵列放在一个小球之中，用来捕捉超声波，以及确定方位。这个装置可以将超声波转成人耳可以听到的频率，再在耳机上播放，并保证方位相同。</p><p>它使得人类可以具有蝙蝠般的超声波感应能力，某些情况下，可以快速定位声源。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061003.jpg" alt="" loading="lazy"></p><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<a href="https://www.gcores.com/articles/137688" target="_blank" rel="noreferrer">QQ 宠物的诞生与没落</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021060305.jpg" alt="" loading="lazy"></p><p>QQ 宠物最早出现在2005年初的 QQ 贺岁版，同年6月正式上线。一年后同时在线用户数就突破了100万，成为了世界上最大的虚拟宠物品牌。</p><p>2、<a href="https://mp.weixin.qq.com/s/ICeg7ksh3KHbFSj00mbmvg" target="_blank" rel="noreferrer">韩国的真人约会游戏</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061702.jpg" alt="" loading="lazy"></p><p>本文介绍韩国公司新推出一款相亲 RPG 游戏，完全是真人实景拍摄，更像是一部可以玩的电视剧。比如，下图让玩家选择谁是约会对象。据玩过的人说，体验还不错，剧情有意思。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061703.jpg" alt="" loading="lazy"></p><p>3、<a href="https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/" target="_blank" rel="noreferrer">静态网站如何启用数据库查询</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021063012.jpg" alt="" loading="lazy"></p><p>作者演示静态网站（比如 GitHub Pages）如何通过 SQLite 数据库，实现查询功能，完全不需要后台脚本。</p><p>这种操作的实现原理有两个：一是 SQLite 数据库以页为单位存储数据，每页默认是 4KB，可以按页读取数据；二是前端可以用 sql.js 模拟一个内存文件系统，从而实现按页读取文件。（<a href="https://github.com/ruanyf/weekly/issues/1820" target="_blank" rel="noreferrer">@joyc</a> 投稿）</p><p>4、<a href="https://www.spiegel.de/international/world/the-telegram-billionaire-and-his-dark-empire-a-f27cb79f-86ae-48de-bdbd-8df604d07cc8" target="_blank" rel="noreferrer">Telegram 创始人和他的黑暗帝国</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061502.jpg" alt="" loading="lazy"></p><p>德国《明镜》杂志的长篇英语报道，介绍聊天软件 Telegram 现年36岁的创始人帕维尔·杜罗夫 (Pavel Durov) （上图），以及 Telegram 的故事。</p><p>5、<a href="https://allthings.how/how-to-install-windows-11-on-legacy-bios-without-secure-boot-or-tpm-2-0/" target="_blank" rel="noreferrer">老电脑如何安装 Windows 11</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062702.jpg" alt="" loading="lazy"></p><p>Windows 11 发布测试版本后，很多人发现老电脑安装不了，因为有主板 BIOS 限制。本文介绍一种规避的方法。</p><p>6、<a href="https://programming.guide/worlds-most-copied-so-snippet.html" target="_blank" rel="noreferrer">复制次数最多的 StackOverflow 代码片段</a>（英文）</p><p>有一项研究称，程序员问答网站 StackOverflow 上面，有史以来复制次数最多的是一段 Java 代码片段，用来以人类可读的格式打印字节数，比如将 123,456,789 字节转为 123.5 MB。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061704.jpg" alt="" loading="lazy"></p><p>这段代码的作者多年后写了这篇文章，分析自己原始代码里面的漏洞。</p><p>7、<a href="https://fragile-credences.github.io/scihub-proxy/" target="_blank" rel="noreferrer">浏览器的原生代理功能示例</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061004.jpg" alt="" loading="lazy"></p><p>本文教你如何使用浏览器原生提供的代理功能，绕过 sci-hub 域名的访问限制。</p><p>8、<a href="https://linuxhandbook.com/docker-compose-quick-start/" target="_blank" rel="noreferrer">Docker Compose 快速使用指南</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061203.jpg" alt="" loading="lazy"></p><p>一篇简短的 Docker Compose 入门教程，让你通过动手实践，理解 Docker Compose 怎么搭建多容器的应用程序。</p><p>9、<a href="https://arstechnica.com/gadgets/2021/06/tired-of-accepting-rejecting-cookies-adpc-wants-to-automate-the-process/" target="_blank" rel="noreferrer">新的 HTTP 规范可以消除“Cookie 横幅”</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061710.jpg" alt="" loading="lazy"></p><p>由于欧洲议会的规定，国外的网站都有一个讨厌的“Cookie 横幅”，询问用户是否接受 Cookie。</p><p>现在有一个新的 HTTP 提案（还未通过），用户只需设置一次，浏览器就可以用一个 HTTP 标头通知网站，不必放置 Cookie 横幅。</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://www.nvidia.com/en-gb/studio/canvas/" target="_blank" rel="noreferrer">NVIDIA Canvas</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021062601.jpg" alt="" loading="lazy"></p><p>Nvidia 公司推出的一个人工智能照片编辑软件，可以免费下载。用户只要选择要添加的对象（比如云彩），在对应的位置上涂抹几笔，就能够自动生成照片。</p><p>2、<a href="https://www.nuoshell.com/" target="_blank" rel="noreferrer">nuoshell</a></p><p>一款 Mac 的桌面 SSH 客户端，集多功能于一身，简单、免费。（<a href="https://github.com/ruanyf/weekly/issues/1814" target="_blank" rel="noreferrer">@anlityli</a> 投稿）</p><p>3、<a href="https://github.com/gauseen/gum" target="_blank" rel="noreferrer">gum</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021063011.jpg" alt="" loading="lazy"></p><p>一个命令行的 Git 用户管理器，适合需要不同身份，向不同仓库提交代码的情况。（<a href="https://github.com/ruanyf/weekly/issues/1816" target="_blank" rel="noreferrer">@gauseen</a> 投稿）</p><p>4、<a href="https://github.com/dudor/BookmarkHub/blob/main/README_cn.md" target="_blank" rel="noreferrer">BookmarkHub</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021063010.jpg" alt="" loading="lazy"></p><p>一个浏览器插件，可以跨浏览器进行书签同步，数据存储在 GitHub Gist。（<a href="https://github.com/ruanyf/weekly/issues/1815" target="_blank" rel="noreferrer">@weavers1f</a> 投稿）</p><p>5、<a href="https://github.com/EssayKillerBrain/EssayKiller_V2" target="_blank" rel="noreferrer">EssayKiller</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021063009.jpg" alt="" loading="lazy"></p><p>一个 AI 框架，可以自动根据给出的题目（上图），生成中文的命题作文，达到高中生作文的水平。（<a href="https://github.com/ruanyf/weekly/issues/1818" target="_blank" rel="noreferrer">@dllen</a> 投稿）</p><p>6、<a href="https://github.com/shlomnissan/t-rex-runner-c" target="_blank" rel="noreferrer">T-Rex Runner</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021060602.jpg" alt="" loading="lazy"></p><p>Chrome 浏览器内置的“恐龙跳跃”小游戏，被网友从 JavaScript 改成了 C 语言版本。</p><p>7、<a href="https://rustpad.io/" target="_blank" rel="noreferrer">Rustpad</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021060601.jpg" alt="" loading="lazy"></p><p>一个开源的 Web 文本编辑器，主要特点是支持多人同时编辑。</p><p>8、<a href="https://zws.im/" target="_blank" rel="noreferrer">零宽度短网址生成器</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061202.jpg" alt="" loading="lazy"></p><p>一个非常有创意的短网址生成器，看上去生成的短网址都一样，其实里面插入了不同数量的零宽度空格字符。</p><p>9、<a href="https://ojoy.zaps.dev/" target="_blank" rel="noreferrer">Ojoy</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061501.jpg" alt="" loading="lazy"></p><p>一个网页图像工具，可以放大图片的同时，还保持同样的清晰度。</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、<a href="https://www.trackawesomelist.com/" target="_blank" rel="noreferrer">Track Awesome List</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021063001.jpg" alt="" loading="lazy"></p><p>这个网站收集 GitHub 上的 awesome 项目，追踪每个清单的更新，可以及时查看每天新增哪些资源。（<a href="https://github.com/ruanyf/weekly/issues/1822" target="_blank" rel="noreferrer">@theowenyoung</a> 投稿）</p><p>2、<a href="https://docs.google.com/spreadsheets/d/1zfw8nPvJeewxcFUBpKUKmAVE8PjnJI7H0CKimdQXxr0/htmlview" target="_blank" rel="noreferrer">斯坦福大学计算机课程</a></p><p>这是一个谷歌文档的电子表格，收集了斯坦福大学计算机系本科阶段的所有课程，每门课都给出了课程主页。</p><p>3、<a href="https://computationstructures.org/index.html" target="_blank" rel="noreferrer">计算结构</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061401.jpg" alt="" loading="lazy"></p><p>麻省理工学院课程《计算结构》（Computation Structures）的教学材料，介绍计算机架构的基本知识，包括讲义、视频、笔记等。</p><p>4、<a href="https://en.wikipedia.org/wiki/List_of_commercial_video_games_with_available_source_code" target="_blank" rel="noreferrer">具有源码的商业视频游戏</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202106/bg2021061403.jpg" alt="" loading="lazy"></p><p>维基百科的这个页面，列出了所有可以拿到源码的商业视频游戏，包括开源的游戏和源码泄露的游戏。</p><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>1、<a href="https://www.smithsonianmag.com/smart-news/medieval-italian-village-briefly-surfaces-after-70-years-underwater-180977838/" target="_blank" rel="noreferrer">淹没的意大利村庄</a></p><p>1950年，意大利政府为了在山区建设一个人工湖，淹没了一个叫做库伦（Curon）的小村庄。这个村庄有一个14世纪的钟楼，因为太高，没有被全部淹没，形成了“水中高塔”的奇景。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021053007.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021053008.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021053009.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021053010.jpg" alt="" loading="lazy"></p><p>2、<a href="https://historydaily.org/charles-ebbets-lunchtime-atop-a-skyscraper" target="_blank" rel="noreferrer">摩天大楼顶上的午餐</a></p><p>《摩天大楼顶上的午餐》是一张著名的黑白照片，拍摄于1932年纽约的一个摩天大楼工地。11个工人坐在摩天大楼顶上的大梁上吃午饭，大梁距下方街道256米，而他们没有任何安全带等保护设施。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021053001.jpg" alt="" loading="lazy"></p><p>拍摄者看上去也很惊险。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021053002.jpg" alt="" loading="lazy"></p><p>不过实际上，大梁底下有一个平台，并不是看上去那么危险。而且，照片也是摆拍的。照片发表以后，很多人也来这个地方模仿拍摄。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021053003.jpg" alt="" loading="lazy"></p><p>由于这张照片太有名，纽约市后来甚至将它做成了雕像。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202105/bg2021053004.jpg" alt="" loading="lazy"></p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<a href="https://jvns.ca/blog/2021/05/24/blog-about-what-you-ve-struggled-with/" target="_blank" rel="noreferrer">我为什么公开发表博客文章？</a></p><p>八年来，我在个人网站上发布了100多篇文章。有人问我，为什么一直坚持在写？</p><p>我想了想，写作博客其实对我有很多好处，所以我才会有动力。</p><p>（1）它使得我把学到的东西记录下来了，便于回过头查找，重新温习！</p><p>（2）当我写作时，为了理清思路，我经常会有新的疑问，从而去做一些额外的研究，这意味着写作博客让我在某个主题上学到了更多！</p><p>（3）认真花时间把自己的写法写出来，并放到互联网上，这迫使你思考自己写的东西是否有意义，从而发现哪些题目是真的有价值。</p><p>（4）文章发布以后，会有很多读者反馈，通常可以帮助我改进写作，学习新知识。</p><p>（5）我的文章可以帮助其他人！我写文章通常是因为遇到一个很困难的问题，经过探索终于找到了答案，我就把这个答案写出来，其他人遇到类似情况就可以参考，这让我感觉很好。</p><p>2、<a href="https://cheapskatesguide.org/articles/transitory-internet.html" target="_blank" rel="noreferrer">互联网内容都是暂时的</a></p><p>最近，我的一位朋友删除了自己的博客。她在博客里面，记录了自己青少年时期和二十多岁时对很多事情的看法。她现在可能觉得，这些看法很幼稚，不想再保存下去，就删除了自己的博客。</p><p>我觉得很可惜。多年以后，她如果再想看看自己年轻时的想法，就再也没机会了。</p><p>你把内容发布到互联网，跟写在纸上是不一样的。纸上的内容可以一直保存下去，但是互联网不行。虽然某些网上的内容可以持续存在数十年，那只是因为某些人或组织愿意为托管成本付费，服务器、电力和带宽都要花钱。互联网上的内容可以存在多久，完全取决于托管它的当事人的价值观。</p><p>与纸上的内容相比，互联网内容的存在期限都非常短。对于我们大多数人而言，你张贴到互联网的内容，不久以后就会永远消失。</p><p>虽然很多网上的内容毫无价值，但是有一些写得很好，发人深省，消失了十分可惜。这令人沮丧，那些消失的内容就像一个搬走的老朋友，等到你再想起他时，再也找不到他留下的任何踪迹了。</p><h2 id="言论" tabindex="-1">言论 <a class="header-anchor" href="#言论" aria-label="Permalink to &quot;言论&quot;">​</a></h2><p>1、</p><p>Python 是我最喜欢的语言，但它替代不了 Bash。一行 Bash 代码就能完成的任务，Python 要写许多行，比如<code>mv</code>命令，Python 可能需要120行才能实现。</p><p>Bash 把命令行环境的复杂性都抽象掉了，如果改用 Python 实现，就不得不自己处理这些复杂性。</p><p>-- <a href="https://news.ycombinator.com/item?id=27075324" target="_blank" rel="noreferrer">Hacker News 读者</a></p><p>2、</p><p>最新的趋势是，软件公司希望用户体验足够好，不需要用户文档。采用的方法是，不再投入专门的人员写用户手册，改为雇佣用户体验设计师。</p><p>-- <a href="https://dev.jimgrey.net/2015/06/16/software-technical-writing-dying/" target="_blank" rel="noreferrer">《软件技术写作是一个垂死的职业》</a></p><p>3、</p><p>可能永远不会有 Python 4.0，我们被 Python 2 升级到 Python 3 搞怕了。</p><p>-- <a href="https://www.techrepublic.com/article/programming-languages-why-python-4-0-will-probably-never-arrive-according-to-its-creator/" target="_blank" rel="noreferrer">Guido van Rossum</a>，Python 语言创始人</p><p>4、</p><p>2012年，牛津大学起诉印度德里大学的一个复印中心，复印盗版教材出售给学生。</p><p>德里高等法院裁定，牛津大学败诉，学生使用盗版教材不违法。理由是原版教材的定价超出了印度学生的承受能力，学生永远不会成为原告的客户。</p><p>-- <a href="https://www.reddit.com/r/scihub/comments/mk46x4/scihub_v_elsevier_wiley_acs_can_scihub_be_shut/" target="_blank" rel="noreferrer">《 Sci-Hub 会被印度法院关闭吗？》</a></p><p>5、</p><p>随着大多数产品成为联网产品，如果你想购买未联网的版本，不得不支付额外费用，因为厂家将不能获取你的个人数据，也不能向你推送广告了。</p><p>-- <a href="https://news.ycombinator.com/item?id=27628210" target="_blank" rel="noreferrer">Hacker News 读者</a></p><h2 id="历史上的本周" tabindex="-1">历史上的本周 <a class="header-anchor" href="#历史上的本周" aria-label="Permalink to &quot;历史上的本周&quot;">​</a></h2><p>2020年（第 114 期）：<a href="https://www.ruanyifeng.com/blog/2020/07/weekly-issue-114.html" target="_blank" rel="noreferrer">U 盘化生存和 Uber-job</a></p><p>2019年（第 62 期）：<a href="https://www.ruanyifeng.com/blog/2019/06/weekly-issue-62.html" target="_blank" rel="noreferrer">日本电影《编舟记》</a></p><p>2018年（第 11 期）：<a href="https://www.ruanyifeng.com/blog/2018/06/weekly-issue-11.html" target="_blank" rel="noreferrer">编程语言越发复杂</a></p><h2 id="订阅" tabindex="-1">订阅 <a class="header-anchor" href="#订阅" aria-label="Permalink to &quot;订阅&quot;">​</a></h2><p>这个周刊每周五发布，同步更新在<a href="http://www.ruanyifeng.com/blog" target="_blank" rel="noreferrer">阮一峰的网络日志</a>和<a href="http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97" target="_blank" rel="noreferrer">微信公众号</a>。</p><p>微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg" alt="" loading="lazy"></p><p>（完）</p>',205)]))}const m=a(s,[["render",o]]);export{b as __pageData,m as default};
