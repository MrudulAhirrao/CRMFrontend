import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Building2 } from "lucide-react";
   
  const cnames = [
   
    {
      cname: "Meta",
      domain: "-",
      date: "11-12-2023",
      owner: "Meta",
    },
    {
      cname: "Google",
      domain: "-",
      date: "03-01-2024",
      owner: "Google",
    },
    {
      cname: "Microsoft",
      domain: "-",
      date: "18-09-2023",
      owner: "Microsoft",
    },
    {
      cname: "Tesla",
      domain: "-",
      date: "04-07-2022",
      owner: "Tesla",
    },
    {
      cname: "TCS",
      domain: "-",
      date: "03-02-2024",
      owner: "TCS",
    },
  ]
const companies = ()=>{
    return (
        <><div className="flex  gap-2  p-4 font-semibold"><Building2 className="animate-pulse"/>Companies</div>
        <Table>
            <TableCaption>A list of Companies</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]"> Company</TableHead>
                    <TableHead>Domain name</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead className="text-right">Creation Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {cnames.map((cname) => (
                    <TableRow key={cname.cname}>
                        <TableCell className="font-medium">{cname.cname}</TableCell>
                        <TableCell>{cname.domain}</TableCell>
                        <TableCell>{cname.owner}</TableCell>
                        <TableCell className="text-right">{cname.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table></>
    );
};
export default companies;