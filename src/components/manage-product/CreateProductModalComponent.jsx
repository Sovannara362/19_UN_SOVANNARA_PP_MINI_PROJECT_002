import { Button, Modal } from "@heroui/react";
import AddNewProductFormComponent from "./AddNewProductFormComponent";
import { getAllCategoriesService } from "../../services/category.service";
export async function CreateProductModalComponent() {
  const categories = await getAllCategoriesService();
  return (
    <Modal>
      <Button
        variant="secondary"
        className="rounded-full bg-lime-400 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-lime-300"
      >
        + Create Product
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Create New Product</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal
                adapts automatically when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <AddNewProductFormComponent categories={categories.payload} />
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
