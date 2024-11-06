function calculate() {
    // Получаем дату рождения из поля ввода
    const birthdate = document.getElementById("birthdate").value;
    
    // Проверяем, если дата введена
    if (!birthdate) {
        alert("Пожалуйста, введите дату рождения");
        return;
    }

    // Разбиваем дату на год, месяц и день
    const [year, month, day] = birthdate.split("-");
    
    // Создаем строку из всех цифр даты рождения
    const allDigits = day + month + year;
    
    // Функция для подсчета количества каждой цифры
    const countDigits = (str) => {
        const counts = Array(10).fill(0);
        for (let char of str) {
            counts[parseInt(char)]++;
        }
        return counts;
    };

    // Считаем частоту каждой цифры
    const digitCounts = countDigits(allDigits);
    
    // Отображаем результат
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Характер: ${digitCounts[1]}</p>
        <p>Здоровье: ${digitCounts[2]}</p>
        <p>Удача: ${digitCounts[3]}</p>
        <p>Цель: ${digitCounts[4]}</p>
        <p>Энергия: ${digitCounts[5]}</p>
        <p>Логика: ${digitCounts[6]}</p>
        <p>Долг: ${digitCounts[7]}</p>
        <p>Семья: ${digitCounts[8]}</p>
        <p>Интерес: ${digitCounts[9]}</p>
    `;
}
