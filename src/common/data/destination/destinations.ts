import axios, { CancelTokenSource } from "axios";
import { useEffect, useRef, useState, useCallback } from "react";
import { apiClient } from "../../../util/axios";
import { IDestination } from "../../types";

const url = "/Destination";
debugger;
export interface IImmediate {
  immediate: boolean;
}

export interface IDestinationReturn {
  loading: boolean;
  data: IDestination[] | null;
  fetchDestination: () => Promise<void>;
}
export const useDestinationList = (props: IImmediate): IDestinationReturn => {
  const cancelSource = useRef<CancelTokenSource | null>();
  const { immediate } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IDestination[] | null>(null);
  const fetchDestination = useCallback(async () => {
    setLoading(true);
    const resp = await apiClient
      .get<IDestination[]>(url, {
        cancelToken: cancelSource?.current?.token,
      })
      .catch((reason: any) => {
        console.log(reason);
        setData(null);
        setLoading(false);
      });

    if (resp && resp?.data) {
      setData(resp.data);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    cancelSource.current = axios.CancelToken.source();

    if (immediate) {
      fetchDestination();
    }
    return () => {
      cancelSource?.current?.cancel();
    };
  }, [fetchDestination, immediate]);

  return { loading, data, fetchDestination };
};

