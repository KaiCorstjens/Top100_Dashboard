export const importAll = <T>(
  requireContext: __WebpackModuleApi.RequireContext
) => {
  const importedPictures: { default: T }[] = requireContext
    .keys()
    .filter((key) => key.match(/\.\//))
    .map(requireContext) as { default: T }[];
  return importedPictures;
};
