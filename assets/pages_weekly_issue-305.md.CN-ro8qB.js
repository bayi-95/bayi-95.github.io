import{_ as a,c as r,o as t,a2 as p}from"./chunks/framework.mEAph8pv.js";const c=JSON.parse('{"title":"科技爱好者周刊（第 305 期）：随机数，这是一个问题","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊（第 305 期）：随机数，这是一个问题","slug":"科技爱好者周刊-第-305-期-随机数-这是一个问题","link":"#科技爱好者周刊-第-305-期-随机数-这是一个问题","children":[]}],"relativePath":"pages/weekly/issue-305.md","filePath":"pages/weekly/issue-305.md","lastUpdated":1718986819000}'),l={name:"pages/weekly/issue-305.md"};function o(s,e,n,g,i,b){return t(),r("div",null,e[0]||(e[0]=[p('<h1 id="科技爱好者周刊-第-305-期-随机数-这是一个问题" tabindex="-1">科技爱好者周刊（第 305 期）：随机数，这是一个问题 <a class="header-anchor" href="#科技爱好者周刊-第-305-期-随机数-这是一个问题" aria-label="Permalink to &quot;科技爱好者周刊（第 305 期）：随机数，这是一个问题&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。</p><p>本杂志<a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">开源</a>，欢迎<a href="https://github.com/ruanyf/weekly/issues" target="_blank" rel="noreferrer">投稿</a>。另有<a href="https://github.com/ruanyf/weekly/issues/4550" target="_blank" rel="noreferrer">《谁在招人》</a>服务，发布程序员招聘信息。合作请<a href="mailto:yifeng.ruan@gmail.com" target="_blank" rel="noreferrer">邮件联系</a>（yifeng.ruan@gmail.com）。</p><h2 id="封面图" tabindex="-1">封面图 <a class="header-anchor" href="#封面图" aria-label="Permalink to &quot;封面图&quot;">​</a></h2><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061403.webp" alt="" loading="lazy"></p><p>重庆“悦来江湾”公交车站，由几块巨石组成，象征当地江边的鹅卵石。（<a href="http://www.cqyuelai.com/yuelai_content/2023-09/21/content_10592221.htm" target="_blank" rel="noreferrer">via</a>）</p><h2 id="随机数-这是一个问题" tabindex="-1">随机数，这是一个问题 <a class="header-anchor" href="#随机数-这是一个问题" aria-label="Permalink to &quot;随机数，这是一个问题&quot;">​</a></h2><p>今天谈谈，怎么生成真正的随机数。</p><p>这个问题超难，但有一些很有趣的内容。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061814.webp" alt="" loading="lazy"></p><p>首先，编程语言提供的随机数，是伪随机数。</p><p>V8 引擎的官网有<a href="https://v8.dev/blog/math-random" target="_blank" rel="noreferrer">一篇文章</a>（下图），特别提醒大家这一点。它内置的随机数不是真随机数，而是伪随机数。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061606.webp" alt="" loading="lazy"></p><p>所谓伪随机数，并非真的随机，而是算法得到的。只要初始的种子值相同，算法会给出一样的结果。</p><p>JavaScript 和许多其他语言，都有这个问题。所以，遇到特别强调随机的场合，都不应该使用语言内置的随机数生成器。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061815.webp" alt="" loading="lazy"></p><p>真随机数需要满足三个条件。</p><blockquote><p><strong>（1）无法预测。</strong> 随机数不能被猜到，所以必须非常大，否则会被暴力破解。</p><p><strong>（2）不能重复。</strong> 每次生成的随机数，不能是一样的。</p><p><strong>（3）均匀分布。</strong> 随机数必须平均散布在所有区间，不能集中在某些区间。</p></blockquote><p><strong>一般来说，只有通过硬件，才能得到真随机数</strong>，单纯的软件算法做不到。</p><p>科学家绞尽脑汁，想出各种办法，通过硬件生成随机数。</p><p>著名的 <a href="https://www.random.org/" target="_blank" rel="noreferrer">Random.org</a> 就是专门生成一个随机数的网站。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061816.webp" alt="" loading="lazy"></p><p>它在全世界部署了多个无线电接收器，专门监听大气无线电波（即大气噪音，可以理解成大气的布朗运动），通过随机的无线电信号来生成随机数。下图是它的早期硬件设备。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061817.webp" alt="" loading="lazy"></p><p>因为有硬件支出，使用它的随机数，需要付费。所以，大家可以看到，真随机数是有成本的，不是跑一下程序就可以了。</p><p>世界最大的 CDN 服务商 Cloudflare ，为了得到真随机数，做得更绝。</p><p>它的三个办公室，每个都有<a href="https://blog.cloudflare.com/harnessing-office-chaos" target="_blank" rel="noreferrer">不一样</a>的随机数生成装置。</p><p><strong>（1）旧金山总部</strong>。一进门就有一堵墙，放满了几十盏熔岩灯。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202403/bg2024031204.webp" alt="" loading="lazy"></p><p>熔岩灯内部是融化的蜡，每时每刻都在变化着形状。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061818.webp" alt="" loading="lazy"></p><p>需要随机数的时候，就对着这堵墙拍一张照片。每张照片都是不一样的，然后计算照片的哈希，将其作为种子值，计算得到一个随机数。</p><p><strong>（2）伦敦办公室。</strong> 那里有一面“单摆墙”，放满了各种单摆装置。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202403/bg2024031205.webp" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202403/bg2024031206.webp" alt="" loading="lazy"></p><p>单摆和它们的影子，每时每刻都在摆动。每次照片的哈希也是不一样的，可以作为随机数的种子值。</p><p><strong>（3）奥斯汀办公室。</strong> 那里的天花板，挂了很多彩色的反光片。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202403/bg2024031207.webp" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202403/bg2024031208.webp" alt="" loading="lazy"></p><p>这些反光片对空气流动十分敏感，开门、关门、空调、温度、湿度，都会让其转动，反射出不同颜色的光。因此，也可以用来当作随机数的种子值。</p><h2 id="下周五-稀土开发者大会" tabindex="-1">下周五，稀土开发者大会 <a class="header-anchor" href="#下周五-稀土开发者大会" aria-label="Permalink to &quot;下周五，稀土开发者大会&quot;">​</a></h2><p>过去一个月，周刊一直在预热今年的“稀土开发者大会”。</p><p>它的开幕时间就是下周五（6月28日）。</p><p>作为今年的大活动，所有日程安排现在都出来了。下图就是<strong>主论坛和10个分论坛的 70 多场演讲题目</strong>。</p><p><a href="https://cdn.beekka.com/blogimg/asset/202406/bg2024062005.webp" target="_blank" rel="noreferrer"><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024062004.webp" alt="" loading="lazy"></a>)</p><p>点击看<a href="https://cdn.beekka.com/blogimg/asset/202406/bg2024062005.webp" target="_blank" rel="noreferrer">大图</a>，都是技术热点和前沿领域。演讲者是来自全球的技术专家和第一线的主力工程师。</p><p>另外，大会还有外场的 AI 活动，一共4个特色展区，可以接触众多国内头部 AI 公司的展台，参与各种互动小游戏，赢取纪念品。这部分是免费的。</p><p>活动详情可以点击<a href="https://conf.juejin.cn/xdc2024/?utm_source=ryf" target="_blank" rel="noreferrer">这个链接</a>，或者扫描上方海报的二维码，购买内场演讲票，或者领取免费的外场票，以及预约现场直播。</p><h2 id="科技动态" tabindex="-1">科技动态 <a class="header-anchor" href="#科技动态" aria-label="Permalink to &quot;科技动态&quot;">​</a></h2><p>1、<a href="https://www.wsj.com/science/space-astronomy/boeing-sent-two-astronauts-into-space-now-it-needs-to-get-them-home-99d96633" target="_blank" rel="noreferrer">Starliner 飞船</a></p><p>美国宇航局最近遇到了一件尴尬的事情。</p><p>波音公司的 Starliner 飞船（下图），将两名宇航员送入国际空间站以后，却回不来了。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061906.webp" alt="" loading="lazy"></p><p>飞船发射后，出现了氦气泄漏和推进器故障。迟迟没有找到原因，美国宇航局就不敢用它把宇航员送回来。</p><p>本次任务原定8天，现在已经20天了。目前暂定6月26日返航，但可能再次推迟。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061907.webp" alt="" loading="lazy"></p><p>好在国际空间站有4个月的食物储备，不至于有物资问题。</p><p>本次飞行是 Starliner 飞船首次执行任务，就搞成这样。实在不行的话，只能再派一艘飞船去把人接回来。</p><p>2、<a href="https://www.nhm.ac.uk/discover/news/2024/june/face-ancient-australian-giga-goose-revealed-after-fossil-skull-found.html" target="_blank" rel="noreferrer">澳大利亚巨型鹅</a></p><p>澳大利亚与其他大陆隔绝，存在着许多奇特动物。</p><p>科学家很早就知道，澳大利亚有过一种巨型鹅（下图最右侧），大小跟鸵鸟相仿，身高超过2米，体重240公斤，但是已经在45000年前灭绝了。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061501.webp" alt="" loading="lazy"></p><p>那时正好是第一批人类来到澳大利亚，所以科学家猜测，它的灭绝与人类有关。人类可能大规模捕杀这种鹅，毕竟它不会飞，又跑得慢。</p><p>以前，这种鹅只出土过零星的化石，最近终于出土了第一个完整头骨。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061502.webp" alt="" loading="lazy"></p><p>科学家画出它的还原像，大家看看，这种地球已经不存在的巨型鹅长什么样。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061503.webp" alt="" loading="lazy"></p><p>3、<a href="https://x.com/soren_iverson/status/1801253187602788424" target="_blank" rel="noreferrer">眼球监控</a></p><p>一位国外网友，在推特上贴出一张图片。</p><p>他在手机上看 Youtube 视频，结果跳出了这个提示。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061506.webp" alt="" loading="lazy"></p><p>意思是，系统发现，他的眼球没有注视广告，所以重新播放一次广告。</p><p>这张图应该是伪造的，不过技术上很简单。只要播放广告时，启动摄像头，就能识别镜头前有没有人，眼球看哪里。</p><p>我怀疑，这种场景会变成现实。以后，付费用户正常使用，免费用户必须通过眼球监控，确保正在注视广告。</p><p>4、<a href="https://globalvoices.org/2024/06/13/the-ingenious-network-tree-defying-gazas-connectivity-blockade/" target="_blank" rel="noreferrer">上网篮</a></p><p>加沙地区由于战争原因，互联网服务已经完全中断了。</p><p>一个国际组织为了帮助那里的人民上网，想出了一个解决办法。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061504.webp" alt="" loading="lazy"></p><p>他们先在其他国家购买了一批 eSIM 卡，将参数传给当地人。因为 eSIM 是虚拟卡，只要填入参数，就能开通，相对容易。</p><p>然后，当地人把手机连上充电宝，放在一个篮子里，带到边境地区，挂在高处。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061505.webp" alt="" loading="lazy"></p><p>通过 eSIM 卡，手机可以连上邻国的 4G 网络，这时打开手机热点，那么在篮子下面的人，就都能上网了。</p><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<a href="https://www.36kr.com/p/2826590796843272" target="_blank" rel="noreferrer">AI 芯片的未来，未必是 GPU</a>（中文）</p><p>本文认为，加速计算未必只能通过 GPU 实现，FPGA 或 ASIC 或许是更优的底层计算设备。</p><p>2、<a href="https://medium.com/@ideatocode/what-i-learned-as-an-artist-writing-my-own-blog-engine-for-10-years-straight-0cb8297e7712" target="_blank" rel="noreferrer">我编写自己的博客引擎的10年</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202404/bg2024040801.webp" alt="" loading="lazy"></p><p>作者为自己写了一个博客引擎，坚持了10年，他讲述在这个过程中学到的东西和体会。</p><p>3、<a href="https://www.joshwcomeau.com/react/folding-the-dom/" target="_blank" rel="noreferrer">CSS 的 3D 折叠效果</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202404/bg2024040601.webp" alt="" loading="lazy"></p><p>本文介绍如何使用 CSS 实现 3D 的页面折叠动画效果（上图）。</p><p>4、<a href="https://pncnmnp.github.io/blogs/fibonacci-hashing.html" target="_blank" rel="noreferrer">随机歌单的算法</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202312/bg2023121001.webp" alt="" loading="lazy"></p><p>本文介绍 Spotify 生成随机歌单的算法，要求是同一个歌手的歌曲不能连续播放。</p><p>5、<a href="https://www.asianometry.com/p/whats-next-for-asml" target="_blank" rel="noreferrer">ASML 总部访问记</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061702.webp" alt="" loading="lazy"></p><p>作者访问荷兰光刻机公司 ASML 总部，在埃因霍温市的郊区，这里是他的见闻。</p><p>6、<a href="https://lazamar.github.io/virtual-dom/" target="_blank" rel="noreferrer">200行 JavaScript 代码实现虚拟 DOM</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202405/bg2024052205.webp" alt="" loading="lazy"></p><p>虚拟 DOM 是很多 JS 框架的底层基础，本文演示怎么自己从头实现它。</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://github.com/porsager/postgres" target="_blank" rel="noreferrer">Postgres.js</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202310/bg2023101401.webp" alt="" loading="lazy"></p><p>Node.js 和 Deno 的 PostgreSQL 客户端，类似软件还有 <a href="https://jawj.github.io/zapatos/" target="_blank" rel="noreferrer">Zapatos</a>。</p><p>2、<a href="https://opencclint.vercel.app/" target="_blank" rel="noreferrer">OpenccLint</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061601.webp" alt="" loading="lazy"></p><p>一个基于 OpenCC 的繁简体中文转换工具，支持编辑器和命令行界面。（<a href="https://github.com/ruanyf/weekly/issues/4629" target="_blank" rel="noreferrer">@hddhyq</a> 投稿）</p><p>3、<a href="https://github.com/kangpeiqin/bilivideo_down" target="_blank" rel="noreferrer">BiliVideoDown</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061604.webp" alt="" loading="lazy"></p><p>一款基于 Flutter 的桌面端 B 站视频下载器，代码开源。（<a href="https://github.com/ruanyf/weekly/issues/4640" target="_blank" rel="noreferrer">@kangpeiqin</a> 投稿）</p><p>4、<a href="https://gitee.com/howcode/aq-chat-server" target="_blank" rel="noreferrer">AQChat</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061605.webp" alt="" loading="lazy"></p><p>一款匿名的在线聊天软件，用户可以自由登录、创建房间、会话和传输文件，体验 <a href="https://aqchat.run/" target="_blank" rel="noreferrer">demo</a>。链接是后端代码，另有 <a href="https://gitee.com/howcode/aq-chat" target="_blank" rel="noreferrer">Web 端</a>和<a href="https://gitee.com/ghosthhf/aqchat-mobile" target="_blank" rel="noreferrer">移动端</a>。（<a href="https://github.com/ruanyf/weekly/issues/4643" target="_blank" rel="noreferrer">@howcodes</a> 投稿）</p><p>5、<a href="https://voicer.hellogeek.work/" target="_blank" rel="noreferrer">Voicer</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061808.webp" alt="" loading="lazy"></p><p>一个 Chrome 浏览器插件，用来语音朗读网页文本。（<a href="https://github.com/ruanyf/weekly/issues/4647" target="_blank" rel="noreferrer">@wang-jianliang</a> 投稿）</p><p>6、<a href="https://www.1txm.com/barcode" target="_blank" rel="noreferrer">易条形</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061810.webp" alt="" loading="lazy"></p><p>一个在线的条形码生成器。（<a href="https://github.com/ruanyf/weekly/issues/4651" target="_blank" rel="noreferrer">@FZliweiliang</a> 投稿）</p><p>7、<a href="https://scienhub.com/templates" target="_blank" rel="noreferrer">ScienHub</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061812.webp" alt="" loading="lazy"></p><p>LaTex 在线编辑器，提供很多实用的模板。（<a href="https://github.com/ruanyf/weekly/issues/4657" target="_blank" rel="noreferrer">@tc1989tc</a> 投稿）</p><p>8、<a href="https://github.com/qqAys/trash.sh" target="_blank" rel="noreferrer">trash.sh</a></p><p>rm 命令的简单替代品，提供一个删除文件的回收站。（<a href="https://github.com/ruanyf/weekly/issues/4658" target="_blank" rel="noreferrer">@qqAys</a> 投稿）</p><p>9、<a href="https://cloud.myfont.bid/" target="_blank" rel="noreferrer">我的字体</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061813.webp" alt="" loading="lazy"></p><p>一个制作个人手写字体的在线工具。（<a href="https://github.com/ruanyf/weekly/issues/4659" target="_blank" rel="noreferrer">@harbor2009</a> 投稿）</p><p>10、<a href="https://github.com/chengfengfengwang/lingo-link/blob/main/README_ZH-CN.md" target="_blank" rel="noreferrer">lingo link</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024062001.webp" alt="" loading="lazy"></p><p>一个开源的浏览器插件，支持划词翻译、AI 翻译、生词标记。（<a href="https://github.com/ruanyf/weekly/issues/4670" target="_blank" rel="noreferrer">@chengfengfengwang</a> 投稿）</p><h2 id="ai-相关" tabindex="-1">AI 相关 <a class="header-anchor" href="#ai-相关" aria-label="Permalink to &quot;AI 相关&quot;">​</a></h2><p>1、<a href="https://lunaai.video/" target="_blank" rel="noreferrer">Luma AI Video Generator</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061602.webp" alt="" loading="lazy"></p><p>Luma AI 视频生成器免费在线使用。（<a href="https://github.com/ruanyf/weekly/issues/4628" target="_blank" rel="noreferrer">@sunnyjingliu</a> 投稿）</p><p>2、<a href="https://stablediffusion3.net/zh-CN" target="_blank" rel="noreferrer">Stable Diffusion 3 AI 图像生成器</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061603.webp" alt="" loading="lazy"></p><p>免费使用 Stable Diffusion 3，通过文本生成图像，无需注册。（<a href="https://github.com/ruanyf/weekly/issues/4637" target="_blank" rel="noreferrer">@ddewfrefref</a> 投稿）</p><p>3、<a href="https://elevenlabs.io/" target="_blank" rel="noreferrer">Generative Voice AI</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202310/bg2023101615.webp" alt="" loading="lazy"></p><p>一个文字转语音的服务，支持中文，免费账户每月可以转10000字（约10分钟音频）。</p><p>4、<a href="https://github.com/luyu0279/BrainyAI" target="_blank" rel="noreferrer">BrainyAI</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061809.webp" alt="" loading="lazy"></p><p>一个开源的 Chrome 插件，在侧边栏加载 AI 模型，是类似产品 <a href="https://sider.ai/" target="_blank" rel="noreferrer">Sider AI</a>, <a href="https://monica.im/" target="_blank" rel="noreferrer">Monica</a>, <a href="https://www.getmerlin.in/" target="_blank" rel="noreferrer">Merlin</a>, 和 <a href="https://www.maxai.me/" target="_blank" rel="noreferrer">MaxAI</a> 的免费替代品。（<a href="https://github.com/ruanyf/weekly/issues/4648" target="_blank" rel="noreferrer">@luyu0279</a> 投稿）</p><p>5、<a href="https://www.rockai.online/" target="_blank" rel="noreferrer">Rock AI</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061908.webp" alt="" loading="lazy"></p><p>该网站托管了一些开源 AI 模型，可以免费调用。（<a href="https://github.com/ruanyf/weekly/issues/4668" target="_blank" rel="noreferrer">@hellokidder</a> 投稿）</p><p>6、<a href="https://chrome-ai.cc/" target="_blank" rel="noreferrer">Chrome AI</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061811.webp" alt="" loading="lazy"></p><p>使用 chrome 内置 AI 模型搭建的本地聊天工具。（<a href="https://github.com/ruanyf/weekly/issues/4655" target="_blank" rel="noreferrer">@zengkan0703</a> 投稿）</p><p>7、<a href="https://www.sheshbabu.com/posts/system-wide-text-summarization-using-ollama-and-applescript/" target="_blank" rel="noreferrer">mac 电脑的本地文本总结</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061512.webp" alt="" loading="lazy"></p><p>本文介绍如何在 mac 电脑上，架设本地的 Ollama 模型，用它建立一个快捷方式，自动对打开的网页进行内容总结。</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、<a href="https://tonsky.me/blog/unicode/" target="_blank" rel="noreferrer">开发者必须了解的 Unicode 知识</a>（2023版）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202310/bg2023100210.webp" alt="" loading="lazy"></p><p>这篇长文介绍最新的 Unicode 知识。</p><p>2、<a href="https://www.loadership.com/" target="_blank" rel="noreferrer">loadership</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202401/bg2024012002.webp" alt="" loading="lazy"></p><p>该网站可以定制纯 CSS 的页面加载动画（loader）。</p><p>3、<a href="https://github.com/federico-busato/Modern-CPP-Programming" target="_blank" rel="noreferrer">现代 C++ 编程</a>（Modern C++ Programming）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202311/bg2023112902.webp" alt="" loading="lazy"></p><p>一个开源的 C++ 英文教程。</p><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>1、<a href="https://www.snopes.com/fact-check/magic-roundabout-photo/" target="_blank" rel="noreferrer">奇怪的环岛</a></p><p>英国有一个奇怪的环岛，分成内圈和外圈，它们之间还分布着5个小环岛。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061703.webp" alt="" loading="lazy"></p><p>它的内圈是逆时针方向，外圈是顺时针方向。</p><p>从外圈进入内圈，或者从内圈进入外圈，都必须通过5个小环岛。</p><p>下图是当地的交通指示牌。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024061704.webp" alt="" loading="lazy"></p><p>这个环岛建于1972年，多年没有发生过重大的交通事故。</p><p>2、<a href="https://en.wikipedia.org/wiki/Elbe_Tunnel_(1911)" target="_blank" rel="noreferrer">易北河隧道</a></p><p>易北河流经德国汉堡市中心。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202210/bg2022101409.webp" alt="" loading="lazy"></p><p>1911年，汉堡市政府在河底挖了一条426米的隧道，方便两岸的交通。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202210/bg2022101410.webp" alt="" loading="lazy"></p><p>这条隧道的奇特之处，就是没有引道。行人和车辆必须使用升降机，进入和离开隧道。下图两侧的黄色垂直通道，就是升降机。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202210/bg2022101412.webp" alt="" loading="lazy"></p><p>下图是车辆升降机的入口。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202210/bg2022101411.webp" alt="" loading="lazy"></p><p>这个隧道直到今天还在使用，甚至还在里面开过音乐会。下图是在升降机底部仰望出口。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202210/bg2022101413.webp" alt="" loading="lazy"></p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<a href="https://tratt.net/laurie/blog/2023/how_big_should_a_programming_language_be.html" target="_blank" rel="noreferrer">编程语言应该多大？</a></p><p>编程语言有小有大。</p><p>一些语言只提供最核心的功能，另一些语言无所不包。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024062002.webp" alt="" loading="lazy"></p><p>还有一些语言，开始时很小，后来不断添加功能，变得越来越大，甚至庞大到难以使用。</p><p>Python 语言的初始版本很小，前几个版本故意保持这种特色，添加功能的建议都被明确拒绝，理由是它们会使语言太大。</p><p>某个时刻（也许是在 Python 1.6 和 Python 2.0 之间），事情发生了变化：功能建议不会因为使语言变大而被拒绝，只会因为没有解决重要问题而被拒绝。</p><p>从此以后，Python 就走向了庞大语言的道路。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024062003.webp" alt="" loading="lazy"></p><p>在我看来，一旦语言的设计者不再担心语言的大小，这种语言的无限制增长是不可避免的。</p><p>很多语言都是如此。尽管 Java 从来都不是小型语言，但在泛型添加到 Java 1.5 之前，它的变化相当小。泛型似乎是 Java 大型语言之旅的起点。</p><p>JavaScript 本来是一个周末设计出来的小型语言，现在变成了一种相当庞大的语言。</p><p>Rust 是一种已经很大的语言，但它正在考虑添加更多功能，变得更大。</p><p>为什么那么多语言都走上了变大的道路？</p><p>我的看法是，因为没有一种编程语言是完美的，总有不能很好支持的用例。许多情况下，添加新功能有助于更好地支持这些用例。</p><p>由于潜在用例是无限的，因此我们总是加入新的设计，让语言变得“更好”，副作用就是每次都让语言变得更大一点。</p><h2 id="言论" tabindex="-1">言论 <a class="header-anchor" href="#言论" aria-label="Permalink to &quot;言论&quot;">​</a></h2><p>1、</p><p>拉斯维加斯正在举行一年一度的电子表格 Excel 世界锦标赛，它有一个其他比赛都没有的特点，那就是毫无趣味。</p><p>-- <a href="https://www.theverge.com/c/24133822/microsoft-excel-spreadsheet-competition-championship" target="_blank" rel="noreferrer">《Excel 世界锦标赛》</a></p><p>2、</p><p>哈勃望远镜确定，宇宙的准确年龄是138亿年。那就是我们这个世界的起源，在这之前是什么，没人知道。</p><p>--<a href="https://www.esa.int/Science_Exploration/Space_Science/Webb/Webb_Hubble_confirm_Universe_s_expansion_rate" target="_blank" rel="noreferrer">《韦伯望远镜提供的新线索》</a></p><p>3、</p><p>农活忙不过来。</p><p>-- <a href="https://github.com/dylanaraps" target="_blank" rel="noreferrer">@dylanaraps</a>，Kiss Linux 的创始人，他的 GitHub 主页上只留了这一句话，项目已经两年多不更新了</p><p>4、</p><p>我不记得读过的书，就像不记得吃过的饭一样；即便如此，它们还是造就了我。</p><p>-- <a href="https://blog.jim-nielsen.com/2024/you-are-what-you-read/" target="_blank" rel="noreferrer">爱默生</a></p><p>5、</p><p>早期，民航客机的驾驶舱最多有五名成员。由于导航和通信的自动化，导航员和无线电操作员率先被淘汰。然后，飞行工程师也被淘汰了，只剩下两名飞行员。</p><p>随着飞行员成本的飙升，航空公司开始要求，只有一个飞行员的窄体飞机，副驾驶员被淘汰只是时间问题。</p><p>最终，仅剩的一个飞行员也会被淘汰，以后的飞机主要靠自动驾驶，再配上一名能够有限控制飞机的地面操作员。</p><p>-- <a href="https://airfactsjournal.com/2024/06/the-last-pilot/" target="_blank" rel="noreferrer">《最后的飞行员》</a></p><h2 id="往年回顾" tabindex="-1">往年回顾 <a class="header-anchor" href="#往年回顾" aria-label="Permalink to &quot;往年回顾&quot;">​</a></h2><p>2023：<a href="https://www.ruanyifeng.com/blog/2023/06/weekly-issue-258.html" target="_blank" rel="noreferrer">卡马克的猫</a>（#258）</p><p>2022：<a href="https://www.ruanyifeng.com/blog/2022/05/weekly-issue-208.html" target="_blank" rel="noreferrer">晋升制度的问题</a>（#208）</p><p>2021：<a href="https://www.ruanyifeng.com/blog/2021/05/weekly-issue-158.html" target="_blank" rel="noreferrer">内容渠道的贬值</a>（#158）</p><p>2020：<a href="http://www.ruanyifeng.com/blog/2020/05/weekly-issue-108.html" target="_blank" rel="noreferrer">阵地战与奇袭战</a>（#108）</p><p>（完）</p>',223)]))}const m=a(l,[["render",o]]);export{c as __pageData,m as default};
