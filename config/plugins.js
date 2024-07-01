module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_W3zlS9Bz8to8Say4fgK0wrFTuaYm/CiBF2OFdNr",
      apiToken: "o9RbjMy93cCsNXBVuFVPPeNf",
      appFilter: "cart-wise",
      teamFilter: "team_7u9yugSp6d2Q0JmpWqgAfHEi",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});