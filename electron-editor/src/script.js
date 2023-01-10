function save() {
    // テキストエリアより文字列を取得
    const txt = document.getElementById('memo').value;
    if (!txt) { return; }

    // 文字列をBlob化
    const blob = new Blob([txt], { type: 'text/plain' });

    // ダウンロード用のaタグ生成
    const a = document.createElement('a');
    a.href =  URL.createObjectURL(blob);
    a.download = 'noName.txt';
    a.click();
};
window.addEventListener('load', () => {
    const f = document.getElementById('fileOpenBtn');
    f.addEventListener('change', evt => {
        let input = evt.target;
        if (input.files.length == 0) {
            console.log('No file selected');
            return;
        }
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const pre = document.getElementById('memo');
            pre.value = reader.result;
        };

        reader.readAsText(file);
    });
});