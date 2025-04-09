import{_ as a,c as r,o as t,a2 as p}from"./chunks/framework.mEAph8pv.js";const c=JSON.parse('{"title":"科技爱好者周刊（第 343 期）：如何阻止 AI 爬虫","description":"","frontmatter":{},"headers":[{"level":1,"title":"科技爱好者周刊（第 343 期）：如何阻止 AI 爬虫","slug":"科技爱好者周刊-第-343-期-如何阻止-ai-爬虫","link":"#科技爱好者周刊-第-343-期-如何阻止-ai-爬虫","children":[]}],"relativePath":"pages/weekly/issue-343.md","filePath":"pages/weekly/issue-343.md","lastUpdated":1743179166000}'),s={name:"pages/weekly/issue-343.md"};function l(n,e,o,i,g,h){return t(),r("div",null,e[0]||(e[0]=[p('<h1 id="科技爱好者周刊-第-343-期-如何阻止-ai-爬虫" tabindex="-1">科技爱好者周刊（第 343 期）：如何阻止 AI 爬虫 <a class="header-anchor" href="#科技爱好者周刊-第-343-期-如何阻止-ai-爬虫" aria-label="Permalink to &quot;科技爱好者周刊（第 343 期）：如何阻止 AI 爬虫&quot;">​</a></h1><p>这里记录每周值得分享的科技内容，周五发布。（<strong>[通知] 下周清明假期，周刊休息。</strong>）</p><p>本杂志<a href="https://github.com/ruanyf/weekly" target="_blank" rel="noreferrer">开源</a>，欢迎<a href="https://github.com/ruanyf/weekly/issues" target="_blank" rel="noreferrer">投稿</a>。另有<a href="https://github.com/ruanyf/weekly/issues/6189" target="_blank" rel="noreferrer">《谁在招人》</a>服务，发布程序员招聘信息。合作请<a href="mailto:yifeng.ruan@gmail.com" target="_blank" rel="noreferrer">邮件联系</a>（yifeng.ruan@gmail.com）。</p><h2 id="封面图" tabindex="-1">封面图 <a class="header-anchor" href="#封面图" aria-label="Permalink to &quot;封面图&quot;">​</a></h2><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032602.webp" alt="" loading="lazy"></p><p>杭州临平的“天空草莓”农场，草莓种在悬空的钢架上，可以按需升降。（<a href="https://www.163.com/dy/article/JRHE1LAS05149IKJ.html" target="_blank" rel="noreferrer">via</a>）</p><h2 id="如何阻止-ai-爬虫" tabindex="-1">如何阻止 AI 爬虫 <a class="header-anchor" href="#如何阻止-ai-爬虫" aria-label="Permalink to &quot;如何阻止 AI 爬虫&quot;">​</a></h2><p>AI 大模型公司，正在疯狂收集训练数据。</p><p><strong>它们派出无数爬虫，在互联网上无节制地抓取数据</strong>。爬虫数量之多、频率之高，堪比 DDoS 攻击。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032303.webp" alt="" loading="lazy"></p><p>上周，代码托管网站 SourceHut 的站长，公开发表<a href="https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/" target="_blank" rel="noreferrer">文章</a>（下图），痛斥 <strong>AI 爬虫太过份</strong>，服务器无法承受访问压力，中断服务。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032304.webp" alt="" loading="lazy"></p><p>他非常生气，这些爬虫根本不遵守 robots.txt 文件，Git 仓库的每个页面、每个链接、每个提交都要爬取。</p><p>它们来自全球数万个 IP 地址，用户代理（user-agent 字段）也是随机的，伪装得像真实用户，难以有效拦截。</p><p>最可气的是，它们今天爬完了，过了六小时，又来爬同样的内容！</p><p>每一周，他要用20%～100%的工作时间，处理这些爬虫造成的服务器压力。SourceHut 已经中断服务好几次，对于一个 SaaS 工具，这是致命的。</p><p>最后，他说不只他遇到这种事，整个行业都深受其害。</p><blockquote><p>“我的系统管理员朋友，都在处理同样的问题。每次我坐下来和他们喝啤酒或吃晚餐时，我们很快就会抱怨机器人。这些对话中的绝望是显而易见的。”</p></blockquote><p>那么，有什么办法，可以对付这些 AI 爬虫？</p><p>最简单的方法，就是使用 Cloudflare 公司的<a href="https://blog.cloudflare.com/declaring-your-aindependence-block-ai-bots-scrapers-and-crawlers-with-a-single-click/" target="_blank" rel="noreferrer">免费防护</a>，它的 CDN 可以帮你挡掉 AI 爬虫。</p><p>但是，有些企业级服务不适合使用 Cloudflare，这时你就必须自己来挡爬虫。</p><p>今天，向大家介绍一个专门对付爬虫的工具 <a href="https://anubis.techaro.lol/" target="_blank" rel="noreferrer">Anubis</a>。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032306.webp" alt="" loading="lazy"></p><p>它是一个采用工作量证明的反向代理。所谓反向代理，就是<strong>目标网站的所有访问请求，都会重定向给它</strong>。</p><p>你首先要架设一个它的实例，然后把这个实例放在目标网站之前，当作反向代理（比如像下面设置）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>reverse_proxy http://localhost:3000</span></span></code></pre></div><p>于是，用户访问网站时，首先看到不是目标网站，而是 Anubis 的页面（下图）。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032305.webp" alt="" loading="lazy"></p><p>这个页面会在用户的浏览器上，执行一段 JS 程序，进行大量的数学计算。直到计算答案正确，才可以访问目标网站。</p><p>这个过程有时很耗时，可能需要1～2分钟。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032307.webp" alt="" loading="lazy"></p><p>（图片说明：上图的手机浏览器用了1分53秒，才计算完毕。）</p><p>对于爬虫来说，如果每个请求都要耗费大量计算，才能拿到数据，这会极大地消耗它的服务器资源，从而达到阻止爬虫访问的目的。</p><p>当然，真实的访问者也必须完成这样一个计算，这非常影响使用体验。但是，总比听任爬虫造成访问中断要好。</p><p>那么，Anubis 到底让爬虫计算什么？</p><p>具体来说，就是下面这行代码，计算一个哈希值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const hash = await sha256(`${challenge}${nonce}`);</span></span></code></pre></div><p>可以看到，它就是用 SHA256 算法，计算一个字符串的哈希值。</p><p>这个字符串由两部分组成，第一部分<code>challenge</code>，由用户的一些公开信息连接而成，包括用户的 IP 地址、浏览器 user-agent 字段、当前日期、Anubis 的公钥等。</p><p>第二部分<code>nonce</code>，表示迭代次数，第一次计算就是1，第二次计算就是2，以此类推。</p><p>Anubis 的默认设定是，<strong>计算出来的哈希值的前五位必须都为0</strong>，否则 nonce 自动加1，再次进行计算，直到满足要求为止。</p><p>有时，可能需要计算几百万次，才能得到合格的哈希值。熟悉比特币的同学，应该一眼看出来了，<strong>这就是比特币的算法</strong>。比特币是非常耗费算力的，所以 Anubis 也能很有效地消耗爬虫的 CPU。</p><p>当客户端终于算出满足要求的哈希值时（前五位为0），就会把这时的 nonce 值传给 Anubis 实例服务器，让后者验证哈希值是否正确。没问题的话，Anubis 就会将客户端重定向到目标网站，并在客户端写入一个 Cookie，以免后续请求再触发工作量验证。</p><p>这就是阻止爬虫的整个过程，不知道说清楚了没有，原理很简单，实施也不难。</p><p>事实证明，它很有效。一个站长说，两个半小时内，他的网站总共收到了81000个请求，其中只有3%通过了 Anubis 的工作量证明，这意味着97%的流量可能都是机器人！</p><p>这太疯狂了，可见现在的 AI 爬虫有多猖獗。如果你的网站也遇到了同样问题，又没法使用 Cloudflare，那可以试试 Anubis 的工作量证明。</p><h2 id="科技动态" tabindex="-1">科技动态 <a class="header-anchor" href="#科技动态" aria-label="Permalink to &quot;科技动态&quot;">​</a></h2><p>1、中国矿业大学研发了一款<a href="https://news.qq.com/rain/a/20250316A05V5Z00" target="_blank" rel="noreferrer">太空挖矿机器人</a>。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032605.webp" alt="" loading="lazy"></p><p>它共有6足，其中3个是前进的轮子，3个是挖矿的爪子。</p><p>2、英国民众本周纷纷报告，夜空中发现<a href="https://news.sky.com/story/glowing-spiral-appears-in-night-sky-as-met-office-reveals-likely-cause-13335297" target="_blank" rel="noreferrer">螺旋状的云</a>。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032610.webp" alt="" loading="lazy"></p><p>英国气象局调查后宣布，那是猎鹰9号火箭发射时，快速旋转的箭体喷出的尾气。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032611.webp" alt="" loading="lazy"></p><p>尾气在太空中瞬间冻结，经过太阳光反射，看上去像云一样。</p><p>3、科学家提出，<a href="https://ethz.ch/en/news-and-events/eth-news/news/2025/03/were-large-soda-lakes-the-cradle-of-life.html" target="_blank" rel="noreferrer">生命起源地</a>可能不是大海，而是封闭的大型碳酸钠湖泊。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032604.webp" alt="" loading="lazy"></p><p>因为生命起源的化学反应，需要很高的磷浓度，但是自然界（包括大海）的磷含量很低，只有富含磷的碳酸钠湖泊符合条件。</p><p>4、盈通公司推出一款<a href="https://www.tomshardware.com/pc-components/gpus/this-scent-dispensing-rx-9070-assures-at-least-one-gpu-launch-this-year-doesnt-stink" target="_blank" rel="noreferrer">有香味的 GPU</a>。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032607.webp" alt="" loading="lazy"></p><p>这款 GPU 内置了香味剂。运行时，它的散热风扇就会将香味吹出去。</p><p>5、<strong>其他</strong></p><p>（1）根据 Cloudflare 统计，<a href="https://blog.cloudflare.com/password-reuse-rampant-half-user-logins-compromised/" target="_blank" rel="noreferrer">41%的互联网登录</a>使用泄漏的密码，原因是大部分用户习惯复用同样的密码。</p><p>（2）中国睡眠研究会统计，2025年<a href="https://finance.sina.cn/7x24/2025-03-21/detail-ineqmmwi9524193.d.html" target="_blank" rel="noreferrer">中国人夜间平均睡眠</a>6.85个小时，比去年增加6分钟。入睡时间平均为0点18分，比去年晚了17分钟。</p><p>（3）<a href="https://www.nia.nih.gov/news/timeframe-8-hour-restricted-eating-irrelevant-weight-loss" target="_blank" rel="noreferrer">一项研究</a>提出，每天的进食时间限制在8小时之内，其他16小时不进食，有利于肥胖者减肥，改善健康。</p><h2 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h2><p>1、<strong>Gemini 2.5 Pro 模型</strong></p><p>本周，谷歌发布它的最强模型 <a href="https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/" target="_blank" rel="noreferrer">Gemini 2.5 Pro</a>，迅速登顶。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032801.webp" alt="" loading="lazy"></p><p>著名程序员 Simon Willison 对其<a href="https://simonwillison.net/2025/Mar/25/gemini/" target="_blank" rel="noreferrer">进行测评</a>，评价很高。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032714.webp" alt="" loading="lazy"></p><p><a href="https://everything.intellectronica.net/p/negotiating-with-the-machine" target="_blank" rel="noreferrer">另有一个程序员</a>让其执行一个非常复杂的任务，它想了半天后说，这个任务太复杂，不可能在一个步骤中完成，只能做出一个简化版。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032701.webp" alt="" loading="lazy"></p><p>这让人非常震惊，因为以前的 AI 遇到做不了的事情，只会给出错误的答案，而现在竟然会在分析后，承认超出了自己能力。</p><p>2、<a href="https://www.androidauthority.com/google-android-development-aosp-3538503/" target="_blank" rel="noreferrer">谷歌将不开放安卓的开发</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032702.webp" alt="" loading="lazy"></p><p>这篇报道称，谷歌将完全私有化安卓的开发，不再接受外部的代码提交，以避免安卓开源版 AOSP 与内部版本之间合并分支的麻烦。</p><p>以后，谷歌会把安卓新版本先提供给 OEM 厂商，然后再发一个不接受外部提交的开源 AOSP 版。</p><p>3、<a href="https://simonwillison.net/2025/Mar/23/nextjs-and-the-corrupt-middleware/" target="_blank" rel="noreferrer">Next.js 的中间件漏洞</a>（英文）</p><p>本周，Next.js 爆出一个高危漏洞。如果登录步骤是在中间件里面完成，那么可以绕过这个步骤，直接进入登录状态。本文简要介绍什么代码导致了这个漏洞。</p><p>4、<a href="https://bhoot.dev/2025/typescript-function-type-syntaxes/" target="_blank" rel="noreferrer">TypeScript 如何写函数类型</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032201.webp" alt="" loading="lazy"></p><p>本文是一篇初级教程，介绍函数的类型在 TypeScript 的三种写法。</p><p>5、<a href="https://taoofmac.com/space/notes/2025/03/22/1900" target="_blank" rel="noreferrer">我对 MCP 的批评</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032501.webp" alt="" loading="lazy"></p><p>MCP 是 Anthropic 公司提出的一个 AI 应用的接口协议，作者认为它并不好用，给出了自己的理由。</p><p>6、<a href="https://antfu.me/posts/move-on-to-esm-only" target="_blank" rel="noreferrer">只使用 ESM 模块</a>（英文）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032612.webp" alt="" loading="lazy"></p><p>本文提出，现在可以放弃 JS 语言的 CommonJS 模块了，只使用 ESM 模块，一个原因是<code>require</code>命令已经支持加载 ESM 模块了。</p><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><p>1、<a href="https://github.com/xutao-o/css-flex-code" target="_blank" rel="noreferrer">CSS FlexCode</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032202.webp" alt="" loading="lazy"></p><p>开源的 VS Code 插件，通过图标生成 flex、grid 布局的 CSS 代码。（<a href="https://github.com/ruanyf/weekly/issues/6347" target="_blank" rel="noreferrer">@xutao-o</a> 投稿）</p><p>2、<a href="https://github.com/ihmily/StreamCap" target="_blank" rel="noreferrer">StreamCap</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032703.webp" alt="" loading="lazy"></p><p>一个桌面应用（支持 Windows 和 Mac），基于 FFmpeg 进行直播录制，覆盖40+国内外主流直播平台。（<a href="https://github.com/ruanyf/weekly/issues/6393" target="_blank" rel="noreferrer">@ihmily</a> 投稿）</p><p>3、<a href="https://github.com/2977094657/BilibiliHistoryFetcher" target="_blank" rel="noreferrer">Bilibili History Analyzer</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032301.webp" alt="" loading="lazy"></p><p>B 站历史观看记录管理工具，可以保存观看记录，支持视频下载、数据分析、AI 摘要等功能，采用 Python + SQLite 开发，分为前端和后端。（<a href="https://github.com/ruanyf/weekly/issues/6366" target="_blank" rel="noreferrer">@2977094657</a> 投稿）</p><p>4、<a href="https://github.com/Ray-D-Song/goread" target="_blank" rel="noreferrer">GoRead</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032614.webp" alt="" loading="lazy"></p><p>一个用 Go 语言编写的终端里面的 EPUB 阅读器。（<a href="https://github.com/ruanyf/weekly/issues/6369" target="_blank" rel="noreferrer">@Ray-D-Song</a> 投稿）</p><p>5、<a href="https://github.com/ourines/GateShift" target="_blank" rel="noreferrer">GateShift</a></p><p>一个 Go 语言写的命令行工具，用于一行命令切换网关，适合同时有 OpenWrt 路由和默认路由的环境。（<a href="https://github.com/ruanyf/weekly/issues/6353" target="_blank" rel="noreferrer">@ourines</a> 投稿）</p><p>6、<a href="https://github.com/plait-board/drawnix" target="_blank" rel="noreferrer">Drawnix</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032616.webp" alt="" loading="lazy"></p><p>开源的在线白板工具，集成了思维导图、流程图、画笔。（<a href="https://github.com/ruanyf/weekly/issues/6379" target="_blank" rel="noreferrer">@pubuzhixing8</a> 投稿）</p><p>7、<a href="https://github.com/emac/obsidian-minote-plugin" target="_blank" rel="noreferrer">小米笔记的 Obsidian 插件</a></p><p>它将小米云服务里面的小米笔记，转换为 Markdown 格式保存到 Obsidian 文件夹。（<a href="https://github.com/ruanyf/weekly/issues/6355" target="_blank" rel="noreferrer">@emac</a> 投稿）</p><p>8、<a href="https://github.com/liyaodev/wxlogin" target="_blank" rel="noreferrer">wxlogin</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032615.webp" alt="" loading="lazy"></p><p>一个基于 Next.js 的开源应用，基于微信公众号的网站登录，用户通过公众号获取验证码，从而在网页端登录。（<a href="https://github.com/ruanyf/weekly/issues/6372" target="_blank" rel="noreferrer">@liyaodev</a> 投稿）</p><p>9、<a href="https://github.com/harrisonwang/docxy" target="_blank" rel="noreferrer">Docxy</a></p><p>开源的 Docker Hub 镜像代理服务，可以通过它拉取容器镜像。（<a href="https://github.com/ruanyf/weekly/issues/6395" target="_blank" rel="noreferrer">@harrisonwang</a> 投稿）</p><p>10、<a href="https://github.com/HeroIsUseless/bondma" target="_blank" rel="noreferrer">Bondma</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032618.webp" alt="" loading="lazy"></p><p>一个开源的多语言翻译管理平台，提供直观的 Web 界面。（<a href="https://github.com/ruanyf/weekly/issues/6389" target="_blank" rel="noreferrer">@HeroIsUseless</a> 投稿）</p><p>11、<a href="https://deeppdf.ai/pdf-translator" target="_blank" rel="noreferrer">DeepPDF</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032705.webp" alt="" loading="lazy"></p><p>免费的 PDF 文件翻译网站，比如英文 PDF 翻译成中文，保留排版不变。（<a href="https://github.com/ruanyf/weekly/issues/6398" target="_blank" rel="noreferrer">@icaohongyuan</a> 投稿）</p><p>12、<a href="https://rsspod.pro" target="_blank" rel="noreferrer">RSSPod</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032706.webp" alt="" loading="lazy"></p><p>收听、订阅播客的网站。（<a href="https://github.com/ruanyf/weekly/issues/6399" target="_blank" rel="noreferrer">@Jaksay</a> 投稿）</p><p>13、<a href="https://github.com/JustinGastby/supa-simple-socket" target="_blank" rel="noreferrer">Supa Simple Socket</a></p><p>网友投稿的 WebSocket 的 JS 客户端库，支持心跳机制、断点重连、事件订阅和文件传输。（<a href="https://github.com/ruanyf/weekly/issues/6406" target="_blank" rel="noreferrer">@JustinGastby</a> 投稿）</p><p>14、<a href="https://inscribed.app/" target="_blank" rel="noreferrer">Inscribed.app</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032707.webp" alt="" loading="lazy"></p><p>一款在线工具，基于幻灯片制作创意草图和动画。 （<a href="https://github.com/ruanyf/weekly/issues/6388" target="_blank" rel="noreferrer">@chunrapeepat</a> 投稿）</p><p>15、<a href="https://github.com/modstart-lib/linkandroid" target="_blank" rel="noreferrer">LinkAndroid</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032709.webp" alt="" loading="lazy"></p><p>开源的手机连接助手，方便连接 Android 和电脑。（<a href="https://github.com/ruanyf/weekly/issues/6408" target="_blank" rel="noreferrer">@modstart</a> 投稿）</p><p>16、<a href="https://www.teleprompter.today/" target="_blank" rel="noreferrer">Teleprompter.today</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032711.webp" alt="" loading="lazy"></p><p>一个在线的提词器，为演讲者、视频创作者和直播主播提供文本提示，可以定制各种属性。（<a href="https://github.com/ruanyf/weekly/issues/6412" target="_blank" rel="noreferrer">@s87343472</a> 投稿）</p><h2 id="ai-相关" tabindex="-1">AI 相关 <a class="header-anchor" href="#ai-相关" aria-label="Permalink to &quot;AI 相关&quot;">​</a></h2><p>1、<a href="https://github.com/mggger/WebCraft" target="_blank" rel="noreferrer">Web Design AI Agent</a></p><p>开源的 AI 应用，根据文字描述和图片生成网页，使用 Claude AI 模型，部署在 Cloudflare worker。（<a href="https://github.com/ruanyf/weekly/issues/6371" target="_blank" rel="noreferrer">@mggger</a> 投稿）</p><p>2、<a href="https://github.com/modstart-lib/aigcpanel" target="_blank" rel="noreferrer">AigcPanel</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032708.webp" alt="" loading="lazy"></p><p>开源的 AI 数字人生成工具。（<a href="https://github.com/ruanyf/weekly/issues/6407" target="_blank" rel="noreferrer">@modstart</a> 投稿）</p><p>3、<a href="https://emojimyface.com/" target="_blank" rel="noreferrer">EmojiMyFace</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032710.webp" alt="" loading="lazy"></p><p>免费的 AI 挡脸工具，将脸部替换成 Emoji 符号。（<a href="https://github.com/ruanyf/weekly/issues/6410" target="_blank" rel="noreferrer">@Takea-nap</a> 投稿）</p><p>4、<a href="https://aisubtranslate.top/" target="_blank" rel="noreferrer">aisubtranslate.top</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032704.webp" alt="" loading="lazy"></p><p>AI 模型翻译字幕文件的免费网站。（<a href="https://github.com/ruanyf/weekly/issues/6397" target="_blank" rel="noreferrer">@LetheTK</a> 投稿）</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><p>1、<a href="https://dnsspeedtest.online/" target="_blank" rel="noreferrer">DNS 速度测试</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032606.webp" alt="" loading="lazy"></p><p>这个网站测试从你的计算机到世界主要公共 DNS 服务器的速度。</p><p>另有一个类似的命令行工具 <a href="https://github.com/xxnuo/dns-benchmark" target="_blank" rel="noreferrer">dnspy</a>。（<a href="https://github.com/ruanyf/weekly/issues/6368" target="_blank" rel="noreferrer">@xxnuo</a> 投稿）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032613.webp" alt="" loading="lazy"></p><p>2、<a href="https://www.bbc.co.uk/orbitmusic" target="_blank" rel="noreferrer">Orbit</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032601.webp" alt="" loading="lazy"></p><p>该网站提供一种可视化的方式，发现你喜欢的新音乐。</p><p>3、<a href="https://www.tophn.co/" target="_blank" rel="noreferrer">Top Hacker News</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032617.webp" alt="" loading="lazy"></p><p>该网站展示“黑客新闻”实时的热门文章，有插图和内容总结。（<a href="https://github.com/ruanyf/weekly/issues/6384" target="_blank" rel="noreferrer">@heyppen</a> 投稿）</p><p>4、<a href="https://www.musicmint.ai/" target="_blank" rel="noreferrer">MusicMint</a></p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032204.webp" alt="" loading="lazy"></p><p>一个 AI 音乐网站。（<a href="https://github.com/ruanyf/weekly/issues/6361" target="_blank" rel="noreferrer">@250465043</a> 投稿）</p><p>5、<a href="https://remit.ee/tools/check-plug-travel-adapter/" target="_blank" rel="noreferrer">旅行插头顾问</a>（Travel Plug Advisor）</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032203.webp" alt="" loading="lazy"></p><p>该网站查询世界各地的插头类型和电压。（<a href="https://github.com/ruanyf/weekly/issues/6351" target="_blank" rel="noreferrer">@imowen</a> 投稿）</p><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>1、<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0xD8yB6UiCKtNhvyfM6w8ARCRXzxukjMgfYcShuAcNAthBbBToy9j3LC3vDExaz1yl&amp;id=100064747956101" target="_blank" rel="noreferrer">地球和太阳的大小</a></p><p>太阳的大小远超地球，直径是地球是109倍，体积是130万倍。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032603.webp" alt="" loading="lazy"></p><p>上图中，左下角的蓝点就是地球。</p><p>所以，一丁点的太阳能，就足够地球使用。</p><p>2、<a href="https://www.facebook.com/Coyoter.Huang/posts/pfbid0gq7MrwSf7R1nM4ETzDoS2o8a4w4neu65We7fZBhEGgM9xr1W1fwX6U9qgrNcd9TJl" target="_blank" rel="noreferrer">AI 生成表情包</a></p><p>上周，OpenAI 开放了 GPT-4o 的<a href="https://openai.com/index/introducing-4o-image-generation/" target="_blank" rel="noreferrer">图片生成功能</a>。网友发现，只要上传一张图片，就可以用它生成表情包，效果极佳。</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032712.webp" alt="" loading="lazy"></p><p><a href="https://www.ettoday.net/news/20250327/2932962.htm" target="_blank" rel="noreferrer">提示词</a>是：“请把照片里面的角色画成 Q 版，并用12个动作和文字做成表情包。”</p><p><img src="https://cdn.beekka.com/blogimg/asset/202503/bg2025032713.webp" alt="" loading="lazy"></p><h2 id="文摘" tabindex="-1">文摘 <a class="header-anchor" href="#文摘" aria-label="Permalink to &quot;文摘&quot;">​</a></h2><p>1、<a href="https://tobloef.com/blog/wheel-reinventors-principles/" target="_blank" rel="noreferrer">为什么重新发明轮子</a></p><p>我喜欢从头开始写东西，经常有人说，我在重新发明轮子。</p><p>我这样做有好几个理由。</p><p>（1）学习。通过重新发明轮子，我学到了很多东西，知道了工作原理，以及怎么动手做。</p><p>（2）定制。没有一种轮子适合所有情况。通过创建自己的轮子，我可以根据具体情况定制，让它更适合我。</p><p>（3）创新。现有的一些轮子很糟糕，重新发明轮子时，就有机会探索新的可能性。</p><p>（4）享受。事实上，前面三条理由可以不存在，重新发明轮子只是因为我喜欢动手，出色完成工作时，我会有一种满足感。</p><p>但是，我不推荐你也这样做。重新发明轮子并不都那么美好，有一些不可忽视的缺点。</p><p>（5）重新发明轮子可能很耗时，需要投入大量时间。</p><p>（6）最终产品可能不如现有解决方案。</p><p>（7）容易陷入无限递推的困境。为了制造轮子，我还必须重新发明锤子吗？</p><p>所以，如果你想重新发明轮子，一定要想清楚两点。第一，你有足够时间吗，尤其是涉及其他人的情况下。第二，重新发明的范围（或者说，你不打算重新发明什么），以免不必要地偏离主题。</p><h2 id="言论" tabindex="-1">言论 <a class="header-anchor" href="#言论" aria-label="Permalink to &quot;言论&quot;">​</a></h2><p>1、</p><p>一个优秀程序员，最开始是实施者（implementer），然后进化到解决者（solver），最后变成发现者（finder）。</p><p>-- <a href="https://rkoutnik.com/2016/04/21/implementers-solvers-and-finders.html" target="_blank" rel="noreferrer">《实施者、解决者和发现者》</a></p><p>2、</p><p>如果你正在开发一款希望长久使用的产品，那么前端框架就是你最不需要做的技术决策。你争论哪一个框架好的时间，都是在浪费精力。</p><p>无论你选择什么框架，5年后都会过时，即使那时你选择的框架还存在，也会变得完全不同，这就是前端社区的运作方式。</p><p>-- <a href="https://polotek.net/posts/the-frontend-treadmill/" target="_blank" rel="noreferrer">《前端跑步机》</a></p><p>3、</p><p>在2025年开发 Web 应用，有点像组装宜家家具。你必须拼凑和配置许多单独的服务：前端、后端、cdn、https、数据库、身份验证、付款……</p><p>你的工作不是写代码，而是配置、管道、编排、工作流、最佳实践。</p><p>-- <a href="https://x.com/karpathy/status/1905051558783418370" target="_blank" rel="noreferrer">Andrej Karpath</a>，著名 AI 科学家</p><p>4、</p><p>愤怒是一种具有破坏性的情绪，会让人产生报复的欲望，这不利于你的根本利益。更理性的方法是，不要先想到报复，而要想想你与对方有没有共同利益，寻求合作和谅解。</p><p>-- <a href="https://aeon.co/essays/there-s-no-emotion-we-ought-to-think-harder-about-than-anger" target="_blank" rel="noreferrer">《超越愤怒》</a></p><p>5、</p><p>各种宗教都驱逐异教徒，不是因为他可能是错的，而是因为他可能是对的。</p><p>-- <a href="https://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD831.html" target="_blank" rel="noreferrer">Edsger W. Dijkstra</a></p><h2 id="往年回顾" tabindex="-1">往年回顾 <a class="header-anchor" href="#往年回顾" aria-label="Permalink to &quot;往年回顾&quot;">​</a></h2><p><a href="http://www.ruanyifeng.com/blog/2024/04/weekly-issue-296.html" target="_blank" rel="noreferrer">xz 后门的作者 Jia Tan 是谁？</a>（#296）</p><p><a href="http://www.ruanyifeng.com/blog/2023/03/weekly-issue-246.html" target="_blank" rel="noreferrer">永不丢失的网络身份</a>（#246）</p><p><a href="http://www.ruanyifeng.com/blog/2022/02/weekly-issue-196.html" target="_blank" rel="noreferrer">掌机的未来</a>（#196）</p><p><a href="http://www.ruanyifeng.com/blog/2021/02/weekly-issue-146.html" target="_blank" rel="noreferrer">网课应该怎么上？</a>（#146）</p><p>（完）</p>',212)]))}const m=a(s,[["render",l]]);export{c as __pageData,m as default};
