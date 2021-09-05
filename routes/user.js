var express = require('express');
var router = express.Router();
const { isLoggedIn, noPermission } = require('./middlewares');

const { UserController } = require("../controller/user");
const { addSchedule, getSchedule } = require('../services/user');

/* 프로필 확인, 수정 */
router.route("/info")
  .get(UserController.getProfile)
  .patch(UserController.editProfile)

/* 일정 추가 */
router.post("/schedule", addSchedule);

/* 일정 모두 불러오기 */
router.get("/schedule/all", getSchedule);

/* 일정 확인, 수정, 삭제 */
router.route("/schedule/:scheduleId")
  .get(UserController.addSchedule)
  .patch(UserController.editSchedule)
  .delete(UserController.removeSchedule)

/* 내가 쓴 게시물 모두 불러오기 */
router.get("/myPost", UserController.getAllUserPost);

/* 내가 쓴 댓글 모두 불러오기 */
router.get("/myComment", UserController.getAllUserComment);

module.exports = router;