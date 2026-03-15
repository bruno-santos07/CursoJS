let colocacao = 4

switch(colocacao){
    case 1:
        console.log('Primeiro Lugar')
        break;
    case 2:
        console.log('Segundo Lugar')
        break;
    case 3:
        console.log('Terceiro Lugar')
        break;
    case 4: case 5:
        console.log('Prêmio por participação!')
        break;

    default:
        console.log('Você foi desclassificado!')
        break
}