(()=>{"use strict";var e,t,n,o,l,i,_={},r=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,o,l,i,_){var r={type:e,props:o,key:l,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++n:_};return null==_&&null!=t.vnode&&t.vnode(r),r}function d(e){return e.children}function h(e,t){this.props=e,this.context=t}function f(e,t){if(null==t)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?f(e):null}function p(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return p(e)}}function v(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!m.__r++||i!==t.debounceRendering)&&((i=t.debounceRendering)||l)(m)}function m(){for(var e;m.__r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,o,l,i,_;e.__d&&(i=(l=(t=e).__v).__e,(_=t.__P)&&(n=[],(o=c({},l)).__v=l.__v+1,C(_,l,o,t.__n,void 0!==_.ownerSVGElement,null!=l.__h?[i]:null,n,null==i?f(l):i,l.__h),x(n,l),l.__e!=i&&p(l)))}))}function y(e,t,n,o,l,i,s,c,u,h){var p,v,m,y,k,b,E,S=o&&o.__k||r,x=S.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(y=n.__k[p]=null==(y=t[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?a(null,y,null,null,y):Array.isArray(y)?a(d,{children:y},null,null,null):y.__b>0?a(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(m=S[p])||m&&y.key==m.key&&y.type===m.type)S[p]=void 0;else for(v=0;v<x;v++){if((m=S[v])&&y.key==m.key&&y.type===m.type){S[v]=void 0;break}m=null}C(e,y,m=m||_,l,i,s,c,u,h),k=y.__e,(v=y.ref)&&m.ref!=v&&(E||(E=[]),m.ref&&E.push(m.ref,null,y),E.push(v,y.__c||k,y)),null!=k?(null==b&&(b=k),"function"==typeof y.type&&y.__k===m.__k?y.__d=u=g(y,u,e):u=w(e,y,m,S,k,u),"function"==typeof n.type&&(n.__d=u)):u&&m.__e==u&&u.parentNode!=e&&(u=f(m))}for(n.__e=b,p=x;p--;)null!=S[p]&&("function"==typeof n.type&&null!=S[p].__e&&S[p].__e==n.__d&&(n.__d=f(o,p+1)),A(S[p],S[p]));if(E)for(p=0;p<E.length;p++)T(E[p],E[++p],E[++p])}function g(e,t,n){for(var o,l=e.__k,i=0;l&&i<l.length;i++)(o=l[i])&&(o.__=e,t="function"==typeof o.type?g(o,t,n):w(n,o,o,l,o.__e,t));return t}function w(e,t,n,o,l,i){var _,r,s;if(void 0!==t.__d)_=t.__d,t.__d=void 0;else if(null==n||l!=i||null==l.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(l),_=null;else{for(r=i,s=0;(r=r.nextSibling)&&s<o.length;s+=2)if(r==l)break e;e.insertBefore(l,i),_=i}return void 0!==_?_:l.nextSibling}function k(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function b(e,t,n,o,l){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||k(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||k(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?S:E,i):e.removeEventListener(t,i?S:E,i);else if("dangerouslySetInnerHTML"!==t){if(l)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function E(e){this.l[e.type+!1](t.event?t.event(e):e)}function S(e){this.l[e.type+!0](t.event?t.event(e):e)}function C(e,n,o,l,i,_,r,s,u){var a,f,p,v,m,g,w,k,b,E,S,C=n.type;if(void 0!==n.constructor)return null;null!=o.__h&&(u=o.__h,s=n.__e=o.__e,n.__h=null,_=[s]),(a=t.__b)&&a(n);try{e:if("function"==typeof C){if(k=n.props,b=(a=C.contextType)&&l[a.__c],E=a?b?b.props.value:a.__:l,o.__c?w=(f=n.__c=o.__c).__=f.__E:("prototype"in C&&C.prototype.render?n.__c=f=new C(k,E):(n.__c=f=new h(k,E),f.constructor=C,f.render=L),b&&b.sub(f),f.props=k,f.state||(f.state={}),f.context=E,f.__n=l,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=C.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,C.getDerivedStateFromProps(k,f.__s))),v=f.props,m=f.state,p)null==C.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,E),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,E)||n.__v===o.__v){f.props=k,f.state=f.__s,n.__v!==o.__v&&(f.__d=!1),f.__v=n,n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),f.__h.length&&r.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,E),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,m,g)}))}f.context=E,f.props=k,f.state=f.__s,(a=t.__r)&&a(n),f.__d=!1,f.__v=n,f.__P=e,a=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(l=c(c({},l),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(g=f.getSnapshotBeforeUpdate(v,m)),S=null!=a&&a.type===d&&null==a.key?a.props.children:a,y(e,Array.isArray(S)?S:[S],n,o,l,i,_,r,s,u),f.base=n.__e,n.__h=null,f.__h.length&&r.push(f),w&&(f.__E=f.__=null),f.__e=!1}else null==_&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=P(o.__e,n,o,l,i,_,r,u);(a=t.diffed)&&a(n)}catch(e){n.__v=null,(u||null!=_)&&(n.__e=s,n.__h=!!u,_[_.indexOf(s)]=null),t.__e(e,n,o)}}function x(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function P(t,n,o,l,i,r,s,c){var a,d,h,p=o.props,v=n.props,m=n.type,g=0;if("svg"===m&&(i=!0),null!=r)for(;g<r.length;g++)if((a=r[g])&&"setAttribute"in a==!!m&&(m?a.localName===m:3===a.nodeType)){t=a,r[g]=null;break}if(null==t){if(null===m)return document.createTextNode(v);t=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),r=null,c=!1}if(null===m)p===v||c&&t.data===v||(t.data=v);else{if(r=r&&e.call(t.childNodes),d=(p=o.props||_).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!c){if(null!=r)for(p={},g=0;g<t.attributes.length;g++)p[t.attributes[g].name]=t.attributes[g].value;(h||d)&&(h&&(d&&h.__html==d.__html||h.__html===t.innerHTML)||(t.innerHTML=h&&h.__html||""))}if(function(e,t,n,o,l){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],o);for(i in t)l&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],o)}(t,v,p,i,c),h)n.__k=[];else if(g=n.props.children,y(t,Array.isArray(g)?g:[g],n,o,l,i&&"foreignObject"!==m,r,s,r?r[0]:o.__k&&f(o,0),c),null!=r)for(g=r.length;g--;)null!=r[g]&&u(r[g]);c||("value"in v&&void 0!==(g=v.value)&&(g!==t.value||"progress"===m&&!g||"option"===m&&g!==p.value)&&b(t,"value",g,p.value,!1),"checked"in v&&void 0!==(g=v.checked)&&g!==t.checked&&b(t,"checked",g,p.checked,!1))}return t}function T(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function A(e,n,o){var l,i;if(t.unmount&&t.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||T(l,null,n)),null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){t.__e(e,n)}l.base=l.__P=null}if(l=e.__k)for(i=0;i<l.length;i++)l[i]&&A(l[i],n,"function"!=typeof e.type);o||null==e.__e||u(e.__e),e.__e=e.__d=void 0}function L(e,t,n){return this.constructor(e,n)}e=r.slice,t={__e:function(e,t){for(var n,o,l;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),l=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),l=n.__d),l)return n.__E=n}catch(t){e=t}throw e}},n=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},h.prototype.render=d,o=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0;var U=0;function D(e,n,o,l,i){var _,r,s={};for(r in n)"ref"==r?_=n[r]:s[r]=n[r];var c={type:e,props:s,key:o,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--U,__source:l,__self:i};if("function"==typeof e&&(_=e.defaultProps))for(r in _)void 0===s[r]&&(s[r]=_[r]);return t.vnode&&t.vnode(c),c}class N extends HTMLElement{constructor(){super(...arguments),this.lastUrl=null,this._render=()=>{!function(n,o,l){var i,r,s;t.__&&t.__(n,o),r=(i="function"==typeof l)?null:l&&l.__k||o.__k,s=[],C(o,n=(!i&&l||o).__k=function(t,n,o){var l,i,_,r={};for(_ in n)"key"==_?l=n[_]:"ref"==_?i=n[_]:r[_]=n[_];if(arguments.length>2&&(r.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===r[_]&&(r[_]=t.defaultProps[_]);return a(t,r,l,i,null)}(d,null,[n]),r||_,_,void 0!==o.ownerSVGElement,!i&&l?[l]:r?null:o.firstChild?e.call(o.childNodes):null,s,!i&&l?l:r?r.__e:o.firstChild,i),x(s,n)}(D(d,{children:D("ha-card",Object.assign({style:{margin:`-${this.config.negative_margin||13}px 0`}},{children:!this.config.anchor_id&&D("ul",Object.assign({style:{padding:"20px"}},{children:[D("li",{children:["anchor_id - set a per-page unique identifier. scroll to this card using the url param"," ",D("strong",{children:"anchor"},void 0),D("br",{},void 0),D("i",{children:"example: lovelace/0?anchor=lights"},void 0)]},void 0),D("li",{children:"negative_margin - set a negative margin of the card to fix spacing visuals. default is 13px."},void 0),D("li",{children:"timeout - set a timeout to wait before scrolling to the card. default is 150ms. increase this if other cards take long to render."},void 0),D("li",{children:"offset - the scroll offset. default is 0. can be a negative value."},void 0),D("li",{children:"strict_url_change - set to true to only scroll when the url changes."},void 0),D("li",{children:"disable_in_edit_mode - prevent scrolling when edit=1."},void 0)]}),void 0)}),void 0)},void 0),this)}}getCardColumn(){var e;let t=this,n=0;for(;t&&n<20;){if(t instanceof ShadowRoot&&(t=t.host),"HUI-DIALOG-EDIT-CARD"===t.tagName)return null;if(null===(e=t.classList)||void 0===e?void 0:e.contains("column"))return t;t=t.parentElement||t.getRootNode(),n++}return null}scrollToAnchor(){setTimeout((()=>{const e=this.config.anchor_id,t=new URLSearchParams(window.location.search).get("anchor");if(t&&t===e){const e=this.getBoundingClientRect(),t=this.config.offset||0,n=window.scrollY||document.documentElement.scrollTop;window.scrollTo({top:e.top+n+t,behavior:"smooth"})}}),this.config.timeout||150)}connectedCallback(){(()=>{const e=function(e,t=100){let n;return(...o)=>{clearTimeout(n),n=setTimeout((()=>{e.apply(this,o)}),t)}}((()=>{const e=window.location.href;!1!==this.config.disable_in_edit_mode&&window.location.search.includes("edit=1")||this.config.strict_url_change&&e===this.lastUrl||(window.dispatchEvent(new Event("locationchange")),this.lastUrl=e)}),100),t=window.history.pushState;window.history.pushState=function(...n){const o=t.apply(this,n);return window.dispatchEvent(new Event("pushstate")),e(),o};const n=window.history.replaceState;window.history.replaceState=function(...t){const o=n.apply(this,t);return window.dispatchEvent(new Event("replacestate")),e(),o},this.handlePopState=()=>{e()},window.addEventListener("popstate",this.handlePopState)})(),window.addEventListener("locationchange",(()=>{requestAnimationFrame((()=>{this.scrollToAnchor()}))})),window.dispatchEvent(new Event("locationchange"))}disconnectedCallback(){window.removeEventListener("locationchange",(()=>{requestAnimationFrame((()=>{this.scrollToAnchor()}))})),window.removeEventListener("popstate",this.handlePopState)}setConfig(e){this.config=e,this._render()}getCardSize(){return 1}}customElements.define("anchor-card",N),window.customCards=window.customCards||[],window.customCards.push({type:"anchor-card",name:"Anchor Card",preview:!1,description:"A card that acts as a scroll anchor"})})();