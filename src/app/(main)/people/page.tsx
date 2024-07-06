'use client ';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Copy, CreditCard,File, Linkedin, ListFilter, MoreVertical, Phone, Truck, Twitter } from "lucide-react";
import Link from "next/link";
export default function Peoplepage(){
  return <div className="flex items-center justify-center gap-2  p-4"><main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
  <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card
        className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
      >
        <CardHeader className="pb-3">
          <CardTitle>Your Tasks</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Introducing Our Dynamic Orders Dashboard for Seamless
            Management and Insightful Analysis.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild><Link href="/tasks">Check Your Tasks</Link></Button>
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          
        <CardTitle className="text-2xl">Task Progress</CardTitle>
          <CardDescription>Current Week </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            50% completed
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={50} aria-label="50% increase" />
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
       < CardTitle className="text-2xl">Task Progress</CardTitle>
        <CardDescription>Current Month </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            10% Completed
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={15} aria-label="15% increase" />
        </CardFooter>
      </Card>
    </div>
    <Tabs defaultValue="week">
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-7 gap-1 text-sm"
              >
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Fulfilled
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Declined
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Refunded
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <TabsContent value="week">
        <Card x-chunk="dashboard-06-chunk-3">  
          <CardHeader className="px-7">
            <CardTitle>Peoples</CardTitle>
                  </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Company
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Status
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-accent">
                  <TableCell>
                    <div className="font-medium">Mrudul Ahirrao</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      abc@gmail.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    TCS
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-23
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Olivia Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      olivia@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Infosys
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="outline">
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell className=" md:table-cell">
                    2023-06-24
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Noah Williams</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Wipro
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell className=" md:table-cell">
                    2023-06-25
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Noah Williams</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Wipro
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell className=" md:table-cell">
                    2023-06-25
                  </TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
  <div>
    <Card
      className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
    >
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Personal Details
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
            </Button>
          </CardTitle>
          <CardDescription>Comapany: TCS</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-8 w-8">
                <MoreVertical className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">General</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Name
              </span>
              <span>Mrudul Ahirrao</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Email 
              </span>
              <span>abc@gmail.com</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">City</span>
              <span>Pune</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Job Title</span>
              <span>Developer</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Social Media</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground"><Twitter className="h-4 w-4"/>Twitter</dt>
              <dd>Empty</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground"><Linkedin className="h-4 w-4" />Linkedin</dt>
              <dd>
                <a href="mailto:">Empty</a>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground"><Phone className="h-4 w-4" /> Phone</dt>
              <dd>
                <a href="tel:">+1 234 567 890</a>
              </dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
      </CardFooter>
    </Card>
  </div>
</main></div>
}