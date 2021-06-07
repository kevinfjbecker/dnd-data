function LoadScript( scriptURL ) {

    // 'scriptURL' is the script's URL, i.e. /js/foo.js

    return new Promise( function( resolve, reject ) {

        var link = document.createElement( 'script' );

        link.src = scriptURL;

        document.head.appendChild( link );

        link.onload = function() { 

            resolve(); 

            console.log( 'Script has loaded!' ); 
        };
    } );
}
