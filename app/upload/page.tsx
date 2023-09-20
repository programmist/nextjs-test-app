"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="uploaded image"
        />
      )}
      <CldUploadWidget
        uploadPreset="jy52onqx"
        options={{
          sources: ["local"],
          multiple: true,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#ffffff",
              sourceBg: "#f4f4f5",
              windowBorder: "#90a0b3",
              tabIcon: "#000000",
              inactiveTabIcon: "#555a5f",
              menuIcons: "#555a5f",
              link: "#0433ff",
              action: "#339933",
              inProgress: "#0433ff",
              complete: "#339933",
              error: "#cc0000",
              textDark: "#000000",
              textLight: "#fcfffd",
            },
            fonts: {
              default: null,
              "'Space Mono', monospace": {
                url: "https://fonts.googleapis.com/css?family=Space+Mono",
                active: true,
              },
            },
          },
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
