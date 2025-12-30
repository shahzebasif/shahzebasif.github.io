const t=`<nav id="TOC">
<ul>
<li><a href="#header" id="toc-header"><span
class="toc-section-number">1</span> Header</a></li>
<li><a href="#body" id="toc-body"><span
class="toc-section-number">2</span> Body</a></li>
<li><a href="#table" id="toc-table"><span
class="toc-section-number">3</span> Table</a></li>
<li><a href="#list" id="toc-list"><span
class="toc-section-number">4</span> List</a></li>
</ul>
</nav>
<h1 data-number="1" id="header"><span
class="header-section-number">1</span> Header</h1>
<div class="center">
<table>
<caption></caption>
<thead>
<tr class="header">
<th style="text-align: left;">Item</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;">Title</td>
<td style="text-align: left;">Title of the document</td>
</tr>
<tr class="even">
<td style="text-align: left;">Date</td>
<td style="text-align: left;">Date of the document</td>
</tr>
<tr class="odd">
<td style="text-align: left;">Author</td>
<td style="text-align: left;">Author of the document</td>
</tr>
<tr class="even">
<td style="text-align: left;">Preamble</td>
<td style="text-align: left;">Custom tex preamble that will replace all
standard preamble</td>
</tr>
<tr class="odd">
<td style="text-align: left;">Delims</td>
<td style="text-align: left;">Specify custom delimeters as
<code>Delims=bl_verb:&amp;,&amp;//bl_math:%,%</code></td>
</tr>
<tr class="even">
<td style="text-align: left;">Font</td>
<td style="text-align: left;">Custom font for the document</td>
</tr>
<tr class="odd">
<td style="text-align: left;">Metadata</td>
<td style="text-align: left;">Metadata that will be put in a
<code>&lt;file&gt;.tex.metadata</code> file</td>
</tr>
</tbody>
</table>
</div>
<h1 data-number="2" id="body"><span
class="header-section-number">2</span> Body</h1>
<div class="center">
<table>
<caption></caption>
<thead>
<tr class="header">
<th style="text-align: left;">Item</th>
<th style="text-align: left;">Inline</th>
<th style="text-align: left;">Block</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;">Verbatim</td>
<td style="text-align: left;"><code>;</code></td>
<td style="text-align: left;"><code>+v v+</code></td>
</tr>
<tr class="even">
<td style="text-align: left;">Raw Tex</td>
<td style="text-align: left;"><code>^</code></td>
<td style="text-align: left;"><code>+r r+</code></td>
</tr>
<tr class="odd">
<td style="text-align: left;">Math</td>
<td style="text-align: left;"><code>!</code></td>
<td style="text-align: left;"><code>+m m+</code></td>
</tr>
<tr class="even">
<td style="text-align: left;">Bold</td>
<td style="text-align: left;"><code>[]</code></td>
<td style="text-align: left;"></td>
</tr>
<tr class="odd">
<td style="text-align: left;">URL</td>
<td
style="text-align: left;"><code>@ &lt;name&gt; | &lt;link&gt; @</code></td>
<td style="text-align: left;"></td>
</tr>
<tr class="even">
<td style="text-align: left;">Images</td>
<td style="text-align: left;"></td>
<td
style="text-align: left;"><code>+i &lt;caption&gt; | &lt;image_path&gt;</code></td>
</tr>
</tbody>
</table>
</div>
<h1 data-number="3" id="table"><span
class="header-section-number">3</span> Table</h1>
<pre><code>+t      &lt;columns&gt;   | &lt;table_name&gt;
&lt;column_1_header&gt;   | &lt;column_2_header&gt; | ...
&lt;column_1&gt;          | &lt;column_2&gt;        | ...
</code></pre>
<div class="center">

</div>
<h1 data-number="4" id="list"><span
class="header-section-number">4</span> List</h1>
<pre><code>- parent last
    - child one
        - child two
    - back to child one

- new list
</code></pre>
<div class="center">

</div>
`;export{t as default};
