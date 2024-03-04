"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[9592],{9640:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(4848),r=i(8453);const o={title:"Firestore Replication",slug:"replication-firestore.html"},s="Replication with Firestore from Firebase",a={id:"replication-firestore",title:"Firestore Replication",description:"With the replication-firestore plugin you can do a two-way realtime replication",source:"@site/docs/replication-firestore.md",sourceDirName:".",slug:"/replication-firestore.html",permalink:"/replication-firestore.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Firestore Replication",slug:"replication-firestore.html"},sidebar:"tutorialSidebar",previous:{title:"WebRTC Replication",permalink:"/replication-webrtc.html"},next:{title:"NATS Replication",permalink:"/replication-nats.html"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Handling deletes",id:"handling-deletes",level:2},{value:"Do not set <code>enableIndexedDbPersistence()</code>",id:"do-not-set-enableindexeddbpersistence",level:2},{value:"Using the replication with an already existing Firestore Database State",id:"using-the-replication-with-an-already-existing-firestore-database-state",level:2},{value:"Filtered Replication",id:"filtered-replication",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"replication-with-firestore-from-firebase",children:"Replication with Firestore from Firebase"}),"\n",(0,n.jsxs)(t.p,{children:["With the ",(0,n.jsx)(t.code,{children:"replication-firestore"})," plugin you can do a two-way realtime replication\nbetween your client side ",(0,n.jsx)(t.a,{href:"./",children:"RxDB"})," Database and a ",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore",children:"Cloud Firestore"})," database that is hosted on the Firebase platform. It will use the ",(0,n.jsx)(t.a,{href:"/replication.html",children:"RxDB Replication Protocol"})," to manage the replication streams, error- and conflict handling."]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"./files/alternatives/firebase.svg",alt:"Firebase",height:"40"})}),"\n",(0,n.jsx)(t.p,{children:"Replicating your Firestore state to RxDB can bring multiple benefits compared to using the Firestore directly:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It can reduce your cloud fees because your queries run against the local state of the documents without touching a server and writes can be batched up locally and send to the backend in bulks. This is mostly the case for read heavy applications."}),"\n",(0,n.jsxs)(t.li,{children:["You can run complex NoSQL queries on your documents because you are not bound to the ",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/firestore/query-data/queries",children:"Firestore Query"})," handling. You can also use local indexes, ",(0,n.jsx)(t.a,{href:"/key-compression.html",children:"compression"})," and ",(0,n.jsx)(t.a,{href:"/encryption.html",children:"encryption"})," and do things like fulltext search, fully locally."]}),"\n",(0,n.jsxs)(t.li,{children:["Your application can be truly ",(0,n.jsx)(t.a,{href:"/offline-first.html",children:"Offline-First"})," because your data is stored in a client side database. In contrast Firestore by itself only provides options to support ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/firestore/docs/manage-data/enable-offline",children:"offline also"})," which more works like a cache and requires the user to be online at application start to run authentication."]}),"\n",(0,n.jsxs)(t.li,{children:["It reduces the vendor lock in because you can switch out the backend server afterwards without having to rebuild big parts of the application. RxDB supports replication plugins with multiple technologies and it is even easy to set up with your ",(0,n.jsx)(t.a,{href:"/replication.html",children:"custom backend"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["You can use sophisticated ",(0,n.jsx)(t.a,{href:"/replication.html#conflict-handling",children:"conflict resolution strategies"})," so you are not bound to the Firestore ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/a/47781502/3443137",children:"last-write-wins"})," strategy which is not suitable for many applications."]}),"\n",(0,n.jsx)(t.li,{children:"The initial load time of your application can be decreased because it will do an incremental replication on restarts."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"First initialize your Firestore database like you would do without RxDB."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import * as firebase from 'firebase/app';\nimport {\n    getFirestore,\n    collection\n} from 'firebase/firestore';\n\nconst projectId = 'my-project-id';\nconst app = firebase.initializeApp({\n    projectId,\n    databaseURL: 'http://localhost:8080?ns=' + projectId,\n    /* ... */\n});\nconst firestoreDatabase = getFirestore(app);\nconst firestoreCollection = collection(firestoreDatabase, 'my-collection-name');\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then you can start the replication by calling ",(0,n.jsx)(t.code,{children:"replicateFirestore()"})," on your ",(0,n.jsx)(t.a,{href:"/rx-collection.html",children:"RxCollection"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const replicationState = replicateFirestore(\n    {\n        collection: myRxCollection,\n        firestore: {\n            projectId,\n            database: firestoreDatabase,\n            collection: firestoreCollection\n        },\n        pull: {},\n        push: {},\n        /**\n         * Either do a live or a one-time replication\n         * [default=true]\n         */\n        live: true,\n        /**\n         * (optional) likely you should just use the default.\n         *\n         * In firestore it is not possible to read out\n         * the internally used write timestamp of a document.\n         * Even if we could read it out, it is not indexed which\n         * is required for fetch 'changes-since-x'.\n         * So instead we have to rely on a custom user defined field\n         * that contains the server time which is set by firestore via serverTimestamp()\n         * Notice that the serverTimestampField MUST NOT be part of the collections RxJsonSchema!\n         * [default='serverTimestamp']\n         */\n        serverTimestampField: 'serverTimestamp'\n    }\n);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To observe and cancel the replication, you can use any other methods from the ",(0,n.jsx)(t.a,{href:"/replication.html",children:"ReplicationState"})," like ",(0,n.jsx)(t.code,{children:"error$"}),", ",(0,n.jsx)(t.code,{children:"cancel()"})," and ",(0,n.jsx)(t.code,{children:"awaitInitialReplication()"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"handling-deletes",children:"Handling deletes"}),"\n",(0,n.jsxs)(t.p,{children:["RxDB requires you to never ",(0,n.jsx)(t.a,{href:"/replication.html#data-layout-on-the-server",children:"fully delete documents"}),". This is needed to be able to replicate the deletion state of a document to other instances. The firestore replication will set a boolean ",(0,n.jsx)(t.code,{children:"_deleted"})," field to all documents to indicate the deletion state. You can change this by setting a different ",(0,n.jsx)(t.code,{children:"deletedField"})," in the sync options."]}),"\n",(0,n.jsxs)(t.h2,{id:"do-not-set-enableindexeddbpersistence",children:["Do not set ",(0,n.jsx)(t.code,{children:"enableIndexedDbPersistence()"})]}),"\n",(0,n.jsxs)(t.p,{children:["Firestore has the ",(0,n.jsx)(t.code,{children:"enableIndexedDbPersistence()"})," feature which caches document states locally to IndexedDB. This is not needed when you replicate your Firestore with RxDB because RxDB itself will store the data locally already."]}),"\n",(0,n.jsx)(t.h2,{id:"using-the-replication-with-an-already-existing-firestore-database-state",children:"Using the replication with an already existing Firestore Database State"}),"\n",(0,n.jsxs)(t.p,{children:["If you have not used RxDB before and you already have documents inside of your Firestore database, you have\nto manually set the ",(0,n.jsx)(t.code,{children:"_deleted"})," field to ",(0,n.jsx)(t.code,{children:"false"})," and the ",(0,n.jsx)(t.code,{children:"serverTimestamp"})," to all existing documents."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import {\n    getDocs,\n    query,\n    serverTimestamp\n} from 'firebase/firestore';\nconst allDocsResult = await getDocs(query(firestoreCollection));\nallDocsResult.forEach(doc => {\n    doc.update({\n        _deleted: false,\n        serverTimestamp: serverTimestamp()\n    })\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Also notice that if you do writes from non-RxDB applications, you have to keep these fields in sync. It is recommended to use the ",(0,n.jsx)(t.a,{href:"https://firebase.google.com/docs/functions/firestore-events",children:"Firestore triggers"})," to ensure that."]}),"\n",(0,n.jsx)(t.h2,{id:"filtered-replication",children:"Filtered Replication"}),"\n",(0,n.jsxs)(t.p,{children:["You might need to replicate only a subset of your collection, either to or from Firestore. You can achieve this using ",(0,n.jsx)(t.code,{children:"push.filter"})," and ",(0,n.jsx)(t.code,{children:"pull.filter"})," options."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const replicationState = replicateFirestore(\n    {\n        collection: myRxCollection,\n        firestore: {\n            projectId,\n            database: firestoreDatabase,\n            collection: firestoreCollection\n        },\n        pull: {\n            filter: [\n                where('ownerId', '==', userId)\n            ]\n        },\n        push: {\n            filter: (item) => item.syncEnabled === true\n        }\n    }\n);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Keep in mind that you can not use inequality operators ",(0,n.jsx)(t.code,{children:"(<, <=, !=, not-in, >, or >=)"})," in ",(0,n.jsx)(t.code,{children:"pull.filter"})," since that would cause a conflict with ordering by ",(0,n.jsx)(t.code,{children:"serverTimestamp"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);