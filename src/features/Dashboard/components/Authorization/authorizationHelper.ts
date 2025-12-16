export const getAccessCodeFromUrl = (urlSearchParams: string) => {
  const urlParams = new URLSearchParams(urlSearchParams);
  const code = urlParams.get("code");
  return code;
};

export const getRedirectUri = (): string => {
  let site_url = window.location.href;
  site_url = site_url.substring(0, site_url.lastIndexOf("/"));

  const redirect_uri = site_url + "?spotify_redirect&";
  return redirect_uri;
};
