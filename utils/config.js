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
                    description: "uds 400gr ",
                    price: 2.50,               
                       image: "picadillo.jpg"
                },
                {
                    id: 14,
                    name: "Salchichas ",
                    description: "ud de 12 uds",
                    price: 2.80,               
                       image: "perritos.jpg"
                },
                {
                    id: 15,
                    name: "Chorizo vela ",
                    description: "lb, sellado",
                    price: 3.60,               
                       image: "vela.jpg"
                },
                {
                    id: 16,
                    name: "Atun",
                    description: "1 kg",
                    price: 16,               
                       image: "atun.jpg"
                },
                {
                    id: 17,
                    name: "Cerveza cristal ",
                    description: "1 caja ",
                    price: 22,               
                       image: "cristal.jpg"
                },
                {
                    id: 18,
                    name: "cerveza bucanero",
                    description: "24 uds",
                    price: 22,               
                       image: "bucanero.jpg"
                },
                {
                    id: 19,
                    name: "Cerveza económica",
                    description: "24 uds",
                    price: 18,               
                       image: "timber.jpg"
                },
                {
                    id: 20,
                    name: "Vino Acantus",
                    description: "Tinto, Rosado, Blanco",
                    price: 5,               
                       image: "acantus.jpg"
                },
                {
                    id: 21,
                    name: "Vino Espumoso",
                    description: "750 ml",
                    price: 10 ,               
                       image: "espumoso.jpg"
                },
                {
                    id: 22,
                    name: "Ron Habana Club",
                    description: "3 años 750 ml",
                    price: 7.50,               
                       image: "3años.jpg"
                },
                {
                    id: 23,
                    name: "Malta Guajira",
                    description: "6 uds de 500 ml",
                    price: 6.50,               
                       image: "guajira.jpg"
                },
                {
                    id: 24,
                    name: "Jugo ",
                    description: "24 uds sabor pera 200 ml",
                    price: 14.40,               
                       image: "200ml.jfif"
                },
                {
                    id: 25,
                    name: "Jugo",
                    description: "1 uds sabor narnja 1l",
                    price: 1.60,               
                       image: "naranja.jpg"
                },
                {
                    id: 26,
                    name: "Jugo ",
                    description: "6 uds lata 330ml sabor multifrutas",
                    price: 6.50 ,               
                       image: "multifrutas.jpg"
                },
                {
                    id:27,
                    name: "Malta morena ",
                    description: "24 uds",
                    price: 18,               
                       image: "morena.jpg"
                },
                {
                    id: 28,
                    name: "Refresco ",
                    description: "Lata 330 ml",
                    price: 1 ,               
                       image: "refrescolata.jpg"
                },
                {
                    id: 29,
                    name: "Refresco",
                    description: "Pomo 1.5 Lt",
                    price: 1.80 ,               
                       image: "1.5lt.jpg"
                },
                {
                    id: 30,
                    name: "Pasta de Tomate",
                    description: "800 gr ",
                    price: 3.20,               
                       image: "800gr.jpg"
                },
                {
                    id: 31,
                    name: "pasta de tomate",
                    description: "400 gr",
                    price: 2.60,               
                       image: "vima.jpg"
                },
                {
                    id: 32,
                    name: "Frijol negro",
                    description: "bolsa de 4 lb",
                    price: 6.50,               
                       image: "frijol.jpg"
                },
                {
                    id: 33,
                    name: "Arroz brasileño",
                    description: "bolsas 1 kg ",
                    price: 2.50,               
                       image: "arroz.jpg"
                },
                {
                    id: 34,
                    name: "Mayonesa celorio",
                    description: "550 gr",
                    price: 6.50 ,               
                       image: "mayonesa.jpg"
                },
                {
                    id: 35,
                    name: "Spaguetis",
                    description: "500 gr ",
                    price: 1.55 ,
                    image: "spaguetis.jpg"
                },
                {
                    id: 36,
                    name: "Coditos ",
                    description: "bolsa 500 gr",
                    price: 1.55,               
                       image: "coditos.jpg  "
                }
                ,{
                    id: 37,
                    name: "Fideos  ",
                    description: "Bolsa 500gr",
                    price: 1.90,               
                       image: "fideos.jpg"
                },
                {
                    id: 38,
                    name: "Sopas Instantáneas ",
                    description: "Sobre 75 gr",
                    price: 1.90,               
                       image: "sopa.jpg "
                },
                {
                    id: 39,
                    name: "Aceite de Girasol ",
                    description: "Botella de 900 ml",
                    price: 2.80,               
                       image: "aceite.jpg "
                },
                {
                    id: 40,
                    name: "Pasta de Bocadito ",
                    description: "450 ml",
                    price: 5.80 ,               
                       image: "bocadito.jpg "
                },
                {
                    id: 41,
                    name: "Queso Gouda ",
                    description: "Kg",
                    price: 13.50,               
                       image: "queso.jpg "
                },
                {
                    id: 42,
                    name: "yogurt Probiótico ",
                    description: "4L ",
                    price: 15,               
                       image: "yogurt.jpg "
                },
                {
                    id: 43,
                    name: "Queso crema  ",
                    description: "300 gr",
                    price: 4.20,               
                       image: "crema.jpg  "
                },
                {
                    id: 44,
                    name: "Helado ",
                    description: "4L",
                    price: 12,               
                       image: "helado.jpg "
                },
                {
                    id: 45,
                    name: "Leche en polvo ",
                    description: "Bolsa de 1 kg",
                    price: 10,               
                       image: "lechepolvo.jpg "
                },
                {
                    id: 46,
                    name: "Leche Condensada ",
                    description: "lata 390gr",
                    price: 2.2,               
                       image: "condensada.jpg"
                },
                {
                    id: 47,
                    name: "Café",
                    description: "250 gr",
                    price: 7.90,               
                       image: "aroma.jpg "
                },
                {
                    id: 48,
                    name: "Ajo ",
                    description: "Bolsa de 10 uds",
                    price: 4.70,               
                       image: "ajo.jpg  "
                },
                {
                    id: 49,
                    name: "Malanga ",
                    description: "Bolsa de 5 lb",
                    price: 4.20 ,               
                       image: "malanga.jpg"
                },
                {
                    id: 50,
                    name: "Boniato ",
                    description: "Bolsa de 5 lb",
                    price: 2.40,               
                       image: "boniato.jpg "
                },
                {
                    id: 51,
                    name: "Cebolla  ",
                    description: "Bolsa de 20 uds",
                    price: 7,               
                       image: "cebolla.jpg "
                },
                {
                    id: 52,
                    name: "tomate ",
                    description: "Bolsa de 5 lb",
                    price: 7.40,               
                       image: "tomates.jpg "
                },
                {
                    id: 53,
                    name: "Col ",
                    description: "unidad",
                    price:1.70,               
                       image: "col.jpg"
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
                    name: "Jabón",
                    description: "De olor 100gr",
                    price: 1.20,
                    image: "jabon.jpg"
                },
                {
                    id: 2,
                    name: "Papel Higienico",
                    description: "bolsa de 4 uds ",
                    price: 2.20,
                    image: "papel.jpg"
                },
                {
                    id: 3,
                    name: "Suavizante de ropa",
                    description: "1L",
                    price: 6,
                    image: "suavizante.jpg"
                },
                {
                    id: 4,
                    name: "Detergente liquido para ropa 4en1",
                    description: "1L",
                    price: 5.20,
                    image: "4en1.jpg"
                },
                {
                    id: 5,
                    name: "Perlas de olor",
                    description: " 200gr",
                    price: 3.50,
                    image: "perlas.jpg"
                },
                {
                    id: 6,
                    name: "Pastillas de inodoro",
                    description: "4 uds",
                    price: 2.40,
                    image: "pastillas.jpg"
                },
                {
                    id: 7,
                    name: "Detergente polvo",
                    description: "bolsa de 500gr",
                    price: 2.40,
                    image: "detergente.jpg"
                },
                {
                    id: 8,
                    name: "Toallas húmedas",
                    description: "bolsa de 120 uds",
                    price: 3.80,
                    image: "toallas.jpg"
                },
                {
                    id: 9,
                    name: "Frazada de limpiar suelo",
                    description: "2 unidades",
                    price: 2.40,
                    image: "frazada.jpg"
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
                    name: "Split Milexus",
                    description: "12000 btu (1 ton)",
                    price: 380 ,
                    image: "split.jpg"
                },
                {
                    id: 2,
                    name: "ventilador de pie Milexus",
                    description: "unidad",
                    price: 60 ,
                    image: "ventilador.jpg"
                },
                {
                    id: 3,
                    name: "Tv 32 pulgadad",
                    description: "12000 btu (1 ton)",
                    price: 260 ,
                    image: "32.jpg"
                },
                {
                    id: 4,
                    name: "Tv Milexus",
                    description: "55 pulgadas, smart tv",
                    price: 450 ,
                    image: "55.jpg"
                },
                {
                    id: 5,
                    name: "Batidora 2 en 1 Milexus",
                    description: "batidora más moledor de sazones",
                    price: 45,
                    image: "batidora.jpg"
                },
                {
                    id: 6,
                    name: "Cafetera Milexus",
                    description: "6 tazas",
                    price: 45,
                    image: "cafetera.jpg"
                },
                {
                    id: 7,
                    name: "Nevera Milexus ",
                    description: "5.0 pies cubicos",
                    price: 350,
                    image: "nevera.jpg"
                }
            ]
        }
    ]
};

// Variables y funciones globales
window.APP = {
    config: CONFIG
};
