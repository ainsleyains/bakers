import images from './images';

const coffees = [
    {
        title: 'Espresso',
        price: '$3.55',
        tags: 'HOT | 8oz',
    },
    {
        title: 'Expresso Macchiato',
        price: '$4.05',
        tags: 'HOT | 8oz',
    },
    {
        title: 'Flat White',
        price: '$5.65',
        tags: 'HOT | COLD',
    },
    {
        title: 'Cappuccino',
        price: '$5.85',
        tags: 'HOT | COLD',
    },
    {
        title: 'Latte',
        price: '$5.65',
        tags: 'HOT | COLD',
    },
];

const pastries = [
    {
        title: 'Croissant',
        price: '$4.40',
        tags: 'Strawberry  | Almond | Chocolate | Cheese',
    },
    {
        title: 'Macaron',
        price: '$6.85',
        tags: 'Raspberry | Lemon | Salted Caramel',
    },
    {
        title: 'Éclair',
        price: '$6.75',
        tags: 'Vanilla | Hazelnut | Pistachio',
    },

    {
        title: 'Cupcake',
        price: '$5.45',
        tags: 'Red Velvet | Cookies and Cream | Coffee',
    },

    {
        title: 'Tart',
        price: '$5.95',
        tags: 'Key Lime | Berry | Lemon ',
    },
];

const awards = [
    {
        imgUrl: images.award02,
        title: 'Bib Gourmond',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award01,
        title: 'Rising Star',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award05,
        title: 'AA Hospitality',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award03,
        title: 'Outstanding Chef',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
];

export default { coffees, pastries, awards };
