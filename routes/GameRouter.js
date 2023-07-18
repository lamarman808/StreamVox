const router = require('express').Router()
const controller = require('../controllers/GameController')
const middleware = require('../middleware')

router.get('/', controller.GetGames)
router.post(
  '/new',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreateGame
)
router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateGame
)
router.delete(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteGame
)

module.exports = router
