"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[6330],{7260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(5893),a=n(1151);const o={title:"\u2699\ufe0f Replication Protocol",slug:"replication.html"},l="RxDB Database Replication Protocol",s={id:"replication",title:"\u2699\ufe0f Replication Protocol",description:"The RxDB replication protocol provides the ability to replicate the database state in realtime between the clients and the server.",source:"@site/docs/replication.md",sourceDirName:".",slug:"/replication.html",permalink:"/replication.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/main/docs-src/docs/replication.md",tags:[],version:"current",frontMatter:{title:"\u2699\ufe0f Replication Protocol",slug:"replication.html"},sidebar:"tutorialSidebar",previous:{title:"Electron Plugin",permalink:"/electron.html"},next:{title:"GraphQL Replication",permalink:"/replication-graphql.html"}},r={},c=[{value:"Replication protocol on the document level",id:"replication-protocol-on-the-document-level",level:2},{value:"Replication protocol on the transfer level",id:"replication-protocol-on-the-transfer-level",level:2},{value:"Checkpoint iteration",id:"checkpoint-iteration",level:3},{value:"Event observation",id:"event-observation",level:3},{value:"Data layout on the server",id:"data-layout-on-the-server",level:2},{value:"Conflict handling",id:"conflict-handling",level:2},{value:"replicateRxCollection()",id:"replicaterxcollection",level:2},{value:"Multi Tab support",id:"multi-tab-support",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Security",id:"security",level:2},{value:"RxReplicationState",id:"rxreplicationstate",level:2},{value:"Observable",id:"observable",level:3},{value:"awaitInitialReplication()",id:"awaitinitialreplication",level:3},{value:"awaitInSync()",id:"awaitinsync",level:3},{value:"reSync()",id:"resync",level:3},{value:"cancel()",id:"cancel",level:3},{value:"isStopped()",id:"isstopped",level:3},{value:"Setting a custom initialCheckpoint (beta)",id:"setting-a-custom-initialcheckpoint-beta",level:3},{value:"Attachment replication (beta)",id:"attachment-replication-beta",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"rxdb-database-replication-protocol",children:"RxDB Database Replication Protocol"}),"\n",(0,i.jsxs)(t.p,{children:["The RxDB replication protocol provides the ability to replicate the database state in ",(0,i.jsx)(t.strong,{children:"realtime"})," between the clients and the server."]}),"\n",(0,i.jsxs)(t.p,{children:["The backend server does not have to be a RxDB instance; you can build a replication with ",(0,i.jsx)(t.strong,{children:"any infrastructure"}),".\nFor example you can replicate with a custom GraphQL endpoint or a http server on top of a PostgreSQL database."]}),"\n",(0,i.jsxs)(t.p,{children:["The replication is made to support the ",(0,i.jsx)(t.a,{href:"http://offlinefirst.org/",children:"Offline-First"})," paradigm, so that when the client goes offline, the RxDB database can still read and write locally and will continue the replication when the client goes online again."]}),"\n",(0,i.jsx)(t.h2,{id:"replication-protocol-on-the-document-level",children:"Replication protocol on the document level"}),"\n",(0,i.jsx)(t.p,{children:"On the RxDocument level, the replication works like git, where the fork/client contains all new writes and must be merged with the master/server before it can push its new state to the master/server."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"A---B-----------D   master/server state\n     \\         /\n      B---C---D     fork/client state\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The client pulls the latest state ",(0,i.jsx)(t.code,{children:"B"})," from the master."]}),"\n",(0,i.jsxs)(t.li,{children:["The client does some changes ",(0,i.jsx)(t.code,{children:"C+D"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The client pushes these changes to the master by sending the latest known master state ",(0,i.jsx)(t.code,{children:"B"})," and the new client state ",(0,i.jsx)(t.code,{children:"D"})," of the document."]}),"\n",(0,i.jsxs)(t.li,{children:["If the master state is equal to the latest master ",(0,i.jsx)(t.code,{children:"B"})," state of the client, the new client state ",(0,i.jsx)(t.code,{children:"D"})," is set as the latest master state."]}),"\n",(0,i.jsx)(t.li,{children:"If the master also had changes and so the latest master change is different then the one that the client assumes, we have a conflict that has to be resolved on the client."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"replication-protocol-on-the-transfer-level",children:"Replication protocol on the transfer level"}),"\n",(0,i.jsxs)(t.p,{children:["When document states are transferred, all handlers use batches of documents for better performance.\nThe server ",(0,i.jsx)(t.strong,{children:"must"})," implement the following methods to be compatible with the replication:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"pullHandler"})," Get the last checkpoint (or null) as input. Returns all documents that have been written ",(0,i.jsx)(t.strong,{children:"after"})," the given checkpoint. Also returns the checkpoint of the latest written returned document."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"pushHandler"})," a method that can be called by the client to send client side writes to the master. It gets an array with the ",(0,i.jsx)(t.code,{children:"assumedMasterState"})," and the ",(0,i.jsx)(t.code,{children:"newForkState"})," of each document write as input. It must return an array that contains the master document states of all conflicts. If there are no conflicts, it must return an empty array."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"pullStream"})," an observable that emits batches of all master writes and the latest checkpoint of the write batches."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"        +--------+                             +--------+   \n        |        | pullHandler()               |        |\n        |        |---------------------\x3e       |        |   \n        |        |                             |        | \n        |        |                             |        |  \n        | Client | pushHandler()               | Server |  \n        |        |---------------------\x3e       |        | \n        |        |                             |        |\n        |        |   pullStream$               |        | \n        |        |   <-------------------------|        | \n        +--------+                             +--------+\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The replication runs in two ",(0,i.jsx)(t.strong,{children:"different modes"}),":"]}),"\n",(0,i.jsx)(t.h3,{id:"checkpoint-iteration",children:"Checkpoint iteration"}),"\n",(0,i.jsxs)(t.p,{children:["On first initial replication, or when the client comes online again, a checkpoint based iteration is used to catch up with the server state.\nA checkpoint is a subset of the fields of the last pulled document. When the checkpoint is send to the backend via ",(0,i.jsx)(t.code,{children:"pullHandler()"}),", the backend must be able to respond with all documents that have been written ",(0,i.jsx)(t.strong,{children:"after"})," the given checkpoint.\nFor example if your documents contain an ",(0,i.jsx)(t.code,{children:"id"})," and an ",(0,i.jsx)(t.code,{children:"updatedAt"})," field, these two can be used as checkpoint."]}),"\n",(0,i.jsxs)(t.p,{children:["When the checkpoint iteration reaches the last checkpoint, where the backend returns an empty array because there are no newer documents, the replication will automatically switch to the ",(0,i.jsx)(t.code,{children:"event observation"})," mode."]}),"\n",(0,i.jsx)(t.h3,{id:"event-observation",children:"Event observation"}),"\n",(0,i.jsxs)(t.p,{children:["While the client is connected to the backend, the events from the backend are observed via ",(0,i.jsx)(t.code,{children:"pullStream$"})," and persisted to the client."]}),"\n",(0,i.jsxs)(t.p,{children:["If your backend for any reason is not able to provide a full ",(0,i.jsx)(t.code,{children:"pullStream$"})," that contains all events and the checkpoint, you can instead only emit ",(0,i.jsx)(t.code,{children:"RESYNC"})," events that tell RxDB that anything unknown has changed on the server and it should run the pull replication via ",(0,i.jsx)(t.a,{href:"#checkpoint-iteration",children:"checkpoint iteration"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["When the client goes offline and online again, it might happen that the ",(0,i.jsx)(t.code,{children:"pullStream$"})," has missed out some events. Therefore the ",(0,i.jsx)(t.code,{children:"pullStream$"})," should also emit a ",(0,i.jsx)(t.code,{children:"RESYNC"})," event each time the client reconnects, so that the client can become in sync with the backend via the ",(0,i.jsx)(t.a,{href:"#checkpoint-iteration",children:"checkpoint iteration"})," mode."]}),"\n",(0,i.jsx)(t.h2,{id:"data-layout-on-the-server",children:"Data layout on the server"}),"\n",(0,i.jsx)(t.p,{children:"To use the replication you first have to ensure that:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"documents are deterministic sortable by their last write time"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"deterministic"})," means that even if two documents have the same ",(0,i.jsx)(t.em,{children:"last write time"}),", they have a predictable sort order.\nThis is most often ensured by using the ",(0,i.jsx)(t.em,{children:"primaryKey"})," as second sort parameter as part of the checkpoint."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["documents are never deleted, instead the ",(0,i.jsx)(t.code,{children:"_deleted"})," field is set to ",(0,i.jsx)(t.code,{children:"true"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"This is needed so that the deletion state of a document exists in the database and can be replicated with other instances. If your backend uses a different field to mark deleted documents, you have to transform the data in the push/pull handlers or with the modifiers."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For example if your documents look like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "id": "foobar",\n    "name": "Alice",\n    "lastName": "Wilson",\n    /**\n     * Contains the last write timestamp\n     * so all documents writes can be sorted by that value\n     * when they are fetched from the remote instance.\n     */\n    "updatedAt": 1564483474,\n    /**\n     * Instead of physically deleting documents,\n     * a deleted document gets replicated.\n     */\n    "_deleted": false\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Then your data is always sortable by ",(0,i.jsx)(t.code,{children:"updatedAt"}),". This ensures that when RxDB fetches 'new' changes via ",(0,i.jsx)(t.code,{children:"pullHandler()"}),", it can send the latest ",(0,i.jsx)(t.code,{children:"updatedAt+id"})," checkpoint to the remote endpoint and then receive all newer documents."]}),"\n",(0,i.jsxs)(t.p,{children:["By default, the field is ",(0,i.jsx)(t.code,{children:"_deleted"}),". If your remote endpoint uses a different field to mark deleted documents, you can set the ",(0,i.jsx)(t.code,{children:"deletedField"})," in the replication options which will automatically map the field on all pull and push requests."]}),"\n",(0,i.jsx)(t.h2,{id:"conflict-handling",children:"Conflict handling"}),"\n",(0,i.jsx)(t.p,{children:"When multiple clients (or the server) modify the same document at the same time (or when they are offline), it can happen that a conflict arises during the replication."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"A---B1---C1---X    master/server state\n     \\       /\n      B1---C2      fork/client state\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the case above, the client would tell the master to move the document state from ",(0,i.jsx)(t.code,{children:"B1"})," to ",(0,i.jsx)(t.code,{children:"C2"})," by calling ",(0,i.jsx)(t.code,{children:"pushHandler()"}),". But because the actual master state is ",(0,i.jsx)(t.code,{children:"C1"})," and not ",(0,i.jsx)(t.code,{children:"B1"}),", the master would reject the write by sending back the actual master state ",(0,i.jsx)(t.code,{children:"C1"}),".\n",(0,i.jsx)(t.strong,{children:"RxDB resolves all conflicts on the client"})," so it would call the conflict handler of the ",(0,i.jsx)(t.code,{children:"RxCollection"})," and create a new document state ",(0,i.jsx)(t.code,{children:"D"})," that can then be written to the master."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"A---B1---C1---X---D    master/server state\n     \\       / \\ /\n      B1---C2---D      fork/client state\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The default conflict handler will always drop the fork state and use the master state. This ensures that clients that are offline for a very long time, do not accidentally overwrite other peoples changes when they go online again.\nYou can specify a custom conflict handler by setting the property ",(0,i.jsx)(t.code,{children:"conflictHandler"})," when calling ",(0,i.jsx)(t.code,{children:"addCollection()"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Learn how to create a ",(0,i.jsx)(t.a,{href:"/transactions-conflicts-revisions.html#custom-conflict-handler",children:"custom conflict handler"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"replicaterxcollection",children:"replicateRxCollection()"}),"\n",(0,i.jsxs)(t.p,{children:["You can start the replication of a single ",(0,i.jsx)(t.code,{children:"RxCollection"})," by calling ",(0,i.jsx)(t.code,{children:"replicateRxCollection()"})," like in the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { replicateRxCollection } from 'rxdb/plugins/replication';\nimport {\n    lastOfArray\n} from 'rxdb';\nconst replicationState = await replicateRxCollection({\n    collection: myRxCollection,\n    /**\n     * An id for the replication to identify it\n     * and so that RxDB is able to resume the replication on app reload.\n     * If you replicate with a remote server, it is recommended to put the\n     * server url into the replicationIdentifier.\n     */\n    replicationIdentifier: 'my-rest-replication-to-https://example.com/api/sync',\n    /**\n     * By default it will do an ongoing realtime replication.\n     * By settings live: false the replication will run once until the local state\n     * is in sync with the remote state, then it will cancel itself.\n     * (optional), default is true.\n     */\n    live: true,\n    /**\n     * Time in milliseconds after when a failed backend request\n     * has to be retried.\n     * This time will be skipped if a offline->online switch is detected\n     * via navigator.onLine\n     * (optional), default is 5 seconds.\n     */\n    retryTime: 5 * 1000,\n    /**\n     * When multiInstance is true, like when you use RxDB in multiple browser tabs,\n     * the replication should always run in only one of the open browser tabs.\n     * If waitForLeadership is true, it will wait until the current instance is leader.\n     * If waitForLeadership is false, it will start replicating, even if it is not leader.\n     * [default=true]\n     */\n    waitForLeadership: true,\n    /**\n     * If this is set to false,\n     * the replication will not start automatically\n     * but will wait for replicationState.start() being called.\n     * (optional), default is true\n     */\n    autoStart: true,\n\n    /**\n     * Custom deleted field, the boolean property of the document data that\n     * marks a document as being deleted.\n     * If your backend uses a different fieldname then '_deleted', set the fieldname here.\n     * RxDB will still store the documents internally with '_deleted', setting this field\n     * only maps the data on the data layer.\n     * \n     * If a custom deleted field contains a non-boolean value, the deleted state\n     * of the documents depends on if the value is truthy or not. So instead of providing a boolean * * deleted value, you could also work with using a 'deletedAt' timestamp instead.\n     * \n     * [default='_deleted']\n     */\n    deletedField: 'deleted',\n\n    /**\n     * Optional,\n     * only needed when you want to replicate local changes to the remote instance.\n     */\n    push: {\n        /**\n         * Push handler\n         */\n        async handler(docs) {\n            /**\n             * Push the local documents to a remote REST server.\n             */\n            const rawResponse = await fetch('https://example.com/api/sync/push', {\n                method: 'POST',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({ docs })\n            });\n            /**\n             * Contains an array with all conflicts that appeared during this push.\n             * If there were no conflicts, return an empty array.\n             */\n            const response = await rawResponse.json();\n            return response;\n        },\n        /**\n         * Batch size, optional\n         * Defines how many documents will be given to the push handler at once.\n         */\n        batchSize: 5,\n        /**\n         * Modifies all documents before they are given to the push handler.\n         * Can be used to swap out a custom deleted flag instead of the '_deleted' field.\n         * If the push modifier return null, the document will be skipped and not send to the remote.\n         * Notice that the modifier can be called multiple times and should not contain any side effects.\n         * (optional)\n         */\n        modifier: d => d\n    },\n    /**\n     * Optional,\n     * only needed when you want to replicate remote changes to the local state.\n     */\n    pull: {\n        /**\n         * Pull handler\n         */\n        async handler(lastCheckpoint, batchSize) {\n            const minTimestamp = lastCheckpoint ? lastCheckpoint.updatedAt : 0;\n            /**\n             * In this example we replicate with a remote REST server\n             */\n            const response = await fetch(\n                `https://example.com/api/sync/?minUpdatedAt=${minTimestamp}&limit=${batchSize}`\n            );\n            const documentsFromRemote = await response.json();\n            return {\n                /**\n                 * Contains the pulled documents from the remote.\n                 * Notice: If documentsFromRemote.length < batchSize,\n                 * then RxDB assumes that there are no more un-replicated documents\n                 * on the backend, so the replication will switch to 'Event observation' mode.\n                 */\n                documents: documentsFromRemote,\n                /**\n                 * The last checkpoint of the returned documents.\n                 * On the next call to the pull handler,\n                 * this checkpoint will be passed as 'lastCheckpoint'\n                 */\n                checkpoint: documentsFromRemote.length === 0 ? lastCheckpoint : {\n                    id: lastOfArray(documentsFromRemote).id,\n                    updatedAt: lastOfArray(documentsFromRemote).updatedAt\n                }\n            };\n        },\n        batchSize: 10,\n        /**\n         * Modifies all documents after they have been pulled\n         * but before they are used by RxDB.\n         * Notice that the modifier can be called multiple times and should not contain any side effects.\n         * (optional)\n         */\n        modifier: d => d,\n        /**\n         * Stream of the backend document writes.\n         * See below.\n         * You only need a stream$ when you have set live=true\n         */\n        stream$: pullStream$.asObservable()\n    },\n});\n\n\n/**\n * Creating the pull stream for realtime replication.\n * Here we use a websocket but any other way of sending data to the client can be used,\n * like long polling or server-send events.\n */\nconst pullStream$ = new Subject<RxReplicationPullStreamItem<any, any>>();\nlet firstOpen = true;\nfunction connectSocket() {\n    const socket = new WebSocket('wss://example.com/api/sync/stream');\n    /**\n     * When the backend sends a new batch of documents+checkpoint,\n     * emit it into the stream$.\n     * \n     * event.data must look like this\n     * {\n     *     documents: [\n     *        {\n     *            id: 'foobar',\n     *            _deleted: false,\n     *            updatedAt: 1234\n     *        }\n     *     ],\n     *     checkpoint: {\n     *         id: 'foobar',\n     *         updatedAt: 1234\n     *     }\n     * }\n     */\n    socket.onmessage = event => pullStream$.next(event.data);\n    /**\n     * Automatically reconnect the socket on close and error.\n     */\n    socket.onclose = () => connectSocket();\n    socket.onerror = () => socket.close();\n\n    socket.onopen = () => {\n        if(firstOpen) {\n            firstOpen = false;\n        } else {\n            /**\n             * When the client is offline and goes online again,\n             * it might have missed out events that happened on the server.\n             * So we have to emit a RESYNC so that the replication goes\n             * into 'Checkpoint iteration' mode until the client is in sync\n             * and then it will go back into 'Event observation' mode again.\n             */\n            pullStream$.next('RESYNC');\n        }\n    }\n}\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"multi-tab-support",children:"Multi Tab support"}),"\n",(0,i.jsxs)(t.p,{children:["For better performance, the replication runs only in one instance when RxDB is used in multiple browser tabs or Node.js processes.\nBy setting ",(0,i.jsx)(t.code,{children:"waitForLeadership: false"})," you can enforce that each tab runs its own replication cycles.\nIf used in a multi instance setting, so when at database creation ",(0,i.jsx)(t.code,{children:"multiInstance: false"})," was not set,\nyou need to import the ",(0,i.jsx)(t.a,{href:"/leader-election.html",children:"leader election plugin"})," so that RxDB can know how many instances exist and which browser tab should run the replication."]}),"\n",(0,i.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["At the moment it is not possible to replicate ",(0,i.jsx)(t.a,{href:"/rx-attachment.html",children:"attachments"}),", make a pull request if you need this."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"error-handling",children:"Error handling"}),"\n",(0,i.jsxs)(t.p,{children:["When sending a document to the remote fails for any reason, RxDB will send it again in a later point in time.\nThis happens for ",(0,i.jsx)(t.strong,{children:"all"})," errors. The document write could have already reached the remote instance and be processed, while only the answering fails.\nThe remote instance must be designed to handle this properly and to not crash on duplicate data transmissions.\nDepending on your use case, it might be ok to just write the duplicate document data again.\nBut for a more resilient error handling you could compare the last write timestamps or add a unique write id field to the document. This field can then be used to detect duplicates and ignore re-send data."]}),"\n",(0,i.jsxs)(t.p,{children:["Also the replication has an ",(0,i.jsx)(t.code,{children:".error$"})," stream that emits all ",(0,i.jsx)(t.code,{children:"RxError"})," objects that arise during replication.\nNotice that these errors contain an inner ",(0,i.jsx)(t.code,{children:".parameters.errors"})," field that contains the original error. Also they contain a ",(0,i.jsx)(t.code,{children:".parameters.direction"})," field that indicates if the error was thrown during ",(0,i.jsx)(t.code,{children:"pull"})," or ",(0,i.jsx)(t.code,{children:"push"}),". You can use these to properly handle errors. For example when the client is outdated, the server might respond with a ",(0,i.jsx)(t.code,{children:"426 Upgrade Required"})," error code that can then be used to force a page reload."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"replicationState.error$.subscribe((error) => {\n    if(\n        error.parameters.errors &&\n        error.parameters.errors[0] &&\n        error.parameters.errors[0].code === 426\n    ) {\n        // client is outdated -> enforce a page reload\n        location.reload();\n    }\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,i.jsxs)(t.p,{children:["Be aware that client side clocks can never be trusted. When you have a client-backend replication, the backend should overwrite the ",(0,i.jsx)(t.code,{children:"updatedAt"})," timestamp or use another field, when it receives the change from the client."]}),"\n",(0,i.jsx)(t.h2,{id:"rxreplicationstate",children:"RxReplicationState"}),"\n",(0,i.jsxs)(t.p,{children:["The function ",(0,i.jsx)(t.code,{children:"replicateRxCollection()"})," returns a ",(0,i.jsx)(t.code,{children:"RxReplicationState"})," that can be used to manage and observe the replication."]}),"\n",(0,i.jsx)(t.h3,{id:"observable",children:"Observable"}),"\n",(0,i.jsxs)(t.p,{children:["To observe the replication, the ",(0,i.jsx)(t.code,{children:"RxReplicationState"})," has some ",(0,i.jsx)(t.code,{children:"Observable"})," properties:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// emits each document that was received from the remote\nmyRxReplicationState.received$.subscribe(doc => console.dir(doc));\n\n// emits each document that was send to the remote\nmyRxReplicationState.sent$.subscribe(doc => console.dir(doc));\n\n// emits all errors that happen when running the push- & pull-handlers.\nmyRxReplicationState.error$.subscribe(error => console.dir(error));\n\n// emits true when the replication was canceled, false when not.\nmyRxReplicationState.canceled$.subscribe(bool => console.dir(bool));\n\n// emits true when a replication cycle is running, false when not.\nmyRxReplicationState.active$.subscribe(bool => console.dir(bool));\n"})}),"\n",(0,i.jsx)(t.h3,{id:"awaitinitialreplication",children:"awaitInitialReplication()"}),"\n",(0,i.jsxs)(t.p,{children:["With ",(0,i.jsx)(t.code,{children:"awaitInitialReplication()"})," you can await the initial replication that is done when a full replication cycle was successful finished for the first time. The returned promise will never resolve if you cancel the replication before the initial replication can be done."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"WARNING:"})," When ",(0,i.jsx)(t.code,{children:"multiInstance: true"})," and ",(0,i.jsx)(t.code,{children:"waitForLeadership: true"})," and another tab is already running the replication, ",(0,i.jsx)(t.code,{children:"awaitInitialReplication()"})," will not resolve until the other tab is closed and the replication starts in this tab."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await myRxReplicationState.awaitInitialReplication();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"awaitinsync",children:"awaitInSync()"}),"\n",(0,i.jsxs)(t.p,{children:["Returns a ",(0,i.jsx)(t.code,{children:"Promise"})," that resolves when:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"awaitInitialReplication()"})," has emitted."]}),"\n",(0,i.jsx)(t.li,{children:"All local data is replicated with the remote."}),"\n",(0,i.jsx)(t.li,{children:"No replication cycle is running or in retry-state."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"WARNING:"})," When ",(0,i.jsx)(t.code,{children:"multiInstance: true"})," and ",(0,i.jsx)(t.code,{children:"waitForLeadership: true"})," and another tab is already running the replication, ",(0,i.jsx)(t.code,{children:"awaitInSync()"})," will not resolve until the other tab is closed and the replication starts in this tab."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await myRxReplicationState.awaitInSync();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"resync",children:"reSync()"}),"\n",(0,i.jsxs)(t.p,{children:["Triggers a ",(0,i.jsx)(t.code,{children:"RESYNC"})," cycle where the replication goes into ",(0,i.jsx)(t.a,{href:"#checkpoint-iteration",children:"checkpoint iteration"})," until the client is in sync with the backend. Used in unit tests or when no proper ",(0,i.jsx)(t.code,{children:"pull.stream$"})," can be implemented so that the client only knows that something has been changed but not what."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"myRxReplicationState.reSync();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If your backend is not capable of sending events to the client at all, you could run ",(0,i.jsx)(t.code,{children:"reSync()"})," in an interval so that the client will automatically fetch server changes after some time at least."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// trigger RESYNC each 10 seconds.\nsetInterval(() => myRxReplicationState.reSync(), 10 * 1000);\n"})}),"\n",(0,i.jsx)(t.h3,{id:"cancel",children:"cancel()"}),"\n",(0,i.jsx)(t.p,{children:"Cancels the replication. Returns a promise that resolved when everything has been cleaned up."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await myRxReplicationState.cancel()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"isstopped",children:"isStopped()"}),"\n",(0,i.jsxs)(t.p,{children:["Returns ",(0,i.jsx)(t.code,{children:"true"})," if the replication is stopped. This can be if a non-live replication is finished or a replication got canceled."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"replicationState.isStopped(); // true/false\n"})}),"\n",(0,i.jsx)(t.h3,{id:"setting-a-custom-initialcheckpoint-beta",children:"Setting a custom initialCheckpoint (beta)"}),"\n",(0,i.jsxs)(t.p,{children:["By default, the push replication will start from the beginning of time and push all documents from there to the remote.\nBy setting a custom ",(0,i.jsx)(t.code,{children:"push.initialCheckpoint"}),", you can tell the replication to only push writes that are newer than the given checkpoint."]}),"\n",(0,i.jsxs)(t.p,{children:["This is often used when replication is used together with the ",(0,i.jsx)(t.a,{href:"/migration-schema.html",children:"schema migration"}),".\nAfter a migration has run, the collection with the new version would push all migrated documents to the remote.\nThis might not be desired, for example when you already have run the migration on the backend server."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// store the latest checkpoint of a collection\nlet lastLocalCheckpoint: any;\nmyCollection.checkpoint$.subscribe(checkpoint => lastLocalCheckpoint = checkpoint);\n\n// start the replication but only push documents that are newer than the lastLocalCheckpoint\nconst replicationState = replicateRxCollection({\n    collection: myCollection,\n    replicationIdentifier: 'my-custom-replication-with-init-checkpoint',\n    /* ... */\n    push: {\n        handler: /* ... */,\n        initialCheckpoint: lastLocalCheckpoint\n    }\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The same can be done for the other direction by setting a ",(0,i.jsx)(t.code,{children:"pull.initialCheckpoint"}),". Notice that here we need the remote checkpoint from the backend instead of the one from the RxDB storage."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// get the last pull checkpoint from the server\nconst lastRemoteCheckpoint = await (await fetch('http://example.com/pull-checkpoint')).json();\n\n// start the replication but only pull documents that are newer than the lastRemoteCheckpoint\nconst replicationState = replicateRxCollection({\n    collection: myCollection,\n    replicationIdentifier: 'my-custom-replication-with-init-checkpoint',\n    /* ... */\n    pull: {\n        handler: /* ... */,\n        initialCheckpoint: lastRemoteCheckpoint\n    }\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"attachment-replication-beta",children:"Attachment replication (beta)"}),"\n",(0,i.jsxs)(t.p,{children:["Attachment replication is supported in the RxDB replication protocol itself. However not all replication plugins support it.\nIf you start the replication with a collection which has ",(0,i.jsx)(t.a,{href:"/rx-attachment.html",children:"enabled RxAttachments"})," attachments data will be added to all push- and write data."]}),"\n",(0,i.jsxs)(t.p,{children:["The pushed documents will contain an ",(0,i.jsx)(t.code,{children:"_attachments"})," object which contains:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The attachment meta data (id, length, digest) of all non-attachments"}),"\n",(0,i.jsx)(t.li,{children:"The full attachment data of all attachments that have been updated/added from the client."}),"\n",(0,i.jsx)(t.li,{children:"Deleted attachments are spared out in the pushed document."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"With this data, the backend can decide onto which attachments must be deleted, added or overwritten."}),"\n",(0,i.jsx)(t.p,{children:"Accordingly, the pulled document must contain the same data, if the backend has a new document state with updated attachments."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var i=n(7294);const a={},o=i.createContext(a);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);