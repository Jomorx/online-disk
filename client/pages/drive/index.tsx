import request from "@/server";
import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";

const index = () => {
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const { name } = file;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", name);
    request.post("/upload/upload_single", formData);
  };
  return (
    <>
      <input type="file" onChange={handleFileUpload} />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </>
  );
};

export default index;
