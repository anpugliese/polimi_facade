/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.110
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as N}from"./chunk-D3MZSVDY.js";import{a as z}from"./chunk-RC3J75N5.js";import{b as B}from"./chunk-OG7KJPIH.js";import"./chunk-JNTN7NAL.js";import{a as O}from"./chunk-7P3UWTUX.js";import{a as F}from"./chunk-GIF3NIGD.js";import{b as q,c as x,d as v}from"./chunk-7VHC7I6W.js";import{d as C}from"./chunk-VNH2ZAFU.js";import"./chunk-2YKWURU2.js";import{c as m}from"./chunk-TL76KVMB.js";import{a as y}from"./chunk-EK7K4JTS.js";import{a as M,b as Y,c as b}from"./chunk-TZVAMLG3.js";import{a as P}from"./chunk-7IOYEWZQ.js";import"./chunk-XE4KLUZ2.js";import"./chunk-TL6AL3PA.js";import{a as A}from"./chunk-DYKDQ7Q5.js";import{a as k}from"./chunk-57R6MEVR.js";import{e as S}from"./chunk-KNXNZS2Q.js";var j=new C,K=new C,Q=new M,X=new m;function V(t,e){let o=t._ellipsoid,g=e.height,r=e.width,d=e.northCap,h=e.southCap,a=g,w=2,u=0,E=4;d&&(w-=1,a-=1,u+=1,E-=2),h&&(w-=1,a-=1,u+=1,E-=2),u+=w*r+2*a-E;let i=new Float64Array(u*3),n=0,l=0,p,s=Q;if(d)N.computePosition(e,o,!1,l,0,s),i[n++]=s.x,i[n++]=s.y,i[n++]=s.z;else for(p=0;p<r;p++)N.computePosition(e,o,!1,l,p,s),i[n++]=s.x,i[n++]=s.y,i[n++]=s.z;for(p=r-1,l=1;l<g;l++)N.computePosition(e,o,!1,l,p,s),i[n++]=s.x,i[n++]=s.y,i[n++]=s.z;if(l=g-1,!h)for(p=r-2;p>=0;p--)N.computePosition(e,o,!1,l,p,s),i[n++]=s.x,i[n++]=s.y,i[n++]=s.z;for(p=0,l=g-2;l>0;l--)N.computePosition(e,o,!1,l,p,s),i[n++]=s.x,i[n++]=s.y,i[n++]=s.z;let T=i.length/3*2,R=O.createTypedArray(i.length/3,T),c=0;for(let H=0;H<i.length/3-1;H++)R[c++]=H,R[c++]=H+1;R[c++]=i.length/3-1,R[c++]=0;let f=new x({attributes:new F,primitiveType:q.LINES});return f.attributes.position=new v({componentDatatype:y.DOUBLE,componentsPerAttribute:3,values:i}),f.indices=R,f}function Z(t,e){let o=t._surfaceHeight,g=t._extrudedHeight,r=t._ellipsoid,d=g,h=o,a=V(t,e),w=e.height,u=e.width,E=B.scaleToGeodeticHeight(a.attributes.position.values,h,r,!1),i=E.length,n=new Float64Array(i*2);n.set(E);let l=B.scaleToGeodeticHeight(a.attributes.position.values,d,r);n.set(l,i),a.attributes.position.values=n;let p=e.northCap,s=e.southCap,T=4;p&&(T-=1),s&&(T-=1);let R=(n.length/3+T)*2,c=O.createTypedArray(n.length/3,R);i=n.length/6;let f=0;for(let _=0;_<i-1;_++)c[f++]=_,c[f++]=_+1,c[f++]=_+i,c[f++]=_+i+1;c[f++]=i-1,c[f++]=0,c[f++]=i+i-1,c[f++]=i,c[f++]=0,c[f++]=i;let H;if(p)H=w-1;else{let _=u-1;c[f++]=_,c[f++]=_+i,H=u+w-2}if(c[f++]=H,c[f++]=H+i,!s){let _=u+H-1;c[f++]=_,c[f]=_+i}return a.indices=c,a}function D(t){t=A(t,A.EMPTY_OBJECT);let e=t.rectangle,o=A(t.granularity,P.RADIANS_PER_DEGREE),g=A(t.ellipsoid,b.WGS84),r=A(t.rotation,0);if(!S(e))throw new k("rectangle is required.");if(m.validate(e),e.north<e.south)throw new k("options.rectangle.north must be greater than options.rectangle.south");let d=A(t.height,0),h=A(t.extrudedHeight,d);this._rectangle=m.clone(e),this._granularity=o,this._ellipsoid=g,this._surfaceHeight=Math.max(d,h),this._rotation=r,this._extrudedHeight=Math.min(d,h),this._offsetAttribute=t.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}D.packedLength=m.packedLength+b.packedLength+5;D.pack=function(t,e,o){if(!S(t))throw new k("value is required");if(!S(e))throw new k("array is required");return o=A(o,0),m.pack(t._rectangle,e,o),o+=m.packedLength,b.pack(t._ellipsoid,e,o),o+=b.packedLength,e[o++]=t._granularity,e[o++]=t._surfaceHeight,e[o++]=t._rotation,e[o++]=t._extrudedHeight,e[o]=A(t._offsetAttribute,-1),e};var J=new m,W=b.clone(b.UNIT_SPHERE),L={rectangle:J,ellipsoid:W,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};D.unpack=function(t,e,o){if(!S(t))throw new k("array is required");e=A(e,0);let g=m.unpack(t,e,J);e+=m.packedLength;let r=b.unpack(t,e,W);e+=b.packedLength;let d=t[e++],h=t[e++],a=t[e++],w=t[e++],u=t[e];return S(o)?(o._rectangle=m.clone(g,o._rectangle),o._ellipsoid=b.clone(r,o._ellipsoid),o._surfaceHeight=h,o._rotation=a,o._extrudedHeight=w,o._offsetAttribute=u===-1?void 0:u,o):(L.granularity=d,L.height=h,L.rotation=a,L.extrudedHeight=w,L.offsetAttribute=u===-1?void 0:u,new D(L))};var $=new Y;D.createGeometry=function(t){let e=t._rectangle,o=t._ellipsoid,g=N.computeOptions(e,t._granularity,t._rotation,0,X,$),r,d;if(P.equalsEpsilon(e.north,e.south,P.EPSILON10)||P.equalsEpsilon(e.east,e.west,P.EPSILON10))return;let h=t._surfaceHeight,a=t._extrudedHeight,w=!P.equalsEpsilon(h,a,0,P.EPSILON2),u;if(w){if(r=Z(t,g),S(t._offsetAttribute)){let n=r.attributes.position.values.length/3,l=new Uint8Array(n);t._offsetAttribute===z.TOP?l=l.fill(1,0,n/2):(u=t._offsetAttribute===z.NONE?0:1,l=l.fill(u)),r.attributes.applyOffset=new v({componentDatatype:y.UNSIGNED_BYTE,componentsPerAttribute:1,values:l})}let E=C.fromRectangle3D(e,o,h,K),i=C.fromRectangle3D(e,o,a,j);d=C.union(E,i)}else{if(r=V(t,g),r.attributes.position.values=B.scaleToGeodeticHeight(r.attributes.position.values,h,o,!1),S(t._offsetAttribute)){let E=r.attributes.position.values.length;u=t._offsetAttribute===z.NONE?0:1;let i=new Uint8Array(E/3).fill(u);r.attributes.applyOffset=new v({componentDatatype:y.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}d=C.fromRectangle3D(e,o,h)}return new x({attributes:r.attributes,indices:r.indices,primitiveType:q.LINES,boundingSphere:d,offsetAttribute:t._offsetAttribute})};var U=D;function G(t,e){return S(e)&&(t=U.unpack(t,e)),t._ellipsoid=b.clone(t._ellipsoid),t._rectangle=m.clone(t._rectangle),U.createGeometry(t)}var Ht=G;export{Ht as default};
