window.onload = function() {
  let preloader = document.querySelector('.preloader')

  setTimeout(() => {
    preloader.classList.add('fade')
    setTimeout(() => {
      preloader.remove()
    }, 500)
  }, 500)
}

new Vue({
  el: '#app',
  data: {
    nomeAluno: null,
    status: 'Aguardando',
    StatusBol: false,
    NotaPrimeira: null,
    NotaSegunda: null,
    NotaTerceira: null,
    debug: false,
  },
  computed: {
    Notanecessaria: function() {
      let P1 = this.NotaPrimeira
      let P2 = this.NotaSegunda
      let faltante
      faltante = (24.8 - P2 - P1) / 2
      return faltante.toFixed(1)
    },
    media: function() {
      let P1 = this.NotaPrimeira
      let P2 = this.NotaSegunda
      let P3 = this.NotaTerceira
      return P1 * 0.25 + P2 * 0.25 + P3 * 0.5
    },
    resultado: function() {
      if (this.Notanecessaria > 10) {
        this.status = 'Reprovado'
        this.StatusBol = false
        return 'O aluno está reprovado'
      } else {
        this.status = 'Possivel'
        this.StatusBol = true
        return 'O aluno ainda pode passar'
      }
    },
  },
})
