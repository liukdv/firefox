// Firefox Custom User Preferences
// Extracted from prefs.js - Only user-modified, exportable settings
// ============================================
// Privacy & Security Settings
// ============================================

// Privacy Protection
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("browser.contentblocking.category", "custom");
user_pref("dom.security.https_only_mode_ever_enabled", true);

// Password Management
user_pref("signon.autofillForms", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.rememberSignons", false);

// Clear on Shutdown
user_pref("privacy.clearOnShutdown_v2.downloads", false);
user_pref("privacy.clearOnShutdown_v2.formdata", true);

// ============================================
// Performance & Network Settings
// ============================================

// Disable Prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);

// ============================================
// UI Customization
// ============================================

// Tabs & Windows
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.maxOpenBeforeWarn", 5);
user_pref("browser.tabs.groups.smart.userEnabled", false);
user_pref("browser.startup.page", 3); // Restore previous session

// Vertical Tabs & Sidebar
user_pref("sidebar.revamp", true);
user_pref("sidebar.verticalTabs", true);
user_pref("sidebar.position_start", false);

// Downloads
user_pref("browser.download.autohideButton", false);
user_pref("browser.download.useDownloadDir", false); // Always ask where to save

// Search
user_pref("browser.search.context.loadInBackground", true);

// New Tab Page
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// ============================================
// Features & Functionality
// ============================================

// AI Features
user_pref("browser.ml.chat.page", true);
user_pref("browser.ml.explain.enabled", true);
user_pref("browser.ml.rewrite.enabled", true);
user_pref("browser.ml.summarize.enabled", true);
user_pref("browser.ml.chat.provider", "https://gemini.google.com");

// Media
user_pref("media.eme.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// PDF
user_pref("pdfjs.enableAltText", true);

// Forms
user_pref("dom.forms.autocomplete.formautofill", true);

// ============================================
// Developer & Advanced Settings
// ============================================

// about:config warning
user_pref("browser.aboutConfig.showWarning", false);

// Developer Tools
user_pref("devtools.webconsole.input.autocomplete", false);
user_pref("devtools.webconsole.input.eagerEvaluation", false);

// Custom CSS Support
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// ============================================
// Miscellaneous
// ============================================

// Findbar
user_pref("findbar.highlightAll", true);

// Type Ahead Find
user_pref("accessibility.typeaheadfind.flashBar", 0);

// Discovery
user_pref("browser.discovery.enabled", false);

// Extensions Pocket
user_pref("extensions.pocket.showHome", false);

// Crash Reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", true);
