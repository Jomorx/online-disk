import express from "express";
import multiparty from "multiparty";
import path from "path";
const router = express.Router();
const PORT = 8888,
  HOST = "http://127.0.0.1",
  HOSTNAME = `${HOST}:${PORT}`;
const config = {
  maxFieldsSize: 200 * 1024 * 1024,
  uploadDir: path.resolve(__dirname, "../files"),
};
const multiparty_upload = (req, auto) => {
  typeof auto !== "boolean" ? (auto = false) : null;

    // if (auto) config.uploadDir = uploadDir;
  return new Promise<{ files: { file: File }; fields: { fileName: string[] } }>(
    async (resolve, reject) => {
      new multiparty.Form(config).parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          fields,
          files,
        });
      });
    }
  );
};

// 单文件上传处理「FORM-DATA」
router.post("/upload_single", async (req, res) => {
  try {
    let { files } = await multiparty_upload(req, true);
    let file = (files.file && files.file[0]) || {};
    console.log(file.fileName);
    
    res.send({
      code: 0,
      codeText: "upload success",
      originalFilename: file.originalFilename,
      servicePath: file.path.replace(__dirname, HOSTNAME),
    });
  } catch (err) {
    res.send({
      code: 1,
      codeText: err,
    });
  }
});
export default router;
