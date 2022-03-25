module.exports = class MergeSort {

    mergeSort(vetor, inicio, fim) {
    if ((fim - inicio) > 1) {
        var meio = Math.round((fim + inicio) / 2);

        mergeSort(vetor, inicio, meio);

        mergeSort(vetor, meio, fim);

        merge(vetor, inicio, meio, fim);
    }

    }

     merge(vetor, inicio, meio, final) {
         var atualiza = 0, ;
         var atualizacao2 = inicio;
         var atualizacao3 = meio;
    var novoVet = [];
    while (atualizacao2 < meio && atualizacao3 < final) {

        if (vetor[atualizacao2] < vetor[atualizacao3]) {
            novoVet[atualiza] = vetor[atualizacao2];
            atualizacao2++;
        }
        else {
            novoVet[atualiza] = vetor[atualizacao3];
            atualizacao3++;
        }
        atualiza++;
    }

    while (atualizacao2 < meio) {
        novoVet[atualiza] = vetor[atualizacao2];
        atualiza++;
        atualizacao2++;
    }
    while (atualizacao3 < final) {
        novoVet[atualiza] = vetor[atualizacao3];
        atualizacao3++;
        atualiza++;
    }
    return novoVet;

}











}