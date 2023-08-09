// import express from "express"
// const router = express.Router();
import { Router } from "express";
const router = Router();

/**
 * bbs API Rouder 설정
 * 보통 API 서버는 view 가 없이 JSON(또는 XML) 데이터를 client 로
 * return 하는 서버를 말한다. (Spring Rest Server)
 *
 * res.send() 또는 res.json() 함수로 마감한다
 *
 */
const Hello = {
  title: "어서와요. 여긴 Node에요. NodeJS BBS 2023",
  message: "Hello NodeJS BBS World",
};
router.get("/", async (req, res, next) => {
  res.json(Hello);
});

router.post("/insert", (req, res) => {
  const body = req.body;
  console.log("body: ", body);
  res.send("OK");
});

export default router;
