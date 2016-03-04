
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

        var data_id = undefined;
        var displayName = undefined;

        // 在大部分页面
        if ( link.attr('data-id') != undefined ) {
            var data_id = link.attr('data-id');
            var displayName = link.text();
        }
        // 在 https://www.lundao.com/people/ 页面
        else if ( link.parent(".aw-item") != undefined ) {
            var onclick = link.parent().parent().children(".operate").children(".follow").attr('onclick');
            // AWS.User.follow($(this), 'user', 372);
            var regExp = /, ([0-9]+)\);$/;
            var matches = regExp.exec(onclick);
            var data_id = matches[1];
            var displayName = link.text();
        }
        else {
            return ;
        }

        if ( displayName && data_id ) {
            tips.html('<span style="padding:0 10px; color: #fff;">'+displayName+'是论道第'+data_id+'个注册的用户</span>');
        }

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
