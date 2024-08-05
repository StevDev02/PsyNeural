import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Languages = [
  {
    label: "English US",
    value: "en",
  },
];

export function SelectLanguage() {
  return (
    <Select defaultValue="en">
      <div className="flex items-center justify-between gap-3 sm:gap-8 w-full">
        <p>Language</p>
        <SelectTrigger>
          <SelectValue placeholder="Select a Language..." />
        </SelectTrigger>
      </div>
      <SelectContent>
        <SelectGroup>
          {Languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              {language.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
