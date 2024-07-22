import { forwardRef } from "react";
import RcUpload from "rc-upload";
import React from "react";
import { IFile, IUploadProps, IUploadRef } from "./type";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { cx } from "../../utils";
import { CloseIcon, FileIcon, SuccessOutlinedIcon, UploadIcon } from "../../icons";
import { opacify } from "polished";
import { DOMAIN, REQUEST_URLS } from "../../config";
import { useAccount, useLocalization } from "../../hooks";
import { useControllableValue } from "ahooks";
import { Progress } from "../Progress";
import { Button } from "../Button";
import { uploadFile } from "../../services";
import Skeleton from "../Skeleton/Skeleton";

const Wrapper = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    [`.${theme.prefixCls}-upload`]: {
      width: "100%",
      height: 134,
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: theme.system.blueGray[4],
      // borderRadius: 10,
      cursor: "pointer",
      padding: 16,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      [`:not(.${theme.prefixCls}-upload-disabled)`]: {
        ":hover": {
          borderColor: theme.system.primary[6]
        }
      }
    },
    [`.${theme.prefixCls}-upload-disabled`]: {
      borderColor: theme.system.blueGray[3],
      background: theme.system.blueGray[2],
      cursor: "not-allowed",
      [`.${theme.prefixCls}-upload-icon`]: {
        "::after": {
          background: opacify(-0.4, theme.system.blueGray[3])
        },
        svg: {
          color: theme.system.gray[5]
        }
      },
      span: {
        color: theme.system.gray[5]
      }
    },

    [`.${theme.prefixCls}-skeleton`]: {
      marginTop: 24
    }
  };
});

const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => opacify(-0.8, theme.system.blueGray[3])};
  position: relative;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.system.gray[9]};
  font-size: 20px;
  margin-bottom: 12px;
  ::after {
    content: "";
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${({ theme }) => opacify(-0.4, theme.system.blueGray[3])};
    position: absolute;
    top: 6px;
    left: 6px;
  }
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

const Content = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.system.gray[9]};
  & > span:first-of-type {
    color: ${({ theme }) => theme.system.primary[6]};
    font-weight: 600;
  }
`;

const Prompt = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.system.gray[7]};
`;

const UploadList = styled.div`
  display: grid;
  gap: 24px;
  margin-top: 24px;
`;

const UploadItem = styled.div`
  position: relative;
  width: 100%;

  .${({ theme }) => theme.prefixCls}-line-progress {
    height: 28px;
    background: ${({ theme }) => theme.system.blueGray[2]};
    /* border-radius: 6px; */
  }
  .${({ theme }) => theme.prefixCls}-line-progress-percent {
    background: ${({ theme }) => theme.system.green[2]};
  }
  .${({ theme }) => theme.prefixCls}-upload-item-close-btn {
    display: none;

    color: ${({ theme }) => theme.system.gray[7]};
    :hover {
      color: ${({ theme }) => theme.system.gray[9]};
    }
  }
  &[data-status="success"] {
    cursor: pointer;
  }
  &[data-status="success"],
  &[data-status="error"] {
    .${({ theme }) => theme.prefixCls}-line-progress-percent {
      display: none;
    }
  }
  &[data-status="success"],
  &[data-status="uploading"] {
    :hover {
      .${({ theme }) => theme.prefixCls}-upload-item-status {
        display: none;
      }
      .${({ theme }) => theme.prefixCls}-upload-item-close-btn {
        display: inline-flex;
      }
    }
  }
  &[data-status="error"] {
    color: ${({ theme }) => theme.system.red[5]};
    .${({ theme }) => theme.prefixCls}-line-progress {
      border: 1px solid ${({ theme }) => theme.system.red[5]};
    }
    .${({ theme }) => theme.prefixCls}-upload-item-name {
      color: ${({ theme }) => theme.system.red[5]};
      svg {
        color: ${({ theme }) => theme.system.red[5]};
      }
    }
  }
`;

const UploadItemContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
`;

const Error = styled.div`
  padding-top: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.system.red[5]};
