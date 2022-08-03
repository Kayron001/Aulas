import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSucess',
    'Operação realizada com sucesso!',
    { type: 'sucess', icon: 'check' }
)

Vue.toasted.register(
    'defaulError',
    payload => !payload.msg ? 'Ops... Erro inesperado.' : payload.msg,
    { type: 'error', icon: 'times' }
)