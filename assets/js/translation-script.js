var languageSelector = document.getElementById("language-selector");
var languageSelectorMovil = document.getElementById("language-selector-movil");

function replaceText(elementId, translationKey) {
  var element = document.getElementById(elementId);
  if (element) {
    element.innerText = window.translations[translationKey];
  }
}

function applyTranslations() {
  replaceText("company", "company");
  replaceText("passenger", "passenger");
  replaceText("doubts", "doubts");
  replaceText("we", "we");
  replaceText("extraButton", "extraButton");
  replaceText("heroButton-primary", "heroButton-primary");
  replaceText("heroButton-tertiary", "heroButton-tertiary");
  replaceText("hero_passenger_title", "hero_passenger_title");
  replaceText("hero_business_title", "hero_business_title");
  replaceText("features_passenger_title", "features_passenger_title");
  replaceText("feature_passenger_li_1", "feature_passenger_li_1");
  replaceText("feature_passenger_li_2", "feature_passenger_li_2");
  replaceText("feature_passenger_li_3", "feature_passenger_li_3");
  replaceText("feature_passenger_li_4", "feature_passenger_li_4");
  replaceText("feature_business_title", "feature_business_title");
  replaceText("feature_business_card_1_title", "feature_business_card_1_title");
  replaceText("feature_business_card_2_title", "feature_business_card_2_title");
  replaceText("feature_business_card_3_title", "feature_business_card_3_title");
  replaceText("feature_business_card_1_description", "feature_business_card_1_description");
  replaceText("feature_business_card_2_description", "feature_business_card_2_description");
  replaceText("feature_business_card_3_description", "feature_business_card_3_description");
  replaceText("video_title_a", "video_title_a");
  replaceText("video_title_b", "video_title_b");
  replaceText("video_passenger_subtitle", "video_passenger_subtitle");
  replaceText("video_passenger_description", "video_passenger_description");
  replaceText("questions_title_a", "questions_title_a");
  replaceText("questions_title_b", "questions_title_b");
  replaceText("questions_description", "questions_description");
  replaceText("questions_name", "questions_name");
  replaceText("questions_email", "questions_email");
  replaceText("questions_category", "questions_category");
  replaceText("questions_message", "questions_message");
  replaceText("questions_send", "questions_send");
  replaceText("we_title", "we_title");
  replaceText("we_member_1_info", "we_member_1_info");
  replaceText("we_member_2_info", "we_member_2_info");
  replaceText("we_member_3_info", "we_member_3_info");
  replaceText("we_member_4_info", "we_member_4_info");
  replaceText("we_member_5_info", "we_member_5_info");
  replaceText("we_member_1_name", "we_member_1_name");
  replaceText("FAQ_title", "FAQ_title");
  replaceText("FAQ_question_1", "FAQ_question_1");
  replaceText("FAQ_answer_1", "FAQ_answer_1");
  replaceText("FAQ_question_2", "FAQ_question_2");
  replaceText("FAQ_question_3", "FAQ_question_3");
  replaceText("privacy_policy", "privacy_policy");
  replaceText("cookie_policy", "cookie_policy");
  replaceText("terms_conditions", "terms_conditions");
  replaceText("legal", "legal");
  replaceText("connect_with_us", "connect_with_us");
  replaceText("pricing-company-title", "pricing-company-title");
  replaceText("pricing-company-subtitle", "pricing-company-subtitle");
  replaceText("plan-basic", "plan-basic");
  replaceText("plan-basic-price", "plan-basic-price");
  replaceText("basic-functionalities", "basic-functionalities");
  replaceText("weekly-statistics", "weekly-statistics");
  replaceText("1-user", "1-user");
  replaceText("limited-fleet-registration", "limited-fleet-registration");
  replaceText("no-priority-support", "no-priority-support");
  replaceText("pricing-button", "pricing-button");
  replaceText("plan-most-popular", "plan-most-popular");
  replaceText("plan-pro", "plan-pro");
  replaceText("plan-pro-price", "plan-pro-price");
  replaceText("complete-functionalities", "complete-functionalities");
  replaceText("annual-statistics", "annual-statistics");
  replaceText("5-users", "5-users");
  replaceText("unlimited-fleet-registration", "unlimited-fleet-registration");
  replaceText("email-support", "email-support");
  replaceText("plan-enterprice", "plan-enterprice");
  replaceText("plan-enterprice-price", "plan-enterprice-price");
  replaceText("unlimited-users", "unlimited-users");
  replaceText("24-7-email-support", "24-7-email-support");
  replaceText("pricing-passenger-title", "pricing-passenger-title");
  replaceText("pricing-passenger-subtitle", "pricing-passenger-subtitle");
  replaceText("plan-basic-passenger-price", "plan-basic-passenger-price");
  replaceText("trip-planner", "trip-planner");
  replaceText("line-schedule", "line-schedule");
  replaceText("time-location", "time-location");
  replaceText("next-arrival", "next-arrival");
  replaceText("ads", "ads");
  replaceText("plan-pro-passenger-price", "plan-pro-passenger-price");
  replaceText("next-arrivals", "next-arrivals");
  replaceText("arrival-updates", "arrival-updates");
  replaceText("route-progress", "route-progress");
  replaceText("ad-free", "ad-free");
}

languageSelector.addEventListener("change", function () {
  var selectedLanguage = languageSelector.value;
  var jsonFilePath = "assets/languages/" + selectedLanguage + ".json";
  fetch(jsonFilePath)
    .then((response) => response.json())
    .then((data) => {
      window.translations = data;
      applyTranslations();
    })
    .catch((error) => {
      console.error("Error fetching translations:", error);
    });
  languageSelectorMovil.value = selectedLanguage;
});

languageSelectorMovil.addEventListener("change", function () {
  var selectedLanguage = languageSelectorMovil.value;
  var jsonFilePath = "assets/languages/" + selectedLanguage + ".json";
  fetch(jsonFilePath)
    .then((response) => response.json())
    .then((data) => {
      window.translations = data;
      applyTranslations();
    })
    .catch((error) => {
      console.error("Error fetching translations:", error);
    });
  languageSelector.value = selectedLanguage;
});
