/**
 * Nombre: ancho*alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD2560 x1440
 * FHD1920 x 1080
 * HD 1280 x 720
 */

function nombreResolucion(ancho, alto) {
  if (ancho >= 7680 && alto >= 4320) {
    return '8K';
  } else if (ancho >= 3840 && alto >= 2160) {
    return '4K';
  } else if (ancho >= 2560 && alto >= 1440) {
    return 'WQHD';
  } else if (ancho >= 1920 && alto >= 1080) {
    return 'FHD';
  } else if (ancho >= 1280 && alto >= 720) {
    return 'HD';
  } else {
    console.log('No es una resolución válida');
  }
}
let nombre = nombreResolucion(840, 2160);
console.log(nombre); //Retorna "HD"
