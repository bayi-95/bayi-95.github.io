import{_ as a,c as t,o as r,a2 as p}from"./chunks/framework.mEAph8pv.js";const w=JSON.parse('{"title":"科技爱好者周刊（第 141 期）：封闭系统的胜利","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊（第 141 期）：封闭系统的胜利","slug":"科技爱好者周刊-第-141-期-封闭系统的胜利","link":"#科技爱好者周刊-第-141-期-封闭系统的胜利","children":[]}],"relativePath":"pages/weekly/issue-141.md","filePath":"pages/weekly/issue-141.md","lastUpdated":1686738890000}'),l={name:"pages/weekly/issue-141.md"};function s(o,e,g,i,n,b){return r(),t("div",null,e[0]||(e[0]=[p('<h1 id="科技爱好者周刊-第-141-期-封闭系统的胜利" tabindex="-1">科技爱好者周刊（第 141 期）：封闭系统的胜利 <a class="header-anchor" href="#科技爱好者周刊-第-141-期-封闭系统的胜利" aria-label="Permalink to &quot;科技爱好者周刊（第 141 期）：封闭系统的胜利&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。</p><p>本杂志开源（GitHub: <a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">ruanyf/weekly</a>），欢迎提交 issue，投稿或推荐科技内容。</p><p>周刊讨论区的帖子<a href="https://github.com/ruanyf/weekly/issues/1580" target="_blank" rel="noreferrer">《谁在招人？》</a>，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。</p><h2 id="封面图" tabindex="-1">封面图 <a class="header-anchor" href="#封面图" aria-label="Permalink to &quot;封面图&quot;">​</a></h2><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010101.jpg" alt="" loading="lazy"></p><p>2020年7月21日，SpaceX 公司的 Falcon 9 重型火箭即将发射。NEOWISE 彗星就在它的上方，划过浩瀚宇宙。很多网站评选这张照片为太空探索年度照片。（<a href="https://twitter.com/spacex/status/1285264295417110528" target="_blank" rel="noreferrer">via</a>）</p><h2 id="本周话题-封闭系统的胜利" tabindex="-1">本周话题：封闭系统的胜利 <a class="header-anchor" href="#本周话题-封闭系统的胜利" aria-label="Permalink to &quot;本周话题：封闭系统的胜利&quot;">​</a></h2><p>去年的一件大事，苹果公司发布 M1 芯片。</p><p>它的表现好得惊人，比原先英特尔的芯片更快、更省电、还更便宜。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010501.jpg" alt="" loading="lazy"></p><p>为什么 M1 芯片的表现这么好？</p><p><strong>一个<a href="https://debugger.medium.com/why-is-apples-m1-chip-so-fast-3262b158cba2" target="_blank" rel="noreferrer">原因</a>是，它其实不能算作 CPU，而是一个单片系统</strong> （System on a Chip，简称 SoC），里面集成了中央处理器 CPU、图形处理器 GPU、机器学习芯片 NPU、安全芯片等等。</p><p>当代芯片的制造技术已经发展到不可思议的程度，海量的晶体管可以做进一块指甲盖大小的硅片。以前，不同的电路需要由不同的芯片提供，现在可以集成为一块芯片。</p><p>正是由于这么多组件做在一起，苹果才有办法，最大限度地优化电路，提高协同能力，节省电力。再加上，操作系统也是自家的，可以配合着修改底层，所以性能才能提高这么多。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010502.jpg" alt="" loading="lazy"></p><p>我问大家一个问题，如果 M1 大获成功，其他公司会怎么反应？</p><p>答案很简单，别的公司不得不跟进。英特尔、 AMD、三星、华为等等迫于压力，就不能再单纯开发 CPU 了，而是必须开始搞自己的 SoC 芯片。</p><p>前一阵，生产显卡的 Nvidia 想要收购 ARM 芯片公司，可能就是这种考虑，想将 GPU 和 CPU 融合在一起，跟苹果抗衡。有<a href="https://www.tomshardware.com/news/google-developing-own-processors-for-smartphones-and-chromebooks" target="_blank" rel="noreferrer">消息</a>说，谷歌也在开发自己的 SoC 芯片，用在 Pixel 手机和 ChromeBook。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010503.jpg" alt="" loading="lazy"></p><p>SoC 的盛行会带来一个后果，因为它把许多功能集成在一起，大量使用自定义的逻辑和接口，封装成一个黑箱，而且每家公司的设计都不一样，所以 <strong>SoC 不可能是一个开放的、兼容的系统，只可能是封闭的专有系统。</strong> 目前的手机硬件，就是这种状况。</p><p>没人能改苹果的硬件，它的接口和规格都没有公开。以后，其他公司的系统也会是这样，个个都是黑箱，外人根本动不了。</p><p>这意味着，对于桌面设备来说，个人兼容 PC 时代就要结束了，以后兼容硬件的可选择性越来越小，市场上都是基于不同 SoC 定制系统的整机。比如，自己想要更换显卡，也换不了，因为都做进 SoC 了，Linux 想驱动这些 SoC，会更困难，因为专有硬件都是不开源的。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010504.jpg" alt="" loading="lazy"></p><p>不仅硬件正在变成封闭系统，软件其实早就如此了。以前，只要一个浏览器，就能访问全部的互联网，现在不行了。微信、今日头条、抖音……这些都是封闭系统，把内容锁在自己的院子里，必须安装它们的 App 才能看，不支持 Web 浏览，结果它们都成功了。</p><p>这种趋势正在蔓延，越来越多的网站选择放弃 Web 变成封闭系统。用户在网站上只能阅读一部分内容，想要获取全部内容，就必须安装 App。由于它们的蔓延，互联网正在变成一个个孤岛，信息自由开放、互连互通的梦想，似乎比任何时候都要遥远。</p><p>封闭系统的最大问题就是，整个市场最终会被若干大公司主宰，它们控制了一切，这看上去就是现在的局面。</p><h2 id="程序员面试攻略" tabindex="-1">程序员面试攻略 <a class="header-anchor" href="#程序员面试攻略" aria-label="Permalink to &quot;程序员面试攻略&quot;">​</a></h2><p>面试是找工作的最后一个关键环节。</p><p>很多同学都有这样的心声，希望有一个专门针对程序员的面试培训，各类公司的面试官分享评分标准和找工作的注意事项，最好还包括模拟面试环节。</p><p>本周的课程资料就是大家想听的这些内容。四位 IT 行业的知名人士，同时也是资深面试官，跟大家分享 <strong>《程序员大厂面试攻略》</strong>。</p><blockquote><ul><li>乔新亮（前苏宁科技集团副总裁）</li><li>左耳朵耗子（著名程序员）</li><li>白海飞（IBM 软件商务系统经理）</li><li>臧萌（PayPal 数据处理组技术负责人）</li></ul></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010624.jpg" alt="" loading="lazy"></p><p>四位老师一共讲授 12 节图文课。每一节课都有专门的主题，比如换工作的注意点、大厂和创业公司的不同特点、面试如何准备等等。</p><p>除了图文课，每周都有直播环节，跟大家直播交流各种具体的问题。目前预定为每周四次，也就是说，差不多每个工作日晚上，都有线上活动。</p><p>这份资料象征性收费 0.99元，扫描上方海报的二维码，支付加入即可，只限100个名额。支付后，请根据提示操作，会有老师把资料发给你。</p><p>如果有疑问，可以扫描下方二维码，加小助手咨询。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010625.jpg" alt="" loading="lazy"></p><h2 id="资讯" tabindex="-1">资讯 <a class="header-anchor" href="#资讯" aria-label="Permalink to &quot;资讯&quot;">​</a></h2><p>1、<a href="https://spectrum.ieee.org/tech-talk/consumer-electronics/audiovideo/active-noise-cancellation-using-ldvs" target="_blank" rel="noreferrer">降噪头枕</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122802.jpg" alt="" loading="lazy"></p><p>降噪耳机的原理是发出频率相同、波形相反的声波，与外部噪音互相抵消。悉尼科技大学的一个团队根据这个原理，开发出了降噪头枕，装在椅子上，不用戴耳机，只要把头靠在上面，就会听不到噪音。</p><p>这个头枕内部，装了多个扬声器，会对着乘客的耳道发出抵消噪音的声波。根据测试，可以降低噪音10分贝～20分贝。但是，它有一个问题，乘客的头必须靠在指定位置，一旦转头，声波就无法对准耳道了。研究团队正在考虑开发一个头部跟踪系统，解决这个问题。</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122803.jpg" alt="" loading="lazy"></p><p>2、<a href="https://www.buyforlife.com/blog/4kpaLtbnG6MkseMj44niVV/recurring-reviews-to-track-the-whole-lifecycle-of-a-product" target="_blank" rel="noreferrer">定期商品评价</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122905.jpg" alt="" loading="lazy"></p><p>网上商品的用户评价，往往缺乏真实性。除了商家做假，很多评价是用户刚拿到商品时写的，来不及深入使用。一家美国的网上商店，为了保证用户评价的真实性，发明了“定期评价”机制。</p><p>用户购买商品以后，每年会定期收到一份邮件，请用户上传照片和评价过去一年里面的使用感受。上图就是购买两月、两年、五年后，用户分别上传的照片。这样的话，就能看到整个生命周期的用户评价。</p><p>3、<a href="https://www.bbc.com/news/business-55463366" target="_blank" rel="noreferrer">木制卫星</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122909.jpg" alt="" loading="lazy"></p><p>世界各国发射的卫星越来越多，其中绝大部分完成使命后，都会重返地球。卫星穿过大气层会发生燃烧，释放出有害物质，落到地面也会造成污染。</p><p>为了解决这个环境问题，日本京都大学与一家林业公司合作，开发木制卫星，目标是到2023年发射世界上第一颗用木头制成的人造卫星，仪器放在木制外壳中。这种卫星重返地球时，会在大气层中彻底燃烧光，对环境没有影响。</p><p>4、<a href="https://neurosciencenews.com/bci-prosthetic-limb-movement-17423/" target="_blank" rel="noreferrer">意念假肢</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122203.jpg" alt="" loading="lazy"></p><p>2019年1月，约翰霍普金斯大学在一个四肢瘫痪病人的大脑中，植入了六个电极。这个病人已经瘫痪了30年，只有前臂和手指能够微微移动。现在，经过两年的训练，他已经可以通过脑机接口，让大脑电极感受到手指的运动，从而操作假肢，完成一些简单的任务，比如给自己喂饭。</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122202.jpg" alt="" loading="lazy"></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122201.jpg" alt="" loading="lazy"></p><p>这件事情最大的挑战在于，同时控制两个假肢，让左手和右手配合行动。研究团队的下一个目标是，尝试不通过视觉完成某些任务，比如不必看着就能系鞋带。</p><p>5、<a href="https://www.polishnews.co.uk/poznan-the-clams-filter-the-water-they-check-whether-the-water-is-polluted-or-clean/" target="_blank" rel="noreferrer">贻贝水质检测</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020123107.jpg" alt="" loading="lazy"></p><p>多年来，波兰城市波兹南（Poznań）一直使用贻贝，进行自来水的水质检测。这比化学检测更简单便宜，准确性也不差。贻贝对水质非常敏感，一旦发现自来水不干净，或者被污染，它就会闭合外壳。</p><p>自来水公司一共有三个测量设备，每个设备使用8个贻贝。贻贝的外壳都贴了磁铁，用来监控它是闭合还是张开。如果有两三个贻贝闭合，那可能是偶然情况；如果八个同时闭合，那就一定是水质出了问题。一年总共消耗200多个贻贝。</p><p>6、<strong>一句话消息</strong></p><blockquote><ul><li><a href="https://petapixel.com/2020/12/26/fujifilm-created-a-magnetic-tape-that-can-store-580-terabytes/" target="_blank" rel="noreferrer">富士公司</a>开发出容量达到 580TB 的磁带，是世界储存容量最大的磁带，比目前市场出售的产品大50倍。</li></ul></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122902.jpg" alt="" loading="lazy"></p><blockquote><ul><li><a href="http://www.hayabusa2.jaxa.jp/en/topics/20201225_samples/" target="_blank" rel="noreferrer">日本太空探测器“隼鸟二号”</a>从小行星取回的岩石样本已经打开，下面容器里的岩石就来自3亿公里以外的小行星 Ryugu。</li></ul></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122903.jpg" alt="" loading="lazy"></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122904.jpg" alt="" loading="lazy"></p><blockquote><ul><li><a href="https://www.thedrive.com/news/38032/the-50k-electric-monarch-tractor-can-plow-a-field-without-you-and-run-for-10-hours" target="_blank" rel="noreferrer">一家美国公司</a>推出电动拖拉机，取代传统的柴油拖拉机。柴油机械其实不适合农作物，植物会因此带有没有充分燃烧的柴油微粒。</li></ul></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020121710.jpg" alt="" loading="lazy"></p><blockquote><ul><li><a href="https://nuadox.com/post/638430835121455104/detecting-elephants-from-space" target="_blank" rel="noreferrer">牛津大学的团队</a>使用机器学习，从卫星照片找出非洲草原的大象，用来保护大象种群。下图的绿框是机器识别的大象，红框是真实的大象，重合度相当高。</li></ul></blockquote><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122503.jpg" alt="" loading="lazy"></p><blockquote><ul><li><a href="https://www.bbc.com/news/world-asia-55526450" target="_blank" rel="noreferrer">韩国</a>去年首次出现人口负增长。由于日本早已人口负增长，中国也即将出现，所以整个东亚都开始进入高龄化社会。</li></ul></blockquote><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<a href="https://mp.weixin.qq.com/s/r5kOO48Ow19uhUFDpk6iPQ" target="_blank" rel="noreferrer">珠峰新高度测量回顾</a>（中文）</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122608.jpg" alt="" loading="lazy"></p><p>2020年5月27日，中国登山队成功登顶珠穆朗玛峰，完成测量任务。本文用多图回顾了登顶测量过程。</p><p>2、<a href="https://technews.tw/2020/12/15/the-angle-of-sunlight-and-shadow-can-reveal-where-the-photo-was-taken/" target="_blank" rel="noreferrer">根据阳光和阴影推测拍摄信息</a>（中文）</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122610.jpg" alt="" loading="lazy"></p><p>作者介绍 SunCalc 这个软件，可以根据某个地点的阴影，推测拍摄时间，或者在已知拍摄时间的情况下，推测阳光在拍摄者的哪一个方向，进而缩小地点范围。</p><p>3、<a href="https://www.tmtpost.com/4912205.html" target="_blank" rel="noreferrer">中国 5G 网络的频率分配</a>（中文）</p><p>这篇文章介绍国内无线电频谱调整的现状，一部分 4G 频率重新分配给5G，同时腾退了一些 2G 和 3G 的频率。</p><p>4、<a href="https://mp.weixin.qq.com/s/FZAHxaxdSBHN4XGov9QjXQ" target="_blank" rel="noreferrer">流浪动物的生态威胁</a>（中文）</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020123103.jpg" alt="" loading="lazy"></p><p>每年都有很多宠物变成流浪动物，其中一部分进入野外，对其他野生动物形成威胁。作者进行了调查，发现一只城市的流浪猫大概每年杀死5只小型兽类（比如老鼠）、1.33只鸟类、1.67只爬行动物（比如蜥蜴）、1.48只两栖动物、1.38条鱼、还有2.16只无脊椎动物。</p><p>5、<a href="https://qntm.org/plants" target="_blank" rel="noreferrer">有限状态机与正则表达式</a>（英文）</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122611.jpg" alt="" loading="lazy"></p><p>有限状态机和正则表达式是等效的，作者举了一个两者转换的形象的例子。</p><p>6、<a href="https://www.therobinlord.com/making-a-digital-clock-in-google-sheets/" target="_blank" rel="noreferrer">谷歌表格制作数字时钟</a>（英文）</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122612.jpg" alt="" loading="lazy"></p><p>作者介绍如何使用函数，在谷歌表格里面制作一个自动计时的数字时钟。</p><p>7、<a href="https://lispmachine.wordpress.com/2014/12/05/how-much-math-you-need-for-programming/" target="_blank" rel="noreferrer">编程需要多少数学？</a>（英文）</p><p>这是一个程序员学习数学的体会。结论很简单：你不需要懂数学就可以成为一流的程序员，但是通过学习数学，可以了解更多解决问题的方法。</p><p>8、<a href="https://web.archive.org/web/20201228005247if_/https://planflow.dev/blog/why-mobile-first-is-a-bad-idea" target="_blank" rel="noreferrer">移动优先为什么是一个坏主意？</a>（英文）</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122808.jpg" alt="" loading="lazy"></p><p>很多人提倡，网站的样式应该“移动优先”（mobile first）。作者认为，这种想法不正确，应该优先设计桌面端的样式，然后再考虑移动端。</p><p>9、<a href="https://josephg.com/blog/3-tribes/" target="_blank" rel="noreferrer">三个编程部落</a>（英文）</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122901.jpg" alt="" loading="lazy"></p><p>一篇探讨编程哲学的文章。作者认为，有三种不同的对待编程的观点，一种认为代码是艺术，一种认为代码是为硬件服务的，一种认为代码是为了创造新东西。</p><p>10、<a href="https://justyy.com/archives/44793" target="_blank" rel="noreferrer">如何通过 CloudFlare Worker 搭建负载均衡服务器</a>（中文）</p><p>Cloudflare Worker 是一种 Serverless 服务，本文给出示例，用它实现负载均衡器，每月可以免费10万次请求。（<a href="https://github.com/ruanyf/weekly/issues/1576" target="_blank" rel="noreferrer">@DoctorLai</a> 投稿）</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://github.com/salomonelli/best-resume-ever" target="_blank" rel="noreferrer">best-resume-ever</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020123011.jpg" alt="" loading="lazy"></p><p>一个基于 Web 的简历模板，可以生成网页简历，然后用浏览器打印成 PDF 文件。</p><p>2、<a href="https://github.com/LibrePhotos/librephotos" target="_blank" rel="noreferrer">librephotos</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020123108.jpg" alt="" loading="lazy"></p><p>一个自托管的相册应用，后端是 Django，前端是 React。</p><p>3、<a href="https://github.com/vijishmadhavan/ArtLine" target="_blank" rel="noreferrer">ArtLine</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010102.jpg" alt="" loading="lazy"></p><p>一个深度学习项目，将照片转为线条素描画，这里有可以运行的 <a href="https://github.com/jwenjian/artline-demo" target="_blank" rel="noreferrer">Demo</a>（Flask 应用）。（<a href="https://github.com/ruanyf/weekly/issues/1571" target="_blank" rel="noreferrer">@jwenjian</a> 投稿）</p><p>4、<a href="https://github.com/62726164/a-survey-of-security-dot-txt" target="_blank" rel="noreferrer">ssdt</a></p><p>网站的 security.txt 文件提供安全漏洞的联系信息。这个项目抓取了世界前100万个网站的 security.txt 文件。</p><p>5、<a href="https://www.quaxio.com/pure_css_digital_clock.html" target="_blank" rel="noreferrer">pure CSS digital clock</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010410.jpg" alt="" loading="lazy"></p><p>一个纯 CSS 的数字时钟。但是，CSS 无法获取当前时间，所以只能显示为从12点开始。</p><p>6、<a href="https://pipedream.com/" target="_blank" rel="noreferrer">Pipedream</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010413.jpg" alt="" loading="lazy"></p><p>一个计算平台，可以监听网络应用的各种事件，从而触发各种事先设定的操作。</p><p>7、<a href="https://github.com/russellgoldenberg/scrollama" target="_blank" rel="noreferrer">Scrollama.js</a></p><p>一个网页滚动效果的封装库，基于 IntersectionObserver API。</p><p>8、<a href="https://openai.com/blog/dall-e/" target="_blank" rel="noreferrer">DALL-E</a></p><p>OpenAI 公司又推出了一个神奇的软件 DALL-E，可以根据文字描述自动生成图片。下面的图片都是软件生成的。</p><p>立方体的豪猪</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010608.jpg" alt="" loading="lazy"></p><p>写着 OpenAI 的店面</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010609.jpg" alt="" loading="lazy"></p><p>鳄梨状的椅子</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010610.jpg" alt="" loading="lazy"></p><p>阁楼卧室有一个鱼缸，旁边是床</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010611.jpg" alt="" loading="lazy"></p><p>9、<a href="https://myicon.io/" target="_blank" rel="noreferrer">My Icon</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010705.jpg" alt="" loading="lazy"></p><p>一套免费图标，用来更换 iOS 14 的图标。一共有几千个图标可供选择，还允许自定义和编辑。</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、<a href="https://pipci.jeffgeerling.com/" target="_blank" rel="noreferrer">树莓派的 PCI Express 兼容设备</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122815.jpg" alt="" loading="lazy"></p><p>树莓派 Raspberry Pi 4 配有一个 PCI Express 1x 接口。该网站列出各种可以兼容这个接口的设备。</p><p>2、<a href="https://sixcolors.com/post/2020/12/20-macs-for-2020-1-imac-g3/" target="_blank" rel="noreferrer">苹果历史上的20个产品</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122908.jpg" alt="" loading="lazy"></p><p>一组英语的系列文章，一共20篇，详细回顾苹果公司历史上具有重要意义的20个产品，每个产品都会深入介绍历史背景和设计制造过程。第一篇就是乔布斯回归苹果后的第一个产品 iMac G3。</p><p>3、<a href="https://madaidans-insecurities.github.io/guides/linux-hardening.html" target="_blank" rel="noreferrer">Linux 加固指南</a>（Linux Hardening Guide）</p><p>这篇英语长文整理了各种 Linux 的调整步骤，使得它变得更安全。（<a href="https://github.com/ruanyf/weekly/issues/1582" target="_blank" rel="noreferrer">@alaskasquirrel</a> 投稿）</p><p>4、<a href="https://github.com/TurboWay/bigdata_analyse" target="_blank" rel="noreferrer">bigdata_analyse</a></p><p>这个仓库收集一些真实的大数据分析案例，用来了解如何处理不同行业的分析指标。目前有4个案例，包括1亿条淘宝用户行为数据分析、7000条租房数据分析等等。（<a href="https://github.com/ruanyf/weekly/issues/1577" target="_blank" rel="noreferrer">@TurboWay</a> 投稿）</p><p>5、<a href="https://github.com/521xueweihan/HelloGitHub/blob/master/content/57/HelloGitHub57.md" target="_blank" rel="noreferrer">Hello GitHub（第 57 期）</a></p><p>分享GitHub上有趣，入门级的开源项目的月刊，帮你找到编程的乐趣。（<a href="https://github.com/ruanyf/weekly/issues/128#issuecomment-751546156" target="_blank" rel="noreferrer">@ 521xueweihan</a> 投稿）</p><p>6、 <a href="https://github.com/geektutu/high-performance-go" target="_blank" rel="noreferrer">Go 语言高性能编程</a></p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010103.jpg" alt="" loading="lazy"></p><p>免费的中文电子书，作者介绍了 Go 程序提高性能的一些技巧。（<a href="https://github.com/ruanyf/weekly/issues/1575" target="_blank" rel="noreferrer">@geektutu</a> 投稿）</p><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>1、<a href="https://petapixel.com/2016/04/09/reshot-old-photos-see-china-changed-100-years/" target="_blank" rel="noreferrer">同一个地点的今昔对比</a></p><p>美国摄影师 Dheera Venkatraman 旅行中国，在一些近100年前老照片的相同拍摄地点，拍摄今昔对比。</p><p>兰州黄河铁桥。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010307.jpg" alt="" loading="lazy"></p><p>贵阳北天主教堂。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010308.jpg" alt="" loading="lazy"></p><p>杭州苏堤。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010309.jpg" alt="" loading="lazy"></p><p>宜宾三江汇流处。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010310.jpg" alt="" loading="lazy"></p><p>2、<a href="https://mobile.twitter.com/alfred_twu/status/1345959947452911616" target="_blank" rel="noreferrer">游戏的城市类型</a></p><p>很多城市建设类游戏，有不同类型的城市设计。</p><p>《模拟城市》（SimCity）中，大多数玩家会建造一个有很多建筑物的大型市中心。这时，停车就成了问题，游戏设计者假设停车场都在地下。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010604.jpg" alt="" loading="lazy"></p><p>《城市天际线》（Cities Skylines）跟《模拟城市》很相似，存在一个市中心，但是不提倡私人轿车，更多使用公共交通，跟北欧的城市很相似。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010607.jpg" alt="" loading="lazy"></p><p>斯洛伐克的游戏《苏维埃共和国》（Workers &amp; Resources: Soviet Republic）的设计是，如果玩家允许人们拥有汽车，则必须建造地面的停车场。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010605.jpg" alt="" loading="lazy"></p><p>如果不提供私人汽车，那么城市居住区必须非常紧凑，大多数设施都在步行距离之内，公共汽车和火车用来将人们带到污染严重而无法安居的工厂区。</p><p><img src="https://www.wangbase.com/blogimg/asset/202101/bg2021010606.jpg" alt="" loading="lazy"></p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<a href="https://zh.wikipedia.org/wiki/%E4%B8%80%E6%A0%B9%E7%B4%85%E8%89%B2%E8%BF%B4%E7%B4%8B%E9%87%9D" target="_blank" rel="noreferrer">一枚红色回形针</a></p><p>2006年，一个加拿大年轻人通过互联网，进行以物易物。他通过14次交易，用一枚红色回形针换到一栋房子。这件事引起了世界范围的极大轰动。</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122603.jpg" alt="" loading="lazy"></p><ol><li>2005年7月14日，他用红色回形针交换一只鱼造型的笔。</li><li>同一天，他用鱼造型的笔交换手工雕刻的门把。</li><li>2005年7月25日，他用门把交换一台携带式炉具（附燃料）。</li><li>2005年9月24日，他用炉具交换本田发电机。</li><li>2005年11月16日，他用发电机交换一个“临时派对套组”：包括一个空的小桶子、一张可以换到装满那个小桶的酒的借据，一个百威啤酒的霓虹标志。</li><li>2005年12月8日，他把“临时派对套组”交换Ski-Doo牌雪上摩托车。</li><li>不到一周，他用雪上摩托车换到一趟前往不列颠哥伦比亚省的双人行程。</li><li>2006年1月7日，他用这趟旅行的同行权换成一辆箱型卡车。</li><li>2006年2月22日，他把车子换成了唱片合约。</li><li>2006年4月11日，他把唱片合约交给歌手乔迪·玛丽·格南，换到了亚利桑那州凤凰城公寓房间的一年租约。</li><li>2006年4月26日，他用在凤凰城住一年的租金换到与埃利斯·库珀共度一个下午的权利。</li><li>2006年5月26日，他把与埃利斯·库珀共度一个下午的权利换成接吻乐团的电动雪花球。</li><li>2006年6月2日，他用雪花球和导演科宾·本森换到一个在电影《Donna on Demand》中饰演角色的权利。</li><li>2006年7月5日，他将电影角色换成一栋位于萨斯喀彻温省的两层农舍。</li></ol><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122604.jpg" alt="" loading="lazy"></p><p>萨斯喀彻温省的一座公园为了纪念这个事件，设立了一个红色回形针艺术品，这同时也创下世界上最大回形针的纪录。</p><p><img src="https://www.wangbase.com/blogimg/asset/202012/bg2020122605.jpg" alt="" loading="lazy"></p><p>2、<a href="https://www.ben-evans.com/benedictevans/2020/12/21/google-bundling-and-kill-zones" target="_blank" rel="noreferrer">捆绑销售</a></p><p>1950年代，一辆新车通常没有转向信号灯。那是一种单独的产品，你必须单独购买，然后自己安装。</p><p>1960年，福特汽车公司把收音机做进了汽车。收音机生产商就把福特汽车告上了法庭，法院不得不裁决，收音机到底是汽车必不可少的一部分，还是可选的组件？</p><p>上个世纪80年代，文字处理软件没有文字计数、脚注、图表等功能，甚至都不支持横向打印。这些功能都是来自不同公司的单独产品，你必须以50美元～100美元的价格购买。</p><p>随着时间的流逝，文字处理软件集成的功能越来越多，那些需要单独购买的功能，逐一集成进入了产品。这杀死了很多第三方产品，对于那些产品来说，这实际上是不公平的竞争。</p><p>今天，苹果和谷歌的智能手机操作系统，到底应该包含什么功能，依然是争论的焦点。如果一家公司具有市场支配地位，不断在其产品中添加了别的软件已有的功能，应该鼓励还是禁止这种行为？</p><p>人们有时会争辩说，有些功能“显然”是必不可少的（比如汽车的刹车功能），有些功能“显然”是可选的。但这是一个模糊的定义，并且会随着时间而变化。1990年代中期，PC 电脑并未配备 TCP/IP 协议栈，那是需要购买的单独产品。后来，微软和苹果把 TCP/IP 加入了操作系统，有人非常认真地提出这需要干预，微软应该把网络协议栈、文件系统等等都做成可选项。</p><p>即使操作系统允许用户选择某些功能和组件，很多用户其实也没有能力理解和评估选择。你打开计算机，操作系统询问你要使用哪个 Web 浏览器和哪个媒体播放器，大多数用户只会选择默认设置，并且以后再也不更改了。</p><p>这就是捆绑问题的复杂性。一方面，无法轻易判断，哪些功能可以捆绑销售，哪些不可以；另一方面，即使平台允许用户更换其他技术方案，大多数消费者也没有能力，决定应该选择哪一种技术方案。目前来看，操作系统到底可以做到多大，完全取决于厂商的意愿。</p><h2 id="言论与数字" tabindex="-1">言论与数字 <a class="header-anchor" href="#言论与数字" aria-label="Permalink to &quot;言论与数字&quot;">​</a></h2><p>1、</p><p>美国每天大约有55,000首新曲目（含纯音乐）上传到网上。</p><p>-- <a href="https://www.billboard.com/articles/business/9500546/streaming-music-growth-stalled-factors-attention-economy" target="_blank" rel="noreferrer">《音乐流媒体是否正在停滞不前？》</a></p><p>2、</p><p>100年前，由于汽车的诞生，乱穿马路才变成非法。</p><p>-- <a href="https://www.virginiamercury.com/2020/12/21/jaywalking-decriminalization-is-coming-to-virginia-100-years-after-the-auto-industry-helped-make-it-a-crime/" target="_blank" rel="noreferrer">《乱穿马路非法100周年》</a></p><p>3、</p><p>只要那些现金充足的人没有其他地方可以投入资金，估值就无关紧要。</p><p>-- <a href="https://news.ycombinator.com/item?id=25555452" target="_blank" rel="noreferrer">Hacker News 读者</a>，评论特斯拉的股价过去一年涨了8倍。</p><p>4、</p><p>根据一些研究，中国人的中位数年龄现在高于美国，并且继续上升。所以，即使中国人均收入比美国低得多，年龄却更老。中国在富裕之前变老，已经成为了现实。</p><p>-- <a href="https://noahpinion.substack.com/p/chinese-demography" target="_blank" rel="noreferrer">《中国人口正在萎缩》</a></p><p>5、</p><p>如果技术继续这样高速发展，那么拥有先进技术、同时人口较少的国家可能会从中受益匪浅。因为人口少，负担得起失业人口，无需考虑维持就业率的问题，可以没有后顾之忧，大力发展机器人经济所需的基础设施。人口众多、技术落后的发展中国家将受害最深。</p><p>-- <a href="https://news.ycombinator.com/item?id=25558221" target="_blank" rel="noreferrer">Hacker News 读者</a></p><p>6、</p><p>我之前在一家独角兽工作，后来辞职去了创业公司，上班第一天就感到比以前下降了一个等级。以前的办公室非常漂亮，现在的办公室是一个堆放着硬件零件的漆黑小房间，研究着一种不知前途的产品，由于各种令人烦恼的小问题，要花很多年才能进入大众市场。</p><p>-- <a href="https://yolken.net/blog/quitting-a-new-job" target="_blank" rel="noreferrer">《入职两个月后辞职》</a></p><h2 id="回顾" tabindex="-1">回顾 <a class="header-anchor" href="#回顾" aria-label="Permalink to &quot;回顾&quot;">​</a></h2><p>2020年的本周（第 90 期）：<a href="http://www.ruanyifeng.com/blog/2020/01/weekly-issue-90.html" target="_blank" rel="noreferrer">管人和技术是两种不同的能力</a></p><p><img src="https://www.wangbase.com/blogimg/asset/201912/bg2019120604.jpg" alt="" loading="lazy"></p><p>2019年的本周（第 38 期）：<a href="http://www.ruanyifeng.com/blog/2019/01/weekly-issue-38.html" target="_blank" rel="noreferrer">使用越方便，技术实现越复杂</a></p><p><img src="https://www.wangbase.com/blogimg/asset/201901/bg2019010401.jpg" alt="" loading="lazy"></p><h2 id="订阅" tabindex="-1">订阅 <a class="header-anchor" href="#订阅" aria-label="Permalink to &quot;订阅&quot;">​</a></h2><p>这个周刊每周五发布，同步更新在<a href="http://www.ruanyifeng.com/blog" target="_blank" rel="noreferrer">阮一峰的网络日志</a>和<a href="http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97" target="_blank" rel="noreferrer">微信公众号</a>。</p><p>微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg" alt="" loading="lazy"></p><p>（完）</p>',217)]))}const m=a(l,[["render",s]]);export{w as __pageData,m as default};
