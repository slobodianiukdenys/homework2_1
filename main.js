const fs = require('fs');
const filename = 'dota2.txt'; 
function countWordsInFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Помилка при зчитуванні файлу:', err);
            return;
        }

        const wordCount = countWords(data);
        console.log('Кількість слів у файлі:', wordCount);
    });
}

function countWords(text) {
    return text.split(/\s+/).length;
}


countWordsInFile(filename);
