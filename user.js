// Privacy & Tracking
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.clearOnShutdown_v2.downloads", false);
user_pref("privacy.clearOnShutdown_v2.formdata", true);

// Network Prefetching (Performance/Privacy)
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

// Browser Behavior
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.page", 3);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.autohideButton", false);
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.maxOpenBeforeWarn", 5);
user_pref("browser.search.context.loadInBackground", true);

// AI
user_pref("browser.ml.chat.nimbus", "ai-chatbot-page-summarization-mvp-treatment-a-callout-badge-rollout-v2:treatment-a-callout-badge");
user_pref("browser.ml.chat.page", true);
user_pref("browser.ml.chat.page.footerBadge", false);
user_pref("browser.ml.chat.page.menuBadge", false);
user_pref("browser.ml.chat.provider", "https://gemini.google.com");
user_pref("browser.ml.explain.enabled", true);
user_pref("browser.ml.rewrite.enabled", true);
user_pref("browser.ml.summarize.enabled", true);

// New Tab Page
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("browser.discovery.enabled", false);

// Sign-in/Password Manager
user_pref("signon.autofillForms", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.rememberSignons", false);

// Media
user_pref("media.eme.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// Sidebar
user_pref("sidebar.position_start", false);
user_pref("sidebar.visibility", "hide-sidebar");

// Misc
user_pref("findbar.highlightAll", true);
user_pref("accessibility.typeaheadfind.flashBar", 0);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);
