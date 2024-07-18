import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, backgroundColor: "#000"}}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}}>
        <SideBar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff"}}>
          Copyright 2024 Evil Corp
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          New <span style={{ color: "#F32503"}}>videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed
