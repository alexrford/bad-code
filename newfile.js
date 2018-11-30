function foo(x, y) {
  return x + x;
}


alert(foo(7));

var capacity = 1;
capacity = 2;
capacity = capacity; var a = new Array(capacity + capacity>>1);


var x = 100                                                                                                                                                                     
alert(x + x>>1)                                                                                                                                                                 
alert(x + x>>1) // lgtm                                                                                                                                                         
alert(x + x>>1) // lgtm [js/whitespace-contradicts-precedence]
