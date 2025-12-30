const e=`<nav id="TOC">
<ul>
<li><a href="#references" id="toc-references"><span
class="toc-section-number">1</span> References</a>
<ul>
<li><a href="#codecademy.com" id="toc-codecademy.com"><span
class="toc-section-number">1.1</span> codecademy.com</a></li>
</ul></li>
<li><a href="#html" id="toc-html"><span
class="toc-section-number">2</span> HTML</a>
<ul>
<li><a href="#boilerplate" id="toc-boilerplate"><span
class="toc-section-number">2.1</span> Boilerplate</a>
<ul>
<li><a href="#headbody" id="toc-headbody"><span
class="toc-section-number">2.1.1</span> Head/Body</a></li>
</ul></li>
<li><a href="#content" id="toc-content"><span
class="toc-section-number">2.2</span> Content</a>
<ul>
<li><a href="#paragraphs" id="toc-paragraphs"><span
class="toc-section-number">2.2.1</span> Paragraphs</a></li>
<li><a href="#headings" id="toc-headings"><span
class="toc-section-number">2.2.2</span> Headings</a></li>
<li><a href="#links" id="toc-links"><span
class="toc-section-number">2.2.3</span> Links</a></li>
<li><a href="#images" id="toc-images"><span
class="toc-section-number">2.2.4</span> Images</a></li>
<li><a href="#lists" id="toc-lists"><span
class="toc-section-number">2.2.5</span> Lists</a></li>
<li><a href="#tables" id="toc-tables"><span
class="toc-section-number">2.2.6</span> Tables</a></li>
<li><a href="#div" id="toc-div"><span
class="toc-section-number">2.2.7</span> Div</a></li>
<li><a href="#span" id="toc-span"><span
class="toc-section-number">2.2.8</span> Span</a></li>
</ul></li>
</ul></li>
<li><a href="#css" id="toc-css"><span
class="toc-section-number">3</span> CSS</a>
<ul>
<li><a href="#link-from-html" id="toc-link-from-html"><span
class="toc-section-number">3.1</span> Link from HTML</a></li>
<li><a href="#html-elements" id="toc-html-elements"><span
class="toc-section-number">3.2</span> HTML Elements</a>
<ul>
<li><a href="#syntax" id="toc-syntax"><span
class="toc-section-number">3.2.1</span> Syntax</a></li>
</ul></li>
<li><a href="#font" id="toc-font"><span
class="toc-section-number">3.3</span> Font</a>
<ul>
<li><a href="#color" id="toc-color"><span
class="toc-section-number">3.3.1</span> Color</a></li>
<li><a href="#font-size" id="toc-font-size"><span
class="toc-section-number">3.3.2</span> Font Size</a></li>
<li><a href="#font-family" id="toc-font-family"><span
class="toc-section-number">3.3.3</span> Font Family</a></li>
<li><a href="#font-weight" id="toc-font-weight"><span
class="toc-section-number">3.3.4</span> Font Weight</a></li>
</ul></li>
<li><a href="#element-properties" id="toc-element-properties"><span
class="toc-section-number">3.4</span> Element Properties</a>
<ul>
<li><a href="#background" id="toc-background"><span
class="toc-section-number">3.4.1</span> Background</a></li>
<li><a href="#size" id="toc-size"><span
class="toc-section-number">3.4.2</span> Size</a></li>
<li><a href="#borders" id="toc-borders"><span
class="toc-section-number">3.4.3</span> Borders</a></li>
<li><a href="#text-decoration" id="toc-text-decoration"><span
class="toc-section-number">3.4.4</span> Text Decoration</a></li>
<li><a href="#selectors" id="toc-selectors"><span
class="toc-section-number">3.4.5</span> Selectors</a></li>
<li><a href="#display" id="toc-display"><span
class="toc-section-number">3.4.6</span> Display</a></li>
<li><a href="#margin" id="toc-margin"><span
class="toc-section-number">3.4.7</span> Margin</a></li>
<li><a href="#padding" id="toc-padding"><span
class="toc-section-number">3.4.8</span> Padding</a></li>
<li><a href="#position" id="toc-position"><span
class="toc-section-number">3.4.9</span> Position</a></li>
</ul></li>
<li><a href="#class" id="toc-class"><span
class="toc-section-number">3.5</span> Class</a>
<ul>
<li><a href="#pseudo-classes" id="toc-pseudo-classes"><span
class="toc-section-number">3.5.1</span> Pseudo Classes</a></li>
</ul></li>
<li><a href="#id" id="toc-id"><span
class="toc-section-number">3.6</span> ID</a></li>
<li><a href="#font-face" id="toc-font-face"><span
class="toc-section-number">3.7</span> Font Face</a></li>
</ul></li>
</ul>
</nav>
<h1 data-number="1" id="references"><span
class="header-section-number">1</span> References</h1>
<h2 data-number="1.1" id="codecademy.com"><span
class="header-section-number">1.1</span> codecademy.com</h2>
<p>I made this while following the codecademy tutorials. Most of the
information is at least based on their tutorial. This is not meant to
replace their tutorial but instead, function as my own notes.</p>
<h1 data-number="2" id="html"><span
class="header-section-number">2</span> HTML</h1>
<h2 data-number="2.1" id="boilerplate"><span
class="header-section-number">2.1</span> Boilerplate</h2>
<p>There is some boiler plate in starting an HTML file.</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
...
&lt;/html&gt;</code></pre>
<div class="center">

</div>
<p>The <code>&lt;!DOCTYPE html&gt;</code> line tells the browser to
treat the file as an HTML file. The
<code>&lt;html&gt; &lt;/html&gt;</code> tags surround the useful
data.</p>
<p>Note: The stuff in between <code>&lt;&gt;</code> are called tags.</p>
<p>We indicate <span><strong>comments</strong></span> by
<code>&lt;!-- comments go here --&gt;</code></p>
<p>Tags can be self-closing if you write them as
<code>&lt;tag property="blah" /&gt;</code>.</p>
<h3 data-number="2.1.1" id="headbody"><span
class="header-section-number">2.1.1</span> Head/Body</h3>
<p>There are two sections in the HTML files. <code>&lt;head&gt;</code>
and <code>&lt;body&gt;</code>. The <code>&lt;title&gt;</code> goes in
the <code>&lt;head&gt;</code>.</p>
<p>The <code>&lt;body&gt;</code> contains all the text and, well, body
content.</p>
<h2 data-number="2.2" id="content"><span
class="header-section-number">2.2</span> Content</h2>
<h3 data-number="2.2.1" id="paragraphs"><span
class="header-section-number">2.2.1</span> Paragraphs</h3>
<p>We can specify <span><strong>paragraphs</strong></span> in the body
by using <code>&lt;p&gt;</code>.</p>
<pre><code>&lt;p&gt; This would be a paragraph. &lt;/p&gt;</code></pre>
<div class="center">

</div>
<h3 data-number="2.2.2" id="headings"><span
class="header-section-number">2.2.2</span> Headings</h3>
<p>We can specify <span><strong>headings</strong></span> with
<code>&lt;h*&gt;</code>.</p>
<p>There are six levels of headings: <code>&lt;h1&gt;</code> to
<code>&lt;h6&gt;</code></p>
<h3 data-number="2.2.3" id="links"><span
class="header-section-number">2.2.3</span> Links</h3>
<p>We can write <span><strong>links</strong></span> by using
<code>&lt;a&gt;</code> and the <code>href</code> value.</p>
<pre><code>&lt;a href=&quot;shahzebasif.github.io&quot;&gt; My Website &lt;/a&gt;</code></pre>
<div class="center">

</div>
<p>The actually location the link points to is contained within the
<code>&lt;a href=...&gt;</code>. The stuff between the tag is just what
the link will be called. The <code>href</code> is a <span><strong>tag
attribute</strong></span>. It gives more information about the tag.</p>
<h3 data-number="2.2.4" id="images"><span
class="header-section-number">2.2.4</span> Images</h3>
<p>We can embed <span><strong>images</strong></span> using the
<code>&lt;img&gt;</code> tag. The <code>src</code> is a tag attribute
like <code>href</code>.</p>
<pre><code>&lt;img src=&quot;website.com/img.jpg&quot;/&gt;</code></pre>
<div class="center">

</div>
<p>Putting an image inside a <code>&lt;a&gt;</code> will make the image
clickable.</p>
<p>Always indent code so it looks clean.</p>
<h3 data-number="2.2.5" id="lists"><span
class="header-section-number">2.2.5</span> Lists</h3>
<p>We can create <span><strong>numbered lists</strong></span> with the
<code>&lt;ol&gt;</code> tag. Each item inside the list is created by the
<code>&lt;li&gt;</code> tag.</p>
<pre><code>&lt;ol&gt;
    &lt;li&gt; Item one. &lt;/li&gt;
    &lt;li&gt; Item two. &lt;/li&gt;
&lt;/ol&gt;</code></pre>
<div class="center">

</div>
<p>We can create <span><strong>unordered lists</strong></span> with the
<code>&lt;ul&gt;</code> tag and the items are still created by the
<code>&lt;li&gt;</code> tag.</p>
<h3 data-number="2.2.6" id="tables"><span
class="header-section-number">2.2.6</span> Tables</h3>
<p>We can create <span><strong>tables</strong></span> with the
<code>&lt;table&gt;</code> tag. But we can only add rows at first by
using the <code>&lt;tr&gt;</code> tag. We never really add columns but
the table will automatically create columns once we add data with the
<code>&lt;td&gt;</code> tag.</p>
<p>An example will help (codecademy):</p>
<pre><code>&lt;table border=&quot;1px&quot;&gt;
    &lt;tr&gt;
        &lt;td&gt; One &lt;/td&gt;
    &lt;tr&gt;
&lt;/table&gt;</code></pre>
<div class="center">

</div>
<p>Tables have their own <code>&lt;thead&gt;</code> and
<code>&lt;tbody&gt;</code> tags as well. These can be used to give extra
information about the table.</p>
<p><code>&lt;tbody&gt;</code> just contains the actual content. But
<code>&lt;thead&gt;</code> can be used to show headings for the
table.</p>
<pre><code>&lt;thead&gt;
    &lt;tr&gt; Table Caption &lt;/tr&gt;
    &lt;tr&gt;
        &lt;th&gt; Column One Heading &lt;/th&gt;
        &lt;th&gt; Column Two Heading &lt;/th&gt;
    &lt;/tr&gt;
&lt;/thead&gt;</code></pre>
<div class="center">

</div>
<h3 data-number="2.2.7" id="div"><span
class="header-section-number">2.2.7</span> Div</h3>
<p>The <code>&lt;div&gt;</code> tag is used an awful lot. They are just
used to create containers on screen similar to most GUI tools.</p>
<h3 data-number="2.2.8" id="span"><span
class="header-section-number">2.2.8</span> Span</h3>
<p><code>&lt;span&gt;</code> is used to make small containers for things
like change in font for a single word.</p>
<h1 data-number="3" id="css"><span
class="header-section-number">3</span> CSS</h1>
<p>CSS and HTML are typically used together. HTML for the content and
CSS to make it look good.</p>
<h2 data-number="3.1" id="link-from-html"><span
class="header-section-number">3.1</span> Link from HTML</h2>
<p>We need to link the actual CSS file from the HTML file to make things
work.</p>
<p>To do this, we place this line below between the HTML file’s
<code>&lt;head&gt;</code> tag.</p>
<pre><code>&lt;link type=&quot;text/css&quot; rel=&quot;stylesheet&quot; href=&quot;cssfile.css&quot;/&gt;</code></pre>
<div class="center">

</div>
<p>Comments are indicated by a <code>/*</code> and <code>*/</code> like
C.</p>
<h2 data-number="3.2" id="html-elements"><span
class="header-section-number">3.2</span> HTML Elements</h2>
<p>We link content by using the tags in the CSS file. Let’s say we want
paragraphs to be red instead of the default black. To do this we change
<code>p</code> in the CSS file.</p>
<pre><code>/*file: somecssfile.css*/
p {
    color: red;
}</code></pre>
<div class="center">

</div>
<h3 data-number="3.2.1" id="syntax"><span
class="header-section-number">3.2.1</span> Syntax</h3>
<p>Generally, CSS syntax is as follows (example borrowed from
codecademy):</p>
<pre><code>selector {
    property: value;
}</code></pre>
<div class="center">

</div>
<h2 data-number="3.3" id="font"><span
class="header-section-number">3.3</span> Font</h2>
<h3 data-number="3.3.1" id="color"><span
class="header-section-number">3.3.1</span> Color</h3>
<p>We can select <code>color</code> with defined values or hex values
such as <code>color: #FFFFFF</code>.</p>
<p>Some defined values include <code>blue</code>, <code>red</code>,
<code>yellow</code>.</p>
<h3 data-number="3.3.2" id="font-size"><span
class="header-section-number">3.3.2</span> Font Size</h3>
<p>Size can be denoted in many forms.</p>
<p>We can use <code>px</code> for pixels. Use <code>pt</code> if we
want. But we can also use a relative measurement called
<code>em</code>.</p>
<p><code>1 em</code> is equal to the default font size on your computer.
It scales linearly.</p>
<h3 data-number="3.3.3" id="font-family"><span
class="header-section-number">3.3.3</span> Font Family</h3>
<p>We can select the font family we would like. But if the fonts are not
available on someone’s computer, they will not be displayed
properly.</p>
<p>CSS does have built-in fonts though. <code>serif</code>,
<code>sans-serif</code>, and <code>cursive</code> are three built-in
fonts.</p>
<p>We can also specify multiple fonts as well and CSS will choose the
first available font.</p>
<pre><code>p {
    font-family: Verdana, serif
}</code></pre>
<div class="center">

</div>
<p>That will try Verdana and if Verdana cannot be used, then serif will
be used.</p>
<h3 data-number="3.3.4" id="font-weight"><span
class="header-section-number">3.3.4</span> Font Weight</h3>
<p>The font weight decides the bold properties.</p>
<pre><code>font-weigth: normal;</code></pre>
<div class="center">

</div>
<h2 data-number="3.4" id="element-properties"><span
class="header-section-number">3.4</span> Element Properties</h2>
<p>Those containers and elements we got from HTML can do some cool
things with CSS.</p>
<h3 data-number="3.4.1" id="background"><span
class="header-section-number">3.4.1</span> Background</h3>
<p>We can specify the <code>background-color</code> for any element.</p>
<h3 data-number="3.4.2" id="size"><span
class="header-section-number">3.4.2</span> Size</h3>
<p>We can control the size of any element using their <code>width</code>
and <code>height</code> in CSS.</p>
<h3 data-number="3.4.3" id="borders"><span
class="header-section-number">3.4.3</span> Borders</h3>
<p>We can specify the border around an element as well.</p>
<p>These work on a bunch of elements.</p>
<p>Borrowed from <code>codecademy.com</code></p>
<pre><code>border: 2px solid red</code></pre>
<div class="center">

</div>
<p>Note how we specify the color and the style of the border.</p>
<h3 data-number="3.4.4" id="text-decoration"><span
class="header-section-number">3.4.4</span> Text Decoration</h3>
<p>We can also do text decoration.</p>
<p>By setting <code>text-decoration: none</code> we get rid of the
underlines on links.</p>
<h3 data-number="3.4.5" id="selectors"><span
class="header-section-number">3.4.5</span> Selectors</h3>
<p>We’ve talked about properties but not what can have properties.
Pretty much any HTML element can be used as a CSS selector.</p>
<p>You can even do stuff like only select paragraphs inside
<code>div</code> by using <code>div p</code> as a selector. The
<code>div p</code> selector will overwrite the regular <code>p</code>
selector in its context.</p>
<p>The wildcard character <code>*</code> can be used to apply properties
to <span><strong>all</strong></span> content.</p>
<p>There are some cool selectors called <code>class</code> and
<code>id</code> which are a little more special.</p>
<h3 data-number="3.4.6" id="display"><span
class="header-section-number">3.4.6</span> Display</h3>
<p>Display is where we position elements.</p>
<p>The default display elements are
<span><strong>blocks</strong></span>. The are stacked vertically.</p>
<pre><code>selector {
    ...
    display: block;
}</code></pre>
<div class="center">

</div>
<p>Use <span><strong>inline blocks</strong></span> to put things
horizontally. Set the display to <code>inline-block</code>.</p>
<p>Note that both <span><strong>blocks</strong></span> keep their
dimensions.</p>
<p>Using <span><strong>inline</strong></span> puts things horziontally
but does not maintain their dimensions. It will shrink them as much as
possible.</p>
<p>To turn an element off, use <span><strong>none</strong></span>. By
using <code>none</code>, the CSS will just toss the entire thing until
you change the <code>none</code>.</p>
<h3 data-number="3.4.7" id="margin"><span
class="header-section-number">3.4.7</span> Margin</h3>
<p>There are three things we can use to create space around a block.</p>
<p>The space around the block is
<span><strong>margin</strong></span>.</p>
<pre><code>margin: auto</code></pre>
<div class="center">

</div>
<h3 data-number="3.4.8" id="padding"><span
class="header-section-number">3.4.8</span> Padding</h3>
<p>The <span><strong>padding</strong></span> is around the content.</p>
<pre><code>padding: 10px 10px 10px 10px</code></pre>
<div class="center">

</div>
<p>Going out from the content, the order is</p>
<pre><code>padding &gt; border &gt; marginv+.

### Floating
We can have floating elements as well. These
are elements that just move to where you
specify but without getting in the way of
other elements.

+v
div {
    ...
    float: right;
}</code></pre>
<div class="center">

</div>
<p>This will make the element float to the right.</p>
<p><code>clear</code> is also useful a lot. It is used to tell elements
to stay away from other floating elements.</p>
<h3 data-number="3.4.9" id="position"><span
class="header-section-number">3.4.9</span> Position</h3>
<p>We use the <code>position</code> property to make things
<code>absolute</code>, <code>static</code>.</p>
<p>There’s also <code>relative</code> positioning and <code>fixed</code>
positioning.</p>
<h2 data-number="3.5" id="class"><span
class="header-section-number">3.5</span> Class</h2>
<p>Classes are just another way to group elements.</p>
<p>If we place a whole bunch of elements into a class. Then they will
all be treated with the class properties instead of the regular
properties.</p>
<pre><code>&lt;p class=&quot;temp&quot;&gt; ... &lt;/p&gt;

.temp {
    ...
}</code></pre>
<div class="center">

</div>
<h3 data-number="3.5.1" id="pseudo-classes"><span
class="header-section-number">3.5.1</span> Pseudo Classes</h3>
<p>Pseudo classes are things that aren’t explicityly in our HTML
document. They work behind the scenes.</p>
<p>An example woul be the color of a link upon hovering. The format for
changing pseudo-classes’ properties is by using the <code>:</code>.</p>
<pre><code>a:hover {
    color: blue;
}</code></pre>
<div class="center">

</div>
<p>In that example, <code>hover</code> is the pseudo class and
<code>a</code> is the selector.</p>
<p>As a note, the pseudo classes for links are <code>link</code>,
<code>hover</code>, <code>visited</code>.</p>
<p>A useful pseudo-class is <code>first-child</code>. It will apply to
the first item at the same level. <code>nth-child(n)</code> is the same
thing but with the <span class="math inline">\\(n^{th}\\)</span>
level.</p>
<p>Note how we use <code>.temp</code> in the CSS selector. This is how
we refer to class in CSS.</p>
<h2 data-number="3.6" id="id"><span
class="header-section-number">3.6</span> ID</h2>
<p>Ids are very similar to classes but whereas classes are used for
groups of objects, ids are used for singular objects.</p>
<pre><code>&lt;p id=&quot;blah&quot;&gt; ... &lt;/p&gt;

#blah {
    ...
}</code></pre>
<div class="center">

</div>
<h2 data-number="3.7" id="font-face"><span
class="header-section-number">3.7</span> Font Face</h2>
<p>To get custom fonts, we can use <code>@font-face</code>. This lets
use store fonts in our website and use them everywhere.</p>
<p>Here is an example:</p>
<pre><code>@font-face {
    font-family: &quot;Example&quot;;
    src: url(&quot;/fonts/example.eot&quot;) format(&quot;eot&quot;), ...
}</code></pre>
<div class="center">

</div>
<p>If you want to add a bold font then do the same as above but add this
between the brackets:</p>
<pre><code>font-weight: bold;</code></pre>
<div class="center">

</div>
<p>There are a whole bunch of formats you can import but the best ones
seem to be <code>.eot</code> and <code>.ttf</code>. These two types
cover pretty much all popular browsers.</p>
`;export{e as default};
