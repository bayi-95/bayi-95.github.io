import{_ as a,c as t,o as r,R as e,z as p}from"./chunks/framework.842ee581.js";const u=JSON.parse('{"title":"科技爱好者周刊（第 224 期）：Figma 为什么赢了 Sketch","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊（第 224 期）：Figma 为什么赢了 Sketch","slug":"科技爱好者周刊-第-224-期-figma-为什么赢了-sketch","link":"#科技爱好者周刊-第-224-期-figma-为什么赢了-sketch","children":[]}],"relativePath":"pages/weekly/issue-224.md","filePath":"pages/weekly/issue-224.md","lastUpdated":1686789644000}'),s={name:"pages/weekly/issue-224.md"},o=e('<h1 id="科技爱好者周刊-第-224-期-figma-为什么赢了-sketch" tabindex="-1">科技爱好者周刊（第 224 期）：Figma 为什么赢了 Sketch <a class="header-anchor" href="#科技爱好者周刊-第-224-期-figma-为什么赢了-sketch" aria-label="Permalink to &quot;科技爱好者周刊（第 224 期）：Figma 为什么赢了 Sketch&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。</p><p>本杂志开源（GitHub: <a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">ruanyf/weekly</a>），欢迎提交 issue，投稿或推荐科技内容。</p><p>周刊讨论区的帖子<a href="https://github.com/ruanyf/weekly/issues/2599" target="_blank" rel="noreferrer">《谁在招人？》</a>，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。</p><h2 id="封面图" tabindex="-1">封面图 <a class="header-anchor" href="#封面图" aria-label="Permalink to &quot;封面图&quot;">​</a></h2><p><img src="https://cdn.beekka.com/blogimg/asset/202208/bg2022081107.webp" alt=""></p><p>怎样回收火箭？SpaceX 公司造了两艘船，每艘船的上方架设一张超级大网，等着落向大海的火箭掉入网中。（<a href="https://www.nasaspaceflight.com/2022/08/spacex-fairing-recovery/" target="_blank" rel="noreferrer">via</a>）</p><h2 id="本周话题-figma-为什么赢了-sketch" tabindex="-1">本周话题：Figma 为什么赢了 Sketch <a class="header-anchor" href="#本周话题-figma-为什么赢了-sketch" aria-label="Permalink to &quot;本周话题：Figma 为什么赢了 Sketch&quot;">​</a></h2><p>上周，Adobe 公司<a href="https://36kr.com/p/1917326805803014" target="_blank" rel="noreferrer">宣布</a>，200亿美元收购设计软件 Figma。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092001.webp" alt=""></p><p>这个收购价高得吓人。Figma 去年的<a href="https://www.cbinsights.com/company/figma/financials" target="_blank" rel="noreferrer">收入</a>是5000万美元，今年据说可以到4亿美元。就算这个预测是可靠的，收购价也达到了收入的50倍！</p><p>作为比较，微软2018年收购 GitHub 的价格是75亿美元，那一年 GitHub 的收入约为3亿美元。</p><p><strong>为什么一个面向专业用户、2016年才问世的设计软件，能值这么多钱？</strong></p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092002.webp" alt=""></p><p>Figma 有一个竞争对手 <a href="https://www.sketch.com/" target="_blank" rel="noreferrer">Sketch</a>，功能差不多。直到2019年，Sketch 的估值还超过 Figma。当时，网上还有猜测，Sketch 什么时候会收购 Figma，但是没想到后来就被 Figma 甩开差距了。</p><p>今天就想谈谈 Figma 的高估值，以及为什么 Sketch 输给了它？</p><p>我不是设计师用户，无法全面分析，只想指出在技术上，它们有一个重大差异。</p><p>Sketch 是一个原生 MacOS 应用，只能在苹果电脑上安装运行，没有免费版。<strong>Figma 则是一个 Web 应用，只要有浏览器就能用，而且有免费版。</strong> 下图是浏览器打开 Figma 的样子。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092004.webp" alt=""></p><p>你想想看，一个要用 Mac 电脑下载安装，付费才能用，另一个只要打开浏览器就能用，谁占优势不言而喻。</p><p>但是，事情没这么简单。原生应用则可以调用底层的系统 API，网页应用受限于浏览器，很多功能实现不了。所以，Sketch 功能和性能肯定强于 Figma。</p><p>Figma 怎么解决这个问题呢？答案就是 <a href="https://www.figma.com/blog/rust-in-production-at-figma/" target="_blank" rel="noreferrer">Rust 语言</a>。虽然 Figma 是网页应用，但它不是用 JavaScript 写的，而是用 Rust 写的，再编译成浏览器能理解的 WebAssembly 字节码格式，从而达到接近原生应用的性能。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092006.webp" alt=""></p><p>事实上，<strong>Figma 是业内 WebAssembly 最强的公司之一。</strong> 它的 CTO 埃文·华莱士（Evan Wallace）实在忍受不了 JavaScript 的慢速度，就动手写了新一代的 JavaScript 打包器 <a href="https://esbuild.github.io/faq/#benchmark-details" target="_blank" rel="noreferrer">ESbuild</a>，结果竟比传统的打包器 Webpack 快了100多倍（0.33s vs 41.53s）！</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092007.webp" alt=""></p><p>（图片说明：Figma 的两位创始人，左为 CTO 埃文·华莱士。）</p><p>一旦解决了浏览器的性能瓶颈，能够接近原生应用的体验，Figma 赢出就毫无悬念了。</p><p><strong>近年来，大家好像有一个观念：原生应用是标配，Web 应用是选配。</strong> 很多软件明明有非常好用的 Web 版，还一定要用 Electron 去包一个桌面版，让用户下载安装。仿佛只有存在一个可以安装的桌面客户端，才感到安心。</p><p>这一次，Figma 以200亿美元被收购，证明 Web 应用并没有过时。<strong>即使不走原生应用那条路，依然有机会成功。</strong></p><p>另一方面，<strong>Adobe 是一家靠原生应用起家的公司，这几年一直在转向云端</strong>，推出了 <a href="https://creativecloud.adobe.com/zh-Hans" target="_blank" rel="noreferrer">Adobe Creative Cloud</a>，把自家的软件向浏览器迁移，希望用户打开浏览器就能用，收费方式也从买断变成了订阅制。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092201.webp" alt=""></p><p>今年6月，Adobe 将王牌产品 PhotoShop 的网页版向所有人<a href="https://finance.sina.com.cn/tech/2022-06-15/doc-imizmscu6902624.shtml" target="_blank" rel="noreferrer">免费提供</a>。我觉得，这跟收购 Figma 是有关系的。Adobe 愿意花这么大的代价买下 Figma，不仅仅是为了产品本身，也是为了获得背后的技术，帮助开发自己的 Web 应用，彻底走向云端化。</p><h2 id="科技动态" tabindex="-1">科技动态 <a class="header-anchor" href="#科技动态" aria-label="Permalink to &quot;科技动态&quot;">​</a></h2><p>1、<a href="https://news.mit.edu/2022/quaise-energy-geothermal-0628" target="_blank" rel="noreferrer">加速器打洞</a></p><p>麻省理工学院的一个物理学家，一直研究粒子加速器。有一天，他突发奇想，能不能把加速的粒子用来在石头上打洞？</p><p><img src="https://cdn.beekka.com/blogimg/asset/202208/bg2022080502.webp" alt=""></p><p>他做了多次实验，认为可行（上图）。麻省理工学院现在资助他，尝试用加速的粒子撞击岩石，向地下打洞。目标是打到深度20公里，将500摄氏度的地热引到地面，用来地热发电。</p><p>他还有一个难题没有解决，就是打洞产生的岩石蒸气如何处理。如果能够解决这个问题，地热发电也许就可以推广了，用地球内部的热量取代煤炭，加热产生水蒸汽发电。</p><p>2、<a href="https://www.musicradar.com/news/yamaha-smartphone-turntable" target="_blank" rel="noreferrer">手机唱片机</a></p><p>日本雅马哈公司推出了一款手机唱片机，让手机用户感受播放黑胶唱片的感觉。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202208/bg2022080604.webp" alt=""></p><p>你把手机放到唱片机上，然后打开一个配套的手机 App，它会把你的歌曲列表显示成一张黑胶唱片。</p><p>这时，你把探头（它相当于触摸笔）放到手机屏幕上，音乐就会开始播放。拿走探头，音乐就会停止；移动探头，甚至还有打碟的效果。</p><p>3、<a href="http://www.gz.chinanews.com.cn/dcsj/2022-09-16/doc-ihcearke9348308.shtml" target="_blank" rel="noreferrer">无人农场</a></p><p>贵州省首个“水稻无人农场”，迎来了稻谷丰收。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092105.webp" alt=""></p><p>该农场从播种到丰收，全部使用无人机械。下图是今年春天使用的无人播种机和无人插秧机，都是无人驾驶。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092103.webp" alt=""></p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092104.webp" alt=""></p><p>无人机洒农药和化肥。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092106.webp" alt=""></p><p>丰收时使用的无人收割机。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092102.webp" alt=""></p><p>所有的无人机械都在手机上监控和操作。以后完全可以实现，坐在屋里用手机种地。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092107.webp" alt=""></p><p>4、<a href="https://www.thelocal.dk/20220804/danish-ai-driven-political-party-eyes-parliament/" target="_blank" rel="noreferrer">人工智能政党</a></p><p>丹麦成立了一个新政党，政策完全来自人工智能（AI）模型。模型算出来什么政策，他们就执行什么政策。模型的目标是，实现联合国可持续发展指标的最大化。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202208/bg2022080801.webp" alt=""></p><p>这个政党希望成立以后，可以参加2023年6月丹麦的选举。要是能够进入议会，就会让模型参政。</p><p>这其实是一个不错的主意，政策由计算机决定，大大增加了可预测性和稳定性，政府运作的成本也比较低。如果能够推广，将来的议会选举很可能就会变成各种人工智能政策模型的比较。</p><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<a href="https://finance.sina.com.cn/tech/tele/2022-09-19/doc-imqmmtha7923057.shtml" target="_blank" rel="noreferrer">卫星通话的消费级国产手机何时诞生</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092012.webp" alt=""></p><p>本文介绍中国卫星电话的发展现状，透露有一家叫做“银河航天”的创业公司，正在发射自己的卫星，试验组建一个低轨宽带通信网。</p><p>2、<a href="https://sspai.com/post/75665" target="_blank" rel="noreferrer">如何选择家用 3D 打印机</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022091506.webp" alt=""></p><p>作者介绍他怎么选择购买自己的第一台 3D 打印机。</p><p>3、<a href="https://lmy.medium.com/7-tools-for-visualizing-a-codebase-41b7cddb1a14" target="_blank" rel="noreferrer">软件内部信息的7个可视化工具</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/220204/bg2022040301.webp" alt=""></p><p>本文介绍7个工具，可以将软件内部信息（比如目录结构、依赖关系等）以可视化的形式展现。</p><p>4、<a href="https://dustri.org/b/horrible-edge-cases-to-consider-when-dealing-with-music.html" target="_blank" rel="noreferrer">音乐数据库的难点</a>（英文）</p><p>这篇文章列举了维护音乐数据库的难点，比如不同的乐队有相同的名字，有的乐队改过多次名字。再比如，有的曲目是多人合作的，最多的一首居然有191个人参与。</p><p>5、<a href="https://sixcolors.com/post/2020/11/quick-tip-enable-touch-id-for-sudo/" target="_blank" rel="noreferrer">如何为 sudo 命令开启 Touch ID</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202206/bg2022061608.webp" alt=""></p><p>命令行的<code>sudo</code>命令需要认证用户身份，这需要输入密码。作者突发奇想，能不能用 MacBook 的 Touch ID 代替密码，需要验证时，提示用户按一下指纹。</p><p>6、<a href="https://anvil.works/articles/pointers-in-my-python-2" target="_blank" rel="noreferrer">Python 的<code>is</code>运算符和<code>==</code>运算符</a>（英文）</p><p>Python 比较两个对象是否相同有两个运算符，本文介绍它们的异同。简单说，<code>is</code>比较的是内存地址是否相同，<code>==</code>比较值是否相同，并可以自定义。</p><p>7、<a href="https://woodgears.ca/dust/dylos.html" target="_blank" rel="noreferrer">空气监测仪如何测量灰尘？</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202208/bg2022080602.webp" alt=""></p><p>作者买了一个空气监测仪，测量 PM 2.5 指数。他把监测仪拆开了，分析测量原理。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202208/bg2022080603.webp" alt=""></p><p>原理就是用一个激光探头照射空气，尘埃越多、颗粒越大，被反射的光就越多，然后检测器根据接收到反射光脉冲数量和强度，来衡量空气质量。</p><p>8、<a href="https://donatstudios.com/yagni-git-gc" target="_blank" rel="noreferrer">你应该关闭 git 的自动垃圾收集</a>（英文）</p><p>Git 默认会定期清除用不到的提交对象（孤儿对象），作者认为你应该关掉这个功能。</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://github.com/maxmunzel/kvass" target="_blank" rel="noreferrer">kvass</a></p><p>一个轻便的键值对存储工具，将数据存在本机。可以命令行使用，也可以对外提供 HTTP 接口，分享网址给其他人。</p><p>2、<a href="https://wenxin.baidu.com/moduleApi/ernieVilg" target="_blank" rel="noreferrer">ERNIE-ViLG 文生图</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092108.webp" alt=""></p><p>百度 AI 引擎“文心大模型”的文生图功能，输入中文句子，输出相应的图片，类似于 DALL-E 和 Stable Diffusion。</p><p>另外，还可以看看一个同样功能的英文服务 <a href="https://art.elbo.ai/" target="_blank" rel="noreferrer">Elbo</a>。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202207/bg2022072504.webp" alt=""></p><p>3、<a href="https://github.com/suyuan32/simple-admin-core" target="_blank" rel="noreferrer">Simple Admin</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092109.webp" alt=""></p><p>一个 Go 语言写的微服务后端管理系统。（<a href="https://github.com/ruanyf/weekly/issues/2632" target="_blank" rel="noreferrer">@suyuan32</a> 投稿）</p><p>4、<a href="https://github.com/zengkan0703/text-watermark" target="_blank" rel="noreferrer">text-watermark</a></p><p>一个 npm 模块，借助零宽度字符，在文本里面插入（或解码）不可见的文字水印。（<a href="https://github.com/ruanyf/weekly/issues/2634" target="_blank" rel="noreferrer">@zengkan0703</a> 投稿）</p><p>5、<a href="https://github.com/KID-joker/proxy-web-storage" target="_blank" rel="noreferrer">proxy-web-storage</a></p><p>一个 JS 库，用 proxy 封装了 localStorage 和 sessionStorage。除了常规的数据存储，可支持事件监听和设置过期时间。（<a href="https://github.com/ruanyf/weekly/issues/2643" target="_blank" rel="noreferrer">@KID-joker</a> 投稿）</p><p>6、<a href="https://yihui.org/tinytex/" target="_blank" rel="noreferrer">TinyTeX</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202207/bg2022072607.webp" alt=""></p><p>学术排版系统 Tex Live 的简化版本，只有100多兆，支持中文。</p><p>7、<a href="https://keet.io/" target="_blank" rel="noreferrer">Keet</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202207/bg2022072615.webp" alt=""></p><p>一个点对点聊天的软件，不需要服务器，可以进行多人的视频和文字的加密对话。</p><p>8、<a href="https://phcode.dev/" target="_blank" rel="noreferrer">Phoenix</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202207/bg2022072701.webp" alt=""></p><p>Adobe 公司开发过一个代码编辑器 Bracket，现在将其做成了 Web 版，重新命名为 Phoenix，可以当作线上 IDE 使用，<a href="https://github.com/phcode-dev/phoenix" target="_blank" rel="noreferrer">源码</a>开源。</p><p>9、<a href="https://github.com/ronami/HypeScript" target="_blank" rel="noreferrer">HypeScript</a></p><p>一个 TypeScript 库，用来获取 TypeScript 编译器对一段代码的报错。看上去很有意思，还能写出这样的库，但想不出有什么用途。</p><p>10、<a href="https://github.com/dragonflydb/dragonfly" target="_blank" rel="noreferrer">Dragonfly</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202205/bg2022053105.webp" alt=""></p><p>Redis 和 Memcached 的替代品，内存里面的键值对数据库，号称性能更快。</p><h2 id="活动" tabindex="-1">活动 <a class="header-anchor" href="#活动" aria-label="Permalink to &quot;活动&quot;">​</a></h2><p>1、<a href="https://www.bagevent.com/event/8303002?bag_track=001" target="_blank" rel="noreferrer">ClickHouse 的企业应用实践：ByteHouse</a></p><p>ClickHouse 是一种基于列（而不是行）的数据库，由俄罗斯的 Yandex 公司开源，目前是大数据处理和数据仓库的首选工具。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092203.webp" alt=""></p><p>下个月有一个活动，字节跳动工程师分享：为什么他们选择 ClickHouse 作为核心数据分析技术，如何部署和应用了18000多个节点；如何对其进行增强和重构，推出了更适合国内用户的产品 ByteHouse，企业用户如何从中获益。</p><p>具体时间是10月15日下午2点，感兴趣的同学可以点击标题链接，或扫描二维码报名，参加线上直播。</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、<a href="https://neal.fun/life-stats/" target="_blank" rel="noreferrer">人生统计</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202207/bg2022070905.webp" alt=""></p><p>输入生日，这个网站会告诉你一些统计数字，比如你活了多少天、心跳了多少次、地球多了多少人口。</p><p>2、<a href="https://xyzrank.com/" target="_blank" rel="noreferrer">中文播客榜</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092111.webp" alt=""></p><p>查看中文播客的排名和热门节目，数据取自小宇宙和 Apple Podcast，每日更新。（<a href="https://github.com/ruanyf/weekly/issues/2641" target="_blank" rel="noreferrer">@alaskasquirrel</a> 供稿）</p><p>3、<a href="https://wiki.teamssix.com/cloudsecurityresources/" target="_blank" rel="noreferrer">云安全资源汇总</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202209/bg2022092110.webp" alt=""></p><p>这个项目收集云安全领域的博客、公众号、文章、工具、书籍、视频等资源。（<a href="https://github.com/ruanyf/weekly/issues/2635" target="_blank" rel="noreferrer">@teamssix</a> 投稿）</p><p>4、<a href="https://musicforprogramming.net/latest/" target="_blank" rel="noreferrer">程序员音乐</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202207/bg2022070912.webp" alt=""></p><p>一个另类的背景音乐网站，精选了一些歌曲和专辑，适合编程时当作背景音乐。它的界面完全采用字符终端样式。</p><p>5、<a href="https://www.programmingfonts.org/" target="_blank" rel="noreferrer">编程字体</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202207/bg2022071013.webp" alt=""></p><p>这个网站提供了近百种编程字体，可以切换查看效果，以供选择。</p><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>1、<a href="https://www.vintag.es/2022/02/first-photo-from-space.html" target="_blank" rel="noreferrer">第一张地球照片</a></p><p>你知道吗，人类拍摄的第一张地球照片是什么时候？</p><p>答案是1946年10月24日，就是下面这张照片。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202205/bg2022051506.webp" alt=""></p><p>当时第二次世界大战刚刚结束，美国看到了德国 V2 火箭的巨大潜力，就把德国科学家都运到美国，继续研究。</p><p>那一天，研究人员在火箭上第一次安装了一架35毫米的电影摄影机，然后在新墨西哥沙漠里面发射上天。火箭到达了105公里的高空，摄影机开始拍摄，每隔一秒半拍摄一帧。几分钟后，火箭掉回地球，相机本身砸坏了，但放在钢盒里面的胶卷没有受到伤害。</p><p>人们就这样得到了有史以来第一张地球照片。它完全是黑白的，分辨率很低，充满了斑点，但是预示着一个全新摄影领域开创出来了。</p><p>2、<a href="https://mossandfog.com/earths-biggest-cave-will-blow-your-mind/" target="_blank" rel="noreferrer">世界最大洞穴</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202205/bg2022051008.webp" alt=""></p><p>越南的山水洞（Son Doong Cave）是世界最大洞穴。2009年，一个农民在越南中部的丛林深处，偶然发现了这个洞。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202205/bg2022051006.webp" alt=""></p><p><img src="https://cdn.beekka.com/blogimg/asset/202205/bg2022051009.webp" alt=""></p><p>这个洞大约长9公里，高200米，宽150米，里面有瀑布、丛林、地下河流，还有世界最高的70米石笋（上图）。波音747飞机可以在洞内大部分区域通过。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202205/bg2022051007.webp" alt=""></p><p>3、<a href="https://smartflower.com/" target="_blank" rel="noreferrer">SmartFlower</a></p><p>国外推出的家用太阳能发电装置，概念上简直完美，无需安装，自动跟随阳光，日出自动打开，日落自动关闭。</p>',152),l=p("iframe",{frameborder:"0",src:"https://v.qq.com/txp/iframe/player.html?vid=a3339f5r4d8",allowFullScreen:"true",width:"600",height:"400"},null,-1),i=e('<p>就是体积太大，导致实用性不高。但是如果体积小一点，发电量就太少了。</p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<a href="https://lwn.net/Articles/191059/" target="_blank" rel="noreferrer">崩溃更快</a></p><p>2003年的一项研究发现，许多软件崩溃后重启的速度，要比正常退出后重启更快。</p><blockquote><ul><li>Redhat 8：退出后重启104秒，崩溃后重启75秒。</li><li>JBoss 3.0：退出后重启47秒，崩溃后重启39秒。</li><li>Windows：退出后重启61秒，崩溃后重启48秒。</li></ul></blockquote><p>而且，研究人员发现崩溃也没有导致丢失任何重要数据，毕竟软件现在都做得很完善，能够安全地处理崩溃，防止数据丢失。</p><p>有些人就开玩笑，既然如此，开发时就不要写正常退出的代码了，要退出了就抛出一个错误，让软件直接崩溃，这样速度更快。</p><p>举例来说，如果要退出 Windows，不必按“退出”按钮，直接关掉电源会更快。</p><p>如果处理错误的代码非常可靠，软件的所有部分都能够在崩溃中保证安全并快速恢复，那么确实不需要写显式关闭的代码，直接用<code>abort()</code>代替。</p><p>这样的软件就称为“只会崩溃的软件”（crash-only software），谷歌的分布式文件系统 GoogleFS 就被认为是这种软件，它不会正常退出，只会在发生错误时崩溃。</p><p>2、<a href="https://edition.cnn.com/2022/04/30/business/why-ikea-sells-meatballs/index.html" target="_blank" rel="noreferrer">宜家肉丸</a></p><p>宜家是家具公司，但是它也是世界最大的瑞典肉丸公司。每年，这家公司在全球的宜家餐厅总共销售超过10亿颗肉丸。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202205/bg2022050909.webp" alt=""></p><p>最早的时候，宜家根本没有餐厅，最多就是店内咖啡馆，只提供咖啡和蛋糕。</p><p>后来，商店越开越大，公司担心人们在逛迷宫般的宜家商场时，会感到肚子饿而提早离开。为了留住顾客，有必要在商场里开设餐厅。</p><p>那么，餐厅应该提供什么食物呢？</p><p>当时，一家典型的宜家商店每天有多达5,000名顾客。为了简化操作并降低成本，必须提供简单的标准化食品，而且必须保证不同国家的顾客都爱吃。</p><p>想来想去，他们发现瑞典肉丸符合要求。肉丸简单易做，世界各国的饮食文化里面都有肉丸，并且可以方便的冷冻和运输。</p><p>1985年，宜家餐厅开幕了，主要食品就是肉丸，还有鲑鱼、烤牛肉、沙拉、三明治等常见食物。</p><p>一开始，肉丸主要成分是牛肉，而不是猪肉，因为出口牛肉要比出口猪肉容易。现在，宜家提供各种肉丸，包括鸡肉、鲑鱼、素食、以及较新的植物肉丸，同时配上土豆泥、奶油酱、橘子酱和蔬菜。宜家还出售顾客可以带回家的冷冻肉丸。</p><p>宜家的餐厅总是位于出口旁边，这也是精心安排的。宜家不想在你饿的时候，马上让你获得食物，宁愿让顾客在购物时饿着，增加食欲，等到购物完了再去餐厅进食。</p><p>有一项研究发现，同一家商场，饥饿的购物者比已经吃饱的购物者多花64%的钱。</p><h2 id="言论" tabindex="-1">言论 <a class="header-anchor" href="#言论" aria-label="Permalink to &quot;言论&quot;">​</a></h2><p>1、</p><p>我的一个朋友说，他的生活被尖锐地分成了两个部分。上半场，他始终是小组中最年轻的人；下半场，他突然就成了小组中年纪最大的，中间没有过渡期。</p><p>我现在意识到，人生就是这样。到了一定年龄后，你就不再被视为一个人，而是被当成一个机构，别人看你就像看一件仿古家具、一个地标建筑或一个古墓。</p><p>-- <a href="https://alumni.media.mit.edu/~cahn/life/gian-carlo-rota-10-lessons.html" target="_blank" rel="noreferrer">《我希望我被教导的十个教训》</a></p><p>2、</p><p>我那些开发者兄弟，不要为这次代码泄漏垂头丧气，它会过去的。将来有一天，人们玩你们的游戏，欣赏你们的手艺，而这次的泄漏事件只会成为维基百科的一个脚注。向前看，继续创造吧。</p><p>-- 顽皮狗公司总裁 <a href="https://twitter.com/Neil_Druckmann/status/1571525058946035713" target="_blank" rel="noreferrer">Neil Druckmann</a>，评论本周发生的 R 星公司《GTA6》游戏源码大量泄漏事件</p><p>3、</p><p>人们沉迷的其实并不是智能手机，而是智能手机提供的一个活跃的社交环境。</p><p>无论你走到哪里，通过手机，都可以跟数十亿人连结在一起。过去，人们最多跟一百多人一起工作，现在我们可以无限制地访问每个人的页面。当然，这不一定是好事。</p><p>-- <a href="https://www.factinate.com/editorial/editorial-why-are-you-addicted-to-your-phone/" target="_blank" rel="noreferrer">《为什么我们沉迷于手机？》</a></p><p>4、</p><p>梵高的一生是不可思议的。他艺术创作只有大约10年时间，一刻不停地疯狂画画，平均每36个小时创作一件作品，现在留下来有2000多件作品，其中900件是油画。</p><p>他没有受过艺术训练，只是一个人不断地练习，生前很少人知道他，更没人承认他。终身贫困，作为画家，在世时只卖出过一幅画。但是，现在他被公认是人类最伟大的艺术家之一。</p><p>-- <a href="https://news.ycombinator.com/item?id=32101044" target="_blank" rel="noreferrer">Hacker News 读者</a></p><p>5、</p><p>不要浪费你的无知。当你对一门知识毫无所知时，最容易问出简单而重要的问题。</p><p>一旦你习惯了某种现象或事物，认为它是理所当然时，思维就不知不觉受到了限制。</p><p>-- <a href="https://www.timescale.com/blog/how-postgresql-views-and-materialized-views-work-and-how-they-influenced-timescaledb-continuous-aggregates/" target="_blank" rel="noreferrer">David Kohn</a></p><h2 id="历史上的本周" tabindex="-1">历史上的本周 <a class="header-anchor" href="#历史上的本周" aria-label="Permalink to &quot;历史上的本周&quot;">​</a></h2><p>2021年（第 176 期）：<a href="https://www.ruanyifeng.com/blog/2021/09/weekly-issue-176.html" target="_blank" rel="noreferrer">中国法院承认 GPL 吗？</a></p><p>2020年（第 125 期）：<a href="https://www.ruanyifeng.com/blog/2020/09/weekly-issue-125.html" target="_blank" rel="noreferrer">数字人民币要取代谁</a></p><p>2019年（第 74 期）：<a href="https://www.ruanyifeng.com/blog/2019/09/weekly-issue-74.html" target="_blank" rel="noreferrer">信息的商业模式为什么不是收费</a></p><p>2018年（第 23 期）：<a href="https://www.ruanyifeng.com/blog/2018/09/weekly-issue-23.html" target="_blank" rel="noreferrer">统计学上的人生最大决定因素</a></p><h2 id="鸣谢" tabindex="-1">鸣谢 <a class="header-anchor" href="#鸣谢" aria-label="Permalink to &quot;鸣谢&quot;">​</a></h2><p>国产软件 <a href="https://flowus.cn?promotionChannel=GW_RYF_01" target="_blank" rel="noreferrer">FlowUs</a> 提供个人专栏服务（查看<a href="https://ruanyf-weekly.flowus.cn/?code=FLOWUS&amp;promotionChannel=WX_RYF_00" target="_blank" rel="noreferrer">周刊专栏</a>），集成了“文档+表格+网盘”，适合知识库、数据管理、文件存储多种用途。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202207/bg2022072108.webp" alt=""></p><p>（完）</p>',51),n=[o,l,i];function g(c,h,b,m,k,f){return r(),t("div",null,n)}const w=a(s,[["render",g]]);export{u as __pageData,w as default};
