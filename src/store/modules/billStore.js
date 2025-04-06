// 账单列表相关的store
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const billStore = createSlice({
  name: "bill",
  // 数据状态state
  initialState: {
    billList: [],
  },
  reducers: {
    // 同步修改方法
    setBillList(state, action) {
      state.billList = action.payload;
    },
    addBill(state, action) {
      state.billList.push(action.payload);
    },
  },
});

// 结构 actionCreater函数
const { setBillList, addBill } = billStore.actions;

// 编写异步
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8888/list");
    dispatch(setBillList(res.data));
  };
};

const addBillList = (data) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8888/list", data);
    dispatch(addBill(res.data));
  };
};

export { getBillList, addBillList };

// 导出reducer
const reducer = billStore.reducer;

export default reducer;