`;

const Name = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.system.gray[9]};
  font-size: 14px;
  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.system.gray[9]};
    margin-right: 8px;
  }
`;

const ItemSuccess = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.system.green[5]};
`;

const ItemProgress = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.system.gray[7]};
`;

const ItemError = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.system.red[5]};
  font-size: 12px;
  svg {
    font-size: 16px;
    cursor: pointer;
  }

  .${({ theme }) => theme.prefixCls}-btn {
    padding: 0;
    height: 100%;
    :first-of-type {
      margin-right: 6px;
    }
  }
`;

const CloseBtn = styled(Button)`
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  height: 100%;
`;

const Upload = forwardRef<IUploadRef, IUploadProps>((props, ref) => {
  const {
    className,
    style,
    children,
    prompt,
    onError,
    onChange,
    isSkeleton,
    defaultFileList,
    fileList,
    onStart,
    onSuccess,
    onProgress,
    ...restProps
  } = props;
  const theme = useTheme();
  const { t } = useLocalization();
  const uploadRef = React.useRef<RcUpload>(null);
  const { token } = useAccount();
  const [uploadList, setUploadList] = useControllableValue<IFile[]>(props, {
    defaultValuePropName: "defaultFileList",
    valuePropName: "fileList",
    defaultValue: [],
    trigger: ""
  });

  React.useImperativeHandle(ref, () => ({
    upload: uploadRef.current
  }));

  const handleRemove = (uid: string) => {
    const file = uploadList.find((p) => p.uid === uid) as IFile;
    file.status = "removed";
    const fileList = uploadList.filter((p) => p.uid !== uid);
    setUploadList(fileList);
    onChange?.(file, fileList);
  };

  const handleReUpload = async (_file: IFile) => {
    let file = _file;
    let fileList = uploadList.map((item) => {
      if (item.uid === _file.uid) {
        item.status = "uploading";
        item.percent = 0;
        item.errorMsg = undefined;
        file = item;
      }
      return item;
    });
    setUploadList(fileList);
    onChange?.(file, fileList);

    const formData = new FormData();
    formData.append("file", _file);

    const onUploadProgress = (progressEvent: any) => {
      fileList = uploadList.map((item) => {
        if (item.uid === _file.uid) {
          item.percent = 100 * (progressEvent.loaded / progressEvent.total);
          file = item;
        }
        return item;
      });
      setUploadList(fileList);
      onChange?.(file, fileList);
    };

    const result = await uploadFile(formData, onUploadProgress);

    fileList = uploadList.map((item) => {
      if (item.uid === _file.uid) {
        if (result) {
          if (result.success) {
            item.status = "success";
          } else {
            item.status = "error";
            item.errorMsg = result.message || "";
          }
        }

        file = item;
      }
      return item;
    });
    setUploadList(fileList);
    onChange?.(file, fileList);
  };

  const handlePreview = (_file: IFile) => {
    if (_file.status === "success") {
      const blob = new window.Blob([_file], {
        type: _file.type + "; charset=utf-8"
      });
      const href = URL.createObjectURL(blob);
      window.open(href);
      URL.revokeObjectURL(href);
    }
  };

  return (
    <Wrapper className={cx(`${theme.prefixCls}-upload-wrapper`, className)} style={style}>
      <RcUpload
        prefixCls={theme.prefixCls + "-upload"}
        ref={uploadRef}
        headers={{
          "x-cf-token": token || "",
          "X-Requested-With": ""
        }}
        onStart={async (_file) => {
          const file = _file as IFile;
          file.status = "uploading";
          const fileList = [...uploadList, file];
          setUploadList((p) => {
            return [...p, file];
          });
          onChange?.(file, fileList);
          onStart?.(_file);
        }}
        onSuccess={(_response, _file, _xhr) => {
          let file = _file;
          const fileList = uploadList.map((item) => {
            if (item.uid === file.uid) {
              if (_response.success && _response.data) {
                item.status = "success";
                item.url = _response.data as string;
              }
              file = item;
            }
            return item;
          });
          setUploadList(fileList);
          onChange?.(file, fileList);
          onSuccess?.(_response, _file, _xhr);
        }}
        onError={(_error, _ret, _file) => {
          let file = _file;
          const fileList = uploadList.map((item) => {
            if (item.uid === file.uid) {
              if (item.uid === file.uid) {
                item.status = "error";
                item.errorMsg = _ret.message as string;
              }
              file = item;
            }
            return item;
          });
          setUploadList(fileList);
          onChange?.(file, fileList);
          onError?.(_error, _ret, file);
        }}
        onProgress={(e, _file) => {
          let file: IFile = _file;
          const fileList = uploadList.map((r) => {
            if (r.uid === _file.uid) {
              r.percent = e.percent;
              file = r;
            }
            return r;
          });
          setUploadList(fileList);
          onChange?.(file, fileList);
          onProgress?.(e, _file);
        }}
        {...restProps}
      >
        <Icon className={`${theme.prefixCls}-upload-icon`}>
          <UploadIcon />
        </Icon>

        <Content className={`${theme.prefixCls}-upload-text`}>
          <span>{t("Drag and drop")}</span>&nbsp;
          <span>{t("or browse")}</span>
        </Content>
        {!!prompt && <Prompt className={`${theme.prefixCls}-upload-prompt`}>{prompt}</Prompt>}
        {children}
      </RcUpload>

      <Skeleton loading={isSkeleton} animation>
        {!!uploadList.length && (
          <UploadList className={`${theme.prefixCls}-upload-list`}>
            {uploadList?.map((p) => (
              <UploadItem key={p.uid} data-status={p.status} className={`${theme.prefixCls}-upload-item`}>
                <Progress type="line" percent={p.percent} />
                <UploadItemContent
                  data-status={p.status}
                  className={`${theme.prefixCls}-upload-item-content`}
                  onClick={() => {
                    handlePreview(p);
                  }}
                >
                  <Name className={`${theme.prefixCls}-upload-item-name`}>
                    <FileIcon />
                    {p.name}
                  </Name>

                  {p.status === "success" && (
                    <ItemSuccess
                      className={`${theme.prefixCls}-upload-item-status ${theme.prefixCls}-upload-item-success`}
                    >
                      <SuccessOutlinedIcon />
                    </ItemSuccess>
                  )}
                  {p.status === "uploading" && (
                    <ItemProgress
                      className={`${theme.prefixCls}-upload-item-status ${theme.prefixCls}-upload-item-uploading`}
                    >
                      {p.percent?.toFixed(0) || 0}%
                    </ItemProgress>
                  )}
                  {p.status === "error" && (
                    <ItemError className={`${theme.prefixCls}-upload-item-status ${theme.prefixCls}-upload-item-error`}>
                      <Button
                        colorScheme="danger"
                        variant="text"
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleReUpload(p);
                        }}
                      >
                        {t("Try again")}
                      </Button>
                      <CloseBtn
                        colorScheme="danger"
                        variant="text"
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleRemove(p.uid);
                        }}
                      >
                        <CloseIcon className={`${theme.prefixCls}-upload-item-error-close-btn`} />
                      </CloseBtn>
                    </ItemError>
                  )}

                  <CloseBtn
                    colorScheme="default"
                    variant="text"
                    size="small"
                    className={`${theme.prefixCls}-upload-item-close-btn`}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      handleRemove(p.uid);
                    }}
                  >
                    <CloseIcon />
                  </CloseBtn>
                </UploadItemContent>
                {p.status === "error" && !!p.errorMsg && (
                  <Error className={`${theme.prefixCls}-upload-item-error`}>{p.errorMsg}</Error>
                )}
              </UploadItem>
            ))}
          </UploadList>
        )}
      </Skeleton>
    </Wrapper>
  );
});

Upload.defaultProps = {
  draggable: true,
  prompt: "custom prompt",
  action: DOMAIN?.API + REQUEST_URLS.UPLOAD_FILE,
  withCredentials: true,
  multiple: false
};

export default Upload;
