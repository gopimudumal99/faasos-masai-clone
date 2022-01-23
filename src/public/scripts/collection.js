import {
    showdessert,
    showdessert1
} from "../script1/script1.js"

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
// let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")
// let box10 = document.getElementById("box10")
let box11 = document.getElementById("box11")
let box12 = document.getElementById("box12")


let Fab_Wraps = [{
        "category": "Fab Wraps starting at 99 each",
        "id": 1,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1618580131789_image_1618219032186_Fab%20%26%20Smokey%20Veg%20Combo%201%20Masala%20Paneer%20tikka%2B%201%20Jumbo%20Falafel%20Salsa%20Wrap.jpg",
        "name": "Smokey Fab Combo (Veg)",
        "price": "198",
        "s_desc": "(Veg Only) 1 Masala Pane...",
        "desc": "(Veg Only) 1 Masala Paneer Tikka Wrap + 1 Jumbo Falafel Salsa Wrap . When flavourful surprises come knocking, you welcome them with open arms. Especially when they come with savings of Rs.137!",
        "rate": "4.6",
        "bought": "0.2k bought this"
    },
    {
        "category": "Fab Wraps starting at 99 each",
        "id": 2,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1618581012383_image_1603542783342_Resmi%20chicken%20kebab%20Wrap%20%2B%20Makhani%20Falafel%20Wrap.jpg",
        "name": "Fab & Creamy Combo",
        "price": "200",
        "s_desc": "(Veg + Non-Veg) 1 Reshmi...",
        "desc": "(Veg + Non-Veg) 1 Reshmi Chicken Kebab Wrap + 1 Makhani Falafel Wrap. Flavours that surprise and prices that amaze. Save Rs. 147 with this FAB combo!",
        "rate": "4.4",
        "bought": "556 bought this"
    },
    {
        "category": "Fab Wraps starting at 99 each",
        "id": 3,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1618581154570_image_1603542884429_Cheese%20melt%20chicken%20wrap%20%2B%20Double%20cheese%20meatball%20wrap.jpg",
        "name": "Fab & Cheesy NonVeg Combo",
        "price": "209",
        "s_desc": "(Non-Veg Only) Cheese M...",
        "desc": "(Non-Veg Only) Cheese Melt Chicken Wrap + Double Cheese Meatball Wrap and a savings of Rs 150! Not easy to beat boredom? Indulge in our FAB combo to be surprised!",
        "rate": "4.3",
        "bought": "0.1k bought this"
    },
    {
        "category": "Fab Wraps starting at 99 each",
        "id": 4,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1618581202108_image_1603542499176_Jumbo%20Paneer%20Chole%20Wrap%20%2B%20Jumbo%20Falafel%20Salsa%20Wrap.jpg",
        "name": "Fab & Loaded Veg Combo",
        "price": "230",
        "s_desc": "(Veg Only) 1 Jumbo Panee...",
        "desc": "(Veg Only) 1 Jumbo Paneer Chole Wrap + 1 Jumbo Falafel Salsa Wrap. When dill mange more but pockets say please no more, we come to the rescue! Save Rs. 181 with this FAB combo of",
        "rate": "4.2",
        "bought": "448 bought this"
    },
    {
        "category": "Fab Wraps starting at 99 each",
        "id": 5,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1618581269484_image_1618267295019_Mexican%20Potato%20Salsa%20%2B%20Makhni%20Falafel%20Wrap.jpg",
        "name": "Exotic Fab Combo (Veg)",
        "price": "219",
        "s_desc": "(Veg Only) Get a fusion of...",
        "desc": "(Veg Only) Get a fusion of flavours and a surprise of savings with this combo. 1 Mexican Potato Salsa Wrap + 1 Makhni Falafel Wrap",
        "rate": "4.4",
        "bought": "187 bought this"
    },
    {
        "category": "Fab Wraps starting at 99 each",
        "id": 6,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1618581404349_image_1618218800445_Fab%20%26%20Smokey%20Non%20Veg%20Combo%201%20BBQ%20Chicken%20Overload%20Wrap%20%2B%201%20Masala%20Chicken%20Tikka%20Wrap.jpg",
        "name": "Smokey Fab combo (Non-Veg)",
        "price": "239",
        "s_desc": "(Non-Veg Only) Save Rs. 1...",
        "desc": "(Non-Veg Only) Save Rs. 146 with this delicious combo of 1 BBQ Chicken Overload Wrap + 1 Masala Chicken Tikka Wrap. An overload of flavours, an overload of savings, we have it all!",
        "rate": "4.4",
        "bought": "431 bought this"
    },
    {
        "category": "Fab Wraps starting at 99 each",
        "id": 7,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1618581460225_image_1603542360913_Baked%20Veggi%20Pizza%20Wrap%20%2B%20Baked%20Chicken%20Pizza%20Wrap.jpg",
        "name": "Fab & Italian Combo",
        "price": "269",
        "s_desc": "(Veg + Non-Veg) 1 Baked...",
        "desc": "(Veg + Non-Veg) 1 Baked Veggie Pizza Wrap + 1 Baked Chicken Pizza Wrap. Delicious surprises and amazing savings are in the ‘baking’! Indulge in this FAB combo and save",
        "rate": "5",
        "bought": "104 bought this"
    },
    {
        "category": "Fab Wraps starting at 99 each",
        "id": 8,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1618581525548_image_1618218769125_Fab%20%26%20Loaded%20Non%20Veg%20Combo%201%20BBQ%20Chicken%20Overload%20Wrap%20%2B%201%20American%20Smokey%20Sausage%20Wrap.jpg",
        "name": "Loaded Fab Combo (Non-Veg)",
        "price": "279",
        "s_desc": "(Non-Veg Only) 1 BBQ Chi...",
        "desc": "(Non-Veg Only) 1 BBQ Chicken Overload Wrap + 1 American Smokey Sausage Wrap. Delicious wraps, unbelievable savings of Rs.181!",
        "rate": "4.2",
        "bought": "253 bought this"
    },
]

let Faasos_Chefs = [{
        "category": "Faasos Chefs Specials",
        "id": 9,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638473822119_Dahi%20Kebab%20Wrap.jpg",
        "name": "[Must Try] Dahi Kebab Wrap",
        "price": "242",
        "s_desc": "Absolutely new & unique, it...",
        "desc": "Absolutely new & unique, it is hard to decode in one bite! Delicately spiced velvety dahi kebabs with crispy fried potatoes, onions, almond flakes, mint & imli chutney are splendidly wrapped in laccha paratha",
        "rate": "4.5",
        "bought": "1.1k bought this"
    },
    {
        "category": "Faasos Chefs Specials",
        "id": 10,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1638473857473_Chicken%20Haleem%20Kebab%20Wrap.jpg",
        "name": "[Must Try] Chicken Haleem Kebab Wrap",
        "price": "299",
        "s_desc": "[100% Safely Cooked Chic...",
        "desc": "[100% Safely Cooked Chicken] Just arrived to wrap you with all things extravagant! This one has chicken haleem kebabs, crunchy onions, almond flakes, mint mayo & chutney, all",
        "rate": "4.5",
        "bought": "0.6k bought this"
    },
    {
        "category": "Faasos Chefs Specials",
        "id": 11,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638473883300_Veg%20galouti%20kebab%20Wrap.jpg",
        "name": "[Must Try] Veg Galauti Kebab Wrap",
        "price": "242",
        "s_desc": "Absolutely new & unique, th...",
        "desc": "Absolutely new & unique, this exotic wrap has melt-in-mouth Galauti kebabs made of minced veggies. This is enveloped in flaky laccha paratha with crisp fried potatoes, onions, almond flakes, mint & imli chutney",
        "rate": "4.3",
        "bought": "0.5k bought this"
    },
    {
        "category": "Faasos Chefs Specials",
        "id": 12,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1638428857069_Smokey%20Butter%20Chicken%20Wrap.jpg",
        "name": "Smokey Butter Chicken Wrap (Newly Launched)",
        "price": "268",
        "s_desc": "For the love of butter chick...",
        "desc": "For the love of butter chicken and everything that’s wrapped in between! Surprise your tastebuds with this amazing wrap.",
        "rate": "4.3",
        "bought": "0.5k bought this"
    },
    {
        "category": "Faasos Chefs Specials",
        "id": 13,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638428991570_Lazeez%20Paneer%20Tikka%20Wrap.jpg",
        "name": "Lazeez Paneer Tikka Wrap (Newly Launched)",
        "price": "189",
        "s_desc": "Paneer makes friends whe...",
        "desc": "Paneer makes friends wherever it goes. Just like this combination of flavour-packed lazeez gravy, soft paneer tikka and crunchy onions all wrapped up in one just to win you over.",
        "rate": "4.3",
        "bought": "0.5k bought this"
    },
    {
        "category": "Faasos Chefs Specials",
        "id": 14,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638429003609_Cheese%20Melt%20Potato%20Chili%20wrap.jpg",
        "name": "Cheese Melt Potato Chili wrap (Newly Launched)",
        "price": "124",
        "s_desc": "Who knew potato shots c...",
        "desc": "Who knew potato shots could even do this? Wrapped in a paratha with crunchy onion, chipotle cheese and a drizzle of mint plus chatpata mayo makes this wrap exceptional.",
        "rate": "4.3",
        "bought": "0.8k bought this"
    },
    {
        "category": "Faasos Chefs Specials",
        "id": 15,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1638429067163_Cheese%20Melt%20Chicken%20Bhuna%20Wrap.jpg",
        "name": "Cheese Melt Chicken Bhuna Wrap (Newly Launched)",
        "price": "189",
        "s_desc": "Never challenge cheese yo...",
        "desc": "Never challenge cheese you’ll have to give in. Just the way your cravings give into this spicy chicken bhuna enveloped in a paratha with gooey cheese.",
        "rate": "4.3",
        "bought": "0.7k bought this"
    },
    {
        "category": "Faasos Chefs Specials",
        "id": 16,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638473770008_Jumbo%20Paneer%20Tikka%20Wrap.jpg",
        "name": "Jumbo Paneer Tikka Wrap (Newly Launched)",
        "price": "194",
        "s_desc": "Your favourite wrap just g...",
        "desc": "Your favourite wrap just got a makeover in order to satiate those Jumbo Cravings. A roll of 50% extra filling of smokey paneer tikka taken a notch above with a generous drizzle of minty, tangy mayonnaise clubbed with crunchy onions in a soft roti.",
        "rate": "4.3",
        "bought": "0.9k bought this"
    },
    {
        "category": "Faasos Chinese Specials",
        "id": 17,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638474168522_Hot%20garlic%20Paneer%20Wrap.jpg",
        "name": "[Must Try] Hot Garlic Paneer Wrap",
        "price": "221",
        "s_desc": "Just launched, this unique...",
        "desc": "Just launched, this unique wrap loaded with golden fried paneer tossed in hot garlic sauce is wrapped in a flaky laccha paratha along with crunchy onions, sesame seeds & more. Drizzled with creamy mayo & more delicious garlic sauce, this is an overload of",
        "rate": "4.5",
        "bought": "1.3k bought this"
    },
    {
        "category": "Faasos Chinese Specials",
        "id": 18,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638474031299_Chilli%20paneer%20manchurian%20Wrap.jpg",
        "name": "[Must Try] Chilli Paneer Manchurian Wrap",
        "price": "252",
        "s_desc": "Just Launched, this never-...",
        "desc": "Just Launched, this never-heard-before wrap has Veg Manchurian balls & paneer chilli along with mayo, crunchy onions and fried noodles wrapped in a laccha paratha. 2 oriental classics in one, now thats unconventional!",
        "rate": "4.5",
        "bought": "1.1k bought this"
    },
    {
        "category": "Faasos Chinese Specials",
        "id": 19,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1638474026746_Shredded%20garlic%20chicken%20Wrap.jpg",
        "name": "[Must Try] Shredded Garlic Chicken Wrap",
        "price": "221",
        "s_desc": "Just Launched, this exotic...",
        "desc": "Just Launched, this exotic wrap is loaded with succulent chicken in a hot garlic sauce along with scrambled egg, fried noodles, sliced onions & mayo. All snuggly wrapped in a flaky laccha paratha. Thank us later for this oriental surprise.",
        "rate": "4.6",
        "bought": "1.5k bought this"
    },
]

