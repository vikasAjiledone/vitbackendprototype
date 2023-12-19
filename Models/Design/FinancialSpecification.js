import mongoose from "mongoose";

const FinancialSpecificationSchema = new mongoose.Schema({
  ProjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectEstablishment",
  },
  CashFlow: {
    type: String,
    required: true,
  },
  TotalProjectCost: {
    type: String,
    required: true,
  },
  Estimationofquantities: {
    type: String,
    required: true,
  },
  Unitratesofcivilworks: {
    type: String,
    required: true,
  },
  Criticalfactors: {
    type: String,
    required: true,
  },
});

const FinancialSpecificationModel = mongoose.model("FinancialSpecification", FinancialSpecificationSchema);

export default FinancialSpecificationModel;
