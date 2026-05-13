import Topbar from "../models/Topbar.js";



/* 🔥 GET TOPBAR */
export const getTopbar = async (
  req,
  res
) => {
  try {

    const topbar =
      await Topbar.findOne();

    if (!topbar) {
      return res.status(404).json({
        success: false,
        msg:
          "Topbar data not found ❌",
      });
    }

    res.status(200).json({
      success: true,
      topbar,
    });

  } catch (err) {

    console.log(
      "GET TOPBAR ERROR:",
      err.message
    );

    res.status(500).json({
      success: false,
      msg: "Server Error ❌",
    });
  }
};




/* 🔥 CREATE TOPBAR */
export const createTopbar = async (
  req,
  res
) => {
  try {

    let {
      offerText,
      marqueeText,
      buttonText,
    } = req.body;

    /* 🔥 REQUIRED CHECK */
    if (
      !offerText ||
      !marqueeText ||
      !buttonText
    ) {
      return res.status(400).json({
        success: false,
        msg:
          "All fields required ❌",
      });
    }

    /* 🔥 CLEAN DATA */
    offerText =
      offerText.trim();

    marqueeText =
      marqueeText.trim();

    buttonText =
      buttonText.trim();

    /* 🔥 CHECK EXISTING */
    const existingTopbar =
      await Topbar.findOne();

    if (existingTopbar) {
      return res.status(400).json({
        success: false,
        msg:
          "Topbar already exists ❌",
      });
    }

    /* 🔥 CREATE */
    const topbar =
      await Topbar.create({
        offerText,
        marqueeText,
        buttonText,
      });

    res.status(201).json({
      success: true,
      msg:
        "Topbar added successfully ✅",
      topbar,
    });

  } catch (err) {

    console.log(
      "CREATE TOPBAR ERROR:",
      err.message
    );

    res.status(500).json({
      success: false,
      msg: "Server Error ❌",
    });
  }
};




/* 🔥 UPDATE TOPBAR */
export const updateTopbar = async (
  req,
  res
) => {
  try {

    const topbar =
      await Topbar.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!topbar) {
      return res.status(404).json({
        success: false,
        msg:
          "Topbar not found ❌",
      });
    }

    res.status(200).json({
      success: true,
      msg:
        "Topbar updated ✅",
      topbar,
    });

  } catch (err) {

    console.log(
      "UPDATE TOPBAR ERROR:",
      err.message
    );

    res.status(500).json({
      success: false,
      msg: "Server Error ❌",
    });
  }
};




/* 🔥 DELETE TOPBAR */
export const deleteTopbar = async (
  req,
  res
) => {
  try {

    const topbar =
      await Topbar.findByIdAndDelete(
        req.params.id
      );

    if (!topbar) {
      return res.status(404).json({
        success: false,
        msg:
          "Topbar not found ❌",
      });
    }

    res.status(200).json({
      success: true,
      msg:
        "Topbar deleted successfully ✅",
    });

  } catch (err) {

    console.log(
      "DELETE TOPBAR ERROR:",
      err.message
    );

    res.status(500).json({
      success: false,
      msg: "Server Error ❌",
    });
  }
};