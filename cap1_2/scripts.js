new Vue({
    el: '#app', //referencia um elemento do DOM
    data: { //dados a serem manipulados
        titulo: 'Usando VueJS', //dados e funções não podem ter mesmo nome
        linkGoogle: "https://google.com.br",
        linkHtml: '<a href="https://guilhermerocha.tk" target="_black">Portfólio</a>',
        contador: 0,
        x: 0,
        y: 0,

        estilo1: false,
        cor: 'red',
        altura: 100,
    },
    computed:{
        resultado(){
            return this.contador > 10 ? 'Maior do que 10' : 'Menor ou igual a 10'
        },

        aplicarEstilo(){
            return{
                b1: this.estilo1,
                b2: !this.estilo1
            }
        },

        estilos(){
            return{
                backgroundColor: this.cor,
                height: this.altura + 'px'
            }
        }
    },
    watch:{ //propriedade que verifica sempre que um dado é alterado
        contador(novo, antigo){
            setTimeout(() => {
                this.contador = 0;
            }, 5000);
        }
    },
    methods: {
        alterarTitulo(event){
            this.titulo = event.target.value 
        },
        saudacao: function(){
            //console.log(this)
            return this.titulo
        },
        somar(){
            this.contador++
        },
        atualizarMouse(e){
            this.x = e.clientX;
            this.y = e.clientY;
        },
        notificaEnter(e){
            alert("Apertou alt e enter");
        },
    }
})