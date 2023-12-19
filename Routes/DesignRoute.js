import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  createFinancialSpeacification,
  createLabTesting,
  createProposal,
  createTechnicalSpecification,
} from "../Controllers/DesignController.js";

const fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(fileName);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirName, "../public/uploads/design"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /pdf|jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Pdf, jpeg, jpg, png only accepted"); // custom this message to fit your needs
  }
}

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/createFinancialSpecification", createFinancialSpeacification);
router.post("/createLabSpecification", createLabTesting);
router.post("/createProposal", upload.single("tendorNotice"), createProposal);
router.post("/createTechnicalSpecification", createTechnicalSpecification);

export default router;
