// import { Request, Response } from 'express'
//
//
//
// export class UserController<T> implements IUserController<T> {
//
//
//   create() {
//   }
//
//   getById() {
//
//   }
//
//   get() {
//   }
//
//   getMany() {
//   }
//
//   patch() {
//   }
//
//   remove() {
//   }
// }
//
// export const create = async (req: Request, res: Response) => {
//   try {
//     res.status(200).json(await userDB.create(req.body))
//   } catch (e) {
//     res.status(500).json(e)
//   }
// }
//
//
// export const get = async (req, res) => {
//   try {
//     res.status(200).json(await userDB.get(req.query))
//   } catch (e) {
//     res.status(500).json(e)
//   }
// }
//
// export const patch = async (req, res) => {
//   try {
//     res.status(200).json(await userDB.patch(req.body))
//   } catch (e) {
//     res.status(500).json(e)
//   }
// }
//
// export const remove = async (req, res) => {
//   try {
//     await User.deleteOne({ _id: req.params.id })
//     res.json({ message: 'Сотрудник удален' })
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }
//
// export const getById = async (req, res) => {
//   try {
//     res.json({
//       ...(await User.findById(req.params.id).populate('rules')
//         .populate('workPositions'))._doc, password: null
//     })
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }
