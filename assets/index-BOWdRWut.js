function Cd(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const rl="180",Ad=0,kl=1,wd=2,Eu=1,Cu=2,ai=3,Ii=0,pn=1,dn=2,ui=0,Is=1,yr=2,Bl=3,zl=4,Rd=5,qi=100,Pd=101,Dd=102,Id=103,Ld=104,Ud=200,Nd=201,Fd=202,Od=203,Za=204,Ka=205,kd=206,Bd=207,zd=208,Hd=209,Vd=210,Gd=211,Wd=212,Xd=213,$d=214,Qa=0,ec=1,tc=2,Ns=3,nc=4,ic=5,sc=6,rc=7,Au=0,qd=1,Yd=2,Ri=0,wu=1,Ru=2,Pu=3,ol=4,Du=5,Iu=6,Lu=7,Uu=300,Fs=301,Os=302,oc=303,ac=304,qo=306,No=1e3,Zi=1001,cc=1002,Tn=1003,jd=1004,Or=1005,Wn=1006,Qo=1007,Ki=1008,Zn=1009,Nu=1010,Fu=1011,Sr=1012,al=1013,ts=1014,Xn=1015,fi=1016,cl=1017,ll=1018,Mr=1020,Ou=35902,ku=35899,Bu=1021,zu=1022,On=1023,br=1026,Tr=1027,hl=1028,ul=1029,Hu=1030,fl=1031,dl=1033,Mo=33776,bo=33777,To=33778,Eo=33779,lc=35840,hc=35841,uc=35842,fc=35843,dc=36196,pc=37492,mc=37496,gc=37808,_c=37809,vc=37810,xc=37811,yc=37812,Sc=37813,Mc=37814,bc=37815,Tc=37816,Ec=37817,Cc=37818,Ac=37819,wc=37820,Rc=37821,Pc=36492,Dc=36494,Ic=36495,Lc=36283,Uc=36284,Nc=36285,Fc=36286,Jd=3200,Zd=3201,Vu=0,Kd=1,Ei="",Zt="srgb",ks="srgb-linear",Fo="linear",dt="srgb",us=7680,Hl=519,Qd=512,ep=513,tp=514,Gu=515,np=516,ip=517,sp=518,rp=519,Oc=35044,Vl="300 es",$n=2e3,Oo=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const gr=Math.PI/180,Er=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function pl(i,e){return(i%e+e)%e}function op(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ap(i,e,t){return i!==e?(t-i)/(e-i):0}function _r(i,e,t){return(1-t)*i+t*e}function cp(i,e,t,n){return _r(i,e,1-Math.exp(-t*n))}function lp(i,e=1){return e-Math.abs(pl(i,e*2)-e)}function hp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function up(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dp(i,e){return i+Math.random()*(e-i)}function pp(i){return i*(.5-Math.random())}function mp(i){i!==void 0&&(Gl=i);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gp(i){return i*gr}function _p(i){return i*Er}function vp(i){return(i&i-1)===0&&i!==0}function xp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ci={DEG2RAD:gr,RAD2DEG:Er,generateUUID:Yn,clamp:nt,euclideanModulo:pl,mapLinear:op,inverseLerp:ap,lerp:_r,damp:cp,pingpong:lp,smoothstep:hp,smootherstep:up,randInt:fp,randFloat:dp,randFloatSpread:pp,seededRandom:mp,degToRad:gp,radToDeg:_p,isPowerOfTwo:vp,ceilPowerOfTwo:xp,floorPowerOfTwo:yp,setQuaternionFromProperEuler:Sp,normalize:pt,denormalize:Fn};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),w=Math.atan2(R,p*T);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const S=a*T;if(c=c*m+f*S,l=l*m+d*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new P,Wl=new Lr;class Qe{constructor(e,t,n,s,r,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],T=s[1],y=s[4],S=s[7],R=s[2],w=s[5],I=s[8];return r[0]=o*_+a*T+c*R,r[3]=o*m+a*y+c*w,r[6]=o*p+a*S+c*I,r[1]=l*_+h*T+u*R,r[4]=l*m+h*y+u*w,r[7]=l*p+h*S+u*I,r[2]=f*_+d*T+g*R,r[5]=f*m+d*y+g*w,r[8]=f*p+d*S+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Qe;function Wu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mp(){const i=ko("canvas");return i.style.display="block",i}const Xl={};function Cr(i){i in Xl||(Xl[i]=!0,console.warn(i))}function bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const $l=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tp(){const i={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ks]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:$l,fromXYZ:ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:$l,fromXYZ:ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}const lt=Tp();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fs;class Ep{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=ko("canvas")),fs.width=e.width,fs.height=e.height;const s=fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cp=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(na(s[o].image)):r.push(na(s[o]))}else r=na(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ep.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ap=0;const ia=new P;class Qt extends Ws{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=Zi,s=Zi,r=Wn,o=Ki,a=On,c=Zn,l=Qt.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Yn(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Uu;Qt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,S=(d+1)/2,R=(p+1)/2,w=(h+f)/4,I=(u+_)/4,U=(g+m)/4;return y>S&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=I/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=U/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wp extends Ws{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Qt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ml(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends wp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xu extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rp extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Br.subVectors(this.max,Js),ds.subVectors(e.a,Js),ps.subVectors(e.b,Js),ms.subVectors(e.c,Js),gi.subVectors(ps,ds),_i.subVectors(ms,ps),Fi.subVectors(ds,ms);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Fi.z,Fi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Fi.z,0,-Fi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Fi.y,Fi.x,0];return!sa(t,ds,ps,ms,Br)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,ds,ps,ms,Br))?!1:(zr.crossVectors(gi,_i),t=[zr.x,zr.y,zr.z],sa(t,ds,ps,ms,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ti=[new P,new P,new P,new P,new P,new P,new P,new P],Ln=new P,kr=new rs,ds=new P,ps=new P,ms=new P,gi=new P,_i=new P,Fi=new P,Js=new P,Br=new P,zr=new P,Oi=new P;function sa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=e.dot(Oi),l=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Pp=new rs,Zs=new P,ra=new P;class Xs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(ra)),this.expandByPoint(Zs.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ni=new P,oa=new P,Hr=new P,vi=new P,aa=new P,Vr=new P,ca=new P;class gl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oa.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=vi.dot(this.direction),c=-vi.dot(Hr),l=vi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oa).addScaledVector(Hr,f),d}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,s,r){aa.subVectors(t,e),Vr.subVectors(n,e),ca.crossVectors(aa,Vr);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const c=a*this.direction.dot(Vr.crossVectors(vi,Vr));if(c<0)return null;const l=a*this.direction.dot(aa.cross(vi));if(l<0||c+l>o)return null;const h=-a*vi.dot(ca);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,Ip)}lookAt(e,t,n){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),xi.crossVectors(n,yn),xi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),xi.crossVectors(n,yn)),xi.normalize(),Gr.crossVectors(yn,xi),s[0]=xi.x,s[4]=Gr.x,s[8]=yn.x,s[1]=xi.y,s[5]=Gr.y,s[9]=yn.y,s[2]=xi.z,s[6]=Gr.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],y=n[7],S=n[11],R=n[15],w=s[0],I=s[4],U=s[8],E=s[12],M=s[1],L=s[5],H=s[9],q=s[13],K=s[2],Y=s[6],J=s[10],ne=s[14],j=s[3],me=s[7],ye=s[11],we=s[15];return r[0]=o*w+a*M+c*K+l*j,r[4]=o*I+a*L+c*Y+l*me,r[8]=o*U+a*H+c*J+l*ye,r[12]=o*E+a*q+c*ne+l*we,r[1]=h*w+u*M+f*K+d*j,r[5]=h*I+u*L+f*Y+d*me,r[9]=h*U+u*H+f*J+d*ye,r[13]=h*E+u*q+f*ne+d*we,r[2]=g*w+_*M+m*K+p*j,r[6]=g*I+_*L+m*Y+p*me,r[10]=g*U+_*H+m*J+p*ye,r[14]=g*E+_*q+m*ne+p*we,r[3]=T*w+y*M+S*K+R*j,r[7]=T*I+y*L+S*Y+R*me,r[11]=T*U+y*H+S*J+R*ye,r[15]=T*E+y*q+S*ne+R*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,S=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,R=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,w=t*T+n*y+s*S+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/w;return e[0]=T*I,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*I,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*I,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*I,e[4]=y*I,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*I,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*I,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*I,e[8]=S*I,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*I,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*I,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*I,e[12]=R*I,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*I,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*I,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,T=c*l,y=c*h,S=c*u,R=n.x,w=n.y,I=n.z;return s[0]=(1-(_+p))*R,s[1]=(d+S)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(d-S)*w,s[5]=(1-(f+p))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(g+y)*I,s[9]=(m-T)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);const l=1/r,h=1/o,u=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=$n,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Oo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=$n,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===$n)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Oo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new P,Un=new gt,Dp=new P(0,0,0),Ip=new P(1,1,1),xi=new P,Gr=new P,yn=new P,Yl=new gt,jl=new Lr;class Kn{constructor(e=0,t=0,n=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lp=0;const Jl=new P,_s=new Lr,ii=new gt,Wr=new P,Ks=new P,Up=new P,Np=new Lr,Zl=new P(1,0,0),Kl=new P(0,1,0),Ql=new P(0,0,1),eh={type:"added"},Fp={type:"removed"},vs={type:"childadded",child:null},la={type:"childremoved",child:null};class Ft extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new P,t=new Kn,n=new Lr,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Qe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ks,Wr,this.up):ii.lookAt(Wr,Ks,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ii),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new P(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new P,si=new P,ha=new P,ri=new P,xs=new P,ys=new P,th=new P,ua=new P,fa=new P,da=new P,pa=new vt,ma=new vt,ga=new vt;class Pn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),si.subVectors(n,t),ha.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(si),c=Nn.dot(ha),l=si.dot(si),h=si.dot(ha),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(a,ri.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pa,r.x),o.addScaledVector(ma,r.y),o.addScaledVector(ga,r.z),o}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),si.subVectors(e,t),Nn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Nn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,n),ys.subVectors(r,n),ua.subVectors(e,n);const c=xs.dot(ua),l=ys.dot(ua);if(c<=0&&l<=0)return t.copy(n);fa.subVectors(e,s);const h=xs.dot(fa),u=ys.dot(fa);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(xs,o);da.subVectors(e,r);const d=xs.dot(da),g=ys.dot(da);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ys,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return th.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(th,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(xs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=pl(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_a(o,r,e+1/3),this.g=_a(o,r,e),this.b=_a(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=$u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return lt.workingToColorSpace(jt.copy(this),e),Math.round(nt(jt.r*255,0,255))*65536+Math.round(nt(jt.g*255,0,255))*256+Math.round(nt(jt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(jt.copy(this),t);const n=jt.r,s=jt.g,r=jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Zt){lt.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,s=jt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Xr);const n=_r(yi.h,Xr.h,t),s=_r(yi.s,Xr.s,t),r=_r(yi.l,Xr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ze;Ze.NAMES=$u;let Op=0;class os extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Is,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ka,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mn extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new P,$r=new ie;let kp=0;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}}class qu extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yu extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bp=0;const wn=new gt,va=new Ft,Ss=new P,Sn=new rs,Qs=new rs,Gt=new P;class Rt extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Yu:qu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Sn.min,Qs.min),Sn.expandByPoint(Gt),Gt.addVectors(Sn.max,Qs.max),Sn.expandByPoint(Gt)):(Sn.expandByPoint(Qs.min),Sn.expandByPoint(Qs.max))}Sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Gt.fromBufferAttribute(a,l),c&&(Ss.fromBufferAttribute(e,l),Gt.add(Ss)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new P,c[U]=new P;const l=new P,h=new P,u=new P,f=new ie,d=new ie,g=new ie,_=new P,m=new P;function p(U,E,M){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[U].add(_),a[E].add(_),a[M].add(_),c[U].add(m),c[E].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,E=T.length;U<E;++U){const M=T[U],L=M.start,H=M.count;for(let q=L,K=L+H;q<K;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const y=new P,S=new P,R=new P,w=new P;function I(U){R.fromBufferAttribute(s,U),w.copy(R);const E=a[U];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(w,E);const L=S.dot(c[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,L)}for(let U=0,E=T.length;U<E;++U){const M=T[U],L=M.start,H=M.count;for(let q=L,K=L+H;q<K;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new gn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new gt,ki=new gl,qr=new Xs,ih=new P,Yr=new P,jr=new P,Jr=new P,xa=new P,Zr=new P,sh=new P,Kr=new P;class at extends Ft{constructor(e=new Rt,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(xa.fromBufferAttribute(u,e),o?Zr.addScaledVector(xa,h):Zr.addScaledVector(xa.sub(t),h))}t.add(Zr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(qr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(qr,ih)===null||ki.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(r).invert(),ki.copy(e.ray).applyMatrix4(nh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,R=y;S<R;S+=3){const w=a.getX(S),I=a.getX(S+1),U=a.getX(S+2);s=Qr(this,p,e,n,l,h,u,w,I,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);s=Qr(this,o,e,n,l,h,u,T,y,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,R=y;S<R;S+=3){const w=S,I=S+1,U=S+2;s=Qr(this,p,e,n,l,h,u,w,I,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,y=m+1,S=m+2;s=Qr(this,o,e,n,l,h,u,T,y,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function zp(i,e,t,n,s,r,o,a){let c;if(e.side===pn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ii,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Kr);return l<t.near||l>t.far?null:{distance:l,point:Kr.clone(),object:i}}function Qr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Yr),i.getVertexPosition(c,jr),i.getVertexPosition(l,Jr);const h=zp(i,e,t,n,Yr,jr,Jr,sh);if(h){const u=new P;Pn.getBarycoord(sh,Yr,jr,Jr,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,a,c,l,u,new ie)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,a,c,l,u,new ie)),o&&(h.normal=Pn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};Pn.getNormal(Yr,jr,Jr,f.normal),h.face=f,h.barycoord=u}return h}class _n extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(_,m,p,T,y,S,R,w,I,U,E){const M=S/I,L=R/U,H=S/2,q=R/2,K=w/2,Y=I+1,J=U+1;let ne=0,j=0;const me=new P;for(let ye=0;ye<J;ye++){const we=ye*L-q;for(let Xe=0;Xe<Y;Xe++){const Je=Xe*M-H;me[_]=Je*T,me[m]=we*y,me[p]=K,l.push(me.x,me.y,me.z),me[_]=0,me[m]=0,me[p]=w>0?1:-1,h.push(me.x,me.y,me.z),u.push(Xe/I),u.push(1-ye/U),ne+=1}}for(let ye=0;ye<U;ye++)for(let we=0;we<I;we++){const Xe=f+we+Y*ye,Je=f+we+Y*(ye+1),Ke=f+(we+1)+Y*(ye+1),it=f+(we+1)+Y*ye;c.push(Xe,Je,it),c.push(Je,Ke,it),j+=6}a.addGroup(d,j,E),d+=j,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=Bs(i[t]);for(const s in n)e[s]=n[s]}return e}function Hp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ju(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Ar={clone:Bs,merge:sn};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ju extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new P,rh=new ie,oh=new ie;class Rn extends Ju{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,rh,oh),t.subVectors(oh,rh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,bs=1;class Wp extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(Ms,bs,e,t);s.layers=this.layers,this.add(s);const r=new Rn(Ms,bs,e,t);r.layers=this.layers,this.add(r);const o=new Rn(Ms,bs,e,t);o.layers=this.layers,this.add(o);const a=new Rn(Ms,bs,e,t);a.layers=this.layers,this.add(a);const c=new Rn(Ms,bs,e,t);c.layers=this.layers,this.add(c);const l=new Rn(Ms,bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zu extends Qt{constructor(e=[],t=Fs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xp extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _n(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:ui});r.uniforms.tEquirect.value=t;const o=new at(s,r),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Wn),new Wp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class mt extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($p)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new vl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qp extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new P;class Bo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ku extends os{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const er=new P,Es=new P,Cs=new P,As=new ie,tr=new ie,Qu=new gt,eo=new P,nr=new P,to=new P,ah=new ie,Sa=new ie,ch=new ie;class ef extends Ft{constructor(e=new Ku){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Rt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yp(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Bo(n,3,0,!1)),Ts.setAttribute("uv",new Bo(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Qu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Cs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;no(eo.set(-.5,-.5,0),Cs,o,Es,s,r),no(nr.set(.5,-.5,0),Cs,o,Es,s,r),no(to.set(.5,.5,0),Cs,o,Es,s,r),ah.set(0,0),Sa.set(1,0),ch.set(1,1);let a=e.ray.intersectTriangle(eo,nr,to,!1,er);if(a===null&&(no(nr.set(-.5,.5,0),Cs,o,Es,s,r),Sa.set(0,1),a=e.ray.intersectTriangle(eo,to,nr,!1,er),a===null))return;const c=e.ray.origin.distanceTo(er);c<e.near||c>e.far||t.push({distance:c,point:er.clone(),uv:Pn.getInterpolation(er,eo,nr,to,ah,Sa,ch,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function no(i,e,t,n,s,r){As.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*As.x-s*As.y,tr.y=s*As.x+r*As.y):tr.copy(As),i.copy(e),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(Qu)}class jp extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Tn,h=Tn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lh extends gn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new gt,hh=new gt,io=[],uh=new rs,Jp=new gt,ir=new at,sr=new Xs;class Ma extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),uh.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(uh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),sr.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),e.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),hh.multiplyMatrices(n,ws),ir.matrixWorld=hh,ir.raycast(e,io);for(let o=0,a=io.length;o<a;o++){const c=io[o];c.instanceId=r,c.object=this,t.push(c)}io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jp(new Float32Array(s*this.count),s,this.count,hl,Xn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ba=new P,Zp=new P,Kp=new Qe;class Ti{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ba.subVectors(n,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kp.getNormalMatrix(e),s=this.coplanarPoint(ba).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Xs,Qp=new ie(.5,.5),so=new P;class xl{constructor(e=new Ti,t=new Ti,n=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],T=r[12],y=r[13],S=r[14],R=r[15];if(s[0].setComponents(l-o,d-h,p-g,R-T).normalize(),s[1].setComponents(l+o,d+h,p+g,R+T).normalize(),s[2].setComponents(l+a,d+u,p+_,R+y).normalize(),s[3].setComponents(l-a,d-u,p-_,R-y).normalize(),n)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,d-f,p-m,R-S).normalize();else if(s[4].setComponents(l-c,d-f,p-m,R-S).normalize(),t===$n)s[5].setComponents(l+c,d+f,p+m,R+S).normalize();else if(t===Oo)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=Qp.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(so.x=s.normal.x>0?e.max.x:e.min.x,so.y=s.normal.y>0?e.max.y:e.min.y,so.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tf extends os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fh=new gt,kc=new gl,ro=new Xs,oo=new P;class dh extends Ft{constructor(e=new Rt,t=new tf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;fh.copy(s).invert(),kc.copy(e.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);oo.fromBufferAttribute(u,m),ph(oo,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)oo.fromBufferAttribute(u,g),ph(oo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ph(i,e,t,n,s,r,o){const a=kc.distanceSqToPoint(i);if(a<t){const c=new P;kc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Bc extends Qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nf extends Qt{constructor(e,t,n=ts,s,r,o,a=Tn,c=Tn,l,h=br,u=1){if(h!==br&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sf extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yi extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new P,h=new ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ct extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(d,2));function T(){const S=new P,R=new P;let w=0;const I=(t-e)/n;for(let U=0;U<=r;U++){const E=[],M=U/r,L=M*(t-e)+e;for(let H=0;H<=s;H++){const q=H/s,K=q*c+a,Y=Math.sin(K),J=Math.cos(K);R.x=L*Y,R.y=-M*n+m,R.z=L*J,u.push(R.x,R.y,R.z),S.set(Y,I,J).normalize(),f.push(S.x,S.y,S.z),d.push(q,1-M),E.push(g++)}_.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){const M=_[E][U],L=_[E+1][U],H=_[E+1][U+1],q=_[E][U+1];(e>0||E!==0)&&(h.push(M,L,q),w+=3),(t>0||E!==r-1)&&(h.push(L,H,q),w+=3)}l.addGroup(p,w,0),p+=w}function y(S){const R=g,w=new ie,I=new P;let U=0;const E=S===!0?e:t,M=S===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const L=g;for(let H=0;H<=s;H++){const K=H/s*c+a,Y=Math.cos(K),J=Math.sin(K);I.x=E*J,I.y=m*M,I.z=E*Y,u.push(I.x,I.y,I.z),f.push(0,M,0),w.x=Y*.5+.5,w.y=J*.5*M+.5,d.push(w.x,w.y),g++}for(let H=0;H<s;H++){const q=R+H,K=L+H;S===!0?h.push(K,K+1,q):h.push(K+1,K,q),U+=3}l.addGroup(p,U,S===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pi extends ct{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yl extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const y=new P,S=new P,R=new P;for(let w=0;w<t.length;w+=3)d(t[w+0],y),d(t[w+1],S),d(t[w+2],R),c(y,S,R,T)}function c(T,y,S,R){const w=R+1,I=[];for(let U=0;U<=w;U++){I[U]=[];const E=T.clone().lerp(S,U/w),M=y.clone().lerp(S,U/w),L=w-U;for(let H=0;H<=L;H++)H===0&&U===w?I[U][H]=E:I[U][H]=E.clone().lerp(M,H/L)}for(let U=0;U<w;U++)for(let E=0;E<2*(w-U)-1;E++){const M=Math.floor(E/2);E%2===0?(f(I[U][M+1]),f(I[U+1][M]),f(I[U][M])):(f(I[U][M+1]),f(I[U+1][M+1]),f(I[U+1][M]))}}function l(T){const y=new P;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(T),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function h(){const T=new P;for(let y=0;y<r.length;y+=3){T.x=r[y+0],T.y=r[y+1],T.z=r[y+2];const S=m(T)/2/Math.PI+.5,R=p(T)/Math.PI+.5;o.push(S,1-R)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){const y=o[T+0],S=o[T+2],R=o[T+4],w=Math.max(y,S,R),I=Math.min(y,S,R);w>.9&&I<.1&&(y<.2&&(o[T+0]+=1),S<.2&&(o[T+2]+=1),R<.2&&(o[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function d(T,y){const S=T*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function g(){const T=new P,y=new P,S=new P,R=new P,w=new ie,I=new ie,U=new ie;for(let E=0,M=0;E<r.length;E+=9,M+=6){T.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),w.set(o[M+0],o[M+1]),I.set(o[M+2],o[M+3]),U.set(o[M+4],o[M+5]),R.copy(T).add(y).add(S).divideScalar(3);const L=m(R);_(w,M+0,T,L),_(I,M+2,y,L),_(U,M+4,S,L)}}function _(T,y,S,R){R<0&&T.x===1&&(o[y]=T.x-1),S.x===0&&S.z===0&&(o[y]=R/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.vertices,e.indices,e.radius,e.details)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ie:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],o=[],a=new P,c=new gt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(nt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(nt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sl extends Qn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class em extends Sl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ml(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ao=new P,Ta=new Ml,Ea=new Ml,Ca=new Ml;class Bn extends Qn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ao.subVectors(s[0],s[1]).add(s[0]),l=ao);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ta.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Ea.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Ca.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ea.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ca.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ta.calc(c),Ea.calc(c),Ca.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function tm(i,e){const t=1-i;return t*t*e}function nm(i,e){return 2*(1-i)*i*e}function im(i,e){return i*i*e}function vr(i,e,t,n){return tm(i,e)+nm(i,t)+im(i,n)}function sm(i,e){const t=1-i;return t*t*t*e}function rm(i,e){const t=1-i;return 3*t*t*i*e}function om(i,e){return 3*(1-i)*i*i*e}function am(i,e){return i*i*i*e}function xr(i,e,t,n,s){return sm(i,e)+rm(i,t)+om(i,n)+am(i,s)}class rf extends Qn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cm extends Qn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y),xr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class of extends Qn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lm extends Qn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class af extends Qn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cf extends Qn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y),vr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lf extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(mh(a,c.x,l.x,h.x,u.x),mh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ie().fromArray(s))}return this}}var zo=Object.freeze({__proto__:null,ArcCurve:em,CatmullRomCurve3:Bn,CubicBezierCurve:rf,CubicBezierCurve3:cm,EllipseCurve:Sl,LineCurve:of,LineCurve3:lm,QuadraticBezierCurve:af,QuadraticBezierCurve3:cf,SplineCurve:lf});class hm extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new zo[s.type]().fromJSON(s))}return this}}class gh extends hm{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new of(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new af(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new rf(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new lf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Sl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class It extends gh{constructor(e){super(e),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new gh().fromJSON(s))}return this}}function um(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=hf(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=gm(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return wr(r,o,t,a,c,l,0),o}function hf(i,e,t,n,s){let r;if(s===Am(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=_h(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=_h(o/n|0,i[o],i[o+1],r);return r&&zs(r,r.next)&&(Pr(r),r=r.next),r}function ns(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zs(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Sm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?dm(i,n,s,r):fm(i)){e.push(c.i,i.i,l.i),Pr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=pm(ns(i),e),wr(i,e,t,n,s,r,2)):o===2&&mm(i,e,t,n,s,r):wr(ns(i),e,t,n,s,r,1);break}}}function fm(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&dr(s,a,r,c,o,l,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dm(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Ct(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),_=Math.max(a,c,l),m=Math.max(h,u,f),p=zc(d,g,e,t,n),T=zc(_,m,e,t,n);let y=i.prevZ,S=i.nextZ;for(;y&&y.z>=p&&S&&S.z<=T;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&dr(a,h,c,u,l,f,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&dr(a,h,c,u,l,f,S.x,S.y)&&Ct(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&dr(a,h,c,u,l,f,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=T;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&dr(a,h,c,u,l,f,S.x,S.y)&&Ct(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function pm(i,e){let t=i;do{const n=t.prev,s=t.next.next;!zs(n,s)&&ff(n,t,t.next,s)&&Rr(n,s)&&Rr(s,n)&&(e.push(n.i,t.i,s.i),Pr(t),Pr(t.next),t=i=s),t=t.next}while(t!==i);return ns(t)}function mm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tm(o,a)){let c=df(o,a);o=ns(o,o.next),c=ns(c,c.next),wr(o,e,t,n,s,r,0),wr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gm(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=hf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(bm(l))}s.sort(_m);for(let r=0;r<s.length;r++)t=vm(s[r],t);return t}function _m(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function vm(i,e){const t=xm(i,e);if(!t)return e;const n=df(t,i);return ns(n,n.next),ns(t,t.next)}function xm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(zs(i,t))return t;do{if(zs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&uf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Rr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ym(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function ym(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function Sm(i,e,t,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mm(s)}function Mm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function zc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function uf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function dr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&uf(i,e,t,n,s,r,o,a)}function Tm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Em(i,e)&&(Rr(i,e)&&Rr(e,i)&&Cm(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||zs(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zs(i,e){return i.x===e.x&&i.y===e.y}function ff(i,e,t,n){const s=lo(Ct(i,e,t)),r=lo(Ct(i,e,n)),o=lo(Ct(t,n,i)),a=lo(Ct(t,n,e));return!!(s!==r&&o!==a||s===0&&co(i,t,e)||r===0&&co(i,n,e)||o===0&&co(t,i,n)||a===0&&co(t,e,n))}function co(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function lo(i){return i>0?1:i<0?-1:0}function Em(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ff(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Rr(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function Cm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function df(i,e){const t=Hc(i.i,i.x,i.y),n=Hc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _h(i,e,t,n){const s=Hc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Am(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class wm{static triangulate(e,t,n=2){return um(e,t,n)}}class hi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return hi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];vh(e),xh(n,e);let o=e.length;t.forEach(vh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,xh(n,t[c]);const a=wm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function vh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class bl extends Rt{constructor(e=new It([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Rm;let y,S=!1,R,w,I,U;p&&(y=p.getSpacedPoints(h),S=!0,f=!1,R=p.computeFrenetFrames(h,!1),w=new P,I=new P,U=new P),f||(m=0,d=0,g=0,_=0);const E=a.extractPoints(l);let M=E.shape;const L=E.holes;if(!hi.isClockWise(M)){M=M.reverse();for(let re=0,se=L.length;re<se;re++){const ee=L[re];hi.isClockWise(ee)&&(L[re]=ee.reverse())}}function q(re){const ee=10000000000000001e-36;let te=re[0];for(let pe=1;pe<=re.length;pe++){const le=pe%re.length,ge=re[le],ke=ge.x-te.x,$e=ge.y-te.y,C=ke*ke+$e*$e,x=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(te.x),Math.abs(te.y)),k=ee*x*x;if(C<=k){re.splice(le,1),pe--;continue}te=ge}}q(M),L.forEach(q);const K=L.length,Y=M;for(let re=0;re<K;re++){const se=L[re];M=M.concat(se)}function J(re,se,ee){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(se,ee)}const ne=M.length;function j(re,se,ee){let te,pe,le;const ge=re.x-se.x,ke=re.y-se.y,$e=ee.x-re.x,C=ee.y-re.y,x=ge*ge+ke*ke,k=ge*C-ke*$e;if(Math.abs(k)>Number.EPSILON){const $=Math.sqrt(x),oe=Math.sqrt($e*$e+C*C),X=se.x-ke/$,Ue=se.y+ge/$,de=ee.x-C/oe,De=ee.y+$e/oe,Re=((de-X)*C-(De-Ue)*$e)/(ge*C-ke*$e);te=X+ge*Re-re.x,pe=Ue+ke*Re-re.y;const ce=te*te+pe*pe;if(ce<=2)return new ie(te,pe);le=Math.sqrt(ce/2)}else{let $=!1;ge>Number.EPSILON?$e>Number.EPSILON&&($=!0):ge<-Number.EPSILON?$e<-Number.EPSILON&&($=!0):Math.sign(ke)===Math.sign(C)&&($=!0),$?(te=-ke,pe=ge,le=Math.sqrt(x)):(te=ge,pe=ke,le=Math.sqrt(x/2))}return new ie(te/le,pe/le)}const me=[];for(let re=0,se=Y.length,ee=se-1,te=re+1;re<se;re++,ee++,te++)ee===se&&(ee=0),te===se&&(te=0),me[re]=j(Y[re],Y[ee],Y[te]);const ye=[];let we,Xe=me.concat();for(let re=0,se=K;re<se;re++){const ee=L[re];we=[];for(let te=0,pe=ee.length,le=pe-1,ge=te+1;te<pe;te++,le++,ge++)le===pe&&(le=0),ge===pe&&(ge=0),we[te]=j(ee[te],ee[le],ee[ge]);ye.push(we),Xe=Xe.concat(we)}let Je;if(m===0)Je=hi.triangulateShape(Y,L);else{const re=[],se=[];for(let ee=0;ee<m;ee++){const te=ee/m,pe=d*Math.cos(te*Math.PI/2),le=g*Math.sin(te*Math.PI/2)+_;for(let ge=0,ke=Y.length;ge<ke;ge++){const $e=J(Y[ge],me[ge],le);Oe($e.x,$e.y,-pe),te===0&&re.push($e)}for(let ge=0,ke=K;ge<ke;ge++){const $e=L[ge];we=ye[ge];const C=[];for(let x=0,k=$e.length;x<k;x++){const $=J($e[x],we[x],le);Oe($.x,$.y,-pe),te===0&&C.push($)}te===0&&se.push(C)}}Je=hi.triangulateShape(re,se)}const Ke=Je.length,it=g+_;for(let re=0;re<ne;re++){const se=f?J(M[re],Xe[re],it):M[re];S?(I.copy(R.normals[0]).multiplyScalar(se.x),w.copy(R.binormals[0]).multiplyScalar(se.y),U.copy(y[0]).add(I).add(w),Oe(U.x,U.y,U.z)):Oe(se.x,se.y,0)}for(let re=1;re<=h;re++)for(let se=0;se<ne;se++){const ee=f?J(M[se],Xe[se],it):M[se];S?(I.copy(R.normals[re]).multiplyScalar(ee.x),w.copy(R.binormals[re]).multiplyScalar(ee.y),U.copy(y[re]).add(I).add(w),Oe(U.x,U.y,U.z)):Oe(ee.x,ee.y,u/h*re)}for(let re=m-1;re>=0;re--){const se=re/m,ee=d*Math.cos(se*Math.PI/2),te=g*Math.sin(se*Math.PI/2)+_;for(let pe=0,le=Y.length;pe<le;pe++){const ge=J(Y[pe],me[pe],te);Oe(ge.x,ge.y,u+ee)}for(let pe=0,le=L.length;pe<le;pe++){const ge=L[pe];we=ye[pe];for(let ke=0,$e=ge.length;ke<$e;ke++){const C=J(ge[ke],we[ke],te);S?Oe(C.x,C.y+y[h-1].y,y[h-1].x+ee):Oe(C.x,C.y,u+ee)}}}Z(),ae();function Z(){const re=s.length/3;if(f){let se=0,ee=ne*se;for(let te=0;te<Ke;te++){const pe=Je[te];Le(pe[2]+ee,pe[1]+ee,pe[0]+ee)}se=h+m*2,ee=ne*se;for(let te=0;te<Ke;te++){const pe=Je[te];Le(pe[0]+ee,pe[1]+ee,pe[2]+ee)}}else{for(let se=0;se<Ke;se++){const ee=Je[se];Le(ee[2],ee[1],ee[0])}for(let se=0;se<Ke;se++){const ee=Je[se];Le(ee[0]+ne*h,ee[1]+ne*h,ee[2]+ne*h)}}n.addGroup(re,s.length/3-re,0)}function ae(){const re=s.length/3;let se=0;Ae(Y,se),se+=Y.length;for(let ee=0,te=L.length;ee<te;ee++){const pe=L[ee];Ae(pe,se),se+=pe.length}n.addGroup(re,s.length/3-re,1)}function Ae(re,se){let ee=re.length;for(;--ee>=0;){const te=ee;let pe=ee-1;pe<0&&(pe=re.length-1);for(let le=0,ge=h+m*2;le<ge;le++){const ke=ne*le,$e=ne*(le+1),C=se+te+ke,x=se+pe+ke,k=se+pe+$e,$=se+te+$e;tt(C,x,k,$)}}}function Oe(re,se,ee){c.push(re),c.push(se),c.push(ee)}function Le(re,se,ee){ft(re),ft(se),ft(ee);const te=s.length/3,pe=T.generateTopUV(n,s,te-3,te-2,te-1);D(pe[0]),D(pe[1]),D(pe[2])}function tt(re,se,ee,te){ft(re),ft(se),ft(te),ft(se),ft(ee),ft(te);const pe=s.length/3,le=T.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);D(le[0]),D(le[1]),D(le[3]),D(le[1]),D(le[2]),D(le[3])}function ft(re){s.push(c[re*3+0]),s.push(c[re*3+1]),s.push(c[re*3+2])}function D(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Pm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new zo[s.type]().fromJSON(s)),new bl(n,e.options)}}const Rm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ie(r,o),new ie(a,c),new ie(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-u),new ie(f,1-g),new ie(_,1-p)]:[new ie(a,1-c),new ie(h,1-u),new ie(d,1-g),new ie(m,1-p)]}};function Pm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Tl extends Rt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=nt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new P,f=new ie,d=new P,g=new P,_=new P;let m=0,p=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let T=0;T<=t;T++){const y=n+T*h*s,S=Math.sin(y),R=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*S,u.y=e[w].y,u.z=e[w].x*R,o.push(u.x,u.y,u.z),f.x=T/t,f.y=w/(e.length-1),a.push(f.x,f.y);const I=c[3*w+0]*S,U=c[3*w+1],E=c[3*w+0]*R;l.push(I,U,E)}}for(let T=0;T<t;T++)for(let y=0;y<e.length-1;y++){const S=y+T*e.length,R=S,w=S+e.length,I=S+e.length+1,U=S+1;r.push(R,w,U),r.push(I,U,w)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.points,e.segments,e.phiStart,e.phiLength)}}class Hs extends yl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hs(e.radius,e.detail)}}class Vs extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*f-o;for(let y=0;y<l;y++){const S=y*u-r;g.push(S,-T,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const y=T+l*p,S=T+l*(p+1),R=T+1+l*(p+1),w=T+1+l*p;d.push(y,S,w),d.push(S,R,w)}this.setIndex(d),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jt extends Rt{constructor(e=new It([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(o,2));function l(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;hi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];hi.isClockWise(T)===!0&&(g[m]=T.reverse())}const _=hi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];d=d.concat(T)}for(let m=0,p=d.length;m<p;m++){const T=d[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=_.length;m<p;m++){const T=_[m],y=T[0]+u,S=T[1]+u,R=T[2]+u;n.push(y,S,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Dm(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Jt(n,e.curveSegments)}}function Dm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class jn extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,f=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],y=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const w=R/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+S,1-y),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const y=h[p][T+1],S=h[p][T],R=h[p+1][T],w=h[p+1][T+1];(p!==0||o>0)&&d.push(y,S,w),(p!==n-1||c<Math.PI)&&d.push(S,R,w)}this.setIndex(d),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wt extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vn extends Rt{constructor(e=new cf(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new ie;let h=new P;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(d,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),T(),p()}function m(y){h=e.getPointAt(y/t,h);const S=o.normals[y],R=o.binormals[y];for(let w=0;w<=s;w++){const I=w/s*Math.PI*2,U=Math.sin(I),E=-Math.cos(I);c.x=E*S.x+U*R.x,c.y=E*S.y+U*R.y,c.z=E*S.z+U*R.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let S=1;S<=s;S++){const R=(s+1)*(y-1)+(S-1),w=(s+1)*y+(S-1),I=(s+1)*y+S,U=(s+1)*(y-1)+S;g.push(R,w,U),g.push(w,I,U)}}function T(){for(let y=0;y<=t;y++)for(let S=0;S<=s;S++)l.x=y/t,l.y=S/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vn(new zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Im extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bn extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lm extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Um extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class El extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Nm extends El{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Aa=new gt,yh=new P,Sh=new P;class pf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),Aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mh=new gt,rr=new P,wa=new P;class Fm extends pf{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(rr),wa.copy(n.position),wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wa),n.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),Mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh,n.coordinateSystem,n.reversedDepth)}}class Om extends El{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yo extends Ju{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class km extends pf{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mf extends El{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new km}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bm extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const bh=new gt;class Hm{constructor(e,t,n=0,s=1/0){this.ray=new gl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(e,t=!0,n=[]){return Vc(e,this,n,t),n.sort(Th),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Vc(e[s],this,n,t);return n.sort(Th),n}}function Th(i,e){return i.distance-e.distance}function Vc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Vc(r[o],e,t,!0)}}function Eh(i,e,t,n){const s=Vm(n);switch(t){case Bu:return i*e;case hl:return i*e/s.components*s.byteLength;case ul:return i*e/s.components*s.byteLength;case Hu:return i*e*2/s.components*s.byteLength;case fl:return i*e*2/s.components*s.byteLength;case zu:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case dl:return i*e*4/s.components*s.byteLength;case Mo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case fc:return Math.max(i,16)*Math.max(e,8)/4;case lc:case uc:return Math.max(i,8)*Math.max(e,8)/2;case dc:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Dc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lc:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vm(i){switch(i){case Zn:case Nu:return{byteLength:1,components:1};case Sr:case Fu:case fi:return{byteLength:2,components:1};case cl:case ll:return{byteLength:2,components:4};case ts:case al:case Xn:return{byteLength:4,components:1};case Ou:case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);function gf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,d0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",S0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,F0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,V0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,S_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:$m,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:jm,aomap_fragment:Jm,aomap_pars_fragment:Zm,batching_pars_vertex:Km,batching_vertex:Qm,begin_vertex:e0,beginnormal_vertex:t0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:s0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:c0,color_fragment:l0,color_pars_fragment:h0,color_pars_vertex:u0,color_vertex:f0,common:d0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:_0,emissivemap_fragment:v0,emissivemap_pars_fragment:x0,colorspace_fragment:y0,colorspace_pars_fragment:S0,envmap_fragment:M0,envmap_common_pars_fragment:b0,envmap_pars_fragment:T0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:F0,envmap_vertex:C0,fog_vertex:A0,fog_pars_vertex:w0,fog_fragment:R0,fog_pars_fragment:P0,gradientmap_pars_fragment:D0,lightmap_pars_fragment:I0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:U0,lights_pars_begin:N0,lights_toon_fragment:O0,lights_toon_pars_fragment:k0,lights_phong_fragment:B0,lights_phong_pars_fragment:z0,lights_physical_fragment:H0,lights_physical_pars_fragment:V0,lights_fragment_begin:G0,lights_fragment_maps:W0,lights_fragment_end:X0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:Y0,logdepthbuf_vertex:j0,map_fragment:J0,map_pars_fragment:Z0,map_particle_fragment:K0,map_particle_pars_fragment:Q0,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:cg,normal_pars_fragment:lg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:_g,packing:vg,premultiplied_alpha_fragment:xg,project_vertex:yg,dithering_fragment:Sg,dithering_pars_fragment:Mg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Cg,shadowmap_vertex:Ag,shadowmask_pars_fragment:wg,skinbase_vertex:Rg,skinning_pars_vertex:Pg,skinning_vertex:Dg,skinnormal_vertex:Ig,specularmap_fragment:Lg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:kg,uv_pars_fragment:Bg,uv_pars_vertex:zg,uv_vertex:Hg,worldpos_vertex:Vg,background_vert:Gg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:$g,cube_vert:qg,cube_frag:Yg,depth_vert:jg,depth_frag:Jg,distanceRGBA_vert:Zg,distanceRGBA_frag:Kg,equirect_vert:Qg,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:c_,meshnormal_vert:l_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:f_,meshphysical_vert:d_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:__,points_frag:v_,shadow_vert:x_,shadow_frag:y_,sprite_vert:S_,sprite_frag:M_},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},zn={basic:{uniforms:sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:sn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:sn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:sn([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:sn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:sn([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:sn([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:sn([Me.common,Me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:sn([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};zn.physical={uniforms:sn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ho={r:0,b:0,g:0},zi=new Kn,b_=new gt;function T_(i,e,t,n,s,r,o){const a=new Ze(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const R=g(y);R===null?p(a,c):R&&R.isColor&&(p(R,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const R=g(S);R&&(R.isCubeTexture||R.mapping===qo)?(h===void 0&&(h=new at(new _n(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Bs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zi.copy(S.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(zi)),h.material.toneMapped=lt.getTransfer(R.colorSpace)!==dt,(u!==R||f!==R.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new at(new Vs(2,2),new an({name:"BackgroundMaterial",uniforms:Bs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=lt.getTransfer(R.colorSpace)!==dt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,f=R.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(ho,ju(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,S,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:T}}function E_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,L,H,q,K){let Y=!1;const J=u(q,H,L);r!==J&&(r=J,l(r.object)),Y=d(M,q,H,K),Y&&g(M,q,H,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(M,L,H,q),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,H){const q=H.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let Y=K[L.id];Y===void 0&&(Y={},K[L.id]=Y);let J=Y[q];return J===void 0&&(J=f(c()),Y[q]=J),J}function f(M){const L=[],H=[],q=[];for(let K=0;K<t;K++)L[K]=0,H[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:q,object:M,attributes:{},index:null}}function d(M,L,H,q){const K=r.attributes,Y=L.attributes;let J=0;const ne=H.getAttributes();for(const j in ne)if(ne[j].location>=0){const ye=K[j];let we=Y[j];if(we===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),ye===void 0||ye.attribute!==we||we&&ye.data!==we.data)return!0;J++}return r.attributesNum!==J||r.index!==q}function g(M,L,H,q){const K={},Y=L.attributes;let J=0;const ne=H.getAttributes();for(const j in ne)if(ne[j].location>=0){let ye=Y[j];ye===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor));const we={};we.attribute=ye,ye&&ye.data&&(we.data=ye.data),K[j]=we,J++}r.attributes=K,r.attributesNum=J,r.index=q}function _(){const M=r.newAttributes;for(let L=0,H=M.length;L<H;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const H=r.newAttributes,q=r.enabledAttributes,K=r.attributeDivisors;H[M]=1,q[M]===0&&(i.enableVertexAttribArray(M),q[M]=1),K[M]!==L&&(i.vertexAttribDivisor(M,L),K[M]=L)}function T(){const M=r.newAttributes,L=r.enabledAttributes;for(let H=0,q=L.length;H<q;H++)L[H]!==M[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function y(M,L,H,q,K,Y,J){J===!0?i.vertexAttribIPointer(M,L,H,K,Y):i.vertexAttribPointer(M,L,H,q,K,Y)}function S(M,L,H,q){_();const K=q.attributes,Y=H.getAttributes(),J=L.defaultAttributeValues;for(const ne in Y){const j=Y[ne];if(j.location>=0){let me=K[ne];if(me===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const ye=me.normalized,we=me.itemSize,Xe=e.get(me);if(Xe===void 0)continue;const Je=Xe.buffer,Ke=Xe.type,it=Xe.bytesPerElement,Z=Ke===i.INT||Ke===i.UNSIGNED_INT||me.gpuType===al;if(me.isInterleavedBufferAttribute){const ae=me.data,Ae=ae.stride,Oe=me.offset;if(ae.isInstancedInterleavedBuffer){for(let Le=0;Le<j.locationSize;Le++)p(j.location+Le,ae.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Le=0;Le<j.locationSize;Le++)m(j.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Le=0;Le<j.locationSize;Le++)y(j.location+Le,we/j.locationSize,Ke,ye,Ae*it,(Oe+we/j.locationSize*Le)*it,Z)}else{if(me.isInstancedBufferAttribute){for(let ae=0;ae<j.locationSize;ae++)p(j.location+ae,me.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ae=0;ae<j.locationSize;ae++)m(j.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ae=0;ae<j.locationSize;ae++)y(j.location+ae,we/j.locationSize,Ke,ye,we*it,we/j.locationSize*ae*it,Z)}}else if(J!==void 0){const ye=J[ne];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(j.location,ye);break;case 3:i.vertexAttrib3fv(j.location,ye);break;case 4:i.vertexAttrib4fv(j.location,ye);break;default:i.vertexAttrib1fv(j.location,ye)}}}}T()}function R(){U();for(const M in n){const L=n[M];for(const H in L){const q=L[H];for(const K in q)h(q[K].object),delete q[K];delete L[H]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const H in L){const q=L[H];for(const K in q)h(q[K].object),delete q[K];delete L[H]}delete n[M.id]}function I(M){for(const L in n){const H=n[L];if(H[M.id]===void 0)continue;const q=H[M.id];for(const K in q)h(q[K].object),delete q[K];delete H[M.id]}}function U(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function C_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function A_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==On&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const U=I===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Zn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xn&&!U)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:R,maxSamples:w}}function w_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ti,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,y=T*4;let S=p.clippingState||null;c.value=S,S=h(g,f,y,d);for(let R=0;R!==y;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=d;y!==_;++y,S+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function R_(i){let e=new WeakMap;function t(o,a){return a===oc?o.mapping=Fs:a===ac&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===oc||a===ac)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xp(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ds=4,Ch=[.125,.215,.35,.446,.526,.582],ji=20,Ra=new Yo,Ah=new Ze;let Pa=null,Da=0,Ia=0,La=!1;const Wi=(1+Math.sqrt(5))/2,Rs=1/Wi,wh=[new P(-Wi,Rs,0),new P(Wi,Rs,0),new P(-Rs,0,Wi),new P(Rs,0,Wi),new P(0,Wi,-Rs),new P(0,Wi,Rs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],P_=new P;class Rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=P_}=r;Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,Da,Ia),this._renderer.xr.enabled=La,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:fi,format:On,colorSpace:ks,depthBuffer:!1},s=Ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(r)),this._blurMaterial=I_(r,e,t)}return s}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,s,r){const c=new Rn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ah),u.toneMapping=Ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new mn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new at(new _n,_);let p=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(Ah),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):S===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const R=this._cubeSize;uo(s,S*R,y>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;uo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wh[(s-r-1)%wh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let T=0;for(let I=0;I<ji;++I){const U=I/_,E=Math.exp(-U*U/2);p.push(E),I===0?T+=E:I<m&&(T+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const S=this._sizeLods[s],R=3*S*(s>y-Ds?s-y+Ds:0),w=4*(this._cubeSize-S);uo(t,R,w,3*S,2*S),c.setRenderTarget(t),c.render(u,Ra)}}function D_(i){const e=[],t=[],n=[];let s=i;const r=i-Ds+1+Ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ds?c=Ch[o-i+Ds-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),y=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let w=0;w<d;w++){const I=w%3*2/3-1,U=w>2?0:-1,E=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];T.set(E,_*g*w),y.set(f,m*g*w);const M=[w,w,w,w,w,w];S.set(M,p*g*w)}const R=new Rt;R.setAttribute("position",new gn(T,_)),R.setAttribute("uv",new gn(y,m)),R.setAttribute("faceIndex",new gn(S,p)),e.push(R),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ph(i,e,t){const n=new kn(i,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function I_(i,e,t){const n=new Float32Array(ji),s=new P(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Dh(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ih(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===oc||c===ac,h=c===Fs||c===Os;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Rh(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Rh(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function U_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function N_(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let y=0,S=T.length;y<S;y+=3){const R=T[y+0],w=T[y+1],I=T[y+2];f.push(R,w,w,I,I,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,S=T.length/3-1;y<S;y+=3){const R=y+0,w=y+1,I=y+2;f.push(R,w,w,I,I,R)}}else return;const m=new(Wu(f)?Yu:qu)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function F_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function O_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function k_(i,e,t){const n=new WeakMap,s=new vt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const I=new Float32Array(R*w*4*u),U=new Xu(I,R,w,u);U.type=Xn,U.needsUpdate=!0;const E=S*4;for(let L=0;L<u;L++){const H=p[L],q=T[L],K=y[L],Y=R*w*4*L;for(let J=0;J<H.count;J++){const ne=J*E;g===!0&&(s.fromBufferAttribute(H,J),I[Y+ne+0]=s.x,I[Y+ne+1]=s.y,I[Y+ne+2]=s.z,I[Y+ne+3]=0),_===!0&&(s.fromBufferAttribute(q,J),I[Y+ne+4]=s.x,I[Y+ne+5]=s.y,I[Y+ne+6]=s.z,I[Y+ne+7]=0),m===!0&&(s.fromBufferAttribute(K,J),I[Y+ne+8]=s.x,I[Y+ne+9]=s.y,I[Y+ne+10]=s.z,I[Y+ne+11]=K.itemSize===4?s.w:1)}}f={count:u,texture:U,size:new ie(R,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function B_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const _f=new Qt,Lh=new nf(1,1),vf=new Xu,xf=new Rp,yf=new Zu,Uh=[],Nh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),kh=new Float32Array(4);function $s(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jo(i,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function V_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function G_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function W_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),Vt(t,n)}}function X_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Oh.set(n),i.uniformMatrix3fv(this.addr,!1,Oh),Vt(t,n)}}function $_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Fh.set(n),i.uniformMatrix4fv(this.addr,!1,Fh),Vt(t,n)}}function q_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Z_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function tv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=Gu,r=Lh):r=_f,t.setTexture2D(e||r,s)}function nv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xf,s)}function iv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yf,s)}function sv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vf,s)}function rv(i){switch(i){case 5126:return z_;case 35664:return H_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return $_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return j_;case 35669:case 35673:return J_;case 5125:return Z_;case 36294:return K_;case 36295:return Q_;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return sv}}function ov(i,e){i.uniform1fv(this.addr,e)}function av(i,e){const t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function cv(i,e){const t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function lv(i,e){const t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function hv(i,e){const t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uv(i,e){const t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fv(i,e){const t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dv(i,e){i.uniform1iv(this.addr,e)}function pv(i,e){i.uniform2iv(this.addr,e)}function mv(i,e){i.uniform3iv(this.addr,e)}function gv(i,e){i.uniform4iv(this.addr,e)}function _v(i,e){i.uniform1uiv(this.addr,e)}function vv(i,e){i.uniform2uiv(this.addr,e)}function xv(i,e){i.uniform3uiv(this.addr,e)}function yv(i,e){i.uniform4uiv(this.addr,e)}function Sv(i,e,t){const n=this.cache,s=e.length,r=jo(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_f,r[o])}function Mv(i,e,t){const n=this.cache,s=e.length,r=jo(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xf,r[o])}function bv(i,e,t){const n=this.cache,s=e.length,r=jo(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yf,r[o])}function Tv(i,e,t){const n=this.cache,s=e.length,r=jo(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vf,r[o])}function Ev(i){switch(i){case 5126:return ov;case 35664:return av;case 35665:return cv;case 35666:return lv;case 35674:return hv;case 35675:return uv;case 35676:return fv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return _v;case 36294:return vv;case 36295:return xv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Tv}}class Cv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rv(t.type)}}class Av{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}}class wv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Bh(i,e){i.seq.push(e),i.map[e.id]=e}function Rv(i,e,t){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const r=Ua.exec(n),o=Ua.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bh(t,l===void 0?new Cv(a,i,e):new Av(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new wv(a),Bh(t,u)),t=u}}}class Co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Rv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function zh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Pv=37297;let Dv=0;function Iv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Hh=new Qe;function Lv(i){lt._getMatrix(Hh,lt.workingColorSpace,i);const e=`mat3( ${Hh.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Fo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Iv(i.getShaderSource(e),a)}else return r}function Uv(i,e){const t=Lv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nv(i,e){let t;switch(e){case wu:t="Linear";break;case Ru:t="Reinhard";break;case Pu:t="Cineon";break;case ol:t="ACESFilmic";break;case Iu:t="AgX";break;case Lu:t="Neutral";break;case Du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new P;function Fv(){lt.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function kv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function pr(i){return i!==""}function Gh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(zv,Vv)}const Hv=new Map;function Vv(i,e){let t=et[e];if(t===void 0){const n=Hv.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}const Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(i){return i.replace(Gv,Wv)}function Wv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function $v(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Os&&(e="ENVMAP_MODE_REFRACTION"),e}function Yv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Au:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function jv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Xv(t),l=$v(t),h=qv(t),u=Yv(t),f=jv(t),d=Ov(t),g=kv(r),_=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[$h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[$h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?et.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Uv("linearToOutputTexel",t.outputColorSpace),Fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=Gc(o),o=Gh(o,t),o=Wh(o,t),a=Gc(a),a=Gh(a,t),a=Wh(a,t),o=Xh(o),a=Xh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=T+m+o,S=T+p+a,R=zh(s,s.VERTEX_SHADER,y),w=zh(s,s.FRAGMENT_SHADER,S);s.attachShader(_,R),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(L){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(R)||"",K=s.getShaderInfoLog(w)||"",Y=H.trim(),J=q.trim(),ne=K.trim();let j=!0,me=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,w);else{const ye=Vh(s,R,"vertex"),we=Vh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+ye+`
`+we)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(J===""||ne==="")&&(me=!1);me&&(L.diagnostics={runnable:j,programLog:Y,vertexShader:{log:J,prefix:m},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(R),s.deleteShader(w),U=new Co(s,_),E=Bv(s,_)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Pv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let Zv=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qv(e),t.set(e,n)),n}}class Qv{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}}function ex(i,e,t,n,s,r,o){const a=new _l,c=new Kv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,H,q){const K=H.fog,Y=q.geometry,J=E.isMeshStandardMaterial?H.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||J),j=ne&&ne.mapping===qo?ne.image.height:null,me=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,we=ye!==void 0?ye.length:0;let Xe=0;Y.morphAttributes.position!==void 0&&(Xe=1),Y.morphAttributes.normal!==void 0&&(Xe=2),Y.morphAttributes.color!==void 0&&(Xe=3);let Je,Ke,it,Z;if(me){const O=zn[me];Je=O.vertexShader,Ke=O.fragmentShader}else Je=E.vertexShader,Ke=E.fragmentShader,c.update(E),it=c.getVertexShaderID(E),Z=c.getFragmentShaderID(E);const ae=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Oe=q.isInstancedMesh===!0,Le=q.isBatchedMesh===!0,tt=!!E.map,ft=!!E.matcap,D=!!ne,re=!!E.aoMap,se=!!E.lightMap,ee=!!E.bumpMap,te=!!E.normalMap,pe=!!E.displacementMap,le=!!E.emissiveMap,ge=!!E.metalnessMap,ke=!!E.roughnessMap,$e=E.anisotropy>0,C=E.clearcoat>0,x=E.dispersion>0,k=E.iridescence>0,$=E.sheen>0,oe=E.transmission>0,X=$e&&!!E.anisotropyMap,Ue=C&&!!E.clearcoatMap,de=C&&!!E.clearcoatNormalMap,De=C&&!!E.clearcoatRoughnessMap,Re=k&&!!E.iridescenceMap,ce=k&&!!E.iridescenceThicknessMap,xe=$&&!!E.sheenColorMap,He=$&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,Se=!!E.specularColorMap,je=!!E.specularIntensityMap,F=oe&&!!E.transmissionMap,ue=oe&&!!E.thicknessMap,_e=!!E.gradientMap,Ee=!!E.alphaMap,he=E.alphaTest>0,v=!!E.alphaHash,A=!!E.extensions;let N=Ri;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(N=i.toneMapping);const V={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:Ke,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Le,batchingColor:Le&&q._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&q.instanceColor!==null,instancingMorph:Oe&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ks,alphaToCoverage:!!E.alphaToCoverage,map:tt,matcap:ft,envMap:D,envMapMode:D&&ne.mapping,envMapCubeUVHeight:j,aoMap:re,lightMap:se,bumpMap:ee,normalMap:te,displacementMap:f&&pe,emissiveMap:le,normalMapObjectSpace:te&&E.normalMapType===Kd,normalMapTangentSpace:te&&E.normalMapType===Vu,metalnessMap:ge,roughnessMap:ke,anisotropy:$e,anisotropyMap:X,clearcoat:C,clearcoatMap:Ue,clearcoatNormalMap:de,clearcoatRoughnessMap:De,dispersion:x,iridescence:k,iridescenceMap:Re,iridescenceThicknessMap:ce,sheen:$,sheenColorMap:xe,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:Se,specularIntensityMap:je,transmission:oe,transmissionMap:F,thicknessMap:ue,gradientMap:_e,opaque:E.transparent===!1&&E.blending===Is&&E.alphaToCoverage===!1,alphaMap:Ee,alphaTest:he,alphaHash:v,combine:E.combine,mapUv:tt&&_(E.map.channel),aoMapUv:re&&_(E.aoMap.channel),lightMapUv:se&&_(E.lightMap.channel),bumpMapUv:ee&&_(E.bumpMap.channel),normalMapUv:te&&_(E.normalMap.channel),displacementMapUv:pe&&_(E.displacementMap.channel),emissiveMapUv:le&&_(E.emissiveMap.channel),metalnessMapUv:ge&&_(E.metalnessMap.channel),roughnessMapUv:ke&&_(E.roughnessMap.channel),anisotropyMapUv:X&&_(E.anisotropyMap.channel),clearcoatMapUv:Ue&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(E.sheenRoughnessMap.channel),specularMapUv:Ne&&_(E.specularMap.channel),specularColorMapUv:Se&&_(E.specularColorMap.channel),specularIntensityMapUv:je&&_(E.specularIntensityMap.channel),transmissionMapUv:F&&_(E.transmissionMap.channel),thicknessMapUv:ue&&_(E.thicknessMap.channel),alphaMapUv:Ee&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(te||$e),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Y.attributes.uv&&(tt||Ee),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:N,decodeVideoTexture:tt&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&lt.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:A&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(A&&E.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return V.vertexUv1s=l.has(1),V.vertexUv2s=l.has(2),V.vertexUv3s=l.has(3),l.clear(),V}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(T(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function T(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const M=g[E.type];let L;if(M){const H=zn[M];L=Ar.clone(H.uniforms)}else L=E.uniforms;return L}function R(E,M){let L;for(let H=0,q=h.length;H<q;H++){const K=h[H];if(K.cacheKey===M){L=K,++L.usedTimes;break}}return L===void 0&&(L=new Jv(i,M,E,r),h.push(L)),L}function w(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function I(E){c.remove(E)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:I,programs:h,dispose:U}}function tx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||nx),n.length>1&&n.sort(f||qh),s.length>1&&s.sort(f||qh)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ix(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Yh,i.set(n,[o])):s>=r.length?(o=new Yh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ze};break;case"SpotLight":t={position:new P,direction:new P,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ox=0;function ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cx(i){const e=new sx,t=rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new gt,o=new gt;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,y=0,S=0,R=0,w=0,I=0;l.sort(ax);for(let E=0,M=l.length;E<M;E++){const L=l[E],H=L.color,q=L.intensity,K=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*q,u+=H.g*q,f+=H.b*q;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],q);I++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,j=t.get(L);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=L.shadow.matrix,T++}n.directional[d]=J,d++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(H).multiplyScalar(q),J.distance=K,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[_]=J;const ne=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,ne.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=ne.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=Y,S++}_++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(H).multiplyScalar(q),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=J,m++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const ne=L.shadow,j=t.get(L);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,j.shadowCameraNear=ne.camera.near,j.shadowCameraFar=ne.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=J,g++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(q),J.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[p]=J,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==T||U.numPointShadows!==y||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,U.directionalLength=d,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=T,U.numPointShadows=y,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=I,n.version=ox++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const y=l[p];if(y.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(y.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function jh(i){const e=new cx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function lx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new jh(i),e.set(s,[a])):r>=o.length?(a=new jh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fx(i,e,t){let n=new xl;const s=new ie,r=new ie,o=new vt,a=new Lm({depthPacking:Zd}),c=new Um,l={},h=t.maxTextureSize,u={[Ii]:pn,[pn]:Ii,[dn]:dn},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let p=this.type;this.render=function(w,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ui),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const q=p!==ai&&this.type===ai,K=p===ai&&this.type!==ai;for(let Y=0,J=w.length;Y<J;Y++){const ne=w[Y],j=ne.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const me=j.getFrameExtents();if(s.multiply(me),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,j.mapSize.y=r.y)),j.map===null||q===!0||K===!0){const we=this.type!==ai?{minFilter:Tn,magFilter:Tn}:{};j.map!==null&&j.map.dispose(),j.map=new kn(s.x,s.y,we),j.map.texture.name=ne.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const ye=j.getViewportCount();for(let we=0;we<ye;we++){const Xe=j.getViewport(we);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),H.viewport(o),j.updateMatrices(ne,we),n=j.getFrustum(),S(I,U,j.camera,ne,this.type)}j.isPointLightShadow!==!0&&this.type===ai&&T(j,U),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,L)};function T(w,I){const U=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,U,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,U,d,_,null)}function y(w,I,U,E){let M=null;const L=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=U.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const H=M.uuid,q=I.uuid;let K=l[H];K===void 0&&(K={},l[H]=K);let Y=K[q];Y===void 0&&(Y=M.clone(),K[q]=Y,I.addEventListener("dispose",R)),M=Y}if(M.visible=I.visible,M.wireframe=I.wireframe,E===ai?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=U}return M}function S(w,I,U,E,M){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===ai)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const q=e.update(w),K=w.material;if(Array.isArray(K)){const Y=q.groups;for(let J=0,ne=Y.length;J<ne;J++){const j=Y[J],me=K[j.materialIndex];if(me&&me.visible){const ye=y(w,me,E,M);w.onBeforeShadow(i,w,I,U,q,ye,j),i.renderBufferDirect(U,null,q,ye,w,j),w.onAfterShadow(i,w,I,U,q,ye,j)}}}else if(K.visible){const Y=y(w,K,E,M);w.onBeforeShadow(i,w,I,U,q,Y,null),i.renderBufferDirect(U,null,q,Y,w,null),w.onAfterShadow(i,w,I,U,q,Y,null)}}const H=w.children;for(let q=0,K=H.length;q<K;q++)S(H[q],I,U,E,M)}function R(w){w.target.removeEventListener("dispose",R);for(const U in l){const E=l[U],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const dx={[Qa]:ec,[tc]:sc,[nc]:rc,[Ns]:ic,[ec]:Qa,[sc]:tc,[rc]:nc,[ic]:Ns};function px(i,e){function t(){let F=!1;const ue=new vt;let _e=null;const Ee=new vt(0,0,0,0);return{setMask:function(he){_e!==he&&!F&&(i.colorMask(he,he,he,he),_e=he)},setLocked:function(he){F=he},setClear:function(he,v,A,N,V){V===!0&&(he*=N,v*=N,A*=N),ue.set(he,v,A,N),Ee.equals(ue)===!1&&(i.clearColor(he,v,A,N),Ee.copy(ue))},reset:function(){F=!1,_e=null,Ee.set(-1,0,0,0)}}}function n(){let F=!1,ue=!1,_e=null,Ee=null,he=null;return{setReversed:function(v){if(ue!==v){const A=e.get("EXT_clip_control");v?A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT):A.clipControlEXT(A.LOWER_LEFT_EXT,A.NEGATIVE_ONE_TO_ONE_EXT),ue=v;const N=he;he=null,this.setClear(N)}},getReversed:function(){return ue},setTest:function(v){v?ae(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(v){_e!==v&&!F&&(i.depthMask(v),_e=v)},setFunc:function(v){if(ue&&(v=dx[v]),Ee!==v){switch(v){case Qa:i.depthFunc(i.NEVER);break;case ec:i.depthFunc(i.ALWAYS);break;case tc:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case nc:i.depthFunc(i.EQUAL);break;case ic:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=v}},setLocked:function(v){F=v},setClear:function(v){he!==v&&(ue&&(v=1-v),i.clearDepth(v),he=v)},reset:function(){F=!1,_e=null,Ee=null,he=null,ue=!1}}}function s(){let F=!1,ue=null,_e=null,Ee=null,he=null,v=null,A=null,N=null,V=null;return{setTest:function(O){F||(O?ae(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(O){ue!==O&&!F&&(i.stencilMask(O),ue=O)},setFunc:function(O,Q,ve){(_e!==O||Ee!==Q||he!==ve)&&(i.stencilFunc(O,Q,ve),_e=O,Ee=Q,he=ve)},setOp:function(O,Q,ve){(v!==O||A!==Q||N!==ve)&&(i.stencilOp(O,Q,ve),v=O,A=Q,N=ve)},setLocked:function(O){F=O},setClear:function(O){V!==O&&(i.clearStencil(O),V=O)},reset:function(){F=!1,ue=null,_e=null,Ee=null,he=null,v=null,A=null,N=null,V=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,y=null,S=null,R=null,w=null,I=new Ze(0,0,0),U=0,E=!1,M=null,L=null,H=null,q=null,K=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=ne>=1):j.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=ne>=2);let me=null,ye={};const we=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),Je=new vt().fromArray(we),Ke=new vt().fromArray(Xe);function it(F,ue,_e,Ee){const he=new Uint8Array(4),v=i.createTexture();i.bindTexture(F,v),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let A=0;A<_e;A++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ue+A,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return v}const Z={};Z[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(Ns),ee(!1),te(kl),ae(i.CULL_FACE),re(ui);function ae(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ae(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Oe(F,ue){return u[F]!==ue?(i.bindFramebuffer(F,ue),u[F]=ue,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(F,ue){let _e=d,Ee=!1;if(F){_e=f.get(ue),_e===void 0&&(_e=[],f.set(ue,_e));const he=F.textures;if(_e.length!==he.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let v=0,A=he.length;v<A;v++)_e[v]=i.COLOR_ATTACHMENT0+v;_e.length=he.length,Ee=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(_e)}function tt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const ft={[qi]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Dd]:i.FUNC_REVERSE_SUBTRACT};ft[Id]=i.MIN,ft[Ld]=i.MAX;const D={[Ud]:i.ZERO,[Nd]:i.ONE,[Fd]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[Vd]:i.SRC_ALPHA_SATURATE,[zd]:i.DST_COLOR,[kd]:i.DST_ALPHA,[Od]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[Hd]:i.ONE_MINUS_DST_COLOR,[Bd]:i.ONE_MINUS_DST_ALPHA,[Gd]:i.CONSTANT_COLOR,[Wd]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[$d]:i.ONE_MINUS_CONSTANT_ALPHA};function re(F,ue,_e,Ee,he,v,A,N,V,O){if(F===ui){_===!0&&(Ae(i.BLEND),_=!1);return}if(_===!1&&(ae(i.BLEND),_=!0),F!==Rd){if(F!==m||O!==E){if((p!==qi||S!==qi)&&(i.blendEquation(i.FUNC_ADD),p=qi,S=qi),O)switch(F){case Is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yr:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,y=null,R=null,w=null,I.set(0,0,0),U=0,m=F,E=O}return}he=he||ue,v=v||_e,A=A||Ee,(ue!==p||he!==S)&&(i.blendEquationSeparate(ft[ue],ft[he]),p=ue,S=he),(_e!==T||Ee!==y||v!==R||A!==w)&&(i.blendFuncSeparate(D[_e],D[Ee],D[v],D[A]),T=_e,y=Ee,R=v,w=A),(N.equals(I)===!1||V!==U)&&(i.blendColor(N.r,N.g,N.b,V),I.copy(N),U=V),m=F,E=!1}function se(F,ue){F.side===dn?Ae(i.CULL_FACE):ae(i.CULL_FACE);let _e=F.side===pn;ue&&(_e=!_e),ee(_e),F.blending===Is&&F.transparent===!1?re(ui):re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function te(F){F!==Ad?(ae(i.CULL_FACE),F!==L&&(F===kl?i.cullFace(i.BACK):F===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),L=F}function pe(F){F!==H&&(J&&i.lineWidth(F),H=F)}function le(F,ue,_e){F?(ae(i.POLYGON_OFFSET_FILL),(q!==ue||K!==_e)&&(i.polygonOffset(ue,_e),q=ue,K=_e)):Ae(i.POLYGON_OFFSET_FILL)}function ge(F){F?ae(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function ke(F){F===void 0&&(F=i.TEXTURE0+Y-1),me!==F&&(i.activeTexture(F),me=F)}function $e(F,ue,_e){_e===void 0&&(me===null?_e=i.TEXTURE0+Y-1:_e=me);let Ee=ye[_e];Ee===void 0&&(Ee={type:void 0,texture:void 0},ye[_e]=Ee),(Ee.type!==F||Ee.texture!==ue)&&(me!==_e&&(i.activeTexture(_e),me=_e),i.bindTexture(F,ue||Z[F]),Ee.type=F,Ee.texture=ue)}function C(){const F=ye[me];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(F){Je.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Je.copy(F))}function He(F){Ke.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ke.copy(F))}function Ne(F,ue){let _e=l.get(ue);_e===void 0&&(_e=new WeakMap,l.set(ue,_e));let Ee=_e.get(F);Ee===void 0&&(Ee=i.getUniformBlockIndex(ue,F.name),_e.set(F,Ee))}function Se(F,ue){const Ee=l.get(ue).get(F);c.get(ue)!==Ee&&(i.uniformBlockBinding(ue,Ee,F.__bindingPointIndex),c.set(ue,Ee))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,ye={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,y=null,S=null,R=null,w=null,I=new Ze(0,0,0),U=0,E=!1,M=null,L=null,H=null,q=null,K=null,Je.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Ae,bindFramebuffer:Oe,drawBuffers:Le,useProgram:tt,setBlending:re,setMaterial:se,setFlipSided:ee,setCullFace:te,setLineWidth:pe,setPolygonOffset:le,setScissorTest:ge,activeTexture:ke,bindTexture:$e,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:Re,texImage3D:ce,updateUBOMapping:Ne,uniformBlockBinding:Se,texStorage2D:de,texStorage3D:De,texSubImage2D:$,texSubImage3D:oe,compressedTexSubImage2D:X,compressedTexSubImage3D:Ue,scissor:xe,viewport:He,reset:je}}function mx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return d?new OffscreenCanvas(C,x):ko("canvas")}function _(C,x,k){let $=1;const oe=$e(C);if((oe.width>k||oe.height>k)&&($=k/Math.max(oe.width,oe.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor($*oe.width),Ue=Math.floor($*oe.height);u===void 0&&(u=g(X,Ue));const de=x?g(X,Ue):u;return de.width=X,de.height=Ue,de.getContext("2d").drawImage(C,0,0,X,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+X+"x"+Ue+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,x,k,$,oe=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=x;if(x===i.RED&&(k===i.FLOAT&&(X=i.R32F),k===i.HALF_FLOAT&&(X=i.R16F),k===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(X=i.R8UI),k===i.UNSIGNED_SHORT&&(X=i.R16UI),k===i.UNSIGNED_INT&&(X=i.R32UI),k===i.BYTE&&(X=i.R8I),k===i.SHORT&&(X=i.R16I),k===i.INT&&(X=i.R32I)),x===i.RG&&(k===i.FLOAT&&(X=i.RG32F),k===i.HALF_FLOAT&&(X=i.RG16F),k===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(X=i.RG8UI),k===i.UNSIGNED_SHORT&&(X=i.RG16UI),k===i.UNSIGNED_INT&&(X=i.RG32UI),k===i.BYTE&&(X=i.RG8I),k===i.SHORT&&(X=i.RG16I),k===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(X=i.RGB8UI),k===i.UNSIGNED_SHORT&&(X=i.RGB16UI),k===i.UNSIGNED_INT&&(X=i.RGB32UI),k===i.BYTE&&(X=i.RGB8I),k===i.SHORT&&(X=i.RGB16I),k===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),k===i.UNSIGNED_INT&&(X=i.RGBA32UI),k===i.BYTE&&(X=i.RGBA8I),k===i.SHORT&&(X=i.RGBA16I),k===i.INT&&(X=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),x===i.RGBA){const Ue=oe?Fo:lt.getTransfer($);k===i.FLOAT&&(X=i.RGBA32F),k===i.HALF_FLOAT&&(X=i.RGBA16F),k===i.UNSIGNED_BYTE&&(X=Ue===dt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(C,x){let k;return C?x===null||x===ts||x===Mr?k=i.DEPTH24_STENCIL8:x===Xn?k=i.DEPTH32F_STENCIL8:x===Sr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ts||x===Mr?k=i.DEPTH_COMPONENT24:x===Xn?k=i.DEPTH_COMPONENT32F:x===Sr&&(k=i.DEPTH_COMPONENT16),k}function R(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Tn&&C.minFilter!==Wn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function w(C){const x=C.target;x.removeEventListener("dispose",w),U(x),x.isVideoTexture&&h.delete(x)}function I(C){const x=C.target;x.removeEventListener("dispose",I),M(x)}function U(C){const x=n.get(C);if(x.__webglInit===void 0)return;const k=C.source,$=f.get(k);if($){const oe=$[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&E(C),Object.keys($).length===0&&f.delete(k)}n.remove(C)}function E(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const k=C.source,$=f.get(k);delete $[x.__cacheKey],o.memory.textures--}function M(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let oe=0;oe<x.__webglFramebuffer[$].length;oe++)i.deleteFramebuffer(x.__webglFramebuffer[$][oe]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=C.textures;for(let $=0,oe=k.length;$<oe;$++){const X=n.get(k[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(C)}let L=0;function H(){L=0}function q(){const C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function K(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Y(C,x){const k=n.get(C);if(C.isVideoTexture&&ge(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,C,x);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function J(C,x){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Z(k,C,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function ne(C,x){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Z(k,C,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function j(C,x){const k=n.get(C);if(C.version>0&&k.__version!==C.version){ae(k,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const me={[No]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[cc]:i.MIRRORED_REPEAT},ye={[Tn]:i.NEAREST,[jd]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[Qo]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},we={[Qd]:i.NEVER,[rp]:i.ALWAYS,[ep]:i.LESS,[Gu]:i.LEQUAL,[tp]:i.EQUAL,[sp]:i.GEQUAL,[np]:i.GREATER,[ip]:i.NOTEQUAL};function Xe(C,x){if(x.type===Xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wn||x.magFilter===Qo||x.magFilter===Or||x.magFilter===Ki||x.minFilter===Wn||x.minFilter===Qo||x.minFilter===Or||x.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,me[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,me[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,me[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ye[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ye[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tn||x.minFilter!==Or&&x.minFilter!==Ki||x.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Je(C,x){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",w));const $=x.source;let oe=f.get($);oe===void 0&&(oe={},f.set($,oe));const X=K(x);if(X!==C.__cacheKey){oe[X]===void 0&&(oe[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),oe[X].usedTimes++;const Ue=oe[C.__cacheKey];Ue!==void 0&&(oe[C.__cacheKey].usedTimes--,Ue.usedTimes===0&&E(x)),C.__cacheKey=X,C.__webglTexture=oe[X].texture}return k}function Ke(C,x,k){return Math.floor(Math.floor(C/k)/x)}function it(C,x,k,$){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,$,x.data);else{X.sort((ce,xe)=>ce.start-xe.start);let Ue=0;for(let ce=1;ce<X.length;ce++){const xe=X[Ue],He=X[ce],Ne=xe.start+xe.count,Se=Ke(He.start,x.width,4),je=Ke(xe.start,x.width,4);He.start<=Ne+1&&Se===je&&Ke(He.start+He.count-1,x.width,4)===Se?xe.count=Math.max(xe.count,He.start+He.count-xe.start):(++Ue,X[Ue]=He)}X.length=Ue+1;const de=i.getParameter(i.UNPACK_ROW_LENGTH),De=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ce=0,xe=X.length;ce<xe;ce++){const He=X[ce],Ne=Math.floor(He.start/4),Se=Math.ceil(He.count/4),je=Ne%x.width,F=Math.floor(Ne/x.width),ue=Se,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,je,F,ue,_e,k,$,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,De),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Z(C,x,k){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const oe=Je(C,x),X=x.source;t.bindTexture($,C.__webglTexture,i.TEXTURE0+k);const Ue=n.get(X);if(X.version!==Ue.__version||oe===!0){t.activeTexture(i.TEXTURE0+k);const de=lt.getPrimaries(lt.workingColorSpace),De=x.colorSpace===Ei?null:lt.getPrimaries(x.colorSpace),Re=x.colorSpace===Ei||de===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ce=_(x.image,!1,s.maxTextureSize);ce=ke(x,ce);const xe=r.convert(x.format,x.colorSpace),He=r.convert(x.type);let Ne=y(x.internalFormat,xe,He,x.colorSpace,x.isVideoTexture);Xe($,x);let Se;const je=x.mipmaps,F=x.isVideoTexture!==!0,ue=Ue.__version===void 0||oe===!0,_e=X.dataReady,Ee=R(x,ce);if(x.isDepthTexture)Ne=S(x.format===Tr,x.type),ue&&(F?t.texStorage2D(i.TEXTURE_2D,1,Ne,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ce.width,ce.height,0,xe,He,null));else if(x.isDataTexture)if(je.length>0){F&&ue&&t.texStorage2D(i.TEXTURE_2D,Ee,Ne,je[0].width,je[0].height);for(let he=0,v=je.length;he<v;he++)Se=je[he],F?_e&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Se.width,Se.height,xe,He,Se.data):t.texImage2D(i.TEXTURE_2D,he,Ne,Se.width,Se.height,0,xe,He,Se.data);x.generateMipmaps=!1}else F?(ue&&t.texStorage2D(i.TEXTURE_2D,Ee,Ne,ce.width,ce.height),_e&&it(x,ce,xe,He)):t.texImage2D(i.TEXTURE_2D,0,Ne,ce.width,ce.height,0,xe,He,ce.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ne,je[0].width,je[0].height,ce.depth);for(let he=0,v=je.length;he<v;he++)if(Se=je[he],x.format!==On)if(xe!==null)if(F){if(_e)if(x.layerUpdates.size>0){const A=Eh(Se.width,Se.height,x.format,x.type);for(const N of x.layerUpdates){const V=Se.data.subarray(N*A/Se.data.BYTES_PER_ELEMENT,(N+1)*A/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,N,Se.width,Se.height,1,xe,V)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,ce.depth,xe,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Ne,Se.width,Se.height,ce.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,ce.depth,xe,He,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Ne,Se.width,Se.height,ce.depth,0,xe,He,Se.data)}else{F&&ue&&t.texStorage2D(i.TEXTURE_2D,Ee,Ne,je[0].width,je[0].height);for(let he=0,v=je.length;he<v;he++)Se=je[he],x.format!==On?xe!==null?F?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Se.width,Se.height,xe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?_e&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Se.width,Se.height,xe,He,Se.data):t.texImage2D(i.TEXTURE_2D,he,Ne,Se.width,Se.height,0,xe,He,Se.data)}else if(x.isDataArrayTexture)if(F){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ne,ce.width,ce.height,ce.depth),_e)if(x.layerUpdates.size>0){const he=Eh(ce.width,ce.height,x.format,x.type);for(const v of x.layerUpdates){const A=ce.data.subarray(v*he/ce.data.BYTES_PER_ELEMENT,(v+1)*he/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,v,ce.width,ce.height,1,xe,He,A)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,He,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ce.width,ce.height,ce.depth,0,xe,He,ce.data);else if(x.isData3DTexture)F?(ue&&t.texStorage3D(i.TEXTURE_3D,Ee,Ne,ce.width,ce.height,ce.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,He,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ce.width,ce.height,ce.depth,0,xe,He,ce.data);else if(x.isFramebufferTexture){if(ue)if(F)t.texStorage2D(i.TEXTURE_2D,Ee,Ne,ce.width,ce.height);else{let he=ce.width,v=ce.height;for(let A=0;A<Ee;A++)t.texImage2D(i.TEXTURE_2D,A,Ne,he,v,0,xe,He,null),he>>=1,v>>=1}}else if(je.length>0){if(F&&ue){const he=$e(je[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ne,he.width,he.height)}for(let he=0,v=je.length;he<v;he++)Se=je[he],F?_e&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,xe,He,Se):t.texImage2D(i.TEXTURE_2D,he,Ne,xe,He,Se);x.generateMipmaps=!1}else if(F){if(ue){const he=$e(ce);t.texStorage2D(i.TEXTURE_2D,Ee,Ne,he.width,he.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,He,ce)}else t.texImage2D(i.TEXTURE_2D,0,Ne,xe,He,ce);m(x)&&p($),Ue.__version=X.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ae(C,x,k){if(x.image.length!==6)return;const $=Je(C,x),oe=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const X=n.get(oe);if(oe.version!==X.__version||$===!0){t.activeTexture(i.TEXTURE0+k);const Ue=lt.getPrimaries(lt.workingColorSpace),de=x.colorSpace===Ei?null:lt.getPrimaries(x.colorSpace),De=x.colorSpace===Ei||Ue===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,ce=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let v=0;v<6;v++)!Re&&!ce?xe[v]=_(x.image[v],!0,s.maxCubemapSize):xe[v]=ce?x.image[v].image:x.image[v],xe[v]=ke(x,xe[v]);const He=xe[0],Ne=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),je=y(x.internalFormat,Ne,Se,x.colorSpace),F=x.isVideoTexture!==!0,ue=X.__version===void 0||$===!0,_e=oe.dataReady;let Ee=R(x,He);Xe(i.TEXTURE_CUBE_MAP,x);let he;if(Re){F&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,je,He.width,He.height);for(let v=0;v<6;v++){he=xe[v].mipmaps;for(let A=0;A<he.length;A++){const N=he[A];x.format!==On?Ne!==null?F?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A,0,0,N.width,N.height,Ne,N.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A,je,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A,0,0,N.width,N.height,Ne,Se,N.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A,je,N.width,N.height,0,Ne,Se,N.data)}}}else{if(he=x.mipmaps,F&&ue){he.length>0&&Ee++;const v=$e(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,je,v.width,v.height)}for(let v=0;v<6;v++)if(ce){F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,xe[v].width,xe[v].height,Ne,Se,xe[v].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,je,xe[v].width,xe[v].height,0,Ne,Se,xe[v].data);for(let A=0;A<he.length;A++){const V=he[A].image[v].image;F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A+1,0,0,V.width,V.height,Ne,Se,V.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A+1,je,V.width,V.height,0,Ne,Se,V.data)}}else{F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,Ne,Se,xe[v]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,je,Ne,Se,xe[v]);for(let A=0;A<he.length;A++){const N=he[A];F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A+1,0,0,Ne,Se,N.image[v]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A+1,je,Ne,Se,N.image[v])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),X.__version=oe.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ae(C,x,k,$,oe,X){const Ue=r.convert(k.format,k.colorSpace),de=r.convert(k.type),De=y(k.internalFormat,Ue,de,k.colorSpace),Re=n.get(x),ce=n.get(k);if(ce.__renderTarget=x,!Re.__hasExternalTextures){const xe=Math.max(1,x.width>>X),He=Math.max(1,x.height>>X);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,X,De,xe,He,x.depth,0,Ue,de,null):t.texImage2D(oe,X,De,xe,He,0,Ue,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),le(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,oe,ce.__webglTexture,0,pe(x)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,oe,ce.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(C,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const $=x.depthTexture,oe=$&&$.isDepthTexture?$.type:null,X=S(x.stencilBuffer,oe),Ue=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=pe(x);le(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,X,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,C)}else{const $=x.textures;for(let oe=0;oe<$.length;oe++){const X=$[oe],Ue=r.convert(X.format,X.colorSpace),de=r.convert(X.type),De=y(X.internalFormat,Ue,de,X.colorSpace),Re=pe(x);k&&le(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,De,x.width,x.height):le(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,De,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,De,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const oe=$.__webglTexture,X=pe(x);if(x.depthTexture.format===br)le(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(x.depthTexture.format===Tr)le(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function tt(C){const x=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",oe)};$.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=$}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?Le(x.__webglFramebuffer[0],C):Le(x.__webglFramebuffer,C)}else if(k){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),Oe(x.__webglDepthbuffer[$],C,!1);else{const oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,X)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Oe(x.__webglDepthbuffer,C,!1);else{const oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,x,k){const $=n.get(C);x!==void 0&&Ae($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&tt(C)}function D(C){const x=C.texture,k=n.get(C),$=n.get(x);C.addEventListener("dispose",I);const oe=C.textures,X=C.isWebGLCubeRenderTarget===!0,Ue=oe.length>1;if(Ue||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),X){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let De=0;De<x.mipmaps.length;De++)k.__webglFramebuffer[de][De]=i.createFramebuffer()}else k.__webglFramebuffer[de]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)k.__webglFramebuffer[de]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let de=0,De=oe.length;de<De;de++){const Re=n.get(oe[de]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&le(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const De=oe[de];k.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const Re=r.convert(De.format,De.colorSpace),ce=r.convert(De.type),xe=y(De.internalFormat,Re,ce,De.colorSpace,C.isXRRenderTarget===!0),He=pe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,xe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,k.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)Ae(k.__webglFramebuffer[de][De],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,De);else Ae(k.__webglFramebuffer[de],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let de=0,De=oe.length;de<De;de++){const Re=oe[de],ce=n.get(Re);let xe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,ce.__webglTexture),Xe(xe,Re),Ae(k.__webglFramebuffer,C,Re,i.COLOR_ATTACHMENT0+de,xe,0),m(Re)&&p(xe)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),Xe(de,x),x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)Ae(k.__webglFramebuffer[De],C,x,i.COLOR_ATTACHMENT0,de,De);else Ae(k.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,de,0);m(x)&&p(de),t.unbindTexture()}C.depthBuffer&&tt(C)}function re(C){const x=C.textures;for(let k=0,$=x.length;k<$;k++){const oe=x[k];if(m(oe)){const X=T(C),Ue=n.get(oe).__webglTexture;t.bindTexture(X,Ue),p(X),t.unbindTexture()}}}const se=[],ee=[];function te(C){if(C.samples>0){if(le(C)===!1){const x=C.textures,k=C.width,$=C.height;let oe=i.COLOR_BUFFER_BIT;const X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(C),de=x.length>1;if(de)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const De=C.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Re]);const ce=n.get(x[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,k,$,0,0,k,$,oe,i.NEAREST),c===!0&&(se.length=0,ee.length=0,se.push(i.COLOR_ATTACHMENT0+Re),C.depthBuffer&&C.resolveDepthBuffer===!1&&(se.push(X),ee.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Re]);const ce=n.get(x[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function pe(C){return Math.min(s.maxSamples,C.samples)}function le(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ge(C){const x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function ke(C,x){const k=C.colorSpace,$=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==ks&&k!==Ei&&(lt.getTransfer(k)===dt?($!==On||oe!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function $e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=ne,this.setTextureCube=j,this.rebindTextures=ft,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=le}function gx(i,e){function t(n,s=Ei){let r;const o=lt.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nu)return i.BYTE;if(n===Fu)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===Bu)return i.ALPHA;if(n===zu)return i.RGB;if(n===On)return i.RGBA;if(n===br)return i.DEPTH_COMPONENT;if(n===Tr)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===Hu)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===Mo||n===bo||n===To||n===Eo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===hc||n===uc||n===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===pc)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gc||n===_c||n===vc||n===xc||n===yc||n===Sc||n===Mc||n===bc||n===Tc||n===Ec||n===Cc||n===Ac||n===wc||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Dc||n===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pc)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===Uc||n===Nc||n===Fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new sf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:_x,fragmentShader:vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yx extends Ws{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new xx,p={},T=t.getContextAttributes();let y=null,S=null;const R=[],w=[],I=new ie;let U=null;const E=new Rn;E.viewport=new vt;const M=new Rn;M.viewport=new vt;const L=[E,M],H=new Bm;let q=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=R[Z];return ae===void 0&&(ae=new ya,R[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=R[Z];return ae===void 0&&(ae=new ya,R[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=R[Z];return ae===void 0&&(ae=new ya,R[Z]=ae),ae.getHandSpace()};function Y(Z){const ae=w.indexOf(Z.inputSource);if(ae===-1)return;const Ae=R[ae];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,l||o),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function J(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<R.length;Z++){const ae=w[Z];ae!==null&&(w[Z]=null,R[Z].disconnect(ae))}q=null,K=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(y),d=null,f=null,u=null,s=null,S=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Oe=null,Le=null;T.depth&&(Le=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=T.stencil?Tr:br,Oe=T.stencil?Mr:ts);const tt={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new kn(f.textureWidth,f.textureHeight,{format:On,type:Zn,depthTexture:new nf(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ae={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new kn(d.framebufferWidth,d.framebufferHeight,{format:On,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Z){for(let ae=0;ae<Z.removed.length;ae++){const Ae=Z.removed[ae],Oe=w.indexOf(Ae);Oe>=0&&(w[Oe]=null,R[Oe].disconnect(Ae))}for(let ae=0;ae<Z.added.length;ae++){const Ae=Z.added[ae];let Oe=w.indexOf(Ae);if(Oe===-1){for(let tt=0;tt<R.length;tt++)if(tt>=w.length){w.push(Ae),Oe=tt;break}else if(w[tt]===null){w[tt]=Ae,Oe=tt;break}if(Oe===-1)break}const Le=R[Oe];Le&&Le.connect(Ae)}}const j=new P,me=new P;function ye(Z,ae,Ae){j.setFromMatrixPosition(ae.matrixWorld),me.setFromMatrixPosition(Ae.matrixWorld);const Oe=j.distanceTo(me),Le=ae.projectionMatrix.elements,tt=Ae.projectionMatrix.elements,ft=Le[14]/(Le[10]-1),D=Le[14]/(Le[10]+1),re=(Le[9]+1)/Le[5],se=(Le[9]-1)/Le[5],ee=(Le[8]-1)/Le[0],te=(tt[8]+1)/tt[0],pe=ft*ee,le=ft*te,ge=Oe/(-ee+te),ke=ge*-ee;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ke),Z.translateZ(ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const $e=ft+ge,C=D+ge,x=pe-ke,k=le+(Oe-ke),$=re*D/C*$e,oe=se*D/C*$e;Z.projectionMatrix.makePerspective(x,k,$,oe,$e,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function we(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ae=Z.near,Ae=Z.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),H.near=M.near=E.near=ae,H.far=M.far=E.far=Ae,(q!==H.near||K!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),q=H.near,K=H.far),H.layers.mask=Z.layers.mask|6,E.layers.mask=H.layers.mask&3,M.layers.mask=H.layers.mask&5;const Oe=Z.parent,Le=H.cameras;we(H,Oe);for(let tt=0;tt<Le.length;tt++)we(Le[tt],Oe);Le.length===2?ye(H,E,M):H.projectionMatrix.copy(E.projectionMatrix),Xe(Z,H,Oe)};function Xe(Z,ae,Ae){Ae===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Er*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return p[Z]};let Je=null;function Ke(Z,ae){if(h=ae.getViewerPose(l||o),g=ae,h!==null){const Ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Oe=!1;Ae.length!==H.cameras.length&&(H.cameras.length=0,Oe=!0);for(let D=0;D<Ae.length;D++){const re=Ae[D];let se=null;if(d!==null)se=d.getViewport(re);else{const te=u.getViewSubImage(f,re);se=te.viewport,D===0&&(e.setRenderTargetTextures(S,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(S))}let ee=L[D];ee===void 0&&(ee=new Rn,ee.layers.enable(D),ee.viewport=new vt,L[D]=ee),ee.matrix.fromArray(re.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(re.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(se.x,se.y,se.width,se.height),D===0&&(H.matrix.copy(ee.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Oe===!0&&H.cameras.push(ee)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const D=u.getDepthInformation(Ae[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<Ae.length;D++){const re=Ae[D].camera;if(re){let se=p[re];se||(se=new sf,p[re]=se);const ee=u.getCameraImage(re);se.sourceTexture=ee}}}}for(let Ae=0;Ae<R.length;Ae++){const Oe=w[Ae],Le=R[Ae];Oe!==null&&Le!==void 0&&Le.update(Oe,ae,l||o)}Je&&Je(Z,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const it=new gf;it.setAnimationLoop(Ke),this.setAnimationLoop=function(Z){Je=Z},this.dispose=function(){}}}const Hi=new Kn,Sx=new gt;function Mx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ju(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),y=T.envMap,S=T.envMapRotation;y&&(m.envMap.value=y,Hi.copy(S),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(Hi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const S=y.program;n.uniformBlockBinding(T,S)}function l(T,y){let S=s[T.id];S===void 0&&(g(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(T,R);const w=e.render.frame;r[T.id]!==w&&(f(T),r[T.id]=w)}function h(T){const y=u();T.__bindingPointIndex=y;const S=i.createBuffer(),R=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=s[T.id],S=T.uniforms,R=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,I=S.length;w<I;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,M=U.length;E<M;E++){const L=U[E];if(d(L,w,E,R)===!0){const H=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let Y=0;Y<q.length;Y++){const J=q[Y],ne=_(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,H+K,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,K),K+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,y,S,R){const w=T.value,I=y+"_"+S;if(R[I]===void 0)return typeof w=="number"||typeof w=="boolean"?R[I]=w:R[I]=w.clone(),!0;{const U=R[I];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return R[I]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(T){const y=T.uniforms;let S=0;const R=16;for(let I=0,U=y.length;I<U;I++){const E=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,L=E.length;M<L;M++){const H=E[M],q=Array.isArray(H.value)?H.value:[H.value];for(let K=0,Y=q.length;K<Y;K++){const J=q[K],ne=_(J),j=S%R,me=j%ne.boundary,ye=j+me;S+=me,ye!==0&&R-ye<ne.storage&&(S+=R-ye),H.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=ne.storage}}}const w=S%R;return w>0&&(S+=R-w),T.__size=S,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Tx{constructor(e={}){const{canvas:t=Mp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=Zt;let w=0,I=0,U=null,E=-1,M=null;const L=new vt,H=new vt;let q=null;const K=new Ze(0);let Y=0,J=t.width,ne=t.height,j=1,me=null,ye=null;const we=new vt(0,0,J,ne),Xe=new vt(0,0,J,ne);let Je=!1;const Ke=new xl;let it=!1,Z=!1;const ae=new gt,Ae=new P,Oe=new vt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ft(){return U===null?j:1}let D=n;function re(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){const B="webgl2";if(D=re(B,b),D===null)throw re(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,ee,te,pe,le,ge,ke,$e,C,x,k,$,oe,X,Ue,de,De,Re,ce,xe,He,Ne,Se,je;function F(){se=new U_(D),se.init(),Ne=new gx(D,se),ee=new A_(D,se,e,Ne),te=new px(D,se),ee.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),pe=new O_(D),le=new tx,ge=new mx(D,se,te,le,ee,Ne,pe),ke=new R_(S),$e=new L_(S),C=new Gm(D),Se=new E_(D,C),x=new N_(D,C,pe,Se),k=new B_(D,x,C,pe),ce=new k_(D,ee,ge),de=new w_(le),$=new ex(S,ke,$e,se,ee,Se,de),oe=new Mx(S,le),X=new ix,Ue=new lx(se),Re=new T_(S,ke,$e,te,k,d,c),De=new fx(S,k,ee),je=new bx(D,pe,ee,te),xe=new C_(D,se,pe),He=new F_(D,se,pe),pe.programs=$.programs,S.capabilities=ee,S.extensions=se,S.properties=le,S.renderLists=X,S.shadowMap=De,S.state=te,S.info=pe}F();const ue=new yx(S,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(J,ne,!1))},this.getSize=function(b){return b.set(J,ne)},this.setSize=function(b,B,G=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ne=B,t.width=Math.floor(b*j),t.height=Math.floor(B*j),G===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(J*j,ne*j).floor()},this.setDrawingBufferSize=function(b,B,G){J=b,ne=B,j=G,t.width=Math.floor(b*G),t.height=Math.floor(B*G),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(we)},this.setViewport=function(b,B,G,W){b.isVector4?we.set(b.x,b.y,b.z,b.w):we.set(b,B,G,W),te.viewport(L.copy(we).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(Xe)},this.setScissor=function(b,B,G,W){b.isVector4?Xe.set(b.x,b.y,b.z,b.w):Xe.set(b,B,G,W),te.scissor(H.copy(Xe).multiplyScalar(j).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){te.setScissorTest(Je=b)},this.setOpaqueSort=function(b){me=b},this.setTransparentSort=function(b){ye=b},this.getClearColor=function(b){return b.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,G=!0){let W=0;if(b){let z=!1;if(U!==null){const fe=U.texture.format;z=fe===dl||fe===fl||fe===ul}if(z){const fe=U.texture.type,be=fe===Zn||fe===ts||fe===Sr||fe===Mr||fe===cl||fe===ll,Fe=Re.getClearColor(),Pe=Re.getClearAlpha(),qe=Fe.r,Ye=Fe.g,ze=Fe.b;be?(g[0]=qe,g[1]=Ye,g[2]=ze,g[3]=Pe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=qe,_[1]=Ye,_[2]=ze,_[3]=Pe,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}B&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Re.dispose(),X.dispose(),Ue.dispose(),le.dispose(),ke.dispose(),$e.dispose(),k.dispose(),Se.dispose(),je.dispose(),$.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ve),ue.removeEventListener("sessionend",Te),Be.stop()};function _e(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=pe.autoReset,B=De.enabled,G=De.autoUpdate,W=De.needsUpdate,z=De.type;F(),pe.autoReset=b,De.enabled=B,De.autoUpdate=G,De.needsUpdate=W,De.type=z}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function v(b){const B=b.target;B.removeEventListener("dispose",v),A(B)}function A(b){N(b),le.remove(b)}function N(b){const B=le.get(b).programs;B!==void 0&&(B.forEach(function(G){$.releaseProgram(G)}),b.isShaderMaterial&&$.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,G,W,z,fe){B===null&&(B=Le);const be=z.isMesh&&z.matrixWorld.determinant()<0,Fe=Ys(b,B,G,W,z);te.setMaterial(W,be);let Pe=G.index,qe=1;if(W.wireframe===!0){if(Pe=x.getWireframeAttribute(G),Pe===void 0)return;qe=2}const Ye=G.drawRange,ze=G.attributes.position;let rt=Ye.start*qe,_t=(Ye.start+Ye.count)*qe;fe!==null&&(rt=Math.max(rt,fe.start*qe),_t=Math.min(_t,(fe.start+fe.count)*qe)),Pe!==null?(rt=Math.max(rt,0),_t=Math.min(_t,Pe.count)):ze!=null&&(rt=Math.max(rt,0),_t=Math.min(_t,ze.count));const At=_t-rt;if(At<0||At===1/0)return;Se.setup(z,W,Fe,G,Pe);let St,xt=xe;if(Pe!==null&&(St=C.get(Pe),xt=He,xt.setIndex(St)),z.isMesh)W.wireframe===!0?(te.setLineWidth(W.wireframeLinewidth*ft()),xt.setMode(D.LINES)):xt.setMode(D.TRIANGLES);else if(z.isLine){let Ge=W.linewidth;Ge===void 0&&(Ge=1),te.setLineWidth(Ge*ft()),z.isLineSegments?xt.setMode(D.LINES):z.isLineLoop?xt.setMode(D.LINE_LOOP):xt.setMode(D.LINE_STRIP)}else z.isPoints?xt.setMode(D.POINTS):z.isSprite&&xt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))xt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ge=z._multiDrawStarts,bt=z._multiDrawCounts,ut=z._multiDrawCount,vn=Pe?C.get(Pe).bytesPerElement:1,hs=le.get(W).currentProgram.getUniforms();for(let xn=0;xn<ut;xn++)hs.setValue(D,"_gl_DrawID",xn),xt.render(Ge[xn]/vn,bt[xn])}else if(z.isInstancedMesh)xt.renderInstances(rt,At,z.count);else if(G.isInstancedBufferGeometry){const Ge=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bt=Math.min(G.instanceCount,Ge);xt.renderInstances(rt,At,bt)}else xt.render(rt,At)};function V(b,B,G){b.transparent===!0&&b.side===dn&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,Dt(b,B,G),b.side=Ii,b.needsUpdate=!0,Dt(b,B,G),b.side=dn):Dt(b,B,G)}this.compile=function(b,B,G=null){G===null&&(G=b),p=Ue.get(G),p.init(B),y.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==G&&b.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const W=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){const Fe=fe[be];V(Fe,G,z),W.add(Fe)}else V(fe,G,z),W.add(fe)}),p=y.pop(),W},this.compileAsync=function(b,B,G=null){const W=this.compile(b,B,G);return new Promise(z=>{function fe(){if(W.forEach(function(be){le.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){z(b);return}setTimeout(fe,10)}se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let O=null;function Q(b){O&&O(b)}function ve(){Be.stop()}function Te(){Be.start()}const Be=new gf;Be.setAnimationLoop(Q),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(b){O=b,ue.setAnimationLoop(b),b===null?Be.stop():Be.start()},ue.addEventListener("sessionstart",ve),ue.addEventListener("sessionend",Te),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(B),B=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,B,U),p=Ue.get(b,y.length),p.init(B),y.push(p),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ke.setFromProjectionMatrix(ae,$n,B.reversedDepth),Z=this.localClippingEnabled,it=de.init(this.clippingPlanes,Z),m=X.get(b,T.length),m.init(),T.push(m),ue.enabled===!0&&ue.isPresenting===!0){const fe=S.xr.getDepthSensingMesh();fe!==null&&We(fe,B,-1/0,S.sortObjects)}We(b,B,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(me,ye),tt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,tt&&Re.addToRenderList(m,b),this.info.render.frame++,it===!0&&de.beginShadows();const G=p.state.shadowsArray;De.render(G,b,B),it===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const fe=B.cameras;if(z.length>0)for(let be=0,Fe=fe.length;be<Fe;be++){const Pe=fe[be];ht(W,z,b,Pe)}tt&&Re.render(b);for(let be=0,Fe=fe.length;be<Fe;be++){const Pe=fe[be];Ve(m,b,Pe,Pe.viewport)}}else z.length>0&&ht(W,z,b,B),tt&&Re.render(b),Ve(m,b,B);U!==null&&I===0&&(ge.updateMultisampleRenderTarget(U),ge.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(S,b,B),Se.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],it===!0&&de.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function We(b,B,G,W){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ke.intersectsSprite(b)){W&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ae);const be=k.update(b),Fe=b.material;Fe.visible&&m.push(b,be,Fe,G,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ke.intersectsObject(b))){const be=k.update(b),Fe=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Oe.copy(be.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(ae)),Array.isArray(Fe)){const Pe=be.groups;for(let qe=0,Ye=Pe.length;qe<Ye;qe++){const ze=Pe[qe],rt=Fe[ze.materialIndex];rt&&rt.visible&&m.push(b,be,rt,G,Oe.z,ze)}}else Fe.visible&&m.push(b,be,Fe,G,Oe.z,null)}}const fe=b.children;for(let be=0,Fe=fe.length;be<Fe;be++)We(fe[be],B,G,W)}function Ve(b,B,G,W){const z=b.opaque,fe=b.transmissive,be=b.transparent;p.setupLightsView(G),it===!0&&de.setGlobalState(S.clippingPlanes,G),W&&te.viewport(L.copy(W)),z.length>0&&Pt(z,B,G),fe.length>0&&Pt(fe,B,G),be.length>0&&Pt(be,B,G),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function ht(b,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new kn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?fi:Zn,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const fe=p.state.transmissionRenderTarget[W.id],be=W.viewport||L;fe.setSize(be.z*S.transmissionResolutionScale,be.w*S.transmissionResolutionScale);const Fe=S.getRenderTarget(),Pe=S.getActiveCubeFace(),qe=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(K),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),tt&&Re.render(G);const Ye=S.toneMapping;S.toneMapping=Ri;const ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),it===!0&&de.setGlobalState(S.clippingPlanes,W),Pt(b,G,W),ge.updateMultisampleRenderTarget(fe),ge.updateRenderTargetMipmap(fe),se.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let _t=0,At=B.length;_t<At;_t++){const St=B[_t],xt=St.object,Ge=St.geometry,bt=St.material,ut=St.group;if(bt.side===dn&&xt.layers.test(W.layers)){const vn=bt.side;bt.side=pn,bt.needsUpdate=!0,yt(xt,G,W,Ge,bt,ut),bt.side=vn,bt.needsUpdate=!0,rt=!0}}rt===!0&&(ge.updateMultisampleRenderTarget(fe),ge.updateRenderTargetMipmap(fe))}S.setRenderTarget(Fe,Pe,qe),S.setClearColor(K,Y),ze!==void 0&&(W.viewport=ze),S.toneMapping=Ye}function Pt(b,B,G){const W=B.isScene===!0?B.overrideMaterial:null;for(let z=0,fe=b.length;z<fe;z++){const be=b[z],Fe=be.object,Pe=be.geometry,qe=be.group;let Ye=be.material;Ye.allowOverride===!0&&W!==null&&(Ye=W),Fe.layers.test(G.layers)&&yt(Fe,B,G,Pe,Ye,qe)}}function yt(b,B,G,W,z,fe){b.onBeforeRender(S,B,G,W,z,fe),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(S,B,G,W,b,fe),z.transparent===!0&&z.side===dn&&z.forceSinglePass===!1?(z.side=pn,z.needsUpdate=!0,S.renderBufferDirect(G,B,W,z,b,fe),z.side=Ii,z.needsUpdate=!0,S.renderBufferDirect(G,B,W,z,b,fe),z.side=dn):S.renderBufferDirect(G,B,W,z,b,fe),b.onAfterRender(S,B,G,W,z,fe)}function Dt(b,B,G){B.isScene!==!0&&(B=Le);const W=le.get(b),z=p.state.lights,fe=p.state.shadowsArray,be=z.state.version,Fe=$.getParameters(b,z.state,fe,B,G),Pe=$.getProgramCacheKey(Fe);let qe=W.programs;W.environment=b.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(b.isMeshStandardMaterial?$e:ke).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,qe===void 0&&(b.addEventListener("dispose",v),qe=new Map,W.programs=qe);let Ye=qe.get(Pe);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===be)return Ui(b,Fe),Ye}else Fe.uniforms=$.getUniforms(b),b.onBeforeCompile(Fe,S),Ye=$.acquireProgram(Fe,Pe),qe.set(Pe,Ye),W.uniforms=Fe.uniforms;const ze=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=de.uniform),Ui(b,Fe),W.needsLights=Md(b),W.lightsStateVersion=be,W.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ye,W.uniformsList=null,Ye}function Ot(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Co.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Ui(b,B){const G=le.get(b);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Ys(b,B,G,W,z){B.isScene!==!0&&(B=Le),ge.resetTextureUnits();const fe=B.fog,be=W.isMeshStandardMaterial?B.environment:null,Fe=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ks,Pe=(W.isMeshStandardMaterial?$e:ke).get(W.envMap||be),qe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ye=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ze=!!G.morphAttributes.position,rt=!!G.morphAttributes.normal,_t=!!G.morphAttributes.color;let At=Ri;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=S.toneMapping);const St=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,xt=St!==void 0?St.length:0,Ge=le.get(W),bt=p.state.lights;if(it===!0&&(Z===!0||b!==M)){const tn=b===M&&W.id===E;de.setState(W,b,tn)}let ut=!1;W.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==bt.state.version||Ge.outputColorSpace!==Fe||z.isBatchedMesh&&Ge.batching===!1||!z.isBatchedMesh&&Ge.batching===!0||z.isBatchedMesh&&Ge.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ge.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ge.instancing===!1||!z.isInstancedMesh&&Ge.instancing===!0||z.isSkinnedMesh&&Ge.skinning===!1||!z.isSkinnedMesh&&Ge.skinning===!0||z.isInstancedMesh&&Ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ge.instancingMorph===!1&&z.morphTexture!==null||Ge.envMap!==Pe||W.fog===!0&&Ge.fog!==fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==de.numPlanes||Ge.numIntersection!==de.numIntersection)||Ge.vertexAlphas!==qe||Ge.vertexTangents!==Ye||Ge.morphTargets!==ze||Ge.morphNormals!==rt||Ge.morphColors!==_t||Ge.toneMapping!==At||Ge.morphTargetsCount!==xt)&&(ut=!0):(ut=!0,Ge.__version=W.version);let vn=Ge.currentProgram;ut===!0&&(vn=Dt(W,B,z));let hs=!1,xn=!1,js=!1;const Tt=vn.getUniforms(),Cn=Ge.uniforms;if(te.useProgram(vn.program)&&(hs=!0,xn=!0,js=!0),W.id!==E&&(E=W.id,xn=!0),hs||M!==b){te.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Tt.setValue(D,"projectionMatrix",b.projectionMatrix),Tt.setValue(D,"viewMatrix",b.matrixWorldInverse);const hn=Tt.map.cameraPosition;hn!==void 0&&hn.setValue(D,Ae.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&Tt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,xn=!0,js=!0)}if(z.isSkinnedMesh){Tt.setOptional(D,z,"bindMatrix"),Tt.setOptional(D,z,"bindMatrixInverse");const tn=z.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Tt.setValue(D,"boneTexture",tn.boneTexture,ge))}z.isBatchedMesh&&(Tt.setOptional(D,z,"batchingTexture"),Tt.setValue(D,"batchingTexture",z._matricesTexture,ge),Tt.setOptional(D,z,"batchingIdTexture"),Tt.setValue(D,"batchingIdTexture",z._indirectTexture,ge),Tt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Tt.setValue(D,"batchingColorTexture",z._colorsTexture,ge));const An=G.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ce.update(z,G,vn),(xn||Ge.receiveShadow!==z.receiveShadow)&&(Ge.receiveShadow=z.receiveShadow,Tt.setValue(D,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Cn.envMap.value=Pe,Cn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Cn.envMapIntensity.value=B.environmentIntensity),xn&&(Tt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ge.needsLights&&Fr(Cn,js),fe&&W.fog===!0&&oe.refreshFogUniforms(Cn,fe),oe.refreshMaterialUniforms(Cn,W,j,ne,p.state.transmissionRenderTarget[b.id]),Co.upload(D,Ot(Ge),Cn,ge)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Co.upload(D,Ot(Ge),Cn,ge),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(D,"center",z.center),Tt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Tt.setValue(D,"normalMatrix",z.normalMatrix),Tt.setValue(D,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const tn=W.uniformsGroups;for(let hn=0,Ko=tn.length;hn<Ko;hn++){const Ni=tn[hn];je.update(Ni,vn),je.bind(Ni,vn)}}return vn}function Fr(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Md(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,B,G){const W=le.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),le.get(b.texture).__webglTexture=B,le.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const G=le.get(b);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0};const bd=D.createFramebuffer();this.setRenderTarget=function(b,B=0,G=0){U=b,w=B,I=G;let W=!0,z=null,fe=!1,be=!1;if(b){const Pe=le.get(b);if(Pe.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Pe.__webglFramebuffer===void 0)ge.setupRenderTarget(b);else if(Pe.__hasExternalTextures)ge.rebindTextures(b,le.get(b.texture).__webglTexture,le.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(Pe.__boundDepthTexture!==ze){if(ze!==null&&le.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(b)}}const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(be=!0);const Ye=le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[B])?z=Ye[B][G]:z=Ye[B],fe=!0):b.samples>0&&ge.useMultisampledRTT(b)===!1?z=le.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?z=Ye[G]:z=Ye,L.copy(b.viewport),H.copy(b.scissor),q=b.scissorTest}else L.copy(we).multiplyScalar(j).floor(),H.copy(Xe).multiplyScalar(j).floor(),q=Je;if(G!==0&&(z=bd),te.bindFramebuffer(D.FRAMEBUFFER,z)&&W&&te.drawBuffers(b,z),te.viewport(L),te.scissor(H),te.setScissorTest(q),fe){const Pe=le.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,G)}else if(be){const Pe=B;for(let qe=0;qe<b.textures.length;qe++){const Ye=le.get(b.textures[qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qe,Ye.__webglTexture,G,Pe)}}else if(b!==null&&G!==0){const Pe=le.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pe.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(b,B,G,W,z,fe,be,Fe=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){te.bindFramebuffer(D.FRAMEBUFFER,Pe);try{const qe=b.textures[Fe],Ye=qe.format,ze=qe.type;if(!ee.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-W&&G>=0&&G<=b.height-z&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Fe),D.readPixels(B,G,W,z,Ne.convert(Ye),Ne.convert(ze),fe))}finally{const qe=U!==null?le.get(U).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(b,B,G,W,z,fe,be,Fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe)if(B>=0&&B<=b.width-W&&G>=0&&G<=b.height-z){te.bindFramebuffer(D.FRAMEBUFFER,Pe);const qe=b.textures[Fe],Ye=qe.format,ze=qe.type;if(!ee.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Fe),D.readPixels(B,G,W,z,Ne.convert(Ye),Ne.convert(ze),0);const _t=U!==null?le.get(U).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,_t);const At=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bp(D,At,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.deleteBuffer(rt),D.deleteSync(At),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,G=0){const W=Math.pow(2,-G),z=Math.floor(b.image.width*W),fe=Math.floor(b.image.height*W),be=B!==null?B.x:0,Fe=B!==null?B.y:0;ge.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,be,Fe,z,fe),te.unbindTexture()};const Td=D.createFramebuffer(),Ed=D.createFramebuffer();this.copyTextureToTexture=function(b,B,G=null,W=null,z=0,fe=null){fe===null&&(z!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=z,z=0):fe=0);let be,Fe,Pe,qe,Ye,ze,rt,_t,At;const St=b.isCompressedTexture?b.mipmaps[fe]:b.image;if(G!==null)be=G.max.x-G.min.x,Fe=G.max.y-G.min.y,Pe=G.isBox3?G.max.z-G.min.z:1,qe=G.min.x,Ye=G.min.y,ze=G.isBox3?G.min.z:0;else{const An=Math.pow(2,-z);be=Math.floor(St.width*An),Fe=Math.floor(St.height*An),b.isDataArrayTexture?Pe=St.depth:b.isData3DTexture?Pe=Math.floor(St.depth*An):Pe=1,qe=0,Ye=0,ze=0}W!==null?(rt=W.x,_t=W.y,At=W.z):(rt=0,_t=0,At=0);const xt=Ne.convert(B.format),Ge=Ne.convert(B.type);let bt;B.isData3DTexture?(ge.setTexture3D(B,0),bt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ge.setTexture2DArray(B,0),bt=D.TEXTURE_2D_ARRAY):(ge.setTexture2D(B,0),bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const ut=D.getParameter(D.UNPACK_ROW_LENGTH),vn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hs=D.getParameter(D.UNPACK_SKIP_PIXELS),xn=D.getParameter(D.UNPACK_SKIP_ROWS),js=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const Tt=b.isDataArrayTexture||b.isData3DTexture,Cn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const An=le.get(b),tn=le.get(B),hn=le.get(An.__renderTarget),Ko=le.get(tn.__renderTarget);te.bindFramebuffer(D.READ_FRAMEBUFFER,hn.__webglFramebuffer),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ko.__webglFramebuffer);for(let Ni=0;Ni<Pe;Ni++)Tt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,le.get(b).__webglTexture,z,ze+Ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,le.get(B).__webglTexture,fe,At+Ni)),D.blitFramebuffer(qe,Ye,be,Fe,rt,_t,be,Fe,D.DEPTH_BUFFER_BIT,D.NEAREST);te.bindFramebuffer(D.READ_FRAMEBUFFER,null),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||le.has(b)){const An=le.get(b),tn=le.get(B);te.bindFramebuffer(D.READ_FRAMEBUFFER,Td),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ed);for(let hn=0;hn<Pe;hn++)Tt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,An.__webglTexture,z,ze+hn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,An.__webglTexture,z),Cn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,fe,At+hn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,fe),z!==0?D.blitFramebuffer(qe,Ye,be,Fe,rt,_t,be,Fe,D.COLOR_BUFFER_BIT,D.NEAREST):Cn?D.copyTexSubImage3D(bt,fe,rt,_t,At+hn,qe,Ye,be,Fe):D.copyTexSubImage2D(bt,fe,rt,_t,qe,Ye,be,Fe);te.bindFramebuffer(D.READ_FRAMEBUFFER,null),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Cn?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(bt,fe,rt,_t,At,be,Fe,Pe,xt,Ge,St.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,fe,rt,_t,At,be,Fe,Pe,xt,St.data):D.texSubImage3D(bt,fe,rt,_t,At,be,Fe,Pe,xt,Ge,St):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,rt,_t,be,Fe,xt,Ge,St.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,rt,_t,St.width,St.height,xt,St.data):D.texSubImage2D(D.TEXTURE_2D,fe,rt,_t,be,Fe,xt,Ge,St);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hs),D.pixelStorei(D.UNPACK_SKIP_ROWS,xn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,js),fe===0&&B.generateMipmaps&&D.generateMipmap(bt),te.unbindTexture()},this.initRenderTarget=function(b){le.get(b).__webglFramebuffer===void 0&&ge.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ge.setTextureCube(b,0):b.isData3DTexture?ge.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ge.setTexture2DArray(b,0):ge.setTexture2D(b,0),te.unbindTexture()},this.resetState=function(){w=0,I=0,U=null,te.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Ao={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ex=new Yo(-1,1,1,-1,0,1);class Cx extends Rt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const Ax=new Cx;class Al{constructor(e){this._mesh=new at(Ax,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ex)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class wx extends qs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ar.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Al(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jh extends qs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Rx extends qs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Px{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wx(Ao),this.copyPass.material.blending=ui,this.clock=new zm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jh!==void 0&&(o instanceof Jh?n=!0:o instanceof Rx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Dx extends qs{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Ix={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Gs extends qs{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new kn(r,o,{type:fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new kn(r,o,{type:fi});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new kn(r,o,{type:fi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Ix;this.highPassUniforms=Ar.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ar.clone(Ao.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,blending:yr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ze,this._oldClearAlpha=1,this._basic=new mn,this._fsQuad=new Al(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Gs.BlurDirectionX=new ie(1,0);Gs.BlurDirectionY=new ie(0,1);const po={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Lx extends qs{constructor(){super(),this.uniforms=Ar.clone(po.uniforms),this.material=new Im({name:po.name,uniforms:this.uniforms,vertexShader:po.vertexShader,fragmentShader:po.fragmentShader}),this._fsQuad=new Al(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ru?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Iu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Du&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Ux(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Rt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Zh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=Zh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Zh(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new gn(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const Na=new Map;function wl(i,e=!1){const t=`${i}-${e}`;return Na.has(t)||Na.set(t,new bn({color:i,roughness:.82,metalness:0,...e?{emissive:i,emissiveIntensity:1.15}:{}})),Na.get(t)}const Sf=new jn(1,16,12);Sf.userData.sharedGeometry=!0;function Mn(i,e,t,n,s,r,o=r,a=r){const c=new at(Sf,wl(e));return c.position.set(t,n,s),c.scale.set(r,o,a),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function qt(i,e,t,n=0,s=0,r=0,o=!1){const a=new at(e,wl(t,o));return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Mf(i){const e=new mt;e.name="woodland-spirit";const t=[new ie(0,.17),new ie(.25,.17),new ie(.37,.24),new ie(.43,.43),new ie(.41,.72),new ie(.3,.98),new ie(.12,1.1),new ie(0,1.12)];qt(e,new Tl(t,24),"#f8ebce");const n=Mn(e,"#706052",-.19,.11,.065,.145,.11,.2),s=Mn(e,"#706052",.19,.11,.065,.145,.11,.2),r=Mn(e,"#f8ebce",-.44,.46,.025,.12,.24,.13);r.rotation.z=-.35;const o=Mn(e,"#f8ebce",.44,.46,.025,.12,.24,.13);o.rotation.z=.35,Mn(e,"#413443",-.145,.77,.364,.047,.066,.031),Mn(e,"#413443",.145,.77,.364,.047,.066,.031),Mn(e,"#fff8df",-.156,.791,.389,.012),Mn(e,"#fff8df",.134,.791,.389,.012),Mn(e,"#dfa0a1",-.245,.665,.341,.071,.031,.018),Mn(e,"#dfa0a1",.245,.665,.341,.071,.031,.018);const a=new Bn([new P(-.065,.664,.399),new P(0,.636,.411),new P(.065,.664,.399)]);qt(e,new Vn(a,10,.011,5,!1),"#6d4b4d");const c=qt(e,new wt(.386,.065,8,28),i,0,.49,0);c.rotation.x=Math.PI/2,c.scale.z=.75;const l=qt(e,new _n(.13,.37,.07),i,.24,.325,.357);l.rotation.z=-.17;const h=qt(e,new _n(.11,.24,.065),i,.11,.36,.394);return h.rotation.z=.16,Mn(e,i,.29,.51,.316,.09),e.userData={leftFoot:n,rightFoot:s,leftArm:r,rightArm:o,scarf:l},e}function bf(i=1){const e=new mt;e.name="pumpkin";const t=["#d97832","#e99241","#df8336"];for(let o=0;o<9;o++){const a=o*Math.PI*2/9,c=Mn(e,t[o%3],Math.sin(a)*.43,.61,Math.cos(a)*.43,.37,.57,.37);c.rotation.y=a}const n=qt(e,new ct(.09,.14,.37,7),"#68734c",0,1.25,0);n.rotation.z=-.18;const s=new Bn([new P(.05,1.29,0),new P(.23,1.4,.03),new P(.4,1.31,.07),new P(.32,1.23,.08)]);qt(e,new Vn(s,14,.033,5,!1),"#889355");for(const o of[-.25,.25]){const a=new It;a.moveTo(-.11,-.06),a.lineTo(0,.13),a.lineTo(.12,-.06),a.closePath(),qt(e,new Jt(a),"#ffdb8b",o,.76,.756,!0)}const r=new It;return r.moveTo(-.29,.04),r.quadraticCurveTo(0,-.22,.29,.04),r.lineTo(.23,.09),r.quadraticCurveTo(0,-.09,-.23,.09),r.closePath(),qt(e,new Jt(r),"#ffdb8b",0,.45,.787,!0),e.scale.setScalar(i),e}function Nx(){const i=Mf("#b59bc9");i.name="little-ghost";for(const e of i.children)(e===i.userData.leftFoot||e===i.userData.rightFoot)&&(e.visible=!1);for(let e=0;e<5;e++)Mn(i,"#f8ebce",Math.cos(e*Math.PI*2/5)*.27,.18,Math.sin(e*Math.PI*2/5)*.27,.13,.15,.13);return i}function Fx(i="#e7a34c"){const e=new mt;e.name="autumn-leaf";const t=new It;t.moveTo(0,0),t.bezierCurveTo(-.12,.19,-.33,.23,-.28,.5),t.lineTo(-.13,.46),t.lineTo(0,.76),t.lineTo(.15,.48),t.lineTo(.27,.52),t.bezierCurveTo(.3,.27,.1,.14,0,0);const n=qt(e,new Jt(t),"#ffffff");n.material=wl(i),n.material.side=dn;const s=qt(e,new ct(.012,.014,.6,4),"#8b6249",0,.28,.014);return s.rotation.z=-.015,e.rotation.x=-Math.PI/2,e}function Ox(){const i=new mt;i.name="lantern-boat";const e=new It;e.moveTo(0,1.35),e.bezierCurveTo(-.8,.6,-.81,-.55,0,-1.24),e.bezierCurveTo(.8,-.55,.81,.6,0,1.35);const t=qt(i,new bl(e,{depth:.3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.11,bevelThickness:.12}),"#aa6945");t.rotation.x=-Math.PI/2,t.position.y=.07;const n=qt(i,new Jt(e),"#714e3d",0,.4,0);n.rotation.x=-Math.PI/2,n.scale.set(.8,.83,1);for(const o of[-.55,.3])qt(i,new _n(1.08,.13,.24),"#d7a66d",0,.47,o);const s=qt(i,new ct(.026,.035,1.8,6),"#7d5946",.38,1.15,.58);s.rotation.z=-.12;const r=qt(i,new ct(.18,.13,.3,8),"#ffdc96",.48,1.8,.58,!0);return qt(i,new pi(.24,.16,8),"#9b5843",.48,2.03,.58),i.children.forEach(o=>o.position.y+=.05),i.userData.lantern=r,i}const cn=[{id:"leaves",name:"Leaf Bandits",subtitle:"A little friendly mischief",x:-19,z:-15,color:"#edaa5e",icon:"leaf"},{id:"lake",name:"Lantern Lake",subtitle:"Make a wish. Make a splash.",x:20,z:-14,color:"#8fc8d2",icon:"boat"},{id:"parade",name:"Pumpkin Parade",subtitle:"A very sleepy guest of honour",x:0,z:-5,color:"#f2ac62",icon:"pumpkin"},{id:"haunt",name:"The Little Haunt",subtitle:"A delightfully haunted house",x:21,z:14,color:"#c3a0d9",icon:"ghost"},{id:"garden",name:"Ghostlight Garden",subtitle:"Grow a little melody",x:-19,z:16,color:"#b3cb87",icon:"flower"},{id:"post",name:"Pumpkin Post",subtitle:"Good things come by pumpkin",x:0,z:22,color:"#edbca1",icon:"mail"},{id:"forest",name:"Foldwick Forest",subtitle:"Every turn, a new path",x:-29,z:0,color:"#b5c59c",icon:"tree"},{id:"theatre",name:"Hollowlight Theatre",subtitle:"Small things. Wonderful shadows.",x:0,z:-25,color:"#c5ade0",icon:"moon"}],Et=Math.PI*2;function kx(i){const e=new mt;e.name="hollowlight-island",i.add(e);const t=new mt;e.add(t);const n=new mt;e.add(n);const s={earth:"#604a48",edge:"#8e604a",path:"#b58b5c"};let r=1437;const o=()=>(r=r*1664525+1013904223>>>0,r/4294967296),a=new Map,c=[],l=[],h=[],u=(v,A=!1)=>{const N=v+(A?"lit":"");if(!a.has(N)){const V=new bn({color:v,roughness:.9,metalness:0,emissive:A?v:"#000000",emissiveIntensity:A?1.05:0});a.set(N,V),A&&h.push(V)}return a.get(N)},f=new jn(1,12,9),d=new _n(1,1,1);new ct(1,1,1,12);function g(v,A,N=0,V=0,O=0,Q=t){const ve=new at(v,A);return ve.position.set(N,V,O),ve.castShadow=!0,ve.receiveShadow=!0,Q.add(ve),ve}function _(v,A,N,V,O,Q,ve,Te=t){const Be=g(d,u(ve),v,A,N,Te);return Be.scale.set(V,O,Q),Be}function m(v,A,N,V,O,Q,ve,Te=t){const Be=g(f,u(ve),v,A,N,Te);return Be.scale.set(V,O,Q),Be}function p(v,A,N,V,O=.06,Q=.08){return g(new ct(N,N,Q,40),u(V),v,O,A)}function T(v,A,N,V,O=1,Q=t){const ve=A.clone().sub(v),Te=g(new ct(N*O,N,ve.length(),8),u(V),0,0,0,Q);return Te.position.copy(v).add(A).multiplyScalar(.5),Te.quaternion.setFromUnitVectors(new P(0,1,0),ve.normalize()),Te}const y=(v,A,N)=>new P(v,A,N);function S(v,A){const N=document.createElement("canvas");N.width=v,N.height=v;const V=N.getContext("2d");A(V);const O=new Bc(N);return O.colorSpace=Zt,c.push(O),O}const R=S(256,v=>{v.fillStyle="#777760",v.fillRect(0,0,256,256);for(let A=0;A<2300;A++){v.fillStyle=A%3===0?"#71735c":A%3===1?"#7e7a62":"#78715d";const N=o()*256,V=o()*256;v.fillRect(N,V,1+o()*3,1+o()*2)}v.strokeStyle="#858264",v.lineWidth=.7;for(let A=0;A<160;A++){const N=o()*256,V=o()*256;v.beginPath(),v.moveTo(N-1,V),v.lineTo(N-2,V-3),v.moveTo(N,V),v.lineTo(N+1,V-4),v.stroke()}});R.wrapS=R.wrapT=No,R.repeat.set(12,11);const w=new bn({map:R,color:"#ffffff",roughness:1});a.set("turf",w),g(new ct(1,.97,2.8,80),u(s.earth),0,-1.55,0).scale.set(40,1,35.5),g(new ct(1,1.025,.4,80),u(s.edge),0,-.3,0).scale.set(40,1,35.5);const E=g(new Yi(1,80),w,0,-.085,0);E.rotation.x=-Math.PI/2,E.scale.set(39.9,35.4,1),E.castShadow=!1;function M(v,A,N=s.path){const V=new Bn(v.map(Ve=>y(Ve[0],.005,Ve[1]))),O=V.getPoints(72),Q=[],ve=[],Te=[];for(let Ve=0;Ve<O.length;Ve++){const ht=V.getTangent(Ve/(O.length-1)),Pt=y(-ht.z,0,ht.x).normalize().multiplyScalar(A*.5*(1+Math.sin(Ve*.57)*.025+Math.cos(Ve*.22)*.018)),yt=O[Ve].clone().add(Pt),Dt=O[Ve].clone().sub(Pt);if(Q.push(yt.x,yt.y,yt.z,Dt.x,Dt.y,Dt.z),ve.push(0,Ve/8,1,Ve/8),Ve<O.length-1){const Ot=Ve*2;Te.push(Ot,Ot+2,Ot+1,Ot+1,Ot+2,Ot+3)}}const Be=new Rt;Be.setAttribute("position",new st(Q,3)),Be.setAttribute("uv",new st(ve,2)),Be.setIndex(Te),Be.computeVertexNormals();const We=g(Be,u(N));We.castShadow=!1}p(0,0,7.8,"#90714f",.012,.06),p(0,0,7.5,s.path,.044,.04),p(0,0,5.6,"#777250",.069,.04),M([[0,29],[0,22],[1,14],[0,6]],3.65),M([[-4,-4],[-10,-9],[-19,-15]],2.9),M([[5,-4],[11,-9],[20,-14]],2.9),M([[5,5],[12,10],[21,14]],2.9),M([[-5,5],[-11,10],[-19,16]],2.9),M([[-6,0],[-16,0],[-24,0],[-29,0]],2.35),M([[0,-6],[0,-15],[0,-25]],2.9),M([[-19,-15],[-15,-23],[-7,-26],[0,-25],[10,-25],[16,-20],[20,-14]],1.8,"#a68b60"),M([[20,-14],[28,-6],[28,3],[21,14],[12,23],[0,22],[-10,24],[-19,16],[-27,10],[-29,0],[-26,-9],[-19,-15]],1.9,"#a68b60");for(let v=0;v<58;v++){const A=v*Et/58,N=m(Math.cos(A)*7.7,.085,Math.sin(A)*7.7,.25,.08,.17,v%3?"#99876b":"#b59b78");N.rotation.y=-A}for(const v of cn)p(v.x,v.z,v.id==="parade"?2.3:2.9,v.id==="forest"?"#94825e":"#b39669",.032,.055);function L(v,A,N,V,O="#80684e"){const Q=new It;for(let Te=0;Te<=28;Te++){const Be=Te*Et/28,We=1+Math.sin(Te*1.7)*.055+Math.cos(Te*.8)*.035,Ve=Math.cos(Be)*N*We,ht=Math.sin(Be)*V*We;Te===0?Q.moveTo(Ve,ht):Q.lineTo(Ve,ht)}const ve=g(new Jt(Q),u(O),v,-.052,A);ve.rotation.x=-Math.PI/2,ve.castShadow=!1}[[-22,-20,6,4.5],[-25,-13,3.9,3.3],[-16,-22,4,3.4],[-9,-15,3.5,4],[9,-17,3.5,4],[16,0,4.5,3.8],[-16,5,4.2,3],[8,18,3.7,3.5],[-8,18,3.7,3.5],[-30,-5,5,4],[-30,24,4.4,3.8],[30,24,4.4,3.7]].forEach((v,A)=>L(v[0],v[1],v[2],v[3],["#80684e","#76614f","#7c6b51"][A%3]));function H(v,A,N=1,V=0,O=!1){const Q=new mt;Q.position.set(v,0,A),Q.scale.setScalar(N),t.add(Q);const ve=g(new ct(.21,.45,3.5,9),u("#785845"),0,1.72,0,Q);ve.rotation.z=.055;for(let We=0;We<5;We++){const Ve=We*Et/5+.25,ht=new Bn([y(0,.65,0),y(Math.cos(Ve)*.5,.16,Math.sin(Ve)*.5),y(Math.cos(Ve)*1.05,.035,Math.sin(Ve)*1.05)]);g(new Vn(ht,8,.105,6,!1),u("#785845"),0,0,0,Q);const Pt=y(Math.cos(Ve)*1.2,3.2+We%2*.65,Math.sin(Ve)*1.2);T(y(0,2.3,0),Pt,.13,"#785845",.35,Q)}const Te=V===1?["#b8853b","#d3a349","#e0b15b","#9d6d37"]:V===2?["#914c41","#b36145","#cc7b48","#a8543d"]:["#bd653c","#d8823e","#e49c4b","#9e4c37"];if([[-.2,4.45,0,1.23],[1.12,3.65,.4,.95],[-1.18,3.7,-.32,1],[.28,3.57,1.2,.98],[-.27,3.77,-1.1,.98],[.73,4.52,-.68,.96],[-.72,4.73,.44,.93],[.12,5.08,.25,.88],[1.36,4.1,-.43,.7],[-1.27,4.32,.6,.73],[.65,4.16,1.22,.72],[-.78,3.54,-1.17,.71],[.1,4.65,-1.16,.7]].forEach((We,Ve)=>{m(We[0],We[1],We[2],We[3],We[3]*(.65+Ve%3*.075),We[3]*(.82+Ve%2*.11),Te[Ve%4],Q).rotation.set(Ve*.23,Ve*.63,Ve*.13)}),O){for(let yt=0;yt<8;yt++){const Dt=yt*Et/8,Ot=Math.cos(Dt)*(1.25+yt%2*.32),Ui=Math.sin(Dt)*(1.25+yt%2*.32),Ys=2+yt%3*.2;T(y(Ot,3.1,Ui),y(Ot,Ys+.27,Ui),.013,"#80614b",1,Q),ne(Ot,Ys,Ui,.22,Q);const Fr=g(new wt(.22,.016,5,16),u("#dcab65"),Ot,Ys,Ui,Q);Fr.rotation.y=Dt,Fr.scale.y=1.2}const We=[];for(let yt=0;yt<=30;yt++){const Dt=yt/30*Et*2.5,Ot=.48+yt*.018;We.push(y(Math.cos(Dt)*Ot,1+yt*.065,Math.sin(Dt)*Ot))}const Ve=new Bn(We);g(new Vn(Ve,80,.016,5,!1),u("#725d43"),0,0,0,Q);for(let yt=0;yt<22;yt++){const Dt=Ve.getPoint(yt/21),Ot=g(new jn(.047,6,5),u("#ffd48c",!0),Dt.x,Dt.y,Dt.z,Q);Ot.castShadow=!1}const ht=g(new wt(.18,.045,6,14),u("#56483b"),.05,1.35,.438,Q);ht.scale.y=1.3;const Pt=new It;Pt.moveTo(-.18,0),Pt.lineTo(-.18,.33),Pt.absarc(0,.33,.18,Math.PI,0,!0),Pt.lineTo(.18,0),Pt.closePath(),g(new Jt(Pt),u("#514a3e"),.03,.08,.462,Q),m(.12,.28,.48,.024,.024,.018,"#dfb26d",Q)}return Q}H(-1,1.5,1.8,0,!0),[[-25,-19,1.1],[-22,-23,.95],[-16,-23,1.1],[-12,-18,.95],[-27,-13,1.1],[-22,-9,.85]].forEach((v,A)=>H(v[0],v[1],v[2],A%2)),[[-33,-16,1.1],[-31,-23,1.2],[-25,-28,1.15],[-19,-30,1.05],[-7,-31,.95],[7,-31,1.05],[31,-25,.95],[35,-17,1.2],[35,-9,1],[34,6,1.1],[32,20,1.05],[25,28,1.2],[16,30,.9],[-13,30,.9],[-26,28,1.1],[-34,19,1],[-35,10,.95]].forEach((v,A)=>H(v[0],v[1],v[2],A%3)),[[-9,-15,.82],[-11,-17,.62],[-7.4,-17.4,.56],[8.4,-17,.83],[10.8,-18.4,.63],[16.2,-.9,.86],[18.3,1,.63],[-16,5.6,.77],[-18.1,4.5,.57],[8.3,18.1,.85],[10.3,17.7,.56],[-8.3,18.1,.82],[-10.4,17.5,.55],[-28.4,-25,.68],[33,-20,.65],[31.8,6.5,.62],[-31.3,20,.62]].forEach((v,A)=>H(v[0],v[1],v[2],A%3));function q(v,A,N=.75,V=0){const O=V===0?["#9f5941","#bc7545","#cf8a4b"]:V===1?["#66734f","#81905b","#929762"]:["#986b63","#b18070","#ad7056"];for(let Q=0;Q<5;Q++){const ve=Q*Et/5;m(v+Math.cos(ve)*N*.5,.23+N*.22+Q%2*.1,A+Math.sin(ve)*N*.4,N*.65,N*.44,N*.6,O[Q%3])}for(let Q=0;Q<3;Q++){const ve=v+(Q-1)*N*.5;m(ve,.65*N+.1,A+N*.4,.045,.055,.045,"#e1ad70")}}[[-9,-12,1],[-11,-14,.8],[-7,-19,.8],[7,-14,.9],[11,-16,.85],[14,1,1.1],[18,2.8,.9],[-14,4.7,1],[-18,7,.8],[7,16,.85],[10,19,1],[-6.5,16,.85],[-10,20,1.1],[-25,-24,1],[-23,-7,.75],[30,-12,1.1],[31,-3,1],[27,23,.9],[-24,26,1.2],[-32,15,.9]].forEach((v,A)=>q(v[0],v[1],v[2],A%3)),[[-34,-5],[-35,3],[-30,7],[-26,-6]].forEach((v,A)=>H(v[0],v[1],1,A%2+1));for(let v=0;v<3;v++)for(let A=0;A<3;A++){const N=_(-31+A*2,.075,-2+v*2,1.88,.07,1.88,(v+A)%2?"#bbad83":"#cab98b");N.receiveShadow=!0}function K(v,A,N=1,V="#ba6553"){const O=new mt;O.position.set(v,0,A),O.scale.setScalar(N),t.add(O);const Q=g(new ct(.08,.12,.55,8),u("#e8d8b4"),0,.26,0,O);Q.rotation.z=.1;const ve=g(new jn(.36,12,8,0,Et,0,Math.PI*.58),u(V),0,.52,0,O);ve.scale.y=.57,g(new Yi(.349,16),u("#f4d9ae"),0,.461,0,O).rotation.x=Math.PI/2;for(let Te=0;Te<5;Te++){const Be=Te*Et/5;m(Math.cos(Be)*.2,.666,Math.sin(Be)*.2,.045,.018,.045,"#f6dfba",O)}}for(const v of[[-10,4],[11,4],[-28,20],[30,-9],[-8,-18],[7,-18],[-33,-8],[15,19],[28,24]])for(let A=0;A<3;A++)K(v[0]+o()*.8,v[1]+o()*.8,.6+o()*.7,A%2?"#d29c64":"#ba6553");function Y(v,A,N){const V=new mt;V.position.set(v,0,A),V.rotation.y=N,t.add(V);for(let O=0;O<3;O++)_(0,.65,-.25+O*.23,2,.12,.18,"#a7875c",V),_(0,1.01+O*.2,-.44,2,.13,.08,O%2?"#a7875c":"#bb9665",V);for(const O of[-.74,.74])_(O,.33,0,.13,.67,.62,"#6e614c",V),_(O,1,-.44,.11,.9,.1,"#6e614c",V)}Y(-12.6,3.9,-.5),Y(12.5,1.8,.6),Y(7.2,20.6,-.4),Y(-6,20.4,.4);for(const v of[[-10.9,-13.5],[13,-1.5],[-13.3,7]]){const A=g(new ct(.25,.3,1.7,10),u("#6e5543"),v[0],.29,v[1]);A.rotation.z=Math.PI/2;const N=g(new Yi(.24,16),u("#bb9668"),v[0]+.855,.29,v[1]);N.rotation.y=Math.PI/2;for(const V of[.1,.18]){const O=g(new wt(V,.012,4,18),u("#96764f"),v[0]+.86,.29,v[1]);O.rotation.y=Math.PI/2}K(v[0]-.7,v[1]+.25,.65,"#b67152")}function J(v,A,N,V,O=!1){const Q=Math.hypot(N-v,V-A),ve=Math.ceil(Q/1.25),Te=O?"#d9c29b":"#9e7953";for(let Be=0;Be<=ve;Be++){const We=Ci.lerp(v,N,Be/ve),Ve=Ci.lerp(A,V,Be/ve);_(We,.52,Ve,.15,1.05,.15,Te),g(new pi(.13,.17,4),u(Te),We,1.11,Ve).rotation.y=Math.PI/4}for(const Be of[.35,.78])T(y(v,Be,A),y(N,Be,V),.06,Te)}J(-26,-22,-15,-25),J(-26,-12,-24,-9),J(-24,20,-22,24,!0),J(-17,24,-12,25,!0),J(26,18,29,20,!0),J(14,7,16,5,!0),J(-8,28,-3,28,!0),J(4,28,8,28,!0);function ne(v,A,N,V=.32,O=t){const Q=g(new ct(V*.65,V*.56,V*1.2,8),u("#ffce81",!0),v,A,N,O);g(new pi(V*.9,V*.38,8),u("#8b6049"),v,A+V*.78,N,O),g(new ct(V*.67,V*.67,V*.12,8),u("#8b6049"),v,A-V*.66,N,O);for(const ve of[0,Math.PI/2,Math.PI,Math.PI*1.5])T(y(v+Math.cos(ve)*V*.56,A-V*.6,N+Math.sin(ve)*V*.56),y(v+Math.cos(ve)*V*.63,A+V*.6,N+Math.sin(ve)*V*.63),V*.045,"#bc8b5a",1,O);return Q.castShadow=!1,Q}const j=S(64,v=>{const A=v.createRadialGradient(32,32,0,32,32,32);A.addColorStop(0,"rgba(255,222,157,.8)"),A.addColorStop(.25,"rgba(255,203,125,.45)"),A.addColorStop(.62,"rgba(255,184,101,.13)"),A.addColorStop(1,"rgba(255,172,84,0)"),v.fillStyle=A,v.fillRect(0,0,64,64)}),me=new mn({map:j,color:"#ffd295",transparent:!0,opacity:.38,depthWrite:!1,blending:yr});a.set("lantern-light-pools",me),me.userData.noShadow=!0;function ye(v,A,N=2.2){const V=g(new Vs(N*2,N*2),me,v,.112,A);V.rotation.x=-Math.PI/2,V.castShadow=!1,V.receiveShadow=!1}function we(v,A,N=2.8){g(new ct(.055,.085,N,8),u("#655847"),v,N/2,A),g(new ct(.17,.22,.16,8),u("#81715a"),v,.08,A),T(y(v,N,A),y(v+.42,N+.12,A),.045,"#655847"),ne(v+.42,N-.18,A,.26),ye(v+.42,A,2.35)}[[-4,11],[4,18],[-9,-5],[9,-5],[-12,7],[12,7],[-6,-21],[6,-21],[-25,7],[28,-1],[-16,-9],[16,-11],[17,20]].forEach(v=>we(v[0],v[1])),ye(-1,1.5,4.5),ye(22,10.5,3.5),ye(0,27,3.4);function Xe(v,A,N,V=!1){const O=v.clone().add(A).multiplyScalar(.5);O.y-=.65;const Q=new Bn([v,O,A]);g(new Vn(Q,28,.025,5,!1),u("#685b49"));for(let ve=1;ve<N;ve++){const Te=Q.getPoint(ve/N);if(V){const Be=new It;Be.moveTo(-.24,0),Be.lineTo(.24,0),Be.lineTo(.04,-.5),Be.closePath();const We=new Jt(Be),Ve=u(["#c17d59","#dab36c","#8c9d79","#a190a5"][ve%4]);Ve.side=dn;const ht=g(We,Ve,Te.x,Te.y-.02,Te.z,n);ht.rotation.y=Math.atan2(A.z-v.z,A.x-v.x)*-1,ht.rotation.z=.05,l.push({object:ht,phase:ve*.8,angle:.05})}else ne(Te.x,Te.y-.15,Te.z,.15)}}for(const v of[[-5,9],[5,9],[-6,-8],[6,-8],[-5,-18],[5,-18]])g(new ct(.07,.1,3.7,8),u("#96734e"),v[0],1.85,v[1]);Xe(y(-5,3.7,9),y(5,3.7,9),12,!0),Xe(y(-6,3.7,-8),y(6,3.7,-8),12),Xe(y(-5,3.7,-18),y(5,3.7,-18),10,!0),Xe(y(-5,3.6,9),y(-6,3.6,-8),15),Xe(y(5,3.6,9),y(6,3.6,-8),15);function Je(v,A,N,V="#a9805b",O=3.2,Q=1.7){const ve=document.createElement("canvas");ve.width=768,ve.height=192;const Te=ve.getContext("2d");Te.fillStyle="#ead5ab",Te.fillRect(0,0,768,192),Te.strokeStyle=V,Te.lineWidth=10,Te.strokeRect(13,13,742,166),Te.fillStyle="#66503f",Te.font="600 56px Georgia, serif",Te.textAlign="center",Te.textBaseline="middle",Te.fillText(v,384,101,700);const Be=new Bc(ve);Be.colorSpace=Zt,c.push(Be);const We=new bn({map:Be,roughness:1});a.set("sign-"+v,We),_(A,Q,N,O+.12,.85,.12,"#876549"),g(new Vs(O,.76),We,A,Q,N+.068),_(A-O*.36,Q/2,N,.105,Q,.105,"#876549"),_(A+O*.36,Q/2,N,.105,Q,.105,"#876549")}Je("HOLLOWLIGHT",0,29,"#b68155",5.5,3.6);for(const v of[-3,3])_(v,1.9,29,.17,3.8,.17,"#94704d"),m(v,3.92,29,.2,.25,.2,"#d9b56c");Xe(y(-3,3.7,29),y(3,3.7,29),10,!0);const Ke=new mt;Ke.position.set(-4.9,0,24.7),Ke.rotation.y=.16,t.add(Ke),_(0,.58,0,3.5,1.15,1.5,"#b5754d",Ke),_(0,1.2,0,3.8,.14,1.8,"#d9ad72",Ke);for(const v of[-1.5,1.5])for(const A of[-.65,.65])_(v,1.85,A,.12,2.6,.12,"#8c6547",Ke);for(let v=0;v<10;v++){const A=_(-1.8+v*.4,3.16,0,.41,.11,2.35,v%2?"#e6c796":"#b86e4a",Ke);A.rotation.x=.07;const N=m(-1.8+v*.4,3.04,1.13,.205,.14,.08,v%2?"#e6c796":"#b86e4a",Ke);N.castShadow=!1}for(const v of[-1.4,1.4]){const A=g(new wt(.37,.065,8,16),u("#695443"),v,.4,.88,Ke);A.rotation.y=Math.PI/2}for(let v=0;v<5;v++){const A=_(-1.3+v*.55,1.42,0,.45,.36,.5,["#d9b886","#c5926d","#e4c6a0"][v%3],Ke);A.rotation.y=v*.2,_(-1.3+v*.55,1.61,0,.055,.02,.5,"#eee0b8",Ke)}_(3.9,.65,24.8,.14,1.3,.14,"#8b694b"),_(3.9,1.45,24.8,.82,.56,.65,"#b86c50"),_(3.9,1.46,25.14,.49,.055,.02,"#604d42"),_(4.35,1.8,24.8,.04,.6,.04,"#95724d"),_(4.52,2.02,24.8,.35,.22,.06,"#d69b58"),Je("Pumpkin Post",-5,26.1,"#b87550",3.1,1.9);function it(v,A,N,V,O,Q=t){_(v,A,N,V+.16,O+.16,.13,"#dabd8f",Q),g(d,u("#ffd394",!0),v,A,N+.075,Q).scale.set(V,O,.03),_(v,A,N+.11,.07,O,.06,"#a57e59",Q),_(v,A,N+.11,V,.07,.06,"#a57e59",Q),_(v,A-O*.55,N+.13,V+.3,.1,.23,"#c49c6a",Q)}function Z(v,A,N,V=!1){const O=new mt;O.position.set(v,0,A),O.scale.setScalar(N),t.add(O),_(0,.16,0,6.6,.32,5.8,"#b89b74",O),_(0,.36,2.6,6.8,.17,.9,"#b28d66",O),_(-3,1.9,0,.27,3.5,5.2,"#8f7a8e",O),_(3,1.9,0,.27,3.5,5.2,"#8f7a8e",O),_(0,1.9,-2.5,6,3.5,.25,"#ab929c",O),V?(it(-1.55,2.03,-2.3,1.2,1.4,O),it(1.5,2.03,-2.3,1.2,1.4,O)):(_(0,1.9,2.5,6,3.5,.25,"#ad9291",O),it(-1.8,2,2.67,1.08,1.35,O),it(1.8,2,2.67,1.08,1.35,O),_(0,1.3,2.7,1.1,2.3,.14,"#745667",O),m(.32,1.3,2.81,.07,.07,.05,"#dfb473",O));for(const We of[-3,3])for(const Ve of[-2.5,2.5])_(We,1.95,Ve,.2,3.8,.2,"#d4b28d",O);_(0,3.58,-2.45,6.3,.22,.3,"#d7b792",O);const Q=V?3:6,ve=V?-1.37:0,Te=new It;Te.moveTo(-3.1,0),Te.lineTo(0,1.43),Te.lineTo(3.1,0),Te.closePath(),g(new Jt(Te),u("#ad9291"),0,3.62,-2.64,O),V||(g(new Jt(Te),u("#ad9291"),0,3.62,2.64,O),g(new Yi(.31,20),u("#ffce81",!0),0,4.18,2.66,O),g(new wt(.33,.052,6,20),u("#dfc093"),0,4.18,2.69,O),_(0,4.18,2.71,.045,.6,.04,"#a58464",O),_(0,4.18,2.71,.6,.045,.04,"#a58464",O));for(const We of[-1,1]){const Ve=_(We*1.65,4.32,ve,3.85,.24,Q,"#69536b",O);Ve.rotation.z=-We*.43;for(let ht=0;ht<5;ht++){const Pt=We*(.27+ht*.7),yt=5.03-ht*.3,Dt=_(Pt,yt,ve,.74,.09,Q+.04,ht%2?"#795c76":"#73566f",O);Dt.rotation.z=-We*.43}}const Be=_(-1.75,4.85,-1.55,.7,2.2,.72,"#ae846c",O);Be.rotation.z=-.08,_(-1.85,5.95,-1.55,.88,.2,.9,"#d0a384",O);for(let We=0;We<4;We++)_(-1.77,4.2+We*.43,-1.18,.72,.035,.035,"#80665a",O);if(V){_(-1.95,.75,-.8,1.4,.86,.8,"#856275",O),_(-1.95,1.3,-1.16,1.45,1,.15,"#856275",O);for(let ht=0;ht<9;ht++)_(-2.52+ht*.14,1.2,-.29,.125,.07,.37,ht%3?"#ead6af":"#665258",O);_(1.7,.62,-.2,1.6,.55,.85,"#b48278",O),m(1.7,.97,-.55,.85,.4,.22,"#bc8d82",O),m(1,.81,-.2,.2,.29,.48,"#b48278",O),m(2.4,.81,-.2,.2,.29,.48,"#b48278",O);const We=p(0,0,1,"#d7aa80");t.remove(We),O.add(We),We.position.set(.2,.36,.35),We.scale.set(1.3,.12,.85);const Ve=g(new ct(.55,.55,.15,24),u("#c8a16d"),.2,.96,.2,O);T(y(.2,.4,.2),y(.2,.91,.2),.075,"#a47d55",1,O),Ve.castShadow=!0,ne(.2,1.2,.2,.16,O)}return O}Z(22,7.5,1.08,!0),Z(-11,-29,.54),Z(12,-30,.52);const ae=Z(33,0,.56);ae.rotation.y=-Math.PI*.42,Z(30,25,.5);const Ae=Z(-30,25,.5);Ae.rotation.y=.38,Je("The Little Haunt",24.7,12.2,"#9d82a7",3.7,1.5);for(const v of[[18,10,.6],[26,12,.75],[18,18,.5],[24,19,.65],[-7,24,.55],[7,26,.65],[-22,-11,.45]]){const A=bf(v[2]);A.position.set(v[0],.04,v[1]),A.rotation.y=o()*.6-.3,t.add(A)}p(24,-19,1,"#957650",.015,.2).scale.set(7.4,1,5.35);const Le=new Yi(1,64),tt=new bn({color:"#535d86",roughness:.3,metalness:.18,emissive:"#35416c",emissiveIntensity:.2});a.set("water",tt);const ft=g(Le,tt,24,.14,-19);ft.rotation.x=-Math.PI/2,ft.scale.set(6.75,4.75,1),ft.castShadow=!1;const D=[];for(let v=0;v<8;v++){const A=new mn({color:"#c1c7e3",transparent:!0,opacity:.25,depthWrite:!1});a.set("ripple-"+v,A);const N=g(new wt(.6,.017,4,48),A,20+o()*7,.16,-21+o()*4,n);N.rotation.x=Math.PI/2,N.scale.y=.72,N.castShadow=!1,N.receiveShadow=!1,D.push({mesh:N,phase:o()*Et,scale:.6+o()})}const re=new mn({color:"#9dacce",transparent:!0,opacity:.27,depthWrite:!1});re.userData.noShadow=!0,a.set("lake-waves",re);for(let v=0;v<17;v++){const A=-23+v*.49,N=(A+19)/4.75,V=Math.sqrt(Math.max(0,1-N*N))*5.9,O=.5+o()*1.5,Q=24+(o()-.5)*Math.max(0,V*2-O),ve=new Bn([y(Q-O*.5,.165,A),y(Q-O*.15,.165,A+.055),y(Q+O*.18,.165,A-.035),y(Q+O*.5,.165,A+.025)]),Te=g(new Vn(ve,12,.018,4,!1),re);Te.castShadow=!1}for(let v=0;v<9;v++){const A=v*Et/9,N=24+Math.cos(A)*6.9,V=-19+Math.sin(A)*4.9;for(let O=0;O<3;O++){const Q=T(y(N+O*.13,.12,V),y(N+O*.13+.13,.9+o()*.4,V+.05),.018,"#8d9863");Q.castShadow=!1,O===1&&m(N+O*.13+.13,1.1,V+.05,.07,.22,.07,"#9d7853")}}for(let v=0;v<12;v++){const A=_(18.5,.34,-13.9-v*.33,2.25,.14,.29,v%3?"#ae8961":"#bf9a70");A.rotation.y=Math.sin(v)*.018}for(const v of[17.45,19.55])for(const A of[-13.9,-17.5])g(new ct(.1,.14,1,8),u("#826d55"),v,.18,A),m(v,.75,A,.13,.055,.13,"#c8a777");T(y(17.45,.65,-13.9),y(17.45,.65,-17.5),.025,"#dbc497");for(let v=0;v<11;v++){const A=v<7?27.3+o()*1.6:21+o()*1.4,N=v<7?-21.1+o()*3.5:-22.1+o()*.9,V=.35+o()*.25,O=new It;O.moveTo(0,0),O.absarc(0,0,V,.12,Et-.12,!1),O.lineTo(0,0);const Q=g(new Jt(O,20),u(v%2?"#8a9866":"#748961"),A,.17,N);if(Q.rotation.x=-Math.PI/2,Q.rotation.z=o()*Et,Q.castShadow=!1,v%3===0){for(let ve=0;ve<6;ve++){const Te=ve*Et/6;m(A+Math.cos(Te)*.12,.25,N+Math.sin(Te)*.12,.12,.07,.12,"#d7b4bb")}m(A,.31,N,.075,.07,.075,"#efd09b")}}for(const v of[[22,-22],[26,-18],[29,-20]]){const A=new mt;A.position.set(v[0],.17,v[1]),n.add(A);const N=g(new ct(.26,.3,.06,8),u("#b89d69"),0,.04,0,A);N.castShadow=!1,ne(0,.37,0,.25,A),l.push({object:A,phase:o()*Et,angle:0})}Je("Lantern Lake",15.5,-17.8,"#779aa6",3,1.35);for(let v=0;v<3;v++){const A=Math.PI+v*Math.PI*.5,N=-19+Math.cos(A)*4.8,V=16+Math.sin(A)*4.8,O=_(N,.22,V,3.2,.42,1.8,"#b58b62");O.rotation.y=-A+Math.PI/2;const Q=_(N,.45,V,2.95,.06,1.55,"#846b52");Q.rotation.y=O.rotation.y;for(let ve=0;ve<5;ve++){const Te=N+Math.cos(O.rotation.y)*(ve-2)*.5,Be=V-Math.sin(O.rotation.y)*(ve-2)*.5;T(y(Te,.47,Be),y(Te,.95+o()*.45,Be),.025,"#789263");const We=1.07+o()*.25;for(let ht=0;ht<5;ht++){const Pt=ht*Et/5;m(Te+Math.cos(Pt)*.12,We,Be+Math.sin(Pt)*.12,.105,.075,.105,["#e4be76","#c493a6","#db9975"][v])}m(Te,We+.03,Be,.06,.07,.06,"#f1d392");const Ve=m(Te+.11,.8,Be,.17,.035,.075,"#8ba36b");Ve.rotation.z=.45}}const se=new Bn([y(-22.3,0,20),y(-22.3,2.8,20),y(-19,3.5,20),y(-15.7,2.8,20),y(-15.7,0,20)]);g(new Vn(se,36,.095,7,!1),u("#8b7750"));for(let v=0;v<16;v++){const A=se.getPoint((v+.5)/16);m(A.x,A.y,A.z,.19,.1,.12,v%2?"#90a070":"#b0b17a")}for(let v=0;v<5;v++){const A=-21+v;T(y(A,3.2,20),y(A,2.75-v%2*.2,20),.012,"#a18c62");const N=g(new pi(.13,.22,12,1,!0),u("#d9b267"),A,2.67-v%2*.2,20);N.rotation.z=.12}Je("Ghostlight Garden",-19,21.5,"#91a578",3.9,1.35),_(0,.23,-27,9,.45,4.6,"#a38368");for(let v=0;v<20;v++)_(-4.25+v*.45,.48,-27,.43,.055,4.5,v%3?"#bb9973":"#c5a37d");_(0,.15,-24.55,6.8,.3,.5,"#b39972"),_(0,.08,-24.13,6.8,.16,.38,"#c1a77b"),_(0,2.65,-29,8.8,4.55,.22,"#72536c");const ee=new bn({color:"#eeddb9",emissive:"#ffe7b4",emissiveIntensity:.16,roughness:1});a.set("theatre-screen",ee),g(d,ee,0,2.65,-28.85).scale.set(7,3.6,.05);for(const v of[-1,1]){for(let A=0;A<4;A++){const N=g(new ct(.23,.31,4,10),u(A%2?"#a36f7d":"#925f74"),v*(3.57+A*.18),2.6,-28.5);N.scale.z=.6}_(v*3.9,4.8,-28.75,.2,.22,.38,"#d1a777"),m(v*3.9,4.97,-28.75,.16,.2,.16,"#e1bc81"),_(v*3.83,1.7,-28.4,.8,.16,.2,"#ddb67b")}for(let v=0;v<12;v++)m(-3.6+v*.65,4.55,-28.5,.38,.28,.12,v%2?"#a36f7d":"#925f74");const pe=new It;pe.absarc(0,0,.65,Math.PI/3,5*Math.PI/3,!1),pe.quadraticCurveTo(-.15,0,.325,.563),g(new Jt(pe,24),u("#f3d38d",!0),0,5.3,-28.65);for(const v of[-1,1])for(let A=0;A<2;A++){const N=-22.8+A*1.25;_(v*3.2,.66,N,2,.14,.56,"#a68560");for(const V of[v*3.2-.7,v*3.2+.7])_(V,.33,N,.12,.66,.24,"#8c704f")}Je("Hollowlight Theatre",5.8,-26.6,"#a28bb5",3.6,1.45);for(const v of[[-24,-16],[-15,-18],[-21,-20]]){g(new ct(.48,.35,.55,12,1,!0),u("#b89058"),v[0],.3,v[1]);for(let N=0;N<4;N++)g(new wt(.39+N*.025,.024,5,16),u("#d0aa6b"),v[0],.1+N*.14,v[1]).rotation.x=Math.PI/2;const A=g(new wt(.38,.04,6,16,Math.PI),u("#b89058"),v[0],.58,v[1]);A.rotation.y=.4}const le=_(-24,.47,-18.8,1.3,.8,.9,"#c6aa6e");le.rotation.y=.3,_(-24,.88,-18.8,.12,.04,.9,"#947b4d"),T(y(-16,0,-21),y(-16,3.6,-21),.055,"#93784f");const ge=m(-16,3.55,-21,.54,.22,.065,"#ddba6b");ge.rotation.z=.45,T(y(-16.7,3.42,-21),y(-15.3,3.42,-21),.025,"#b9955f"),Je("Leaf Bandits",-20.5,-9.7,"#c59a59",3.1,1.35),Je("Foldwick Forest",-29.5,5.7,"#90a17a",3.8,1.4);for(let v=0;v<75;v++){const A=v*Et/75,N=Math.cos(A)*(37.7+o()*1.3),V=Math.sin(A)*(33.5+o()),O=m(N,-.08,V,.3+o()*.6,.2+o()*.4,.25+o()*.5,["#aa9b7d","#b6a68b","#958d76"][v%3]);O.rotation.y=o()*Et}const ke=new It;ke.moveTo(0,-.13),ke.lineTo(-.13,.03),ke.lineTo(-.07,.07),ke.lineTo(-.1,.2),ke.lineTo(0,.15),ke.lineTo(.04,.26),ke.lineTo(.1,.09),ke.lineTo(.17,.12),ke.lineTo(.12,-.01),ke.closePath();const $e=new Jt(ke);$e.rotateX(-Math.PI/2);const C=new bn({color:"#ffffff",roughness:1,side:dn});a.set("leaves",C);const x=new Ma($e,C,3700);x.receiveShadow=!0,e.add(x);const k=new Ft,$=new Ze,oe=[[-1,1.5,4.4,3.5],[-24,-20,4,3.5],[-17,-22,4.4,3],[-26,-13,3.7,3.4],[-9,-15,3,3.5],[9,-17,3,3.4],[16,0,3.6,2.8],[-16,5,3.5,2.5],[8,18,3,3],[-8,18,3,3],[-31,-5,3.4,2.6],[-30,24,3.7,3.2],[30,24,3.7,3.2],[-30,-24,4.1,3.5],[32,-19,3,4],[-25,28,4,2.5]];for(let v=0;v<3700;v++){const A=o()*Et,N=Math.sqrt(o()),V=oe[v%oe.length],O=v%7===0?Math.cos(A)*38*N:V[0]+Math.cos(A)*V[2]*N,Q=v%7===0?Math.sin(A)*33*N:V[1]+Math.sin(A)*V[3]*N;k.position.set(O,.101+o()*.008,Q),k.rotation.set(0,o()*Et,(o()-.5)*.08),k.scale.setScalar(.7+o()*1.1),k.updateMatrix(),x.setMatrixAt(v,k.matrix),$.set(["#bb743e","#d59a47","#aa573b","#cb8644","#a67541","#d6a158"][v%6]),x.setColorAt(v,$)}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0);const X=new It;X.moveTo(-.12,0),X.lineTo(-.18,.23),X.lineTo(-.04,.08),X.lineTo(0,.36),X.lineTo(.07,.09),X.lineTo(.18,.26),X.lineTo(.12,0),X.closePath();const Ue=new Jt(X),de=new bn({color:"#8d9367",roughness:1,side:dn});a.set("grass",de);const De=new Ma(Ue,de,650);e.add(De);for(let v=0;v<650;v++){const A=o()*Et,N=25+o()*12;k.position.set(Math.cos(A)*N,.005,Math.sin(A)*N*.87),k.rotation.set(0,o()*Et,0),k.scale.setScalar(.6+o()*.9),k.updateMatrix(),De.setMatrixAt(v,k.matrix)}const Re=new Ma($e,C,36);n.add(Re);const ce=Array.from({length:36},()=>({x:(o()-.5)*60,z:(o()-.5)*50,y:o()*8,phase:o()*Et,speed:.15+o()*.2}));ce.forEach((v,A)=>Re.setColorAt(A,new Ze(["#e5b669","#d19b5b","#bd7d4b"][A%3])));const xe=new Float32Array(186),He=Array.from({length:62},(v,A)=>({x:A<20?24+(o()-.5)*14:(o()-.5)*60,z:A<20?-19+(o()-.5)*12:(o()-.5)*52,y:.6+o()*2.2,phase:o()*Et})),Ne=new Rt;Ne.setAttribute("position",new gn(xe,3));const Se=S(32,v=>{const A=v.createRadialGradient(16,16,0,16,16,16);A.addColorStop(0,"#fff7bf"),A.addColorStop(.2,"#ffe18f"),A.addColorStop(1,"rgba(255,208,108,0)"),v.fillStyle=A,v.fillRect(0,0,32,32)}),je=new tf({map:Se,color:"#ffe2a3",size:.23,transparent:!0,depthWrite:!1,blending:yr});a.set("fireflies",je);const F=new dh(Ne,je);n.add(F),F.frustumCulled=!1,t.updateMatrixWorld(!0);const ue=new Map,_e=new Set;t.traverse(v=>{if(!(v instanceof at)||!v.visible||Array.isArray(v.material))return;let A=!0,N=v.parent;for(;N&&N!==t;)N.visible||(A=!1),N=N.parent;if(!A)return;let V=v.geometry.clone();if(V.index){const O=V;V=V.toNonIndexed(),O.dispose()}V.applyMatrix4(v.matrixWorld),V.deleteAttribute("color"),V.getAttribute("uv")||V.setAttribute("uv",new st(new Float32Array(V.getAttribute("position").count*2),2)),V.getAttribute("normal")||V.computeVertexNormals(),ue.has(v.material)||ue.set(v.material,[]),ue.get(v.material).push(V),_e.add(v.geometry)}),e.remove(t);for(const[v,A]of ue){const N=Ux(A,!1);if(N){const V=new at(N,v);V.castShadow=!v.userData.noShadow,V.receiveShadow=!v.userData.noShadow,e.add(V)}else for(const V of A)e.add(new at(V,v));N&&A.forEach(V=>V.dispose())}e.userData.stationPositions=cn,e.userData.lake={x:24,z:-19,radiusX:6.75,radiusZ:4.75,surfaceY:.14};let Ee=!1;function he(v,A,N){if(Ee)return;const V=Math.min(8,Math.max(0,N))/8;h.forEach(O=>O.emissiveIntensity=1.05+V*.65+Math.sin(A*.8)*.035),l.forEach(({object:O,phase:Q,angle:ve})=>{O.rotation.z=ve+Math.sin(A*1.1+Q)*.045,O instanceof mt&&(O.position.y=.17+Math.sin(A*.8+Q)*.035)}),D.forEach(({mesh:O,phase:Q,scale:ve})=>{const Te=(A*.14+Q)%1,Be=ve+Te*.55;O.scale.set(Be,Be*.72,1),O.material.opacity=(1-Te)*.25});for(let O=0;O<ce.length;O++){const Q=ce[O];k.position.set(Q.x+Math.sin(A*.12+Q.phase)*2,(Q.y+8-A*Q.speed%8)%8,Q.z+Math.cos(A*.11+Q.phase)*1.5),k.rotation.set(Math.sin(A+Q.phase)*.6,A*.4+Q.phase,Math.sin(A*.7+Q.phase)*.5),k.scale.setScalar(.7),k.updateMatrix(),Re.setMatrixAt(O,k.matrix)}Re.instanceMatrix.needsUpdate=!0;for(let O=0;O<He.length;O++){const Q=He[O];xe[O*3]=Q.x+Math.sin(A*.3+Q.phase)*.6,xe[O*3+1]=Q.y+Math.sin(A*.6+Q.phase)*.25,xe[O*3+2]=Q.z+Math.cos(A*.23+Q.phase)*.6}Ne.getAttribute("position").needsUpdate=!0}return he(0,0,0),{update:he,dispose(){if(Ee)return;Ee=!0,i.remove(e);const v=new Set,A=new Set;e.traverse(N=>{(N instanceof at||N instanceof dh)&&(v.add(N.geometry),(Array.isArray(N.material)?N.material:[N.material]).forEach(O=>A.add(O)))}),v.forEach(N=>N.dispose()),A.forEach(N=>N.dispose()),c.forEach(N=>N.dispose()),a.clear()}}}const mo=["N","E","S","W"],Bx={N:{row:-1,col:0},E:{row:0,col:1},S:{row:1,col:0},W:{row:0,col:-1}},zx=[["S","E"],["S","E"],["W","E"],["W","E"],["W","N"],["N","E"],["N","E"],["N","S"],["N","W"]],go={x:-15,z:-11},Mi={x:20,z:-14.5},Kh=[[{x:19,z:-20},{x:24,z:-21},{x:28,z:-18}],[{x:18,z:-18},{x:23,z:-22},{x:28,z:-20}],[{x:18,z:-21.5},{x:24,z:-18},{x:27,z:-22}]],Wc=[[1,2,1,1,1,3,2,1,3],[2,1,3,3,2,0,1,2,1],[3,3,1,1,3,2,0,3,2]],Fa=[{x:-5,z:-7},{x:3,z:-11},{x:8,z:-5}],Qh=[{x:-22,z:14},{x:-19,z:20},{x:-15.5,z:15.5}],eu={x:0,z:22},Vi=[{x:-11,z:21,name:"Mushroom picnic"},{x:14,z:8,name:"Cottage gate"},{x:-9,z:-18,name:"Orchard lookout"}],Gi=["Singing kettle","Dancing curtain","Moonlight piano","Wobbly cupboard"],Hx=[{x:19,z:12.5},{x:23,z:12.5},{x:19,z:16},{x:23,z:16}],_o=[{visitor:"Fox",first:0,second:2,hint:"Fox wants a kettle tune, then a piano flourish."},{visitor:"Mouse",first:1,second:3,hint:"Mouse wants a dancing curtain, then a wobbly cupboard."},{visitor:"Badger",first:2,second:1,hint:"Badger wants a piano flourish, then a dancing curtain."}],or=[["Teapot","Pumpkin","Boot"],["Oak leaves","Feathers","Scarf"],["Acorn","Moon","Top hat"]],Oa=[{name:"The tea-bird",parts:[0,0,2]},{name:"The autumn friend",parts:[1,2,0]},{name:"The moon owl",parts:[2,1,1]}],ka=["#f2bd57","#e77843","#c84c5e","#d6d47c"],vo=["golden","orange","crimson","lime"],$t=(i,e,t)=>Math.max(e,Math.min(t,i)),Mt=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),tu=i=>JSON.parse(JSON.stringify(i)),nu=i=>Object.fromEntries(cn.map(e=>[e.id,i])),oi=i=>!!i&&typeof i=="object"&&!Array.isArray(i),un=i=>typeof i=="number"&&Number.isFinite(i),kt=i=>un(i)&&Number.isInteger(i),bi=(i,e,t)=>Array.isArray(i)&&i.length<=e&&(t===void 0||i.length===t)&&i.every(un);function Vx(i){if(!oi(i)||i.version!==1||!un(i.time)||i.time<0||!kt(i.serial))return!1;const e=new Set(cn.map(f=>f.id));if(!Array.isArray(i.completed)||i.completed.length>8||!i.completed.every(f=>typeof f=="string"&&e.has(f))||new Set(i.completed).size!==i.completed.length||!oi(i.finished)||!oi(i.runs))return!1;for(const f of e)if(typeof i.finished[f]!="boolean"||!kt(i.runs[f])||i.runs[f]<0)return!1;if(!Array.isArray(i.players)||i.players.length>4)return!1;const t=new Set;for(const f of i.players)if(!oi(f)||typeof f.id!="string"||!f.id||f.id.length>100||t.has(f.id)||typeof f.name!="string"||f.name.length>24||typeof f.color!="string"||!/^#[0-9a-f]{6}$/i.test(f.color)||typeof f.notification!="string"||f.notification.length>1e3||(t.add(f.id),![f.x,f.z,f.heading,f.inputX,f.inputZ,f.aim,f.power,f.nextLaunch].every(un))||typeof f.moving!="boolean"||typeof f.ember!="boolean"||!kt(f.leaves)||f.leaves<0||f.leaves>8||!kt(f.selected)||f.selected<0||f.selected>8||f.active!==null&&(typeof f.active!="string"||!e.has(f.active))||f.parcel!==null&&(!kt(f.parcel)||f.parcel<0||f.parcel>2)||f.leafColors!==void 0&&(!bi(f.leafColors,8)||!f.leafColors.every(d=>Number.isInteger(d)&&d>=0&&d<=3))||[f.nextGust,f.gustProtectedUntil,f.nextNudge].some(d=>d!==void 0&&!un(d)))return!1;for(const f of["leaves","lake","parade","haunt","garden","post","forest","theatre"])if(!oi(i[f]))return!1;const n=i.leaves,s=i.lake,r=i.parade,o=i.haunt,a=i.garden,c=i.post,l=i.forest,h=i.theatre,u=f=>Array.isArray(f)&&f.length<=128&&f.every(d=>oi(d)&&kt(d.id)&&[d.x,d.z,d.ready].every(un));return!(!u(n.items)||!un(n.banked)||!Array.isArray(n.gusts)||n.gusts.length>64||!n.gusts.every(f=>oi(f)&&[f.id,f.x,f.z,f.start].every(un))||n.requested!==void 0&&(!kt(n.requested)||n.requested<0||n.requested>3)||!bi(s.hits,3)||!s.hits.every(f=>kt(f)&&f>=0&&f<=2)||!Array.isArray(s.shots)||s.shots.length>256||!s.shots.every(f=>oi(f)&&typeof f.owner=="string"&&typeof f.resolved=="boolean"&&[f.id,f.x,f.z,f.endX,f.endZ,f.start,f.duration].every(un)&&f.duration>0)||s.attempts!==void 0&&(!kt(s.attempts)||s.attempts<0)||![r.x,r.z,r.heading,r.glow].every(un)||!kt(r.checkpoint)||r.checkpoint<0||r.checkpoint>3||!kt(o.act)||o.act<0||o.act>3||!bi(o.pulses,4,4)||![o.lastAt,o.applauseUntil].every(un)||o.act===3&&i.finished.haunt!==!0||o.lastProp!==null&&(!kt(o.lastProp)||o.lastProp<0||o.lastProp>3)||!u(a.items)||!bi(a.beds,3,3)||!a.beds.every(f=>kt(f)&&f>=0&&f<=2)||a.passes!==void 0&&(!Array.isArray(a.passes)||a.passes.length>32||!a.passes.every(f=>oi(f)&&typeof f.from=="string"&&typeof f.to=="string"&&[f.id,f.x,f.z,f.endX,f.endZ,f.start,f.duration].every(un)&&f.duration>0))||!bi(c.delivered,3)||!c.delivered.every(f=>kt(f)&&f>=0&&f<=2)||!bi(l.rotations,9,9)||!l.rotations.every(f=>kt(f)&&f>=0&&f<=3)||!bi(l.path,9)||!l.path.every(f=>kt(f)&&f>=0&&f<=8)||!un(l.revealAt)||l.turns!==void 0&&(!kt(l.turns)||l.turns<0)||!bi(h.parts,3,3)||!h.parts.every(f=>kt(f)&&f>=0&&f<=2)||!kt(h.act)||h.act<0||h.act>3||![h.revealAt,h.revealUntil].every(un)||typeof h.successful!="boolean"||h.act===3&&i.finished.theatre!==!0)}function iu(i,e,t,n){return Array.from({length:t},(s,r)=>{const o=r*2.399963229728653,a=1+Math.sqrt((r+1)/t)*n;return{id:r,x:i+Math.cos(o)*a,z:e+Math.sin(o)*a,ready:0}})}function Ba(){return{version:1,time:0,players:[],completed:[],finished:nu(!1),runs:nu(0),serial:0,leaves:{items:iu(-19,-15,24,3.8),banked:0,requested:0,gusts:[]},lake:{hits:[],shots:[],attempts:0},parade:{x:0,z:-7.5,heading:0,checkpoint:0,glow:0},haunt:{act:0,lastProp:null,lastAt:-10,pulses:[-10,-10,-10,-10],applauseUntil:0},garden:{items:iu(-19,16,9,3.1),beds:[0,0,0],passes:[]},post:{delivered:[]},forest:{rotations:[...Wc[0]],path:[],revealAt:-10,turns:0},theatre:{parts:[0,0,0],act:0,revealAt:-10,revealUntil:0,successful:!1}}}class Gx{state=Ba();addPlayer(e,t,n){if(!e||e.length>100||this.state.players.length>=4||this.state.players.some(r=>r.id===e))return;const s=this.state.players.length%4;this.state.players.push({id:e,name:(t||"Little spirit").slice(0,24),color:/^#[0-9a-f]{6}$/i.test(n)?n:"#ffbb88",x:s*1.15-1.7,z:14,heading:Math.PI,moving:!1,inputX:0,inputZ:0,active:null,leaves:0,ember:!1,parcel:null,selected:0,aim:-.18,power:.325,nextLaunch:0,leafColors:[],nextGust:0,gustProtectedUntil:0,nextNudge:0,notification:"Welcome to Hollowlight. Wander to a glowing activity and press E."})}removePlayer(e){this.state.players=this.state.players.filter(t=>t.id!==e),this.state.garden.passes=this.state.garden.passes.filter(t=>t.to!==e)}input(e,t){const n=this.state.players.find(s=>s.id===e);if(!(!n||!t)){if(n.inputX=Number.isFinite(t.x)?$t(t.x,-1,1):0,n.inputZ=Number.isFinite(t.z)?$t(t.z,-1,1):0,t.action==="secondary"){this.exit(n);return}if(t.choice!==void 0&&Number.isInteger(t.choice)&&this.choose(n,t.choice),t.action==="interact"&&!n.active){const s=[...cn].sort((r,o)=>Mt(n,r)-Mt(n,o))[0];Mt(n,s)<=6.2?this.enter(n,s.id):this.say(n,"Follow the village paths to an activity. Press E when you are nearby.");return}(t.action==="interact"||t.action==="primary")&&n.active?this.act(n):t.action==="primary"&&this.say(n,"Find an activity and press E to join in.")}}update(e){if(!Number.isFinite(e)||e<=0)return;const t=Math.min(e,.25);this.state.time+=t;for(const n of this.state.players){const s=Math.hypot(n.inputX,n.inputZ),r=n.inputX/Math.max(1,s),o=n.inputZ/Math.max(1,s);if(n.moving=s>.05&&n.active!=="lake",n.active==="lake"?(n.aim=$t(n.aim+r*t*.8,-1.2,1.2),n.power=$t(n.power-o*t*.4,0,1)):(n.x=$t(n.x+r*t*6,-35,35),n.z=$t(n.z+o*t*6,-31,31),s>.05&&(n.heading=Math.atan2(r,o))),n.active==="leaves"&&!this.state.finished.leaves){for(const a of this.state.leaves.items)a.ready<=this.state.time&&n.leaves<8&&Mt(n,a)<1.15&&this.collectLeaf(n,a);n.leaves&&Mt(n,go)<1.65&&this.bankLeaves(n)}}this.updateParade(t),this.updateLake(),this.state.leaves.gusts=this.state.leaves.gusts.filter(n=>this.state.time-n.start<.7),this.state.garden.passes=this.state.garden.passes.filter(n=>this.state.time-n.start<n.duration)}snapshot(){return tu(this.state)}restore(e){if(!Vx(e))throw new Error("Unsupported festival snapshot");const t=tu(e),n=Ba();this.state={...n,...t,runs:{...n.runs,...t.runs},finished:{...n.finished,...t.finished},leaves:{...n.leaves,...t.leaves},lake:{...n.lake,...t.lake},garden:{...n.garden,...t.garden},forest:{...n.forest,...t.forest},players:t.players.map(s=>({...s,leafColors:Array.isArray(s.leafColors)&&s.leafColors.length===s.leaves?s.leafColors.map(r=>Number.isInteger(r)?(r%4+4)%4:0):Array.from({length:$t(Math.floor(s.leaves||0),0,8)},(r,o)=>o%4),nextGust:Number.isFinite(s.nextGust)?s.nextGust:0,gustProtectedUntil:Number.isFinite(s.gustProtectedUntil)?s.gustProtectedUntil:0,nextNudge:Number.isFinite(s.nextNudge)?s.nextNudge:0}))}}view(e){const t=this.state.players.find(r=>r.id===e),n=t?.active??null,s=t?this.describe(t):{title:"Hollowlight Village",instruction:"Joining the festival…",progress:"",choices:[]};return{players:this.state.players.map(({id:r,name:o,color:a,x:c,z:l,heading:h,moving:u})=>({id:r,name:o,color:a,x:c,z:l,heading:h,moving:u})),entities:this.entities(t),completed:[...this.state.completed],active:n,...s,notification:t?.notification??"",festival:this.state.completed.length}}say(e,t){e.notification=t}announce(e,t){for(const n of this.state.players)n.active===e&&this.say(n,t)}finish(e,t){this.state.finished[e]||(this.state.finished[e]=!0,this.state.completed.includes(e)||this.state.completed.push(e),this.announce(e,t+" A festival lantern is lit!"))}enter(e,t){e.active=t,e.selected=t==="forest"?3:0,t==="lake"&&(e.x=20,e.z=-12.5,e.inputX=0,e.inputZ=0),this.say(e,`${cn.find(n=>n.id===t).name} · ${this.state.finished[t]?"Already celebrated! Choose Replay to play again.":"Let’s make a little magic."}`)}exit(e){e.active=null,e.leaves=0,e.leafColors=[],e.ember=!1,e.parcel=null,this.state.garden.passes=this.state.garden.passes.filter(t=>t.to!==e.id),this.say(e,"Back to the village. Your festival lanterns stay lit.")}restart(e){const t=Ba(),n=this.state.runs[e]+1;switch(e==="forest"&&(t.forest.rotations=[...Wc[n%Wc.length]]),e==="leaves"&&(t.leaves.requested=n%4),e){case"leaves":this.state.leaves=t.leaves;break;case"lake":this.state.lake=t.lake;break;case"parade":this.state.parade=t.parade;break;case"haunt":this.state.haunt=t.haunt;break;case"garden":this.state.garden=t.garden;break;case"post":this.state.post=t.post;break;case"forest":this.state.forest=t.forest;break;case"theatre":this.state.theatre=t.theatre;break}this.state.finished[e]=!1,this.state.runs[e]++;for(const s of this.state.players)s.active===e&&(s.leaves=0,s.leafColors=[],s.ember=!1,s.parcel=null,s.nextGust=0,s.gustProtectedUntil=0,s.nextNudge=0);this.announce(e,"A fresh round! Your earned festival lantern stays lit.")}choose(e,t){const n=e.active;if(n){if(t===0&&this.state.finished[n]){this.restart(n);return}if(!this.state.finished[n]){if(n==="haunt"&&t>=1&&t<=4)e.selected=t-1,this.say(e,`${Gi[e.selected]} selected. Press Space to perform.`);else if(n==="forest"&&t>=1&&t<=9)e.selected=t-1,this.say(e,`Tile ${t} selected. Space turns it clockwise.`);else if(n==="theatre"&&t>=1&&t<=3&&this.state.time>=this.state.theatre.revealUntil){const s=t-1;this.state.theatre.parts[s]=(this.state.theatre.parts[s]+1)%3,this.say(e,`${["Body","Wings","Hat"][s]}: ${or[s][this.state.theatre.parts[s]]}`)}}}}act(e){if(e.active){if(this.state.finished[e.active]){this.say(e,"Beautifully done! Choose Replay for another round, or Q to explore.");return}switch(e.active){case"leaves":this.gust(e);break;case"lake":this.launch(e);break;case"parade":{const t=this.state.parade;if(Mt(e,t)>5){this.say(e,"Get close to our sleepy pumpkin, then walk into it to push.");break}if(this.state.time<e.nextNudge){this.say(e,"Pip is catching his breath. Walk behind him to keep the parade rolling.");break}const n=Fa[t.checkpoint];if(n){e.nextNudge=this.state.time+1.5;const s=Mt(t,n);s>.1&&(t.x+=(n.x-t.x)/s*.7,t.z+=(n.z-t.z)/s*.7),this.say(e,"A reassuring little nudge. Walk behind the pumpkin to keep it rolling.")}break}case"haunt":this.performHaunt(e);break;case"garden":this.tendGarden(e);break;case"post":this.deliverPost(e);break;case"forest":this.turnTile(e);break;case"theatre":this.revealShadow(e);break}}}bankLeaves(e){const t=this.state.leaves.requested,n=e.leafColors.filter(s=>s===t).length;this.state.leaves.banked+=e.leaves+n,this.state.leaves.requested=(t+1)%4,this.announce("leaves",`${e.name} banked ${e.leaves} lovely leaves${n?` + ${n} ${vo[t]} bonus points`:""}! Next request: ${vo[this.state.leaves.requested]}.`),e.leaves=0,e.leafColors=[],this.state.leaves.banked>=24&&this.finish("leaves","A glorious leaf pile. Time for a celebratory jump!")}collectLeaf(e,t){t.ready=this.state.time+6,e.leaves++,e.leafColors.push(t.id%4)}inFront(e,t,n,s=.5){const r=t.x-e.x,o=t.z-e.z,a=Math.hypot(r,o);return a<=n&&a>.05&&(r*Math.sin(e.heading)+o*Math.cos(e.heading))/a>=s}gust(e){if(Mt(e,go)<2&&e.leaves>0){this.bankLeaves(e);return}if(this.state.time<e.nextGust)return;e.nextGust=this.state.time+.7,this.state.leaves.gusts.push({id:this.state.serial++,x:e.x,z:e.z,start:this.state.time,heading:e.heading});let t=0;for(const n of this.state.leaves.items)n.ready<=this.state.time&&e.leaves<8&&this.inFront(e,n,4.2)&&(this.collectLeaf(e,n),t++);for(const n of this.state.players)if(n.id!==e.id&&n.active==="leaves"&&n.leaves>0&&this.inFront(e,n,3)&&Mt(n,go)>2&&this.state.time>=n.gustProtectedUntil){const s=Math.min(2,n.leaves,8-e.leaves);if(s>0){const r=n.leafColors.splice(0,s);n.leaves-=s,e.leaves+=s,e.leafColors.push(...r),n.gustProtectedUntil=this.state.time+1.4,this.say(n,"Whoosh! A friend borrowed a couple of loose leaves. You have a moment to scamper away; your banked pile is safe.")}}this.say(e,t?`Whoosh! ${t} leaves caught. Carry them to the golden basket.`:"A papery whoosh! Aim toward loose leaves—or a friend’s little swirl.")}launch(e){if(this.state.time<e.nextLaunch)return;const t=this.landing(e);this.state.lake.shots.push({id:this.state.serial++,owner:e.id,x:Mi.x,z:Mi.z,endX:t.x,endZ:t.z,start:this.state.time,duration:1.45,resolved:!1}),this.state.lake.attempts++,e.nextLaunch=this.state.time+.85,this.say(e,"Off goes your little lantern boat…")}landing(e){const t=3+e.power*8;return{x:$t(Mi.x+Math.sin(e.aim)*t,17.4,29.6),z:$t(Mi.z-Math.cos(e.aim)*t,-22.4,-15)}}updateLake(){for(const e of this.state.lake.shots){if(e.resolved||this.state.time-e.start<e.duration)continue;e.resolved=!0;const t=this.lakeTargets().findIndex(n=>Mt({x:e.endX,z:e.endZ},n)<1.25);if(t>=0&&!this.state.lake.hits.includes(t))this.state.lake.hits.push(t),this.announce("lake",`Lantern ${t+1} found its mooring. A wish comes true!`),this.state.lake.hits.length===3&&this.finish("lake","All three wishes are floating on the lake.");else{const n=this.state.players.find(s=>s.id===e.owner);n&&this.say(n,t>=0?"That mooring is already glowing. Try another circle.":"A gentle splash. Adjust your aim and power toward a glowing circle.")}}this.state.lake.shots=this.state.lake.shots.filter(e=>this.state.time-e.start<4)}lakeTargets(){return Kh[this.state.runs.lake%Kh.length]}updateParade(e){const t=this.state.parade;if(this.state.finished.parade){t.glow=Math.min(1,t.glow+e);return}let n=0,s=0,r=0;for(const a of this.state.players)a.active!=="parade"||!a.moving||Mt(a,t)>3.1||(t.x-a.x)*a.inputX+(t.z-a.z)*a.inputZ<-.1||(n+=a.inputX,s+=a.inputZ,r++);if(r){const a=Math.max(1,Math.hypot(n,s)),c=n/a,l=s/a;t.x=$t(t.x+c*e*4.1,-12,13),t.z=$t(t.z+l*e*4.1,-17,1),t.heading=Math.atan2(c,l)}for(const a of this.state.players){if(a.active!=="parade")continue;const c=Mt(a,t);if(c<2.05){const l=c>.01?(a.x-t.x)/c:-Math.sin(a.heading),h=c>.01?(a.z-t.z)/c:-Math.cos(a.heading);a.x=t.x+l*2.05,a.z=t.z+h*2.05}}const o=Fa[t.checkpoint];o&&Mt(t,o)<2&&(t.checkpoint++,t.glow=t.checkpoint/3,this.announce("parade",`Festival stop ${t.checkpoint} glows. The pumpkin gives a happy little hum.`),t.checkpoint===3&&this.finish("parade","Our sleepy guest of honour has arrived!"))}performHaunt(e){const t=this.state.haunt,n=_o[t.act];if(!n||this.state.time<t.applauseUntil)return;const s=$t(e.selected,0,3);t.pulses[s]=this.state.time,t.lastProp===n.first&&s===n.second&&this.state.time-t.lastAt<=4.5?(t.act++,t.lastProp=null,t.applauseUntil=this.state.time+1.1,this.announce("haunt",`${n.visitor} laughs and applauds. What a lovely surprise!`),t.act===_o.length&&this.finish("haunt","Every visitor leaves with a smile.")):s===n.first?(t.lastProp=s,t.lastAt=this.state.time,this.announce("haunt",`${Gi[s]} is performing! Follow with ${Gi[n.second].toLowerCase()} within four seconds.`)):(t.lastProp=null,this.say(e,`A delightful wobble… ${n.hint}`))}emberPosition(e){return{x:e.x+Math.sin(this.state.time*.65+e.id)*.45,z:e.z+Math.cos(this.state.time*.5+e.id)*.45}}tendGarden(e){if(this.state.garden.passes.some(t=>t.to===e.id&&this.state.time-t.start<t.duration)){this.say(e,"Here comes a warm little light. Give it a moment to reach your hands.");return}if(e.ember){const t=Qh.findIndex((n,s)=>this.state.garden.beds[s]<2&&Mt(e,n)<2.1);if(t<0){const n=this.state.players.filter(s=>s.id!==e.id&&s.active==="garden"&&!s.ember&&this.inFront(e,s,5,.35)).sort((s,r)=>Mt(e,s)-Mt(e,r))[0];if(!n){this.say(e,"Bring your light to a musical bed, or face an empty-handed friend nearby and press Space to pass.");return}e.ember=!1,n.ember=!0,this.state.garden.passes.push({id:this.state.serial++,from:e.id,to:n.id,x:e.x,z:e.z,endX:n.x,endZ:n.z,start:this.state.time,duration:.5+Mt(e,n)*.07}),this.announce("garden",`A little two-note chime! ${e.name} passes a warm spark to ${n.name}.`);return}e.ember=!1,this.state.garden.beds[t]++,this.announce("garden",`${["A soft bell","A warm plucked string","A gentle wooden note"][t]} joins the garden’s melody.`),this.state.garden.beds.every(n=>n>=2)&&this.finish("garden","Three glowing beds sing a little song together.")}else{const t=this.state.garden.items.filter(n=>n.ready<=this.state.time).sort((n,s)=>Mt(e,this.emberPosition(n))-Mt(e,this.emberPosition(s)))[0];if(!t||Mt(e,this.emberPosition(t))>2.1){this.say(e,"Walk close to a floating spark and press Space to catch it.");return}t.ready=this.state.time+7,e.ember=!0,this.say(e,"A warm little light! Bring it to one of the three musical beds.")}}deliverPost(e){if(e.parcel!==null){const n=Vi[e.parcel];if(Mt(e,n)>2.8){this.say(e,`Your parcel is for ${n.name}. Follow its glowing marker.`);return}this.state.post.delivered.includes(e.parcel)||this.state.post.delivered.push(e.parcel),e.parcel=null,this.announce("post",`A parcel delivered to ${n.name}. Someone’s evening is brighter!`),this.state.post.delivered.length===Vi.length&&this.finish("post","Every little parcel has found its home.");return}if(Mt(e,eu)>3){this.say(e,"Find the wrapped parcels inside the glowing pickup ring at Pumpkin Post.");return}const t=Vi.findIndex((n,s)=>!this.state.post.delivered.includes(s)&&!this.state.players.some(r=>r.parcel===s));if(t<0){this.say(e,"Your friends are delivering the remaining parcels. Cheer them on!");return}e.parcel=t,this.say(e,`Parcel picked up! Deliver to ${Vi[t].name}. Carry it to the marked stop and press E.`)}connections(e){return zx[e].map(t=>mo[(mo.indexOf(t)+this.state.forest.rotations[e])%4])}forestRoute(){if(!this.connections(3).includes("W"))return{connected:[],path:[]};const e=new Map([[3,-1]]),t=[3];for(let s=0;s<t.length;s++){const r=t[s],o=Math.floor(r/3),a=r%3;for(const c of this.connections(r)){const l=Bx[c],h=o+l.row,u=a+l.col;if(h<0||h>2||u<0||u>2)continue;const f=h*3+u,d=mo[(mo.indexOf(c)+2)%4];!e.has(f)&&this.connections(f).includes(d)&&(e.set(f,r),t.push(f))}}const n=[];if(e.has(2)&&this.connections(2).includes("E")){let s=2;for(;s>=0;)n.unshift(s),s=e.get(s)}return{connected:t,path:n}}turnTile(e){const t=$t(e.selected,0,8);this.state.forest.rotations[t]=(this.state.forest.rotations[t]+1)%4,this.state.forest.turns++;const n=this.forestRoute();this.say(e,`Tile ${t+1} turns. ${n.connected.length} tiles connect to the little fox’s entrance.`),n.path.length&&(this.state.forest.path=n.path,this.state.forest.revealAt=this.state.time,this.finish("forest","A winding path home! The little fox trots toward the lantern."))}revealShadow(e){const t=this.state.theatre;if(this.state.time<t.revealUntil)return;const n=Oa[t.act];n&&(t.revealAt=this.state.time,t.revealUntil=this.state.time+2.2,t.successful=n.parts.every((s,r)=>t.parts[r]===s),t.successful?(t.act++,this.announce("theatre",`${n.name} comes to life and takes a little bow!`),t.act===Oa.length&&this.finish("theatre","Three extraordinary shadows. A wonderful little show!")):this.say(e,"A charming odd creature! Check the requested body, wings and hat, then try another combination."))}describe(e){const t=e.active;if(!t){const s=[...cn].sort((r,o)=>Mt(e,r)-Mt(e,o))[0];return{title:"Hollowlight Village",instruction:Mt(e,s)<6.2?`E · Join ${s.name}`:"WASD / arrows to wander · E to join a nearby activity",progress:`${this.state.completed.length} / 8 festival lanterns lit`,choices:[]}}const n=cn.find(s=>s.id===t).name;if(this.state.finished[t]){const s=t==="lake"?`Complete in ${this.state.lake.attempts} launches`:t==="forest"?`Complete in ${this.state.forest.turns} turns`:"Complete";return{title:n,instruction:"A lovely little celebration. Q to explore, or play another round together.",progress:`${s} · ${this.state.completed.length} / 8 village lanterns lit`,choices:[{value:0,label:t==="lake"||t==="forest"?"Play the next arrangement":"Replay this activity"}]}}switch(t){case"leaves":return{title:n,instruction:`Walk through leaves · Face your target and Space to gust · Bank at the golden basket. ${vo[this.state.leaves.requested]} leaves score double! Q to leave.`,progress:`Pile ${Math.min(24,this.state.leaves.banked)} / 24 points · Carrying ${e.leaves} / 8 · ${e.leafColors.filter(s=>s===this.state.leaves.requested).length} bonus leaves`,choices:[]};case"lake":return{title:n,instruction:"A/D aim · W/S adjust distance · Space launches toward the dotted landing circle · Q to leave",progress:`${this.state.lake.hits.length} / 3 wishes · ${this.state.lake.attempts} launches · Arrangement ${this.state.runs.lake%3+1} · Aim ${Math.round(e.aim*180/Math.PI)}° · Power ${Math.round(e.power*100)}%`,choices:[]};case"parade":return{title:n,instruction:"Walk behind the pumpkin to push toward the next glowing stop · Space gives a friendly nudge · Q to leave",progress:`${this.state.parade.checkpoint} / 3 festival stops glowing`,choices:[]};case"haunt":{const s=_o[this.state.haunt.act];return{title:n,instruction:`${s.hint} Choose a prop, then Space to perform. Q to leave.`,progress:`${this.state.haunt.act} / 3 visitors delighted · Selected: ${Gi[e.selected]??Gi[0]}`,choices:Gi.map((r,o)=>({value:o+1,label:r}))}}case"garden":return{title:n,instruction:e.ember?"E / Space near a bed to plant · Away from beds, face a nearby friend and Space to pass · Q to leave":"Approach a floating spark · E / Space to catch · Plant two in each musical bed · Friends can pass you a light",progress:`${this.state.garden.beds.reduce((s,r)=>s+r,0)} / 6 lights planted · ${e.ember?"Carrying a light":"Ready to catch"}`,choices:[]};case"post":return{title:n,instruction:e.parcel===null?"Stand beside the wrapped parcels in the glowing ring · E / Space to pick one up · Q to leave":`Deliver to ${Vi[e.parcel].name} · E / Space near its marker · Q to leave`,progress:`${this.state.post.delivered.length} / 3 deliveries · ${e.parcel===null?"Find the glowing parcel pickup ring":"A little parcel in your care"}`,choices:[]};case"forest":return{title:n,instruction:"Connect the fox entrance at left to the lantern exit at upper right. Choose a tile; Space turns it. Q to leave.",progress:`Arrangement ${this.state.runs.forest%3+1} · ${this.state.forest.turns} turns · Tile ${e.selected+1} selected · ${this.forestRoute().connected.length} linked`,choices:Array.from({length:9},(s,r)=>({value:r+1,label:`Tile ${r+1}${e.selected===r?" · selected":""}`}))};case"theatre":{const s=Oa[this.state.theatre.act],r=s.parts.map((o,a)=>or[a][o]).join(" + ");return{title:n,instruction:`${s.name}: ${r}. Cycle the three parts, then Space to reveal. Q to leave.`,progress:`${this.state.theatre.act} / 3 creatures applauded`,choices:this.state.theatre.parts.map((o,a)=>({value:a+1,label:`${["Body","Wings","Hat"][a]}: ${or[a][o]} ↻`}))}}}}entities(e){const t=[],n=(h,u,f,d,g={})=>t.push({id:h,kind:"marker",...u,color:f,label:d,data:g});for(const h of this.state.leaves.items)h.ready<=this.state.time&&!this.state.finished.leaves&&t.push({id:`leaf-${h.id}`,kind:"leaf",x:h.x,z:h.z,y:.15,rotation:h.id*2.4,color:ka[h.id%4],scale:.6});n("leaf-bank",go,"#ffd879",`Leaf basket · ${vo[this.state.leaves.requested]} ×2 · ${Math.min(24,this.state.leaves.banked)}/24`,{role:"bank",filled:this.state.leaves.banked/24,requestedColor:ka[this.state.leaves.requested]});for(const h of this.state.leaves.gusts)t.push({id:`gust-${h.id}`,kind:"marker",x:h.x,z:h.z,y:.3,scale:.5+(this.state.time-h.start)*5,color:"#ffe0a0",data:{role:"gust",heading:h.heading??0,life:1-(this.state.time-h.start)/.7}});this.lakeTargets().forEach((h,u)=>{const f=this.state.lake.hits.includes(u);n(`lake-target-${u}`,h,f?"#ffcd75":"#91d8dc",`Wish ${u+1}${f?" ✦":""}`,{role:"mooring",completed:f}),f&&t.push({id:`moored-${u}`,kind:"boat",...h,y:.25+Math.sin(this.state.time*1.4+u)*.07,color:"#ffd583",data:{role:"moored"}})});for(const h of this.state.lake.shots){const u=$t((this.state.time-h.start)/h.duration,0,1);t.push({id:`boat-${h.id}`,kind:"boat",x:h.x+(h.endX-h.x)*u,z:h.z+(h.endZ-h.z)*u,y:.25+Math.sin(u*Math.PI)*2.2,rotation:Math.atan2(h.endX-h.x,h.endZ-h.z),color:"#ffd580",data:{role:"flying",progress:u}})}if(e?.active==="lake"&&!this.state.finished.lake){const h=this.landing(e);n(`lake-aim-${e.id}`,h,"#fff1b8","Landing",{role:"aim",power:e.power,angle:e.aim});for(let u=1;u<=7;u++){const f=u/8;t.push({id:`lake-dot-${u}`,kind:"marker",x:Mi.x+(h.x-Mi.x)*f,z:Mi.z+(h.z-Mi.z)*f,y:.3+Math.sin(f*Math.PI)*2.2,scale:.13,color:"#ffe8b5",data:{role:"trajectory"}})}}const s=this.state.parade;t.push({id:"parade-pumpkin",kind:"pumpkin",x:s.x,z:s.z,y:.2,scale:1.5,rotation:s.heading,color:"#e78b48",label:"Pip · guest of honour",data:{role:"parade",glow:s.glow,completed:this.state.finished.parade}}),Fa.forEach((h,u)=>n(`parade-stop-${u}`,h,u<s.checkpoint?"#ffd995":"#bd9bd0",`Parade ${u+1}${u<s.checkpoint?" ✦":""}`,{role:"checkpoint",next:u===s.checkpoint,completed:u<s.checkpoint}));const r=_o[Math.min(2,this.state.haunt.act)];t.push({id:"haunt-visitor",kind:"guest",x:21,z:14,y:.55,color:"#dca26e",label:`${r.visitor}${this.state.finished.haunt?" · delighted":""}`,data:{role:"visitor",animal:r.visitor.toLowerCase(),delighted:this.state.time<this.state.haunt.applauseUntil||this.state.finished.haunt}}),Hx.forEach((h,u)=>n(`haunt-prop-${u}`,h,"#d7a9e8",`${u+1} · ${Gi[u]}`,{role:"prop",prop:u,performing:this.state.time-this.state.haunt.pulses[u]<1.2,selected:e?.active==="haunt"&&e.selected===u}));for(const h of this.state.garden.items)h.ready<=this.state.time&&!this.state.finished.garden&&t.push({id:`ember-${h.id}`,kind:"ember",...this.emberPosition(h),y:1.1+Math.sin(this.state.time*2+h.id)*.25,color:"#ffe6a1",scale:.65});for(const h of this.state.garden.passes){const u=this.state.players.find(d=>d.id===h.to),f=$t((this.state.time-h.start)/h.duration,0,1);t.push({id:`passed-ember-${h.id}`,kind:"ember",x:h.x+((u?.x??h.endX)-h.x)*f,z:h.z+((u?.z??h.endZ)-h.z)*f,y:1.65+Math.sin(f*Math.PI)*1.1,color:"#fff2b6",scale:1,data:{role:"pass",from:h.from,to:h.to,progress:f}})}Qh.forEach((h,u)=>n(`garden-bed-${u}`,h,["#dbabdd","#b9dc9a","#f2cd81"][u],`${["Bell","Strings","Wood"][u]} bed · ${this.state.garden.beds[u]}/2`,{role:"bed",filled:this.state.garden.beds[u],completed:this.state.garden.beds[u]>=2}));const o=Vi.filter((h,u)=>!this.state.post.delivered.includes(u)&&!this.state.players.some(f=>f.parcel===u)).length;n("post-pickup",eu,"#ffd58c",this.state.finished.post?"All parcels delivered ✦":o?"E · Pick up a wrapped parcel":"Parcels out for delivery",{role:"pickup",waiting:o,completed:this.state.finished.post}),o&&t.push({id:"post-parcels",kind:"parcel",x:0,z:22,y:.8,label:`${o} little parcels`,color:"#e7b690",data:{role:"depot"}}),Vi.forEach((h,u)=>{const f=this.state.post.delivered.includes(u);n(`post-stop-${u}`,h,f?"#b4db9b":"#edbd91",`${h.name}${f?" ✦":""}`,{role:"delivery",destination:u,selected:e?.parcel===u,completed:f})});const a=this.forestRoute(),c={N:"↑",E:"→",S:"↓",W:"←"};for(let h=0;h<9;h++){const u=this.connections(h),f=Math.floor(h/3),d=h%3;t.push({id:`forest-tile-${h}`,kind:"tile",x:-29+(d-1)*1.65,z:(f-1)*1.65,y:.15,rotation:this.state.forest.rotations[h]*Math.PI/2,color:a.connected.includes(h)?"#d7e5a7":"#9bb28b",label:`${h+1} ${u.map(g=>c[g]).join("")}`,data:{role:"path-tile",index:h,row:f,col:d,rotation:this.state.forest.rotations[h],connections:u,connected:a.connected.includes(h),selected:e?.active==="forest"&&e.selected===h}})}if(n("forest-entry",{x:-32.4,z:0},"#ffc384","Fox entrance →",{role:"entry"}),n("forest-exit",{x:-25.6,z:-1.65},"#ffe5a4","Lantern exit",{role:"exit",completed:this.state.finished.forest}),this.state.forest.path.length){const h=this.state.forest.path,u=$t((this.state.time-this.state.forest.revealAt)*.9,0,h.length-1),f=h[Math.floor(u)],d=h[Math.min(h.length-1,Math.ceil(u))],g=u%1;t.push({id:"forest-fox",kind:"guest",x:-29+(f%3*(1-g)+d%3*g-1)*1.65,z:(Math.floor(f/3)*(1-g)+Math.floor(d/3)*g-1)*1.65,y:.45,scale:.55,color:"#e9a16f",data:{role:"forest-fox",animal:"fox"}})}const l=this.state.theatre;t.push({id:"theatre-shadow",kind:"shadow",x:0,z:-27,y:1.5,scale:this.state.time<l.revealUntil?1.2+Math.sin((this.state.time-l.revealAt)*Math.PI)*.1:1,color:"#655578",label:l.parts.map((h,u)=>or[u][h]).join(" · "),data:{role:"creature",parts:[...l.parts],names:l.parts.map((h,u)=>or[u][h]),reveal:this.state.time<l.revealUntil,successful:l.successful,progress:$t((this.state.time-l.revealAt)/2.2,0,1)}});for(const h of this.state.players){for(let u=0;u<h.leaves;u++){const f=this.state.time*2+u*Math.PI*2/Math.max(1,h.leaves);t.push({id:`carried-leaf-${h.id}-${u}`,kind:"leaf",x:h.x+Math.cos(f)*.8,z:h.z+Math.sin(f)*.8,y:.7+u*.1,color:ka[h.leafColors[u]??u%4],scale:.45})}h.ember&&!this.state.garden.passes.some(u=>u.to===h.id)&&t.push({id:`carried-ember-${h.id}`,kind:"ember",x:h.x,z:h.z,y:2.2,color:"#fff0ad",data:{role:"carried"}}),h.parcel!==null&&t.push({id:`carried-parcel-${h.id}`,kind:"parcel",x:h.x,z:h.z,y:1.7,scale:.6,color:"#e8bf95",data:{role:"carried",destination:h.parcel}})}return t}}class Wx{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Xx(e).buffer}}function Xx(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function Tf(i){return new $x(i).unpack()}function Ef(i){const e=new qx,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class $x{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class qx{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Wx,this._textEncoder=new TextEncoder}}let Cf=!0,Af=!0;function mr(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function as(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Rl("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[a,l])};const o=s.removeEventListener;s.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function Yx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Cf=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function jx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Af=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function Rl(){if(typeof window=="object"){if(Cf)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Pl(i,e){Af&&console.warn(i+" is deprecated, please use "+e+" instead.")}function Jx(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(mr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(mr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(mr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=mr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function su(i){return Object.prototype.toString.call(i)==="[object Object]"}function wf(i){return su(i)?Object.keys(i).reduce(function(e,t){const n=su(i[t]),s=n?wf(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Xc(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Xc(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Xc(i,i.get(s),t)})}))}function ru(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&Xc(i,a,s)})}),s}const ou=Rl;function Rf(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(f,d){return f?f+d.charAt(0).toUpperCase()+d.slice(1):d==="deviceId"?"sourceId":d};if(h.ideal!==void 0){c.optional=c.optional||[];let f={};typeof h.ideal=="number"?(f[u("min",l)]=h.ideal,c.optional.push(f),f={},f[u("max",l)]=h.ideal,c.optional.push(f)):(f[u("",l)]=h.ideal,c.optional.push(f))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(f=>{h[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(f,l)]=h[f])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},s=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(h,u,f){u in h&&!(f in h)&&(h[f]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(f=>{f=f.filter(g=>g.kind==="videoinput");let d=f.find(g=>u.some(_=>g.label.toLowerCase().includes(_)));return!d&&f.length&&u.includes("back")&&(d=f[f.length-1]),d&&(a.video.deviceId=l.exact?{exact:d.deviceId}:{ideal:d.deviceId}),a.video=n(a.video),ou("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return ou("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){s(a,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function Pf(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Df(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)}),s.stream.getTracks().forEach(r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else as(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function If(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,c){let l=s.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Lf(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const o=s.apply(this,arguments);return o._pc=this,o}),i.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>ru(a,o.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),as(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>ru(o,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===s&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(o?a=!0:o=c),c.track===s)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Uf(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function Nf(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Uf(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(d=>d.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[u.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new i.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],g=l._streams[d.id];u=u.replace(new RegExp(g.id,"g"),d.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],g=l._streams[d.id];u=u.replace(new RegExp(d.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const _=r(this,g);f[0].apply(null,[_])},g=>{f[1]&&f[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[l]=u[l]});const a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(d=>{this._streams[d].getTracks().find(_=>h.track===_)&&(f=this._streams[d])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function $c(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function Ff(i,e){e.version>102||as(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const au=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Ff,shimAddTrackRemoveTrack:Nf,shimAddTrackRemoveTrackWithNative:Uf,shimGetSendersWithDtmf:If,shimGetUserMedia:Rf,shimMediaStream:Pf,shimOnTrack:Df,shimPeerConnection:$c,shimSenderReceiverGetStats:Lf},Symbol.toStringTag,{value:"Module"}));function Of(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){Pl("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function Zx(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function kf(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function qc(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function Bf(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function zf(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Hf(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),as(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Vf(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){Pl("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Gf(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Wf(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,a.sendEncodings=s,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function Xf(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function $f(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function qf(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const cu=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Wf,shimCreateAnswer:qf,shimCreateOffer:$f,shimGetDisplayMedia:Zx,shimGetParameters:Xf,shimGetStats:Bf,shimGetUserMedia:Of,shimOnTrack:kf,shimPeerConnection:qc,shimRTCDataChannel:Gf,shimReceiverGetStats:Hf,shimRemoveStream:Vf,shimSenderGetStats:zf},Symbol.toStringTag,{value:"Module"}));function Yf(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function jf(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Jf(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=t.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f};let a=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,l,h){const u=o.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=a}function Zf(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(Kf(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}.bind(e))}function Kf(i){return i&&i.video!==void 0?Object.assign({},i,{video:wf(i.video)}):i}function Qf(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(Pl("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function ed(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function td(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function nd(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const lu=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:nd,shimCallbacksAPI:Jf,shimConstraints:Kf,shimCreateOfferLegacy:td,shimGetUserMedia:Zf,shimLocalStreamsAPI:Yf,shimRTCIceServerUrls:Qf,shimRemoteStreamsAPI:jf,shimTrackEventTransceiver:ed},Symbol.toStringTag,{value:"Module"}));function Kx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var za={exports:{}},hu;function Qx(){return hu||(hu=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let s;const r=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<r.length;o++)s=r[o].trim().split("="),n[s[0].trim()]=s[1];return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{s+=e.writeRtpMap(o),s+=e.writeFmtp(o),s+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{s+=e.writeExtmap(o)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,o=s.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(f=>f.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(f=>{if(f.name.toUpperCase()==="RTX"&&f.parameters.apt){let d={ssrc:c,codecPayloadType:parseInt(f.parameters.apt,10)};c&&l&&(d.rtx={ssrc:l}),n.push(d),r&&(d=JSON.parse(JSON.stringify(d)),d.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(d))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(f=>{f.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const o=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(za)),za.exports}var id=Qx();const Us=Kx(id),ey=Cd({__proto__:null,default:Us},[id]);function wo(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=Us.parseCandidate(n.candidate);for(const o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,as(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Yc(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||as(i,"icecandidate",e=>{if(e.candidate){const t=Us.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Ro(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=Us.splitSections(a.sdp);return c.shift(),c.some(l=>{const h=Us.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Us.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return u}}),this._sctp=f}return o.apply(this,arguments)}}function Po(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const o=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},as(i,"datachannel",s=>(t(s.channel,s.target),s))}function jc(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Jc(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Do(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Io(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const ty=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Jc,shimAddIceCandidateNullOrEmpty:Do,shimConnectionState:jc,shimMaxMessageSize:Ro,shimParameterlessSetLocalDescription:Io,shimRTCIceCandidate:wo,shimRTCIceCandidateRelayProtocol:Yc,shimSendThrowTypeError:Po},Symbol.toStringTag,{value:"Module"}));function ny({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Rl,n=Jx(i),s={browserDetails:n,commonShim:ty,extractVersion:mr,disableLog:Yx,disableWarnings:jx,sdp:ey};switch(n.browser){case"chrome":if(!au||!$c||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=au,Do(i,n),Io(i),Rf(i,n),Pf(i),$c(i,n),Df(i,n),Nf(i,n),If(i),Lf(i,n),Ff(i,n),wo(i),Yc(i),jc(i),Ro(i,n),Po(i,n),Jc(i,n);break;case"firefox":if(!cu||!qc||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=cu,Do(i,n),Io(i),Of(i,n),qc(i,n),Bf(i,n),kf(i),Vf(i),zf(i),Hf(i),Gf(i),Wf(i,n),Xf(i,n),$f(i,n),qf(i,n),wo(i),jc(i),Ro(i,n),Po(i,n);break;case"safari":if(!lu||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=lu,Do(i,n),Io(i),Qf(i),td(i),Jf(i),Yf(i),jf(i),ed(i),Zf(i),nd(i),wo(i),Yc(i),Ro(i,n),Po(i,n),Jc(i,n);break;default:t("Unsupported browser!");break}return s}const uu=ny({window:typeof window>"u"?void 0:window});function cs(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class sd{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),o=a,r++}return this._dataCount++,t}}}function iy(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const Ha=uu.default||uu,ar=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Ha.browserDetails.browser}getVersion(){return Ha.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=Ha.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},sy=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),rd=()=>Math.random().toString(36).slice(2),fu={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class ry extends sd{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=fu,this.browser=ar.getBrowser(),this.browserVersion=ar.getVersion(),this.pack=Ef,this.unpack=Tf,this.supports=(function(){const t={browser:ar.isBrowserSupported(),webRTC:ar.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(fu),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!ar.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=sy,this.randomToken=rd}}const fn=new ry,oy="PeerJS: ";class ay{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[oy,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var Ie=new ay,Dl={},cy=Object.prototype.hasOwnProperty,ln="~";function Dr(){}Object.create&&(Dr.prototype=Object.create(null),new Dr().__proto__||(ln=!1));function ly(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function od(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new ly(t,n||i,s),o=ln?ln+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],r]:i._events[o].push(r):(i._events[o]=r,i._eventsCount++),i}function Lo(i,e){--i._eventsCount===0?i._events=new Dr:delete i._events[e]}function en(){this._events=new Dr,this._eventsCount=0}en.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)cy.call(t,n)&&e.push(ln?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};en.prototype.listeners=function(e){var t=ln?ln+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,o=new Array(r);s<r;s++)o[s]=n[s].fn;return o};en.prototype.listenerCount=function(e){var t=ln?ln+e:e,n=this._events[t];return n?n.fn?1:n.length:0};en.prototype.emit=function(e,t,n,s,r,o){var a=ln?ln+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,o),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var f=c.length,d;for(u=0;u<f;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c[u].fn.apply(c[u].context,h)}}return!0};en.prototype.on=function(e,t,n){return od(this,e,t,n,!1)};en.prototype.once=function(e,t,n){return od(this,e,t,n,!0)};en.prototype.removeListener=function(e,t,n,s){var r=ln?ln+e:e;if(!this._events[r])return this;if(!t)return Lo(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!n||o.context===n)&&Lo(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||s&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:Lo(this,r)}return this};en.prototype.removeAllListeners=function(e){var t;return e?(t=ln?ln+e:e,this._events[t]&&Lo(this,t)):(this._events=new Dr,this._eventsCount=0),this};en.prototype.off=en.prototype.removeListener;en.prototype.addListener=en.prototype.on;en.prefixed=ln;en.EventEmitter=en;Dl=en;var ls={};cs(ls,"ConnectionType",()=>Pi);cs(ls,"PeerErrorType",()=>Nt);cs(ls,"BaseConnectionErrorType",()=>Zc);cs(ls,"DataConnectionErrorType",()=>Il);cs(ls,"SerializationType",()=>Jo);cs(ls,"SocketEventType",()=>wi);cs(ls,"ServerMessageType",()=>Kt);var Pi=(function(i){return i.Data="data",i.Media="media",i})({}),Nt=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),Zc=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),Il=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),Jo=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),wi=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),Kt=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const ad="1.5.5";class hy extends Dl.EventEmitter{constructor(e,t,n,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+ad),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),Ie.log("Server message received:",r)}catch{Ie.log("Invalid server message",s.data);return}this.emit(wi.Message,r)},this._socket.onclose=s=>{this._disconnected||(Ie.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(wi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Ie.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Ie.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Kt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(wi.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class cd{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Pi.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Ie.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;Ie.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(Ie.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:Kt.Candidate,payload:{candidate:o.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Ie.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Zc.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Ie.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Zc.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Ie.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Ie.log("Listening for data channel"),e.ondatachannel=o=>{Ie.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},Ie.log("Listening for remote stream"),e.ontrack=o=>{Ie.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===Pi.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){Ie.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);Ie.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Ie.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Pi.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Kt.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Nt.WebRTC,s),Ie.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Nt.WebRTC,n),Ie.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();Ie.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Ie.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Kt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Nt.WebRTC,s),Ie.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Nt.WebRTC,n),Ie.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;Ie.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),Ie.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(Nt.WebRTC,o),Ie.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){Ie.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Ie.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Nt.WebRTC,t),Ie.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Ie.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Ie.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Ie.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class ld extends Dl.EventEmitter{emitError(e,t){Ie.error("Error:",t),this.emit("error",new uy(`${e}`,t))}}class uy extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class hd extends ld{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}class Ho extends hd{static#e=this.ID_PREFIX="mc_";get type(){return Pi.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Ho.ID_PREFIX+fn.randomToken(),this._negotiator=new cd(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Ie.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Ie.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Ie.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Kt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Kt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Ie.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Ie.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class fy{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",ad),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Ie.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==fn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===fn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Ie.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class Vo extends hd{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Pi.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Vo.ID_PREFIX+rd(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new cd(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Ie.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Ie.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Ie.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Il.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Kt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Kt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Ie.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class Ll extends Vo{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Vo.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Ie.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Va extends Ll{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new sd,this.serialization=Jo.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Tf(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=iy(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=Ef(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);Ie.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class dy extends Ll{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Jo.None}}class py extends Ll{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=fn.chunkedMTU){this.emitError(Il.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Jo.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class Ul extends ld{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:dy,json:py,binary:Va,"binary-utf8":Va,default:Va},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:fn.CLOUD_HOST,port:fn.CLOUD_PORT,path:"/",key:Ul.DEFAULT_KEY,token:fn.randomToken(),config:fn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==fn.CLOUD_HOST?this._options.secure=fn.isSecure():this._options.host==fn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Ie.setLogFunction(this._options.logFunction),Ie.logLevel=this._options.debug||0,this._api=new fy(t),this._socket=this._createServerConnection(),!fn.supports.audioVideo&&!fn.supports.data){this._delayedAbort(Nt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!fn.validateId(n)){this._delayedAbort(Nt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Nt.ServerError,s))}_createServerConnection(){const e=new hy(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(wi.Message,t=>{this._handleMessage(t)}),e.on(wi.Error,t=>{this._abort(Nt.SocketError,t)}),e.on(wi.Disconnected,()=>{this.disconnected||(this.emitError(Nt.Network,"Lost connection to server."),this.disconnect())}),e.on(wi.Close,()=>{this.disconnected||this._abort(Nt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case Kt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Kt.Error:this._abort(Nt.ServerError,n.msg);break;case Kt.IdTaken:this._abort(Nt.UnavailableID,`ID "${this.id}" is taken`);break;case Kt.InvalidKey:this._abort(Nt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Kt.Leave:Ie.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Kt.Expire:this.emitError(Nt.PeerUnavailable,`Could not connect to peer ${s}`);break;case Kt.Offer:{const r=n.connectionId;let o=this.getConnection(s,r);if(o&&(o.close(),Ie.warn(`Offer received for existing Connection ID:${r}`)),n.type===Pi.Media){const c=new Ho(s,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(s,o),this.emit("call",c)}else if(n.type===Pi.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(s,o),this.emit("connection",c)}else{Ie.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){Ie.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):Ie.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Ie.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Nt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Ie.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Nt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Ie.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new Ho(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){Ie.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Ie.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Ie.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;Ie.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Ie.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Ie.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Nt.ServerError,t))}}var my=Ul;const cr="hollowlight-v1-",du="ABCDEFGHJKLMNPQRSTUVWXYZ",gy=/^[A-HJ-NP-Z]{8}$/,Ga=256*1024,pu=2048,mu=25e3;function gu(i){const e=crypto.getRandomValues(new Uint8Array(i));return Array.from(e,t=>du[t%du.length]).join("")}function Xi(i){return i!==null&&typeof i=="object"&&!Array.isArray(i)}function lr(i,e){try{const t=JSON.stringify(i);return typeof t=="string"&&t.length<=e}catch{return!1}}function Go(i,e=0){if(e>4)return!1;if(i===null||typeof i=="boolean")return!0;if(typeof i=="number")return Number.isFinite(i);if(typeof i=="string")return i.length<=80;if(Array.isArray(i))return i.length<=16&&i.every(n=>Go(n,e+1));if(!Xi(i))return!1;const t=Object.entries(i);return t.length<=24&&t.every(([n,s])=>n.length<=40&&!["__proto__","prototype","constructor"].includes(n)&&Go(s,e+1))}function Wa(i){return typeof i=="string"&&i.normalize("NFKC").replace(/[\u0000-\u001f\u007f<>]/g,"").trim().slice(0,20)||"Wanderer"}function Xa(i){return typeof i=="string"&&/^#[0-9a-f]{6}$/i.test(i)?i:"#edaa5e"}class _y{constructor(e){this.callbacks=e}callbacks;id=gu(16);isHost=!1;roomCode="";peer=null;hostConnection=null;members=new Map;pending=null;epoch=0;joined=!1;snapshotSequence=0;receivedSequence=-1;lastHostMessage=0;heartbeat=null;reconnectTimer=null;reconnectAttempts=0;host(e,t){this.close();const n=this.epoch,s=gu(8);return this.roomCode=s,this.notify("onStatus","Opening a room for your friends…"),new Promise((r,o)=>{this.beginPending(()=>r(s),o);try{this.createPeer(cr+s,n).on("open",()=>{!this.current(n)||!this.pending||(this.isHost=!0,this.joined=!0,this.notify("onHost"),this.notify("onJoin",this.id,Wa(e),Xa(t)),this.notify("onStatus",`Room ${s} is open. Keep this tab open for your friends.`),this.completePending())})}catch{this.fail("This browser could not open a multiplayer room. You can still play solo.")}})}join(e,t,n){this.close();const s=e.trim().toUpperCase().replace(/[\s-]/g,"");if(!gy.test(s)){const o="Enter the eight-letter room code your friend shared.";return this.notify("onError",o),Promise.reject(new Error(o))}const r=this.epoch;return this.roomCode=s,this.notify("onStatus","Finding your friend’s village…"),new Promise((o,a)=>{this.beginPending(o,a);try{const c=this.createPeer(cr+"p-"+this.id,r);c.on("open",()=>{if(!this.current(r)||!this.pending||this.hostConnection)return;const l=c.connect(cr+s,{reliable:!0,serialization:"json",metadata:{game:"hollowlight",version:1}});this.hostConnection=l,l.on("open",()=>{this.current(r)&&(this.send(l,{type:"hello",version:1,name:Wa(t),color:Xa(n)}),this.notify("onStatus","Connected to your friend. Waiting to enter…"))}),l.on("data",h=>{this.current(r)&&this.receiveFromHost(h)}),l.on("close",()=>{this.current(r)&&this.fail(this.joined?"The host left or the connection ended. Choose Solo to keep playing.":"The room closed before you could enter. Ask your friend for a new code.")}),l.on("error",()=>{this.current(r)&&this.fail("The connection to your friend failed. Try again, or choose Solo.")})})}catch{this.fail("This browser could not connect to a multiplayer room. You can still play solo.")}})}sendInput(e){!Xi(e)||!Go(e)||!lr(e,pu)||(this.isHost?this.notify("onInput",this.id,e):this.joined&&this.hostConnection&&this.send(this.hostConnection,{type:"input",input:e}))}broadcast(e){if(!this.isHost||!Xi(e))return;const t={type:"snapshot",sequence:++this.snapshotSequence,state:e};if(lr(t,Ga))for(const n of this.members.values())n.accepted&&this.send(n.connection,t)}close(){if(this.isHost)for(const e of this.members.values())e.accepted&&this.send(e.connection,{type:"host-left"});else this.hostConnection?.open&&this.send(this.hostConnection,{type:"leave"});this.shutdown("Connection cancelled.")}createPeer(e,t){const n=new my(e,{secure:!0,debug:0});return this.peer=n,n.on("connection",s=>{this.current(t)&&this.isHost?this.acceptConnection(s,t):s.close()}),n.on("call",s=>s.close()),n.on("error",s=>{if(!this.current(t))return;if(this.joined&&["network","socket-error","socket-closed","server-error","disconnected"].includes(s.type)){this.notify("onStatus","The room service is unavailable. Existing friends may keep playing; new joins may fail."),this.scheduleReconnect(t);return}if(this.isHost&&s.type==="webrtc"){this.notify("onStatus","A friend could not connect. Your room is still open.");return}const r={"peer-unavailable":"That room could not be found. Check the code and ask your friend to keep their tab open.","unavailable-id":"This room address is already in use. Please try again for a new one.","browser-incompatible":"This browser does not support multiplayer connections. Try a current desktop browser, or play solo.",network:"The free room service could not be reached. Try again later, or play solo.",webrtc:"Your browsers could not make a direct connection. This network may block multiplayer; solo still works."};this.fail(r[s.type]||"The multiplayer connection failed. Please try again, or choose Solo.")}),n.on("disconnected",()=>{if(this.current(t)){if(!this.joined){this.fail("The free room service disconnected before the room was ready. Please try again.");return}this.notify("onStatus","The room service disconnected. Existing friends can keep playing while it reconnects."),this.scheduleReconnect(t)}}),n.on("open",()=>{this.current(t)&&(this.reconnectAttempts=0,this.joined&&this.notify("onStatus",this.isHost?`Room ${this.roomCode} is open. Keep this tab open for your friends.`:"Connected to your friend’s village."))}),n.on("close",()=>{this.current(t)&&this.fail("Your multiplayer connection ended. Choose Solo, or open a new room.")}),n}acceptConnection(e,t){const n=e.peer.startsWith(cr+"p-")?e.peer.slice((cr+"p-").length):"";if(!/^[A-HJ-NP-Z]{16}$/.test(n)||this.members.size>=8||Array.from(this.members.values()).some(r=>r.id===n)){e.close();return}const s={connection:e,id:n,accepted:!1,inputWindow:Date.now(),inputCount:0,timer:setTimeout(()=>e.close(),12e3)};this.members.set(e,s),e.on("data",r=>{if(!(!this.current(t)||!this.members.has(e))){if(!Xi(r)||!lr(r,Ga)||typeof r.type!="string"){e.close();return}if(r.type==="hello"&&!s.accepted){if(r.version!==1)return this.rejectConnection(e,"Your game versions differ. Both friends should refresh the page.");if(Array.from(this.members.values()).filter(o=>o.accepted).length>=3)return this.rejectConnection(e,"This village is full. A room holds four friends including the host.");clearTimeout(s.timer),s.accepted=!0,this.notify("onJoin",n,Wa(r.name),Xa(r.color)),this.send(e,{type:"welcome",version:1,id:n,roomCode:this.roomCode});return}if(s.accepted){if(r.type==="leave")e.close();else if(r.type==="ping")this.send(e,{type:"pong"});else if(r.type==="input"&&Xi(r.input)&&Go(r.input)&&lr(r.input,pu)){const o=Date.now();o-s.inputWindow>=1e3&&(s.inputWindow=o,s.inputCount=0),++s.inputCount<=90&&this.notify("onInput",n,r.input)}}}}),e.on("close",()=>this.removeMember(e,t)),e.on("error",()=>{this.removeMember(e,t),e.close()})}receiveFromHost(e){if(!Xi(e)||!lr(e,Ga)||typeof e.type!="string"){this.fail("The room sent an invalid update. Please reconnect, or choose Solo.");return}if(this.lastHostMessage=Date.now(),e.type==="welcome"&&!this.joined&&this.pending){if(e.version!==1||e.id!==this.id||e.roomCode!==this.roomCode){this.fail("This room uses a different game version. Refresh the page and try again.");return}this.joined=!0,this.startHeartbeat(),this.notify("onStatus","You’re in! Exploring your friend’s village."),this.completePending()}else if(e.type==="reject"){const t=typeof e.message=="string"?e.message.slice(0,180):"This room could not accept another player.";this.fail(t)}else e.type==="host-left"?this.fail("The host left. Choose Solo to keep playing, or join a new room."):e.type==="snapshot"&&this.joined&&Xi(e.state)&&typeof e.sequence=="number"&&Number.isSafeInteger(e.sequence)&&e.sequence>this.receivedSequence&&(this.receivedSequence=e.sequence,this.notify("onSnapshot",e.state))}startHeartbeat(){const e=this.epoch;this.heartbeat=setInterval(()=>{if(!(!this.current(e)||!this.hostConnection)){if(document.hidden&&(this.lastHostMessage=Date.now()),Date.now()-this.lastHostMessage>mu){this.fail("The host stopped responding. Choose Solo, or try joining again.");return}this.send(this.hostConnection,{type:"ping"})}},5e3)}rejectConnection(e,t){this.send(e,{type:"reject",message:t});const n=this.members.get(e);n?(clearTimeout(n.timer),n.timer=setTimeout(()=>e.close(),500)):e.close()}removeMember(e,t){if(!this.current(t))return;const n=this.members.get(e);n&&(clearTimeout(n.timer),this.members.delete(e),n.accepted&&this.notify("onLeave",n.id))}send(e,t){if(e.open&&!(t.type==="snapshot"&&e.dataChannel?.bufferedAmount>256*1024))try{const n=e.send(t);n instanceof Promise&&n.catch(()=>e.close())}catch{e.close()}}scheduleReconnect(e){this.reconnectTimer||this.reconnectAttempts>=3||!this.peer||this.peer.destroyed||(this.reconnectAttempts++,this.reconnectTimer=setTimeout(()=>{if(this.reconnectTimer=null,!(!this.current(e)||!this.peer||this.peer.destroyed)&&this.peer.disconnected)try{this.peer.reconnect()}catch{this.scheduleReconnect(e)}},1500*this.reconnectAttempts))}beginPending(e,t){this.pending={resolve:e,reject:t,timer:setTimeout(()=>this.fail("Connection timed out. The free room service or your network may be unavailable. Try again, or play solo."),mu)}}completePending(){const e=this.pending;this.pending=null,e&&(clearTimeout(e.timer),e.resolve())}fail(e){this.shutdown(e),this.notify("onStatus",e),this.notify("onError",e)}shutdown(e){this.epoch++;const t=this.pending;this.pending=null,t&&(clearTimeout(t.timer),t.reject(new Error(e))),this.heartbeat&&clearInterval(this.heartbeat),this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.heartbeat=null,this.reconnectTimer=null;const n=[...this.members.values()];this.members.clear(),this.isHost=!1,this.joined=!1,this.roomCode="";for(const r of n)clearTimeout(r.timer),r.connection.close(),r.accepted&&this.notify("onLeave",r.id);this.hostConnection?.close(),this.hostConnection=null;const s=this.peer;this.peer=null,s&&!s.destroyed&&s.destroy(),this.snapshotSequence=0,this.receivedSequence=-1,this.reconnectAttempts=0}current(e){return this.epoch===e}notify(e,...t){try{this.callbacks[e](...t)}catch(n){console.error(`Game callback ${e} failed.`,n)}}}function ud(i){try{return localStorage.getItem(i)}catch{return null}}function $a(i,e){try{localStorage.setItem(i,e)}catch{}}function Kc(i,e){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):e}function _u(i,e){const t=ud(i);return t===null?e:Kc(Number(t),e)}const vy=i=>440*2**((i-69)/12),xy=60/75/2,yy=[[69,null,74,null,78,null,76,null],[74,null,null,null,71,null,null,null],[71,null,74,null,78,null,74,null],[73,null,76,null,74,null,null,null],[69,null,74,null,78,null,81,null],[78,null,76,74,71,null,null,null],[74,null,71,null,69,null,null,null],[73,null,76,null,74,null,null,null],[78,null,null,null,76,null,74,null],[71,null,74,null,null,null,null,null],[74,null,78,null,79,null,78,null],[76,null,null,null,73,null,null,null],[74,null,78,null,76,null,74,null],[71,null,null,null,69,null,null,null],[71,null,74,null,69,null,null,null],[73,null,null,null,74,null,null,null]],vu=[[50,62,66,69],[47,62,66,69],[43,62,66,71],[45,61,64,69],[50,62,66,69],[47,62,66,69],[43,62,67,71],[45,61,64,69]];class Sy{context=null;master;music;effects;pluckWave;noiseBuffer;timer=null;voices=new Set;lastEffect=new Map;step=0;nextNote=0;layers=0;collected=0;muted=ud("hollowlight-muted")==="true";musicVolume=_u("hollowlight-music",.35);effectsVolume=_u("hollowlight-effects",.65);visibilityChanged=()=>{this.apply(),this.context&&(this.nextNote=this.context.currentTime+.12)};async start(){if(!this.context){const e=this.context=new AudioContext;this.master=e.createGain(),this.master.gain.value=0;const t=e.createDynamicsCompressor();t.threshold.value=-16,t.knee.value=18,t.ratio.value=2.5,t.attack.value=.012,t.release.value=.25,this.master.connect(t),t.connect(e.destination),this.music=e.createGain(),this.effects=e.createGain(),this.music.gain.value=0,this.effects.gain.value=0,this.music.connect(this.master),this.effects.connect(this.master);const n=e.createConvolver(),s=e.createBuffer(2,Math.floor(e.sampleRate*1.45),e.sampleRate);for(let c=0;c<2;c++){const l=s.getChannelData(c);let h=0;for(let u=0;u<l.length;u++)h=h*.72+(Math.random()*2-1)*.28,l[u]=h*(1-u/l.length)**3}n.buffer=s;const r=e.createGain();r.gain.value=.16;const o=e.createGain();o.gain.value=.12,this.music.connect(n),this.effects.connect(o),o.connect(n),n.connect(r),r.connect(this.master),this.pluckWave=e.createPeriodicWave(new Float32Array(6),new Float32Array([0,1,.3,.12,.045,.015])),this.noiseBuffer=e.createBuffer(1,e.sampleRate,e.sampleRate);const a=this.noiseBuffer.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=Math.random()*2-1;this.nextNote=e.currentTime+.12,document.addEventListener("visibilitychange",this.visibilityChanged),this.apply(),this.timer=setInterval(()=>this.tick(),80)}await this.context.resume(),this.tick()}apply(){if(!this.context)return;const e=this.context.currentTime,t=[[this.master.gain,this.muted||document.hidden?0:.72],[this.music.gain,this.musicVolume],[this.effects.gain,this.effectsVolume]];for(const[n,s]of t)n.cancelScheduledValues(e),n.setTargetAtTime(s,e,.06)}setMuted(e){this.muted=e,$a("hollowlight-muted",String(e)),this.apply()}setVolumes(e,t){this.musicVolume=Kc(e,this.musicVolume),this.effectsVolume=Kc(t,this.effectsVolume),$a("hollowlight-music",String(this.musicVolume)),$a("hollowlight-effects",String(this.effectsVolume)),this.apply()}setProgress(e){this.layers=Number.isFinite(e)?Math.max(0,Math.min(8,e)):0}schedule(e,t,n,s){this.voices.add(e),e.onended=()=>{this.voices.delete(e),e.disconnect();for(const r of t)r.disconnect()},e.start(n),e.stop(n+s+.025)}tone(e,t,n,s,r,o=0,a=!1){const c=this.context;if(!c||this.voices.size>=40)return;const l=c.createOscillator(),h=c.createBiquadFilter(),u=c.createGain(),f=c.createStereoPanner(),d=vy(e);a?l.type="sine":l.setPeriodicWave(this.pluckWave),l.frequency.value=d,l.detune.value=(Math.random()-.5)*3,h.type="lowpass",h.Q.value=.35,h.frequency.setValueAtTime(Math.min(3400,d*(a?2:5)),t),h.frequency.exponentialRampToValueAtTime(Math.max(150,d*1.4),t+n);const g=a?Math.min(.35,n*.18):.006;u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(s,t+g),u.gain.exponentialRampToValueAtTime(1e-4,t+n-.02),u.gain.linearRampToValueAtTime(0,t+n),f.pan.value=o,l.connect(h),h.connect(u),u.connect(f),f.connect(r),this.schedule(l,[h,u,f],t,n)}rustle(e,t,n,s,r=!1){const o=this.context;if(!o||this.voices.size>=40)return;const a=o.createBufferSource();a.buffer=this.noiseBuffer,a.playbackRate.value=.88+Math.random()*.24;const c=o.createBiquadFilter();c.type="bandpass",c.Q.value=.6,c.frequency.setValueAtTime(s,e),r&&c.frequency.exponentialRampToValueAtTime(s*.32,e+t);const l=o.createGain();l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(n,e+t*.2),l.gain.exponentialRampToValueAtTime(1e-4,e+t-.01),l.gain.linearRampToValueAtTime(0,e+t),a.connect(c),c.connect(l),l.connect(this.effects),this.schedule(a,[c,l],e,t)}tick(){const e=this.context;if(!(!e||e.state!=="running")){if(this.muted||document.hidden){this.nextNote=e.currentTime+.12;return}for(this.nextNote<e.currentTime&&(this.nextNote=e.currentTime+.035);this.nextNote<e.currentTime+.16;)this.musicVolume>0&&this.musicStep(this.nextNote),this.step=(this.step+1)%128,this.nextNote+=xy}}musicStep(e){const t=Math.floor(this.step/8),n=this.step%8,s=vu[t%vu.length],r=yy[t][n];r!==null&&this.tone(r,e+Math.random()*.008,2.2,.13+Math.random()*.012,this.music,-.15),n===0&&(this.tone(s[0],e,2.9,.105,this.music,.08),this.layers>=1&&s.slice(1).forEach((o,a)=>{this.tone(o-12,e+a*.035,3.5,.018,this.music,(a-1)*.18,!0)})),this.layers>=3&&n===5&&t%2===0&&this.tone(s[2],e,1.8,.047,this.music,.2),this.layers>=6&&n===6&&t%4===1&&this.tone(s[3]+12,e,2.7,.025,this.music,.15,!0)}play(e){const t=this.context;if(!t||t.state!=="running"||this.muted||document.hidden||this.effectsVolume<=0)return;const n=t.currentTime,s={step:.12,action:.09,collect:.09,success:1.2,open:.2,gust:.18,error:.4};if(!(n-(this.lastEffect.get(e)??-1/0)<s[e]))if(this.lastEffect.set(e,n),e==="step")this.rustle(n,.085,.042,1e3+Math.random()*500),this.tone(39+Math.random()*3,n,.09,.023,this.effects);else if(e==="gust")this.rustle(n,.44,.15,1400,!0);else if(e==="collect"){const r=[74,78,81,78,76,74][this.collected++%6];this.tone(r,n,.75,.105,this.effects,0),this.tone(r-12,n+.025,.48,.035,this.effects,0,!0)}else e==="success"?([62,66,69,71,74].forEach((r,o)=>{this.tone(r,n+o*.12,1.65,.11-o*.008,this.effects,(o-2)*.06)}),this.tone(50,n,2.2,.09,this.effects,0,!0)):e==="open"?(this.tone(69,n,.6,.065,this.effects),this.tone(74,n+.085,.85,.055,this.effects)):e==="error"?(this.tone(57,n,.24,.07,this.effects,0,!0),this.tone(54,n+.12,.35,.055,this.effects,0,!0)):(this.tone(62+Math.random()*.15,n,.2,.075,this.effects),this.rustle(n,.065,.022,650))}dispose(){this.timer!==null&&clearInterval(this.timer),this.timer=null,document.removeEventListener("visibilitychange",this.visibilityChanged);for(const t of this.voices)try{t.stop()}catch{}this.voices.clear();const e=this.context;this.context=null,e&&e.state!=="closed"&&e.close().catch(()=>{}),this.lastEffect.clear(),this.step=0,this.collected=0}}function Ur(){const i=new Map,e=new jn(1,16,12),t=new _n(1,1,1);function n(l,h=!1){const u=`${l}:${h}`;return i.has(u)||i.set(u,h?new mn({color:l,side:dn}):new bn({color:l,roughness:.86,metalness:0})),i.get(u)}function s(l,h,u,f=0,d=0,g=0,_=!1){const m=new at(h,n(u,_));return m.position.set(f,d,g),m.castShadow=!_,m.receiveShadow=!_,l.add(m),m}function r(l,h,u,f,d,g,_=g,m=g,p=!1){const T=s(l,e,h,u,f,d,p);return T.scale.set(g,_,m),T}function o(l,h,u,f,d,g,_,m){const p=s(l,t,h,u,f,d);return p.scale.set(g,_,m),p}function a(l,h,u,f=.025,d=!1){const g=new Bn(u.map(_=>new P(..._)));return s(l,new Vn(g,Math.max(12,u.length*5),f,5,!1),h,0,0,0,d)}function c(l,h,u,f=0,d=0,g=0){return s(l,new Jt(h,24),u,f,d,g,!0)}return{mesh:s,ball:r,box:o,stroke:a,shape:c}}function Bt(i,e=0,t=0,n=0){const s=new mt;return s.position.set(e,t,n),i.add(s),s}function My(i,e){const t=new at(new wt(.88,.035,6,40),new mn({color:e,transparent:!0,opacity:.85}));return t.rotation.x=-Math.PI/2,t.position.y=.035,i.add(t),t}function by(){const i=new mt,e=Ur(),t=Bt(i),n={},s=[],r=[];for(const a of["fox","mouse","badger","ghost"]){const c=Bt(t);c.name=`${a}-visitor`,n[a]=c;const l=a==="fox"?"#da8b51":a==="mouse"?"#baa6a0":a==="badger"?"#77727a":"#fff0cf",h="#f6e4c7",u="#3e3442";if(e.ball(c,l,0,.45,0,.43,.53,.34),e.ball(c,h,0,.43,.29,.29,.33,.09),e.ball(c,l,0,1.04,.035,.48,.44,.38),a==="fox"){for(const m of[-1,1]){const p=e.mesh(c,new pi(.205,.48,3),l,m*.31,1.45,.015);p.rotation.z=-m*.18;const T=e.mesh(c,new pi(.12,.29,3),"#e9b29b",m*.31,1.45,.125);T.rotation.z=-m*.18;const y=e.ball(c,h,m*.23,.92,.335,.26,.16,.11);y.rotation.z=m*.3}const _=Bt(c,-.34,.29,-.2);_.rotation.z=-.58,e.ball(_,l,-.12,.12,-.17,.23,.43,.25),e.ball(_,h,-.12,.43,-.17,.18,.18,.21)}else if(a==="mouse"){for(const _ of[-1,1])e.ball(c,l,_*.4,1.35,-.01,.265,.28,.115),e.ball(c,"#d5a5a5",_*.4,1.36,.085,.178,.19,.035),e.stroke(c,"#867078",[[_*.2,.91,.37],[_*.43,.94,.4],[_*.6,.91,.39]],.011),e.stroke(c,"#867078",[[_*.2,.89,.37],[_*.45,.86,.4],[_*.57,.8,.38]],.011);e.stroke(c,"#d6aba7",[[.27,.18,-.2],[.61,.12,-.35],[.8,.17,-.62],[.65,.25,-.78]],.035)}else if(a==="badger"){for(const _ of[-1,1]){e.ball(c,l,_*.35,1.36,-.01,.16,.19,.12),e.ball(c,h,_*.35,1.36,.085,.09,.11,.03);const m=e.ball(c,"#343340",_*.22,1.07,.336,.145,.315,.085);m.rotation.z=-_*.24}e.ball(c,h,0,1.13,.37,.14,.3,.075),e.ball(c,h,0,.88,.37,.25,.16,.13)}else for(let _=0;_<5;_++)e.ball(c,l,(_-2)*.14,.07+_%2*.04,.06,.13,.15,.22);for(const _ of[-1,1]){const m=e.ball(c,u,_*.17,1.08,.399,.046,.067,.033);s.push(m),e.ball(c,"#fff9e9",_*.17-.009,1.103,.428,.012),e.ball(c,"#df9d9c",_*.3,.94,.35,.07,.03,.027),a!=="ghost"&&e.ball(c,u,_*.21,.035,.17,.15,.1,.2);const p=Bt(c,_*.4,.66,.015);p.userData.side=_;const T=e.ball(p,l,_*.045,-.15,.04,.13,.23,.135);T.rotation.z=_*.2,r.push(p)}a!=="ghost"&&e.ball(c,a==="mouse"?"#d8939e":u,0,.94,.465,.068,.048,.04),e.stroke(c,"#6c4b50",[[-.075,.85,.398],[0,.825,.415],[.075,.85,.398]],.012);const f=a==="fox"?"#78998a":a==="mouse"?"#b98298":"#d0a055",d=e.mesh(c,new wt(.32,.068,8,24),f,0,.73,.01);d.rotation.x=Math.PI/2;const g=e.box(c,f,.18,.53,.34,.13,.35,.07);g.rotation.z=-.22}const o=Bt(i,0,1.9,0);for(let a=0;a<5;a++){const c=e.mesh(o,new Hs(.085,0),"#ffdc8d",Math.cos(a*Math.PI*2/5)*.63,Math.sin(a*1.3)*.1,Math.sin(a*Math.PI*2/5)*.3,!0);c.userData.phase=a}return i.userData.activityArt={kind:"guest",body:t,variants:n,eyes:s,arms:r,accents:[o]},i}function Ty(i){const e=new mt,t=Bt(e),n=Ur(),s=My(e,"#f4d695"),r=[],o="#a88463",a="#dec08a";if(i===0){n.mesh(t,new ct(.7,.65,.12,24),"#c49d75",0,.55);for(const f of[-1,1])n.box(t,o,f*.43,.25,0,.14,.5,.32);const c=Bt(t,0,.65,0);r.push(c),n.ball(c,"#91b3ad",0,.34,0,.39,.36,.32),n.mesh(c,new ct(.3,.34,.055,20),a,0,.6),n.ball(c,a,0,.69,0,.065);const l=n.mesh(c,new wt(.31,.06,7,20),"#668c89",-.35,.35);l.scale.x=.72;const h=n.mesh(c,new ct(.09,.16,.49,12),"#91b3ad",.4,.4,0);h.rotation.z=-.85,n.mesh(c,new wt(.09,.02,5,12),a,.58,.56,0).rotation.x=Math.PI/2;for(const f of[-1,1])n.ball(c,"#39474a",f*.12,.39,.29,.024,.035,.02);n.stroke(c,"#5b7878",[[-.06,.27,.318],[0,.24,.325],[.06,.27,.318]],.012);const u=Bt(t);u.name="steam";for(let f=0;f<3;f++){const d=n.ball(u,"#f8e8c7",.56,1.3+f*.25,0,.1+f*.035,.13+f*.03,.09);d.userData.phase=f}r.push(u)}else if(i===1){for(const c of[-1,1]){n.box(t,o,c*.78,.95,0,.1,1.9,.12),n.box(t,o,c*.78,.06,0,.4,.12,.55),n.ball(t,a,c*.78,1.98,0,.12);const l=Bt(t,c*.69,1.8,0);l.userData.side=c,r.push(l);for(let h=0;h<4;h++)n.ball(l,h%2?"#b18096":"#a3738d",-c*h*.13,-.79,.025,.13,.81,.105);n.box(l,a,-c*.15,-.92,.12,.53,.07,.035)}n.box(t,"#84667e",0,1.88,0,1.8,.18,.18);for(let c=0;c<7;c++)n.ball(t,"#ba8c9e",-.65+c*.22,1.76,.08,.16,.18,.1);n.mesh(t,new Hs(.13),a,0,2.13,.03)}else if(i===2){n.box(t,"#735d77",0,.83,-.13,1.68,1.5,.55),n.box(t,"#a58b9b",0,1.62,-.12,1.85,.13,.65),n.box(t,"#b49b9c",0,.77,.3,1.8,.16,.55);for(let c=0;c<14;c++){const l=n.box(t,"#f5e3bc",-.78+c*.12,.88,.4,.11,.055,.39);r.push(l),c%7!==2&&c%7!==6&&n.box(t,"#403b49",-.73+c*.12,.93,.3,.055,.065,.21)}for(const c of[-1,1])n.box(t,"#65516a",c*.73,.39,.35,.13,.7,.16);for(let c=0;c<5;c++)n.box(t,a,-.55+c*.275,1.21,.155,.015,.32,.02);n.box(t,"#f1dcb7",0,1.4,.19,.38,.27,.025).rotation.z=-.05,n.mesh(t,new Hs(.085),a,0,1.15,.19)}else{n.box(t,"#8caa9a",0,.98,-.08,1.36,1.65,.58),n.box(t,"#a9bd9e",0,1.86,-.07,1.54,.14,.71),n.box(t,"#b3c4a9",0,.18,-.07,1.45,.15,.68);for(const l of[-1,1]){const h=Bt(t,l*.62,.97,.24);h.userData.side=l,r.push(h),n.box(h,"#a6b99d",-l*.3,0,0,.59,1.45,.08),n.box(h,"#bdc9a9",-l*.3,.15,.045,.42,.8,.025),n.ball(h,a,-l*.52,-.05,.075,.055),n.box(t,"#748c7b",l*.48,.08,-.08,.16,.2,.4)}const c=Bt(t,-.33,1.97,0);n.mesh(c,new ct(.13,.095,.19,12),"#f4ddbb",0,.08),n.mesh(c,new wt(.07,.019,5,12),"#f4ddbb",.13,.1),n.ball(t,"#d6a65e",.32,2.02,0,.19,.14,.17)}return e.userData.activityArt={kind:"prop",body:t,prop:i,ring:s,moving:r},e}function Ey(){const i=new mt,e=Ur(),t=Bt(i,0,.45,-1.71),n="#57455f",s="#f6dfb0",r=[[],[],[]];for(let o=0;o<3;o++){const a=Bt(t);if(r[0].push(a),o===0){e.ball(a,n,0,.05,0,.63,.49,.035,!0);const c=e.mesh(a,new wt(.28,.075,6,24),n,-.66,.16,.01,!0);c.scale.x=.75;const l=new It;l.moveTo(.4,-.13),l.quadraticCurveTo(.83,-.1,.96,.55),l.lineTo(.73,.46),l.quadraticCurveTo(.64,.15,.4,.15),l.closePath(),e.shape(a,l,n),e.ball(a,n,0,.5,0,.43,.07,.04,!0),e.ball(a,n,0,.61,0,.09,.09,.04,!0)}else if(o===1){for(let c=-2;c<=2;c++)e.ball(a,c%2?"#604b65":n,c*.21,.03,Math.abs(c)*-.005,.3,.49-Math.abs(c)*.035,.04,!0);e.stroke(a,n,[[0,.46,0],[.02,.69,0],[.17,.78,0]],.065,!0)}else{const c=new It;c.moveTo(-.36,-.46),c.lineTo(.75,-.46),c.quadraticCurveTo(.94,-.26,.58,-.16),c.lineTo(.22,-.14),c.lineTo(.3,.6),c.lineTo(-.45,.6),c.lineTo(-.39,.12),c.closePath(),e.shape(a,c,n),e.stroke(a,"#937288",[[-.31,.42,.02],[.18,.42,.02]],.025,!0)}for(const c of[-1,1])e.ball(a,s,c*.18,.19,.07,.042,.065,.015,!0),e.stroke(a,n,[[c*.23,-.35,0],[c*.27,-.64,0],[c*.42,-.66,0]],.04,!0)}for(let o=0;o<3;o++){const a=Bt(t,0,.1,-.05);r[1].push(a);for(const c of[-1,1]){const l=Bt(a,c*.45,0);if(l.userData.side=c,o===0){const h=new It;h.moveTo(0,0),h.bezierCurveTo(.05,.24,.3,.12,.27,.39),h.bezierCurveTo(.53,.31,.42,.6,.69,.54),h.lineTo(.86,.88),h.quadraticCurveTo(1,.28,.67,.16),h.quadraticCurveTo(.6,-.16,0,0),e.shape(l,h,n).scale.x=c,e.stroke(l,"#9b7a8e",[[c*.12,.08,.02],[c*.43,.32,.02],[c*.73,.67,.02]],.012,!0)}else if(o===1)for(let h=0;h<4;h++){const u=e.ball(l,n,c*(.23+h*.14),.21+h*.12,0,.13,.47-h*.04,.025,!0);u.rotation.z=-c*(.55+h*.16)}else{const h=new It;h.moveTo(0,.18),h.lineTo(.92,.35),h.lineTo(.83,.08),h.lineTo(1.02,-.19),h.lineTo(.62,-.11),h.lineTo(0,-.01),h.closePath(),e.shape(l,h,n).scale.x=c,e.stroke(l,"#9b7a8e",[[c*.42,.12,.02],[c*.7,.16,.02]],.018,!0)}}}for(let o=0;o<3;o++){const a=Bt(t,0,.63,.02);if(r[2].push(a),o===0)e.ball(a,n,0,.22,0,.22,.27,.035,!0),e.ball(a,"#6c536e",0,.36,.01,.3,.12,.04,!0),e.stroke(a,n,[[.01,.45,0],[.04,.58,0],[.13,.62,0]],.035,!0);else if(o===1){const c=new It;c.moveTo(.23,.61),c.absarc(0,.32,.37,.9,Math.PI*2-.9,!1),c.quadraticCurveTo(-.18,.32,.23,.61),e.shape(a,c,n),e.mesh(a,new Hs(.07),n,.42,.48,0,!0)}else{const c=new It;c.moveTo(-.43,0),c.lineTo(.43,0),c.lineTo(.43,.11),c.lineTo(.25,.11),c.lineTo(.3,.62),c.lineTo(-.3,.62),c.lineTo(-.25,.11),c.lineTo(-.43,.11),c.closePath(),e.shape(a,c,n),e.stroke(a,"#b3959c",[[-.25,.2,.02],[.25,.2,.02]],.033,!0)}}return i.userData.activityArt={kind:"shadow",body:t,parts:r},i}function Cy(){const i=new mt,e=Ur();e.mesh(i,new ct(.7,.53,.6,20,1,!0),"#b58b54",0,.3),e.mesh(i,new ct(.55,.55,.06,20),"#927045",0,.055);for(let r=0;r<5;r++)e.mesh(i,new wt(.55+r*.033,.035,5,32),r%2?"#d2ad70":"#c49a60",0,.08+r*.12).rotation.x=Math.PI/2;for(let r=0;r<12;r++){const o=r*Math.PI/6;e.stroke(i,"#d7b67c",[[Math.sin(o)*.53,.04,Math.cos(o)*.53],[Math.sin(o)*.7,.61,Math.cos(o)*.7]],.018)}const t=e.mesh(i,new wt(.66,.048,6,28,Math.PI),"#d1ab6b",0,.55);t.rotation.y=.35;const n=Bt(i,0,.19,0),s=new It;s.moveTo(0,-.12),s.quadraticCurveTo(-.21,.05,-.1,.24),s.lineTo(0,.35),s.quadraticCurveTo(.24,.06,0,-.12);for(let r=0;r<28;r++){const o=r*2.399,a=.5*Math.sqrt(r%11/11);e.shape(n,s,["#e8b35e","#d88f52","#bd6c51","#d3bd72"][r%4],Math.cos(o)*a,.15+r/28*.38,Math.sin(o)*a).rotation.set(-Math.PI/2+Math.sin(r)*.5,0,o)}return i.userData.activityArt={kind:"bank",fill:n},i}function Ay(i){const e=new mt,t=Ur(),n=[];t.mesh(e,new ct(.76,.7,.16,20),"#987555",0,.08),t.mesh(e,new ct(.65,.65,.025,20),"#745f4a",0,.18),t.mesh(e,new wt(.72,.05,5,28),"#c1a176",0,.18).rotation.x=Math.PI/2;for(const s of[-1,1]){const r=Bt(e,s*.29,.18,0);n.push(r),t.stroke(r,"#7e9a6d",[[0,0,0],[s*.05,.45,0],[0,.82,0]],.025);for(const a of[-1,1]){const c=t.ball(r,"#96ad78",a*.14,.35,0,.18,.045,.075);c.rotation.z=a*.5}const o=Bt(r,0,.88,0);for(let a=0;a<5;a++){const c=a*Math.PI*2/5;t.ball(o,i,Math.cos(c)*.16,Math.sin(c)*.16,0,.13,.13,.085)}t.ball(o,"#fff0bd",0,0,.08,.09),t.ball(o,"#66516a",-.025,.012,.165,.012),t.ball(o,"#66516a",.025,.012,.165,.012)}return e.userData.activityArt={kind:"bed",moving:n},e}function wy(i){let e=null;return i.kind==="guest"?e=by():i.kind==="shadow"?e=Ey():i.kind==="marker"&&(i.data?.role==="prop"?e=Ty(Number(i.data.prop)||0):i.data?.role==="bank"?e=Cy():i.data?.role==="bed"&&(e=Ay(i.color||"#d4b7d7"))),e&&(e.name=`activity-${i.id}`,e.userData.kind=i.kind,fd(e,i,0)),e}function fd(i,e,t){const n=i.userData.activityArt;if(!n)return;const s=e.data||{};if(n.kind==="guest"){const r=String(s.animal||"ghost").toLowerCase(),o=!!s.delighted;for(const[c,l]of Object.entries(n.variants))l.visible=c===(n.variants[r]?r:"ghost");n.body.position.y=o?Math.abs(Math.sin(t*7))*.14:Math.sin(t*2)*.018,n.body.rotation.z=Math.sin(t*(o?7:1.8))*(o?.07:.015);for(const c of n.arms)c.rotation.z=Number(c.userData.side)*(o?-1.1+Math.sin(t*11)*.3:.12);const a=Math.sin(t*1.6)>.993?.15:1;for(const c of n.eyes)c.scale.y=.067*a;n.accents[0].visible=o,n.accents[0].rotation.y=t*.7}else if(n.kind==="prop"){const r=!!s.performing,o=!!s.selected;if(n.ring.visible=o||r,n.ring.scale.setScalar(1+(r?Math.sin(t*6)*.07:0)),n.body.rotation.z=r?Math.sin(t*11)*.065:0,n.prop===0)n.moving[0].rotation.z=r?Math.sin(t*10)*.12:0,n.moving[1].visible=r,n.moving[1].children.forEach((a,c)=>{a.position.x=.56+Math.sin(t*3+c)*.1,a.scale.setScalar(.7+(t*.5+c*.25)%.5)});else if(n.prop===1)for(const a of n.moving)a.rotation.z=r?Math.sin(t*7)*Number(a.userData.side)*.24:0;else if(n.prop===2)n.moving.forEach((a,c)=>{a.position.y=.88-(r?Math.max(0,Math.sin(t*15+c*1.7))*.065:0)});else for(const a of n.moving)a.rotation.y=r?Number(a.userData.side)*(.3+Math.sin(t*9)*.22):0}else if(n.kind==="shadow"){const r=Array.isArray(s.parts)?s.parts:[0,0,0];n.parts.forEach((a,c)=>a.forEach((l,h)=>{l.visible=h===Math.max(0,Math.min(2,Number(r[c])||0))}));const o=!!s.reveal;n.body.rotation.z=o?Math.sin(t*5)*.07:0,n.body.position.y=.45+(o?Math.abs(Math.sin(t*5))*.12:0);for(const a of n.parts[1])for(const c of a.children)c.rotation.z=o?Number(c.userData.side)*Math.sin(t*8)*.12:0}else if(n.kind==="bank"){const r=Math.max(0,Math.min(1,Number(s.filled)||0));n.fill.visible=r>0,n.fill.scale.y=.35+r,n.fill.children.forEach((o,a)=>{o.visible=a<Math.ceil(r*28)})}else if(n.kind==="bed"){const r=Number(s.filled)||0;n.moving.forEach((o,a)=>{o.scale.setScalar(r>a?1:.35),o.rotation.z=Math.sin(t*1.8+a*2)*(r>a?.07:.025)})}}const xo=i=>{const e={friends:'<circle cx="8" cy="8" r="3"/><path d="M2 20v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m1 3a5 5 0 0 1 5 5"/>',map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5Zm6-2v16m6-14v16"/>',sound:'<path d="m3 9 5 0 5-5v16l-5-5H3V9Zm14-2a7 7 0 0 1 0 10m3-13a11 11 0 0 1 0 16"/>',settings:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>'};return`<svg viewBox="0 0 24 24" aria-hidden="true">${e[i]||e.map}</svg>`},dd=document.querySelector("#app");dd.innerHTML=`<canvas id="scene" tabindex="0" aria-label="Hollowlight Village game world"></canvas><div class="vignette"></div>
<div class="hud" id="hud" hidden>
 <header class="topbar"><div class="brand"><div class="brand-mark" aria-hidden="true">✦</div><div><div class="brand-name">Hollowlight</div><div class="brand-sub">a little autumn world</div></div></div>
 <nav class="top-actions" aria-label="Game menu"><button class="pill" id="map-button">${xo("map")}<span class="text">Village journal</span><span class="kbd">M</span></button><button class="pill gold" id="friends-button">${xo("friends")}<span class="text">Bring a friend</span></button><button class="pill" id="sound-button" aria-label="Mute audio">${xo("sound")}</button><button class="pill" id="settings-button" aria-label="Settings">${xo("settings")}</button></nav></header>
 <div class="location-chip"><strong id="location-name">The village green</strong><span id="location-sub">the evening is yours</span></div>
 <div class="festival-meter"><div class="eyebrow">Tonight's little festival</div><div class="festival-caption" id="festival-caption">A little magic starts with you.</div><div class="lanterns" id="lanterns" aria-label="Festival progress">${cn.map(i=>`<div class="lantern-dot" data-stamp="${i.id}" title="${i.name}"></div>`).join("")}</div></div>
 <div class="map-target" id="map-target" hidden></div>
 <div class="toast" id="toast" role="status" aria-live="polite"></div><div class="host-paused" id="host-paused" hidden role="status">The host has stepped away. Your village resumes when they return.</div>
 <button class="prompt-card" id="prompt-card" hidden><span class="kbd">E</span><span><strong id="prompt-name"></strong><small>Wander in &amp; play a little</small></span><span>↗</span></button>
 <section class="activity-card" id="activity-card" hidden aria-label="Current activity"><div class="activity-heading"><h2 id="activity-title"></h2><button class="close-activity" id="exit-activity" aria-label="Leave activity">×</button></div><p class="instruction" id="activity-instruction"></p><p class="progress" id="activity-progress"></p><div class="choices" id="activity-choices"></div></section>
 <div class="bottom-controls"><span class="control-pair"><span class="kbd">W A S D</span> wander</span><span class="control-pair"><span class="kbd">E</span> interact</span><span class="control-pair"><span class="kbd">SPACE</span> play</span><span class="control-pair optional"><span class="kbd">Q</span> leave activity</span></div>
 <button class="minimap" id="minimap-button" aria-label="Open village journal"><svg id="minimap" viewBox="-39 -35 78 70" role="img" aria-label="Village map"></svg></button><div class="session-badge" id="session-badge">A little time to yourself</div>
</div>
<section class="intro" id="intro"><div class="intro-content"><div class="eyebrow">You're warmly invited</div><h1>Hollowlight<span>a little autumn world.</span></h1><p class="intro-copy">A pocket of pumpkin light, rustling leaves,<br>and wonderfully small adventures.<br>Wander a while. Bring someone along.</p><div class="name-field"><label for="player-name">Your name</label><input id="player-name" type="text" maxlength="18" value="Little Wanderer" autocomplete="off" spellcheck="false"/></div><div class="swatches"><span>A scarf for the evening</span>${["#ce735e","#8eac9a","#d6a64f","#ac91c2","#7ea6c4"].map((i,e)=>`<button class="swatch ${e===0?"selected":""}" style="background:${i}" data-color="${i}" aria-label="${["Maple","Sage","Honey","Lavender","Blue"][e]} scarf" aria-pressed="${e===0}"></button>`).join("")}</div><button class="play-button" id="play-button"><span>Step into the village</span><span class="arrow">→</span></button><span class="intro-note">8 little adventures · solo or with friends · no rush</span><p class="loading" id="loading">Lighting the lanterns…</p></div><div class="intro-footer">MADE FOR LONG EVENINGS &amp; GOOD COMPANY</div><div class="intro-right-caption">A whole village of little things.<small>Autumn has a way of bringing us together</small></div></section>
<div class="modal-backdrop" id="modal-backdrop" hidden><section class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"></section></div>
<div class="celebration" id="celebration" hidden><div><div class="eyebrow">A little wonder, together</div><h2 id="celebration-title">The village is waking up.</h2><p id="celebration-copy">Three lights. So many little adventures left.</p></div></div>`;const Ce=i=>document.getElementById(i),mi=Ce("scene");let ei;try{ei=new Tx({canvas:mi,antialias:!0,powerPreference:"high-performance"})}catch{throw dd.innerHTML='<div class="error-screen"><div><h1>The lanterns need a little help.</h1><p>This game needs WebGL graphics. Try a recent Chrome, Edge, or Firefox browser with hardware acceleration enabled.</p></div></div>',new Error("WebGL unavailable")}ei.setPixelRatio(Math.min(window.devicePixelRatio,1.6));ei.setSize(innerWidth,innerHeight);ei.outputColorSpace=Zt;ei.toneMapping=ol;ei.toneMappingExposure=1.02;ei.shadowMap.enabled=!0;ei.shadowMap.type=Cu;const En=new qp;En.background=new Ze("#70647f");En.fog=new vl("#70647f",70,130);En.add(new Nm("#e6d2ea","#514563",1.5));const In=new mf("#ffbf88",2.5);In.position.set(-25,48,18);In.castShadow=!0;In.shadow.mapSize.set(2048,2048);In.shadow.camera.left=-48;In.shadow.camera.right=48;In.shadow.camera.top=44;In.shadow.camera.bottom=-44;In.shadow.camera.near=1;In.shadow.camera.far=120;In.shadow.bias=-5e-4;In.shadow.normalBias=.06;En.add(In);const pd=new mf("#afa5e4",.9);pd.position.set(22,13,-27);En.add(pd);for(const[i,e]of[[0,0],[21,12],[-19,16],[0,-25]]){const t=new Om("#ffc076",8,13,1.4);t.position.set(i,3,e),En.add(t)}const Wt=new Yo(-30,30,22,-22,.1,180),yo=new P(0,0,2),Ry=new P(25,34,31),Nr=new Px(ei);Nr.addPass(new Dx(En,Wt));Nr.addPass(new Gs(new ie(innerWidth,innerHeight),.26,.45,1.05));Nr.addPass(new Lx);const xu=kx(En),Xt=new Gx;let Lt="solo-"+crypto.randomUUID().slice(0,8),Qi=localStorage.getItem("hollowlight-name")||"Little Wanderer",Jn=localStorage.getItem("hollowlight-color")||"#ce735e";/^#[0-9a-f]{6}$/i.test(Jn)||(Jn="#ce735e");Ce("player-name").value=Qi;document.querySelectorAll(".swatch").forEach(i=>{i.classList.toggle("selected",i.dataset.color===Jn),i.setAttribute("aria-pressed",String(i.dataset.color===Jn)),i.onclick=()=>{Jn=i.dataset.color,document.querySelectorAll(".swatch").forEach(e=>{e.classList.toggle("selected",e===i),e.setAttribute("aria-pressed",String(e===i))})}});let Li=!1,ot=null,rn=null,$i=!1,Qc=!1,Ir=!1,Nl="Solo",is=!1,Ji=null,ci=0,qa=null,es=localStorage.getItem("hollowlight-reduced")==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches,el=null,tl="",nl=0,Uo="",yu,Ya=0,hr=0,ja=0,Ja=0,Su=performance.now(),Gn=0;const zt=new Sy,on=new Set;let Ai=null;Ce("sound-button").setAttribute("aria-label",zt.muted?"Unmute audio":"Mute audio");Ce("sound-button").style.opacity=zt.muted?".55":"1";let Hn={x:0,z:0};const Mu=new Hm,Py=new Ti(new P(0,1,0),0),ur=new Map,So=new Map,fr=new Map,md=new mt;En.add(md);function il(i,e="#fff3dc",t="#3c2f48d9"){const n=document.createElement("canvas");n.width=512,n.height=96;const s=n.getContext("2d");s.font='500 30px "DM Sans",sans-serif';const r=Math.min(500,s.measureText(i).width+38);s.fillStyle=t,s.beginPath(),s.roundRect((512-r)/2,8,r,68,20),s.fill(),s.fillStyle=e,s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,43,465);const o=new Bc(n);o.colorSpace=Zt;const a=new ef(new Ku({map:o,transparent:!0,depthTest:!1}));return a.scale.set(6.8,1.275,1),a.renderOrder=10,a}const bu=cn.map(i=>{const e=il(i.name);return e.position.set(i.x,3.5,i.z),En.add(e),{station:i,sprite:e}}),Di=new mt,gd=new at(new wt(1.1,.055,8,48),new mn({color:"#fff0bd",transparent:!0,opacity:.8}));gd.rotation.x=-Math.PI/2;Di.add(gd);const Zo=new at(new pi(.24,.6,4),new mn({color:"#fff0bd"}));Zo.position.y=3;Zo.rotation.z=Math.PI;Di.add(Zo);En.add(Di);Di.visible=!1;function Dy(i){const e=wy(i);if(e)return e;let t;switch(i.kind){case"pumpkin":t=bf(1);break;case"leaf":t=Fx(i.color||"#dc9a52");break;case"boat":t=Ox();break;case"guest":t=Nx();break;case"ember":{const n=new mt,s=new at(new jn(.17,10,8),new mn({color:i.color||"#ffe0a0"}));n.add(s);const r=new at(new jn(.3,10,8),new mn({color:i.color||"#ffe0a0",transparent:!0,opacity:.18,depthWrite:!1}));n.add(r),t=n;break}case"parcel":{const n=new mt,s=new at(new _n(.6,.5,.5),new bn({color:"#d5b380",roughness:.9}));s.position.y=.25,s.castShadow=!0,n.add(s);const r=new at(new _n(.64,.06,.53),new bn({color:"#b4615d"}));r.position.y=.26,n.add(r),t=n;break}case"tile":{const n=new mt,s=new at(new _n(1.47,.18,1.47),new bn({color:i.color||"#786c58"}));s.position.y=.04,s.receiveShadow=!0,n.add(s),t=n;break}case"shadow":{t=new at(new jn(.5,16,12),new bn({color:i.color||"#80718b",roughness:1})),t.scale.set(1,1.3,.3);break}default:{t=new at(new wt(.55,.055,6,32),new mn({color:i.color||"#ffe2a1",transparent:!0,opacity:.8})),t.rotation.x=-Math.PI/2;break}}return t.userData.kind=i.kind,t.userData.sharedFactory=["pumpkin","leaf","boat","guest"].includes(i.kind),t}function Ps(i){i.traverse(e=>{if(e instanceof at||e instanceof ef){if(i.userData.sharedFactory&&e instanceof at){e.geometry.userData.sharedGeometry||e.geometry.dispose();return}e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map?.dispose(),n.dispose()})}}),i.removeFromParent()}function Iy(i,e){const t=new Set;for(const s of i.entities){t.add(s.id);let r=ur.get(s.id);r&&s.kind==="leaf"&&r.userData.entityColor!==s.color&&(Ps(r),ur.delete(s.id),r=void 0),r||(r=Dy(s),r.userData.entityColor=s.color,ur.set(s.id,r),md.add(r),r.position.set(s.x,s.y??.12,s.z));const o=s.kind==="leaf"||s.kind==="ember"?1:Math.min(1,e*18);if(r.position.x=Ci.lerp(r.position.x,s.x,o),r.position.z=Ci.lerp(r.position.z,s.z,o),r.position.y=s.y??(s.kind==="ember"?1+Math.sin(Gn*2+s.x)*.12:s.kind==="marker"?.07:.1),s.kind!=="marker"&&(r.rotation.y=s.rotation??0),s.scale!==void 0&&r.scale.setScalar(s.scale),s.kind==="guest"&&s.data?.animal&&(r.position.y=.08),fd(r,s,Gn),s.kind==="marker"&&r instanceof at&&s.color&&r.material.color.set(s.color),s.kind==="tile"&&s.data){const a=(s.data.connections||[]).join("")+s.data.connected+s.data.selected;if(r.userData.connection!==a){r.children.filter(l=>l.userData.path).forEach(l=>Ps(l)),r.children[0].material.color.set(s.data.selected?"#b59666":s.color||"#786c58");for(const l of s.data.connections||[]){const h=new at(new _n(l==="N"||l==="S"?.25:.8,.025,l==="N"||l==="S"?.8:.25),new mn({color:s.data.connected?"#f9d998":"#ddd0a1"}));h.position.set(l==="E"?.35:l==="W"?-.35:0,.15,l==="S"?.35:l==="N"?-.35:0),h.userData.path=!0,r.add(h)}r.userData.connection=a}r.rotation.y=0}if(s.label&&s.data?.role!=="trajectory"){let a=fr.get(s.id);(!a||a.userData.text!==s.label)&&(a&&Ps(a),a=il(s.label),a.userData.text=s.label,fr.set(s.id,a),En.add(a)),a.position.set(s.x,(s.y||0)+1.9,s.z);const c=i.players.find(l=>l.id===Lt);a.visible=!!i.active&&!!c&&Math.hypot(c.x-s.x,c.z-s.z)<19,a.scale.set(5.1,.956,1)}}for(const[s,r]of ur)t.has(s)||(Ps(r),ur.delete(s),fr.has(s)&&(Ps(fr.get(s)),fr.delete(s)));const n=new Set;for(const s of i.players){n.add(s.id);let r=So.get(s.id);if(!r){r=Mf(s.color),r.userData.sharedFactory=!0,r.scale.setScalar(1.2);const h=il(s.name);h.position.y=2,h.scale.set(3.8,.71,1),h.name="name",r.add(h),r.position.set(s.x,0,s.z),So.set(s.id,r),En.add(r)}r.position.x=Ci.lerp(r.position.x,s.x,Math.min(1,e*16)),r.position.z=Ci.lerp(r.position.z,s.z,Math.min(1,e*16));const o=!!s.moving;r.position.y=o&&!es?Math.abs(Math.sin(Gn*11))*.11:Math.sin(Gn*2.2)*.025;const a=o&&!es?Math.sin(Gn*11):0;r.userData.leftFoot.position.z=.065+a*.13,r.userData.rightFoot.position.z=.065-a*.13,r.userData.leftArm.rotation.x=a*.25,r.userData.rightArm.rotation.x=-a*.25,r.userData.scarf.rotation.x=a*.12;const c=Ci.euclideanModulo((s.heading||0)-r.rotation.y+Math.PI,Math.PI*2)-Math.PI;r.rotation.y+=c*Math.min(1,e*12);const l=r.getObjectByName("name");l&&(l.visible=s.id!==Lt)}for(const[s,r]of So)n.has(s)||(Ps(r),So.delete(s))}function Dn(i){i&&(Ce("toast").textContent=i,Ce("toast").classList.add("show"),clearTimeout(yu),yu=setTimeout(()=>Ce("toast").classList.remove("show"),4500))}function Wo(){return Xt.view(Lt)}function qn(i,e){if(!Li)return;const t={...Hn,...i?{action:i}:{},...e!==void 0?{choice:e}:{}};ot&&!ot.isHost?ot.sendInput(t):Xt.input(Lt,t),i&&zt.play(i==="primary"?"action":"open")}function Ly(i){const e=i.players.find(t=>t.id===Lt);return e?cn.map(t=>({s:t,d:Math.hypot(e.x-t.x,e.z-t.z)})).sort((t,n)=>t.d-n.d)[0]:null}function Uy(i){Ce("host-paused").hidden=!Ir||!ot;const e=i.completed.length;zt.setProgress(e),Ce("festival-caption").textContent=e===8?"The whole village is glowing.":e===0?"A little magic starts with you.":`${e} of 8 little wonders lit`,document.querySelectorAll("[data-stamp]").forEach(s=>s.classList.toggle("lit",i.completed.includes(s.dataset.stamp))),Ce("lanterns").setAttribute("aria-label",`${e} of 8 festival lights`);const t=Ly(i);if(Ce("location-name").textContent=t&&t.d<9?t.s.name:"The village green",Ce("location-sub").textContent=t&&t.d<9?t.s.subtitle:"the evening is yours",i.active){Ce("activity-card").hidden=!1,Ce("prompt-card").hidden=!0,Ce("activity-title").textContent=i.title,Ce("activity-instruction").textContent=i.instruction,Ce("activity-progress").textContent=i.progress;const s=JSON.stringify(i.choices);s!==Uo&&(Uo=s,Ce("activity-choices").replaceChildren(...i.choices.map(r=>{const o=document.createElement("button");o.className="choice";const a=document.createElement("b");a.textContent=String(r.value);const c=document.createElement("span");return c.textContent=r.label,o.append(a,c),o.onclick=l=>{qn(void 0,r.value),l.detail>0&&mi.focus()},o})))}else Ce("activity-card").hidden=!0,Ce("prompt-card").hidden=!t||t.d>6,t&&(Ce("prompt-name").textContent=t.s.name),Uo="";el!==i.active&&(el=i.active,Ai=null,i.active&&zt.play("open")),i.notification&&i.notification!==tl&&(tl=i.notification,Dn(i.notification),zt.play("collect")),e>nl&&(zt.play("success"),(e===3||e===8)&&(Ce("celebration-title").textContent=e===8?"You made a little magic.":"The village is waking up.",Ce("celebration-copy").textContent=e===8?"Every lantern lit. Every adventure yours to revisit.":"Three lights. So many little adventures left.",Ce("celebration").hidden=!1,setTimeout(()=>Ce("celebration").hidden=!0,5e3)),nl=e),Ce("session-badge").textContent=ot?`${ot.isHost?"Hosting":"Together in"} ${ot.roomCode} · ${i.players.length}/4 friends`:"A little time to yourself";const n=Ce("minimap");if(n.innerHTML='<path d="M-19-15 0 0 20-14M0 0 21 14M0 0-19 16M0 0 0 22M0 0-29 0M0 0 0-25" fill="none" stroke="#e1b57e" stroke-opacity=".3" stroke-width="1.5"/>'+cn.map(s=>`<circle cx="${s.x}" cy="${s.z}" r="${i.completed.includes(s.id)?2.6:1.8}" fill="${s.color}" opacity="${i.completed.includes(s.id)?1:.5}"/>`).join("")+i.players.map(s=>`<circle cx="${s.x}" cy="${s.z}" r="${s.id===Lt?2.1:1.5}" fill="${s.id===Lt?"#fff4dc":s.color}" stroke="#3d2b45" stroke-width=".6"/>`).join(""),Ji){const s=cn.find(r=>r.id===Ji);if(Di.visible=!0,Di.position.set(s.x,.1,s.z),Ce("map-target").hidden=!1,qa!==Ji){qa=Ji,Ce("map-target").replaceChildren();const r=document.createElement("span");r.textContent=`Follow the light → ${s.name}`;const o=document.createElement("button");o.textContent="×",o.setAttribute("aria-label","Clear destination"),o.onclick=()=>{Ji=null,mi.focus()},Ce("map-target").append(r,o)}}else Ce("map-target").hidden=!0,Di.visible=!1,qa=null}let _d=null;function ss(){is=!1,Ce("modal-backdrop").hidden=!0,on.clear(),_d?.focus()}function Fl(i,e,t=!1){on.clear(),Hn={x:0,z:0},qn(),is=!0,_d=document.activeElement,Ce("modal-backdrop").hidden=!1;const n=Ce("modal");n.classList.toggle("wide",t),n.innerHTML=`<button class="dismiss" id="dismiss-modal" aria-label="Close dialog">×</button><div class="eyebrow">Hollowlight village</div><h2 id="modal-title">${i}</h2>${e}`,Ce("dismiss-modal").onclick=ss,Ce("dismiss-modal").focus(),zt.play("open")}function Ol(){const i=Wo(),e={leaves:"❧",lake:"≈",parade:"☼",haunt:"♧",garden:"✿",post:"✉",forest:"♧",theatre:"☾"};Fl("An evening of little wonders",`<p>Eight places to play. No right order. Follow whatever catches your eye.</p><div class="map-grid">${cn.map(t=>`<button class="map-tile ${i.completed.includes(t.id)?"done":""}" data-destination="${t.id}"><span class="tile-icon" style="color:${t.color}">${e[t.id]}</span><strong>${t.name}</strong><small>${t.subtitle}</small></button>`).join("")}</div><div class="journal-footer"><span>${i.completed.length} / 8 festival lights</span><span>✦ A little magic, shared.</span></div><p class="map-note">Choose a place to mark the way. Completed activities can be played again.</p>`,!0),document.querySelectorAll("[data-destination]").forEach(t=>t.onclick=()=>{Ji=t.dataset.destination,ss(),Dn(`A little light will guide you to ${cn.find(n=>n.id===Ji).name}.`)})}function vd(){Fl("Make yourself comfortable",`<label class="settings-row">Music <input id="music-volume" type="range" min="0" max="1" step="0.05" value="${zt.musicVolume}" aria-label="Music volume"/></label><label class="settings-row">Little sounds <input id="effects-volume" type="range" min="0" max="1" step="0.05" value="${zt.effectsVolume}" aria-label="Effects volume"/></label><label class="settings-row">Gentler motion <input id="reduced-motion" type="checkbox" ${es?"checked":""}/></label><p>WASD or arrow keys to wander. E to visit an activity. Space to play. Q to leave. Number keys choose activity options. Click the ground to stroll there.</p><p>Progress is shared for this visit. Revisit any activity whenever you like.</p><button class="primary" id="return-village">Back to the evening</button>`);const i=()=>zt.setVolumes(Number(Ce("music-volume").value),Number(Ce("effects-volume").value));Ce("music-volume").oninput=i,Ce("effects-volume").oninput=i,Ce("reduced-motion").onchange=()=>{es=Ce("reduced-motion").checked,localStorage.setItem("hollowlight-reduced",String(es))},Ce("return-village").onclick=ss}function li(i){Nl=i;const e=document.getElementById("network-status");e&&(e.textContent=i)}function Xo(){return{...Xt.snapshot(),hostPaused:document.hidden}}function $o(){nl=Xt.view(Lt).completed.length,tl="",el=null,Uo="",Ai=null,on.clear()}function Tu(){const i=new _y({onHost:()=>li("Your village is open. Invite up to three friends."),onJoin:(e,t,n)=>{i!==ot&&i!==rn||(Xt.addPlayer(e,t,n),e!==i.id&&Dn(`${t} wandered into the village.`),i===ot&&i.isHost&&i.broadcast(Xo()))},onLeave:e=>{(i===ot||i===rn)&&Xt.removePlayer(e)},onInput:(e,t)=>{document.hidden?i===ot&&i.isHost&&i.broadcast(Xo()):Xt.input(e,t)},onSnapshot:e=>{if(!(i!==ot&&i!==rn))try{Xt.restore(e),Ir=!!e.hostPaused,Qc&&($o(),Qc=!1),Ir&&li("The host has stepped away. The village resumes when their game is visible.")}catch{Dn("That village sent an unreadable update. Returning to solo."),sl()}},onStatus:e=>{(i===ot||i===rn)&&li(e)},onError:e=>{i!==ot&&i!==rn||(li(e),Dn(e),i===ot&&sl())}});return i}function sl(){ci++,$i=!1;const i=rn;rn=null,i?.close();const e=ot;ot=null,Ir=!1,e?.close();const t=Xt.view(Lt),n=t.players.find(s=>s.id===Lt);t.players.filter(s=>s.id!==Lt).forEach(s=>Xt.removePlayer(s.id)),n||Xt.addPlayer(Lt,Qi,Jn),Xt.input(Lt,{x:0,z:0}),Nl="Solo",$o()}function xd(){Fl("Good company makes it warmer",`<p>Share a small autumn world with up to three friends. You can explore different corners and light the festival together.</p><button class="primary" id="host-room">${ot?"Show our invitation":"Open my village to friends"}</button><div class="room-result" id="room-result" hidden><strong id="room-code"></strong><p>Send this code or an invitation link to a friend.</p><button id="copy-invite">Copy invitation link</button></div><div class="divider">OR VISIT A FRIEND</div><label for="join-code" style="font-size:12px">Their village code</label><input id="join-code" type="text" placeholder="Eight little letters" maxlength="12" autocomplete="off" spellcheck="false"/><button class="primary" id="join-room">Visit their village →</button><p class="network-status" id="network-status" role="status"></p><p style="font-size:11px">The host keeps the game open and visible. Some school or workplace networks may block a connection. Solo play is always available.</p>${ot?'<button class="primary" id="leave-room">Continue on my own</button>':""}`),Ce("network-status").textContent=Nl;function i(){const t=document.getElementById("room-result"),n=document.getElementById("room-code"),s=document.getElementById("copy-invite");if(!ot||!t||!n||!s)return;t.hidden=!1,n.textContent=ot.roomCode;const r=ot.roomCode;s.onclick=async()=>{try{const o=new URL(location.href);o.search="",o.searchParams.set("room",r),await navigator.clipboard.writeText(o.href),s.textContent="Invitation copied"}catch{s.textContent="Copy the code above"}}}Ce("host-room").onclick=async()=>{if(ot){i();return}if($i)return;$i=!0;const t=++ci,n=Ce("host-room");n.disabled=!0,li("Opening the gate…");const s=Tu();rn=s;try{if(await s.host(Qi,Jn),t!==ci){s.close();return}const r=Lt;ot=s,rn=null,Lt=s.id,Xt.removePlayer(r),$o(),i(),Dn("Your village is open. Bring a friend from the invitation menu.")}catch(r){if(s.close(),t!==ci)return;rn===s&&(rn=null),Xt.removePlayer(s.id),li(r instanceof Error?r.message:"Could not open this village. Please try again.")}finally{t===ci&&($i=!1),n.disabled=!1}},Ce("join-room").onclick=async()=>{if($i)return;const t=Ce("join-code").value.trim();if(!t){li("Enter your friend’s village code first.");return}$i=!0;const n=++ci,s=Ce("join-room");s.disabled=!0,li("Following the lanterns…");const r=Tu();rn=r;try{if(await r.join(t,Qi,Jn),n!==ci){r.close();return}const o=Lt,a=ot;ot=r,rn=null,Lt=r.id,a?.close(),Xt.removePlayer(o),Qc=!0,Ir=!1,$o(),document.getElementById("join-code")&&ss(),Dn("Welcome to your friend’s little village.")}catch(o){if(r.close(),n!==ci)return;rn===r&&(rn=null),li(o instanceof Error?o.message:"That village could not be reached.")}finally{n===ci&&($i=!1),s.disabled=!1}};const e=document.getElementById("leave-room");e&&(e.onclick=()=>{sl(),ss(),Dn("A little time to yourself.")}),ot&&i()}Ce("play-button").onclick=()=>{if(Li)return;Qi=Ce("player-name").value.trim().slice(0,18)||"Little Wanderer",localStorage.setItem("hollowlight-name",Qi),localStorage.setItem("hollowlight-color",Jn),Xt.addPlayer(Lt,Qi,Jn),Li=!0,Ce("intro").hidden=!0,Ce("hud").hidden=!1,mi.focus(),zt.start().catch(()=>Dn("Sound is resting. Use the sound button to wake it.")),Dn("Welcome, little wanderer. Follow your curiosity.");const i=new URLSearchParams(location.search).get("room");i&&(xd(),Ce("join-code").value=i)};Ce("map-button").onclick=Ol;Ce("minimap-button").onclick=Ol;Ce("friends-button").onclick=xd;Ce("settings-button").onclick=vd;Ce("sound-button").onclick=()=>{zt.start(),zt.setMuted(!zt.muted),Ce("sound-button").setAttribute("aria-label",zt.muted?"Unmute audio":"Mute audio"),Ce("sound-button").style.opacity=zt.muted?".55":"1",Dn(zt.muted?"A quiet little evening.":"The village has its voice again.")};Ce("prompt-card").onclick=()=>{qn("interact"),mi.focus()};Ce("exit-activity").onclick=()=>{qn("secondary"),mi.focus()};Ce("modal-backdrop").addEventListener("click",i=>{i.target===Ce("modal-backdrop")&&ss()});window.addEventListener("keydown",i=>{Li&&!is&&["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(i.key.toLowerCase())&&!(i.target instanceof HTMLInputElement)&&mi.focus()});window.addEventListener("keydown",i=>{const e=i.target.tagName;if(is){if(i.key==="Escape"&&ss(),i.key==="Tab"){const n=Array.from(Ce("modal").querySelectorAll("button,input,[href]")).filter(o=>!o.hasAttribute("disabled")&&o.getClientRects().length>0);if(!n.length)return;const s=n[0],r=n[n.length-1];i.shiftKey&&document.activeElement===s?(i.preventDefault(),r.focus()):!i.shiftKey&&document.activeElement===r&&(i.preventDefault(),s.focus())}return}if(e==="INPUT"||e==="TEXTAREA"||!Li)return;const t=i.key.toLowerCase();e==="BUTTON"&&(t===" "||t==="enter")||([" ","arrowup","arrowdown","arrowleft","arrowright"].includes(t)&&i.preventDefault(),on.add(t),!i.repeat&&(t==="e"&&qn("interact"),t===" "&&qn("primary"),t==="q"&&qn("secondary"),t==="m"&&Ol(),t==="escape"&&vd(),/^[0-9]$/.test(t)&&qn(void 0,Number(t))))});window.addEventListener("keyup",i=>on.delete(i.key.toLowerCase()));window.addEventListener("blur",()=>{on.clear(),Hn={x:0,z:0},qn()});document.addEventListener("visibilitychange",()=>{on.clear(),Hn={x:0,z:0},qn(),ot?.isHost&&ot.broadcast(Xo())});mi.addEventListener("pointerdown",i=>{if(!Li||is||Wo().active==="lake")return;const e=new ie(i.clientX/innerWidth*2-1,-i.clientY/innerHeight*2+1);Mu.setFromCamera(e,Wt);const t=new P;Mu.ray.intersectPlane(Py,t)&&(Ai=t)});function yd(){ei.setSize(innerWidth,innerHeight),Nr.setSize(innerWidth,innerHeight);const i=Li?12:23;Wt.left=-i*innerWidth/innerHeight,Wt.right=i*innerWidth/innerHeight,Wt.top=i,Wt.bottom=-i,Wt.updateProjectionMatrix()}window.addEventListener("resize",yd);yd();mi.addEventListener("webglcontextlost",i=>{i.preventDefault(),Dn("The graphics took a little nap. Reload to return to the village.")});Ce("loading").textContent="The lanterns are lit. Come on in.";function Sd(i){const e=Math.min((i-Su)/1e3,.06);if(Su=i,Gn+=e,Li){let t=Wo();const n=t.players.find(c=>c.id===Lt);let s=(on.has("d")||on.has("arrowright")?1:0)-(on.has("a")||on.has("arrowleft")?1:0),r=(on.has("s")||on.has("arrowdown")?1:0)-(on.has("w")||on.has("arrowup")?1:0);if(is&&(s=0,r=0),(s||r)&&(Ai=null),t.active==="lake")Hn={x:s,z:r};else if(Ai&&n&&!is){const c=Ai.x-n.x,l=Ai.z-n.z,h=Math.hypot(c,l);h<.35?(Ai=null,Hn={x:0,z:0}):Hn={x:c/h,z:l/h}}else{const c=Math.hypot(s,r)||1;s/=c,r/=c,Hn={x:s*.778+r*.628,z:r*.778-s*.628}}if(hr+=e,!ot||ot.isHost){for(Xt.input(Lt,Hn),Ya+=e;Ya>=1/60;)Xt.update(1/60),Ya-=1/60;ot&&hr>=.065&&(ot.broadcast(Xo()),hr=0)}else hr>=.045&&(ot.sendInput(Hn),hr=0);t=Wo(),Iy(t,e),ja+=e,ja>.1&&(Uy(t),ja=0);const o=t.players.find(c=>c.id===Lt);o&&(yo.lerp(new P(o.x,0,o.z),1-Math.exp(-e*(es?12:4))),o.moving&&(Ja+=e,Ja>.28&&(zt.play("step"),Ja=0)));const a=t.active==="lake"?14:12;Wt.top=Ci.lerp(Wt.top,a,e*2),Wt.bottom=-Wt.top,Wt.left=-Wt.top*innerWidth/innerHeight,Wt.right=-Wt.left,Wt.updateProjectionMatrix();for(const{station:c,sprite:l}of bu)l.visible=!!o&&Math.hypot(c.x-o.x,c.z-o.z)<14&&!t.active;xu.update(e,Gn,t.completed.length)}else{yo.set(2,0,1),xu.update(e,Gn,0);for(const{sprite:t}of bu)t.visible=!1}Wt.position.copy(yo).add(Ry),Wt.lookAt(yo),Di.rotation.y=Gn*.25,Zo.position.y=3+(es?0:Math.sin(Gn*2)*.2),Nr.render(),requestAnimationFrame(Sd)}requestAnimationFrame(Sd);window.addEventListener("beforeunload",()=>ot?.close());
