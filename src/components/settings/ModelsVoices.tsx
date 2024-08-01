import * as React from "react";

// UI Components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

// Icons
import { Play } from "lucide-react";

// Models
const Models = [
  {
    label: "Genesis",
    value: "gn",
  },
];

export function ModelsVoices() {
  return (
    <Select defaultValue="gn">
      <div className="flex items-center justify-between gap-3 w-full">
        <p>Voice Model</p>
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline">
            <Play className="size-4" />
          </Button>
          <SelectTrigger>
            <SelectValue placeholder="Select a Voice..." />
          </SelectTrigger>
        </div>
      </div>
      <SelectContent>
        <SelectGroup>
          {Models.map((model) => (
            <SelectItem key={model.value} value={model.value}>
              {model.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
