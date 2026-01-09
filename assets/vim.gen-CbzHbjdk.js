const n=`<nav id="TOC">
<ul>
<li><a href="#tips" id="toc-tips"><span
class="toc-section-number">1</span> Tips</a></li>
<li><a href="#vimrc" id="toc-vimrc"><span
class="toc-section-number">2</span> .vimrc</a></li>
</ul>
</nav>
<h1 data-number="1" id="tips"><span
class="header-section-number">1</span> Tips</h1>
<ul>
<li><p>Format all lines based on column length</p>
<ul>
<li><p><code>:set formatoptions+=w</code></p></li>
<li><p><code>:set tw=50</code></p></li>
<li><p><code>gq</code> on selected lines</p></li>
</ul></li>
<li><p>Sort all lines</p>
<ul>
<li><p><code>:sort</code></p></li>
</ul></li>
</ul>
<h1 data-number="2" id="vimrc"><span
class="header-section-number">2</span> .vimrc</h1>
<pre><code>
&quot; credit to http://vim.wikia.com/wiki/Example_vimrc
&quot; apparently does something useful
set nocompatible

&quot; word wrap off
set nowrap
&quot; line numbers on side
set nu

&quot; filetype syntax and indendentation
syntax on

&quot; highlight searches
set hlsearch

&quot; credit: http://stackoverflow.com/questions/657447/vim-clear-last-search-highlighting
&quot; This unsets the &quot;last search pattern&quot; register by hitting return
nnoremap &lt;CR&gt; :noh&lt;CR&gt;&lt;CR&gt;

&quot; use case insensitive search, except when using capital letters
set ignorecase
set smartcase

&quot; allow backspacing over stuff
set backspace=indent,eol,start

&quot; ask to save changes if necessary
set confirm

&quot; indentation options
set expandtab
set autoindent
set shiftwidth=4
set softtabstop=4
set tabstop=4

color monokai

set autochdir

&quot; credit: http://robots.thoughtbot.com/vim-splits-move-faster-and-more-naturally
&quot; for easy switching windows
nnoremap &lt;C-J&gt; &lt;C-W&gt;&lt;C-J&gt;
nnoremap &lt;C-K&gt; &lt;C-W&gt;&lt;C-K&gt;
nnoremap &lt;C-L&gt; &lt;C-W&gt;&lt;C-L&gt;
nnoremap &lt;C-H&gt; &lt;C-W&gt;&lt;C-H&gt;

&quot; to open windows below and to the right
set splitbelow
set splitright

set backupdir=/tmp
set directory=/tmp

&quot; always show line number and status line
set laststatus=2

&quot; remove white space
&quot; http://unix.stackexchange.com/questions/75430/vi-vim-how-to-automatically-strip-trailing-spaces-on-save
autocmd BufWritePre * :%s/\\s\\+$//e

&quot;set spell
set foldmethod=indent

&quot;####################################################################
&quot; VUNDLE CONFIG
filetype off                  &quot; required

&quot; set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

&quot; alternatively, pass a path where Vundle should install plugins
&quot;call vundle#begin(&#39;~/some/path/here&#39;)

&quot; let Vundle manage Vundle, required
Plugin &#39;gmarik/Vundle.vim&#39;

&quot; Add all your plugins here (note older versions of Vundle used Bundle instead of Plugin)
&quot; Smart folding and indetation
Plugin &#39;tmhedberg/SimpylFold&#39;
Plugin &#39;vim-scripts/indentpython.vim&#39;

&quot; Autocompletion
Bundle &#39;Valloric/YouCompleteMe&#39;
let g:ycm_autoclose_preview_window_after_completion=1

&quot; Filetree sidebar
&quot;Plugin &#39;scrooloose/nerdtree&#39;
&quot;let NERDTreeIgnore=[&#39;\\.pyc$&#39;, &#39;\\~$&#39;] &quot;ignore files in NERDTree
&quot;let NERDTreeWinPos = &quot;right&quot;
&quot;autocmd vimenter * NERDTree
&quot;Plugin &#39;jistr/vim-nerdtree-tabs&#39;

&quot; The error detector in python code
Plugin &#39;scrooloose/syntastic&#39;
let python_highlight_all=1
let syntastic_aggregate_errors = 1
let syntastic_python_checkers = [&#39;pyflakes&#39;]

&quot; CTRL-P search
Plugin &#39;kien/ctrlp.vim&#39;

&quot; The signs in the sidebar
Plugin &#39;airblade/vim-gitgutter&#39;

&quot; GIT wrapper
Plugin &#39;tpope/vim-fugitive&#39;

&quot; Themes
Plugin &#39;crusoexia/vim-monokai&#39;

&quot; All of your Plugins must be added before the following line
call vundle#end()            &quot; required
filetype plugin indent on    &quot; required

</code></pre>
<div class="center">

</div>
`;export{n as default};
