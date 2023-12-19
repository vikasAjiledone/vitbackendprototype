import mongoose from "mongoose";

const TechnicalSpecificationSchema = new mongoose.Schema({
  ProjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectEstablishment"
  },
  BasicGuidelinesforContractor: {
    type: String,
    required: true,
  },
  Noise: {
    type: String,
    required: true,
  },
  EmbarkmentConstruction: {
    type: String,
    required: true,
  },
  SoilErosionandSedimentationControl: {
    type: String,
    required: true,
  },
  Roadsafety: {
    type: String,
    required: true,
  },
  SanitationWasteDisposal: {
    type: String,
    required: true,
  },
  SafetyGuidelines: {
    type: String,
    required: true,
  },
  EnvironmentalScreening: {
    type: String,
    required: true,
  },
  TechnicalIntroduction: {
    type: String,
    required: true,
  },
  TechnicalProvisionsadheredtoMoRTHSpecifications: {
    type: String,
    required: true,
  },
  TechnicalContractDrawings: {
    type: String,
    required: true,
  },
  TechnicalSiteinformation: {
    type: String,
    required: true,
  },
  TechnicalPublicUtilities: {
    type: String,
    required: true,
  },
  TechnicalTrafficPlanduringconstruction: {
    type: String,
    required: true,
  },
  TechnicalItemratesofwork: {
    type: String,
    required: true,
  },
  TechnicalMethodologyandsequenceandwork: {
    type: String,
    required: true,
  },
});

const TechnicalSpecificationModel = mongoose.model(
  "TechnicalSpecification",
  TechnicalSpecificationSchema
);

export default TechnicalSpecificationModel;
