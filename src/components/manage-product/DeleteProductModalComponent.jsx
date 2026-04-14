import {Button,  Modal } from "@heroui/react";
import { DeleteProductAction } from "../../action/product.action";
import { useState } from "react";
export function DeleteProductModalComponent({ product, isOpen, onClose }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleDelete = async () => {
    setSubmitError("");
    setIsDeleting(true);
    try {
      const res = await DeleteProductAction(product.productId);
      if (res?.error) throw new Error(res.error);
      onClose();
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-sm">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Delete product</Modal.Heading>
              <p className="mt-1.5 text-sm text-muted">
                Are you sure you want to delete <strong>{product.name}</strong>? This action cannot be undone.
              </p>
            </Modal.Header>
            {submitError && (
              <div className="px-6">
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                  {submitError}
                </div>
              </div>
            )}
            <Modal.Footer>
              <Button variant="secondary" onPress={onClose}>Cancel</Button>
              <Button
                isDisabled={isDeleting}
                className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
                onPress={handleDelete}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}