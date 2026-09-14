import { get, makeAutoObservable } from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Телевизоры" },
      { id: 4, name: "Бытовая техника" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Asus" },
      { id: 4, name: "Xiaomi" },
      { id: 5, name: "Dexp" },
      { id: 6, name: "Midea" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Yota",
        price: "45666",
        rating: "5",
        img: "https://placehold.co/300x300/png?text=Yota",
      },
      {
        id: 2,
        name: "Samsung",
        price: "78990",
        rating: "5",
        img: "https://placehold.co/300x300/png?text=Samsung",
      },
      {
        id: 3,
        name: "Apple",
        price: "119990",
        rating: "5",
        img: "https://placehold.co/300x300/png?text=Apple",
      },
      {
        id: 4,
        name: "Xiaomi",
        price: "54990",
        rating: "4",
        img: "https://placehold.co/300x300/png?text=Xiaomi",
      },
      {
        id: 5,
        name: "Honor",
        price: "42990",
        rating: "4",
        img: "https://placehold.co/300x300/png?text=Honor",
      },
      {
        id: 6,
        name: "OnePlus",
        price: "64990",
        rating: "5",
        img: "https://placehold.co/300x300/png?text=OnePlus",
      },
      {
        id: 7,
        name: "Google Pixel",
        price: "69990",
        rating: "5",
        img: "https://placehold.co/300x300/png?text=Google+Pixel",
      },
      {
        id: 8,
        name: "Motorola",
        price: "37990",
        rating: "4",
        img: "https://placehold.co/300x300/png?text=Motorola",
      },
      {
        id: 9,
        name: "Realme",
        price: "32990",
        rating: "4",
        img: "https://placehold.co/300x300/png?text=Realme",
      },
      {
        id: 10,
        name: "Nothing",
        price: "45990",
        rating: "4",
        img: "https://placehold.co/300x300/png?text=Nothing",
      },
    ];
    this._selectedType = {};

    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevice(devices) {
    this._devices = devices;
  }

  setSelectType(type) {
    this._selectedType = type;
  }

  setSelectBrand(brand) {
    this._selectedBrand = brand;
  }

  get Types() {
    return this._types;
  }

  get Brands() {
    return this._brands;
  }

  get Devices() {
    return this._devices;
  }

  get SelectedType() {
    return this._selectedType;
  }

  get SelectedBrand() {
    return this._selectedBrand;
  }
}
