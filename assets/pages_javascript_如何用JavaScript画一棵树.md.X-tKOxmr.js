import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.CNOmwueL.js";const c=JSON.parse('{"title":"如何用 JavaScript 画一棵树？","description":"产品要一颗随机树，也就是树的茂盛程度、长度、枝干粗细都是随机的，第一时间想到的就是 Canvas，用它来画这棵随机树吧。","frontmatter":{"title":"如何用 JavaScript 画一棵树？","description":"产品要一颗随机树，也就是树的茂盛程度、长度、枝干粗细都是随机的，第一时间想到的就是 Canvas，用它来画这棵随机树吧。","isPage":true,"date":"2024-06-11T00:00:00.000Z","tags":["javascript","canvas"]},"headers":[{"level":1,"title":"如何用 JavaScript 画一棵树？","slug":"如何用-javascript-画一棵树","link":"#如何用-javascript-画一棵树","children":[]}],"relativePath":"pages/javascript/如何用JavaScript画一棵树.md","filePath":"pages/javascript/如何用JavaScript画一棵树.md","lastUpdated":1721098659000}'),p={name:"pages/javascript/如何用JavaScript画一棵树.md"},h=n(`<h1 id="如何用-javascript-画一棵树" tabindex="-1">如何用 JavaScript 画一棵树？ <a class="header-anchor" href="#如何用-javascript-画一棵树" aria-label="Permalink to &quot;如何用 JavaScript 画一棵树？&quot;">​</a></h1><hr><p>产品说要让前端用 JavaScript 画一棵树出来，但是这难道不能直接让 UI 给一张图片吗？</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX3YJUYsbHh2q7zx0hd0gSicFyzNgicqAMOPQw4ZBCiclzW4OMJz2en2kDA/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>后来一问才知道，产品要的是一颗 <strong>随机树</strong>，也就是树的<strong>茂盛程度、长度、枝干粗细</strong>都是随机的，那这确实没办法叫 UI 给图，毕竟 UI 不可能给我 10000 张树的图片吧？</p><p>所以第一时间想到的就是 <strong>Canvas</strong>，用它来画这棵<strong>随机树（文末有完整代码）</strong></p><h2 id="canvas-画一颗随机树" tabindex="-1">Canvas 画一颗随机树 <a class="header-anchor" href="#canvas-画一颗随机树" aria-label="Permalink to &quot;Canvas 画一颗随机树&quot;">​</a></h2><p>接下来使用 Canvas 去画这棵随机树</p><h3 id="基础页面" tabindex="-1">基础页面 <a class="header-anchor" href="#基础页面" aria-label="Permalink to &quot;基础页面&quot;">​</a></h3><p>我们需要在页面上写一个 <code>canvas</code> 标签，并设置好宽高，同时需要获取它的 Dom 节点、绘制上下文，以便后续的绘制</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXpmpYict79AzUan6gj9WJ1UBUIia935dXc9R34cibwZfiahKH9SK1Y1HTibw/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><h3 id="坐标调整" tabindex="-1">坐标调整 <a class="header-anchor" href="#坐标调整" aria-label="Permalink to &quot;坐标调整&quot;">​</a></h3><p>默认的 Canvas 坐标系是这样的</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXq0J7m8DmibGG8OxG9J1ebNfUfP2xmOrW00kEr4l9rG1oibZe9tXnRcXg/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>但是我们现在需要从中间去向上去画一棵树，所以坐标得调整成这样：</p><ul><li><p>X 轴从最上面移动到<strong>最下面</strong></p></li><li><p>Y 轴的方向由往下调整成<strong>往上</strong>，并且从最左边移动到<strong>画布中间</strong></p></li></ul><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXkcbt4On6xeDfH2kEL7UkuQFiciavad1o9mlJRp1TNQkErndam2gUp1wQ/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>这些操作可以使用 Canvas 的方法</p><ul><li><p><strong>ctx.translate：</strong> 坐标系移动</p></li><li><p><strong>ctx.scale：</strong> 坐标系缩放</p></li></ul><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX77XUPZjkTg4HDdE1nC7zAfL8n11GK5BQZzGdtHZ32BRdwgXLBibAOtA/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><h3 id="绘制一棵树的要素" tabindex="-1">绘制一棵树的要素 <a class="header-anchor" href="#绘制一棵树的要素" aria-label="Permalink to &quot;绘制一棵树的要素&quot;">​</a></h3><p>绘制一棵树的要素是什么呢？其实就是<strong>树枝</strong>和<strong>果实</strong>，但是其实<strong>树枝</strong>才是第一要素，那么<strong>树枝</strong>又有哪些要素呢？无非就这几个点</p><ul><li><p>起始点</p></li><li><p>树枝长度、树枝粗细</p></li><li><p>生长角度</p></li><li><p>终点</p></li></ul><h3 id="开始绘制" tabindex="-1">开始绘制 <a class="header-anchor" href="#开始绘制" aria-label="Permalink to &quot;开始绘制&quot;">​</a></h3><p>所以我们可以写一个 <code>drawBranch</code> 来进行绘制，并且初始调用肯定是绘制<strong>树干</strong>，树干的参数如下：</p><ul><li><p>起始点：(0, 0)</p></li><li><p>树枝长度、树枝粗细：这些可以自己自定义</p></li><li><p>生长角度：90度</p></li><li><p>终点：需要算</p></li></ul><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX2EJBMLc0xJ9lTG76TV4RaqdOoeuHNyYdG4mwsNXksrOR6o2NSkhcOA/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>这个终点应该怎么算呢？其实很简单，根据<code>树枝长度、生长角度</code>就可以算出来了，这是初高中的知识</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX9nx9luG91n10Qs6j8iczYOvQyjAgvCJ9fgWHOfOlUzmB7qwazsTeX8Q/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>于是我们可以使用 Canvas 的绘制方法，去绘制<strong>线段</strong>，其实树枝就是一个一个的<strong>线段</strong></p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXic7Q82BUaI6aVT4v7Me0VTFeDAVbvJtFYianyYZPyrLiapeGK4tVILErg/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>到现在我绘制出了一个<strong>树干</strong> 出来</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXjQDhVxYCS3zJGF79V1dcia9q2uiapkHXVOibYVwVEiam2SibiaDVyG5YDXNA/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>但是我们是想让这棵树开枝散叶，所以需要继续递归继续去绘制更多的树枝出来~</p><h3 id="递归绘制" tabindex="-1">递归绘制 <a class="header-anchor" href="#递归绘制" aria-label="Permalink to &quot;递归绘制&quot;">​</a></h3><p>其实往哪开枝散叶呢？无非就是往左或者往右</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXSKVUib0mbPKiaxKrE2w9mFfX9r6icdpPU4viayFv07HYFib8tCxXmV3AjnA/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>所以需要递归画左边和右边的树枝，并且<strong>子树枝肯定要比父树枝更短、比父树枝更细</strong>，比如我们可以定义一个比例</p><ul><li><p>子树枝是父树枝长度的 0.8</p></li><li><p>子树枝是父树枝粗细的 0.75</p></li></ul><p>而子树枝的生长角度，其实可以随机，我们可以在 <strong>0° - 30°</strong> 之间随机选一个角度，于是增加了递归调用的代码</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXaqAjfEW8g3DERnaTPAte2smULlxcib1fuz0zszwqI1tA5foQtj8zy1w/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>但是这个时候会发现，报错了，爆栈了，因为我们只递归开始，但却没有在某个时刻递归停止</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXHffLqzNDfxr2l7QDNHwufW4PfT4mD61ZM2miaf8qn9iaN2Bce108CrDg/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>我们可以自己定义一个停止规则（规则可以自己定义，这会决定你这棵树的茂盛程度）：</p><ul><li><p>粗细小于 2 时马上停止</p></li><li><p>（粗细小于 10 时 + 随机数）决定是否停止</p></li></ul><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX2ic1mUQH5XFUXI8whaxFaWF0ic1FOK0nbaibiczn2CbYzuOSzepGISYe1Q/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>现在可以看到我们已经大致绘制出一棵树了</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXMzDVWAm7aGicklQBaSjCUHdmY2icYVbdDFCoc1gffAdwDibHN8Vy1nA0Q/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>不过还少了树的果实</p><h3 id="绘制果实" tabindex="-1">绘制果实 <a class="header-anchor" href="#绘制果实" aria-label="Permalink to &quot;绘制果实&quot;">​</a></h3><p>绘制果实很简单，只需要在绘制树枝结束的时候，去把果实绘制出来就行，其实果实就是一个个的<strong>白色实心圆</strong></p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXRdYsfRyg8Telzdv9VvjypicOIeWbiasw7gJKrmYzMF2FTuLa0OeStX5A/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>至此这棵树完整绘制完毕</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX3YJUYsbHh2q7zx0hd0gSicFyzNgicqAMOPQw4ZBCiclzW4OMJz2en2kDA/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><p>绘制部分的代码如下</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX24rjL15vX5usVN3WNTbRSZZOL3DWy44YrxLYhGpbpdib8nnjxNB4G2g/640?wx_fmt=png&amp;from=appmsg" alt="" loading="lazy"></p><h2 id="完整代码" tabindex="-1">完整代码 <a class="header-anchor" href="#完整代码" aria-label="Permalink to &quot;完整代码&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;background-color: cadetblue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;canvasRef&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1000&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;750&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref, onMounted } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取 canvas 的 dom 节点  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> canvasRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HTMLCanvasElement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onMounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> canvasEle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvasRef.value;  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvasEle) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 获取 canvas 上下文  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvasEle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 坐标系移动  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">translate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(canvasEle.width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, canvasEle.height);  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // y轴反向  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   coordinate 起始点  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   len 树枝长度  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   thick 树枝粗细  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   angle 生长角度  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> drawBranch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">coordinate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">len</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">thick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">angle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 绘制结束条件  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (thick </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (thick </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 绘制果实  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">beginPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">coordinate, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ctx.fillStyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#fff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">beginPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开启线段绘制  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">coordinate); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始起始点  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 计算结束点  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> endCoordinate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      coordinate[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((angle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 180</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      coordinate[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((angle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 180</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ];  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">endCoordinate); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 线段终点  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ctx.strokeStyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#333&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 线段颜色  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ctx.lineWidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> thick; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 线段粗细  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ctx.lineCap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;round&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开始画  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 左分支  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    drawBranch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(endCoordinate, len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, thick </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.75</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, angle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 右分支  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    drawBranch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(endCoordinate, len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, thick </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.75</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, angle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 先画树干  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  drawBranch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>本文转自 <a href="https://mp.weixin.qq.com/s/6jfubgtHJly56w21j_mlQw" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/6jfubgtHJly56w21j_mlQw</a>，如有侵权，请联系删除。</p>`,59),l=[h];function t(k,E,e,r,g,d){return a(),i("div",null,l)}const F=s(p,[["render",t]]);export{c as __pageData,F as default};
