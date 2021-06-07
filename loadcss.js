// src: https://stackoverflow.com/questions/574944/
function LoadCss( cssUrl ) {

    // 'cssURL' is the stylesheet's URL, i.e. /css/styles.css

    return new Promise( function( resolve, reject ) {

        var link = document.createElement( 'link' );

        link.rel  = 'stylesheet';

        link.href = cssUrl;

        document.head.appendChild( link );

        link.onload = function() { 

            resolve(); 

            console.log( 'CSS has loaded!' ); 
        };
    } );
}
