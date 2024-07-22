const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;

const encodeSVGUrl = (data: string) => {
  const namespaced = data
    .replace(/background-image:\s{0,}url\(/, ``)
    .replace(/["']{0,}data:image\/svg\+xml,/, ``)
    .replace(/["']\);{0,}$/, ``);
  const escaped = namespaced.replace(symbols, encodeURIComponent);
  return `data:image/svg+xml,${escaped}`;
};

export default encodeSVGUrl;
