const e=`<nav id="TOC">
<ul>
<li><a href="#references" id="toc-references"><span
class="toc-section-number">1</span> References</a>
<ul>
<li><a href="#thinkos" id="toc-thinkos"><span
class="toc-section-number">1.1</span> ThinkOS</a></li>
</ul></li>
<li><a href="#gcc" id="toc-gcc"><span
class="toc-section-number">2</span> GCC</a>
<ul>
<li><a href="#compiler" id="toc-compiler"><span
class="toc-section-number">2.1</span> Compiler</a></li>
<li><a href="#flags" id="toc-flags"><span
class="toc-section-number">2.2</span> Flags</a></li>
</ul></li>
<li><a href="#memory" id="toc-memory"><span
class="toc-section-number">3</span> Memory</a>
<ul>
<li><a href="#binary" id="toc-binary"><span
class="toc-section-number">3.1</span> Binary</a></li>
<li><a href="#ram" id="toc-ram"><span
class="toc-section-number">3.2</span> RAM</a></li>
<li><a href="#processes" id="toc-processes"><span
class="toc-section-number">3.3</span> Processes</a></li>
<li><a href="#virtual-memory" id="toc-virtual-memory"><span
class="toc-section-number">3.4</span> Virtual Memory</a></li>
</ul></li>
<li><a href="#memory-management" id="toc-memory-management"><span
class="toc-section-number">4</span> Memory Management</a>
<ul>
<li><a href="#tools" id="toc-tools"><span
class="toc-section-number">4.1</span> Tools</a></li>
<li><a href="#performance" id="toc-performance"><span
class="toc-section-number">4.2</span> Performance</a></li>
<li><a href="#tags" id="toc-tags"><span
class="toc-section-number">4.3</span> Tags</a></li>
</ul></li>
<li><a href="#caching" id="toc-caching"><span
class="toc-section-number">5</span> Caching</a>
<ul>
<li><a href="#blocks" id="toc-blocks"><span
class="toc-section-number">5.1</span> Blocks</a></li>
<li><a href="#locality" id="toc-locality"><span
class="toc-section-number">5.2</span> Locality</a></li>
<li><a href="#rates" id="toc-rates"><span
class="toc-section-number">5.3</span> Rates</a></li>
</ul></li>
<li><a href="#file-system" id="toc-file-system"><span
class="toc-section-number">6</span> File System</a>
<ul>
<li><a href="#performance-1" id="toc-performance-1"><span
class="toc-section-number">6.1</span> Performance</a></li>
<li><a href="#metadata" id="toc-metadata"><span
class="toc-section-number">6.2</span> Metadata</a></li>
<li><a href="#files" id="toc-files"><span
class="toc-section-number">6.3</span> Files</a></li>
</ul></li>
</ul>
</nav>
<h1 data-number="1" id="references"><span
class="header-section-number">1</span> References</h1>
<h2 data-number="1.1" id="thinkos"><span
class="header-section-number">1.1</span> ThinkOS</h2>
<p>A lot of these notes are based on the book at: <a
href="http://greenteapress.com/thinkos/">ThinkOS</a></p>
<h1 data-number="2" id="gcc"><span
class="header-section-number">2</span> GCC</h1>
<h2 data-number="2.1" id="compiler"><span
class="header-section-number">2.1</span> Compiler</h2>
<p>The compiler is the tool that takes our code and turns it into
machine code that the processor can read.</p>
<p>GCC is a widely used C compiler. Like most other compilers, it does
quite a lot more between input and output.</p>
<p>Compilers like GCC will commonly perform the following steps:</p>
<ul>
<li><p><span><strong>Preprocessing</strong></span> - allows you to put
in "settings" for the compiler.</p></li>
<li><p><span><strong>Parsing</strong></span></p></li>
<li><p><span><strong>Semantics</strong></span> - checking whether all
types declared are used correctly.</p></li>
<li><p><span><strong>Generation</strong></span> - creates the machine
code.</p></li>
<li><p><span><strong>Linking</strong></span> - link object code from
libraries.</p></li>
<li><p><span><strong>Optimization</strong></span> - optimizes code to be
very efficient.</p></li>
</ul>
<p>Compilers are very complicated pieces of software.</p>
<p>Note that <span><strong>object code</strong></span> is just machine
code for a part waiting to be linked.</p>
<h2 data-number="2.2" id="flags"><span
class="header-section-number">2.2</span> Flags</h2>
<p>Here are a few common, useful GCC flags:</p>
<ul>
<li><p><code>-o &lt;name&gt;</code> creates an executable with
<code>&lt;name&gt;</code>.</p></li>
<li><p><code>-c</code> tells GCC to only create an object file and not
an executable.</p></li>
<li><p><code>-O, -O1, -O2, ...</code> is for optimization from safe to
riskier.</p></li>
<li><p><code>-S</code> will generate assembly code.</p></li>
<li><p><code>-E</code> gets all the other code required from libraries
or other files.</p></li>
</ul>
<h1 data-number="3" id="memory"><span
class="header-section-number">3</span> Memory</h1>
<p>Before talking about memory, it is necessary to be fully comfortable
with binary.</p>
<h2 data-number="3.1" id="binary"><span
class="header-section-number">3.1</span> Binary</h2>
<p>Here’s a very quick refresher:</p>
<ul>
<li><p><span class="math inline">\\(n\\)</span> bits can represent <span
class="math inline">\\(2^n\\)</span> states.</p></li>
<li><p>To convert from decimal to binary, just run through bit places
from MSbit to the LSbit and put <code>1</code>s where they should go.
For example:</p>
<ul>
<li><p>To get <span class="math inline">\\(6_{10}\\)</span> in binary,
three binary digits are enough.</p></li>
<li><p><code>100</code> is too low so we go up.</p></li>
<li><p><code>110</code> is <span
class="math inline">\\(6_{10}\\)</span>.</p></li>
<li><p>After doing this a few times, you’ll memorize values.</p></li>
</ul></li>
<li><p>To convert from binary to decimal is simple. <span
class="math inline">\\(p_n * 2^n + p_{n-1} * 2^{n-1} + ... + p_1 * 2^1 +
p_0 * 2^0\\)</span></p>
<ul>
<li><p><span class="math inline">\\(p_n\\)</span> is the values (0, 1) at
the nth place.</p></li>
</ul></li>
</ul>
<p>Another very useful thing to know is how <span><strong>floating
point</strong></span> numbers are stored.</p>
<p>It’s not too complex. Floating point numbers are usually just stored
in something resembling scientific notation but for base 2. An example
will help.</p>
<p><span class="math inline">\\(8_{10} = 1 * 2^3 = 1.00 *
2^3\\)</span></p>
<p>That value, <span class="math inline">\\(1.00 * 2^3\\)</span> is stored
in binary as:
|<code>[1 - sign] [8 - exponent] [23 - coefficient]</code>|</p>
<p>But the exponent usually has a bias which gets added to the actual
exponent. In 32-bit FP, it is <span
class="math inline">\\(127_{10}\\)</span>.</p>
<p>And the coefficient only includes the digits after the radix.</p>
<p>That means the 32-bit floating point representation for <span
class="math inline">\\(8_{10}\\)</span> is:
|<code>0 10000010 00000000000000000000000</code>|</p>
<p>There are also 64-bit floating point numbers.</p>
<h2 data-number="3.2" id="ram"><span
class="header-section-number">3.2</span> RAM</h2>
<p>All programs have most of their data in RAM. It is important to
distinguish RAM from HDDs or SSDs.</p>
<p>RAM is physically and functionally different from HDD/SSDs. For one,
RAM is cleared anytime power is lost.</p>
<p>RAM is also much faster than disk storage.</p>
<p>But that’s fairly low level stuff. When we’re talking about OSes,
something called virtual memory also exists. But before explaining
virtual memory, we must explain processes.</p>
<h2 data-number="3.3" id="processes"><span
class="header-section-number">3.3</span> Processes</h2>
<p>Operating systems make heavy use of processes. A single process runs
in its own little world. It has its own virtual memory and share of
processor time.</p>
<p>Everything working in an OS is running its own process which probably
stems from another parent process.</p>
<p>Using <code>ps</code> on a UNIX-y terminal gives a list of processes
currently running. Using <code>-e</code> flag gives a list of all
processes on the OS.</p>
<p>If you use <code>ps -e</code>, you’ll get a large list back which
will have <code>init</code> at the top. <code>init</code> is the first
thing that starts when the OS first starts up.</p>
<p>Some other interesting processes will include:</p>
<ul>
<li><p><code>kthreadd</code> which is responsible for creating
"threads".</p></li>
<li><p><code>kworker</code> is a worker processes.</p></li>
</ul>
<h2 data-number="3.4" id="virtual-memory"><span
class="header-section-number">3.4</span> Virtual Memory</h2>
<p>A process’s memory will contain its machine code, static vairables,
the <span><strong>heap</strong></span>, and the
<span><strong>stack</strong></span>.</p>
<p>For sensible reasons, I picture lower addresses at the top and higher
addresses at the bottom.</p>
<p>The machine code is placed at the very top of the memory. Next comes
the static variables. Then the heap which grows downwards. The stack
start at the very bottom and grows up.</p>
<p>These components are placed in a program’s virtual memory which is
all the memory a process can access. This is why a process runs
independent of other processes. It literally can’t access other
processes’ memory.</p>
<p>All virtual memory can be translated to physical memory. Usually,
this is done by a MCU component called the MMU (memory management unit).
The MMU is responsible for quickly translating a virtual address to a
real one.</p>
<p>Without going into details, the MMU process can be described as
converting relative addresses (virtual memory) to absolute addresses
(physical memory).</p>
<p>It’s also important to note that there is often much more virtual
memory than physical memory.</p>
<h1 data-number="4" id="memory-management"><span
class="header-section-number">4</span> Memory Management</h1>
<p>We have already described how memory works in hardware and at what
happens in an OS with memory but we’ve yet to talk about how memory is
managed and tracked.</p>
<h2 data-number="4.1" id="tools"><span
class="header-section-number">4.1</span> Tools</h2>
<p>We use four main C functions for a whole lot of memory
allocation.</p>
<ul>
<li><p><code>malloc</code></p></li>
<li><p><code>calloc</code></p></li>
<li><p><code>realloc</code></p></li>
<li><p><code>free</code></p></li>
</ul>
<p><code>malloc</code> allocates a block of a certain size and returns a
pointer to it.</p>
<p><code>calloc</code> is like malloc but zeros each byte.</p>
<p><code>realloc</code> copies a chunk from the old malloc’ed area to
the new area.</p>
<p><code>free</code> will free a previously allocated space.</p>
<h2 data-number="4.2" id="performance"><span
class="header-section-number">4.2</span> Performance</h2>
<p>Performance can be a little tricky to estimate for the memory
management tools above. But generally, these guidelines should be
useful:</p>
<ul>
<li><p><code>malloc</code> does not depend on size.</p></li>
<li><p><code>calloc</code> depends on the size.</p></li>
<li><p><code>realloc</code> can be slow if the new size is larger than
the old size.</p></li>
<li><p><code>free</code> is usually very quick.</p></li>
</ul>
<h2 data-number="4.3" id="tags"><span
class="header-section-number">4.3</span> Tags</h2>
<p>Note that malloc’ed space also has tags attached to it. There is some
overhead information that contains the allocated space’s size, state,
and some other details.</p>
<p>These tags do take up some space. When you malloc a block of size
<span class="math inline">\\(x\\)</span>, it actually takes up more than
just <span class="math inline">\\(x\\)</span> bytes.</p>
<p>These tags also allow the system to store all allocated blocks in a
doubly linked list.</p>
<h1 data-number="5" id="caching"><span
class="header-section-number">5</span> Caching</h1>
<p>Caching is extremely important for performance in computer.</p>
<h2 data-number="5.1" id="blocks"><span
class="header-section-number">5.1</span> Blocks</h2>
<p>Any time a byte is loaded from memory, it also gets stored in the CPU
cache. But it gets stored as a <span><strong>block</strong></span> of a
certain size unique to hardware. A few neighboring bytes may also be
stored in the cache. Next time something needs to be read from memory,
the cache will be checked first.</p>
<p>The reason for the cache is that it is much faster to access the
cache than it is to access memory. This is how the cache speeds up
performance.</p>
<h2 data-number="5.2" id="locality"><span
class="header-section-number">5.2</span> Locality</h2>
<p>To talk about performance, we must talk about locality first.
<span><strong>Spatial locality</strong></span> is when a program uses
nearby data in physical memory. <span><strong>Temporal
locality</strong></span> is when a program accesses the same data more
than once.</p>
<h2 data-number="5.3" id="rates"><span
class="header-section-number">5.3</span> Rates</h2>
<p>The <span><strong>hit rate</strong></span> is the fraction of bytes
that are already in the cache. The <span><strong>miss
rate</strong></span> is the fraction of bytes that need to be read again
from memory.</p>
<p>We can also improve the performance of our programs by keeping the
hit rate in mind.</p>
<p>If we decide to use data in ways that allow it to have both types of
locality, then it will be faster than one with neither.</p>
<p>For example, iterating over an array of <code>unit8</code> will
likely have both spatial and temporal locality. The block size of the
CPU will likely be much larger than 1 byte so reading consecutive bytes
will have lots of spatial locality. And if you perform any actions on
the data read, the program will retrieve the data from the cache instead
of memory. This means the program will also have temporal locality.</p>
<h1 data-number="6" id="file-system"><span
class="header-section-number">6</span> File System</h1>
<p>File systems are created to help store files. Files themselves are
generally on drives. The drives can be very complicated so we won’t go
into details.</p>
<p>It is important to know that reading and writing usually doesn’t
occur in single byte operations but rather larger
<span><strong>blocks</strong></span> consisting of many bytes.</p>
<h2 data-number="6.1" id="performance-1"><span
class="header-section-number">6.1</span> Performance</h2>
<p>IO is generally incredibly expensive compared to the other parts of a
program.</p>
<p>This is because writing to an HDD is very slow compared to RAM. SSDs
are faster but still slow compared to the processor.</p>
<p>To deal with this slow IO, OS and hardware use a few tricks:</p>
<ul>
<li><p><span><strong>Block transfers</strong></span>.</p></li>
<li><p><span><strong>Prefetching</strong></span> loads a block before it
is needed.</p></li>
<li><p><span><strong>Buffering</strong></span> means to write a file to
memory only when completely done with it.</p></li>
<li><p><span><strong>Caching</strong></span> a block to internal
memory.</p></li>
</ul>
<p>These tricks can vastly improve the performance of IO without the
user even being aware of it happening.</p>
<h2 data-number="6.2" id="metadata"><span
class="header-section-number">6.2</span> Metadata</h2>
<p>OSs usually have their own way of organizing the data on a disk. This
allows the OS to store data anywhere on the disk instead of just
sequentially.</p>
<p>This is what the partition format refers to.</p>
<p>Basically, we store small structures that contain information like
its owner, date modified, etc.</p>
<h2 data-number="6.3" id="files"><span
class="header-section-number">6.3</span> Files</h2>
<p>One important thing to note in UNIX-y systems is that everything is a
file. Everything.</p>
<p>This is because a file isn’t just a text document, or an image. It’s
more of an abstraction for a bunch of data.</p>
<p>This has some cool side-effects. If you create a library that works
with a file stream, it’ll work with local files, terminal pipes, and
even things like webcams and other external devices.</p>
`;export{e as default};