let Faasos_Chinese = [

    {
        "category": "Faasos Chinese Specials",
        "id": 20,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638469950355_image_1578918353727_image_1542982694716_Schezwan%20Fried%20Rice%20%26%20Veg%20Manchurian%20Bowl.jpg",
        "name": "Schezwan Fried Rice & Veg Manchurian Bowl",
        "price": "281",
        "s_desc": "Not tampering with know...",
        "desc": "Not tampering with known flavours yet elevating it slightly by pairing a schezwan fried rice with Manchurian gravy.",
        "rate": "5",
        "bought": "197 bought this"
    },
    {
        "category": "Faasos Chinese Specials",
        "id": 21,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1638469879577_image_1578918663491_image_1543053786110_Oyster%20Chicken%20and%20Burnt%20Garlic%20Rice%20Bowl.jpg",
        "name": "Burnt Garlic Rice & Oyster Chicken Bowl",
        "price": "303",
        "s_desc": "Distinctive flavours from t...",
        "desc": "Distinctive flavours from the oyster sauce laces our oyster chicken and burnt garlic rice bowl, which we kind of are biased about.",
        "rate": "4",
        "bought": "97 bought this"
    },
    {
        "category": "Faasos Chinese Specials",
        "id": 22,
        "cat": "noveg",
        "img": "https://product-assets.faasos.io/production/product/image_1638470029905_image_1543053743955_Shanghai%20Chicken%20and%20Rice%20Bowl.jpg",
        "name": "Shanghai Chicken & Rice Bowl",
        "price": "303",
        "s_desc": "[100% Safely Cooked Chic...",
        "desc": "[100% Safely Cooked Chicken] The heavy, peppery flavours from the streets of Shanghai packed in straight to your bowl! Pair it with rice for a super comfort meal.",
        "rate": "4",
        "bought": "36 bought this"
    },
]

let pizza = [{
        "category": "Personal Pizzas by Oven Story",
        "id": 23,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1631125287799_Double%20Chicken%20Treat%20Semizza.jpg",
        "name": "Double Chicken Treat Semizza [Half Pizza]",
        "price": "251",
        "s_desc": "One-of-a-kind semi-circle...",
        "desc": "One-of-a-kind semi-circle pizza for your personal pizza cravings! Double chicken, double joy with Chicken Kheema, Smoked Chicken Sausages, Crunchy Capsicum, Onion and Mozzarella Cheese.",
        "rate": "4.6",
        "bought": "16.3k bought this"
    },
    {
        "category": "Personal Pizzas by Oven Story",
        "id": 24,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1631124961418_Paneer%20Extravaganza%20Semizza.jpg",
        "name": "Paneer Extravaganza Semizza [Half Pizza]",
        "price": "251",
        "s_desc": "One-of-a-kind semi-circle...",
        "desc": "One-of-a-kind semi-circle pizza for your personal pizza cravings! Delish paneer chunks on a bed of fresh veggies - American Corn, Paneer Tikka, Black Olives, Onion and Mozzarella Cheese.",
        "rate": "4.5",
        "bought": "15.2k bought this"
    },
    {
        "category": "Personal Pizzas by Oven Story",
        "id": 25,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1631124800796_Very%20Veggie%20Semmiza.jpg",
        "name": "Very Veggie Semizza [Half Pizza]",
        "price": "251",
        "s_desc": "One-of-a-kind semi-circle...",
        "desc": "One-of-a-kind semi-circle pizza for your personal pizza cravings! A perfect farm-fresh treat - American Corn, Tomatoes, Jalapenos, Black Olives, Crunchy Capsicum, Onion and Mozzarella Cheese.",
        "rate": "4.5",
        "bought": "12.9k bought this"
    },
]

let daily_value = [{
        "category": "Daily Value Wrap Combos (Save Upto 40% Extra)",
        "id": 26,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1622813195694_image_es_1618555841315_2%20Signature%20Veg%20Wraps%20%40279.jpg",
        "name": "2 Signature Veg Wraps at 289",
        "price": "289",
        "s_desc": "Amazing wraps and savin...",
        "desc": "Amazing wraps and savings! What else can you ask for? Choose any two from our unique Signature Veg Wraps with delicious fillings & sauces all wrapped in a flaky paratha.",
        "rate": "5",
        "bought": "537 bought this"
    },
    {
        "category": "Daily Value Wrap Combos (Save Upto 40% Extra)",
        "id": 27,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1622813742883_image_es_1618555768696_2%20Signature%20NonVeg%20Wraps%20%40309.jpg",
        "name": "2 Signature NonVeg Wraps at 319",
        "price": "319",
        "s_desc": "Get spoiled with surprises..",
        "desc": "Get spoiled with surprises and savings that too upto Rs. 150/-. Enjoy a delicious meal for two by choosing any two of our Signature Non-veg Wraps loaded with tender chicken & unique combinations of sauces.",
        "rate": "5",
        "bought": "652 bought this"
    },
    {
        "category": "Daily Value Wrap Combos (Save Upto 40% Extra)",
        "id": 28,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1622813789447_image_es_1618555665605_4%20Classic%20Veg%20Wraps%20%40329.jpg",
        "name": "4 Classic Veg Wraps at 379",
        "price": "379",
        "s_desc": "All smiles for surprise. All...",
        "desc": "All smiles for surprise. All hearts for savings. Save upto Rs 280 by choosing your favourite 4 Veg Classic Wraps loaded with unique ingredients. Can we get a WOW?",
        "rate": "5",
        "bought": "692 bought this"
    },
    {
        "category": "Daily Value Wrap Combos (Save Upto 40% Extra)",
        "id": 29,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1622813825677_image_es_1618555582864_4%20Classic%20NonVeg%20Wraps%20%40389.jpg",
        "name": "4 Classic NonVeg Wraps at 429",
        "price": "429",
        "s_desc": "Lip-smacking flavours at j...",
        "desc": "Lip-smacking flavours at jaw-dropping savings upto Rs. 320. Choose any 4 of your favourites from our Classic Non-Veg wraps with extraordinary flavors!",
        "rate": "5",
        "bought": "383 bought this"
    },
    {
        "category": "Daily Value Wrap Combos (Save Upto 40% Extra)",
        "id": 30,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg",
        "name": "4 Signature Veg Wraps at 529",
        "price": "529",
        "s_desc": "Savings upto Rs. 230 & m...",
        "desc": "Savings upto Rs. 230 & many flavour-packed surprises are here to steal boredomâ€™s thunder. Choose any 4 from our unique collection of Signature veg wraps.",
        "rate": "5",
        "bought": "73 bought this"
    },
    {
        "category": "Daily Value Wrap Combos (Save Upto 40% Extra)",
        "id": 31,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1622813915507_image_es_1618555480375_4%20Signature%20NonVeg%20Wraps%20%40589.jpg",
        "name": "4 Signature NonVeg Wraps at 599",
        "price": "599",
        "s_desc": "Fantastic combos from Fa...",
        "desc": "Fantastic combos from Faasos hall of fame with savings upto Rs. 340. Pick any 4 from our unique Signature Non-veg wraps & enjoy!",
        "rate": "5",
        "bought": "65 bought this"
    },
    {
        "category": "Daily Value Wrap Combos (Save Upto 40% Extra)",
        "id": 32,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1622813953613_image_es_1618555724773_3%20Signature%20Veg%20Wraps%20%40389.jpg",
        "name": "3 Signature Veg Wraps at 399",
        "price": "399",
        "s_desc": "Double century savings do...",
        "desc": "Double century savings done for sure! Save upto Rs 200 by choosing any 3 from our Signature veg wraps & enjoy this delicious meal for 3. Because if two is company, three is a party for sure!",
        "rate": "5",
        "bought": "121 bought this"
    },
    {
        "category": "Daily Value Wrap Combos (Save Upto 40% Extra)",
        "id": 33,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1622813993438_image_es_1618555708956_3%20Signature%20NonVeg%20Wraps%20%40459.jpg",
        "name": "3 Signature NonVeg Wraps at 469",
        "price": "469",
        "s_desc": "Save upto Rs. 190 and sur...",
        "desc": "Save upto Rs. 190 and surprise your tastebuds by choosing your 3 best favourite Signature Non-veg wraps loaded with deliciously unique ingredients.Theres no reason to delay here.",
        "rate": "5",
        "bought": "78 bought this"
    },
]

