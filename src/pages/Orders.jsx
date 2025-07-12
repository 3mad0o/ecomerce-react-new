import React, { useReducer, useState } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight, HiChevronDoubleRight } from "react-icons/hi";

import {
  keepPreviousData,
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useMemo } from "react";

import { fetchData } from "../services/fetchOrdersData";
import { Dropdown } from "../components/ui/Dropdown";
import { CiMenuBurger } from "react-icons/ci";
import { StatusesBox } from "../features/orders/StatusesBox";
import { useSearchParams } from "react-router";

export const Orders = () => {
  const rerender = useReducer(() => ({}), {})[1];
  const statuses = useMemo(
    () => [
      { label: "All", value: "" },
      { label: "Pending", value: "pending" },
      { label: "Processing", value: "processing" },
      { label: "Shipped", value: "shipped" },
      { label: "Delivered", value: "delivered" },
      { label: "Cancelled", value: "cancelled" },
    ],
    []
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  const columns = useMemo(
    () => [
      {
        accessorKey: "orderId",
        header: "Oreder ID",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "productsCount",
        header: "Products Count",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ cell, row }) => {
          return <Status status={cell.getValue()} />;
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "subTotal",
        header: "subTotal",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "tax",
        header: "Tax",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "grandTotal",
        header: "Grand Total",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        footer: (props) => props.column.id,
      },

      {
        accessorKey: "actions",
        header: "actions",
        cell: ({ cell, row }) => {
          return <Actions row={row} />;
        },
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const dataQuery = useQuery({
    queryKey: ["data", pagination, status],
    queryFn: () => fetchData(pagination, status),
    placeholderData: keepPreviousData,
  });

  const defaultData = useMemo(() => [], []);

  const table = useReactTable({
    data: dataQuery.data?.rows ?? defaultData,
    columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?.rowCount, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="container mx-auto px-4 sm:px-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Orders</h2>
        </div>

        <StatusesBox statuses={statuses} />

        <div className="flex flex-col gap-1">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal whitespace-nowrap">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          colSpan={header.colSpan}
                          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
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
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex items-center gap-2">
              <button
                className="border rounded p-1"
                onClick={() => table.firstPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <HiChevronDoubleLeft />
              </button>
              <button
                className="border rounded p-1"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <HiChevronLeft />
              </button>
              <button
                className="border rounded p-1"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <HiChevronRight />
              </button>
              <button
                className="border rounded p-1"
                onClick={() => table.lastPage()}
                disabled={!table.getCanNextPage()}
              >
                <HiChevronDoubleRight />
              </button>
            </div>

            {dataQuery.isFetching ? "Loading..." : null}

            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount().toLocaleString()}
              </strong>
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};
export const Status = ({ status }) => {
  const statusStyles = {
    pending: "bg-yellow-200 text-yellow-800",
    shipped: "bg-blue-200 text-blue-800",
    delivered: "bg-green-200 text-green-800",
    cancelled: "bg-red-200 text-red-800",
    returned: "bg-orange-200 text-orange-800",
  };
  return (
    <span className={`${statusStyles[status]} py-1 px-3 rounded-md`}>
      {status}
    </span>
  );
};

export const Actions = ({ row }) => {
  return (
    <Dropdown
      items={[
        { label: "View Details", link: `/orders/${row.original.orderId}` },
      ]}
      title={<CiMenuBurger className="text-2xl" />}
    />
  );
};
