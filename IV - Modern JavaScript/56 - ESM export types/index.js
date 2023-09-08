import {inline} from './inline.js'
import defaultInline from './inline.js'
//export default não usa chaves e só pode ser exportado um default por arquivo. O export default também pode exportar uma função anônima.
import {group} from './non-inline.js'
import exportDefault from './non-inline.js'
//também é possível importar mais de um módulo ao mesmo tempo
//import exportDefault, {group} from './non-inline.js

inline()
defaultInline()

group()
exportDefault()