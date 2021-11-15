new Vue({
    el: "#app",
    data:{
        playerLife: 0,
        monsterLife: 0,
        running: false
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        startGame(){
            this.running = true;
            this.monsterLife = 100;
            this.playerLife = 100;
        },
        attack(special){
            this.hurt('playerLife', 7, 12, false);
            this.hurt('monsterLife', 5, 10, special);
        },
        hurt(atr, min, max, special){
            const plus = special ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[atr] = Math.max(this[atr] - hurt, 0); //Se nº < 0, n = 0 (para não ficar negativo) 
        },
        getRandom(min, max){
            const value = Math.random() * (max-min) + min;
            return Math.round(value);
        },
        healAndHurt(){
            this.heal(10, 15);
            this.hurt('playerLife', 7, 12, false);
        },
        heal(min, max){
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100); //Pega no máximo o valor 100
        }
    },
    watch:{
        hasResult(value){
            if(value){
                this.running = false;
            }
        }
    }
});