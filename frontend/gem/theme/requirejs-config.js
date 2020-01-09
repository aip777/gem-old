// var config = {
//     map: {
//         '*' : {
//             'script' : 'js/script',
//             'jquery-3.3.1.slim.min' : 'https://code.jquery.com/jquery-3.3.1.slim.min',
//             'popper.min' : 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min',
//             'bootstrap.min' : 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min',
//         }
//     }
// };



var config = {
    paths: {
        script: 'js/script'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
};