function toDegreeMinuteSecond(decimalDegree: number): string {
  const deg = Math.round(decimalDegree);
  const minSecDeg = (decimalDegree - deg);
  const minSec = minSecDeg * 60;
  const min = Math.round(minSec);
  const sec = Math.round((minSec - min) * 60);

  return `${deg}°${min}'${sec}'`
}

function toDecimalDegree(degreeMinuteSecond: string): number {
  let [deg, min, sec] = degreeMinuteSecond
    .replace('°', ';')
    .replace('\'', ';')
    .replace('"', ';')
    .split(';')
    .map(str => str ? parseInt(str) : 0);
  
  min = min / 60;
  sec = sec / 3600;

  return deg + min + sec;
}
