const e=`<nav id="TOC">
<ul>
<li><a href="#references" id="toc-references"><span
class="toc-section-number">1</span> References</a></li>
<li><a href="#commands" id="toc-commands"><span
class="toc-section-number">2</span> Commands</a></li>
</ul>
</nav>
<h1 data-number="1" id="references"><span
class="header-section-number">1</span> References</h1>
<ul>
<li><p>learncodethehardway</p></li>
</ul>
<h1 data-number="2" id="commands"><span
class="header-section-number">2</span> Commands</h1>
<p><code>cat &lt;filename&gt;</code></p>
<ul>
<li><p>Reads out whole file.</p></li>
</ul>
<p><code>head -n &lt;# of line&gt; &lt;filename&gt;</code></p>
<ul>
<li><p>Reads out <span class="math inline">\\(n\\)</span> lines.</p></li>
</ul>
<p><code>&lt;command&gt; &gt; &lt;filename&gt;</code></p>
<ul>
<li><p>Output from <code>command</code> overwrites everything in
<code>filename</code>.</p></li>
</ul>
<p><code>&lt;command&gt; &gt;&gt; &lt;filename&gt;</code></p>
<ul>
<li><p>Output from <code>command</code> appends to
<code>filename</code>.</p></li>
</ul>
<p><code>cp &lt;source&gt; &lt;dest&gt;</code></p>
<ul>
<li><p>Copy <code>source</code> to <code>dest</code>.</p></li>
</ul>
<p><code>mv &lt;source&gt; &lt;dest&gt;</code></p>
<ul>
<li><p>Move <code>source</code> to <code>dest</code>.</p></li>
</ul>
<p><code>rm &lt;filename&gt;</code></p>
<ul>
<li><p>Remove filename.</p></li>
</ul>
<p><code>rm test.!(txt)</code></p>
<ul>
<li><p>Removes all files that start with <code>test.</code> in the
current directory apart from <code>test.txt</code>.</p></li>
</ul>
<p><code>du -hs</code></p>
<ul>
<li><p>Print file sizes in easily readable form.</p></li>
</ul>
<p><code>df -h</code></p>
<ul>
<li><p>Print disk sizes in easily readable form.</p></li>
</ul>
<p><code>top</code></p>
<ul>
<li><p>Shows current processes.</p></li>
</ul>
<p><code>lshw</code></p>
<ul>
<li><p>Shows current hardware.</p></li>
</ul>
<p><code>find -name "&lt;filename&gt;"</code></p>
<ul>
<li><p>Find filename.</p></li>
</ul>
<p><code>whereis &lt;program&gt;</code></p>
<ul>
<li><p>Gives location of binary program.</p></li>
</ul>
<p><code>wc &lt;filename&gt;</code></p>
<ul>
<li><p>Gives word count of <code>filename</code>.</p></li>
</ul>
<p><code>grep &lt;text&gt; &lt;filename&gt;</code></p>
<ul>
<li><p>Searches for <code>text</code> in <code>filename</code>.</p></li>
</ul>
<p><code>&lt;command&gt; &amp;</code></p>
<ul>
<li><p>Puts <code>command</code> in background.</p></li>
</ul>
<p><code>sudo poweroff</code></p>
<ul>
<li><p>Turns off computer.</p></li>
</ul>
<p><code>sudo reboot</code></p>
<ul>
<li><p>Reboots computer.</p></li>
</ul>
<p><code>chmod -x &lt;filename&gt;</code></p>
<ul>
<li><p>Change owner of file to an executable.</p></li>
</ul>
<p><code>chmod &lt;xyz&gt; &lt;filename&gt;</code></p>
<ul>
<li><p>Change owner of file to <code>xyz</code>.</p></li>
<li><p><code>x</code> is for current user’s permission.</p></li>
<li><p><code>y</code> is for group’s permission.</p></li>
<li><p><code>z</code> is for others’ permission.</p></li>
</ul>
<p><code>&lt;someprogram&gt; | &lt;someotherprogram&gt;</code></p>
<ul>
<li><p>"Pipes" the first output into second.</p></li>
</ul>
<p>Another important thing about bash profiles is that export path line
at the beginning kind of tells it to look for the right libraries and
scripts to run.</p>
<p><code>find . -name '*.html' | xargs perl -pi -e 's/find/replace/g'</code></p>
<ul>
<li><p>Finds and replaces text across all files in directory.</p></li>
</ul>
<p><code>lsblk</code></p>
<ul>
<li><p>List attached block devices.</p></li>
</ul>
<p><code>sudo mount /dev/sdb1 /mnt/device1</code></p>
<ul>
<li><p>Mount and use <code>sudo umount /dev/sdb1</code> to
unmount.</p></li>
</ul>
<p><code>ls -s &lt;real&gt; &lt;shortcut&gt;</code></p>
<ul>
<li><p>Make a symbolic link to the given real file.</p></li>
</ul>
<p><code>rsync -ah --info=progress2</code></p>
<ul>
<li><p>Better copy with progress bar.</p></li>
</ul>
<p><code>lsof | grep &lt;file&gt;</code></p>
<ul>
<li><p>find the open file handles</p></li>
</ul>
<p><code>dpkg -S $(which &lt;cmd&gt;)</code></p>
<ul>
<li><p>find the package for a given command.</p></li>
</ul>
`;export{e as default};
