(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[1],{42:function(t,e,n){"use strict";e.a=function(t){return t?"http://image.tmdb.org/t/p/w300".concat(t):"../../images/default.png"}},43:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a,r=n(18),c=n(19).a.ul(a||(a=Object(r.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))},47:function(t,e,n){"use strict";var a=n(9),r=n(1),c=n(42),i=n(43),o=n(2);e.a=Object(r.f)((function(t){var e=t.movies,n=t.location;return Object(o.jsx)(i.a,{children:e.map((function(t){var e=t.id,r=t.poster_path,i=t.title;return Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:{pathname:"/movies/".concat(e),state:{from:n}},children:Object(o.jsx)("img",{src:Object(c.a)(r),alt:i})})},e)}))})}))},76:function(t,e,n){"use strict";n.r(e);var a,r=n(44),c=n.n(r),i=n(45),o=n(20),s=n(21),u=n(23),p=n(22),l=n(0),m=n(46),f=n.n(m),d=n(47),b=n(18),g=n(19).a.h1(a||(a=Object(b.a)(["\n  color: #166494;\n  text-align: center;\n  text-transform: capitalize;\n"]))),h=n(2),j=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={movies:[]},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://api.themoviedb.org/3/movie/popular?api_key=ea85f2b4fc5ff28c9522c59f4ba43c3d&language=en-US&page=1");case 2:e=t.sent,this.setState({movies:e.data.results});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{children:"Trending today"}),Object(h.jsx)(d.a,{movies:this.state.movies})]})}}]),n}(l.Component);e.default=j}}]);
//# sourceMappingURL=home-page.674646a0.chunk.js.map