// const multer = require('multer');
// const path = require('path');

// // Set storage engine
// const storage = multer.diskStorage({
//   destination: '../uploads/', // Ensure this directory exists or handle its creation
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     const extension = path.extname(file.originalname).toLowerCase();
//     cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
//   }
// });

// // Check file type
// function checkFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb(new Error('Error: Images Only!'));
//   }
// }

// // Init upload
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 }, // Set file size limit to 1MB
//   fileFilter: (req, file, cb) => {
//     checkFileType(file, cb);
//   }
// }).single('userprofile');

// module.exports = upload;
