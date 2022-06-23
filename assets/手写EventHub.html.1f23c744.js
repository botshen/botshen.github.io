import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.0dbe08df.js";const p={},e=t(`<h2 id="\u4EC0\u4E48\u662F-eventhub" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-eventhub" aria-hidden="true">#</a> \u4EC0\u4E48\u662F EventHub</h2><ul><li>\u7528\u6765\u591A\u4E2A\u6A21\u5757\u4E4B\u95F4\u8FDB\u884C\u901A\u4FE1\u7684\uFF0C\u4E5F\u53EB\u505A\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</li><li>\u4E24\u4E2A JS \u6587\u4EF6\u60F3\u8981\u4E92\u76F8\u8C03\u7528\u51FD\u6570\u600E\u4E48\u5B9E\u73B0\u5462\uFF1F\u4E0D\u80FD\u4F7F\u7528\u5168\u5C40\u53D8\u91CF</li><li>\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\uFF0C\u4E00\u4E2A js \u6587\u4EF6\u60F3\u8981\u8C03\u7528\u53E6\u4E00\u4E2A\u6587\u4EF6\u7684\u51FD\u6570\u7684\u65F6\u5019\u5C31\u89E6\u53D1\u4E8B\u4EF6\u544A\u8BC9 EventHub\uFF08\u4F7F\u7528 emit\uFF09</li><li>EventHub \u76D1\u542C\u4E86\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u5728\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u6CE8\u518C/\u76D1\u542C\u4E8B\u4EF6\uFF08\u4F7F\u7528 on\uFF09\uFF0C\u5F53\u76D1\u542C\u6587\u4EF6 1 \u89E6\u53D1\u7684\u4E8B\u4EF6\u7684\u65F6\u5019\u505A\u4E8B <img src="https://cdn.jsdelivr.net/gh/botshen/image-hosting@master/20220503/image.m1tzpavd39c.webp" alt="image"></li></ul><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h2><ul><li>\u786E\u5B9A API</li><li>\u6DFB\u52A0\u6D4B\u8BD5\u7528\u4F8B</li><li>\u8BA9\u6D4B\u8BD5\u7528\u4F8B\u901A\u8FC7</li><li>\u91CD\u6784\u4EE3\u7801</li></ul><h2 id="\u786E\u5B9A-api" tabindex="-1"><a class="header-anchor" href="#\u786E\u5B9A-api" aria-hidden="true">#</a> \u786E\u5B9A API</h2><ul><li>EventHub#on</li><li>EventHub#off</li><li>EventHub#emit</li></ul><h2 id="\u73AF\u5883\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u5B89\u88C5" aria-hidden="true">#</a> \u73AF\u5883\u5B89\u88C5</h2><ul><li><code>yarn global add ts-node@8.3.0</code></li></ul><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u662F\u4E00\u4E2A\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">EventHub</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7F13\u5B58\u4E8B\u4EF6\u5BF9\u8C61\uFF0Ckey\u662F\u4E8B\u4EF6\u540D\uFF0Cvalue\u662F\u4E8B\u4EF6\u56DE\u8C03</span>
    <span class="token keyword">private</span> cache<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">//</span>
    <span class="token function">on</span><span class="token punctuation">(</span>eventName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">emit</span><span class="token punctuation">(</span>eventName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5728\u7F13\u5B58\u91CC\u627E\uFF0C\u5982\u679C\u6709\u5C31\u904D\u5386\u8C03\u7528\u51FD\u6570</span>
        <span class="token comment">// data \u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u65F6\u5019\u4F20\u7684\u53C2\u6570</span>
        <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">off</span><span class="token punctuation">(</span>eventName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> EventHub<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u5E2E\u52A9\u51FD\u6570 indexOf
 * <span class="token keyword">@param</span> <span class="token parameter">array</span>
 * <span class="token keyword">@param</span> <span class="token parameter">item</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">indexOf</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            index <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> index<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> EventHub <span class="token keyword">from</span> <span class="token string">&quot;../src/index&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">TestCase</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> test1<span class="token operator">:</span> <span class="token function-variable function">TestCase</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u5B9E\u4F8B</span>
    <span class="token keyword">const</span> eventHub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventHub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u65AD\u8A00\u662F\u4E2A\u5BF9\u8C61\uFF0C\u5982\u679C\u662F\u771F\u7684\u4EC0\u4E48\u4E5F\u4E0D\u505A\uFF0C\u5982\u679C\u662F\u5047\u7684\u4F1A\u62A5\u9519</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>eventHub <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;eventHub \u662F\u4E2A\u5BF9\u8C61&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> test2<span class="token operator">:</span> <span class="token function-variable function">TestCase</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> eventHub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventHub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// on emit</span>
    <span class="token keyword">let</span> called <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    eventHub<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5F53\u56DE\u8C03\u6267\u884C\u4E86called\u53D8\u4E3Atrue</span>
        called <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>y<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;\u4ECA\u5929\u6797\u5FD7\u73B2\u7ED3\u5A5A\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>y<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;\u8A00\u627F\u65ED\u65E0\u8BDD\u53EF\u8BF4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    eventHub<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;\u4ECA\u5929\u6797\u5FD7\u73B2\u7ED3\u5A5A\u4E86&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8A00\u627F\u65ED\u65E0\u8BDD\u53EF\u8BF4&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6B64\u5904\u65AD\u8A00\u88AB\u8C03\u7528\u4E86</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>called<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> test3<span class="token operator">:</span> <span class="token function-variable function">TestCase</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> eventHub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventHub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> called <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fn1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        called <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    eventHub<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">,</span> fn1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    eventHub<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">,</span> fn1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    eventHub<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>called <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">test1</span><span class="token punctuation">(</span><span class="token string">&quot;EventHub \u53EF\u4EE5\u521B\u5EFA\u5BF9\u8C61&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">test2</span><span class="token punctuation">(</span><span class="token string">&quot;.on \u4E86\u4E4B\u540E .emit\uFF0C\u4F1A\u89E6\u53D1 .on \u7684\u51FD\u6570&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">test3</span><span class="token punctuation">(</span><span class="token string">&quot;.off \u6709\u7528&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","\u624B\u5199EventHub.html.vue"]]);export{r as default};
