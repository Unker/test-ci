import getLevel from '../userInfo';
import fetchData from '../http';

// Mock the fetchData module
jest.mock('../http');

describe('getLevel', () => {
  test('returns the correct level information when status is 200', () => {
    const userId = 123;
    const response = {
      status: 200,
      level: 5,
    };

    // Mock the fetchData function to return the mocked response
    fetchData.mockReturnValueOnce(response);

    const result = getLevel(userId);

    expect(result).toBe('Ваш текущий уровень: 5');
    expect(fetchData).toHaveBeenCalledTimes(1);
    expect(fetchData).toHaveBeenCalledWith('https://server/user/123');
  });

  test('returns "Пользователь не найден" when status is 204', () => {
    const userId = 123;
    const response = {
      status: 204,
    };

    fetchData.mockReturnValueOnce(response);

    const result = getLevel(userId);

    expect(result).toBe('Пользователь 123 не найден');
    expect(fetchData).toHaveBeenCalledTimes(2);
    expect(fetchData).toHaveBeenCalledWith('https://server/user/123');
  });

  test('returns error message when status is between 400 and 500', () => {
    const userId = 123;
    const response = {
      status: 404,
    };

    fetchData.mockReturnValueOnce(response);

    const result = getLevel(userId);

    expect(result).toBe('Ошибка запроса. userId=123');
    expect(fetchData).toHaveBeenCalledTimes(3);
    expect(fetchData).toHaveBeenCalledWith('https://server/user/123');
  });

  test('returns default message when status is not handled', () => {
    const userId = 123;
    const response = {
      status: 300,
    };

    fetchData.mockReturnValueOnce(response);

    const result = getLevel(userId);

    expect(result).toBe('Информация об уровне временно недоступна');
    expect(fetchData).toHaveBeenCalledTimes(4);
    expect(fetchData).toHaveBeenCalledWith('https://server/user/123');
  });
});
