// src: https://stackoverflow.com/questions/574944/
function LoadCSS( cssURL ) {

    // 'cssURL' is the stylesheet's URL, i.e. /css/styles.css

    return new Promise( function( resolve, reject ) {

        var link = document.createElement( 'link' );

        link.rel  = 'stylesheet';

        link.href = cssURL;

        document.head.appendChild( link );

        link.onload = function() { 

            resolve(); 

            console.log( 'CSS has loaded!' ); 
        };
    } );
}
