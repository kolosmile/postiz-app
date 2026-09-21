# SocialHub branding

This public fork is based on Postiz `v2.10.1` and keeps the upstream application structure and color scheme while applying a light SocialHub brand layer.

The customization includes:

- `social.hub` wordmark with three gray tones derived from the Studio website;
- `sh` square mark for compact navigation areas;
- `socialhub-favicon.svg` for the browser favicon;
- SocialHub labels in the authentication, billing, API, webhook, FAQ, and assistant UI;
- page titles and preview assets updated to use SocialHub branding.

## Updating from upstream

The `upstream` remote points to the original Postiz repository. To bring in a later upstream release:

```bash
git fetch upstream --tags
git checkout socialhub-v2.10.1
git merge upstream/<release-tag>
# resolve any conflicts, then review the branding files above
git push origin socialhub-v2.10.1
```

Keep the branding changes as a small, reviewable layer so future upstream updates do not require creating a new fork.

## License and source

Postiz is distributed under the GNU Affero General Public License v3.0. This repository contains the corresponding source for this customized deployment. See [LICENSE](./LICENSE) and the [GNU AGPL v3.0](https://www.gnu.org/licenses/agpl-3.0.html).
