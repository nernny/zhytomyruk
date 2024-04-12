const serverApiUrl = 'https://api.mcsrvstat.us/3/mc.zhytomyr.uk';

// Функция для получения информации о сервере
async function getServerInfo() {
    try {
        // Отправляем запрос к API сервера
        const response = await fetch(serverApiUrl);

        // Проверяем успешность запроса
        if (!response.ok) {
            throw new Error(`Ошибка при запросе: ${response.status} ${response.statusText}`);
        }

        // Получаем данные в формате JSON
        const data = await response.json();

        // Проверяем, получены ли данные
        if (data) {
            // Выводим информацию о сервере в консоль
            console.log('Игроков онлайн: ' + data.players.online);

            // Выводим информацию о сервере под текстом "ZHYTOMYR"
            if (!data.players.online == 0) {
              document.getElementById('onlinePlayersInfo').innerText = 'Игроков онлайн: ' + data.players.online;
            }
        } else {
            console.log('Данные не получены.');
        }
    } catch (error) {
        console.error('Произошла ошибка:', error.message);
    }
}

// Вызываем функцию для получения информации о сервере
getServerInfo();