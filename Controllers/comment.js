const comment = require("../Modals/comment");

exports.addComment = async (req, res) => {
  try {
    let { video, message } = req.body;

    const newComment = new comment({ user: req.user._id, message, video });
    await newComment.save();
    res.status(201).json({
      message: "success",
      comment: newComment,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getcommentByvideoId = async (req, res) => {
  try {
    let { videoId } = req.params;
    const comments = await comment
      .find({ video: videoId })
      .populate("user", "channelName profilePic userName createdAt");

    res.status(201).json({
      message: "success",
      comments,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


