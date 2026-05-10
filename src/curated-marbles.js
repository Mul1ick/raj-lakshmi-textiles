const marbleAssets = import.meta.glob("./assets/marbles/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const asset = (filename) => {
  const file = marbleAssets[`./assets/marbles/${filename}`];
  if (!file) throw new Error(`Missing marble asset: ${filename}`);
  return file;
};

const curatedMarbles = [
  // { name: "Statuario", category: "White", src: asset("statuario.png") },
  { name: "Michelangelo", category: "White", src: asset("michelangelo.png") },
  { name: "Crema Marfil", category: "White", src: asset("crema-marfil.png") },
  { name: "Volakas White", category: "White", src: asset("volakas-white.png") },
  { name: "Vietnam White", category: "White", src: asset("vietnam-white.png") },
  {
    name: "Statuario Venatino",
    category: "White",
    src: asset("statuario-venatino.png"),
  },
  { name: "Lilac White", category: "White", src: asset("lilac-white.png") },
  { name: "Golden Spider", category: "White", src: asset("golden-spider.png") },
  { name: "Angelo White", category: "White", src: asset("angelo-white.jpg") },
  { name: "Dover White", category: "White", src: asset("dover-white.jpg") },

  {
    name: "Botticino",
    category: "Beige",
    src: asset("botticino.png"),
  },
  {
    name: "Botticino Extra",
    category: "Beige",
    src: asset("botticino-extra.png"),
  },
  { name: "Bianco Marfil", category: "Beige", src: asset("bianco-marfil.png") },
  { name: "Crema Diva", category: "Beige", src: asset("crema-diva.jpg") },
  { name: "Moon Cream", category: "Beige", src: asset("moon-cream.png") },
  { name: "Ottoman Beige", category: "Beige", src: asset("ottoman-beige.png") },
  { name: "Crema Bella", category: "Beige", src: asset("crema-bella.jpg") },
  { name: "Regal Beige", category: "Beige", src: asset("regal-beige.jpg") },
  { name: "Light Regal", category: "Beige", src: asset("light-regal.jpg") },
  { name: "Italy Dyna", category: "Beige", src: asset("italy-dyna.jpg") },
  { name: "Turkish Dyna", category: "Beige", src: asset("turkish-dyna.jpg") },
  {
    name: "Burberry Beige",
    category: "Beige",
    src: asset("burberry-beige.jpg"),
  },
  {
    name: "Cream Karaman",
    category: "Beige",
    src: asset("cream-karaman.jpg"),
  },
  { name: "Kaman Beige", category: "Beige", src: asset("kaman-beige.jpg") },
  { name: "Royal Beige", category: "Beige", src: asset("royal-beige.jpg") },
  { name: "Sofital Beige", category: "Beige", src: asset("sofital-beige.jpg") },
  { name: "Sugar Beige", category: "Beige", src: asset("sugar-beige.jpg") },
  // {
  //   name: "Perlato Istanbul",
  //   category: "Beige",
  //   src: asset("perlato-istanbul.jpg"),
  // },
  // { name: "Mellisa Beige", category: "Beige", src: asset("mellisa-beige.jpg") },
  {
    name: "French Vanilla",
    category: "Beige",
    src: asset("french-vanilla.jpg"),
  },

  { name: "Grey Milano", category: "Grey", src: asset("grey-milano.jpg") },
  { name: "Silver River", category: "Grey", src: asset("silver-river.png") },
  {
    name: "Grey Esprado",
    category: "Grey",
    src: asset("grey-esprado.png"),
  },
  {
    name: "Brescia Aurora",
    category: "Grey",
    src: asset("brescia-aurora.jpg"),
  },
  { name: "Bulgari Grey", category: "Grey", src: asset("bulgari-grey.jpg") },
  { name: "Cosmo Grey", category: "Grey", src: asset("cosmo-grey.jpg") },
  {
    name: "Moon Stone Silver",
    category: "Grey",
    src: asset("moon-stone-silver.jpg"),
  },
  { name: "Plain Grey", category: "Grey", src: asset("plain-grey.jpg") },
  { name: "Premium Grey", category: "Grey", src: asset("premium-grey.jpg") },
  { name: "Erey Grey", category: "Grey", src: asset("erey-grey.jpg") },
  // { name: "Sardan Khadi", category: "Grey", src: asset("sardan-khadi.jpg") },
  { name: "Iceberg Grey", category: "Grey", src: asset("iceberg-grey.jpg") },
  { name: "Grey William", category: "Grey", src: asset("ritza-grey.jpg") },
  { name: "Light Grey", category: "Grey", src: asset("light-grey.jpg") },
  { name: "Fantasy Grey", category: "Grey", src: asset("fantasy-grey.jpg") },
  { name: "Saran Koli", category: "Grey", src: asset("saran-koli.jpg") },
  { name: "Pietra Grey", category: "Grey", src: asset("pietra-grey.png") },
  {
    name: "Silver Light Grey",
    category: "Grey",
    src: asset("silver-light-grey.jpg"),
  },

  {
    name: "Moca Cream Fine Grain",
    category: "Beige",
    src: asset("moca-cream-fine-grain.jpg"),
  },
  { name: "Symphony Grey", category: "Grey", src: asset("symphony-grey.jpg") },
  { name: "Ottoman Cream", category: "Grey", src: asset("ottoman-cream.jpg") },

  {
    name: "Armani Bronze",
    category: "Exotic",
    src: asset("armani-bronze.jpg"),
  },
  { name: "Black Rose", category: "Exotic", src: asset("black-rose.jpg") },
  {
    name: "Nero Saint Laurent",
    category: "Exotic",
    src: asset("nero-saint-laurent.png"),
  },
  { name: "De Martino", category: "Exotic", src: asset("de-martino.jpg") },
  // {
  //   name: "Blue Loracia",
  //   category: "Exotic",
  //   src: asset("blue-loracia.jpg"),
  // },
  {
    name: "Vanilla Spider",
    category: "Exotic",
    src: asset("vanilla-spider.jpg"),
  },
  {
    name: "Rosso Alicante",
    category: "Exotic",
    src: asset("rosso-alicante.jpg"),
  },
  {
    name: "Golden Emperador",
    category: "Exotic",
    src: asset("golden-emperador.jpg"),
  },
  {
    name: "Rosso Lavante",
    category: "Exotic",
    src: asset("rosso-lavante.png"),
  },
  {
    name: "Silver Portoro",
    category: "Exotic",
    src: asset("silver-portoro.png"),
  },
  {
    name: "Golden Portoro",
    category: "Exotic",
    src: asset("golden-portoro.png"),
  },
  {
    name: "Metallic Rust",
    category: "Exotic",
    src: asset("metallic-rust.png"),
  },
  { name: "Irish Brown", category: "Exotic", src: asset("irish-brown.png") },
  {
    name: "Black Markino",
    category: "Exotic",
    src: asset("black-markino.png"),
  },
  {
    name: "Light Emprador",
    category: "Exotic",
    src: asset("light-emprador.png"),
  },
  {
    name: "Dark Emprador",
    category: "Exotic",
    src: asset("dark-emprador.png"),
  },
  {
    name: "White Travertine",
    category: "Travertine",
    src: asset("white-travertine.png"),
  },
  {
    name: "Titanium Travertine",
    category: "Travertine",
    src: asset("titanium-travertine.png"),
  },
  {
    name: "Red Travertine",
    category: "Travertine",
    src: asset("red-travertine.png"),
  },
  {
    name: "Beige Travertine",
    category: "Travertine",
    src: asset("beige-travertine.png"),
  },
  {
    name: "Silver Travertine",
    category: "Travertine",
    src: asset("silver-travertine.png"),
  },
  {
    name: "Mocca Cream",
    category: "Travertine",
    src: asset("mocca-cream.png"),
  },
  {
    name: "Green Onyx",
    category: "Onyx",
    src: asset("green-onyx.png"),
  },
  {
    name: "Honey Onyx",
    category: "Onyx",
    src: asset("honey-onyx.png"),
  },
  {
    name: "Mango Onyx",
    category: "Onyx",
    src: asset("mango-onyx.png"),
  },
  {
    name: "Pink Onyx",
    category: "Onyx",
    src: asset("pink-onyx.png"),
  },
  {
    name: "White Onyx",
    category: "Onyx",
    src: asset("white-onyx.png"),
  },
];

export default curatedMarbles;
