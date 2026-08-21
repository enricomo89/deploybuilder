/**
 * Where the download buttons point.
 *
 * `releases/latest/download/<asset>` always resolves to the newest published
 * release, so shipping a new version means publishing a release — no edit to
 * this site. The asset name must stay stable across releases for that to hold;
 * it is the name produced by `electron-forge make` in the app repository.
 *
 * GitHub serves these with `Content-Disposition: attachment`, so the click
 * downloads the file instead of navigating to it.
 */
const REPO_URL = "https://github.com/enricomo89/deploybuilder";

/** Windows installer (Squirrel). */
export const DOWNLOAD_URL_WINDOWS = `${REPO_URL}/releases/latest/download/Deploy-Setup.exe`;

/**
 * All published builds. Used by the secondary call to action, since macOS and
 * Linux builds are not published yet.
 */
export const RELEASES_URL = `${REPO_URL}/releases/latest`;
