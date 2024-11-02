interface DrinksItem {
    id: string;
  drinkName: string;
  price: number;
  image: string;

}

const DrinksData: DrinksItem[] = [
    {
        id: '1',
        drinkName: 'Red wine',
        price: 11,
        image: 'https://media.istockphoto.com/id/991732782/photo/close-up-of-sommelier-serving-red-wine-at-fine-dining-restaurant.jpg?s=1024x1024&w=is&k=20&c=sqETtgcc9aK8dbPzDDzqeDsl7CZ2FX4ea6vvT33y3QM=', // Example image URL
      },
      {
        id: '2',
        drinkName: 'Velvet wine',
        price: 16,
        image: 'https://media.istockphoto.com/id/1184659496/photo/red-wine-being-poured-into-the-glass.jpg?s=1024x1024&w=is&k=20&c=Elox5yqIDpZ3YTTrkkblNJb17CRTXhwglAgjrSGvVro=', 
      },
      {
        id: '3',
        drinkName: 'Coke in a glass',
        price: 70,
        image: 'https://media.istockphoto.com/id/698051792/photo/soft-drink-on-wooden-table-and-men-sitting.jpg?s=1024x1024&w=is&k=20&c=p0iyPhRB95ux4OC4ty7Kt4gBUE-pzQpv-56wvyv4qns=', 
      },
      {
        id: '4',
        drinkName: 'Expresso',
        price: 70,
        image: 'https://media.istockphoto.com/id/1142568317/photo/elegant-chrome-coffee-maker-makes-an-exquisite-italian-espresso.jpg?s=1024x1024&w=is&k=20&c=D5E5ldkTZIjNd0vXuoLO7L4MRY-ggaOoGDC9s70XV5E=', 
      },
      {
        id: '5',
        drinkName: 'Brown Coffee',
        price: 70,
        image: 'https://media.istockphoto.com/id/2025692222/photo/espresso-coffee-glass-cup-on-a-brown-background.jpg?s=1024x1024&w=is&k=20&c=SEjeH8_JTq_Sq3tMzYH2_ySN73265m1JXD9xUWrjtPg=', // Example image URL
      },
      {
        id: '6',
        drinkName: 'Juliet Sweet Delight',
        price: 70,
        image: 'https://media.istockphoto.com/id/1005821592/photo/tiki-cocktail-by-the-sea.jpg?s=1024x1024&w=is&k=20&c=M4f5CTRez4vDDDr0_AZKarWCezMX3zpIxK3GPWv5J8M=', // Example image URL
      },
      {
        id: '7',
        drinkName: 'Juliet Sweet Delight',
        price: 70,
        image: 'https://media.istockphoto.com/id/516370330/photo/traditional-maltese-rabbit-stew.jpg?s=1024x1024&w=is&k=20&c=ZKXnhWGeVOPRFp7rhyKTjnzrxarH_yCULrUz2aGrDFk=', // Example image URL
      },
      {
        id: '8',
        drinkName: 'Juliet Sweet Delight',
        price: 70,
        image: 'https://media.istockphoto.com/id/516370330/photo/traditional-maltese-rabbit-stew.jpg?s=1024x1024&w=is&k=20&c=ZKXnhWGeVOPRFp7rhyKTjnzrxarH_yCULrUz2aGrDFk=', // Example image URL
      },


]

export default DrinksData;