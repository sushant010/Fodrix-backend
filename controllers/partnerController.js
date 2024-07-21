const Partner = require('../model/partnerSchema');

exports.addPartner = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      category,
      category2,
      businessName,
      whyFodrix,
      howFodrix,
    } = req.body;

    const partner = new Partner({
      name,
      email,
      mobile,
      category,
      category2,
      businessName,
      whyFodrix,
      howFodrix,
    });

    await partner.save();

    res.json({ success: true, message: 'Partner added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
};

exports.getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json({ success: true, partners });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
};
