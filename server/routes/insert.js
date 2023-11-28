const router = require("express").Router();
const ctrls = require("../controllers/insertData");

router.post("/", ctrls.insertProduct);
router.post("/cate", ctrls.insertCategory);
router.post("/brand", ctrls.insertBrands);

module.exports = router;
