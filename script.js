console.log("Добро пожаловать на мой сайт!");
document.getElementById("send-btn").addEventListener("click", async function() {
    const userMessage = document.getElementById("user-input").value;
    if (!userMessage) return;

    // Отправка запроса на Flask-сервер
    const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    // Отображение ответа бота
    console.log(data.response); // Вывод в консоль (можно добавить в интерфейс)
});
