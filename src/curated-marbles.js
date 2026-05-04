const marbleAssets = import.meta.glob('./assets/marbles/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

const asset = (filename) => {
  const file = marbleAssets[`./assets/marbles/${filename}`]
  if (!file) throw new Error(`Missing marble asset: ${filename}`)
  return file
}

const curatedMarbles = [
  { name: 'Statuario', category: 'White', src: asset('statuario.png') },
  { name: 'Michelangelo', category: 'White', src: asset('michelangelo.png') },
  { name: 'Bianco Marfil', category: 'White', src: asset('bianco-marfil.png') },
  { name: 'Volakas White', category: 'White', src: asset('volakas-white.png') },
  { name: 'Vietnam White', category: 'White', src: asset('vietnam-white.png') },
  { name: 'Venatino White', category: 'White', src: asset('venatino-white.png') },
  { name: 'Lilac White', category: 'White', src: asset('lilac-white.png') },
  { name: 'Golden Spider', category: 'White', src: asset('golden-spider.png') },

  { name: 'Botticino Classico', category: 'Beige', src: asset('botticino-classico.png') },
  { name: 'Botticino Extra', category: 'Beige', src: asset('botticino-extra.png') },
  { name: 'Crema Marfil', category: 'Beige', src: asset('crema-marfil.png') },
  { name: 'Moon Cream', category: 'Beige', src: asset('moon-cream.png') },
  { name: 'Ottoman Beige', category: 'Beige', src: asset('ottoman-beige.png') },
  { name: 'Crema Bella', category: 'Beige', src: asset('crema-bella.jpg') },
  { name: 'Regal Beige', category: 'Beige', src: asset('regal-beige.jpg') },
  { name: 'Light Regal', category: 'Beige', src: asset('light-regal.jpg') },
  { name: 'Italy Dyno', category: 'Beige', src: asset('italy-dyno.jpg') },
  { name: 'Burberry Beige', category: 'Beige', src: asset('burberry-beige.jpg') },
  { name: 'Cream Karaman 2', category: 'Beige', src: asset('cream-karaman-2.jpg') },
  { name: 'Kaman Beige', category: 'Beige', src: asset('kaman-beige.jpg') },
  { name: 'Royal Beige', category: 'Beige', src: asset('royal-beige.jpg') },

  { name: 'Grey Milano', category: 'Grey', src: asset('grey-milano.png') },
  { name: 'Silver River', category: 'Grey', src: asset('silver-river.png') },
  { name: 'Macchia Vecchia (Grey Espado)', category: 'Grey', src: asset('macchia-vecchia-grey-espado.png') },
  { name: 'Brescia Aurora', category: 'Grey', src: asset('brescia-aurora.jpg') },
  { name: 'Bulgari Grey', category: 'Grey', src: asset('bulgari-grey.jpg') },
  { name: 'Cosmo Grey', category: 'Grey', src: asset('cosmo-grey.jpg') },
  { name: 'Moon Stone Silver', category: 'Grey', src: asset('moon-stone-silver.jpg') },
  { name: 'Plain Grey', category: 'Grey', src: asset('plain-grey.jpg') },
  { name: 'Premium Grey', category: 'Grey', src: asset('premium-grey.jpg') },

  { name: 'Moca Cream Fine Grain', category: 'Beige', src: asset('moca-cream-fine-grain.jpg') },
  { name: 'Symphony Grey', category: 'Grey', src: asset('symphony-grey.jpg') },

  { name: 'Armani Bronze', category: 'Brown', src: asset('armani-bronze.jpg') },
  { name: 'Black Rose', category: 'Black', src: asset('black-rose.jpg') },
  { name: 'Vanilla Spider', category: 'Imported', src: asset('vanilla-spider.jpg') },
]

export default curatedMarbles
