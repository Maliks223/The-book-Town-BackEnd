import Banner from "../model/Banner";

export const getBanner = async (req, res, next) => {
  let banner;
  try {
    banner = await Banner.find();
  } catch (err) {
    return console.log(err);
  }
  if (!banner) return res.status(404).json({ message: "no banner found" });
  return res.status(200).json({ banner });
};

export const addBanner = async (req, res, next) => {
  const { text } = req.body;
  let banner = new Banner({
    text,
  });
  try {
    await banner.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ banner });
};

export const editBanner = async (req, res, next) => {
  let { text } = req.body;
  await Banner.findByIdAndUpdate({ _id: req.params.id }, { text });
  return res.status(200).json(await Banner.findById(req.params.id));
};

export const deleteBanner = async (req, res, next) => {
  const id = req.params.id;
  let banner;
  try {
    banner = await Banner.findByIdAndRemove(id);
  } catch (err) {
    return console.log(er);
  }
  if (!banner) {
    return res.status(500).json({ message: "Banner not Found" });
  }
  return res.status(200).json({ message: "Banner Deleted" });
};
