// Construa a seguinte imagem abaixo
// Utilizando estruturas de repetição

// *=================*
//  *===============*
//   *=============*  
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *

for (let i = 17; i > -2; i-=2) {

    for (let space = (17 - i) / 2; space > 0; space--) {
        document.write("&ensp;");
    }
    
    for (let j = 0; j < i; j++) {
        if (j == 0) {
            document.write("*");
        }
        document.write("=");
    }
    document.write("*<br>");
}