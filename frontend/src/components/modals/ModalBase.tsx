import React, { useState } from "react";
import { Button, Modal } from "antd";

type ModalBaseProps = {
  onOk?: () => Promise<void>;
  onCancel?: () => void;
  children: React.ReactNode;
  buttonText: string;
  title?: string;
};

function ModalBase(props: ModalBaseProps): JSX.Element {
  const { children, title, buttonText, onCancel, onOk } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (onOk) {
      await onOk();
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonText}
      </Button>
      <Modal
        title={title ?? "Modal"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalBase;
