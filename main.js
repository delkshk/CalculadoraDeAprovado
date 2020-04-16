new Vue({
    el : "#app",
    data: {
        nomeAluno: "",
        status:"Aguardando",
        NotaPrimeira: 0,
        NotaSegunda: 0,
        NotaTerceira: 0,
    },
    computed: {
        Notanecessaria: function(){
            let P1 = this.NotaPrimeira
            let P2 = this.NotaSegunda
            faltante = (24.8-P2-P1)/2
            return faltante.toFixed(1)
        },
        media: function () {
          let P1 = this.NotaPrimeira
          let P2 = this.NotaSegunda
          let P3 = this.NotaTerceira
          return P1 * 0.25 + P2 * 0.25 + P3 * 0.5
        },
        resultado: function(){
            if (this.Notanecessaria > 10) {
                this.status = "Reprovado"
                return "O aluno está reprovado"
            }else{
                this.status = "Possivel"
                return "O aluno ainda pode passar"
            }
        }
      }
})