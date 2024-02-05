import{_ as e,c,o,V as d}from"./chunks/framework.q1JKCtYc.js";const b=JSON.parse('{"title":"海报生成架构——狐友","description":"海报图片以其简单的分享形式、可定制的视觉体验、自带二维码识别导流等特点，成为了社交产品高频必备的流量载体，针对现有的一些问题，我们调研并实践落地了一套全新的海报图片统一服务。","frontmatter":{"title":"海报生成架构——狐友","description":"海报图片以其简单的分享形式、可定制的视觉体验、自带二维码识别导流等特点，成为了社交产品高频必备的流量载体，针对现有的一些问题，我们调研并实践落地了一套全新的海报图片统一服务。","isPage":true,"date":"2023-5-23","tags":["海报","架构"]},"headers":[{"level":1,"title":"海报生成架构","slug":"海报生成架构","link":"#海报生成架构","children":[]}],"relativePath":"pages/javascript/海报生成架构--狐友.md","filePath":"pages/javascript/海报生成架构--狐友.md","lastUpdated":1707095065000}'),i={name:"pages/javascript/海报生成架构--狐友.md"},a=d('<h1 id="海报生成架构" tabindex="-1">海报生成架构 <a class="header-anchor" href="#海报生成架构" aria-label="Permalink to &quot;海报生成架构&quot;">​</a></h1><h2 id="_1-项目背景" tabindex="-1">1. 项目背景 <a class="header-anchor" href="#_1-项目背景" aria-label="Permalink to &quot;1. 项目背景&quot;">​</a></h2><p>狐友作为搜狐的一款社交产品，在流量传播上有着旺盛的需求点。而在流量传播所需的众多载体之中，海报图片以其简单的分享形式、可定制的视觉体验、自带二维码识别导流等特点，成为了社交产品高频必备的流量载体。</p><p>作为狐友的前端开发，生成海报图片就成为了我们工作中持续不断的一个重要需求点。以下是狐友目前的产品前端服务矩阵和海报图片的产品形式。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECkxtSelkL0ia6pc6y4MFibT2w4Lpiaa2GahY9xewXCZS5zQrzz7U8Tts5A/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 1 狐友产品前端服务矩阵和海报图片的产品形式</p><p>海报图片实现现状</p><p>从上图 1 可以看到，生成海报图片对于狐友产品矩阵来说是一个高频强需求。海报图片作为分享载体，对于各平台的分享流程对接也非常畅通和直观，例如不同于小程序卡片分享只能拘泥于微信平台，网页分享的链接形式不够直观。</p><p>而在海报图片这个重要环节，长期的主要技术手段一直是通过各客户端开发在本地设备上进行绘制，但这种方案存在如下的劣势困扰着我们：</p><ul><li>各端无法复用：如图 2, 如果要全平台都要做图片分享，那么需要各端分别开发，即使生成的图片一模一样，也要开发<code>iOS</code>、<code>Android</code>、<code>H5</code>、小程序一共 4 遍，整体开发各端无法互相复用。</li><li>长图大图崩溃：客户端限于设备平台或系统限制，对于长图的生成并不友好，会出现长图因为内存或算力限制无法生成的情况，其中小程序尤为明显，在微信的框架下很容易长图生成造成程序直接崩溃。</li><li>开发效率较低：客户端本地绘制海报图片，一般需要手写原生代码效率不高。小程序端虽然使用<code>wxml-to-canvas</code>（H5 端使用<code>html-to-canvas</code>）来绘制减轻了一些手写命令式绘制代码的负担，但这种标记语言转<code>canvas</code>在实现上也存在缺陷，相比<code>HTML+CSS</code>的表达力还是非常受限。所以，海报图片在代码层面开发效率比较低。</li></ul><p>为了解决以上问题，我们开始着手调研并实践落地了一套全新的海报图片统一服务，命名为<code>hy-ssr-img</code>。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECF2eBAZQWuR286beTuIZoruXGicJCklSz2V8luicXKMbtGxfJRYHgSWzg/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 2 狐友大前端海报生成各端开发状态</p><h2 id="_2-海报图片统一服务" tabindex="-1">2. 海报图片统一服务 <a class="header-anchor" href="#_2-海报图片统一服务" aria-label="Permalink to &quot;2. 海报图片统一服务&quot;">​</a></h2><p>海报图片统一服务是一套基于<code>Puppeteer</code>的<code>Node.js</code>后端服务端（<code>SSR</code>）渲染页面并截图生成海报图片的服务，这一服务解决了原有海报图片生成的三大问题：</p><ul><li>各端无法复用 -&gt; 4 端同时复用：<code>iOS</code>、<code>Android</code>、<code>H5</code>、小程序 4 端只需要开发一遍即可，效率提升 400%，如图 3</li><li>长图大图崩溃 -&gt; 无惧长图渲染：不需要再担心长图渲染问题，服务端渲染图片能力理论上可以达到上万长度的渲染，针对不超过 5 屏的图片需求来说绰绰有余</li><li>开发效率较低 -&gt; 开发效率最优：使用效率超高、表达力超强的标记语言<code>HTML + CSS</code>渲染，开发效率和表达力都达到最优状态</li></ul><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECXFDEesHVxx6E7xpq150OpjMQNMhq0IKfH8azCGM9BICClvGHjQ22wA/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 3 海报图片统一服务各端复用</p><p>那么，海报图片统一服务是如何建立起来的呢？下面是从项目立项开始的具体设计方案。</p><h2 id="_3-项目选型" tabindex="-1">3. 项目选型 <a class="header-anchor" href="#_3-项目选型" aria-label="Permalink to &quot;3. 项目选型&quot;">​</a></h2><p>首先，我们调研了业界现有的图片渲染方案，如下表。通过下表的调研总结可以看出各个方案各有优劣势。由于复用提效是重要需求点，我们把方案锁定了服务端渲染方向上，即入选方案为：</p><ul><li>Node.js 截图方案</li><li>服务端图层绘画方案</li></ul><p>在对比两种方案，以及参考相关业务实践后，我们最终选用了最常见的【Node.js 截图方案】。因为服务端图层渲染选用的图形库在排版表达力上远不及<code>HTML+CSS</code>在浏览器上的表达力，而且系统预期的使用对象是前端开发人员，并不是产品和运营，所以服务端图层渲染方案的拖拽方式并不是必选项，反而由于拖拽渲染表达力的限制，对于实现一些排版复杂的图片非常吃力。而<code>Node.js</code>截图方案则没有这方面的问题，前端开发只需要常规开发页面即可，然后交给<code>Puppeteer</code>渲染后进行截图形成最终用户看到的海报图片。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECTVEayIAuY68oib6a8lcncPQIHclJ3Pspm6XrXuptQKia3UDkGccUYnGQ/640?wx_fmt=png" alt="" loading="lazy"></p><p>表 1 项目选型方案对比</p><h2 id="_4-项目架构流程方案" tabindex="-1">4. 项目架构流程方案 <a class="header-anchor" href="#_4-项目架构流程方案" aria-label="Permalink to &quot;4. 项目架构流程方案&quot;">​</a></h2><p>在确定了【Node.js 截图方案】之后，我们对项目整体架构流程进行了设计，首先由于我们的应用的后端<code>Java</code>接口服务已经非常成熟，针对参数的合法性校验及加签解签等防护措施都已建立，所以我们在开发<code>Node.js</code>服务时就没有必要再造轮子，那么怎么把这些基础接口功能和<code>Node.js</code>服务联系起来呢？我们决定把<code>Node.js</code>服务放到内网，通过只允许后端服务直接访问的方式来达到这一目的，这样后端接口层就像一个盾牌，挡在用户和<code>Node.js</code>服务之间，而我们就可以专注实现<code>Node.js</code>的截图功能了。整体方案流程如下图 4：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECTDhWdrOwPVmVsskesRxYriaEiafhPaC6jQ1E8jD9SJCFLQoAoUWmBbgw/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 4 Node.js 截图方案整体流程方案</p><h2 id="_5-仅首屏-ssr-渲染方案" tabindex="-1">5. 仅首屏 SSR 渲染方案 <a class="header-anchor" href="#_5-仅首屏-ssr-渲染方案" aria-label="Permalink to &quot;5. 仅首屏 SSR 渲染方案&quot;">​</a></h2><p>整体架构流程方案确定后，我们就需要细化截图相关的详细流程方案。在经过调研之后，我们发现常见的截图开源方案在我们的使用场景中还有很多需要优化的点和不满足需求的部分，因此我们决定自研开发【仅首屏<code>SSR</code>渲染】方案。针对项目特点，每个海报图片只有一张，所以不存在首屏渲染过后还要渲染第二页的场景，因此该方案只包含首屏字符串渲染即可，不需要带有常见 SSR 的客户端激活渲染的打包构建及执行流程。 去掉常见<code>SSR</code>方案中的非首屏渲染逻辑后，页面就只包含了首屏必要的渲染代码（<code>HTML + CSS</code>），去除一切不需要的环节（<code>JS</code>执行激活），保证页面给到 <code>Puppeteer</code>渲染时是最简化的状态，尽可能减少网络 I/O 和本地磁盘<code>I/O</code>，只包含单纯的渲染过程，以加速渲染速度。以下是常见方案和自研方案的对比。</p><p>最常见的截图方案是通过请求网页地址，渲染后截图，如图 5。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKEC8REE1icj0RQDfvxia6mv52tibiaOBWiahkQicrCR7rsMia01NKJQIiakypxgaA/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 5 Node.js 截图详细流程常见方案</p><p>这种方案不管是<code>CSR</code>（客户端渲染）方式，还是<code>SSR</code>（服务端渲染）方式，都还是有优化空间。我们可以发现，<code>Puppeteer</code>请求网页的网络消耗是可以被节省下来的，如果我们直接使用在本地生成好的<code>HTML</code>和<code>CSS</code>，则请求网页并下载所用的时间就可以节省下来，获得更快的截图速度。</p><p>另外页面的动态渲染通过<code>SSR</code>来进行，这样完全不需要客户端<code>JS</code>的存在，直接还可以省去加载客户端<code>JS</code>的时间，获得更优的渲染速度，这种优化后的<code>Node.js</code>截图详细流程方案如图 6 所示。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECuLtzH4uuSzia5iagNq44ajVOOpnfsmY0rTEK3xeXNqicRKRpj8oKmyicVQ/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 6 优化后的 Node.js 截图详细流程方案</p><p>该方案还有技术细节需要设计，即如何完成 SSR 渲染首屏的工作，由于我们的技术栈是<code>Vue</code>，所以选用<code>vue-server-renderer</code>为基础库来完成这一过程，如图 7。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKEC1ZwIExtekeZly0p6IU9Yae7j06cqXOdXkyycc7uuCxJ20JRTp6VwsQ/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 7 仅首屏 SSR 渲染方案技术流程</p><h2 id="_6-项目业务技术流程设计" tabindex="-1">6. 项目业务技术流程设计 <a class="header-anchor" href="#_6-项目业务技术流程设计" aria-label="Permalink to &quot;6. 项目业务技术流程设计&quot;">​</a></h2><p>整体架构流程方案确定之后，我们就要进行更细化的业务技术流程设计，这里有很多细节需要考虑：</p><ul><li>后端接口层如何和<code>Node.js</code>截图服务进行通信？</li><li>截图服务是一个高耗时服务，如何防止长链接堆积？</li><li>如何设计海报图片缓存层？如何设计提供海报预渲染？</li><li>其他流程细节...</li></ul><p>为了解决这些问题，我们设计了如下的流程，如图 8。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECB5IbAEX6GqfjdzaaBDAEhNbicLnD3KvCUrSus50CC8uKmUCDGosMssA/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 8 Node.js 截图服务业务技术流程</p><p>可以看到整个流程设计由接口同步请求和截图异步任务两大块组成。我们把<code>Node.js</code>截图服务当做一个纯渲染图片的服务，用户发起请求给后端服务时会携带渲染页面所需要的动态参数，后端服务则负责参数校验等工作，并且下发给用户一个异步任务 ID。然后后端服务会请求截图服务，截图服务收到请求后并不会立刻截图，而是直接返回后端服务，并开启异步任务去进行耗时的截图服务，这样就可以防止长链接堆积造成服务不可用的情况发生。之前下发给用户侧的异步任务<code>ID</code>就是异步截图任务完成后通知后端服务的凭证，这样当截图服务完成后就可以通知后端服务截图完成状态（截图成功或者失败），而用户侧则可通过轮询后端服务接口得知截图是否完成并使用海报图片了，当然可以设置一个超时时间来完成整个截图服务的交互闭环。</p><p>对于海报图片的缓存层也是要考虑的，因为很多场景下用户请求的海报图片是一模一样的，比如我们的热榜海报会在固定时间生成一次，那么缓存层可以有效缓解截图耗时操作，并且为预生成海报图片提供了基础。比如我们会在特定时间通过代码自动预渲染一批海报，当第一个用户来访问时就不需要等待耗时的截图服务，直接返回渲染好的海报图片即可。那么命中缓存的条件是什么呢？对于长的一模一样的海报图片当然希望只生成一次后都走缓存层。我们的设计中决定“图片长相”的因素有两个：</p><p>1．海报地址：对应不同的海报样式</p><p>2．海报参数：对应同一个海报样式中的不同数据</p><p>所以，我们通过 hash(“海报地址”+“海报参数”)的方式得到缓存命中的<code>key</code>，以此来控制命中缓存。另外截图服务生成海报图片后会直接上传到<code>CDN</code>进行存储，用户侧加载海报图片的速度和稳定性也得到了相应的保障。</p><h2 id="_7-项目技术选型及工程化方案" tabindex="-1">7. 项目技术选型及工程化方案 <a class="header-anchor" href="#_7-项目技术选型及工程化方案" aria-label="Permalink to &quot;7. 项目技术选型及工程化方案&quot;">​</a></h2><p>在业务技术流程方案确定后，就需要为此搭建一套工程化开发环境，来支持项目业务的具体开发。我们基于公司现有基础设施以及技术栈，确定了以下主要技术选型：</p><ul><li>接口服务框架：<code>Express</code></li><li>页面渲染框架：<code>Vue</code></li><li>支持<code>SSR</code>渲染：<code>vue-server-renderer</code></li><li>支持浏览器截图：<code>Puppeteer</code></li><li>支持页面开发环境 ：<code>webpack</code></li><li>图片存储：<code>OSS</code> （公司内部对象存储服务）</li><li>服务端日志：<code>Logstash</code> + <code>Kafka</code>+ <code>Elasticsearch</code> + <code>Kibana</code>（公司内部基础日志服务链）</li><li>部署：<code>DomeOS</code> （公司内部云服务平台）</li></ul><p>如图 9，展示了通过以上技术栈及基础设施组建的整个工程化方案。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECABC3LrwelIyp6XbPVao1juz5xCAmpNkpY9xwxynAtOQjz8skLxd6hw/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 9 Node.js 截图服务工程化方案</p><p>这里需要说明是，一个海报图片对应一个页面，一个页面会有两个入口文件：一个<code>CSR</code>（客户端渲染）用于开发页面时使用，一个<code>SSR</code>（服务端渲染）用于截图时<code>Puppeteer</code>渲染页面使用。这么设计的原因是，<code>CSR</code>渲染使用<code>webpack-dev-server</code>是现成的开源方案，对于开发时热更新等支持不需要自定义开发，开箱即用，如果开发时也使用<code>SSR</code>进行就需要进行针对性的改造，由于开发体验上并没有区别，我们就选用了更高效地搭建方式。而截图时页面渲染方式就是上文提到的【仅首屏 <code>SSR</code> 渲染】。</p><h2 id="_8-项目关键优化实践" tabindex="-1">8. 项目关键优化实践 <a class="header-anchor" href="#_8-项目关键优化实践" aria-label="Permalink to &quot;8. 项目关键优化实践&quot;">​</a></h2><p>从用户发起请求到海报图片返回，这整个过程的耗时需要进行“压榨”，以获得更好的用户体验。以下是我们在开发过程中实践和验证的相关重点优化和部分效果收益。从第一版基础开发到最后优化完成的版本，截图服务总用时从 1300ms+降低到了 600ms+（注：测试数据均取相同开发机 10 次执行结果的平均值，渲染相同的海报图片，图片为超长图且内容丰富，长宽为：4967×750）。表 2 为各关键优化点明细。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECqMYJlniag979yfcvd4j366icoSXibWYDDEvR1kC9eqCybDaCmm819ngJw/640?wx_fmt=png" alt="" loading="lazy"></p><p>表 2 项目关键优化实践</p><h2 id="_9-项目在线文档预览系统" tabindex="-1">9. 项目在线文档预览系统 <a class="header-anchor" href="#_9-项目在线文档预览系统" aria-label="Permalink to &quot;9. 项目在线文档预览系统&quot;">​</a></h2><p>为了方便使用海报图片的开发人员，我们还配套开发了海报生成系统在线文档。开发人员可以通过该系统查看现有的海报图片以及相关参数字段，并可以通过右方的编辑器更改字段的值并实时得到新的渲染图进行预览和下载。如图 10，开发人员可以在这个<code>playground</code>里进行所见即所得的预览及操作。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECKl2xayCUWicGzmtekGjEa1rWpeTewiafD3z2c0hsBNnXvDq1TKFz1LRw/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 10 海报在线文档预览系统</p><h2 id="_10-项目日志实践" tabindex="-1">10. 项目日志实践 <a class="header-anchor" href="#_10-项目日志实践" aria-label="Permalink to &quot;10. 项目日志实践&quot;">​</a></h2><p>海报图片服务作为一个后端服务，日志采集分析和监控是必不可少的，我们可以通过日志得到以下信息：</p><ul><li>海报图片生成的访问情况</li><li>海报图片生成的性能优劣</li><li>海报图片生成失败的原因</li><li>海报图片生成异常的报警</li></ul><p>所以，我们封装了 3 种 log 日志用于海报图片服务：</p><ul><li>access：记录每次请求的请求日志</li><li>debug：记录生成图片的关键节点信息的日志</li><li>error：记录生成图片失败及原因的错误日志</li></ul><p>日志处理完成后，我们接入了公司现有日志基建服务来完成后续的日志采集、存储和分析等功能，如图 11 所示，通过这一套日志流程，我们就可以更加放心地上线并时刻关注我们服务的运行情况，轻松做到快速排查和分析问题。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKECLppTy4NG1FWIMrelwVVpTbaIMrp07XIL2L9MTn4CPWj3cZ0lwibh1Ow/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 11 海报系统日志服务</p><h2 id="_11-项目部署方案" tabindex="-1">11. 项目部署方案 <a class="header-anchor" href="#_11-项目部署方案" aria-label="Permalink to &quot;11. 项目部署方案&quot;">​</a></h2><p>海报生成是一个耗时任务，其绘制速度依赖于服务器的<code>CPU</code>和内存。经过线上数据评估，截图服务<code>qps</code>最大支持 60 即可，经使用<code>JMeter</code>并发测试：</p><ul><li>当使用单实例（<code>CPU</code>1 核 + 内存 2G）单进程部署项目时，并发为 1 时生成 5000 像素的图片需要耗时约 2s，并发数超过 1 时，后面的请求得等待前面请求生成完图片，才会生成，生成图片时间会随并发数成倍增加。</li><li>当使用单实例（<code>CPU</code>1 核 + 内存 2G）多进程部署项目时，并发为 1 时生成 5000 像素的图片需要耗时约 2s，并发数超过 1 时，当并发数少于进程数时，会同时生成图片，并发为 5 时，图片返回时间约为 9s，此时<code>CPU</code>占用会超过 40%，内存占用 20%，虽然 CPU 和内存在并发数量为 5 的时候占用率不高，但是生成图片的速度会大幅下降，所以需要增大单实例<code>CPU</code>和内存的大小。</li><li>当使用单实例（<code>CPU</code>4 核 + 内存 6G）多进程部署时，并发为 1 时生成 5000 像素的图片耗时约 1s，并发数为 5 的时候，图片返回时间约为 3s，当并发为 10 的时候，图片返回时间约为 8s。此时<code>CPU</code>占用会超过 20%，内存占用 10%。</li></ul><p>所以为了保证图片的生成速度和稳定性，使并发量少的时候图片生成速度尽可能快，并发量大的时候图片生成速度在可接受时间内，采用了多实例加多进程的部署方式，如图 12，项目部署于<code>DomeOS</code>平台，部署了 5 台 （<code>CPU</code>4 核 + 内存 6G） 实例，每个实例通过<code>pm2</code>启动 4 个进程。通过负载均衡可以使请求平均打到每个实例的每个进程上，让并发少的时候最快的生成图片，并发大的时候充分利用所有实例，加快整体生成图片时间。生成 5000 像素的图片，当并发数小于 5 时，图片可以在 1s 左右返回，当并发数为 20，图片可以在 3s 左右返回，当并发数为 60 时，图片可以在 8s 之内返回。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/qMicvibdvl7p2TDrXE282M0zWRBWrMHKEC9ECialuTgmdk8r5CmQz8Vhic6lCmU2hklBmqvG2ws6Nu46Bw0n5w8HzQ/640?wx_fmt=png" alt="" loading="lazy"></p><p>图 12 海报系统部署方案</p><h2 id="_12-项目成果" tabindex="-1">12. 项目成果 <a class="header-anchor" href="#_12-项目成果" aria-label="Permalink to &quot;12. 项目成果&quot;">​</a></h2><p>截止到 2023 年初，海报图片服务已上线海报 10+个。每个海报只需开发 1 遍就可供给<code>H5</code>、小程序、<code>Android</code>和<code>iOS</code>共 4 端进行使用。每天平均生成海报图片 6000+，每张海报图片平均生成时间 400ms 左右，支持超长图可达 10000+像素。</p><h2 id="_13-未来展望" tabindex="-1">13. 未来展望 <a class="header-anchor" href="#_13-未来展望" aria-label="Permalink to &quot;13. 未来展望&quot;">​</a></h2><p>随着项目迭代，海报服务未来可能有更大的需求诉求，下面列出海报服务未来进化的一些展望：</p><p>1、赋能外部开发人员</p><p>目前项目是以普通项目的开发模式进行研发，如果提供给非内部研发人员使用则有很多流程和规范上的问题难以解决。未来可以支持渲染远程组件，通过远程组件的方式下发给外部研发进行开发，以此隔绝海报服务核心逻辑和业务方逻辑，使得业务方只需关心业务，也防止业务方无意间可能影响到海报核心逻辑。此外，在整个过程中还可以增加审核远程组件等项目管理能力。</p><p>2、赋能非研发人员</p><p>为了海报图片渲染极具灵活性，我们把开发人员作为首要满足对象。未来除了开发人员可以开发海报页面，同时可以支持非研发人员通过拖拽编辑等低代码方式完成海报图片的生产，这样针对简单海报图片的场景，运营、产品等非研发人员也可以进行海报图片的制作，进一步提高生产效能。</p><p> </p><p> </p><p>本文转自 <a href="https://mp.weixin.qq.com/s/v6zUSe7Tmmr7nc-losUB9w" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/v6zUSe7Tmmr7nc-losUB9w</a>，如有侵权，请联系删除。</p>',92),p=[a];function l(r,t,s,n,m,h){return o(),c("div",null,p)}const g=e(i,[["render",l]]);export{b as __pageData,g as default};
