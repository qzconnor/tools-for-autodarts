export interface IBoard {
  connected: boolean;
  event: string;
  boardId: string | null;
  numThrows: number;
  status: string;
}

export const defaultBoardData: IBoard = {
  connected: false,
  event: "",
  boardId: null,
  numThrows: 0,
  status: "",
};

export const AutodartsToolsBoardData: WxtStorageItem<IBoard, any> = storage.defineItem(
  "local:board-data",
  {
    defaultValue: defaultBoardData,
  },
);
