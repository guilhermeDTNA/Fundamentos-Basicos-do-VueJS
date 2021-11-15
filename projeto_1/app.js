new Vue({
    el: "#app",
    data:{
        playerLife: 0,
        monsterLife: 20,
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
        }
    },
    watch:{

    }
});