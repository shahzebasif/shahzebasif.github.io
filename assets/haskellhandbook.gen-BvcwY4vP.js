const n=`<nav id="TOC">
<ul>
<li><a href="#references" id="toc-references"><span
class="toc-section-number">1</span> References</a>
<ul>
<li><a href="#lyah" id="toc-lyah"><span
class="toc-section-number">1.1</span> LYAH</a></li>
<li><a href="#uchicago-cmsc-16100" id="toc-uchicago-cmsc-16100"><span
class="toc-section-number">1.2</span> UChicago CMSC-16100</a></li>
<li><a href="#adit.io" id="toc-adit.io"><span
class="toc-section-number">1.3</span> adit.io</a></li>
</ul></li>
<li><a href="#basics" id="toc-basics"><span
class="toc-section-number">2</span> Basics</a>
<ul>
<li><a href="#basic-properties" id="toc-basic-properties"><span
class="toc-section-number">2.1</span> Basic Properties</a></li>
<li><a href="#basic-operators" id="toc-basic-operators"><span
class="toc-section-number">2.2</span> Basic Operators</a></li>
<li><a href="#basic-functions" id="toc-basic-functions"><span
class="toc-section-number">2.3</span> Basic Functions</a></li>
<li><a href="#ghc" id="toc-ghc"><span
class="toc-section-number">2.4</span> GHC</a>
<ul>
<li><a href="#ghci" id="toc-ghci"><span
class="toc-section-number">2.4.1</span> GHCi</a></li>
</ul></li>
</ul></li>
<li><a href="#functions" id="toc-functions"><span
class="toc-section-number">3</span> Functions</a>
<ul>
<li><a href="#arrow" id="toc-arrow"><span
class="toc-section-number">3.1</span> Arrow</a></li>
<li><a href="#pattern" id="toc-pattern"><span
class="toc-section-number">3.2</span> Pattern</a>
<ul>
<li><a href="#case" id="toc-case"><span
class="toc-section-number">3.2.1</span> Case</a></li>
</ul></li>
<li><a href="#guards" id="toc-guards"><span
class="toc-section-number">3.3</span> Guards</a></li>
<li><a href="#let" id="toc-let"><span
class="toc-section-number">3.4</span> Let</a></li>
<li><a href="#recursion" id="toc-recursion"><span
class="toc-section-number">3.5</span> Recursion</a></li>
</ul></li>
<li><a href="#higher-order-functions"
id="toc-higher-order-functions"><span
class="toc-section-number">4</span> Higher Order Functions</a>
<ul>
<li><a href="#curried-functions" id="toc-curried-functions"><span
class="toc-section-number">4.1</span> Curried Functions</a>
<ul>
<li><a href="#sections" id="toc-sections"><span
class="toc-section-number">4.1.1</span> Sections</a></li>
</ul></li>
<li><a href="#useful-functions" id="toc-useful-functions"><span
class="toc-section-number">4.2</span> Useful Functions</a></li>
<li><a href="#infix" id="toc-infix"><span
class="toc-section-number">4.3</span> Infix</a></li>
<li><a href="#lambdas" id="toc-lambdas"><span
class="toc-section-number">4.4</span> Lambdas</a></li>
<li><a href="#folding" id="toc-folding"><span
class="toc-section-number">4.5</span> Folding</a></li>
<li><a href="#section" id="toc-section"><span
class="toc-section-number">4.6</span> $</a></li>
<li><a href="#function-composition" id="toc-function-composition"><span
class="toc-section-number">4.7</span> Function Composition</a></li>
<li><a href="#point-free-style" id="toc-point-free-style"><span
class="toc-section-number">4.8</span> Point-Free Style</a></li>
</ul></li>
<li><a href="#types" id="toc-types"><span
class="toc-section-number">5</span> Types</a>
<ul>
<li><a href="#atomic-and-real-types"
id="toc-atomic-and-real-types"><span
class="toc-section-number">5.1</span> Atomic and Real Types</a></li>
<li><a href="#lists" id="toc-lists"><span
class="toc-section-number">5.2</span> Lists</a>
<ul>
<li><a href="#operations" id="toc-operations"><span
class="toc-section-number">5.2.1</span> Operations</a></li>
<li><a href="#useful-functions-1" id="toc-useful-functions-1"><span
class="toc-section-number">5.2.2</span> Useful Functions</a></li>
<li><a href="#list-comprehensions" id="toc-list-comprehensions"><span
class="toc-section-number">5.2.3</span> List Comprehensions</a></li>
</ul></li>
<li><a href="#tuples" id="toc-tuples"><span
class="toc-section-number">5.3</span> Tuples</a>
<ul>
<li><a href="#basic-properties-1" id="toc-basic-properties-1"><span
class="toc-section-number">5.3.1</span> Basic Properties</a></li>
<li><a href="#useful-functions-2" id="toc-useful-functions-2"><span
class="toc-section-number">5.3.2</span> Useful Functions</a></li>
</ul></li>
<li><a href="#typeclasses" id="toc-typeclasses"><span
class="toc-section-number">5.4</span> Typeclasses</a>
<ul>
<li><a href="#basic-typeclasses" id="toc-basic-typeclasses"><span
class="toc-section-number">5.4.1</span> Basic Typeclasses</a></li>
</ul></li>
</ul></li>
<li><a href="#custom-types" id="toc-custom-types"><span
class="toc-section-number">6</span> Custom Types</a>
<ul>
<li><a href="#data-types" id="toc-data-types"><span
class="toc-section-number">6.1</span> Data Types</a>
<ul>
<li><a href="#record-syntax" id="toc-record-syntax"><span
class="toc-section-number">6.1.1</span> Record Syntax</a></li>
</ul></li>
<li><a href="#type-constructors" id="toc-type-constructors"><span
class="toc-section-number">6.2</span> Type Constructors</a></li>
<li><a href="#instances" id="toc-instances"><span
class="toc-section-number">6.3</span> Instances</a></li>
<li><a href="#newtype" id="toc-newtype"><span
class="toc-section-number">6.4</span> Newtype</a></li>
<li><a href="#type-synonyms" id="toc-type-synonyms"><span
class="toc-section-number">6.5</span> Type Synonyms</a></li>
<li><a href="#common-types" id="toc-common-types"><span
class="toc-section-number">6.6</span> Common Types</a>
<ul>
<li><a href="#maybe" id="toc-maybe"><span
class="toc-section-number">6.6.1</span> Maybe</a></li>
<li><a href="#either" id="toc-either"><span
class="toc-section-number">6.6.2</span> Either</a></li>
<li><a href="#association-lists" id="toc-association-lists"><span
class="toc-section-number">6.6.3</span> Association Lists</a></li>
</ul></li>
<li><a href="#recursive-structures" id="toc-recursive-structures"><span
class="toc-section-number">6.7</span> Recursive Structures</a></li>
<li><a href="#fixity-declarations" id="toc-fixity-declarations"><span
class="toc-section-number">6.8</span> Fixity Declarations</a></li>
<li><a href="#type-examples" id="toc-type-examples"><span
class="toc-section-number">6.9</span> Type Examples</a></li>
<li><a href="#typeclasses-1" id="toc-typeclasses-1"><span
class="toc-section-number">6.10</span> Typeclasses</a>
<ul>
<li><a href="#instance" id="toc-instance"><span
class="toc-section-number">6.10.1</span> Instance</a></li>
</ul></li>
</ul></li>
<li><a href="#functors" id="toc-functors"><span
class="toc-section-number">7</span> Functors</a>
<ul>
<li><a href="#laws" id="toc-laws"><span
class="toc-section-number">7.1</span> Laws</a></li>
<li><a href="#applicative" id="toc-applicative"><span
class="toc-section-number">7.2</span> Applicative</a></li>
</ul></li>
<li><a href="#monads" id="toc-monads"><span
class="toc-section-number">8</span> Monads</a>
<ul>
<li><a href="#definition" id="toc-definition"><span
class="toc-section-number">8.1</span> Definition</a></li>
<li><a href="#laws-1" id="toc-laws-1"><span
class="toc-section-number">8.2</span> Laws</a></li>
<li><a href="#functions-1" id="toc-functions-1"><span
class="toc-section-number">8.3</span> Functions</a></li>
<li><a href="#do" id="toc-do"><span
class="toc-section-number">8.4</span> Do</a></li>
<li><a href="#common-monads" id="toc-common-monads"><span
class="toc-section-number">8.5</span> Common Monads</a>
<ul>
<li><a href="#maybe-1" id="toc-maybe-1"><span
class="toc-section-number">8.5.1</span> Maybe</a></li>
<li><a href="#get" id="toc-get"><span
class="toc-section-number">8.5.2</span> Get</a></li>
</ul></li>
</ul></li>
<li><a href="#modules" id="toc-modules"><span
class="toc-section-number">9</span> Modules</a>
<ul>
<li><a href="#basic-modules" id="toc-basic-modules"><span
class="toc-section-number">9.1</span> Basic Modules</a>
<ul>
<li><a href="#data.list" id="toc-data.list"><span
class="toc-section-number">9.1.1</span> Data.List</a></li>
<li><a href="#data.char" id="toc-data.char"><span
class="toc-section-number">9.1.2</span> Data.Char</a></li>
<li><a href="#data.map" id="toc-data.map"><span
class="toc-section-number">9.1.3</span> Data.Map</a></li>
<li><a href="#data.set" id="toc-data.set"><span
class="toc-section-number">9.1.4</span> Data.Set</a></li>
</ul></li>
<li><a href="#custom-modules" id="toc-custom-modules"><span
class="toc-section-number">9.2</span> Custom Modules</a></li>
</ul></li>
<li><a href="#io" id="toc-io"><span class="toc-section-number">10</span>
I/O</a>
<ul>
<li><a href="#terminal" id="toc-terminal"><span
class="toc-section-number">10.1</span> Terminal</a>
<ul>
<li><a href="#useful-functions-3" id="toc-useful-functions-3"><span
class="toc-section-number">10.1.1</span> Useful Functions</a></li>
</ul></li>
<li><a href="#files-and-streams" id="toc-files-and-streams"><span
class="toc-section-number">10.2</span> Files and Streams</a>
<ul>
<li><a href="#system.io" id="toc-system.io"><span
class="toc-section-number">10.2.1</span> System.IO</a></li>
<li><a href="#system.directory" id="toc-system.directory"><span
class="toc-section-number">10.2.2</span> System.Directory</a></li>
</ul></li>
<li><a href="#command-line" id="toc-command-line"><span
class="toc-section-number">10.3</span> Command Line</a>
<ul>
<li><a href="#system.environment" id="toc-system.environment"><span
class="toc-section-number">10.3.1</span> System.Environment</a></li>
</ul></li>
</ul></li>
<li><a href="#miscellaneous" id="toc-miscellaneous"><span
class="toc-section-number">11</span> Miscellaneous</a>
<ul>
<li><a href="#randomness" id="toc-randomness"><span
class="toc-section-number">11.1</span> Randomness</a>
<ul>
<li><a href="#functions-2" id="toc-functions-2"><span
class="toc-section-number">11.1.1</span> Functions</a></li>
</ul></li>
<li><a href="#bytestrings" id="toc-bytestrings"><span
class="toc-section-number">11.2</span> Bytestrings</a>
<ul>
<li><a href="#functions-3" id="toc-functions-3"><span
class="toc-section-number">11.2.1</span> Functions</a></li>
</ul></li>
<li><a href="#exceptions" id="toc-exceptions"><span
class="toc-section-number">11.3</span> Exceptions</a>
<ul>
<li><a href="#common-io-exceptions" id="toc-common-io-exceptions"><span
class="toc-section-number">11.3.1</span> Common IO Exceptions</a></li>
</ul></li>
<li><a href="#cabal" id="toc-cabal"><span
class="toc-section-number">11.4</span> Cabal</a>
<ul>
<li><a href="#commands" id="toc-commands"><span
class="toc-section-number">11.4.1</span> Commands</a></li>
</ul></li>
</ul></li>
</ul>
</nav>
<h1 data-number="1" id="references"><span
class="header-section-number">1</span> References</h1>
<h2 data-number="1.1" id="lyah"><span
class="header-section-number">1.1</span> LYAH</h2>
<p>Miran Lipovaca’s great book:</p>
<p><a href="http://LearnYouAHaskell.com">LYAH</a></p>
<h2 data-number="1.2" id="uchicago-cmsc-16100"><span
class="header-section-number">1.2</span> UChicago CMSC-16100</h2>
<p>Stuart Kurtz’s lecture notes:</p>
<p><a
href="http://brick.cs.uchicago.edu/Courses/CMSC-16100/2013/lectures.php">CMSC-16100</a></p>
<h2 data-number="1.3" id="adit.io"><span
class="header-section-number">1.3</span> adit.io</h2>
<p>Great explanation of functors, applicatives, and monads:</p>
<p><a
href="http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html">adit.io</a></p>
<h1 data-number="2" id="basics"><span
class="header-section-number">2</span> Basics</h1>
<h2 data-number="2.1" id="basic-properties"><span
class="header-section-number">2.1</span> Basic Properties</h2>
<p>Haskell is a <span><strong>lazy</strong></span>,
<span><strong>statically typed</strong></span> language. It can infer
types as well.</p>
<p>Comments in Haskell are indicated by preceding <code>--</code> for
single-line comments and <code>\\{- text -\\}</code> for blocks.</p>
<h2 data-number="2.2" id="basic-operators"><span
class="header-section-number">2.2</span> Basic Operators</h2>
<ul>
<li><p>Math: <code>+ * - /</code></p></li>
<li><p>Logic: <code>&amp;&amp; || not</code></p></li>
<li><p>Ordering: <code>== /= &gt; &lt;</code></p></li>
</ul>
<h2 data-number="2.3" id="basic-functions"><span
class="header-section-number">2.3</span> Basic Functions</h2>
<ul>
<li><p><span><strong>succ</strong></span> returns the next item in a
sequence.</p></li>
<li><p><span><strong>pred</strong></span> returns the previous
item.</p></li>
<li><p><span><strong>min</strong></span> returns the min in the input
parameters.</p></li>
<li><p><span><strong>max</strong></span> returns the max in the input
parameters.</p></li>
</ul>
<h2 data-number="2.4" id="ghc"><span
class="header-section-number">2.4</span> GHC</h2>
<p>To compile the file we use <code>ghc --make file.hs</code>. There are
some useful flags for ghc:</p>
<ul>
<li><p><code>-O2</code> optimises the executable.</p></li>
<li><p><code>-dynamic</code> dynamically linkes the libraries and helps
keep the executable size down.</p></li>
</ul>
<h3 data-number="2.4.1" id="ghci"><span
class="header-section-number">2.4.1</span> GHCi</h3>
<pre><code>&gt; :t (True, 2)
(True, &#39;a&#39;) :: (Bool, Char)

&gt; :t length
[a] -&gt; Int</code></pre>
<div class="center">
<p>:t in GHCi</p>
</div>
<p><span><strong>:t</strong></span> returns the type signature:</p>
<ul>
<li><p>The notation above states that <code>length</code> takes a list
and returns an <code>Int</code></p></li>
<li><p>Also note that the a in the output is called a type variable and
it indicates that length is a <span><strong>polymorphic
function</strong></span> which allows it take different types of
input.</p></li>
</ul>
<pre><code>&gt; :info Bool
data Bool = False | True            -- Defined in &#39;GHC.Types&#39;
...</code></pre>
<div class="center">
<p><code>:info</code> in GHCi</p>
</div>
<p><span><strong>:info</strong></span> returns info about the type or
type class.</p>
<pre><code>:k Maybe
Maybe :: * -&gt; *</code></pre>
<div class="center">
<p><code>:k</code> in GHCi</p>
</div>
<p><span><strong>:k</strong></span> in ghci is called kinds and can be
used to find information about types.</p>
<ul>
<li><p>The example states that <code>Maybe</code> takes in a concrete
type and returns a new concrete type.</p></li>
</ul>
<h1 data-number="3" id="functions"><span
class="header-section-number">3</span> Functions</h1>
<h2 data-number="3.1" id="arrow"><span
class="header-section-number">3.1</span> Arrow</h2>
<p>The <span><strong>arrow</strong></span> <code>-&gt;</code> operator
is from lambda calculus. The scope of the arrow <code>-&gt;</code>
extends all the way to the right.</p>
<pre><code>\\x -&gt; \\y -&gt; sqrt(x^2 + y^2)
\\x y -&gt; sqrt $ x^2 + y^2</code></pre>
<div class="center">

</div>
<h2 data-number="3.2" id="pattern"><span
class="header-section-number">3.2</span> Pattern</h2>
<p>Pattern matching is used to conform input to a defined pattern. An
example of this might be using the <code>:</code> operator to partition
an input list into two parts.</p>
<p>In the body, it has a if/elif sort of structure. If the first
statement occurs then the one later will not. Because of this property,
it is better to specify the specific catches first and the general ones
later. If you define a function with limited catches and no general case
then it could fail.</p>
<pre><code>lucky :: (Integral a) =&gt; a -&gt; String
lucky 7 = &quot;Lucky!&quot;
lucky x = &quot;Nah&quot;

myLength :: (Num a) =&gt; a -&gt; a
mylength [] = 0
mylength (first:rest) = 1 + myLength rest</code></pre>
<div class="center">
<p>Pattern Matching Examples</p>
</div>
<p>Note that you cannot use <code>++</code> in pattern matching as it is
not a data constructor. That’s the key to understanding pattern
matching. We use it to resolve data types into their underlying data
constructor and generic field.</p>
<p><code>@</code> is something we can use to do pattern match but still
keep reference to the original item. A simple example of this is
<code>x@(y:ys)</code>.</p>
<p>Note that to do pattern matching you should put your pattern in
brackets. This is tied into how pattern matching works by deconstructing
data types.</p>
<h3 data-number="3.2.1" id="case"><span
class="header-section-number">3.2.1</span> Case</h3>
<p>Pattern matching is actually just a different syntax for
<code>case</code>.</p>
<pre><code>myLen2 :: (Num a) =&gt; [b] -&gt; a
myLen2 xs = case xs of [] -&gt; 0
                       (_,r) -&gt; 1 + myLen2 r</code></pre>
<div class="center">

</div>
<h2 data-number="3.3" id="guards"><span
class="header-section-number">3.3</span> Guards</h2>
<p>Guards are more like traditional if/elif statements. We follow the
first logic check is <code>True</code>. We also have a catch-all
statement at the end to catch anything missed by our logic checks.</p>
<pre><code>abs x
    | x &gt; 0 = x
    | x == 0 = 0
    | otherwise = -x

abs x = if x &gt; 0 then x
        else if x == 0 then 0
        else -x</code></pre>
<div class="center">
<p>Equivalent Functions</p>
</div>
<p>The two implementations of the absolute value function above are
essentially equivalent. The <code>|</code>, guards, syntax is just
syntactic sugar for the traditional if/else statements.</p>
<pre><code>amIFat :: (RealFloat a) =&gt; a -&gt; a -&gt; String
amIFat weight height
    | bmi &lt;= 18.5 = &quot;Underweight&quot;
    | bmi &lt;= 25.0 = &quot;Normal&quot;
    | bmi &lt;= 30.0 = &quot;Fat&quot;
    | otherwise = &quot;Whale&quot;
        where bmi = weight/height ^ 2

recArea :: (Num a) =&gt; [(a, a)] -&gt; [a]
recArea listRec = [area x y | (x, y) &lt;- listRec]
    where area x y = x * y</code></pre>
<div class="center">
<p>Examples of Guards</p>
</div>
<p>There are two other important details with guards:
<code>otherwise</code> and <code>where</code>.</p>
<p>The catch-all statement we mentioned before is the
<span><strong>otherwise</strong></span> keyword in Haskell. It is
usually located after all the checks in a guard block.</p>
<p>Another keyword called <span><strong>where</strong></span> is often
used with guards to calculate a value once and reduce redundancy.
<code>where</code> allows us to create local variables and
functions.</p>
<h2 data-number="3.4" id="let"><span
class="header-section-number">3.4</span> Let</h2>
<p><span><strong>let</strong></span> and
<span><strong>in</strong></span> are are to <code>where</code> as
<code>case</code> is to pattern matching.</p>
<pre><code>recArea2 :: (Num a) =&gt; [(a, a)] -&gt; [a]
recArea2 listRec =
    let area x y = x * y
    in [area x y | (x, y) &lt;- listRec]</code></pre>
<div class="center">
<p>Using <code>let</code>/<code>in</code></p>
</div>
<p>The advantage of <code>let</code> is that you can use it in more
situations:</p>
<pre><code>let perimeter x y = 2*x + 2*y in (perimeter 10 15, perimeter 1 2)

recArea3 :: (Num a) =&gt; [(a, a)] -&gt; [a]
recArea3 listRec = let area x y = x * y in [area x y | (x,y) &lt;- listRec]

recArea4 :: (Num a) =&gt; [(a, a)] -&gt; [a]
recArea4 listRec = [area x y | (x,y) &lt;- listRec, let area x y = x * y]</code></pre>
<div class="center">
<p>Examples of <code>let</code>/<code>in</code></p>
</div>
<h2 data-number="3.5" id="recursion"><span
class="header-section-number">3.5</span> Recursion</h2>
<pre><code>myMaximum :: (Ord a) =&gt; [a] -&gt; a
myMaximum [] = 0
myMaximum (n:[]) = n
myMaximum (h:t) = max h myMaximum t</code></pre>
<div class="center">
<p>Recursive <code>max</code> Function</p>
</div>
<p>Recursion is incredibly important in Haskell. The most basic form of
recursion is usually in splitting a list into its first item and the
rest of the list. You can solve a lot of problems using that basic
pattern.</p>
<p>The most important thing to remember is that recursion is best
learned with practice.</p>
<h1 data-number="4" id="higher-order-functions"><span
class="header-section-number">4</span> Higher Order Functions</h1>
<h2 data-number="4.1" id="curried-functions"><span
class="header-section-number">4.1</span> Curried Functions</h2>
<p>Functions like the <code>max</code> function aren’t what they seem.
<code>max</code> takes a single parameter and returns a function that
compares another parameter with the original parameter.</p>
<p>A simple example (LearnYouAHaskell) is <code>&gt; max 2 3</code>.
This function will first return a function that takes a number as an
argument and compares to three then it will call that new function with
3.</p>
<p>That seems confusing so let’s walk through it.</p>
<ol>
<li><p>First <code>max</code> takes in <code>2</code> as an argument and
returns a new function. This new function takes in another integer as an
argument and compares it only to <code>2</code>.</p></li>
<li><p>The new function is called with <code>3</code> which is compared
to <code>2</code>.</p></li>
</ol>
<p>This concept is crucial to understanding a key property of functional
languages. Their ability to have partial function is called
<code>currying</code>. As it turns out, all functions in Haskell only
have one argument. Functions that need more than one argument are called
again and again in the way we discussed above.</p>
<p>Another consequence of curring and Haskell’s laziness is that you can
call functions with too few variables and no one will complain because
you’ll just get a function back as long as you don’t ask Haskell to
display the result. You could then call this returned partial function
with another argument to get your final answer.</p>
<p>Although it’s important to understand currying, it’s still easier and
more practical to think of functions in their more traditional
programming form.</p>
<p>Functions can also be passed as arguments but they still have to be
defined explicitly in the function type.</p>
<pre><code>applyThrice :: (a -&gt; a) -&gt; a -&gt; a
applyThrice f x = f (f (f x));

myZipWith :: (a -&gt; b -&gt; c) -&gt; [a] -&gt; [b] -&gt; [c]
myZipWith _ [] _ = []
myZipWith _ _ [] = []
myZipWith f (h1:t1) (h2:t2) = (f h1 h2):(myZipWith f t1 t2)</code></pre>
<div class="center">
<p>Functions as Arguments</p>
</div>
<h3 data-number="4.1.1" id="sections"><span
class="header-section-number">4.1.1</span> Sections</h3>
<p>Sections are binary functions that only require and argument but it
doesn’t matter it if was supposed to be a left hand or right hand
argument. The reason for this is currying.</p>
<p>This property is useful to make more general functions.</p>
<pre><code>&gt; (+3) 7
10

&gt; (3+) 7
10;


square = (^2)</code></pre>
<div class="center">

</div>
<h2 data-number="4.2" id="useful-functions"><span
class="header-section-number">4.2</span> Useful Functions</h2>
<ul>
<li><p><span><strong>map</strong></span> takes a function and applies it
to all items in a list:</p></li>
</ul>
<pre><code>&gt; map (head) [&quot;test&quot;, &quot;function&quot;]
tf

&gt; map (3-) [1, 2, 3]
[2, 1, 0]

&gt; map (-3) [1, 2, 3]
ERROR</code></pre>
<div class="center">
<p>Mapping Over A List</p>
</div>
<ul>
<li><p><span><strong>filter</strong></span> is useful for getting rid of
values from a list:</p></li>
</ul>
<pre><code>larDivisible :: (Integral a) =&gt; [a] -&gt; a -&gt; a
larDivisible l d = last (filter p l)
    where p x = (mod x d) == 0</code></pre>
<div class="center">
<p>Filtering The Largest Divisor</p>
</div>
<ul>
<li><p><span><strong>takeWhile</strong></span> takes elements from a
list while a condition is satisfied</p></li>
</ul>
<p>These three functions are incredibly powerful. Learn them extremely
well.</p>
<h2 data-number="4.3" id="infix"><span
class="header-section-number">4.3</span> Infix</h2>
<p><span><strong>Infix notation</strong></span> is very useful for
certain functions that area easier to understand as infix functions.
Functions can be called in infix notation by using backticks.</p>
<pre><code>&gt; div 4 2
2

&gt; 4 \`div\` 2
2

&gt; (div 4) 2
2

&gt; (\`div\` 2) 4
2

&gt; (flip div 2) 4
2</code></pre>
<div class="center">
<p>Infix Notation</p>
</div>
<p>Note how we used infix notation and the
<span><strong>flip</strong></span> function to change which argument was
used first. Generally, infix notation is cleaner than the
<code>flip</code> function.</p>
<h2 data-number="4.4" id="lambdas"><span
class="header-section-number">4.4</span> Lambdas</h2>
<p><span><strong>Lambdas</strong></span> are used to create anonymous
functions. Anonymous functions are rstricted functions that are used for
very simple tasks. Their advantage is that they have minimal overhead
and can be embedded in more complicated statements.</p>
<p>In Haskell, they are indicated by a<br />
and wrapped in brackets:</p>
<pre><code>;zipWith (\\x y -&gt; x*2 + 5^(2*y)) [1, 2] [4, 6];</code></pre>
<div class="center">

</div>
<p>Lambdas can also pattern match but for only one case.</p>
<h2 data-number="4.5" id="folding"><span
class="header-section-number">4.5</span> Folding</h2>
<p>Folding is another common technique in Haskell. It allows you to
iterate through an object in a fashion. You call a fold with a binary
function, a starting value for an accumulator and a list and what it
does is run through each item in the list applying the binary operator
to the item from the list and the accumulator.</p>
<ul>
<li><p><span><strong>foldl</strong></span> starts folding from the
left:</p></li>
</ul>
<pre><code>&gt; foldl (+) 0 [1, 2, 3, 4, 5]
15

accumulator (operation) item</code></pre>
<div class="center">
<p><code>foldl</code> Example</p>
</div>
<ul>
<li><p><span><strong>foldr</strong></span> folds from the right:
<code>item (operation) accumulator</code></p></li>
<li><p><span><strong>foldl1</strong></span> and
<span><strong>foldr1</strong></span> work like regular folds but they
just take the left-most and right-most values, respectively, to use as
the accumulator.</p></li>
<li><p><span><strong>scanl</strong></span> and
<span><strong>scanr</strong></span> are like foldl and foldr but they
return a list after every pass instead of just a single final
value.</p></li>
<li><p><span><strong>scanl1</strong></span> and
<span><strong>scanr1</strong></span> are analogous to foldl1 and
foldr1.</p></li>
</ul>
<pre><code>&gt; length (takeWhile (&lt; 1000) (scanl1 (\\x y -&gt; x + sqrt y) [1..]))</code></pre>
<div class="center">
<p>How many natural numbers does it take for their square root to exceed
1000?</p>
</div>
<h2 data-number="4.6" id="section"><span
class="header-section-number">4.6</span> $</h2>
<p>Use <code>$</code> to calculate all to the right of the
<code>$</code>:</p>
<pre><code>&gt; (10 /) 5 + 2
4

&gt; (10 /) $ 5 + 2
1.428...</code></pre>
<div class="center">
<p>Example of <code>$</code></p>
</div>
<h2 data-number="4.7" id="function-composition"><span
class="header-section-number">4.7</span> Function Composition</h2>
<p>The <code>.</code> operator is used for function composition. This is
like the math property: <span class="math inline">\\((f \\circ g)(x) =
f(g(x))\\)</span> This is used to simplify code.</p>
<h2 data-number="4.8" id="point-free-style"><span
class="header-section-number">4.8</span> Point-Free Style</h2>
<p>This is a way to reduce redundency in functions:</p>
<pre><code>&gt; negative 5
-5

negative x = negate (abs x)

vs.

negative = negate . abs</code></pre>
<div class="center">
<p>Point-Free Statements</p>
</div>
<p>We can eliminate redundant numbers/variables from both sides.The
mathematical word for this is
<span><strong>eta-reduction</strong></span>.</p>
<p>There is one important thing to remember. If you pattern match an
argument, you must use it in the right-side of the statement. Note this
in the last two examples in the code above.</p>
<h1 data-number="5" id="types"><span
class="header-section-number">5</span> Types</h1>
<p>As previously mentioned, to get the type of something in GHCi, use
<code>:t</code>.</p>
<pre><code>&gt; :t &#39;a&#39;
&#39;a&#39; :: Char</code></pre>
<div class="center">

</div>
<p>The <code>::</code> means ’type of’.</p>
<h2 data-number="5.1" id="atomic-and-real-types"><span
class="header-section-number">5.1</span> Atomic and Real Types</h2>
<ul>
<li><p><span><strong>Int</strong></span> are signed 32 bit
numbers.</p></li>
<li><p><span><strong>Integer</strong></span> are not bounded.</p>
<ul>
<li><p>Use <code>Integer</code> sparingly because they are quite
slow.</p></li>
</ul></li>
<li><p><span><strong>Float</strong></span> have single
precision.</p></li>
<li><p><span><strong>Double</strong></span> have double
precision.</p></li>
<li><p><span><strong>Bool</strong></span> can be True or False.</p></li>
<li><p><span><strong>Char</strong></span></p></li>
</ul>
<h2 data-number="5.2" id="lists"><span
class="header-section-number">5.2</span> Lists</h2>
<h3 data-number="5.2.1" id="operations"><span
class="header-section-number">5.2.1</span> Operations</h3>
<ul>
<li><p><code>:</code> attaches an item to the front of a list:</p>
<ul>
<li><p>This is instantaneous.</p></li>
<li><p>This operation is sepcial as well. It’s actually a "synonym" for
the <code>cons</code> function from Lisp. It is used in the construction
of a list and is a data constructor. That’s why it is used a lot in
pattern matching.</p></li>
</ul></li>
<li><p><code>++</code> concantanates two lists:</p>
<ul>
<li><p><span><strong>Caution:</strong></span> this operator runs through
the whole left list.</p></li>
</ul></li>
<li><p><code>!!</code> is used to index a list:</p></li>
</ul>
<pre><code>&gt; &quot;hello&quot; ++ &quot; world&quot;
&quot;helloworld&quot;

&gt; 1:2:[3,4]
[1,2,3,4]

&gt; &quot;Test&quot; !! 1
&#39;e&#39;</code></pre>
<div class="center">
<p>List Operations</p>
</div>
<h3 data-number="5.2.2" id="useful-functions-1"><span
class="header-section-number">5.2.2</span> Useful Functions</h3>
<pre><code>&gt; elem 2 [1,2,3,4]
True

&gt; take 2 [1,2,4,5,7]
[1,2]

&gt; [1,2..10]
[1,2,3,4,5,6,7,8,9,10]

&gt; [1,3..10]
[1,3,5,7,9]

&gt; replicate 3 &quot;test&quot;
[&quot;test&quot;, &quot;test&quot;, &quot;test&quot;]</code></pre>
<div class="center">
<p>Functions on a List</p>
</div>
<ul>
<li><p><span><strong>head</strong></span> returns the first item in a
list.</p></li>
<li><p><span><strong>tail</strong></span> returns all items excluding
the first.</p></li>
<li><p><span><strong>last</strong></span> returns the last item in a
list.</p></li>
<li><p><span><strong>init</strong></span> returns all items excluding
the last.</p></li>
<li><p><span><strong>length</strong></span></p></li>
<li><p><span><strong>null</strong></span> checks if a list is
empty.</p></li>
<li><p><span><strong>reverse</strong></span></p></li>
<li><p><span><strong>take</strong></span> extracts n items from the
start of a list.</p></li>
<li><p><span><strong>drop</strong></span> deletes n items from the start
of a list similar to <span><strong>take</strong></span>.</p></li>
<li><p><span><strong>maximum</strong></span></p></li>
<li><p><span><strong>minimum</strong></span></p></li>
<li><p><span><strong>sum</strong></span></p></li>
<li><p><span><strong>product</strong></span></p></li>
<li><p><span><strong>elem</strong></span> tells you if an item is in a
list.</p></li>
<li><p><span><strong>..</strong></span></p>
<ul>
<li><p><span><strong>cycle</strong></span> pretends a list is an
infinite circle and the tail is connected back to the head.</p></li>
</ul></li>
<li><p><span><strong>repeat</strong></span> creates an infinite list out
of a parameter.</p></li>
<li><p><span><strong>replicate</strong></span> returns n copies of a
list inside a list.</p></li>
</ul>
<h3 data-number="5.2.3" id="list-comprehensions"><span
class="header-section-number">5.2.3</span> List Comprehensions</h3>
<p>List comprehensions work differently in Haskell than Python. E.g.
<code>&gt; [x | x &lt;- [1,2,3,4,5], x &lt; 5]</code>. The list above
can be read as: create a new list where x is an element from a list such
that <span class="math inline">\\(x &lt; 5\\)</span>.</p>
<p>We can have multiple conditions at the end as well:
<code>&gt; [x | x &lt;- [1..10], x /= 2, x &lt; 5]</code></p>
<pre><code>myLength s = sum [1 | _ &lt;- s]
removeNoneUppercase s = [c | c &lt;- s, elem c [&#39;A&#39;..&#39;Z&#39;]]
rightTriangles  = [(a,b,c) | c &lt;- [1..10], b &lt;- [1..c], c &lt;- [1..b], a^2 + b^2 == c^2]</code></pre>
<div class="center">
<p>Examples form LearnYouAHaskell</p>
</div>
<p>Note that in the <code>rightTriangles</code> above, the reason the
values for b exclude all values above c is to avoid repeats.</p>
<p>You can even have list comprehensions inside list comprehensions.</p>
<h2 data-number="5.3" id="tuples"><span
class="header-section-number">5.3</span> Tuples</h2>
<h3 data-number="5.3.1" id="basic-properties-1"><span
class="header-section-number">5.3.1</span> Basic Properties</h3>
<p>Tuples are immutable. Tuples, unlike lists, do not have to be
homogenous. A tuple decides its type based on the type of the items
inside and their index as well. The following pairs,
<code>(1, 2) (1, 'a')</code>, have different types:</p>
<h3 data-number="5.3.2" id="useful-functions-2"><span
class="header-section-number">5.3.2</span> Useful Functions</h3>
<ul>
<li><p><span><strong>fst</strong></span> retuns the first item in a
tuple pair.</p></li>
<li><p><span><strong>snd</strong></span> return the second
item.</p></li>
<li><p><span><strong>zip</strong></span> combines two lists into pairs
limited by the smaller list.</p></li>
</ul>
<pre><code>&gt; zip [1, 3, 45] [&#39;a&#39;, &#39;c&#39;, &#39;f&#39;, &#39;b&#39;]
[(1,&#39;a&#39;), (3,&#39;c&#39;), (45,&#39;f&#39;)]</code></pre>
<div class="center">
<p>Using <code>zip</code></p>
</div>
<h2 data-number="5.4" id="typeclasses"><span
class="header-section-number">5.4</span> Typeclasses</h2>
<p>They’re almost like properties that your values or functions are a
part of. Typclasses define a functions behaviour.</p>
<pre><code>&gt; :t (==)
(==) :: (Eq a) =&gt; a -&gt; a-&gt; Bool</code></pre>
<div class="center">
<p>TypeClasses</p>
</div>
<p>Considering the example above: The output tells us that the two
parameters <code>a</code> must be of the same type. This is kind of like
forcing a comparison between apples and apples and not allowing any
apples to orange comparisons.</p>
<p>This is specified by the typeclass prior to the
<code>=&gt;</code>.</p>
<h3 data-number="5.4.1" id="basic-typeclasses"><span
class="header-section-number">5.4.1</span> Basic Typeclasses</h3>
<ul>
<li><p><span><strong>Eq</strong></span> support <code>==</code> or
<code>/=</code>.</p></li>
<li><p><span><strong>Ord</strong></span> support <code>&lt;</code>,
<code>&gt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.</p></li>
<li><p><span><strong>Show</strong></span> can be turned into
strings.</p></li>
<li><p><span><strong>Read</strong></span> turns strings to a type that
supports <code>read</code>.</p>
<ul>
<li><p>Note that read alone won’t work. <code>read</code> decides the
return type by inferring the return type from other operators.</p></li>
<li><p><code>&gt; read "4"</code> gives <code>ERROR</code>.</p></li>
<li><p><code>&gt; read "4" :: Int</code> gives <code>4</code>.</p></li>
</ul></li>
<li><p><span><strong>Reads</strong></span> returns an empty list if it
fails to read.</p></li>
<li><p><span><strong>Enum</strong></span> are things that use succ and
pred.</p></li>
<li><p><span><strong>Bounded</strong></span> are things that have an
upper and lower bound.</p></li>
<li><p><span><strong>Num</strong></span> are things that can act like
numbers.</p></li>
<li><p><span><strong>Integral</strong></span> only include whole numbers
and is kind of a subclass of Num.</p></li>
<li><p><span><strong>Floating</strong></span> includes floats and
doubles.</p></li>
</ul>
<h1 data-number="6" id="custom-types"><span
class="header-section-number">6</span> Custom Types</h1>
<h2 data-number="6.1" id="data-types"><span
class="header-section-number">6.1</span> Data Types</h2>
<p>We can define our own data types using the
<span><strong>data</strong></span> keyword The way we define data type
is by giving it a name and all the other data types it could be.</p>
<pre><code>data Bool = False | True

data Shape = Circle Float Float Float | Rectangle Float Float Float Float
             deriving(Show)</code></pre>
<div class="center">
<p>Simple Data Types</p>
</div>
<p>IN the example above, <code>Circle</code> and <code>Rectangle</code>
are not types. They are <span><strong>data
constructors</strong></span>.</p>
<p><span><strong>Data constructors return a value of a given
type.</strong></span> The contructors can take types themselves and we
call those fields. The cool thing is that when we used things like
<code>4</code> or <code>False</code> we were using data contructors with
no fields.</p>
<p>The types and constructors must be capitals.</p>
<p><span><strong>deriving</strong></span> is a keyword used to add your
types to typeclasses. There is a little bit of magic going on here. Note
that <code>deriving</code> does not work with custom typeclasses.
<code>deriving</code> creates an <code>instance</code> of your data type
of the specified typeclass. This allows your data type to have the
behaviour specified by the typeclass.</p>
<pre><code>sarea :: Shape -&gt; Float
sarea Circle _ _ r = pi * (r ^ 2)
sarea Rectangle x1 y1 x2 y2 = (x2 - x1) * (y2 - y1)

data Point = Point Float Float deriving (Show)
data Shape = Circle Point Float | Rectangle Point Point deriving (Show)

sarea (Rectangle (Point x1 y1) (Point x2 y2)) = abs $ (x2 - x1) * (y2 - y1)

baseCircle :: Float -&gt; Shape
baseCircle r = Circle (Point 0 0) r

baseRect :: Float -&gt; Float -&gt; Shape
baseRect w h = Rectangle (Point 0 0) (Point w h)</code></pre>
<div class="center">
<p>Examples from LearnYouAHaskell</p>
</div>
<h3 data-number="6.1.1" id="record-syntax"><span
class="header-section-number">6.1.1</span> Record Syntax</h3>
<p>There’s another cool way to make data types more organized. We can
assign each field a name.
<code>data Person = Person {firstName :: String, lastName :: String, age :: Int}</code>
This creates functions called <code>firstName</code>,
<code>lastName</code>, and <code>age</code>. These helper functions take
in a <code>Person</code> and return their fields.</p>
<pre><code>&gt; let me = Person &quot;Shahzeb&quot; &quot;Asif&quot; 20
Person {blah blah...}

&gt; firstName me
&quot;Shahzeb&quot;</code></pre>
<div class="center">
<p>Records</p>
</div>
<p>Using record syntax also allows us to be more flexible and explicit
in creating people:</p>
<pre><code>Person {firstName = &quot;Bob&quot;, lastName = &quot;Tim&quot;, age = 100}</code></pre>
<div class="center">

</div>
<h2 data-number="6.2" id="type-constructors"><span
class="header-section-number">6.2</span> Type Constructors</h2>
<p>Type constructors are kind of like types but they allow you to change
the type of the value returned based on the value passed in to a data
constructor.</p>
<pre><code>data Maybe a = Nothing | Just a</code></pre>
<div class="center">
<p><code>Maybe</code></p>
</div>
<p><code>Maybe</code> is an example of a type constructor. The
<code>Just</code> keyword we used is nothing more than a data
constructor. It will return a new value of type <code>Maybe Int</code>
or a <code>Maybe Char</code>. The</p>
<p>Type constructors are like meta types. They’re useful when their
application could be applied to any other type.</p>
<p>Do not add typeclass constraints in data declarations because they
clutter up other functions but imposing unnecessary restrictions.</p>
<pre><code>data Vector a = Vector a a a deriving (Show)

vplus :: (Num t) =&gt; Vector t -&gt; Vector t -&gt; Vector t
vplus (Vector i j k) (Vector l m n) = Vector (i+l) (j+m) (k+n)</code></pre>
<div class="center">
<p>Example from LearnYouAHaskell</p>
</div>
<p>Note how in the example above, the function is restricting the types
to <code>Vector Num</code> but the data constructor doesn’t do any
restricting. Also note that the type signature of <code>vplus</code>
uses <code>Vector t</code> and not <code>Vector t t t</code>. This is
because we use types in the signature and not the values.</p>
<p><span><strong>To reiterate, the left-side of the = is the type
constructor or the</strong></span> <span><strong>type of the returned
value. The right-side of the = is the data</strong></span>
<span><strong>constructor which returns a value of a certain
type</strong></span></p>
<p><span><strong>Concrete</strong></span> types are any types that can
have actual values, e.g:</p>
<ul>
<li><p><code>Int</code></p></li>
<li><p><code>Maybe Int</code></p></li>
<li><p><code>Char</code></p></li>
<li><p>etc.</p></li>
</ul>
<p>This <a
href="http://stackoverflow.com/questions/18204308/Haskell-type-vs-data-constructor">StackOverflow
answer</a> answer helps clarify details here:</p>
<h2 data-number="6.3" id="instances"><span
class="header-section-number">6.3</span> Instances</h2>
<p>We’ve previously talked about <code>instances</code> and how they’re
created with <code>deriving</code>. Here are some more examples of
<code>instances</code> and what they allow us to do.</p>
<pre><code>-- Char is an instance of Ord because we can compare chars.
&gt; &#39;a&#39; &gt; &#39;b&#39;
False

-- Now we can check if two Points are equal.
data Point = Point Float Float deriving (Show, Eq)

(Point 0 0) == (Point 1 0)
False

(Point 0 0) == (Point 0 0)
True

elem (Point 1 0) [(Point 0 0), (Point 1 1), (Point 2 2)]
False</code></pre>
<div class="center">
<p>Examples</p>
</div>
<h2 data-number="6.4" id="newtype"><span
class="header-section-number">6.4</span> Newtype</h2>
<p><span><strong>newtype</strong></span> is reserved for a special case
where a data type only has one possible form.</p>
<p>It’s like a virtual type that’s fast to work with for this special
case. It should be treated as a normal type for all practical purposes.
The restriction is that newtype can only have one constructor and one
field.</p>
<p>One key difference between newtype and data is that with newtype,
Haskell doesn’t have to pattern match the data constructor or the value
field because there can only be one.</p>
<pre><code>data Cool = Cool {getCool :: Bool}

helloMe :: Cool -&gt; String
helloMe (Cool _) = &quot;hello&quot;

&gt; helloMe $ Cool True
&quot;hello&quot;
&gt; helloMe undefined
&quot;*** Exception:......

newtype Cool = Cool {getCool :: Bool}

&gt; helloMe $ Cool True
&quot;hello&quot;
&gt; helloMe undefined
&quot;hello&quot;</code></pre>
<div class="center">
<p>Differences between <code>data</code> and <code>newtype</code> from
LearnYouAHaskell</p>
</div>
<p>In the second example using <code>newtype</code>, Haskell doesn’t
bother to check if undefined and Cool match, it just does what it needs
to do.</p>
<h2 data-number="6.5" id="type-synonyms"><span
class="header-section-number">6.5</span> Type Synonyms</h2>
<p>We use the <span><strong>type</strong></span> keyword to describe
synonyms for existing types: <code>type</code> does not create anything
new and it cannot be applied to more than one item, i.e. it is
<span><strong>not</strong></span> an alternative to data
constructors.</p>
<pre><code>type PhoneNumber = String
type Name = String
type PhoneBook = [(Name, PhoneNumber)]

inPhoneBook :: Name -&gt; PhoneNumber -&gt; PhoneBook -&gt; Bool
inPhoneBook n pn pb = elem (n, pn) pb</code></pre>
<div class="center">
<p>Another great example from LearnYouAHaskell:</p>
</div>
<p>The type signature for <code>inPhoneBook</code> tells a lot about the
function. If we hadn’t used <code>type</code>, the type signature could
instead be
<code>inPhoneBook :: String -&gt; String -&gt; [(String, String)] -&gt; Bool</code>.
This type signature gives a lot less information about the function.</p>
<h2 data-number="6.6" id="common-types"><span
class="header-section-number">6.6</span> Common Types</h2>
<h3 data-number="6.6.1" id="maybe"><span
class="header-section-number">6.6.1</span> Maybe</h3>
<p>Maybe is used for error checking:</p>
<pre><code>data Maybe a = Nothing | Just a
               deriving (Eq, Ord)</code></pre>
<div class="center">

</div>
<h3 data-number="6.6.2" id="either"><span
class="header-section-number">6.6.2</span> Either</h3>
<p>Either is a type constructor that allows you to have two different
types:</p>
<pre><code>data Either a b = Left a | Right b
                  deriving (Eq, Ord, Read, Show)</code></pre>
<div class="center">

</div>
<p>This type is used for error checking that’s more detailed than
<code>Maybe</code>. If there is an error then we can return using
<code>Left</code> and <code>Maybe a</code> string but if it was
successful then we can return using <code>Right</code> and the return
value.</p>
<p>This way allows you to fail at more than one point which is useful
for debugging.</p>
<h3 data-number="6.6.3" id="association-lists"><span
class="header-section-number">6.6.3</span> Association Lists</h3>
<p>Association lists are just key-value pairs:</p>
<pre><code>newtype Assoc a b = Assoc [(a,b)]</code></pre>
<div class="center">

</div>
<h2 data-number="6.7" id="recursive-structures"><span
class="header-section-number">6.7</span> Recursive Structures</h2>
<ul>
<li><p>This is a slightly weird way to create types that split
easily:</p></li>
</ul>
<pre><code>data List a = Empty | Cons a List a

&gt; Cons 3 (Cons 2 (Cons 4 Empty))
Cons 3 (Cons 2 (Cons 4 Empty))</code></pre>
<div class="center">
<p>Our Own List</p>
</div>
<p>The type above is our very own list. The way it works is by stringing
along some time a until Empty is reached at the end. The
<code>Cons</code> operator is equivalent to <code>:</code> in normal
lists. We pattern match using the <code>cons</code>/<code>:</code>
operator.</p>
<h2 data-number="6.8" id="fixity-declarations"><span
class="header-section-number">6.8</span> Fixity Declarations</h2>
<p>We can define our own infix operator using the keywords
<span><strong>infix, infixr, infixl</strong></span>. We use infixr
because our operator is right-associativity.</p>
<pre><code>infixr 5 :-:
data List a = Empty | a :-: (List a)
    deriving (Show, Read, Eq, Ord)</code></pre>
<div class="center">
<p>Our Own <code>:</code></p>
</div>
<p>The 5 means that it takes a lower precedence than <code>+</code> or
<code>*</code>.</p>
<h2 data-number="6.9" id="type-examples"><span
class="header-section-number">6.9</span> Type Examples</h2>
<p>We will implement a binary search tree. This is a simple tree that
places values less than current node to the left and values greater to
the right. This eventually results in a tree where all the values to the
left are lower and all the values to the right are higher.</p>
<pre><code>data Tree a = EmptyTree | Node a (Tree a) (Tree a)
    deriving (Show, Read, Eq)

singleton :: a -&gt; Tree a
singleton a = Node a EmptyTree EmptyTree

treeInsert :: (Ord a) =&gt; a -&gt; Tree a -&gt; Tree a
treeInsert x EmptyTree = singleton x
treeInsert x (Node a lt rt)
    | x == a = Node x lt rt
    | x &lt; a = Node a (treeInsert x lt) rt
    | x &gt; a = Node a lt (treeInsert x rt)

treeElem :: (Ord a) =&gt; a -&gt; Tree a -&gt; Bool
treeElem x EmptyTree = False
treeElem x (Node a lt rt)
    | x == a = True
    | x &lt; a = treeElem x lt
    | x &gt; a = treeElem x rt</code></pre>
<div class="center">
<p>Tree from LearnYouAHaskell</p>
</div>
<p>Study this module and note an efficient way to insert items from a
list:
<code>foldr Tree.treeInsert EmptyTree [1, 2, 3, 4, -12, -5 , 6]</code></p>
<h2 data-number="6.10" id="typeclasses-1"><span
class="header-section-number">6.10</span> Typeclasses</h2>
<p>We’ve already discussed typeclasses but to reiterate: typeclasses
affect the way types behave. They are <span><strong>NOT</strong></span>
like classes from other languages.</p>
<p>The <span><strong>class</strong></span> keyword is used to define a
new typeclass.</p>
<pre><code>class Eq a where
    (==) :: a -&gt; a -&gt; Bool
    (/=) :: a -&gt; a -&gt; Bool
    x == y :: not (x /= y)
    x /= y :: not (x == y)</code></pre>
<div class="center">
<p><code>Eq</code></p>
</div>
<p><code>Eq</code> is a cool typeclass. Note how the functions are
recursively defined. This is because they are just the default
definitions. To use this class, an instance just has to define one of
the two functions. That way, the other one automatically works.</p>
<h3 data-number="6.10.1" id="instance"><span
class="header-section-number">6.10.1</span> Instance</h3>
<p>We can create our own instances of a typeclass which is necessary for
custom typeclasses. This is best shown with an example.</p>
<pre><code>data trafficLight = Red | Yellow | Green

instance show trafficLight where
    show Red = &quot;Red light&quot;
    show Yellow = &quot;Yellow light&quot;
    show Green = &quot;Green light&quot;</code></pre>
<div class="center">
<p>Custom TypeClass</p>
</div>
<p>Note the <span><strong>instance</strong></span> keyword to create our
own instance of a typeclass. Also note that the function
<code>show</code> was effectively overwritten for this type.</p>
<p>We would also define instances of different types for a
typeclass.</p>
<pre><code>class YesNo a where
    yessno :: a -&gt; Bool

instance YesNo Integer where
    yesno 0 = False
    yesno _ = True</code></pre>
<div class="center">

</div>
<p><span><strong>Functor</strong></span> is a typeclass for mapping over
things. It will be explained in much more detail later.</p>
<pre><code>
class MyFunctor f where
    myfmap :: (a -&gt; b) -&gt; f a -&gt; f b

instance myFunctor [] where
    myfmap f [] = []
    myfmap f (x:xs) = (f x):(myfmap f xs)

instance MyFunctor Tree where
    myfmap f EmptyTree = EmptyTree
    myfmap f (Node v lt rt) = Node (f v) (myfmap f lt) (myfmap f rt)</code></pre>
<div class="center">
<p><code>MyFunctor</code></p>
</div>
<p>This is a simple implementation of "Functor". Note how different
implementations are defined for <code>myfmap</code> in each
instance.</p>
<h1 data-number="7" id="functors"><span
class="header-section-number">7</span> Functors</h1>
<p>Functor is a typeclass with only one method: <code>fmap</code>.
<code>fmap</code> takes in a function and uses it on a value in a given
<span><strong>context</strong></span>. By context, I mean that there is
some overhead involved in dealing with and storing the value, e.g.
<code>Maybe</code>, <code>Either</code>,...</p>
<p>The function passed in must only take one parameter. To put it
simply: <span><strong>a functor applies a simple function
to</strong></span> <span><strong>a value in a context and then returns a
new value in the</strong></span> <span><strong>same
context</strong></span>.</p>
<pre><code>&gt; fmap (+3) (Just 3)
Just 6

&gt; fmap (+3) [1, 2, 3]
[4, 5, 6]</code></pre>
<div class="center">
<p>Using <code>fmap</code></p>
</div>
<p>Also note that when people refer to functors, they mean the specific
instances of the typeclass Functor, i.e. things you can map over.</p>
<h2 data-number="7.1" id="laws"><span
class="header-section-number">7.1</span> Laws</h2>
<p>There are two laws that all instances of Functor must obey.</p>
<ol>
<li><p>The first law is that mapping id over a functor must return the
functor itself.</p></li>
<li><p>The second law is that mapping using a composition of two
functions must be the same as mapping using the two functions
separately.</p></li>
</ol>
<pre><code>-- First Law
&gt; fmap id [1,2]
[1,2]

-- Second Law
;&gt; fmap (2*) $ fmap (3+) [1,2]
[8,10]
&gt; fmap ((2*) . (3+)) [1,2]
[8,10]</code></pre>
<div class="center">
<p>Laws of Functors</p>
</div>
<h2 data-number="7.2" id="applicative"><span
class="header-section-number">7.2</span> Applicative</h2>
<p>This is another class that fills a gap in using functors stored in
<code>Control.Applicative</code>.</p>
<p>If we apply a partial function to a functor which will need another
argument later, we can’t simply use fmap again.</p>
<p><code>&gt; fmap [5,6,7] (fmap (*) [1,2,3])</code> gives
<code>ERROR</code></p>
<p>We can track the reason this doesn’t work.</p>
<ol>
<li><p>After first mapping <code>(*)</code> we end up with
<code>[1*, 2*, 3*]</code></p></li>
<li><p>But now we try to map functions in a context using fmap but fmap
only works with functions that work outside of contexts. This causes an
error.</p></li>
</ol>
<p>For these cases, we have the Applicative typeclass:</p>
<pre><code>class (Functor f) =&gt; Applicative f where
    pure :: a -&gt; f a
    (&lt;*&gt;) :: f (a -&gt; b) -&gt; f a -&gt; f b</code></pre>
<div class="center">
<p><code>Applicative</code></p>
</div>
<ul>
<li><p><code>pure</code> takes a concrete type and returns it in a new
context.</p></li>
<li><p><code>&lt;*&gt;</code> is a function that we can pass a type with
a function already applied to it, i.e. like <code>[1*, 2*, 3*]</code>
from above and it will apply it to the argument:</p></li>
<li><p><code>&lt;$&gt;</code> is another syntax replacement for fmap. It
is identical to fmap.</p></li>
</ul>
<p>To put it simply: <span><strong>applicatives take a function in
a</strong></span> <span><strong>context and apply it to a value in a
given context</strong></span>.</p>
<pre><code>&gt; let t = fmap (*) [2,3]
&gt; t &lt;*&gt; [3]
[6,9]

&gt; (*) &lt;$&gt; [1, 2, 3] &lt;*&gt; [4]
[4,8,12]

&gt; (*) &lt;$&gt; [1, 2, 3] &lt;*&gt; 4
ERROR

&gt; (*) &lt;$&gt; [1, 2, 3] &lt;*&gt; pure 4
[4, 8, 12]

&gt; (*) &lt;$&gt; Just 3 &lt;*&gt; Just 6
Just 18

&gt; (++) &lt;$&gt; getLine &lt;*&gt; getLine</code></pre>
<div class="center">
<p>Examples of <code>Applicative</code>s</p>
</div>
<p><code>IO</code>, <code>[]</code>, and <code>Maybe</code> are some of
the instances of Applicative functors.</p>
<pre><code>instance Applicative Maybe where
    pure = Just
    Nothing &lt;*&gt; _ = Nothing
    (Just f) &lt;*&gt; something = fmap f something

instance Applicative [] where
    pure x = [x]
    fs &lt;*&gt; xs = [f x | f &lt;- fs, x &lt;- xs]

instance Applicative IO where
    pure = return
    a &lt;*&gt; b = do
        f &lt;- a
        x &lt;- b
        return (f x)</code></pre>
<div class="center">
<p>Some <code>instance</code>s of <code>Applicative</code></p>
</div>
<h1 data-number="8" id="monads"><span
class="header-section-number">8</span> Monads</h1>
<h2 data-number="8.1" id="definition"><span
class="header-section-number">8.1</span> Definition</h2>
<p>Monad is just a typeclass that has two key functions:
<code>return</code> and <code>(&gt;&gt;=)</code>.</p>
<pre><code>class Monad m where
    return :: a -&gt; m a
    (&gt;&gt;=) :: m a -&gt; (a -&gt; m b) -&gt; m b
    ...</code></pre>
<div class="center">
<p><code>Monad</code></p>
</div>
<ul>
<li><p>The <code>return</code> function will take a type and return the
monad compatible version of it, e.g. It might take in an
<code>Int</code> and return a <code>Maybe Int</code>. It is very similar
to <code>pure</code> in applicatives.</p></li>
<li><p>The <code>&gt;&gt;=</code> operator is pronounced bind. It is
used to bind operations together.</p></li>
</ul>
<p>To get a better sense of <code>Monads</code>, let’s look at
<code>Maybe</code>.</p>
<pre><code>instance Monad Maybe where
    return x = Just x
    Just x &gt;&gt;= f = f x
    Nothing &gt;&gt;= _ = nothing</code></pre>
<div class="center">
<p><code>Maybe</code></p>
</div>
<p><code>return</code> is easy to understand and even easier after
understanding bind.</p>
<p>What bind ends up doing is it feeds the result of the previous
operation to the next. This is used to create chains of commands.</p>
<p>To put it simply: <span><strong>Monads allow you to perform
complex</strong></span> <span><strong>computations in
contexts</strong></span>.</p>
<p>Looking at the definition of bind in <code>Maybe</code>, it will open
up a <code>Maybe x</code> and then apply a function but this function
MUST return a <code>Maybe x</code>.</p>
<p>The easiest way to understand how bind works is to work through an
example. This example is derived from the CMSC-16100 lecture notes.</p>
<pre><code>father :: Person -&gt; Maybe Person
gfather p = father p &gt;&gt;= father</code></pre>
<div class="center">

</div>
<p>First, note that <code>father</code> is some function that may return
a persons father. It takes in a type <code>Person</code> and returns a
<code>Maybe Person</code></p>
<p>Using <code>father</code> and the Monad instance of Maybe, we can
easily define gfather to find a person’s grandfather.</p>
<p>The father of a <code>Person p</code> is found. This will return a
<code>Maybe Person</code> type which will then be fed into the next call
for father.</p>
<p>This results in father being called successively. And if
<code>father p</code> returned a <code>Nothing</code> then the whole
thing would return <code>Nothing</code>.</p>
<p>Every monad is also a <code>Functor</code>.</p>
<h2 data-number="8.2" id="laws-1"><span
class="header-section-number">8.2</span> Laws</h2>
<p>There are three laws that every monad instance should follow:</p>
<ol>
<li><p><span><strong>left identity</strong></span>:
<code>return a &gt;&gt;= f  ==  f a</code></p></li>
<li><p><span><strong>right identity</strong></span>:
<code>ma &gt;&gt;= return  ==  ma</code></p></li>
<li><p><span><strong>associativity</strong></span>:
<code>(ma &gt;&gt;= f) &gt;&gt;= g  ==  ma &gt;&gt;= (\\x -&gt; f x &gt;&gt;= g)</code></p></li>
</ol>
<h2 data-number="8.3" id="functions-1"><span
class="header-section-number">8.3</span> Functions</h2>
<p>There are other functions used with Monads apart from
<code>return</code> and <code>bind</code>.</p>
<ul>
<li><p><code>&gt;&gt;</code> is used when we just want to toss the
results.</p></li>
<li><p><code>=&lt;&lt;</code> is just the bind operator
reversed.</p></li>
<li><p><code>&gt;==&gt;</code> and <code>&lt;==&lt;</code> are a little
more complicated so look them up on typeclassopedia.</p></li>
</ul>
<h2 data-number="8.4" id="do"><span
class="header-section-number">8.4</span> Do</h2>
<p>The <code>do</code> blocks used in IO are actually just syntactic
constructs for the binding operators. The do block allows us to do
imperative style programming but using functions.</p>
<p>Note that imperative style does not mean imperative.</p>
<pre><code>return 1 &gt;&gt;= (\\x -&gt;
    return (x*x) &gt;&gt;= \\(x -&gt;
        return (x+1) &gt;&gt;= (\\x -&gt;
            return x)))

do
    x &lt;- return $ 1
    x &lt;- return $ x * x
    x &lt;- return $ x + 1
    return x</code></pre>
<div class="center">
<p>Equivalent Blocks from CMSC-16100 Notes</p>
</div>
<p>Let’s go over exactly what happens.</p>
<p>We know that <code>&gt;&gt;=</code> takes in two arguments: a Monad
type and a function that returns a Monad type.</p>
<p>So in the first line with <code>return 1 &gt;&gt;= (\\x -&gt;</code>,
<code>return 1</code> gives us a <code>Monad Int</code> which then gets
fed into another anonymous function. And it works out because this new
function takes in a regular type and returns another Monad type.</p>
<p>It turns out that the <code>&lt;-</code> notation is just the
computation flow. The variable on the left of the <code>&lt;-</code> is
just the argument for the next anonymous function that takes a regular
type and returns a Monad type.</p>
<p>This is also why the last line in a do block cannot have the
<code>&lt;-</code>. Because bind must return a Monad type.</p>
<h2 data-number="8.5" id="common-monads"><span
class="header-section-number">8.5</span> Common Monads</h2>
<h3 data-number="8.5.1" id="maybe-1"><span
class="header-section-number">8.5.1</span> Maybe</h3>
<p>Maybe is used an awful lot in Haskell. It’s used largely inplace of
exceptions. It’s better to return a <code>Maybe a</code> than raise
exceptions constantly.</p>
<p>The real strength of <code>Maybe</code> is in chaining
<code>Maybe</code> statements which lets you do many things and has
built in error checking. If one thing were to fail, the whole block
would fail.</p>
<h3 data-number="8.5.2" id="get"><span
class="header-section-number">8.5.2</span> Get</h3>
<p><code>Get</code> is useful for byte operations. Here’s an example
adapted from the Haskell wiki:</p>
<pre><code>import qualified Data.ByteString.Lazy as BL
import qualified Data.Binary.Get as BG

main = do
    content &lt;- BL.getContent
    print $ BG.runGet myParser content

myParser :: BG.Get String
...</code></pre>
<div class="center">
<p>Byte Parser</p>
</div>
<p><code>runGet</code> is a function that takes a <code>Get a</code> and
runs it on a bytestring. Our parser does actually operate on the content
just in a slightly non-obvious way.</p>
<h1 data-number="9" id="modules"><span
class="header-section-number">9</span> Modules</h1>
<p>Prelude is the default module but you can import others. Below are
all the ways you can import modules:</p>
<ul>
<li><p><code>import Data.List</code></p></li>
<li><p><code>import Data.List Data.Map Data.Set</code></p></li>
<li><p><code>import Data.List (nub, sort)</code></p></li>
<li><p><code>import Data.List hiding (nub)</code></p></li>
</ul>
<p>Importing modules this way puts them in the global namespace but if
you want to specify which module they’re a part of then we can use the
<span><strong>qualified</strong></span> keyword:</p>
<ul>
<li><p><code>import qualified Data.List</code></p></li>
<li><p><code>import qualified Data.List as DL</code></p></li>
</ul>
<h2 data-number="9.1" id="basic-modules"><span
class="header-section-number">9.1</span> Basic Modules</h2>
<h3 data-number="9.1.1" id="data.list"><span
class="header-section-number">9.1.1</span> Data.List</h3>
<pre><code>&gt; intercalate &quot;test&quot; [&quot;This&quot;, &quot;is&quot;, &quot;person&quot;]
&quot;Thistestistestperson&quot;

&gt; concatMap (replicate 4) [1..3]
[1,1,1,1,2,2,2,2,3,3,3,3]

&gt; all (&gt;3) [2..4]
False

&gt; any (&gt;3) [2..4]
True

&gt; span (\`elem\` [&#39;A&#39;..&#39;Z&#39;]) &quot;ROOminG&quot;
[&quot;ROO&quot;, &quot;minG&quot;]

&gt; break (== &#39;a&#39;) &quot;Blooyay&quot;
[&quot;Blooy&quot;, &quot;ay&quot;]

&gt; take 5 $ iterate (1+) 0
[0, 1, 2, 3, 4]

&gt; [1..10] \\\\ [1,3..10]
[2,4,6,8,10]

groupBy :: (a -&gt; a -&gt; Bool) -&gt; [a] -&gt; [[a]]
groupBy _ [] = []
groupBy eq (x:xs) = (x:ys) : groupBy eq zs
    where (ys, zs) = span (eq x) xs

on (==) (&gt; 0)
\\x y -&gt; (x &gt; 0) == (y &gt; 0)</code></pre>
<div class="center">
<p><code>Data.List</code></p>
</div>
<ul>
<li><p><span><strong>intersperse</strong></span> places a parameter
inbetween items in a list.</p></li>
<li><p><span><strong>intercalate</strong></span> places a list between
lists in a list of lists.</p></li>
<li><p><span><strong>transpose</strong></span> takes a list of lists and
transposes them as if they were a 2D matrix.</p></li>
<li><p><span><strong>foldl’</strong></span> and
<span><strong>foldl1’</strong></span> are safer versions for large
lists.</p></li>
<li><p><span><strong>concat</strong></span> concantanates
lists.</p></li>
<li><p><span><strong>concatMap</strong></span> first maps a function to
the list and then concantanates the result.</p></li>
<li><p><span><strong>and</strong></span> just ANDs boolean items in a
list.</p></li>
<li><p><span><strong>or</strong></span> just ORs boolean items in a
list.</p></li>
<li><p><span><strong>any</strong></span> and
<span><strong>all</strong></span> are used to simplify and/or functions
by hiding the map function.</p></li>
<li><p><span><strong>iterate</strong></span> just creates a list using
an operation and a starting item.</p></li>
<li><p><span><strong>splitAt</strong></span> just splits a list into two
based on the given index.</p></li>
<li><p><span><strong>takeWhile</strong></span> takes items from a list
as long as the condition is satisfied.</p></li>
<li><p><span><strong>dropWhile</strong></span> drops items from a list
similar to takeWhile.</p></li>
<li><p><span><strong>span</strong></span> splits a list into two as long
as a condition is satisfied.</p></li>
<li><p><span><strong>breaks</strong></span> breaks a list into two as
soon as a condition is satisfied.</p></li>
<li><p><span><strong>sort</strong></span></p></li>
<li><p><span><strong>group</strong></span> will create lists of adjacent
identical items.</p></li>
<li><p><span><strong>inits</strong></span> and
<span><strong>tails</strong></span> are like init and tail but applied
recursively until the list is empty.</p></li>
<li><p><span><strong>isInfixOf</strong></span> will check if a
subsequence is in a list.</p></li>
<li><p><span><strong>isPrefixOf</strong></span></p></li>
<li><p><span><strong>isSuffixof</strong></span></p></li>
<li><p><span><strong>elem</strong></span></p></li>
<li><p><span><strong>notElem</strong></span></p></li>
<li><p><span><strong>partition</strong></span> returns two lists. One
that satisfies a condition and the other includes the rest.</p></li>
<li><p><span><strong>find</strong></span> returns the first item that
satisfies a condition.</p></li>
<li><p><span><strong>elemIndex</strong></span> returns the index of an
element.</p></li>
<li><p><span><strong>elemIndices</strong></span> returns returns more
than one index.</p></li>
<li><p><span><strong>findIndex</strong></span> returns the index of the
first item that satisfies the condition.</p></li>
<li><p><span><strong>lines</strong></span> will split a string with
newlines into a list of lines.</p></li>
<li><p><span><strong>unlines</strong></span> does the opposite of
lines.</p></li>
<li><p><span><strong>words</strong></span> will split a line with spaces
into a list of words.</p></li>
<li><p><span><strong>unwords</strong></span> does the opposite of
words.</p></li>
<li><p><span><strong>nub</strong></span> returns a list with no
duplicate elements.</p></li>
<li><p><span><strong>delete</strong></span> deletes all instances of an
item from an array.</p></li>
<li><p><span><strong>backslash*2</strong></span> removes items from the
first parameter if they exist in the second parameter.</p></li>
<li><p><span><strong>union</strong></span> is like the opposite of
backslash*2.</p></li>
<li><p><span><strong>intersect</strong></span> finds the intersection of
lists.</p></li>
<li><p><span><strong>insert</strong></span> puts a new item in a list
right before another item equal to or greater.</p></li>
<li><p>Some of these functions are legacy functions replaced by more
generic versions:</p>
<ul>
<li><p><span><strong>nubBy, deleteBy, unionBy, intersectBy,
groupBy</strong></span></p></li>
<li><p>Note that groupBy is a little tricky to understand so use the
implementation below:</p></li>
</ul></li>
<li><p><span><strong>on</strong></span> is used to simplify use on
<code>*By</code> functions. The two statements below are
equivalent:</p></li>
<li><p>Some other new functions:</p>
<ul>
<li><p><span><strong>sortBy, insertBy, maximumBy, and
minimumBy</strong></span></p></li>
</ul></li>
</ul>
<h3 data-number="9.1.2" id="data.char"><span
class="header-section-number">9.1.2</span> Data.Char</h3>
<pre><code>&gt; filter (isDigit) &quot;test 12 fourty 23&quot;
&quot;1223&quot;

&gt; filter (not . isDigit) &quot;test 12 fourty 23&quot;
&quot;test  fourty &quot;

-- Caesar Cipher
&gt; map chr $ map ((5+) . ord) &quot;Test&quot;
&quot;yjxy&quot;</code></pre>
<div class="center">
<p><code>Data.Char</code></p>
</div>
<ul>
<li><p><span><strong>isControl</strong></span></p></li>
<li><p><span><strong>isSpace</strong></span></p></li>
<li><p><span><strong>isLower</strong></span></p></li>
<li><p><span><strong>isUpper</strong></span></p></li>
<li><p><span><strong>isAlpha</strong></span> and
<span><strong>isLetter</strong></span> check if the character is a
letter.</p></li>
<li><p><span><strong>isAlphaNum</strong></span> checks if the char is a
letter or number.</p></li>
<li><p><span><strong>isPrint</strong></span> checks if char can be
printed.</p></li>
<li><p><span><strong>isDigit</strong></span> checks 0-9.</p></li>
<li><p><span><strong>isOctDigit</strong></span></p></li>
<li><p><span><strong>isHexDigit</strong></span></p></li>
<li><p><span><strong>isMark</strong></span> checks for unicode mark
chars.</p></li>
<li><p><span><strong>isNumber</strong></span> checks 0-9 but also roman
numerals and others.</p></li>
<li><p><span><strong>isPunctuation</strong></span></p></li>
<li><p><span><strong>isSymbol</strong></span> checks for math and
currency symbols.</p></li>
<li><p><span><strong>isSeparator</strong></span> checks for spaces and
separators.</p></li>
<li><p><span><strong>isAscii</strong></span></p></li>
<li><p><span><strong>isLatin1</strong></span> checks if char is in the
first 256 chars of Unicode.</p></li>
<li><p><span><strong>isAsciiUpper</strong></span></p></li>
<li><p><span><strong>isAsciiLower</strong></span></p></li>
<li><p><span><strong>toUpper</strong></span></p></li>
<li><p><span><strong>toLower</strong></span></p></li>
<li><p><span><strong>toTitle</strong></span> converts char to title-case
which is usually upper-case.</p></li>
<li><p><span><strong>digitToInt</strong></span> converts char to int in
hex.</p></li>
<li><p><span><strong>intToDigit</strong></span></p></li>
<li><p><span><strong>ord</strong></span> converts char to their unicode
value.</p></li>
</ul>
<h3 data-number="9.1.3" id="data.map"><span
class="header-section-number">9.1.3</span> Data.Map</h3>
<p>This module is for working with dictionary like structures. It works
on <code>(key, value)</code> pairings.</p>
<pre><code>&gt; let phoneBook =
    [(&quot;a&quot;, 2),
    (&quot;b&quot;, 4)]

findByKey :: (Eq k) =&gt; k -&gt; [(k, v)] -&gt; Maybe v
findByKey k [] = Nothing
findByKey k ((ks, vs):xs) = if k == ks then Just vs else findByKey k xs

findByKey2 :: (Eq k) =&gt; k -&gt; [(k, v)] -&gt; Maybe v
findByKey2 k = foldl (\\ acc (ks, vs) -&gt; if ks == k then Just vs else acc) Nothing</code></pre>
<div class="center">
<p><code>Data.Map</code></p>
</div>
<p>Note that the <code>foldl</code> has <code>Nothing</code> as it’s
accumulator which doesn’t change but may be returned. This is a clever
way to use folding.</p>
<ul>
<li><p><span><strong>fromList</strong></span> takes an association list
and removes duplicates and items where two keys are mapped to different
values.</p></li>
<li><p><span><strong>empty</strong></span> returns an empty
map.</p></li>
<li><p><span><strong>insert</strong></span> takes a key, values and a
map and returns a new map with the key, values inserted.</p></li>
<li><p><span><strong>null</strong></span> checks for empty map.</p></li>
<li><p><span><strong>size</strong></span></p></li>
<li><p><span><strong>singleton</strong></span> creates a new map but
with a key, value you give already inserted.</p></li>
<li><p><span><strong>lookup</strong></span> just looks up a key, value
pair and returns the value.</p></li>
<li><p><span><strong>member</strong></span> is like the python
’in’.</p></li>
<li><p><span><strong>map</strong></span></p></li>
<li><p><span><strong>filter</strong></span></p></li>
<li><p><span><strong>keys</strong></span> returns all the keys.</p></li>
<li><p><span><strong>elems</strong></span> returns all the
values.</p></li>
<li><p><span><strong>fromListWith</strong></span> uses a function to
store values instead of throwing away duplicates.</p></li>
<li><p><span><strong>insertWith</strong></span></p></li>
</ul>
<h3 data-number="9.1.4" id="data.set"><span
class="header-section-number">9.1.4</span> Data.Set</h3>
<p>These are implemented using trees so they’re faster than lists.</p>
<ul>
<li><p><span><strong>fromList</strong></span></p></li>
<li><p><span><strong>intersection</strong></span></p></li>
<li><p><span><strong>difference</strong></span></p></li>
<li><p><span><strong>union</strong></span></p></li>
<li><p><span><strong>size</strong></span></p></li>
<li><p><span><strong>member</strong></span></p></li>
<li><p><span><strong>null</strong></span></p></li>
<li><p><span><strong>singleton</strong></span></p></li>
<li><p><span><strong>insert</strong></span></p></li>
<li><p><span><strong>delete</strong></span></p></li>
<li><p><span><strong>toList</strong></span> converts a set back to a
list.</p></li>
</ul>
<h2 data-number="9.2" id="custom-modules"><span
class="header-section-number">9.2</span> Custom Modules</h2>
<p>For practice, we’ll create a simple module for operations on a
sphere.</p>
<pre><code>module Sphere (
area,
volume
) where

area :: (Num a) =&gt; a -&gt; a
area r = 4 * pi * (r ^ 2)

volume :: (Num a) =&gt; a -&gt; a
volume r = 4 / 3 * pi * (r ^ 3)</code></pre>
<div class="center">
<p>Sphere Module</p>
</div>
<p>Importing the module can be a little annoying. Make sure that the
file name is the same as the module name.</p>
<p>You can also have submodules. The <code>file.hs</code> should have a
path like <code>./Geometry/Sphere.hs</code>. This module can be referred
to as <code>module Geometry.Sphere</code></p>
<p>For custom data types, you can export all the constructors by using
<code>(..)</code>.</p>
<pre><code>module Sphere (
area,
volume,
Color (..)
) where

...

data Color = Blue | Green</code></pre>
<div class="center">

</div>
<h1 data-number="10" id="io"><span
class="header-section-number">10</span> I/O</h1>
<h2 data-number="10.1" id="terminal"><span
class="header-section-number">10.1</span> Terminal</h2>
<p><code>main</code> is our main like function thing that will allow us
to do things that have side effects. All I/O actions and their impure
actions occur inside main or a do block that is called by main.</p>
<p><span><strong>Side effects</strong></span> occur when a function
changes an existing value instead of returning a new value
altogether.</p>
<pre><code>main = do
    putStrLn &quot;Name: &quot;
    name &lt;- getLine
    putStrLn (&quot;Hi&quot; ++ name)</code></pre>
<div class="center">
<p>Simple <code>main</code> Function</p>
</div>
<p>Let’s look at each part of the function above.</p>
<ul>
<li><p>The <code>putStrLn</code> function takes a string and returns an
I/O action. I/O actions have side effects.</p></li>
<li><p>Note that the <code>getLine</code> action is "impure" because it
does not guarantee the same output for the same input. We can’t pass
around getLine to normal functions because it is impure. We need to use
it in a Monad context.</p></li>
</ul>
<p>The impure functions like I/O must stay in impure environments. Note
that you can never "assign" the last statement in a do block to
anything. Look to the section on Monads for an explanation.</p>
<p>To get the result of an I/O action you must do it inside another I/O
action by using <code> &lt;- </code>. This will make more sense after
understanding <code>monads</code>.</p>
<pre><code>main = do
    putStrLn &quot;Name?&quot;
    raw_name &lt;- getLine
    let name = map DC.toUpper raw_name
    putStrLn (&quot;Hi &quot; ++ name);

main = do
    putStrLn &quot;Line please?&quot;
    line &lt;- getLine
    if null line then return ()
        else do
            putStrLn $ reverseWords line
            main

reverseWords :: String -&gt; String
reverseWords = unwords . map reverse . words</code></pre>
<div class="center">
<p>More Examples</p>
</div>
<h3 data-number="10.1.1" id="useful-functions-3"><span
class="header-section-number">10.1.1</span> Useful Functions</h3>
<pre><code>&gt; mapM_ (print . (3+)) [1, 2, 3]
4
5
6</code></pre>
<div class="center">
<p>Examples</p>
</div>
<ul>
<li><p><span><strong>putStrLn</strong></span></p></li>
<li><p><span><strong>putStr</strong></span></p></li>
<li><p><span><strong>putChar</strong></span></p></li>
<li><p><span><strong>print</strong></span> calls show on something
before putting it to terminal.</p></li>
<li><p><span><strong>getChar</strong></span></p></li>
<li><p><span><strong>getLine</strong></span></p></li>
<li><p><span><strong>getEnv</strong></span> is used to get environment
variables.</p></li>
<li><p><span><strong>when</strong></span> useful replacement for if
then. it takes a condition and if the condition is false, it "returns"
<code>return ()</code>.</p></li>
<li><p><span><strong>sequence</strong></span> takes a list of I/O
actions and performs them one after the other.</p></li>
<li><p><span><strong>mapM</strong></span> and
<span><strong>mapM_</strong></span> are used to map a function over a
list but the function must return an I/O action.</p></li>
<li><p><span><strong>forever</strong></span> is an infinite loop like
function that will perform whater I/O action you give forever.</p></li>
<li><p><span><strong>forM</strong></span> is like mapM but in reverse.
It is usually used when you want to perform an I/O action with each
element in the list.</p></li>
</ul>
<h2 data-number="10.2" id="files-and-streams"><span
class="header-section-number">10.2</span> Files and Streams</h2>
<h3 data-number="10.2.1" id="system.io"><span
class="header-section-number">10.2.1</span> System.IO</h3>
<pre><code>main = do
    contents &lt;- getContents
    putStrLn contents

main = interact (unlines . filter ((&lt;10) . length) . lines)

main = interact respondPalindromes
respondPalindromes = unlines . map (\\ln -&gt; if isPalindrom ln then
    &quot;palindrome&quot; else &quot;not a palindrom&quot;) . lines
    where isPalindrom str = if str == reverse str then True else False

import System.IO
main = do
    filename &lt;- getLine
    handle &lt;- openFile filename ReadMode
    content &lt;- hGetContents handle
    putStr content
    hClose handle

import qualified System.IO as SIO
import qualified Data.Char as DC
main = do
    filename &lt;- SIO.getLine
    content &lt;- SIO.readFile filename
    SIO.writeFile &quot;boo.txt&quot; (map DC.toUpper content)</code></pre>
<div class="center">
<p><code>System.IO</code></p>
</div>
<ul>
<li><p><span><strong>getContents</strong></span> is an I/O action that
reads from the terminal but it is lazy so it waits until input is
absolutely required. it’s useful for piping from terminal.</p></li>
<li><p><span><strong>interact</strong></span> takes a
<code>String -&gt; String</code> function and then calls that on
whatever it reads from the input.</p></li>
<li><p><span><strong>openFile</strong></span> will open a file and
return an I/O Handle.</p></li>
<li><p><span><strong>hGetContents</strong></span> can read from that I/O
Handle.</p>
<ul>
<li><p><code>hGetContents</code> and <code>getContents</code> are both
lazy and will not do something until it is needed.</p></li>
<li><p>hGetContents also supports buffering which can be set by
<span><strong>hSetBuffering</strong></span>.</p></li>
</ul></li>
<li><p><span><strong>hClose</strong></span> will close a
handle.</p></li>
<li><p><span><strong>IOMode</strong></span> can be ReadMode, WriteMode,
AppendMode, ReadWriteMode.</p></li>
<li><p><span><strong>withFile</strong></span> is kind of like the
<code>with</code> in python.</p></li>
<li><p><span><strong>hGetLine</strong></span></p></li>
<li><p><span><strong>hPutStr</strong></span></p></li>
<li><p><span><strong>hPutStrLn</strong></span></p></li>
<li><p><span><strong>hGetChar</strong></span></p></li>
<li><p><span><strong>readFile</strong></span> takes a filepath and
returns IO String.</p></li>
<li><p><span><strong>writeFile</strong></span> takes a filepath and a
string and writes it to file.</p></li>
<li><p><span><strong>appendFile</strong></span></p></li>
<li><p><span><strong>hFlush</strong></span></p></li>
<li><p><span><strong>openTempFile</strong></span></p></li>
<li><p><span><strong>removeFile</strong></span></p></li>
<li><p><span><strong>renameFile</strong></span></p></li>
</ul>
<h3 data-number="10.2.2" id="system.directory"><span
class="header-section-number">10.2.2</span> System.Directory</h3>
<ul>
<li><p><span><strong>doesFileExist</strong></span> can be used instead
of exceptions</p></li>
</ul>
<h2 data-number="10.3" id="command-line"><span
class="header-section-number">10.3</span> Command Line</h2>
<h3 data-number="10.3.1" id="system.environment"><span
class="header-section-number">10.3.1</span> System.Environment</h3>
<ul>
<li><p><span><strong>getProgName</strong></span> returns a single string
with the program name.</p></li>
<li><p><span><strong>getArgs</strong></span> returns a list of
strings.</p></li>
</ul>
<h1 data-number="11" id="miscellaneous"><span
class="header-section-number">11</span> Miscellaneous</h1>
<h2 data-number="11.1" id="randomness"><span
class="header-section-number">11.1</span> Randomness</h2>
<h3 data-number="11.1.1" id="functions-2"><span
class="header-section-number">11.1.1</span> Functions</h3>
<pre><code>Prelude System.Random&gt; random (mkStdGen 101) :: (Int, StdGen)
(-1901866209,105509204 1655838864)</code></pre>
<div class="center">
<p>Randomness</p>
</div>
<ul>
<li><p>System.Random gives us some useful functions for
randomness.</p></li>
<li><p><span><strong>random</strong></span> takes a RandomGen and a type
that is a part of Random and returns a random value and another
RandomGen.</p></li>
<li><p><span><strong>RandomGen</strong></span> is a typeclass for things
that can act as sources of randomness.</p></li>
<li><p><span><strong>Random</strong></span> is a typeclass for things
that can be random.</p></li>
<li><p><span><strong>StdGen</strong></span> is a type that is an
instance of RandomGen.</p></li>
<li><p><span><strong>mkStdGen</strong></span> is a function we can use
to make our own StdGen.</p></li>
<li><p><span><strong>randoms</strong></span> is given a StdGen and
returns an infinite list of random numbers.</p>
<ul>
<li><p>To get more random numbers we use randoms which uses the StdGen
returned from the first random in the second random and so on.</p></li>
</ul></li>
<li><p><span><strong>randomR</strong></span> is used to get random
numbers within a range.</p></li>
<li><p><span><strong>randomRs</strong></span> is similar to
randoms.</p></li>
<li><p><span><strong>getStdGen</strong></span> uses I/O to return an
generator I/O action. It uses a sort of global generator.</p></li>
<li><p><span><strong>newStdGen</strong></span> splits our RandomGen in
two and uses one of them as the new global StdGen and returns the other
one as normal.</p></li>
</ul>
<h2 data-number="11.2" id="bytestrings"><span
class="header-section-number">11.2</span> Bytestrings</h2>
<p>The normal processing of files into strings which are lists is a
little slow because of the overhead involved in making them lazy but
keeping track of promises to do something.</p>
<p>For efficient reading and other stuff we use bytestrings. There are
two types of bytestrings: strings and lazy.</p>
<ul>
<li><p>Strict</p>
<ul>
<li><p>Strict bytestrings are in Data.ByteString.</p></li>
<li><p>These are not lazy at all.</p></li>
<li><p>They’re similar to the other languages’ lists.</p></li>
</ul></li>
<li><p>Lazy</p>
<ul>
<li><p>Lazy bytestrings are a little lazier but not as much as normal
lists.</p></li>
<li><p>These are processed in blocks of 64KB.</p></li>
</ul></li>
</ul>
<h3 data-number="11.2.1" id="functions-3"><span
class="header-section-number">11.2.1</span> Functions</h3>
<pre><code>import qualified Data.ByteString.Lazy as DBL
import qualified Data.ByteString as DB
import qualified Data.Word as DW

&gt; DBL.pack [23, 45]
&quot;\\ETB-&quot;

&gt; DBL.unpack $ DBL.pack [23, 45]
[23,45]

&gt; DBL.unpack $ DBL.pack [0xFFFF000A, 0xF]
[10,15]</code></pre>
<div class="center">
<p><code>Data.ByteString</code></p>
</div>
<ul>
<li><p><span><strong>pack</strong></span> will take a list of Word8 and
turn it into a bytestring.</p></li>
<li><p><span><strong>unpack</strong></span> will do the reverse of
pack.</p>
<ul>
<li><p>Note how the pack will truncate a value to 8 bits.</p></li>
</ul></li>
<li><p><span><strong>fromChunks</strong></span> takes a list of strict
bytestrings and converts them to a lazy bytestring.</p></li>
<li><p><span><strong>toChunks</strong></span> takes lazy bytestring and
converts it to a list of string ones.</p></li>
<li><p><span><strong>cons</strong></span> is like the colon in
lists.</p></li>
<li><p><span><strong>cons’</strong></span> is the strict
version.</p></li>
<li><p><span><strong>empty</strong></span> creates an empty
bytestring.</p></li>
<li><p><span><strong>readFile</strong></span> and
<span><strong>writeFile</strong></span> exist in both strict and lazy
modules.</p></li>
</ul>
<h2 data-number="11.3" id="exceptions"><span
class="header-section-number">11.3</span> Exceptions</h2>
<p>Haskell’s type system is it’s defense against failure functions. We
use the <code>Maybe</code> type contructor when a pure function might
fail. But we still have exceptions for some things like impure I/O for
one.</p>
<p><span><strong>catchIOError</strong></span> from System.IO.Error is a
function we use for exceptions. It takes something to do and a handler
as arguments. If the to do throws an exception it is sent to the
handler.</p>
<pre><code>;import qualified System.IO.Error as SIE
import qualified System.IO as SI
import qualified System.Environment as SE

main = SIE.catchIOError openFillet handler

openFillet :: IO ()
openFillet = do
    (filename:_) &lt;- SE.getArgs
    hfile &lt;- SI.openFile filename SI.ReadMode
    content &lt;- SI.hGetContents hfile
    putStrLn &quot;File opened successfully&quot;
    SI.hClose hfile
    putStrLn &quot;File closed successfully&quot;

handler :: SIE.IOError -&gt; IO ()
handler e
    | SIE.isDoesNotExistError e = putStrLn &quot;File doesn&#39;t exist&quot;
    | otherwise = SIE.ioError e</code></pre>
<div class="center">
<p>Exceptions</p>
</div>
<p>Our handler will take an <code>IOError</code> type and return an
empty IO action. Inside our handler, we use functions from
<code>System.IO.Error</code> to check if the errors match. these
functions return a Bool value.</p>
<p>Note that we don’t have a do block in the main because it’s only one
statement but other do blocks will only work if called from main.</p>
<h3 data-number="11.3.1" id="common-io-exceptions"><span
class="header-section-number">11.3.1</span> Common IO Exceptions</h3>
<ul>
<li><p><span><strong>isDoesNotExistError</strong></span></p></li>
<li><p><span><strong>isAlreadyExistsError</strong></span></p></li>
<li><p><span><strong>isAlreadyInUseError</strong></span></p></li>
<li><p><span><strong>isFullError</strong></span></p></li>
<li><p><span><strong>isEOFError</strong></span></p></li>
<li><p><span><strong>isIllegalOperation</strong></span></p></li>
<li><p><span><strong>isPermissionError</strong></span></p></li>
<li><p><span><strong>isUserError</strong></span> is thrown if we use the
function userError.</p></li>
<li><p><span><strong>ioe*</strong></span> are a bunch of functions that
return Maybe information. about the exception, e.g.
<span><strong>ioeGetFileName</strong></span> will return a
<code>Just filepath</code> or <code>Nothing</code>.</p></li>
</ul>
<h2 data-number="11.4" id="cabal"><span
class="header-section-number">11.4</span> Cabal</h2>
<p><code>cabal-install</code> is a package installer for Haskell.</p>
<h3 data-number="11.4.1" id="commands"><span
class="header-section-number">11.4.1</span> Commands</h3>
<ul>
<li><p><span><strong>cabal init</strong></span> will create a new cabal
project in your directory.</p>
<ul>
<li><p>Cabal will actually ask you a bunch of stuff to set up.</p></li>
</ul></li>
<li><p><span><strong>cabal configure</strong></span> will configure the
project according to your <code>.cabal</code> file. This file is very
useful and contains everything from project name to its
dependencies.</p></li>
<li><p><span><strong>cabal build</strong></span> will build the project
for you instead of using ghc yourself.</p></li>
<li><p><span><strong>cabal list</strong></span> is used to search
Haskell packages.</p></li>
<li><p><span><strong>cabal install</strong></span> is used to install a
Haskell package.</p></li>
</ul>
`;export{n as default};