let Classic_Wraps = [{
        "category": "Classic Wraps",
        "id": 34,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1621550540261_Masala%20chicken%20tikka%20wrap%20%2B%20wedges%20%281%29.jpg",
        "name": "Classic Wrap and Starter Combo",
        "price": "240",
        "s_desc": "(Serves 1) 1 Classic wrap...",
        "desc": "(Serves 1) 1 Classic wrap + 1 Starter. Choose your favourite Classic Wrap and make it a meal by adding the starter of your choice!",
        "rate": "5",
        "bought": "0.5k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 35,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1625490238942_2%20Masala%20Paneer%20Tikka%20wrap.jpg",
        "name": "2 Classic Veg Wraps starting at 269",
        "price": "282",
        "s_desc": "The classics but better! Bi...",
        "desc": "The classics but better! Bigger savings, same delicious flavour. Choose any 2 of your favourites from our Classic Veg wraps with extraordinary flavours!,",
        "rate": "4.5",
        "bought": "1.8k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 36,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1625490309755_2%20%20Masala%20Chicken%20Tikka%20Wrap.jpg",
        "name": "2 Classic Non-Veg Wraps starting at 299",
        "price": "314",
        "s_desc": "The evergreen classics just ...",
        "desc": "The evergreen classics just got a whole lot more exciting with savings you cannot deny! Choose any 2 of your favourites from our Classic Non-Veg wraps with delicious flavours!",
        "rate": "4.4",
        "bought": "2.2k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 37,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814417562_Cheese%20Melt%20Paneer%20Wrap.jpg",
        "name": "Cheese Melt Paneer Wrap",
        "price": "179",
        "s_desc": "Let the good times roll with...",
        "desc": "Let the good times roll with surprises & flavour with this exciting snack! Cottage cheese is seasoned with select spices, slathered with creamy, gooey cheese & snuggly wrapped in soft roti.",
        "rate": "4.3",
        "bought": "155.2k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 38,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814444700_Double%20Egg%20Chatpata%20Wrap.jpg",
        "name": "Double Egg Chatpata Wrap",
        "price": "104",
        "s_desc": "Why settle for something...",
        "desc": "Why settle for something ordinary when you can get a snack that is eggstra ordinary! Like this yum wrap made with golden-fried eggs, drizzled with tangy, cheesy mayo and wrapped in a soft roti.",
        "rate": "4.5",
        "bought": "117.4k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 39,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814465469_Masala%20Chicken%20Tikka%20Wrap.jpg",
        "name": "Masala Chicken Tikka Wrap",
        "price": "173",
        "s_desc": "Bored of the same old flav...",
        "desc": "Bored of the same old flavours? Excite your tastebuds with surprises that we roll into this wrap. Smokey chicken tikka taken a notch above with a generous drizzle of minty, tangy mayonnaise clubbed with crunchy onions in a soft roti.",
        "rate": "4.4",
        "bought": "156.4k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 40,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814510353_Masala%20Paneer%20Tikka%20Wrap.jpg",
        "name": "Masala Paneer Tikka Wrap",
        "price": "158",
        "s_desc": "We dont have any pun for...",
        "desc": "We dont have any pun for paneer, but we do have a lot of surprises in this exciting snack that we roll into this wrap. Fresh paneer is smoked to perfection & drizzled with minty, spicy mayonnaise & wrapped in soft roti.",
        "rate": "4.4",
        "bought": "225.7k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 41,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814573883_Chicken%20Bhuna%20Wrap.jpg",
        "name": "Chicken Bhuna Wrap",
        "price": "173",
        "s_desc": "The bestseller, rock n roll a...",
        "desc": "The bestseller, rock n roll award goes to: Roasted and flavorful chicken pieces slow-cooked in spicy bhuna masala and wrapped with crisp onions in a freshly made roti. Is it snack time yet?",
        "rate": "4.4",
        "bought": "69.5k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 42,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814595827_Chatpate%20Chole%20Wrap_.jpg",
        "name": "Chatpate Chole Wrap",
        "price": "104",
        "s_desc": "No one believed us when...",
        "desc": "No one believed us when we said chole can be even more exciting. So we created a wrap that has tangy burst of chole with flavorful Indian spices and crunchy onions, wrapped in a soft roti. Try it & get surprised.",
        "rate": "4.5",
        "bought": "64.1k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 43,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814620871_Veg%20Falafel%20Wrap.jpg",
        "name": "Veg Falafel Wrap",
        "price": "147",
        "s_desc": "Get wrapped in this Medit...",
        "desc": "Get wrapped in this Mediterranean surprise! We roll up crispy falafel, made from the finest chickpeas, with classic mayo and crunchy onions in soft roti for an experience unlike ever before!",
        "rate": "4.4",
        "bought": "51.4k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 44,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814649763_Egg%20Cheese%20Sausage%20Wrap.jpg",
        "name": "Egg Cheese Sausage Wrap",
        "price": "147",
        "s_desc": "When its about surprising...",
        "desc": "When its about surprising your tastebuds, no one can beat us. This absolutely amazing wrap made with juicy sausages, omelette & lots of cheese is here to roll you up in exciting flavours & surprises.",
        "rate": "4.4",
        "bought": "54.3k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 45,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814677367_Reshmi%20Chicken%20Kebab%20Wrap.jpg",
        "name": "Reshmi Chicken Kebab Wrap",
        "price": "168",
        "s_desc": "Fix your mundane days & l...",
        "desc": "Fix your mundane days & let the good times roll! Oh so creamy & exotic, this Reshmi Chicken Wrap is made with soft chicken pieces cooked in creamy, rich & decadent masala. Remember, this is not made for sharing!",
        "rate": "4.3",
        "bought": "66.3k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 46,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814706860_Cheesy%20Corn%20Salsa%20Wrap.jpg",
        "name": "Cheesy Corn Salsa Wrap",
        "price": "158",
        "s_desc": "Caution: Not your average...",
        "desc": "Caution: Not your average snack! Mexican inspired corn salsa with a generous serving of cheese is wrapped in a soft roti. A combination oh-so unique with flavours on a roll!",
        "rate": "4.3",
        "bought": "92.5k bought this"
    },
    {
        "category": "Classic Wraps",
        "id": 47,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1636814722961_Cheese%20Melt%20Chicken%20Wrap.jpg",
        "name": "Cheese Melt Chicken Wrap",
        "price": "189",
        "s_desc": "Craving for something ne...",
        "desc": "Craving for something new? We got your back. We mean, we got you a wrap. Chunks of chicken cooked in reshmi masala, topped with sinful cheese into a soft roti. Roll up your sleeves, it’s snack time!",
        "rate": "4.3",
        "bought": "108.5k bought this"
    },
]

let signature_wraps = [{
        "category": "Signature Wraps",
        "id": 48,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636816220401_American%20Smokey%20Sausage%20Wrap.jpg",
        "name": "American Smoked Sausage Wrap",
        "price": "247",
        "s_desc": "Here comes the showstop...",
        "desc": "Here comes the showstopper! Smoked chicken sausage lathered in barbeque sauce, chipotle-flavoured cheese & crunchy onions, wrapped in an omelette & flaky laccha paratha. Now thats wow!",
        "rate": "4.5",
        "bought": "0.2k bought this"
    },
    {
        "category": "Signature Wraps",
        "id": 49,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636816251239_Baked%20Veggie%20Pizza%20Wrap.jpg",
        "name": "Baked Pizza Wrap (Veg)",
        "price": "215",
        "s_desc": "Is it a pizza or a wrap? Let...",
        "desc": "Is it a pizza or a wrap? Let your tastebuds decide. A medley of flavours with fresh bell peppers, corn, olives & jalapenos draped in pizza sauce & mozzarella cheese, all wrapped in a crispy baked paratha.",
        "rate": "4.6",
        "bought": "0.5k bought this"
    },
    {
        "category": "Signature Wraps",
        "id": 50,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1636816276306_Bhuna%20Chicken%20Overload%20Wrap.jpg",
        "name": "Bhuna Chicken Overloaded Wrap",
        "price": "268",
        "s_desc": "Bestseller Alert! In this Eas...",
        "desc": "Bestseller Alert! In this East-meets-West wrap, slow-cooked bhuna chicken and juicy chicken meatballs are wrapped along with an omelette in flaky lachha paratha.",
        "rate": "4.5",
        "bought": "0.3k bought this"
    },
    {
        "category": "Signature Wraps",
        "id": 51,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636817124374_JJumbo%20FFalafel%20Salsa%20Wrap.jpg",
        "name": "Jumbo Falafel-Salsa Wrap",
        "price": "200",
        "s_desc": "A jumbo wrap with a jumbo...",
        "desc": "A jumbo wrap with a jumbo surprise it is! Crispy Mediterranean falafels, generous drizzle of cheesy corn salsa, crunchy onions all wrapped in flaky paratha. It sounds, tastes and feels extraordinary.",
        "rate": "4.3",
        "bought": "0.2k bought this"
    },
    {
        "category": "Signature Wraps",
        "id": 52,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636816352000_Jumbo%20Paneer%20Chole%20Wrap.jpg",
        "name": "Jumbo Chole Paneer Wrap",
        "price": "215",
        "s_desc": "Everybody said paneer an...",
        "desc": "Everybody said paneer and chole cant be friends but we thought otherwise and created this. A perfect blend of soft masala paneer tikka, chatpate chole drizzled in flavorful mayonnaise & wrapped in flaky laccha paratha.",
        "rate": "4.5",
        "bought": "0.1k bought this"
    },
    {
        "category": "Signature Wraps",
        "id": 53,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636816387489_Mexican%20Potato%20Salsa%20Wrap.jpg",
        "name": "Mexicana Potato Salsa Wrap",
        "price": "210",
        "s_desc": "Here potatoes dont potate...",
        "desc": "Here potatoes dont potate, they do salsa! Dont take our word, try this amazing wrap of spicy seasoned potatoes, Mexican corn salsa & chipotle flavoured cheese wrapped in a flaky laccha paratha.",
        "rate": "4.5",
        "bought": "0.2k bought this"
    },
    {
        "category": "Signature Wraps",
        "id": 54,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1636816399116_Makhani%20Falafel%20Wrap.jpg",
        "name": "Makhani-Falafel Wrap",
        "price": "200",
        "s_desc": "When life gave us Makhan...",
        "desc": "When life gave us Makhani we did the unexpected! Added it to crispy falafel with tangy chipotle cheese & wrapped it in a flaky laccha paratha. Amazing, isnt it?",
        "rate": "4.5",
        "bought": "0.1k bought this"
    },
    {
        "category": "Signature Wraps",
        "id": 55,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1636816430101_Baked%20Chicken%20Pizza%20Wrap.jpg",
        "name": "Baked Pizza Wrap (Chicken)",
        "price": "252",
        "s_desc": "Wondering how to break t...",
        "desc": "Wondering how to break the norm? Let this wrap be your inspiration. Combination of sliced salamis, bell peppers, olives, jalapenos & sweet corn draped in cheese & wrapped in a crispy baked paratha.",
        "rate": "4.4",
        "bought": "0.1k bought this"
    },
]

