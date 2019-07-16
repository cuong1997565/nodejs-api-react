const express = require('express');
const router = express.Router();
const acountController = require('./../controller/acountController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload/');
      },
      filename: function(req, file, cb) {
        cb(null, new Date().toISOString() +"_"+ file.originalname);
      }
});

const fileFilter = (req,file,cb) => {
    //reject a file 
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
  storage: storage,
  limits: {
      fileSize: 1024 * 1024 * 5
  },
  fileFilter : fileFilter
});

router.get('/', acountController.acount_list);
router.post('/sreach/', acountController.acount_sreach);
router.post('/',upload.single('image') , acountController.acount_create);
router.get('/:acountId', acountController.acount_edit);
router.patch('/:acountId',upload.single("image"), acountController.acount_update);
router.delete('/:acountId', acountController.acount_delete);




module.exports = router;
