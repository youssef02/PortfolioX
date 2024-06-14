
import * as CV from "@/components/cv";
export const fetchFromPublic = async (filename: string): Promise<any> => {
    const response = await fetch(`/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}`);
    }
   const txt = JSON.stringify(await response.json());

    return JSON.parse(txt) as CV.CVData;
  };

  