let Meal_Combos = [{
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 56,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1614099444386_Super%20Saver%20Paneer%20Tikka%20Wrap%20Meal.jpg",
        "name": "(Serves 1) Super Saver Paneer Tikka Wrap Meal",
        "price": "314",
        "s_desc": "(Serves 1) Your favourite c...",
        "desc": "(Serves 1) Your favourite combination - Low on price, high on taste and flavour! Save Rs 45 with Masala Paneer Tikka Wrap + Potato Wedges (120 gms) + 1 Choco Lava",
        "rate": "4.5",
        "bought": "4.2k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 57,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1614100055796_Super%20Saver%20Paneer%20Rice%20Bowl%20%20Meal.jpg",
        "name": "(Serves 1) Super Saver Paneer Rice Bowl Meal",
        "price": "282",
        "s_desc": "(Serves 1) A bowl full of fl...",
        "desc": "(Serves 1) A bowl full of flavour, spice and some super saver surprise! Paneer Signature Rice bowl + Potato Wedges (120 gms) + 1 Thumbs Up (250 ml)",
        "rate": "4.4",
        "bought": "2.0k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 58,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1614100209572_Super%20Saver%20Chicken%20Rice%20Bowl%20%20Meal.jpg",
        "name": "(Serves 1) Super Saver Chicken Rice Bowl Meal",
        "price": "293",
        "s_desc": "(Serves 1) A delicious sup...",
        "desc": "(Serves 1) A delicious super saver surprise with a bowl of delicious flavourful rice. Chicken Signature Rice Bowl + Potato Wedges (120 gms) + 1 Thumbs Up (250 ml)",
        "rate": "4.4",
        "bought": "3.1k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 59,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1614099072006_Super%20Saver%20Chicken%20Bhuna%20Wrap%20Meal%20.jpg",
        "name": "(Serves 1) Super Saver Chicken Bhuna Wrap Meal",
        "price": "314",
        "s_desc": "(Serves 1) Time to unwrap...",
        "desc": "(Serves 1) Time to unwrap big savings with this delicious meal! Save Rs 50 with Chicken Bhuna Wrap + Potato Wedges (120 gms) + 1 Choco Lava",
        "rate": "4.4",
        "bought": "3.2k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 60,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1614099938082_Super%20Saver%20Cheese%20Melt%20Paneer%20Wrap%20Meal.jpg",
        "name": "(Serves 1) Super Saver Cheese Melt Paneer Wrap Meal",
        "price": "314",
        "s_desc": "(Serves 1) Super cheesy, s...",
        "desc": "(Serves 1) Super cheesy, super yummy. Save Rs 55 with Cheese Melt Paneer Wrap + Potato Wedges (120 gms) + 1 Choco Lava",
        "rate": "4.4",
        "bought": "2.0k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 61,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1614099232973_Super%20Saver%20Reshmi%20Chicken%20Wrap%20Meal.jpg",
        "name": "(Serves 1) Super Saver Reshmi Chicken Wrap Meal",
        "price": "314",
        "s_desc": "(Serves 1) Your favourite...",
        "desc": "(Serves 1) Your favourite wrap meal with an amazing deal. Save Rs 45 with Reshmi Chicken Kebab Wrap + Potato Wedges (120 gms) + 1 Choco Lava",
        "rate": "4.6",
        "bought": "1.4k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 62,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1630669994007_Masala%20Chicken%20Tikka%20Wrap%20Treat.jpg",
        "name": "(Serves 1) Masala Chicken Tikka Wrap Treat",
        "price": "272",
        "s_desc": "(Serves 1) A combo that hi...",
        "desc": "(Serves 1) A combo that hits all the right spots! 1 Masala Chicken Tikka Wrap + 1 Potato Wedges (120gms) + 1 Thumsup (250ml)",
        "rate": "4.3",
        "bought": "0.5k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 63,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1630670051053_Masala%20Chicken%20Tikka%20Wrap%20Meal%20Combo.jpg",
        "name": "(Serves 1) Masala Chicken Tikka Wrap Meal Combo",
        "price": "387",
        "s_desc": "Spice, surprise and everyt...",
        "desc": "Spice, surprise and everything you like, all wrapped up! 1 Masala Chicken Tikka Wrap + Wedges (120gms) + 1 Classic Cold Coffee",
        "rate": "4.5",
        "bought": "290 bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 64,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1630670116328_Masala%20Paneer%20Tikka%20Wrap%20Meal%20Combo.jpg",
        "name": "(Serves 1) Masala Paneer Tikka Wrap Meal Combo",
        "price": "366",
        "s_desc": "Flavours that surprise and...",
        "desc": "Flavours that surprise and prices that amaze. 1 Masala Paneer Tikka Wrap + Wedges (120gms) + 1 Classic Cold Coffee",
        "rate": "3.5",
        "bought": "514 bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 65,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1630670603321_Baked%20Chicken%20Pizza%20Wrap%20Treat.jpg",
        "name": "(Serves 1) Baked Chicken Pizza Wrap Treat",
        "price": "345",
        "s_desc": "A flavour-packed surprise...",
        "desc": "Cheesy, colourful & baked to perefection, this combo guarantees the ultimate satisfaction! 1 Baked Chicken Pizza Wrap + 1 Potato Wedges (120gms) + 1 Thums Up",
        "rate": "4.6",
        "bought": "676 bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 66,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1630670819097_Baked%20Veg%20Pizza%20Wrap%20Feast.jpg",
        "name": "(Serves 1) Baked Veg Pizza Wrap Feast",
        "price": "356",
        "s_desc": "Delicious surprises and am...",
        "desc": "Delicious surprises and amazing savings are in the ‘baking’! 1 Baked Veg Pizza Wrap + 1 Potato Wedges (120gms) + 1 Coco Lava",
        "rate": "4.6",
        "bought": "0.2k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 67,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1630670967294_Jumbo%20Falafel%20Salsa%20Wrap%20Treat.jpg",
        "name": "(Serves 1) Jumbo Falafel Salsa Wrap Treat",
        "price": "293",
        "s_desc": "Tangy, crunchy with a side...",
        "desc": "Tangy, crunchy with a side of fizzy, this combo is all your cravings covered in one! 1 Jumbo Falafel Salsa Wrap + 1 Potato Wedges (120gms) + 1 Thums Up",
        "rate": "4.7",
        "bought": "0.1k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 68,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1630673870468_Jumbo%20Paneer%20Chole%20Wrap%20Feast.jpg",
        "name": "(Serves 1) Jumbo Paneer Chole Wrap Feast",
        "price": "356",
        "s_desc": "This combo is about all thi...",
        "desc": "This combo is about all things jumbo. With jumbo flavours & jumbo savings! 1 Jumbo Paneer Chole Wrap + 1 Potato Wedges (120gms) + 1 Choco Lava",
        "rate": "4.6",
        "bought": "386 bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 69,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1630672179348_Smokey%20Sausage%20Wrap%20Treat.jpg",
        "name": "(Serves 1) Smokey Sausage Wrap Treat",
        "price": "335",
        "s_desc": "Not easy to beat boredom?",
        "desc": "Not easy to beat boredom? Indulge in our exciting combo to be surprised! 1 American Smokey Sausage Wrap + 1 Potato Wedges (120gms) + 1 Thums Up",
        "rate": "335",
        "bought": "4.2"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 70,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1630672244835_Jumbo%20Paneer%20Chole%20Wrap%20Treat.jpg",
        "name": "(Serves 1) Jumbo Paneer Chole Wrap Treat",
        "price": "314",
        "s_desc": "Deep dive into the pool of...",
        "desc": "Deep dive into the pool of exciting flavours and surprises! 1 Jumbo Paneer Chole Wrap + 1 Potato Wedges (120gms) + 1 Thums Up",
        "rate": "4.7",
        "bought": "849 bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 71,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1632748115446_Egg%20Cheese%20Sausage%20Wrap%20Meal.jpg",
        "name": "(Serves 1) Egg cheese sausage wrap meal",
        "price": "282",
        "s_desc": "(Serves 1) Put an end to th...",
        "desc": "(Serves 1) Put an end to those cravings with this cheesy combo. 1 Egg Cheese Sausage Wrap + Wedges + Coke (475ml)",
        "rate": "4.7",
        "bought": "467 bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 72,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1632748163893_Masala%20Paneer%20Tikka%20Wrap%20Meal.jpg",
        "name": "(Serves 1) Masala Paneer Tikka Wrap Meal",
        "price": "293",
        "s_desc": "(Serves 1) A classic combi...",
        "desc": "(Serves 1) A classic combination to kill your boredom and surprise your tastebuds. 1 Masala Paneer Tikka Wrap + Wedges + Coke (475ml)",
        "rate": "4.6",
        "bought": "0.2k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 73,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1632748163893_Masala%20Paneer%20Tikka%20Wrap%20Meal.jpg",
        "name": "(Serves 1) Masala Paneer Tikka Wrap Meal",
        "price": "293",
        "s_desc": "(Serves 1) A combo that’ll ...",
        "desc": "(Serves 1) A classic combination to kill your boredom and surprise your tastebuds. 1 Masala Paneer Tikka Wrap + Wedges + Coke (475ml)",
        "rate": "4.6",
        "bought": "0.2k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 74,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1632748284309_Cheesy%20Corn%20Salsa%20Wrap%20Meal.jpg",
        "name": "(Serves 1) Cheesy Corn Salsa Wrap Meal",
        "price": "282",
        "s_desc": "(Serves 1) A cheesy surpris...",
        "desc": "(Serves 1) A cheesy surprise for those irresistible cravings with a combo with amazing savings. 1 Cheesy Corn Salsa Wrap + Wedges + Coke (475ml)",
        "rate": "4.5",
        "bought": "781 bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 75,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1633346299493_Double%20value%20Veg%20%2B%20Non%20veg%20supreme%20wrap%20meal.jpg",
        "name": "(Serves 2) Double Value Veg+Non-Veg Supreme Wrap Meal",
        "price": "471",
        "s_desc": "(Serves 2) Enjoy this delici...",
        "desc": "(Serves 2) Enjoy this delicious combo. 1 Cheese Melt Chicken Wrap + 1 Jumbo Paneer Chole Wrap + Potato Wedges (120 gms) + 1 Coke (475ml)",
        "rate": "4.3",
        "bought": "0.2k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 76,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1614102121482_Double%20Value%20Veg%2BNon-Veg%20Exotic%20Wrap%20Meal%20.jpg",
        "name": "(Serves 2) Double Value Veg+Non-Veg Exotic Wrap Meal",
        "price": "545",
        "s_desc": "1 BBQ Chicken Overload...",
        "desc": "1 BBQ Chicken Overload Wrap + 1 Veg Falafel Wrap + Potato Wedges (120 gms) + 2 Choco Lava Cakes",
        "rate": "4.7",
        "bought": "0.3k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 77,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1624991331303_Cheesy%20Corn%20salsa%20Wrap.jpg",
        "name": "(Serves 2) Double Value Creamy Veg Wrap Meal",
        "price": "545",
        "s_desc": "1 Cheesy Corn Salsa Wra...",
        "desc": "1 Cheesy Corn Salsa Wrap + 1 Makhani Falafel Wrap + Potato Wedges (120g) + 2 Choco Lava Cakes",
        "rate": "4.5",
        "bought": "0.1k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 78,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1633346451670_Double%20value%20chicken%20delight%20wrap%20meal.jpg",
        "name": "(Serves 2) Double Value Chicken Delight Wrap Meal",
        "price": "503",
        "s_desc": "(Serves 2) Flavourful surpr...",
        "desc": "(Serves 2) Flavourful surprises with a whole lot of savings! 1 Baked Chicken Pizza + 1 Chicken Bhuna Wrap + Potato Wedges (120g) + 1 Coke (475ml)",
        "rate": "4.1",
        "bought": "0.2k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 79,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1614100545653_Double%20Value%20Veg%20Delight%20Meal.jpg",
        "name": "(Serves 2) Double Value Veg Delight Meal",
        "price": "545",
        "s_desc": "1 Mexican Potato Salsa W...",
        "desc": "1 Mexican Potato Salsa Wrap + 1 Masala Paneer Tikka Wrap + Potato Wedges (120 gms) + 2 Choco Lava Cakes",
        "rate": "4.5",
        "bought": "0.5k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 80,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1633346417882_Double%20value%20chicken%20overload%20wrap%20meal.jpg",
        "name": "(Serves 2) Double Value Chicken Overload Wrap Meal",
        "price": "503",
        "s_desc": "1 BBQ Chicken Overload ...",
        "desc": "1 BBQ Chicken Overload Wrap + 1 Cheesy Meatball Wrap + Potato Wedges (120 gms) + 1 Coke (475ml)",
        "rate": "4.6",
        "bought": "0.5k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 81,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1633346532766_Double%20value%20Smokey%20chicken%20%20wrap%20meal.jpg",
        "name": "(Serves 2) Double Value Smokey Chicken Wrap Meal",
        "price": "503",
        "s_desc": "1 American Smokey Sausa...",
        "desc": "1 American Smokey Sausage Wrap + 1 Chicken Bhuna Wrap + Potato Wedges (120 gms) + 1 Coke (475ml)",
        "rate": "4.5",
        "bought": "0.5k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 82,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1633346333495_Double%20value%20Paneer%20overload%20wrap%20meal.jpg",
        "name": "(Serves 2) Double Value Paneer Overload Wrap Meal",
        "price": "471",
        "s_desc": "1 Jumbo Paneer Chole Wra...",
        "desc": "1 Jumbo Paneer Chole Wrap + 1 Cheese Melt Paneer Wrap + Potato Wedges (120 gms) + 1 Coke (475ml)",
        "rate": "4.4",
        "bought": "0.6k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 83,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1633346616996_Family%20saver%20non%20veg%20wrap%20%2B%20rice%20bowl%20%20feast.jpg",
        "name": "(Serves 4) Family Saver Non-Veg Wrap + Rice Bowls Feast",
        "price": "870",
        "s_desc": "(Serves 4) Cravings left yo...",
        "desc": "(Serves 4) Cravings left you in a fix? Save Rs.252 with this! 1 Cheesy Meatball Wrap + 1 Reshmi Chicken Kebab Wrap + 2 Chicken Signature Rice Bowls + 2 Choco Lavas + 2 Coke (475ml each) Tags",
        "rate": "4.3",
        "bought": "0.1k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 84,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1633346585539_Family%20saver%20veg%20cheesy%20wrap%20%2B%20rice%20bowls%20feast.jpg",
        "name": "(Serves 4) Family Saver Veg Cheesy Wrap + Rice Bowls Feast",
        "price": "944",
        "s_desc": "(Serves 4) Save Rs.282 wit...",
        "desc": "(Serves 4) Save Rs.282 with this cheesy & tasty affair, grab it now! 1 Cheesy Corn Salsa Wrap + 1 Cheese Melt Paneer Wrap + 2 Royal Veg Rice Bowls + 2 Choco Lavas + 2 Coke Cans (475ml each)",
        "rate": "4.7",
        "bought": "535 bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 85,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1614102595368_Family%20Saver%20Chicken%20Wrap%20Feast.jpg",
        "name": "(Serves 4) Family Saver Chicken Wrap Feast",
        "price": "944",
        "s_desc": "(Serves 4) Save Rs.236 wit...",
        "desc": "(Serves 4) Save Rs.236 with this family combo! 1 Baked Chicken Pizza Wrap + 1 American Smokey Sausage Wrap + 1 Chicken Bhuna Wrap + Egg Cheese Sausage Wrap + 4 Choco Lavas",
        "rate": "4.7",
        "bought": "0.1k bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 86,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1614102259234_Family%20Saver%20Veg%20Wrap%20%2B%20Rice%20Bowls%20Feast%20.jpg",
        "name": "(Serves 4) Family Saver Veg Wrap + Rice Bowls Feast",
        "price": "944",
        "s_desc": "(Serves 4) Save Rs.321 wit...",
        "desc": "(Serves 4) Save Rs.321 with this spicy, herby & yum combo. What more can you ask for! 1 Veg Falafel Wrap + 1 Masala Paneer Tikka Wrap + 2 Royal Veg Rice Bowls + 4 Choco Lavas",
        "rate": "4.5",
        "bought": "614 bought this"
    },
    {
        "category": "Meal Combos (Upto 25% Savings)",
        "id": 87,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1633346953861_Family%20saver%20veg%20wrap%20feast.jpg",
        "name": "(Serves 4) Family Saver Veg Wrap Feast",
        "price": "891",
        "s_desc": "(Serves 4) Definite fun & s...",
        "desc": "(Serves 4) Definite fun & savings of Rs.242! 1 Masala Paneer Tikka Wrap + 1 Cheese Melt Paneer Wrap + 1 Veg Falafel Wrap + 1 Cheesy Corn Salsa Wrap + 4 Choco Lavas + 2 Coke (475 ml each)",
        "rate": "4.7",
        "bought": "0.2k bought this"
    },
]

