"use client";

import useUploadModal from "@/hooks/useUploadModal";

import Modal from "./modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();

    return (
        <Modal
            title="Uplaod Modal Title"
            description="Upload Modal Description"
            isOpen={uploadModal.isOpen}
            onChange={() => {}}
        >
            Upload Content
        </Modal>
    );
}

export default UploadModal;
