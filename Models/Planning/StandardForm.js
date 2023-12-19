import mongoose from "mongoose";

const standardFormSchema = new mongoose.Schema({
  ProjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectEstablishment",
  },
  ReconnaissanceReport: {
    type: String,
    required: true,
  },
  TopographicSurveyReport: {
    type: String,
    required: true,
  },
  LayoutPlans: {
    type: String,
    required: true,
  },
  TrafficSurveyAnalysis: {
    type: String,
    required: true,
  },
  ForestclearanceForms: {
    type: String,
    required: true,
  },
  TechnicalRequirementReport: {
    type: String,
    required: true,
  },
  SoilTestingReport: {
    type: String,
    required: true,
  },
  SocioEconomicProfile: {
    type: String,
    required: true,
  },
  BuiltEnvironmentlayout: {
    type: String,
    required: true,
  },
  Initialcostestimationplan: {
    type: String,
    required: true,
  },
});

const StandardFormModel = mongoose.model("StandardForm", standardFormSchema);

export default StandardFormModel;
