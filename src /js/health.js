export default function checkHealth(character) {
  let result = 'critical';

  if (character.health > 90) {
    result = 'healthy';
  } else if (character.health >= 15) {
    result = 'wounded';
  }

  return result;
}
