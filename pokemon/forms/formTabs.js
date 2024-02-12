  // {
  //    _id: 0
  //   pokemonIds: [],
  //   key: '',
  //   tab: [
  //     { id: 0, name: '' }
  //   ]
  // },

const formTabs = [
  // Sun & Moon
  {
    _id: 19,
    pokemonIds: [ 19, 19.1 ],
    key: 'rattata',
    tab: [
      { id: 19, name: 'Rattata' },
      { id: 19.1, name: 'Alolan Rattata' },
    ]
  },
  {
    _id: 20,
    pokemonIds: [ 20, 20.1 ],
    key: 'raticate',
    tab: [
      { id: 20, name: 'Raticate' },
      { id: 20.1, name: 'Alolan Raticate' },
    ]
  },
  {
    _id: 26,
    pokemonIds: [ 26, 26.1 ],
    key: 'raichu',
    tab: [
      { id: 26, name: 'Raichu' },
      { id: 26.1, name: 'Alolan Raichu' },
    ]
  },
  {
    _id: 27,
    pokemonIds: [ 27, 27.1 ],
    key: 'sandshrew',
    tab: [
      { id: 27, name: 'Sandshrew' },
      { id: 27.1, name: 'Alolan Sandshrew' },
    ]
  },
  {
    _id: 28,
    pokemonIds: [ 28, 28.1 ],
    key: 'sandslash',
    tab: [
      { id: 28, name: 'Sandslash' },
      { id: 28.1, name: 'Alolan Sandslash' },
    ]
  },
  {
    _id: 37,
    pokemonIds: [ 37, 37.1 ],
    key: 'vulpix',
    tab: [
      { id: 37, name: 'Vulpix' },
      { id: 37.1, name: 'Alolan Vulpix' },
    ]
  },
  {
    _id: 38,
    pokemonIds: [ 38, 38.1 ],
    key: 'ninetales',
    tab: [
      { id: 38, name: 'Ninetales' },
      { id: 38.1, name: 'Alolan Ninetales' },
    ]
  },
  {
    _id: 50,
    pokemonIds: [ 50, 50.1 ],
    key: 'diglett',
    tab: [
      { id: 50, name: 'Diglett' },
      { id: 50.1, name: 'Alolan Diglett' },
    ]
  },
  {
    _id: 51,
    pokemonIds: [ 51, 51.1 ],
    key: 'dugtrio',
    tab: [
      { id: 50, name: 'Dugtrio' },
      { id: 50.1, name: 'Alolan Dugtrio' },
    ]
  },
  {
    _id: 52,
    pokemonIds: [ 52, 52.1 ],
    key: 'meowth',
    tab: [
      { id: 52, name: 'Meowth' },
      { id: 52.1, name: 'Alolan Meowth' },
    ]
  },
  {
    _id: 53,
    pokemonIds: [ 53, 53.1 ],
    key: 'persian',
    tab: [
      { id: 53, name: 'Persian' },
      { id: 53.1, name: 'Alolan Persian' },
    ]
  },
  {
    _id: 74,
    pokemonIds: [ 74, 74.1 ],
    key: 'geodude',
    tab: [
      { id: 74, name: 'Geodude' },
      { id: 74.1, name: 'Alolan Geodude' },
    ]
  },
  {
    _id: 75,
    pokemonIds: [ 75, 75.1 ],
    key: 'graveler',
    tab: [
      { id: 75, name: 'Graveler' },
      { id: 75.1, name: 'Alolan Graveler' },
    ]
  },
  {
    _id: 76,
    pokemonIds: [ 76, 76.1 ],
    key: 'golem',
    tab: [
      { id: 76, name: 'Golem' },
      { id: 76.1, name: 'Alolan Golem' },
    ]
  },
  {
    _id: 88,
    pokemonIds: [ 88, 88.1 ],
    key: 'grimer',
    tab: [
      { id: 88, name: 'Grimer' },
      { id: 88.1, name: 'Alolan Grimer' },
    ]
  },
  {
    _id: 89,
    pokemonIds: [ 89, 89.1 ],
    key: 'muk',
    tab: [
      { id: 89, name: 'Muk' },
      { id: 89.1, name: 'Alolan Muk' },
    ]
  },
  {
    _id: 103,
    pokemonIds: [ 103, 103.1 ],
    key: 'exeggutor',
    tab: [
      { id: 103, name: 'Exeggutor' },
      { id: 103.1, name: 'Alolan Exeggutor' },
    ]
  },
  {
    _id: 105,
    pokemonIds: [ 105, 105.1 ],
    key: 'marowak',
    tab: [
      { id: 105, name: 'Marowak' },
      { id: 105.1, name: 'Alolan Marowak' },
    ]
  },
  // Sword & Shield
  {
    _id: 898,
    pokemonIds: [ 898, 898.1, 898.2 ],
    key: 'calyrex',
    tab: [
      { id: 898, name: 'Calyrex' },
      { id: 898.1, name: 'Ice Rider' },
      { id: 898.2, name: 'Shadow Rider' },
    ]
  },
  // Scarlet & Violet 
  {
    _id: 128,
    pokemonIds: [ 128, 128.1, 128.2, 128.3],
    key: 'tauros',
    tab: [
      { id: 128, name: "Tauros" },
      { id: 128.1, name: "Combat Breed" },
      { id: 128.2, name: "Blaze Breed" },
      { id: 128.3, name: "Aqua Breed" },
    ]
  },
  {
    _id: 194,
    pokemonIds: [ 194, 194.1 ],
    key: 'wooper',
    tab: [  
      { id: 194, name: "Wooper" },
      { id: 194.1, name: "Paldean Wooper" },
    ]
  },
  {
    _id: 901,
    pokemonIds: [ 901, 901.1 ],
    key: 'ursaluna',
    tab: [  
      { id: 901, name: "Ursaluna" },
      { id: 901.1, name: "Bloodmoon" },
    ]
  },
  {
    _id: 916,
    pokemonIds: [ 916, 916.1 ],
    key: 'oinkologne',
    tab: [  
      { id: 916, name: "Male" },
      { id: 916.1, name: "Female" },
    ]
  },
  {
    _id: 925,
    pokemonIds: [ 925, 925.1 ],
    key: 'maushold',
    tab: [
      { id: 925, name: "Family of Four" },
      { id: 925.1, name: "Family of Three" },
    ]
  },
  {
    _id: 931,
    pokemonIds: [ 931, 931.1, 931.2, 931.3 ],
    key: 'squawkabilly',
    tab: [
      { id: 931, name: "Green Plumage" },
      { id: 931.1, name: "Blue Plumage" },
      { id: 931.2, name: "Yellow Plumage" },
      { id: 931.3, name: "White Plumage" },
    ]
  },
  {
    _id: 964,
    pokemonIds: [ 964, 964.1 ],
    key: 'palafin',
    tab: [
      { id: 964, name: "Zero Form" },
      { id: 964.1, name: "Hero Form" },
    ]
  },
  {
    _id: 978,
    pokemonIds: [ 978, 978.1, 978.2 ],
    key: 'tatsugiri',
    tab: [
      { id: 978, name: "Curly Form" },
      { id: 978.1, name: "Droopy Form" },
      { id: 978.2, name: "Stretchy Form" },
    ]
  },
  {
    _id: 982,
    pokemonIds: [ 982, 982.1 ],
    key: 'dudunsparce',
    tab: [
      { id: 982, name: "Two-Segment Form" },
      { id: 982.1, name: "Three-Segment Form" },
    ]
  },
  {
    _id: 999,
    pokemonIds: [ 999, 999.1 ],
    key: 'gimmighoul',
    tab: [
      { id: 999, name: "Chest Form" },
      { id: 999.1, name: "Roaming Form" },
    ]
  },
  {
    _id: 1017,
    pokemonIds: [ 1017, 1017.1, 1017.2, 1017.3 ],
    key: 'ogrepon',
    tab: [
      { id: 1017, name: "Teal Mask" },
      { id: 1017.1, name: "Wellspring Mask" },
      { id: 1017.2, name: "Hearthflame Mask" },
      { id: 1017.3, name: "Cornerstone Mask" },
    ]
  },
];

module.exports = formTabs;