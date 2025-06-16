const video = require("../Modals/video");

exports.uploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink, videoType, thumbnail } = req.body;

    const videoupload = new video({
      user: req.user._id,
      title,
      description,
      videoLink,
      videoType,
      thumbnail,
    });

    await videoupload.save();

    res.status(201).json({ success: "true", videoupload });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllVideo = async (req, res) => {
  try {
    const videos = await video
      .find()
      .populate("user", "channelName profilePic userName createdAt");
    res.status(200).json({ success: "true", videos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getvedioById = async (req, res) => {
  try {
    let { id } = req.params;
    const singleVideo = await video
      .findById(id)
      .populate("user", "channelName profilePic userName createdAt");
    res.status(200).json({ success: "true", videos: singleVideo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllvideoByUserID = async (req, res) => {
  try {
    let { userId } = req.params;
    const videoList = await video
      .find({ user: userId })
      .populate("user", "channelName profilePic userName createdAt about");
    res.status(200).json({ success: "true", videos: videoList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
