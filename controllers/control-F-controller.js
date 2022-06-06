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
  const { name, email, message } = req.body;
  let controF = new ControlFront({
    name,
    email,
    message,
  });
  try {
    await controF.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ controF });
};

export const updateControlFront = async (req, res, next) => {
  const newId = req.params.id;

  ControlFront.findByIdAndUpdate(
    newId,
    req.body,
    { new: true },
    (err, ControlFront) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json({ ControlFront });
    }
  );
};

export const deleteControlFront = async (req, res, next) => {
  const id = req.params.id;
  let contactUs;

  try {
    contactUs = await ControlFront.findByIdAndRemove(id);
  } catch (err) {
    return console.log(err);
  }
  if (!contactUs) {
    return res.status(500).json({ message: "not found" });
  }
  return res.status(200).json({ message: "deleted" });
};
