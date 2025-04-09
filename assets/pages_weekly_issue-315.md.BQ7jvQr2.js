import{_ as a,c as t,o as r,a2 as p}from"./chunks/framework.mEAph8pv.js";const c=JSON.parse('{"title":"科技爱好者周刊（第 315 期）：一份谷歌离职报告","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊（第 315 期）：一份谷歌离职报告","slug":"科技爱好者周刊-第-315-期-一份谷歌离职报告","link":"#科技爱好者周刊-第-315-期-一份谷歌离职报告","children":[]}],"relativePath":"pages/weekly/issue-315.md","filePath":"pages/weekly/issue-315.md","lastUpdated":1725034866000}'),l={name:"pages/weekly/issue-315.md"};function o(s,e,n,g,i,b){return r(),t("div",null,e[0]||(e[0]=[p('<h1 id="科技爱好者周刊-第-315-期-一份谷歌离职报告" tabindex="-1">科技爱好者周刊（第 315 期）：一份谷歌离职报告 <a class="header-anchor" href="#科技爱好者周刊-第-315-期-一份谷歌离职报告" aria-label="Permalink to &quot;科技爱好者周刊（第 315 期）：一份谷歌离职报告&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。</p><p>本杂志<a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">开源</a>，欢迎<a href="https://github.com/ruanyf/weekly/issues" target="_blank" rel="noreferrer">投稿</a>。另有<a href="https://github.com/ruanyf/weekly/issues/4911" target="_blank" rel="noreferrer">《谁在招人》</a>服务，发布程序员招聘信息。合作请<a href="mailto:yifeng.ruan@gmail.com" target="_blank" rel="noreferrer">邮件联系</a>（yifeng.ruan@gmail.com）。</p><h2 id="封面图" tabindex="-1">封面图 <a class="header-anchor" href="#封面图" aria-label="Permalink to &quot;封面图&quot;">​</a></h2><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082605.webp" alt="" loading="lazy"></p><p>入夜后，大理洱海上亮起无数鱼灯，吸引鱼类浮上水面，渔民趁机捕捉，消灭外来的西太公鱼。（<a href="https://news.haiwainet.cn/n/2024/0820/c3541083-32782962.html" target="_blank" rel="noreferrer">via</a>）</p><h2 id="一份谷歌离职报告" tabindex="-1">一份谷歌离职报告 <a class="header-anchor" href="#一份谷歌离职报告" aria-label="Permalink to &quot;一份谷歌离职报告&quot;">​</a></h2><p>上周，我看到一篇<a href="https://tinystruggles.com/posts/google_postmortem/" target="_blank" rel="noreferrer">有趣的文章</a>。一位谷歌 SRE 工程师离职了。</p><p>她负责服务器的运维，平时要为网站故障写分析报告（postmortem），现在离职了，就为自己的离职也写了一份分析报告。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082015.webp" alt="" loading="lazy"></p><p>她写得非常坦率，说了心里话，也透露了很多谷歌公司的情况。信息量挺大的，下面分享给大家，碍于篇幅，有所删节。</p><p><strong>（1）我的基本情况。</strong> 2015年，我从波兰的大学毕业，加入谷歌，来到爱尔兰分公司，担任 SRE 工程师。</p><p>入职时，我的职级是 L3，9个月内就晋升到 L4，一年后晋升到 L5，现在是 L6。</p><p><strong>（2）我从谷歌得到了什么。</strong> 在谷歌待了九年后，我在本周离职。回顾这九年，我得到了很多东西。</p><p>首先，我得到了大量的钱。</p><p>其次，我得到了工程技能，理解了复杂的大型网站系统，还拥有处理生产故障和调试机器的世界一流的技能。</p><p>再次，我得到了领导和管理团队的技能，以及成为一家巨型技术公司一员的满足感。</p><p>最后，我得到了各种福利，比如办公室、游泳池、健身房、体育课程、每周按摩、美味和健康的膳食、医疗保健等，还有好玩且舒适的异地出差和商务旅行机会。</p><p><strong>（3）谷歌的变化。</strong> 现在的谷歌，相比我刚加入时，发生了很多变化，已经不再那么有趣和酷炫了。</p><p>以前，谷歌的技术是顶尖的。现在，其他公司的技术水平，正在接近谷歌。</p><p>谷歌的内部预算也在削减，我们的商务旅行减少了，裁员不断。公司还把招聘名额转移到更廉价的地区。这对我产生了直接影响，我没法为自己的团队招人了。</p><p>这些年来，谷歌内部的安全制度和规章，不断增加，越来越繁琐。公司的内部系统，以及各种团队之间的关系，变得非常复杂。这减慢了我们的开发速度，并带来了许多艰巨的工程挑战。</p><p>对于我们来说，理解公司内部系统，成了越来越大的负担。你需要牢记无数的系统和技术细节，其中任何一个都可能对你产生影响（对于 SRE 工程师尤其如此）。新入职的员工可能需要一年的时间才能完全理解这些东西，这太疯狂了。</p><p>很多时候，我觉得自己被会议、重复性劳动、资源不足的团队工作，压得喘不过气，但同时又没有良好的成长机会。</p><p>公司两次承诺我，可以扩招手下的员工，但是两次都被取消了。我觉得，现在的工作没有充分发挥我的能力，但是在公司内部，又找不到发挥的方式。</p><p>与此同时，谷歌的高管们不提供支持和反馈，也几乎没有任何监督。你问他们下一步如何开展工作，他们会不知所措，让你自己去解决。</p><p><strong>（4）我的想法改变了。</strong> 那些曾经吸引我的东西，已经不再有很强的吸引力了。</p><p>我已经达到并且超过了自己的财务目标。</p><p>我对谷歌技术的迷恋，逐渐变少。实际工作中遇到的技术问题，也不再那么令人兴奋。</p><p>我的兴趣转移到了其他方面。SRE 工程师跟我的兴趣和性格都不太符合。我是一个乐观和有创造力的人，但是 SRE 岗位要求稳重和保守。另外，长期夜班扰乱了我的睡眠，SRE 要求“七天24小时在线”使我很难放下工作。</p><p>我想离开 SRE 换个岗位，而爱尔兰又没有太多其他岗位可选择。由于惰性和个人原因，我也没有申请去其他地区。老实说，谷歌是一家以美国为中心的公司，只要你不在美国总部，推进任何事情都很麻烦，很容易感到孤立和边缘化。</p><p>我在谷歌看不到大的升迁机会。我已经是 L6 工程师了，在工程领域到顶了。我对 L7 并不真正感兴趣，因为 L7 更多是一种政治角色，不是工程角色，并且也很难说手下会管理多少人。如果我有机会自己领导一个大团队，我可能愿意留下来，否则我更渴望创办自己的公司。</p><p><strong>（5）其他想法。</strong> 回顾这九年，我感到自己很幸运。</p><p>谷歌的股票表现非常好，再加上我的快速晋升和高绩效，使得个人收入很不错。我经过仔细思考后，对这些收入做出的财务决策，也很正确，给我带来了更多财务回报。</p><p>我在谷歌认识了大量的人，建立了许多关系。我雇用的员工也都非常可靠。</p><p>我有一些后悔没有做的事情。最主要的就是，我本应该早点退出 SRE，申请转移到其他国家，从一开始我就知道 SRE 不是我想要的。我只是坐等情况发生变化，结果没有如愿，现在我知道了，我应该主动寻求变化。</p><h2 id="微软工程师的薪资" tabindex="-1">微软工程师的薪资 <a class="header-anchor" href="#微软工程师的薪资" aria-label="Permalink to &quot;微软工程师的薪资&quot;">​</a></h2><p>上周，一家<a href="https://www.businessinsider.com/microsoft-spreadsheet-shows-pay-engineers-2024-8" target="_blank" rel="noreferrer">美国媒体</a>获得一张电子表格，里面是500多个微软员工自愿分享的自己的薪资数据。</p><p>这家媒体就统计了微软各级别工程师的平均薪资。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082301.webp" alt="" loading="lazy"></p><p>上图可以看到，2024年美国互联网大厂的程序员的收入水平。微软最低的59级工程师，基本工资也超过了12万美元。这是很高的收入，跟美国大学普通的正教授差不多了。</p><p>程序员的收入，最主要由职级决定，职级越高，收入越高。这就是为什么大厂程序员那么看重晋升的原因。</p><p>但是，不同职级的基本工资，相差不是那么大，收入差异主要由奖金和股票决定，高职级的绩效收入远大于基本工资。</p><p>当然，由于数据总量比较小，上表肯定不完全准确，只能作为参考。</p><h2 id="活动通知-动手练习-ai-编程" tabindex="-1">[活动通知] 动手练习 AI 编程 <a class="header-anchor" href="#活动通知-动手练习-ai-编程" aria-label="Permalink to &quot;[活动通知] 动手练习 AI 编程&quot;">​</a></h2><p>AI 编程工具是眼下的热点，大家都在探索，怎么将 AI 用于编程。</p><p>明天（8月31日）下午，就有一场 AI 编程的动手活动，由豆包 MarsCode 官方主办。</p><p>豆包 MarsCode 是字节旗下的 AI 编程工具，具有代码生成、补全、智能预测等功能。到时，<strong>字节工程师将一对一指导大家，动手实操</strong>，通过 AI 完成你的软件开发构想。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082807.webp" alt="" loading="lazy"></p><p>你可以跟小伙伴组队报名（每队最多3人），也可以单人组队，在 AI 的帮助下，现场编码完成一个小游戏。</p><p>工程师会在现场指导和答疑，最后<strong>每组进行作品展示，评出优秀作品，领取奖品</strong>。</p><p>希望动手练习 AI 的同学，明天下午不要错过这次免费活动的机会，活动地点在北京的抖音工区。</p><p>点击<a href="https://www.bagevent.com/event/8901648?bag_track=ryf" target="_blank" rel="noreferrer">这个链接</a>，或者扫描上方海报的二​维​码，了解活动详情并报名。如果你不在北京，可以参加豆包 MarsCode 的<a href="https://sourl.co/ZHGytq" target="_blank" rel="noreferrer">征文活动</a>，题材不限，奖品丰富。</p><h2 id="科技动态" tabindex="-1">科技动态 <a class="header-anchor" href="#科技动态" aria-label="Permalink to &quot;科技动态&quot;">​</a></h2><p>1、<a href="https://www.sohu.com/a/802511112_121873449" target="_blank" rel="noreferrer">载人飞艇</a></p><p>8月20日上午6时，中国的载人飞艇 AS700 从湖北荆门起飞，飞行近1000公里，于次日中午12点达到广西桂林。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082606.webp" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082607.webp" alt="" loading="lazy"></p><p>由于中间有落地休整，整个飞行时间是12小时44分钟。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082608.webp" alt="" loading="lazy"></p><p>飞艇到达桂林后，从8月23日开始20天的展演。如果这段时间你在阳朔，每天中午就可以看到它在飞行。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082609.webp" alt="" loading="lazy"></p><p>它最大载人数10人（含一名驾驶员），飞行高度500米到2000米，最长航时10小时，最大航程700公里。</p><p>它主要用于旅游出行，空中观光，甚至举办“云端婚礼”。由于内部是氦气，所以非常安全。</p><p>2、<a href="https://kottke.org/21/03/the-invention-of-a-new-pasta-shape" target="_blank" rel="noreferrer">新形状意大利面</a></p><p>意大利面的酱汁，需要吸附在面条上，这样才好吃。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202407/bg2024072612.webp" alt="" loading="lazy"></p><p>一位美国网红别出心裁，使用计算机设计了一种新形状的意大利面条。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202407/bg2024072613.webp" alt="" loading="lazy"></p><p>据说，这种新型面条的表面褶皱尽量最大化，以便吸附更多的酱汁，同时还要保证足够的弹性，以便产生良好的口感。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202407/bg2024072614.webp" alt="" loading="lazy"></p><p>它每包的售价高达200多元人民币，一上市就售罄。</p><p>3、<a href="https://arstechnica.com/gadgets/2024/08/acemagics-x1-is-a-clever-but-delicate-approach-to-dual-screen-laptops/" target="_blank" rel="noreferrer">折叠屏笔记本</a></p><p>一家深圳公司推出了折叠屏笔记本，具有两个折叠在一起的屏幕。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082501.webp" alt="" loading="lazy"></p><p>以前的双屏笔记本，基本都没有实体键盘，用其中一块触摸屏当作键盘，或者外接键盘。</p><p>但是，这款笔记本别出心裁，使用铰链将两块屏幕连在一起。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082502.webp" alt="" loading="lazy"></p><p>所以，它的第二块屏幕可以反转，放在主屏幕的背面（上图），也可以向左翻，作为侧屏（下图）。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082503.webp" alt="" loading="lazy"></p><p>根据用过的人说，左侧的侧屏，对于使用者非常有用。但是，重心有点不稳，用力击键时，侧屏会抖动。</p><p>从它可以看出，笔记本这种成熟产品，还是有很大的创新空间。</p><p>4、<strong>其他</strong></p><p>（1） <a href="https://www.idownloadblog.com/2024/08/22/iphone-16-jpeg-xl-rumor/" target="_blank" rel="noreferrer">iPhone 16 系列</a>据报道将支持 JPEG-XL 格式的图片，体积是 JPEG 的三分之一。</p><p>（2）<a href="https://china.chinadaily.com.cn/a/202408/29/WS66d00abba310b35299d39168.html" target="_blank" rel="noreferrer">中国互联网络信息中心</a>（CNNIC）统计，截止6月底，中国注册的域名共3187万个，其中<code>.cn</code>域名1956万个。</p><p>同一份报告称，中国网民的95.5%看短视频，65.2%看长视频。</p><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<a href="https://www.sheshbabu.com/posts/visual-explanation-of-saml-authentication/" target="_blank" rel="noreferrer">SAML 身份验证的可视化解释</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202407/bg2024072503.webp" alt="" loading="lazy"></p><p>SAML 是企业常用的身份验证协议和 SSO（单点登录）解决方案。本文解释它是什么。</p><p>2、<a href="https://piccalil.li/blog/styling-tables-the-modern-css-way/" target="_blank" rel="noreferrer">现代 CSS 方式设置 table 样式</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202407/bg2024072504.webp" alt="" loading="lazy"></p><p>本文介绍怎么用现代 CSS，对网页的<code>&lt;table&gt;</code>标签进行样式设置。</p><p>3、<a href="https://www.fffuel.co/svg-spinner/" target="_blank" rel="noreferrer">如何制作 SVG 加载器</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202407/bg2024072508.webp" alt="" loading="lazy"></p><p>本文一步步讲解，如何写 SVG 代码，生成一个“正在加载中”的动画图标。</p><p>4、<a href="https://endtimes.dev/why-lowercase-letters-save-data/" target="_blank" rel="noreferrer">小写可以减少压缩文件体积</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202407/bg2024072512.webp" alt="" loading="lazy"></p><p>本文解释为什么将大写字母改成小写后，文件的压缩体积会变小，是一篇压缩算法的简介。</p><p>5、<a href="https://jvns.ca/blog/2024/01/26/inside-git/" target="_blank" rel="noreferrer">.git 子目录内部</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202407/bg2024072610.webp" alt="" loading="lazy"></p><p>Git 仓库的元数据都保存在 .git 子目录，本文解释该子目录里面每一项的作用。</p><p>6、<a href="https://tonsky.me/blog/checkbox/" target="_blank" rel="noreferrer">方形复选框的记忆</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202407/bg2024072611.webp" alt="" loading="lazy"></p><p>作者认为，设计师应该遵守一个约定：复选框是方形的，单选框是圆形的。</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://github.com/coollabsio/coolify" target="_blank" rel="noreferrer">Coolify</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082701.webp" alt="" loading="lazy"></p><p>一个开源的应用运行平台，相当于自己搭建一个 Heroku / Netlify / Vercel 替代品，各种应用可以轻松在上面运行。</p><p>2、<a href="https://ente.io/auth/" target="_blank" rel="noreferrer">Ente Auth</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202405/bg2024052603.webp" alt="" loading="lazy"></p><p>一个开源的双因素认证码管理器。</p><p>3、<a href="https://github.com/JackySoft/marsview" target="_blank" rel="noreferrer">Marsview</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082512.webp" alt="" loading="lazy"></p><p>一款面向后台的低代码可视化搭建平台，快速搭建中后台管理系统。（<a href="https://github.com/ruanyf/weekly/issues/5060" target="_blank" rel="noreferrer">@JackySoft</a> 投稿）</p><p>4、<a href="https://notionexporter.com/" target="_blank" rel="noreferrer">Notion Exporter</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082808.webp" alt="" loading="lazy"></p><p>一个浏览器插件，将 Notion 内容导出为长图或卡片，同时保留排版格式。（<a href="https://github.com/ruanyf/weekly/issues/5079" target="_blank" rel="noreferrer">@Shanshi66</a> 投稿）</p><p>5、<a href="https://deepesh-01.github.io/battery_indicator/" target="_blank" rel="noreferrer">电池的电量显示</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202311/bg2023112807.webp" alt="" loading="lazy"></p><p>该网站使用一个简单的脚本（<a href="https://deepesh-01.github.io/battery_indicator/app.js" target="_blank" rel="noreferrer">源码</a>），显示当前设备的电池电量百分比。</p><p>6、<a href="https://github.com/tapjs/tsimp" target="_blank" rel="noreferrer">tsimp</a></p><p>一个 Node.js 的 TypeScript 加载器，也就是说，它可以让 Node.js 运行 TS 脚本。</p><p>7、<a href="https://github.com/krupkat/xpano" target="_blank" rel="noreferrer">xpano</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202311/bg2023112905.webp" alt="" loading="lazy"></p><p>一个自动拼接多张照片的工具。</p><p>8、<a href="https://concrete.style/" target="_blank" rel="noreferrer">concrete.css</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202402/bg2024020806.webp" alt="" loading="lazy"></p><p>一个简单的、无类的 CSS 极简框架，受到 <a href="https://milligram.io/" target="_blank" rel="noreferrer">Milligram</a> 和 <a href="http://getskeleton.com/" target="_blank" rel="noreferrer">Skeleton</a> 的启发。</p><p>9、<a href="https://peoplegraphmaker.com/" target="_blank" rel="noreferrer">Person Diagram</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202402/bg2024020108.webp" alt="" loading="lazy"></p><p>一个玩具应用，在线制作人口比重图（占总人口的比重）。</p><h2 id="ai-相关" tabindex="-1">AI 相关 <a class="header-anchor" href="#ai-相关" aria-label="Permalink to &quot;AI 相关&quot;">​</a></h2><p>1、<a href="https://modelscope.cn/studios/chostem/ancient_Chinese_text_generator" target="_blank" rel="noreferrer">现代文转古文大模型</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082511.webp" alt="" loading="lazy"></p><p>输入现代汉语句子，生成古汉语风格的句子，<a href="https://github.com/JianXiao2021/ancient_text_generation_LLM" target="_blank" rel="noreferrer">代码开源</a>。（<a href="https://github.com/ruanyf/weekly/issues/5057" target="_blank" rel="noreferrer">@JianXiao2021</a> 开源）</p><p>2、<a href="https://github.com/Kedreamix/Linly-Dubbing" target="_blank" rel="noreferrer">Linly-Dubbing</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082805.webp" alt="" loading="lazy"></p><p>AI 视频配音的开源工具，自动将外语视频改成中文配音。（<a href="https://github.com/ruanyf/weekly/issues/5074" target="_blank" rel="noreferrer">@Y024</a> 投稿）</p><p>3、<a href="https://github.com/Cinnamon/kotaemon" target="_blank" rel="noreferrer">kotaemon</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082806.webp" alt="" loading="lazy"></p><p>一个开源的本地工具，可以指定 AI 模型，与添加的文档聊天。（<a href="https://github.com/ruanyf/weekly/issues/5075" target="_blank" rel="noreferrer">@Y024</a> 投稿）</p><p>4、<a href="https://www.guillaume.sh/watson" target="_blank" rel="noreferrer">Watson AI</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082504.webp" alt="" loading="lazy"></p><p>一个开源的 Mac/Windows 桌面程序，通过系统麦克风，录制远程会议的音频，然后用 AI 生成会议记录和摘要。</p><p>5、<a href="https://fluximg.com/" target="_blank" rel="noreferrer">Fluximg.com</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082510.webp" alt="" loading="lazy"></p><p>免费使用的 Flux AI 文生图服务。（<a href="https://github.com/ruanyf/weekly/issues/5055" target="_blank" rel="noreferrer">@youyuela</a> 投稿）</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、<a href="https://github.com/meethigher/black-wukong-youji/blob/master/%E9%BB%91%E7%A5%9E%E8%AF%9D%E6%82%9F%E7%A9%BA%E5%A6%96%E6%80%AA%E5%B9%B3%E7%94%9F%E5%BD%95.md" target="_blank" rel="noreferrer">妖怪平生录</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082705.webp" alt="" loading="lazy"></p><p>这个仓库收录了游戏《黑神话：悟空》内附的203个妖怪的图片、小诗和故事。（<a href="https://github.com/ruanyf/weekly/issues/5063" target="_blank" rel="noreferrer">@meethigher</a> 投稿）</p><p>2、<a href="https://emojispark.com/" target="_blank" rel="noreferrer">Emoji Spark</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202408/bg2024082801.webp" alt="" loading="lazy"></p><p>快速匹配搜索 Emoji 的网站。（<a href="https://github.com/ruanyf/weekly/issues/5067" target="_blank" rel="noreferrer">@0xjoanne</a> 投稿）</p><p>3、<a href="https://jverzani.github.io/CalculusWithJuliaNotes.jl/" target="_blank" rel="noreferrer">使用 Julia 语言学习微积分</a>（Calculus With Julia）（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202406/bg2024060509.webp" alt="" loading="lazy"></p><p>一本在线阅读的电子书，从最简单的极限开始介绍微积分，需要计算的地方使用 Julia 语言举例。</p><p>4、<a href="https://ihavenotv.com/" target="_blank" rel="noreferrer">Documentaries</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202401/bg2024011601.webp" alt="" loading="lazy"></p><p>该网站可以免费观看英文纪录片。</p><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>1、<a href="https://www.bbc.com/future/article/20230725-making-the-blue-flash-how-i-reconstructed-a-fatal-atomic-accident" target="_blank" rel="noreferrer">还原致命的原子弹实验事故</a></p><p>1946年，负责制造原子弹的美国洛斯阿拉莫斯实验室，发生了一起致命事故。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202307/bg2023072903.webp" alt="" loading="lazy"></p><p>核物理学家路易斯·斯洛廷，带人参观实验室。他决定演示一下，原子弹的“关键组件”。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202307/bg2023072904.webp" alt="" loading="lazy"></p><p>他用螺丝刀将铍半球支撑在钚核上。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202307/bg2023072905.webp" alt="" loading="lazy"></p><p>但是，螺丝刀一滑，铍半球落到了钚核上方，引发了辐射反应。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202307/bg2023072906.webp" alt="" loading="lazy"></p><p>他立刻用手将两者分开，导致自己受到了致命辐射，九天后就去世了。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202307/bg2023072907.webp" alt="" loading="lazy"></p><p>下面是一个英国艺术家使用各种模型材料，重新还原的事故现场。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202307/bg2023072908.webp" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202307/bg2023072909.webp" alt="" loading="lazy"></p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<a href="https://waitbutwhy.com/2015/03/7-3-billion-people-one-building.html" target="_blank" rel="noreferrer">73亿人，一栋小楼</a></p><p>地球的总人口，目前是81.7亿。</p><p>10年前的2014年，总人口是73亿。</p><p>当时有人做过计算，73亿看上去是很大的数字，但并没有大家想象的那么大。</p><p>如果每个人用一粒米来代表，73亿粒米刚好填满一个边长为6.1米的立方体，大约相当于一栋两层小楼的体积。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202405/bg2024052604.webp" alt="" loading="lazy"></p><p>如果每个人用一粒沙来代表，总体积将取决于沙粒的大小。最极端的情况下，73亿粒细沙刚好填满一个2升的饮料瓶。</p><p>在地球眼里，人就是一粒米或一粒沙的大小。每天喧闹无比、仿佛宇宙中心的人类社会，不过就是一栋小楼，或者一个饮料瓶里面发生的事情。</p><h2 id="言论" tabindex="-1">言论 <a class="header-anchor" href="#言论" aria-label="Permalink to &quot;言论&quot;">​</a></h2><p>1、</p><p>问：如果网速提高到 1Tb/s，互联网会怎样？</p><p>答：会有更多、更大、更快的广告。</p><p>-- <a href="https://news.ycombinator.com/item?id=41332413" target="_blank" rel="noreferrer">Hacker News 读者</a></p><p>2、</p><p>大家都认为 Nvidia 是销售 GPU（显卡）的公司，但是实际上他们是在销售 CUDA 加速运算库，GPU 只是非常昂贵又必不可少的独家配件。</p><p>-- <a href="https://news.ycombinator.com/item?id=41361597" target="_blank" rel="noreferrer">Hacker News 读者</a></p><p>3、</p><p>我不喜欢现场听技术演讲，95%的情况收获非常少。我更喜欢看技术演讲的录像，可以仔细思考，推荐给他人。我还可以将播放速度提高到 1.5倍或2倍，如果演讲不是那么好，这样至少可以减少浪费的时间。</p><p>-- <a href="https://chelseatroy.com/2022/08/03/how-i-do-and-dont-prepare-a-talk-for-a-technical-conference/" target="_blank" rel="noreferrer">《我如何准备技术演讲》</a></p><p>4、</p><p>飞行器直立登陆月球非常困难，最近美国和日本的月球登陆器，都在登陆时倾倒了。主要原因是月球的重力只有地球的六分之一，重心稍高一点，就很容易翻倒了。</p><p>-- <a href="https://www.nytimes.com/2024/03/04/science/moon-landing-sideways-gravity.html" target="_blank" rel="noreferrer">《为什么直立登陆月球如此困难》</a></p><p>5、</p><p>敏捷宣言提出四大原则，其中之一是“正常工作的软件胜过详尽的文档”。</p><p>这条原则造成的结果，就是敏捷开发的项目，文档普遍很简陋。一项研究发现，敏捷开发的项目比不采用敏捷开发的项目，失败可能性高出268%。</p><p>-- <a href="https://www.theregister.com/2024/06/05/agile_failure_rates/" target="_blank" rel="noreferrer">theregister.com</a></p><h2 id="往年回顾" tabindex="-1">往年回顾 <a class="header-anchor" href="#往年回顾" aria-label="Permalink to &quot;往年回顾&quot;">​</a></h2><p><a href="https://www.ruanyifeng.com/blog/2023/08/weekly-issue-268.html" target="_blank" rel="noreferrer">生产力是形容机器，不是形容人</a>（2023 #268）</p><p><a href="https://www.ruanyifeng.com/blog/2022/08/weekly-issue-218.html" target="_blank" rel="noreferrer">葡萄酒，樱花，全球变暖</a>（2022 #218）</p><p><a href="https://www.ruanyifeng.com/blog/2021/07/weekly-issue-168.html" target="_blank" rel="noreferrer">游戏《底特律：变人》</a>（2021 #168）</p><p><a href="https://www.ruanyifeng.com/blog/2020/07/weekly-issue-118.html" target="_blank" rel="noreferrer">高考志愿怎么填</a>（2020 #118）</p><p>（完）</p>',209)]))}const m=a(l,[["render",o]]);export{c as __pageData,m as default};
