const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

const request = window.indexedDB.open("budget", 1);

    request.onupgradeneeded = ({ target }) => {
        let db = target.result;
        const objectStore = db.createObjectStore("pending...", { autoincrement : true });
    };

    request.onsuccess = ({ target }) => {
        db = target.result;
    };