let Rice_Bowls = [{
        "category": "Rice Bowls",
        "id": 88,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1638391192023_Chicken%20Bhuna%20%2B%20Chicken%20Salami.jpg",
        "name": "Chicken Rice Bowl (Regular)",
        "price": "189",
        "s_desc": "A quintessential North-Ind...",
        "desc": "A quintessential North-Indian delicacy made even more exciting. Spicy Hyderabadi Rice or Classic Flavourful Rice with either delicious chicken bhuna, smoky chicken tikka or creamy reshmi chicken kebab gravy.",
        "rate": "4.9",
        "bought": "0.8k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 89,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637326307976_Chole%20Rice%20Bowl.jpg",
        "name": "Chole Signature Rice Bowl (Regular)",
        "price": "168",
        "s_desc": "Giving an all-time favourite...",
        "desc": "Giving an all-time favourite a delicous makeover to make your meal exciting! Chole cooked to perfection in a spiced gravy is served with a portion of either Spicy Hyderabadi Rice or Classic Flavourful Rice",
        "rate": "4.7",
        "bought": "0.4k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 90,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1637265836659_Smoked%20Butter%20Chicken%20Rice%20Bowl.jpg",
        "name": "Smoked Butter Chicken Rice Bowl (Jumbo)",
        "price": "284",
        "s_desc": "Good old Butter Chicken b...",
        "desc": "Good old Butter Chicken but add a little bit of Faasos flair! Choose from a bowl of Spicy Hyderabadi Rice or Classic Flavourful Rice with our flavourful smoked butter chicken",
        "rate": "4.3",
        "bought": "0.2k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 91,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637265436588_Rajma%20Rice%20Bowl.jpg",
        "name": "Rajma Masala Rice Bowl (Jumbo)",
        "price": "210",
        "s_desc": "Amp up your mundane life ...",
        "desc": "Amp up your mundane life with this delicious meal! A wholesome bowl of all-time favourite rajma slow-cooked in subtly spiced gravy and served with a portion of Spicy Hyderabadi Rice or Classic Flavourful Rice",
        "rate": "4.7",
        "bought": "0.2k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 92,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637265256614_Paneer%20Signature%20Rice%20Bowl.jpg",
        "name": "Paneer Signature Rice Bowl (Regular)",
        "price": "200",
        "s_desc": "Let your taste buds fall in l...",
        "desc": "Let your taste buds fall in love with this unique bowl made using out-of-the-world paneer tikka chunks served over a bed of Spicy Hyderabadi Rice or Classic Flavourful Rice",
        "rate": "4.8",
        "bought": "0.4k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 93,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638391076864_Paneer%20_%20Corn%20Salsa%20Rice%20Bowl.jpg",
        "name": "Veg Rice Bowl (Regular)",
        "price": "179",
        "s_desc": "Get clean bowled with the...",
        "desc": "Get clean bowled with these exciting flavour combinations! Take your pick of deliciousness from Spicy Hyderabadi Rice or Classic Flavourful Rice topped with tangy chole or spicy paneer tikka",
        "rate": "4.7",
        "bought": "0.2k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 94,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1637265075547_Egg%20Rice%20Bowl.jpg",
        "name": "Egg Rice Bowl (Regular)",
        "price": "147",
        "s_desc": "This bowl is packed with d...",
        "desc": "This bowl is packed with delicious surprises, here to add eggstra flavour to your life. Pick your favourite from, Spicy Hyderabadi Rice or Classic Flavourful Rice with subtly-spiced gravy and a golden-fried omelette",
        "rate": "4.5",
        "bought": "0.2k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 95,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1637265656959_Royal%20Chicken%20Rice%20Bowl.jpg",
        "name": "Royal Chicken Rice Bowl (Jumbo)",
        "price": "331",
        "s_desc": "Breaking the norm was ne...",
        "desc": "Breaking the norm was never this delicious! Succulent chicken with roasted Indian spices, chicken tikka & chicken meatballs served on a bed of Spicy Hyderabadi Rice or Classic Flavourful Rice & topped with a fluffy omelette",
        "rate": "4.5",
        "bought": "0.1k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 96,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1638391184382_Chicken%20Bhuna%20%2B%20Chicken%20Salami.jpg",
        "name": "Chicken Rice Bowl (Jumbo)",
        "price": "273",
        "s_desc": "Take a few steps away fro...",
        "desc": "Take a few steps away from the same old and experience the new! Pick your favourite from chicken tikka, bhuna chicken or reshmi chicken kebab served with Spicy Hyderabadi Rice or Classic Flavourful Rice",
        "rate": "4.9",
        "bought": "0.1k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 97,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1637265821242_Smoked%20Butter%20Chicken%20Rice%20Bowl.jpg",
        "name": "Smoked Butter Chicken Rice Bowl (Regular)",
        "price": "221",
        "s_desc": "Everyone loves a good but...",
        "desc": "Everyone loves a good butter chicken and this one is made with added excitement to surprise your tastebuds! Served over a bed of Spicy Hyderabadi Rice or Classic Flavourful Rice",
        "rate": "4.5",
        "bought": "0.4k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 98,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638391071987_Paneer%20_%20Corn%20Salsa%20Rice%20Bowl.jpg",
        "name": "Veg Rice Bowl (Jumbo)",
        "price": "231",
        "s_desc": "A large-sized bowl meal wi...",
        "desc": "A large-sized bowl meal with a jaw-dropping, awe-inspiring flavours! Spicy Hyderabadi Rice or Classic Flavourful Rice is topped with either flavourful chole or spicy paneer tikka masala",
        "rate": "4.4",
        "bought": "0.1k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 99,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1637264607268_Chicken%20Signature%20Rice%20Bowl.jpg",
        "name": "Chicken Signature Rice Bowl",
        "price": "221",
        "s_desc": "Your favourite meal got th...",
        "desc": "Your favourite meal got the makeover it deserves! Succulent boneless chicken cooked in a rich gravy and served over a bed of Spicy Hyderabadi Rice or Classic Flavourful Rice",
        "rate": "4.2",
        "bought": "0.2k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 100,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637265373478_Rajma%20Rice%20Bowl.jpg",
        "name": "Rajma Masala Rice Bowl (Regular)",
        "price": "173",
        "s_desc": "This humble dish just beca...",
        "desc": "This humble dish just became more delicous! Choose your favourite from Spicy Hyderabadi Rice or Classic Flavourful Rice with slow-cooked rajma in a delicious gravy",
        "rate": "4.5",
        "bought": "0.3k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 101,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1637265118432_Mutton%20Bhuna%20Rice%20Bowl.jpg",
        "name": "Mutton Bhuna Rice Bowl (Regular)",
        "price": "268",
        "s_desc": "A treasure trove of unique...",
        "desc": "A treasure trove of unique Indian flavours waiting to surprise your palate! Spicy Hyderabadi Rice or Classic Flavourful Rice with melt-in-your-mouth boneless pieces of bhuna mutton cooked in a spicy Indian gravy.",
        "rate": "4.8",
        "bought": "0.2k bought this"
    },
    {
        "category": "Rice Bowls",
        "id": 102,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637265743501_Royal%20Veg%20Rice%20Bowl.jpg",
        "name": "Royal Veg Rice Bowl (Jumbo)",
        "price": "294",
        "s_desc": "An absolutely lovely combi...",
        "desc": "An absolutely lovely combination of home-style chole, spiced paneer tikka and corn salsa served with Spicy Hyderabadi Rice or Classic Flavourful Rice.",
        "rate": "294",
        "bought": "442 bought this"
    },
]

