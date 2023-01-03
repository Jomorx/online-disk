import request from "@/server";
import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { incrementByAmount } from "@/store/countStore/countStore";

const Drive = () => {
  const value = useAppSelector(state => state.countStore.value);
  const dispatch = useAppDispatch();
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
      <h1>{value}</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        +1
      </button>
    </>
  );
};

export default Drive;
