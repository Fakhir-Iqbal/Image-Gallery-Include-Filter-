
  const imageGallery = document.querySelector(".image-gallery");
  const searchInput = document.getElementById("search");
  const priceFilter = document.getElementById("price-filter");
  const categoryFilter = document.getElementById("category-filter");
  const sortOptions = document.querySelectorAll('input[name="sort"]');

  
  const products = [
      {
          title: "ZTE Blade A52",
          image: "https://images.priceoye.pk/zte-blade-a52-pakistan-priceoye-iekc3.jpg",
          price: 150,
          category: "Mobile",
          description: "Blade A52 equipped with a large 5000mAh battery to ensure you durable using experience"
      },
     
      {
          title: "Lenovo Ideapad ",
          image: "https://static-01.daraz.pk/p/81f30f5e65626ffbc53232e7b7c3c69b.jpg_750x750.jpg_.webp",
          price: 350,
          category: "Laptop",
          description: "Lenovo Ideapad 3 Gaming Laptop AMD Ryzen 5-5600H, 8GB DDR4, 256GB SSD, NVIDIA GTX1650 4GB, 15.6"
      },
      {
          title: "vivo Y22 ",
          image: "https://www.suryaelectronics.in/img/Product/Main/VivoMobilePhonesandAccessoriesMobilePhones230.jpg",
          price: 200,
          category: "Mobile",
          description: "vivo Y22 (Starlit Blue, 128 GB) (6 GB RAM)"
      },
      {
          title: "Samsung Galaxy A24",
          image: "https://static-01.daraz.pk/p/f818fc1f891e961d4707b3e21b7df5ec.jpg",
          price: 250,
          category: "Mobile",
          description: "Samsung Galaxy A24 - RAM 8 GB - ROM 128 GB - Available in 3 colors - Official Brand Stock - PTA APPROVED"
      },
      {
          title: "Hp Core i5-5th Generation",
          image: "https://static-01.daraz.pk/p/182d710e7494070a75774dec55a42eef.jpg_750x750.jpg_.webp",
          price: 400,
          category: "Laptop",
          description: "Hp Core i5-5th Generation | TOUCH SCREEN | 8GB RAM , 128GB SSD Hard Drive | Ultra HD TOUCH DISPLAY 360 degree revolve | 4Hours+ Battery Backup"
      },
      {
          title: "Intel apollo celeron",
          image: "https://sabyne.co.za/wp-content/uploads/2022/06/Connex-Proximity-128-15.6HD-N4020-Intel%C2%AE-Celeron-Laptop-RJ45.jpg",
          price: 150,
          category: "Laptop",
          description: "Source low price mini laptop with Windows 10 Intel apollo celeron 2gb ram 128ssd "
      },
      {
          title: "Core i5 6th Generation",
          image: "https://static-01.daraz.pk/p/704a53763ac17086d9e3a5ffb13c3e9e.jpg",
          price: 350,
          category: "Laptop",
          description: "Hp Elitebook 820 G3 - Core i5 6th Generation - 8GB DDR4 RAM - 128GB SSD - 500GB HDD -12.5inch Screen - FREE LAPTOP BAG (Windows 11 Registered)"
      },
      {
          title: "Apple iPhone 14",
          image: "https://images.priceoye.pk/apple-iphone-14-pakistan-priceoye-3j7db.jpg",
          price: 150,
          category: "Mobile",
          description: "	2022-09-07,	Li-Ion 3279 mAh, non-removable (12.68 Wh),	Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)"
      },
      {
          title: "Core I-9",
          image: "https://5.imimg.com/data5/SELLER/Default/2022/8/JZ/DV/WI/74097097/ultimate-gaming-computer-pc-custom-hardline-liqu-id-cooled-gaming-pc-i9-11900k-rtx-3080-64gb-ram-rgb-500x500.jpg",
          price: 500,
          category: "PC",
          description: "Ultimate Gaming Computer PC - Custom Liquid Cooled Gaming PC - I9 11900k - RTX 3080 - 64GB RAM RGB"
      },
      {
          title: "Core i7-2400",
          image: "https://static-01.daraz.pk/p/38336fb3b95c6eb1c47251455258eaf4.jpg",
          price: 450,
          category: "PC",
          description: "790 Gaming PC Core i5-2400 3.2GHz -16GB DDR3 RAM - 1TB HD- LED Monitor 19 Windows 10 64-bit - GTA 5 & PUBG - FREEFIRE - Minecraft - STEAM ACCOUNT Games Installed"
      },
      {
          title: "Core i5 3rd Generation",
          image: "https://static-01.daraz.pk/p/bdfaa7b3f1b095f4db5b13360b1ad4c8.jpg_750x750.jpg_.webp",
          price: 400,
          category: "PC",
          description: "Optiplex 9010 - 23Inches All In One System - Core i5 3rd Generation - 8GB DDR3 RAM - 250GB HDD - WEBCAM - Silver (Renewed)"
      },
      {
          title: "Intel Core i5-4570",
          image: "https://static-01.daraz.pk/p/07c6d5b79fd6327d60bce96acaad98a8.jpg",
          price: 350,
          category: "PC",
          description: "Del Optplex 3020 SFF Desktop PC - Intel Core i5-4570 4th Generation 3.4GHz 8GB 1TB DVDRW Windows 10 Pro Free Wifi"
      },
      {
          title: "Me Mobile L786 Blue",
          image: "https://www.pakmobizone.pk/wp-content/uploads/2022/03/Me-Mobile-L786-Blue-1.jpg",
          price: 100,
          category: "Mobile",
          description: "Bluetooth Mobiles, Camera Mobiles, Dual Sim Phones, FM Radio Mobiles, Memory Card, MP3 Playback, Video Recording, Wireless LAN"
      },
      {
          title: "iPhone Xs ",
          image: "https://mobilegoo.shop/cdn/shop/products/229_1.webp?v=1669058165&width=600",
          price: 200,
          category: "Mobile",
          description: "Apple iPhone Xs - Refurbished"
      },
      {
          title: "Mackbook 2016",
          image: "https://sm.pcmag.com/pcmag_me/photo/default/macbook-6_hgfm.jpg",
          price: 450,
          category: "Laptop",
          description: "The insanely sleek 12-inch MacBook is still the lightest Apple laptop, and a worthy investment if you are looking for a lightweight and capable Apple machine to haul around while on the road."
      },
      {
          title: "MacBook Air 13",
          image: "https://static-01.daraz.pk/p/d319983dd0fbb98c48ea4b81c4c5a7c9.jpg",
          price: 500,
          category: "Laptop",
          description: "MacBook Air 13’’ screen size Touch ID A 1932 ,2020,2019,2018 and M1 Air 13'' Release model) Hard shell case or cover in Matt perfect finishing"
      },
      {
          title: "Xeon Processor",
          image: "https://m.media-amazon.com/images/I/71eZf3AH-6L._AC_UF894,1000_QL80_.jpg",
          price: 550,
          category: "PC",
          description: "HP RGB Lights Gaming Desktop Combo I7 up to 3.8GHz,16G,128G SSD+3T,GeForce GT 730 2G GDDR5,New 24"
      },
      {
          title: "i5 6th GENERATiON TOWER PC ",
          image: "https://i0.wp.com/basitcomputers.com/wp-content/uploads/2022/09/i5-6th-generation-tower-pc-with-amd-rx-590-8gb-sapphire-nitro-plus-custom-build-pc.webp?fit=499%2C500&ssl=1",
          price: 350,
          category: "PC",
          description: "i5 6th GENERATiON TOWER PC WITH AMD RX 590 8GB RGB GAMING CASE (CUSTOM BUiLD PC)"
      },
      // Add more products here
  ];

  function populateGallery() {
  const searchText = searchInput.value.toLowerCase();

  imageGallery.innerHTML = "";

  const filteredProducts = products
      .filter(product => product.price >= parseFloat(priceFilter.value))
      .filter(product => categoryFilter.value === "all" || product.category.toLowerCase() === categoryFilter.value.toLowerCase())
      .filter(product => product.title.toLowerCase().includes(searchText)) // Add this line for search
      .sort((a, b) => {
          if (sortOptions[0].checked) {
              return b.price - a.price; // High to Low
          } else {
              return a.price - b.price; // Low to High
          }
      });

  filteredProducts.forEach(product => {
      const item = document.createElement("div");
      item.classList.add("gallery-item");
      item.innerHTML = `
          <h2>${product.title}</h2>
          <img src="${product.image}" alt="${product.title}">
          <p>Price: $${product.price}</p>
          <p>Category: ${product.category}</p>
          <p>Description: ${product.description}</p>
      `;
      imageGallery.appendChild(item);
  });
}

searchInput.addEventListener("input", populateGallery);
priceFilter.addEventListener("change", populateGallery);
categoryFilter.addEventListener("change", populateGallery);
sortOptions.forEach(option => option.addEventListener("change", populateGallery));


populateGallery();