// Словарь для замены букв
const translitMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y',
    'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y',
    'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F',
    'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
};

// Ждем, пока страница полностью загрузится
document.addEventListener('DOMContentLoaded', function() {
    
    const inputField = document.getElementById('cyrillic');
    const outputField = document.getElementById('latin');

    // Проверяем, что поля существуют на странице
    if (inputField && outputField) {
        
        // Слушаем каждое нажатие клавиши в первом поле
        inputField.addEventListener('input', function() {
            const text = this.value;
            
            // Переводим текст
            const result = text
                .split('') // разбиваем строку на массив букв
                .map(char => translitMap[char] || char) // меняем букву, если она есть в словаре
                .join('') // собираем массив обратно в строку
                .replace(/\s+/g, '-'); // заменяем все пробелы (и двойные, и тройные) на дефисы

            outputField.value = result;
        });
    }
});