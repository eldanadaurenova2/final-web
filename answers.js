document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        { question: "Какой стиль интерьера отличается минимализмом и природными материалами?", options: ["Скандинавский", "Классический", "Лофт"], answer: "Скандинавский" },
        { question: "Как называется элемент, визуально увеличивающий пространство?", options: ["Зеркало", "Картина", "Диван"], answer: "Зеркало" },
        { question: "Какой цвет чаще всего используется в современных интерьерах?", options: ["Белый", "Красный", "Синий"], answer: "Белый" },
        { question: "Что такое акцентная стена?", options: ["Выделенная цветом стена", "Стена с окнами", "Без отделки"], answer: "Выделенная цветом стена" },
        { question: "Какой материал чаще всего используется для полов?", options: ["Ламинат", "Обои", "Ткань"], answer: "Ламинат" },
        { question: "Как называется стиль с металлическими деталями и необработанными поверхностями?", options: ["Лофт", "Барокко", "Рустик"], answer: "Лофт" },
        { question: "Что помогает зонировать пространство?", options: ["Перегородка", "Лампа", "Ковер"], answer: "Перегородка" }
    ];

    const quizContainer = document.getElementById('questions');
    const resultContainer = document.getElementById('quiz-result');

    // Генерация вопросов
    questions.forEach((q, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.innerHTML = `
            <p><strong>${index + 1}. ${q.question}</strong></p>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionBlock);
    });

    // Проверка ответов
    document.getElementById('quiz-form').addEventListener('submit', function (e) {
        e.preventDefault();
        let score = 0;

        questions.forEach((q, index) => {
            const userAnswer = document.querySelector(`input[name="question${index}"]:checked`);
            if (userAnswer && userAnswer.value === q.answer) score++;
        });

        resultContainer.innerHTML = `
            <h4>Ваш результат: ${score} из ${questions.length}</h4>
            <p>${score >= 5 ? "Отлично! Вы разбираетесь в дизайне интерьера." : "Неплохо! Попробуйте ещё раз."}</p>
        `;
    });

    // Оценка сервиса
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function () {
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});
