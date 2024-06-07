"use client";

import DatePicker from "@/components/date-picker";
import Iconify from "@/components/iconify";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const AddExpenseForm = () => {
  const [transactionDate, setTransactionDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const formData = new FormData(form);
      const formDataObj = Object.fromEntries(formData.entries());
      console.log(formDataObj);
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };

  return (
    <Card className="w-full p-3">
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 p:1">
          <div className="grid w-full items-center gap-1.5">
            <DatePicker
              value={transactionDate}
              onChange={(date) => {
                setTransactionDate(date);
              }}
              label="Transaction Date"
            />
            <Input
              className="hidden"
              id="date"
              name="date"
              defaultValue={transactionDate}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-md p-1" htmlFor="amount">
              Amount
            </Label>
            <Input
              type="number"
              inputMode="numeric"
              id="amount"
              name="amount"
              placeholder="Enter amount"
              className="text-md h-12 py-4"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-md p-1" htmlFor="category">
              Category
            </Label>
            <Select id="category" name="category">
              <SelectTrigger className="w-full text-md h-12 py-4">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light" className="text-md h-10 py-2">
                  Light
                </SelectItem>
                <SelectItem value="dark" className="text-md h-10 py-2">
                  Dark
                </SelectItem>
                <SelectItem value="system" className="text-md h-10 py-2">
                  System
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-md p-1" htmlFor="description">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter description"
              className="text-md py-4"
            />
          </div>
          <Button type="submit" className="text-md h-12 py-4 mt-3">
            <Iconify icon="ph:plus-bold" />
            &nbsp; ADD
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default AddExpenseForm;
