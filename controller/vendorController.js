import VendorModel from "../models/VendorModel.js";

export const registerVendor = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const {
      name,
      email,
      mobile,
      brandName,
      aboutProduct,
      logoUrl,
      aadharCardUrl,
      panCardUrl,
      cancelChequeUrl,
      bankAccNumber,
      IFSC,
      accountHolderName,
      bankBranch,
      GSTNumber,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !email 
      // !mobile ||
      // !brandName ||
      // !aadharCardUrl ||
      // !panCardUrl ||
      // !cancelChequeUrl ||
      // !bankAccNumber ||
      // !IFSC ||
      // !accountHolderName ||
      // !bankBranch ||
      // !GSTNumber
    ) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const newPartner = await VendorModel.create({
      name,
      email,
      mobile,
      brandName,
      aboutProduct,
      logoUrl,
      aadharCardUrl,
      panCardUrl,
      cancelChequeUrl,
      bankAccNumber,
      IFSC,
      accountHolderName,
      bankBranch,
      GSTNumber,
    });

    return res.status(201).json({
      message: "Partner registration submitted successfully.",
      data: newPartner,
    });
  } catch (error) {
    console.error("Register Partner Error:", error);
    return res.status(500).json({
      message: "Something went wrong.",
      error: error.message,
    });
  }
};

export const getvendors = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 10);
    const skip = (page - 1) * limit;
    const totalQueries = await VendorModel.countDocuments();
    const queries = await VendorModel.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    return res.status(200).json({
      totalQueries,
      currentPage: page,
      totalPages: Math.ceil(totalQueries / limit),
      queries,
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};
