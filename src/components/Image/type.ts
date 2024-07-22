export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: string | number;
  circle?: boolean;
  hiddenLoading?: boolean;
}
