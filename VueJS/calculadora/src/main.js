import Vue from "vue";
import App from './App';

new Vue({
    // Podemos utilizar o el: no inicio do codigo para referenciar o arquivo que vamos usar de referencia
    // ou podemos utilizar .$mount() no final do codigo para referenciar o arquivo
    // el: '#app',
    // .$mount('#app')
    render: h => h(App)
    // o codigo acima significa a mesma coisa de baixo
    // render(createElement) {
    //     return createElement(App)}

}).$mount('#app')


