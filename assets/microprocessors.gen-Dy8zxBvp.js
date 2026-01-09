const e=`<nav id="TOC">
<ul>
<li><a href="#fundamentals" id="toc-fundamentals"><span
class="toc-section-number">1</span> fundamentals</a>
<ul>
<li><a href="#microprocessors" id="toc-microprocessors"><span
class="toc-section-number">1.1</span> microprocessors</a></li>
<li><a href="#application-of-microprocessors"
id="toc-application-of-microprocessors"><span
class="toc-section-number">1.2</span> application of
microprocessors</a></li>
<li><a href="#history" id="toc-history"><span
class="toc-section-number">1.3</span> history</a></li>
<li><a href="#advantages-of-microprocessors"
id="toc-advantages-of-microprocessors"><span
class="toc-section-number">1.4</span> advantages of
microprocessors</a></li>
<li><a href="#disadvantages-of-microprocessors"
id="toc-disadvantages-of-microprocessors"><span
class="toc-section-number">1.5</span> disadvantages of
microprocessors</a></li>
<li><a href="#terminology" id="toc-terminology"><span
class="toc-section-number">1.6</span> terminology</a></li>
<li><a href="#microprocessor-family"
id="toc-microprocessor-family"><span
class="toc-section-number">1.7</span> microprocessor family</a></li>
<li><a href="#single-bus-architecture"
id="toc-single-bus-architecture"><span
class="toc-section-number">1.8</span> single bus architecture</a>
<ul>
<li><a href="#system-clocks" id="toc-system-clocks"><span
class="toc-section-number">1.8.1</span> system clocks</a></li>
<li><a href="#system-buses" id="toc-system-buses"><span
class="toc-section-number">1.8.2</span> system buses</a></li>
<li><a href="#bus-operations" id="toc-bus-operations"><span
class="toc-section-number">1.8.3</span> bus operations</a></li>
<li><a href="#von-neumann-features" id="toc-von-neumann-features"><span
class="toc-section-number">1.8.4</span> von neumann features</a></li>
</ul></li>
<li><a href="#two-bus-architecture" id="toc-two-bus-architecture"><span
class="toc-section-number">1.9</span> two bus architecture</a></li>
<li><a href="#elements-of-a-cpu" id="toc-elements-of-a-cpu"><span
class="toc-section-number">1.10</span> elements of a cpu</a>
<ul>
<li><a href="#programmers-model" id="toc-programmers-model"><span
class="toc-section-number">1.10.1</span> programmer’s model</a></li>
<li><a href="#invisible-side" id="toc-invisible-side"><span
class="toc-section-number">1.10.2</span> invisible side</a></li>
</ul></li>
<li><a href="#execution-of-an-instruction"
id="toc-execution-of-an-instruction"><span
class="toc-section-number">1.11</span> execution of an
instruction</a></li>
<li><a href="#memory" id="toc-memory"><span
class="toc-section-number">1.12</span> memory</a></li>
<li><a href="#input-and-output-devices"
id="toc-input-and-output-devices"><span
class="toc-section-number">1.13</span> input and output devices</a></li>
<li><a href="#register-transfer-language-rtl"
id="toc-register-transfer-language-rtl"><span
class="toc-section-number">1.14</span> register transfer language
(RTL)</a></li>
<li><a href="#numerical-data-representation"
id="toc-numerical-data-representation"><span
class="toc-section-number">1.15</span> numerical data representation</a>
<ul>
<li><a href="#positional-number-system"
id="toc-positional-number-system"><span
class="toc-section-number">1.15.1</span> positional number
system</a></li>
<li><a href="#precision" id="toc-precision"><span
class="toc-section-number">1.15.2</span> precision</a></li>
<li><a href="#review-210" id="toc-review-210"><span
class="toc-section-number">1.15.3</span> review 210</a></li>
<li><a href="#a-note-on-values" id="toc-a-note-on-values"><span
class="toc-section-number">1.15.4</span> a note on values</a></li>
<li><a href="#data-width" id="toc-data-width"><span
class="toc-section-number">1.15.5</span> data width</a></li>
</ul></li>
<li><a href="#binary-addition" id="toc-binary-addition"><span
class="toc-section-number">1.16</span> binary addition</a></li>
<li><a href="#data-codes" id="toc-data-codes"><span
class="toc-section-number">1.17</span> data codes</a></li>
</ul></li>
<li><a href="#computer-architecture"
id="toc-computer-architecture"><span class="toc-section-number">2</span>
computer architecture</a>
<ul>
<li><a href="#assembly-language" id="toc-assembly-language"><span
class="toc-section-number">2.1</span> assembly language</a>
<ul>
<li><a href="#code-sample" id="toc-code-sample"><span
class="toc-section-number">2.1.1</span> code sample</a></li>
<li><a href="#some-terminology" id="toc-some-terminology"><span
class="toc-section-number">2.1.2</span> some terminology</a></li>
<li><a href="#assembly-process" id="toc-assembly-process"><span
class="toc-section-number">2.1.3</span> assembly process</a></li>
<li><a href="#machine-language-instructions"
id="toc-machine-language-instructions"><span
class="toc-section-number">2.1.4</span> machine language
instructions</a></li>
<li><a href="#memory-maps" id="toc-memory-maps"><span
class="toc-section-number">2.1.5</span> memory maps</a></li>
<li><a href="#assembly-instruction-format"
id="toc-assembly-instruction-format"><span
class="toc-section-number">2.1.6</span> assembly instruction
format</a></li>
<li><a href="#assembly-directives" id="toc-assembly-directives"><span
class="toc-section-number">2.1.7</span> assembly directives</a></li>
</ul></li>
<li><a href="#mcf5271-programmers-model"
id="toc-mcf5271-programmers-model"><span
class="toc-section-number">2.2</span> MCF5271 programmers’ model</a>
<ul>
<li><a href="#data-registers" id="toc-data-registers"><span
class="toc-section-number">2.2.1</span> data registers</a></li>
<li><a href="#address-registers" id="toc-address-registers"><span
class="toc-section-number">2.2.2</span> address registers</a></li>
<li><a href="#program-counter" id="toc-program-counter"><span
class="toc-section-number">2.2.3</span> program counter</a></li>
<li><a href="#status-register" id="toc-status-register"><span
class="toc-section-number">2.2.4</span> status register</a></li>
</ul></li>
<li><a href="#data-alignment" id="toc-data-alignment"><span
class="toc-section-number">2.3</span> data alignment</a></li>
<li><a href="#mcf5271-instruction-set-overview"
id="toc-mcf5271-instruction-set-overview"><span
class="toc-section-number">2.4</span> MCF5271 instruction set
overview</a>
<ul>
<li><a href="#data-movement-instructions"
id="toc-data-movement-instructions"><span
class="toc-section-number">2.4.1</span> data movement
instructions</a></li>
<li><a href="#squence-control-instructors"
id="toc-squence-control-instructors"><span
class="toc-section-number">2.4.2</span> squence control
instructors</a></li>
<li><a href="#math-instructions" id="toc-math-instructions"><span
class="toc-section-number">2.4.3</span> math instructions</a></li>
<li><a href="#logic-instructions" id="toc-logic-instructions"><span
class="toc-section-number">2.4.4</span> logic instructions</a></li>
</ul></li>
</ul></li>
<li><a href="#addressing-modes" id="toc-addressing-modes"><span
class="toc-section-number">3</span> addressing modes</a>
<ul>
<li><a href="#different-modes" id="toc-different-modes"><span
class="toc-section-number">3.1</span> different modes</a></li>
</ul></li>
<li><a href="#subroutines" id="toc-subroutines"><span
class="toc-section-number">4</span> subroutines</a>
<ul>
<li><a href="#stack" id="toc-stack"><span
class="toc-section-number">4.1</span> stack</a></li>
<li><a href="#basic-instructions" id="toc-basic-instructions"><span
class="toc-section-number">4.2</span> basic instructions</a></li>
<li><a href="#stack-frames" id="toc-stack-frames"><span
class="toc-section-number">4.3</span> stack frames</a></li>
<li><a href="#parameter-passing" id="toc-parameter-passing"><span
class="toc-section-number">4.4</span> parameter passing</a></li>
</ul></li>
<li><a href="#interfacing" id="toc-interfacing"><span
class="toc-section-number">5</span> interfacing</a>
<ul>
<li><a href="#parallel-bus-connected-devices"
id="toc-parallel-bus-connected-devices"><span
class="toc-section-number">5.1</span> parallel bus connected
devices</a></li>
<li><a href="#on-chip-peripherals" id="toc-on-chip-peripherals"><span
class="toc-section-number">5.2</span> on chip peripherals</a></li>
<li><a href="#serial-communication-peripherals"
id="toc-serial-communication-peripherals"><span
class="toc-section-number">5.3</span> serial communication
peripherals</a></li>
<li><a href="#general-purpose-io" id="toc-general-purpose-io"><span
class="toc-section-number">5.4</span> general purpose I/O</a></li>
<li><a href="#voltage-current-and-timing"
id="toc-voltage-current-and-timing"><span
class="toc-section-number">5.5</span> voltage, current, and
timing</a></li>
</ul></li>
<li><a href="#exceptions" id="toc-exceptions"><span
class="toc-section-number">6</span> exceptions</a>
<ul>
<li><a href="#interrupts" id="toc-interrupts"><span
class="toc-section-number">6.1</span> interrupts</a></li>
<li><a href="#vector-table" id="toc-vector-table"><span
class="toc-section-number">6.2</span> vector table</a></li>
<li><a href="#exception-processing" id="toc-exception-processing"><span
class="toc-section-number">6.3</span> exception processing</a></li>
</ul></li>
</ul>
</nav>
<h1 data-number="1" id="fundamentals"><span
class="header-section-number">1</span> fundamentals</h1>
<h2 data-number="1.1" id="microprocessors"><span
class="header-section-number">1.1</span> microprocessors</h2>
<ul>
<li><p>the brains of a computer on a single integrated circuit</p></li>
<li><p>basically a sequential state machine</p></li>
</ul>
<h2 data-number="1.2" id="application-of-microprocessors"><span
class="header-section-number">1.2</span> application of
microprocessors</h2>
<ul>
<li><p>everywhere</p>
<ul>
<li><p>general purpose</p></li>
<li><p>special purpose</p></li>
<li><p>embedded</p>
<ul>
<li><p>for a dedicated task</p></li>
</ul></li>
</ul></li>
</ul>
<h2 data-number="1.3" id="history"><span
class="header-section-number">1.3</span> history</h2>
<ul>
<li><p>intel 4004 in 1971</p></li>
<li><p>amd came later</p></li>
<li><p>motorola made coldfire</p></li>
<li><p>moore’s law</p>
<ul>
<li><p>postulated in 75</p></li>
<li><p>predicts doubling of transistors every couple of years</p></li>
</ul></li>
</ul>
<h2 data-number="1.4" id="advantages-of-microprocessors"><span
class="header-section-number">1.4</span> advantages of
microprocessors</h2>
<ul>
<li><p>revolutionized digital systems</p></li>
<li><p>programmable for general purpose</p></li>
<li><p>compact</p></li>
<li><p>performance was great</p></li>
<li><p>cost effective</p></li>
<li><p>reliable</p></li>
</ul>
<h2 data-number="1.5" id="disadvantages-of-microprocessors"><span
class="header-section-number">1.5</span> disadvantages of
microprocessors</h2>
<ul>
<li><p>steep learning curve</p></li>
<li><p>unforgiving in terms of mistakes</p></li>
<li><p>development equipment, time, and money needed to work</p></li>
</ul>
<h2 data-number="1.6" id="terminology"><span
class="header-section-number">1.6</span> terminology</h2>
<ul>
<li><p>CPU: central processing unit</p></li>
<li><p>muP: microprocessor</p></li>
<li><p>muPU: microprocessor unit</p></li>
<li><p>microcomputer: system built on a microprocessor</p></li>
<li><p>MCU: microcontroller unit with extra circuitry</p></li>
<li><p>DSP: digital signal processing. better for numerical intensive
operations</p></li>
</ul>
<h2 data-number="1.7" id="microprocessor-family"><span
class="header-section-number">1.7</span> microprocessor family</h2>
<ul>
<li><p>intel</p>
<ul>
<li><p>(71), 8008 (72), ... , core i7 (2008)</p></li>
</ul></li>
<li><p>motorola</p>
<ul>
<li><p>(74), 6809 (79), ... , coldfire (94)</p></li>
</ul></li>
<li><p>amd</p>
<ul>
<li><p>athelon (01), ... , phenom II (09)</p></li>
</ul></li>
<li><p>generally, these manufacturers have upwards/forward compatibility
meaning that the future processors will have all the functionality of
the previous ones</p></li>
<li><p>we use the MCF 5270 MCU</p>
<ul>
<li><p>it has features we don’t use</p></li>
</ul></li>
</ul>
<h2 data-number="1.8" id="single-bus-architecture"><span
class="header-section-number">1.8</span> single bus architecture</h2>
<ul>
<li><p>von meumann</p></li>
<li><p>there are three buses</p>
<ul>
<li><p>address bus</p></li>
<li><p>data bus</p></li>
<li><p>control bus</p></li>
</ul></li>
<li><p>there are three components</p>
<ul>
<li><p>cpu</p></li>
<li><p>main memory</p></li>
<li><p>i/o devices</p></li>
</ul></li>
<li><p>only the cpu writes to the address bus</p></li>
</ul>
<h3 data-number="1.8.1" id="system-clocks"><span
class="header-section-number">1.8.1</span> system clocks</h3>
<ul>
<li><p>clocks are to synchronize the different components</p></li>
<li><p>the higher the clock speed, the more instructions can be
executed</p></li>
<li><p>overlocking is making the clock frequency higher than the
recommended frequency</p></li>
</ul>
<h3 data-number="1.8.2" id="system-buses"><span
class="header-section-number">1.8.2</span> system buses</h3>
<ul>
<li><p>bus is a group of wires</p>
<ul>
<li><p>e.g. 4 bit data bus width of the data bus is 4</p></li>
</ul></li>
<li><p>the three primary buses</p>
<ul>
<li><p>address bus</p>
<ul>
<li><p>used by the cpu to tell the system what memory location is being
used</p></li>
</ul></li>
<li><p>data bus</p>
<ul>
<li><p>used to communicate information</p></li>
<li><p>read data from device to cpu</p></li>
<li><p>write data from cpu to device</p></li>
<li><p>data bus width affects the amount of information that can be
transferred at a time</p></li>
</ul></li>
<li><p>control bus</p>
<ul>
<li><p>coordinate the address and data bus</p></li>
<li><p>signals controlled by cpu</p></li>
<li><p>has signals such as: R/W, WE, OE</p></li>
</ul></li>
</ul></li>
</ul>
<h3 data-number="1.8.3" id="bus-operations"><span
class="header-section-number">1.8.3</span> bus operations</h3>
<ul>
<li><p>types of sequences</p>
<ul>
<li><p>read cycle</p></li>
<li><p>write cycle</p></li>
<li><p>read modify write cycles</p></li>
<li><p>interrupt acknowledgement cycle</p></li>
</ul></li>
<li><p>an instruction can take more than one bus cycle</p></li>
</ul>
<h3 data-number="1.8.4" id="von-neumann-features"><span
class="header-section-number">1.8.4</span> von neumann features</h3>
<ul>
<li><p>advantages</p>
<ul>
<li><p>simple</p></li>
<li><p>program is data</p></li>
<li><p>simple assembler</p></li>
<li><p>simple compiler</p></li>
</ul></li>
<li><p>disadvantages</p>
<ul>
<li><p>limited efficiency</p></li>
<li><p>slow input/output</p></li>
</ul></li>
</ul>
<h2 data-number="1.9" id="two-bus-architecture"><span
class="header-section-number">1.9</span> two bus architecture</h2>
<ul>
<li><p>harvard architecture</p></li>
<li><p>takes care of the bottle neck</p></li>
<li><p>uses two buses to speed up system</p></li>
<li><p>one bus is attached to the i/o memory and data memory and the
other bus is attached to the program memory</p></li>
<li><p>von neumann can emulate harvard with caches</p></li>
</ul>
<h2 data-number="1.10" id="elements-of-a-cpu"><span
class="header-section-number">1.10</span> elements of a cpu</h2>
<h3 data-number="1.10.1" id="programmers-model"><span
class="header-section-number">1.10.1</span> programmer’s model</h3>
<ul>
<li><p>program counter (PC)</p>
<ul>
<li><p>keeps track of the address of the next instruction</p></li>
</ul></li>
<li><p>data register (Dx)</p>
<ul>
<li><p>stores operands and results</p></li>
</ul></li>
<li><p>address register (Ax)</p>
<ul>
<li><p>for stroing addresses of operands and results</p></li>
</ul></li>
<li><p>status register (SR)</p>
<ul>
<li><p>keeps summary of result of an operation like carry and
stuf</p></li>
</ul></li>
<li><p>control register (CR)</p>
<ul>
<li><p>often combined with SR</p></li>
<li><p>controls things like sleep, interrupts</p></li>
</ul></li>
</ul>
<h3 data-number="1.10.2" id="invisible-side"><span
class="header-section-number">1.10.2</span> invisible side</h3>
<ul>
<li><p>instruction register (IR)</p>
<ul>
<li><p>the instructions are decoded to find purpose</p></li>
</ul></li>
<li><p>arithmatic and logic unit (ALU)</p>
<ul>
<li><p>manipulates data and addresses according to instructions</p></li>
</ul></li>
<li><p>bus interface logic</p>
<ul>
<li><p>control</p></li>
<li><p>address</p></li>
<li><p>data</p></li>
</ul></li>
<li><p>others</p>
<ul>
<li><p>exception and interrupt handling</p></li>
<li><p>memory management</p></li>
<li><p>floating point unit</p></li>
<li><p>branch prediction logic</p></li>
</ul></li>
<li><p>register: a piece of internal RAM that is implicitly referred to
rather than bus interface logic</p></li>
</ul>
<h2 data-number="1.11" id="execution-of-an-instruction"><span
class="header-section-number">1.11</span> execution of an
instruction</h2>
<ul>
<li><p>examples: MOVE, ADD, SUB, SWAP</p></li>
<li><p>cycle</p>
<ul>
<li><p>fetch instruction</p>
<ul>
<li><p>the PC value is placed on the address bus</p></li>
<li><p>read the instruction into the IR</p></li>
</ul></li>
<li><p>decode the instruction</p>
<ul>
<li><p>what needs to be done</p></li>
</ul></li>
<li><p>fetch more info (optional)</p>
<ul>
<li><p>get more information</p></li>
</ul></li>
<li><p>execute</p>
<ul>
<li><p>perform operation</p></li>
<li><p>all cpu registers are updated</p></li>
<li><p>increment PC</p></li>
<li><p>execution may take more than one cpu cycle</p></li>
</ul></li>
</ul></li>
</ul>
<h2 data-number="1.12" id="memory"><span
class="header-section-number">1.12</span> memory</h2>
<ul>
<li><p>memory holds info in binary</p></li>
<li><p>location of info is specified by address</p></li>
<li><p>number of bits for each piece of info is device specific</p></li>
<li><p>RAM: random access memory</p>
<ul>
<li><p>info can be written or read</p></li>
<li><p>types</p>
<ul>
<li><p>SRAM: static RAM (fast, expensive, static)</p></li>
<li><p>DRAM: dynamic RAM (slow, cheap, refreshes)</p></li>
</ul></li>
</ul></li>
<li><p>ROM: read only memory</p>
<ul>
<li><p>info can only be read</p>
<ul>
<li><p>e.g. EEPROM, EPROM, Flash, Mask ROM</p></li>
</ul></li>
<li><p>memory map</p>
<ul>
<li><p>an 8 x 4 piece of memory has 8 addresses with 4 bits assigned to
each address</p></li>
<li><p>number of address lines</p>
<ul>
<li><p>each address needs a unique id</p></li>
<li><p>similar to last semester <span class="math inline">\\(2;n &gt;
num_{addresses}\\)</span></p></li>
<li><p>e.g. 8 addresses require 3 address lines</p></li>
</ul></li>
<li><p>number of data lines</p>
<ul>
<li><p>depends on how many bits each address is assigned to</p></li>
</ul></li>
</ul></li>
</ul></li>
</ul>
<h2 data-number="1.13" id="input-and-output-devices"><span
class="header-section-number">1.13</span> input and output devices</h2>
<ul>
<li><p>these actually interface with the world</p></li>
<li><p>input examples</p>
<ul>
<li><p>keyboard</p></li>
<li><p>mouse</p></li>
<li><p>A/D converter</p></li>
</ul></li>
<li><p>output examples</p>
<ul>
<li><p>monitor</p></li>
<li><p>printer</p></li>
<li><p>D/A converter</p></li>
</ul></li>
<li><p>both</p>
<ul>
<li><p>ethernet</p></li>
<li><p>usb</p></li>
</ul></li>
<li><p>devices like these are often connected via its address and data
buses</p></li>
<li><p>they are basically mapped to memory</p></li>
</ul>
<h2 data-number="1.14" id="register-transfer-language-rtl"><span
class="header-section-number">1.14</span> register transfer language
(RTL)</h2>
<ul>
<li><p>shorthand for assembly concepts</p></li>
<li><p><code>[]</code> denotes the contents</p>
<ul>
<li><p>e.g. <code>[PC]</code> are the contents of the program
counter</p></li>
<li><p>e.g. <code>[M(0x7234)]</code> are the contents of memory location
<span class="math inline">\\(0x7234_{16}\\)</span></p></li>
</ul></li>
<li><p>() indicates a memory location</p>
<ul>
<li><p>e.g. M(100) is the memory location <span
class="math inline">\\(100_{10}\\)</span></p></li>
</ul></li>
<li><p>example: <code>[PC] &lt;- 4</code> means places value 4 in the PC
register</p></li>
</ul>
<h2 data-number="1.15" id="numerical-data-representation"><span
class="header-section-number">1.15</span> numerical data
representation</h2>
<ul>
<li><p>signed and unsigned numbers</p></li>
<li><p>codes</p>
<ul>
<li><p>ascii</p></li>
<li><p>bcd</p></li>
</ul></li>
</ul>
<h3 data-number="1.15.1" id="positional-number-system"><span
class="header-section-number">1.15.1</span> positional number
system</h3>
<ul>
<li><p>basically:</p>
<ul>
<li><p><span class="math inline">\\(12 = 1*10;1 +
2*10;0\\)</span></p></li>
</ul></li>
<li><p>it continue on the other side of the radix point (decimal
point)</p></li>
<li><p>review from ece 210</p>
<ul>
<li><p>divide by new base and read remainders up</p></li>
<li><p>multiply by new base and read whole numbers down</p></li>
</ul></li>
</ul>
<h3 data-number="1.15.2" id="precision"><span
class="header-section-number">1.15.2</span> precision</h3>
<ul>
<li><p>number of digits required for a certain precision depends on
base</p></li>
<li><p>formula: <span class="math inline">\\(\\frac{1}{R;k} &lt;
precision_{10}\\)</span></p></li>
<li><p>example: <span class="math inline">\\(\\frac{1}{2;k} &lt;
0.1_{10}\\)</span> <span class="math inline">\\(\\frac{1}{2;4} &lt;
0.1\\)</span></p></li>
<li><p>in essence, it’s the largest k needed to make the inequality
true</p></li>
</ul>
<h3 data-number="1.15.3" id="review-210"><span
class="header-section-number">1.15.3</span> review 210</h3>
<ul>
<li><p>converting between binary, octal, decimal, and
hexadecimal</p></li>
<li><p>bcd</p></li>
</ul>
<h3 data-number="1.15.4" id="a-note-on-values"><span
class="header-section-number">1.15.4</span> a note on values</h3>
<ul>
<li><p>values are real but the way we represent them is an
abstraction</p></li>
</ul>
<h3 data-number="1.15.5" id="data-width"><span
class="header-section-number">1.15.5</span> data width</h3>
<ul>
<li><p>size of memory dictates what range of numbers can be stores
there</p></li>
<li><p>signed <span class="math inline">\\(-2;{n-1} \\le x \\le
2;{n-1}-1\\)</span></p></li>
<li><p>unsigned <span class="math inline">\\(0 \\le x \\le
2;{n-1}\\)</span></p></li>
<li><p>data sizes</p>
<ul>
<li><p>nibble is 4 bits</p></li>
<li><p>byte is 8 bits</p></li>
<li><p>word is 16 bits</p></li>
<li><p>long is 32 bits</p></li>
</ul></li>
<li><p>’s complement</p></li>
<li><p>conversion from signed to unsigned</p></li>
</ul>
<h2 data-number="1.16" id="binary-addition"><span
class="header-section-number">1.16</span> binary addition</h2>
<ul>
<li><p>add with the same rules as in 210</p></li>
<li><p>c implies unsigned overflow</p></li>
<li><p>v implies signed overflow</p></li>
<li><p>don’t forget them</p></li>
</ul>
<h2 data-number="1.17" id="data-codes"><span
class="header-section-number">1.17</span> data codes</h2>
<ul>
<li><p>data codes make it convenient to convert data easily</p></li>
<li><p>ASCII is for strings</p>
<ul>
<li><p>e.g. subtract 0x20 from a lower case letter to make it upper
case</p></li>
</ul></li>
<li><p>BCD is quick binary</p>
<ul>
<li><p>only goes up to 9</p></li>
<li><p>anything bigger than 1001 is invalid</p></li>
<li><p>other codes exist too</p></li>
</ul></li>
</ul>
<h1 data-number="2" id="computer-architecture"><span
class="header-section-number">2</span> computer architecture</h1>
<h2 data-number="2.1" id="assembly-language"><span
class="header-section-number">2.1</span> assembly language</h2>
<ul>
<li><p>hierarchy going down to hardware</p>
<ul>
<li><p>interpreted language</p>
<ul>
<li><p>e.g. python, ruby, Matlab</p></li>
</ul></li>
<li><p>compiler languages</p>
<ul>
<li><p>e.g. c, c++, pascal</p></li>
</ul></li>
<li><p>assembly language</p>
<ul>
<li><p>symbolic version of machine</p></li>
</ul></li>
<li><p>machine code</p>
<ul>
<li><p>set of permissible binary operations on the CPU</p></li>
</ul></li>
<li><p>hardware</p>
<ul>
<li><p>things happen here</p></li>
</ul></li>
</ul></li>
<li><p>this has nothing to do with the operating system</p></li>
</ul>
<h3 data-number="2.1.1" id="code-sample"><span
class="header-section-number">2.1.1</span> code sample</h3>
<ul>
<li><p>a small code sample <code>INIT MOVEQ.L #0, %D1</code></p>
<ul>
<li><p><code>INIT</code> is a label</p></li>
<li><p><code>MOVEQ</code> is a mnemonic</p></li>
<li><p><code>.L</code> specifies the data size</p></li>
<li><p><code>#0</code> is an immediate value</p></li>
<li><p><code>%D1</code> is data register number 1</p></li>
<li><p>i.e. 32 bits containing the value 0 will be transferred to data
register 1</p></li>
</ul></li>
</ul>
<h3 data-number="2.1.2" id="some-terminology"><span
class="header-section-number">2.1.2</span> some terminology</h3>
<ul>
<li><p>assembling</p>
<ul>
<li><p>conversion of assembly into machine</p></li>
</ul></li>
<li><p>disassembly</p>
<ul>
<li><p>conversion of machine into assembly</p></li>
</ul></li>
<li><p>assembler</p>
<ul>
<li><p>program that actually does the assembling</p></li>
</ul></li>
<li><p>hand assembly</p>
<ul>
<li><p>assembling by hand</p></li>
</ul></li>
<li><p>resident assembler</p>
<ul>
<li><p>runs on the same machine type as code</p></li>
</ul></li>
<li><p>cross assembler</p>
<ul>
<li><p>assembler runs on a different machine type than the code</p></li>
<li><p>implies code must be transferred eventually</p></li>
</ul></li>
<li><p>compiler</p>
<ul>
<li><p>program that translates higher level languages into machine code
often using an assembler</p></li>
<li><p>object code</p>
<ul>
<li><p>another term for machine language</p></li>
<li><p>may be joined with other machine code</p></li>
</ul></li>
<li><p>linker</p>
<ul>
<li><p>links many different object files together</p></li>
</ul></li>
</ul></li>
</ul>
<h3 data-number="2.1.3" id="assembly-process"><span
class="header-section-number">2.1.3</span> assembly process</h3>
<ul>
<li><p>going down again</p>
<ul>
<li><p>text editor</p>
<ul>
<li><p>like emacs and whatever</p></li>
</ul></li>
<li><p>assembly</p></li>
<li><p>assembler</p></li>
<li><p>object code</p></li>
<li><p>linker</p></li>
<li><p>executable</p></li>
</ul></li>
<li><p>the object code and the linker are optional</p></li>
</ul>
<h3 data-number="2.1.4" id="machine-language-instructions"><span
class="header-section-number">2.1.4</span> machine language
instructions</h3>
<ul>
<li><p>e.g. <code>5342 &lt;-&gt; SUBQ.W #1, %D2</code></p>
<ul>
<li><p><code>5342</code> is the machine code in hex</p></li>
<li><p><code>SUBQ is</code> subtract quick</p></li>
<li><p><code>.W</code> is specifying a data size of 16 bits</p></li>
<li><p><code>#1</code> is the source or input</p></li>
<li><p><code>%D1</code> is the destination or output</p></li>
<li><p>the entire example means to subtract 1 from D2 and store result
in D2 <span class="math inline">\\(5342_{16} = 0101 | 001 | 101 |
000010\\)</span></p></li>
<li><p>the left most 4 bits encode <code>SUBQ</code></p></li>
<li><p>the 3 bits after <code>SUBQ</code> denote the value of 1</p></li>
<li><p>the 3 bits after the value denote the data size</p></li>
<li><p>the last 6 bits specify the destination as D2</p></li>
</ul></li>
<li><p>all this is in the PRC</p></li>
<li><p>the size of any instruction is in the PRC</p>
<ul>
<li><p>there are always some extention memory addresses for any other
information that may be used</p></li>
</ul></li>
<li><p>if the space where the PRC should list instruction size is empty
then that instruction is illegal and cannot be done</p></li>
<li><p>opcodes are the things written in that column</p>
<ul>
<li><p>these specify what the instruction looks like in binary</p></li>
<li><p>the effective addressing mode is on the back</p></li>
</ul></li>
<li><p>e.g. <code>MOVE.L #0x20000, %D1</code></p>
<ul>
<li><p>the <code>#0x20000</code> is in immediate addressing
mode</p></li>
<li><p>the opcode looks like <code>0010 RRR MMM eeeeee</code></p>
<ul>
<li><p><code>RRR</code> = destination register = 001</p></li>
<li><p><code>MMM</code> = destination mode = 000 (from effective
addressing on back)</p></li>
<li><p><code>eeeeee</code> = source effective address =
<code>MMM RRR</code> of the source</p>
<ul>
<li><p>in this case: <code>eee eee = MMM RRR = 111 100</code></p></li>
</ul></li>
</ul></li>
<li><p>this is where that extension stuff from earlier comes into
play</p></li>
<li><p>the actual value will be in the next 32 bits after the
opcode</p></li>
</ul></li>
<li><p>the coldfire is a big endian machine</p>
<ul>
<li><p>this means the least significant bits of a value are stored
later</p></li>
</ul></li>
</ul>
<h3 data-number="2.1.5" id="memory-maps"><span
class="header-section-number">2.1.5</span> memory maps</h3>
<ul>
<li><p>can be drawn in any fashion</p></li>
<li><p>usually have a width as the number of bits</p></li>
<li><p>the address number is on the side</p></li>
<li><p>the coldfire is word oriented</p></li>
<li><p>just an abstraction but helps give information about how the
device stores data</p></li>
<li><p>for instance, addresses may be assigned to each byte or 2
bytes</p></li>
<li><p>look at jan 27</p></li>
</ul>
<h3 data-number="2.1.6" id="assembly-instruction-format"><span
class="header-section-number">2.1.6</span> assembly instruction
format</h3>
<ul>
<li><p>e.g. <code>loop bra loop *terminate the program</code></p>
<ul>
<li><p><code>loop</code> is a label</p>
<ul>
<li><p>this allows statements to the address of this
instruction</p></li>
<li><p>standard conventions</p></li>
</ul></li>
<li><p><code>bra</code> is a mnemonic</p>
<ul>
<li><p>name of instruction to execute</p></li>
<li><p>usually has .L, .B, or whatever to specify data size</p></li>
</ul></li>
<li><p><code>loop</code> is an operand</p>
<ul>
<li><p>listed in source, destination order</p></li>
<li><p>only for some instructions</p></li>
</ul></li>
<li><p><code>*term...</code> is a comment</p>
<ul>
<li><p>can also be shown by <code>//</code> or <code>/* ... */</code> a
la c</p></li>
</ul></li>
</ul></li>
</ul>
<h3 data-number="2.1.7" id="assembly-directives"><span
class="header-section-number">2.1.7</span> assembly directives</h3>
<ul>
<li><p>not all lines contain cpu instructions</p></li>
<li><p>some are assembler directives not executed by the cpu</p></li>
<li><p>these are used by the assembler</p></li>
<li><p>e.g.</p>
<ul>
<li><p><code>section &lt;name&gt;</code></p>
<ul>
<li><p>starts a new relocatable section of code</p></li>
</ul></li>
<li><p><code>end</code></p>
<ul>
<li><p>indicates to assembler that things are done</p></li>
</ul></li>
<li><p><code>include &lt;fname&gt;</code></p>
<ul>
<li><p>places contents of fname at the include location</p></li>
</ul></li>
<li><p><code>org &lt;address&gt;</code></p>
<ul>
<li><p>sets the assembler address counter and tells it where to put the
code</p></li>
</ul></li>
<li><p>whole bunch more</p></li>
</ul></li>
</ul>
<h2 data-number="2.2" id="mcf5271-programmers-model"><span
class="header-section-number">2.2</span> MCF5271 programmers’ model</h2>
<ul>
<li><p>data registers</p>
<ul>
<li><p>accessed by <code>.B, .W, .L</code></p></li>
</ul></li>
<li><p>general purpose address registers</p>
<ul>
<li><p>accessed by <code>.W, .L</code></p></li>
<li><p>funny thing about <code>.W</code></p>
<ul>
<li><p>any time a <code>.W</code> is moved into the address registers,
it is sign extended</p></li>
</ul></li>
</ul></li>
<li><p>special purpose address register</p>
<ul>
<li><p>discussed later</p></li>
</ul></li>
<li><p>SR</p>
<ul>
<li><p>the CCR or the condition code register is that last column in the
PRC</p></li>
</ul></li>
</ul>
<h3 data-number="2.2.1" id="data-registers"><span
class="header-section-number">2.2.1</span> data registers</h3>
<ul>
<li><p>can opt to only use a portion of the whole register</p></li>
</ul>
<h3 data-number="2.2.2" id="address-registers"><span
class="header-section-number">2.2.2</span> address registers</h3>
<ul>
<li><p>no .B access</p></li>
<li><p>remember that things are sign extended when moved into the
address registers</p></li>
</ul>
<pre><code>MOVEA.W #0xFEED, %A3
---
A3 = [FF FF FE ED]
</code></pre>
<div class="center">
<p>Move word</p>
</div>
<h3 data-number="2.2.3" id="program-counter"><span
class="header-section-number">2.2.3</span> program counter</h3>
<ul>
<li><p>bit register</p></li>
<li><p>always points to next instruction to execute</p></li>
<li><p>controls program flow</p></li>
<li><p>does not point to extensions</p></li>
</ul>
<h3 data-number="2.2.4" id="status-register"><span
class="header-section-number">2.2.4</span> status register</h3>
<ul>
<li><p>right now we’re only interested in the lowest byte called the CCR
as already mentioned. It’s the condition code register.
<code>CCR = [- - - X N Z V C]</code></p>
<ul>
<li><p><code>-</code> are useless</p></li>
<li><p><code>X</code> is extend</p>
<ul>
<li><p>used for adding more than 32 bit long words</p></li>
</ul></li>
<li><p><code>N</code> is negative</p>
<ul>
<li><p>weird thing about this is that it treats everything as
signed</p></li>
</ul></li>
<li><p><code>Z</code> is zero</p></li>
<li><p><code>V</code> is signed overflow</p></li>
<li><p><code>C</code> is unsigned carry</p></li>
</ul></li>
<li><p>the condition codes are in the last column of the PRC</p>
<ul>
<li><p>e.g. <code>- * * 0 0</code></p>
<ul>
<li><p><code>X</code> doesn’t change</p></li>
<li><p><code>N</code> will be updated</p></li>
<li><p><code>Z</code> will be updated</p></li>
<li><p><code>V</code> will be 0</p></li>
<li><p><code>C</code> will be 0</p></li>
</ul></li>
</ul></li>
</ul>
<h2 data-number="2.3" id="data-alignment"><span
class="header-section-number">2.3</span> data alignment</h2>
<ul>
<li><p>just the way the data might be arranged</p></li>
<li><p>if the data is altogether in one memory location, it is
aligned</p></li>
<li><p>if it was spread over two memory locations, it is
unaligned</p></li>
<li><p>aligned data is faster to read</p></li>
<li><p>coldfire has no alignment requirement but some cpus do</p></li>
<li><p>look to jan 31</p></li>
</ul>
<h2 data-number="2.4" id="mcf5271-instruction-set-overview"><span
class="header-section-number">2.4</span> MCF5271 instruction set
overview</h2>
<ul>
<li><p>one categorization has 4 groups</p>
<ul>
<li><p>data movement</p></li>
<li><p>sequence control</p></li>
<li><p>arithmetic and logic</p></li>
<li><p>special/control: not covered yet</p></li>
</ul></li>
</ul>
<h3 data-number="2.4.1" id="data-movement-instructions"><span
class="header-section-number">2.4.1</span> data movement
instructions</h3>
<ul>
<li><p><code>MOVE</code> actually copies</p></li>
<li><p>coldfire cannot move from memory to memory. it must have a
register in between</p></li>
<li><p><code>MOVEA</code> sign extends the <code>.W</code></p></li>
<li><p><code>MOVEQ</code> is used for 8 bit values into a data
register</p>
<ul>
<li><p>this is sign extended</p></li>
</ul></li>
<li><p><code>MOVE</code> CCR can do stuff to the CCR</p></li>
<li><p><code>MOVEM</code> can move multiple but not discussed
yet</p></li>
</ul>
<h3 data-number="2.4.2" id="squence-control-instructors"><span
class="header-section-number">2.4.2</span> squence control
instructors</h3>
<ul>
<li><p>programs are not usually linear</p></li>
<li><p>unconditional sequence control</p>
<ul>
<li><p>change the location of the PC</p></li>
<li><p>e.g.</p>
<ul>
<li><p><code>BRA</code>: branch</p></li>
<li><p><code>JMP</code>: jump</p></li>
<li><p>when writing assembly, the programmer will write
<code>BRA &lt;destination label&gt;</code></p></li>
</ul></li>
<li><p>there’s this weird branch relative addressing on the last page of
notes</p></li>
</ul></li>
</ul>
<ul>
<li><p>conditional sequence control</p>
<ul>
<li><p>Bcc instructions</p></li>
<li><p>change the CCR</p></li>
<li><p>unsigned</p>
<ul>
<li><p><code>BHI</code> - higher</p></li>
<li><p><code>BHS</code> - higher or same</p></li>
<li><p><code>BLS</code> - lower or same</p></li>
<li><p><code>BLO</code> - lower</p></li>
</ul></li>
<li><p>signed</p>
<ul>
<li><p><code>BGT</code> - greater</p></li>
<li><p><code>BGE</code> - greater or equal</p></li>
<li><p><code>BLE</code> - less or equal</p></li>
<li><p><code>BLT</code> - less</p></li>
</ul></li>
<li><p>both</p>
<ul>
<li><p><code>BEQ</code> - equal</p></li>
<li><p><code>BNE</code> - not equal</p></li>
</ul></li>
<li><p>these use the CCR to find out when to branch</p>
<ul>
<li><p><code>CMP</code> - data registers</p></li>
<li><p><code>CMPA</code> - address registers</p></li>
<li><p><code>CMPI</code> - immediate value</p></li>
</ul></li>
<li><p>note that the C bit in the CCR is set by dest-src</p>
<ul>
<li><p><code>TST dest</code></p>
<ul>
<li><p>sets the CCR’s N,Z values according to dest</p></li>
<li><p>does not change anything in dest</p></li>
</ul></li>
</ul></li>
<li><p><code>BTST #bit, dest</code></p>
<ul>
<li><p>sets the Z bit in the CCR according the bit of dest</p></li>
</ul></li>
</ul></li>
</ul>
<h3 data-number="2.4.3" id="math-instructions"><span
class="header-section-number">2.4.3</span> math instructions</h3>
<ul>
<li><p>adding</p>
<ul>
<li><p><code>ADD</code> - src+dest<code>-&gt;</code>dest</p></li>
<li><p><code>ADDI</code> - src is immediate</p></li>
<li><p><code>ADDQ</code> - src is 0-7 immediate</p></li>
<li><p><code>ADDA</code> - dest is an address register</p></li>
<li><p><code>ADDX</code> - src+dest+X(CCR) <code>-&gt;</code>
dest</p></li>
</ul></li>
<li><p>subtracting</p>
<ul>
<li><p><code>SUB</code></p></li>
<li><p><code>SUBI</code></p></li>
<li><p><code>SUBQ</code></p></li>
<li><p><code>SUBA</code></p></li>
<li><p><code>SUBX</code></p></li>
</ul></li>
<li><p>multiplication</p>
<ul>
<li><p><code>.W</code> - overflow not possible</p></li>
<li><p><code>.L</code> - overflow possible</p></li>
<li><p><code>MULU</code> - unsigned</p></li>
<li><p><code>MULS</code> - signed</p></li>
</ul></li>
<li><p>division</p>
<ul>
<li><p><code>.W</code> - stores 16bit remainder and quotient</p></li>
<li><p><code>.L</code> - stores 32bit quotient</p></li>
<li><p><code>DIVU</code> - unsigned</p></li>
<li><p><code>DIVS</code> - signed</p></li>
</ul></li>
<li><p>shifts</p>
<ul>
<li><p><code>ASL #bits, %DX</code></p>
<ul>
<li><p>shifts <code>#bits</code> to left of DX</p></li>
<li><p>MSBit goes to X,C</p></li>
<li><p>LSBit gets 0</p></li>
</ul></li>
<li><p><code>ASR #bits, %DX</code></p>
<ul>
<li><p>shifts right</p></li>
<li><p>MSBit gets copied into new MSBit</p></li>
<li><p>LSBit goes to X,C</p></li>
<li><p>the sign of the number is kept this way</p></li>
</ul></li>
</ul></li>
<li><p>misc</p>
<ul>
<li><p><code>NEG %DX</code></p>
<ul>
<li><p>sign of DX gets switched</p></li>
</ul></li>
<li><p><code>NEGX %DX</code></p>
<ul>
<li><p>DX-X -&gt; DX</p></li>
</ul></li>
<li><p><code>EXT</code></p>
<ul>
<li><p>does something</p></li>
</ul></li>
<li><p><code>CLR %DX</code></p>
<ul>
<li><p>clears the register (zeros)</p></li>
</ul></li>
</ul></li>
</ul>
<h3 data-number="2.4.4" id="logic-instructions"><span
class="header-section-number">2.4.4</span> logic instructions</h3>
<ul>
<li><p><code>AND &lt;mask&gt;, &lt;dest&gt;</code></p>
<ul>
<li><p><code>&lt;mask&gt;</code> has 1s and 0s</p></li>
<li><p>all the bits in dest that correspond with the zeros in mask are
cleared</p></li>
</ul></li>
<li><p><code>ANDI &lt;mask&gt;, &lt;dest&gt;</code></p></li>
<li><p><code>OR &lt;mask&gt;, &lt;dest&gt;</code></p>
<ul>
<li><p>similar to AND</p></li>
<li><p>all the bits in dest that correspond with the ones in mask are
kept</p></li>
</ul></li>
<li><p><code>ORI &lt;mask&gt;, &lt;dest&gt;</code></p></li>
<li><p><code>EOR &lt;mask&gt;, &lt;dest&gt;</code></p>
<ul>
<li><p>similar to AND</p></li>
<li><p>all the bits in dest that correspond with the ones in mask are
kept</p></li>
</ul></li>
<li><p><code>BCLR #bit, &lt;dest&gt;</code></p>
<ul>
<li><p>clear bit to zero</p></li>
</ul></li>
<li><p><code>BSET #bit, &lt;dest&gt;</code></p>
<ul>
<li><p>set bit to one</p></li>
</ul></li>
<li><p><code>BCHG #bit, &lt;dest&gt;</code></p>
<ul>
<li><p>toggles bit</p></li>
</ul></li>
<li><p>shifting</p>
<ul>
<li><p><code>LSR</code></p></li>
<li><p><code>LSL</code></p></li>
<li><p>similar to ASR and ASL but the sign is not retained in
LSR</p></li>
</ul></li>
</ul>
<h1 data-number="3" id="addressing-modes"><span
class="header-section-number">3</span> addressing modes</h1>
<ul>
<li><p><code>&lt;ea&gt;</code> is the effective address of any
instruction</p></li>
</ul>
<h2 data-number="3.1" id="different-modes"><span
class="header-section-number">3.1</span> different modes</h2>
<ul>
<li><p>immediate <code>ANDI.L #0xFF, %D7</code></p>
<ul>
<li><p>the <code>#0xFF</code> is encoded in the instruction itself so
the <code>&lt;ea&gt;</code> = the address of the instruction</p></li>
</ul></li>
<li><p>absolute <code>CLR.B var1</code></p>
<ul>
<li><p>var1 is the effective address <code>CLR.B 0x1000</code></p></li>
<li><p><code>0x1000</code> is the effective address</p></li>
</ul></li>
<li><p>data register direct <code>CLR.B %D0</code></p>
<ul>
<li><p><code>&lt;ea&gt;</code> is the data register</p></li>
</ul></li>
<li><p>address register direct <code>MOVEA.L #0x32, %A1</code></p>
<ul>
<li><p><code>&lt;ea&gt;</code> is the address register</p></li>
</ul></li>
<li><p>register indirect <code>MOVE.B (%A1), %D0</code></p>
<ul>
<li><p>the <code>&lt;ea&gt;</code> is just whatever is inside
A1</p></li>
</ul></li>
<li><p>register indirect with post increment
<code>MOVE.L (%A2)+, %D3</code></p>
<ul>
<li><p>the <code>&lt;ea&gt;</code> is A2 before the instruction +
4</p></li>
<li><p>the 4 is because it is a .L</p></li>
</ul></li>
<li><p>register indirect with pre decrement
<code>MOVE.B -(%A3), %D4</code></p>
<ul>
<li><p>the <code>&lt;ea&gt;</code> is the A3 before the instruction -
1</p></li>
<li><p>the 1 is because it is a .B</p></li>
</ul></li>
<li><p>register indirect with displacement/offset
<code>MOVE.B 10(%A0), %D1</code></p>
<ul>
<li><p>the <code>&lt;ea&gt;</code> is A0 before the instruction +
10</p></li>
</ul></li>
<li><p>indexed register indirect with offset
<code>MOVE.L -1(%A0, %D2*2), %D6</code></p>
<ul>
<li><p>the <code>&lt;ea&gt;</code> is
<code>A0 + (D2 * 2) - 1</code></p></li>
<li><p>the *2 is the scale factor</p></li>
<li><p>the SF can be 1,2,4,8 (only if floating point unit)</p></li>
</ul></li>
<li><p>PC relative with offset</p>
<ul>
<li><p>the <code>&lt;ea&gt;</code> of the <code>Table(%PC)</code> is
just Table</p></li>
<li><p>this instruction automatically calculates the offset from the PC.
allows you to move Table around</p></li>
<li><p>this way is used because it allows the code to be be moved
easily</p></li>
</ul></li>
<li><p>PC relative with index and offset</p>
<ul>
<li><p><code>&lt;ea&gt;</code> = String + D1</p></li>
</ul></li>
<li><p>special instructions</p>
<ul>
<li><p><code>LEA src, %AX</code></p>
<ul>
<li><p>load effective address</p></li>
<li><p>places the effective address of src in AX</p></li>
</ul></li>
<li><p><code>PEA src</code></p>
<ul>
<li><p>pushes the <code>&lt;ea&gt;</code> to the stack</p></li>
</ul></li>
</ul></li>
</ul>
<pre><code>MOVE.W Table(%PC), %D1
Table: .word 0x1234, 0x5678

MOVE.L #2, %D1
MOVE.B String (%PC, %D1), %D0
String: .asciz &quot;We rock&quot;
</code></pre>
<div class="center">

</div>
<h1 data-number="4" id="subroutines"><span
class="header-section-number">4</span> subroutines</h1>
<ul>
<li><p>allow modularity</p></li>
<li><p>kind of like functions</p></li>
</ul>
<h2 data-number="4.1" id="stack"><span
class="header-section-number">4.1</span> stack</h2>
<ul>
<li><p>the stack</p>
<ul>
<li><p>used for saving return addresses for JSR and RTS</p></li>
<li><p>a stack is just a group of memory locations</p></li>
<li><p>Motorola devices have stacks that grow towards M(0)</p></li>
<li><p>adding items by pushing</p></li>
<li><p>removing items by pulling</p></li>
<li><p>we use A7 as the stack pointer</p></li>
<li><p>the pre decrement addressing mode is used with the SP for pushing
stuff</p></li>
<li><p>the post increment addressing mode is used with the SP for
pulling stuff</p></li>
</ul></li>
</ul>
<h2 data-number="4.2" id="basic-instructions"><span
class="header-section-number">4.2</span> basic instructions</h2>
<ul>
<li><p>there’s a few common patterns in using the stack
<code>MOVE.W #0x0227, -(%SP)</code></p>
<ul>
<li><p>decreases the SP by 2 and then places the value there
<code>MOVE.B (%SP)+, 0x20000</code></p></li>
<li><p>gets a byte from SP and places it at <code>M(0x20000)</code> and
then increments the SP by 1</p></li>
<li><p>automatic stack use</p>
<ul>
<li><p><code>PEA</code> - discussed above</p></li>
<li><p><code>JSR</code> - jump to subroutine</p></li>
<li><p><code>BSR</code> - branch to subroutine</p></li>
<li><p><code>RTS</code> - return from subroutine</p></li>
<li><p>the <code>JSR</code> and <code>BSR</code> push a 4byte address to
the stack</p></li>
<li><p>the <code>RTS</code> pulls the 4byte address from the stack and
puts it in the PC</p></li>
</ul></li>
</ul></li>
</ul>
<h2 data-number="4.3" id="stack-frames"><span
class="header-section-number">4.3</span> stack frames</h2>
<ul>
<li><p>stack frames simplify using the stack inside subroutines
<code>LINK %AX, #n</code></p>
<ul>
<li><p>creates a stack frame</p></li>
<li><p>the <code>#n</code> is always negative</p></li>
<li><p>order:</p>
<ul>
<li><p>push AX onto the stack</p></li>
<li><p>copy the SP to AX</p></li>
<li><p>add the immediate data to the SP <code>UNLK</code></p></li>
<li><p>removes a stack frame</p></li>
<li><p>order:</p>
<ul>
<li><p>copy the AX to the SP</p></li>
<li><p>pulls 4byte off the stack into AX</p></li>
</ul></li>
</ul></li>
<li><p>the <code>MOVEM</code> instruction is often used after the
<code>LINK</code></p></li>
</ul></li>
</ul>
<h2 data-number="4.4" id="parameter-passing"><span
class="header-section-number">4.4</span> parameter passing</h2>
<ul>
<li><p>three different ways:</p>
<ul>
<li><p>CPU registers</p>
<ul>
<li><p>input parameters are passed in through the registers</p></li>
</ul></li>
<li><p>output is also through the registers</p></li>
<li><p>stack and cleaned in calling scope</p>
<ul>
<li><p>input parameters are placed on the stack including (maybe) space
for return value from the calling scope</p></li>
<li><p>subroutine grabs input data from the stack and places output in
the appropriate place</p></li>
<li><p>calling scope then pulls from the stack and cleans the whole
thing up</p></li>
</ul></li>
<li><p>stack and cleaned inside subroutine</p>
<ul>
<li><p>this one is weird</p></li>
<li><p>input parameters are passed in like normal but the stack is
cleaned inside the subroutine</p></li>
<li><p>basically, say we pass in arg1, arg2 on the stack +rsp-&gt;| arg1
| | arg2 |r+</p></li>
<li><p>after the subroutine is done, the stack will look like this:
<code>sp-&gt;| returnvalue|</code></p></li>
<li><p>this one seems tedious</p></li>
</ul></li>
</ul></li>
<li><p>prof recommends the stack and clean in calling scope</p></li>
</ul>
<h1 data-number="5" id="interfacing"><span
class="header-section-number">5</span> interfacing</h1>
<h2 data-number="5.1" id="parallel-bus-connected-devices"><span
class="header-section-number">5.1</span> parallel bus connected
devices</h2>
<ul>
<li><p>devices are connected using the address and the data bus</p></li>
<li><p>these devices are said to be memory mapped devices</p></li>
<li><p>examples: A/D converters, D/A converters, digital I/O, temp
sensors, etc.</p></li>
</ul>
<h2 data-number="5.2" id="on-chip-peripherals"><span
class="header-section-number">5.2</span> on chip peripherals</h2>
<ul>
<li><p>these are peripherals actually on the same chip as the
MCU</p></li>
<li><p>these are very important to consider before purchasing a
MCU</p></li>
</ul>
<h2 data-number="5.3" id="serial-communication-peripherals"><span
class="header-section-number">5.3</span> serial communication
peripherals</h2>
<ul>
<li><p>UART</p>
<ul>
<li><p>asynchronous - clock is not transmitted</p></li>
<li><p>this means that the receiver and transmitter must be
preconfigured to the same clock</p></li>
<li><p>LSBit is transmitted first</p></li>
<li><p>example: 9600 baud, 8E1</p>
<ul>
<li><p>baud = 9600 bits per second</p></li>
<li><p>= <code>#</code> of data bits</p></li>
<li><p>E = even (parity)</p></li>
<li><p>= <code>#</code> of stop bits</p></li>
</ul></li>
</ul></li>
<li><p>SPI</p>
<ul>
<li><p>synchronous - master generates the clock</p></li>
<li><p>MSBit is transmitted first</p></li>
<li><p>SPI contains a ring of shift registers</p></li>
<li><p>basically, the slave shifts the MSBit out and it goes straight
into the master</p></li>
</ul></li>
<li><p>I2C</p>
<ul>
<li><p>synchronous - master generates the clock</p></li>
<li><p>more complicated than SPI</p></li>
<li><p>there is a single bidrectional data line called the SOA or
SDA</p></li>
<li><p>the clock line is called the SCL</p></li>
<li><p>also includes an address line to assign addresses to each device
from 0 to 7</p></li>
</ul></li>
</ul>
<h2 data-number="5.4" id="general-purpose-io"><span
class="header-section-number">5.4</span> general purpose I/O</h2>
<ul>
<li><p>this is bascically the simplest peripherals that rely on simple
on/off input</p></li>
<li><p>open is usually 1 and close is 0</p></li>
<li><p>modern MCUs allow almost any pin to be used as a digital
I/O</p></li>
<li><p>data direction register</p>
<ul>
<li><p>keeps track of whether registers are set to input or
output</p></li>
</ul></li>
<li><p>output/input data register</p>
<ul>
<li><p>each bit sets whether the output is high or low</p></li>
<li><p>or each bit sets whether the input is high or low</p></li>
<li><p>each bit corresponds to a particular pin</p></li>
</ul></li>
<li><p>we can emulate peripherals by just controlling the pins with
software</p></li>
</ul>
<h2 data-number="5.5" id="voltage-current-and-timing"><span
class="header-section-number">5.5</span> voltage, current, and
timing</h2>
<ul>
<li><p>these need to be checked for successful interfacing</p></li>
<li><p>pin voltages/currents are usually in the DC characteristics
section of the data sheet</p></li>
<li><p>timing is usually found in the AC characteristics</p></li>
<li><p>basically we need to ensure that the correct current, voltage is
going through the peripheral</p></li>
<li><p>we also need to check if the clock is working according to what
the peripheral requires</p></li>
</ul>
<h1 data-number="6" id="exceptions"><span
class="header-section-number">6</span> exceptions</h1>
<h2 data-number="6.1" id="interrupts"><span
class="header-section-number">6.1</span> interrupts</h2>
<ul>
<li><p>generated with hardware</p></li>
<li><p>interrupts are a form of exceptions</p></li>
<li><p>interrupts are an alternative to polling</p></li>
<li><p>we basically wait for the device to ping us rather than asking
the device constantly</p></li>
<li><p>traps</p>
<ul>
<li><p>generated internally by the CPU</p></li>
</ul></li>
<li><p>enabling and priorities</p>
<ul>
<li><p>CPU needs to be configured to listen for the interrupt</p></li>
<li><p>we can do this with masks</p></li>
<li><p>if something is masked, we can’t see it</p></li>
<li><p>most CPUs have two levels of masking</p></li>
<li><p>the coldfire uses the system bits of the status register as mask
bits</p></li>
<li><p>I2, I1, I0 are the inhibit mask</p></li>
<li><p><code>anything &lt;= (I2, I1, I0)</code> is inhibited</p></li>
<li><p>some interrupts are non-maskable</p></li>
<li><p>these interrupt priorities are set by:</p>
<ul>
<li><p>handwriting</p></li>
<li><p>hardware</p></li>
<li><p>firmware</p></li>
</ul></li>
<li><p>note that higher priorities are more important</p></li>
</ul></li>
</ul>
<h2 data-number="6.2" id="vector-table"><span
class="header-section-number">6.2</span> vector table</h2>
<ul>
<li><p>there are three ways for a CPU to figure out what to do after an
exception occurs</p>
<ul>
<li><p>user interrupts</p>
<ul>
<li><p>complicated peripheral gives info about routine address</p></li>
<li><p>coldfire</p></li>
</ul></li>
<li><p>autovectored interrupts</p>
<ul>
<li><p>hardware contains addresses of routines for interrupts
somewhere</p></li>
<li><p>the CPU just finds the appropriate one</p></li>
</ul></li>
<li><p>simple</p>
<ul>
<li><p>some simpler devices just go to the same address no matter what
exception occurs</p></li>
</ul></li>
<li><p>example: if a divide by zero exception occurs, the CPU goes to
the vector table and gets the address of the routine from the hardwired
location in the table</p></li>
</ul></li>
</ul>
<h2 data-number="6.3" id="exception-processing"><span
class="header-section-number">6.3</span> exception processing</h2>
<ul>
<li><p>process</p>
<ul>
<li><p>exception occurs</p></li>
<li><p>current instruction is completed</p></li>
<li><p>CPU context is saved</p>
<ul>
<li><p>PC is pushed to stack</p></li>
<li><p>push the status register to stack</p></li>
<li><p>coldfire has another word</p></li>
</ul></li>
<li><p>the status registers, I bits are set to the exception’s priority
hiding anything that’s less important</p></li>
<li><p>the interrupt service routine (ISR) address is read from the
vector table and placed in the PC</p></li>
<li><p>ISR executes</p></li>
<li><p>somewhere in the ISR, the exception is cleared somehow</p></li>
<li><p>the ISR has a return from exception (rte) at the end similar to
rts for subroutines</p></li>
<li><p>PC and SR are pulled from the stack</p></li>
<li><p>rest of the program continues to execute</p></li>
</ul></li>
<li><p>ISRs should be short and executed quickly</p></li>
<li><p>nested interrupts</p>
<ul>
<li><p>sometimes the ISR generates an exception itself</p></li>
<li><p>this then only gets called if it is a higher priority than the
original exception</p></li>
</ul></li>
<li><p>example</p>
<ul>
<li><p>coldfire has a trap instruction:
<code>TRAP #n , n=0,...,15</code></p></li>
<li><p>this generates an exception and executes code for the appropriate
trap instruction from the vector table</p></li>
<li><p>we can rewrite a trap instruction so that it swaps two registers
+rTrap: move.l %d0, -(%sp) move.l %d1, %d0 move.l (%sp)+, %d1
rter+</p></li>
<li><p>we can draw a memory map at the beginning of this Trap</p></li>
<li><p>the memory map is 16-bits wide +r-&gt;SP| mystery word | | status
register | | returned 2MSBytes | | returned 2LSBytes |r+</p></li>
<li><p>now we actually need to place the address of this code in the
vector table <code>move.l #Trap, VECTORBASE+0x80+4*2</code></p>
<ul>
<li><p><code>VECTORBASE</code> is the address of the vector
table</p></li>
<li><p><code>0x80</code> is the start of the trap instructions</p></li>
<li><p>*2 is the offset for <code>Trap #2</code></p></li>
</ul></li>
<li><p>to actually call this interrupt we write: +rmove.l #0xFFFF FFFF,
%d0 move.l #0xABBA 0000, %d1 TRAP #2 /* the two registers are now
swapped */r+</p></li>
</ul></li>
</ul>
`;export{e as default};
