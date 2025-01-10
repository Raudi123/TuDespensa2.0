// Configuración global disponible para todos los componentes
const CONFIG = {
    WHATSAPP_NUMBER: '5354066204',
    PAYMENT_METHODS: {
        ZELLE: 'Zelle',
        TRANSFER_CUP: 'Transferencia CUP',
        TRANSFER_MLC: 'Transferencia MLC',
        CASH: 'Efectivo'
    },
    CONVERSION_RATES: {
        CUP: 320,
        MLC: 1.15
    },
    STORES: [
        {
            id: 'store1',
            name: 'Alimentos',
            description: 'Todo tipo de alimentos frescos, secos y congelados a solo un click de distancia',
            address: 'Artemisa',
            phone: '',
            whatsappNumber: '5354066204',
            products: [
                {
                    id: 1,
                    name: "Cartón de Huevos",
                    description: "30 uds frescos",
                    price: 13.99,               
                       image: "huevo.jpg"
                },
                {
                    id: 2,
                    name: "Pierna de cerdo",
                    description: "x lb calidad y frescura",
                    price: 3.80,               
                       image: "pierna.jpg"
                },
                {
                    id:3,
                    name: "Caja de pollo ",
                    description: "33 lb",
                    price: 48,               
                       image: "pollocaja.jpg"
                },
                {
                    id: 4,
                    name: "Caja de pollo",
                    description: "40 lb",
                    price: 58 ,               
                       image: "pollocaja.jpg"
                },
                {
                    id:5,
                    name: "Lomo deshuesado ",
                    description: "Lb, Importado",
                    price: 5.20,               
                       image: "lomo.jpg"
                },
                {
                    id: 6,
                    name: "Masas de cerdo",
                    description: "Lb, frescas",
                    price: 4.60,               
                       image: "masas.jpg"
                },
                {
                    id: 7,
                    name: "Bistec de cerdo",
                    description: "lb, frescos",
                    price:5.20,               
                       image: "bistec.jpg"
                },
                {
                    id: 8,
                    name: "Pollo",
                    description: "Lb",
                    price: 1.60,               
                       image: "pollo.jpg"
                },
                {
                    id: 9,
                    name: "Jamón vicky",
                    description: "lb,calidad",
                    price: 3.50,               
                       image: "vicky.jpg"
                },
                {
                    id: 10,
                    name: "Lomo ahumado sin huesos",
                    description: "lb, envasado loncheado",
                    price: 6.50,               
                       image: "ahumado.jpg"
                },
                {
                    id: 11,
                    name: "Pechuga de pollo ",
                    description: "Lb, sellado",
                    price: 5.06,               
                       image: "pechuga.jpg"
                },
                {
                    id: 12,
                    name: "Jamón embuchado",
                    description: "lb, sellado",
                    price: 4,               
                       image: "embuchado.jpg"
                },
                {
                    id: 13,
                    name: "Picadillo mixto",
                    description: "uds",
                    price: 2.50,               
                       image: ""
                },
                {
                    id: 14,
                    name: "Salchichas ",
                    description: "ud de 12 uds",
                    price: 2.80,               
                       image: ""
                },
                {
                    id: 15,
                    name: "Chorixo vela ",
                    description: "lb, sellado",
                    price: 3.60,               
                       image: ""
                },
                {
                    id: 16,
                    name: "Atun",
                    description: "1 kg",
                    price: 16,               
                       image: ""
                },
                {
                    id: 17,
                    name: "Cerveza cristal ",
                    description: "1 caja ",
                    price: 22,               
                       image: ""
                },
                {
                    id: 18,
                    name: "cerveza bucanero",
                    description: "24 uds",
                    price: 22,               
                       image: ""
                },
                {
                    id: 19,
                    name: "Cerveza económica",
                    description: "24 uds",
                    price: 18,               
                       image: ""
                },
                {
                    id: 20,
                    name: "Vino Acantus",
                    description: "Tinto, Rosado, Blanco",
                    price: 5,               
                       image: ""
                },
                {
                    id: 21,
                    name: "Vino Espumoso",
                    description: "750 ml",
                    price: 10 ,               
                       image: ""
                },
                {
                    id: 22,
                    name: "Ron Habana Club",
                    description: "3 años 750 ml",
                    price: 7.50,               
                       image: ""
                },
                {
                    id: 23,
                    name: "Malta Guajira",
                    description: "6 uds de 500 ml",
                    price: 6.50,               
                       image: ""
                },
                {
                    id: 24,
                    name: "Jugo ",
                    description: "24 uds sabor pera 200 ml",
                    price: 14.40,               
                       image: ""
                },
                {
                    id: 25,
                    name: "Jugo",
                    description: "1 uds sabor narnja 1l",
                    price: 1.60,               
                       image: ""
                },
                {
                    id: 26,
                    name: "Jugo ",
                    description: "6 uds lata 330ml sabor multifrutas",
                    price: 6.50 ,               
                       image: ""
                },
                {
                    id:27,
                    name: "Malta morena ",
                    description: "24 uds",
                    price: 18,               
                       image: ""
                },
                {
                    id: 28,
                    name: "Refresco ",
                    description: "Lata 330 ml",
                    price: 1 ,               
                       image: ""
                },
                {
                    id: 29,
                    name: "Refresco",
                    description: "Pomo 1.5 Lt",
                    price: 1.80 ,               
                       image: ""
                },
                {
                    id: 30,
                    name: "Pasta de Tomate",
                    description: "800 gr ",
                    price: 3.20,               
                       image: ""
                },
                {
                    id: 31,
                    name: "pasta de tomate",
                    description: "400 gr",
                    price: 2.60,               
                       image: ""
                },
                {
                    id: 32,
                    name: "Frijol negro",
                    description: "bolsa de 4 lb",
                    price: 6.50,               
                       image: ""
                },
                {
                    id: 33,
                    name: "Arroz brasileño",
                    description: "bolsas 1 kg ",
                    price: 2.50,               
                       image: ""
                },
                {
                    id: 34,
                    name: "Mayonesa celorio",
                    description: "550 gr",
                    price: 6.50 ,               
                       image: ""
                },
                {
                    id: 35,
                    name: "Spaguetis",
                    description: "500 gr ",
                    price: 1.55 ,
                    image: ""
                }
            ]
        },
        {
            id: 'store2',
            name: 'Aseo',
            description: 'Aseo de calidad en la puerta de su casa solo un click de distancia',
            address: 'Artemisa',
            phone: '',
            whatsappNumber: '5354066204',
            products: [
                {
                    id: 1,
                    name: "Ropa Vieja",
                    description: "Plato tradicional cubano de carne deshebrada",
                    price: 12.99,
                    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                },
                {
                    id: 2,
                    name: "Arroz con Pollo",
                    description: "Arroz amarillo con pollo y vegetales",
                    price: 10.99,
                    image: "https://images.unsplash.com/photo-1512058556646-c4da40fba323?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                }
            ]
        },
        {
            id: 'store3',
            name: 'Electrodomésticos',
            description: 'Electrodomésticos a su alcance a un muy buen precio.',
            address: 'Artemisa',
            phone: '',
            whatsappNumber: '5354066204',
            products: [
                {
                    id: 1,
                    name: "Flan de Caramelo",
                    description: "Flan casero con salsa de caramelo",
                    price: 5.99,
                    image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                },
                {
                    id: 2,
                    name: "Café Cubano",
                    description: "Café expreso tradicional cubano",
                    price: 2.99,
                    image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                }
            ]
        }
    ]
};

// Variables y funciones globales
window.APP = {
    config: CONFIG
};
