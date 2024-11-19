console.log("Скрипт auth.js загружен!");

// Ожидание загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn"); // Кнопка "Вход"
    const registerBtn = document.getElementById("registerBtn"); // Кнопка "Регистрация"
    const usernameInput = document.getElementById("username"); // Поле ввода имени пользователя
    const passwordInput = document.getElementById("password"); // Поле ввода пароля
    const profileSection = document.getElementById("profile"); // Секция профиля
    const formSection = document.getElementById("formSection"); // Секция формы входа/регистрации

    // Обработчик для кнопки "Регистрация"
    registerBtn.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("Введите имя пользователя и пароль.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || {};
        if (users[username]) {
            alert("Пользователь уже существует.");
        } else {
            users[username] = password;
            localStorage.setItem("users", JSON.stringify(users));
            console.log("Пользователи сохранены:", users); // ЛОГ ДЛЯ ПРОВЕРКИ
            alert("Регистрация успешна!");
        }
    });

    // Обработчик для кнопки "Вход"
    loginBtn.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("Введите имя пользователя и пароль.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || {};
        console.log("Существующие пользователи:", users); // ЛОГ ДЛЯ ПРОВЕРКИ

        if (users[username] && users[username] === password) {
            localStorage.setItem("loggedInUser", username);
            showProfile(username);
        } else {
            alert("Неверное имя пользователя или пароль.");
        }
    });

    // Функция отображения профиля
    function showProfile(username) {
        formSection.style.display = "none";
        profileSection.style.display = "block";
        profileSection.innerHTML = `<h1>Добро пожаловать, ${username}!</h1>`;
    }

    // Проверка на авторизованного пользователя
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        showProfile(loggedInUser);
    }
});
