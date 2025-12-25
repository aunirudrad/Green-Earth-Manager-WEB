// Trees Data - Static data that mimics the original trees.json
const treesData = [
    {
        "id": 1,
        "name": "Mango Tree",
        "scientific_name": "Mangifera indica",
        "category": "Fruit Trees",
        "price": 500,
        "image_url": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
        "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy provides excellent shade, and the tree can live for over 100 years. The fruit is rich in vitamins A and C, and the tree is culturally significant in many tropical regions."
    },
    {
        "id": 2,
        "name": "Guava Tree",
        "scientific_name": "Psidium guajava",
        "category": "Fruit Trees",
        "price": 350,
        "image_url": "https://i.ibb.co.com/WNbbx3rn/guava-min.jpg",
        "description": "A hardy fruit tree that grows in various climates, yielding guavas packed with Vitamin C. Its leaves are used for herbal remedies, and the fruit can be eaten raw or made into jelly, juice, and other preparations."
    },
    {
        "id": 3,
        "name": "Jackfruit Tree",
        "scientific_name": "Artocarpus heterophyllus",
        "category": "Fruit Trees",
        "price": 800,
        "image_url": "https://i.ibb.co.com/xt98PwZq/jackfruit-min.jpg",
        "description": "A large tropical tree that bears the world's biggest fruit, the jackfruit. Its sweet and aromatic flesh can weigh up to 35 kg. The unripe fruit is used as a vegetable, while ripe jackfruit is enjoyed as a sweet treat."
    },
    {
        "id": 4,
        "name": "Gulmohar",
        "scientific_name": "Delonix regia",
        "category": "Flowering Trees",
        "price": 400,
        "image_url": "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg",
        "description": "Known as the 'Flame of the Forest', this tree bursts into a vibrant display of red flowers every summer. Its wide-spreading canopy and fern-like leaves make it a stunning ornamental tree for parks and gardens."
    },
    {
        "id": 5,
        "name": "Champa",
        "scientific_name": "Plumeria",
        "category": "Flowering Trees",
        "price": 300,
        "image_url": "https://i.ibb.co.com/qY8qS7YN/champa-min.jpg",
        "description": "A fragrant flowering tree that adorns gardens with its delicate white blossoms. Widely cherished for its sweet scent used in perfumes and traditional ceremonies across Asia."
    },
    {
        "id": 6,
        "name": "Krishnachura",
        "scientific_name": "Caesalpinia pulcherrima",
        "category": "Flowering Trees",
        "price": 450,
        "image_url": "https://i.ibb.co.com/MxPrt83c/Krishnachura-min.jpg",
        "description": "A striking ornamental tree famous for its brilliant orange-red blossoms. Its wide canopy adds a splash of color to landscapes and is particularly beautiful during spring."
    },
    {
        "id": 7,
        "name": "Banyan Tree",
        "scientific_name": "Ficus benghalensis",
        "category": "Shade Trees",
        "price": 1200,
        "image_url": "https://i.ibb.co.com/FkH6MRhR/banyan-min.jpg",
        "description": "A majestic shade tree with a vast canopy and iconic aerial roots. Revered in many cultures, it provides shelter for countless creatures and can spread over large areas, living for centuries."
    },
    {
        "id": 8,
        "name": "Neem Tree",
        "scientific_name": "Azadirachta indica",
        "category": "Medicinal Trees",
        "price": 600,
        "image_url": "https://i.ibb.co.com/CKXhH7nP/neem-min.jpg",
        "description": "A medicinal shade tree with powerful insect-repelling properties. Its leaves, bark, and seeds are used in traditional medicine for treating various ailments and in organic farming as a natural pesticide."
    },
    {
        "id": 9,
        "name": "Rain Tree",
        "scientific_name": "Samanea saman",
        "category": "Shade Trees",
        "price": 900,
        "image_url": "https://i.ibb.co.com/svQdDjS8/rain-min.jpg",
        "description": "A fast-growing tree with umbrella-like canopy and soft pink flowers. Perfect for roadside plantings and parks, it provides excellent shade and its leaves fold during rain and at night."
    },
    {
        "id": 10,
        "name": "Amla Tree",
        "scientific_name": "Phyllanthus emblica",
        "category": "Medicinal Trees",
        "price": 550,
        "image_url": "https://i.ibb.co.com/50K7Cgv/amla-min.jpg",
        "description": "A small to medium tree producing fruits rich in Vitamin C and antioxidants. Its fruits are used in Ayurvedic medicine and are a key ingredient in many traditional health supplements."
    },
    {
        "id": 11,
        "name": "Teak",
        "scientific_name": "Tectona grandis",
        "category": "Timber Trees",
        "price": 2000,
        "image_url": "https://i.ibb.co.com/391CtLWD/teak-min.jpg",
        "description": "A high-value hardwood tree known for its durability and resistance to termites. Widely used in premium furniture, boat building, and construction for its beautiful grain and long-lasting quality."
    },
    {
        "id": 12,
        "name": "Pine",
        "scientific_name": "Pinus",
        "category": "Evergreen Trees",
        "price": 1500,
        "image_url": "https://i.ibb.co.com/fdYphDNS/pine-min.jpg",
        "description": "An evergreen tree with needle-like leaves and fragrant resin. Commonly used for timber, paper production, and as ornamental trees. Pine forests are important ecosystems supporting diverse wildlife."
    },
    {
        "id": 13,
        "name": "Bonsai",
        "scientific_name": "Various species",
        "category": "Ornamental Trees",
        "price": 800,
        "image_url": "https://i.ibb.co.com/x8gt87ks/bonsai-min.jpg",
        "description": "An artfully grown miniature tree cultivated in pots. Represents patience, harmony, and a connection with nature. Bonsai cultivation is an ancient art form that requires careful pruning and shaping."
    },
    {
        "id": 14,
        "name": "Golden Bamboo",
        "scientific_name": "Bambusa vulgaris",
        "category": "Bamboo",
        "price": 700,
        "image_url": "https://i.ibb.co.com/xqFD0WyS/golden-bamboo-min.jpg",
        "description": "A fast-growing bamboo variety with golden-yellow stems. Perfect for privacy hedges and eco-friendly construction materials. Bamboo is one of the fastest-growing plants on Earth."
    },
    {
        "id": 15,
        "name": "Money Plant",
        "scientific_name": "Epipremnum aureum",
        "category": "Climbers",
        "price": 350,
        "image_url": "https://i.ibb.co.com/svtZJ7nw/money-plant-min.jpg",
        "description": "A popular indoor climber believed to bring prosperity. Thrives easily in soil or water with minimal care. Its heart-shaped leaves and trailing vines make it a favorite for home decoration."
    },
    {
        "id": 16,
        "name": "Water Lily",
        "scientific_name": "Nymphaea",
        "category": "Aquatic Plants",
        "price": 300,
        "image_url": "https://i.ibb.co.com/VWNQPDMR/water-lily-min.jpg",
        "description": "A floating aquatic plant with large leaves and stunning blooms. Adds beauty to ponds while supporting aquatic ecosystems. The flowers open during the day and close at night."
    }
];

// Categories
const categoriesData = [
    'All Trees',
    'Fruit Trees',
    'Flowering Trees',
    'Shade Trees',
    'Medicinal Trees',
    'Timber Trees',
    'Evergreen Trees',
    'Ornamental Trees',
    'Bamboo',
    'Climbers',
    'Aquatic Plants'
];

// Get trees data
function getTrees() {
    return treesData;
}

// Get categories
function getCategories() {
    return categoriesData;
}

// Find tree by ID
function getTreeById(id) {
    return treesData.find(tree => tree.id === parseInt(id));
}
