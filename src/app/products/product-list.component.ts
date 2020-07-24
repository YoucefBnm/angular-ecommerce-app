import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {
    this.products.forEach(product => this.categories.push(product.category))
    this.categories = [...new Set(this.categories)];
    console.log(this.categories)
  }
  pageTitle: string = 'Product List';
  categories: any[] = [];
  listFilter: string = '';
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Acer Aspire 5 Slim Laptop",
      "category": "computers & tablets",
      "description": "15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver.",
      "price": 349.99,
      "starRating": 4.5,
      "about": {
        "processor": "AMD Ryzen 3 3200U Dual Core Processor up to 3.5GHz",
        "memory": "4GB DDR4 Memory",
        "storage": "128GB PCIe NVMe SSD",
        "screen": "15.6 inches Full HD 1920 x 1080 Widescreen LED backlit IPS Display",
        "Graphics": "AMD radeon Vega 3 Mobile Graphics",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10 in S mode",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "/assets/acer.jpg"
    },
    {
      "productId": 2,
      "productName": "Acer Nitro 5 Gaming Laptop",
      "category": "computers & tablets",
      "description": "5.6 Full HD IPS Display",
      "price": 680.00,
      "starRating": 4.5,
      "about": {
        "processor": "9th Generation Intel Core i5-9300H Processor (Up to 4. 1GHz)",
        "memory": "8GB DDR4 Memory",
        "storage": "128GB PCIe NVMe SSD",
        "screen": "15.6 inches Full HD 1920 x 1080 Widescreen LED backlit IPS Display",
        "Graphics": "NVIDIA GeForce GTX 1650",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10 in S mode",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-acer-gaming.jpg"
    },
    {
      "productId": 3,
      "productName": "Lenovo Flex 5 14 2-in-1 Laptop",
      "category": "computers & tablets",
      "description": "5.6 Full HD IPS Display",
      "price": 680.00,
      "starRating": 4.5,
      "about": {
        "processor": "9th Generation Intel Core i5-9300H Processor (Up to 4. 1GHz)",
        "memory": "8GB DDR4 Memory",
        "storage": "128GB PCIe NVMe SSD",
        "screen": "4.0 FHD (1920 x 1080) Touch Display",
        "Graphics": "NVIDIA GeForce GTX 1650",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10 in S mode",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-lenovo.jpg"
    },
    {
      "productId": 4,
      "productName": "Acer Predator Helios 300 Gaming Laptop",
      "category": "computers & tablets",
      "description": "5.6 Full HD IPS Display",
      "price": 680.00,
      "starRating": 4.5,
      "about": {
        "processor": "Intel Core i7-9750H",
        "memory": "16GB DDR4",
        "storage": "512GB PCIe NVMe SSD",
        "screen": "15.6 Full HD 144Hz Display",
        "Graphics": "GeForce GTX 1660 Ti",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10 in S mode",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-acer-predator.jpg"
    },
    {
      "productId": 5,
      "productName": "ASUS VivoBook 15 Thin and Light Laptop",
      "category": "computers & tablets",
      "description": "5.6 Full HD IPS Display",
      "price": 398.99,
      "starRating": 4.5,
      "about": {
        "processor": "Intel i3-1005G1 CPU",
        "memory": "8GB RAM, 128GB SSD",
        "storage": "512GB PCIe NVMe SSD",
        "screen": "5.6” FHD Display",
        "Graphics": "GeForce GTX 1660 Ti",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10 in S mode",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-asuc.jpg"
    },
    {
      "productId": 6,
      "productName": "Lenovo Chromebook C330 2-in-1 Convertible Laptop",
      "category": "computers & tablets",
      "description": "5.6 Full HD IPS Display",
      "price": 299.99,
      "starRating": 4.2,
      "about": {
        "processor": "MediaTek MT8173C Processor",
        "memory": "4GB LPDDR3, 64 GB eMMC",
        "storage": "512GB PCIe NVMe SSD",
        "screen": "11.6-Inch HD (1366 x 768) IPS Display",
        "Graphics": "GeForce GTX 1660 Ti",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Chrome OS",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-lenovo-chrome.jpg"
    },
    {
      "productId": 7,
      "productName": "iBUYPOWER Gaming PC Computer Desktop Element 9260",
      "category": "computers & tablets",
      "description": "5.6 Full HD IPS Display",
      "price": 299.99,
      "starRating": 4.2,
      "about": {
        "processor": "Intel Core i7-9700F 3.0Ghz",
        "memory": "16GB DDR4",
        "storage": "240GB SSD, 1TB HDD",
        "screen": "11.6-Inch HD (1366 x 768) IPS Display",
        "Graphics": "NVIDIA GeForce GTX 1660 Ti 6GB",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Chrome OS",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-desktop-pc.jpg"
    },
    {
      "productId": 8,
      "productName": "ASUS VivoBook L203MA Laptop",
      "category": "computers & tablets",
      "description": "5.6 Full HD IPS Display",
      "price": 316.60,
      "starRating": 4,
      "about": {
        "processor": "Intel Celeron Dual Core CPU",
        "memory": "4GB RAM",
        "storage": "64GB Storage",
        "screen": "11.6” HD Display",
        "Graphics": "NVIDIA GeForce GTX 1660 Ti 6GB",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Chrome OS",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-asus-vivo.jpg"
    },
    {
      "productId": 9,
      "productName": "Microsoft Surface Pro 7",
      "category": "computers & tablets",
      "description": "32 GB Wifi Android 9.0 Pie Tablet Black (2019) - SM-T290NZKAXAR",
      "price": 316.60,
      "starRating": 4,
      "about": {
        "processor": "10th Gen Intel Core i5 ",
        "memory": "8GB Memory",
        "storage": "28GB SSD (Latest Model)",
        "screen": "12.3 Touch-Screen",
        "Graphics": "NVIDIA GeForce GTX 1660 Ti 6GB",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-microsoft-surface.jpg"
    },
    {
      "productId": 10,
      "productName": "ASUS VivoBook 15 Thin and Light Laptop",
      "category": "computers & tablets",
      "description": "32 GB Wifi Android 9.0 Pie Tablet Black (2019) - SM-T290NZKAXAR",
      "price": 479.99,
      "starRating": 4,
      "about": {
        "processor": "AMD Radeon Vega 8 Graphics",
        "memory": "8GB DDR4 RAM",
        "storage": "256GB PCIe SSD",
        "screen": "5.6 Full HD",
        "Graphics": "NVIDIA GeForce GTX 1660 Ti 6GB",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-asus-vivo-book.jpg"
    },
    {
      "productId": 11,
      "productName": "Acer Aspire TC-885-UA91 Desktop",
      "category": "computers & tablets",
      "description": "32 GB Wifi Android 9.0 Pie Tablet Black (2019) - SM-T290NZKAXAR",
      "price": 419.99,
      "starRating": 4,
      "about": {
        "processor": "9th Gen Intel Core i3-9100",
        "memory": "8GB DDR4 RAM",
        "storage": "512GB SSD, 8X DVD",
        "screen": "5.6 Full HD",
        "Graphics": "NVIDIA GeForce GTX 1660 Ti 6GB",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-acer-desktop.jpg"
    },
    {
      "productId": 12,
      "productName": "2020 HP 15 15.6 HD Touchscreen Premium Laptop",
      "category": "computers & tablets",
      "description": "32 GB Wifi Android 9.0 Pie Tablet Black (2019) - SM-T290NZKAXAR",
      "price": 698.00,
      "starRating": 4,
      "about": {
        "processor": "10th Gen Intel Core i5-1035G1",
        "memory": "16GB DDR4",
        "storage": "512GB SSD",
        "screen": "5.6 Full HD",
        "Graphics": "NVIDIA GeForce GTX 1660 Ti 6GB",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-hp.jpg"
    },
    {
      "productId": 12,
      "productName": "HP 21.5-Inch All-in-One Computer",
      "category": "computers & tablets",
      "description": "32 GB Wifi Android 9.0 Pie Tablet Black (2019) - SM-T290NZKAXAR",
      "price": 421.58,
      "starRating": 4,
      "about": {
        "processor": "AMD A4-9125",
        "memory": "4GB RAM",
        "storage": "1TB Hard Drive",
        "screen": "5.6 Full HD",
        "Graphics": "NVIDIA GeForce GTX 1660 Ti 6GB",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "WI-FI": "802.11ac WI-FI",
        "Operation system": "Windows 10",
        "Battery": "up to 7.5 Hours Battery Life",
        "power supply": 65
      },
      "imageUrl": "assets/prod-hp-desktop.jpg"
    },
    {
      "productId": 13,
      "productName": "Lenovo Tab M10 Plus, 10.3 FHD Android Tablet",
      "category": "tablets",
      "description": "32 GB Wifi Android 9.0 Pie Tablet Black (2019) - SM-T290NZKAXAR",
      "price": 421.58,
      "starRating": 4,
      "about": {
        "processor": "Octa-Core Processor",
        "memory": "4GB RAM",
        "storage": "64GB Storage",
        "screen": "10.3 FHD",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "Operation system": "Android 9 Pie"
      },
      "imageUrl": "assets/prod-lenovo-tablet.jpg"
    },
    {
      "productId": 14,
      "productName": "Dragon Touch K10 Tablet",
      "category": "tablets",
      "description": "32 GB Wifi Android 9.0 Pie Tablet Black (2019) - SM-T290NZKAXAR",
      "price": 421.58,
      "starRating": 4,
      "about": {
        "processor": "16 GB Quad Core Processor",
        "memory": "4GB RAM",
        "storage": "64GB Storage",
        "screen": "10 inch 1280x800 IPS HD Display",
        "ports": "1 USB 3.1 Gen 1 Port, 2USB 2.0Ports 1HDMI Port whth HDCP support",
        "Operation system": "Android 8.1 Oreo"
      },
      "imageUrl": "assets/prod-dragon-touch.jpg"
    },
    {
      "productId": 15,
      "productName": "SanDisk Ultra 128GB microSDXC",
      "category": "microSD",
      "description": "UHS-I card with Adapter - 100MB/s U1 A1 - SDSQUAR-128G-GN6MA",
      "price": 21.99,
      "starRating": 4,
      "about": {
        "storage": "128GB Storage"
      },
      "imageUrl": "assets/prod-scan-disk.jpg"
    },
    {
      "productId": 16,
      "productName": "Brother Genuine High Yield Toner Cartridge",
      "category": "Toner",
      "description": "TN660, Replacement Black Toner, Page Yield Up To 2,600 Pages, Amazon Dash Replenishment Cartridge",
      "price": 55.48,
      "starRating": 4.5,
      "about": {

      },
      "imageUrl": "assets/prod-toner.jpg"
    },
    {
      "productId": 17,
      "productName": "Logitech M510 Wireless Computer Mouse",
      "category": "computer accessoires",
      "description": "Comfortable Shape with USB Unifying Receiver, with Back/Forward Buttons and Side-to-Side Scrolling, Dark Gray",
      "price": 12.99,
      "starRating": 4.5,
      "about": {

      },
      "imageUrl": "assets/prod-mouse.jpg"
    },
    {
      "productId": 18,
      "productName": "HOVAMP iPhone Charger",
      "category": "computer accessoires",
      "description": "MFi Certified Lightning Cable 5 Pack (3/3/6/6/10FT) Nylon Woven with Metal Connector Compatible iPhone 11/Pro/Xs Max/X/8/7/Plus/6S/6/SE/5S iPad - Silver&White",
      "price": 12.99,
      "starRating": 3.9,
      "about": {

      },
      "imageUrl": "assets/prod-cable.jpg"
    },
    {
      "productId": 19,
      "productName": "USB Type C Cable",
      "category": "computer accessoires",
      "description": "Anker [2-Pack, 6 ft] Premium Nylon USB-A to USB-C Fast Charging Type C Cable, for Galaxy S10 Note 8, LG V20 and Other USB C Charger",
      "price": 17.99,
      "starRating": 4.4,
      "about": {

      },
      "imageUrl": "assets/prod-cable-2.jpg"
    },
    {
      "productId": 20,
      "productName": "Logitech USB Headset H390 with Noise Cancelling Mic",
      "category": "audio & video",
      "description": "Logitech USB Headset H390 with Noise Cancelling Mic",
      "price": 56.98,
      "starRating": 4.4,
      "about": {

      },
      "imageUrl": "assets/prod-headphones.jpg"
    },
    {
      "productId": 21,
      "productName": "Logitech M570 Wireless Trackball Mouse",
      "category": "computer accessoires",
      "description": "Trackball Mouse – Ergonomic Design with Sculpted Right-Hand Shape, Compatible with Apple Mac and Microsoft Windows Computers, USB Unifying Receiver, Dark Gray",
      "price": 39.00,
      "starRating": 4.6,
      "about": {

      },
      "imageUrl": "assets/prod-mouse-2.jpg"
    },
    {
      "productId": 22,
      "productName": "Logitech BRIO Ultra HD Webcam",
      "category": "audio & video",
      "description": "Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming - Black",
      "price": 289.95,
      "starRating": 4,
      "about": {

      },
      "imageUrl": "assets/prod-camera.jpg"
    },
    {
      "productId": 23,
      "productName": "Syntech USB C to USB Adapter (2 Pack)",
      "category": "computer accessoires",
      "description": "Thunderbolt 3 to USB 3.0 Adapter Compatible with MacBook Pro 2019 and Before, MacBook Air 2020, iPad Pro 2020, Dell XPS and More Type C Devices, Space Grey",
      "price": 9.99,
      "starRating": 4.5,
      "about": {

      },
      "imageUrl": "assets/prod-usb.jpg"
    },
    {
      "productId": 24,
      "productName": "Cat 6 Ethernet Cable 50 ft White",
      "category": "computer accessoires",
      "description": "Flat Internet Network Lan patch cords – Solid Cat6 High Speed Computer wire With clips& Snagless Rj45 Connectors for Router, modem – faster than Cat5e/Cat5 - 50 feet",
      "price": 18.99,
      "starRating": 4.5,
      "about": {

      },
      "imageUrl": "assets/prod-ethernet.jpg"
    },
    {
      "productId": 25,
      "productName": "Logitech C270 3MP 1280 x 720pixels USB 2.0 Black Webcam",
      "category": "audio & video",
      "description": "Logitech C270 3MP 1280 x 720pixels USB 2.0 Black Webcam",
      "price": 52.99,
      "starRating": 3.8,
      "about": {

      },
      "imageUrl": "assets/prod-camera-2.jpg"
    },
    {
      "productId": 26,
      "productName": "Webcam with Microphone",
      "category": "audio & video",
      "description": "Webcam with Microphone, 1080P HD Streaming USB Computer Webcam [Plug and Play] [30fps] for PC Video Conferencing/Calling/Gaming, Laptop/Desktop Mac, Skype/YouTube/Zoom/Facetime(Yellow) (Black)",
      "price": 34.99,
      "starRating": 4.8,
      "about": {

      },
      "imageUrl": "assets/prod-camera-3.jpg"
    },
    {
      "productId": 27,
      "productName": "Cyber Acoustics Stereo Headset",
      "category": "audio & video",
      "description": "Cyber Acoustics Stereo Headset, Headphone with Microphone, Great for K12 School Classroom and Education (AC-204), Gold",
      "price": 12.60,
      "starRating": 4.8,
      "about": {

      },
      "imageUrl": "assets/prod-camera-3.jpg"
    },
    {
      "productId": 28,
      "productName": "Logitech Speaker System Z323 with Subwoofer",
      "category": "audio & video",
      "description": "Logitech Speaker System Z323 with Subwoofer",
      "price": 49.99,
      "starRating": 4.8,
      "about": {

      },
      "imageUrl": "assets/prod-speaker.jpg"
    },
    {
      "productId": 29,
      "productName": "Logitech 3.5mm Jack Compact Laptop Speakers, Black (Z130)",
      "category": "audio & video",
      "description": "Logitech Speaker System Z323 with Subwoofer",
      "price": 19.99,
      "starRating": 4.8,
      "about": {

      },
      "imageUrl": "assets/prod-speaker-2.jpg"
    },
    {
      "productId": 30,
      "productName": "Plantronics Voyager Focus UC Bluetooth USB",
      "category": "audio & video",
      "description": "Plantronics Voyager Focus UC Bluetooth USB B825 202652-01 Headset with Active Noise Cancelling",
      "price": 219.00,
      "starRating": 4.8,
      "about": {

      },
      "imageUrl": "assets/prod-headphones-3.jpg"
    }
  ];
}