let Quesadillas_Powered = [{
        "category": "Quesadillas Powered by Firangi bake",
        "id": 103,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1615445960296_Bombay%20Masala%20Quesadilla.jpg",
        "name": "Bombay Masala Quesadilla",
        "price": "194",
        "s_desc": "Bombay is incomplete wit...",
        "desc": "Bombay is incomplete without its classic grilled toast sandwich stuffed with masaaledaar potato. We pay ode to this city through our Bombay Masala Quesadilla, which is a grilled taco infused with a light flavour of the potato and spicy chiptole sauce.",
        "rate": "4.5",
        "bought": "9.3k bought this"
    },
    {
        "category": "Quesadillas Powered by Firangi bake",
        "id": 104,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1599470999653_Tangy%20Channa%20Quesadilla%20Chole%20%28Firangi%20Bake%29.jpg",
        "name": "Chatpate Chole Quesadilla",
        "price": "194",
        "s_desc": "The chatpata chole wrapp...",
        "desc": "The chatpata chole wrapped in a crispy lachha paratha along with freshly baked veggies infused with spicy chipotle sauce delightfully infused with cheese will make your dil go ole ole. All in an exciting package of these grilled tacos.",
        "rate": "4.5",
        "bought": "3.6k bought this"
    },
    {
        "category": "Quesadillas Powered by Firangi bake",
        "id": 105,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1494407033008_pimento%20%26%20sausages%20quesadilla%20copy.jpg",
        "name": "Smokey Sausage Quesadilla",
        "price": "226",
        "s_desc": "[100% Safely Cooked Chic...",
        "desc": "[100% Safely Cooked Chicken] Bite into the flavour of smoked chicken sausages with a tadkedaar touch of bell peppers and our secret spice mix to get the temperatures rising. All in an exciting package of these grilled tacos.",
        "rate": "4.6",
        "bought": "4.2k bought this"
    },
    {
        "category": "Quesadillas Powered by Firangi bake",
        "id": 106,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1615445915163_Bhuna%20Chicken%20Quesadilla.jpg",
        "name": "Bhuna Chicken Quesadilla",
        "price": "242",
        "s_desc": "[100% Safely Cooked Chic...",
        "desc": "[100% Safely Cooked Chicken] Packed with a punch of desi Indian spices in our bhuna masala quesadilla and topped with chipotle cheese, this delicacy is a grilled taco wrapped in a crisply baked lachha paratha which will delight you with every munch.",
        "rate": "4.6",
        "bought": "5.3k bought this"
    },
    {
        "category": "Quesadillas Powered by Firangi bake",
        "id": 107,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1494406731776_358A7881_Chipotle%20Meatball%20Quesadilla.jpg",
        "name": "Chipotle Meatball Quesadilla",
        "price": "226",
        "s_desc": "[100% Safely Cooked Chic...",
        "desc": "[100% Safely Cooked Chicken] Enjoy some juicy meatballs wrapped in a filling and crispy quesdilla, layered with a spread of deliciously creamy chipotle cheese. All in an exciting package of these grilled tacos",
        "rate": "4.5",
        "bought": "3.4k bought this"
    },
]

