/** True for links that leave the site (http, https). */
export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

/** Extra anchor attributes: external links open safely in a new tab. */
export function linkProps(href: string) {
  return isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {};
}
