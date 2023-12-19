import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  createProjectEstablishment,
  createStandardForm,
  getProjectEstablishment,
} from "../Controllers/PlaningController.js";

const fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(fileName);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirName, "../public/uploads/planning"));
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

const multerUploadfiles = upload.fields([
  { name: "reconnaissanceReport" },
  { name: "topographicSurveyReport" },
  { name: "layoutPlans" },
  { name: "trafficSurveyAnalysis" },
  { name: "forestClearanceForms" },
  { name: "technicalRequirementReport" },
  { name: "soilTestingReport" },
  { name: "sociolEconomicProfile" },
  { name: "builtEnvironmentlayout" },
  { name: "initialcostestimationplan" },
]);

router.post("/createProjectEstablisment", createProjectEstablishment);
router.post("/createStandardForm", multerUploadfiles, createStandardForm);
router.get("/getProjectEstablishment", getProjectEstablishment);

export default router;
