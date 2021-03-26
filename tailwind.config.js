module.exports = {
    purge: [],
    darkMode: 'media',
    theme: {
        extend: {
            boxShadow: {
                'dark': '0 4px 6px -1px rgba(255,255,255,0.1)'
            }
        }
    },
    variants: {
        extend: {
             boxShadow: ['dark'],
        }
    },
    plugins: []
}
