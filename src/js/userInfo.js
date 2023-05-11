import fetchData from './http';

export default function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  let res = 'Информация об уровне временно недоступна';

  if (response.status === 200) {
    res = `Ваш текущий уровень: ${response.level}`;
  } else if (response.status === 204) {
    res = `Пользователь ${userId} не найден`;
  } else if (response.status >= 400 && response.status < 500) {
    res = `Ошибка запроса. userId=${userId}`;
  }

  return res;
}
