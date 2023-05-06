import React from "react";
import ModalBase from "./ModalBase";
import { Input, Select, Form, DatePicker, InputNumber } from "antd";
import currencies from "../../data/currency";
import departments from "../../data/departments";
import { layout } from "./formlLayout";
import { ProjectExpenseClaim } from "../../data/projectExpenseClaims";
import dayjs from "dayjs";

const { Option } = Select;

type EditClaimModalProps = {
  currentClaim: ProjectExpenseClaim;
};

export default function EditClaimModal(props: EditClaimModalProps) {
  const { currentClaim } = props;
  const [form] = Form.useForm();

  async function handleValidation() {
    const values = await form.validateFields();
    console.log(values);
    form.resetFields();
  }

  return (
    <ModalBase
      buttonText="Edit Claim"
      title="Edit Claim"
      onOk={handleValidation}
    >
      <Form {...layout} form={form} style={{ maxWidth: 600 }}>
        <Form.Item
          name="FirstName"
          initialValue="fn"
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          name="LastName"
          initialValue="ln"
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input disabled={true} />
        </Form.Item>
        <Form.Item initialValue={currentClaim.Purpose} name="Purpose" label="Purpose" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="ExpenseAmount"
          label="Expense Amount"
          initialValue={currentClaim.Amount}
          rules={[{ type: "number", required: true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="ExpenseDate"
          initialValue={dayjs(currentClaim.ExpenseDate)}
          label="Expense Date"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="Currency"
          label="Currency"
          initialValue={currentClaim.CurrencyID}
          rules={[{ required: true }]}
        >
          <Select placeholder="Select a currency">
            {currencies.map((c) => {
              return (
                <Option value={c.CurrencyID} key={c.CurrencyID}>
                  {c.CurrencyID}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="Department"
          label="Charge to Department"
          initialValue={currentClaim.ChargeToDefaultDept}
          rules={[{ required: true }]}
        >
          <Select placeholder="Select a department">
            {departments.map((d) => {
              return (
                <Option value={d.DepartmentCode} key={d.DepartmentCode}>
                  {d.DepartmentName}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
    </ModalBase>
  );
}
