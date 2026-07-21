(function() {
    'use strict';
    
    function addButton() {
        const list = document.getElementById('extensionsList');
        if (!list) {
            setTimeout(addButton, 200);
            return;
        }
        
        const btn = document.createElement('div');
        btn.className = 'list-group-item flex-container flexGap5';
        btn.innerHTML = '<span>🎴</span> 抽卡';
        btn.style.cursor = 'pointer';
        
        btn.onclick = function() {
            const chars = SillyTavern.getCharacters();
            if (!chars || chars.length === 0) {
                toastr.warning('没有可用的角色卡');
                return;
            }
            const c = chars[Math.floor(Math.random() * chars.length)];
            callPopup('<h3>🎴 抽到了！</h3><p>角色：<b>' + c.name + '</b></p><p>切换吗？</p>', 'confirm')
                .then(function(ok) {
                    if (ok) {
                        SillyTavern.setCharacterId(c.avatar);
                        toastr.success('已切换至 ' + c.name);
                    }
                });
        };
        
        list.appendChild(btn);
    }
    
    addButton();
})();
