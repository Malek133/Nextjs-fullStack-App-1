
// 'use client';

// import { UploadButton } from "@uploadthing/react";
// import type { OurFileRouter } from "@/app/api/uploadthing/core";

// export default function UploadButtonComponent({ onUploadComplete }: { onUploadComplete: (url: string) => void }) {
//   return (
//     <UploadButton<OurFileRouter>
//       endpoint="productImage"
//       onClientUploadComplete={(res) => {
//         console.log("Files: ", res);
//         if (res && res[0]) {
//           onUploadComplete(res[0].url);
//         }
//       }}
//       onUploadError={(error: Error) => {
//         alert(`ERROR! ${error.message}`);
//       }}
//     />
//   );
// }


'use client';

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export default function UploadButtonComponent({ onUploadComplete }: { onUploadComplete: (url: string) => void }) {
  return (
    <UploadButton<OurFileRouter>
      endpoint="productImage"
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        if (res && res[0]) {
          onUploadComplete(res[0].url);
        }
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    /> as React.ReactElement
  );
}