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
user_pref("browser.ml.chat.prompts.5", "{\"label\":\"riassumi\",\"id\":\"it-summarizer\",\"value\":\"Riassumi questo articolo seguendo questa struttura:  Punti principali:  [Primo punto chiave]  [Secondo punto chiave]  [Terzo punto chiave]  Sviluppi principali: [2-3-4 paragrafi brevi che approfondiscono i punti più importanti, includendo:  Contesto necessario per comprendere la notizia  Approfondimento dei punti chiave  Dati concreti e cifre rilevanti  Implicazioni o conseguenze della notizia]  Mantieni un tono oggettivo e neutrale. Lunghezza totale: circa 150-200 parole, ma se l'articolo è lungo e complesso in 1/3 del totale.\"}");
user_pref("browser.ml.chat.prompts.6", "{\"label\":\"spiega\",\"id\":\"it-explainer\",\"value\":\"Spiega questo articolo in modo chiaro e accessibile, come se stessi parlando con qualcuno che non conosce l'argomento: Di cosa parla: [1-2 frasi che spiegano l'argomento principale in termini semplici] Perché è importante: [Spiega perché questa notizia è rilevante e chi/cosa impatta] Come funziona/Cosa è successo: [2-3 paragrafi che spiegano: * Gli eventi o i concetti chiave usando analogie o esempi concreti * I termini tecnici tradotti in linguaggio quotidiano * La sequenza degli eventi in ordine logico * Le cause e gli effetti] Cosa significa per me/noi: [Spiega le conseguenze pratiche in modo concreto] Usa frasi brevi, evita gergo tecnico o spiegalo quando necessario. Tono: conversazionale ma informativo. Lunghezza: tra il 25% e  il 50% dell'articolo originale.\"}");

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
