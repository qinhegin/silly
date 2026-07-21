(function() {
    'use strict';
    // 等待页面加载完成
    $(function() {
        // 添加抽卡按钮到扩展菜单
        var btnHtml = '<div class="list-group-item flex-container flexGap5 draw-random-card-btn"><span>🎴</span> 抽卡</div>';
        $('#extensionsList').append(btnHtml);

        // 绑定点击事件
        $(document).on('click', '.draw-random-card-btn', function() {
            var chars = window.getCharacters();
            if (!chars || chars.length === 0) {
                window.toastr.warning('没有可用的角色卡');
                return;
            }
            var randomChar = chars[Math.floor(Math.random() * chars.length)];
            window.callPopup(
                '<h3>🎴 抽到了！</h3><p>角色：<b>' + randomChar.name + '</b></p><p>要切换到这个角色吗？</p>',
                'confirm'
            ).then(function(confirmed) {
                if (confirmed) {
                    window.setCharacterId(randomChar.avatar);
                    window.toastr.success('已切换至 ' + randomChar.name);
                }
            });
        });
    });
})();
