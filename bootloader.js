(() => {
    Promise.all([
        LoadCss('https://cdn.jsdelivr.net/npm/siiimple-toast/dist/style.css'),
        LoadScript('https://cdn.jsdelivr.net/npm/siiimple-toast/dist/siiimple-toast.min.js'),
        LoadScript('https://cdn.jsdelivr.net/gh/kevinfjbecker/dnd-data@0.0.2/randomtableparser.js')
    ])
    .then(values => {
        [...document.querySelectorAll('table th:first-child')].filter((th) => th.innerText.match(/[1-9]*d[1-9]+/)).forEach((th) => {
            tableId = th.parentNode.parentNode.parentNode.dataset.contentChunkId;
            th.innerHTML = `<a onclick="siiimpleToast.message(getRandomTable('${tableId}').roll());">${th.innerText}</a>`;
        });
    })
    .catch(() => { console.log('Something went wrong.') });
})();

function LoadCss( cssUrl ) {
    return new Promise( function( resolve, reject ) {
        var link = document.createElement( 'link' );
        link.rel  = 'stylesheet';
        link.href = cssUrl;
        document.head.appendChild( link );
        link.onload = function() { 
            resolve(); 
            console.log( 'CSS has loaded!' ); 
        };
    });
}

function LoadScript( scriptUrl ) {
    return new Promise( function( resolve, reject ) {
        var link = document.createElement( 'script' );
        link.src = scriptUrl;
        document.head.appendChild( link );
        link.onload = function() { 
            resolve(); 
            console.log( 'Script has loaded!' ); 
        };
    });
}
