import RcUpload from "rc-upload";

export type IBeforeUploadFileType = File | Blob | boolean | string;
export type IAction = string | ((file: RcFile) => string | PromiseLike<string>);
export interface IUploadProgressEvent extends Partial<ProgressEvent> {
  percent?: number;
}
export type IUploadRequestMethod = "POST" | "PUT" | "PATCH" | "post" | "put" | "patch";
export type IUploadRequestHeader = Record<string, string>;
export interface IUploadRequestError extends Error {
  status?: number;
  method?: IUploadRequestMethod;
  url?: string;
}
export interface IUploadRequestOption<T = any> {
  onProgress?: (event: IUploadProgressEvent) => void;
  onError?: (event: IUploadRequestError | ProgressEvent, body?: T) => void;
  onSuccess?: (body: T, xhr?: XMLHttpRequest) => void;
  data?: Record<string, unknown>;
  filename?: string;
  file: Exclude<IBeforeUploadFileType, File | boolean> | RcFile;
  withCredentials?: boolean;
  action: string;
  headers?: IUploadRequestHeader;
  method: IUploadRequestMethod;
}
export interface RcFile extends File {
  uid: string;
}

export interface IFile extends RcFile {
  status?: "success" | "error" | "uploading" | "removed";
  url?: string;
  errorMsg?: string;
  percent?: number;
}
export interface IUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onError" | "onProgress" | "onChange"> {
  name?: string;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  component?: React.JSXElementConstructor<any>;
  action?: IAction;
  method?: IUploadRequestMethod;
  directory?: boolean;
  data?: Record<string, unknown> | ((file: RcFile | string | Blob) => Record<string, unknown>);
  headers?: IUploadRequestHeader;
  accept?: string;
  multiple?: boolean;
  onBatchStart?: (
    fileList: {
      file: RcFile;
      parsedFile: Exclude<IBeforeUploadFileType, boolean>;
    }[]
  ) => void;
  onStart?: (file: RcFile) => void;
  onError?: (error: Error, ret: Record<string, unknown>, file: RcFile) => void;
  onSuccess?: (response: Record<string, unknown>, file: RcFile, xhr: XMLHttpRequest) => void;
  onProgress?: (event: IUploadProgressEvent, file: RcFile) => void;
  beforeUpload?: (file: RcFile, FileList: RcFile[]) => IBeforeUploadFileType | Promise<void | IBeforeUploadFileType>;
  customRequest?: (option: IUploadRequestOption) => void;
  withCredentials?: boolean;
  openFileDialogOnClick?: boolean;
  id?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;

  //
  prompt?: React.ReactNode;
  defaultFileList?: IFile[];
  fileList?: IFile[];
  onChange?: (file: IFile, fileList: IFile[]) => void;
  isSkeleton?: boolean;
}

export type IUploadRef = {
  upload?: RcUpload | null;
};
