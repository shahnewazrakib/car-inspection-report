import { Modal } from "antd";
import React, { useEffect, useState } from "react";

const VideoPlayer = ({ playbackId, onClose }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (playbackId) {
      setOpen(true);
    }
  }, [playbackId]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <React.Fragment>
      <Modal
        open={isOpen}
        onCancel={handleClose}
        footer={null}
        destroyOnClose={true}
        width={600}
        closeIcon={null}
        classNames={{
          content: "!p-0"
        }}
      >
        <iframe
          src={`https://player.mux.com/${playbackId}?accent-color=%23ffc342&primary-color=%23ffffff`}
          style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </Modal>
    </React.Fragment>
  );
};
export default VideoPlayer;
