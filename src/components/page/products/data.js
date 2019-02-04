const data = [
    {
        name: 'LEGITIM',
        price: '$1.49',
        img: '/src/assets/images/product/cirkustalt-children-s-tent__0120516_PE277185_S4.JPG',
        star: 4,
        branch: 1
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/detolf-glass-door-cabinet-brown__72928_PE189178_S4.JPG',
        star: 3,
        branch: 2
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/mala-easel-white__0135810_PE292683_S4.JPG',
        star: 2,
        branch: 3
    },
    {
        name: 'LEGITIM',
        price: '$1.49',
        img: '/src/assets/images/product/boholmen-colander-black__0122322_PE278601_S4.JPG',
        star: 4,
        branch: 4
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/detolf-glass-door-cabinet-brown__72928_PE189178_S4.JPG',
        star: 3
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/grundtal-hanger-for-door__0209200_PE362809_S4.JPG',
        star: 2,
        branch: 5
    },
    {
        name: 'LEGITIM',
        price: '$1.49',
        img: '/src/assets/images/product/jara-lamp-shade-white__0331375_PE522995_S4.JPG',
        star: 4,
        branch: 6
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/legitim-chopping-board-white__0119427_PE275744_S4.JPG',
        star: 3,
        branch: 7
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/potatischips-graddfil-lok-sour-cream-and-onion-potato-chips__79438_PE203428_S4.JPG',
        star: 2,
        branch: 8
    },
    {
        name: 'LEGITIM',
        price: '$1.49',
        img: '/src/assets/images/product/rodd-floor-lamp-base-black__0120136_PE276562_S4.JPG',
        star: 4,
        branch: 9
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/grono-table-lamp__0371679_PE551465_S4.JPG',
        star: 3,
        branch: 10
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/rakor-med-skal-shrimp-with-shell-frozen__0410914_PE570314_S4.JPG',
        star: 2,
        branch: 11
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/rostad-lok-fried-onion__0143725_PE304943_S4.JPG',
        star: 2,
        branch: 1
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/tarta-chokladkrokant-almond-cake-chocolate-butterscotch__0285556_PE422522_S4.JPG',
        star: 2,
        branch: 3
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/vilshult-picture__0090396_PE224180_S4.JPG',
        star: 2,
        branch: 4
    },
    {
        name: 'DETOLF',
        price: '$1.49',
        img: '/src/assets/images/product/raskog-utility-cart-turquoise__0144044_PE304208_S4.JPG',
        star: 2,
        branch: 7
    },

]
const menu = [
    {
        name: 'Bathroom',
        count: 488,
        children: [
            {
                name: "Bathroom accessories",
                path: "/home",
                count: 28,
                id: 1
            },
            {
                name: "Bathroom lighting",
                path: "/home",
                count: 49,
                id: 2
            },
            {
                name: "Bathroom mirrors",
                path: "/home",
                count: 58,
                id:3
            },
            {
                name: "Faucets",
                path: "/home",
                count: 20,
                id: 4
            }
        ]
    },
    {
        name: 'Cooking',
        count: 488,
        children: [
            {
                name: "Bathroom accessories",
                path: "/home",
                count: 28,
                id: 5
            },
            {
                name: "Bathroom lighting",
                path: "/home",
                count: 49,
                id: 6
            },
            {
                name: "Bathroom mirrors",
                path: "/home",
                count: 58,
                id: 7
            },
            {
                name: "Faucets",
                path: "/home",
                count: 20,
                id: 8
            },
        ]
    },
    {
        name: 'Cooking',
        count: 488,
        children: [
            {
                name: "Bathroom accessories",
                path: "/home",
                count: 28,
                id: 9
            },
            {
                name: "Bathroom lighting",
                path: "/home",
                count: 49,
                id: 10
            },
            {
                name: "Bathroom mirrors",
                path: "/home",
                count: 58,
                id: 11
            },
            {
                name: "Faucets",
                path: "/home",
                count: 20,
                id: 12
            },
        ]
    },
    {
        name: 'Decoration',
        count: 488,
        children: [
            {
                name: "Bathroom accessories",
                path: "/home",
                count: 28,
                id: 13
            },
            {
                name: "Bathroom lighting",
                path: "/home",
                count: 49,
                id: 14
            },
            {
                name: "Bathroom mirrors",
                path: "/home",
                count: 58,
                id: 15
            },
            {
                name: "Faucets",
                path: "/home",
                count: 20,
                id: 16
            },
        ]
    },
    {
        name: 'Dining',
        count: 488,
        children: [
            {
                name: "Bathroom accessories",
                path: "/home",
                count: 28,
                id: 17
            },
            {
                name: "Bathroom lighting",
                path: "/home",
                count: 49,
                id: 18
            },
            {
                name: "Bathroom mirrors",
                path: "/home",
                count: 58,
                id: 19
            },
            {
                name: "Faucets",
                path: "/home",
                count: 20,
                id: 20
            },
        ]
    },
    {
        name: 'Eating',
        count: 488,
        children: [
            {
                name: "Bathroom accessories",
                path: "/home",
                count: 28,
                id: 21
            },
            {
                name: "Bathroom lighting",
                path: "/home",
                count: 49,
                id: 22
            },
            {
                name: "Bathroom mirrors",
                path: "/home",
                count: 58,
                id: 23
            },
            {
                name: "Faucets",
                path: "/home",
                count: 20,
                id: 24
            },
        ]
    },
    {
        name: 'Kitchen & appliances',
        count: 488,
        children: [
            {
                name: "Bathroom accessories",
                path: "/home",
                count: 28,
                id: 25
            },
            {
                name: "Bathroom lighting",
                path: "/home",
                count: 49,
                id: 26
            },
            {
                name: "Bathroom mirrors",
                path: "/home",
                count: 58,
                id: 27
            },
            {
                name: "Faucets",
                path: "/home",
                count: 20,
                id: 28
            },
        ]
    },
    {
        name: 'Small storage',
        count: 488,
        children: [
            {
                name: "Quy dong",
                path: "/home",
                count: 28,
                id: 29
            },
            {
                name: "Bathroom lighting",
                path: "/home",
                count: 49,
                id: 30
            },
            {
                name: "Bathroom mirrors",
                path: "/home",
                count: 58,
                id: 31
            },
            {
                name: "Faucets",
                path: "/home",
                count: 20,
                id: 32
            },
        ]
    },

]
const categories = [
{ name: 'Glass', path: '/home', id: 1 },
    { name: 'Polypropylene', path: '/home', id: 2 },
    { name: 'ABS plastic', path: '/home', id: 3 },
    { name: '100% plolyese', path: '/home', id: 4 },
    { name: '100% cotton', path: '/home', id: 5 },
    { name: '100% polypropylene', path: '/home', id: 6 }
]
export default data;
export { menu, categories };