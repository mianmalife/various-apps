import css from './index.less'
import detail from './detail.js'
console.log('ahhah12')
if (module.hot) {
    module.hot.accept('./detail.js', function () {
        console.log('Accepting the updated printMe module!');
        detail();
    })
}