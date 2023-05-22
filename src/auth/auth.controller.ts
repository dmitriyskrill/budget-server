import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../user/user.model'

export const login = async (req: Request, res: Response) => {
  try {

    console.log(process.env)
    // const candidate = await User.findOne({ login: req.body.login }).populate('workPositions').populate('rules')
    //
    // if (candidate) {
    //   const isPasswordCorrect = bcrypt.compareSync(
    //     req.body.password,
    //     candidate.password
    //   )
    //   if (isPasswordCorrect) {
    //     const token = jwt.sign(
    //       {
    //         login: candidate.login,
    //         _id: candidate._id
    //       },
    //       process.env.JWT,
    //       { expiresIn: 365 * 24 * 60 * 60 }
    //     )
    //     let user = {}
    //     Object.entries(candidate._doc).filter(e => {
    //       if (e[0] !== 'password') {
    //         user[e[0]] = e[1]
    //       }
    //     })
    //     res.json({ token, user })
    //   } else {
    //     res.status(401).json({ message: 'Не верный пароль' })
    //   }
    // } else {
    //   res.status(404).json({ message: 'Пользователь не найден' })
    // }
  } catch (e) {
    res.status(500).json({ message: e })
  }
}


