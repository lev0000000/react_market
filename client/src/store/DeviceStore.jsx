import { get, makeAutoObservable } from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
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
