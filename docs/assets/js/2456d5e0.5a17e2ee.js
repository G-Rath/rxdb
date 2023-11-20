"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[4136],{8722:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=t(5893),s=t(1151);const r={title:"RxDatabase",slug:"rx-database.html"},i="RxDatabase",o={id:"rx-database",title:"RxDatabase",description:"A RxDatabase-Object contains your collections and handles the synchronization of change-events.",source:"@site/docs/rx-database.md",sourceDirName:".",slug:"/rx-database.html",permalink:"/rx-database.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/main/docs-src/docs/rx-database.md",tags:[],version:"current",frontMatter:{title:"RxDatabase",slug:"rx-database.html"},sidebar:"tutorialSidebar",previous:{title:"Dev-Mode Plugin",permalink:"/dev-mode.html"},next:{title:"RxSchema",permalink:"/rx-schema.html"}},d={},l=[{value:"Creation",id:"creation",level:2},{value:"name",id:"name",level:3},{value:"storage",id:"storage",level:3},{value:"password",id:"password",level:3},{value:"multiInstance",id:"multiinstance",level:3},{value:"eventReduce",id:"eventreduce",level:3},{value:"ignoreDuplicate",id:"ignoreduplicate",level:3},{value:"Methods",id:"methods",level:2},{value:"Observe with $",id:"observe-with-",level:3},{value:"exportJSON()",id:"exportjson",level:3},{value:"importJSON()",id:"importjson",level:3},{value:"backup()",id:"backup",level:3},{value:"waitForLeadership()",id:"waitforleadership",level:3},{value:"requestIdlePromise()",id:"requestidlepromise",level:3},{value:"destroy()",id:"destroy",level:3},{value:"remove()",id:"remove",level:3},{value:"isRxDatabase",id:"isrxdatabase",level:3}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"rxdatabase",children:"RxDatabase"}),"\n",(0,n.jsx)(a.p,{children:"A RxDatabase-Object contains your collections and handles the synchronization of change-events."}),"\n",(0,n.jsx)(a.h2,{id:"creation",children:"Creation"}),"\n",(0,n.jsxs)(a.p,{children:["The database is created by the asynchronous ",(0,n.jsx)(a.code,{children:".createRxDatabase()"})," function of the core RxDB module. It has the following parameters:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\nconst db = await createRxDatabase({\n  name: 'heroesdb',                   // <- name\n  storage: getRxStorageDexie(),       // <- RxStorage\n\n  /* Optional parameters: */\n  password: 'myPassword',             // <- password (optional)\n  multiInstance: true,                // <- multiInstance (optional, default: true)\n  eventReduce: true,                  // <- eventReduce (optional, default: false)\n  cleanupPolicy: {}                   // <- custom cleanup policy (optional) \n});\n"})}),"\n",(0,n.jsx)(a.h3,{id:"name",children:"name"}),"\n",(0,n.jsxs)(a.p,{children:["The database-name is a string which uniquely identifies the database. When two RxDatabases have the same name and use the same ",(0,n.jsx)(a.code,{children:"RxStorage"}),", their data can be assumed as equal and they will share events between each other.\nDepending on the storage or adapter this can also be used to define the filesystem folder of your data."]}),"\n",(0,n.jsx)(a.h3,{id:"storage",children:"storage"}),"\n",(0,n.jsxs)(a.p,{children:["RxDB works on top of an implementation of the ",(0,n.jsx)(a.a,{href:"/rx-storage.html",children:"RxStorage"})," interface. This interface is an abstraction that allows you to use different underlying databases that actually handle the documents. Depending on your use case you might use a different ",(0,n.jsx)(a.code,{children:"storage"})," with different tradeoffs in performance, bundle size or supported runtimes."]}),"\n",(0,n.jsxs)(a.p,{children:["There are many ",(0,n.jsx)(a.code,{children:"RxStorage"})," implementations that can be used depending on the JavaScript environment and performance requirements.\nFor example you can use the ",(0,n.jsx)(a.a,{href:"/rx-storage-dexie.html",children:"Dexie RxStorage"})," in the browser or use the LokiJS storage with the filesystem adapter in Node.js."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/rx-storage.html",children:"List of RxStorage implementations"})}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"\n// use the Dexie.js RxStorage that stores data in IndexedDB.\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\nconst dbDexie = await createRxDatabase({\n  name: 'mydatabase',\n  storage: getRxStorageDexie()\n});\n\n\n// ...or use the LokiJS RxStorage with the indexeddb adapter.\nimport { getRxStorageLoki } from 'rxdb/plugins/storage-lokijs';\nconst LokiIncrementalIndexedDBAdapter = require('lokijs/src/incremental-indexeddb-adapter');\n\nconst dbLoki = await createRxDatabase({\n  name: 'mydatabase',\n  storage: getRxStorageLoki({\n    adapter: new LokiIncrementalIndexedDBAdapter()\n  })\n});\n"})}),"\n",(0,n.jsx)(a.h3,{id:"password",children:"password"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"(optional)"}),"\nIf you want to use encrypted fields in the collections of a database, you have to set a password for it. The password must be a string with at least 12 characters."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/encryption.html",children:"Read more about encryption here"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"multiinstance",children:"multiInstance"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"(optional=true)"}),"\nWhen you create more than one instance of the same database in a single javascript-runtime, you should set ",(0,n.jsx)(a.code,{children:"multiInstance"})," to ",(0,n.jsx)(a.code,{children:"true"}),". This will enable the event sharing between the two instances. For example when the user has opened multiple browser windows, events will be shared between them so that both windows react to the same changes.\n",(0,n.jsx)(a.code,{children:"multiInstance"})," should be set to ",(0,n.jsx)(a.code,{children:"false"})," when you have single-instances like a single Node.js-process, a react-native-app, a cordova-app or a single-window electron app which can decrease the startup time because no instance coordination has to be done."]}),"\n",(0,n.jsx)(a.h3,{id:"eventreduce",children:"eventReduce"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"(optional=false)"})}),"\n",(0,n.jsxs)(a.p,{children:["One big benefit of having a realtime database is that big performance optimizations can be done when the database knows a query is observed and the updated results are needed continuously. RxDB uses the ",(0,n.jsx)(a.a,{href:"https://github.com/pubkey/event-reduce",children:"EventReduce Algorithm"})," to optimize observer or recurring queries."]}),"\n",(0,n.jsxs)(a.p,{children:["For better performance, you should always set ",(0,n.jsx)(a.code,{children:"eventReduce: true"}),". This will also be the default in the next major RxDB version."]}),"\n",(0,n.jsx)(a.h3,{id:"ignoreduplicate",children:"ignoreDuplicate"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"(optional=false)"}),"\nIf you create multiple RxDatabase-instances with the same name and same adapter, it's very likely that you have done something wrong.\nTo prevent this common mistake, RxDB will throw an error when you do this.\nIn some rare cases like unit-tests, you want to do this intentional by setting ",(0,n.jsx)(a.code,{children:"ignoreDuplicate"})," to ",(0,n.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"const db1 = await createRxDatabase({\n  name: 'heroesdb',\n  storage: getRxStorageDexie(),\n  ignoreDuplicate: true\n});\nconst db2 = await createRxDatabase({\n  name: 'heroesdb',\n  storage: getRxStorageDexie(),\n  ignoreDuplicate: true // this create-call will not throw because you explicitly allow it\n});\n"})}),"\n",(0,n.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(a.h3,{id:"observe-with-",children:"Observe with $"}),"\n",(0,n.jsxs)(a.p,{children:["Calling this will return an ",(0,n.jsx)(a.a,{href:"http://reactivex.io/documentation/observable.html",children:"rxjs-Observable"})," which streams all write events of the ",(0,n.jsx)(a.code,{children:"RxDatabase"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"myDb.$.subscribe(changeEvent => console.dir(changeEvent));\n"})}),"\n",(0,n.jsx)(a.h3,{id:"exportjson",children:"exportJSON()"}),"\n",(0,n.jsxs)(a.p,{children:["Use this function to create a json-export from every piece of data in every collection of this database. You can pass ",(0,n.jsx)(a.code,{children:"true"})," as a parameter to decrypt the encrypted data-fields of your document."]}),"\n",(0,n.jsxs)(a.p,{children:["Before ",(0,n.jsx)(a.code,{children:"exportJSON()"})," and ",(0,n.jsx)(a.code,{children:"importJSON()"})," can be used, you have to add the ",(0,n.jsx)(a.code,{children:"json-dump"})," plugin."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { addRxPlugin } from 'rxdb';\nimport { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';\naddRxPlugin(RxDBJsonDumpPlugin);\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"myDatabase.exportJSON()\n  .then(json => console.dir(json));\n"})}),"\n",(0,n.jsx)(a.h3,{id:"importjson",children:"importJSON()"}),"\n",(0,n.jsx)(a.p,{children:"To import the json-dumps into your database, use this function."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"// import the dump to the database\nemptyDatabase.importJSON(json)\n  .then(() => console.log('done'));\n"})}),"\n",(0,n.jsx)(a.h3,{id:"backup",children:"backup()"}),"\n",(0,n.jsxs)(a.p,{children:["Writes the current (or ongoing) database state to the filesystem. ",(0,n.jsx)(a.a,{href:"/backup.html",children:"Read more"})]}),"\n",(0,n.jsx)(a.h3,{id:"waitforleadership",children:"waitForLeadership()"}),"\n",(0,n.jsxs)(a.p,{children:["Returns a Promise which resolves when the RxDatabase becomes ",(0,n.jsx)(a.a,{href:"/leader-election.html",children:"elected leader"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"requestidlepromise",children:"requestIdlePromise()"}),"\n",(0,n.jsxs)(a.p,{children:["Returns a promise which resolves when the database is in idle. This works similar to ",(0,n.jsx)(a.a,{href:"https://developer.mozilla.org/de/docs/Web/API/Window/requestIdleCallback",children:"requestIdleCallback"})," but tracks the idle-ness of the database instead of the CPU.\nUse this for semi-important tasks like cleanups which should not affect the speed of important tasks."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"\nmyDatabase.requestIdlePromise().then(() => {\n    // this will run at the moment the database has nothing else to do\n    myCollection.customCleanupFunction();\n});\n\n// with timeout\nmyDatabase.requestIdlePromise(1000 /* time in ms */).then(() => {\n    // this will run at the moment the database has nothing else to do\n    // or the timeout has passed\n    myCollection.customCleanupFunction();\n});\n\n"})}),"\n",(0,n.jsx)(a.h3,{id:"destroy",children:"destroy()"}),"\n",(0,n.jsxs)(a.p,{children:["Destroys the databases object-instance. This is to free up memory and stop all observers and replications.\nReturns a ",(0,n.jsx)(a.code,{children:"Promise"})," that resolves when the database is destroyed."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"await myDatabase.destroy();\n"})}),"\n",(0,n.jsx)(a.h3,{id:"remove",children:"remove()"}),"\n",(0,n.jsx)(a.p,{children:"Wipes all documents from the storage. Use this to free up disc space."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"await myDatabase.remove();\n// database instance is now gone\n\n// NOTICE: You can also clear a database without removing its instance\nimport { removeRxDatabase } from 'rxdb';\nremoveRxDatabase('mydatabasename', 'localstorage');\n"})}),"\n",(0,n.jsx)(a.h3,{id:"isrxdatabase",children:"isRxDatabase"}),"\n",(0,n.jsx)(a.p,{children:"Returns true if the given object is an instance of RxDatabase. Returns false if not."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { isRxDatabase } from 'rxdb';\nconst is = isRxDatabase(myObj);\n"})})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>i});var n=t(7294);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);