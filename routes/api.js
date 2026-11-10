const express = require("express");
const router = express.Router();
const komikController = require("../controller/komikController");

router.get('/komik', komikController.getALIkomik);
router.get('/komik/:id', komikController.getkomikById);
router.post('/komik', komikController.createkomik);
router.put('/komik/:id', komikController.updatekomik);
router.delete('/komik/:id', komikController.deletekomik);

module.exports = router;