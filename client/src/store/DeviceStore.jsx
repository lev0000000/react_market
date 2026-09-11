import { get, makeAutoObservable } from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12",
        price: "10000",
        rating: "5",
        img: "https://img.ixbt.site/live/images/original/00/94/02/2022/09/09/4c1972572f.png",
      },
      {
        id: 2,
        name: "Yota",
        price: "45666",
        rating: "5",
        img: "https://img.ixbt.site/live/images/original/00/94/02/2022/09/09/4c1972572f.png",
      },
    ];
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

  get Types() {
    return this._types
  }

  get Brands() {
    return this._brands
  }

  get Devices() {
    return this._devices
  }


}
