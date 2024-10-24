import { currency } from "@/lib/currency";

export const widgets = [
  {
    id: 1,
    title: "All Spending",
    amount: currency(575, 0),
    icon: "WalletCards",
    color: "primary",
  },
  {
    id: 2,
    title: "Earnings",
    amount: currency(521, 0),
    icon: "PieChart",
    color: "info",
  },
  {
    id: 3,
    title: "Weekly Revenue",
    amount: currency(684, 0),
    icon: "WalletMinimal",
    color: "error",
  },
  {
    id: 4,
    title: "New Clients",
    amount: "+321",
    icon: "UserRoundPlus",
    color: "warning",
  },
];

export const recentOrders = [
  {
    id: 1,
    img: "/images/products/product-01.jpg",
    trackingNo: "#JY7685",
    productName: "Nike Air max 170 ",
    price: 654,
    totalOrder: 325,
    totalAmount: 145660,
  },
  {
    id: 2,
    img: "/images/products/product-02.jpg",
    trackingNo: "#JY7685",
    productName: "Cactus Plant",
    price: 654,
    totalOrder: 325,
    totalAmount: 115660,
  },
  {
    id: 3,
    img: "/images/products/product-03.jpg",
    trackingNo: "#JY7685",
    productName: "Minimal Pot",
    price: 654,
    totalOrder: 57,
    totalAmount: 175660,
  },
  {
    id: 4,
    img: "/images/products/product-04.jpg",
    trackingNo: "#JY7685",
    productName: "Adidas Blaze",
    price: 654,
    totalOrder: 125,
    totalAmount: 105660,
  },
];

export const topSellingProducts = [
  {
    id: 1,
    productName: "Nike airmax 170",
    img: "/images/products/product-07.jpg",
    rating: 5,
    price: 567,
  },
  {
    id: 2,
    productName: "Nike airmax 170",
    img: "/images/products/product-08.jpg",
    rating: 5,
    price: 567,
  },
  {
    id: 3,
    productName: "Nike airmax 170",
    img: "/images/products/product-09.jpg",
    rating: 5,
    price: 567,
  },
];
