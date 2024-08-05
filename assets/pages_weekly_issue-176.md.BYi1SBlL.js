import{_ as e,c as a,o as t,a4 as p}from"./chunks/framework.CagPcS0d.js";const k=JSON.parse('{"title":"科技爱好者周刊（第 176 期）：中国法院承认 GPL 吗？","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊（第 176 期）：中国法院承认 GPL 吗？","slug":"科技爱好者周刊-第-176-期-中国法院承认-gpl-吗","link":"#科技爱好者周刊-第-176-期-中国法院承认-gpl-吗","children":[]}],"relativePath":"pages/weekly/issue-176.md","filePath":"pages/weekly/issue-176.md","lastUpdated":1686738890000}'),r={name:"pages/weekly/issue-176.md"},l=p('<h1 id="科技爱好者周刊-第-176-期-中国法院承认-gpl-吗" tabindex="-1">科技爱好者周刊（第 176 期）：中国法院承认 GPL 吗？ <a class="header-anchor" href="#科技爱好者周刊-第-176-期-中国法院承认-gpl-吗" aria-label="Permalink to &quot;科技爱好者周刊（第 176 期）：中国法院承认 GPL 吗？&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。</p><p>本杂志开源（GitHub: <a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">ruanyf/weekly</a>），欢迎提交 issue，投稿或推荐科技内容。</p><p>周刊讨论区的帖子<a href="https://github.com/ruanyf/weekly/issues/1913" target="_blank" rel="noreferrer">《谁在招人？》</a>，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。</p><h2 id="封面图" tabindex="-1">封面图 <a class="header-anchor" href="#封面图" aria-label="Permalink to &quot;封面图&quot;">​</a></h2><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091605.jpg" alt="" loading="lazy"></p><p>2021 世界机器人大会在北京举行，一家公司展出了“爱因斯坦”人形机器人，使用中文向学生“授课”。（<a href="https://photo.cctv.com/2021/09/11/PHOA6GQ0lb0RFhGynbF5j6U0210911.shtml" target="_blank" rel="noreferrer">via</a>）</p><h2 id="本周话题-中国法院承认-gpl-吗" tabindex="-1">本周话题：中国法院承认 GPL 吗？ <a class="header-anchor" href="#本周话题-中国法院承认-gpl-吗" aria-label="Permalink to &quot;本周话题：中国法院承认 GPL 吗？&quot;">​</a></h2><p>开源软件通常带有许可证。大家一直很想知道，如果国内用户不遵守许可证，可以去法院告他吗？</p><p>上周有一条<a href="https://www.oschina.net/news/159435" target="_blank" rel="noreferrer">新闻</a>，深圳市中级人民法院一审判决，被告违反了 GPL 许可证，赔偿侵权费50万元。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091509.jpg" alt="" loading="lazy"></p><p>很多程序员很兴奋，认为这代表 GPL 许可证得到中国法院的认可。</p><p>我仔细读了<a href="https://wenshu.court.gov.cn/website/wenshu/181107ANFZ0BXSK4/index.html?docId=05f553bd178d4354bb48ad5100c1314f" target="_blank" rel="noreferrer">判决书</a>，觉得跟大家想的不一样，这个案件很复杂，得不出法院认可 GPL 的结论。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091510.jpg" alt="" loading="lazy"></p><p>我简单说一下案情。</p><p>济宁市罗盒网络科技有限公司（以下简称“罗盒科技”）在 GitHub 开源了软件 VirtualApp，使用了 GPL 许可证。但是，他同时又声明，不得用于商业用途，除非购买商业授权。</p><p>大家觉得，这个声明有问题吗？ <strong>可以既采用 GPL 许可证，又不许用于商业用途吗？</strong></p><p>回答是，这个声明有很大问题。GPL 许可证允许商用，只要你用了这个许可证，别人就可以把你的代码用于商业用途。</p><blockquote><p>[开源小知识]</p><p>如果想禁止商用，就不能使用 Copyleft 许可证（比如 GPL），而是要添加一个自己的许可声明，比如“源码只供个人学习，不得商用，除非购买商业许可证”。</p></blockquote><p>因此，罗盒科技一开始的许可证选择，就有问题，后来果然出了问题。</p><p>有一个叫做“点心桌面”的商业 App，使用了 VirtualApp。罗盒科技就控告开发商福建风灵公司侵权，要求赔偿2000万元。</p><p>罗盒科技起诉的理由，不是对方违反 GPL，没有开源“点心桌面”，而是对方没有付款，就将代码用于商业用途。</p><p>所以，准确的说，这个案件跟 GPL 许可证没有直接关系，只跟风灵公司没有获得商业授权有关。法院最后判决被告败诉，也是这个原因。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091511.jpg" alt="" loading="lazy"></p><p>但是前面说了，GPL 许可证允许商业用途，风灵公司就抓住了这一点，为自己辩护，宣称自己使用的是项目的 GPL 版本，不是商业版本，因此可以商用。</p><p>他们没想到的是，GPL 许可证的<a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noreferrer">第八条</a>明确写明，如果使用者不开源自己的代码，GPL 授权失效。</p><blockquote><p>第八条 传播或修改代码时，如果不遵守规定的条件，授权自动终止。</p></blockquote><p>法院因此认为，风灵公司不符合条件，不能使用 GPL 为自己的商业行为辩护。所以，这个案件不是法院认可了 GPL，而是法院认为被告不适用 GPL 许可证。</p><p>假如风灵公司遵守了 GPL，公开了“点心桌面”的源码，那还构成侵权吗？我的个人看法是，那样就不侵权。</p><p>总之，GPL 在国内维权还是很困难。它是按照美国法律写的，所有中文版都是网友翻译的，有没有准确表达含义都很难说。 <strong>中国法院就算认可 GPL，也是作为代码作者与用户之间的合同看待。</strong></p><p>这意味着两点。</p><p>（1）只有代码作者才能提起侵权诉讼，其他人没法控告违反 GPL 的行为。</p><p>（2）就算胜诉，最多就是对方软件下架或者赔偿损失，很难强制开源代码，因为中国合同法没有这种先例，而且法律允许对方拒绝继续履行合同。</p><h2 id="使用-node-js-开发一个-cli-工具" tabindex="-1">使用 Node.js 开发一个 CLI 工具 <a class="header-anchor" href="#使用-node-js-开发一个-cli-工具" aria-label="Permalink to &quot;使用 Node.js 开发一个 CLI 工具&quot;">​</a></h2><p>Node.js 诞生已经超过10年了。因为它，前端开发出现了翻天覆地的变化。</p><p>直到今天，你要学习前端的主流技术，首先就要掌握 Node.js，因为所有开发都要在它下面完成。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091601.jpg" alt="" loading="lazy"></p><p>很多同学都想知道，怎么才能掌握 Node.js？</p><p>对于新人来说，其实只要掌握两个知识点，就能上手了：<strong>一个是 CommonJS 模块格式，另一个就是命令行环境</strong> （command line，简写为 CLI）。其余部分就是普通的 JavaScript 语法。</p><p>上面两个知识点之中，CommonJS 比较简单，命令行有点难，因为内容多，需要了解操作系统，以及 Node.js 提供的各种系统接口，最常用的就是文件系统接口。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091604.jpg" alt="" loading="lazy"></p><p>这一周介绍的课程，就是 <strong>《教你使用 Node.js 开发一个 CLI 工具》</strong>，教大家快速入门命令行开发。</p><p>这是一门视频课，手把手带你从零开始写一个 JS 脚本，把它做成命令行工具，并发布到 NPM 上面，可以给其它人下载使用。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091602.jpg" alt="" loading="lazy"></p><p>它不同于那些直接讲述技术点的课程，不是生硬的文档解读，而是从具体的问题出发，带出知识点，立足于教会学习者，解决现实场景中的实际问题，属于“实务导向”。</p><p>课程的主讲老师崔效瑞，有丰富的前端开发经验，是 Vue 3 的代码贡献者，也是 Element3 技术负责人、mini-vue 作者。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091603.jpg" alt="" loading="lazy"></p><p>微信扫描上方二维码报名，就可以领取这门视频课，并了解课程的详细情况。课程推广期间，<strong>不收取任何费用</strong>，保证没有套路。</p><h2 id="科技动态" tabindex="-1">科技动态 <a class="header-anchor" href="#科技动态" aria-label="Permalink to &quot;科技动态&quot;">​</a></h2><p>1、<a href="https://climeworks.com/orca" target="_blank" rel="noreferrer">二氧化碳捕捉工厂</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091101.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091102.jpg" alt="" loading="lazy"></p><p>世界目前最大的二氧化碳捕捉工厂，最近在冰岛建成了。它通过风扇吸入空气，过滤出二氧化碳，然后再将二氧化碳液化，注入地下1,000米深处的矿洞存储。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091103.jpg" alt="" loading="lazy"></p><p>二氧化碳的过度排放，是气候变暖的主要原因，目前没有好的方法吸收二氧化碳。该工厂每年只能吸收4000吨二氧化碳，只相当于800多辆汽车的排放量，而全世界2015年的二氧化碳排放量是360亿吨。（<a href="https://github.com/ruanyf/weekly/issues/1946" target="_blank" rel="noreferrer">@emac</a> 投稿）</p><p>2、<a href="https://mp.weixin.qq.com/s/9mTIHBJox5JMkrbl9nJcqA" target="_blank" rel="noreferrer">搞笑诺贝尔奖</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091303.jpg" alt="" loading="lazy"></p><p>哈佛大学每年评选（似乎）无意义的研究，颁给搞笑诺贝尔奖。今年，日本学者（上图）获得了其中的动力学奖，他通过马路实验（下图）得到结论：</p><blockquote><p>“如果两波人相向而行，其中有人边走边看手机，将引发人群的冲撞。”</p></blockquote><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091304.jpg" alt="" loading="lazy"></p><p>这已经是日本学者连续15年获得搞笑诺贝尔奖了。日本网民也在议论，日本的学者是不是太多了，找不到有意义的研究题目了？</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091305.jpg" alt="" loading="lazy"></p><p>3、<a href="https://www.thepaper.cn/newsDetail_forward_14479959" target="_blank" rel="noreferrer">违规跑鞋</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091401.jpg" alt="" loading="lazy"></p><p>9月12日的维也纳马拉松赛上，埃塞俄比亚选手以2小时09分22秒的成绩获得冠军，但是随后就被取消成绩，理由是他的跑鞋违反了最新规定。</p><p>按照规定，跑鞋的鞋底厚度不能超过40毫米，但是该选手的鞋底厚达50毫米，多出整整一厘米。更厚的鞋底可以提供更好的弹力，帮助选手节省体力。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091402.jpg" alt="" loading="lazy"></p><p>4、<a href="https://www.japantimes.co.jp/life/2021/06/06/digital/japanese-gaming-arcades-pandemic/" target="_blank" rel="noreferrer">游戏厅的衰落</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082006.jpg" alt="" loading="lazy"></p><p>日本的电子游戏厅曾经盛极一时，各种街机玲琅满目，但是，现在已经盛况不再。根据警方的统计，1986年日本全国曾经有 26,573 家游戏厅，到了2019年只剩下 4,022 家，疫情爆发以后，数目更是继续锐减，可能不到最高峰时的十分之一。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082007.jpg" alt="" loading="lazy"></p><p>互联网和手机游戏的兴起，是游戏厅衰落的主要原因。目前，游戏厅的最大顾客来源是传统游戏爱好者，以及老年人。一位65岁的老人说，他把游乐厅当作社交场所，可以结交很多朋友。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082008.jpg" alt="" loading="lazy"></p><p>一些人认为，游戏厅最终会消失。另一些人则认为，游戏厅值得保留下来，街机有其独特的乐趣。南梦宫、Square Enix、世嘉等街机公司，呼吁日本政府采取措施，促进街机行业的发展。</p><p>5、<a href="http://m.cnhubei.com/content/2021-05/15/content_13795434.html" target="_blank" rel="noreferrer">漂浮式光伏电站</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021090906.jpg" alt="" loading="lazy"></p><p>山东德州最近建成了，世界最大的单体水上漂浮式光伏电站。在水库的水面上，漂浮着面积2200亩的太阳能光伏板，设计总容量为320兆瓦，第一期建成了200兆瓦。</p><p>漂浮式光伏电站的好处是，对水体没有破坏性，比较环保，节省地基成本，施工周期短，还可以减少水库的水量蒸发、遮挡阳光抑制藻类生长。另一方面，光伏板放在水里，可以有效降温，显著提高发电效率。</p><p>6、<a href="https://www.nature.com/articles/d41586-021-02194-2" target="_blank" rel="noreferrer">果蝇独居的后果</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082105.jpg" alt="" loading="lazy"></p><p>科学家已经知道，果蝇是一种社会化动物，所以常常用它做实验，研究人类社会。</p><p>《自然》杂志最近报道，科学家将果蝇单独隔离，与群居的果蝇进行对比。结果发现，独居的果蝇有更少的睡眠、更多的进食。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082104.jpg" alt="" loading="lazy"></p><p>这个实验如果可以引申到人类，就表示长期独居对健康不利，群居、与他人的日常互动对健康更有利。</p><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<a href="https://sspai.com/post/68372" target="_blank" rel="noreferrer">WebOS 死亡十周年纪念</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082206.jpg" alt="" loading="lazy"></p><p>多年前，Palm 公司曾经发布过一个手机系统 WebOS，有很多令人难忘的特性，非常易用。2011年8月11日，该系统被宣布放弃。本文回顾了这个系统。</p><p>2、<a href="https://mp.weixin.qq.com/s/tUeFiMbQhpmXkffxVsts5w" target="_blank" rel="noreferrer">消灭后视镜</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082405.jpg" alt="" loading="lazy"></p><p>越来越多的小汽车使用摄像头取代后视镜，有的甚至连突出的门把手都隐藏了，本文讨论这样做的原因。</p><p>3、<a href="https://justyy.com/archives/45744" target="_blank" rel="noreferrer">如何免费搭建一个 VS Code 网页版</a>（中文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091514.jpg" alt="" loading="lazy"></p><p>VS Code 编辑器有网页版，本文教你怎么把它部署在免费服务器上，可以用来写笔记，或者偶尔远程编辑代码。（<a href="https://github.com/ruanyf/weekly/issues/1953" target="_blank" rel="noreferrer">@DoctorLai</a> 投稿）</p><p>4、<a href="https://threadreaderapp.com/thread/1429464932446183431.html" target="_blank" rel="noreferrer">你所不知道的 ASML</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082306.jpg" alt="" loading="lazy"></p><p>全世界最先进的芯片工厂，都依赖一家公司生产的 EUV（极紫外光刻）芯片制造机，这家公司就是荷兰的 ASML（阿斯麦）公司。它一年生产50台 EUV，每台售价1.5亿美元起。</p><p>5、<a href="https://nautil.us/blog/12-mind_bending-perceptual-illusions" target="_blank" rel="noreferrer">12 张视觉错觉图片</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082803.jpg" alt="" loading="lazy"></p><p>本文收集了 12 张著名的视觉错误图片。比如，上面这两张图片，看上去是不同角度拍摄的同一条街道，但是实际上，它们是同一张图片并排放在一起。</p><p>6、<a href="https://habr.com/en/post/574082/" target="_blank" rel="noreferrer">绝对值的计算并不简单</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082305.jpg" alt="" loading="lazy"></p><p>绝对值的算法似乎是一个微不足道的问题：判断一个数是否为负数，如果是的，就去掉它的负号。如果你采用这样的算法，那你就错了。</p><p>7、<a href="https://davidwalsh.name/react-useprevious-hook" target="_blank" rel="noreferrer">React usePrevious 钩子</a>（英文）</p><p>本文介绍如何使用 useEffect 和 useRef 的官方钩子，写一个自己的 usePrevious 钩子，返回组件上一次渲染时的 props 参数。</p><p>8、<a href="https://github.com/wicg/import-maps" target="_blank" rel="noreferrer">浏览器的“包导入地图”</a>（英文）</p><p>Chrome 89 开始支持 ES 模块的“包导入地图”功能（package import maps），可以为导入模块指定别名。</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://github.com/ventoy/Ventoy" target="_blank" rel="noreferrer">Ventoy</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082403.jpg" alt="" loading="lazy"></p><p>一个 U 盘的启动盘制作工具，直接把系统镜像文件复制到 U 盘即可。它支持电脑启动时，从多个系统镜像文件里面选择一个启动。</p><p>2、<a href="https://webden.dev/landing/" target="_blank" rel="noreferrer">WebDen</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021082605.jpg" alt="" loading="lazy"></p><p>专供手机浏览器使用的网页代码编辑环境，提供 HTML、CSS、JS 的开发和调试。</p><p>3、<a href="https://neatnik.net/view-source/" target="_blank" rel="noreferrer">View Source</a></p><p>一个 Web 小工具，输入网址，就可以高亮显示该网址的源码，非常好用。</p><p>4、<a href="https://github.com/LingDong-/fishdraw" target="_blank" rel="noreferrer">fishdraw</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021081311.jpg" alt="" loading="lazy"></p><p>一个 JS 脚本，可以自动生成鱼的图形。这里还有一个可以<a href="https://github.com/zv/tree" target="_blank" rel="noreferrer">自动画树</a>的库。</p><p>5、<a href="http://mdvideo.gshll.com/" target="_blank" rel="noreferrer">MDvideo</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091513.jpg" alt="" loading="lazy"></p><p>一个桌面软件，自动将 Markdown 文档转成一段视频。文档里面的视频、音频、图片网址，都会抓取后插入视频，还可以根据文字生成人工语音的旁白朗读。</p><p>它非常适合快速生成产品的介绍视频。（<a href="https://github.com/ruanyf/weekly/issues/1952" target="_blank" rel="noreferrer">@linqian02</a> 投稿）</p><p>6、<a href="https://github.com/foamzou/group-by-repo-on-github" target="_blank" rel="noreferrer">group-by-repo-on-github</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091210.jpg" alt="" loading="lazy"></p><p>油猴脚本，用来处理 GitHub 的网页搜索结果，可以根据仓库分类，并自动获取分页结果，即不用点击“下一页”了。（<a href="https://github.com/ruanyf/weekly/issues/1941" target="_blank" rel="noreferrer">@foamzou</a> 投稿）</p><p>7、<a href="https://idraw.js.org/" target="_blank" rel="noreferrer">iDraw.js</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091308.jpg" alt="" loading="lazy"></p><p>一个简单的 JS 库，用来使用脚本进行网页绘图。它基于 Canvas，可以绘制文字、矩形、圆形、图片、HTML 片段和 SVG 文件。(<a href="https://github.com/ruanyf/weekly/issues/1949" target="_blank" rel="noreferrer">@chenshenhai</a> 投稿)</p><p>8、<a href="https://github.com/pikasTech/pikascript" target="_blank" rel="noreferrer">PikaScript</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091306.jpg" alt="" loading="lazy"></p><p>这个项目用来为单片机提供 Python 支持，让你可以通过 Python 脚本操作单片机。（<a href="https://github.com/ruanyf/weekly/issues/1944" target="_blank" rel="noreferrer">@pikasTech</a> 投稿）</p><p>9、<a href="https://github.com/linjc/mini-stores" target="_blank" rel="noreferrer">mini-stores</a></p><p>小程序状态管理库，方便管理页面状态，支持各公司的小程序。（<a href="https://github.com/ruanyf/weekly/issues/1940" target="_blank" rel="noreferrer">@linjc</a> 投稿）</p><p>10、<a href="https://neumorphism.coldstone.fun/" target="_blank" rel="noreferrer">Neumorphism</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091512.jpg" alt="" loading="lazy"></p><p>一个网页工具，用来生成照明阴影效果的 Flutter 代码。这里还有 <a href="https://neumorphism.io/" target="_blank" rel="noreferrer">CSS 版</a>。（<a href="https://github.com/ruanyf/weekly/issues/1951" target="_blank" rel="noreferrer">@xrr2016</a> 投稿）</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、<a href="https://www.samanthaming.com/" target="_blank" rel="noreferrer">Samantha Ming 个人网站</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091307.jpg" alt="" loading="lazy"></p><p>Samantha Ming 是一名加拿大前端工程师，她在个人网站上分享了很多前端代码的技巧，内容质量很高，制作精美。（<a href="https://www.samanthaming.com/" target="_blank" rel="noreferrer">@wxyudl</a> 投稿）</p><p>2、<a href="https://dtc.ucsf.edu/zh-hans/" target="_blank" rel="noreferrer">糖尿病教育网站</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091110.jpg" alt="" loading="lazy"></p><p>加州大学旧金山分校主办的网站，全部使用中文，提供糖尿病、健康、运动、饮食知识，内容很不错。（<a href="https://github.com/ruanyf/weekly/issues/1938" target="_blank" rel="noreferrer">@Stupid-Human</a> 投稿）</p><p>3、<a href="https://pimbook.org/" target="_blank" rel="noreferrer">程序员的数学导论</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021081702.jpg" alt="" loading="lazy"></p><p>一本英文的数学教材，专门写给没有数学基础的程序员，主要介绍微积分和线性代数，并且结合编程实例（比如加密和神经网络）进行讲解。全书可以0元购买。</p><p>4、 <a href="https://sqlbolt.com/" target="_blank" rel="noreferrer">SQL Bolt</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071714.jpg" alt="" loading="lazy"></p><p>一个交互式的英文在线教程，一共19课，从零开始讲授 SQL 知识，以及如何查询数据库。</p><p>5、<a href="http://www.grcdi.nl/gsb/global%20sourcebook.html" target="_blank" rel="noreferrer">国际数据管理手册</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202108/bg2021080512.jpg" alt="" loading="lazy"></p><p>该网站提供全世界各国的各种数据格式，比如地址、电话、邮政编码、货币、车牌等的格式。</p><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>1、<a href="https://www.linkedin.com/posts/shubham-sharma-34bbab18b_webdevelopment-css-html-activity-6820715919568961536-WApS/" target="_blank" rel="noreferrer">手机学习网页开发</a></p><p>一个尼泊尔老师在网上贴出照片，他的学生没有笔记本电脑，只能通过手机架设开发环境，学习网页开发。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021072205.jpg" alt="" loading="lazy"></p><p>经过两个月，这个学生已经初步掌握 HTML、CSS 和 JS。</p><p>2、<a href="https://www.alexanderpiano.nz/page/the-alexander-piano" target="_blank" rel="noreferrer">世界上最长的钢琴</a></p><p>钢琴的音质与琴弦的长度有关。琴弦越长，振动越慢，就能发出越低频的声音，所以高级的三角钢琴，体积都很大，长度都不短于2.3米。</p><p>一个新西兰青年阿德里安不禁突发奇想，如果制造一个特别长的钢琴，不就可以发出非常低的音频吗？</p><p>他决定自己来造一个，从图书馆找到资料，在钢琴师傅的指导下，开始动手建造。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071706.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071707.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071708.jpg" alt="" loading="lazy"></p><p>最后，他造出了世界上最长的钢琴，长度接近10米。</p><p>他说，本想造得更长，但是他家的车库放不下了。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071704.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071705.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071709.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071710.jpg" alt="" loading="lazy"></p><p>果然，这架钢琴的音质相当好，吸引了很多专业音乐家专程来演奏，还灌制了唱片。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071711.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071712.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.beekka.com/blogimg/asset/202107/bg2021071713.jpg" alt="" loading="lazy"></p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<strong>乔布斯的白板事件</strong></p><p>摘自沃尔特·艾萨克森的《乔布斯传》。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091611.jpg" alt="" loading="lazy"></p><p>1985年，30岁的乔布斯被赶出了苹果公司。</p><p>他随即创立了 NeXT 公司，继续开发符合他理想的下一代个人电脑。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091613.jpg" alt="" loading="lazy"></p><p>1986年，一家叫做 Pixar 的图形硬件公司找到了乔布斯。那家公司濒临破产，急需资金。乔布斯经过思考，同意给钱，成为这家公司的最大投资者。</p><p>最初，这只是一笔单纯的风险投资。但是后来几年，Pixar 还是不断亏损，乔布斯不得不追加投资，最后索性成了公司的董事长，直接介入公司管理。</p><p>那时，乔布斯每周有一两天去 Pixar 公司办公，剩下的时间就去 NeXT 公司办公。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202109/bg2021091612.jpg" alt="" loading="lazy"></p><p>进入九十年代以后，NeXT 公司和 Pixar 公司的业务都不见起色，看上去两家公司都会失败。这是乔布斯一生中的最低潮，他的压力很大。</p><p>有一天，Pixar 公司开会，乔布斯对 Pixar 创始人史密斯和其他高管破口大骂。因为他们一直拖延，没有按时拿出下一代图像电脑的电路设计。</p><p>那个时候，NeXT 的新产品也没有按时完成。史密斯就反唇相讥：“嘿，你的 NeXT 电路板做完了吗？不要光盯着我们。”</p><p>乔布斯听了勃然大怒。史密斯后来回忆：“他气到失去理智。” 史密斯说话有西南部口音，乔布斯就学他的口音，冷嘲热讽。史密斯说：“他欺人太甚，太过分了。我也气炸了，什么话都骂出口。于是我们几乎贴着对方的面，大约只隔一个巴掌宽，互相对骂。”</p><p>乔布斯开会时，一定要把白板据为己有，不轻易让别人使用。史密斯利用自己的大块头，一把推开他，迳自走到白板前，边写边解释。乔布斯吼道：“你给我住手！”</p><p>“咦？”史密斯回击：“白板是你的吗？我不能写吗？简直是胡扯。”乔布斯气得当场离席。</p><p>这场会议以后不久，史密斯就辞职离开了 Pixar，自己创业开了一间软件公司，专攻电脑绘图和影像编辑。</p><p>他很幸运，微软后来买下了他的公司。他可能是历史上唯一一位，创立了两家公司，一家卖给了乔布斯，另一家卖给了比尔·盖茨。</p><h2 id="言论" tabindex="-1">言论 <a class="header-anchor" href="#言论" aria-label="Permalink to &quot;言论&quot;">​</a></h2><p>1、</p><p>如果你走得足够远，其实就再也没办法回去了。当你回到故乡，原来的一切都已经消失了。</p><p>不过，这也不算什么，归根结底，旅程才是你的故事中最重要的部分。</p><p>-- <a href="https://www.forbes.com/sites/startswithabang/2021/12/30/how-far-could-a-spaceship-go-if-we-never-ran-out-of-thrust/?sh=6d38da5429ee" target="_blank" rel="noreferrer">《如果有无尽的推动力，宇宙飞船可以飞多远？》</a></p><p>2、</p><p>二战开始后，德国轰炸伦敦。伦敦市区每天晚上都有炸弹落下，郊区的炸弹比较少，可能每周一次。</p><p>战后的调查发现，在这段时期，市区居民的胃溃疡发病率显著增加，奇怪的是，郊区居民的胃溃疡发病率，增加得比市区还要大得多。这说明压力的不确定性比压力本身伤害更大。</p><p>--<a href="https://ofdollarsanddata.com/become-an-uncertainty-killer/" target="_blank" rel="noreferrer">《学会减少不确定性》</a></p><p>3、</p><p>Dropbox 这个软件给人的感觉是，很早就达到了顶峰，然后随着开发团队尝试添加越来越多的功能，而逐渐变得糟糕。</p><p>-- <a href="https://news.ycombinator.com/item?id=28150985" target="_blank" rel="noreferrer">Hacker News 读者</a></p><p>4、</p><p>赚到一百万美元以后，再往前走的动力都来自你的热情。</p><p>-- <a href="https://news.ycombinator.com/item?id=27865101" target="_blank" rel="noreferrer">Joel Spolsky</a></p><p>5、</p><p>幸福的秘诀就是永远抱有低期望值。（the secret to happiness is low expectations.）</p><p>-- Hacker News 读者</p><h2 id="历史上的本周" tabindex="-1">历史上的本周 <a class="header-anchor" href="#历史上的本周" aria-label="Permalink to &quot;历史上的本周&quot;">​</a></h2><p>2020年（第 125 期）：<a href="https://www.ruanyifeng.com/blog/2020/09/weekly-issue-125.html" target="_blank" rel="noreferrer">数字人民币要取代谁</a></p><p>2019年（第 73 期）：<a href="https://www.ruanyifeng.com/blog/2019/09/weekly-issue-73.html" target="_blank" rel="noreferrer">数据统计的威力</a></p><p>2018年（第 22 期）：<a href="https://www.ruanyifeng.com/blog/2018/09/weekly-issue-22.html" target="_blank" rel="noreferrer">猴子自拍，版权归谁</a></p><h2 id="订阅" tabindex="-1">订阅 <a class="header-anchor" href="#订阅" aria-label="Permalink to &quot;订阅&quot;">​</a></h2><p>这个周刊每周五发布，同步更新在<a href="http://www.ruanyifeng.com/blog" target="_blank" rel="noreferrer">阮一峰的网络日志</a>和<a href="http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97" target="_blank" rel="noreferrer">微信公众号</a>。</p><p>微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg" alt="" loading="lazy"></p><p>（完）</p>',221),s=[l];function o(g,n,i,b,c,h){return t(),a("div",null,s)}const d=e(r,[["render",o]]);export{k as __pageData,d as default};