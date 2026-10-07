document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copyBtn');
    const outputField = document.getElementById('latin');

    if (copyBtn && outputField) {
        copyBtn.addEventListener('click', function() {
            // Выделяем текст в поле (на случай, если пользователь что-то там выделил вручную)
            outputField.select();
            outputField.setSelectionRange(0, 99999); // Для мобильных устройств

            // Копируем
            navigator.clipboard.writeText(outputField.value);

            // Меняем текст кнопки на 1 секунду
            const originalText = this.textContent;
            this.textContent = 'Скопировано!';
            this.disabled = true;

            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1000);
        });
    }
});