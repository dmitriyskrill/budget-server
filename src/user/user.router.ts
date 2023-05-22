// import { Router } from 'express'
// import passport from 'passport'
// import {
//   get,
//   create,
//   patch,
//   getById,
// } from './user.controller'
// const router = Router()
//
// router.post(
//   '',
//   // passport.authenticate('jwt', { session: false }),
//   create
// )
//
// router.get(
//   '',
//   passport.authenticate('jwt', { session: false }),
//   get
// )
//
// router.get(
//   '/machinistsWithPlansPerDate',
//   passport.authenticate('jwt', { session: false }),
//   getMachinistsWithPlansPerDate
// )
//
// router.get(
//   '/responsibles',
//   passport.authenticate('jwt', { session: false }),
//   getResponsibles
// )
//
// // router.get(
// //   '/filteredAtComputedField',
// //   passport.authenticate('jwt', { session: false }),
// //   getUsersFilteredAtComputedField
// // )
//
// router.get(
//   '/whoWorked',
//   passport.authenticate('jwt', { session: false }),
//   getUsersWhoWorked
// )
//
// router.get(
//   '/containsAllOfTheFollowingRules',
//   passport.authenticate('jwt', { session: false }),
//   getUsersContainsAllOfTheFollowingRules
// )
//
// router.get(
//   '/containsAtLeastOneOfTheFollowingRules',
//   passport.authenticate('jwt', { session: false }),
//   getUsersContainsAtLeastOneOfTheFollowingRules
// )
//
// router.get(
//   '/:id',
//   passport.authenticate('jwt', { session: false }),
//   getById
// )
//
// router.patch(
//   '',
//   passport.authenticate('jwt', { session: false }),
//   patch
// )
// module.exports = router
