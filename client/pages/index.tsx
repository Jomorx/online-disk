import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import MoHeader from "../layouts/MoHeader";
import { request } from "../server";

export default function Home() {
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const { name } = file;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", name);
    request.post("/upload/upload_single", {
      body: formData,
    });
  };
  return (
    <>
      <MoHeader></MoHeader>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={e=>{
        axios.get("").then(()=>{
          
        })
      }}></button>
    </>
  );
}

