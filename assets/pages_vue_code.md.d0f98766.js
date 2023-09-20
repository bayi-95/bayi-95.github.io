import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.08dd3238.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/vue/code.md","filePath":"pages/vue/code.md","lastUpdated":1694501400000}'),p={name:"pages/vue/code.md"},o=l(`<h2 id="关于-vue-下组件引入第三方外部外链-js-几种方式" tabindex="-1">关于 Vue 下组件引入第三方外部外链 Js 几种方式 <a class="header-anchor" href="#关于-vue-下组件引入第三方外部外链-js-几种方式" aria-label="Permalink to &quot;关于 Vue 下组件引入第三方外部外链 Js 几种方式&quot;">​</a></h2><p><a href="https://blog.csdn.net/u010881899/article/details/80895661" target="_blank" rel="noreferrer">https://blog.csdn.net/u010881899/article/details/80895661</a></p><h2 id="nginx-一键配置" tabindex="-1">nginx 一键配置 <a class="header-anchor" href="#nginx-一键配置" aria-label="Permalink to &quot;nginx 一键配置&quot;">​</a></h2><p><a href="https://nginxconfig.io/" target="_blank" rel="noreferrer">https://nginxconfig.io/</a></p><h2 id="lodash-按需加载" tabindex="-1">lodash 按需加载 <a class="header-anchor" href="#lodash-按需加载" aria-label="Permalink to &quot;lodash 按需加载&quot;">​</a></h2><p><a href="https://www.jianshu.com/p/f03ff4f3a8b3" target="_blank" rel="noreferrer">https://www.jianshu.com/p/f03ff4f3a8b3</a></p><h2 id="threejs" tabindex="-1">threeJs <a class="header-anchor" href="#threejs" aria-label="Permalink to &quot;threeJs&quot;">​</a></h2><h4 id="中文教程" tabindex="-1">中文教程 <a class="header-anchor" href="#中文教程" aria-label="Permalink to &quot;中文教程&quot;">​</a></h4><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning</p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Promise 实现 遵循promise/A+规范</span></span>
<span class="line"><span style="color:#6A737D;"> * Promise/A+规范译文:</span></span>
<span class="line"><span style="color:#6A737D;"> * https://malcolmyu.github.io/2015/06/12/Promises-A-Plus/#note-4</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// promise 三个状态</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PENDING</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pending&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FULFILLED</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;fulfilled&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">REJECTED</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;rejected&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">excutor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> that </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 缓存当前promise实例对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    that.status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PENDING</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 初始状态</span></span>
<span class="line"><span style="color:#E1E4E8;">    that.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// fulfilled状态时 返回的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    that.reason </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// rejected状态时 拒绝的原因</span></span>
<span class="line"><span style="color:#E1E4E8;">    that.onFulfilledCallbacks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []; </span><span style="color:#6A737D;">// 存储fulfilled状态对应的onFulfilled函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    that.onRejectedCallbacks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []; </span><span style="color:#6A737D;">// 存储rejected状态对应的onRejected函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// value成功态时接收的终值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(value </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(resolve, reject);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 为什么resolve 加setTimeout?</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 2.2.4规范 onFulfilled 和 onRejected 只允许在 execution context 栈仅包含平台代码时运行.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 调用resolve 回调对应onFulfilled函数</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (that.status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PENDING</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 只能由pending状态 =&gt; fulfilled状态 (避免调用多次resolve reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">                that.status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FULFILLED</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                that.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">                that.onFulfilledCallbacks.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cb</span><span style="color:#E1E4E8;">(that.value));</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">reason</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// reason失败态时接收的拒因</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 调用reject 回调对应onRejected函数</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (that.status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PENDING</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 只能由pending状态 =&gt; rejected状态 (避免调用多次resolve reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">                that.status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">REJECTED</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                that.reason </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> reason;</span></span>
<span class="line"><span style="color:#E1E4E8;">                that.onRejectedCallbacks.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cb</span><span style="color:#E1E4E8;">(that.reason));</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 捕获在excutor执行器中抛出的异常</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     throw new Error(&#39;error in excutor&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">excutor</span><span style="color:#E1E4E8;">(resolve, reject);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#B392F0;">eggch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Promise 实现 遵循promise/A+规范</span></span>
<span class="line"><span style="color:#6A737D;"> * Promise/A+规范译文:</span></span>
<span class="line"><span style="color:#6A737D;"> * https://malcolmyu.github.io/2015/06/12/Promises-A-Plus/#note-4</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// promise 三个状态</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PENDING</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pending&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FULFILLED</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;fulfilled&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">REJECTED</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;rejected&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">(</span><span style="color:#E36209;">excutor</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> that </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 缓存当前promise实例对象</span></span>
<span class="line"><span style="color:#24292E;">    that.status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PENDING</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 初始状态</span></span>
<span class="line"><span style="color:#24292E;">    that.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// fulfilled状态时 返回的信息</span></span>
<span class="line"><span style="color:#24292E;">    that.reason </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// rejected状态时 拒绝的原因</span></span>
<span class="line"><span style="color:#24292E;">    that.onFulfilledCallbacks </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []; </span><span style="color:#6A737D;">// 存储fulfilled状态对应的onFulfilled函数</span></span>
<span class="line"><span style="color:#24292E;">    that.onRejectedCallbacks </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []; </span><span style="color:#6A737D;">// 存储rejected状态对应的onRejected函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) { </span><span style="color:#6A737D;">// value成功态时接收的终值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(value </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value.</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(resolve, reject);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 为什么resolve 加setTimeout?</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 2.2.4规范 onFulfilled 和 onRejected 只允许在 execution context 栈仅包含平台代码时运行.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 调用resolve 回调对应onFulfilled函数</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (that.status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PENDING</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 只能由pending状态 =&gt; fulfilled状态 (避免调用多次resolve reject)</span></span>
<span class="line"><span style="color:#24292E;">                that.status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FULFILLED</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                that.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">                that.onFulfilledCallbacks.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cb</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cb</span><span style="color:#24292E;">(that.value));</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(</span><span style="color:#E36209;">reason</span><span style="color:#24292E;">) { </span><span style="color:#6A737D;">// reason失败态时接收的拒因</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 调用reject 回调对应onRejected函数</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (that.status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PENDING</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 只能由pending状态 =&gt; rejected状态 (避免调用多次resolve reject)</span></span>
<span class="line"><span style="color:#24292E;">                that.status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">REJECTED</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                that.reason </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> reason;</span></span>
<span class="line"><span style="color:#24292E;">                that.onRejectedCallbacks.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">cb</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cb</span><span style="color:#24292E;">(that.reason));</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 捕获在excutor执行器中抛出的异常</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     throw new Error(&#39;error in excutor&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">excutor</span><span style="color:#24292E;">(resolve, reject);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#6F42C1;">eggch</span><span style="color:#24292E;"> (e) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(e);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,10),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
