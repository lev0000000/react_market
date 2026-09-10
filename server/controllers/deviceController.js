const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/model')
const ApiError = require('../error/ApiError')

class DeviceController {

    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body
            const { img } = req.files || ''
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({ name, price, brandId, typeId, img: fileName })

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                })
            }
            console.log(fileName)
            return res.json(device)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let { brandId, typeId, limit, page } = req.query
            let devices;
            limit = limit || 10
            page = page || 1
            let offset = (page * limit) - limit

            if (brandId && typeId) {
                devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset })
            } else if (brandId) {
                devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
            } else if (typeId) {
                devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
            } else {
                devices = await Device.findAndCountAll({ limit, offset })
            }

            return res.json(devices)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }

    }


    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const device = await Device.findOne({ where: {id}, include: [{ model: DeviceInfo}] })
            return res.json(device)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new DeviceController()