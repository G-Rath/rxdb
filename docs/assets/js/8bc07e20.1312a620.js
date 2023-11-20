"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[1074],{7282:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(5893),n=t(1151);const s={title:"Capacitor Database",slug:"capacitor-database.html"},r="Capacitor Database",o={id:"capacitor-database",title:"Capacitor Database",description:"Capacitor is an open source native JavaScript runtime to build Web based Native apps. You can use it to create cross-platform iOS, Android, and Progressive Web Apps with the web technologies JavaScript, HTML, and CSS.",source:"@site/docs/capacitor-database.md",sourceDirName:".",slug:"/capacitor-database.html",permalink:"/capacitor-database.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/main/docs-src/docs/capacitor-database.md",tags:[],version:"current",frontMatter:{title:"Capacitor Database",slug:"capacitor-database.html"},sidebar:"tutorialSidebar",previous:{title:"What is a realtime database?",permalink:"/articles/realtime-database.html"},next:{title:"Electron Database",permalink:"/electron-database.html"}},c={},l=[{value:"Database Solutions for Capacitor",id:"database-solutions-for-capacitor",level:2},{value:"Preferences API",id:"preferences-api",level:3},{value:"Localstorage/IndexedDB/WebSQL",id:"localstorageindexeddbwebsql",level:3},{value:"SQLite",id:"sqlite",level:3},{value:"RxDB",id:"rxdb",level:3},{value:"Follow up",id:"follow-up",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"capacitor-database",children:"Capacitor Database"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://capacitorjs.com/",children:"Capacitor"})," is an open source native JavaScript runtime to build Web based Native apps. You can use it to create cross-platform iOS, Android, and Progressive Web Apps with the web technologies JavaScript, HTML, and CSS.\nIt is developed by the Ionic Team and provides a great alternative to create hybrid apps. Compared to ",(0,i.jsx)(a.a,{href:"/react-native-database.html",children:"React Native"}),", Capacitor is more Web-Like because the JavaScript runtime supports most Web APIs like IndexedDB, fetch,  and so on."]}),"\n",(0,i.jsx)(a.p,{children:"To read and write persistent data in Capacitor, there are multiple solutions which are shown in the following."}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"NOTICE:"})," You are reading this inside of the ",(0,i.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"})," documentation, so everything might be opinionated."]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/icons/capacitor.svg",alt:"Capacitor",width:"50"})}),"\n",(0,i.jsx)(a.h2,{id:"database-solutions-for-capacitor",children:"Database Solutions for Capacitor"}),"\n",(0,i.jsx)(a.h3,{id:"preferences-api",children:"Preferences API"}),"\n",(0,i.jsxs)(a.p,{children:["Capacitor comes with a native ",(0,i.jsx)(a.a,{href:"https://capacitorjs.com/docs/apis/preferences",children:"Preferences API"})," which is a simple, persistent key->value store for lightweight data, similar to the browsers localstorage or React Native ",(0,i.jsx)(a.a,{href:"/react-native-database.html#asyncstorage",children:"AsyncStorage"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["To use it, you first have to install it from npm ",(0,i.jsx)(a.code,{children:"npm install @capacitor/preferences"})," and then you can import it and write/read data.\nNotice that all calls to the preferences API are asynchronous so they return a ",(0,i.jsx)(a.code,{children:"Promise"})," that must be ",(0,i.jsx)(a.code,{children:"await"}),"-ed."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-ts",children:"import { Preferences } from '@capacitor/preferences';\n\n\n// write\nawait Preferences.set({\n  key: 'foo',\n  value: 'baar',\n});\n\n// read\nconst { value } = await Preferences.get({ key: 'foo' }); // > 'bar'\n\n// delete\nawait Preferences.remove({ key: 'foo' });\n"})}),"\n",(0,i.jsx)(a.p,{children:"The preferences API is good when only a small amount of data needs to be stored and when no query capabilities besides the key access are required. Complex queries or other features like indexes or replication are not supported which makes the preferences API not suitable for anything more then storing simple data like user settings."}),"\n",(0,i.jsx)(a.h3,{id:"localstorageindexeddbwebsql",children:"Localstorage/IndexedDB/WebSQL"}),"\n",(0,i.jsxs)(a.p,{children:["Since Capacitor apps run in a web view, Web APIs like IndexedDB, ",(0,i.jsx)(a.a,{href:"/articles/localstorage.html",children:"Localstorage"})," and WebSQL are available. But the default browser behavior is to clean up these storages regularly when they are not in use for a long time or the device is low on space. Therefore you cannot 100% rely on the persistence of the stored data and your application needs to expect that the data will be lost eventually."]}),"\n",(0,i.jsx)(a.p,{children:"Storing data in these storages can be done in browsers, because there is no other option. But in Capacitor iOS and Android, you should not rely on these."}),"\n",(0,i.jsx)(a.h3,{id:"sqlite",children:"SQLite"}),"\n",(0,i.jsx)(a.p,{children:"SQLite is a SQL based relational database written in C that was crafted to be embed inside of applications. Operations are written in the SQL query language and SQLite generally follows the PostgreSQL syntax."}),"\n",(0,i.jsx)(a.p,{children:"To use SQLite in Capacitor, there are three options:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["The ",(0,i.jsx)(a.a,{href:"https://github.com/capacitor-community/sqlite",children:"@capacitor-community/sqlite"})," package"]}),"\n",(0,i.jsxs)(a.li,{children:["The ",(0,i.jsx)(a.a,{href:"https://github.com/storesafe/cordova-sqlite-storage",children:"cordova-sqlite-storage"})," package"]}),"\n",(0,i.jsxs)(a.li,{children:["The non-free ",(0,i.jsx)(a.a,{href:"/articles/ionic-database.html",children:"Ionic"})," ",(0,i.jsx)(a.a,{href:"https://ionic.io/products/secure-storage",children:"Secure Storage"})," which comes at ",(0,i.jsx)(a.strong,{children:"999$"})," per month."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["It is recommended to use the ",(0,i.jsx)(a.code,{children:"@capacitor-community/sqlite"})," because it has the best maintenance and is open source. Install it first ",(0,i.jsx)(a.code,{children:"npm install --save @capacitor-community/sqlite"})," and then set the storage location for iOS apps:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-json",children:'{\n    "plugins": {\n        "CapacitorSQLite": {\n            "iosDatabaseLocation": "Library/CapacitorDatabase"\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(a.p,{children:"Now you can create a database connection and use the SQLite database."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-ts",children:"import { Capacitor } from '@capacitor/core';\nimport { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection, capSQLiteSet,\n         capSQLiteChanges, capSQLiteValues, capEchoResult, capSQLiteResult,\n         capNCDatabasePathResult } from '@capacitor-community/sqlite';\n\nconst sqlite = new SQLiteConnection(CapacitorSQLite);\nconst database: SQLiteDBConnection = await this.sqlite.createConnection(databaseName, encrypted, mode, version, readOnly);\nlet { rows } = database.query('SELECT somevalue FROM sometable');\n"})}),"\n",(0,i.jsx)(a.p,{children:"The downside of SQLite is that it is lacking many features that are handful when using a database together with an UI based application like your Capacitor app. For example it is not possible to observe queries or document fields. Also there is no realtime replication feature, you can only import json files. This makes SQLite a good solution when you just want to store data on the client, but when you want to sync data with a server or other clients or create big complex realtime applications, you have to use something else."}),"\n",(0,i.jsx)(a.h3,{id:"rxdb",children:"RxDB"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/logo/rxdb_javascript_database.svg",alt:"RxDB",width:"170"})}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"})," is an offline first, NoSQL database for JavaScript Applications like hybrid apps. Because it is reactive, you can subscribe to all state changes like the result of a query or even a single field of a document. This is great for UI-based realtime applications in a way that makes it easy to develop realtime applications like what you need in Capacitor."]}),"\n",(0,i.jsxs)(a.p,{children:["Because RxDB is made for Web applications, most of the ",(0,i.jsx)(a.a,{href:"/rx-storage.html",children:"available RxStorage"})," plugins can be used to store and query data in a Capacitor app. However it is recommended to use the ",(0,i.jsx)(a.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})," because it stores the data on the filesystem of the device, not in the JavaScript runtime (like IndexedDB). Storing data on the filesystem ensures it is persistent and will not be cleaned up by any process. Also the performance of SQLite is ",(0,i.jsx)(a.a,{href:"/rx-storage.html#performance-comparison",children:"much faster"})," compared to IndexedDB, because SQLite does not have to go through a browsers permission layers. For the SQLite binding you should use the ",(0,i.jsx)(a.a,{href:"https://github.com/capacitor-community/sqlite",children:"@capacitor-community/sqlite"})," package."]}),"\n",(0,i.jsxs)(a.p,{children:["Because the SQLite RxStorage is part of the ",(0,i.jsx)(a.a,{href:"/premium",children:"\ud83d\udc51 Premium Plugins"})," which must be purchased, it is recommended to use the ",(0,i.jsx)(a.a,{href:"/rx-storage-dexie.html",children:"Dexie.js RxStorage"})," while testing and prototyping your Capacitor app."]}),"\n",(0,i.jsxs)(a.p,{children:["To use the SQLite RxStorage in Capacitor you have to install all dependencies via ",(0,i.jsx)(a.code,{children:"npm install rxdb rxjs rxdb-premium @capacitor-community/sqlite"}),"."]}),"\n",(0,i.jsx)(a.p,{children:"For iOS apps you should add a database location in your Capacitor settings:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-json",children:'{\n    "plugins": {\n        "CapacitorSQLite": {\n            "iosDatabaseLocation": "Library/CapacitorDatabase"\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(a.p,{children:"Then you can assemble the RxStorage and create a database with it:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsCapacitor\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport {\n    CapacitorSQLite,\n    SQLiteConnection\n} from '@capacitor-community/sqlite';\nimport { Capacitor } from '@capacitor/core';\nconst sqlite = new SQLiteConnection(CapacitorSQLite);\n\n// create database\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsCapacitor(sqlite, Capacitor)\n    })\n});\n\n// create collections\nconst collections = await myRxDatabase.addCollections({\n    humans: {\n        /* ... */\n    }\n});\n\n// insert document\nawait collections.humans.insert({id: 'foo', name: 'bar'});\n\n// run a query\nconst result = await collections.humans.find({\n    selector: {\n        name: 'bar'\n    }\n}).exec();\n\n// observe a query\nawait collections.humans.find({\n    selector: {\n        name: 'bar'\n    }\n}).$.subscribe(result => {/* ... */});\n"})}),"\n",(0,i.jsx)(a.h2,{id:"follow-up",children:"Follow up"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["If you haven't done yet, you should start learning about RxDB with the ",(0,i.jsx)(a.a,{href:"/quickstart.html",children:"Quickstart Tutorial"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["There is a followup list of other ",(0,i.jsx)(a.a,{href:"/alternatives.html",children:"client side database alternatives"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var i=t(7294);const n={},s=i.createContext(n);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);