import { IDestination } from "../../types";
import { useState, useCallback, useEffect } from "react";
import { apiClient } from "../../../util/axios";

interface IAddCountries {
  saving: boolean;
  id: string | null;
  saveDestination: (destination: IDestination) => Promise<void>;
}
const url = "/Destination";
export const useSaveDestination = (
  props: IDestination,
  isSaving: boolean
): IAddCountries => {
  const [saving, setSaving] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const saveDestination = useCallback(async () => {
    setSaving(true);

    const resp = await apiClient
      .post<string>(url, props)
      .catch((error: any) => {
        setSaving(false);
        setId("");
        console.log(error);
      });

    if (resp && resp?.data) {
      setId(resp.data);
      setSaving(false);
    }
  }, [props]);
  useEffect(() => {
   
    if (isSaving) {
        console.log("Save gets called");
      saveDestination();
    }
  }, [saveDestination, isSaving]);
  return { saving, id, saveDestination };
};
