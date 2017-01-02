/// <reference path="../typings/globals/jquery/index.d.ts" />

$(function() {
    $.ajax({
        url: '/api/getMoments',
        type: 'GET',
        success: function(res) {
            console.log(res);
        }
    });
});;