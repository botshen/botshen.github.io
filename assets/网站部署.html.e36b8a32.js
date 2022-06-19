import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as a,e as l}from"./app.501f77ac.js";const n={},d=l(`<div class="language-PowerShell ext-PowerShell line-numbers-mode"><pre class="language-PowerShell"><code>$ ssh ubuntu@82.156.230.73
ubuntu@82.156.230.73: Permission denied (publickey).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u516C\u94A5" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u516C\u94A5" aria-hidden="true">#</a> \u914D\u7F6E\u516C\u94A5</h3><p>\u62A5\u9519\u5373\u53EF\u6D88\u5931 \u5DE6\u4FA7\u8FB9\u680F\u7684\u5BC6\u94A5\u680F\u6DFB\u52A0\u5373\u53EF\uFF0C\u5BC6\u7801\u4E3A</p><h3 id="\u914D\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4" aria-hidden="true">#</a> \u914D\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4</h3><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>sudo vi /etc/ssh/sshd_config
# \u628A\u4E0B\u9762\u7684\u6539\u4E3A\u8FD9\u4E24\u4E2A\u503C
ClientAliveInterval 300
ClientAliveCountMax 5
# \u91CD\u542F\u670D\u52A1\u5668\uFF0C\u8BA9\u6211\u8F93\u5165\u5BC6\u7801\u624D\u80FD\u767B\u9646
# \u8FD0\u884C\u8FD9\u4E2A\u4E0B\u6B21\u5C31\u4E0D\u7528\u8F93\u5165\u5BC6\u7801\u4E86
ssh-copy-id ubuntu@82.156.230.73
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA-user" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-user" aria-hidden="true">#</a> \u521B\u5EFA User</h3><p>\u9700\u8981\u5207\u6362\u5230 root \u7528\u6237</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>adduser mangosteen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-docker" aria-hidden="true">#</a> \u5B89\u88C5 Docker</h3><ul><li>\u63A8\u8350\u53EA\u5728 root \u7528\u6237\u91CC\u5B89\u88C5 Docker \u5373\u53EF</li><li>\u6BCF\u4E2A\u5E94\u7528\u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7528\u6237\uFF0C\u5E76\u52A0\u5165 docker \u7528\u6237\u7EC4</li><li>\u5207\u5FCC\u7528 root \u7BA1\u7406\u6240\u6709\u5E94\u7528 \u6211\u7684\u817E\u8BAF\u4E91\u670D\u52A1\u5668\u81EA\u5E26\u4E86 docker</li></ul><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code> docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u770B\u5230<code>Hello from Docker!</code>\u8868\u793A\u6210\u529F\u4E86</p><h3 id="mangosteen-\u52A0\u5165-docker-\u7528\u6237\u7EC4" tabindex="-1"><a class="header-anchor" href="#mangosteen-\u52A0\u5165-docker-\u7528\u6237\u7EC4" aria-hidden="true">#</a> mangosteen \u52A0\u5165 docker \u7528\u6237\u7EC4</h3><p>\u8FD9\u6837\u624D\u80FD\u4F7F\u7528 docker</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>usermod -a -G docker mangosteen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9000\u51FA\u4F7F\u7528 exit \u6216 ctrl+D\uFF0Cctrl+D \u5728\u6CA1\u8F93\u5165\u7684\u524D\u63D0\u4E0B\u53EF\u4EE5\u4F7F\u7528</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>ssh mangosteen@82.156.230.73
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u8BF4\u6CA1\u6709\u8BA4\u8BC1\uFF0C\u8981\u628A root \u7684\u8BA4\u8BC1\u6743\u9650\u79FB\u4EA4\u7ED9 mangosteen\uFF08\u601D\u8DEF\uFF09\u5177\u4F53\u89C1\u8BFE\u7A0B \u6700\u540E\u4F7F\u7528 docker ps \u548C docker run hello-world \u6D4B\u8BD5\u4E00\u4E0B\u5373\u53EF</p><h3 id="\u914D\u7F6E\u540E\u7AEF\u751F\u4EA7\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u540E\u7AEF\u751F\u4EA7\u73AF\u5883" aria-hidden="true">#</a> \u914D\u7F6E\u540E\u7AEF\u751F\u4EA7\u73AF\u5883</h3><h4 id="\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4" aria-hidden="true">#</a> \u6B65\u9AA4\uFF1A</h4><ol><li>\u51C6\u5907\u4E00\u4E2A\u65B0\u7528\u6237</li><li>\u51C6\u5907\u597D Docker</li><li>\u4E0A\u4F20 Dockerfile</li><li>\u4E0A\u4F20\u6E90\u4EE3\u7801</li><li>\u7528 Dockerfile \u6784\u5EFA\u8FD0\u884C\u73AF\u5883</li><li>\u5728\u8FD0\u884C\u73AF\u5883\u91CC\u8FD0\u884C\u6E90\u4EE3\u7801</li><li>\u4F7F\u7528 Nginx \u505A\u8F6C\u53D1</li></ol><h4 id="\u7248\u672C\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u66F4\u65B0" aria-hidden="true">#</a> \u7248\u672C\u66F4\u65B0</h4><ol start="8"><li>\u4E0A\u4F20\u65B0 Dockerfile</li><li>\u4E0A\u4F20\u65B0\u6E90\u4EE3\u7801</li><li>\u7528 Dockerfile \u6784\u5EFA\u65B0\u8FD0\u884C\u73AF\u5883</li><li>\u5728\u65B0\u73AF\u5883\u8FD0\u884C\u65B0\u4EE3\u7801</li><li>\u4F7F\u7528 Nginx \u505A\u8F6C\u53D1</li></ol><h3 id="\u524D\u7AEF\u54EA\u6709\u751F\u4EA7\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u54EA\u6709\u751F\u4EA7\u73AF\u5883" aria-hidden="true">#</a> \u524D\u7AEF\u54EA\u6709\u751F\u4EA7\u73AF\u5883</h3><ol start="13"><li>\u5C06\u4EE3\u7801\u4E2D\u7684\u8DEF\u5F84\u66FF\u6362\u6210 CDN \u8DEF\u5F84</li><li>\u4E0A\u4F20\u6253\u5305\u597D\u7684 CSS \u548C JS \u4EE3\u7801\u5230 CDN</li><li>\u5C06 html \u6587\u4EF6\u4E0A\u4F20\u5230\u540E\u7AEF\u670D\u52A1\u5668</li><li>\u4F7F\u7528 Nginx \u5904\u7406 html \u6587\u4EF6\u8BF7\u6C42 \u5177\u4F53\u8FC7\u7A0B\u4EE5\u540E\u8BB2\uFF0C\u4ECA\u5929\u53EA\u8BB2\u540E\u7AEF</li></ol>`,25),r=[d];function s(c,o){return i(),a("div",null,r)}var u=e(n,[["render",s],["__file","\u7F51\u7AD9\u90E8\u7F72.html.vue"]]);export{u as default};
