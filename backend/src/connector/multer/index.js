import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${process.cwd()}/upload/`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const MulterUpload = multer({ storage: storage });

export default MulterUpload;
