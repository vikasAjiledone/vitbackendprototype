import mongoose from "mongoose";

const labTestingSchema = new mongoose.Schema({
  ProjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectEstablishment",
  },
  FieldLaboratory: {
    type: String,
    required: true,
  },
  LabTesting: {
    type: String,
    required: true,
  },
});

const LabTestingModel = mongoose.model("LabTesting", labTestingSchema);

export default LabTestingModel;
