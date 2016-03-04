
var tipsTpl = '<div style="position: absolute; z-index: 999; padding: 0 !important; background-color: #007d60;" class="modal-dialog-buttons">'+
            '</div>';

var body = $(document.body);

var tips = $(tipsTpl).hide().appendTo(body);
var tipsWidth = tips.width();
var tipsHideTimer = null;

(function() {
    var userLink = '.aw-user-name';
    $(document).on('mouseover', userLink, function(e) {
        var link= $(this);
        var offset = link.offset();

        var data_id = $(this).attr('data-id');
        if ( data_id == undefined )
            return;

        var displayName = $(this).text();
        tips.html('<span style="padding:0 10px; color: #fff;">'+displayName+'是论道第'+data_id+'个注册的用户</span>');

        tips.show().offset({
            left: offset.left + link.width() + 5,
            top: offset.top
        });
    });

    $(document).on('mouseout', userLink, function(e) {
        tips.hide();
        data_id = 0;
    });
})();
