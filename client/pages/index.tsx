import { ChangeEvent } from "react";
import MoHeader from "../layouts/MoHeader";
import request from "../server";

export default function Home() {
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
      <MoHeader />
      <input type="file" onChange={handleFileUpload} />
    </>
  );
}
