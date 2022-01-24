import chalk from 'chalk'
import prism from 'prismjs'
import loadLanguages from 'prismjs/components/index'
import escapeHtml from 'escape-html'

loadLanguages(['markup', 'css', 'javascript'])

const wrap = (code: string, lang: string) => {
    if (lang === 'text') {
        code = escapeHtml(code)
    }
    return `<pre v-pre><code>${code}</code></pre>`
}


export const highlight = (str: string, lang: string): string => {
    if (!lang) {
        return wrap(str, 'text')
    }
    lang = lang.toLowerCase()
    const rawLang = lang
    const langMap = {
        vue: 'markup',
        html: 'markup',
        md: 'markdown',
        ts: 'typescript',
        py: 'python',
    }
    lang = langMap[lang] || lang

    if (!prism.languages[lang]) {
        try {
            loadLanguages([lang]);
        }
        catch (e) {
            console.warn(chalk.yellow(`[vitepress] Syntax highlight for language "${lang}" is not supported.`));
        }
    }
    if (prism.languages[lang]) {
        const code = prism.highlight(str, prism.languages[lang], lang);
        return wrap(code, rawLang);
    }
    return wrap(str, 'text');
}
