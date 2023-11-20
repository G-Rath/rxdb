"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[1254],{1341:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(5893),t=n(1151);const s={title:"RxDB as a Database in an Angular Application",slug:"angular-database.html",description:"Discover the RxDB Revolution for Angular Apps! \ud83d\ude80 Learn how to supercharge your web applications with RxDB's reactive, offline-first database capabilities. Master real-time data synchronization and build ultra-responsive Angular applications. Click now for expert tips and techniques that will elevate your development game!"},r="RxDB as a Database in an Angular Application",o={id:"articles/angular-database",title:"RxDB as a Database in an Angular Application",description:"Discover the RxDB Revolution for Angular Apps! \ud83d\ude80 Learn how to supercharge your web applications with RxDB's reactive, offline-first database capabilities. Master real-time data synchronization and build ultra-responsive Angular applications. Click now for expert tips and techniques that will elevate your development game!",source:"@site/docs/articles/angular-database.md",sourceDirName:"articles",slug:"/articles/angular-database.html",permalink:"/articles/angular-database.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/main/docs-src/docs/articles/angular-database.md",tags:[],version:"current",frontMatter:{title:"RxDB as a Database in an Angular Application",slug:"angular-database.html",description:"Discover the RxDB Revolution for Angular Apps! \ud83d\ude80 Learn how to supercharge your web applications with RxDB's reactive, offline-first database capabilities. Master real-time data synchronization and build ultra-responsive Angular applications. Click now for expert tips and techniques that will elevate your development game!"},sidebar:"tutorialSidebar",previous:{title:"Alternatives for realtime offline-first JavaScript applications",permalink:"/alternatives.html"},next:{title:"RxDB - The benefits of Browser Databases",permalink:"/articles/browser-database.html"}},l={},c=[{value:"Angular Web Applications",id:"angular-web-applications",level:2},{value:"Importance of Databases in Angular Applications",id:"importance-of-databases-in-angular-applications",level:2},{value:"Introducing RxDB as a Database Solution",id:"introducing-rxdb-as-a-database-solution",level:2},{value:"Getting Started with RxDB",id:"getting-started-with-rxdb",level:2},{value:"What is RxDB?",id:"what-is-rxdb",level:3},{value:"Reactive Data Handling",id:"reactive-data-handling",level:3},{value:"Offline-First Approach",id:"offline-first-approach",level:3},{value:"Data Replication",id:"data-replication",level:3},{value:"Observable Queries",id:"observable-queries",level:3},{value:"Multi-Tab Support",id:"multi-tab-support",level:3},{value:"RxDB vs. Other Angular Database Options",id:"rxdb-vs-other-angular-database-options",level:3},{value:"Using RxDB in an Angular Application",id:"using-rxdb-in-an-angular-application",level:2},{value:"Installing RxDB in an Angular App",id:"installing-rxdb-in-an-angular-app",level:3},{value:"Patch Change Detection with zone.js",id:"patch-change-detection-with-zonejs",level:3},{value:"Use the Angular async pipe to observe an RxDB Query",id:"use-the-angular-async-pipe-to-observe-an-rxdb-query",level:3},{value:"Different RxStorage layers for RxDB",id:"different-rxstorage-layers-for-rxdb",level:3},{value:"Synchronizing Data with RxDB between Clients and Servers",id:"synchronizing-data-with-rxdb-between-clients-and-servers",level:2},{value:"Offline-First Approach",id:"offline-first-approach-1",level:3},{value:"Conflict Resolution",id:"conflict-resolution",level:3},{value:"Bidirectional Synchronization",id:"bidirectional-synchronization",level:3},{value:"Real-Time Updates",id:"real-time-updates",level:3},{value:"Advanced RxDB Features and Techniques",id:"advanced-rxdb-features-and-techniques",level:2},{value:"Indexing and Performance Optimization",id:"indexing-and-performance-optimization",level:3},{value:"Encryption of Local Data",id:"encryption-of-local-data",level:3},{value:"Change Streams and Event Handling",id:"change-streams-and-event-handling",level:3},{value:"JSON Key Compression",id:"json-key-compression",level:3},{value:"Best Practices for Using RxDB in Angular Applications",id:"best-practices-for-using-rxdb-in-angular-applications",level:2},{value:"Use Async Pipe for Subscriptions so you do not have to unsubscribe",id:"use-async-pipe-for-subscriptions-so-you-do-not-have-to-unsubscribe",level:3},{value:"Use Angular Services for Database creation",id:"use-angular-services-for-database-creation",level:3},{value:"Efficient Data Handling",id:"efficient-data-handling",level:3},{value:"Data Synchronization Strategies",id:"data-synchronization-strategies",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Follow Up",id:"follow-up",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"rxdb-as-a-database-in-an-angular-application",children:"RxDB as a Database in an Angular Application"}),"\n",(0,i.jsxs)(a.p,{children:["In modern web development, Angular has emerged as a popular framework for building robust and scalable applications. As Angular applications often require persistent storage and efficient data handling, choosing the right database solution is crucial. One such solution is ",(0,i.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"}),", a reactive JavaScript database for the browser, node.js, and ",(0,i.jsx)(a.a,{href:"/articles/mobile-database.html",children:"mobile devices"}),". In this article, we will explore the integration of RxDB into an Angular application and examine its various features and techniques."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("a",{href:"https://rxdb.info/",children:(0,i.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript Angular Database",width:"220"})})}),"\n",(0,i.jsx)(a.h2,{id:"angular-web-applications",children:"Angular Web Applications"}),"\n",(0,i.jsx)(a.p,{children:"Angular is a powerful JavaScript framework developed and maintained by Google. It enables developers to build single-page applications (SPAs) with a modular and component-based approach. Angular provides a comprehensive set of tools and features for creating dynamic and responsive web applications."}),"\n",(0,i.jsx)(a.h2,{id:"importance-of-databases-in-angular-applications",children:"Importance of Databases in Angular Applications"}),"\n",(0,i.jsx)(a.p,{children:"Databases play a vital role in Angular applications by providing a structured and efficient way to store, retrieve, and manage data. Whether it's handling user authentication, caching data, or persisting application state, a robust database solution is essential for ensuring optimal performance and user experience."}),"\n",(0,i.jsx)(a.h2,{id:"introducing-rxdb-as-a-database-solution",children:"Introducing RxDB as a Database Solution"}),"\n",(0,i.jsxs)(a.p,{children:["RxDB stands for Reactive Database and is built on the principles of reactive programming. It combines the best features of ",(0,i.jsx)(a.a,{href:"/articles/in-memory-nosql-database.html",children:"NoSQL databases"})," with the power of reactive programming to provide a scalable and efficient database solution. RxDB offers seamless integration with Angular applications and brings several unique features that make it an attractive choice for developers."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/qHWrooWyCYg",title:"RxDB Angular Video",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,i.jsx)(a.h2,{id:"getting-started-with-rxdb",children:"Getting Started with RxDB"}),"\n",(0,i.jsx)(a.p,{children:"To begin our journey with RxDB, let's understand its key concepts and features."}),"\n",(0,i.jsx)(a.h3,{id:"what-is-rxdb",children:"What is RxDB?"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"})," is a client-side database that follows the principles of reactive programming. It is built on top of IndexedDB, the ",(0,i.jsx)(a.a,{href:"/articles/browser-database.html",children:"native browser database"}),", and leverages the RxJS library for reactive data handling. RxDB provides a simple and intuitive API for managing data and offers features like data replication, multi-tab support, and efficient query handling."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("a",{href:"https://rxdb.info/",children:(0,i.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript Angular Database",width:"220"})})}),"\n",(0,i.jsx)(a.h3,{id:"reactive-data-handling",children:"Reactive Data Handling"}),"\n",(0,i.jsx)(a.p,{children:"At the core of RxDB is the concept of reactive data handling. RxDB leverages observables and reactive streams to enable real-time updates and data synchronization. With RxDB, you can easily subscribe to data changes and react to them in a reactive and efficient manner."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"../files/animations/realtime.gif",alt:"realtime ui updates",width:"700"})}),"\n",(0,i.jsx)(a.h3,{id:"offline-first-approach",children:"Offline-First Approach"}),"\n",(0,i.jsx)(a.p,{children:"One of the standout features of RxDB is its offline-first approach. It allows you to build applications that can work seamlessly in offline scenarios. RxDB stores data locally and automatically synchronizes changes with the server when the network becomes available. This capability is particularly useful for applications that need to function in low-connectivity or unreliable network environments."}),"\n",(0,i.jsx)(a.h3,{id:"data-replication",children:"Data Replication"}),"\n",(0,i.jsx)(a.p,{children:"RxDB provides built-in support for data replication between clients and servers. This means you can synchronize data across multiple devices or instances of your application effortlessly. RxDB handles conflict resolution and ensures that data remains consistent across all connected clients."}),"\n",(0,i.jsx)(a.h3,{id:"observable-queries",children:"Observable Queries"}),"\n",(0,i.jsx)(a.p,{children:"RxDB offers a powerful querying mechanism with support for observable queries. This allows you to create dynamic queries that automatically update when the underlying data changes. By leveraging RxDB's observable queries, you can build reactive UI components that respond to data changes in real-time."}),"\n",(0,i.jsx)(a.h3,{id:"multi-tab-support",children:"Multi-Tab Support"}),"\n",(0,i.jsx)(a.p,{children:"RxDB provides out-of-the-box support for multi-tab scenarios. This means that if your Angular application is running in multiple browser tabs, RxDB automatically keeps the data in sync across all tabs. It ensures that changes made in one tab are immediately reflected in others, providing a seamless user experience."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"../files/multiwindow.gif",alt:"multi tab support",width:"450"})}),"\n",(0,i.jsx)(a.h3,{id:"rxdb-vs-other-angular-database-options",children:"RxDB vs. Other Angular Database Options"}),"\n",(0,i.jsx)(a.p,{children:"While there are other database options available for Angular applications, RxDB stands out with its reactive programming model, offline-first approach, and built-in synchronization capabilities. Unlike traditional SQL databases, RxDB's NoSQL-like structure and observables-based API make it well-suited for real-time applications and complex data scenarios."}),"\n",(0,i.jsx)(a.h2,{id:"using-rxdb-in-an-angular-application",children:"Using RxDB in an Angular Application"}),"\n",(0,i.jsx)(a.p,{children:"Now that we have a good understanding of RxDB and its features, let's explore how to integrate it into an Angular application."}),"\n",(0,i.jsx)(a.h3,{id:"installing-rxdb-in-an-angular-app",children:"Installing RxDB in an Angular App"}),"\n",(0,i.jsx)(a.p,{children:"To use RxDB in an Angular application, we first need to install the necessary dependencies. You can install RxDB using npm or yarn by running the following command:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"npm install rxdb --save\n"})}),"\n",(0,i.jsx)(a.p,{children:"Once installed, you can import RxDB into your Angular application and start using its API to create and manage databases."}),"\n",(0,i.jsx)(a.h3,{id:"patch-change-detection-with-zonejs",children:"Patch Change Detection with zone.js"}),"\n",(0,i.jsx)(a.p,{children:"Angular uses change detection to detect and update UI elements when data changes. However, RxDB's data handling is based on observables, which can sometimes bypass Angular's change detection mechanism. To ensure that changes made in RxDB are detected by Angular, we need to patch the change detection mechanism using zone.js. Zone.js is a library that intercepts and tracks asynchronous operations, including observables. By patching zone.js, we can make sure that Angular is aware of changes happening in RxDB."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-ts",children:"//> app.component.ts\n/**\n * IMPORTANT: RxDB creates rxjs observables outside of angulars zone\n * So you have to import the rxjs patch to ensure changedetection works correctly.\n * @link https://www.bennadel.com/blog/3448-binding-rxjs-observable-sources-outside-of-the-ngzone-in-angular-6-0-2.htm\n */\nimport 'zone.js/plugins/zone-patch-rxjs';\n"})}),"\n",(0,i.jsx)(a.h3,{id:"use-the-angular-async-pipe-to-observe-an-rxdb-query",children:"Use the Angular async pipe to observe an RxDB Query"}),"\n",(0,i.jsx)(a.p,{children:"Angular provides the async pipe, which is a convenient way to subscribe to observables and handle the subscription lifecycle automatically. When working with RxDB, you can use the async pipe to observe an RxDB query and bind the results directly to your Angular template. This ensures that the UI stays in sync with the data changes emitted by the RxDB query."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-ts",children:"    constructor(\n        private dbService: DatabaseService,\n        private dialog: MatDialog\n    ) {\n        this.heroes$ = this.dbService\n            .db.hero                // collection\n            .find({                 // query\n                selector: {},\n                sort: [{ name: 'asc' }]\n            })\n            .$;\n    }\n"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-html",children:'<ul *ngFor="let hero of heroes$ | async as heroes;">\n  <li>{{hero.name}}</li>\n</ul>\n'})}),"\n",(0,i.jsx)(a.h3,{id:"different-rxstorage-layers-for-rxdb",children:"Different RxStorage layers for RxDB"}),"\n",(0,i.jsx)(a.p,{children:"RxDB supports multiple storage layers for persisting data. Some of the available storage options include:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/rx-storage-dexie.html",children:"Dexie.js RxStorage"}),": Dexie.js is a minimalistic IndexedDB wrapper that provides a simple API for working with IndexedDB. RxDB leverages Dexie.js as its default storage layer."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/rx-storage-lokijs.html",children:"LokiJS RxStorage"}),": LokiJS is an in-memory document-oriented database that can also persist data to IndexedDB. RxDB integrates with LokiJS to provide an alternative storage option."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"}),": RxDB directly supports IndexedDB as a storage layer. IndexedDB is a low-level browser database that offers good performance and reliability."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/rx-storage-opfs.html",children:"OPFS RxStorage"}),": The OPFS ",(0,i.jsx)(a.a,{href:"/rx-storage.html",children:"RxStorage"})," for RxDB is built on top of the ",(0,i.jsx)(a.a,{href:"https://webkit.org/blog/12257/the-file-system-access-api-with-origin-private-file-system/",children:"File System Access API"})," which is available in ",(0,i.jsx)(a.a,{href:"https://caniuse.com/native-filesystem-api",children:"all modern browsers"}),". It provides an API to access a sandboxed private file system to persistently store and retrieve data.\nCompared to other persistend storage options in the browser (like ",(0,i.jsx)(a.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB"}),"), the OPFS API has a ",(0,i.jsx)(a.strong,{children:"way better performance"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/rx-storage-memory.html",children:"Memory RxStorage"}),": In addition to persistent storage options, RxDB also provides a memory-based storage layer. This is useful for testing or scenarios where you don't need long-term data persistence.\nYou can choose the storage layer that best suits your application's requirements and configure RxDB accordingly."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"synchronizing-data-with-rxdb-between-clients-and-servers",children:"Synchronizing Data with RxDB between Clients and Servers"}),"\n",(0,i.jsx)(a.p,{children:"Data replication between an Angular application and a server is a common requirement. RxDB simplifies this process and provides built-in support for data synchronization. Let's explore how to replicate data between an Angular application and a server using RxDB."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"../files/database-replication.png",alt:"database replication",width:"200"})}),"\n",(0,i.jsx)(a.h3,{id:"offline-first-approach-1",children:"Offline-First Approach"}),"\n",(0,i.jsxs)(a.p,{children:["One of the key strengths of RxDB is its ",(0,i.jsx)(a.a,{href:"/offline-first.html",children:"offline-first approach"}),". It allows Angular applications to function seamlessly even in offline scenarios. RxDB stores data locally and automatically synchronizes changes with the server when the network becomes available. This capability is particularly useful for applications that need to operate in low-connectivity or unreliable network environments."]}),"\n",(0,i.jsx)(a.h3,{id:"conflict-resolution",children:"Conflict Resolution"}),"\n",(0,i.jsx)(a.p,{children:"In a distributed system, conflicts can arise when multiple clients modify the same data simultaneously. RxDB offers conflict resolution mechanisms to handle such scenarios. You can define conflict resolution strategies based on your application's requirements. RxDB provides hooks and events to detect conflicts and resolve them in a consistent manner."}),"\n",(0,i.jsx)(a.h3,{id:"bidirectional-synchronization",children:"Bidirectional Synchronization"}),"\n",(0,i.jsx)(a.p,{children:"RxDB supports bidirectional data synchronization, allowing updates from both the client and server to be replicated seamlessly. This ensures that data remains consistent across all connected clients and the server. RxDB handles conflicts and resolves them based on the defined conflict resolution strategies."}),"\n",(0,i.jsx)(a.h3,{id:"real-time-updates",children:"Real-Time Updates"}),"\n",(0,i.jsx)(a.p,{children:"RxDB provides real-time updates by leveraging reactive programming principles. Changes made to the data are automatically propagated to all connected clients in real-time. Angular applications can subscribe to these updates and update the user interface accordingly. This real-time capability enables collaborative features and enhances the overall user experience."}),"\n",(0,i.jsx)(a.h2,{id:"advanced-rxdb-features-and-techniques",children:"Advanced RxDB Features and Techniques"}),"\n",(0,i.jsx)(a.p,{children:"RxDB offers several advanced features and techniques that can further enhance your Angular application."}),"\n",(0,i.jsx)(a.h3,{id:"indexing-and-performance-optimization",children:"Indexing and Performance Optimization"}),"\n",(0,i.jsx)(a.p,{children:"To improve query performance, RxDB allows you to define indexes on specific fields of your documents. Indexing enables faster data retrieval and query execution, especially when working with large datasets. By strategically creating indexes, you can optimize the performance of your Angular application."}),"\n",(0,i.jsx)(a.h3,{id:"encryption-of-local-data",children:"Encryption of Local Data"}),"\n",(0,i.jsxs)(a.p,{children:["RxDB provides built-in support for ",(0,i.jsx)(a.a,{href:"/encryption.html",children:"encrypting"})," local data using the Web Crypto API. With encryption, you can protect sensitive data stored in the client-side database. RxDB transparently encrypts the data, ensuring that it remains secure even if the underlying storage is compromised."]}),"\n",(0,i.jsx)(a.h3,{id:"change-streams-and-event-handling",children:"Change Streams and Event Handling"}),"\n",(0,i.jsx)(a.p,{children:"RxDB exposes change streams, which allow you to listen for data changes at a database or collection level. By subscribing to change streams, you can react to data modifications and perform specific actions, such as updating the UI or triggering notifications. Change streams enable real-time event handling in your Angular application."}),"\n",(0,i.jsx)(a.h3,{id:"json-key-compression",children:"JSON Key Compression"}),"\n",(0,i.jsxs)(a.p,{children:["To reduce the storage footprint and improve performance, RxDB supports ",(0,i.jsx)(a.a,{href:"/key-compression.html",children:"JSON key compression"}),". With key compression, RxDB replaces long keys with shorter aliases, reducing the overall storage size. This optimization is particularly useful when working with large datasets or frequently updating data."]}),"\n",(0,i.jsx)(a.h2,{id:"best-practices-for-using-rxdb-in-angular-applications",children:"Best Practices for Using RxDB in Angular Applications"}),"\n",(0,i.jsx)(a.p,{children:"To make the most of RxDB in your Angular application, consider the following best practices:"}),"\n",(0,i.jsx)(a.h3,{id:"use-async-pipe-for-subscriptions-so-you-do-not-have-to-unsubscribe",children:"Use Async Pipe for Subscriptions so you do not have to unsubscribe"}),"\n",(0,i.jsxs)(a.p,{children:["Angular's ",(0,i.jsx)(a.code,{children:"async"})," pipe is a powerful tool for handling observables in templates. By using the async pipe, you can avoid the need to manually subscribe and unsubscribe from RxDB observables. Angular takes care of the subscription lifecycle, ensuring that resources are released when they are no longer needed. Instead of manually subscribing to Observables, you should always prefer the ",(0,i.jsx)(a.code,{children:"async"})," pipe."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-ts",children:"// WRONG:\nlet amount;\nthis.dbService\n            .db.hero\n            .find({\n                selector: {},\n                sort: [{ name: 'asc' }]\n            })\n            .$.subscribe(docs => {\n                amount = 0;\n                docs.forEach(d => amount = d.points);\n            });\n\n// RIGHT:\nthis.amount$ = this.dbService\n            .db.hero\n            .find({\n                selector: {},\n                sort: [{ name: 'asc' }]\n            })\n            .$.pipe(\n                map(docs => {\n                    let amount = 0;\n                    docs.forEach(d => amount = d.points);\n                    return amount;\n                })\n            );\n"})}),"\n",(0,i.jsx)(a.h3,{id:"use-angular-services-for-database-creation",children:"Use Angular Services for Database creation"}),"\n",(0,i.jsx)(a.p,{children:"To ensure proper separation of concerns and maintain a clean codebase, it is recommended to create an Angular service responsible for managing the RxDB database instance. This service can handle database creation, initialization, and provide methods for interacting with the database throughout your application."}),"\n",(0,i.jsx)(a.h3,{id:"efficient-data-handling",children:"Efficient Data Handling"}),"\n",(0,i.jsx)(a.p,{children:"RxDB provides various mechanisms for efficient data handling, such as batching updates, debouncing, and throttling. Leveraging these techniques can help optimize performance and reduce unnecessary UI updates. Consider the specific data handling requirements of your application and choose the appropriate strategies provided by RxDB."}),"\n",(0,i.jsx)(a.h3,{id:"data-synchronization-strategies",children:"Data Synchronization Strategies"}),"\n",(0,i.jsx)(a.p,{children:"When working with data synchronization between clients and servers, it's important to consider strategies for conflict resolution and handling network failures. RxDB provides plugins and hooks that allow you to customize the replication behavior and implement specific synchronization strategies tailored to your application's needs."}),"\n",(0,i.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(a.p,{children:"RxDB is a powerful database solution for Angular applications, offering reactive data handling, offline-first capabilities, and seamless data synchronization. By integrating RxDB into your Angular application, you can build responsive and scalable web applications that provide a rich user experience. Whether you're building real-time collaborative apps, progressive web applications, or offline-capable applications, RxDB's features and techniques make it a valuable addition to your Angular development toolkit."}),"\n",(0,i.jsx)(a.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,i.jsx)(a.p,{children:"To explore more about RxDB and leverage its capabilities for browser database development, check out the following resources:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"https://github.com/pubkey/rxdb",children:"RxDB GitHub Repository"}),": Visit the official GitHub repository of RxDB to access the source code, documentation, and community support."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/quickstart.html",children:"RxDB Quickstart"}),": Get started quickly with RxDB by following the provided quickstart guide, which provides step-by-step instructions for setting up and using RxDB in your projects."]}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/angular",children:"RxDB Angular Example at GitHub"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>r});var i=n(7294);const t={},s=i.createContext(t);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);