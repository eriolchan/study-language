var foo = 1
var bar = 'a'
var baz = 'z'
var foobar = foo + bar
var foobarbaz = foo + bar + baz

----tips-30----
----steps----
{start} -> @v: line 1
A;<Esc>
jVG
:'<,'>normal .

{start} -> @v: line 1
:%normal A;

{start} -> @v: line 1
:%normal i//
