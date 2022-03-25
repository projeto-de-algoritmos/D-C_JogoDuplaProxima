module.exports = class MergeSort {
    constructor() {
        this.vetor = [];

	}
     mergeSort(vetor, inicio, fim) {
    if ((fim - inicio) > 1) {
        var meio = Math.round((fim + inicio) / 2);
        
        this.mergeSort(vetor, inicio, meio);

        this.mergeSort(vetor, meio, fim);

        this.merge(vetor, inicio, meio, fim);
         }
      

    }

    merge(vetor, incio, meio, final) {
        var x = 0;
        var y = incio;
        var z = meio;
        var vetAux = [];
        while (y < meio && z < final) {
            if (vetor[y] < vetor[z])
                vetAux[x] = vetor[y++];
            else
                vetAux[x] = vetor[z++];

            x++;
        }
        while (y < meio) {
            vetAux[x++] = vetor[y++];
        }
        while (z < final) {
            vetAux[x++] = vetor[z++];
        }
        for (var i = 0; i < x; i++) {
            vetor[incio + i] = vetAux[i];

        }
    }




}