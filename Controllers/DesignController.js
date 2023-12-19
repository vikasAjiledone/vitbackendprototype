import FinancialSpecification from "../Models/Design/FinancialSpecification.js";
import LabTesting from "../Models/Design/LabTesting.js";
import Proposal from "../Models/Design/Proposal.js";
import TechnicalSpecification from "../Models/Design/TechnicalSpecification.js";
import ProjectEstablisment from "../Models/Planning/ProjectEstablisment.js";

export const createFinancialSpeacification = async (req, res) => {
  try {
    const {
      projectId,
      cashFlow,
      totalProjectCost,
      estimationOfQualities,
      unitRateOfCivilWorks,
      criticalFactors,
    } = req.body;

    if (
      !projectId ||
      !cashFlow ||
      !totalProjectCost ||
      !estimationOfQualities ||
      !unitRateOfCivilWorks ||
      !criticalFactors
    ) {
      return res.status(422).json({
        status: false,
        message: "Please provide all the required field",
      });
    }

    const newFinancialSpeacification = new FinancialSpecification({
      ProjectId: projectId,
      CashFlow: cashFlow,
      TotalProjectCost: totalProjectCost,
      Estimationofquantities: estimationOfQualities,
      Unitratesofcivilworks: unitRateOfCivilWorks,
      Criticalfactors: criticalFactors,
    });

    const savedResponse = await newFinancialSpeacification.save();

    const updateProjectEstablishment = await ProjectEstablisment.updateOne(
      { _id: projectId },
      { $set: { FinancialSpecification: savedResponse._id } }
    );

    if (updateProjectEstablishment.acknowledged) {
      console.log("updated Financial Specification in project establishment");
    }

    if (savedResponse) {
      return res.status(201).json({
        status: true,
        message: "Financial Specification has been successfully created",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLabTesting = async (req, res) => {
  try {
    const { projectId, fieldLaboratory, labTesting } = req.body;

    if (!projectId || !fieldLaboratory || !labTesting) {
      return res.status(422).json({
        status: false,
        message: "Please provide all the required field",
      });
    }

    const newLabTesting = new LabTesting({
      ProjectId: projectId,
      FieldLaboratory: fieldLaboratory,
      LabTesting: labTesting,
    });

    const savedResponse = await newLabTesting.save();

    const updateProjectEstablishment = await ProjectEstablisment.updateOne(
      { _id: projectId },
      { $set: { LabTesting: savedResponse._id } }
    );

    if (updateProjectEstablishment.acknowledged) {
      console.log("updated Lab testing in project establishment");
    }

    if (savedResponse) {
      return res.status(201).json({
        status: true,
        message: "Lab testing has been successfully created",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createProposal = async (req, res) => {
  try {
    const {
      projectId,
      projectTitle,
      projectDescription,
      contactPerson,
      infomationForbiding,
    } = req.body;

    const tendorNotice = req.file;

    if (
      !projectId ||
      !projectTitle ||
      !projectDescription ||
      !contactPerson ||
      !infomationForbiding
    ) {
      return res.status(422).json({
        status: false,
        message: "Please provide all the required properly",
      });
    }

    if (!tendorNotice) {
      return res
        .status(422)
        .json({ status: false, message: "Please provide file" });
    }

    const tendorNoticePath = tendorNotice.path;

    const newProposal = new Proposal({
      ProjectId: projectId,
      ProjectTitle: projectTitle,
      ProjectDescription: projectDescription,
      ContactPerson: contactPerson,
      InformationforBidding: infomationForbiding,
      TenderNotice: tendorNoticePath,
    });

    const savedResponse = await newProposal.save();

    const updateProjectEstablishment = await ProjectEstablisment.updateOne(
      { _id: projectId },
      { $set: { Proposal: savedResponse._id } }
    );

    if (updateProjectEstablishment.acknowledged) {
      console.log("updated Proposal in project establishment");
    }

    if (savedResponse) {
      return res.status(201).json({
        status: false,
        message: "Proposal has been successfully created",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createTechnicalSpecification = async (req, res) => {
  try {
    const {
      projectId,
      basicGuidelineForContractor,
      noise,
      embarkmentConstruction,
      soilErosionAndSedimentationControl,
      roadSafety,
      sanitationAndWasteDisposal,
      safetyGuideline,
      environmentScreening,
      technicalIntroduction,
      technicalProvisionsadheredtoMoRTHSpecifications,
      technicalContractDrawings,
      technicalSiteinformation,
      technicalPublicUtilities,
      technicalTrafficPlanduringconstruction,
      technicalItemratesofwork,
      technicalMethodologyandsequenceandwork,
    } = req.body;

    if (
      !projectId ||
      !basicGuidelineForContractor ||
      !noise ||
      !embarkmentConstruction ||
      !soilErosionAndSedimentationControl ||
      !roadSafety ||
      !sanitationAndWasteDisposal ||
      !safetyGuideline ||
      !environmentScreening ||
      !technicalIntroduction ||
      !technicalProvisionsadheredtoMoRTHSpecifications ||
      !technicalContractDrawings ||
      !technicalSiteinformation ||
      !technicalPublicUtilities ||
      !technicalTrafficPlanduringconstruction ||
      !technicalItemratesofwork ||
      !technicalMethodologyandsequenceandwork
    ) {
      return res.status(422).json({
        status: false,
        message: "Please provide all the required field",
      });
    }

    const newTechnicalSpecification = new TechnicalSpecification({
      ProjectId: projectId,
      BasicGuidelinesforContractor: basicGuidelineForContractor,
      Noise: noise,
      EmbarkmentConstruction: embarkmentConstruction,
      SoilErosionandSedimentationControl: soilErosionAndSedimentationControl,
      Roadsafety: roadSafety,
      SanitationWasteDisposal: sanitationAndWasteDisposal,
      SafetyGuidelines: safetyGuideline,
      EnvironmentalScreening: environmentScreening,
      TechnicalIntroduction: technicalIntroduction,
      TechnicalProvisionsadheredtoMoRTHSpecifications:
        technicalProvisionsadheredtoMoRTHSpecifications,
      TechnicalContractDrawings: technicalContractDrawings,
      TechnicalSiteinformation: technicalSiteinformation,
      TechnicalPublicUtilities: technicalPublicUtilities,
      TechnicalTrafficPlanduringconstruction:
        technicalTrafficPlanduringconstruction,
      TechnicalItemratesofwork: technicalItemratesofwork,
      TechnicalMethodologyandsequenceandwork:
        technicalMethodologyandsequenceandwork,
    });

    const savedResponse = await newTechnicalSpecification.save();

    const updateProjectEstablishment = await ProjectEstablisment.updateOne(
      { _id: projectId },
      { $set: { TechnicalSpecification: savedResponse._id } }
    );

    if (updateProjectEstablishment.acknowledged) {
      console.log(
        "updated Technication Speacification in project establishment"
      );
    }

    if (savedResponse) {
      return res.status(201).json({
        status: true,
        message: "Technical Specification has been created",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};
