'use client';
import { Cookie, Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox";

export default function Privacy() {
  return (
    <><div className="flex  gap-2  p-4 font-semibold"><Cookie />Privacy Policy</div>
    <div className="flex mt-40 justify-center">
    <Alert className="  w-[500px]">
          <Terminal className="h-4 w-4" />
          <AlertTitle >Terms & Condition!</AlertTitle>
          <AlertDescription className="justify-center">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint accusamus iusto consequuntur nesciunt, modi veritatis odio incidunt dolorem, aperiam at dignissimos voluptate architecto sit nostrum exercitationem quo, quia recusandae suscipit?
          </AlertDescription>
          <div className="pt-2 flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
      </Alert>
        </div></>
  )
}
