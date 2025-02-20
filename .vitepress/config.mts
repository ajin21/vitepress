import { defineConfig } from "vitepress";
	export default defineConfig({

  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.png"
      }
    ]
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/"
      },
      {
        "text": "关于",
        "link": "/about"
      },
      {
        "text": "友链",
        "link": "/contact"
      }
    ],
    "sidebar": [
      {
        "text": "每日分享",
        "link": "/global/每日分享"
      },
      {
        "text": "2025",
        "items": [
          {
            "text": "2024-5",
            "link": "/global/2025/2024-5"
          },
          {
            "text": "2024-6",
            "link": "/global/2025/2024-6"
          },
          {
            "text": "2024-7",
            "link": "/global/2025/2024-7"
          },
          {
            "text": "index",
            "link": "/global/2025/index"
          }
        ]
      },
      {
        "text": "文档",
        "items": [
          {
            "text": "写作符号",
            "link": "/global/文档/写作符号"
          }
        ]
      }
    ],
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/vuejs/vitepress"
      }
    ],
    "externalLinkIcon": false,
    "i18nRouting": true,
    "logo": "\\images\\logo.png",
    "outline": {
      "level": 2,
      "label": "文章目录"
    },
    "search": {
      "provider": "local",
      "options": {
        "appId": "",
        "apiKey": "",
        "indexName": "",
        "locales": {
          "zh": {
            "placeholder": "搜索文档",
            "translations": {
              "button": {
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "清除查询条件",
                  "resetButtonAriaLabel": "清除查询条件",
                  "cancelButtonText": "取消",
                  "cancelButtonAriaLabel": "取消"
                },
                "startScreen": {
                  "recentSearchesTitle": "搜索历史",
                  "noRecentSearchesText": "没有搜索历史",
                  "saveRecentSearchButtonTitle": "保存至搜索历史",
                  "removeRecentSearchButtonTitle": "从搜索历史中移除",
                  "favoriteSearchesTitle": "收藏",
                  "removeFavoriteSearchButtonTitle": "从收藏中移除"
                },
                "errorScreen": {
                  "titleText": "无法获取结果",
                  "helpText": "你可能需要检查你的网络连接"
                },
                "footer": {
                  "selectText": "选择",
                  "navigateText": "切换",
                  "closeText": "关闭",
                  "searchByText": "搜索提供者"
                },
                "noResultsScreen": {
                  "noResultsText": "无法找到相关结果",
                  "suggestedQueryText": "你可以尝试查询",
                  "reportMissingResultsText": "你认为该查询应该有结果？",
                  "reportMissingResultsLinkText": "点击反馈"
                }
              }
            }
          },
          "en": {
            "placeholder": "Search docs",
            "translations": {
              "button": {
                "buttonText": "Search docs",
                "buttonAriaLabel": "Search docs"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "Clear query",
                  "resetButtonAriaLabel": "Clear query",
                  "cancelButtonText": "Cancel",
                  "cancelButtonAriaLabel": "Cancel"
                },
                "startScreen": {
                  "recentSearchesTitle": "Recent searches",
                  "noRecentSearchesText": "No recent searches",
                  "saveRecentSearchButtonTitle": "Save search",
                  "removeRecentSearchButtonTitle": "Remove search",
                  "favoriteSearchesTitle": "Favorites",
                  "removeFavoriteSearchButtonTitle": "Remove from favorites"
                },
                "errorScreen": {
                  "titleText": "Unable to fetch results",
                  "helpText": "You may want to check your network connection"
                },
                "footer": {
                  "selectText": "select",
                  "navigateText": "navigate",
                  "closeText": "close",
                  "searchByText": "Search by"
                },
                "noResultsScreen": {
                  "noResultsText": "No results for",
                  "suggestedQueryText": "You can try searching for",
                  "reportMissingResultsText": "You think it should have results?",
                  "reportMissingResultsLinkText": "Click here to report it"
                }
              }
            }
          }
        }
      }
    },
    "langMenuLabel": "多语言",
    "returnToTopLabel": "回到顶部",
    "sidebarMenuLabel": "菜单",
    "darkModeSwitchLabel": "主题",
    "lightModeSwitchTitle": "切换到浅色模式",
    "darkModeSwitchTitle": "切换到深色模式",
    "editLink": {
      "text": "在 GitHub 上编辑此页面",
      "pattern": "https://github.com"
    },
    "docFooter": {
      "prev": "上一页",
      "next": "下一页"
    },
    "siteTitle": "小古宝藏库",
    "footer": {
      "message": "测试",
      "copyright": ""
    }
  },
  "title": "小古宝藏库",
  "description": "小古宝藏库",
  "srcDir": "./docs",
  "assetsDir": "static",
  "sitemap": {
    "hostname": "https://example.com",
    "lastmodDateOnly": false
  },
  "locales": {},
  "cacheDir": "./.vitepress/cache",
  "titleTemplate": "持续收集资源",
  "lang": "en-US",
  "base": "/",
  "outDir": "./.vitepress/dist",
  "cleanUrls": true,
  "lastUpdated": true,
  "rewrites": {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  }
});
