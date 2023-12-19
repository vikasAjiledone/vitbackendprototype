import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema({
  ProjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectEstablishment",
  },
  ProjectTitle: {
    type: String,
    required: true,
  },
  ProjectDescription: {
    type: String,
    required: true,
  },
  ContactPerson: {
    type: String,
    required: true,
  },
  InformationforBidding: {
    type: String,
    required: true,
  },
  TenderNotice: {
    type: String,
    required: true,
  },
});

const ProposalModel = mongoose.model("Proposal", proposalSchema);

export default ProposalModel;
