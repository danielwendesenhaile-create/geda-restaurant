// ─────────────────────────────────────────────────────────────────────────────
// Al Hayat Cafeteria — Editable Menu Data
// Edit names, prices, descriptions, and image URLs here.
// Refresh menu.html in the browser to see changes instantly.
// ─────────────────────────────────────────────────────────────────────────────

const MENU_CATEGORIES = [
  {
    id: "nyaata-foonii",
    nameOromo: "Nyaata Foonii",
    nameAmharic: "የፍስግ ምግብ",
    icon: "🥩",
    items: [
      {
        nameOromo: "Shekla Tibs", nameAmharic: "ሸክላ ጥብስ",
        descOromo: "", descAmharic: "", price: "AED 40",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Tibs", nameAmharic: "ጥብስ",
        descOromo: "", descAmharic: "", price: "AED 30",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Deka Tibs", nameAmharic: "ደቃ ጥብስ",
        descOromo: "", descAmharic: "", price: "AED 30",
        image: "https://images.unsplash.com/photo-1529694157872-7d2b7d1cbf61?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Gomen Besiga", nameAmharic: "ጎመን በስጋ",
        descOromo: "", descAmharic: "", price: "AED 30",
        image: "https://images.unsplash.com/photo-1546069922-917e4fdc10d3?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Kitfo Addaa", nameAmharic: "ልዩ ክትፎ",
        descOromo: "", descAmharic: "", price: "AED 40",
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Kitfo", nameAmharic: "ክትፎ",
        descOromo: "", descAmharic: "", price: "AED 35",
        image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Kuanta Firfir", nameAmharic: "ቋንጣ ፍርፍር",
        descOromo: "", descAmharic: "", price: "AED 30",
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Mahberawi", nameAmharic: "ማህበራዊ",
        descOromo: "", descAmharic: "", price: "AED 50",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Enkulal Firfir", nameAmharic: "እንቁላል ፍርፍር",
        descOromo: "", descAmharic: "", price: "AED 20",
        image: "https://images.unsplash.com/photo-1525351484163-7529414f2aae?w=120&h=120&fit=crop&auto=format"
      }
    ]
  },
  {
    id: "nyaata-soomaa",
    nameOromo: "Nyaata Soomaa",
    nameAmharic: "የጾም ምግብ",
    icon: "🌿",
    items: [
      {
        nameOromo: "Firfir", nameAmharic: "ፍርፍር",
        descOromo: "", descAmharic: "", price: "AED 20",
        image: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Beyayinet", nameAmharic: "በያይነት",
        descOromo: "", descAmharic: "", price: "AED 25",
        image: "https://images.unsplash.com/photo-1512621776951-a57ef244e7ab?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Gomen Tibs", nameAmharic: "ጎመን ጥብስ",
        descOromo: "", descAmharic: "", price: "AED 25",
        image: "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Tegabino", nameAmharic: "ተጋቢኖ",
        descOromo: "", descAmharic: "", price: "AED 25",
        image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Shiro Feses", nameAmharic: "ሽሮ ፍስስ",
        descOromo: "", descAmharic: "", price: "AED 20",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Selata", nameAmharic: "ሰላጣ",
        descOromo: "", descAmharic: "", price: "AED 15",
        image: "https://images.unsplash.com/photo-1512621776951-a57ef244e7ab?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Pasta (Normal/Batikilt)", nameAmharic: "ፓስታ (መደበኛ/በአትክልት)",
        descOromo: "", descAmharic: "", price: "AED 20",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Makaroni", nameAmharic: "ማካሮኒ",
        descOromo: "", descAmharic: "", price: "AED 20",
        image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Avocado", nameAmharic: "አቮካዶ",
        descOromo: "", descAmharic: "", price: "AED 20",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=120&h=120&fit=crop&auto=format"
      }
    ]
  },
  {
    id: "cuunfaa",
    nameOromo: "Cuunfaa",
    nameAmharic: "ጁስ",
    icon: "🥤",
    items: [
      {
        nameOromo: "Burtukaana", nameAmharic: "ብርቱካን ጁስ",
        descOromo: "", descAmharic: "", price: "AED 10",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Ananaasii", nameAmharic: "አናናስ ጁስ",
        descOromo: "", descAmharic: "", price: "AED 10",
        image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Istirooberii", nameAmharic: "እስትሮቤሪ ጁስ",
        descOromo: "", descAmharic: "", price: "AED 10",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Juice Addaa", nameAmharic: "ልዩ ጁስ",
        descOromo: "", descAmharic: "", price: "AED 15",
        image: "https://images.unsplash.com/photo-1622597467836-f3e2b9e54b33?w=120&h=120&fit=crop&auto=format"
      },
      {
        nameOromo: "Beso Juice", nameAmharic: "በሶ ጁስ",
        descOromo: "", descAmharic: "", price: "AED 5",
        image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=120&h=120&fit=crop&auto=format"
      }
    ]
  },
  {
    id: "dhugaatii",
    nameOromo: "Dhugaatii Lallaafaa",
    nameAmharic: "ለስላሳ",
    icon: "🥛",
    items: [
      { nameOromo: "Coca-Cola",    nameAmharic: "Coca-Cola",    descOromo: "", descAmharic: "", price: "AED 5",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=120&h=120&fit=crop&auto=format" },
      { nameOromo: "Pepsi",        nameAmharic: "Pepsi",        descOromo: "", descAmharic: "", price: "AED 5",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=120&h=120&fit=crop&auto=format" },
      { nameOromo: "Sprite",       nameAmharic: "Sprite",       descOromo: "", descAmharic: "", price: "AED 5",
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=120&h=120&fit=crop&auto=format" },
      { nameOromo: "Mountain Dew", nameAmharic: "Mountain Dew", descOromo: "", descAmharic: "", price: "AED 5",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=120&h=120&fit=crop&auto=format" },
      { nameOromo: "Fanta",        nameAmharic: "Fanta",        descOromo: "", descAmharic: "", price: "AED 5",
        image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?w=120&h=120&fit=crop&auto=format" },
      { nameOromo: "Mirinda",      nameAmharic: "Mirinda",      descOromo: "", descAmharic: "", price: "AED 5",
        image: "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?w=120&h=120&fit=crop&auto=format" }
    ]
  }
];

// Restaurant contact info — edit here
const RESTAURANT_INFO = {
  name:      "Al Hayat Cafeteria",
  nameAmh:   "አል ሃያት ካፌቴሪያ",
  slogan:    "Where Every Meal Tells a Story",
  sloganAmh: "እያንዳንዱ ምግብ ታሪክ ይናገራል",
  phone:     "+971 XX XXX XXXX",
  whatsapp:  "+971 XX XXX XXXX",
  instagram: "@alhayatcafeteria",
  tiktok:    "@alhayatcafeteria",
  facebook:  "Al Hayat Cafeteria",
  location:  "Ajman, UAE",
  qrImage:   ""   // set to your QR code image filename e.g. "qr.png"
};
