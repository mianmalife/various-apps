import intl from 'react-intl-universal'
import zhCN from 'antd/lib/locale/zh_CN'
const config = {}
const requireCtx = require.context('./', false, /[^index].\js$/)
const importAll = r => r.keys().map(r)
const all = importAll(requireCtx)
config['en_US'] = all[0].default
config['zh_CN'] = all[1].default
const language = localStorage.getItem('lang') || 'zh_CN'
export const loadLocales = (lang) => {
    return new Promise(resolve => {
        resolve(config)
    }).then(data => {
        intl.init({
            currentLocale: lang || language,
            locales: data
        })
    })
}

const antdLocales = Object.defineProperties({}, {
    'zh_CN': {
        get() {
            import('dayjs/locale/zh-cn')
            import('antd/lib/locale/zh_CN')
            return zhCN
        }
    }
})
export const antdLocale = antdLocales[language]

