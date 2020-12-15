let app = new Vue({
    el: '#root',
    data: {
        showRecipe1: {
            state: true,
            linkLabel: 'hide'
        },
        showRecipe2: {
            state: true,
            linkLabel: 'hide'
        },
        showToBuy:
        {
            state: true,
            linkLabel: 'hide'
        },
        showAlreadyHave: {
            state: true,
            linkLabel: 'hide'
        },
        newIngredient1: '',
        newIngredient2: '',
        ingredients1: [
            { description: 'breadcrumbs', completed: true },
            { description: '28oz can diced tomatoes', completed: false },
            { description: 'fresh basil', completed: true },
            { description: '1 medium eggplant', completed: false }
        ],
        ingredients2: [
            { description: '1 green apple', completed: false },
            { description: 'sprouted mung beans', completed: true },
            { description: '16oz can coconut milk', completed: true },
            { description: 'fresh mint', completed: false },
            { description: 'ginger', completed: false }
        ],
        recipeName_1: 'Eggplant No Parm',
        recipeName_2: 'Mung Bean Dal'
    },
    methods: {
        addIngredient1() {
            let value = this.newIngredient1;
            this.ingredients1.push(
                { description: value, completed: false }
            ),
                this.newIngredient1 = '';
        },
        addIngredient2() {
            let value = this.newIngredient2;
            this.ingredients2.push(
                { description: value, completed: false }
            ),
                this.newIngredient2 = '';
        },
        toggleShow(current) {
            if (current.state) {
                current.state = false;
                current.linkLabel = 'show';
            }
            else {
                current.state = true;
                current.linkLabel = 'hide';
            }
        }
    },
    computed: {
        toBuy1() {
            return this.ingredients1.filter(item => !item.completed);
        },
        alreadyHave1() {
            return this.ingredients1.filter(item => item.completed);
        },
        toBuy2() {
            return this.ingredients2.filter(item => !item.completed);
        },
        alreadyHave2() {
            return this.ingredients2.filter(item => item.completed);
        },
    }
})