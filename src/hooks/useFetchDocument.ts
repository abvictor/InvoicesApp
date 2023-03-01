import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase/config";

export const useFetchDocument = (docCollection: string, docId: string) => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const docRef = await doc(db, docCollection, docId);

        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
      } catch (error) {
        console.log(error);
      }
    };
    fetchInvoice();
  }, []);

  return { document };
};
