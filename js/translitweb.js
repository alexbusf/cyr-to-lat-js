// Словарь базового транслита
const translitMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y',
    'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y',
    'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F',
    'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
};

document.addEventListener('DOMContentLoaded', function() {
    
    const inputField = document.getElementById('cyrillic');
    const outputField = document.getElementById('latin');

    if (inputField && outputField) {
        
        inputField.addEventListener('input', function() {
            const text = this.value;
            
            let result = text
                .split('')
                .map(char => translitMap[char] || char)
                .join('')
                .replace(/\s+/g, '-')          // Все пробелы (и двойные) -> в дефисы
                .toLowerCase()                 // Приводим к нижнему регистру
                .replace(/[^a-z0-9-]/g, '')    // Убираем всё, кроме латиницы, цифр и дефисов
                .replace(/-{2,}/g, '-')        // Схлопываем повторяющиеся дефисы (-- -> -)
                .replace(/^-|-$/g, '');        // Убираем дефисы в самом начале и в самом конце строки

            // Обрезка для SEO (опционально, обычно 50-75 символов)
            const maxLength = 60;
            if (result.length > maxLength) {
                result = result.substring(0, maxLength);
                // Чтобы не оставлять висячий дефис или обрезок слова
                result = result.replace(/-$/, '');
            }

            outputField.value = result;
        });
    }
});