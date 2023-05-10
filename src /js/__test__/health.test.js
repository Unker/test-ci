import checkHealth from '../health';

test.each([
  [{ name: 'Маг', health: 90 }, 'wounded'],
  [{ name: 'Маг', health: 91 }, 'healthy'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])(
  ('check healthy %s with %s'),
  (character, expected) => {
    const result = checkHealth(character);

    expect(result).toBe(expected);
  },
);
