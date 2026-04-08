"use client";

import { Label, Radio, RadioGroup } from "@heroui/react";
import React from "react";

export function SizeGroupRadioComponent() {
  const [selection, setSelection] = React.useState("s");

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup
        defaultValue="s"
        name="plan-uncontrolled"
        onChange={(nextValue) => setSelection(nextValue)}
      >
        <Label>Choose a size</Label>
        <div className="flex gap-4">
          <Radio className={`border py-2 px-5 rounded-3xl`} value="s">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>S</Label>
            </Radio.Content>
          </Radio>
          <Radio className={`border py-2 px-5 rounded-3xl`} value="m">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>M</Label>
            </Radio.Content>
          </Radio>
          <Radio className={`border py-2 px-5 rounded-3xl`} value="l">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>L</Label>
            </Radio.Content>
          </Radio>
        </div>
      </RadioGroup>
      <p className="text-sm text-muted">
        selected size : <span className="font-medium">{selection}</span>
      </p>
    </div>
  );
}
