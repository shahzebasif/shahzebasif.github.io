const n=`<nav id="TOC">
<ul>
<li><a href="#installing" id="toc-installing"><span
class="toc-section-number">1</span> installing</a></li>
<li><a href="#ubuntu" id="toc-ubuntu"><span
class="toc-section-number">2</span> ubuntu</a></li>
<li><a href="#config" id="toc-config"><span
class="toc-section-number">3</span> config</a></li>
<li><a href="#common-commands" id="toc-common-commands"><span
class="toc-section-number">4</span> common commands</a></li>
</ul>
</nav>
<h1 data-number="1" id="installing"><span
class="header-section-number">1</span> installing</h1>
<ul>
<li><p>install the required windows features</p>
<ul>
<li><p>virtual machine function</p></li>
<li><p>wsl</p></li>
<li><p><a
href="https://learn.microsoft.com/en-us/windows/wsl/install-manual">install
instructions</a></p></li>
</ul></li>
<li><p>upgrade to wsl v2</p>
<ul>
<li><p><code>wsl --set-default-version 2</code></p></li>
</ul></li>
<li><p>install wsl v2 kernel from link above</p></li>
<li><p>install ubuntu from store</p>
<ul>
<li><p>can also upgrade to v2 using
<code>wsl --setdefault &lt;DistributionName&gt;</code></p></li>
</ul></li>
</ul>
<h1 data-number="2" id="ubuntu"><span
class="header-section-number">2</span> ubuntu</h1>
<ul>
<li><p>install git</p></li>
<li><p>clone the settings repo and run <code>make all</code></p></li>
</ul>
<h1 data-number="3" id="config"><span
class="header-section-number">3</span> config</h1>
<ul>
<li><p><code>.wslconfig</code> can be stored in
<code>%USERPROFILE%</code></p></li>
<li><p>there’s a sample one in the settings repo to restrict the cpu and
ram use and swap size</p></li>
</ul>
<h1 data-number="4" id="common-commands"><span
class="header-section-number">4</span> common commands</h1>
<ul>
<li><p><code>wsl -l -v</code></p></li>
<li><p><code>wsl --shutdown</code></p></li>
</ul>
`;export{n as default};
