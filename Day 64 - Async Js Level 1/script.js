// main thread -> jis pr sync code chlta ha sbse pehle 
// main stack -> jo main stack pe ayega whi sbse pehle chalega 
// webAPi -> jo bhi async code hoga whi webAPI pr chalega. ye wo features hen jo browser deta ha. e.g. console alert setTimeout setInterval etc.

// sync code mein thread me chalega or async code ko webAPI behind the scenes operate kaena shuru kr deti ha, jb ye code complete hota hai tb ye code ka completion move hojata ha callback queue mein.





// event loop -> ye event loop main thread ko webAPI se connect krta ha. ye check krta ha k kya webAPI se koi code aaya ha ya nahi.
// callback queue
// microtask queue
// macroteask queue