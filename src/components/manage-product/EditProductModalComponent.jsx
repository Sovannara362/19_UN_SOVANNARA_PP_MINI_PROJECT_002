"use client";
import {  Modal } from "@heroui/react";
import { UpdateProductFormComponent } from "./UpdateProductFormComponent";
import { UpdateProductAction } from "../../action/product.action";
import { useState } from "react";
export function EditProductModalComponent({ product, categories, isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (data) => {
    setSubmitError("");
    setIsSubmitting(true);
    try {
      const res = await UpdateProductAction(product.productId, data);
      if (res?.error) throw new Error(res.error);
      onClose();
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit product</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Update the details below and save your changes.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              {submitError && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 mb-4">
                  {submitError}
                </div>
              )}
              <UpdateProductFormComponent
                product={product}
                categories={categories}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}