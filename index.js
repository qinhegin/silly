import { getCharacters, setCharacterId, callPopup } from '../../../script.js';

jQuery(function() {
    var html = '<div class="list-group-item flex-container flexGap5 draw-random-card-btn"><span>🎴</span> 抽卡</div>';
    $('#extensionsList').append(html);
    $('.draw-random-card-btn').on('click', async function() {
        var chars = getCharacters();
        if (!chars || chars.length === 0) {
            toastr.warning('没有可用的角色卡');
            return;
        }
        var c = chars[Math.floor(Math.random() * chars.length)];
        var ok = await callPopup('<h3>🎴 抽到了！</h3><p>角色：<b>' + c.name + '</b></p><p>切换吗？</p>', 'confirm');
        if (ok) {
            setCharacterId(c.avatar);
            toastr.success('已切换至 ' + c.name);
        }
    });
});
