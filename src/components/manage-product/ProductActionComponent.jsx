"use client";

import {
  CircleEllipsis,
  SquarePen,
  Trash2,
} from "lucide-react";
import {
  Button,
  Dropdown,
  Label,
} from "@heroui/react";
import { useState } from "react";
import { EditProductModalComponent } from "./EditProductModalComponent";
import { DeleteProductModalComponent } from "./DeleteProductModalComponent";
export function ProductActionComponent({ product, categories }) {
  const [mode, setMode] = useState(null);

  return (
    <>
      <Dropdown>
        <Button isIconOnly aria-label="Menu" variant="secondary">
          <CircleEllipsis />
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu onAction={(key) => setMode(key)}>
            <Dropdown.Section>
              <Dropdown.Item id="edit" textValue="Edit">
                <div className="flex h-8 gap-4 items-center pt-px">
                  <SquarePen className="size-4 shrink-0 text-muted" />
                  <Label className="text-muted">Edit</Label>
                </div>
              </Dropdown.Item>
              <Dropdown.Item id="delete" textValue="Delete">
                <div className="flex h-8 gap-4 items-center pt-px">
                  <Trash2 className="size-4 shrink-0 text-muted" />
                  <Label className="text-muted">Delete</Label>
                </div>
              </Dropdown.Item>
            </Dropdown.Section>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>

      <EditProductModalComponent
        product={product}
        categories={categories}
        isOpen={mode === "edit"}
        onClose={() => setMode(null)}
      />

      <DeleteProductModalComponent
        product={product}
        isOpen={mode === "delete"}
        onClose={() => setMode(null)}
      />
    </>
  );
}
