import{_ as e,c as a,o as r,R as t}from"./chunks/framework.842ee581.js";const w=JSON.parse('{"title":"科技爱好者周刊：第 103 期","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊：第 103 期","slug":"科技爱好者周刊-第-103-期","link":"#科技爱好者周刊-第-103-期","children":[]}],"relativePath":"pages/weekly/issue-103.md","filePath":"pages/weekly/issue-103.md","lastUpdated":1686789644000}'),p={name:"pages/weekly/issue-103.md"},o=t('<h1 id="科技爱好者周刊-第-103-期" tabindex="-1">科技爱好者周刊：第 103 期 <a class="header-anchor" href="#科技爱好者周刊-第-103-期" aria-label="Permalink to &quot;科技爱好者周刊：第 103 期&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。</p><p>本杂志开源（GitHub: <a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">ruanyf/weekly</a>），欢迎提交 issue，投稿或推荐你的项目。</p><p>周刊讨论区的帖子<a href="https://github.com/ruanyf/weekly/issues/1148" target="_blank" rel="noreferrer">《谁在招人？》</a>，提供大量就业信息，欢迎访问或发布工作/实习岗位。</p><h2 id="封面图片" tabindex="-1">封面图片 <a class="header-anchor" href="#封面图片" aria-label="Permalink to &quot;封面图片&quot;">​</a></h2><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041604.jpg" alt=""></p><p>美国犹他州国家公园的工作人员，进入山洞为一只冬眠的熊安装追踪项圈。不料，这头熊没有睡着，瞪大眼镜看着他们。好在它没有攻击工作人员，麻药也很快发生了作用。（<a href="https://www.natgeomedia.com/explore/article/content-9781.html" target="_blank" rel="noreferrer">出处</a>）</p><h2 id="本周话题-信息的半衰期" tabindex="-1">本周话题：信息的半衰期 <a class="header-anchor" href="#本周话题-信息的半衰期" aria-label="Permalink to &quot;本周话题：信息的半衰期&quot;">​</a></h2><p>半衰期是一个物理学概念，指的是放射性物质减少一半质量（辐射衰弱）所需的时间。</p><p>这个概念其实很好理解。根据爱因斯坦最著名的质能公式 E=mc²，能量即质量，任何释放能量的物体都必然会减轻质量。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041605.jpg" alt=""></p><p>最近，我看到<a href="https://www.remote.tools/newsletter/knowledge-decay-and-half-life-of-information" target="_blank" rel="noreferrer">有人</a>提出了一个新的概念，他说信息也有半衰期。 <strong>信息的半衰期指的是，一半的信息量变得无关紧要或者彻底过时所需的时间。</strong></p><p>以报纸为例，出版当天的价值最大，第二天再看，价值至少减半，所以报纸的半衰期是一天到几天。微信和微博的半衰期也类似，早上发的朋友圈，晚上就不太有人看了。至于即时消息或聊天的半衰期就更短了，只有几个小时。</p><p>当代社会的趋势是，信息的半衰期越来越短，有一个词叫做“快餐文化”。以前，一本新书可以在书店里卖几年，现在卖几个月就下架了，被新的出版物取代。大部分书籍的半衰期就是几个月到一年。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041606.jpg" alt=""></p><p>如果你写过软件文档，就会对半衰期有切身的体会。一旦软件版本升级，以前文档的价值立刻大减。我为 React 0.14 版写过教程，短短几年中，它的 API 至少变了三次，每变一次，原始教程的价值就降低一半。一算就知道，经过三轮半衰期，文档的价值只剩下八分之一。</p><p><strong>我的建议是，不管你写什么，尽量写一些半衰期比较长的内容</strong> ，这样有利于提高内容的使用价值（也是提高你的劳动的价值）。有些朋友喜欢发朋友圈和社交媒体，花了很多时间，但是内容马上就过时了，也没法重复使用。</p><p>顺便说一句，这个周刊的半衰期就很短，过了一周就很少有人看了。我也在想，怎样才能延长周刊的半衰期，使得它有更多被用到的机会。</p><h2 id="前端必备数据和算法结构" tabindex="-1">前端必备数据和算法结构 <a class="header-anchor" href="#前端必备数据和算法结构" aria-label="Permalink to &quot;前端必备数据和算法结构&quot;">​</a></h2><p>前端工程师需要懂多少算法知识？</p><p>以前，前端工程师被戏称为“切图工程师”，所有的工作就是忠实地还原视觉稿，那时确实不太需要算法。</p><p>但是，自从单页应用 SPA 和全栈开发出现以后，一切都变了。今天如果你不懂算法，就只能停留在视觉还原这个层次，没法承担一些高级的开发任务。比如，虚拟 DOM 渲染的性能优化，或者 Node.js 缓存管理。事实上，现在大厂的前端面试，算法的内容也占了不小的比重。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041408.jpg" alt=""></p><p>这里有一份 <strong>开课吧</strong> 特别提供的免费视频资料《前端必备算法和数据结构》。重点讲述了算法思想的分类学习，包括递归、回溯、贪心、动态规划等。</p><p>感兴趣的小伙伴，长按下方二维码两次，现在就能 <strong>免费领取</strong> 这些视频教程。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041405.jpg" alt=""></p><p>温馨提示：资料数量有限，仅提供 259份。</p><h2 id="资讯" tabindex="-1">资讯 <a class="header-anchor" href="#资讯" aria-label="Permalink to &quot;资讯&quot;">​</a></h2><p>1、<a href="https://www.knowablemagazine.org/article/technology/2020/how-owls-fly-without-making-a-sound" target="_blank" rel="noreferrer">猫头鹰无声飞行之谜</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020040909.jpg" alt=""></p><p>猫头鹰是一种大型鸟类，张开翅膀后，翼展可以达到一两米。但是，它的飞行非常安静，飞到离你三米远的地方，你会毫无察觉。这是因为猫头鹰飞行引起的空气振动，频率很低，低于人类的听觉阈值。长久以来，生物学家和工程师都想解决猫头鹰无声飞行的奥秘，设计出更安静的风扇、涡轮叶片和飞机机翼。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020040908.jpg" alt=""></p><p>早先有人提出，猫头鹰的翅膀有三个特殊之处：上缘羽毛像梳子一样向前伸出，翅膀完全覆盖着一层柔软的天鹅绒般的羽毛，下缘羽毛形成了参差不齐的流苏（上图）。最近，美国科学家发表论文，提出借鉴猫头鹰翅膀，降低飞机机翼的后缘硬度，并且采用多孔结构，同时使其更具柔韧性。经过他们测试，可以降低噪音约10分贝。</p><p>2、<a href="https://www.dwellito.com/modular-homes" target="_blank" rel="noreferrer">模块化房屋</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041103.jpg" alt=""></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041102.jpg" alt=""></p><p>美国一家创业公司推出了模块化房屋。工厂做好各种房屋模块，直接用卡车拉到现场，进行安装，能够快速入住。价格从几千美元，一直到几十万美元。</p><p>它提供多种能源接口，可以接外部电源，也可以接发电机或者太阳能板。如果安装的是住宅，现场还要接入排水排污的管道。因为是模块化房屋，它的拆除和更换组件非常方便。不过，这种房屋不能建高层，所以只适用于乡下。</p><p>3、<a href="https://3g.163.com/tech/article/F9U2QL8O0514R9OJ.html" target="_blank" rel="noreferrer">无人测温车</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041201.jpg" alt=""></p><p>北京理工大学在校门口部署了一辆无人测温车，对进入校园人员进行测温。一旦发现谁体温偏高，就会发出警报声。</p><p>该车的原始功能是无人配送车，可以将包裹运往目的地。收件人到达现场后，该车顶部的摄像头会对收件人进行人脸识别。只有识别成功后，收件人才能打开车上的储物门取出包裹。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041202.jpg" alt=""></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041203.jpg" alt=""></p><p>4、<a href="https://grist.org/energy/as-oil-crashes-americas-untapped-energy-giant-could-rise/" target="_blank" rel="noreferrer">地热发电</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041303.jpg" alt=""></p><p>最近石油价格暴跌，意想不到的一个结果是，这为美国的地热发电带来了发展机遇。因为石油价格太低，石油公司不得不停产，闲置的挖掘机械正好为地热发电进行钻探。</p><p>越靠近地心，温度就越高，因此可以利用地下高温带来的能量进行发电。地热发电有很多优点，非常可靠，不会间断，没有任何污染。唯一的缺点是建设成本高，比太阳能发电厂贵得多。大部分成本发生在钻探，需要向地下钻探1000米以上，才能获得150度的高温，因此钻探价格下降，对它是最大的利好。</p><p>5、<a href="https://www.apple.com/newsroom/2020/04/apple-and-google-partner-on-covid-19-contact-tracing-technology/" target="_blank" rel="noreferrer">蓝牙追踪</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041101.jpg" alt=""></p><p>苹果宣布与谷歌联手，为手机提供蓝牙追踪 API，用来追踪病毒感染者的密切接触者。这大概是 iOS 与安卓的第一次合作吧。</p><p>这个 API 的原理是，手机的蓝牙向外部广播一个唯一标识符，其他手机接收到这个标识符，就会记录下来，有效期两周。如果你发现自己感染了病毒，就把自己的唯一标识符上传云端。其他手机会同步这个名单，一旦发现名单里面的标识符，曾经出现在日志里面，那个人就应该自我隔离了。详细的介绍可以参见<a href="https://joekent.nyc/google-apple-contact-tracing" target="_blank" rel="noreferrer">这里</a>。</p><p>6、<strong>一句话消息</strong></p><blockquote><ul><li><a href="https://milliondollarmetropolis.com/" target="_blank" rel="noreferrer">有人</a>做了 WebGL 版本的“百万美元格子主页”，永久出售页面的虚拟楼宇广告。我觉得挺有创意的。</li></ul></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041401.jpg" alt=""></p><blockquote><ul><li><a href="https://github.blog/2020-04-14-github-is-now-free-for-teams/" target="_blank" rel="noreferrer">GitHub</a> 宣布，团队的私库也免费了。这就是说，它基本上是一个免费网站了，核心功能几乎都不要钱，只剩下企业版收费了。</li></ul></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041407.jpg" alt=""></p><blockquote><ul><li><a href="http://demoscene-the-art-of-coding.net/2020/04/15/breakthrough-finland-accepts-demoscene-on-their-national-list-of-intangible-cultural-heritage-of-humanity/" target="_blank" rel="noreferrer">芬兰政府</a>批准数字文化 Demoskene 成为人类文化遗产，这可能是世界第一例软件相关的文化遗产。Demoskene 最常见的形式，就是爱好者的聚会，展示音乐、图形、视频等等。</li></ul></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041602.jpg" alt=""></p><blockquote><ul><li><a href="https://www.bloomberg.com/news/articles/2020-02-04/instagram-generates-more-than-a-quarter-of-facebook-s-sales" target="_blank" rel="noreferrer">Instagram</a> 2019年的销售收入是200亿美元。相比之下，Youtube 的销售收入是150亿美元，并且其中很大一部分还必须分给视频创作者。</li></ul></blockquote><blockquote><ul><li><a href="https://www.nytimes.com/2020/02/03/climate/japan-coal-fukushima.html" target="_blank" rel="noreferrer">日本</a>将在未来五年内，新建多达22个燃煤发电厂。这是近十年前福岛核灾难迫使日本关闭几乎所有核电厂的计划的后果。</li></ul></blockquote><blockquote><ul><li><a href="https://marginalrevolution.com/marginalrevolution/2020/01/ceo-ages-at-hire.html" target="_blank" rel="noreferrer">统计发现</a>，在过去的14年中，标准普尔500强公司 CEO 的上任年龄增长了14岁。这表明，美国大公司最近喜欢任命年龄大的 CEO。</li></ul></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/202001/bg2020020101.jpg" alt=""></p><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<a href="https://blog.appsignal.com/2020/04/09/ride-down-the-javascript-dependency-hell.html" target="_blank" rel="noreferrer">了解 JavaScript 依赖地狱</a>（英文）</p><p>安装 Gatsby.js 时，会下载19000个依赖模块。本文讲解如何分析 Node.js 的依赖关系。</p><p>2、<a href="https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/" target="_blank" rel="noreferrer">GitHub 的10个使用小技巧</a></p><p>官方介绍10个 GitHub 使用小技巧，很实用，推荐阅读。</p><p>3、<a href="https://www.mobile01.com/topicdetail.php?f=360&amp;t=6065849" target="_blank" rel="noreferrer">我家如何安装太阳能发电</a>（中文）</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041304.jpg" alt=""></p><p>台湾网友的一个论坛帖子，有大量图片，介绍他在自家屋顶安装太阳能板，很简单就达到了1000瓦的功率。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041305.jpg" alt=""></p><p>4、<a href="https://nora.codes/post/stop-making-students-use-eclipse/" target="_blank" rel="noreferrer">停止用 Eclipse 教 Java</a>（英文）</p><p>本文提出初学者的 Java 教学，不应该通过 IDE （比如 Eclipse）进行教学。应该这样一来，教学的重点就会变成 IDE 的用法，而不是语言本身。</p><p>6、<a href="https://news.ycombinator.com/item?id=22860140" target="_blank" rel="noreferrer">mv 命令无需两次键入文件名</a>（英文）</p><p><code>mv</code>命令用于为文件改名，需要输入两次文件名（旧名字和新名字）。要是你只改动一个字母，而文件名又特别长，这就很烦人。这里有一个 Bash 技巧，可以让你输入最小化。</p><p>7、<a href="https://angristan.xyz/2020/04/nextdns/" target="_blank" rel="noreferrer">我选择 NextDNS</a>（英文）</p><p>DNS 是上网必需的一个协议。现在很多服务商提供 DNS 级别的防广告和防追踪功能，本文作者介绍为什么选择 NextDNS。</p><p>8、<a href="https://luyuhuang.github.io/2020/03/06/dht-and-p2p.html" target="_blank" rel="noreferrer">分布式哈希表 (DHT) 和 P2P 技术</a>（中文）</p><p>分布式的 P2P 网络通常使用分布式哈希表（DHT）进行路由，查找周围的节点。本文介绍 DHT 的基本知识，以及算法的实现原理。（@<a href="https://github.com/ruanyf/weekly/issues/1178" target="_blank" rel="noreferrer">luyuhuang</a> 投稿）</p><p>9、<a href="https://fuckcloudnative.io/posts/docker-images-part1-reducing-image-size/" target="_blank" rel="noreferrer">Docker 镜像构建教程：减小镜像体积</a>（中文）</p><p>自己制作的 Docker 镜像文件，往往体积很大。本文介绍如何一步步压缩镜像文件的体积，将 C 语言的 hello world 从最初的 1 GB 压缩到 94 KB。（@<a href="https://github.com/ruanyf/weekly/issues/1184" target="_blank" rel="noreferrer">lupus721</a> 投稿）</p><p>10、<a href="https://www.hashtagcoder.dev/blog/director-of-engineering" target="_blank" rel="noreferrer">CTO 干什么？</a>（英文）</p><p>作者原本是一个6人小公司的工程师，后来因为公司业务快速扩张，他被提拔成工程总监（CTO）。他花了三年时间，才搞明白什么是 CTO 的职责，分成产品、流程、人员三部分。</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://markmap.js.org/" target="_blank" rel="noreferrer">markmap-lib</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041001.jpg" alt=""></p><p>一个将 Markdown 转为思维导图的开源工具。</p><p>2、<a href="https://codefence.io/" target="_blank" rel="noreferrer">codefence</a></p><p>一个可以嵌入网页的交互式代码编辑器，用户能够直接在网页上输入代码并运行，得到结果。服务端是 Docker 容器，目前支持十几种主流的计算机语言。</p><p>3、<a href="https://github.com/silverwind/droppy" target="_blank" rel="noreferrer">droppy</a></p><p>一个可以自己架设的网盘服务，适合搭建在内网，从 Web 界面上传和下载文件。</p><p>4、<a href="https://github.com/aind-containers/aind" target="_blank" rel="noreferrer">aind</a></p><p>一个装在 Docker 容器里面的安卓模拟器。</p><p>5、<a href="https://jott.live/" target="_blank" rel="noreferrer">jott.live</a></p><p>一个轻量级 Markdown 笔记网站，不需要注册，只需要为文档指定密码，适合随手写一点东西分享出去。</p><p>6、<a href="https://chrome.google.com/webstore/detail/tablist/eagbohciligljbgpbdbflaloangiodhe" target="_blank" rel="noreferrer">Tablist</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041302.jpg" alt=""></p><p>Chrome 浏览器插件，可以一次性列出所有 Tab 的网页 URL，方便复制。</p><p>7、<a href="https://github.com/brenner8023/iKeep" target="_blank" rel="noreferrer">iKeep</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041404.jpg" alt=""></p><p>一个开源的时间规划微信小程序。（@<a href="https://github.com/ruanyf/weekly/issues/1185" target="_blank" rel="noreferrer">brenner8023</a> 投稿）</p><p>8、<a href="https://feeds.pub/" target="_blank" rel="noreferrer">Feeds Pub</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041601.jpg" alt=""></p><p>一个社会化的 RSS 阅读器，除了常规的 RSS 聚合功能外, 还加入了一些社会化的属性。（@<a href="https://github.com/ruanyf/weekly/issues/1189" target="_blank" rel="noreferrer">timqian</a> 投稿）</p><p>9、<a href="https://next.json-generator.com/" target="_blank" rel="noreferrer">JSON Generator</a></p><p>一个生成虚拟 JSON 数据的在线工具，可以根据给定的模式，自动生成 JSON 数据。</p><p>10、<a href="https://branca.io/" target="_blank" rel="noreferrer">Branca</a></p><p>一种安全令牌的数据格式，比 JWT 更安全，同类项目还有 <a href="https://paseto.io/" target="_blank" rel="noreferrer">Paseto</a>。</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、 <a href="https://jott.live/html/nyc_cams" target="_blank" rel="noreferrer">NYC Cams</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041301.jpg" alt=""></p><p>实时查看纽约街道上的摄像头。</p><p>2、<a href="http://dev.stephendiehl.com/hask/" target="_blank" rel="noreferrer">Haskell 语言入门</a></p><p>英文的免费电子书。</p><p>3、<a href="https://academy.zenva.com/product/godot-101-game-engine-foundations/" target="_blank" rel="noreferrer">Godot 101 –游戏引擎基础</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041311.jpg" alt=""></p><p>游戏引擎 Godot 的免费教程。</p><p>4、<a href="https://tools.ietf.org/html/rfc1180" target="_blank" rel="noreferrer">RFC1180: TCP / IP教程</a></p><p>一个早期的 TCP/IP 协议的英文教程，作为 RFC 1180 提交了。</p><p>5、<a href="https://a.temporaryrecord.com/" target="_blank" rel="noreferrer">《斯诺登自传》</a></p><p>斯诺登自传《永久记录》，未删节的简体中文版 PDF 下载，作者本人授权。</p><p>6、<a href="https://news.ycombinator.com/item?id=22279051" target="_blank" rel="noreferrer">x64 汇编的学习资源</a>（英文）</p><p>这是 Hacker News 的讨论帖，列出了网上免费的 x86 汇编语言的学习资源。</p><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>1、<a href="https://en.wikipedia.org/wiki/Gu%C3%A9delon_Castle" target="_blank" rel="noreferrer">盖德隆城堡</a></p><p>盖德隆城堡是法国的一个实验性考古项目，采用中世纪的材料和方法，从头修建一座城堡。</p><p>1997年开始动工，由于不采用现代机械，所以修得很慢，预计2023年完工。</p><p>2000年。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041306.jpg" alt=""></p><p>2006年。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041307.jpg" alt=""></p><p>2009年。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041308.jpg" alt=""></p><p>2015年。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041309.jpg" alt=""></p><p>2019年。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041310.jpg" alt=""></p><p>2、<a href="https://www.flickr.com/photos/biodivlibrary/" target="_blank" rel="noreferrer">生物插图下载</a></p><p>生物多样性图书馆（Biodiversity Heritage Library，BHL）提供15000多张生物插图，可以免费下载，都来自历史上的各种资料。</p><p><img src="https://www.wangbase.com/blogimg/asset/202002/bg2020021103.jpg" alt=""></p><p><img src="https://www.wangbase.com/blogimg/asset/202002/bg2020021104.jpg" alt=""></p><p><img src="https://www.wangbase.com/blogimg/asset/202002/bg2020021105.jpg" alt=""></p><p><img src="https://www.wangbase.com/blogimg/asset/202002/bg2020021106.jpg" alt=""></p><p><img src="https://www.wangbase.com/blogimg/asset/202002/bg2020021107.jpg" alt=""></p><p><img src="https://www.wangbase.com/blogimg/asset/202002/bg2020021108.jpg" alt=""></p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<a href="https://zh.wikipedia.org/wiki/%E5%A4%A9%E5%9F%BA%E5%8B%95%E8%83%BD%E6%AD%A6%E5%99%A8" target="_blank" rel="noreferrer">天基动能武器</a></p><p>天基动能武器是一种处于概念阶段的大规模毁灭性武器，所有技术都已经实现了。</p><p>最早的构想来自将核导弹布署于太空卫星上，战时直接落在敌人国土上方，这样将极大缩减对方反应时间。然而，不久后就有人提出任何有质量的物体从卫星高度坠落，其杀伤力与陨石撞地球无异，不需要核武也能达成核武类似效果。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041002.jpg" alt=""></p><p>这种概念日渐流行，因为核武器的辐射污染和政治敏感性，使得首先用核武器的正当性在国际社会很难立足，核弹头在太空的维持费用也高得惊人。而这种新型天基武器反应速度快、命中精度高，且没有辐射，也不违反任何目前国际核武条约，威力大小透过弹体质量容易调整。</p><p>理论上，一块宽30厘米、长6.1米、重量达数吨的钨、钛或铀金属棒状弹体可穿过大气层燃烧阶段，从距离地面1000千米的太空落下的时速可达15000千米以上，相当于11.5吨 TNT 炸药，产生的动能撞击可以比拟小型战术核武器。</p><p>2、<a href="https://baike.baidu.com/item/%E9%98%BF%E6%B3%A2%E7%BD%9713%E5%8F%B7/3965" target="_blank" rel="noreferrer">阿波罗13号事故</a></p><p>50年前的本周，1970年4月13日，美国阿波罗13号登月飞船发生事故。但是，三名宇航员成功返回地球，成为宇航史的传奇。</p><p>当时，一个氧气罐的传感器发生故障，宇航员检查开关时，发生了爆炸，飞船受到了一定的损毁。最要命的是，两个氧气罐的氧气全部丢失，需要氧气维持运作的燃料电池，只剩下10个小时的电力。</p><p>为了省电，宇航员只能关闭了取暖系统，并且放弃主飞船，乘坐登月舱返回地球。登月舱原本的设计是，供两名宇航员使用两天，如今却挤进了三名宇航员。二氧化碳的浓度急剧上升，地面指挥中心想出了一个办法，指导宇航员用仅存的物资，拼装出了一个过滤器，成功降低了登月舱的二氧化碳浓度。</p><p>飞船的主推进系统已经不再可靠，他们只好在绕过月球背面以后，发射了一枚火箭进行加速，然后向地球自由坠落。返回途中，三位宇航员被告知不可将尿液或其他液体排出舱外，因为这会影响登月舱的坠落轨道。</p><p>整个过程持续了四天，三位宇航员最终安全返回了地球。为了分析事故起因，指挥中心要求宇航员为飞船拍摄照片，成为了事后珍贵的历史资料。下面就是在进入地球大气层之前，他们自拍的三人合影。</p><p><img src="https://www.wangbase.com/blogimg/asset/202004/bg2020041403.jpg" alt=""></p><p>事后分析，整个事故最幸运的一点是，飞船是在去月球途中出现问题，而非回程。如果在登月后发生事故，由于剩余资源会大大减少，宇航员将不太可能生还。若正常完成登月任务，登月舱会被抛弃，三位宇航员就没有了救生舱。</p><h2 id="言论与数字" tabindex="-1">言论与数字 <a class="header-anchor" href="#言论与数字" aria-label="Permalink to &quot;言论与数字&quot;">​</a></h2><p>1、</p><p>501程序员指的是，一到 5:01 就离开办公室下班回家的程序员。</p><p>-- 《<a href="https://501manifesto.dev/" target="_blank" rel="noreferrer">501 程序员宣言</a>》</p><p>2、</p><p>软件行业最大的问题之一就是必须不断招聘新人。因为软件持续不断地损毁，总是需要拆除并完全重建。</p><p>-- 《<a href="https://www.neilwithdata.com/developer-hiring" target="_blank" rel="noreferrer">软件行业最大的问题</a>》</p><p>3、</p><p>他太热爱数学，以至于无法想象，为什么学生会在他的班上关心自己的成绩。</p><p>-- 《<a href="https://news.ycombinator.com/item?id=22845374" target="_blank" rel="noreferrer">数学家约翰·康威去世了</a>》</p><p>4、</p><p>已知对人类有致病性的微生物，大约有1400种，其中约500种细菌，约200种病毒，其他为各种真菌、蠕虫和原生动物。</p><p>-- <a href="https://inhabitingtheanthropocene.com/2017/10/18/pathogens-and-the-anthropocene-germs-genes-geography-part-1/" target="_blank" rel="noreferrer">《病原体和人类世》</a></p><p>5、</p><p>如果要长期保存一样东西，就不要用不能持久的东西作为它的基础。</p><p>有一些技术，就不适合用来建立长期的网站。你能想象连续25年运行一个 WordPress 网站吗？它依赖的 PHP 版本将在很早之前就不能运行了。</p><p>-- <a href="https://news.ycombinator.com/item?id=22326930" target="_blank" rel="noreferrer">HN 读者</a>，评论一个 FrontPage 做的网站，18年后仍在更新。</p><p>6、</p><p>几年前，我开设了一个社区网站，经常有人来捣乱，加黑名单、封 IP 地址都没用，他们会更换用户名和 IP 地址。</p><p>最终，我想了一个办法，把每页的渲染时间增加为5到25秒，让网站体验不好。过了几天，这些人就不再出现了。</p><p>-- <a href="https://news.ycombinator.com/item?id=22321023" target="_blank" rel="noreferrer">HN 读者</a></p><h2 id="回顾" tabindex="-1">回顾 <a class="header-anchor" href="#回顾" aria-label="Permalink to &quot;回顾&quot;">​</a></h2><p>去年的本周：<a href="http://www.ruanyifeng.com/blog/2019/04/weekly-issue-52.html" target="_blank" rel="noreferrer">《周刊第 52 期》</a></p><p><img src="https://www.wangbase.com/blogimg/asset/201904/bg2019041901.jpg" alt=""></p><h2 id="订阅" tabindex="-1">订阅 <a class="header-anchor" href="#订阅" aria-label="Permalink to &quot;订阅&quot;">​</a></h2><p>这个周刊每周五发布，同步更新在<a href="http://www.ruanyifeng.com/blog" target="_blank" rel="noreferrer">阮一峰的网络日志</a>和<a href="http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97" target="_blank" rel="noreferrer">微信公众号</a>。</p><p>微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg" alt=""></p><p>（完）</p>',190),s=[o];function l(g,n,i,h,b,c){return r(),a("div",null,s)}const f=e(p,[["render",l]]);export{w as __pageData,f as default};
