import mongoose from "mongoose";

const projectEstablishmentSchema = new mongoose.Schema({
  ProjectTitle: {
    type: String,
    required: true,
  },
  EntryDate: {
    type: Date,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Organization: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  ContactNo: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Fax: {
    type: String,
    required: true,
  },
  InitialBudget: {
    type: String,
    required: true,
  },
  SponserName: {
    type: String,
    required: true,
  },
  SponserOrganization: {
    type: String,
    required: true,
  },
  SponserAddress: {
    type: String,
    required: true,
  },
  SponserContactNo: {
    type: Number,
    required: true,
  },
  SponserEmail: {
    type: String,
    required: true,
  },
  SponserFax: {
    type: String,
    required: true,
  },
  ProjectOverview: {
    type: String,
    required: true,
  },
  ProjectGoal: {
    type: String,
    required: true,
  },
  ProjectScope: {
    type: String,
    required: true,
  },
  PermissionRequired: {
    type: String,
    required: true,
  },
  MiscellaneousInfo: {
    type: String,
    required: true,
  },
  StandardForm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StandardForm",
  },
  FinancialSpecification: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FinancialSpecification",
  },
  LabTesting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LabTesting",
  },
  Proposal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proposal",
  },
  TechnicalSpecification: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TechnicalSpecification",
  },
});

const ProjectEstablishmentModel = mongoose.model(
  "ProjectEstablishment",
  projectEstablishmentSchema
);

export default ProjectEstablishmentModel;
