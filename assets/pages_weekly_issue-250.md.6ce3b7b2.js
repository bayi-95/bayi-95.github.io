import{_ as e,c as r,o as a,R as t}from"./chunks/framework.842ee581.js";const k=JSON.parse('{"title":"科技爱好者周刊（第 250 期）：新技术的最大风险","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊（第 250 期）：新技术的最大风险","slug":"科技爱好者周刊-第-250-期-新技术的最大风险","link":"#科技爱好者周刊-第-250-期-新技术的最大风险","children":[]}],"relativePath":"pages/weekly/issue-250.md","filePath":"pages/weekly/issue-250.md","lastUpdated":1686789644000}'),p={name:"pages/weekly/issue-250.md"},o=t('<h1 id="科技爱好者周刊-第-250-期-新技术的最大风险" tabindex="-1">科技爱好者周刊（第 250 期）：新技术的最大风险 <a class="header-anchor" href="#科技爱好者周刊-第-250-期-新技术的最大风险" aria-label="Permalink to &quot;科技爱好者周刊（第 250 期）：新技术的最大风险&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。</p><p>本杂志<a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">开源</a>，欢迎<a href="https://github.com/ruanyf/weekly/issues" target="_blank" rel="noreferrer">投稿</a>。周刊另有<a href="https://github.com/ruanyf/weekly/issues/3022" target="_blank" rel="noreferrer">《谁在招人》</a>服务，发布程序员招聘信息。合作推广请<a href="mailto:yifeng.ruan@gmail.com" target="_blank" rel="noreferrer">邮件联系</a>（yifeng.ruan@gmail.com）。</p><h2 id="封面图" tabindex="-1">封面图 <a class="header-anchor" href="#封面图" aria-label="Permalink to &quot;封面图&quot;">​</a></h2><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041207.webp" alt=""></p><p>印度的第一家苹果商店，将于4月18日在孟买开张。据报道，苹果公司希望，印度可以成为它的第二大国际市场，并且生产25%的 iPhone。（<a href="https://indianexpress.com/article/technology/tech-news-technology/apple-mumbai-delhi-stores-india-opening-8549861/" target="_blank" rel="noreferrer">via</a>）</p><h2 id="本周话题-新技术的最大风险" tabindex="-1">本周话题：新技术的最大风险 <a class="header-anchor" href="#本周话题-新技术的最大风险" aria-label="Permalink to &quot;本周话题：新技术的最大风险&quot;">​</a></h2><p>这几天，我读到三篇文章，全部是<strong>工程师后悔使用了新技术。</strong></p><p>第一篇文章<a href="https://kevinyank.com/posts/on-endings-why-how-we-retired-elm-at-culture-amp/" target="_blank" rel="noreferrer">《为什么我们放弃 Elm 语言》</a>。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041003.webp" alt=""></p><p>（说明一下，原文都是英文，为了方便展示，我把截图用“翻译”功能转成了中文。）</p><p>第二篇<a href="https://betterprogramming.pub/graphql-from-excitement-to-deception-f81f7c95b7cf" target="_blank" rel="noreferrer">《GraphQL：从兴奋到幻灭》</a>。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041004.webp" alt=""></p><p>第三篇<a href="https://mhamri.com/why-i-regret-using-ionic-for-app-development-c8b21b88d83a" target="_blank" rel="noreferrer">《为什么我后悔使用 ionic》</a>。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041002.webp" alt=""></p><p>上面三种新技术，都是最近10年诞生的。<strong>当时，都号称解决了开发的重大问题，看上去很有希望。</strong> 因此，一诞生就成了热点，非常吸引眼球，这些工程师就都采用了。</p><p>我说说这些技术的优点。</p><blockquote><p><strong>Elm 语言</strong>保证网页脚本不再报错。</p><p><strong>GraphQL</strong> 只发一个请求，就满足前端的所有数据需求。</p><p><strong>ionic</strong> 让你使用任意 JS 框架，开发安卓和苹果的手机应用。</p></blockquote><p>如果你是前端工程师，一看这些技术特点，大概立刻就会心动。</p><p>但是，当你真把它们用在生产环境，各种问题就会慢慢暴露出来，几年以后你可能就像上面的文章作者一样后悔莫及。</p><blockquote><p><strong>Elm</strong>：最新一次更新是2019年，与当前 JS 生态的融合越来越困难。</p><p><strong>GraphQL</strong>：使用后的性能提升不明显，反而使后台架构变得复杂，而且分页、缓存等问题很麻烦。</p><p><strong>ionic</strong>：文档不足且混乱，没有社区和生态。</p></blockquote><p>等到后悔了，想要更换技术栈，就晚了。上车容易下车难，项目都持续投入好几年了，再修改架构谈何容易。</p><p>这件事的教训，就是使用新技术要谨慎。新技术有一个最大风险，往往被忽视，<strong>那就是它们没有经过足够的使用，问题都没有暴露出来。</strong></p><p>我记得，有人做过研究，企业软件的成本，只有20%是早期的开发成本，剩下的80%都是后期的维护和更新成本。</p><p>很多的新技术，看上去可以节省前面20%的开发成本，但可能大大增加后面80%的维护成本。</p><p>现实生活中，那么多企业选择 Java，而不是那些时髦花哨的新技术，原因就在这里：Java 是经过考验的，不会出现奇怪的问题，有良好的长期维护，企业长期使用的风险和成本相对较低。</p><p>如果开发者真为自己考虑，想将来简单一点，不必每天为复杂奇怪的技术问题操心，应该优先选择那些可靠的老技术，用于公司的长期项目。</p><p><strong>老技术的问题是，它很乏味</strong>：所有可能性都被探索过了，创造发挥的空间不大。很多程序员（尤其是新程序员）因此觉得，老技术展现不了技术能力，也不够好玩，新技术更有乐趣，对自己的提升更大。</p><p>这种想法并没错，但前提是你的项目不需要长期维护，否则使用未经考验的新技术是非常冒险的。</p><h2 id="暑期实习申请" tabindex="-1">暑期实习申请 <a class="header-anchor" href="#暑期实习申请" aria-label="Permalink to &quot;暑期实习申请&quot;">​</a></h2><p>今年的暑期实习，已经开始申请了，感兴趣的同学看过来。</p><p>今天先推一个<strong>字节的实习机会</strong>。他们这次开放了10多个城市的大量岗位，实习期为3个月（或更长），你一次可以投多个岗位。</p><p><a href="https://mp.weixin.qq.com/s/7stXftKlm1LdBOw_v6KFUw" target="_blank" rel="noreferrer"><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041303.webp" alt=""></a></p><p>机会挺难得的，大家不要错过。据我了解，今年为了实习生，他们新上线了 ByteIntern 项目，里面的岗位都配了转正名额，留下来的机会很大。</p><p>如果你不了解实习的具体内容，下面是4位技术岗实习同学的经历自述，可以参考。<strong>实习申请的入口和注意事项，也是点击下面的图片，进去以后拉到文末，就可以报名投递了。</strong></p><p><a href="https://mp.weixin.qq.com/s/7stXftKlm1LdBOw_v6KFUw" target="_blank" rel="noreferrer"><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041304.webp" alt=""></a></p><p>后面，周刊还会发更多的实习和就业消息，大家可以多关注，祝愿大家找工作顺利。</p><h2 id="科技动态" tabindex="-1">科技动态 <a class="header-anchor" href="#科技动态" aria-label="Permalink to &quot;科技动态&quot;">​</a></h2><p>1、<a href="https://mymodernmet.com/seoul-ring-hubless-ferris-wheel/" target="_blank" rel="noreferrer">世界最大无辐摩天轮</a></p><p>韩国宣布将在首都首尔，建造世界最大的无辐摩天轮。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041105.webp" alt=""></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041108.webp" alt=""></p><p>无辐摩天轮没有中间的轴，看上去像一个巨大的圆环。圆环本身并不转动，而是一个个乘客仓沿着圆环上的轨道前进。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041106.webp" alt=""></p><p>韩国计划中的这个摩天轮，直径为180米，一共有36个乘客仓，每个容纳25位游客。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041107.webp" alt=""></p><p>2、<a href="https://medium.com/@socialcreature/ai-and-the-american-smile-76d23a0fbfaf" target="_blank" rel="noreferrer">AI 合照</a></p><p>一位美国艺术家，使用 AI 生成了人类历史上不同时间和地点的各种人群的“微笑合照”。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041109.webp" alt=""></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041110.webp" alt=""></p><p>这些人物都一个个面对镜头，摆出“完美”的笑容，看上去非常自然。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041111.webp" alt=""></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041112.webp" alt=""></p><p>这些照片都是虚构的，但是显示了 AI 的一个很实用的用途，就是生成合照。我们完全可以先将自己的合照提供给 AI，修改照片上的每个人的笑容，让大家都生动地笑起来。</p><p>3、<a href="https://sz.oeeee.com/html/202304/06/1356839.html" target="_blank" rel="noreferrer">海上光伏平台</a></p><p>中国首个海上漂浮的半潜式光伏发电平台，近日在烟台海域交付。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023040620.webp" alt=""></p><p>这个平台由4块巨大的光伏板组成，每块光伏板接近一个篮球场的大小，总面积达到1900平方米，峰值发电量为 400kw。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023040621.webp" alt=""></p><p>它漂浮在水面上，进行太阳能发电。随着陆地上可以铺设光伏板的地方不断减少，这样的海洋光伏平台，以后会越来越多。</p><p>4、<a href="https://www.npr.org/2023/03/23/1165680024/perennial-rice-plant-once-harvest-again-and-again" target="_blank" rel="noreferrer">多年生水稻</a></p><p>水稻是世界最重要的粮食作物，世界一半人以它为主粮。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023040801.webp" alt=""></p><p>水稻有一个重要缺点，就是每年都需要播种，收获后都必须再次播种，这对农民和土地都是巨大的负担。</p><p>多年来，全世界的科学家都在研究“多年生水稻”，这种水稻只需要播种一次，可以生长好多年，收割后第二年还会重新结穗。</p><p>国外媒体报道，美国科学家将一种泰国水稻与一种特别顽强的非洲野生稻杂交，找到了三个多年生品种，正在进行田野实验。这些新品种今年已经长到第四年，据说有成功的希望。</p><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<a href="https://boostpixels.com/guide" target="_blank" rel="noreferrer">prompt 写作指南</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023040903.webp" alt=""></p><p>生成式 AI 的 prompt（提示）怎么写？本文是一篇教程，一步步用示例教你。</p><p>它针对的是 BoostPixels 引擎，但是很有参考价值。本文是详细版，还有一篇<a href="https://boostpixels.com/short-guide" target="_blank" rel="noreferrer">简明版</a>，可以先看后者。</p><p>2、<a href="https://www.ruxu.dev/articles/ai/maximizing-the-potential-of-llms/" target="_blank" rel="noreferrer">LLM（大型语言模型）快速上手指南</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041102.webp" alt=""></p><p>本文简单演示怎么使用 LLM，快速完成几种常见任务，很有用。</p><p>3、<a href="https://making.close.com/posts/rendering-untrusted-html-email-safely" target="_blank" rel="noreferrer">如何安全插入外部网页</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202303/bg2023032806.webp" alt=""></p><p>作者在自己网站上，使用<code>&lt;iframe&gt;</code>插入不受信任的外部网页。本文介绍怎样才能保证安全。</p><p>4、 <a href="https://fullystacked.net/posts/modern-html-email/" target="_blank" rel="noreferrer">HTML 电子邮件不再需要<code>&lt;table&gt;</code></a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023040904.webp" alt=""></p><p>编写电子邮件，以前要用<code>&lt;table&gt;</code>标签来做排版。随着 Windows Outlook 采用 Edge 引擎，实际已经不需要这样做了。</p><p>5、<a href="https://pdx.su/blog/2023-02-05-asciidoc-and-markdown/" target="_blank" rel="noreferrer">Asciidoc 与 Markdown 的比较</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202302/bg2023020808.webp" alt=""></p><p>Asciidoc 是一种文本文档的书写格式，特别适合写书。本文作者将其与 Markdown 进行比较，谈了这种格式的优点，以及存在的问题。</p><p>6、<a href="https://linuskarlsson.se/blog/shebang-shenanigans/" target="_blank" rel="noreferrer">Bash 脚本 Shebang 行的传参</a>（英文）</p><p>Bash 脚本的第一行往往以<code>#!</code>开头，称为 Shebang 行，用来指定脚本执行器。那么，这一行里面能不能写入参数呢？</p><p>7、<a href="https://iosifache.me/twitter-architecture-trends" target="_blank" rel="noreferrer">推特架构的演变</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202302/bg2023020810.webp" alt=""></p><p>推特这个网站，后台架构是怎样的？作者做了一个简单的整理和综述。</p><p>8、<a href="https://www.livescience.com/34052-unsolved-mysteries-physics.html" target="_blank" rel="noreferrer">物理学18大未解之谜</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202303/bg2023032807.webp" alt=""></p><p>本文通俗介绍了物理学家至今无法回答的18个基本问题，都跟宇宙、时空、粒子有关。</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://alfred.camera/" target="_blank" rel="noreferrer">Alfred Home Security</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202301/bg2023011602.webp" alt=""></p><p>一个手机 App，让你的旧手机变成监控摄像头，效果不错，不过是收费软件。另有免费软件 <a href="https://apps.apple.com/us/app/live-reporter-live-camera/id996017825" target="_blank" rel="noreferrer">Live-Reporter</a> 和 <a href="https://guardianproject.github.io/haven/" target="_blank" rel="noreferrer">Haven</a> 也可以考虑。</p><p>2、<a href="https://moonvy.com/apps/ops/" target="_blank" rel="noreferrer">OPS/OpenPromptStudio</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041202.webp" alt=""></p><p>一个 AI 提示词的图形化 Web 管理软件，自动将中文输入译成英文，并对提示词进行分类标签管理。（<a href="https://github.com/ruanyf/weekly/issues/3044" target="_blank" rel="noreferrer">@xcuyao</a> 投稿）</p><p>3、<a href="https://github.com/velor2012/anonymous-chat-room" target="_blank" rel="noreferrer">Anonymous Chat Room</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041203.webp" alt=""></p><p>一个开源的 Web 聊天软件，可以进行文字、语音聊天，并支持语音录屏。（<a href="https://github.com/ruanyf/weekly/issues/3045" target="_blank" rel="noreferrer">@velor2012</a> 投稿）</p><p>4、<a href="https://www.sqlkiller.com/" target="_blank" rel="noreferrer">SQLkiller</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041205.webp" alt=""></p><p>使用 AI 自动生成 SQL 语句的工具，支持多种数据库。用户需要提供“表结构”，并用自然语言描述想要什么数据。（<a href="https://github.com/ruanyf/weekly/issues/3047" target="_blank" rel="noreferrer">@Benxzz</a> 投稿）</p><p>5、<a href="https://github.com/Kanaries/pygwalker" target="_blank" rel="noreferrer">PyGWalker</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041206.webp" alt=""></p><p>一个 Python 库，将 Pandas 数据帧（DataFrame）转成 Tableau 式的数据可视化互动界面。（<a href="https://github.com/ruanyf/weekly/issues/3050" target="_blank" rel="noreferrer">@jojocys</a> 投稿）</p><p>6、<a href="https://github.com/mouday/domain-admin" target="_blank" rel="noreferrer">Domain Admin</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041204.webp" alt=""></p><p>开源的 SSL 证书监控平台，证书到期自动发邮件提醒，支持 Docker 部署。（<a href="https://github.com/ruanyf/weekly/issues/3038" target="_blank" rel="noreferrer">@mouday</a> 投稿）</p><p>7、<a href="https://github.com/coder-hxl/x-crawl" target="_blank" rel="noreferrer">x-crawl</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041201.webp" alt=""></p><p>一个 Node.js 爬虫库，用法灵活，功能较多，内置了 puppeteer。（<a href="https://github.com/ruanyf/weekly/issues/3040" target="_blank" rel="noreferrer">@coder-hxl</a> 投稿）</p><p>8、<a href="https://unblob.org/" target="_blank" rel="noreferrer">unblob</a></p><p>命令行工具，可以解开各种容器格式，查看里面的内容。目前支持30多种容器格式。</p><p>9、<a href="https://yakgpt.vercel.app/" target="_blank" rel="noreferrer">YakGPT</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023040109.webp" alt=""></p><p>ChatGPT 的非官方 UI，进行了很多优化，特色是支持麦克风的语音输入，不必手动打字。</p><p>10、<a href="https://github.com/AntonOsika/CLI-Co-Pilot" target="_blank" rel="noreferrer">CLI Co-Pilot</a></p><p>Bash 命令自动生成。你在命令行描述想要的操作，它通过 OpenAI 返回对应的命令并执行。类似软件还有 <a href="https://github.com/BuilderIO/ai-shell" target="_blank" rel="noreferrer">AI Shell</a>。</p><p>11、<a href="https://github.com/leetcode-mafia/cheetah" target="_blank" rel="noreferrer">Cheetah</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023040614.webp" alt=""></p><p>这个工具用于远程面试，它会把面试官的提问自动转成文字（Whisper 模型），传给 OpenAI，然后将结果显示在你的屏幕上。</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、<a href="https://www3.ntu.edu.sg/home/ehchua/programming/index.html" target="_blank" rel="noreferrer">Java 编程教程</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202301/bg2023011504.webp" alt=""></p><p>这个网站是新加坡南洋理工大学的一位老师的教案（英文），主要内容为新生的 Java 编程。</p><p>2、<a href="https://offsec.tools/" target="_blank" rel="noreferrer">offsec.tools</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202301/bg2023012101.webp" alt=""></p><p>这个网站收集各种安全相关的软件工具，目前共有600多个。</p><p>3、<a href="https://neal.fun/wonders-of-street-view/?v=b2wMrU" target="_blank" rel="noreferrer">Wonders of Street View</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202301/bg2023012501.jpg" alt=""></p><p>这个网站收集谷歌街景的各种奇怪影像，随机展示。</p><p>4、<a href="https://www.nosignup.tools/" target="_blank" rel="noreferrer">nosignup.tools</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202208/bg2022081705.webp" alt=""></p><p>这个网站收集那些不需要注册、就可以使用的在线工具。</p><p>5、<a href="https://www.dns0.eu/" target="_blank" rel="noreferrer">DNS0.EU</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202302/bg2023020805.webp" alt=""></p><p>欧盟新推出的欧洲公共 DNS 官网。</p><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>1、<a href="https://www.notechmagazine.com/2022/11/low-energy-chest-fridge.html" target="_blank" rel="noreferrer">冰箱与冰柜</a></p><p>普通冰箱是垂直开门。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202211/bg2022110507.webp" alt=""></p><p>冰柜是水平开门。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202211/bg2022110508.webp" alt=""></p><p>谁的制冷效率更高？</p><p>答案是水平开门的冰柜。因为冷空气比较重，会沉在空间底部。冰箱开门时，冷空气就会逃出，而冰柜开门时，冷空气仍会留在冰柜中。</p><p>一个网友说，他家冰箱的耗电量是冰柜的10到20倍。</p><p>2、<a href="https://sea.mashable.com/life/23098/7-of-the-worlds-richest-get-reimagined-as-poor-people-by-midjourney" target="_blank" rel="noreferrer">如果生在贫民窟</a></p><p>大多数的人不能逃脱他的出生环境。</p><p>那些顶级富豪如果生在贫民窟，还会有现在的人生吗？</p><p>一位印度艺术家使用 AI，生成了一些世界最富有的人活在贫民窟的假想照片。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041208.webp" alt=""></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041209.webp" alt=""></p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041210.webp" alt=""></p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<a href="https://reproof.app/blog/document-first-then-build" target="_blank" rel="noreferrer">Nest 的产品开发方法</a></p><p>2014年，谷歌收购了家用智能设备品牌 Nest。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202206/bg2022061607.webp" alt=""></p><p>这家公司的开发流程与众不同，是先有新闻稿和包装盒，再进行产品开发。</p><p>创始人法德尔（Tony Fadell）说：“写新闻稿时，你会思考，哪个功能具有新闻价值，哪个才是真正重要的。”</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041301.webp" alt=""></p><p>因为一般人看新闻稿，最多也就30秒时间。如果30秒里面，他没有产生兴趣，他就会忽略你的产品。所以，你必须确保产品最有新闻价值、最吸引人的部分，呈现在新闻稿里。</p><p>这就好像你跟投资者同乘一部电梯，从1楼到14楼，你只有这一点点的时间跟他交谈。为了引起投资者的兴趣，每句话都要考虑好。</p><p>一旦有了正确的新闻稿，你就知道应该重点开发哪些功能。</p><p>然后，为了进一步吸引公众，法德尔又开始设计包装盒。他说：“包装决定了产品。盒子的物理限制迫使你思考，应该怎么呈现这些功能。”</p><p><img src="https://cdn.beekka.com/blogimg/asset/202304/bg2023041302.webp" alt=""></p><p>在此过程中，你不断完善自己的想法，直到将产品的精髓提炼成可以从货架上拿起并购买的东西。</p><p>最后，确定了产品的功能和外形，就可以开发实际产品了。</p><h2 id="言论" tabindex="-1">言论 <a class="header-anchor" href="#言论" aria-label="Permalink to &quot;言论&quot;">​</a></h2><p>1、</p><p>企业家谈成功经验，就好像在说：“我曾经用这些号码，赢得过彩票。”</p><p>-- <a href="https://mobile.twitter.com/awilkinson/status/1575941514567774208" target="_blank" rel="noreferrer">推特用户</a></p><p>2、</p><p>我在网络简历上为自己加了“AI prompt 工程师”的头衔，不到一个小时就收到了面试邀请。</p><p>“提示工程师”目前是一个机会很多但限制很少的领域，也是一个获取成本很低的技能，为什么不加呢？</p><p>-- <a href="https://old.reddit.com/r/freelanceWriters/comments/12iv6jf/i_put_ai_prompt_engineer_in_my_upwork_profile_and/" target="_blank" rel="noreferrer">Reddit 网友</a></p><p>3、</p><p>有人问一个作家，能不能用一句话总结他的成功经验。</p><p>作者说：“我能告诉你的，就是动手去写，不停地写。因为我知道，这行得通。”</p><p>-- <a href="https://robert.bearblog.dev/just-write/" target="_blank" rel="noreferrer">《写吧》</a></p><p>4、</p><p>AI 带来的风险之一，就是权力会集中到那些建造 AI 模型的人身上，他们的决定会影响世界。</p><p>-- <a href="https://techxplore.com/news/2023-03-ai-upend-world-electricity-internet.html" target="_blank" rel="noreferrer">《AI 颠覆世界》</a></p><h2 id="历史上的本周" tabindex="-1">历史上的本周 <a class="header-anchor" href="#历史上的本周" aria-label="Permalink to &quot;历史上的本周&quot;">​</a></h2><p><a href="http://www.ruanyifeng.com/blog/2022/04/weekly-issue-203.html" target="_blank" rel="noreferrer">英国的名校证书，伯克利的计算机教育</a>（2022 #203）</p><p><a href="http://www.ruanyifeng.com/blog/2021/04/weekly-issue-153.html" target="_blank" rel="noreferrer">机器翻译是对译者的侮辱吗？</a>（2021 #153）</p><p><a href="http://www.ruanyifeng.com/blog/2020/04/weekly-issue-103.html" target="_blank" rel="noreferrer">信息的半衰期</a>（2020 #103）</p><p><a href="http://www.ruanyifeng.com/blog/2019/04/weekly-issue-53.html" target="_blank" rel="noreferrer">DNA 相亲会</a>（2019 #53）</p><h2 id="鸣谢" tabindex="-1">鸣谢 <a class="header-anchor" href="#鸣谢" aria-label="Permalink to &quot;鸣谢&quot;">​</a></h2><p>周刊得到国内新一代知识管理与协作平台 <a href="https://flowus.cn?promotionChannel=GW_RYF_01" target="_blank" rel="noreferrer">FlowUs</a> 的帮助，深表感谢。</p><p><a href="https://flowus.cn?promotionChannel=GW_RYF_01" target="_blank" rel="noreferrer">FlowUS</a> = 文档 + 表格 + 网盘。你可以用它写文档、做主页、管理数据、存储文件等等。</p><p>每一期周刊同时发布在<a href="https://ruanyf-weekly.flowus.cn/?code=FLOWUS&amp;promotionChannel=WX_RYF_00" target="_blank" rel="noreferrer"> FlowUs 专栏</a>，欢迎大家也去开通自己的专栏和主页。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202303/bg2023030205.webp" alt=""></p><p>（完）</p>',195),s=[o];function l(n,g,i,b,h,c){return a(),r("div",null,s)}const f=e(p,[["render",l]]);export{k as __pageData,f as default};
