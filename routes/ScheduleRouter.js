const router = require('express').Router()
const controller = require('../controllers/ScheduleController')
const middleware = require('../middleware')

router.get('/schedule', controller.GetStreams)
router.post(
  '/schedule',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateStream
)
router.put(
  '/:stream_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateStream
)
router.delete(
  '/:stream_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteStream
)

module.exports = router
