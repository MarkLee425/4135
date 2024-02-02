"use client";

import React, { useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GiBattery100 } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

type RobotTableProps = {
  id: number;
  status: React.ReactNode;
  power: React.ReactNode;
  live_recording: React.ReactNode;
  testing: React.ReactNode;
  live_location: React.ReactNode;
};

const defaultData: RobotTableProps[] = [
  {
    id: 1,
    status: <TiTick />,
    power: <GiBattery100 />,
    live_recording: (
      <Link className="bg-red-500 rounded-md px-3 py-1" href={"/live-recording"}>
        Live Recording
      </Link>
    ),
    testing: (
      <Link className="bg-red-500 rounded-md px-3 py-1" href={"/testing"}>Testing</Link>
    ),
    live_location: (
      <Link className="bg-red-500 rounded-md px-3 py-1" href={"/live-location"}>Live Location</Link>
    ),
  },
];

const columnHelper = createColumnHelper<RobotTableProps>();

const columns = [
  columnHelper.accessor("id", {
    header: () => "Robot ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Status</span>,
  }),
  columnHelper.accessor("power", {
    header: () => "Power",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("live_recording", {
    header: () => <span>Live Recording</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("testing", {
    header: "Testing",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("live_location", {
    header: "Live Location",
    cell: (info) => info.renderValue(),
  }),
];

const page = () => {
  const [data, setData] = useState(() => [...defaultData]);
  const table = useReactTable({
    defaultColumn: {
      size: 400, //starting column size
      minSize: 100, //enforced during column resizing
      maxSize: 500, //enforced during column resizing
    },
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="min-w-[1200px] flex translate-x-[10%] mt-[5%] border py-8 pb-[40%]">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="translate-x-[6%] overflow-y-scroll">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default page;
