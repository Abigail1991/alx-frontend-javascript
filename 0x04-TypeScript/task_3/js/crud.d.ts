import { RowID, RowElement } from './interface';

export const insertRow: (row: RowElement) => RowID;
export const deleteRow: (rowID: RowID) => void;
export const updateRow: (rowID: RowID, row: RowElement) => RowID;
