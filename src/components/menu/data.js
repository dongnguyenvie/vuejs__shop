const data = [
    {
        name: 'Home', path: '/home', type: 'nav__dropdown', children: [
            { name: 'Home one', path: '/Home' },
            { name: 'Home one', path: '/Home' },
            { name: 'Home one', path: '/Home' },
            { name: 'Home one', path: '/Home' }
        ]
    },
    { name: 'shop', path: '/shop', type: 'nav__dropdown' },
    { name: 'Accessories', path: '/home' },
    {
        name: 'Categories', path: '/home', type: 'nav__dropdown-style', children: [
            {
                name: "menu one",
                children: [
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' }
                ]
            },
            {
                name: "menu one",
                children: [
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' }
                ]
            },
            {
                name: "menu one",
                children: [
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' }
                ]
            },
            {
                name: "menu one",
                children: [
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' },
                    { name: 'Home one', path: '/Home' }
                ]
            },
        ]
    },
    {
        name: 'pages', path: '/shop', type: 'nav__dropdown', children: [
            { name: 'Home one', path: '/Home' },
            { name: 'Home one', path: '/Home' },
            { name: 'Home one', path: '/Home' },
            { name: 'Home one', path: '/Home' }
        ]
    },
    {
        name: 'session', path: '/home', type: 'nav__dropdown', children: [
            { name: 'Home one', path: '/Home' },
            { name: 'Home one', path: '/Home' },
            { name: 'Home one', path: '/Home' },
            { name: 'Home one', path: '/Home' }
        ]
    },
    {
        name: 'contact us', path: '/contact', type: 'nav__dropdown'
    }
]

export default data;