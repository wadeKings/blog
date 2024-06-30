import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,a as t}from"./app-Cir3Ht07.js";const e={},o=t(`<h1 id="springboot-validation" tabindex="-1"><a class="header-anchor" href="#springboot-validation"><span>SpringBoot-Validation</span></a></h1><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2><ol start="2"><li>新建项目: 创建一个<code>SpringBoot</code>项目</li><li>引入依赖: 在<code>pom.xml</code>中添加依赖</li></ol><blockquote><p><code>SpringBoot</code>案例: <code>https://docs.spring.io/spring-boot/reference/io/validation.html</code><br> Jakarta-Validation注解: <code>https://beanvalidation.org/2.0/spec/#builtinconstraints</code><br><code>Spring-validation文档</code> <code>https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/validation/package-summary.html</code></p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-validation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>指定规则: 在需要指定验证规则的属性/构造方法/其他上面添加规则注解</li></ol><blockquote><p>注意: 需要引入<code>lombok</code>依赖</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AddCourseDto</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;课程名称不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;适用人群不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Size</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;适用人群内容过少&quot;</span><span class="token punctuation">,</span>min <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> users<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> tags<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;课程分类不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> mt<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;课程分类不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> st<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;课程等级不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> grade<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> teachmode<span class="token punctuation">;</span>

    
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>

    
    <span class="token keyword">private</span> <span class="token class-name">String</span> pic<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;收费规则不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> charge<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> price<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启用验证: 在类上/方法上/参数前添加<code>Validated</code>注解，以开启对类/方法/参数的验证</li></ol><blockquote><p><code>Validated</code>注解: <code>https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/validation/annotation/Validated.html</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CourseBaseInfoController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/course&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createCourseBase</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token annotation punctuation">@Validated</span> <span class="token class-name">AddCourseDto</span> addCourseDto<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>addCourseDto<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分组校验" tabindex="-1"><a class="header-anchor" href="#分组校验"><span>分组校验</span></a></h2><ol><li>定义分组: 新建类<code>ValidationGroups</code></li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 校验分组
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ValidationGroups</span> <span class="token punctuation">{</span>

 <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Inster</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Update</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Delete</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>指定分组: 校验规则注解的<code>groups</code>属性用于指定分组，即该规则属于哪个分组</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AddCourseDto</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定规则NotEmpty属于ValidationGroups.Inster组</span>
    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>groups <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ValidationGroups<span class="token punctuation">.</span>Inster</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">,</span>message <span class="token operator">=</span> <span class="token string">&quot;添加课程名称不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>groups <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ValidationGroups<span class="token punctuation">.</span>Update</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">,</span>message <span class="token operator">=</span> <span class="token string">&quot;修改课程名称不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;适用人群不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Size</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;适用人群内容过少&quot;</span><span class="token punctuation">,</span>min <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> users<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> tags<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;课程分类不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> mt<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;课程分类不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> st<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;课程等级不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> grade<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> teachmode<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> pic<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;收费规则不能为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> charge<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> price<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>分组验证: <code>@Validated</code>的<code>value</code>属性可以指定分组，即指定校验时使用哪个组的校验规则</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CourseBaseInfoController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/course&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createCourseBase</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token annotation punctuation">@Validated</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ValidationGroups<span class="token punctuation">.</span>Inster</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token class-name">AddCourseDto</span> addCourseDto<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>addCourseDto<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),p=[o];function i(c,l){return a(),s("div",null,p)}const d=n(e,[["render",i],["__file","validation.html.vue"]]),k=JSON.parse('{"path":"/Java/validation.html","title":"SpringBoot-Validation","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover2.jpg","icon":"pen-to-square","date":"2024-06-30T00:00:00.000Z","category":["Validation"],"tag":["红","圆"],"star":true,"sticky":true,"description":"SpringBoot-Validation 基本使用 新建项目: 创建一个SpringBoot项目 引入依赖: 在pom.xml中添加依赖 SpringBoot案例: https://docs.spring.io/spring-boot/reference/io/validation.html Jakarta-Validation注解: https:/...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/Java/validation.html"}],["meta",{"property":"og:site_name","content":"柳衣白卿"}],["meta",{"property":"og:title","content":"SpringBoot-Validation"}],["meta",{"property":"og:description","content":"SpringBoot-Validation 基本使用 新建项目: 创建一个SpringBoot项目 引入依赖: 在pom.xml中添加依赖 SpringBoot案例: https://docs.spring.io/spring-boot/reference/io/validation.html Jakarta-Validation注解: https:/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-29T18:24:25.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"name":"twitter:image:alt","content":"SpringBoot-Validation"}],["meta",{"property":"article:author","content":"柳衣白卿"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:published_time","content":"2024-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-29T18:24:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot-Validation\\",\\"image\\":[\\"https://mister-hope.github.io/blog/assets/images/cover2.jpg\\"],\\"datePublished\\":\\"2024-06-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-29T18:24:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"柳衣白卿\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"分组校验","slug":"分组校验","link":"#分组校验","children":[]}],"git":{"createdTime":1719685465000,"updatedTime":1719685465000,"contributors":[{"name":"wadeKings","email":"worldkingscoding@gmail.com","commits":1}]},"readingTime":{"minutes":1.81,"words":544},"filePathRelative":"Java/validation.md","localizedDate":"2024年6月30日","excerpt":"\\n<h2>基本使用</h2>\\n<ol start=\\"2\\">\\n<li>新建项目: 创建一个<code>SpringBoot</code>项目</li>\\n<li>引入依赖: 在<code>pom.xml</code>中添加依赖</li>\\n</ol>\\n<blockquote>\\n<p><code>SpringBoot</code>案例: <code>https://docs.spring.io/spring-boot/reference/io/validation.html</code><br>\\nJakarta-Validation注解: <code>https://beanvalidation.org/2.0/spec/#builtinconstraints</code><br>\\n<code>Spring-validation文档</code> <code>https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/validation/package-summary.html</code></p>\\n</blockquote>","autoDesc":true}');export{d as comp,k as data};
