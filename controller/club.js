const ClubService = require("../services/club");

// 동아리 정보 확인
module.exports.getClubInfo = (res, req, next) => {
  try {
		const club = ClubService.getClubInfo(req);
		res.json(club);
	} catch (err) {
		next(err);
	}
};

// 동아리 정보 수정
module.exports.editClubInfo = (res, req, next) => {
  try {
		const club = ClubService.editClubInfo(req);
		res.json(club);
	} catch (err) {
		next(err);
	}
};

// 멤버 추가
module.exports.addMember = (res, req, next) => {
  try {
		const club = ClubService.addMember(clubName, req);
		res.json(club);
	} catch (err) {
		next(err);
	}
};

// 멤버 삭제
module.exports.removeMember = (res, req, next) => {
  try {
		const club = ClubService.removeMember(clubName, req.user.id);
		res.json(club);
	} catch (err) {
		next(err);
	}
};

// 모든 멤버 확인
module.exports.getAllMember = (res, req, next) => {
  try {
		const club = ClubService.getAllMember(clubName);
		res.json(club);
	} catch (err) {
		next(err);
	}
};