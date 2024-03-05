import{_ as a,c as t,o as r,a4 as e,m as p}from"./chunks/framework.CVSB-K29.js";const w=JSON.parse('{"title":"科技爱好者周刊（第 193 期）：前端与后端，谁更难？","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊（第 193 期）：前端与后端，谁更难？","slug":"科技爱好者周刊-第-193-期-前端与后端-谁更难","link":"#科技爱好者周刊-第-193-期-前端与后端-谁更难","children":[]}],"relativePath":"pages/weekly/issue-193.md","filePath":"pages/weekly/issue-193.md","lastUpdated":1686738890000}'),o={name:"pages/weekly/issue-193.md"},l=e('<h1 id="科技爱好者周刊-第-193-期-前端与后端-谁更难" tabindex="-1">科技爱好者周刊（第 193 期）：前端与后端，谁更难？ <a class="header-anchor" href="#科技爱好者周刊-第-193-期-前端与后端-谁更难" aria-label="Permalink to &quot;科技爱好者周刊（第 193 期）：前端与后端，谁更难？&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。（<strong>[通知] 下周欢度春节，周刊暂停，2月11日恢复。</strong>）</p><p>本杂志开源（GitHub: <a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">ruanyf/weekly</a>），欢迎提交 issue，投稿或推荐科技内容。</p><p>周刊讨论区的帖子<a href="https://github.com/ruanyf/weekly/issues/2139" target="_blank" rel="noreferrer">《谁在招人？》</a>，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。</p><h2 id="封面图" tabindex="-1">封面图 <a class="header-anchor" href="#封面图" aria-label="Permalink to &quot;封面图&quot;">​</a></h2><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022012012.webp" alt="" loading="lazy"></p><p>第41届全国专业冰雕比赛，1月6日开始，在哈尔滨市兆麟公园举行。冰冻的湖面上，艺术家们雕刻自己的作品。黄昏时，雪地上亮起灯光，宛若仙境。（<a href="http://news.china.com.cn/2022-01/08/content_77976699.htm" target="_blank" rel="noreferrer">via</a>）</p><h2 id="本周话题-前端与后端-谁更难" tabindex="-1">本周话题：前端与后端，谁更难？ <a class="header-anchor" href="#本周话题-前端与后端-谁更难" aria-label="Permalink to &quot;本周话题：前端与后端，谁更难？&quot;">​</a></h2><p><a href="https://news.ycombinator.com/" target="_blank" rel="noreferrer">“黑客新闻”</a>（Hacker News）是美国最大的程序员社区，我每天都看，周刊的很多内容就来自那里。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011601.webp" alt="" loading="lazy"></p><p>有一天，我看到一个帖子。</p><p>一个前端程序员<a href="https://news.ycombinator.com/item?id=29328111" target="_blank" rel="noreferrer">说</a>，他不想干前端了，咨询大家意见，转到后端是否可行。</p><blockquote><p>我从2007年开始从事前端开发，到了现在，很多新技术已经不擅长了。每次打开 Chrome 开发者工具，看到那些我不知道的新功能，我总是选择忽略。</p><p>很多我熟悉的工具和功能，都已经或将被弃用。现在的前端开发都在 npm 环境，经常有难懂的报错，好不容易搜到答案，又要花很多时间修复本地开发环境。</p><p>即使那些最简单的任务，现在的开发方式也比以前复杂，要考虑很多边界场景。我能够完成的工作，不断得缩小。</p><p><strong>我失去了继续在前端工作的信心，转到后端，会不会容易一些。</strong></p></blockquote><p>简单说就是，他觉得前端越来越难，自己跟不上，无法坚持下去了。他想知道，后端会不会更容易一些，转成后端开发是否可行？</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011602.webp" alt="" loading="lazy"></p><p>可以想象，讨论这种问题，一定是众说纷纭。</p><p>原帖下面，各种意见都有。支持的一方说，前端现在确实变得非常复杂，技术工具的更新速度太快，开发和维护的难度超过了后端。</p><p>反对的一方说，后端也很难，如果你适应不了 Node.js，改行写 C++/Java/Go 也会很痛苦，千万不要草率做决定。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011603.webp" alt="" loading="lazy"></p><p>难易是主观感受，没有办法精确衡量，人与人之间不可比较。所以我觉得，讨论这种问题，不可能有统一的看法。</p><p>但是，我很喜欢下面<a href="https://news.ycombinator.com/item?id=29329313" target="_blank" rel="noreferrer">这个发言</a>，说出了前端与后端有一个重要差异，往往被忽视。</p><blockquote><p><strong>前端的问题不是难，而是它面对最终用户。只要用户的喜好和口味发生变化，前端就必须跟上。</strong></p><p>这导致前端不得不快速变化，因为用户的口味正在越来越快地改变。</p><p>后端不需要面对最终用户，需要解决的都是一些经典的计算机科学问题，比如算法和数据结构。这些问题很少变化，可以利用以前的研究成果，所以变化速度慢得多。</p></blockquote><p>这段话的意思是，前端和后端的差异，不在于难度，或者说各有各的难，而是所要解决的问题不一样。</p><p>前端的特征是混乱、嘈杂、易变，因为这些都是最终用户的特征，前端需要匹配用户。 <strong>如果你不适应混乱、嘈杂、易变的开发，你就很难适应前端。</strong></p><p>后端面对的是硬件、算法和数据结构，所以比较稳定。但是会涉及到计算机科学、语言设计、编译原理等高深的内容，想要搞懂这些东西，绝非易事。</p><p>所以，你判断自己适合前端，还是适合后端？除了考虑现实因素和外部环境，也要考虑自己的性格爱好。实话实说，如果性格比较安静，喜欢思考抽象和理论的问题，这个人可能不一定适合前端。</p><p>大家怎么看这个问题，你会给他什么建议？如果让你回到从前，你会选择从事前端还是后端？</p><h2 id="给孩子的财经小课" tabindex="-1">给孩子的财经小课 <a class="header-anchor" href="#给孩子的财经小课" aria-label="Permalink to &quot;给孩子的财经小课&quot;">​</a></h2><p>这里的很多读者已经为人父母，有了小朋友。</p><p>小朋友的特点，就是喜欢提问，各种各样的问题都有。如果是宇宙奥秘、大自然的问题，那还容易回答，如果是社会经济的问题，反而不容易回答。</p><p>不信的话，看看下面这些小朋友的问题，你能回答吗？</p><blockquote><ul><li>为什么有最低工资？</li><li>为什么每个电影院都会卖爆米花？</li><li>当了电竞选手，是不是玩游戏也能赚钱？</li><li>国家多印钱，大家都会变富吗？</li></ul></blockquote><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011501.webp" alt="" loading="lazy"></p><p>本周向大家介绍一档音频节目 <strong>《给孩子的财经小课》</strong>，专门为小朋友制作，解答各种社会经济问题，增加小朋友的经济知识，进行财商教育，帮助他们理解社会，培养思辩能力。</p><p>主讲人是孙明展老师。他是周刊的老朋友，也是财经专家，中山大学科班出身，先在世界500强保险公司工作，后来辞职开了一家理财咨询公司。</p><p>他家有两个小朋友，一个12岁，另一个6岁。他经常回答大儿子的问题，久而久之就产生了一个念头：为什么不录制成音频节目，讲给更多的孩子听呢？</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011502.webp" alt="" loading="lazy"></p><p>他从2020年开始录，每周录一期。第一年结束以后，很多小朋友都很喜欢，追着听连载，一些家长说自己也受益匪浅。2021年，他又接着录制了第二季。下面是其中的一些标题。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011503.webp" alt="" loading="lazy"></p><p>这个节目的宗旨就是希望，让小朋友从生活小事了解经济学，了解世界如何运转，开启理性思维和财经思维。如果家里的小朋友，正在上小学或初中，听了应该很有帮助。家长也可以一起听，不仅增加跟孩子的沟通，本身也能增加一些经济知识。</p><p>大家可以去<a href="https://www.feimooc.com/user/1255718" target="_blank" rel="noreferrer">“飞慕课”</a>试听（最好使用桌面电脑访问），免费的内容有20讲（含第一季和第二季）。如果觉得讲得不错，可以付费解锁所有内容。第二季的《给孩子的财经小课》原价199元，周刊的读者只需要69元！</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011504.webp" alt="" loading="lazy"></p><p>这个价格包括第二季的所有52期节目，都是线上音频的形式，每节课10-20分钟，可以随时无限次回听；还包括额外的4次直播课，让孩子跟孙老师直接互动。另外再附赠第一季的55期节目，以及一本精美的财商书籍。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011715.webp" alt="" loading="lazy"></p><p>微信扫描上方二维码，或者点击这个链接<a href="http://m.feimooc.com/courseDetail/824?sencecode=fei_7125&amp;spreadType=teacherCopy" target="_blank" rel="noreferrer">《给孩子的财经小课》</a>，就可以试听和购课。付款的朋友，别记了添加助教微信，免费领取礼品：第一季财经小课 + 精美财商书籍。</p><h2 id="科技动态" tabindex="-1">科技动态 <a class="header-anchor" href="#科技动态" aria-label="Permalink to &quot;科技动态&quot;">​</a></h2><p>1、<a href="https://www.bbc.com/news/entertainment-arts-59986543" target="_blank" rel="noreferrer">最老的唱片出版者</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011807.webp" alt="" loading="lazy"></p><p>美国钢琴家露丝·史兰倩斯卡（Ruth Slenczynska）已经97岁了，她定于今年3月18日发行一张新的专辑。这使她成为世界上年龄最大的发行专辑的人。</p><p>她曾经是一个钢琴神童，四五岁时就出名了。她5岁登台表演的视频，今天还能在 <a href="https://www.youtube.com/watch?v=SPZiuPw-LLs" target="_blank" rel="noreferrer">Youtube</a> 上看到。这段视频是1930年拍摄的，整整92年前。这意味着，她大概是目前还活着的、曾经出现在最古老视频里面的人。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011808.webp" alt="" loading="lazy"></p><p>2、<a href="https://www.archdaily.com/964050/amsterdams-floating-neighbourhood-schoonschip-offers-a-new-perspective-on-circularity-and-resiliency" target="_blank" rel="noreferrer">浮动房屋</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021120801.webp" alt="" loading="lazy"></p><p>荷兰是一个洼地国家，大部分国土不高于海平面，所以经常淹水，并且住房短缺。该国建筑师正在尝试，在水面上架设住宅。</p><p>他们在首都阿姆斯特丹的河道里面，建了46套浮动住宅。这种房子架在钢柱上面，可以随着水位上下浮动，所以不担心涨水。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021120802.webp" alt="" loading="lazy"></p><p>每套住宅都有浮桥与岸边相连，配有太阳能供电，以及废水处理系统，尽量实现水电自给自足。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021120804.webp" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021120803.webp" alt="" loading="lazy"></p><p>3、<a href="https://www.ifanr.com/1466653" target="_blank" rel="noreferrer">病毒检测新方法</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011701.webp" alt="" loading="lazy"></p><p>检测新冠病毒的方法，目前主要是核酸。缺点是需要主动去测试，如果你不去测，就不知道是否感染了。这样很难提前发现。</p><p>耶鲁大学的团队，发明了一种新方法，即使当事人没有察觉，也能测出有没有感染病毒。他们做了一种可穿戴设备，叫做 Fresh Air Clip，可以夹在衣领上，捕捉空气中的病毒颗粒。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011702.webp" alt="" loading="lazy"></p><p>出门时，你戴着它。一段时间后，再交给实验室检测上面有没有病毒。如果有的话，就意味着，你今天的路线上遇到过感染者。并且，还可以通过病毒量，判断暴露的水平。</p><p>4、<a href="https://finance.sina.com.cn/jjxw/2022-01-14/doc-ikyakumy0382310.shtml" target="_blank" rel="noreferrer">牦牛机器人</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011710.webp" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022012101.webp" alt="" loading="lazy"></p><p>我国最近研制出了“电动牦牛”，速度可达每小时10公里，可负重160公斤，是世界上体形最大、载重和越野能力最强的电驱动四足仿生机器人。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011711.webp" alt="" loading="lazy"></p><p>它能穿越山林、山地、雪地，主要用于负重运输，以及在不利于士兵执行任务的环境中抵近侦察。从照片来看，它可能不能爬山，否则用处就更大了。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011712.webp" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011714.webp" alt="" loading="lazy"></p><p>5、<a href="https://cn.nikkei.com/industry/scienceatechnology/47301-2022-01-13-02-19-33.html" target="_blank" rel="noreferrer">超导输电</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011311.webp" alt="" loading="lazy"></p><p>日本即将把“超导输电”投入实用，已在宫崎县布设完毕目前世界上最长的超导输电线路。这种线路最大特点是，电线最内圈有一个密封层，里面充满了液氮冷却剂，浸泡着导体。</p><p>“超导现象”指的是导体在某个低温下，电阻会突然消失，这样就大大降低了输电的线路损耗。但是，以往需要冷却到摄氏零下269度才能实现超导，日本因为开发出了零下196度就能实现超导的材料，使得冷却剂可以从昂贵的液氦改换成每公斤数百日元的液氮，后者价格不到前者的十分之一。由于冷却成本大幅下降，因此可以投入实用了。（<a href="https://github.com/ruanyf/weekly/issues/2162" target="_blank" rel="noreferrer">@wingor</a> 投稿）</p><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<a href="https://mp.weixin.qq.com/s/QRiraXxdswb333H0ULA3ng" target="_blank" rel="noreferrer">中国最大的核桃树</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011814.webp" alt="" loading="lazy"></p><p>一个研究生在云南省发现中国野外最大核桃树的故事。该树高达40余米，胸径约2米，树龄超过300年。</p><p>2、<a href="https://mp.weixin.qq.com/s/hZ6KeQCFzyWbQw_J1fDjug" target="_blank" rel="noreferrer">我如何走上字库设计这条路</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011816.webp" alt="" loading="lazy"></p><p>作者讲述自己怎么开始设计字库，最终开了一家创业公司，以销售原创字库为生。</p><p>3、<a href="https://www.fao.org/forest-resources-assessment/2020/zh" target="_blank" rel="noreferrer">2020 年全球森林资源报告</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021122007.webp" alt="" loading="lazy"></p><p>这是联合国粮农组织的官方报告，展示了全世界目前的森林资源状况，有中文版。这个网页的可视化做得很好，值得借鉴。</p><p>4、<a href="https://understandlegacycode.com/blog/refactoring-and-defactoring/" target="_blank" rel="noreferrer">什么是重构？</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021122013.webp" alt="" loading="lazy"></p><p>本文是马丁·福勒的名著《重构》的读后感，讨论到底什么是软件重构，特别提出重构不应该改变软件行为。</p><p>5、<a href="https://blog.openreplay.com/is-it-time-for-the-javascript-temporal-api" target="_blank" rel="noreferrer">JavaScript Temporal API 简介</a>（英文）</p><p>Temporal API 是 JavaScript 下一代日期和时间的标准库，目前是第三阶段提案。本文对这个 API 做一个简单介绍。</p><p>6、<a href="https://coderoasis.com/implementing-rsa-from-scratch-in-python/" target="_blank" rel="noreferrer">使用 Python 从头实现 RSA 算法</a>（英文）</p><p>本文用 Python 代码讲解了 RSA 算法（公钥加密）是怎么回事，文章不长。</p><p>7、<a href="https://developer.chrome.com/docs/devtools/recorder/" target="_blank" rel="noreferrer">Chrome 开发者工具的录制功能</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021120204.webp" alt="" loading="lazy"></p><p>Chrome 浏览器的开发者工具可以录制用户操作了，并且可以导出脚本供无头浏览器 Puppeteer 使用。</p><p>8、<a href="https://thenewstack.io/an-introduction-to-queue-theory-why-disaster-happens-at-the-edges/" target="_blank" rel="noreferrer">队列理论简介</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021111507.jpg" alt="" loading="lazy"></p><p>软件开发的很多问题，其实都是队列问题，比如缓存、并行操作、延迟等等。本文介绍队列理论的一些基本知识，主要是如何防止队列堵塞。</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://github.com/babysor/MockingBird" target="_blank" rel="noreferrer">MockingBird</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021122803.webp" alt="" loading="lazy"></p><p>一个基于机器学习的中文语音克隆库，只要5秒的原始讲话录音，就能克隆该声音，让它说出任意给定文本。</p><p>2、<a href="https://github.com/einaregilsson/Redirector" target="_blank" rel="noreferrer">Redirector</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021122501.webp" alt="" loading="lazy"></p><p>一个非常有用的浏览器插件，可以指定 URL 规则，一旦匹配，就会自动跳转到指定的网址。</p><p>3、<a href="https://github.com/cshum/imagor" target="_blank" rel="noreferrer">Imagor</a></p><p>一个 Go 语言写的图像处理服务器，可以快速返回各种大小的图像缩略图。</p><p>4、<a href="https://gatsby.video/" target="_blank" rel="noreferrer">Gatsby</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202110/bg2021101101.jpg" alt="" loading="lazy"></p><p>一个开源的点对点视频分享平台，视频存放在 IPFS 上面。</p><p>5、<a href="https://repl.leaningtech.com/" target="_blank" rel="noreferrer">CheerpX&#39;s REPL</a></p><p>一个网页的命令行 REPL 环境，目前支持 Python、Ruby、NodeJS、Lua、C++ 五种语言。</p><p>6、<a href="https://tikolu.net/emojimix/" target="_blank" rel="noreferrer">emojimix</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021112304.jpg" alt="" loading="lazy"></p><p>这个网站支持将两个不同的 Emoji 符号，合并成一个，比如上图是太阳和熊猫的合成图。</p><p>7、<a href="https://github.com/teslamotors/light-show" target="_blank" rel="noreferrer">特斯拉灯光秀</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021122505.webp" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021122504.webp" alt="" loading="lazy"></p><p>一个很好玩的项目，让特斯拉汽车表演一段灯光秀，还能配乐，需要用到一个叫做 xlights 的工具。</p><p>8、<a href="https://fakeyou.com/" target="_blank" rel="noreferrer">FakeYou Text to Speech</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021122602.webp" alt="" loading="lazy"></p><p>该网站使用欧美名人的口音，朗读用户输入的任何文本，只支持英文。目前有80多个名人口音，包括克林顿、《辛普森一家》的 Homer 等。</p><p>9、<a href="https://jodd.org/" target="_blank" rel="noreferrer">Jodd</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022011804.webp" alt="" loading="lazy"></p><p>一个 Java 工具包，包含一些实用的小工具，增强 JDK 的功能，包体积不到 1.7M。</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、<a href="https://vgsmproject.com/" target="_blank" rel="noreferrer">电子游戏中的自动售货机</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021121115.webp" alt="" loading="lazy"></p><p>这个网站收集各种电子游戏里面出现的自动售货机，比如上图是 Fortnight 里面的自动售货机。</p><p>2、<a href="https://www.versionmuseum.com/history-of/all-windows-control-panels" target="_blank" rel="noreferrer">Windows 控制面板的演变</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021121801.webp" alt="" loading="lazy"></p><p>该网页收集了历代 Windows 控制面板的外观变化，从 Windows 1.0 到 Windows 10。</p><p>3、<a href="https://ihavenotv.com/" target="_blank" rel="noreferrer">纪录片网站</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021111506.jpg" alt="" loading="lazy"></p><p>这个网站提供3500多部高质量纪录片免费在线观看，不过都是英文的。</p><p>4、<a href="https://betterprogramming.pub/how-to-become-a-blockchain-engineer-fa4386a0504f" target="_blank" rel="noreferrer">区块链工程师的学习材料</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021121802.webp" alt="" loading="lazy"></p><p>这个网页列出了区块链工程师的英文学习资源。</p><p>5、<a href="https://medium.com/@iamjwr/software-engineer-roadmap-via-books-a6aabdc2589c" target="_blank" rel="noreferrer">软件工程师书单推荐</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021122005.webp" alt="" loading="lazy"></p><p>作者推荐了12本英文专业书籍，推荐软件工程师阅读。</p><h2 id="图片和视频" tabindex="-1">图片和视频 <a class="header-anchor" href="#图片和视频" aria-label="Permalink to &quot;图片和视频&quot;">​</a></h2><p>1、<a href="https://www.nakam.info/jp/works/kamikatsu0/" target="_blank" rel="noreferrer">到处都是窗的建筑</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021111301.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021111305.jpg" alt="" loading="lazy"></p><p>日本德岛县上胜町的资源回收中心，是一个木结构建筑。除了建筑主体的木材，其它建筑材料都使用了当地的废弃物品，比如地面使用了回收的玻璃和陶器。</p><p>它最引人注目的地方，就是整个建筑有700多扇窗子，都来自以前的老屋子。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021111302.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021111303.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021111306.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021111307.jpg" alt="" loading="lazy"></p><p>2、<a href="https://hello.eboy.com/pool/~Pixorama/1?q=project" target="_blank" rel="noreferrer">城市像素画</a></p><p>eboy 是国外的一个艺术团体，以像素画著称。他们的城市像素画系列（Pixoramas）非常有名。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021112106.jpg" alt="" loading="lazy"></p><p>他们画笔下的城市，有着未来主义风格，充满了机器人和汽车。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202111/bg2021112104.jpg" alt="" loading="lazy"></p><p>完成这样一张精细的作品，需要六周到八周。<a href="https://shop.eboy.com/" target="_blank" rel="noreferrer">官网商店</a>出售复制品，价格为一张几十欧元。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022012102.webp" alt="" loading="lazy"></p><p>3、<a href="https://www.youtube.com/watch?v=P0wL65A3Iyo&amp;ab_channel=CNET" target="_blank" rel="noreferrer">下一代显示屏</a></p><p>三星公司在拉斯维加斯举行的消费电子展 CES 2022 上，展示了该公司正在开发的下一代折叠屏和柔性屏，请看下面的<a href="https://v.qq.com/x/page/t3318axh68i.html" target="_blank" rel="noreferrer">一分钟视频</a>。</p>',162),s=p("iframe",{frameborder:"0",src:"https://v.qq.com/txp/iframe/player.html?vid=t3318axh68i",allowFullScreen:"true",width:"600",height:"400"},null,-1),g=e('<p>折叠屏的出现，使得手机这种已经定型的产品，重新出现了许许多多的可能性。</p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<a href="https://ilearned.substack.com/p/13-on-competition-and-monopolies" target="_blank" rel="noreferrer">坏垄断和好垄断</a></p><p>风险投资家、畅销书《从零到一》的作者彼得·泰尔（Peter Thiel）将垄断分成两种。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022012013.webp" alt="" loading="lazy"></p><p>第一种垄断是通过非法手段打击竞争对手而获得的，他认为这种垄断是坏的。我们应该坚决反对。</p><p>第二种垄断则是因为某个公司做得非常出色，远超竞争对手，而自然获得的垄断地位，他认为，这种垄断是好的。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202201/bg2022012014.webp" alt="" loading="lazy"></p><p>彼得·泰尔解释说，在完全竞争的市场，大家激烈竞争，利润将趋向于零。为了生存，企业不得不压低成本，设法降低工资、减少研发和创新投入、降低产品质量。</p><p>这时，如果有一家公司做出了特别好的产品，得到了市场的认可，获得了自然垄断的地位。由于不再担心与别人的竞争，因此就有可能提高工人的工资、增加研发、更关注产品对社会和环境的影响。</p><p>对于客户来说，选择并没有变少。反而因为自然垄断者在取得垄断的过程中，发明了更好的新东西，解决了难题，所以客户有了更多的选择。</p><p>当然，如果自然垄断者没有把垄断利润回报社会，或者投入再生产，而是用来压制竞争对手，那就需要纠正。</p><h2 id="言论" tabindex="-1">言论 <a class="header-anchor" href="#言论" aria-label="Permalink to &quot;言论&quot;">​</a></h2><p>1、</p><p>太空研究正在进入一个新阶段，随着火箭的负载越来越大，以及发射成本的降低和发射频率的提高，我们现在可以把真正大型的仪器发射到太空。</p><p>-- <a href="https://nautil.us/issue/108/change/nasa-is-on-the-cusp-of-a-new-era" target="_blank" rel="noreferrer">《太空研究的新时代》</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021120918.webp" alt="" loading="lazy"></p><p>2、</p><p>根据统计，1979年至1983年间，顶级科学期刊有101项研究，声称发现了很有前途的新疗法或新药物。但是十年以后，其中只有五个发现能够做成产品上市。到了二十年以后的2003年，只剩下一种药物被广泛使用。</p><p>所以，你不应该相信新闻报道里面，那些令人兴奋的新医学成果，它们成功的机会其实很小。</p><p>-- <a href="https://www.vox.com/2015/3/23/8264355/research-study-hype" target="_blank" rel="noreferrer">Vox.com</a></p><p>3、</p><p>一个充满限制和商品化的互联网，正在取代原来那个曾经互相连通和开放的互联网。</p><p>-- <a href="https://neustadt.fr/essays/against-a-user-hostile-web/" target="_blank" rel="noreferrer">《对抗越来越不利于用户的互联网》</a></p><p>4、</p><p>对于非虚构类书籍，作者的写作能力与书籍销量无关。事实上，一个作者如果写得简明扼要，完全可以将一本350页的非虚构类书籍，简化成一篇40页的长文，但是这样的话，书价就到不了15美元了，而且销量也会比较小。</p><p>-- <a href="https://news.ycombinator.com/item?id=29507641" target="_blank" rel="noreferrer">Hacker News 读者</a></p><p>5、</p><p>假设做一个调查，观察周围的人，如果他的主张可能是错的，他会改变看法，还是会坚持原来的主张？几乎所有人都选择，设法证明自己原来的主张没错。</p><p>-- <a href="https://quoteinvestigator.com/2018/05/17/change-view/" target="_blank" rel="noreferrer">美国经济学家加尔布雷斯</a></p><h2 id="历史上的本周" tabindex="-1">历史上的本周 <a class="header-anchor" href="#历史上的本周" aria-label="Permalink to &quot;历史上的本周&quot;">​</a></h2><p>2021年（第 142 期）：<a href="https://www.ruanyifeng.com/blog/2021/01/weekly-issue-142.html" target="_blank" rel="noreferrer">2020年才是21世纪元年</a></p><p>2020年（第 90 期）：<a href="https://www.ruanyifeng.com/blog/2020/01/weekly-issue-90.html" target="_blank" rel="noreferrer">管人和技术是两种不同的能力</a></p><p>2019年（第 39 期）：<a href="https://www.ruanyifeng.com/blog/2019/01/weekly-issue-39.html" target="_blank" rel="noreferrer">苹果公司的两封公开信</a></p><h2 id="订阅" tabindex="-1">订阅 <a class="header-anchor" href="#订阅" aria-label="Permalink to &quot;订阅&quot;">​</a></h2><p>这个周刊每周五发布，同步更新在<a href="http://www.ruanyifeng.com/blog" target="_blank" rel="noreferrer">阮一峰的网络日志</a>和<a href="http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97" target="_blank" rel="noreferrer">微信公众号</a>。</p><p>微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg" alt="" loading="lazy"></p><p>（完）</p>',39),n=[l,s,g];function i(c,b,h,m,d,k){return r(),t("div",null,n)}const y=a(o,[["render",i]]);export{w as __pageData,y as default};
