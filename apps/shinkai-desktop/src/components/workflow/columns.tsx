import { Checkbox } from '@shinkai_network/shinkai-ui';
import { ColumnDef } from '@tanstack/react-table';

import { DataTableCell } from './data-table-cell';
import { DataTableColumnHeader } from './data-table-column-header';
// import { DataTableRowActions } from './data-table-row-actions';
import { Book } from './workflow-data';

export const columns: ColumnDef<Book>[] = [
  {
    id: 'select',
    maxSize: 50,
    header: ({ table }) => (
      <div className="h-full py-1.5">
        <Checkbox
          aria-label="Select all"
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={'Title'} />
    ),
    cell: ({ row }) => {
      return (
        <DataTableCell row={row} title={'Title'} value={row.original.title} />
      );
    },
  },
  {
    accessorKey: 'author',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={'Author'} />
    ),
    cell: ({ row }) => {
      return (
        <DataTableCell row={row} title={'Author'} value={row.original.author} />
      );
    },
  },
  {
    accessorKey: 'yearReleased',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={'Year'} />
    ),
    cell: ({ row }) => {
      return (
        <DataTableCell
          row={row}
          title={'Year'}
          value={row.original.yearReleased.toString()}
        />
      );
    },
  },
  {
    accessorKey: 'pages',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={'# Pages'} />
    ),
    cell: ({ row }) => {
      return (
        <DataTableCell
          row={row}
          title={'# Pages'}
          value={row.original.pages.toString()}
        />
      );
    },
  },
  {
    accessorKey: 'genre',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={'Genre'} />
    ),
    cell: ({ row }) => {
      return (
        <DataTableCell row={row} title={'Genre'} value={row.original.genre} />
      );
    },
  },

  {
    accessorKey: 'summary',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={'Summary'} />
    ),
    cell: ({ row }) => {
      return (
        <DataTableCell
          row={row}
          title={'Summary'}
          value={row.original.summary}
        />
      );
    },
  },
];