let sides_beverages = [{
        "category": "Sides And Beverages",
        "id": 108,
        "cat": "nonveg",
        "img": "https://product-assets.faasos.io/production/product/image_1638430697268_Meatballs%20with%20cheesy%20dip.jpg",
        "name": "Cheesy Chicken Meatballs",
        "price": "115",
        "s_desc": "[100% Safely Cooked Chic...",
        "desc": "[100% Safely Cooked Chicken] Juicy minced chicken meatballs, served with a cheesy mayonnaise dip - A no-brainer for snack cravings!",
        "rate": "4.3",
        "bought": "52.9k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 109,
        "cat": "dip",
        "img": "https://product-assets.faasos.io/production/product/image_1638430544869_Falafel%20nuggets%20with%20mayo%20dip.jpg",
        "name": "Falafel Nuggets with Mayo Dip",
        "price": "95",
        "s_desc": "Mediterranean inspired cri...",
        "desc": "Mediterranean inspired crispy falafel made from the finest soaked chickpeas and spices, served with a cheesy mayonnaise dip.",
        "rate": "4.4",
        "bought": "28.8k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 110,
        "cat": "dip",
        "img": "https://product-assets.faasos.io/production/product/image_1638430624853_Potato%20Chilli%20shots%20with%20mayo%20dip.jpg",
        "name": "Potato Chilli Shots with Mayo Dip",
        "price": "100",
        "s_desc": "Crispy and spiced potato s...",
        "desc": "Crispy and spiced potato shots served with a cheesy mayonnaise dip to tantalize your tastebuds.",
        "rate": "4.4",
        "bought": "48.5k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 111,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638259322706_Potato%20Wedges%2060gm%20%28without%20Dip%29.jpg",
        "name": "Potato Wedges (Small)",
        "price": "58",
        "s_desc": "When you don’t know wh...",
        "desc": "When you don’t know what to eat next, keep it simple! Indulge in our delicious potato wedges sprinkled with Teekha Chaska for that perfect flavour punch.",
        "rate": "4.5",
        "bought": "0.2k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 112,
        "cat": "side",
        "img": "https://product-assets.faasos.io/production/product/image_1638430875621_Potato%20Wedges%20120gm%20%28without%20Dip%29.jpg",
        "name": "Potato Wedges (Medium)",
        "price": "100",
        "s_desc": "When you dont know wha...",
        "desc": "When you dont know what to eat next we suggest keep it simple and call for the wedges.",
        "rate": "4.4",
        "bought": "9.4k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 113,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638275847645_Potato%20Wedges%2060gm%20%28with%20Dip%29.jpg",
        "name": "Potato Wedges (Small) with Cheese Dip (20gm)",
        "price": "79",
        "s_desc": "Crispy from outside and so...",
        "desc": "Crispy from outside and soft from inside, our potato wedges (small) when served with a side of cheese dip are sure to win hearts.",
        "rate": "4.9",
        "bought": "367 bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 114,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638258544115_Potato%20Wedges%20120gm%20%28with%20Dip%29.jpg",
        "name": "Potato Wedges (medium) with Cheese Dip (20gm)",
        "price": "121",
        "s_desc": "Crispy from outside and so...",
        "desc": "Crispy from outside and soft from inside, our potato wedges (Medium) when served with a side of cheese dip are sure to win hearts.",
        "rate": "3.7",
        "bought": "412 bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 115,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638365064263_Potato%20Wedges%2060gm%20%28Chipoatale%20Dip%29.jpg",
        "name": "Potato Wedges (Small) with Chipotle Cheese Dip (20gm)",
        "price": "79",
        "s_desc": "Crispy from outside and so...",
        "desc": "Crispy from outside and soft from inside, our potato wedges (small) when served with a side of Chipotle cheese dip are sure to win hearts.",
        "rate": "4.2",
        "bought": "383 bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 116,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638365017649_Potato%20Wedges%20120gm%20%28Chipotle%20Dip%29.jpg",
        "name": "Potato Wedges (medium) with Chipotle Cheese Dip (20gm)",
        "price": "121",
        "s_desc": "Crispy from outside and so...",
        "desc": "Crispy from outside and soft from inside, our potato wedges (Medium) when served with a side of Chipotle cheese dip are sure to win hearts.",
        "rate": "4.7",
        "bought": "466 bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 117,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1624452538141_Thumbs%20Up%20%28250%29.jpg",
        "name": "Potato Wedges and Thums up",
        "price": "121",
        "s_desc": "Potato Wedges (Medium)...",
        "desc": "Potato Wedges (Medium) and Thums up (250ml)",
        "rate": "4.4",
        "bought": "12.5k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 118,
        "cat": "drink",
        "img": "https://product-assets.faasos.io/production/product/image_1624447680588_SWIG%20Green%20apple%2023rd.jpg",
        "name": "SWIG Green Apple",
        "price": "50",
        "s_desc": "Aerated drink flavored wit...",
        "desc": "Aerated drink flavored with the mouth-puckering green apple. Sure to refresh you completely!",
        "rate": "4.5",
        "bought": "92.7k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 119,
        "cat": "drink",
        "img": "https://product-assets.faasos.io/production/product/image_1602770050512_swwwigg%20jeeerraa%20massa.jpg",
        "name": "SWIG Jeera Masala",
        "price": "50",
        "s_desc": "Aerated drink with the ad...",
        "desc": "Aerated drink with the added zing of jeera and masala. A perfect accompaniment to your meal.",
        "rate": "4.4",
        "bought": "97.2k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 120,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637034370650_1%20Classic%20Cold%20coffee800x800%201%20%282%29.jpg",
        "name": "Classic Cold Coffee (Reg-200ml)",
        "price": "158",
        "s_desc": "Sweet- Nostalgia in a cup...",
        "desc": "Sweet- Nostalgia in a cup. This classic is always in vogue. SLAY Signature Espresso Shot + Blended Vanilla Ice Cream + Chilled Milk.",
        "rate": "5",
        "bought": "0.2k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 121,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637034586341_The%20cold%20wave%20800x800%20%281%29.jpg",
        "name": "The Cold Wave (Reg-200ml)",
        "price": "158",
        "s_desc": "The Cold Wave (Bold Cold...",
        "desc": "The Cold Wave (Bold Cold Coffee Frappe) Reg-200ml (Slay CB)",
        "rate": "4.7",
        "bought": "1.1k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 122,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637036062408_5%20Hazelnut%20cold%20coffee%20800x800%201%20%281%29.jpg",
        "name": "Hazelnut Cold Coffee (Reg-200ml)",
        "price": "210",
        "s_desc": "Sweet- The crowd favourit...",
        "desc": "Sweet- The crowd favourite Hazelnut infused with the classic cold coffee. Does it get any better? SLAY Signature Espresso Shot + Blended Vanilla Ice Cream + Chilled Milk + Hazelnut Flavour.",
        "rate": "5",
        "bought": "0.2k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 123,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637037544694_9%20Iced%20choc%20Hazelnut%20Latte%20800x800.jpg",
        "name": "Iced Choco Hazelnut Cold Coffee (Reg-200ml)",
        "price": "210",
        "s_desc": "Sweet- Chocolate and haz....",
        "desc": "Sweet- Chocolate and hazelnut! Does it even get any better? SLAY Signature Espresso Shot + Chilled Milk + Blended Vanilla Ice Cream + Chocolate Sauce + Hazelnut Flavour.",
        "rate": "4.3",
        "bought": "0.1k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 124,
        "cat": "drink",
        "img": "https://product-assets.faasos.io/production/product/image_1637037618525_Cappuccino%20800x800%20%282%29.jpg",
        "name": "Cappuccino (Reg-200ml)",
        "price": "105",
        "s_desc": "Unsweetened- All time cro...",
        "desc": "Unsweetened- All time crowd favourite with the SLAY twist. A wet cappuccino with more steamed milk and less foam – designed to travel. SLAY Signature Espresso Shot + Steamed Milk",
        "rate": "4.8",
        "bought": "0.5k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 125,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637037734575_Madras%20mud%20800x800%20%283%29.jpg",
        "name": "Madras Mud (Reg-200ml)",
        "price": "105",
        "s_desc": "Unsweetened- Our tribute ...",
        "desc": "Unsweetened- Our tribute to the classic and timeless South Indian Filter Coffee. SLAY Madras Mud Shot + Steamed Milk.",
        "rate": "4.6",
        "bought": "0.3k bought this"
    },
    {
        "category": "Sides And Beverages",
        "id": 126,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1637175713587_image_1633009753854_Coca-Cola%20Bottle%20%28475%20ML%29%20%281%29.jpg",
        "name": "Coca-Cola (475 ML)",
        "price": "60",
        "s_desc": "Coca-Cola Bottle (475 ML)",
        "desc": "Coca-Cola Bottle (475 ML)",
        "rate": "4.8",
        "bought": "0.7k bought this"
    },
]

let desserts = [{
        "category": "Desserts",
        "id": 127,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1639029389880_Butter%20caremal%20Pancake.jpg",
        "name": "Vanilla Pancake with Salted Caramel",
        "price": "156",
        "s_desc": "Vanilla Pancake with Salte...",
        "desc": "Vanilla Pancake with Salted Caramel",
        "rate": "4",
        "bought": "0 bought this"
    },
    {
        "category": "Desserts",
        "id": 128,
        "cat": "veg",
        "img": "https://product-assets.faasos.io/production/product/image_1638181499604_Rich%20Mango%20Cheesecake%20%28Combo%20of%202%29.jpg",
        "name": "Mango Cheesecake (Box of 2)",
        "price": "310",
        "s_desc": "(Eggless) Original New Yor...",
        "desc": "(Eggless) Original New York Style Mango Cheesecake but with the hint of delicious notes of mangoes, the perfect balance of sweet and tart! Indulge in not 1 but 2!",
        "rate": "4.8",
        "bought": "0.8k bought this"
    },
    {
        "category": "Desserts",
        "id": 129,
        "cat": "desserts",
        "img": "https://product-assets.faasos.io/production/product/image_1635343004550_Salted%20Caramel%20Chocolate%20Pastry.jpg",
        "name": "Salted Caramel Chocolate Pastry",
        "price": "173",
        "s_desc": "(Eggless) This 5 layered p...",
        "desc": "(Eggless) This 5 layered pastry with layers of Chocolate sponge, dark ganache and caramel flavored mousse, is a pure dessert therapy! Sure to uplift your mood and take you on cloud nine.",
        "rate": "4.8",
        "bought": "5.4k bought this"
    },
    {
        "category": "Desserts",
        "id": 130,
        "cat": "desserts",
        "img": "https://product-assets.faasos.io/production/product/image_1635343377971_Mango%20Cheesecake.jpg",
        "name": "Mango Cheesecake",
        "price": "163",
        "s_desc": "(Eggless) This New York St...",
        "desc": "(Eggless) This New York Style Mango Cheesecake, made with premium quality cream cheese and a crust infused with delicious mango flavor, is any dessert lovers delight!",
        "rate": "4.8",
        "bought": "19.0k bought this"
    },
    {
        "category": "Desserts",
        "id": 131,
        "cat": "desserts",
        "img": "https://product-assets.faasos.io/production/product/image_1635343555407_Hazelnut%20Brownie.jpg",
        "name": "New Year Hazelnut Brownie",
        "price": "121",
        "s_desc": "(Eggless) Gooey & fudgy o...",
        "desc": "(Eggless) Gooey & fudgy on the inside, nutty on the outside and amazingly delicious all over! Our melt-in-the-mouth Nutty Chocolate Brownie will give you serious dessert goals.",
        "rate": "4.6",
        "bought": "55.4k bought this"
    },
    {
        "category": "Desserts",
        "id": 132,
        "cat": "desserts",
        "img": "https://product-assets.faasos.io/production/product/image_1637778439894_Indulgence%20Brownie.jpg",
        "name": "Indulgence Brownie",
        "price": "121",
        "s_desc": "(Eggless) Indulge in richly ...",
        "desc": "(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
        "rate": "4.5",
        "bought": "26.7k bought this"
    },
    {
        "category": "Desserts",
        "id": 133,
        "cat": "desserts",
        "img": "https://product-assets.faasos.io/production/product/image_1635343850131_Banana%20Lava%20Cake%20%28Pack%20of%201%29.jpg",
        "name": "Banana Lava Cake (Pack of 1)",
        "price": "110",
        "s_desc": "(Eggless) A perfect blend...",
        "desc": "(Eggless) A perfect blend of white chocolate & rich banana flavour in unique molten lava form makes this exotic dessert a must try.",
        "rate": "4.7",
        "bought": "4.7k bought this"
    }
]

showdessert(Fab_Wraps, box1)
showdessert(Faasos_Chefs, box2)

showdessert(daily_value, box4)

showdessert(signature_wraps, box7)
showdessert(Meal_Combos, box8)
showdessert(Rice_Bowls, box9)

showdessert1(sides_beverages, box11)
showdessert(desserts, box12)

// custom btn
let btn05 = document.getElementById("addbtn01")
//    let count = 1


btn05.addEventListener("click", function () {
    let quantity = document.getElementById("quantity")
    let minus = document.getElementById("minus").addEventListener("click", function () {
        quantity.innerHTML = ""
    })
    let plus = document.getElementById("plus").addEventListener("click", function () {
        // if (quantity.value > 1) {
        //     count++
        //     quantity.value = count
        // }
    })
})


// cart Items
let cartnumber = document.getElementById("style")
let cartname = document.getElementById("style1")
let data
let rupes
let total
data = JSON.parse(localStorage.getItem("cartItems"))

let cartshadow = document.getElementById("cartbox")

let checkbtndisplay = document.getElementById("dom2check")

let addbtn = document.getElementsByClassName("addbtn01")
for (var i = 0; i < addbtn.length; i++) {
    var button = addbtn[i]
    button.addEventListener("click", showcart)
}


var count1 = 0

