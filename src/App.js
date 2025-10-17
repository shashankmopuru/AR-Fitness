import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Yoga from "./pages/Yoga";
import Counter from "./components/counter";
import Landing from "./pages/landing.react";
import Login from "./pages/Login.react";
import Weightloss from "./pages/Weightloss.react";
import Weightgain from "./pages/Weightgain.react";
import Healthy from "./pages/Healthy.react";
import Virabhadrasana from "./components/virabhadrasana";
import Trikonasana from "./components/trikonasana";
import Workout from "./pages/Workout.react";
import AdhoMukhaSvanasana from "./components/AdhoMukhaSvanasana";
import { Container, Box, Typography } from "@mui/material";
import logo from "./assets/images/logo-with-text.svg";
import Diet from "./pages/Diet.react";
import BicepCurls from "./components/BicepCurls";
import PushUps from "./components/PushUps";
import Squats from "./components/Squats";
import BodyMeasurmnets from "./pages/BodyMeasurements.react";

function App() {
  const location = useLocation();

  // ✅ useEffect is the right place for DOM changes
  useEffect(() => {
    if (location.pathname === "/yoga" || location.pathname === "/bicepcurl") {
      const videoOutput = document.getElementsByClassName("input_video")[0];
      const canvas = document.getElementsByClassName("output_canvas")[0];

      if (videoOutput && canvas) {
        videoOutput.style.display = "flex";
        canvas.style.display = "flex";
      }
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bm" element={<BodyMeasurmnets />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Diet" element={<Diet />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/weightloss" element={<Weightloss />} />
        <Route path="/weightgain" element={<Weightgain />} />
        <Route path="/healthy" element={<Healthy />} />
        <Route path="/bicepcurls" element={<BicepCurls />} />
        <Route path="/squats" element={<Squats />} />
        <Route path="/pushups" element={<PushUps />} />
        <Route path="/crunches" element={<Counter exercise={"crunches"} />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/virabhadrasana" element={<Virabhadrasana />} />
        <Route path="/trikonasana" element={<Trikonasana />} />
        <Route path="/AdhoMukhaSvanasana" element={<AdhoMukhaSvanasana />} />
      </Routes>

      {/* ✅ footer section */}
      <Container
        maxWidth="false"
        sx={{
          display: "flex",
          justifyContent: { lg: "space-between", sm: "space-between", xs: "center" },
          alignItems: "center",
          height: "100%",
          width: "100%",
          flexDirection: { lg: "row", sm: "row", xs: "column" },
          color: "#fff",
          gap: { lg: "2rem", xs: "1rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { lg: 0, xs: "1rem" },
          }}
        >
          <img src={logo} alt="logo" width="60%" />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "100",
            fontSize: { lg: "1rem", sm: "1rem", xs: "0.8rem" },
            textAlign: "center",
          }}
        >
          © 2021{" "}
          <a href="/" className="link">
            <span style={{ color: "#F15C26" }}>AR FITNESS </span>
          </a>
          All rights reserved.
        </Typography>
      </Container>
    </>
  );
}

export default App;
