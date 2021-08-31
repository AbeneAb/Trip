import axios, { CancelTokenSource } from "axios";
import { useEffect, useRef, useState } from "react";
import { apiClient } from "../../util/axios";

const url = "/Order";
debugger;
export interface IImmediate {
  immediate: boolean;
}
export interface IOrderList {
  totalPrice: number;
  isActive: boolean;
  createdDate: Date;
  orderItems: IOrderItem[];
  id: string;
  userName: string;
}
export interface IOrderItem {
  qty: number;
  name: string;
  price: number;
  id: string;
}

export interface IOrderListReturn {
  loading: boolean;
  data: IOrderList[] | null;
  execute: () => void;
}
export const useOrderList = (props: IImmediate): IOrderListReturn => {
  const cancelSource = useRef<CancelTokenSource | null>();
  const { immediate } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IOrderList[] | null>(null);
  const execute = async () => {
    console.log(`${immediate}`);
    setLoading(true);
    const resp = await apiClient
      .get<IOrderList[]>(url, {
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
  };

  useEffect(() => {
    cancelSource.current = axios.CancelToken.source();

    if (immediate) {
      execute();
    }
    return () => {
      cancelSource?.current?.cancel();
    };
  }, [immediate]);

  return { loading, data, execute };
};
