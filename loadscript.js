function LoadScript( scriptUrl ) {

    // 'scriptURL' is the script's URL, i.e. /js/foo.js

    return new Promise( function( resolve, reject ) {

        var link = document.createElement( 'script' );

        link.src = scriptUrl;

        document.head.appendChild( link );

        link.onload = function() { 

            resolve(); 

            console.log( 'Script has loaded!' ); 
        };
    } );
}
