import getLevel from '../userInfo';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel should return 200', () => {
  fetchData.mockReturnValue({ status: 200, level: 47 });

  const response = getLevel(1);
  expect(response).toEqual('Ваш текущий уровень: 47');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('getLevel should return 204', () => {
  fetchData.mockReturnValue({ status: 204, level: 47 });

  const response = getLevel(1);
  expect(response).toEqual('Пользователь 1 не найден');
});

test('getLevel should return 404', () => {
  fetchData.mockReturnValue({ status: 404, level: 47 });

  const response = getLevel(1);
  expect(response).toEqual('Ошибка запроса. userId=1');
});

test('getLevel should return "unavailible"', () => {
  fetchData.mockReturnValue({ status: 500, level: 47 });

  const response = getLevel(1);
  expect(response).toEqual('Информация об уровне временно недоступна');
});
