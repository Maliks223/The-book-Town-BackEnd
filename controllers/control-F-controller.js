import ControlFront from "../model/Control-Front";

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