function showcart() {

    // checkout functianality
    cartname.innerHTML = ""
    cartname.style.display = "none"
    // cartshadow.style.position="fixed"
    // cartshadow.style.top="3px"
    cartshadow.style.display = "block"
    cartshadow.style.width = "98%"
    cartshadow.style.margin = "auto"
    cartshadow.style.padding = "10px"
    cartshadow.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    cartshadow.style.borderRadius = "10px"

    checkbtndisplay.style.display = "block"
    checkbtndisplay.style.width = "100%"
    checkbtndisplay.style.margin = "auto"
    checkbtndisplay.style.backgroundColor = "#ffd344"
    checkbtndisplay.style.fontSize = "20px"
    checkbtndisplay.style.fontWeight = "700"
    checkbtndisplay.style.padding = "12px"
    checkbtndisplay.style.border = "none"
    checkbtndisplay.style.borderRadius = "5px"
    checkbtndisplay.style.marginTop = "10px"
    checkbtndisplay.style.cursor = "pointer"

    // checkbtndisplay.style.position="fixed"

    // cartname.style.position = "fixed"
    // cartnumber.style.position = "fixed"


    data = JSON.parse(localStorage.getItem("cartItems"))
    console.log(data.length)


    count1++

    if (data.length == 0) {

        cartshadow.style.display = "none"

    }
    if (data.length == 1) {
        cartnumber.innerHTML = `Cart <span id="cartstyle"> ${1} item</span>`
    } else {
        cartnumber.innerHTML = `Cart <span id="cartstyle"> ${data.length} items</span>`
    }
    rupes = document.getElementById("rupee")
    let dom = document.getElementById("dom01")
    // rupes.style.position = "fixed"
    // dom.style.position = "fixed"

    // total calculation

    totalData(data)

    dom.innerHTML = ""
    data.forEach(function (el, i) {
        var count = 1
        let {
            desc,
            img,
            name,
            price,
            rate,
            s_desc,
            bought,
            cat
        } = el;

        let div = document.createElement("div")
        div.setAttribute("id", "cartdiv")

        let food = document.createElement("div")
        food.setAttribute("id", "food")
        let imgdiv = document.createElement("div")
        imgdiv.setAttribute("id", "imgicon01")
        let priceimg = document.createElement("img")
        priceimg.setAttribute("id", "priceimg01")
        if (cat == "veg") {
            priceimg.setAttribute(
                "src",
                "https://www.iamgoingvegan.com/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg"
            );
        } else {
            priceimg.setAttribute(
                "src",
                "https://raizethebar.com/media/non-veg-sign_aXi4mRk.png"
            );
        }


        let foodnamediv = document.createElement("div")
        let foodname = document.createElement("p")
        foodname.setAttribute("id", "foodname")
        foodname.innerText = name
        // foodnamediv.style.position="fixed"
        let pricediv = document.createElement("div")
        pricediv.setAttribute("id", "pricediv")
        pricediv.innerHTML = `₹ ${price}`
        // pricediv.style.position="fixed"

        //button + & -

        let buttonsdiv = document.createElement("div")
        buttonsdiv.setAttribute("id", "buttonsdiv")

        let input01 = document.createElement("input")
        input01.setAttribute("id", "input01")
        input01.value = 1;

        let minus = document.createElement("button")
        minus.setAttribute("id", "minus")
        minus.innerText = "-"
        minus.addEventListener("click", function () {
            if (count > 1) {
                count--
                input01.value = count
                rupes.innerHTML = `₹ ${total * count}`
                pricediv.innerHTML = `₹ ${price * count}`
            } else {
                count1--
                console.log(count1)
                cartnumber.innerHTML = `Cart <span id="cartstyle"> ${count1} items</span>`
                if (count1 == 0) {
                    cartshadow.style.display = "none"
                    cartnumber.innerHTML = `Cart`
                    checkbtndisplay.style.display = "none"
                } else {
                    cartnumber.innerHTML = `Cart <span id="cartstyle"> ${count1} items</span>`
                }
                removebtn(el, i)
                div.innerHTML = ""
                div.style.display = "none"
            }


        })
        // cartshadow.style.position = "fixed"
        // cartshadow.style.marginTop = "100px"
        // dom.style.position = "fixed"
        // dom.style.display="block"
        // dom.style.marginTop = "100px"

        // checkbtndisplay.style.position = "fixed"

        // cartname.style.position = "fixed"
        // cartnumber.style.position = "fixed"
        //  rupes.style.position = "relative"

        let plus = document.createElement("button")
        plus.innerText = "+"
        plus.setAttribute("id", "plus")
        plus.addEventListener("click", function () {
            count++
            input01.value = count
            let eachprice = price * count
            rupes.innerHTML = `₹ ${total + ((count - 1) * price)}`
            pricediv.innerHTML = `₹ ${price * count}`
        })

        imgdiv.append(priceimg)
        foodnamediv.append(foodname)
        food.append(imgdiv, foodnamediv)
        buttonsdiv.append(minus, input01, plus)
        div.append(food, buttonsdiv, pricediv)
        dom.append(div)
    })





}


function removebtn(m, i) {

    data = data.filter(function (elem, ind) {
        return i !== ind
    })

    let data1 = data
    localStorage.setItem("cartItems", JSON.stringify(data1))
    totalData(data1)
    showcart(data1)
}

function totalData(data) {
    total = data.reduce(function (acc, cv) {
        return acc + Number(cv.price)
    }, 0)
    rupes.innerHTML = `₹ ${total}`
    console.log(total)

}


let checksend = document.getElementById("dom2check")
checksend.addEventListener("click", function () {
    localStorage.setItem("checkdata", JSON.stringify(data))
})


var a = document.getElementById("radio11").addEventListener("click", checkme)
var b = document.getElementById("radio12").addEventListener("click", checkme1)

function checkme() {
    var a = document.getElementById("radio11")
    if (a.checked == true) {
        let Fab_Wraps1 = Fab_Wraps.filter(function (el) {
            return el.cat == "nonveg"
        })
        let Fab_Wraps2 = Faasos_Chefs.filter(function (el) {
            return el.cat == "nonveg"
        })

        let Fab_Wraps3 = daily_value.filter(function (el) {
            return el.cat == "nonveg"
        })

        let Fab_Wraps4 = signature_wraps.filter(function (el) {
            return el.cat == "nonveg"
        })

        let Fab_Wraps5 = Meal_Combos.filter(function (el) {
            return el.cat == "nonveg"
        })

        let Fab_Wraps6 = Rice_Bowls.filter(function (el) {
            return el.cat == "nonveg"
        })

        let Fab_Wraps7 = sides_beverages.filter(function (el) {
            return el.cat == "nonveg"
        })

        let Fab_Wraps8 = desserts.filter(function (el) {
            return el.cat == "nonveg"
        })

        showdessert(Fab_Wraps1, box1)
        showdessert(Fab_Wraps2, box2)
        showdessert(Fab_Wraps3, box4)
        showdessert(Fab_Wraps4, box7)
        showdessert(Fab_Wraps5, box8)
        showdessert(Fab_Wraps6, box9)
        showdessert(Fab_Wraps7, box11)
        showdessert(Fab_Wraps8, box12)

        addbtn = document.getElementsByClassName("addbtn01")
        for (var i = 0; i < addbtn.length; i++) {
            var button = addbtn[i]
            button.addEventListener("click", showcart)
        }


        //  })
        // let f1 = Fab_Wraps1
        // showdessert(f1, box1)
    } else {
        showdessert(Fab_Wraps, box1)
        showdessert(Fab_Wraps, box1)
        showdessert(Faasos_Chefs, box2)

        showdessert(daily_value, box4)

        showdessert(signature_wraps, box7)
        showdessert(Meal_Combos, box8)
        showdessert(Rice_Bowls, box9)

        showdessert1(sides_beverages, box11)
        showdessert(desserts, box12)

        addbtn = document.getElementsByClassName("addbtn01")
        for (var i = 0; i < addbtn.length; i++) {
            var button = addbtn[i]
            button.addEventListener("click", showcart)
        }
    }
}
// showdessert(Fab_Wraps, box1)
// showdessert(Faasos_Chefs, box2)

// showdessert(daily_value, box4)

// showdessert(signature_wraps, box7)
// showdessert(Meal_Combos, box8)
// showdessert(Rice_Bowls, box9)

// showdessert1(sides_beverages, box11)
// showdessert(desserts, box12)





function checkme1() {
    var b = document.getElementById("radio12")
    if (b.checked == true) {

        let Fab_Wraps1 = Fab_Wraps.filter(function (el) {
            return el.cat == "veg"
        })

        let Fab_Wraps2 = Faasos_Chefs.filter(function (el) {
            return el.cat == "veg"
        })

        let Fab_Wraps3 = daily_value.filter(function (el) {
            return el.cat == "veg"
        })

        let Fab_Wraps4 = signature_wraps.filter(function (el) {
            return el.cat == "veg"
        })

        let Fab_Wraps5 = Meal_Combos.filter(function (el) {
            return el.cat == "veg"
        })

        let Fab_Wraps6 = Rice_Bowls.filter(function (el) {
            return el.cat == "veg"
        })

        let Fab_Wraps7 = sides_beverages.filter(function (el) {
            return el.cat == "veg"
        })

        let Fab_Wraps8 = desserts.filter(function (el) {
            return el.cat == "veg"
        })

        showdessert(Fab_Wraps1, box1)
        showdessert(Fab_Wraps2, box2)
        showdessert(Fab_Wraps3, box4)
        showdessert(Fab_Wraps4, box7)
        showdessert(Fab_Wraps5, box8)
        showdessert(Fab_Wraps6, box9)
        showdessert1(Fab_Wraps7, box11)
        showdessert(Fab_Wraps8, box12)
        addbtn = document.getElementsByClassName("addbtn01")
        for (var i = 0; i < addbtn.length; i++) {
            var button = addbtn[i]
            button.addEventListener("click", showcart)
        }

    } else {
        showdessert(Fab_Wraps, box1)
        showdessert(Faasos_Chefs, box2)

        showdessert(daily_value, box4)

        showdessert(signature_wraps, box7)
        showdessert(Meal_Combos, box8)
        showdessert(Rice_Bowls, box9)

        showdessert1(sides_beverages, box11)
        showdessert(desserts, box12)

        addbtn = document.getElementsByClassName("addbtn01")
        for (var i = 0; i < addbtn.length; i++) {
            var button = addbtn[i]
            button.addEventListener("click", showcart)
        }
    }
}
//     let win = document.querySelector("window")
//     console.log(win)

// $(`a[href*="#"]`).on(click,function(e){
//     e.preventDefault()
//     $(`html,body`).animate({
//         scrollTop :$(($this).attr(`href`)).offset().top,
//     },
//         500,
//         `linear`
//     )
//     console.log(e)
// })
// document.querySelectorAll(".li1").addEventListener("click",function(){
//     console.log("here")
// })

let linkgo = document.getElementsByClassName("li1")
let dataaaa = document.querySelector(".set")

for (var i = 0; i < linkgo.length; i++) {
    var link = linkgo[i]
    link.addEventListener("click", function () {
        console.log("here")
    })

}

showcart()