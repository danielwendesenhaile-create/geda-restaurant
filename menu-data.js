// ─────────────────────────────────────────────────────────────────────────────
// Geda Restaurant — Editable Menu Data
// Edit names, prices, descriptions, and image filenames here.
// Refresh menu.html in the browser to see changes instantly.
// ─────────────────────────────────────────────────────────────────────────────

const MENU_CATEGORIES = [
  {
    id: "nyaata-foonii",
    nameOromo: "Nyaata Foonii",
    nameAmharic: "የፍስግ ምግብ",
    icon: "🥩",
    items: [
      { nameOromo: "Shekla Tibs",    nameAmharic: "ሸክላ ጥብስ",    descOromo: "", descAmharic: "", price: "AED 40", image: "shekla-tibs.jpg" },
      { nameOromo: "Tibs",           nameAmharic: "ጥብስ",          descOromo: "", descAmharic: "", price: "AED 30", image: "tibs.jpg" },
      { nameOromo: "Deka Tibs",      nameAmharic: "ደቃ ጥብስ",      descOromo: "", descAmharic: "", price: "AED 30", image: "deka-tibs.jpg" },
      { nameOromo: "Gomen Besiga",   nameAmharic: "ጎመን በስጋ",     descOromo: "", descAmharic: "", price: "AED 30", image: "gomen-besiga.jpg" },
      { nameOromo: "Kitfo Addaa",    nameAmharic: "ልዩ ክትፎ",      descOromo: "", descAmharic: "", price: "AED 40", image: "kitfo-addaa.jpg" },
      { nameOromo: "Kitfo",          nameAmharic: "ክትፎ",           descOromo: "", descAmharic: "", price: "AED 35", image: "kitfo.jpg" },
      { nameOromo: "Kuanta Firfir",  nameAmharic: "ቋንጣ ፍርፍር",    descOromo: "", descAmharic: "", price: "AED 30", image: "kuanta-firfir.jpg" },
      { nameOromo: "Mahberawi",      nameAmharic: "ማህበራዊ",        descOromo: "", descAmharic: "", price: "AED 50", image: "mahberawi.jpg" },
      { nameOromo: "Enkulal Firfir", nameAmharic: "እንቁላል ፍርፍር",  descOromo: "", descAmharic: "", price: "AED 20", image: "enkulal-firfir.jpg" }
    ]
  },
  {
    id: "nyaata-soomaa",
    nameOromo: "Nyaata Soomaa",
    nameAmharic: "የጾም ምግብ",
    icon: "🌿",
    items: [
      { nameOromo: "Firfir",                  nameAmharic: "ፍርፍር",                    descOromo: "", descAmharic: "", price: "AED 20", image: "firfir.jpg" },
      { nameOromo: "Beyayinet",               nameAmharic: "በያይነት",                   descOromo: "", descAmharic: "", price: "AED 25", image: "beyayinet.jpg" },
      { nameOromo: "Gomen Tibs",              nameAmharic: "ጎመን ጥብስ",                 descOromo: "", descAmharic: "", price: "AED 25", image: "gomen-tibs.jpg" },
      { nameOromo: "Tegabino",                nameAmharic: "ተጋቢኖ",                    descOromo: "", descAmharic: "", price: "AED 25", image: "tegabino.jpg" },
      { nameOromo: "Shiro Feses",             nameAmharic: "ሽሮ ፍስስ",                  descOromo: "", descAmharic: "", price: "AED 20", image: "shiro-feses.jpg" },
      { nameOromo: "Selata",                  nameAmharic: "ሰላጣ",                      descOromo: "", descAmharic: "", price: "AED 15", image: "selata.jpg" },
      { nameOromo: "Pasta (Normal/Batikilt)", nameAmharic: "ፓስታ (መደበኛ/በአትክልት)",     descOromo: "", descAmharic: "", price: "AED 20", image: "pasta.jpg" },
      { nameOromo: "Makaroni",                nameAmharic: "ማካሮኒ",                    descOromo: "", descAmharic: "", price: "AED 20", image: "makaroni.jpg" },
      { nameOromo: "Avocado",                 nameAmharic: "አቮካዶ",                    descOromo: "", descAmharic: "", price: "AED 20", image: "avocado.jpg" }
    ]
  },
  {
    id: "cuunfaa",
    nameOromo: "Cuunfaa",
    nameAmharic: "ጁስ",
    icon: "🥤",
    items: [
      { nameOromo: "Burtukaana",  nameAmharic: "ብርቱካን ጁስ",  descOromo: "", descAmharic: "", price: "AED 10", image: "orange-juice.jpg" },
      { nameOromo: "Ananaasii",   nameAmharic: "አናናስ ጁስ",   descOromo: "", descAmharic: "", price: "AED 10", image: "pineapple-juice.jpg" },
      { nameOromo: "Istirooberii",nameAmharic: "እስትሮቤሪ ጁስ", descOromo: "", descAmharic: "", price: "AED 10", image: "strawberry-juice.jpg" },
      { nameOromo: "Juice Addaa", nameAmharic: "ልዩ ጁስ",     descOromo: "", descAmharic: "", price: "AED 15", image: "special-juice.jpg" },
      { nameOromo: "Beso Juice",  nameAmharic: "በሶ ጁስ",     descOromo: "", descAmharic: "", price: "AED 5",  image: "beso-juice.jpg" }
    ]
  },
  {
    id: "dhugaatii",
    nameOromo: "Dhugaatii Lallaafaa",
    nameAmharic: "ለስላሳ",
    icon: "🥛",
    items: [
      { nameOromo: "Coca-Cola",    nameAmharic: "Coca-Cola",    descOromo: "", descAmharic: "", price: "AED 5", image: "" },
      { nameOromo: "Pepsi",        nameAmharic: "Pepsi",        descOromo: "", descAmharic: "", price: "AED 5", image: "" },
      { nameOromo: "Sprite",       nameAmharic: "Sprite",       descOromo: "", descAmharic: "", price: "AED 5", image: "" },
      { nameOromo: "Mountain Dew", nameAmharic: "Mountain Dew", descOromo: "", descAmharic: "", price: "AED 5", image: "" },
      { nameOromo: "Fanta",        nameAmharic: "Fanta",        descOromo: "", descAmharic: "", price: "AED 5", image: "" },
      { nameOromo: "Mirinda",      nameAmharic: "Mirinda",      descOromo: "", descAmharic: "", price: "AED 5", image: "" }
    ]
  }
];

// Restaurant contact info — edit here
const RESTAURANT_INFO = {
  name:      "Geda Restaurant",
  nameAmh:   "ጌዳ ምግብ ቤት",
  slogan:    "Where Every Meal Tells a Story",
  sloganAmh: "እያንዳንዱ ምግብ ታሪክ ይናገራል",
  phone:     "+971 XX XXX XXXX",
  whatsapp:  "+971 XX XXX XXXX",
  instagram: "@gedarestaurant",
  tiktok:    "@gedarestaurant",
  facebook:  "Geda Restaurant",
  location:  "Ajman, UAE",
  qrImage:   ""   // set to your QR code image filename e.g. "qr.png"
};
