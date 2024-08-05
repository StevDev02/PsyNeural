import * as React from "react";

// Icons
import { SparklesAI } from "../custom/icons/SparklesAI";
// UI Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DropdownModels() {
  return (
    <div className="hidden sm:grid gap-3">
      <Select defaultValue="genesis">
        <SelectTrigger
          id="model"
          className="items-start [&_[data-description]]:hidden"
        >
          <SelectValue placeholder="Select a model" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="genesis">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <SparklesAI className="size-4" />
              <div className="grid gap-0.5">
                <p>
                  PsyNeural{" "}
                  <span className="font-medium text-foreground">Genesis</span>
                </p>
                <p className="text-sm" data-description>
                  Our fastest model for psychologist cases.
                </p>
              </div>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
