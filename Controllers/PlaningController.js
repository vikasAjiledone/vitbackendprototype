import ProjectEstablisment from "../Models/Planning/ProjectEstablisment.js";
import StandardForm from "../Models/Planning/StandardForm.js";

export const createProjectEstablishment = async (req, res) => {
  try {
    const {
      projectTitle,
      entryDate,
      name,
      organization,
      address,
      contactNo,
      email,
      fax,
      initialBudget,
      sponsername,
      sponserorganization,
      sponseraddress,
      sponsercontactNo,
      sponseremail,
      sponserfax,
      projectOverview,
      projectGoal,
      projectScope,
      permissionRequired,
      miscellaneousInfo,
    } = req.body;

    if (
      !projectTitle ||
      !entryDate ||
      !name ||
      !organization ||
      !address ||
      !contactNo ||
      !email ||
      !fax ||
      !initialBudget ||
      !sponsername ||
      !sponserorganization ||
      !sponseraddress ||
      !sponsercontactNo ||
      !sponseremail ||
      !sponserfax ||
      !projectOverview ||
      !projectGoal ||
      !projectScope ||
      !permissionRequired ||
      !miscellaneousInfo
    ) {
      return res.status(422).json({
        status: false,
        message: "Please provide all the required field.",
      });
    }

    const entryDateObject = new Date(entryDate);

    if (isNaN(entryDateObject)) {
      res
        .status(422)
        .json({ status: false, message: "Date format is invalid" });
    }

    const newProjectEstablisment = new ProjectEstablisment({
      ProjectTitle: projectTitle,
      EntryDate: entryDate,
      Name: name,
      Organization: organization,
      Address: address,
      ContactNo: contactNo,
      Email: email,
      Fax: fax,
      InitialBudget: initialBudget,
      SponserName: sponsername,
      SponserOrganization: sponserorganization,
      SponserAddress: sponseraddress,
      SponserContactNo: sponsercontactNo,
      SponserEmail: sponseremail,
      SponserFax: sponserfax,
      ProjectOverview: projectOverview,
      ProjectGoal: projectGoal,
      ProjectScope: projectScope,
      PermissionRequired: permissionRequired,
      MiscellaneousInfo: miscellaneousInfo,
    });

    const savedResponse = await newProjectEstablisment.save();

    if (savedResponse) {
      return res.status(201).json({
        status: true,
        message: "Project establishment has been created",
        response: savedResponse,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createStandardForm = async (req, res) => {
  try {
    const { projectId } = req.body;

    const {
      reconnaissanceReport,
      topographicSurveyReport,
      layoutPlans,
      trafficSurveyAnalysis,
      forestClearanceForms,
      technicalRequirementReport,
      soilTestingReport,
      sociolEconomicProfile,
      builtEnvironmentlayout,
      initialcostestimationplan,
    } = req.files;

    if (
      !projectId ||
      !reconnaissanceReport ||
      !topographicSurveyReport ||
      !layoutPlans ||
      !trafficSurveyAnalysis ||
      !forestClearanceForms ||
      !technicalRequirementReport ||
      !soilTestingReport ||
      !sociolEconomicProfile ||
      !builtEnvironmentlayout ||
      !initialcostestimationplan
    ) {
      return res
        .status(422)
        .json({ status: false, message: "Please provide all the files" });
    }

    const reconnaissanceReportPath = reconnaissanceReport[0].path;
    const topographicSurveyReportPath = topographicSurveyReport[0].path;
    const layoutPlansPath = layoutPlans[0].path;
    const trafficSurveyAnalysisPath = trafficSurveyAnalysis[0].path;
    const forestClearanceFormsPath = forestClearanceForms[0].path;
    const technicalRequirementReportPath = technicalRequirementReport[0].path;
    const soilTestingReportPath = soilTestingReport[0].path;
    const sociolEconomicProfilePath = sociolEconomicProfile[0].path;
    const builtEnvironmentlayoutPath = builtEnvironmentlayout[0].path;
    const initialcostestimationplanPath = initialcostestimationplan[0].path;

    const newStandardForm = new StandardForm({
      ProjectId: projectId,
      ReconnaissanceReport: reconnaissanceReportPath,
      TopographicSurveyReport: topographicSurveyReportPath,
      LayoutPlans: layoutPlansPath,
      TrafficSurveyAnalysis: trafficSurveyAnalysisPath,
      ForestclearanceForms: forestClearanceFormsPath,
      TechnicalRequirementReport: technicalRequirementReportPath,
      SoilTestingReport: soilTestingReportPath,
      SocioEconomicProfile: sociolEconomicProfilePath,
      BuiltEnvironmentlayout: builtEnvironmentlayoutPath,
      Initialcostestimationplan: initialcostestimationplanPath,
    });

    const savedResponse = await newStandardForm.save();

    const updateProjectEstablishment = await ProjectEstablisment.updateOne(
      { _id: projectId },
      { $set: { StandardForm: savedResponse._id } }
    );

    if (updateProjectEstablishment.acknowledged) {
      console.log("updated standard form in project establishment");
    }

    if (savedResponse) {
      return res.status(201).json({
        status: true,
        message: "Standard Form has been created successfully",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getSingleProjectEstablishment = async (req, res) => {
  try {
    const { projectId } = req.query;

    if (!projectId) {
      return res
        .status(422)
        .json({ status: false, message: "Please provide projectId for query" });
    }

    const getProjectEstablishment = await ProjectEstablisment.findOne({
      _id: projectId,
    }).populate([
      "StandardForm",
      "FinancialSpecification",
      "LabTesting",
      "Proposal",
      "TechnicalSpecification",
    ]);

    if (!getProjectEstablishment) {
      return res.status(404).json({
        status: false,
        message: "No Project has been established yet.",
      });
    }

    return res.status(202).json({
      status: true,
      message: "successfully Single fetched Project establishment",
      projectEstablishmentData: getProjectEstablishment,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getProjectEstablishment = async (req, res) => {
  try {
    const getProjectEstablishment = await ProjectEstablisment.find().populate([
      "StandardForm",
      "FinancialSpecification",
      "LabTesting",
      "Proposal",
      "TechnicalSpecification",
    ]);

    if (!getProjectEstablishment) {
      return res.status(404).json({
        status: false,
        message: "No Project has been established yet.",
      });
    }

    return res.status(202).json({
      status: true,
      message: "successfully fetched Project establishment",
      projectEstablishmentData: getProjectEstablishment,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};
