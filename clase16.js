var signo = prompt('¿Cual es tu signo?').toLowerCase()

switch (signo) {
  case 'acuario':
    console.log('horoscopo de acuario');
    break;
  case 'piscis' :
    console.log('horoscpo de piscis');
  break
  default:
    console.log('No tengo este signo');
    break;
}