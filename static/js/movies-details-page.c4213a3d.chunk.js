(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[3],{42:function(n,e,t){"use strict";e.a=function(n){return n?"http://image.tmdb.org/t/p/w300".concat(n):"../../images/default.png"}},43:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r,a=t(18),i=t(19).a.ul(r||(r=Object(a.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))},74:function(n,e,t){"use strict";function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}t.r(e);var c=t(44),o=t.n(c),s=t(45),l=t(20),d=t(21),p=t(23),u=t(22),b=t(46),f=t.n(b),h=t(0),j=t(9),m=t(1),v=t(42),x=t(43),g=t(2),O=function(n){var e=n.cast;return Object(g.jsx)(x.a,{children:e.map((function(n){var e=n.cast_id,t=n.profile_path,r=n.name,a=n.character;return Object(g.jsxs)("li",{children:[Object(g.jsx)("img",{src:Object(v.a)(t),alt:r}),Object(g.jsxs)("p",{children:[r,": ",a]})]},e)}))})};O.defaultProps={cast:[]};var y,k=O,w=function(n){var e=n.results;return Object(g.jsx)("ul",{children:e.length?e.map((function(n){var e=n.id,t=n.author,r=n.content;return Object(g.jsxs)("li",{children:[Object(g.jsxs)("p",{children:["Author: ",t]}),Object(g.jsx)("p",{children:r})]},e)})):Object(g.jsx)("p",{children:"We don't have any reviews for this movie"})})},P=t(7),N=t(18),_=t(19).a.div(y||(y=Object(N.a)(["\n  padding: 0px 100px 0px 50px;\n  font-size: 16px;\n\n  button {\n    display: inline-block;\n    text-align: center;\n    padding: 7px 15px;\n    margin-bottom: 15px;\n    background: #74c5fc;\n    background-image: linear-gradient(to bottom, #74c5fc, #0e96eb);\n    border-radius: 3px;\n    color: #ffffff;\n    text-decoration: none;\n    outline: none;\n    border: none;\n    cursor: pointer;\n  }\n  button:hover {\n    background: #76bcfa;\n    background-image: linear-gradient(to bottom, #76bcfa, #166494);\n    text-decoration: none;\n  }\n  .cardContainer {\n    display: flex;\n    gap: 50px;\n  }\n  img {\n    border-radius: 3px;\n  }\n\n  .movie-desc {\n    text-align: justify;\n    line-height: 1.6;\n  }\n  .genres-list {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    gap: 15px;\n    list-style: none;\n  }\n  .genres-list-item {\n    text-decoration: none;\n  }\n  .navList {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    list-style: none;\n  }\n  .add-info-container {\n    display: flex;\n    gap: 30px;\n    justify-content: center;\n  }\n  .navLink {\n    display: inline-block;\n    text-align: center;\n    padding: 5px 20px;\n    min-width: 150px;\n    background: #74c5fc;\n    background-image: linear-gradient(to bottom, #74c5fc, #0e96eb);\n    border-radius: 3px;\n    color: #ffffff;\n    text-decoration: none;\n  }\n  .navLink:hover {\n    background: #76bcfa;\n    background-image: linear-gradient(to bottom, #76bcfa, #166494);\n    text-decoration: none;\n  }\n  .navLinkActive {\n    display: inline-block;\n    text-align: center;\n    padding: 5px 20px;\n    min-width: 150px;\n    background: #76bcfa;\n    background-image: linear-gradient(to bottom, #76bcfa, #166494);\n    text-decoration: none;\n    border-radius: 3px;\n    color: #ffffff;\n  }\n"]))),L=function(n){Object(p.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={movie:{genres:[],release_date:"",credits:{cast:[]},reviews:{results:[]}}},n.handleGoBack=function(){var e,t=n.props,r=t.location;t.history.push((null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)||P.a.movies)},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var n=Object(s.a)(o.a.mark((function n(){var e,t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match.params.movieId,n.next=3,f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=ea85f2b4fc5ff28c9522c59f4ba43c3d&append_to_response=credits,reviews"));case 3:t=n.sent,this.setState({movie:t.data});case 5:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n,e,t=this,r=this.state.movie,a=r.title,c=r.release_date,o=r.vote_average,s=r.overview,l=r.genres,d=r.poster_path;return Object(g.jsxs)(_,{children:[Object(g.jsx)("button",{type:"button",onClick:this.handleGoBack,children:"Go back"}),Object(g.jsxs)("div",{className:"cardContainer",children:[Object(g.jsx)("img",{src:Object(v.a)(d),alt:a}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:[a," (",c.slice(0,4),")"]}),Object(g.jsxs)("p",{children:["User Score: ",10*o,"%"]}),Object(g.jsx)("h3",{children:"Overview"}),Object(g.jsx)("p",{className:"movie-desc",children:s}),Object(g.jsx)("h3",{children:"Genres"}),Object(g.jsx)("ul",{className:"genres-list",children:l.map((function(n){var e=n.name;return Object(g.jsxs)("li",{className:"genres-list-item",children:[" ",e]},e)}))})]})]}),Object(g.jsx)("h3",{children:"Additional information"}),Object(g.jsxs)("div",{className:"add-info-container",children:[Object(g.jsx)("p",{children:Object(g.jsx)(j.c,{to:{pathname:"".concat(this.props.match.url,"/cast"),state:{from:null===(n=this.props.location.state)||void 0===n?void 0:n.from}},className:"navLink",activeClassName:"navLinkActive",children:"Cast"})}),Object(g.jsx)("p",{children:Object(g.jsx)(j.c,{to:{pathname:"".concat(this.props.match.url,"/reviews"),state:{from:null===(e=this.props.location.state)||void 0===e?void 0:e.from}},className:"navLink",activeClassName:"navLinkActive",children:"Reviews"})})]}),Object(g.jsx)(m.a,{path:"".concat(this.props.match.path,"/cast"),render:function(n){return Object(g.jsx)(k,i(i({},n),{},{cast:t.state.movie.credits.cast}))}}),Object(g.jsx)(m.a,{path:"".concat(this.props.match.path,"/reviews"),render:function(n){return Object(g.jsx)(w,i(i({},n),{},{results:t.state.movie.reviews.results}))}})]})}}]),t}(h.Component);e.default=L}}]);
//# sourceMappingURL=movies-details-page.c4213a3d.chunk.js.map