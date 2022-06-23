import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.ab05bb27.js";const t={},i=e(`<h2 id="\u58F0\u660E\u7C7B\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u7C7B\u548C\u65B9\u6CD5" aria-hidden="true">#</a> \u58F0\u660E\u7C7B\u548C\u65B9\u6CD5</h2><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u5728ruby\u4E2D\u6CA1\u6709\u62EC\u53F7\uFF0C\u5728\u60F3\u8981\u5173\u95ED\u7684\u5730\u65B9\u52A0\u4E0Aend\u5373\u53EF</p></div><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code><span class="token comment"># \u58F0\u660E\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">User</span>
  <span class="token comment"># \u6784\u9020\u65B9\u6CD5</span>
  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">initialize</span></span> name
    <span class="token variable">@name</span><span class="token operator">=</span>name
  <span class="token keyword">end</span>
  <span class="token comment"># \u58F0\u660E\u5B9E\u4F8B\u65B9\u6CD5</span>
  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">hi</span></span> target
    p <span class="token string-literal"><span class="token string">&quot;Hi </span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">target</span><span class="token delimiter punctuation">}</span></span><span class="token string">,I am </span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content"><span class="token variable">@name</span></span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u7528\u6237</span>
u1<span class="token operator">=</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token string-literal"><span class="token string">&#39;shenxin&#39;</span></span>
p u1 <span class="token comment">#=&gt; #&lt;User:0x014362b8 @name=&quot;shenxin&quot;&gt;</span>
<span class="token comment"># \u8C03\u7528\u65B9\u6CD5</span>
u1<span class="token punctuation">.</span>hi <span class="token string-literal"><span class="token string">&#39;ruby&#39;</span></span> <span class="token comment">#=&gt; Hi ruby,I am shenxin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[i];function o(c,p){return s(),a("div",null,l)}var m=n(t,[["render",o],["__file","Ruby\u7B80\u6613\u6559\u7A0B.html.vue"]]);export{m as default};
