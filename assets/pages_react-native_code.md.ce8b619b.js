import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.5c504ffb.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/react-native/code.md","filePath":"pages/react-native/code.md","lastUpdated":1694501400000}'),p={name:"pages/react-native/code.md"},o=l(`<h2 id="react-navigation" tabindex="-1">react-navigation <a class="header-anchor" href="#react-navigation" aria-label="Permalink to &quot;react-navigation&quot;">​</a></h2><p>参考项目 <a href="https://github.com/react-navigation/react-navigation.git" target="_blank" rel="noreferrer">https://github.com/react-navigation/react-navigation.git</a></p><p>∆ react-navigation / exapmle / App.tsx</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">1.最外层</span><span style="color:#9ECBFF;">&quot;&lt;View style={{ flex: 1 }}&gt;&quot;</span><span style="color:#E1E4E8;">包裹</span></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">NativeViewGestureHandler</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> 源自 react</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">native</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">gesture</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">handler（在UI线程中识别和跟踪手势，防止手势操作被一些Native组件劫持）</span></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">Animated.ScrollView</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> 包裹滚动区域</span></span>
<span class="line"><span style="color:#E1E4E8;">4.原生动画驱动 改变translateY的值 参考：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//reactnative.cn/docs/0.51/animations.html#使用原生动画驱动</span></span>
<span class="line"><span style="color:#E1E4E8;">5.translateY改变 绑定的对象值改变，例：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">translateY</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state.scrollY.</span><span style="color:#B392F0;">interpolate</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    extrapolate: </span><span style="color:#9ECBFF;">&#39;clamp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputRange: [</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">450</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    outputRange: [</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">6.interpolate 值变动范围；</span><span style="color:#B392F0;">extrapolate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;clamp&#39;</span><span style="color:#E1E4E8;">,阻断值的输入；</span></span>
<span class="line"><span style="color:#E1E4E8;">7.绑定的对象值改变 因绑定在transform上 改变UI视图；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Animated.View</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{[</span></span>
<span class="line"><span style="color:#E1E4E8;">    styles.backgroundUnderlay,</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      transform: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { scale: backgroundScale },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { translateY: backgroundTranslateY },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]}</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">8.</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">SafeAreaView</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">安全区域 内容不会被机型的刘海遮挡；forceInset可以选择是否显示边距 forceInset</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{ </span><span style="color:#B392F0;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;never&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;always&#39;</span><span style="color:#E1E4E8;"> }}</span></span>
<span class="line"><span style="color:#E1E4E8;">9.图片资源的加载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Image</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">source</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./src/assets/NavLogo.png&#39;</span><span style="color:#E1E4E8;">)}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{styles.bannerImage}</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 10. 文字需包裹在Text组件里</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Text</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{styles.bannerTitle}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    React Navigation Examples</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">Text</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">1.最外层</span><span style="color:#032F62;">&quot;&lt;View style={{ flex: 1 }}&gt;&quot;</span><span style="color:#24292E;">包裹</span></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">NativeViewGestureHandler</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> 源自 react</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">native</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">gesture</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">handler（在UI线程中识别和跟踪手势，防止手势操作被一些Native组件劫持）</span></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Animated.ScrollView</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> 包裹滚动区域</span></span>
<span class="line"><span style="color:#24292E;">4.原生动画驱动 改变translateY的值 参考：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//reactnative.cn/docs/0.51/animations.html#使用原生动画驱动</span></span>
<span class="line"><span style="color:#24292E;">5.translateY改变 绑定的对象值改变，例：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">translateY</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.state.scrollY.</span><span style="color:#6F42C1;">interpolate</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    extrapolate: </span><span style="color:#032F62;">&#39;clamp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    inputRange: [</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">450</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    outputRange: [</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">150</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">6.interpolate 值变动范围；</span><span style="color:#6F42C1;">extrapolate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;clamp&#39;</span><span style="color:#24292E;">,阻断值的输入；</span></span>
<span class="line"><span style="color:#24292E;">7.绑定的对象值改变 因绑定在transform上 改变UI视图；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Animated.View</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{[</span></span>
<span class="line"><span style="color:#24292E;">    styles.backgroundUnderlay,</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      transform: [</span></span>
<span class="line"><span style="color:#24292E;">        { scale: backgroundScale },</span></span>
<span class="line"><span style="color:#24292E;">        { translateY: backgroundTranslateY },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ]}</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">8.</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">SafeAreaView</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">安全区域 内容不会被机型的刘海遮挡；forceInset可以选择是否显示边距 forceInset</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{{ </span><span style="color:#6F42C1;">top</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;never&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">bottom</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;always&#39;</span><span style="color:#24292E;"> }}</span></span>
<span class="line"><span style="color:#24292E;">9.图片资源的加载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Image</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">source</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./src/assets/NavLogo.png&#39;</span><span style="color:#24292E;">)}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{styles.bannerImage}</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 10. 文字需包裹在Text组件里</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Text</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{styles.bannerTitle}&gt;</span></span>
<span class="line"><span style="color:#24292E;">    React Navigation Examples</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#005CC5;">Text</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,4),e=[o];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};
