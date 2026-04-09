"use client";
import React from "react";

import { Description, ErrorMessage, Label, Tag, TagGroup } from "@heroui/react";
import { useState, useMemo } from "react";
export default function ColorGroupTagComponent() {
  const [selected, setSelected] = useState(new Set());
  const isInvalid = useMemo(
    () => Array.from(selected).length === 0,
    [selected],
  );

  return (
    <TagGroup
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={(keys) => setSelected(keys)}
      size="lg"
      
    >
      <Label className="text-gray-900">Choose a color</Label>
        <TagGroup.List>
          <Tag className={`text-xl data-[selected=true]:bg-green-400 data-[selected=true]:text-black`}  id="green">green</Tag>
          <Tag className={`text-xl data-[selected=true]:bg-gray-400 data-[selected=true]:text-black`} id="gray">gray</Tag>
          <Tag className={`text-xl data-[selected=true]:bg-red-400 data-[selected=true]:text-black`} id="red">red</Tag>
          <Tag className={`text-xl data-[selected=true]:bg-blue-400 data-[selected=true]:text-black`} id="blue">blue</Tag>
        </TagGroup.List>
      <Description>Select one color</Description>
      <ErrorMessage>{isInvalid && <>Please select one color</>}</ErrorMessage>
    </TagGroup>
  );
}
