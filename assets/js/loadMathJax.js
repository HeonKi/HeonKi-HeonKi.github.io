// function loadScript(url, bAsync, idScript ) {
//   var s = document.createElement('script');
//   s.type = 'text/javascript';
//   s.async = bAsync;
//   s.src = url;
//   if ( idScript !== "" ) s.id = idScript;
//   var x = document.getElementsByTagName('head')[0];
//   x.appendChild(s);
// }

// loadScript( "https://polyfill.io/v3/polyfill.min.js?features=es6", false, "" );
// loadScript( "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js", false, "MathJax-script" );

function loadScript( strType, strSrc, strInnderHTML,  bAsync, idScript ) {
  var s = document.createElement('script');
  s.type = strType;
  if ( strSrc !== "" ) s.src = strSrc;
  if ( strInnderHTML !== "" ) s.innerHTML = strInnderHTML;
  if ( bAsync ) s.async = true;
  if ( idScript !== "" ) s.id = idScript;
  var x = document.getElementsByTagName('head')[0];
  x.appendChild(s);
}

var strMathJaxSetting = `MathJax.Hub.Config( {
  TeX: {
    equationNumbers: {
      autoNumber: "AMS"
    }
  },
  tex2jax: {
    inlineMath: [ ['$', '$'] ],
    displayMath: [ ['$$', '$$'] ],
    processEscapes: true,
  }
});
MathJax.Hub.Register.MessageHook("Math Processing Error",function (message) {
  console.log("Math Processing Error: "+message[1]);
});
MathJax.Hub.Register.MessageHook("TeX Jax - parse error",function (message) {
  console.log("Math Processing Error: "+message[1]);
});`;

loadScript(
  "text/x-mathjax-config",
  "",
  strMathJaxSetting,
  false,
  ""
);

loadScript(
  'text/javascript',
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML",
  "",
  true,
  ""
);