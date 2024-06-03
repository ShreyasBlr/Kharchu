"use client";

import Iconify from "@/components/iconify";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function AddTransaction() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Dialog className="max-w-lg">
      <DialogTrigger asChild>
        <Button variant="link" className="px-0">
          <Iconify
            icon="solar:add-circle-bold"
            className="w-16 h-16"
            color={theme.colors.slate[0]}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[325px]">
        <DialogHeader className="mb-4">
          <DialogTitle>Add Transaction</DialogTitle>
        </DialogHeader>
        <DialogClose asChild>
          <button onClick={() => router.push("/dashboard/add-income")}>
            <div className="flex flex-col gap-4 justify-center items-center">
              <Image
                src={"/illustrations/income.png"}
                alt="logo"
                width={80}
                height={80}
              />
              <h2 className="text-center">Income</h2>
            </div>
          </button>
        </DialogClose>
        <Separator className="my-4" />
        <DialogClose asChild>
          <button onClick={() => router.push("/dashboard/add-expense")}>
            <div className="flex flex-col gap-4 justify-center items-center">
              <Image
                src={"/illustrations/expense.png"}
                alt="logo"
                width={80}
                height={80}
              />
              <h2>Expense</h2>
            </div>
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
