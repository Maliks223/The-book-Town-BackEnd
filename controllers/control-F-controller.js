import ControlFront from "../model/Control-Front";

export const getControlFront = async (req, res, next) => {
  let contactUs;
  try {
    contactUs = await ControlFront.find();
  } catch (err) {
    return console.log(err);
  }
  if (!contactUs) {
    res.status(401).json({ message: "No Content yet" });
  }
  return res.status(200).json({ contactUs });
};

export const addContorlFront = async (req, res, next) => {
  const { aboutUs, banner } = req.body;
  let controF = new ControlFront({
    aboutUs,
    banner,
  });
  try {
    await controF.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ controF });
};
