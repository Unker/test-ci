export default function checkHealth({ health }) {
  let result = 'critical';

  if (health > 90) {
    result = 'healthy';
  } else if (health >= 15) {
    result = 'wounded';
  }

  return result;
}

export function sortByHealt(character) {
  return [...character].sort((a, b) => b.health - a.health);
}
