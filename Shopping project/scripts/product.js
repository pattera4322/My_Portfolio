export let products = [
  {
    productId: 'P001',
    productName: 'Braided Solo Loop',
    productDesc: 'สายแบบ Braided Solo Loop 45 มม. ขนาด 7',
    productPrice: 3100,
    img: 'P001.png',
    stock: 10
  },

  {
    productId: 'P002',
    productName: 'เคสหนัง',
    productDesc: 'แบบกระเป๋าสตางค์สำหรับ iPhone',
    productPrice: 2590,
    img: 'P002.png',
    stock: 5
  },

  {
    productId: 'P003',
    productName: 'AirPods (รุ่นที่ 3)',
    productDesc: 'ฟังได้นานสูงสุด 6 ชั่วโมง',
    productPrice: 6790,
    img: 'P003.png',
    stock: 2
  },

  {
    productId: 'P004',
    productName: 'Smart Folio',
    productDesc: 'สำหรับ iPad mini',
    productPrice: 2590,
    img: 'P004.png',
    stock: 20
  },
  {
    productId: 'P005',
    productName: 'พวงกุญแจหนังสำหรับ AirTag',
    productDesc: 'รังสรรค์ขึ้นอย่างใส่ใจจากวัสดุชั้นเยี่ยม',
    productPrice: 1390,
    img: 'P005.png',
    stock: 100
  },
  {
    productId: 'P006',
    productName: 'AirTag',
    productDesc: 'สำหรับติดตามข้าวของของคุณ',
    productPrice: 990,
    img: 'P006.png',
    stock: 200
  },
  {
    productId: 'P007',
    productName: 'AirPods',
    productDesc: 'ฟังได้นานสูงสุด 30 ชั่วโมง',
    productPrice: 8992,
    img: 'P007.png',
    stock: 20
  }
];

function addProduct(
  productId,
  productName,
  productDesc,
  productPrice,
  img,
  stock
) {
  products.push({
    productId,
    productName,
    productDesc,
    productPrice,
    img,
    stock
  });
}
