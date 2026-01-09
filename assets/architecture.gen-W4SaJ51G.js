const e=`<nav id="TOC">
<ul>
<li><a href="#references" id="toc-references"><span
class="toc-section-number">1</span> References</a></li>
<li><a href="#introduction" id="toc-introduction"><span
class="toc-section-number">2</span> Introduction</a>
<ul>
<li><a href="#classes" id="toc-classes"><span
class="toc-section-number">2.1</span> Classes</a></li>
<li><a href="#growth" id="toc-growth"><span
class="toc-section-number">2.2</span> Growth</a>
<ul>
<li><a href="#compounding" id="toc-compounding"><span
class="toc-section-number">2.2.1</span> Compounding</a></li>
</ul></li>
<li><a href="#cpu" id="toc-cpu"><span
class="toc-section-number">2.3</span> CPU</a></li>
<li><a href="#buses" id="toc-buses"><span
class="toc-section-number">2.4</span> Buses</a></li>
</ul></li>
<li><a href="#design" id="toc-design"><span
class="toc-section-number">3</span> Design</a>
<ul>
<li><a href="#power-and-energy" id="toc-power-and-energy"><span
class="toc-section-number">3.1</span> Power and Energy</a>
<ul>
<li><a href="#comparing-energy" id="toc-comparing-energy"><span
class="toc-section-number">3.1.1</span> Comparing Energy</a></li>
<li><a href="#reducing-power" id="toc-reducing-power"><span
class="toc-section-number">3.1.2</span> Reducing Power</a></li>
</ul></li>
<li><a href="#parallelism" id="toc-parallelism"><span
class="toc-section-number">3.2</span> Parallelism</a>
<ul>
<li><a href="#flynns-taxonomy" id="toc-flynns-taxonomy"><span
class="toc-section-number">3.2.1</span> Flynn’s Taxonomy</a></li>
</ul></li>
<li><a href="#benchmarks" id="toc-benchmarks"><span
class="toc-section-number">3.3</span> Benchmarks</a></li>
<li><a href="#amdahls-law" id="toc-amdahls-law"><span
class="toc-section-number">3.4</span> Amdahl’s Law</a>
<ul>
<li><a href="#calculating-improvements"
id="toc-calculating-improvements"><span
class="toc-section-number">3.4.1</span> Calculating
Improvements</a></li>
</ul></li>
<li><a href="#dependability" id="toc-dependability"><span
class="toc-section-number">3.5</span> Dependability</a>
<ul>
<li><a href="#multiple-components" id="toc-multiple-components"><span
class="toc-section-number">3.5.1</span> Multiple Components</a></li>
</ul></li>
</ul></li>
<li><a href="#memory" id="toc-memory"><span
class="toc-section-number">4</span> Memory</a>
<ul>
<li><a href="#latency" id="toc-latency"><span
class="toc-section-number">4.1</span> Latency</a></li>
<li><a href="#ram" id="toc-ram"><span
class="toc-section-number">4.2</span> RAM</a></li>
<li><a href="#sram" id="toc-sram"><span
class="toc-section-number">4.3</span> SRAM</a></li>
<li><a href="#dram" id="toc-dram"><span
class="toc-section-number">4.4</span> DRAM</a>
<ul>
<li><a href="#organization" id="toc-organization"><span
class="toc-section-number">4.4.1</span> Organization</a></li>
<li><a href="#retrieval" id="toc-retrieval"><span
class="toc-section-number">4.4.2</span> Retrieval</a></li>
</ul></li>
<li><a href="#rom" id="toc-rom"><span
class="toc-section-number">4.5</span> ROM</a></li>
<li><a href="#solid-state-disks" id="toc-solid-state-disks"><span
class="toc-section-number">4.6</span> Solid State Disks</a></li>
<li><a href="#rotating-disk-drives" id="toc-rotating-disk-drives"><span
class="toc-section-number">4.7</span> Rotating Disk Drives</a>
<ul>
<li><a href="#organization-of-data" id="toc-organization-of-data"><span
class="toc-section-number">4.7.1</span> Organization of Data</a></li>
<li><a href="#capacity" id="toc-capacity"><span
class="toc-section-number">4.7.2</span> Capacity</a></li>
<li><a href="#operation" id="toc-operation"><span
class="toc-section-number">4.7.3</span> Operation</a></li>
</ul></li>
<li><a href="#raid" id="toc-raid"><span
class="toc-section-number">4.8</span> RAID</a>
<ul>
<li><a href="#raid-0" id="toc-raid-0"><span
class="toc-section-number">4.8.1</span> RAID 0</a></li>
<li><a href="#raid-1" id="toc-raid-1"><span
class="toc-section-number">4.8.2</span> RAID 1</a></li>
<li><a href="#raid-2" id="toc-raid-2"><span
class="toc-section-number">4.8.3</span> RAID 2</a></li>
<li><a href="#raid-3" id="toc-raid-3"><span
class="toc-section-number">4.8.4</span> RAID 3</a></li>
<li><a href="#raid-4" id="toc-raid-4"><span
class="toc-section-number">4.8.5</span> RAID 4</a></li>
<li><a href="#raid-5" id="toc-raid-5"><span
class="toc-section-number">4.8.6</span> RAID 5</a></li>
<li><a href="#raid-6" id="toc-raid-6"><span
class="toc-section-number">4.8.7</span> RAID 6</a></li>
<li><a href="#nested-raids" id="toc-nested-raids"><span
class="toc-section-number">4.8.8</span> Nested RAIDs</a></li>
</ul></li>
</ul></li>
<li><a href="#cache" id="toc-cache"><span
class="toc-section-number">5</span> Cache</a>
<ul>
<li><a href="#locality" id="toc-locality"><span
class="toc-section-number">5.1</span> Locality</a>
<ul>
<li><a href="#temporal-locality" id="toc-temporal-locality"><span
class="toc-section-number">5.1.1</span> Temporal Locality</a></li>
<li><a href="#spatial-locality" id="toc-spatial-locality"><span
class="toc-section-number">5.1.2</span> Spatial Locality</a></li>
<li><a href="#locality-performance" id="toc-locality-performance"><span
class="toc-section-number">5.1.3</span> Locality &amp;
Performance</a></li>
</ul></li>
<li><a href="#memory-heirarchy" id="toc-memory-heirarchy"><span
class="toc-section-number">5.2</span> Memory Heirarchy</a></li>
<li><a href="#hits-misses" id="toc-hits-misses"><span
class="toc-section-number">5.3</span> Hits &amp; Misses</a></li>
<li><a href="#organization-1" id="toc-organization-1"><span
class="toc-section-number">5.4</span> Organization</a>
<ul>
<li><a href="#simulating-a-cache" id="toc-simulating-a-cache"><span
class="toc-section-number">5.4.1</span> Simulating a Cache</a></li>
<li><a href="#cache-writes" id="toc-cache-writes"><span
class="toc-section-number">5.4.2</span> Cache Writes</a></li>
</ul></li>
<li><a href="#types-of-caches" id="toc-types-of-caches"><span
class="toc-section-number">5.5</span> Types of Caches</a></li>
<li><a href="#performance" id="toc-performance"><span
class="toc-section-number">5.6</span> Performance</a>
<ul>
<li><a href="#improving-performance"
id="toc-improving-performance"><span
class="toc-section-number">5.6.1</span> Improving Performance</a></li>
</ul></li>
</ul></li>
<li><a href="#virtual-memory" id="toc-virtual-memory"><span
class="toc-section-number">6</span> Virtual Memory</a>
<ul>
<li><a href="#organization-2" id="toc-organization-2"><span
class="toc-section-number">6.1</span> Organization</a></li>
<li><a href="#caching" id="toc-caching"><span
class="toc-section-number">6.2</span> Caching</a></li>
<li><a href="#addresses" id="toc-addresses"><span
class="toc-section-number">6.3</span> Addresses</a></li>
<li><a href="#process" id="toc-process"><span
class="toc-section-number">6.4</span> Process</a></li>
</ul></li>
<li><a href="#floating-point" id="toc-floating-point"><span
class="toc-section-number">7</span> Floating Point</a>
<ul>
<li><a href="#structure" id="toc-structure"><span
class="toc-section-number">7.1</span> Structure</a></li>
<li><a href="#different-forms" id="toc-different-forms"><span
class="toc-section-number">7.2</span> Different Forms</a>
<ul>
<li><a href="#normalized-form" id="toc-normalized-form"><span
class="toc-section-number">7.2.1</span> Normalized Form</a></li>
<li><a href="#denormalized-form" id="toc-denormalized-form"><span
class="toc-section-number">7.2.2</span> Denormalized Form</a></li>
<li><a href="#special-form" id="toc-special-form"><span
class="toc-section-number">7.2.3</span> Special Form</a></li>
</ul></li>
<li><a href="#example" id="toc-example"><span
class="toc-section-number">7.3</span> Example</a></li>
<li><a href="#rounding" id="toc-rounding"><span
class="toc-section-number">7.4</span> Rounding</a></li>
<li><a href="#limitations" id="toc-limitations"><span
class="toc-section-number">7.5</span> Limitations</a></li>
</ul></li>
<li><a href="#instruction-architecture"
id="toc-instruction-architecture"><span
class="toc-section-number">8</span> Instruction Architecture</a>
<ul>
<li><a href="#instruction-structure"
id="toc-instruction-structure"><span
class="toc-section-number">8.1</span> Instruction Structure</a>
<ul>
<li><a href="#number-of-operands" id="toc-number-of-operands"><span
class="toc-section-number">8.1.1</span> Number Of Operands</a></li>
<li><a href="#size-of-instructions" id="toc-size-of-instructions"><span
class="toc-section-number">8.1.2</span> Size Of Instructions</a></li>
</ul></li>
<li><a href="#instruction-set-choices"
id="toc-instruction-set-choices"><span
class="toc-section-number">8.2</span> Instruction Set Choices</a>
<ul>
<li><a href="#general-purpose-registers"
id="toc-general-purpose-registers"><span
class="toc-section-number">8.2.1</span> General Purpose
Registers</a></li>
</ul></li>
<li><a href="#instruction-set-classes"
id="toc-instruction-set-classes"><span
class="toc-section-number">8.3</span> Instruction Set Classes</a>
<ul>
<li><a href="#stack" id="toc-stack"><span
class="toc-section-number">8.3.1</span> Stack</a></li>
<li><a href="#accumulator" id="toc-accumulator"><span
class="toc-section-number">8.3.2</span> Accumulator</a></li>
<li><a href="#register-memory" id="toc-register-memory"><span
class="toc-section-number">8.3.3</span> Register Memory</a></li>
<li><a href="#register-register" id="toc-register-register"><span
class="toc-section-number">8.3.4</span> Register Register</a></li>
<li><a href="#memory-memory" id="toc-memory-memory"><span
class="toc-section-number">8.3.5</span> Memory Memory</a></li>
<li><a href="#risc-v.-cisc" id="toc-risc-v.-cisc"><span
class="toc-section-number">8.3.6</span> RISC v. CISC</a></li>
</ul></li>
<li><a href="#memory-1" id="toc-memory-1"><span
class="toc-section-number">8.4</span> Memory</a>
<ul>
<li><a href="#ordering" id="toc-ordering"><span
class="toc-section-number">8.4.1</span> Ordering</a></li>
<li><a href="#alignment" id="toc-alignment"><span
class="toc-section-number">8.4.2</span> Alignment</a></li>
<li><a href="#addressing-modes" id="toc-addressing-modes"><span
class="toc-section-number">8.4.3</span> Addressing Modes</a></li>
</ul></li>
</ul></li>
<li><a href="#pipelining" id="toc-pipelining"><span
class="toc-section-number">9</span> Pipelining</a>
<ul>
<li><a href="#formulas" id="toc-formulas"><span
class="toc-section-number">9.1</span> Formulas</a></li>
<li><a href="#mips-example" id="toc-mips-example"><span
class="toc-section-number">9.2</span> MIPS Example</a></li>
<li><a href="#hazards" id="toc-hazards"><span
class="toc-section-number">9.3</span> Hazards</a>
<ul>
<li><a href="#structural-hazards" id="toc-structural-hazards"><span
class="toc-section-number">9.3.1</span> Structural Hazards</a></li>
<li><a href="#data-hazard" id="toc-data-hazard"><span
class="toc-section-number">9.3.2</span> Data Hazard</a></li>
<li><a href="#control-hazard" id="toc-control-hazard"><span
class="toc-section-number">9.3.3</span> Control Hazard</a></li>
</ul></li>
<li><a href="#scheduling" id="toc-scheduling"><span
class="toc-section-number">9.4</span> Scheduling</a>
<ul>
<li><a href="#static-scheduling" id="toc-static-scheduling"><span
class="toc-section-number">9.4.1</span> Static Scheduling</a></li>
<li><a href="#dynamic-scheduling" id="toc-dynamic-scheduling"><span
class="toc-section-number">9.4.2</span> Dynamic Scheduling</a></li>
<li><a href="#tomasulos-algorithm" id="toc-tomasulos-algorithm"><span
class="toc-section-number">9.4.3</span> Tomasulo’s Algorithm</a></li>
<li><a href="#hardware-speculation" id="toc-hardware-speculation"><span
class="toc-section-number">9.4.4</span> Hardware Speculation</a></li>
</ul></li>
<li><a href="#loop-unrolling" id="toc-loop-unrolling"><span
class="toc-section-number">9.5</span> Loop Unrolling</a></li>
<li><a href="#dynamic-branch-prediction"
id="toc-dynamic-branch-prediction"><span
class="toc-section-number">9.6</span> Dynamic Branch Prediction</a>
<ul>
<li><a href="#bit-prediction-scheme"
id="toc-bit-prediction-scheme"><span
class="toc-section-number">9.6.1</span> 1-Bit Prediction Scheme</a></li>
<li><a href="#bit-prediction-scheme-1"
id="toc-bit-prediction-scheme-1"><span
class="toc-section-number">9.6.2</span> 2-Bit Prediction Scheme</a></li>
<li><a href="#correlated-prediction-scheme"
id="toc-correlated-prediction-scheme"><span
class="toc-section-number">9.6.3</span> Correlated Prediction
Scheme</a></li>
<li><a href="#tournament-predicton-scheme"
id="toc-tournament-predicton-scheme"><span
class="toc-section-number">9.6.4</span> Tournament Predicton
Scheme</a></li>
<li><a href="#branch-target-buffers"
id="toc-branch-target-buffers"><span
class="toc-section-number">9.6.5</span> Branch Target Buffers</a></li>
</ul></li>
<li><a href="#exceptions" id="toc-exceptions"><span
class="toc-section-number">9.7</span> Exceptions</a>
<ul>
<li><a href="#asynchronous-exceptions"
id="toc-asynchronous-exceptions"><span
class="toc-section-number">9.7.1</span> Asynchronous Exceptions</a></li>
<li><a href="#synchronous-exceptions"
id="toc-synchronous-exceptions"><span
class="toc-section-number">9.7.2</span> Synchronous Exceptions</a></li>
</ul></li>
</ul></li>
</ul>
</nav>
<h1 data-number="1" id="references"><span
class="header-section-number">1</span> References</h1>
<p>Most of these notes come from my ECE 311 class at UAlberta.</p>
<h1 data-number="2" id="introduction"><span
class="header-section-number">2</span> Introduction</h1>
<h2 data-number="2.1" id="classes"><span
class="header-section-number">2.1</span> Classes</h2>
<p>There are several classes of computers:</p>
<ul>
<li><p>Personal mobile device (PMD)</p>
<ul>
<li><p>These are things like smartphones.</p></li>
<li><p>Cost is the primary concern followed by power
efficiency.</p></li>
</ul></li>
<li><p>Desktop Computing</p>
<ul>
<li><p>The biggest computer market up until the rise of PMDs.</p></li>
<li><p>Desktops focus on price and performance.</p></li>
</ul></li>
<li><p>Servers</p>
<ul>
<li><p>These are large computing systems with a focus on reliability
(availability), scalability, and throughput.</p></li>
</ul></li>
<li><p>Clusters</p>
<ul>
<li><p>These are special systems that consist of dozens upon dozens of
desktops or servers connected together.</p></li>
<li><p>A cluster is often cheaper than a similarly powerful
single-computer.</p></li>
<li><p>The focus is on availability, price, performance, and
power.</p></li>
</ul></li>
<li><p>Embedded</p>
<ul>
<li><p>These are to mice what a cluster is to an elephant.</p></li>
<li><p>Tiny computers hidden in every day devices.</p></li>
<li><p>Emphasis is on cost.</p></li>
<li><p>These do not run third party software.</p></li>
</ul></li>
</ul>
<h2 data-number="2.2" id="growth"><span
class="header-section-number">2.2</span> Growth</h2>
<p>Computers have been getting more and more powerful for a long time.
Processor were becoming more powerful at a ridiculous  52%/year from
1986 to 2003. They slowed down to about  22%/year after 2003.</p>
<p>Note that we’re talking about single-processors. The reason for the
slow downs was reaching the physical limits of power dissipation through
air cooling and lack of instruction level parallelism.</p>
<p>Instruction level parallelism (ILP) is about running instructions
that don’t depend on one another simultaneously on the same
processor.</p>
<p>Clock speeds follow a similar pattern as just processor power.
Processor speeds were increasing at a dramatic  40%/year from 1987 to
2003. But they slowed down to a minuscule  1%/year after 2003. The
primary reason was the shift to exploit parallelism rather than single
unit performance.</p>
<h3 data-number="2.2.1" id="compounding"><span
class="header-section-number">2.2.1</span> Compounding</h3>
<p>It’s worth mentioning that all these rates are compounded year after
year.</p>
<p>Remember the compounding formula.</p>
<p><span class="math display">\\[A = P \\times (r)^t\\]</span> In the
equation above:</p>
<ul>
<li><p><span class="math inline">\\(A\\)</span> is amount.</p></li>
<li><p><span class="math inline">\\(P\\)</span> is principal.</p></li>
<li><p><span class="math inline">\\(r\\)</span> is the rate.</p>
<ul>
<li><p>If something is increasing by 20% every year then <span
class="math inline">\\(r = 1.2\\)</span>.</p></li>
<li><p>If something is decreasing by 20% every year then <span
class="math inline">\\(r = 0.8\\)</span>.</p></li>
</ul></li>
<li><p><span class="math inline">\\(t\\)</span> is the number of
periods.</p>
<ul>
<li><p>It could be years, days, hours, etc. But the unit of periods must
be the same as the period for the rate.</p></li>
</ul></li>
</ul>
<h2 data-number="2.3" id="cpu"><span
class="header-section-number">2.3</span> CPU</h2>
<p>The CPU is the central processing unit that is like the brain of a
computer.</p>
<p>It contains (among many others):</p>
<ul>
<li><p>Registers</p>
<ul>
<li><p>Very quick access memory.</p></li>
</ul></li>
<li><p>ALU</p>
<ul>
<li><p>The arithmetic and logic unit.</p></li>
<li><p>Handles operations at the hardware level and exploits hardware
efficiency on top of software efficiency.</p></li>
</ul></li>
<li><p>PC (program counter)</p>
<ul>
<li><p>A special register that contains the address of the next
instruction to execute.</p></li>
</ul></li>
</ul>
<h2 data-number="2.4" id="buses"><span
class="header-section-number">2.4</span> Buses</h2>
<p>Buses are the wires that connect all the different parts of a
computer together.</p>
<p>There are different types of buses:</p>
<ul>
<li><p>Data buses</p></li>
<li><p>Address buses</p></li>
<li><p>Control buses</p></li>
</ul>
<h1 data-number="3" id="design"><span
class="header-section-number">3</span> Design</h1>
<h2 data-number="3.1" id="power-and-energy"><span
class="header-section-number">3.1</span> Power and Energy</h2>
<p>Electrical power and energy have become the biggest concerns with
processors now. Processors tend to generate a lot of heat which needs to
be taken away or reduced.</p>
<p>The thermal design power (TDP) is the sustained power consumption. It
is usually a value greater than the average power consumption but lower
than the peak power consumption.</p>
<p>There are two types of energy consumption in processors:</p>
<ul>
<li><p>Dynamic energy</p>
<ul>
<li><p>This is spent switching transistors.</p></li>
<li><p><span class="math inline">\\(E_{dynamic} = \\frac{1}{2} \\times
Capacitive_Load \\times Voltage^2\\)</span></p></li>
</ul></li>
<li><p>Static energy</p>
<ul>
<li><p>This is leaked from transistors.</p></li>
</ul></li>
</ul>
<p>Dynamic power is the energy per unit of time. <span
class="math inline">\\(P_{dynamic} = E_{dynamic} \\times f\\)</span></p>
<h3 data-number="3.1.1" id="comparing-energy"><span
class="header-section-number">3.1.1</span> Comparing Energy</h3>
<p>To compare efficiency of two processors, we compare the energy not
the power.</p>
<p><span class="math display">\\[E_{efficiency} =
\\frac{E_{new}}{E_{old}}\\]</span><span
class="math display">\\[P_{efficiency} =
\\frac{P_{new}}{P_{old}}\\]</span></p>
<h3 data-number="3.1.2" id="reducing-power"><span
class="header-section-number">3.1.2</span> Reducing Power</h3>
<p>There are several techniques for reducing dynamic power:</p>
<ul>
<li><p>Idling properly</p>
<ul>
<li><p>This may involve things like turning off the FP unit when it’s
not being used.</p></li>
</ul></li>
<li><p>Dynamic voltage-frequency scaling</p></li>
<li><p>Low power for DRAM, disks</p></li>
<li><p>Overclocking</p></li>
</ul>
<p>Saving static power is more tricky because static power is leaked
even with reduced clock frequency or when the processor is idling.</p>
<h2 data-number="3.2" id="parallelism"><span
class="header-section-number">3.2</span> Parallelism</h2>
<p>There are two different classes of parallelism:</p>
<ul>
<li><p>Data-level parallelism (DLP)</p>
<ul>
<li><p>Data that can be operated on at the same time such as adding two
arrays.</p></li>
</ul></li>
<li><p>Task-level parallelism (TLP)</p>
<ul>
<li><p>Performing many independent tasks at the same time.</p></li>
</ul></li>
</ul>
<p>We can perform the two classes of parallelism in several different
ways:</p>
<ul>
<li><p>Instruction-level parallelism (ILP)</p></li>
<li><p>Vector architecture/graphic processor unit (GPU)</p>
<ul>
<li><p>These can apply a single instruction to a large amount of
data.</p></li>
</ul></li>
<li><p>Thread-level parallelism</p></li>
<li><p>Request-level parallelism</p></li>
</ul>
<h3 data-number="3.2.1" id="flynns-taxonomy"><span
class="header-section-number">3.2.1</span> Flynn’s Taxonomy</h3>
<p>This is a simple system meant to categories how a unit handles data
and instructions:</p>
<ul>
<li><p>Single instruction stream, single data stream (SISD)</p>
<ul>
<li><p>An example is the single-processor systems.</p></li>
</ul></li>
<li><p>Single instruction stream, multiple data stream (SIMD)</p>
<ul>
<li><p>GPUs are an example of SIMD.</p></li>
</ul></li>
<li><p>Multiple instruction stream, single data stream (MISD)</p>
<ul>
<li><p>No commercial use.</p></li>
</ul></li>
<li><p>Multiple instruction stream, multiple data stream (MIMD)</p>
<ul>
<li><p>Tightly-coupled</p>
<ul>
<li><p>Exploit thread-level parallelism.</p></li>
</ul></li>
<li><p>Loosely-coupled</p>
<ul>
<li><p>Exploit request-level parallelism.</p></li>
</ul></li>
</ul></li>
</ul>
<h2 data-number="3.3" id="benchmarks"><span
class="header-section-number">3.3</span> Benchmarks</h2>
<p>It’s difficult to compare the performance of two different
processors. The clock rate isn’t entirely accurate but neither is the
number of cores or any other metric.</p>
<p>There is no definitive method of showing one processor is better than
another but that’s why we use benchmarks.</p>
<p>We run a task and measure how long it takes for a processor to
complete it.</p>
<p><span class="math display">\\[R =
\\frac{ExecutionTime_{B}}{ExecutionTime_{A}}\\]</span> Note that <span
class="math inline">\\(R\\)</span> is just a ratio.</p>
<p>For multiple benchmarks, we use the geometric mean
<span><strong>not</strong></span> the arithmetic mean.</p>
<h2 data-number="3.4" id="amdahls-law"><span
class="header-section-number">3.4</span> Amdahl’s Law</h2>
<p>Amdahl’s law formalizes the idea that reducing time spent in
bottlenecks will have the greatest effect on the performance.</p>
<h3 data-number="3.4.1" id="calculating-improvements"><span
class="header-section-number">3.4.1</span> Calculating Improvements</h3>
<p>This is best illustrated with an example.</p>
<p>Let’s say a processor spends 40% of its time on task A and the rest
on task B.</p>
<p>You can cut time spent on A by half or time spent on B to a third but
not both. Which one should you pick?</p>
<p>In this case, it’s as simple as a weighted average.</p>
<p><span class="math display">\\[Original = (1 \\times 0.4)_{A} + (1
\\times 0.6)_{B} = 1\\]</span><span class="math display">\\[Possibility_1 =
(0.5 \\times 0.4)_{A} + (1 \\times 0.6)_{B} = 0.8\\]</span><span
class="math display">\\[Possibility_2 = (1 \\times 0.4)_{A} + (0.33 \\times
0.6)_{B} = 0.6\\]</span> We can formally compare them as well.</p>
<p><span class="math display">\\[Improvement_1 =
\\frac{Original}{Possibility_1} = \\frac{1}{0.8} = 1.25\\]</span><span
class="math display">\\[Improvement_2 = \\frac{Original}{Possibility_2} =
\\frac{1}{0.6} = 1.67\\]</span> The first possibility improves on the
original by a factor of 1.25 but possibility two improves on the
original by a factor of 1.67.</p>
<p>Note that we divided to find the improvement. We did not
subtract.</p>
<p>In this scenario, possibility two in better.</p>
<h2 data-number="3.5" id="dependability"><span
class="header-section-number">3.5</span> Dependability</h2>
<p>Dependability is a big concern with processors. To evaluate
dependability, we use some mean time to failure and other measures.</p>
<ul>
<li><p>Mean time to failure (MTTF) is the time it takes for a device to
fail.</p></li>
<li><p>Mean time to repair (MTTR) is the time it takes to get a failed
device back to running.</p></li>
<li><p>Mean time between failures (MTBF) is just <span
class="math inline">\\(MTTF + MTTR\\)</span>.</p></li>
<li><p>Availability is <span
class="math inline">\\(\\frac{MTTF}{MTBF}\\)</span></p></li>
</ul>
<h3 data-number="3.5.1" id="multiple-components"><span
class="header-section-number">3.5.1</span> Multiple Components</h3>
<p>Computer systems rarely exist in isolation. As such, the
dependability often depends on several parts any of which may fail.</p>
<p>We can use simple statistics to find the average time to failure for
a system of multiple parts.</p>
<p><span class="math display">\\[Y_{total} = Y_1 + Y_2 + ... +
Y_n\\]</span><span class="math display">\\[Y = rate =
\\frac{1}{MTTF}\\]</span> The only tricky part is to ensure that the rate
is for the same amount of time, i.e. all <span
class="math inline">\\(Y\\)</span>/rates are per hour or per day etc.</p>
<p>And remember that <span class="math inline">\\(Y_{total}\\)</span> is
just a rate. To get the actual time to failure for the system, you must
take the inverse.</p>
<h1 data-number="4" id="memory"><span
class="header-section-number">4</span> Memory</h1>
<p>A computer contains many different types of memory.</p>
<p>There is a sort of hierarchy that gets larger, slower, and cheaper as
we go down:</p>
<ol>
<li><p>Registers</p></li>
<li><p>L1 cache (SRAM)</p></li>
<li><p>L2 cache (SRAM)</p></li>
<li><p>L3 cache (SRAM)</p></li>
<li><p>Main memory (DRAM)</p></li>
<li><p>Local disks (HDD/SDD)</p></li>
<li><p>Remote disks</p></li>
</ol>
<p>Ideally, we want to limit how much we use the memory lower in the
hierarchy because it’s slower and expensive to use.</p>
<h2 data-number="4.1" id="latency"><span
class="header-section-number">4.1</span> Latency</h2>
<p>When we talk about memory performance, we usually talk about access
time and cycle time.</p>
<p>Access time is the time between a read is requested and when the
information arrives.</p>
<p>Cycle time is the minimum time between requests to memory.</p>
<h2 data-number="4.2" id="ram"><span
class="header-section-number">4.2</span> RAM</h2>
<p>RAM or random access memory is usually what we’re talking about when
we say memory. This is the main memory that all programs are placed
in.</p>
<p>RAM has three buses attaches to it:</p>
<ul>
<li><p>Address lines</p></li>
<li><p>Data lines</p></li>
<li><p>Control lines</p></li>
</ul>
<h2 data-number="4.3" id="sram"><span
class="header-section-number">4.3</span> SRAM</h2>
<p>SRAM is static RAM. It is bistable which means it is stable only in
one of two positions. If it is unstable it will move until it is stable.
Because SRAM is bistable, it can handle stresses fairly well.</p>
<p>SRAM is implemented with a six-transistor circuit so it requires
power to maintain data.</p>
<p>SRAM is used in registers, caches, buffers, etc.</p>
<h2 data-number="4.4" id="dram"><span
class="header-section-number">4.4</span> DRAM</h2>
<p>DRAM is dynamic RAM. DRAM is usually used as the main memory in
computers.</p>
<p>DRAM is made with capacitors so it can be made to be very dense. The
disadvantage is that DRAM is very unstable because the capacitor can
lose its charge very easily and cannot be recovered.</p>
<p>Even reading a bit in DRAM will destroy it so reading must be
followed by writing.</p>
<p>DRAM must be refreshed every 10 to 100 milliseconds because the
capacitors can leak their charge. To refresh, every bit must be read and
then rewritten.</p>
<p>DRAM is much cheaper than SRAM but it has a slower cycle time because
we must write after we read. DRAM is also much more sensitive than
SRAM.</p>
<h3 data-number="4.4.1" id="organization"><span
class="header-section-number">4.4.1</span> Organization</h3>
<p>DRAM memory is usually organized in banks. Each bank contains many
supercells of <span class="math inline">\\(w\\)</span> bits.</p>
<p>These supercells in a bank are usually organized in a rectangular
structure with rows and columns.</p>
<p>DRAM is also organized into modules with many banks. Each bank will
contain a portion of a chunk of data. For example, the first byte of
data might be on the first bank at supercell <span
class="math inline">\\((2,2)\\)</span>, the second byte will be on the
second bank at the supercell <span
class="math inline">\\((2,2)\\)</span>,... All the supercells are located
at the same address but different banks contain different parts of the
data.</p>
<h3 data-number="4.4.2" id="retrieval"><span
class="header-section-number">4.4.2</span> Retrieval</h3>
<p>Retrieval occurs in a few steps:</p>
<ol>
<li><p>Memory controller sends the row number to the memory.</p></li>
<li><p>The memory copies that row into its internal row buffer.</p></li>
<li><p>The memory controller sends the column number to the
memory.</p></li>
<li><p>The memory will return the correct supercell according to the
column number.</p></li>
</ol>
<p>The advantage of sending the address in two steps is that we need
fewer address lines but it does mean longer access times.</p>
<h2 data-number="4.5" id="rom"><span
class="header-section-number">4.5</span> ROM</h2>
<p>ROM or read only memory is also very important in computers. SRAM and
DRAM are wiped when power is cut off. Memory that doesn’t lose its state
after power is cut off is called non-volatile memory.</p>
<p>There are several different types of non-volatile memory:</p>
<ul>
<li><p>Programmable ROM (PROM)</p>
<ul>
<li><p>Only programmable once by blowing a fuse.</p></li>
</ul></li>
<li><p>Erasable programmable ROM (EPROM)</p>
<ul>
<li><p>Programmable using special device.</p></li>
<li><p>Wiped with UV light.</p></li>
<li><p>Can be written to <span class="math inline">\\(&lt; 1000\\)</span>
times.</p></li>
</ul></li>
<li><p>Electrically erasable PROM (EEPROM)</p>
<ul>
<li><p>Uses electricity to wipe and write information.</p></li>
<li><p>Can be written to <span class="math inline">\\(&lt;
10^{5}\\)</span> times.</p></li>
</ul></li>
</ul>
<p>Note that there are limits to how many times EPROM and EEPROM can be
programmed.</p>
<h2 data-number="4.6" id="solid-state-disks"><span
class="header-section-number">4.6</span> Solid State Disks</h2>
<p>Solid State Disks (SSD) are based on flash memory.</p>
<p>The memory in SSDs is organized in pages within blocks. Each page may
be 512 - 4 KB and a block contains 32 - 128 pages.</p>
<p>Reads are done on entire pages at a time. Writing to a block involves
first erasing the entire block and then writing information.
Specifically, this involves copying old information to a newly erased
block. As expected, writes are very slow compared to reading.</p>
<p>Each block can be written to about <span
class="math inline">\\(10^{5}\\)</span> times.</p>
<h2 data-number="4.7" id="rotating-disk-drives"><span
class="header-section-number">4.7</span> Rotating Disk Drives</h2>
<p>A Hard Disk Drive (HDD) is an example of a rotating disk drive. There
are a few different components of an HDD:</p>
<ul>
<li><p><span><strong>Platters</strong></span> are reflective metal discs
that actually contain the data. These will be described in detail
later.</p></li>
<li><p>The <span><strong>spindle</strong></span> is the axis about which
the platters rotate. The spindle spins around itself.</p></li>
<li><p>The <span><strong>arm</strong></span> is the arm for the laser
reading device to read the data from the platters.</p></li>
<li><p>The <span><strong>actuator</strong></span> rotates to allow the
arm to be at different angles so that it can read different locations on
the platters.</p></li>
</ul>
<h3 data-number="4.7.1" id="organization-of-data"><span
class="header-section-number">4.7.1</span> Organization of Data</h3>
<p>All the data is stored on the two surfaces of a platter that is
coated with a magnetic recording material.</p>
<p>On each surface of a platter, there are several tracks. These can be
thought of as the grooves on a vinyl record. These tracks are at
different distances from the spindle.</p>
<p>Each track contains data <span><strong>sectors</strong></span>
interleaved with <span><strong>gaps</strong></span> that contain
information about the sector.</p>
<p>A collection of tracks may be organized in
<span><strong>cylinders</strong></span>. All tracks in a cylinder have
an equal number of sectors. These may also be called
<span><strong>zones</strong></span>.</p>
<p>Because disk organization can get pretty complicated, there is an
abstraction layer for OSes. A <span><strong>HD
controller</strong></span> provides an abstraction for access to the
disk. Instead of specifying surface number, track number, and sector
number, the OS can simply tell the HD controller of a block number which
the HD controller converts into an actual location on the disk.</p>
<p>The HD controller’s abstraction allows the OS to treat the disk as a
list of block numbers without caring about where the actual blocks
are.</p>
<h3 data-number="4.7.2" id="capacity"><span
class="header-section-number">4.7.2</span> Capacity</h3>
<p>Disk capacity is the number of bits that can be stored on a hard
disk.</p>
<p>There are a few different factors that affect capacity:</p>
<ul>
<li><p><span><strong>Recording density</strong></span> (<span
class="math inline">\\(\\frac{bits}{in}\\)</span>) - bits that fit into a
1-inch segment of a track.</p></li>
<li><p><span><strong>Track density</strong></span> (<span
class="math inline">\\(\\frac{tracks}{in}\\)</span>) - tracks that fit into
a 1-inch radial segment.</p></li>
<li><p><span><strong>Areal density</strong></span> (<span
class="math inline">\\(\\frac{bits}{in^2}\\)</span>) - bits that fit into
an <span class="math inline">\\(in^2\\)</span> of the platter
surface.</p></li>
</ul>
<p>We can actually calculate capacity using a simple formula.</p>
<p><span class="math display">\\[Capacity = (\\frac{bytes}{sector}) \\times
(\\frac{avg. sectors}{track}) \\times (\\frac{tracks}{surface}) \\times
(\\frac{surfaces}{platter}) \\times (\\frac{platters}{disk})\\]</span></p>
<h3 data-number="4.7.3" id="operation"><span
class="header-section-number">4.7.3</span> Operation</h3>
<p>There are multiple platters with arms sandwiched between them for a
single HDD. The platters are rotated by the spindle that they are
attached to.</p>
<p>Because the arms are all in the same cylinder on each platter
surface, they can all be written to or read at the same time.</p>
<p><span><strong>Seek time</strong></span> is the time it takes for the
arm to rotate to the right cylinder. Seek time is usually <span
class="math inline">\\(\\le 20ms\\)</span>.</p>
<p><span><strong>Rotational latency</strong></span> is the time it takes
for the entire spindle to rotate until the arm can read the required
sector. The worst case is the time it takes for a full rotation. Average
case is <span class="math inline">\\(\\frac{worst case}{2}\\)</span>.</p>
<p><span><strong>Transfer time</strong></span> is the time it takes to
read a single sector. This is usually tiny compared to the seek time and
rotational latency.</p>
<p>The <span><strong>access time</strong></span> is the time it takes to
perform the entire operation.</p>
<p><span class="math display">\\[T_{access} = T_{avg\\ seek} + T_{avg\\
rotational\\ freq.} + T_{avg\\ transfer}\\]</span></p>
<h2 data-number="4.8" id="raid"><span
class="header-section-number">4.8</span> RAID</h2>
<p>RAID is a way to organize more than one disk to improve various
aspects of data storage. RAID exploits parallelism and redundancy to
improve performance and reliability. On the downside, they are more
expensive.</p>
<p>RAID stands for redundant array of inexpensive disks. There are
different types of RAID systems.</p>
<h3 data-number="4.8.1" id="raid-0"><span
class="header-section-number">4.8.1</span> RAID 0</h3>
<p>RAID 0 just spreads data over several disks. This improves
performance but there is no redundancy.</p>
<h3 data-number="4.8.2" id="raid-1"><span
class="header-section-number">4.8.2</span> RAID 1</h3>
<p>RAID 1 has data disks and mirror disks that are exact copies of the
data disks. This approach means you need twice as many disks as you
would normally but it means that there is redundancy and a performance
boost.</p>
<h3 data-number="4.8.3" id="raid-2"><span
class="header-section-number">4.8.3</span> RAID 2</h3>
<p>RAID 2 has data disks and error correction disks that contain
redundant data. An error correcting code is used to recover data. This
system is not usually used in practice.</p>
<h3 data-number="4.8.4" id="raid-3"><span
class="header-section-number">4.8.4</span> RAID 3</h3>
<p>RAID 3 has <span class="math inline">\\(n\\)</span> data disks and 1
redundant disk. The redundant disk contains a byte that is the XORed
result of all the data disks’ bytes in the same location. This approach
allows you to recover data as long as only one disk fails. Reading is
quicker but writing is slow because a new parity bit must be
written.</p>
<h3 data-number="4.8.5" id="raid-4"><span
class="header-section-number">4.8.5</span> RAID 4</h3>
<p>RAID 4 is exactly like RAID 3 but instead of XORing bytes, RAID 4
XORs entire blocks from the data disks. The parity disk is still a
bottleneck for writing.</p>
<h3 data-number="4.8.6" id="raid-5"><span
class="header-section-number">4.8.6</span> RAID 5</h3>
<p>RAID 5 is like RAID 4 but the parity blocks are distributed across
all the disks. This helps reduce the bottleneck of change the parity
bits when writing.</p>
<h3 data-number="4.8.7" id="raid-6"><span
class="header-section-number">4.8.7</span> RAID 6</h3>
<p>RAID 6 is like RAID 5 but there are two different XORed values stored
instead of just one.</p>
<h3 data-number="4.8.8" id="nested-raids"><span
class="header-section-number">4.8.8</span> Nested RAIDs</h3>
<p>RAID systems can also be nested. An example is RAID 1+0. RAID 1 means
there are exact copies of the data disks. And RAID 0 means the data is
distributed across more than one disk. RAID 1+0, then, has data
distributed across more than one disk but also has redundant disks for
each disk.</p>
<h1 data-number="5" id="cache"><span
class="header-section-number">5</span> Cache</h1>
<p>Caching is a very important concept that must be understood to write
programs that have good performance.</p>
<h2 data-number="5.1" id="locality"><span
class="header-section-number">5.1</span> Locality</h2>
<p>Locality is used to describe programs’ use of the cache.</p>
<h3 data-number="5.1.1" id="temporal-locality"><span
class="header-section-number">5.1.1</span> Temporal Locality</h3>
<p>Temporal locality is when a recently used item is likely to be used
again very soon. This is good because it means the values with temporal
locality can be stored in cache which is much faster to access than the
main memory.</p>
<p>An example of temporal locality is a local sum variable that is
increased in a loop.</p>
<h3 data-number="5.1.2" id="spatial-locality"><span
class="header-section-number">5.1.2</span> Spatial Locality</h3>
<p>Spatial locality is when the next item read is very close to the
current item. This is good because caches usually store entire blocks of
data at a time rather than single bytes.</p>
<p>An example of spatial locality is accessing arrays in a sequential
fashion.</p>
<p>For reference, C, C++, Mathematica, Pascal, and Python all store 2D
arrays row by row. Fortran and MATLAB store 2D arrays as column by
column. Java stores references to arrays in another array.</p>
<p>Generally speaking, in C, the right most index of an array should be
changed the most often.</p>
<h3 data-number="5.1.3" id="locality-performance"><span
class="header-section-number">5.1.3</span> Locality &amp;
Performance</h3>
<p>Locality can have a huge impact on performance. I/O is usually the
biggest bottleneck in modern programs.</p>
<p>An illustration of how important locality is a <a
href="http://csapp.cs.cmu.edu/public/images/mountain2e-labeled.gif">memory
mountain</a>.</p>
<p>Note that the <span><strong>read throughput</strong></span> is the
rate of bytes read. The <span><strong>stride</strong></span> is the step
on each iteration, e.g. a stride of one means sequential reading.</p>
<p>It is clear on the memory mountain that a loop using spatial locality
(ij) is much faster than the reverse (ji) even when the working set is
large.</p>
<p>To get optimal performance, use locality whenever possible, i.e. keep
the working set small and use small strides.</p>
<h2 data-number="5.2" id="memory-heirarchy"><span
class="header-section-number">5.2</span> Memory Heirarchy</h2>
<p>The memory heirarchy is a way to describe the heirarchy of small,
expensive memory to large, cheap memory. A specific memory type is used
as a cache for the memory right below it in the memory heirarchy.</p>
<h2 data-number="5.3" id="hits-misses"><span
class="header-section-number">5.3</span> Hits &amp; Misses</h2>
<p>The way caches work is that when some data is used from memory, its
block is also copied into cache for later use.</p>
<p>But to describe how a cache is used by a program, we use the idea of
hits and misses.</p>
<p><span><strong>Hits</strong></span> occur when the block we want is
contained in the cache.</p>
<p><span><strong>Misses</strong></span> occur when the block we want is
not in the cache.</p>
<p>There are a few different types of misses:</p>
<ul>
<li><p><span><strong>Cold misses</strong></span> occur when the cache is
empty.</p></li>
<li><p><span><strong>Conflict misses</strong></span> are a little more
complicated. Caches usually store blocks of data rather than just
singular bytes. These blocks are usually organized as block 1 containing
bytes 0-3 and block 2 containing bytes 5-8 and so on. Conflict misses
occur when you constantly refer to different blocks every time.</p></li>
<li><p><span><strong>Capacity miss</strong></span> is when the
<span><strong>working set</strong></span>, data currently being used, is
larger than the actual cache capacity.</p></li>
</ul>
<p><span><strong>Local</strong></span> miss rate is the <span
class="math inline">\\(\\frac{misses}{requests_{local}}\\)</span>. The
local requests are the requests made only to that cache.</p>
<p><span><strong>Global</strong></span> miss rate is the <span
class="math inline">\\(\\frac{misses}{requests_{global}}\\)</span>. The
global requests are the requests made by the processor to any cache
level.</p>
<h2 data-number="5.4" id="organization-1"><span
class="header-section-number">5.4</span> Organization</h2>
<p>Caches are organized into sets, lines, and blocks.</p>
<p>Each cache contains <span class="math inline">\\(S\\)</span> sets where
<span class="math inline">\\(S = 2^s\\)</span>. Each set contains <span
class="math inline">\\(E\\)</span> lines where <span
class="math inline">\\(E = 2^e\\)</span>. Each line contains <span
class="math inline">\\(B\\)</span> bytes where <span
class="math inline">\\(B = 2^b\\)</span>. Each line also contains a valid
bit and a tag.</p>
<p>In this fashion, the capacity of a cache is as follows: <span
class="math inline">\\(Capacity = S \\times E \\times B\\)</span>.</p>
<p>The address of a location in cache has three sections:</p>
<ul>
<li><p>A <span><strong>set index</strong></span> is used to identify
which set you want.</p></li>
<li><p>A <span><strong>tag</strong></span> is used to identify which
line you want in a set.</p></li>
<li><p>A <span><strong>block offset</strong></span> is used to offset
from the first byte in a block.</p></li>
</ul>
<p>Clearly, the number of bits for the set index, tag, and the block
offset in an address depend on how large the cache is and how it is
organized.</p>
<p>E-way associative caches describe the number of lines that a cache’s
set contains. Direct mapped caches only contain one line (E = 1).</p>
<p>As an example we can look at a direct mapped cache. It has four sets
and two bytes per line. And because it is a direct mapped cache, it only
has one line per set. A fully associative cache has a single set which
means the address need not contain the s bits.</p>
<p>In this example, we only need two bits for the set number. We need a
single bit for the byte offset. And a single bit for the tag. The total
address can be only four bits long.</p>
<h3 data-number="5.4.1" id="simulating-a-cache"><span
class="header-section-number">5.4.1</span> Simulating a Cache</h3>
<p>There is a specific process that the cache goes through when it is
trying to find a specific block.</p>
<p>Steps:</p>
<ol>
<li><p>Use set number to find the set.</p></li>
<li><p>Check the tag against each valid line in set.</p></li>
<li><p>Use the block offset in the correct block and return the
byte(s).</p></li>
</ol>
<p>What if we have a cache miss? Generally, an old block is evicted if
no empty space is available and the data from memory is loaded into this
newly evicted spot.</p>
<h3 data-number="5.4.2" id="cache-writes"><span
class="header-section-number">5.4.2</span> Cache Writes</h3>
<p>What if we want to write to memory but it’s in the cache. What do we
do?</p>
<p>We have two options:</p>
<ul>
<li><p><span><strong>Write through</strong></span> immediately writes
the block to memory.</p></li>
<li><p><span><strong>Write back</strong></span> modifies the cache
version of the data and defers the write until the cache block is about
to be evicted.</p></li>
</ul>
<p>Write through is simpler to implement but it is slower and requires
more bus transactions.</p>
<p>What about the case when the block we want is not in the cache. We
have two options here as well:</p>
<ul>
<li><p><span><strong>Write allocate</strong></span> loads the block into
cache and modifies it in the cache only.</p></li>
<li><p><span><strong>No-write allocate</strong></span> modifies the
block directly in memory.</p></li>
</ul>
<p>Generally, write through and no-write allocate are paired together
and write back and write allocate are paired together.</p>
<h2 data-number="5.5" id="types-of-caches"><span
class="header-section-number">5.5</span> Types of Caches</h2>
<p>There are two different types of caches in modern CPUs:</p>
<ul>
<li><p><span><strong>d-cache</strong></span> stores the program
data.</p></li>
<li><p><span><strong>i-cache</strong></span> stores the
instructions.</p></li>
</ul>
<p>Sometimes a <span><strong>unified cache</strong></span> is used that
contains both data and instructions.</p>
<h2 data-number="5.6" id="performance"><span
class="header-section-number">5.6</span> Performance</h2>
<p>There are a few different measures we can look at for
performance.</p>
<p><span class="math display">\\[CPU_{time} = \\frac{CPU clock cycles for
a program}{Clock rate}\\]</span><span class="math display">\\[CPI =
\\frac{CPU clock cycles for a program}{Instruction count}\\]</span><span
class="math display">\\[CPU_{time} = Instruction count \\times Cycles per
instruction \\times Clock cycle time\\]</span><span
class="math display">\\[CPU_{time} = \\frac{Instructions}{Program} \\times
\\frac{Clock cycles}{Instruction} \\times \\frac{Seconds}{Clock cycle}
\\times \\frac{Seconds}{Program}\\]</span> Note that usually different
instructions use different clock times. So the most accurate method for
calculation <span class="math inline">\\(CPU_{time}\\)</span> is to use a
sumamtion of each instruction and its clock cycles.</p>
<p>Another important measure is average memory access time.</p>
<p><span class="math display">\\[AccessTime_{average} = HitTime +
MissRate \\times MissPenalty\\]</span> The miss penalty comes from having
to go to memory and get whatever data you want. If there’s a second
level cache, then the miss penalty is just the <span
class="math inline">\\(HitTime_{L2} + MissRate_{L2} \\times
MissPenalty_{L2}\\)</span>.</p>
<p>Another complication is when it takes longer to return a certain
block, the miss penalty becomes dependant on the time it takes to return
the block. Let’s say that it takes 4 clock cycles to return 16 bytes and
we have 64 byte blocks. The miss penalty will be <span
class="math inline">\\(MissPenalty = BasePenalty + \\frac{64}{16} \\times
4\\)</span>.</p>
<h3 data-number="5.6.1" id="improving-performance"><span
class="header-section-number">5.6.1</span> Improving Performance</h3>
<p>There are a few different tactics to improving the cache
performance:</p>
<ul>
<li><p>Bigger block size - increases spatial locality but takes longer
to update block after cache miss so increases penality.</p></li>
<li><p>Bigger caches - more likely to find what we want in the cache but
it is more expensive and the hit time is larger.</p></li>
<li><p>Higher associativity - is similar to bigger caches with the same
drawbacks.</p></li>
<li><p>Multilevel caches - help reduce the overall access time. The miss
penalty for the first level is the access time and the miss penalty for
the second level and so on.</p></li>
</ul>
<p>There are some more advanced optimizations as well:</p>
<ul>
<li><p>Small and simple first level caches - minimize hit time by
increasing associativity.</p></li>
<li><p>Way prediction - predict which information might be used next. It
can make a massive impact on performance.</p></li>
<li><p>Piplined cache</p></li>
<li><p>Non-blocking caches - allow hits in the request queue to be
finished before going to fetch memory for misses.</p></li>
<li><p>Multiple banks - allow simultaneous access to bytes speeding up
hit time.</p></li>
<li><p>Critical word first and early restart - send a critical word
because of a cache miss first and then process the cache miss as
normal.</p></li>
<li><p>Merging write buffer - if writing to a block that’s already in
the write buffer, just update the write buffer for now.</p></li>
<li><p>Hardware prefetching - get data before it is called on. Although,
misses could reduce performance.</p></li>
<li><p>Compiler prefetching - compiler adds prefetching instructions
before data is needed.</p></li>
<li><p>Compiler optimizations - things like loop interchanging and
blocking can help improve performance. Blocking subdivides a 2D array
into a small block improving locality.</p></li>
</ul>
<h1 data-number="6" id="virtual-memory"><span
class="header-section-number">6</span> Virtual Memory</h1>
<p>Only very low level devices directly refer to physical addresses of
memory. This approach is fine for fairly simple devices but can be
dangerous for complex devices. What if one program accidently writes
over the memory of another program.</p>
<p>We need something to protect different processes from one another.
Virtual memory is what modern OSes use to help abstract away that
problem.</p>
<p>We can even have multiple processes reference and use the same
physical memory.</p>
<h2 data-number="6.1" id="organization-2"><span
class="header-section-number">6.1</span> Organization</h2>
<p>Instead of seeing physical addresses, processes see a contiguous
block of memory that only they have access to.</p>
<p>Each process may have something like 4 GB of virtual memory. Clearly,
there is much more virtual memory than physical memory. The solution is
that virtual memory uses the HDD. But to talk more about this we need to
talk about pages.</p>
<p><span><strong>Virtual pages</strong></span> are fixed sized blocks of
memory. Each virtual page is P bytes where <span class="math inline">\\(P
= 2^p\\)</span>. <span><strong>Physical pages</strong></span> are the
same size as virtual pages but these are stored in physical memory.</p>
<p>Because data is stored on the HDD, the miss penalty is massive. To
deal with this, pages are usually fairly large, 4-8 KB. This helps with
caching.</p>
<p><span><strong>Frame</strong></span> is just another name for physical
pages.</p>
<p>There is a piece of hardware called the
<span><strong>memory</strong></span> <span><strong>management
unit</strong></span> (<span><strong>MMU</strong></span>) that converts
virtual addresses to physical addresses using a look-up table stored in
memory.</p>
<p>To do the actual translation, the MMU uses <span><strong>page
tables</strong></span>. These are unique to each process and contain
<span><strong>page table entries</strong></span>
(<span><strong>PTE</strong></span>). The page tables are usually cached
in L1 cache. But sometimes, the page tables have their own hardware
cache in the MMU called the <span><strong>translation lookaside
buffer</strong></span> (<span><strong>TLB</strong></span>). The TLB is
faster to access than the L1 cache further speeding up virtual
memory.</p>
<p>Each page has a PTE. Each PTE contains a valid bit and an address.
Extended page table entries can contain information about permission,
read, and write priveliges. If a process tries to do something that
isn’t allowed, it will throw a general protection fault.</p>
<p>If the valid bit is 1, then the address is of the physical frame in
memory. If the valid bit is 0, then the address is of the data on the
HDD or the address is null and the page is unallocated.</p>
<p>When the MMU encounters an address that is not cached, it is called a
<span><strong>page fault</strong></span>. In this case, another page is
evicted from memory and replaced with the non-cached page.</p>
<h2 data-number="6.2" id="caching"><span
class="header-section-number">6.2</span> Caching</h2>
<p>There are three categories that a virtual page can belong to:</p>
<ul>
<li><p>Unallocated - pages contain no data and are not stored
anywhere.</p></li>
<li><p>Cached - pages contain data and are kept as physical pages in
memory.</p></li>
<li><p>Uncached - pages contain data but are stored on the HDD instead
of memory.</p></li>
</ul>
<p>The reason virtual memory isn’t incredibly slow is because of
locality. Generally, the working set is much smaller than the total
memory size. If the sum of all the processes’ working sets is greater
than the main memory size, we get
<span><strong>thrashing</strong></span>. Thrashing is when performance
just dies and pages are just constantly swapped in/out.</p>
<h2 data-number="6.3" id="addresses"><span
class="header-section-number">6.3</span> Addresses</h2>
<p>If virtual memory is separate from physical memory, then their
addresses cannot be the same.</p>
<p>An actual virtual address has two parts:</p>
<ul>
<li><p><span><strong>VPN</strong></span> - virtual page number.</p></li>
<li><p><span><strong>VPO</strong></span> - virtual page offset.</p></li>
</ul>
<p>As noted earlier, the VPO and the PPO (physical page offset) are
identical because the pages are stored as one block.</p>
<h2 data-number="6.4" id="process"><span
class="header-section-number">6.4</span> Process</h2>
<p>The basic process of creating virtual pages is as follows:</p>
<ol>
<li><p>Process requests a page of memory from OS.</p></li>
<li><p>OS creates a new virtual page.</p></li>
<li><p>OS finds a free frame (physical page).</p></li>
<li><p>OS stores page in frame.</p></li>
<li><p>OS sends confirmation to process.</p></li>
</ol>
<p>The process for using virtual pages is as follows:</p>
<ol>
<li><p>CPU sends virtual address to MMU.</p></li>
<li><p>MMU converts to physical address.</p></li>
<li><p>MMU checks if page is unallocated, cached, or uncached. If the
page is unallocated, an exception is thrown.</p></li>
<li><p>If the page is cached, then the MMU return a translated address
in memory.</p></li>
<li><p>Uncached pages are loaded from HDD to an empty or newly evicted
frame and the look-up tables are updated.</p></li>
</ol>
<p>Note that whenever we evict a page, the page will be updated back in
the HDD if it has changed.</p>
<h1 data-number="7" id="floating-point"><span
class="header-section-number">7</span> Floating Point</h1>
<p>Because it’s incredibly inefficient to store large binary numbers in
their complete form, the floating point system was invented to store
large numbers.</p>
<h2 data-number="7.1" id="structure"><span
class="header-section-number">7.1</span> Structure</h2>
<p>Any number that can be written as <span class="math inline">\\(A_2
\\times 2^n\\)</span> can be written in floating point format.</p>
<p>There are three components to a floating point number:</p>
<ol>
<li><p>Sign bit</p></li>
<li><p>Exponent bits</p></li>
<li><p>Fraction bits</p></li>
</ol>
<p>The first bit in any floating point number is the sign bit.</p>
<p>The <span class="math inline">\\(k\\)</span> value usually indicated
the number of bits used for storing the exponent.</p>
<p>The <span class="math inline">\\(n\\)</span> value indicates the number
of bits used for storing the fraction.</p>
<h2 data-number="7.2" id="different-forms"><span
class="header-section-number">7.2</span> Different Forms</h2>
<p>There are three different forms of floating point numbers.</p>
<h3 data-number="7.2.1" id="normalized-form"><span
class="header-section-number">7.2.1</span> Normalized Form</h3>
<p>Normalized form is the first out of three different forms of floating
point numbers.</p>
<p>All numbers in normalized form can be written as follows:</p>
<p><span class="math display">\\[(-1)^{b_{sign}} \\times (1.fraction)_2
\\times 2^{k - bias}\\]</span><span class="math display">\\[bias = 2^{k-1}
- 1\\]</span> Note that the <span class="math inline">\\(1.\\)</span> is
always constant in normalized form.</p>
<p>Normalized form is for large numbers.</p>
<h3 data-number="7.2.2" id="denormalized-form"><span
class="header-section-number">7.2.2</span> Denormalized Form</h3>
<p>Denormalized form is for small numbers. In denormalized form, the
exponent must be <span><strong>all zeros</strong></span>.</p>
<p>All numbers in denormalized form are written as:</p>
<p><span class="math display">\\[(-1)^{b_{sign}} \\times (0.fraction)_2
\\times 2^{1 - bias}\\]</span> The bias is identical to normalized
form.</p>
<h3 data-number="7.2.3" id="special-form"><span
class="header-section-number">7.2.3</span> Special Form</h3>
<p>Special Form is used for representing infinity and <code>NAN</code>
which stands for "Not a Number". In special form, the exponent must be
<span><strong>all ones</strong></span>.</p>
<p>If the floating point number is in special form, then there are two
cases:</p>
<ol>
<li><p><span class="math inline">\\(fraction = 0\\)</span></p>
<ul>
<li><p>This equals infinity.</p></li>
<li><p>Note that depending on the sign, we can have positive or negative
infinity.</p></li>
</ul></li>
<li><p><span class="math inline">\\(fraction \\neq 0\\)</span></p>
<ul>
<li><p>This is the <code>NAN</code> case.</p></li>
</ul></li>
</ol>
<h2 data-number="7.3" id="example"><span
class="header-section-number">7.3</span> Example</h2>
<p>For an example, let’s try to encode <code>0</code>.</p>
<p>We can’t use normalized form because it has a <code>1</code> sticking
at the front of the fraction part. It’s not a special case so we don’t
need special form.</p>
<p>We use denormalized form.</p>
<p><span class="math display">\\[0 = (0.0000) \\times 2^{1 -
bias}\\]</span> And we can represent a zero no matter what the bias
is.</p>
<p>Note that we can have positive or negative zeros just like we can
have positive or negative infinity.</p>
<h2 data-number="7.4" id="rounding"><span
class="header-section-number">7.4</span> Rounding</h2>
<p>Because some numbers cannot be represented in floating point format,
we will occasionally round numbers.</p>
<p>The method used most often is the round-to-even method. The idea is
the same as regular rounding rules but if we’re right in the middle of
two numbers such as <span class="math inline">\\(2.5\\)</span> then we
round to the even number so <span class="math inline">\\(2\\)</span> in
this case.</p>
<p>In binary, ones round up and zeros are even.</p>
<p>The other methods of rounding are:</p>
<ul>
<li><p>Round-up</p></li>
<li><p>Round-down</p></li>
<li><p>Round-toward-zero</p></li>
</ul>
<p>Those are all self-explanatory.</p>
<h2 data-number="7.5" id="limitations"><span
class="header-section-number">7.5</span> Limitations</h2>
<p>Remember that floating point can only represent numbers that can be
written as <span class="math inline">\\(A_2 \\times 2^n\\)</span>.</p>
<p>This means that some numbers cannot be represented accurately.</p>
<p>Another limitation is that floating point operations are not
associative, i.e. <span class="math inline">\\(a + (b + c) \\neq (a + b) +
c\\)</span>. Floating point operations are, however, commutative, i.e.
<span class="math inline">\\(a + b = b + a\\)</span>.</p>
<h1 data-number="8" id="instruction-architecture"><span
class="header-section-number">8</span> Instruction Architecture</h1>
<p>Instructions sets are the lowest level of software. All other
software gets compiled to the binary instructions which are read by the
hardware.</p>
<h2 data-number="8.1" id="instruction-structure"><span
class="header-section-number">8.1</span> Instruction Structure</h2>
<p>Instructions are separated into an opcode and data. The
<span><strong>opcode</strong></span> is the instruction type and the
<span><strong>data</strong></span> is the actual data being used for the
instruction.</p>
<h3 data-number="8.1.1" id="number-of-operands"><span
class="header-section-number">8.1.1</span> Number Of Operands</h3>
<p>Instructions usually have two or three operands.</p>
<p>Generally, instructions with three operands are for instructions like
MUL, ADD, SUB, DIV, etc.</p>
<p>Two operands are for STORE, LOAD, etc.</p>
<h3 data-number="8.1.2" id="size-of-instructions"><span
class="header-section-number">8.1.2</span> Size Of Instructions</h3>
<p>The size of instructions is usually dependent on many factors. Things
like the size of opcodes, number of addressing modes, etc. all affect
how large an instruction may be.</p>
<p>Encoding instructions is also tricky. Designers must decide between
variable and fixed sizes. Variable method allows all addresses to be
appended to the instruction whereas fixed sizes always have the same
number of operands.</p>
<h2 data-number="8.2" id="instruction-set-choices"><span
class="header-section-number">8.2</span> Instruction Set Choices</h2>
<p>When designing an instruction set, a few issues need to be
considered.</p>
<p>What operations should be implemented and how many different types.
The number of operands, if any, an operation takes also needs to be
decided.</p>
<h3 data-number="8.2.1" id="general-purpose-registers"><span
class="header-section-number">8.2.1</span> General Purpose
Registers</h3>
<p>In modern computers, general purpose registers dominate.</p>
<p>Although registers are very quick to access, we can’t have too many
of them because a lot of registers would mean longer access times and
longer addresses.</p>
<h2 data-number="8.3" id="instruction-set-classes"><span
class="header-section-number">8.3</span> Instruction Set Classes</h2>
<p>There are a few different types of classes for instruction sets:</p>
<ol>
<li><p>Stack</p></li>
<li><p>Accumulator</p></li>
<li><p>Register memory</p></li>
<li><p>Register register/load store</p></li>
</ol>
<p>All new computers use the register register/load store class. This is
because the register register class is often the fastest and uses less
memory transactions.</p>
<h3 data-number="8.3.1" id="stack"><span
class="header-section-number">8.3.1</span> Stack</h3>
<p>In this type of instruction set, all temporary results and operands
are added and retrieved from the top of a stack.</p>
<p>E.g. C = A + B would be implemented as follows:</p>
<ol>
<li><p>push A</p></li>
<li><p>push B</p></li>
<li><p>add</p></li>
<li><p>pop C</p></li>
</ol>
<h3 data-number="8.3.2" id="accumulator"><span
class="header-section-number">8.3.2</span> Accumulator</h3>
<p>This is a slightly weird class. It’s as if there is only one register
you can use so all operations must be performed within that register
called the accumulator.</p>
<p>E.g. C = A + B:</p>
<ol>
<li><p>load A</p></li>
<li><p>add B</p></li>
<li><p>store C</p></li>
</ol>
<h3 data-number="8.3.3" id="register-memory"><span
class="header-section-number">8.3.3</span> Register Memory</h3>
<p>This is when operands use one register and a memory location.</p>
<p>E.g. C = A + B:</p>
<ol>
<li><p>load R1, A</p></li>
<li><p>add R3, R1, B</p></li>
<li><p>store R3, C</p></li>
</ol>
<p>Generally, this class allows fairly dense instructions but encoding
instructions is more complex than register register.</p>
<h3 data-number="8.3.4" id="register-register"><span
class="header-section-number">8.3.4</span> Register Register</h3>
<p>This is the class that’s is, by far, the most common today. It uses
registers for operands.</p>
<p>E.g. C = A + B.</p>
<ol>
<li><p>load R1, A</p></li>
<li><p>load R2, B</p></li>
<li><p>add R3, R1, R2</p></li>
<li><p>store R3, C</p></li>
</ol>
<p>This class has fairly simple encoding with a fixed size but it does
take more instructions that some other classes.</p>
<h3 data-number="8.3.5" id="memory-memory"><span
class="header-section-number">8.3.5</span> Memory Memory</h3>
<p>This class can operate directly on memory locations.</p>
<p>E.g. C = A + B</p>
<ol>
<li><p>add C, A, B</p></li>
</ol>
<p>This is the most compact class. But, the instruction size and work
per instruction can vary quite a bit.</p>
<h3 data-number="8.3.6" id="risc-v.-cisc"><span
class="header-section-number">8.3.6</span> RISC v. CISC</h3>
<p><span><strong>RISC</strong></span> stands for reduced instruction set
computer. <span><strong>CISC</strong></span> stands for complex
instruction set computer.</p>
<p>CISC allows for many different types of instructions but it is more
complicated to implement than RISC. CISC is also harder to optimize.</p>
<p>Luckily, nowadays, designers need not choose between RISC or CISC
because of an idea Intel came up with some time ago. Intel implemented a
converter for converting CISC instructions to RISC inside their
processors.</p>
<p>This meant that RISC v. CISC made no difference to the actual
performance. Both got roughly the same performance.</p>
<h2 data-number="8.4" id="memory-1"><span
class="header-section-number">8.4</span> Memory</h2>
<p>Another big part of designing instruction sets is deciding how the
instructions can refer to memory and how memory is stored on a given
architecture.</p>
<h3 data-number="8.4.1" id="ordering"><span
class="header-section-number">8.4.1</span> Ordering</h3>
<p>In physical memory, multi-byte data can be stored in one of two
ways:</p>
<ol>
<li><p>Little-Endian</p></li>
<li><p>Big-Endian</p></li>
</ol>
<p>Most of the time, ordering is irrelevant to programmers. The only
time it really becomes relevant is when computers with different
ordering interact with one another.</p>
<h4 data-number="8.4.1.1" id="little-endian"><span
class="header-section-number">8.4.1.1</span> Little-Endian</h4>
<p>The LSByte of the multi-byte data is stored in the lower address.</p>
<h4 data-number="8.4.1.2" id="big-endian"><span
class="header-section-number">8.4.1.2</span> Big-Endian</h4>
<p>The MSByte of the multi-byte data is stored in the lower address.</p>
<h3 data-number="8.4.2" id="alignment"><span
class="header-section-number">8.4.2</span> Alignment</h3>
<p>In most architectures, you cannot place a byte at any address. There
are often restrictions on what can be placed at what address.</p>
<p>Generally speaking, data is aligned if <span class="math inline">\\(M
mod s = 0\\)</span> where <span class="math inline">\\(M\\)</span> is the
memory address of the data and <span class="math inline">\\(s\\)</span> is
the size of the data in bytes.</p>
<p>To make data aligned, the compiler with often add gaps in the
memory.</p>
<p>Structures can be aligned as well. They are just treated as large
data blocks but they follow the same rules as the small data blocks.</p>
<p>Data inside structures also has to be aligned. This means there are
often gaps littered throughout a structure. This can be troublesome for
storing things like an array of structures.</p>
<p>We can try to manually increase the compactness of structs by placing
the biggest data first.</p>
<h3 data-number="8.4.3" id="addressing-modes"><span
class="header-section-number">8.4.3</span> Addressing Modes</h3>
<p>Addressing modes are about accessing memory in different ways.</p>
<p>The whole purpose of different addressing modes is to reduce the
number of instructions necessary to achieve a task. Allowing many
different instruction modes allows denser instructions.</p>
<p>The most popular instructions are:</p>
<ul>
<li><p>Displacement is just accessing memory at a certain displacement x
from a given address in a register.</p></li>
<li><p>Immediate is just hardcoding a value in the instruction.</p></li>
<li><p>Register indirect is used to get an address from inside a
register. Displacement is often used together with register
indirect.</p></li>
</ul>
<h1 data-number="9" id="pipelining"><span
class="header-section-number">9</span> Pipelining</h1>
<p>The essence of pipelining is to separate a task into stages that
require different resources. Then, we try to complete any stage we can
at any given time.</p>
<p>A simple example is doing laundry. The
<span><strong>sequential</strong></span> version is to wait until the
entire first load is done to start the second load. The
<span><strong>pipelined</strong></span> verison is to load the second
load in the washing machine when the first has moved to the dryer.</p>
<p>Pipelining reduces overall time spent by doing things simultaneously.
But, pipelines are limited by the slowest stage.</p>
<p>There is usually <span><strong>overhead</strong></span> in pipelining
that comes from storing the results of a prior stage so that the input
to a later stage doesn’t change halfway through a stage.</p>
<p>Note that instruction level parallelism (ILP) has not been the focus
since 2005. It became too complex. The goal is now to work on
thread-level parallelism with multicores.</p>
<h2 data-number="9.1" id="formulas"><span
class="header-section-number">9.1</span> Formulas</h2>
<p>There are some useful formulas for dealing with pipelining.</p>
<p>Note that <span class="math inline">\\(N\\)</span> is the number of
stages.</p>
<p><span class="math display">\\[T_{cycle} = T_{slowest\\ stage} +
T_{overhead}\\]</span><span class="math display">\\[T_{total\\ instruction\\
time} = T + N \\times T_{overhead}\\]</span><span
class="math display">\\[ideal\\ speedup =
\\frac{T_{unpipelined}}{T_{overhead}}\\]</span> Note that the <span
class="math inline">\\(CPI_{avg} = 1\\)</span> because the clock is based
on the slowest stage and the pipeline is limited by the slowest
stage.</p>
<p>Sometimes, a stall factor can affect the CPI.</p>
<h2 data-number="9.2" id="mips-example"><span
class="header-section-number">9.2</span> MIPS Example</h2>
<p>In the MIPS architecture, instructions have five stages:</p>
<ol>
<li><p>Instruction Fetch (IF)</p></li>
<li><p>Instruction Decode (ID)</p></li>
<li><p>Execute (EX)</p></li>
<li><p>Memory Access (MEM)</p></li>
<li><p>Write Back (WB)</p></li>
</ol>
<h2 data-number="9.3" id="hazards"><span
class="header-section-number">9.3</span> Hazards</h2>
<p>Pipelining isn’t necessarily straight-forward. There are three main
hazards to pipelining:</p>
<ul>
<li><p>Structural hazards</p></li>
<li><p>Data hazards</p></li>
<li><p>Control hazards</p></li>
</ul>
<h3 data-number="9.3.1" id="structural-hazards"><span
class="header-section-number">9.3.1</span> Structural Hazards</h3>
<p>Structural hazards occur when two or more instructions require the
same resource. In this case, the best approach is to stall an
instruction for a cycle.</p>
<p>E.g. let’s say data references are in 40% of all the instructions.
The CPI without any hazards is 1.</p>
<p>The CPI with the hazards is <span class="math inline">\\(1 + (0.4*1) =
1.4\\)</span>. To clarify, it is <span class="math inline">\\(CPI_{no\\
hazard} + (Percent_{hazard} * CPI_{no\\ hazard}\\)</span>.</p>
<p>To fix structural hazards, we can add more hardware to allow more
instructions to use the same type of resource at the same time but this
is a costly approach. Plus, structural hazards are relatively rare.</p>
<h3 data-number="9.3.2" id="data-hazard"><span
class="header-section-number">9.3.2</span> Data Hazard</h3>
<p>Data hazards occur when a later instruction needs data that is
updated in a previous instruction.</p>
<h4 data-number="9.3.2.1" id="raw-hazard"><span
class="header-section-number">9.3.2.1</span> RAW Hazard</h4>
<p>RAW stands for <span><strong>read after write</strong></span> hazard.
An example might an instruction that stores a result in R1. The next
instruction uses R1 as an operand. In this case, R1 might be read in the
second instruction before it was updated in the first instruction.</p>
<h4 data-number="9.3.2.2" id="war-hazard"><span
class="header-section-number">9.3.2.2</span> WAR Hazard</h4>
<p>WAR stands for <span><strong>write after read</strong></span> hazard.
We could also have a situation where the previous instruction is reading
a register that the next instruction is changing.</p>
<h4 data-number="9.3.2.3" id="waw-hazard"><span
class="header-section-number">9.3.2.3</span> WAW Hazard</h4>
<p>WAW stands for <span><strong>write after write</strong></span>
hazard. We could have another situation where we write to a register in
two consecutive instructions.</p>
<p>To deal with these data hazards we can have something called
<span><strong>forwarding</strong></span>. Forwarding allows forwarding
of updated values directly to other instructions’ stages that need it
instead of waiting to be written to a register.</p>
<p>Note that even with forwarding, we can have hazards. Sometimes, we
still need to have some stalls in between instructions.</p>
<p>To improve the CPI with data hazards, we can also do scheduling and
hardware speculation.</p>
<h3 data-number="9.3.3" id="control-hazard"><span
class="header-section-number">9.3.3</span> Control Hazard</h3>
<p>Control hazards occur when the program flow gets to branches which
may or may not be taken.</p>
<p>There are a few solutions to this problem.</p>
<p>We could redo the fetch for the instruction after the branch. Note
that this is possible because the next instruction will be fetched when
the branch is decoded. But this approach is very detrimental performance
wise.</p>
<p>Another solution is to predict that the branch will not be taken and
proceed as normal. If the branch is not taken, the pipeline will be
working well but even if it is taken, we didn’t waste any time.</p>
<p>We could also predict that the branch is taken and if we had the
target address of the branch before execution, we could start pipelining
destination instructions.</p>
<p>Another solution is to put a useful instruction that needs to be
executed regardless of whether the branch is taken after the branch
instruction. This approach is similar to predict not taken.</p>
<p>Another means of improving performance is to get better at predicting
whether a branch will be taken or not. The key to doing this is noticing
that individual branches will heavily favour being taken/not taken.</p>
<p>We can also do loop unrolling to help reduce the CPI and increase
performance.</p>
<h2 data-number="9.4" id="scheduling"><span
class="header-section-number">9.4</span> Scheduling</h2>
<p>We can use scheduling and pipelining together to improve
performance.</p>
<p>The idea behind scheduling is to reorder instructions such that the
performance is improving with no change in the results.</p>
<h3 data-number="9.4.1" id="static-scheduling"><span
class="header-section-number">9.4.1</span> Static Scheduling</h3>
<p>Static scheduling is done by the compiler.</p>
<h3 data-number="9.4.2" id="dynamic-scheduling"><span
class="header-section-number">9.4.2</span> Dynamic Scheduling</h3>
<p>Dynamic scheduling is done by hardware.</p>
<p>Dynamic scheduling does not need to know about the architecture and
it works for cases where dependencies are not known at compile time.</p>
<p>The disadvantages are that it is fairly complex to implement and it
complicates exceptions.</p>
<p>Another complication is that exceptions must occur in order even if
the instructions are not in order.</p>
<h3 data-number="9.4.3" id="tomasulos-algorithm"><span
class="header-section-number">9.4.3</span> Tomasulo’s Algorithm</h3>
<p>Tomasulo’s algorithm is a way to implement dynamic scheduling.</p>
<p>There are three steps to every instruction:</p>
<ol>
<li><p>Issue</p></li>
<li><p>Execute</p></li>
<li><p>Write</p></li>
</ol>
<p>First, we issue the instruction to an empty reservation station for
that type of instruction. If the operands are in registers, we copy the
value, if possible, or we just refer to another reservation station that
will produce the required value. If no reservation station is available,
we need to stall.</p>
<p>Second, we execute the instruction if all the operands are available.
If any operands are not available, we monitor the common data bus which
will place the required value into the reservation station when it is
available.</p>
<p>Third, the result is ready so we write it to the common data bus so
that it can update all the registers, buffers, and stations that require
that result.</p>
<p>Note that Tomasulu’s algorithm finishes instructions out of
order.</p>
<h3 data-number="9.4.4" id="hardware-speculation"><span
class="header-section-number">9.4.4</span> Hardware Speculation</h3>
<p>We can improve Tomasulo’s algorithm but make it handle control
hazards better if we can execute instructions out of order but commit
them in order.</p>
<p>When an instruction executes, it is kept in a <span><strong>reorder
buffer</strong></span> instead of writing to a station. This means that
we never update any registers with the wrong values because the results
are never committed.</p>
<p>The ROB, reorder buffer, stores four fields:</p>
<ul>
<li><p>Instruction type</p></li>
<li><p>Destination</p></li>
<li><p>Value</p></li>
<li><p>Ready</p></li>
</ul>
<p>For an instruction to be committed, it must be at the top of the ROB
because the ROB behaves like a queue. This makes it easy to discard
speculative results and incorrect branch predictions.</p>
<p>The four steps of the speculative version of Tomasulo’s algorithm
are:</p>
<ol>
<li><p>Issue</p></li>
<li><p>Execution</p></li>
<li><p>Write result</p></li>
<li><p>Commit</p></li>
</ol>
<p>The differences between the speculative version and the
non-speculative version are that write result doesn’t change values in
registers but does send an updated value to the CDB.</p>
<p>This version of Tomasulo’s also avoids imprecise exceptions. All
exceptions occur in order.</p>
<h2 data-number="9.5" id="loop-unrolling"><span
class="header-section-number">9.5</span> Loop Unrolling</h2>
<p>We can improve things even more after scheduling for loops.</p>
<p>The bottleneck after scheduling in a loop becomes the overhead
instructions. The idea behind loop unrolling is to take many iterations
of a loop and combine them together in one longer iteration to reduce
the overall overhead.</p>
<p>The downsides to loop unrolling are that the code is larger and we
need more registers for unrolling more iterations.</p>
<h2 data-number="9.6" id="dynamic-branch-prediction"><span
class="header-section-number">9.6</span> Dynamic Branch Prediction</h2>
<p>This section is important enough to deserve its own section. As said
above, if we can predict whether a branch will be taken or not taken, we
can improve pipelining significantly.</p>
<p>One simple way to do it is to remember whether a branch was taken
last time. We can keep an array of prediction where the correct index is
based on the lower bits of a branch address.</p>
<h3 data-number="9.6.1" id="bit-prediction-scheme"><span
class="header-section-number">9.6.1</span> 1-Bit Prediction Scheme</h3>
<p>Let’s keep a one bit record of the last time we got to that branch.
We invert the bit any time the prediction is wrong.</p>
<p>We predict branch taken if the prediction bit is 1 and branch not
taken if the prediction bit is a 0.</p>
<p>This works very well but if there is only one branch not taken in a
series of taken branches, this approach will predict incorrectly
twice.</p>
<p>Once when the branch is not taken and it predicted taken but again on
the next one because it will predict not taken since the bit would be
flipped.</p>
<h3 data-number="9.6.2" id="bit-prediction-scheme-1"><span
class="header-section-number">9.6.2</span> 2-Bit Prediction Scheme</h3>
<p>This approach is very similar to the 1-bit approach but with one
advantage. The two bit approach needs to predict incorrectly twice in a
row to change its prediction.</p>
<p>Let’s take the previous example with a series of taken branches with
one not taken. With a one bit approach, we guessed incorrectly
twice.</p>
<p>But with a two bit approach, just one incorrect prediction won’t
change our prediction so the branch right after the not taken will still
be predicted to be taken.</p>
<h3 data-number="9.6.3" id="correlated-prediction-scheme"><span
class="header-section-number">9.6.3</span> Correlated Prediction
Scheme</h3>
<p>A more complicated type of prediction scheme is to consider whether
other branches were taken or not.</p>
<p>Let’s look at the last two branches. So we could have the following
combinations:</p>
<ul>
<li><p>taken, taken</p></li>
<li><p>taken, untaken</p></li>
<li><p>untaken, taken</p></li>
<li><p>untaken, untaken</p></li>
</ul>
<p>For each of these combinations, we have a different predictor.</p>
<p>For a <span class="math inline">\\((m,n)\\)</span> predictor, we choose
from <span class="math inline">\\(2^m\\)</span> branch predictors
(combinations) and there is an n-bit predictor for a single branch. Note
that <span class="math inline">\\(m\\)</span> is the number of previous
branches we look at and <span class="math inline">\\(n\\)</span> is the
number of bits we use as a prediction scheme.</p>
<p>Basically, we keep <span class="math inline">\\(2^m\\)</span> branch
combinations and each combination has a certain number of prediction
entries. These prediction entries work the same way as the prediction
entries for the simpler schemes.</p>
<p>We select the correct branch combination using a global branch
history register.</p>
<h3 data-number="9.6.4" id="tournament-predicton-scheme"><span
class="header-section-number">9.6.4</span> Tournament Predicton
Scheme</h3>
<p>There is an even more complicated prediction scheme that we can
use.</p>
<p>So far, we’ve only talked about local and global prediction schemes
separately. The one and two bit prediction were local prediction schemes
and the correlated branch prediction was a global prediction scheme.</p>
<p>We can have a new more complicated prediction scheme that chooses
between the global and local prediction scheme depending on which one is
more accurate.</p>
<p>A two bit tracker is used similarly to the two bit prediction scheme
to track whether to use the global or local prediction scheme.</p>
<h3 data-number="9.6.5" id="branch-target-buffers"><span
class="header-section-number">9.6.5</span> Branch Target Buffers</h3>
<p>BTB are buffers that are like a cache for branch targets for cases
when the branch is predicted taken.</p>
<p>This helps pipeline the instructions at the destination PC to
continue seamless pipelining.</p>
<p>We can also do a variation of this by storing the target instruction
instead of the address. This way, it’s even faster.</p>
<h2 data-number="9.7" id="exceptions"><span
class="header-section-number">9.7</span> Exceptions</h2>
<p>Exceptions change the flow of the program for special cases.</p>
<h3 data-number="9.7.1" id="asynchronous-exceptions"><span
class="header-section-number">9.7.1</span> Asynchronous Exceptions</h3>
<p>These exceptions, also called interrupts, are caused by things
outside of the processor.</p>
<p>These may be caused by things like the reset button, or IO
actions.</p>
<h3 data-number="9.7.2" id="synchronous-exceptions"><span
class="header-section-number">9.7.2</span> Synchronous Exceptions</h3>
<p>These are caused by instructions from inside the processor.</p>
<p>These are things like traps, faults, and aborts.</p>
<h4 data-number="9.7.2.1" id="traps"><span
class="header-section-number">9.7.2.1</span> Traps</h4>
<p>These are intentional exceptions such as breakpoint traps, etc. They
return control back to the next instruction.</p>
<h4 data-number="9.7.2.2" id="faults"><span
class="header-section-number">9.7.2.2</span> Faults</h4>
<p>These are unintentional but sometimes recoverable. These are cause by
divide by zero, page faults, etc. These exceptions may re-execute the
faulty instruction or stop execution.</p>
<h4 data-number="9.7.2.3" id="aborts"><span
class="header-section-number">9.7.2.3</span> Aborts</h4>
<p>These are unintentional and unrecoverable. These abort the program
and stop execution.</p>
`;export{e as default};
